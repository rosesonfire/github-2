import { dependencies } from './../ioc'

const startAPI = async () => {
  const app = await dependencies.app

  app.listen()
}

startAPI()
  // eslint-disable-next-line no-console
  .catch(err => console.error(err))
  .finally(async () => {
    // const redisClient = await dependencies.redisClient

    // redisClient.quit()
  })
// ============

// import { dependencies } from './../ioc'
// import express from 'express'
// import bodyParser from 'body-parser'

// const startAPI = async () => {
//   // const app = await dependencies.app
//   const app = express()

//   app.use(bodyParser.json())
//   app.use(bodyParser.urlencoded())

//   app.use((req, res, next) => {
//     next()
//     console.log('here')
//   })

//   app.use((req, res, next) => {
//     next()
//   })

//   app.get('/here', (req, res) => {
//     res.json({
//       tata: 3
//     })
//   })

//   app.listen(8080)
// }

// startAPI()
//   // eslint-disable-next-line no-console
//   .catch(err => console.error(err))
//   .finally(async () => {
//     // const redisClient = await dependencies.redisClient

//     // redisClient.quit()
//   })
