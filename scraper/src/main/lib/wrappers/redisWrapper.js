// Replaces the redis client default functions with promise oriented functions
export default ({ redis }) => ({ host, port }) => {
  const client = redis({ host, port })
  return {
    hmset: (...args) => new Promise((resolve, reject) => {
      try {
        client.hmset(...args, (err, replies) => {
          if (err) {
            reject(err)
          } else {
            resolve(replies)
          }
        })
      } catch (e) {
        reject(e)
      }
    })
  }
}
