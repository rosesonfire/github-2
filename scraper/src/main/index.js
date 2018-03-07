import Rx from 'rxjs'

import { dependencies } from './../ioc'
import { createDefensivePromise } from './utils'
import config from './../config'

// Start scrapping
createDefensivePromise(async (resolve, reject) => {
  const scrape = await dependencies.scrape

  Rx.Observable
    .interval(config.scraper.fetchInterval)
    // eslint-disable-next-line no-console
    .map(_ => scrape().catch(er => console.error(er)))
    .reduce((resultA, resultB) => Promise.all([resultA, resultB]))
    .map(resolve)
    .catch(reject) // this should be handled by another observable
    .finally(resolve)
    .subscribe()
}).catch(e => {
  // eslint-disable-next-line no-console
  console.error(e)
}).finally(async () => {
  const redisClient = await dependencies.redisClient

  await redisClient.quit()
})
