import { createNewInstance } from './../iocHelper'
import { createDefensivePromise } from './../../main/utils'
import xmlToJsonConverter from './../../main/lib/xmlToJsonConverter'
import { parseString } from 'xml2js'

const converter = ({ xml }) => createDefensivePromise((resolve, reject) => {
  parseString(xml, (err, result) => {
    if (err) {
      reject(err)
    } else {
      resolve(result)
    }
  })
})

exports = module.exports = createNewInstance({
  instanceConstructor: xmlToJsonConverter,
  dependencyInstances: { converter }
})
