import redisODM from './../../../main/lib/odm/redisODM'
import { dbConfig } from '../../../config'

exports = module.exports = (redisWrapper) => {
  let redisODMInstance = null

  try {
    const redis = redisWrapper
    const { host, port } = dbConfig

    redisODMInstance = redisODM({ redis })({ host, port })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }

  return redisODMInstance
}

exports['@require'] = ['lib/wrappers/redisWrapper']
exports['@singleton'] = true
