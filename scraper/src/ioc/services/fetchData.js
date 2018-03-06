import { createNewInstance } from './../iocHelper'
import fetchData from './../../main/services/fetchData'
import axios from 'axios'

exports = module.exports = createNewInstance({
  instanceConstructor: fetchData,
  dependencyInstances: {
    httpGetter: axios.get.bind(axios)
  }
})
