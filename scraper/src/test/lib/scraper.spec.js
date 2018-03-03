// eslint-disable-next-line no-unused-vars
import expect from './../setup'
// unit
import scraper from './../../main/lib/scraper'
// mocks
import plainOldMockObject from './../mocks/others/plainOldMockObject'
import redisODMMock, { redisModelObjectMock } from './../mocks/lib/odm/redisODM'

// eslint-disable-next-line no-undef
describe('Scrapper', () => {
  let
    mocks,
    baseUrlGetter,
    dataFetcher,
    xmlToJsonConverter,
    redisODM,
    redisModelObject,
    url,
    baseUrl,
    fetchedData,
    singleJsonData,
    multipleJsonData,
    singleRequiredData,
    positiveReply

  // eslint-disable-next-line no-undef
  before(() => {
    url = 'https://github.com/timeline'
    baseUrl = 'https://github.com/'
    fetchedData = { data: '<xml>some data</xml>', otherField: 'otherField' }
    singleJsonData = {
      feed: {
        entry: [
          {
            id: ['tag:github.com,2008:IssueCommentEvent/7319278825'],
            author: [{
              name: ['ansibot'],
              uri: ['https://github.com/ansibot']
            }],
            updated: ['2018-03-01T23:58:35Z'],
            otherFields: [{
              otherField1: ['otherField1'],
              otherField2: ['otherField2']
            }]
          }
        ]
      }
    }
    multipleJsonData = {
      feed: {
        entry: [
          {
            id: ['tag:github.com,2008:IssueCommentEvent/7319278825'],
            author: [{
              name: ['ansibot'],
              uri: ['https://github.com/ansibot']
            }],
            updated: ['2018-03-01T23:58:35Z'],
            otherFields: [{
              otherField1: ['otherField1'],
              otherField2: ['otherField2']
            }]
          },
          {
            id: ['tag:github.com,2008:AnotherEvent/7319278826'],
            author: [{
              name: ['anotherAuthor'],
              uri: ['https://github.com/anotherAuthor']
            }],
            updated: ['2015-23-02T21:18:25Z'],
            otherFields: [{
              otherField1: ['otherField2'],
              otherField2: ['otherField3']
            }]
          }
        ]
      }
    }
    singleRequiredData = {
      event: 'IssueCommentEvent',
      author: {
        name: 'ansibot',
        uri: 'ansibot'
      },
      updateTime: new Date(Date.parse('2018-03-01T23:58:35Z'))
    }
    positiveReply = 'OK'
  })

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    baseUrlGetter = plainOldMockObject()
    dataFetcher = plainOldMockObject()
    xmlToJsonConverter = plainOldMockObject()
    redisODM = redisODMMock()
    redisModelObject = redisModelObjectMock()
    mocks = [ baseUrlGetter, dataFetcher, xmlToJsonConverter, redisODM.create,
      redisModelObject.save ]
    baseUrlGetter.once().withExactArgs(url).resolves(baseUrl)
    dataFetcher.once().withExactArgs(url).resolves(fetchedData)
    xmlToJsonConverter.once().withExactArgs(fetchedData.data)
  })

  // eslint-disable-next-line no-undef
  afterEach(() => mocks.forEach(mock => mock.verify()))

  // eslint-disable-next-line no-undef
  describe('When calling scrapper', () => {
    // eslint-disable-next-line no-undef
    describe('When fetching single data', () => {
      // eslint-disable-next-line no-undef
      beforeEach(() => {
        xmlToJsonConverter.resolves(singleJsonData)
        redisODM.create.once().withExactArgs(singleRequiredData)
          .returns(redisModelObject)
        redisModelObject.save.once().withExactArgs().resolves(positiveReply)
      })

      // eslint-disable-next-line no-undef
      it('should return a promise', () =>
        scraper(
          { url, baseUrlGetter, dataFetcher, xmlToJsonConverter, odm: redisODM }
        ).should.be.a('promise'))

      // eslint-disable-next-line no-undef
      it('should persist single data', () =>
        scraper(
          { url, baseUrlGetter, dataFetcher, xmlToJsonConverter, odm: redisODM }
        ).should.eventually.equalTo([positiveReply]))
    })

    // eslint-disable-next-line no-undef
    describe('When fetching multiple data', () => {
      // eslint-disable-next-line no-undef
      beforeEach(() => {
        xmlToJsonConverter.resolves(multipleJsonData)
        redisODM.create.exactly(multipleJsonData.feed.entry.length)
          .returns(redisModelObject)
        redisModelObject.save.exactly(multipleJsonData.feed.entry.length)
          .resolves(positiveReply)
      })

      // eslint-disable-next-line no-undef
      it('should persist mutiple data', () =>
        scraper(
          { url, baseUrlGetter, dataFetcher, xmlToJsonConverter, odm: redisODM }
        ).should.eventually
          .equalTo(multipleJsonData.feed.entry.map(en => positiveReply)))
    })
  })
})
