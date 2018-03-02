// eslint-disable-next-line no-unused-vars
import expect from './../setup'
// unit
import dataFetcher from './../../main/lib/dataFetcher'
// mocks
import plainOldMockObject from './../mocks/others/plainOldMockObject'
const httpGetter = plainOldMockObject()
const asyncHttpGetter = plainOldMockObject()

// eslint-disable-next-line no-undef
describe('DataFetcher', () => {
  let
    mocks,
    url,
    data

  // eslint-disable-next-line no-undef
  before(() => {
    url = 'https://github.com/timeline'
    data = '<xml><tag>Some data</tag></xml>'
  })

  // eslint-disable-next-line no-undef
  afterEach(() => mocks.forEach(mock => {
    mock.verify()
    mock.reset()
  }))

  // eslint-disable-next-line no-undef
  describe('When fetching data with sync httpGetter', () => {
    // eslint-disable-next-line no-undef
    before(() => {
      mocks = [ httpGetter ]
    })

    // eslint-disable-next-line no-undef
    beforeEach(() => httpGetter.once().withExactArgs(url).returns(data))

    // eslint-disable-next-line no-undef
    it('should get base url', async () =>
      (await dataFetcher({ httpGetter })({ url })).should.equal(data))
  })

  // eslint-disable-next-line no-undef
  describe('When fetching data with async httpGetter', () => {
    // eslint-disable-next-line no-undef
    before(() => {
      mocks = [ asyncHttpGetter ]
    })

    // eslint-disable-next-line no-undef
    beforeEach(() => asyncHttpGetter.once().withExactArgs(url)
      .returns(Promise.resolve(data)))

    // eslint-disable-next-line no-undef
    it('should get base url', async () =>
      (await dataFetcher({ httpGetter: asyncHttpGetter })({ url })).should
        .equal(data))
  })
})
