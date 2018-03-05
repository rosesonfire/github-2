import sinon from 'sinon'

export const xml2jsMock = () => ({
  parseString: sinon.mock()
})

export const xml2jsStub = () => ({
  parseString: sinon.stub()
})
