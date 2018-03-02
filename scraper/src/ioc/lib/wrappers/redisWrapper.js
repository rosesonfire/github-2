import redisWrapper from './../../../main/lib/wrappers/redisWrapper'
import redis from 'redis'

exports = module.exports = () => {
  let redisWrapperInstance = null

  try {
    const redisClientCreator = redis.createClient.bind(redis)
    redisWrapperInstance = redisWrapper({ redis: redisClientCreator })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }

  return redisWrapperInstance
}

exports['@require'] = []
exports['@singleton'] = true
