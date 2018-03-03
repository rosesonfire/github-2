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


// eslint-disable-next-line no-undef
describe('RedisWrapper', function () {
  var mocks = void 0,
      redis = void 0,
      redisClient = void 0,
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
  beforeEach(function () {
    redis = (0, _plainOldMockObject2.default)();
  });

  // eslint-disable-next-line no-undef
  afterEach(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When creating redisWrapper', function () {
    // eslint-disable-next-line no-undef
    beforeEach(function () {
      redisClient = (0, _redisClient.redisClientStub)();
      mocks = [redis];
      redis.once().withExactArgs({ host: host, port: port }).returns(redisClient);
    });

    // eslint-disable-next-line no-undef
    it('should have expected properties', function () {
      var rw = (0, _redisWrapper7.default)({ redis: redis })({ host: host, port: port });

      expectedProperties.forEach(function (ep) {
        return rw.should.have.property(ep);
      });
    });

    // eslint-disable-next-line no-undef
    describe('When calling hmset in redisWrapper', function () {
      // eslint-disable-next-line no-undef
      describe('When successful', function () {
        // eslint-disable-next-line no-undef
        beforeEach(function () {
          return redisClient.hmset.onFirstCall().callsFake(function () {
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
        it('should return positive response', function () {
          var _redisWrapper2;

          return (_redisWrapper2 = (0, _redisWrapper7.default)({ redis: redis })({ host: host, port: port })).hmset.apply(_redisWrapper2, _toConsumableArray(hmsetArgs)).should.eventually.equal(positiveReply);
        });
      });

      // eslint-disable-next-line no-undef
      describe('When core redis client returns error', function () {
        // eslint-disable-next-line no-undef
        beforeEach(function () {
          return redisClient.hmset.onFirstCall().callsFake(function () {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return args[args.length - 1](new Error('er'), null);
          });
        });

        // eslint-disable-next-line no-undef
        it('should fail', function () {
          var _redisWrapper3;

          return (_redisWrapper3 = (0, _redisWrapper7.default)({ redis: redis })({ host: host, port: port })).hmset.apply(_redisWrapper3, _toConsumableArray(hmsetArgs)).should.eventually.be.rejected;
        });
      });

      // eslint-disable-next-line no-undef
      describe('When core redis client fails', function () {
        // eslint-disable-next-line no-undef
        beforeEach(function () {
          return redisClient.hmset.onFirstCall().callsFake(function () {
            throw new Error('er');
          });
        });

        // eslint-disable-next-line no-undef
        it('should fail', function () {
          var _redisWrapper4;

          return (_redisWrapper4 = (0, _redisWrapper7.default)({ redis: redis })({ host: host, port: port })).hmset.apply(_redisWrapper4, _toConsumableArray(hmsetArgs)).should.eventually.be.rejected;
        });
      });
    });
  });

  // eslint-disable-next-line no-undef
  describe('When calling hmset in redisWrapper', function () {
    // eslint-disable-next-line no-undef
    beforeEach(function () {
      var _redisClient$hmset$on;

      redisClient = (0, _redisClient.redisClientMock)();
      mocks = [redis, redisClient.hmset];
      redis.once().withExactArgs({ host: host, port: port }).returns(redisClient);
      (_redisClient$hmset$on = redisClient.hmset.once()).withArgs.apply(_redisClient$hmset$on, _toConsumableArray(hmsetArgs));
    });

    // eslint-disable-next-line no-undef
    it('should be called with proper arguments', function () {
      var _redisWrapper5;

      (_redisWrapper5 = (0, _redisWrapper7.default)({ redis: redis })({ host: host, port: port })).hmset.apply(_redisWrapper5, _toConsumableArray(hmsetArgs));
      '1'.should.equal('1');
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi93cmFwcGVycy9yZWRpc1dyYXBwZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwicmVkaXMiLCJyZWRpc0NsaWVudCIsImhvc3QiLCJwb3J0IiwiZXhwZWN0ZWRQcm9wZXJ0aWVzIiwiaG1zZXRBcmdzIiwicG9zaXRpdmVSZXBseSIsImJlZm9yZSIsImJlZm9yZUVhY2giLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsIml0IiwicnciLCJzaG91bGQiLCJoYXZlIiwicHJvcGVydHkiLCJlcCIsImhtc2V0Iiwib25GaXJzdENhbGwiLCJjYWxsc0Zha2UiLCJhcmdzIiwibGVuZ3RoIiwiYmUiLCJhIiwiZXZlbnR1YWxseSIsImVxdWFsIiwiRXJyb3IiLCJyZWplY3RlZCIsIndpdGhBcmdzIl0sIm1hcHBpbmdzIjoiOztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O29NQU5BOztBQUVBOztBQUVBOzs7QUFLQTtBQUNBQSxTQUFTLGNBQVQsRUFBeUIsWUFBTTtBQUM3QixNQUNFQyxjQURGO0FBQUEsTUFFRUMsY0FGRjtBQUFBLE1BR0VDLG9CQUhGO0FBQUEsTUFJRUMsYUFKRjtBQUFBLE1BS0VDLGFBTEY7QUFBQSxNQU1FQywyQkFORjtBQUFBLE1BT0VDLGtCQVBGO0FBQUEsTUFRRUMsc0JBUkY7O0FBVUE7QUFDQUMsU0FBTyxZQUFNO0FBQ1hMLFdBQU8sV0FBUDtBQUNBQyxXQUFPLElBQVA7QUFDQUMseUJBQXFCLENBQUMsT0FBRCxDQUFyQjtBQUNBQyxnQkFBWSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLE9BQWIsRUFBc0IsR0FBdEIsQ0FBWjtBQUNBQyxvQkFBZ0IsSUFBaEI7QUFDRCxHQU5EOztBQVFBO0FBQ0FFLGFBQVcsWUFBTTtBQUNmUixZQUFRLG1DQUFSO0FBQ0QsR0FG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O0FBQXVCLFdBRGxDLENBQU47QUFBQSxTQUFYOztBQUdBO0FBQ0FmLFdBQUcsYUFBSCxFQUFrQjtBQUFBOztBQUFBLGlCQUNoQiw4Q0FBYSxFQUFFaEIsWUFBRixFQUFiLEVBQXdCLEVBQUVFLFVBQUYsRUFBUUMsVUFBUixFQUF4QixHQUF3Q21CLEtBQXhDLDBDQUFpRGpCLFNBQWpELEdBQTREYSxNQUE1RCxDQUNHVyxVQURILENBQ2NGLEVBRGQsQ0FDaUJLLFFBRkQ7QUFBQSxTQUFsQjtBQUdELE9BVEQ7QUFVRCxLQXpDRDtBQTBDRCxHQTFERDs7QUE0REE7QUFDQWxDLFdBQVMsb0NBQVQsRUFBK0MsWUFBTTtBQUNuRDtBQUNBVSxlQUFXLFlBQU07QUFBQTs7QUFDZlAsb0JBQWMsbUNBQWQ7QUFDQUYsY0FBUSxDQUFFQyxLQUFGLEVBQVNDLFlBQVlxQixLQUFyQixDQUFSO0FBQ0F0QixZQUFNYSxJQUFOLEdBQWFDLGFBQWIsQ0FBMkIsRUFBRVosVUFBRixFQUFRQyxVQUFSLEVBQTNCLEVBQTJDWSxPQUEzQyxDQUFtRGQsV0FBbkQ7QUFDQSwyQ0FBWXFCLEtBQVosQ0FBa0JULElBQWxCLElBQXlCb0IsUUFBekIsaURBQXFDNUIsU0FBckM7QUFDRCxLQUxEOztBQU9BO0FBQ0FXLE9BQUcsd0NBQUgsRUFDRSxZQUFNO0FBQUE7O0FBQ0osb0RBQWEsRUFBRWhCLFlBQUYsRUFBYixFQUF3QixFQUFFRSxVQUFGLEVBQVFDLFVBQVIsRUFBeEIsR0FBd0NtQixLQUF4QywwQ0FBaURqQixTQUFqRDtBQUNBLFVBQUlhLE1BQUosQ0FBV1ksS0FBWCxDQUFpQixHQUFqQjtBQUNELEtBSkg7QUFLRCxHQWZEO0FBZ0JELENBMUdEIiwiZmlsZSI6InJlZGlzV3JhcHBlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgcmVkaXNXcmFwcGVyIGZyb20gJy4vLi4vLi4vLi4vbWFpbi9saWIvd3JhcHBlcnMvcmVkaXNXcmFwcGVyJ1xuLy8gbW9ja3NcbmltcG9ydCBwbGFpbk9sZE1vY2tPYmplY3QgZnJvbSAnLi8uLi8uLi9tb2Nrcy9vdGhlcnMvcGxhaW5PbGRNb2NrT2JqZWN0J1xuaW1wb3J0IHsgcmVkaXNDbGllbnRNb2NrLCByZWRpc0NsaWVudFN0dWIgfVxuICBmcm9tICcuLy4uLy4uL21vY2tzL290aGVycy9yZWRpc0NsaWVudCdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5kZXNjcmliZSgnUmVkaXNXcmFwcGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICByZWRpcyxcbiAgICByZWRpc0NsaWVudCxcbiAgICBob3N0LFxuICAgIHBvcnQsXG4gICAgZXhwZWN0ZWRQcm9wZXJ0aWVzLFxuICAgIGhtc2V0QXJncyxcbiAgICBwb3NpdGl2ZVJlcGx5XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgaG9zdCA9ICdsb2NhbGhvc3QnXG4gICAgcG9ydCA9IDEyMzRcbiAgICBleHBlY3RlZFByb3BlcnRpZXMgPSBbJ2htc2V0J11cbiAgICBobXNldEFyZ3MgPSBbMSwgJ2lkJywgMSwgJ3ZhbHVlJywgJzEnXVxuICAgIHBvc2l0aXZlUmVwbHkgPSAnT0snXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIHJlZGlzID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gY3JlYXRpbmcgcmVkaXNXcmFwcGVyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXNDbGllbnQgPSByZWRpc0NsaWVudFN0dWIoKVxuICAgICAgbW9ja3MgPSBbIHJlZGlzIF1cbiAgICAgIHJlZGlzLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgaG9zdCwgcG9ydCB9KS5yZXR1cm5zKHJlZGlzQ2xpZW50KVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGhhdmUgZXhwZWN0ZWQgcHJvcGVydGllcycsICgpID0+IHtcbiAgICAgIGNvbnN0IHJ3ID0gcmVkaXNXcmFwcGVyKHsgcmVkaXMgfSkoeyBob3N0LCBwb3J0IH0pXG5cbiAgICAgIGV4cGVjdGVkUHJvcGVydGllcy5mb3JFYWNoKGVwID0+IHJ3LnNob3VsZC5oYXZlLnByb3BlcnR5KGVwKSlcbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgZGVzY3JpYmUoJ1doZW4gY2FsbGluZyBobXNldCBpbiByZWRpc1dyYXBwZXInLCAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGRlc2NyaWJlKCdXaGVuIHN1Y2Nlc3NmdWwnLCAoKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHJlZGlzQ2xpZW50Lmhtc2V0Lm9uRmlyc3RDYWxsKClcbiAgICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0obnVsbCwgcG9zaXRpdmVSZXBseSkpKVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgICAgIHJlZGlzV3JhcHBlcih7IHJlZGlzIH0pKHsgaG9zdCwgcG9ydCB9KS5obXNldCguLi5obXNldEFyZ3MpLnNob3VsZC5iZVxuICAgICAgICAgICAgLmEoJ3Byb21pc2UnKSlcblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gcG9zaXRpdmUgcmVzcG9uc2UnLCAoKSA9PlxuICAgICAgICAgIHJlZGlzV3JhcHBlcih7IHJlZGlzIH0pKHsgaG9zdCwgcG9ydCB9KS5obXNldCguLi5obXNldEFyZ3MpLnNob3VsZFxuICAgICAgICAgICAgLmV2ZW50dWFsbHkuZXF1YWwocG9zaXRpdmVSZXBseSkpXG4gICAgICB9KVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGRlc2NyaWJlKCdXaGVuIGNvcmUgcmVkaXMgY2xpZW50IHJldHVybnMgZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHJlZGlzQ2xpZW50Lmhtc2V0Lm9uRmlyc3RDYWxsKClcbiAgICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0obmV3IEVycm9yKCdlcicpLCBudWxsKSkpXG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIGl0KCdzaG91bGQgZmFpbCcsICgpID0+XG4gICAgICAgICAgcmVkaXNXcmFwcGVyKHsgcmVkaXMgfSkoeyBob3N0LCBwb3J0IH0pLmhtc2V0KC4uLmhtc2V0QXJncykuc2hvdWxkXG4gICAgICAgICAgICAuZXZlbnR1YWxseS5iZS5yZWplY3RlZClcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgZGVzY3JpYmUoJ1doZW4gY29yZSByZWRpcyBjbGllbnQgZmFpbHMnLCAoKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHJlZGlzQ2xpZW50Lmhtc2V0Lm9uRmlyc3RDYWxsKClcbiAgICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiB7IHRocm93IG5ldyBFcnJvcignZXInKSB9KSlcblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgaXQoJ3Nob3VsZCBmYWlsJywgKCkgPT5cbiAgICAgICAgICByZWRpc1dyYXBwZXIoeyByZWRpcyB9KSh7IGhvc3QsIHBvcnQgfSkuaG1zZXQoLi4uaG1zZXRBcmdzKS5zaG91bGRcbiAgICAgICAgICAgIC5ldmVudHVhbGx5LmJlLnJlamVjdGVkKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjYWxsaW5nIGhtc2V0IGluIHJlZGlzV3JhcHBlcicsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIHJlZGlzQ2xpZW50ID0gcmVkaXNDbGllbnRNb2NrKClcbiAgICAgIG1vY2tzID0gWyByZWRpcywgcmVkaXNDbGllbnQuaG1zZXQgXVxuICAgICAgcmVkaXMub25jZSgpLndpdGhFeGFjdEFyZ3MoeyBob3N0LCBwb3J0IH0pLnJldHVybnMocmVkaXNDbGllbnQpXG4gICAgICByZWRpc0NsaWVudC5obXNldC5vbmNlKCkud2l0aEFyZ3MoLi4uaG1zZXRBcmdzKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHByb3BlciBhcmd1bWVudHMnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICByZWRpc1dyYXBwZXIoeyByZWRpcyB9KSh7IGhvc3QsIHBvcnQgfSkuaG1zZXQoLi4uaG1zZXRBcmdzKVxuICAgICAgICAnMScuc2hvdWxkLmVxdWFsKCcxJylcbiAgICAgIH0pXG4gIH0pXG59KVxuIl19