import { createNewInstance } from './../iocHelper'
import getBaseUrl from './../../main/services/getBaseUrl'
import url from 'url'

exports = module.exports = createNewInstance({
  instanceConstructor: getBaseUrl,
  dependencyInstances: {
    urlParser: url.parse.bind(url)
  }
})
