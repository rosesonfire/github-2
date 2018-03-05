// Creates a new promise object
export const createDefensivePromise = (executorFunc) =>
  new Promise((resolve, reject) => {
    try {
      executorFunc(resolve, reject)
    } catch (e) {
      reject(e)
    }
  })
