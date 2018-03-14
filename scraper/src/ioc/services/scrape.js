import { createNewInstance } from './../iocHelper'
import scrape from './../../main/services/scrape'
import config from './../../config'

exports = module.exports = createNewInstance({
  instanceConstructor: scrape,
  configuration: {
    url: config.scraper.endpoint
  },
  dependencyConfig: {
    getBaseUrl: 'services/getBaseUrl',
    fetchData: 'services/fetchData',
    convertXMLToJSON: 'services/convertXMLToJSON',
    saveData: 'services/saveData'
  }
})
