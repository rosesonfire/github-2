import { createNewInstance } from './../iocHelper'
import convertXMLToJSON from './../../main/services/convertXMLToJSON'

exports = module.exports = createNewInstance({
  instanceConstructor: convertXMLToJSON,
  dependencyConfig: {
    converter: 'lib/wrappers/xml2jsWrapper'
  }
})
