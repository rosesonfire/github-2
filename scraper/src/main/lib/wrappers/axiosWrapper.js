import { createDefensivePromise } from './../../utils'

/**
 * A wrapper for the axios http library
 * @param {object} axios the core axios library
 * @param {object} Rx the Rx library
 * @param {number} maxPollTries the maximum polls to try to get the response
  * @param {number} pollingInterval time interval between polling requests
 */
export default ({ axios, Rx, maxPollTries, pollingInterval }) => ({

  get: axios.get.bind(axios),

  postWithPolling: (url, data) =>
    createDefensivePromise(async (resolve, reject) => {
      const postResponse = await axios.post(url, data)
        .catch(e => e.response || e)

      if (postResponse.status === 202) {
        // Request has been accepted for processing
        const requestToken = postResponse.data.requestToken
        const _pollResult = {
          requestToken,
          locked: false,
          completed: false,
          succeeded: false,
          error: null
        }

        Rx.Observable
          .interval(pollingInterval)
          .take(maxPollTries)
          .map(_ => _pollResult)
          .map(pollResult => {
            if (!(pollResult.locked) && !(pollResult.completed)) {
              pollResult.locked = true
              axios.post(url, { requestToken }).catch(e => e.response || e)
                .then(pollResponse => {
                  if (pollResponse.status === 200) {
                    // successfully posted data
                    pollResult.completed = true
                    pollResult.succeeded = true
                  } else if (pollResponse.status === 202) {
                    // still processing
                    pollResult.completed = false
                    pollResult.locked = true
                  } else if (pollResponse.status === 500) {
                    // failed to post data
                    pollResult.completed = true
                    pollResult.succeeded = false
                    pollResult.error = new Error(`Failed: ${pollResponse.data}`)
                  } else if (pollResponse.status === 404) {
                    // requestToken not found
                    pollResult.completed = true
                    pollResult.succeeded = false
                    pollResult.error =
                      new Error(`RequestID (${requestToken}) not found`)
                  } else {
                    // unknown error
                    pollResult.completed = true
                    pollResult.succeeded = false
                    pollResult.error =
                      new Error(`${pollResponse.status}: ${pollResponse.data}`)
                  }
                })
                .catch(err => {
                  pollResult.completed = true
                  pollResult.succeeded = false
                  pollResult.error = err
                })
            }

            return pollResult
          })
          .takeWhile(pollResult => !(pollResult.completed))
          .takeLast(1)
          .map(pollResult => resolve({
            requestToken: pollResult.requestToken,
            succeeded: pollResult.succeeded,
            error: pollResult.error }))
          // unknown errors
          .catch(err => reject(err))
          // This can happen if maxPollTries are exhausted
          .finally(_ => reject('Failed to poll back response'))
          .subscribe()
      } else if (postResponse.status === 503) {
        // Request queue is overloaded
        reject(new Error('Request queue is overloaded'))
      } else {
        // Unknown error
        reject(new Error(postResponse))
      }
    })
})
