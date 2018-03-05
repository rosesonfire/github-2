import { createNewInstance } from './../iocHelper'
import xmlToJsonConverter from './../../main/services/xmlToJsonConverter'

exports = module.exports = createNewInstance({
  instanceConstructor: xmlToJsonConverter,
  dependencyConfig: {
    converter: 'lib/wrappers/xml2jsWrapper'
  }
})
