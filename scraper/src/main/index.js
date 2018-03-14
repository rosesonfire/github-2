import { dependencies } from './../ioc'

dependencies.stream
  .then(stream => stream())
  // eslint-disable-next-line no-console
  .catch(e => console.error(e))
