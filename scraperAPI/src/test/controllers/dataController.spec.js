import { describe, before, beforeEach, afterEach, it } from './../setup'
// unit
import dataController from './../../main/controllers/dataController'
// mocks
import dataServiceMock from './../mocks/services/dataService'
import { resMock } from './../mocks/lib/wrappers/expressWrapper'

describe('DataController', () => {
  let
    mocks,
    dataService,
    req,
    res,
    positiveResponse

  before(() => {
    req = {
      body: {
        data: '{ "jsonData": "some data"}'
      }
    }
    positiveResponse = Promise.resolve('OK')
  })

  beforeEach(() => {
    res = resMock()
    dataService = dataServiceMock()
    dataService.writeData.once().withExactArgs(req.body.data)
      .returns(positiveResponse)
    res.setBufferedResponse.once().withExactArgs(positiveResponse)
    mocks = [dataService.writeData, res.setBufferedResponse]
  })

  afterEach(() => mocks.forEach(mock => mock.verify()))

  describe('When writing data', () => {
    it('should write data successfully', () =>
      dataController({ dataService }).writeData(req, res))
  })
})
