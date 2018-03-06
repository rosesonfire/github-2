import { createNewInstance } from './../iocHelper'
import scrape from './../../main/services/scrape'
import { scraperConfig } from './../../config'

exports = module.exports = createNewInstance({
  instanceConstructor: scrape,
  configuration: {
    url: scraperConfig.endpoint
  },
  dependencyConfig: {
    getBaseUrl: 'services/getBaseUrl',
    fetchData: 'services/fetchData',
    convertXMLToJSON: 'services/convertXMLToJSON',
    odm: 'lib/odm/redisODM'
  }
})
