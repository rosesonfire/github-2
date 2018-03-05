import { createNewInstance } from './../iocHelper'
import xmlToJsonConverter from './../../main/lib/xmlToJsonConverter'
import { parseString } from 'xml2js'

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

exports = module.exports = createNewInstance({
  instanceConstructor: xmlToJsonConverter,
  dependencyInstances: { converter }
})
