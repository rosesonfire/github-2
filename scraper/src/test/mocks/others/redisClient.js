import sinon from 'sinon'

export const redisClientMock = {
  hmset: sinon.mock()
}

export const redisClientStub = {
  hmset: sinon.stub()
}
