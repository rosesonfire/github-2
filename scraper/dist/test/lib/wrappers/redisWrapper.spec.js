'use strict';

var _setup = require('./../../setup');

var _setup2 = _interopRequireDefault(_setup);

var _redisWrapper5 = require('./../../../main/lib/wrappers/redisWrapper');

var _redisWrapper6 = _interopRequireDefault(_redisWrapper5);

var _plainOldMockObject = require('./../../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

var _redisClient = require('./../../mocks/others/redisClient');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // eslint-disable-next-line no-unused-vars

// unit

// mocks


var redis = (0, _plainOldMockObject2.default)();

// eslint-disable-next-line no-undef
describe('RedisWrapper', function () {
  var mocks = void 0,
      stubs = void 0,
      host = void 0,
      port = void 0,
      expectedProperties = void 0,
      hmsetArgs = void 0,
      positiveReply = void 0;

  // eslint-disable-next-line no-undef
  before(function () {
    host = 'localhost';
    port = 1234;
    expectedProperties = ['hmset'];
    hmsetArgs = ['id', 1, 'value', '1'];
    positiveReply = 'OK';
  });

  // eslint-disable-next-line no-undef
  afterEach(function () {
    mocks.forEach(function (mock) {
      mock.verify();
      mock.reset();
    });

    stubs.forEach(function (stub) {
      return stub.reset();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When creating redisWrapper', function () {
    // eslint-disable-next-line no-undef
    before(function () {
      mocks = [redis];
      stubs = [];
    });

    // eslint-disable-next-line no-undef
    beforeEach(function () {
      redis.once().withExactArgs({ host: host, port: port }).returns(_redisClient.redisClientStub);
    });

    // eslint-disable-next-line no-undef
    it('should have expected properties', function () {
      var rw = (0, _redisWrapper6.default)({ redis: redis })({ host: host, port: port });

      expectedProperties.forEach(function (ep) {
        return rw.should.have.property(ep);
      });
    });
  });

  // eslint-disable-next-line no-undef
  describe('When calling hmset in redisWrapper (1)', function () {
    // eslint-disable-next-line no-undef
    before(function () {
      mocks = [redis];
      stubs = [_redisClient.redisClientStub.hmset];
    });

    // eslint-disable-next-line no-undef
    beforeEach(function () {
      redis.once().withExactArgs({ host: host, port: port }).returns(_redisClient.redisClientStub);
      _redisClient.redisClientStub.hmset.onFirstCall().callsFake(function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return args[args.length - 1](null, positiveReply);
      });
    });

    // eslint-disable-next-line no-undef
    it('should return a promise', function () {
      var _redisWrapper;

      return (_redisWrapper = (0, _redisWrapper6.default)({ redis: redis })({ host: host, port: port })).hmset.apply(_redisWrapper, _toConsumableArray(hmsetArgs)).should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should return positive response when successful', async function () {
      var _redisWrapper2;

      return (await (_redisWrapper2 = (0, _redisWrapper6.default)({ redis: redis })({ host: host, port: port })).hmset.apply(_redisWrapper2, _toConsumableArray(hmsetArgs))).should.equal(positiveReply);
    });
  });

  // eslint-disable-next-line no-undef
  describe('When calling hmset in redisWrapper (2)', function () {
    // eslint-disable-next-line no-undef
    before(function () {
      mocks = [redis];
      stubs = [_redisClient.redisClientStub.hmset];
    });

    // eslint-disable-next-line no-undef
    beforeEach(function () {
      redis.once().withExactArgs({ host: host, port: port }).returns(_redisClient.redisClientStub);
      _redisClient.redisClientStub.hmset.onFirstCall().callsFake(function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return args[args.length - 1](new Error('error'), null);
      });
    });

    // eslint-disable-next-line no-undef
    it('should fail when core redis client fails', async function () {
      var _redisWrapper3;

      return (_redisWrapper3 = (0, _redisWrapper6.default)({ redis: redis })({ host: host, port: port })).hmset.apply(_redisWrapper3, _toConsumableArray(hmsetArgs)).should.fail();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When calling hmset in redisWrapper (3)', function () {
    // eslint-disable-next-line no-undef
    before(function () {
      mocks = [redis, _redisClient.redisClientMock.hmset];
      stubs = [];
    });

    // eslint-disable-next-line no-undef
    beforeEach(function () {
      var _redisClientMock$hmse;

      redis.once().withExactArgs({ host: host, port: port }).returns(_redisClient.redisClientMock);
      (_redisClientMock$hmse = _redisClient.redisClientMock.hmset.once()).withArgs.apply(_redisClientMock$hmse, _toConsumableArray(hmsetArgs));
    });

    // eslint-disable-next-line no-undef
    it('hmset in core redis client should be called with proper arguments', function () {
      var _redisWrapper4;

      (_redisWrapper4 = (0, _redisWrapper6.default)({ redis: redis })({ host: host, port: port })).hmset.apply(_redisWrapper4, _toConsumableArray(hmsetArgs));
      '1'.should.equal('1');
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi93cmFwcGVycy9yZWRpc1dyYXBwZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJyZWRpcyIsImRlc2NyaWJlIiwibW9ja3MiLCJzdHVicyIsImhvc3QiLCJwb3J0IiwiZXhwZWN0ZWRQcm9wZXJ0aWVzIiwiaG1zZXRBcmdzIiwicG9zaXRpdmVSZXBseSIsImJlZm9yZSIsImFmdGVyRWFjaCIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwicmVzZXQiLCJzdHViIiwiYmVmb3JlRWFjaCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsIml0IiwicnciLCJzaG91bGQiLCJoYXZlIiwicHJvcGVydHkiLCJlcCIsImhtc2V0Iiwib25GaXJzdENhbGwiLCJjYWxsc0Zha2UiLCJhcmdzIiwibGVuZ3RoIiwiYmUiLCJhIiwiZXF1YWwiLCJFcnJvciIsImZhaWwiLCJ3aXRoQXJncyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztvTUFOQTs7QUFFQTs7QUFFQTs7O0FBSUEsSUFBTUEsUUFBUSxtQ0FBZDs7QUFFQTtBQUNBQyxTQUFTLGNBQVQsRUFBeUIsWUFBTTtBQUM3QixNQUNFQyxjQURGO0FBQUEsTUFFRUMsY0FGRjtBQUFBLE1BR0VDLGFBSEY7QUFBQSxNQUlFQyxhQUpGO0FBQUEsTUFLRUMsMkJBTEY7QUFBQSxNQU1FQyxrQkFORjtBQUFBLE1BT0VDLHNCQVBGOztBQVNBO0FBQ0FDLFNBQU8sWUFBTTtBQUNYTCxXQUFPLFdBQVA7QUFDQUMsV0FBTyxJQUFQO0FBQ0FDLHlCQUFxQixDQUFDLE9BQUQsQ0FBckI7QUFDQUMsZ0JBQVksQ0FBQyxJQUFELEVBQU8sQ0FBUCxFQUFVLE9BQVYsRUFBbUIsR0FBbkIsQ0FBWjtBQUNBQyxvQkFBZ0IsSUFBaEI7QUFDRCxHQU5EOztBQVFBO0FBQ0FFLFlBQVUsWUFBTTtBQUNkUixVQUFNUyxPQUFOLENBQWMsZ0JBQVE7QUFDcEJDLFdB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QUFILEVBQStDO0FBQUE7O0FBQUEsYUFDN0MsOENBQWEsRUFBRXBCLFlBQUYsRUFBYixFQUF3QixFQUFFSSxVQUFGLEVBQVFDLFVBQVIsRUFBeEIsR0FBd0NxQixLQUF4QywwQ0FBaURuQixTQUFqRCxHQUE0RGUsTUFBNUQsQ0FBbUVhLElBQW5FLEVBRDZDO0FBQUEsS0FBL0M7QUFFRCxHQWpCRDs7QUFtQkE7QUFDQWxDLFdBQVMsd0NBQVQsRUFBbUQsWUFBTTtBQUN2RDtBQUNBUSxXQUFPLFlBQU07QUFDWFAsY0FBUSxDQUFFRixLQUFGLEVBQVMsNkJBQWdCMEIsS0FBekIsQ0FBUjtBQUNBdkIsY0FBUSxFQUFSO0FBQ0QsS0FIRDs7QUFLQTtBQUNBYSxlQUFXLFlBQU07QUFBQTs7QUFDZmhCLFlBQU1pQixJQUFOLEdBQWFDLGFBQWIsQ0FBMkIsRUFBRWQsVUFBRixFQUFRQyxVQUFSLEVBQTNCLEVBQTJDYyxPQUEzQztBQUNBLDREQUFnQk8sS0FBaEIsQ0FBc0JULElBQXRCLElBQTZCbUIsUUFBN0IsaURBQXlDN0IsU0FBekM7QUFDRCxLQUhEOztBQUtBO0FBQ0FhLE9BQUcsbUVBQUgsRUFDRSxZQUFNO0FBQUE7O0FBQ0osb0RBQWEsRUFBRXBCLFlBQUYsRUFBYixFQUF3QixFQUFFSSxVQUFGLEVBQVFDLFVBQVIsRUFBeEIsR0FBd0NxQixLQUF4QywwQ0FBaURuQixTQUFqRDtBQUNBLFVBQUllLE1BQUosQ0FBV1csS0FBWCxDQUFpQixHQUFqQjtBQUNELEtBSkg7QUFLRCxHQW5CRDtBQW9CRCxDQXBIRCIsImZpbGUiOiJyZWRpc1dyYXBwZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGV4cGVjdCBmcm9tICcuLy4uLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHJlZGlzV3JhcHBlciBmcm9tICcuLy4uLy4uLy4uL21haW4vbGliL3dyYXBwZXJzL3JlZGlzV3JhcHBlcidcbi8vIG1vY2tzXG5pbXBvcnQgcGxhaW5PbGRNb2NrT2JqZWN0IGZyb20gJy4vLi4vLi4vbW9ja3Mvb3RoZXJzL3BsYWluT2xkTW9ja09iamVjdCdcbmltcG9ydCB7IHJlZGlzQ2xpZW50TW9jaywgcmVkaXNDbGllbnRTdHViIH1cbiAgZnJvbSAnLi8uLi8uLi9tb2Nrcy9vdGhlcnMvcmVkaXNDbGllbnQnXG5jb25zdCByZWRpcyA9IHBsYWluT2xkTW9ja09iamVjdCgpXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuZGVzY3JpYmUoJ1JlZGlzV3JhcHBlcicsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgc3R1YnMsXG4gICAgaG9zdCxcbiAgICBwb3J0LFxuICAgIGV4cGVjdGVkUHJvcGVydGllcyxcbiAgICBobXNldEFyZ3MsXG4gICAgcG9zaXRpdmVSZXBseVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmUoKCkgPT4ge1xuICAgIGhvc3QgPSAnbG9jYWxob3N0J1xuICAgIHBvcnQgPSAxMjM0XG4gICAgZXhwZWN0ZWRQcm9wZXJ0aWVzID0gWydobXNldCddXG4gICAgaG1zZXRBcmdzID0gWydpZCcsIDEsICd2YWx1ZScsICcxJ11cbiAgICBwb3NpdGl2ZVJlcGx5ID0gJ09LJ1xuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBhZnRlckVhY2goKCkgPT4ge1xuICAgIG1vY2tzLmZvckVhY2gobW9jayA9PiB7XG4gICAgICBtb2NrLnZlcmlmeSgpXG4gICAgICBtb2NrLnJlc2V0KClcbiAgICB9KVxuXG4gICAgc3R1YnMuZm9yRWFjaChzdHViID0+IHN0dWIucmVzZXQoKSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gY3JlYXRpbmcgcmVkaXNXcmFwcGVyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBtb2NrcyA9IFsgcmVkaXMgXVxuICAgICAgc3R1YnMgPSBbXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIHJlZGlzLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgaG9zdCwgcG9ydCB9KS5yZXR1cm5zKHJlZGlzQ2xpZW50U3R1YilcbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBoYXZlIGV4cGVjdGVkIHByb3BlcnRpZXMnLCAoKSA9PiB7XG4gICAgICBjb25zdCBydyA9IHJlZGlzV3JhcHBlcih7IHJlZGlzIH0pKHsgaG9zdCwgcG9ydCB9KVxuXG4gICAgICBleHBlY3RlZFByb3BlcnRpZXMuZm9yRWFjaChlcCA9PiBydy5zaG91bGQuaGF2ZS5wcm9wZXJ0eShlcCkpXG4gICAgfSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gY2FsbGluZyBobXNldCBpbiByZWRpc1dyYXBwZXIgKDEpJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBtb2NrcyA9IFsgcmVkaXMgXVxuICAgICAgc3R1YnMgPSBbIHJlZGlzQ2xpZW50U3R1Yi5obXNldCBdXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXMub25jZSgpLndpdGhFeGFjdEFyZ3MoeyBob3N0LCBwb3J0IH0pLnJldHVybnMocmVkaXNDbGllbnRTdHViKVxuICAgICAgcmVkaXNDbGllbnRTdHViLmhtc2V0Lm9uRmlyc3RDYWxsKClcbiAgICAgICAgLmNhbGxzRmFrZSgoLi4uYXJncykgPT4gYXJnc1thcmdzLmxlbmd0aCAtIDFdKG51bGwsIHBvc2l0aXZlUmVwbHkpKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PiByZWRpc1dyYXBwZXIoeyByZWRpcyB9KSh7IGhvc3QsIHBvcnQgfSlcbiAgICAgIC5obXNldCguLi5obXNldEFyZ3MpLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIHJldHVybiBwb3NpdGl2ZSByZXNwb25zZSB3aGVuIHN1Y2Nlc3NmdWwnLCBhc3luYyAoKSA9PlxuICAgICAgKGF3YWl0IHJlZGlzV3JhcHBlcih7IHJlZGlzIH0pKHsgaG9zdCwgcG9ydCB9KS5obXNldCguLi5obXNldEFyZ3MpKS5zaG91bGRcbiAgICAgICAgLmVxdWFsKHBvc2l0aXZlUmVwbHkpKVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjYWxsaW5nIGhtc2V0IGluIHJlZGlzV3JhcHBlciAoMiknLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlKCgpID0+IHtcbiAgICAgIG1vY2tzID0gWyByZWRpcyBdXG4gICAgICBzdHVicyA9IFsgcmVkaXNDbGllbnRTdHViLmhtc2V0IF1cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICByZWRpcy5vbmNlKCkud2l0aEV4YWN0QXJncyh7IGhvc3QsIHBvcnQgfSkucmV0dXJucyhyZWRpc0NsaWVudFN0dWIpXG4gICAgICByZWRpc0NsaWVudFN0dWIuaG1zZXQub25GaXJzdENhbGwoKVxuICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0obmV3IEVycm9yKCdlcnJvcicpLCBudWxsKSlcbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBmYWlsIHdoZW4gY29yZSByZWRpcyBjbGllbnQgZmFpbHMnLCBhc3luYyAoKSA9PlxuICAgICAgcmVkaXNXcmFwcGVyKHsgcmVkaXMgfSkoeyBob3N0LCBwb3J0IH0pLmhtc2V0KC4uLmhtc2V0QXJncykuc2hvdWxkLmZhaWwoKSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gY2FsbGluZyBobXNldCBpbiByZWRpc1dyYXBwZXIgKDMpJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBtb2NrcyA9IFsgcmVkaXMsIHJlZGlzQ2xpZW50TW9jay5obXNldCBdXG4gICAgICBzdHVicyA9IFtdXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXMub25jZSgpLndpdGhFeGFjdEFyZ3MoeyBob3N0LCBwb3J0IH0pLnJldHVybnMocmVkaXNDbGllbnRNb2NrKVxuICAgICAgcmVkaXNDbGllbnRNb2NrLmhtc2V0Lm9uY2UoKS53aXRoQXJncyguLi5obXNldEFyZ3MpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdobXNldCBpbiBjb3JlIHJlZGlzIGNsaWVudCBzaG91bGQgYmUgY2FsbGVkIHdpdGggcHJvcGVyIGFyZ3VtZW50cycsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHJlZGlzV3JhcHBlcih7IHJlZGlzIH0pKHsgaG9zdCwgcG9ydCB9KS5obXNldCguLi5obXNldEFyZ3MpXG4gICAgICAgICcxJy5zaG91bGQuZXF1YWwoJzEnKVxuICAgICAgfSlcbiAgfSlcbn0pXG4iXX0=