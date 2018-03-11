// implement timeout
// test for invalid url
// authentication and secret keys
// test if response changes
// should not directly send the requestID
/**
 * Creates a response buffer
 * @param Number requestBufferLimit the size of the buffer
 * @param {Number} ttl the maximum time (in milliseconds) to live for each async
 *                     task
 */
const createResponseBuffer = (requestBufferLimit, ttl) => {
  const responseBuffer = {
    _buffer: {}
  }
  const requestIDs = Array(requestBufferLimit).fill(0)
    .map((value, index) => index)

  // Removes resolved and timedout buffered responses
  // from the response buffer
  responseBuffer.clean = () => {
    const now = Date.now()
    const buffer = responseBuffer._buffer
    Object.keys(buffer).forEach(requestID => {
      if (now - buffer[requestID].creationTime > ttl) {
        delete buffer[requestID]
      }
    })
  }

  // Gets the id of an available slot in the buffer
  responseBuffer.getNewID = () => {
    responseBuffer.clean()

    const buffer = responseBuffer._buffer

    return requestIDs.find(id => !(id in buffer))
  }

  // Pushes a new bufferedResponse into the responseBuffer
  responseBuffer.push = (requestID, bufferedResponse) => {
    responseBuffer._buffer[requestID] = bufferedResponse
  }

  // Pops an existing bufferedResponse from the responseBuffer
  responseBuffer.get = (requestID) => responseBuffer._buffer[requestID]

  // Pops an existing bufferedResponse from the responseBuffer
  responseBuffer.remove = (requestID) =>
    delete responseBuffer._buffer[requestID]

  return responseBuffer
}

// Create a buffered response to be added to the response buffer
const createBufferedResponse = () => {
  const bufferedResponse = {
    completed: false,
    succeeded: false,
    response: null,
    error: null,
    creationTime: Date.now()
  }
  // Called once the underlying async task succeeds
  bufferedResponse.resolve = (response) => {
    bufferedResponse.completed = true
    bufferedResponse.succeeded = true
    bufferedResponse.response = response
  }
  // Called once the underlying async task fails
  bufferedResponse.reject = (error) => {
    bufferedResponse.completed = true
    bufferedResponse.succeeded = false
    bufferedResponse.error = error
  }

  return bufferedResponse
}

// Set the relevant method into the response object
const decorateResponseObject = (res, bufferedResponse) => {
  res.setBufferedResponse = (asyncTask) => {
    if (!asyncTask.then || !asyncTask.catch) {
      // If the underlying task is not asynchronous, the throw an error
      throw new Error('Task must be a promise')
    }
    asyncTask
      .then(bufferedResponse.resolve)
      .catch(bufferedResponse.reject)
  }
}

const handleRequestForNewTask = (res, next, responseBuffer) => {
  const requestID = responseBuffer.getNewID()

  if (requestID === undefined) {
    res.status(503).json({ error: 'Request queue is overloaded.' })
  } else {
    const bufferedResponse = createBufferedResponse()

    responseBuffer.push(requestID, bufferedResponse)
    decorateResponseObject(res, bufferedResponse)
    next()
    res.status(202).json({ requestID })
  }
}

const handleRequestForBufferedTask = (requestID, res, responseBuffer) => {
  const bufferedResponse = responseBuffer.get(requestID)

  if (bufferedResponse) {
    if (bufferedResponse.completed) {
      responseBuffer.remove(requestID)

      if (bufferedResponse.succeeded) {
        // test for cases where response is not an object
        res.status(200).json(bufferedResponse.response)
      } else {
        res.status(500).json(bufferedResponse.error)
      }
    } else {
      res.sendStatus(202)
    }
  } else {
    res.sendStatus(404)
  }
}

/**
 * The RequestBuffer middleware
 * @param Number requestBufferLimit the size of the buffer
 * @param Number ttl the maximum time (in milliseconds) to live for each async
 *               task
 */
export default ({ requestBufferLimit, ttl }) => {
  const responseBuffer = createResponseBuffer(requestBufferLimit, ttl)

  return (req, res, next) => {
    if (req.body.requestID === undefined) {
      handleRequestForNewTask(res, next, responseBuffer)
    } else {
      const requestID = req.body.requestID

      handleRequestForBufferedTask(requestID, res, responseBuffer)
    }
  }
}