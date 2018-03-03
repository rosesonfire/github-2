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
      var _redisWrapper$should$;

      return (_redisWrapper$should$ = (0, _redisWrapper7.default)({ redis: redis })({ host: host, port: port }).should.have.all).keys.apply(_redisWrapper$should$, _toConsumableArray(expectedProperties));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi93cmFwcGVycy9yZWRpc1dyYXBwZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwicmVkaXMiLCJyZWRpc0NsaWVudCIsImhvc3QiLCJwb3J0IiwiZXhwZWN0ZWRQcm9wZXJ0aWVzIiwiaG1zZXRBcmdzIiwicG9zaXRpdmVSZXBseSIsImJlZm9yZSIsImJlZm9yZUVhY2giLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsIml0Iiwic2hvdWxkIiwiaGF2ZSIsImFsbCIsImtleXMiLCJobXNldCIsIm9uRmlyc3RDYWxsIiwiY2FsbHNGYWtlIiwiYXJncyIsImxlbmd0aCIsImJlIiwiYSIsImV2ZW50dWFsbHkiLCJlcXVhbCIsIkVycm9yIiwicmVqZWN0ZWQiLCJ3aXRoQXJncyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztvTUFOQTs7QUFFQTs7QUFFQTs7O0FBS0E7QUFDQUEsU0FBUyxjQUFULEVBQXlCLFlBQU07QUFDN0IsTUFDRUMsY0FERjtBQUFBLE1BRUVDLGNBRkY7QUFBQSxNQUdFQyxvQkFIRjtBQUFBLE1BSUVDLGFBSkY7QUFBQSxNQUtFQyxhQUxGO0FBQUEsTUFNRUMsMkJBTkY7QUFBQSxNQU9FQyxrQkFQRjtBQUFBLE1BUUVDLHNCQVJGOztBQVVBO0FBQ0FDLFNBQU8sWUFBTTtBQUNYTCxXQUFPLFdBQVA7QUFDQUMsV0FBTyxJQUFQO0FBQ0FDLHlCQUFxQixDQUFDLE9BQUQsQ0FBckI7QUFDQUMsZ0JBQVksQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxPQUFiLEVBQXNCLEdBQXRCLENBQVo7QUFDQUMsb0JBQWdCLElBQWhCO0FBQ0QsR0FORDs7QUFRQTtBQUNBRSxhQUFXLFlBQU07QUFDZlIsWUFBUSxtQ0FBUjtBQUNELEdBRkQ7O0FBSUE7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SCxFQUFrQjtBQUFBOztBQUFBLGlCQUNoQiw4Q0FBYSxFQUFFaEIsWUFBRixFQUFiLEVBQXdCLEVBQUVFLFVBQUYsRUFBUUMsVUFBUixFQUF4QixHQUF3Q2tCLEtBQXhDLDBDQUFpRGhCLFNBQWpELEdBQTREWSxNQUE1RCxDQUNHVyxVQURILENBQ2NGLEVBRGQsQ0FDaUJLLFFBRkQ7QUFBQSxTQUFsQjtBQUdELE9BVEQ7QUFVRCxLQXpDRDtBQTBDRCxHQXhERDs7QUEwREE7QUFDQWpDLFdBQVMsb0NBQVQsRUFBK0MsWUFBTTtBQUNuRDtBQUNBVSxlQUFXLFlBQU07QUFBQTs7QUFDZlAsb0JBQWMsbUNBQWQ7QUFDQUYsY0FBUSxDQUFFQyxLQUFGLEVBQVNDLFlBQVlvQixLQUFyQixDQUFSO0FBQ0FyQixZQUFNYSxJQUFOLEdBQWFDLGFBQWIsQ0FBMkIsRUFBRVosVUFBRixFQUFRQyxVQUFSLEVBQTNCLEVBQTJDWSxPQUEzQyxDQUFtRGQsV0FBbkQ7QUFDQSwyQ0FBWW9CLEtBQVosQ0FBa0JSLElBQWxCLElBQXlCbUIsUUFBekIsaURBQXFDM0IsU0FBckM7QUFDRCxLQUxEOztBQU9BO0FBQ0FXLE9BQUcsd0NBQUgsRUFDRSxZQUFNO0FBQUE7O0FBQ0osb0RBQWEsRUFBRWhCLFlBQUYsRUFBYixFQUF3QixFQUFFRSxVQUFGLEVBQVFDLFVBQVIsRUFBeEIsR0FBd0NrQixLQUF4QywwQ0FBaURoQixTQUFqRDtBQUNBLFVBQUlZLE1BQUosQ0FBV1ksS0FBWCxDQUFpQixHQUFqQjtBQUNELEtBSkg7QUFLRCxHQWZEO0FBZ0JELENBeEdEIiwiZmlsZSI6InJlZGlzV3JhcHBlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgcmVkaXNXcmFwcGVyIGZyb20gJy4vLi4vLi4vLi4vbWFpbi9saWIvd3JhcHBlcnMvcmVkaXNXcmFwcGVyJ1xuLy8gbW9ja3NcbmltcG9ydCBwbGFpbk9sZE1vY2tPYmplY3QgZnJvbSAnLi8uLi8uLi9tb2Nrcy9vdGhlcnMvcGxhaW5PbGRNb2NrT2JqZWN0J1xuaW1wb3J0IHsgcmVkaXNDbGllbnRNb2NrLCByZWRpc0NsaWVudFN0dWIgfVxuICBmcm9tICcuLy4uLy4uL21vY2tzL290aGVycy9yZWRpc0NsaWVudCdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5kZXNjcmliZSgnUmVkaXNXcmFwcGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICByZWRpcyxcbiAgICByZWRpc0NsaWVudCxcbiAgICBob3N0LFxuICAgIHBvcnQsXG4gICAgZXhwZWN0ZWRQcm9wZXJ0aWVzLFxuICAgIGhtc2V0QXJncyxcbiAgICBwb3NpdGl2ZVJlcGx5XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgaG9zdCA9ICdsb2NhbGhvc3QnXG4gICAgcG9ydCA9IDEyMzRcbiAgICBleHBlY3RlZFByb3BlcnRpZXMgPSBbJ2htc2V0J11cbiAgICBobXNldEFyZ3MgPSBbMSwgJ2lkJywgMSwgJ3ZhbHVlJywgJzEnXVxuICAgIHBvc2l0aXZlUmVwbHkgPSAnT0snXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIHJlZGlzID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gY3JlYXRpbmcgcmVkaXNXcmFwcGVyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXNDbGllbnQgPSByZWRpc0NsaWVudFN0dWIoKVxuICAgICAgbW9ja3MgPSBbIHJlZGlzIF1cbiAgICAgIHJlZGlzLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgaG9zdCwgcG9ydCB9KS5yZXR1cm5zKHJlZGlzQ2xpZW50KVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGhhdmUgZXhwZWN0ZWQgcHJvcGVydGllcycsICgpID0+XG4gICAgICByZWRpc1dyYXBwZXIoeyByZWRpcyB9KSh7IGhvc3QsIHBvcnQgfSkuc2hvdWxkLmhhdmUuYWxsXG4gICAgICAgIC5rZXlzKC4uLmV4cGVjdGVkUHJvcGVydGllcykpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBkZXNjcmliZSgnV2hlbiBjYWxsaW5nIGhtc2V0IGluIHJlZGlzV3JhcHBlcicsICgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgZGVzY3JpYmUoJ1doZW4gc3VjY2Vzc2Z1bCcsICgpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4gcmVkaXNDbGllbnQuaG1zZXQub25GaXJzdENhbGwoKVxuICAgICAgICAgIC5jYWxsc0Zha2UoKC4uLmFyZ3MpID0+IGFyZ3NbYXJncy5sZW5ndGggLSAxXShudWxsLCBwb3NpdGl2ZVJlcGx5KSkpXG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICAgICAgcmVkaXNXcmFwcGVyKHsgcmVkaXMgfSkoeyBob3N0LCBwb3J0IH0pLmhtc2V0KC4uLmhtc2V0QXJncykuc2hvdWxkLmJlXG4gICAgICAgICAgICAuYSgncHJvbWlzZScpKVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBpdCgnc2hvdWxkIHJldHVybiBwb3NpdGl2ZSByZXNwb25zZScsICgpID0+XG4gICAgICAgICAgcmVkaXNXcmFwcGVyKHsgcmVkaXMgfSkoeyBob3N0LCBwb3J0IH0pLmhtc2V0KC4uLmhtc2V0QXJncykuc2hvdWxkXG4gICAgICAgICAgICAuZXZlbnR1YWxseS5lcXVhbChwb3NpdGl2ZVJlcGx5KSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgZGVzY3JpYmUoJ1doZW4gY29yZSByZWRpcyBjbGllbnQgcmV0dXJucyBlcnJvcicsICgpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4gcmVkaXNDbGllbnQuaG1zZXQub25GaXJzdENhbGwoKVxuICAgICAgICAgIC5jYWxsc0Zha2UoKC4uLmFyZ3MpID0+IGFyZ3NbYXJncy5sZW5ndGggLSAxXShuZXcgRXJyb3IoJ2VyJyksIG51bGwpKSlcblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgaXQoJ3Nob3VsZCBmYWlsJywgKCkgPT5cbiAgICAgICAgICByZWRpc1dyYXBwZXIoeyByZWRpcyB9KSh7IGhvc3QsIHBvcnQgfSkuaG1zZXQoLi4uaG1zZXRBcmdzKS5zaG91bGRcbiAgICAgICAgICAgIC5ldmVudHVhbGx5LmJlLnJlamVjdGVkKVxuICAgICAgfSlcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBkZXNjcmliZSgnV2hlbiBjb3JlIHJlZGlzIGNsaWVudCBmYWlscycsICgpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4gcmVkaXNDbGllbnQuaG1zZXQub25GaXJzdENhbGwoKVxuICAgICAgICAgIC5jYWxsc0Zha2UoKC4uLmFyZ3MpID0+IHsgdGhyb3cgbmV3IEVycm9yKCdlcicpIH0pKVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBpdCgnc2hvdWxkIGZhaWwnLCAoKSA9PlxuICAgICAgICAgIHJlZGlzV3JhcHBlcih7IHJlZGlzIH0pKHsgaG9zdCwgcG9ydCB9KS5obXNldCguLi5obXNldEFyZ3MpLnNob3VsZFxuICAgICAgICAgICAgLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWQpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGNhbGxpbmcgaG1zZXQgaW4gcmVkaXNXcmFwcGVyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXNDbGllbnQgPSByZWRpc0NsaWVudE1vY2soKVxuICAgICAgbW9ja3MgPSBbIHJlZGlzLCByZWRpc0NsaWVudC5obXNldCBdXG4gICAgICByZWRpcy5vbmNlKCkud2l0aEV4YWN0QXJncyh7IGhvc3QsIHBvcnQgfSkucmV0dXJucyhyZWRpc0NsaWVudClcbiAgICAgIHJlZGlzQ2xpZW50Lmhtc2V0Lm9uY2UoKS53aXRoQXJncyguLi5obXNldEFyZ3MpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgYmUgY2FsbGVkIHdpdGggcHJvcGVyIGFyZ3VtZW50cycsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHJlZGlzV3JhcHBlcih7IHJlZGlzIH0pKHsgaG9zdCwgcG9ydCB9KS5obXNldCguLi5obXNldEFyZ3MpXG4gICAgICAgICcxJy5zaG91bGQuZXF1YWwoJzEnKVxuICAgICAgfSlcbiAgfSlcbn0pXG4iXX0=