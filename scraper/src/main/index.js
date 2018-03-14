// TODO: this is not going to work because
//    1. the sleep is synchronous (verify though..)
//    2. the internal promises don't get resolved before going to
//       next sleep cycle... :( (verify though..)
import Rx from 'rxjs'

import { dependencies } from './../ioc'
import { createDefensivePromise } from './utils'
import config from './../config'

// Start scrapping
createDefensivePromise(async (resolve, reject) => {
  const scrape = await dependencies.scrape

  Rx.Observable
    .interval(config.scraper.fetchInterval)
    // .take(10) // used while testing
    .map(_ => scrape())
    // eslint-disable-next-line no-console
    .catch(e => console.error(e))
    // .takeLast(1) // used while testing
    // .map(resolve) // used while testing
    .subscribe(response =>
      response
        // eslint-disable-next-line no-console
        .then(response => console.log(response))
        // eslint-disable-next-line no-console
        .catch(er => console.error(er)))
})
  // eslint-disable-next-line no-console
  .catch(e => console.error(e))
  // .then(response => console.log(response)) // used while testing
