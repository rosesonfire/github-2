import { describe, before, beforeEach, afterEach, it } from './../../setup'
// unit
import xml2jsWrapper from './../../../main/lib/wrappers/xml2jsWrapper'
// mocks
import { xml2jsMock, xml2jsStub } from './../../mocks/others/xml2js'

describe('XML2JSWrapper', () => {
  let
    mocks,
    xml2js,
    xml,
    jsonData

  before(() => {
    xml = '<xml>Some xml data</xml>'
    jsonData = {a: 1, b: 2}
  })

  afterEach(() => mocks.forEach(mock => mock.verify()))

  describe('When converting xml to json (1)', () => {
    beforeEach(() => {
      xml2js = xml2jsStub()
      mocks = []
    })
    describe('When successful', () => {
      beforeEach(() => {
        xml2js.parseString
          .callsFake((...args) => args[args.length - 1](null, jsonData))
      })

      it('should return a promise', () =>
        xml2jsWrapper({ xml2js }).convert(xml).should.be.a('promise'))

      it('should return correct json', () =>
        xml2jsWrapper({ xml2js }).convert(xml).should.eventually
          .equal(jsonData))
    })

    describe('When core xml2js returns error', () => {
      beforeEach(() => {
        xml2js.parseString
          .callsFake((...args) => args[args.length - 1](new Error('err'), null))
      })

      it('should fail', () =>
        xml2jsWrapper({ xml2js }).convert(xml).should.eventually.be.rejected)
    })

    describe('When core xml2js fails', () => {
      beforeEach(() => {
        xml2js.parseString
          .callsFake((...args) => { throw new Error('err') })
      })

      it('should fail', () =>
        xml2jsWrapper({ xml2js }).convert(xml).should.eventually.be.rejected)
    })
  })

  describe('When converting xml to json (2)', () => {
    beforeEach(() => {
      xml2js = xml2jsMock()
      mocks = [xml2js.parseString]
      xml2js.parseString.once().withArgs(xml)
    })

    it('should be called with proper arguments', () => {
      xml2jsWrapper({ xml2js }).convert(xml)
      '1'.should.equal('1')
    })
  })
})
