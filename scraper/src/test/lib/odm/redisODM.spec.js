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
    expectedODMProperties,
    expectedModelObjProperties,
    passedData,
    data,
    idKey,
    positiveReply

  // eslint-disable-next-line no-undef
  before(() => {
    host = 'localhost'
    port = '1234'
    expectedODMProperties = ['create']
    expectedModelObjProperties = ['data', 'save']
    passedData = [1, 'id', 1, 'value', '1']
    data = { 'id': 1, 'value': '1' }
    idKey = 'id'
    positiveReply = 'OK'
  })

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    redisWrapper = redisWrapperMock()
    redisWrapperClient = redisWrapperClientMock()
    redisWrapper.once().withExactArgs({ host, port })
      .returns(redisWrapperClient)
  })

  // eslint-disable-next-line no-undef
  afterEach(() => mocks.forEach(mock => mock.verify()))

  // eslint-disable-next-line no-undef
  describe('When creating redisODM', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
      mocks = [ redisWrapper ]
    })

    // eslint-disable-next-line no-undef
    it('should have expected properties', () =>
      redisODM({ redis: redisWrapper })({ host, port }).should.include
        .keys(expectedODMProperties))

    // eslint-disable-next-line no-undef
    describe('When creating a model object', () => {
      // eslint-disable-next-line no-undef
      it('should return a promise', () =>
        redisODM({ redis: redisWrapper })({ host, port })
          .create({ data: data, idKey }).should.be.a('promise'))

      // eslint-disable-next-line no-undef
      it('should have expected properties', () =>
        redisODM({ redis: redisWrapper })({ host, port })
          .create({ data: data, idKey }).should.eventually.include
          .keys(expectedModelObjProperties))

      // eslint-disable-next-line no-undef
      it('should map the data properly', async () => {
        const modelObj = await redisODM({ redis: redisWrapper })({ host, port })
          .create({ data: data, idKey })
        const modelObjData = modelObj.data

        Object.entries(data)
          .forEach(entry => modelObjData.should.have.own.property(...entry))

        Object.entries(modelObjData)
          .forEach(entry => data.should.have.own.property(...entry))
      })
    })
  })

  // eslint-disable-next-line no-undef
  describe('When saving a model object', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
      redisWrapperClient.hmset.once().withExactArgs(...passedData)
        .resolves(positiveReply)
      mocks = [ redisWrapper, redisWrapperClient.hmset ]
    })

    // eslint-disable-next-line no-undef
    it('should return a promise', async () =>
      (await redisODM({ redis: redisWrapper })({ host, port })
        .create({ data: data, idKey })).save().should.be.a('promise'))

    // eslint-disable-next-line no-undef
    it('should be successful', async () =>
      (await redisODM({ redis: redisWrapper })({ host, port })
        .create({ data: data, idKey })).save().should.eventually
        .equal(positiveReply))
  })
})
