import { describe, before, beforeEach, afterEach, it } from './../setup'
// unit
import scrape from './../../main/services/scrape'
// mocks
import plainOldMockObject from './../mocks/others/plainOldMockObject'

describe('Scrape', () => {
  let
    mocks,
    getBaseUrl,
    fetchData,
    convertXMLToJSON,
    saveData,
    url,
    baseUrl,
    fetchedData,
    jsonData,
    requiredDataSet,
    replies

  before(() => {
    url = 'https://github.com/timeline'
    baseUrl = 'https://github.com/'
    fetchedData = { data: '<xml>some data</xml>', otherField: 'otherField' }
    jsonData = {
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
            updated: ['2015-04-02T21:18:25Z'],
            otherFields: [{
              otherField1: ['otherField2'],
              otherField2: ['otherField3']
            }]
          }
        ]
      }
    }
    requiredDataSet = [
      {
        event: 'IssueCommentEvent',
        author: {
          name: 'ansibot',
          uri: 'ansibot'
        },
        updateTime: new Date(Date.parse('2018-03-01T23:58:35Z'))
      },
      {
        event: 'AnotherEvent',
        author: {
          name: 'anotherAuthor',
          uri: 'anotherAuthor'
        },
        updateTime: new Date(Date.parse('2015-04-02T21:18:25Z'))
      }
    ]
    replies = [
      {
        requestToken: '1234',
        succeeded: true,
        error: null
      },
      {
        requestToken: '5678',
        succeeded: false,
        error: new Error('err')
      }
    ]
  })

  beforeEach(() => {
    getBaseUrl = plainOldMockObject()
    fetchData = plainOldMockObject()
    convertXMLToJSON = plainOldMockObject()
    saveData = plainOldMockObject()
    mocks = [ getBaseUrl, fetchData, convertXMLToJSON, saveData ]
    getBaseUrl.once().withExactArgs(url).resolves(baseUrl)
    fetchData.once().withExactArgs(url).resolves(fetchedData)
    convertXMLToJSON.once().withExactArgs(fetchedData.data).resolves(jsonData)
    saveData.once().withExactArgs(requiredDataSet).resolves(replies)
  })

  afterEach(() => mocks.forEach(mock => mock.verify()))

  describe('When scraping', () => {
    it('should return a promise', () =>
      scrape(
        { url, getBaseUrl, fetchData, convertXMLToJSON, saveData }
      )().should.be.a('promise'))

    it('should persist data', () =>
      scrape(
        { url, getBaseUrl, fetchData, convertXMLToJSON, saveData }
      )().should.eventually.equalTo(replies))
  })
})
