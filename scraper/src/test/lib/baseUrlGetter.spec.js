// eslint-disable-next-line no-unused-vars
import expect from './../setup'
// unit
import baseUrlGetter from './../../main/lib/baseUrlGetter'
// mocks
import plainOldMockObject from './../mocks/others/plainOldMockObject'
const urlParser = plainOldMockObject()
const asyncUrlParser = plainOldMockObject()

// eslint-disable-next-line no-undef
describe('BaseUrlGetter', () => {
  let
    mocks,
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
  afterEach(() => {
    mocks.forEach(mock => {
      mock.verify()
      mock.reset()
    })
  })

  // eslint-disable-next-line no-undef
  describe('When getting base url with sync urlParser', () => {
    // eslint-disable-next-line no-undef
    before(() => {
      mocks = [ urlParser ]
    })

    // eslint-disable-next-line no-undef
    beforeEach(() => {
      urlParser.once().withExactArgs(url).returns(parsedUrl)
    })

    // eslint-disable-next-line no-undef
    it('should get base url', async () =>
      (await baseUrlGetter({ urlParser })({ url })).should.equal(baseUrl)
    )
  })

  // eslint-disable-next-line no-undef
  describe('When getting base url with async urlParser', () => {
    // eslint-disable-next-line no-undef
    before(() => {
      mocks = [ asyncUrlParser ]
    })

    // eslint-disable-next-line no-undef
    beforeEach(() => {
      asyncUrlParser.once().withExactArgs(url)
        .returns(Promise.resolve(parsedUrl))
    })

    // eslint-disable-next-line no-undef
    it('should get base url', async () =>
      (await baseUrlGetter({ urlParser: asyncUrlParser })({ url })).should
        .equal(baseUrl)
    )
  })
})
