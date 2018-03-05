'use strict';

var _setup = require('./../../setup');

var _setup2 = _interopRequireDefault(_setup);

var _redisClientWrapper6 = require('./../../../main/lib/wrappers/redisClientWrapper');

var _redisClientWrapper7 = _interopRequireDefault(_redisClientWrapper6);

var _redis = require('./../../mocks/others/redis');

var _redis2 = _interopRequireDefault(_redis);

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
    redis = (0, _redis2.default)();
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
      mocks = [redis.createClient];
      redis.createClient.once().withExactArgs({ host: host, port: port }).returns(redisClient);
    });

    // eslint-disable-next-line no-undef
    it('should have expected properties', function () {
      var _redisClientWrapper$s;

      return (_redisClientWrapper$s = (0, _redisClientWrapper7.default)({ redis: redis, host: host, port: port }).should.have.all).keys.apply(_redisClientWrapper$s, _toConsumableArray(expectedProperties));
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
          var _redisClientWrapper;

          return (_redisClientWrapper = (0, _redisClientWrapper7.default)({ redis: redis, host: host, port: port })).hmset.apply(_redisClientWrapper, _toConsumableArray(hmsetArgs)).should.be.a('promise');
        });

        // eslint-disable-next-line no-undef
        it('should return positive response', function () {
          var _redisClientWrapper2;

          return (_redisClientWrapper2 = (0, _redisClientWrapper7.default)({ redis: redis, host: host, port: port })).hmset.apply(_redisClientWrapper2, _toConsumableArray(hmsetArgs)).should.eventually.equal(positiveReply);
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
          var _redisClientWrapper3;

          return (_redisClientWrapper3 = (0, _redisClientWrapper7.default)({ redis: redis, host: host, port: port })).hmset.apply(_redisClientWrapper3, _toConsumableArray(hmsetArgs)).should.eventually.be.rejected;
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
          var _redisClientWrapper4;

          return (_redisClientWrapper4 = (0, _redisClientWrapper7.default)({ redis: redis, host: host, port: port })).hmset.apply(_redisClientWrapper4, _toConsumableArray(hmsetArgs)).should.eventually.be.rejected;
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
      mocks = [redis.createClient, redisClient.hmset];
      redis.createClient.once().withExactArgs({ host: host, port: port }).returns(redisClient);
      (_redisClient$hmset$on = redisClient.hmset.once()).withArgs.apply(_redisClient$hmset$on, _toConsumableArray(hmsetArgs));
    });

    // eslint-disable-next-line no-undef
    it('should be called with proper arguments', function () {
      var _redisClientWrapper5;

      (_redisClientWrapper5 = (0, _redisClientWrapper7.default)({ redis: redis, host: host, port: port })).hmset.apply(_redisClientWrapper5, _toConsumableArray(hmsetArgs));
      '1'.should.equal('1');
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi93cmFwcGVycy9yZWRpc0NsaWVudFdyYXBwZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwicmVkaXMiLCJyZWRpc0NsaWVudCIsImhvc3QiLCJwb3J0IiwiZXhwZWN0ZWRQcm9wZXJ0aWVzIiwiaG1zZXRBcmdzIiwicG9zaXRpdmVSZXBseSIsImJlZm9yZSIsImJlZm9yZUVhY2giLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsImNyZWF0ZUNsaWVudCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsIml0Iiwic2hvdWxkIiwiaGF2ZSIsImFsbCIsImtleXMiLCJobXNldCIsIm9uRmlyc3RDYWxsIiwiY2FsbHNGYWtlIiwiYXJncyIsImxlbmd0aCIsImJlIiwiYSIsImV2ZW50dWFsbHkiLCJlcXVhbCIsIkVycm9yIiwicmVqZWN0ZWQiLCJ3aXRoQXJncyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztvTUFOQTs7QUFFQTs7QUFFQTs7O0FBS0E7QUFDQUEsU0FBUyxjQUFULEVBQXlCLFlBQU07QUFDN0IsTUFDRUMsY0FERjtBQUFBLE1BRUVDLGNBRkY7QUFBQSxNQUdFQyxvQkFIRjtBQUFBLE1BSUVDLGFBSkY7QUFBQSxNQUtFQyxhQUxGO0FBQUEsTUFNRUMsMkJBTkY7QUFBQSxNQU9FQyxrQkFQRjtBQUFBLE1BUUVDLHNCQVJGOztBQVVBO0FBQ0FDLFNBQU8sWUFBTTtBQUNYTCxXQUFPLFdBQVA7QUFDQUMsV0FBTyxJQUFQO0FBQ0FDLHlCQUFxQixDQUFDLE9BQUQsQ0FBckI7QUFDQUMsZ0JBQVksQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxPQUFiLEVBQXNCLEdBQXRCLENBQVo7QUFDQUMsb0JBQWdCLElBQWhCO0FBQ0QsR0FORDs7QUFRQTtBQUNBRSxhQUFXLFlBQU07QUFDZlIsWUFBUSxz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a0I7QUFBQTs7QUFBQSxpQkFDaEIsMERBQW1CLEVBQUVqQixZQUFGLEVBQVNFLFVBQVQsRUFBZUMsVUFBZixFQUFuQixHQUEwQ21CLEtBQTFDLGdEQUFtRGpCLFNBQW5ELEdBQ0dhLE1BREgsQ0FDVVcsVUFEVixDQUNxQkYsRUFEckIsQ0FDd0JLLFFBRlI7QUFBQSxTQUFsQjtBQUdELE9BVEQ7QUFVRCxLQXpDRDtBQTBDRCxHQXpERDs7QUEyREE7QUFDQWxDLFdBQVMsb0NBQVQsRUFBK0MsWUFBTTtBQUNuRDtBQUNBVSxlQUFXLFlBQU07QUFBQTs7QUFDZlAsb0JBQWMsbUNBQWQ7QUFDQUYsY0FBUSxDQUFFQyxNQUFNYSxZQUFSLEVBQXNCWixZQUFZcUIsS0FBbEMsQ0FBUjtBQUNBdEIsWUFBTWEsWUFBTixDQUFtQkMsSUFBbkIsR0FBMEJDLGFBQTFCLENBQXdDLEVBQUViLFVBQUYsRUFBUUMsVUFBUixFQUF4QyxFQUNHYSxPQURILENBQ1dmLFdBRFg7QUFFQSwyQ0FBWXFCLEtBQVosQ0FBa0JSLElBQWxCLElBQXlCbUIsUUFBekIsaURBQXFDNUIsU0FBckM7QUFDRCxLQU5EOztBQVFBO0FBQ0FZLE9BQUcsd0NBQUgsRUFDRSxZQUFNO0FBQUE7O0FBQ0osZ0VBQW1CLEVBQUVqQixZQUFGLEVBQVNFLFVBQVQsRUFBZUMsVUFBZixFQUFuQixHQUEwQ21CLEtBQTFDLGdEQUFtRGpCLFNBQW5EO0FBQ0EsVUFBSWEsTUFBSixDQUFXWSxLQUFYLENBQWlCLEdBQWpCO0FBQ0QsS0FKSDtBQUtELEdBaEJEO0FBaUJELENBMUdEIiwiZmlsZSI6InJlZGlzQ2xpZW50V3JhcHBlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgcmVkaXNDbGllbnRXcmFwcGVyIGZyb20gJy4vLi4vLi4vLi4vbWFpbi9saWIvd3JhcHBlcnMvcmVkaXNDbGllbnRXcmFwcGVyJ1xuLy8gbW9ja3NcbmltcG9ydCByZWRpc01vY2sgZnJvbSAnLi8uLi8uLi9tb2Nrcy9vdGhlcnMvcmVkaXMnXG5pbXBvcnQgeyByZWRpc0NsaWVudE1vY2ssIHJlZGlzQ2xpZW50U3R1YiB9XG4gIGZyb20gJy4vLi4vLi4vbW9ja3Mvb3RoZXJzL3JlZGlzQ2xpZW50J1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdSZWRpc1dyYXBwZXInLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIHJlZGlzLFxuICAgIHJlZGlzQ2xpZW50LFxuICAgIGhvc3QsXG4gICAgcG9ydCxcbiAgICBleHBlY3RlZFByb3BlcnRpZXMsXG4gICAgaG1zZXRBcmdzLFxuICAgIHBvc2l0aXZlUmVwbHlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICBob3N0ID0gJ2xvY2FsaG9zdCdcbiAgICBwb3J0ID0gMTIzNFxuICAgIGV4cGVjdGVkUHJvcGVydGllcyA9IFsnaG1zZXQnXVxuICAgIGhtc2V0QXJncyA9IFsxLCAnaWQnLCAxLCAndmFsdWUnLCAnMSddXG4gICAgcG9zaXRpdmVSZXBseSA9ICdPSydcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgcmVkaXMgPSByZWRpc01vY2soKVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IG1vY2sudmVyaWZ5KCkpKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjcmVhdGluZyByZWRpc1dyYXBwZXInLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICByZWRpc0NsaWVudCA9IHJlZGlzQ2xpZW50U3R1YigpXG4gICAgICBtb2NrcyA9IFsgcmVkaXMuY3JlYXRlQ2xpZW50IF1cbiAgICAgIHJlZGlzLmNyZWF0ZUNsaWVudC5vbmNlKCkud2l0aEV4YWN0QXJncyh7IGhvc3QsIHBvcnQgfSlcbiAgICAgICAgLnJldHVybnMocmVkaXNDbGllbnQpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgaGF2ZSBleHBlY3RlZCBwcm9wZXJ0aWVzJywgKCkgPT5cbiAgICAgIHJlZGlzQ2xpZW50V3JhcHBlcih7IHJlZGlzLCBob3N0LCBwb3J0IH0pLnNob3VsZC5oYXZlLmFsbFxuICAgICAgICAua2V5cyguLi5leHBlY3RlZFByb3BlcnRpZXMpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgZGVzY3JpYmUoJ1doZW4gY2FsbGluZyBobXNldCBpbiByZWRpc1dyYXBwZXInLCAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGRlc2NyaWJlKCdXaGVuIHN1Y2Nlc3NmdWwnLCAoKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHJlZGlzQ2xpZW50Lmhtc2V0Lm9uRmlyc3RDYWxsKClcbiAgICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0obnVsbCwgcG9zaXRpdmVSZXBseSkpKVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgICAgIHJlZGlzQ2xpZW50V3JhcHBlcih7IHJlZGlzLCBob3N0LCBwb3J0IH0pLmhtc2V0KC4uLmhtc2V0QXJncylcbiAgICAgICAgICAgIC5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBpdCgnc2hvdWxkIHJldHVybiBwb3NpdGl2ZSByZXNwb25zZScsICgpID0+XG4gICAgICAgICAgcmVkaXNDbGllbnRXcmFwcGVyKHsgcmVkaXMsIGhvc3QsIHBvcnQgfSkuaG1zZXQoLi4uaG1zZXRBcmdzKVxuICAgICAgICAgICAgLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKHBvc2l0aXZlUmVwbHkpKVxuICAgICAgfSlcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBkZXNjcmliZSgnV2hlbiBjb3JlIHJlZGlzIGNsaWVudCByZXR1cm5zIGVycm9yJywgKCkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiByZWRpc0NsaWVudC5obXNldC5vbkZpcnN0Q2FsbCgpXG4gICAgICAgICAgLmNhbGxzRmFrZSgoLi4uYXJncykgPT4gYXJnc1thcmdzLmxlbmd0aCAtIDFdKG5ldyBFcnJvcignZXInKSwgbnVsbCkpKVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBpdCgnc2hvdWxkIGZhaWwnLCAoKSA9PlxuICAgICAgICAgIHJlZGlzQ2xpZW50V3JhcHBlcih7IHJlZGlzLCBob3N0LCBwb3J0IH0pLmhtc2V0KC4uLmhtc2V0QXJncylcbiAgICAgICAgICAgIC5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZClcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgZGVzY3JpYmUoJ1doZW4gY29yZSByZWRpcyBjbGllbnQgZmFpbHMnLCAoKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHJlZGlzQ2xpZW50Lmhtc2V0Lm9uRmlyc3RDYWxsKClcbiAgICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiB7IHRocm93IG5ldyBFcnJvcignZXInKSB9KSlcblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgaXQoJ3Nob3VsZCBmYWlsJywgKCkgPT5cbiAgICAgICAgICByZWRpc0NsaWVudFdyYXBwZXIoeyByZWRpcywgaG9zdCwgcG9ydCB9KS5obXNldCguLi5obXNldEFyZ3MpXG4gICAgICAgICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWQpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGNhbGxpbmcgaG1zZXQgaW4gcmVkaXNXcmFwcGVyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXNDbGllbnQgPSByZWRpc0NsaWVudE1vY2soKVxuICAgICAgbW9ja3MgPSBbIHJlZGlzLmNyZWF0ZUNsaWVudCwgcmVkaXNDbGllbnQuaG1zZXQgXVxuICAgICAgcmVkaXMuY3JlYXRlQ2xpZW50Lm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgaG9zdCwgcG9ydCB9KVxuICAgICAgICAucmV0dXJucyhyZWRpc0NsaWVudClcbiAgICAgIHJlZGlzQ2xpZW50Lmhtc2V0Lm9uY2UoKS53aXRoQXJncyguLi5obXNldEFyZ3MpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgYmUgY2FsbGVkIHdpdGggcHJvcGVyIGFyZ3VtZW50cycsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHJlZGlzQ2xpZW50V3JhcHBlcih7IHJlZGlzLCBob3N0LCBwb3J0IH0pLmhtc2V0KC4uLmhtc2V0QXJncylcbiAgICAgICAgJzEnLnNob3VsZC5lcXVhbCgnMScpXG4gICAgICB9KVxuICB9KVxufSlcbiJdfQ==