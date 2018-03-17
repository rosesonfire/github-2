'use strict';

var _setup = require('./../setup');

var _createDefensivePromise = require('./../../main/utils/createDefensivePromise');

var _createDefensivePromise2 = _interopRequireDefault(_createDefensivePromise);

var _plainOldStubObject = require('./../mocks/others/plainOldStubObject');

var _plainOldStubObject2 = _interopRequireDefault(_plainOldStubObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
(0, _setup.describe)('CreateDefensivePromise', function () {
  var executorFunc = void 0,
      asyncExecutorFunc = void 0,
      resolvedResponse = void 0,
      rejectionError = void 0;

  (0, _setup.before)(function () {
    resolvedResponse = 'positive';
    rejectionError = new Error('error');
  });

  (0, _setup.beforeEach)(function () {
    executorFunc = (0, _plainOldStubObject2.default)();
    asyncExecutorFunc = (0, _plainOldStubObject2.default)();
  });

  (0, _setup.describe)('When passing sync executor', function () {
    (0, _setup.describe)('When successful', function () {
      (0, _setup.beforeEach)(function () {
        return executorFunc.callsFake(function (resolve, reject) {
          return resolve(resolvedResponse);
        });
      });

      (0, _setup.it)('should return a promise', function () {
        return (0, _createDefensivePromise2.default)(executorFunc).should.be.a('promise');
      });

      (0, _setup.it)('should return proper response', function () {
        return (0, _createDefensivePromise2.default)(executorFunc).should.eventually.equal(resolvedResponse);
      });
    });

    (0, _setup.describe)('When unsuccessful', function () {
      (0, _setup.beforeEach)(function () {
        return executorFunc.callsFake(function (resolve, reject) {
          return reject(rejectionError);
        });
      });

      (0, _setup.it)('should return proper error', function () {
        return (0, _createDefensivePromise2.default)(executorFunc).should.eventually.be.rejected.and.should.eventually.equal(rejectionError);
      });
    });

    (0, _setup.describe)('When executor fails', function () {
      (0, _setup.beforeEach)(function () {
        return executorFunc.callsFake(function (resolve, reject) {
          throw rejectionError;
        });
      });

      (0, _setup.it)('should return proper error', function () {
        return (0, _createDefensivePromise2.default)(executorFunc).should.eventually.be.rejected.and.should.eventually.equal(rejectionError);
      });
    });
  });

  (0, _setup.describe)('When passing async executor', function () {
    (0, _setup.describe)('When successful', function () {
      (0, _setup.beforeEach)(function () {
        return asyncExecutorFunc.callsFake(async function (resolve, reject) {
          return resolve(resolvedResponse);
        });
      });

      (0, _setup.it)('should return a promise', function () {
        return (0, _createDefensivePromise2.default)(asyncExecutorFunc).should.be.a('promise');
      });

      (0, _setup.it)('should return proper response', function () {
        return (0, _createDefensivePromise2.default)(asyncExecutorFunc).should.eventually.equal(resolvedResponse);
      });
    });

    (0, _setup.describe)('When unsuccessful', function () {
      (0, _setup.beforeEach)(function () {
        return asyncExecutorFunc.callsFake(async function (resolve, reject) {
          return reject(rejectionError);
        });
      });

      (0, _setup.it)('should return proper error', function () {
        return (0, _createDefensivePromise2.default)(asyncExecutorFunc).should.eventually.be.rejected.and.should.eventually.equal(rejectionError);
      });
    });

    (0, _setup.describe)('When executor fails', function () {
      (0, _setup.beforeEach)(function () {
        return asyncExecutorFunc.callsFake(async function (resolve, reject) {
          throw rejectionError;
        });
      });

      (0, _setup.it)('should return proper error', function () {
        return (0, _createDefensivePromise2.default)(asyncExecutorFunc).should.eventually.be.rejected.and.should.eventually.equal(rejectionError);
      });
    });
  });
});
// mocks
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3V0aWxzL2NyZWF0ZURlZmVuc2l2ZVByb21pc2Uuc3BlYy5qcyJdLCJuYW1lcyI6WyJleGVjdXRvckZ1bmMiLCJhc3luY0V4ZWN1dG9yRnVuYyIsInJlc29sdmVkUmVzcG9uc2UiLCJyZWplY3Rpb25FcnJvciIsIkVycm9yIiwiY2FsbHNGYWtlIiwicmVzb2x2ZSIsInJlamVjdCIsInNob3VsZCIsImJlIiwiYSIsImV2ZW50dWFsbHkiLCJlcXVhbCIsInJlamVjdGVkIiwiYW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOzs7O0FBR0E7Ozs7OztBQUpBO0FBTUEscUJBQVMsd0JBQVQsRUFBbUMsWUFBTTtBQUN2QyxNQUNFQSxxQkFERjtBQUFBLE1BRUVDLDBCQUZGO0FBQUEsTUFHRUMseUJBSEY7QUFBQSxNQUlFQyx1QkFKRjs7QUFNQSxxQkFBTyxZQUFNO0FBQ1hELHVCQUFtQixVQUFuQjtBQUNBQyxxQkFBaUIsSUFBSUMsS0FBSixDQUFVLE9BQVYsQ0FBakI7QUFDRCxHQUhEOztBQUtBLHlCQUFXLFlBQU07QUFDZkosbUJBQWUsbUNBQWY7QUFDQUMsd0JBQW9CLG1DQUFwQjtBQUNELEdBSEQ7O0FBS0EsdUJBQVMsNEJBQVQsRUFBdUMsWUFBTTtBQUMzQyx5QkFBUyxpQkFBVCxFQUE0QixZQUFNO0FBQ2hDLDZCQUFXO0FBQUEsZUFDVEQsYUFBYUssU0FBYixDQUF1QixVQUFDQyxPQUFELEVBQVVDLE1BQVY7QUFBQSxpQkFBcUJELFFBQVFKLGdCQUFSLENBQXJCO0FBQUEsU0FBdkIsQ0FEUztBQUFBLE9BQVg7O0FBR0EscUJBQUcseUJBQUgsRUFBOEI7QUFBQSxlQUM1QixzQ0FBdUJGLFlBQXZCLEVBQXFDUSxNQUFyQyxDQUE0Q0MsRUFBNUMsQ0FBK0NDLENBQS9DLENBQWlELFNBQWpELENBRDRCO0FBQUEsT0FBOUI7O0FBR0EscUJBQUcsK0JBQUgsRUFBb0M7QUFBQSxlQUNsQyxzQ0FBdUJWLFlBQXZCLEVBQXFDUSxN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LEtBRHpCLENBQytCVCxjQUQvQixDQUQrQjtBQUFBLE9BQWpDO0FBR0QsS0FURDtBQVVELEdBbENEO0FBbUNELENBdEZEO0FBSEEiLCJmaWxlIjoiY3JlYXRlRGVmZW5zaXZlUHJvbWlzZS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzY3JpYmUsIGJlZm9yZSwgYmVmb3JlRWFjaCwgaXQgfSBmcm9tICcuLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IGNyZWF0ZURlZmVuc2l2ZVByb21pc2VcbiAgZnJvbSAnLi8uLi8uLi9tYWluL3V0aWxzL2NyZWF0ZURlZmVuc2l2ZVByb21pc2UnXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkU3R1Yk9iamVjdCBmcm9tICcuLy4uL21vY2tzL290aGVycy9wbGFpbk9sZFN0dWJPYmplY3QnXG5cbmRlc2NyaWJlKCdDcmVhdGVEZWZlbnNpdmVQcm9taXNlJywgKCkgPT4ge1xuICBsZXRcbiAgICBleGVjdXRvckZ1bmMsXG4gICAgYXN5bmNFeGVjdXRvckZ1bmMsXG4gICAgcmVzb2x2ZWRSZXNwb25zZSxcbiAgICByZWplY3Rpb25FcnJvclxuXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgcmVzb2x2ZWRSZXNwb25zZSA9ICdwb3NpdGl2ZSdcbiAgICByZWplY3Rpb25FcnJvciA9IG5ldyBFcnJvcignZXJyb3InKVxuICB9KVxuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGV4ZWN1dG9yRnVuYyA9IHBsYWluT2xkU3R1Yk9iamVjdCgpXG4gICAgYXN5bmNFeGVjdXRvckZ1bmMgPSBwbGFpbk9sZFN0dWJPYmplY3QoKVxuICB9KVxuXG4gIGRlc2NyaWJlKCdXaGVuIHBhc3Npbmcgc3luYyBleGVjdXRvcicsICgpID0+IHtcbiAgICBkZXNjcmliZSgnV2hlbiBzdWNjZXNzZnVsJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PlxuICAgICAgICBleGVjdXRvckZ1bmMuY2FsbHNGYWtlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUocmVzb2x2ZWRSZXNwb25zZSkpKVxuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgICBjcmVhdGVEZWZlbnNpdmVQcm9taXNlKGV4ZWN1dG9yRnVuYykuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gcHJvcGVyIHJlc3BvbnNlJywgKCkgPT5cbiAgICAgICAgY3JlYXRlRGVmZW5zaXZlUHJvbWlzZShleGVjdXRvckZ1bmMpLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgICAgLmVxdWFsKHJlc29sdmVkUmVzcG9uc2UpKVxuICAgIH0pXG5cbiAgICBkZXNjcmliZSgnV2hlbiB1bnN1Y2Nlc3NmdWwnLCAoKSA9PiB7XG4gICAgICBiZWZvcmVFYWNoKCgpID0+XG4gICAgICAgIGV4ZWN1dG9yRnVuYy5jYWxsc0Zha2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVqZWN0KHJlamVjdGlvbkVycm9yKSkpXG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIHByb3BlciBlcnJvcicsICgpID0+XG4gICAgICAgIGNyZWF0ZURlZmVuc2l2ZVByb21pc2UoZXhlY3V0b3JGdW5jKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZC5hbmRcbiAgICAgICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwocmVqZWN0aW9uRXJyb3IpKVxuICAgIH0pXG5cbiAgICBkZXNjcmliZSgnV2hlbiBleGVjdXRvciBmYWlscycsICgpID0+IHtcbiAgICAgIGJlZm9yZUVhY2goKCkgPT5cbiAgICAgICAgZXhlY3V0b3JGdW5jLmNhbGxzRmFrZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgdGhyb3cgcmVqZWN0aW9uRXJyb3JcbiAgICAgICAgfSkpXG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIHByb3BlciBlcnJvcicsICgpID0+XG4gICAgICAgIGNyZWF0ZURlZmVuc2l2ZVByb21pc2UoZXhlY3V0b3JGdW5jKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZC5hbmRcbiAgICAgICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwocmVqZWN0aW9uRXJyb3IpKVxuICAgIH0pXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ1doZW4gcGFzc2luZyBhc3luYyBleGVjdXRvcicsICgpID0+IHtcbiAgICBkZXNjcmliZSgnV2hlbiBzdWNjZXNzZnVsJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PlxuICAgICAgICBhc3luY0V4ZWN1dG9yRnVuYy5jYWxsc0Zha2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICAgICAgICByZXNvbHZlKHJlc29sdmVkUmVzcG9uc2UpKSlcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgKCkgPT5cbiAgICAgICAgY3JlYXRlRGVmZW5zaXZlUHJvbWlzZShhc3luY0V4ZWN1dG9yRnVuYykuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gcHJvcGVyIHJlc3BvbnNlJywgKCkgPT5cbiAgICAgICAgY3JlYXRlRGVmZW5zaXZlUHJvbWlzZShhc3luY0V4ZWN1dG9yRnVuYykuc2hvdWxkLmV2ZW50dWFsbHlcbiAgICAgICAgICAuZXF1YWwocmVzb2x2ZWRSZXNwb25zZSkpXG4gICAgfSlcblxuICAgIGRlc2NyaWJlKCdXaGVuIHVuc3VjY2Vzc2Z1bCcsICgpID0+IHtcbiAgICAgIGJlZm9yZUVhY2goKCkgPT5cbiAgICAgICAgYXN5bmNFeGVjdXRvckZ1bmMuY2FsbHNGYWtlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+XG4gICAgICAgICAgcmVqZWN0KHJlamVjdGlvbkVycm9yKSkpXG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIHByb3BlciBlcnJvcicsICgpID0+XG4gICAgICAgIGNyZWF0ZURlZmVuc2l2ZVByb21pc2UoYXN5bmNFeGVjdXRvckZ1bmMpLnNob3VsZC5ldmVudHVhbGx5LmJlLnJlamVjdGVkXG4gICAgICAgICAgLmFuZC5zaG91bGQuZXZlbnR1YWxseS5lcXVhbChyZWplY3Rpb25FcnJvcikpXG4gICAgfSlcblxuICAgIGRlc2NyaWJlKCdXaGVuIGV4ZWN1dG9yIGZhaWxzJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PlxuICAgICAgICBhc3luY0V4ZWN1dG9yRnVuYy5jYWxsc0Zha2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHRocm93IHJlamVjdGlvbkVycm9yXG4gICAgICAgIH0pKVxuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBwcm9wZXIgZXJyb3InLCAoKSA9PlxuICAgICAgICBjcmVhdGVEZWZlbnNpdmVQcm9taXNlKGFzeW5jRXhlY3V0b3JGdW5jKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZFxuICAgICAgICAgIC5hbmQuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwocmVqZWN0aW9uRXJyb3IpKVxuICAgIH0pXG4gIH0pXG59KVxuIl19