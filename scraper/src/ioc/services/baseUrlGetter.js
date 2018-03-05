import { createNewInstance } from './../iocHelper'
import baseUrlGetter from './../../main/services/baseUrlGetter'
import url from 'url'

exports = module.exports = createNewInstance({
  instanceConstructor: baseUrlGetter,
  dependencyInstances: {
    urlParser: url.parse.bind(url)
  }
})