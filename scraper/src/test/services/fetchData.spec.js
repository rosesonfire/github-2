import { describe, before, beforeEach, afterEach, it } from './../setup'
// unit
import fetchData from './../../main/services/fetchData'
// mocks
import plainOldMockObject from './../mocks/others/plainOldMockObject'

describe('FetchData', () => {
  let
    mocks,
    httpGetter,
    asyncHttpGetter,
    url,
    data

  before(() => {
    url = 'https://github.com/timeline'
    data = '<xml><tag>Some data</tag></xml>'
  })

  afterEach(() => mocks.forEach(mock => mock.verify()))

  describe('When fetching data with sync httpGetter', () => {
    beforeEach(() => {
      httpGetter = plainOldMockObject()
      mocks = [ httpGetter ]
      httpGetter.once().withExactArgs(url).returns(data)
    })

    it('should return a promise', () => fetchData({ httpGetter })(url)
      .should.be.a('promise'))

    it('should get base url', () => fetchData({ httpGetter })(url).should
      .eventually.equal(data))
  })

  describe('When fetching data with async httpGetter', () => {
    beforeEach(() => {
      asyncHttpGetter = plainOldMockObject()
      mocks = [ asyncHttpGetter ]
      asyncHttpGetter.once().withExactArgs(url).returns(Promise.resolve(data))
    })

    it('should get base url', () =>
      fetchData({ httpGetter: asyncHttpGetter })(url).should.eventually
        .equal(data))
  })
})
