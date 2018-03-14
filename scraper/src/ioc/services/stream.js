import Rx from 'rxjs'

import { createNewInstance } from './../iocHelper'
import stream from './../../main/services/stream'
import config from './../../config'

exports = module.exports = createNewInstance({
  instanceConstructor: stream,
  configuration: {
    fetchInterval: config.scraper.fetchInterval
  },
  dependencyInstances: {
    Rx
  },
  dependencyConfig: {
    scrape: 'services/scrape'
  }
})
