import dataFetcher from './../../main/lib/dataFetcher'
import axios from 'axios'

exports = module.exports = () => {
  let dataFetcherInstance = null

  try {
    const httpGetter = axios.get.bind(axios)
    dataFetcherInstance = dataFetcher({ httpGetter })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }

  return dataFetcherInstance
}

exports['@require'] = []
exports['@singleton'] = true
