import { createNewInstance } from './../iocHelper'
import writeDataService from './../../main/services/writeDataService'

exports = module.exports = createNewInstance({
  instanceConstructor: writeDataService,
  dependencyConfig: {
    odm: 'lib/odm/redisODM'
  }
})
