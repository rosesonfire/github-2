'use strict';

var _setup = require('./../../setup');

var _redisClientWrapper6 = require('./../../../main/lib/wrappers/redisClientWrapper');

var _redisClientWrapper7 = _interopRequireDefault(_redisClientWrapper6);

var _redis = require('./../../mocks/others/redis');

var _redis2 = _interopRequireDefault(_redis);

var _redisClient = require('./../../mocks/others/redisClient');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
// unit

// mocks


(0, _setup.describe)('RedisWrapper', function () {
  var mocks = void 0,
      redis = void 0,
      redisClient = void 0,
      host = void 0,
      port = void 0,
      expectedProperties = void 0,
      hmsetArgs = void 0,
      positiveReply = void 0;

  (0, _setup.before)(function () {
    host = 'localhost';
    port = 1234;
    expectedProperties = ['hmset', 'quit'];
    hmsetArgs = [1, 'id', 1, 'value', '1'];
    positiveReply = 'OK';
  });

  (0, _setup.beforeEach)(function () {
    redis = (0, _redis2.default)();
  });

  (0, _setup.afterEach)(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  (0, _setup.describe)('When creating redisWrapper', function () {
    (0, _setup.beforeEach)(function () {
      redisClient = (0, _redisClient.redisClientStub)();
      mocks = [redis.createClient];
      redis.createClient.once().withExactArgs({ host: host, port: port }).returns(redisClient);
    });

    (0, _setup.it)('should have expected properties', function () {
      var _redisClientWrapper$s;

      return (_redisClientWrapper$s = (0, _redisClientWrapper7.default)({ redis: redis, host: host, port: port }).should.have.all).keys.apply(_redisClientWrapper$s, _toConsumableArray(expectedProperties));
    });

    (0, _setup.describe)('When calling hmset in redisWrapper', function () {
      (0, _setup.describe)('When successful', function () {
        (0, _setup.beforeEach)(function () {
          return redisClient.hmset.onFirstCall().callsFake(function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return args[args.length - 1](null, positiveReply);
          });
        });

        (0, _setup.it)('should return a promise', function () {
          var _redisClientWrapper;

          return (_redisClientWrapper = (0, _redisClientWrapper7.default)({ redis: redis, host: host, port: port })).hmset.apply(_redisClientWrapper, _toConsumableArray(hmsetArgs)).should.be.a('promise');
        });

        (0, _setup.it)('should return positive response', function () {
          var _redisClientWrapper2;

          return (_redisClientWrapper2 = (0, _redisClientWrapper7.default)({ redis: redis, host: host, port: port })).hmset.apply(_redisClientWrapper2, _toConsumableArray(hmsetArgs)).should.eventually.equal(positiveReply);
        });
      });

      (0, _setup.describe)('When core redis client returns error', function () {
        (0, _setup.beforeEach)(function () {
          return redisClient.hmset.callsFake(function () {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return args[args.length - 1](new Error('er'), null);
          });
        });

        (0, _setup.it)('should fail', function () {
          var _redisClientWrapper3;

          return (_redisClientWrapper3 = (0, _redisClientWrapper7.default)({ redis: redis, host: host, port: port })).hmset.apply(_redisClientWrapper3, _toConsumableArray(hmsetArgs)).should.eventually.be.rejected;
        });
      });

      (0, _setup.describe)('When core redis client fails', function () {
        (0, _setup.beforeEach)(function () {
          return redisClient.hmset.callsFake(function () {
            throw new Error('er');
          });
        });

        (0, _setup.it)('should fail', function () {
          var _redisClientWrapper4;

          return (_redisClientWrapper4 = (0, _redisClientWrapper7.default)({ redis: redis, host: host, port: port })).hmset.apply(_redisClientWrapper4, _toConsumableArray(hmsetArgs)).should.eventually.be.rejected;
        });
      });
    });
  });

  (0, _setup.describe)('When calling hmset in redisWrapper', function () {
    (0, _setup.beforeEach)(function () {
      var _redisClient$hmset$on;

      redisClient = (0, _redisClient.redisClientMock)();
      mocks = [redis.createClient, redisClient.hmset];
      redis.createClient.once().withExactArgs({ host: host, port: port }).returns(redisClient);
      (_redisClient$hmset$on = redisClient.hmset.once()).withArgs.apply(_redisClient$hmset$on, _toConsumableArray(hmsetArgs));
    });

    (0, _setup.it)('should be called with proper arguments', function () {
      var _redisClientWrapper5;

      (_redisClientWrapper5 = (0, _redisClientWrapper7.default)({ redis: redis, host: host, port: port })).hmset.apply(_redisClientWrapper5, _toConsumableArray(hmsetArgs));
      '1'.should.equal('1');
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi93cmFwcGVycy9yZWRpc0NsaWVudFdyYXBwZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJtb2NrcyIsInJlZGlzIiwicmVkaXNDbGllbnQiLCJob3N0IiwicG9ydCIsImV4cGVjdGVkUHJvcGVydGllcyIsImhtc2V0QXJncyIsInBvc2l0aXZlUmVwbHkiLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsImNyZWF0ZUNsaWVudCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsInNob3VsZCIsImhhdmUiLCJhbGwiLCJrZXlzIiwiaG1zZXQiLCJvbkZpcnN0Q2FsbCIsImNhbGxzRmFrZSIsImFyZ3MiLCJsZW5ndGgiLCJiZSIsImEiLCJldmVudHVhbGx5IiwiZXF1YWwiLCJFcnJvciIsInJlamVjdGVkIiwid2l0aEFyZ3MiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7OztBQUpBOztBQUVBOzs7QUFLQSxxQkFBUyxjQUFULEVBQXlCLFlBQU07QUFDN0IsTUFDRUEsY0FERjtBQUFBLE1BRUVDLGNBRkY7QUFBQSxNQUdFQyxvQkFIRjtBQUFBLE1BSUVDLGFBSkY7QUFBQSxNQUtFQyxhQUxGO0FBQUEsTUFNRUMsMkJBTkY7QUFBQSxNQU9FQyxrQkFQRjtBQUFBLE1BUUVDLHNCQVJGOztBQVVBLHFCQUFPLFlBQU07QUFDWEosV0FBTyxXQUFQO0FBQ0FDLFdBQU8sSUFBUDtBQUNBQyx5QkFBcUIsQ0FBQyxPQUFELEVBQVUsTUFBVixDQUFyQjtBQUNBQyxnQkFBWSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLE9BQWIsRUFBc0IsR0FBdEIsQ0FBWjtBQUNBQyxvQkFBZ0IsSUFBaEI7QUFDRCxHQU5EOztBQVFBLHlCQUFXLFlBQU07QUFDZk4sWUFBUSxzQkFBUjtBQUNELEdBRkQ7O0FBSUEsd0JBQVU7QUFBQSxXQUFNRCxNQUFNUSxPQUFOLENBQWM7QUFBQSxhQUFRQyxLQUFLQyxNQUFMLEVBQVI7QUFBQSxLQUFkLENBQU47QUFBQSxHQUFWOztBQUVBLHVCQUFTLDRCQUFULEVBQXVDLFlBQU07QUFDM0MsMkJBQVcsWUFBTTtBQUNmUixvQkFBYyxtQ0FBZDtBQUNBRixjQUFRLENBQUVDLE1BQU1VLFlBQVIsQ0FBUjtBQUNBVixZQUFNVSxZQUFOLENBQW1CQyxJQUFuQixHQUEwQkMsYUFBMUIsQ0FBd0MsRUFBRVYsVUFBRixFQUFRQyxVQUFSLEVBQXhDLEVBQ0dVLE9BREgsQ0FDV1osV0FEWDtBQUVELEtBTEQ7O0FBT0EsbUJBQUcsaUNBQUgsRUFBc0M7QUFBQTs7QUFBQSxhQUNwQywyREFBbUIsRUFBRUQsWUFBRixFQUFTRSxVQUFULEVBQWVDLFVBQWYsRUFBbkIsRUFBMENXLE1BQTFDLENBQWlEQyxJQUFqRCxDQUFzREMsR0FBdEQsRUFDR0MsSUFESCxpREFDV2Isa0JBRFgsRUFEb0M7QUFBQSxLQUF0Qzs7QUFJQSx5QkFBUyxvQ0FBVCxFQUErQyxZQUFNO0FBQ25ELDJCQUFTLGlCQUFULEVBQTRCLFlBQU07QUFDaEMsK0JBQVc7QUFBQSxpQkFBTUgsWUFBWWlCLEtBQVosQ0FBa0JDLFdBQWxCLEdBQ2RDLFNBRGMsQ0FDSjtBQUFBLDhDQUFJQyxJQUFKO0FBQUlBLGtCQUFKO0FBQUE7O0FBQUEsbUJBQWFBLEtBQUtBLEtBQUtDLE1BQUwsR0FBYyxDQUFuQixFQUFzQixJQUF0QixFQUE0QmhCLGFBQTVCLENBQWI7QUFBQSxXQURJLENBQU47QUFBQSxTQUFYOztBQUdBLHVCQUFHLHlCQUFILEVBQThCO0FBQUE7O0FBQUEsaUJBQzVCLHlEQUFtQixFQUFFTixZQUFGLEVBQVNFLFVBQVQsRUFBZUMsVUFBZixFQUFuQixHQUEwQ2UsS0FBMUMsK0NBQW1EYixTQUFuRCxHQUNHUyxNQURILENBQ1VTLEVBRFYsQ0FDYUMsQ0FEYixDQUNlLFNBRGYsQ0FENEI7QUFBQSxTQUE5Qjs7QUFJQSx1QkFBRyxpQ0FBSCxFQUFzQztBQUFBOztBQUFBLGlCQUNwQywwREFBbUIsRUFBRXhCLFlBQUYsRUFBU0UsVUFBVCxFQUFlQyxVQUFmLEVBQW5CLEdBQTBDZSxLQUExQyxnREFBbURiLFNBQW5ELEdBQ0dTLE1BREgsQ0FDVVcsVUFEVixDQUNxQkMsS0FEckIsQ0FDMkJwQixhQUQzQixDQURvQztBQUFBLFNBQXRDO0FBR0QsT0FYRDs7QUFhQSwyQkFBUyxzQ0FBVCxFQUFpRCxZQUFNO0FBQ3JELCtCQUFXO0FBQUEsaUJBQU1MLFlBQVlpQixLQUFaLENBQ2RFLFNBRGMsQ0FDSjtBQUFBLCtDQUFJQyxJQUFKO0FBQUlBLGtCQUFKO0FBQUE7O0FBQUEsbUJBQWFBLEtBQUtBLEtBQUtDLE1BQUwsR0FBYyxDQUFuQixFQUFzQixJQUFJSyxLQUFKLENBQVUsSUFBVixDQUF0QixFQUF1QyxJQUF2QyxDQUFiO0FBQUEsV0FESSxDQUFOO0FBQUEsU0FBWDs7QUFHQSx1QkFBRyxhQUFILEVBQWtCO0FBQUE7O0FBQUEsaUJBQ2hCLDBEQUFtQixFQUFFM0IsWUFBRixFQUFTRSxVQUFULEVBQWVDLFVBQWYsRUFBbkIsR0FBMENlLEtBQTFDLGdEQUFtRGIsU0FBbkQsR0FDR1MsTUFESCxDQUNVVyxVQURWLENBQ3FCRixFQURyQixDQUN3QkssUUFGUjtBQUFBLFNBQWxCO0FBR0QsT0FQRDs7QUFTQSwyQkFBUyw4QkFBVCxFQUF5QyxZQUFNO0FBQzdDLCtCQUFXO0FBQUEsaUJBQU0zQixZQUFZaUIsS0FBWixDQUNkRSxTQURjLENBQ0osWUFBYTtBQUFFLGtCQUFNLElBQUlPLEtBQUosQ0FBVSxJQUFWLENBQU47QUFBdUIsV0FEbEMsQ0FBTjtBQUFBLFNBQVg7O0FBR0EsdUJBQUcsYUFBSCxFQUFrQjtBQUFBOztBQUFBLGlCQUNoQiwwREFBbUIsRUFBRTNCLFlBQUYsRUFBU0UsVUFBVCxFQUFlQyxVQUFmLEVBQW5CLEdBQTBDZSxLQUExQyxnREFBbURiLFNBQW5ELEdBQ0dTLE1BREgsQ0FDVVcsVUFEVixDQUNxQkYsRUFEckIsQ0FDd0JLLFFBRlI7QUFBQSxTQUFsQjtBQUdELE9BUEQ7QUFRRCxLQS9CRDtBQWdDRCxHQTVDRDs7QUE4Q0EsdUJBQVMsb0NBQVQsRUFBK0MsWUFBTTtBQUNuRCwyQkFBVyxZQUFNO0FBQUE7O0FBQ2YzQixvQkFBYyxtQ0FBZDtBQUNBRixjQUFRLENBQUVDLE1BQU1VLFlBQVIsRUFBc0JULFlBQVlpQixLQUFsQyxDQUFSO0FBQ0FsQixZQUFNVSxZQUFOLENBQW1CQyxJQUFuQixHQUEwQkMsYUFBMUIsQ0FBd0MsRUFBRVYsVUFBRixFQUFRQyxVQUFSLEVBQXhDLEVBQ0dVLE9BREgsQ0FDV1osV0FEWDtBQUVBLDJDQUFZaUIsS0FBWixDQUFrQlAsSUFBbEIsSUFBeUJrQixRQUF6QixpREFBcUN4QixTQUFyQztBQUNELEtBTkQ7O0FBUUEsbUJBQUcsd0NBQUgsRUFDRSxZQUFNO0FBQUE7O0FBQ0osZ0VBQW1CLEVBQUVMLFlBQUYsRUFBU0UsVUFBVCxFQUFlQyxVQUFmLEVBQW5CLEdBQTBDZSxLQUExQyxnREFBbURiLFNBQW5EO0FBQ0EsVUFBSVMsTUFBSixDQUFXWSxLQUFYLENBQWlCLEdBQWpCO0FBQ0QsS0FKSDtBQUtELEdBZEQ7QUFlRCxDQXRGRCIsImZpbGUiOiJyZWRpc0NsaWVudFdyYXBwZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlc2NyaWJlLCBiZWZvcmUsIGJlZm9yZUVhY2gsIGFmdGVyRWFjaCwgaXQgfSBmcm9tICcuLy4uLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHJlZGlzQ2xpZW50V3JhcHBlciBmcm9tICcuLy4uLy4uLy4uL21haW4vbGliL3dyYXBwZXJzL3JlZGlzQ2xpZW50V3JhcHBlcidcbi8vIG1vY2tzXG5pbXBvcnQgcmVkaXNNb2NrIGZyb20gJy4vLi4vLi4vbW9ja3Mvb3RoZXJzL3JlZGlzJ1xuaW1wb3J0IHsgcmVkaXNDbGllbnRNb2NrLCByZWRpc0NsaWVudFN0dWIgfVxuICBmcm9tICcuLy4uLy4uL21vY2tzL290aGVycy9yZWRpc0NsaWVudCdcblxuZGVzY3JpYmUoJ1JlZGlzV3JhcHBlcicsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgcmVkaXMsXG4gICAgcmVkaXNDbGllbnQsXG4gICAgaG9zdCxcbiAgICBwb3J0LFxuICAgIGV4cGVjdGVkUHJvcGVydGllcyxcbiAgICBobXNldEFyZ3MsXG4gICAgcG9zaXRpdmVSZXBseVxuXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgaG9zdCA9ICdsb2NhbGhvc3QnXG4gICAgcG9ydCA9IDEyMzRcbiAgICBleHBlY3RlZFByb3BlcnRpZXMgPSBbJ2htc2V0JywgJ3F1aXQnXVxuICAgIGhtc2V0QXJncyA9IFsxLCAnaWQnLCAxLCAndmFsdWUnLCAnMSddXG4gICAgcG9zaXRpdmVSZXBseSA9ICdPSydcbiAgfSlcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICByZWRpcyA9IHJlZGlzTW9jaygpXG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICBkZXNjcmliZSgnV2hlbiBjcmVhdGluZyByZWRpc1dyYXBwZXInLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICByZWRpc0NsaWVudCA9IHJlZGlzQ2xpZW50U3R1YigpXG4gICAgICBtb2NrcyA9IFsgcmVkaXMuY3JlYXRlQ2xpZW50IF1cbiAgICAgIHJlZGlzLmNyZWF0ZUNsaWVudC5vbmNlKCkud2l0aEV4YWN0QXJncyh7IGhvc3QsIHBvcnQgfSlcbiAgICAgICAgLnJldHVybnMocmVkaXNDbGllbnQpXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgaGF2ZSBleHBlY3RlZCBwcm9wZXJ0aWVzJywgKCkgPT5cbiAgICAgIHJlZGlzQ2xpZW50V3JhcHBlcih7IHJlZGlzLCBob3N0LCBwb3J0IH0pLnNob3VsZC5oYXZlLmFsbFxuICAgICAgICAua2V5cyguLi5leHBlY3RlZFByb3BlcnRpZXMpKVxuXG4gICAgZGVzY3JpYmUoJ1doZW4gY2FsbGluZyBobXNldCBpbiByZWRpc1dyYXBwZXInLCAoKSA9PiB7XG4gICAgICBkZXNjcmliZSgnV2hlbiBzdWNjZXNzZnVsJywgKCkgPT4ge1xuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHJlZGlzQ2xpZW50Lmhtc2V0Lm9uRmlyc3RDYWxsKClcbiAgICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0obnVsbCwgcG9zaXRpdmVSZXBseSkpKVxuXG4gICAgICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICAgICAgcmVkaXNDbGllbnRXcmFwcGVyKHsgcmVkaXMsIGhvc3QsIHBvcnQgfSkuaG1zZXQoLi4uaG1zZXRBcmdzKVxuICAgICAgICAgICAgLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gcG9zaXRpdmUgcmVzcG9uc2UnLCAoKSA9PlxuICAgICAgICAgIHJlZGlzQ2xpZW50V3JhcHBlcih7IHJlZGlzLCBob3N0LCBwb3J0IH0pLmhtc2V0KC4uLmhtc2V0QXJncylcbiAgICAgICAgICAgIC5zaG91bGQuZXZlbnR1YWxseS5lcXVhbChwb3NpdGl2ZVJlcGx5KSlcbiAgICAgIH0pXG5cbiAgICAgIGRlc2NyaWJlKCdXaGVuIGNvcmUgcmVkaXMgY2xpZW50IHJldHVybnMgZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4gcmVkaXNDbGllbnQuaG1zZXRcbiAgICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0obmV3IEVycm9yKCdlcicpLCBudWxsKSkpXG5cbiAgICAgICAgaXQoJ3Nob3VsZCBmYWlsJywgKCkgPT5cbiAgICAgICAgICByZWRpc0NsaWVudFdyYXBwZXIoeyByZWRpcywgaG9zdCwgcG9ydCB9KS5obXNldCguLi5obXNldEFyZ3MpXG4gICAgICAgICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWQpXG4gICAgICB9KVxuXG4gICAgICBkZXNjcmliZSgnV2hlbiBjb3JlIHJlZGlzIGNsaWVudCBmYWlscycsICgpID0+IHtcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiByZWRpc0NsaWVudC5obXNldFxuICAgICAgICAgIC5jYWxsc0Zha2UoKC4uLmFyZ3MpID0+IHsgdGhyb3cgbmV3IEVycm9yKCdlcicpIH0pKVxuXG4gICAgICAgIGl0KCdzaG91bGQgZmFpbCcsICgpID0+XG4gICAgICAgICAgcmVkaXNDbGllbnRXcmFwcGVyKHsgcmVkaXMsIGhvc3QsIHBvcnQgfSkuaG1zZXQoLi4uaG1zZXRBcmdzKVxuICAgICAgICAgICAgLnNob3VsZC5ldmVudHVhbGx5LmJlLnJlamVjdGVkKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIGRlc2NyaWJlKCdXaGVuIGNhbGxpbmcgaG1zZXQgaW4gcmVkaXNXcmFwcGVyJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXNDbGllbnQgPSByZWRpc0NsaWVudE1vY2soKVxuICAgICAgbW9ja3MgPSBbIHJlZGlzLmNyZWF0ZUNsaWVudCwgcmVkaXNDbGllbnQuaG1zZXQgXVxuICAgICAgcmVkaXMuY3JlYXRlQ2xpZW50Lm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgaG9zdCwgcG9ydCB9KVxuICAgICAgICAucmV0dXJucyhyZWRpc0NsaWVudClcbiAgICAgIHJlZGlzQ2xpZW50Lmhtc2V0Lm9uY2UoKS53aXRoQXJncyguLi5obXNldEFyZ3MpXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgYmUgY2FsbGVkIHdpdGggcHJvcGVyIGFyZ3VtZW50cycsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHJlZGlzQ2xpZW50V3JhcHBlcih7IHJlZGlzLCBob3N0LCBwb3J0IH0pLmhtc2V0KC4uLmhtc2V0QXJncylcbiAgICAgICAgJzEnLnNob3VsZC5lcXVhbCgnMScpXG4gICAgICB9KVxuICB9KVxufSlcbiJdfQ==