import redis from 'redis'

import { createNewInstance } from './../../iocHelper'
import redisClientWrapper from './../../../main/lib/wrappers/redisClientWrapper'
import { dbConfig } from '../../../config'

exports = module.exports = createNewInstance({
  instanceConstructor: redisClientWrapper,
  configuration: {
    host: dbConfig.host,
    port: dbConfig.port
  },
  dependencyInstances: {
    redis: redis
  }
})
