// eslint-disable-next-line no-unused-vars
import expect from './../../setup'
// unit
import xml2jsWrapper from './../../../main/lib/wrappers/xml2jsWrapper'
// mocks
import { xml2jsMock, xml2jsStub } from './../../mocks/others/xml2js'

// eslint-disable-next-line no-undef
describe('XML2JSWrapper', () => {
  let
    mocks,
    xml2js,
    xml,
    jsonData

  // eslint-disable-next-line no-undef
  before(() => {
    xml = '<xml>Some xml data</xml>'
    jsonData = {a: 1, b: 2}
  })

  // eslint-disable-next-line no-undef
  afterEach(() => mocks.forEach(mock => mock.verify()))

  // eslint-disable-next-line no-undef
  describe('When converting xml to json (1)', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
      xml2js = xml2jsStub()
      mocks = []
    })
    // eslint-disable-next-line no-undef
    describe('When successful', () => {
      // eslint-disable-next-line no-undef
      beforeEach(() => {
        xml2js.parseString
          .callsFake((...args) => args[args.length - 1](null, jsonData))
      })

      // eslint-disable-next-line no-undef
      it('should return a promise', () =>
        xml2jsWrapper({ xml2js })({ xml }).should.be.a('promise'))

      // eslint-disable-next-line no-undef
      it('should return correct json', () =>
        xml2jsWrapper({ xml2js })({ xml }).should.eventually.equal(jsonData))
    })

    // eslint-disable-next-line no-undef
    describe('When core xml2js returns error', () => {
      // eslint-disable-next-line no-undef
      beforeEach(() => {
        xml2js.parseString
          .callsFake((...args) => args[args.length - 1](new Error('err'), null))
      })

      // eslint-disable-next-line no-undef
      it('should fail', () =>
        xml2jsWrapper({ xml2js })({ xml }).should.eventually.be.rejected)
    })

    // eslint-disable-next-line no-undef
    describe('When core xml2js fails', () => {
      // eslint-disable-next-line no-undef
      beforeEach(() => {
        xml2js.parseString
          .callsFake((...args) => { throw new Error('err') })
      })

      // eslint-disable-next-line no-undef
      it('should fail', () =>
        xml2jsWrapper({ xml2js })({ xml }).should.eventually.be.rejected)
    })
  })

  // eslint-disable-next-line no-undef
  describe('When converting xml to json (2)', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
      xml2js = xml2jsMock()
      mocks = [xml2js.parseString]
      xml2js.parseString.once().withArgs(xml)
    })
    // eslint-disable-next-line no-undef
    it('should be called with proper arguments', () => {
      xml2jsWrapper({ xml2js })({ xml })
      '1'.should.equal('1')
    })
  })
})
