import xml2js from 'xml2js'

import { createNewInstance } from './../../iocHelper'
import xml2jsWrapper from './../../../main/lib/wrappers/xml2jsWrapper'

exports = module.exports = createNewInstance({
  instanceConstructor: xml2jsWrapper,
  dependencyInstances: {
    xml2js
  }
})
