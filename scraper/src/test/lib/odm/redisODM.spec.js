// eslint-disable-next-line no-unused-vars
import expect from './../../setup'
// unit
import redisODM from './../../../main/lib/odm/redisODM'
// mocks
import redisWrapperMock, { redisWrapperClientMock }
  from './../../mocks/wrappers/redisWrapper'

// eslint-disable-next-line no-undef
describe('RedisODM', () => {
  let
    mocks,
    redisWrapper,
    redisWrapperClient,
    host,
    port,
    flatSingleData,
    singleData,
    multiData,
    idKey,
    positiveReply

  // eslint-disable-next-line no-undef
  before(() => {
    host = 'localhost'
    port = '1234'
    flatSingleData = [1, 'id', 1, 'value', '1']
    singleData = [{'id': 1, 'value': '1'}]
    multiData = [{'id': 1, 'value': '1'}, {'id': 2, 'value': '2'}]
    idKey = 'id'
    positiveReply = 'OK'
  })

  // eslint-disable-next-line no-undef
  afterEach(() => mocks.forEach(mock => mock.verify()))

  // eslint-disable-next-line no-undef
  describe('When persisting data', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
      redisWrapper = redisWrapperMock()
      redisWrapperClient = redisWrapperClientMock()
      mocks = [ redisWrapper, redisWrapperClient.hmset ]
      redisWrapper.once().withExactArgs({ host, port })
        .returns(redisWrapperClient)
    })

    // eslint-disable-next-line no-undef
    describe('When persisting single data', () => {
      // eslint-disable-next-line no-undef
      beforeEach(() => redisWrapperClient.hmset.once()
        .withExactArgs(...flatSingleData).resolves(positiveReply))

      // eslint-disable-next-line no-undef
      it('should persist single data', () =>
        redisODM({ redis: redisWrapper })({ host, port })(
          { data: singleData, idKey }).should.eventually
          .equalTo([positiveReply]))
    })

    // eslint-disable-next-line no-undef
    describe('When persisting multiple data', () => {
      // eslint-disable-next-line no-undef
      beforeEach(() => redisWrapperClient.hmset.exactly(multiData.length)
        .resolves(positiveReply))

      // eslint-disable-next-line no-undef
      it('should persist multiple data', () =>
        redisODM({ redis: redisWrapper })({ host, port })(
          { data: multiData, idKey }).should.eventually
          .equalTo(multiData.map(d => positiveReply)))
    })
  })
})
