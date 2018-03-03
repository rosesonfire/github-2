import sinon from 'sinon'

export const redisWrapperClientMock = () => ({
  hmset: sinon.mock()
})

export default () => sinon.mock()
