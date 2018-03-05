import { createNewInstance } from './../iocHelper'
import scraper from './../../main/services/scraper'
import { scraperConfig } from './../../config'

exports = module.exports = createNewInstance({
  instanceConstructor: scraper,
  configuration: {
    url: scraperConfig.endpoint
  },
  dependencyConfig: {
    baseUrlGetter: 'services/baseUrlGetter',
    dataFetcher: 'services/dataFetcher',
    xmlToJsonConverter: 'services/xmlToJsonConverter',
    odm: 'lib/odm/redisODM'
  }
})
