import { createNewInstance } from './../iocHelper'
import requestBuffer from './../../main/middlewares/requestBuffer'
import { scraperApi } from './../../config'

exports = module.exports = createNewInstance({
  instanceConstructor: requestBuffer,
  configuration: {
    requestBufferLimit: scraperApi.requestBuffer.bufferLimit,
    ttl: scraperApi.requestBuffer.ttl
  }
})
