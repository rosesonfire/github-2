// Creates a new promise object
export default (executorFunc) =>
  new Promise((resolve, reject) => {
    try {
      Promise.resolve(executorFunc(resolve, reject)).catch(err => reject(err))
    } catch (e) {
      reject(e)
    }
  })
