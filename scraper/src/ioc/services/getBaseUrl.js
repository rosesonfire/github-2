import url from 'url'

import { createNewInstance } from './../iocHelper'
import getBaseUrl from './../../main/services/getBaseUrl'

exports = module.exports = createNewInstance({
  instanceConstructor: getBaseUrl,
  dependencyInstances: {
    urlParser: url.parse.bind(url)
  }
})
