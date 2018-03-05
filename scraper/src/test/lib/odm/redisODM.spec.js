// eslint-disable-next-line no-unused-vars
import expect from './../../setup'
// unit
import redisODM from './../../../main/lib/odm/redisODM'
// mocks
import redisClientWrapperMock
  from './../../mocks/lib/wrappers/redisClientWrapper'

// eslint-disable-next-line no-undef
describe('RedisODM', () => {
  let
    mocks,
    redisClient,
    expectedODMProperties,
    expectedModelObjProperties,
    passedData,
    data,
    positiveReply

  // eslint-disable-next-line no-undef
  before(() => {
    expectedODMProperties = ['create']
    expectedModelObjProperties = ['key', 'data', 'save']
    passedData = [1, 'id', 1, 'value', '1']
    data = { 'id': 1, 'value': '1' }
    positiveReply = 'OK'
  })

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    redisClient = redisClientWrapperMock()
  })

  // eslint-disable-next-line no-undef
  afterEach(() => mocks.forEach(mock => mock.verify()))

  // eslint-disable-next-line no-undef
  describe('When creating redisODM', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
      mocks = []
    })
    // eslint-disable-next-line no-undef
    it('should have expected properties', () =>
      redisODM({ redisClient }).should.have.all.keys(expectedODMProperties))

    // eslint-disable-next-line no-undef
    describe('When creating a model object', () => {
      // eslint-disable-next-line no-undef
      it('should have expected properties', () =>
        redisODM({ redisClient })
          .create({ key: data.id, data: data }).should.have.all
          .keys(expectedModelObjProperties))

      // eslint-disable-next-line no-undef
      it('should map the data properly', () => {
        const modelObj = redisODM({ redisClient })
          .create({ key: data.id, data: data })
        const modelObjData = modelObj.data

        modelObj.key.should.equal(data.id)

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
      redisClient.hmset.once().withExactArgs(...passedData)
        .resolves(positiveReply)
      mocks = [ redisClient.hmset ]
    })

    // eslint-disable-next-line no-undef
    it('should return a promise', () =>
      redisODM({ redisClient })
        .create({ key: data.id, data: data }).save().should.be.a('promise'))

    // eslint-disable-next-line no-undef
    it('should be successful', async () =>
      redisODM({ redisClient })
        .create({ key: data.id, data: data }).save().should.eventually
        .equal(positiveReply))
  })
})
