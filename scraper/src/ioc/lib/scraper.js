import { createNewInstance } from './../iocHelper'
import scraper from './../../main/lib/scraper'
import { scraperConfig } from './../../config'

exports = module.exports = createNewInstance({
  instanceConstructor: scraper,
  configuration: {
    url: scraperConfig.endpoint
  },
  dependencyConfig: {
    baseUrlGetter: 'lib/baseUrlGetter',
    dataFetcher: 'lib/dataFetcher',
    xmlToJsonConverter: 'lib/xmlToJsonConverter',
    odm: 'lib/odm/redisODM'
  }
})
