import { describe, before, beforeEach, afterEach, it } from './../../setup'
// unit
import redisODM from './../../../main/lib/odm/redisODM'
// mocks
import redisClientWrapperMock
  from './../../mocks/lib/wrappers/redisClientWrapper'

describe('RedisODM', () => {
  let
    mocks,
    redisClient,
    expectedODMProperties,
    expectedModelObjProperties,
    passedData,
    data,
    positiveReply

  before(() => {
    expectedODMProperties = ['create']
    expectedModelObjProperties = ['key', 'data', 'save']
    passedData = [1, 'id', 1, 'value', '1']
    data = { 'id': 1, 'value': '1' }
    positiveReply = 'OK'
  })

  beforeEach(() => {
    redisClient = redisClientWrapperMock()
  })

  afterEach(() => mocks.forEach(mock => mock.verify()))

  describe('When creating redisODM', () => {
    beforeEach(() => {
      mocks = []
    })
    it('should have expected properties', () =>
      redisODM({ redisClient }).should.have.all.keys(expectedODMProperties))

    describe('When creating a model object', () => {
      it('should have expected properties', () =>
        redisODM({ redisClient })
          .create({ key: data.id, data: data }).should.have.all
          .keys(expectedModelObjProperties))

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

  describe('When saving a model object', () => {
    beforeEach(() => {
      redisClient.hmset.once().withExactArgs(...passedData)
        .resolves(positiveReply)
      mocks = [ redisClient.hmset ]
    })

    it('should return a promise', () =>
      redisODM({ redisClient })
        .create({ key: data.id, data: data }).save().should.be.a('promise'))

    it('should be successful', async () =>
      redisODM({ redisClient })
        .create({ key: data.id, data: data }).save().should.eventually
        .equal(positiveReply))
  })
})
