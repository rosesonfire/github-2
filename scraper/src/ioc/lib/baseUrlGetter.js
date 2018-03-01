import baseUrlGetter from './../../main/lib/baseUrlGetter'
import url from 'url'

exports = module.exports = () => {
  let baseUrlGetterInstance = null

  try {
    const urlParser = url
    baseUrlGetterInstance = baseUrlGetter({ urlParser })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }

  return baseUrlGetterInstance
}

exports['@require'] = []
exports['@singleton'] = true
