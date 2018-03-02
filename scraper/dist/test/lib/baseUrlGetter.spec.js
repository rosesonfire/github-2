'use strict';

var _setup = require('./../setup');

var _setup2 = _interopRequireDefault(_setup);

var _baseUrlGetter = require('./../../main/lib/baseUrlGetter');

var _baseUrlGetter2 = _interopRequireDefault(_baseUrlGetter);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
var urlParser = (0, _plainOldMockObject2.default)();
// mocks
// eslint-disable-next-line no-unused-vars

var asyncUrlParser = (0, _plainOldMockObject2.default)();

// eslint-disable-next-line no-undef
describe('BaseUrlGetter', function () {
  var mocks = void 0,
      url = void 0,
      hostname = void 0,
      baseUrl = void 0,
      parsedUrl = void 0;

  // eslint-disable-next-line no-undef
  before(function () {
    url = 'https://github.com/timeline';
    hostname = 'https://github.com';
    baseUrl = hostname + '/';
    parsedUrl = {
      hostname: hostname
    };
  });

  // eslint-disable-next-line no-undef
  afterEach(function () {
    return mocks.forEach(function (mock) {
      mock.verify();
      mock.reset();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When getting base url with sync urlParser', function () {
    // eslint-disable-next-line no-undef
    before(function () {
      mocks = [urlParser];
    });

    // eslint-disable-next-line no-undef
    beforeEach(function () {
      return urlParser.once().withExactArgs(url).returns(parsedUrl);
    });

    // eslint-disable-next-line no-undef
    it('should return a promise', function () {
      return (0, _baseUrlGetter2.default)({ urlParser: urlParser })({ url: url }).should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should get base url', function () {
      return (0, _baseUrlGetter2.default)({ urlParser: urlParser })({ url: url }).should.eventually.equal(baseUrl);
    });
  });

  // eslint-disable-next-line no-undef
  describe('When getting base url with async urlParser', function () {
    // eslint-disable-next-line no-undef
    before(function () {
      mocks = [asyncUrlParser];
    });

    // eslint-disable-next-line no-undef
    beforeEach(function () {
      return asyncUrlParser.once().withExactArgs(url).returns(Promise.resolve(parsedUrl));
    });

    // eslint-disable-next-line no-undef
    it('should get base url', function () {
      return (0, _baseUrlGetter2.default)({ urlParser: asyncUrlParser })({ url: url }).should.eventually.equal(baseUrl);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9iYXNlVXJsR2V0dGVyLnNwZWMuanMiXSwibmFtZXMiOlsidXJsUGFyc2VyIiwiYXN5bmNVcmxQYXJzZXIiLCJkZXNjcmliZSIsIm1vY2tzIiwidXJsIiwiaG9zdG5hbWUiLCJiYXNlVXJsIiwicGFyc2VkVXJsIiwiYmVmb3JlIiwiYWZ0ZXJFYWNoIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJyZXNldCIsImJlZm9yZUVhY2giLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJldHVybnMiLCJpdCIsInNob3VsZCIsImJlIiwiYSIsImV2ZW50dWFsbHkiLCJlcXVhbCIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7O0FBSEE7QUFJQSxJQUFNQSxZQUFZLG1DQUFsQjtBQUZBO0FBSkE7O0FBT0EsSUFBTUMsaUJBQWlCLG1DQUF2Qjs7QUFFQTtBQUNBQyxTQUFTLGVBQVQsRUFBMEIsWUFBTTtBQUM5QixNQUNFQyxjQURGO0FBQUEsTUFFRUMsWUFGRjtBQUFBLE1BR0VDLGlCQUhGO0FBQUEsTUFJRUMsZ0JBSkY7QUFBQSxNQUtFQyxrQkFMRjs7QUFPQTtBQUNBQyxTQUFPLFlBQU07QUFDWEosVUFBTSw2QkFBTjtBQUNBQyxlQUFXLG9CQUFYO0FBQ0FDLGNBQVVELFdBQVcsR0FBckI7QUFDQUUsZ0JBQVk7QUFDVkY7QUFEVSxLQUFaO0FBR0QsR0FQRDs7QUFTQTtBQUNBSSxZQUFVO0FBQUEsV0FDUk4sTUFBTU8sT0FBTixDQUFjLGdCQUFRO0FBQ3BCQyxXQUFLQyxNQUFMO0FBQ0FELFdBQUtFLEtBQUw7QUFDRCxLQUhELENBRFE7QUFBQSxHQUFWOztBQU1BO0FBQ0FYLFdBQVMsMkNBQVQsRUFBc0QsWUFBTTtBQUMxRDtBQUNBTSxXQUFPLFlBQU07QUFDWEwsY0FBUSxDQUFFSCxTQUFGLENBQVI7QUFDRCxLQUZEOztBQUlBO0FBQ0FjLGVBQVc7QUFBQSxhQUNUZCxVQUFVZSxJQUFWLEdBQWlCQyxhQUFqQixDQUErQlosR0FBL0IsRUFBb0NhLE9BQXBDLENBQTRDVixTQUE1QyxDQURTO0FBQUEsS0FBWDs7QUFHQTtBQUNBVyxPQUFHLHlCQUFILEVBQThCO0FBQUEsYUFBTSw2QkFBYyxFQUFFbEIsb0JBQUYsRUFBZCxFQUE2QixFQUFFSSxRQUFGLEVBQTdCLEVBQ2pDZSxNQURpQyxDQUMxQkMsRUFEMEIsQ0FDdkJDLENBRHVCLENBQ3JCLFNBRHFCLENBQU47QUFBQSxLQUE5Qjs7QUFHQTtBQUNBSCxPQUFHLHFCQUFILEVBQTBCO0FBQUEsYUFDeEIsNkJBQWMsRUFBRWxCLG9CQUFGLEVBQWQsRUFBNkIsRUFBRUksUUFBRixFQUE3QixFQUFzQ2UsTUFBdEMsQ0FBNkNHLFVBQTdDLENBQXdEQyxLQUF4RCxDQUE4RGpCLE9BQTlELENBRHdCO0FBQUEsS0FBMUI7QUFFRCxHQWpCRDs7QUFtQkE7QUFDQUosV0FBUyw0Q0FBVCxFQUF1RCxZQUFNO0FBQzNEO0FBQ0FNLFdBQU8sWUFBTTtBQUNYTCxjQUFRLENBQUVGLGNBQUYsQ0FBUjtBQUNELEtBRkQ7O0FBSUE7QUFDQWEsZUFBVztBQUFBLGFBQU1iLGVBQWVjLElBQWYsR0FBc0JDLGFBQXRCLENBQW9DWixHQUFwQyxFQUNkYSxPQURjLENBQ05PLFFBQVFDLE9BQVIsQ0FBZ0JsQixTQUFoQixDQURNLENBQU47QUFBQSxLQUFYOztBQUdBO0FBQ0FXLE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUN4Qiw2QkFBYyxFQUFFbEIsV0FBV0MsY0FBYixFQUFkLEVBQTZDLEVBQUVHLFFBQUYsRUFBN0MsRUFBc0RlLE1BQXRELENBQTZERyxVQUE3RCxDQUNHQyxLQURILENBQ1NqQixPQURULENBRHdCO0FBQUEsS0FBMUI7QUFHRCxHQWREO0FBZUQsQ0E3REQiLCJmaWxlIjoiYmFzZVVybEdldHRlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgYmFzZVVybEdldHRlciBmcm9tICcuLy4uLy4uL21haW4vbGliL2Jhc2VVcmxHZXR0ZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkTW9ja09iamVjdCBmcm9tICcuLy4uL21vY2tzL290aGVycy9wbGFpbk9sZE1vY2tPYmplY3QnXG5jb25zdCB1cmxQYXJzZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuY29uc3QgYXN5bmNVcmxQYXJzZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdCYXNlVXJsR2V0dGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICB1cmwsXG4gICAgaG9zdG5hbWUsXG4gICAgYmFzZVVybCxcbiAgICBwYXJzZWRVcmxcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICB1cmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWVsaW5lJ1xuICAgIGhvc3RuYW1lID0gJ2h0dHBzOi8vZ2l0aHViLmNvbSdcbiAgICBiYXNlVXJsID0gaG9zdG5hbWUgKyAnLydcbiAgICBwYXJzZWRVcmwgPSB7XG4gICAgICBob3N0bmFtZVxuICAgIH1cbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWZ0ZXJFYWNoKCgpID0+XG4gICAgbW9ja3MuZm9yRWFjaChtb2NrID0+IHtcbiAgICAgIG1vY2sudmVyaWZ5KClcbiAgICAgIG1vY2sucmVzZXQoKVxuICAgIH0pKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBnZXR0aW5nIGJhc2UgdXJsIHdpdGggc3luYyB1cmxQYXJzZXInLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlKCgpID0+IHtcbiAgICAgIG1vY2tzID0gWyB1cmxQYXJzZXIgXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+XG4gICAgICB1cmxQYXJzZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKS5yZXR1cm5zKHBhcnNlZFVybCkpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PiBiYXNlVXJsR2V0dGVyKHsgdXJsUGFyc2VyIH0pKHsgdXJsIH0pXG4gICAgICAuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgZ2V0IGJhc2UgdXJsJywgKCkgPT5cbiAgICAgIGJhc2VVcmxHZXR0ZXIoeyB1cmxQYXJzZXIgfSkoeyB1cmwgfSkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoYmFzZVVybCkpXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGdldHRpbmcgYmFzZSB1cmwgd2l0aCBhc3luYyB1cmxQYXJzZXInLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlKCgpID0+IHtcbiAgICAgIG1vY2tzID0gWyBhc3luY1VybFBhcnNlciBdXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4gYXN5bmNVcmxQYXJzZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKVxuICAgICAgLnJldHVybnMoUHJvbWlzZS5yZXNvbHZlKHBhcnNlZFVybCkpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBnZXQgYmFzZSB1cmwnLCAoKSA9PlxuICAgICAgYmFzZVVybEdldHRlcih7IHVybFBhcnNlcjogYXN5bmNVcmxQYXJzZXIgfSkoeyB1cmwgfSkuc2hvdWxkLmV2ZW50dWFsbHlcbiAgICAgICAgLmVxdWFsKGJhc2VVcmwpKVxuICB9KVxufSlcbiJdfQ==