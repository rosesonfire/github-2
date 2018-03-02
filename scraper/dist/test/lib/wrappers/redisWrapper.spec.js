'use strict';

var _setup = require('./../../setup');

var _setup2 = _interopRequireDefault(_setup);

var _redisWrapper6 = require('./../../../main/lib/wrappers/redisWrapper');

var _redisWrapper7 = _interopRequireDefault(_redisWrapper6);

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
      var rw = (0, _redisWrapper7.default)({ redis: redis })({ host: host, port: port });

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

      return (_redisWrapper = (0, _redisWrapper7.default)({ redis: redis })({ host: host, port: port })).hmset.apply(_redisWrapper, _toConsumableArray(hmsetArgs)).should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should return positive response when successful', function () {
      var _redisWrapper2;

      return (_redisWrapper2 = (0, _redisWrapper7.default)({ redis: redis })({ host: host, port: port })).hmset.apply(_redisWrapper2, _toConsumableArray(hmsetArgs)).should.eventually.equal(positiveReply);
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
    it('should fail when core redis client returns error', function () {
      var _redisWrapper3;

      return (_redisWrapper3 = (0, _redisWrapper7.default)({ redis: redis })({ host: host, port: port })).hmset.apply(_redisWrapper3, _toConsumableArray(hmsetArgs)).should.eventually.be.rejected;
    });
  });

  // eslint-disable-next-line no-undef
  describe('When calling hmset in redisWrapper (3)', function () {
    // eslint-disable-next-line no-undef
    before(function () {
      mocks = [redis];
      stubs = [_redisClient.redisClientStub.hmset];
    });

    // eslint-disable-next-line no-undef
    beforeEach(function () {
      redis.once().withExactArgs({ host: host, port: port }).returns(_redisClient.redisClientStub);
      _redisClient.redisClientStub.hmset.onFirstCall().callsFake(function () {
        throw new Error('error');
      });
    });

    // eslint-disable-next-line no-undef
    it('should fail when core redis client fails', function () {
      var _redisWrapper4;

      return (_redisWrapper4 = (0, _redisWrapper7.default)({ redis: redis })({ host: host, port: port })).hmset.apply(_redisWrapper4, _toConsumableArray(hmsetArgs)).should.eventually.be.rejected;
    });
  });

  // eslint-disable-next-line no-undef
  describe('When calling hmset in redisWrapper (4)', function () {
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
      var _redisWrapper5;

      (_redisWrapper5 = (0, _redisWrapper7.default)({ redis: redis })({ host: host, port: port })).hmset.apply(_redisWrapper5, _toConsumableArray(hmsetArgs));
      '1'.should.equal('1');
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi93cmFwcGVycy9yZWRpc1dyYXBwZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJyZWRpcyIsImRlc2NyaWJlIiwibW9ja3MiLCJzdHVicyIsImhvc3QiLCJwb3J0IiwiZXhwZWN0ZWRQcm9wZXJ0aWVzIiwiaG1zZXRBcmdzIiwicG9zaXRpdmVSZXBseSIsImJlZm9yZSIsImFmdGVyRWFjaCIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwicmVzZXQiLCJzdHViIiwiYmVmb3JlRWFjaCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsIml0IiwicnciLCJzaG91bGQiLCJoYXZlIiwicHJvcGVydHkiLCJlcCIsImhtc2V0Iiwib25GaXJzdENhbGwiLCJjYWxsc0Zha2UiLCJhcmdzIiwibGVuZ3RoIiwiYmUiLCJhIiwiZXZlbnR1YWxseSIsImVxdWFsIiwiRXJyb3IiLCJyZWplY3RlZCIsIndpdGhBcmdzIl0sIm1hcHBpbmdzIjoiOztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O29NQU5BOztBQUVBOztBQUVBOzs7QUFJQSxJQUFNQSxRQUFRLG1DQUFkOztBQUVBO0FBQ0FDLFNBQVMsY0FBVCxFQUF5QixZQUFNO0FBQzdCLE1BQ0VDLGNBREY7QUFBQSxNQUVFQyxjQUZGO0FBQUEsTUFHRUMsYUFIRjtBQUFBLE1BSUVDLGFBSkY7QUFBQSxNQUtFQywyQkFMRjtBQUFBLE1BTUVDLGtCQU5GO0FBQUEsTUFPRUMsc0JBUEY7O0FBU0E7QUFDQUMsU0FBTyxZQUFNO0FBQ1hMLFdBQU8sV0FBUDtBQUNBQyxXQUFPLElBQVA7QUFDQUMseUJBQXFCLENBQUMsT0FBRCxDQUFyQjtBQUNBQyxnQkFBWSxDQUFDLElBQUQsRUFBTyxDQUFQLEVBQVUsT0FBVixFQUFtQixHQUFuQixDQUFaO0FBQ0FDLG9CQUFnQixJQUFoQjtBQUNELEdBTkQ7O0FBUUE7QUFDQUUsWUFBVSxZQUFNO0FBQ2RSLFVBQU1TLE9BQU4sQ0FB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O0FBQ2ZoQixZQUFNaUIsSUFBTixHQUFhQyxhQUFiLENBQTJCLEVBQUVkLFVBQUYsRUFBUUMsVUFBUixFQUEzQixFQUEyQ2MsT0FBM0M7QUFDQSw0REFBZ0JPLEtBQWhCLENBQXNCVCxJQUF0QixJQUE2Qm9CLFFBQTdCLGlEQUF5QzlCLFNBQXpDO0FBQ0QsS0FIRDs7QUFLQTtBQUNBYSxPQUFHLG1FQUFILEVBQ0UsWUFBTTtBQUFBOztBQUNKLG9EQUFhLEVBQUVwQixZQUFGLEVBQWIsRUFBd0IsRUFBRUksVUFBRixFQUFRQyxVQUFSLEVBQXhCLEdBQXdDcUIsS0FBeEMsMENBQWlEbkIsU0FBakQ7QUFDQSxVQUFJZSxNQUFKLENBQVdZLEtBQVgsQ0FBaUIsR0FBakI7QUFDRCxLQUpIO0FBS0QsR0FuQkQ7QUFvQkQsQ0ExSUQiLCJmaWxlIjoicmVkaXNXcmFwcGVyLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBleHBlY3QgZnJvbSAnLi8uLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCByZWRpc1dyYXBwZXIgZnJvbSAnLi8uLi8uLi8uLi9tYWluL2xpYi93cmFwcGVycy9yZWRpc1dyYXBwZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkTW9ja09iamVjdCBmcm9tICcuLy4uLy4uL21vY2tzL290aGVycy9wbGFpbk9sZE1vY2tPYmplY3QnXG5pbXBvcnQgeyByZWRpc0NsaWVudE1vY2ssIHJlZGlzQ2xpZW50U3R1YiB9XG4gIGZyb20gJy4vLi4vLi4vbW9ja3Mvb3RoZXJzL3JlZGlzQ2xpZW50J1xuY29uc3QgcmVkaXMgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdSZWRpc1dyYXBwZXInLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIHN0dWJzLFxuICAgIGhvc3QsXG4gICAgcG9ydCxcbiAgICBleHBlY3RlZFByb3BlcnRpZXMsXG4gICAgaG1zZXRBcmdzLFxuICAgIHBvc2l0aXZlUmVwbHlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICBob3N0ID0gJ2xvY2FsaG9zdCdcbiAgICBwb3J0ID0gMTIzNFxuICAgIGV4cGVjdGVkUHJvcGVydGllcyA9IFsnaG1zZXQnXVxuICAgIGhtc2V0QXJncyA9IFsnaWQnLCAxLCAndmFsdWUnLCAnMSddXG4gICAgcG9zaXRpdmVSZXBseSA9ICdPSydcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4ge1xuICAgICAgbW9jay52ZXJpZnkoKVxuICAgICAgbW9jay5yZXNldCgpXG4gICAgfSlcblxuICAgIHN0dWJzLmZvckVhY2goc3R1YiA9PiBzdHViLnJlc2V0KCkpXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGNyZWF0aW5nIHJlZGlzV3JhcHBlcicsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmUoKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbIHJlZGlzIF1cbiAgICAgIHN0dWJzID0gW11cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICByZWRpcy5vbmNlKCkud2l0aEV4YWN0QXJncyh7IGhvc3QsIHBvcnQgfSkucmV0dXJucyhyZWRpc0NsaWVudFN0dWIpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgaGF2ZSBleHBlY3RlZCBwcm9wZXJ0aWVzJywgKCkgPT4ge1xuICAgICAgY29uc3QgcncgPSByZWRpc1dyYXBwZXIoeyByZWRpcyB9KSh7IGhvc3QsIHBvcnQgfSlcblxuICAgICAgZXhwZWN0ZWRQcm9wZXJ0aWVzLmZvckVhY2goZXAgPT4gcncuc2hvdWxkLmhhdmUucHJvcGVydHkoZXApKVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGNhbGxpbmcgaG1zZXQgaW4gcmVkaXNXcmFwcGVyICgxKScsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmUoKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbIHJlZGlzIF1cbiAgICAgIHN0dWJzID0gWyByZWRpc0NsaWVudFN0dWIuaG1zZXQgXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIHJlZGlzLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgaG9zdCwgcG9ydCB9KS5yZXR1cm5zKHJlZGlzQ2xpZW50U3R1YilcbiAgICAgIHJlZGlzQ2xpZW50U3R1Yi5obXNldC5vbkZpcnN0Q2FsbCgpXG4gICAgICAgIC5jYWxsc0Zha2UoKC4uLmFyZ3MpID0+IGFyZ3NbYXJncy5sZW5ndGggLSAxXShudWxsLCBwb3NpdGl2ZVJlcGx5KSlcbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgKCkgPT4gcmVkaXNXcmFwcGVyKHsgcmVkaXMgfSkoeyBob3N0LCBwb3J0IH0pXG4gICAgICAuaG1zZXQoLi4uaG1zZXRBcmdzKS5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gcG9zaXRpdmUgcmVzcG9uc2Ugd2hlbiBzdWNjZXNzZnVsJywgKCkgPT5cbiAgICAgIHJlZGlzV3JhcHBlcih7IHJlZGlzIH0pKHsgaG9zdCwgcG9ydCB9KS5obXNldCguLi5obXNldEFyZ3MpLnNob3VsZFxuICAgICAgICAuZXZlbnR1YWxseS5lcXVhbChwb3NpdGl2ZVJlcGx5KSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gY2FsbGluZyBobXNldCBpbiByZWRpc1dyYXBwZXIgKDIpJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBtb2NrcyA9IFsgcmVkaXMgXVxuICAgICAgc3R1YnMgPSBbIHJlZGlzQ2xpZW50U3R1Yi5obXNldCBdXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXMub25jZSgpLndpdGhFeGFjdEFyZ3MoeyBob3N0LCBwb3J0IH0pLnJldHVybnMocmVkaXNDbGllbnRTdHViKVxuICAgICAgcmVkaXNDbGllbnRTdHViLmhtc2V0Lm9uRmlyc3RDYWxsKClcbiAgICAgICAgLmNhbGxzRmFrZSgoLi4uYXJncykgPT4gYXJnc1thcmdzLmxlbmd0aCAtIDFdKG5ldyBFcnJvcignZXJyb3InKSwgbnVsbCkpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgZmFpbCB3aGVuIGNvcmUgcmVkaXMgY2xpZW50IHJldHVybnMgZXJyb3InLCAoKSA9PlxuICAgICAgcmVkaXNXcmFwcGVyKHsgcmVkaXMgfSkoeyBob3N0LCBwb3J0IH0pLmhtc2V0KC4uLmhtc2V0QXJncykuc2hvdWxkXG4gICAgICAgIC5ldmVudHVhbGx5LmJlLnJlamVjdGVkKVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjYWxsaW5nIGhtc2V0IGluIHJlZGlzV3JhcHBlciAoMyknLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlKCgpID0+IHtcbiAgICAgIG1vY2tzID0gWyByZWRpcyBdXG4gICAgICBzdHVicyA9IFsgcmVkaXNDbGllbnRTdHViLmhtc2V0IF1cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICByZWRpcy5vbmNlKCkud2l0aEV4YWN0QXJncyh7IGhvc3QsIHBvcnQgfSkucmV0dXJucyhyZWRpc0NsaWVudFN0dWIpXG4gICAgICByZWRpc0NsaWVudFN0dWIuaG1zZXQub25GaXJzdENhbGwoKVxuICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiB7IHRocm93IG5ldyBFcnJvcignZXJyb3InKSB9KVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGZhaWwgd2hlbiBjb3JlIHJlZGlzIGNsaWVudCBmYWlscycsICgpID0+XG4gICAgICByZWRpc1dyYXBwZXIoeyByZWRpcyB9KSh7IGhvc3QsIHBvcnQgfSkuaG1zZXQoLi4uaG1zZXRBcmdzKS5zaG91bGRcbiAgICAgICAgLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWQpXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGNhbGxpbmcgaG1zZXQgaW4gcmVkaXNXcmFwcGVyICg0KScsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmUoKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbIHJlZGlzLCByZWRpc0NsaWVudE1vY2suaG1zZXQgXVxuICAgICAgc3R1YnMgPSBbXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIHJlZGlzLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgaG9zdCwgcG9ydCB9KS5yZXR1cm5zKHJlZGlzQ2xpZW50TW9jaylcbiAgICAgIHJlZGlzQ2xpZW50TW9jay5obXNldC5vbmNlKCkud2l0aEFyZ3MoLi4uaG1zZXRBcmdzKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnaG1zZXQgaW4gY29yZSByZWRpcyBjbGllbnQgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHByb3BlciBhcmd1bWVudHMnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICByZWRpc1dyYXBwZXIoeyByZWRpcyB9KSh7IGhvc3QsIHBvcnQgfSkuaG1zZXQoLi4uaG1zZXRBcmdzKVxuICAgICAgICAnMScuc2hvdWxkLmVxdWFsKCcxJylcbiAgICAgIH0pXG4gIH0pXG59KVxuIl19