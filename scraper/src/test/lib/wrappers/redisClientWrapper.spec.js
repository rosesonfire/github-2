// eslint-disable-next-line no-unused-vars
import expect from './../../setup'
// unit
import redisClientWrapper from './../../../main/lib/wrappers/redisClientWrapper'
// mocks
import redisMock from './../../mocks/others/redis'
import { redisClientMock, redisClientStub }
  from './../../mocks/others/redisClient'

// eslint-disable-next-line no-undef
describe('RedisWrapper', () => {
  let
    mocks,
    redis,
    redisClient,
    host,
    port,
    expectedProperties,
    hmsetArgs,
    positiveReply

  // eslint-disable-next-line no-undef
  before(() => {
    host = 'localhost'
    port = 1234
    expectedProperties = ['hmset']
    hmsetArgs = [1, 'id', 1, 'value', '1']
    positiveReply = 'OK'
  })

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    redis = redisMock()
  })

  // eslint-disable-next-line no-undef
  afterEach(() => mocks.forEach(mock => mock.verify()))

  // eslint-disable-next-line no-undef
  describe('When creating redisWrapper', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
      redisClient = redisClientStub()
      mocks = [ redis.createClient ]
      redis.createClient.once().withExactArgs({ host, port })
        .returns(redisClient)
    })

    // eslint-disable-next-line no-undef
    it('should have expected properties', () =>
      redisClientWrapper({ redis, host, port }).should.have.all
        .keys(...expectedProperties))

    // eslint-disable-next-line no-undef
    describe('When calling hmset in redisWrapper', () => {
      // eslint-disable-next-line no-undef
      describe('When successful', () => {
        // eslint-disable-next-line no-undef
        beforeEach(() => redisClient.hmset.onFirstCall()
          .callsFake((...args) => args[args.length - 1](null, positiveReply)))

        // eslint-disable-next-line no-undef
        it('should return a promise', () =>
          redisClientWrapper({ redis, host, port }).hmset(...hmsetArgs)
            .should.be.a('promise'))

        // eslint-disable-next-line no-undef
        it('should return positive response', () =>
          redisClientWrapper({ redis, host, port }).hmset(...hmsetArgs)
            .should.eventually.equal(positiveReply))
      })

      // eslint-disable-next-line no-undef
      describe('When core redis client returns error', () => {
        // eslint-disable-next-line no-undef
        beforeEach(() => redisClient.hmset.onFirstCall()
          .callsFake((...args) => args[args.length - 1](new Error('er'), null)))

        // eslint-disable-next-line no-undef
        it('should fail', () =>
          redisClientWrapper({ redis, host, port }).hmset(...hmsetArgs)
            .should.eventually.be.rejected)
      })

      // eslint-disable-next-line no-undef
      describe('When core redis client fails', () => {
        // eslint-disable-next-line no-undef
        beforeEach(() => redisClient.hmset.onFirstCall()
          .callsFake((...args) => { throw new Error('er') }))

        // eslint-disable-next-line no-undef
        it('should fail', () =>
          redisClientWrapper({ redis, host, port }).hmset(...hmsetArgs)
            .should.eventually.be.rejected)
      })
    })
  })

  // eslint-disable-next-line no-undef
  describe('When calling hmset in redisWrapper', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
      redisClient = redisClientMock()
      mocks = [ redis.createClient, redisClient.hmset ]
      redis.createClient.once().withExactArgs({ host, port })
        .returns(redisClient)
      redisClient.hmset.once().withArgs(...hmsetArgs)
    })

    // eslint-disable-next-line no-undef
    it('should be called with proper arguments',
      () => {
        redisClientWrapper({ redis, host, port }).hmset(...hmsetArgs)
        '1'.should.equal('1')
      })
  })
})
