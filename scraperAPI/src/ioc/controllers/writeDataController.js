import { createNewInstance } from './../iocHelper'
import writeDataController from './../../main/controllers/writeDataController'

exports = module.exports = createNewInstance({
  instanceConstructor: writeDataController,
  dependencyConfig: {
    writeDataService: 'services/writeDataService'
  }
})
