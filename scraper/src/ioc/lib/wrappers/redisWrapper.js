import { createNewInstance } from './../../iocHelper'
import redisWrapper from './../../../main/lib/wrappers/redisWrapper'
import redis from 'redis'

exports = module.exports = createNewInstance({
  instanceConstructor: redisWrapper,
  dependencyInstances: {
    redis: redis.createClient.bind(redis)
  }
})
