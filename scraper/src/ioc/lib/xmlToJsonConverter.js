import xmlToJsonConverter from './../../main/lib/xmlToJsonConverter'
import { parseString } from 'xml2js'

exports = module.exports = () => {
  let xmlToJsonConverterInstance = null

  try {
    const converter = parseString
    xmlToJsonConverterInstance = xmlToJsonConverter({ converter })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }

  return xmlToJsonConverterInstance
}

exports['@require'] = []
exports['@singleton'] = true
