import { createNewInstance } from './../iocHelper'
import dataFetcher from './../../main/lib/dataFetcher'
import axios from 'axios'

exports = module.exports = createNewInstance({
  instanceConstructor: dataFetcher,
  dependencyInstances: {
    httpGetter: axios.get.bind(axios)
  }
})
