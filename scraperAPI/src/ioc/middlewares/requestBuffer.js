import { createNewInstance } from './../iocHelper'
import requestBuffer from './../../main/middlewares/requestBuffer'
import config from './../../config'

exports = module.exports = createNewInstance({
  instanceConstructor: requestBuffer,
  configuration: {
    requestBufferLimit: config.scraperApi.requestBuffer.bufferLimit,
    ttl: config.scraperApi.requestBuffer.ttl
  }
})
