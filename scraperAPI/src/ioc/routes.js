import { createNewInstance } from './iocHelper'
import routes from './../main/routes'

exports = module.exports = createNewInstance({
  instanceConstructor: routes,
  dependencyConfig: {
    writeDataController: 'controllers/writeDataController'
  }
})
