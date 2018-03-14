import { createDefensivePromise } from './../utils'

// TODO: this is not going to work because
//    1. the sleep is synchronous (verify though..)
//    2. the internal promises don't get resolved before going to
//       next sleep cycle... :( (verify though..)

// Start scrapping
export default ({ Rx, scrape, fetchInterval }) => () =>
  createDefensivePromise((resolve, reject) =>
    Rx.Observable
      .interval(fetchInterval)
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
          .catch(er => console.error(er))))
