// eslint-disable-next-line no-unused-vars
import expect from './../setup'
// unit
import baseUrlGetter from './../../main/lib/baseUrlGetter'
// mocks
import plainOldMockObject from './../mocks/others/plainOldMockObject'

// eslint-disable-next-line no-undef
describe('BaseUrlGetter', () => {
  let
    mocks,
    urlParser,
    asyncUrlParser,
    url,
    hostname,
    baseUrl,
    parsedUrl

  // eslint-disable-next-line no-undef
  before(() => {
    url = 'https://github.com/timeline'
    hostname = 'https://github.com'
    baseUrl = hostname + '/'
    parsedUrl = {
      hostname
    }
  })

  // eslint-disable-next-line no-undef
  afterEach(() => mocks.forEach(mock => mock.verify()))

  // eslint-disable-next-line no-undef
  describe('When getting base url with sync urlParser', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
      urlParser = plainOldMockObject()
      mocks = [ urlParser ]
      urlParser.once().withExactArgs(url).returns(parsedUrl)
    })

    // eslint-disable-next-line no-undef
    it('should return a promise', () => baseUrlGetter({ urlParser })({ url })
      .should.be.a('promise'))

    // eslint-disable-next-line no-undef
    it('should get base url', () =>
      baseUrlGetter({ urlParser })({ url }).should.eventually.equal(baseUrl))
  })

  // eslint-disable-next-line no-undef
  describe('When getting base url with async urlParser', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
      asyncUrlParser = plainOldMockObject()
      mocks = [ asyncUrlParser ]
      asyncUrlParser.once().withExactArgs(url)
        .returns(Promise.resolve(parsedUrl))
    })

    // eslint-disable-next-line no-undef
    it('should get base url', () =>
      baseUrlGetter({ urlParser: asyncUrlParser })({ url }).should.eventually
        .equal(baseUrl))
  })
})
