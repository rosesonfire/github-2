import xmlToJsonConverter from './../../main/lib/xmlToJsonConverter'
import { parseString } from 'xml2js'

exports = module.exports = () => {
  let xmlToJsonConverterInstance = null

  try {
    const converter = ({ xml }) => new Promise((resolve, reject) => {
      try {
        parseString(xml, (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
        })
      } catch (e) {
        reject(e)
      }
    })
    xmlToJsonConverterInstance = xmlToJsonConverter({ converter })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }

  return xmlToJsonConverterInstance
}

exports['@require'] = []
exports['@singleton'] = true
