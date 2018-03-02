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
    hmsetArgs = [1, 'id', 1, 'value', '1'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi93cmFwcGVycy9yZWRpc1dyYXBwZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJyZWRpcyIsImRlc2NyaWJlIiwibW9ja3MiLCJzdHVicyIsImhvc3QiLCJwb3J0IiwiZXhwZWN0ZWRQcm9wZXJ0aWVzIiwiaG1zZXRBcmdzIiwicG9zaXRpdmVSZXBseSIsImJlZm9yZSIsImFmdGVyRWFjaCIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwicmVzZXQiLCJzdHViIiwiYmVmb3JlRWFjaCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsIml0IiwicnciLCJzaG91bGQiLCJoYXZlIiwicHJvcGVydHkiLCJlcCIsImhtc2V0Iiwib25GaXJzdENhbGwiLCJjYWxsc0Zha2UiLCJhcmdzIiwibGVuZ3RoIiwiYmUiLCJhIiwiZXZlbnR1YWxseSIsImVxdWFsIiwiRXJyb3IiLCJyZWplY3RlZCIsIndpdGhBcmdzIl0sIm1hcHBpbmdzIjoiOztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O29NQU5BOztBQUVBOztBQUVBOzs7QUFJQSxJQUFNQSxRQUFRLG1DQUFkOztBQUVBO0FBQ0FDLFNBQVMsY0FBVCxFQUF5QixZQUFNO0FBQzdCLE1BQ0VDLGNBREY7QUFBQSxNQUVFQyxjQUZGO0FBQUEsTUFHRUMsYUFIRjtBQUFBLE1BSUVDLGFBSkY7QUFBQSxNQUtFQywyQkFMRjtBQUFBLE1BTUVDLGtCQU5GO0FBQUEsTUFPRUMsc0JBUEY7O0FBU0E7QUFDQUMsU0FBTyxZQUFNO0FBQ1hMLFdBQU8sV0FBUDtBQUNBQyxXQUFPLElBQVA7QUFDQUMseUJBQXFCLENBQUMsT0FBRCxDQUFyQjtBQUNBQyxnQkFBWSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLE9BQWIsRUFBc0IsR0FBdEIsQ0FBWjtBQUNBQyxvQkFBZ0IsSUFBaEI7QUFDRCxHQU5EOztBQVFBO0FBQ0FFLFlBQVUsWUFBTTtBQUNkUixVQUFN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WUFBTTtBQUFBOztBQUNmaEIsWUFBTWlCLElBQU4sR0FBYUMsYUFBYixDQUEyQixFQUFFZCxVQUFGLEVBQVFDLFVBQVIsRUFBM0IsRUFBMkNjLE9BQTNDO0FBQ0EsNERBQWdCTyxLQUFoQixDQUFzQlQsSUFBdEIsSUFBNkJvQixRQUE3QixpREFBeUM5QixTQUF6QztBQUNELEtBSEQ7O0FBS0E7QUFDQWEsT0FBRyxtRUFBSCxFQUNFLFlBQU07QUFBQTs7QUFDSixvREFBYSxFQUFFcEIsWUFBRixFQUFiLEVBQXdCLEVBQUVJLFVBQUYsRUFBUUMsVUFBUixFQUF4QixHQUF3Q3FCLEtBQXhDLDBDQUFpRG5CLFNBQWpEO0FBQ0EsVUFBSWUsTUFBSixDQUFXWSxLQUFYLENBQWlCLEdBQWpCO0FBQ0QsS0FKSDtBQUtELEdBbkJEO0FBb0JELENBMUlEIiwiZmlsZSI6InJlZGlzV3JhcHBlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgcmVkaXNXcmFwcGVyIGZyb20gJy4vLi4vLi4vLi4vbWFpbi9saWIvd3JhcHBlcnMvcmVkaXNXcmFwcGVyJ1xuLy8gbW9ja3NcbmltcG9ydCBwbGFpbk9sZE1vY2tPYmplY3QgZnJvbSAnLi8uLi8uLi9tb2Nrcy9vdGhlcnMvcGxhaW5PbGRNb2NrT2JqZWN0J1xuaW1wb3J0IHsgcmVkaXNDbGllbnRNb2NrLCByZWRpc0NsaWVudFN0dWIgfVxuICBmcm9tICcuLy4uLy4uL21vY2tzL290aGVycy9yZWRpc0NsaWVudCdcbmNvbnN0IHJlZGlzID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5kZXNjcmliZSgnUmVkaXNXcmFwcGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICBzdHVicyxcbiAgICBob3N0LFxuICAgIHBvcnQsXG4gICAgZXhwZWN0ZWRQcm9wZXJ0aWVzLFxuICAgIGhtc2V0QXJncyxcbiAgICBwb3NpdGl2ZVJlcGx5XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgaG9zdCA9ICdsb2NhbGhvc3QnXG4gICAgcG9ydCA9IDEyMzRcbiAgICBleHBlY3RlZFByb3BlcnRpZXMgPSBbJ2htc2V0J11cbiAgICBobXNldEFyZ3MgPSBbMSwgJ2lkJywgMSwgJ3ZhbHVlJywgJzEnXVxuICAgIHBvc2l0aXZlUmVwbHkgPSAnT0snXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgbW9ja3MuZm9yRWFjaChtb2NrID0+IHtcbiAgICAgIG1vY2sudmVyaWZ5KClcbiAgICAgIG1vY2sucmVzZXQoKVxuICAgIH0pXG5cbiAgICBzdHVicy5mb3JFYWNoKHN0dWIgPT4gc3R1Yi5yZXNldCgpKVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjcmVhdGluZyByZWRpc1dyYXBwZXInLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlKCgpID0+IHtcbiAgICAgIG1vY2tzID0gWyByZWRpcyBdXG4gICAgICBzdHVicyA9IFtdXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXMub25jZSgpLndpdGhFeGFjdEFyZ3MoeyBob3N0LCBwb3J0IH0pLnJldHVybnMocmVkaXNDbGllbnRTdHViKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGhhdmUgZXhwZWN0ZWQgcHJvcGVydGllcycsICgpID0+IHtcbiAgICAgIGNvbnN0IHJ3ID0gcmVkaXNXcmFwcGVyKHsgcmVkaXMgfSkoeyBob3N0LCBwb3J0IH0pXG5cbiAgICAgIGV4cGVjdGVkUHJvcGVydGllcy5mb3JFYWNoKGVwID0+IHJ3LnNob3VsZC5oYXZlLnByb3BlcnR5KGVwKSlcbiAgICB9KVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjYWxsaW5nIGhtc2V0IGluIHJlZGlzV3JhcHBlciAoMSknLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlKCgpID0+IHtcbiAgICAgIG1vY2tzID0gWyByZWRpcyBdXG4gICAgICBzdHVicyA9IFsgcmVkaXNDbGllbnRTdHViLmhtc2V0IF1cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICByZWRpcy5vbmNlKCkud2l0aEV4YWN0QXJncyh7IGhvc3QsIHBvcnQgfSkucmV0dXJucyhyZWRpc0NsaWVudFN0dWIpXG4gICAgICByZWRpc0NsaWVudFN0dWIuaG1zZXQub25GaXJzdENhbGwoKVxuICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0obnVsbCwgcG9zaXRpdmVSZXBseSkpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+IHJlZGlzV3JhcHBlcih7IHJlZGlzIH0pKHsgaG9zdCwgcG9ydCB9KVxuICAgICAgLmhtc2V0KC4uLmhtc2V0QXJncykuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHBvc2l0aXZlIHJlc3BvbnNlIHdoZW4gc3VjY2Vzc2Z1bCcsICgpID0+XG4gICAgICByZWRpc1dyYXBwZXIoeyByZWRpcyB9KSh7IGhvc3QsIHBvcnQgfSkuaG1zZXQoLi4uaG1zZXRBcmdzKS5zaG91bGRcbiAgICAgICAgLmV2ZW50dWFsbHkuZXF1YWwocG9zaXRpdmVSZXBseSkpXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGNhbGxpbmcgaG1zZXQgaW4gcmVkaXNXcmFwcGVyICgyKScsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmUoKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbIHJlZGlzIF1cbiAgICAgIHN0dWJzID0gWyByZWRpc0NsaWVudFN0dWIuaG1zZXQgXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIHJlZGlzLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgaG9zdCwgcG9ydCB9KS5yZXR1cm5zKHJlZGlzQ2xpZW50U3R1YilcbiAgICAgIHJlZGlzQ2xpZW50U3R1Yi5obXNldC5vbkZpcnN0Q2FsbCgpXG4gICAgICAgIC5jYWxsc0Zha2UoKC4uLmFyZ3MpID0+IGFyZ3NbYXJncy5sZW5ndGggLSAxXShuZXcgRXJyb3IoJ2Vycm9yJyksIG51bGwpKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGZhaWwgd2hlbiBjb3JlIHJlZGlzIGNsaWVudCByZXR1cm5zIGVycm9yJywgKCkgPT5cbiAgICAgIHJlZGlzV3JhcHBlcih7IHJlZGlzIH0pKHsgaG9zdCwgcG9ydCB9KS5obXNldCguLi5obXNldEFyZ3MpLnNob3VsZFxuICAgICAgICAuZXZlbnR1YWxseS5iZS5yZWplY3RlZClcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gY2FsbGluZyBobXNldCBpbiByZWRpc1dyYXBwZXIgKDMpJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBtb2NrcyA9IFsgcmVkaXMgXVxuICAgICAgc3R1YnMgPSBbIHJlZGlzQ2xpZW50U3R1Yi5obXNldCBdXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXMub25jZSgpLndpdGhFeGFjdEFyZ3MoeyBob3N0LCBwb3J0IH0pLnJldHVybnMocmVkaXNDbGllbnRTdHViKVxuICAgICAgcmVkaXNDbGllbnRTdHViLmhtc2V0Lm9uRmlyc3RDYWxsKClcbiAgICAgICAgLmNhbGxzRmFrZSgoLi4uYXJncykgPT4geyB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yJykgfSlcbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBmYWlsIHdoZW4gY29yZSByZWRpcyBjbGllbnQgZmFpbHMnLCAoKSA9PlxuICAgICAgcmVkaXNXcmFwcGVyKHsgcmVkaXMgfSkoeyBob3N0LCBwb3J0IH0pLmhtc2V0KC4uLmhtc2V0QXJncykuc2hvdWxkXG4gICAgICAgIC5ldmVudHVhbGx5LmJlLnJlamVjdGVkKVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjYWxsaW5nIGhtc2V0IGluIHJlZGlzV3JhcHBlciAoNCknLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlKCgpID0+IHtcbiAgICAgIG1vY2tzID0gWyByZWRpcywgcmVkaXNDbGllbnRNb2NrLmhtc2V0IF1cbiAgICAgIHN0dWJzID0gW11cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICByZWRpcy5vbmNlKCkud2l0aEV4YWN0QXJncyh7IGhvc3QsIHBvcnQgfSkucmV0dXJucyhyZWRpc0NsaWVudE1vY2spXG4gICAgICByZWRpc0NsaWVudE1vY2suaG1zZXQub25jZSgpLndpdGhBcmdzKC4uLmhtc2V0QXJncylcbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ2htc2V0IGluIGNvcmUgcmVkaXMgY2xpZW50IHNob3VsZCBiZSBjYWxsZWQgd2l0aCBwcm9wZXIgYXJndW1lbnRzJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgcmVkaXNXcmFwcGVyKHsgcmVkaXMgfSkoeyBob3N0LCBwb3J0IH0pLmhtc2V0KC4uLmhtc2V0QXJncylcbiAgICAgICAgJzEnLnNob3VsZC5lcXVhbCgnMScpXG4gICAgICB9KVxuICB9KVxufSlcbiJdfQ==