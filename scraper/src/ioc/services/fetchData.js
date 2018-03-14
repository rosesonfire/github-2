import { createNewInstance } from './../iocHelper'
import fetchData from './../../main/services/fetchData'

exports = module.exports = createNewInstance({
  instanceConstructor: fetchData,
  dependencyConfig: {
    http: 'lib/wrappers/axiosWrapper'
  }
})
