import { describe, before, beforeEach, afterEach, it } from './../setup'
// unit
import getBaseUrl from './../../main/services/getBaseUrl'
// mocks
import plainOldMockObject from './../mocks/others/plainOldMockObject'

describe('GetBaseUrl', () => {
  let
    mocks,
    urlParser,
    asyncUrlParser,
    url,
    protocol,
    hostname,
    baseUrl,
    parsedUrl

  before(() => {
    url = 'https://github.com/timeline'
    protocol = 'https:'
    hostname = 'github.com'
    baseUrl = `${protocol}//${hostname}/`
    parsedUrl = {
      protocol,
      hostname
    }
  })

  afterEach(() => mocks.forEach(mock => mock.verify()))

  describe('When getting base url with sync urlParser', () => {
    beforeEach(() => {
      urlParser = plainOldMockObject()
      mocks = [ urlParser ]
      urlParser.once().withExactArgs(url).returns(parsedUrl)
    })

    it('should return a promise', () => getBaseUrl({ urlParser })(url)
      .should.be.a('promise'))

    it('should get base url', () =>
      getBaseUrl({ urlParser })(url).should.eventually.equal(baseUrl))
  })

  describe('When getting base url with async urlParser', () => {
    beforeEach(() => {
      asyncUrlParser = plainOldMockObject()
      mocks = [ asyncUrlParser ]
      asyncUrlParser.once().withExactArgs(url)
        .returns(Promise.resolve(parsedUrl))
    })

    it('should get base url', () =>
      getBaseUrl({ urlParser: asyncUrlParser })(url).should.eventually
        .equal(baseUrl))
  })
})
