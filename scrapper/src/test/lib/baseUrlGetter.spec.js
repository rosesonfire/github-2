// eslint-disable-next-line no-unused-vars
import expect from './../setup'
// mocks
import urlParser from './../mocks/others/urlParser'
// unit
import baseUrlGetter from './../../main/lib/baseUrlGetter'

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
    mocks = [ urlParser ]
  })

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    urlParser.once().withExactArgs(url).returns(parsedUrl)
  })

  // eslint-disable-next-line no-undef
  afterEach(() => {
    mocks.forEach(mock => {
      mock.verify()
      mock.reset()
    })
  })

  // eslint-disable-next-line no-undef
  describe('When getting base url', () => {
    // eslint-disable-next-line no-undef
    it('should get base url', async () =>
      (await baseUrlGetter({ urlParser })({ url })).should.equal(baseUrl)
    )
  })
})
