import axios from 'axios'
import Rx from 'rxjs'

import { createNewInstance } from './../../iocHelper'
import axiosWrapper from './../../../main/lib/wrappers/axiosWrapper'
import config from './../../../config'

exports = module.exports = createNewInstance({
  instanceConstructor: axiosWrapper,
  configuration: {
    maxPollTries: config.scraper.maxPollTries,
    pollingInterval: config.scraper.pollingInterval
  },
  dependencyInstances: {
    axios,
    Rx
  }
})
