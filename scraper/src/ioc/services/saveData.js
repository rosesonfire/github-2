import { createNewInstance } from './../iocHelper'
import saveData from './../../main/services/saveData'
import config from './../../config'

exports = module.exports = createNewInstance({
  instanceConstructor: saveData,
  configuration: {
    url: `http://${config.dataAPI.host}:${config.dataAPI.port}` +
         `${config.dataAPI.path}`
  },
  dependencyConfig: {
    http: 'lib/wrappers/axiosWrapper'
  }
})
