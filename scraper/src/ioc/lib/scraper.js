import scraper from './../../main/lib/scraper'
import { scraperConfig } from './../../config'

exports = module.exports = (baseUrlGetter, dataFetcher, xmlToJsonConverter,
  redisODM) => {
  let scraperInstance = null

  try {
    const url = scraperConfig.endpoint
    const odm = redisODM

    scraperInstance = scraper(
      { url, baseUrlGetter, dataFetcher, xmlToJsonConverter, odm })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }

  return scraperInstance
}

exports['@require'] = ['lib/baseUrlGetter', 'lib/dataFetcher',
  'lib/xmlToJsonConverter', 'lib/odm/redisODM']
exports['@singleton'] = true
