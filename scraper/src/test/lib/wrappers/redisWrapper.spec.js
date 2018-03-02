// eslint-disable-next-line no-unused-vars
import expect from './../../setup'
// unit
import redisWrapper from './../../../main/lib/wrappers/redisWrapper'
// mocks
import plainOldMockObject from './../../mocks/others/plainOldMockObject'
import { redisClientMock, redisClientStub }
  from './../../mocks/others/redisClient'
const redis = plainOldMockObject()

// eslint-disable-next-line no-undef
describe('RedisWrapper', () => {
  let
    mocks,
    stubs,
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
  afterEach(() => {
    mocks.forEach(mock => {
      mock.verify()
      mock.reset()
    })

    stubs.forEach(stub => stub.reset())
  })

  // eslint-disable-next-line no-undef
  describe('When creating redisWrapper', () => {
    // eslint-disable-next-line no-undef
    before(() => {
      mocks = [ redis ]
      stubs = []
    })

    // eslint-disable-next-line no-undef
    beforeEach(() => {
      redis.once().withExactArgs({ host, port }).returns(redisClientStub)
    })

    // eslint-disable-next-line no-undef
    it('should have expected properties', () => {
      const rw = redisWrapper({ redis })({ host, port })

      expectedProperties.forEach(ep => rw.should.have.property(ep))
    })
  })

  // eslint-disable-next-line no-undef
  describe('When calling hmset in redisWrapper (1)', () => {
    // eslint-disable-next-line no-undef
    before(() => {
      mocks = [ redis ]
      stubs = [ redisClientStub.hmset ]
    })

    // eslint-disable-next-line no-undef
    beforeEach(() => {
      redis.once().withExactArgs({ host, port }).returns(redisClientStub)
      redisClientStub.hmset.onFirstCall()
        .callsFake((...args) => args[args.length - 1](null, positiveReply))
    })

    // eslint-disable-next-line no-undef
    it('should return a promise', () => redisWrapper({ redis })({ host, port })
      .hmset(...hmsetArgs).should.be.a('promise'))

    // eslint-disable-next-line no-undef
    it('should return positive response when successful', () =>
      redisWrapper({ redis })({ host, port }).hmset(...hmsetArgs).should
        .eventually.equal(positiveReply))
  })

  // eslint-disable-next-line no-undef
  describe('When calling hmset in redisWrapper (2)', () => {
    // eslint-disable-next-line no-undef
    before(() => {
      mocks = [ redis ]
      stubs = [ redisClientStub.hmset ]
    })

    // eslint-disable-next-line no-undef
    beforeEach(() => {
      redis.once().withExactArgs({ host, port }).returns(redisClientStub)
      redisClientStub.hmset.onFirstCall()
        .callsFake((...args) => args[args.length - 1](new Error('error'), null))
    })

    // eslint-disable-next-line no-undef
    it('should fail when core redis client returns error', () =>
      redisWrapper({ redis })({ host, port }).hmset(...hmsetArgs).should
        .eventually.be.rejected)
  })

  // eslint-disable-next-line no-undef
  describe('When calling hmset in redisWrapper (3)', () => {
    // eslint-disable-next-line no-undef
    before(() => {
      mocks = [ redis ]
      stubs = [ redisClientStub.hmset ]
    })

    // eslint-disable-next-line no-undef
    beforeEach(() => {
      redis.once().withExactArgs({ host, port }).returns(redisClientStub)
      redisClientStub.hmset.onFirstCall()
        .callsFake((...args) => { throw new Error('error') })
    })

    // eslint-disable-next-line no-undef
    it('should fail when core redis client fails', () =>
      redisWrapper({ redis })({ host, port }).hmset(...hmsetArgs).should
        .eventually.be.rejected)
  })

  // eslint-disable-next-line no-undef
  describe('When calling hmset in redisWrapper (4)', () => {
    // eslint-disable-next-line no-undef
    before(() => {
      mocks = [ redis, redisClientMock.hmset ]
      stubs = []
    })

    // eslint-disable-next-line no-undef
    beforeEach(() => {
      redis.once().withExactArgs({ host, port }).returns(redisClientMock)
      redisClientMock.hmset.once().withArgs(...hmsetArgs)
    })

    // eslint-disable-next-line no-undef
    it('hmset in core redis client should be called with proper arguments',
      () => {
        redisWrapper({ redis })({ host, port }).hmset(...hmsetArgs)
        '1'.should.equal('1')
      })
  })
})
