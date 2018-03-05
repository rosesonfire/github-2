import { createNewInstance } from './../../iocHelper'
import redisODM from './../../../main/lib/odm/redisODM'
import { dbConfig } from '../../../config'

exports = module.exports = createNewInstance({
  instanceConstructor: redisODM,
  configuration: {
    host: dbConfig.host,
    port: dbConfig.port
  },
  dependencyConfig: {
    redis: 'lib/wrappers/redisWrapper'
  }
})
