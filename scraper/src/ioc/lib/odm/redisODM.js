import redisODM from './../../../main/lib/odm/redisODM'

exports = module.exports = (redisWrapper) => {
  let redisODMInstance = null

  try {
    redisODMInstance = redisODM({ redis: redisWrapper })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }

  return redisODMInstance
}

exports['@require'] = ['ilb/wrappers/redisWrapper']
exports['@singleton'] = true
