// eslint-disable-next-line no-unused-vars
import expect from './../setup'
// unit
import dataFetcher from './../../main/services/dataFetcher'
// mocks
import plainOldMockObject from './../mocks/others/plainOldMockObject'

// eslint-disable-next-line no-undef
describe('DataFetcher', () => {
  let
    mocks,
    httpGetter,
    asyncHttpGetter,
    url,
    data

  // eslint-disable-next-line no-undef
  before(() => {
    url = 'https://github.com/timeline'
    data = '<xml><tag>Some data</tag></xml>'
  })

  // eslint-disable-next-line no-undef
  afterEach(() => mocks.forEach(mock => mock.verify()))

  // eslint-disable-next-line no-undef
  describe('When fetching data with sync httpGetter', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
      httpGetter = plainOldMockObject()
      mocks = [ httpGetter ]
      httpGetter.once().withExactArgs(url).returns(data)
    })

    // eslint-disable-next-line no-undef
    it('should return a promise', () => dataFetcher({ httpGetter })({ url })
      .should.be.a('promise'))

    // eslint-disable-next-line no-undef
    it('should get base url', () => dataFetcher({ httpGetter })({ url }).should
      .eventually.equal(data))
  })

  // eslint-disable-next-line no-undef
  describe('When fetching data with async httpGetter', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
      asyncHttpGetter = plainOldMockObject()
      mocks = [ asyncHttpGetter ]
      asyncHttpGetter.once().withExactArgs(url).returns(Promise.resolve(data))
    })

    // eslint-disable-next-line no-undef
    it('should get base url', () =>
      dataFetcher({ httpGetter: asyncHttpGetter })({ url }).should.eventually
        .equal(data))
  })
})
