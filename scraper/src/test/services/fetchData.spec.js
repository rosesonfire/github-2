import { describe, before, beforeEach, afterEach, it } from './../setup'
// unit
import fetchData from './../../main/services/fetchData'
// mocks
import axiosWrapperMock from './../mocks/lib/wrappers/axiosWrapper'

describe('FetchData', () => {
  let
    mocks,
    axiosWrapper,
    url,
    data

  before(() => {
    url = 'https://github.com/timeline'
    data = '<xml><tag>Some data</tag></xml>'
  })

  afterEach(() => mocks.forEach(mock => mock.verify()))

  describe('When fetching data', () => {
    beforeEach(() => {
      axiosWrapper = axiosWrapperMock()
      mocks = [ axiosWrapper.get ]
      axiosWrapper.get.once().withExactArgs(url).returns(Promise.resolve(data))
    })

    it('should fetch data', () =>
      fetchData({ http: axiosWrapper })(url).should.eventually.equal(data))
  })
})
