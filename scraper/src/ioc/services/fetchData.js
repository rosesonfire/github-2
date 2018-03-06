import axios from 'axios'

import { createNewInstance } from './../iocHelper'
import fetchData from './../../main/services/fetchData'

exports = module.exports = createNewInstance({
  instanceConstructor: fetchData,
  dependencyInstances: {
    httpGetter: axios.get.bind(axios)
  }
})
