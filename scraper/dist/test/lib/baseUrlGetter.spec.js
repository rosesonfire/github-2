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
    mocks.forEach(function (mock) {
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
      urlParser.once().withExactArgs(url).returns(parsedUrl);
    });

    // eslint-disable-next-line no-undef
    it('should get base url', async function () {
      return (await (0, _baseUrlGetter2.default)({ urlParser: urlParser })({ url: url })).should.equal(baseUrl);
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
      asyncUrlParser.once().withExactArgs(url).returns(Promise.resolve(parsedUrl));
    });

    // eslint-disable-next-line no-undef
    it('should get base url', async function () {
      return (await (0, _baseUrlGetter2.default)({ urlParser: asyncUrlParser })({ url: url })).should.equal(baseUrl);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9iYXNlVXJsR2V0dGVyLnNwZWMuanMiXSwibmFtZXMiOlsidXJsUGFyc2VyIiwiYXN5bmNVcmxQYXJzZXIiLCJkZXNjcmliZSIsIm1vY2tzIiwidXJsIiwiaG9zdG5hbWUiLCJiYXNlVXJsIiwicGFyc2VkVXJsIiwiYmVmb3JlIiwiYWZ0ZXJFYWNoIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJyZXNldCIsImJlZm9yZUVhY2giLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJldHVybnMiLCJpdCIsInNob3VsZCIsImVxdWFsIiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7QUFIQTtBQUlBLElBQU1BLFlBQVksbUNBQWxCO0FBRkE7QUFKQTs7QUFPQSxJQUFNQyxpQkFBaUIsbUNBQXZCOztBQUVBO0FBQ0FDLFNBQVMsZUFBVCxFQUEwQixZQUFNO0FBQzlCLE1BQ0VDLGNBREY7QUFBQSxNQUVFQyxZQUZGO0FBQUEsTUFHRUMsaUJBSEY7QUFBQSxNQUlFQyxnQkFKRjtBQUFBLE1BS0VDLGtCQUxGOztBQU9BO0FBQ0FDLFNBQU8sWUFBTTtBQUNYSixVQUFNLDZCQUFOO0FBQ0FDLGVBQVcsb0JBQVg7QUFDQUMsY0FBVUQsV0FBVyxHQUFyQjtBQUNBRSxnQkFBWTtBQUNWRjtBQURVLEtBQVo7QUFHRCxHQVBEOztBQVNBO0FBQ0FJLFlBQVUsWUFBTTtBQUNkTixVQUFNTyxPQUFOLENBQWMsZ0JBQVE7QUFDcEJDLFdBQUtDLE1BQUw7QUFDQUQsV0FBS0UsS0FBTDtBQUNELEtBSEQ7QUFJRCxHQUxEOztBQU9BO0FBQ0FYLFdBQVMsMkNBQVQsRUFBc0QsWUFBTTtBQUMxRDtBQUNBTSxXQUFPLFlBQU07QUFDWEwsY0FBUSxDQUFFSCxTQUFGLENBQVI7QUFDRCxLQUZEOztBQUlBO0FBQ0FjLGVBQVcsWUFBTTtBQUNmZCxnQkFBVWUsSUFBVixHQUFpQkMsYUFBakIsQ0FBK0JaLEdBQS9CLEVBQW9DYSxPQUFwQyxDQUE0Q1YsU0FBNUM7QUFDRCxLQUZEOztBQUlBO0FBQ0FXLE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUN4QixDQUFDLE1BQU0sNkJBQWMsRUFBRWxCLG9CQUFGLEVBQWQsRUFBNkIsRUFBRUksUUFBRixFQUE3QixDQUFQLEVBQThDZSxNQUE5QyxDQUFxREMsS0FBckQsQ0FBMkRkLE9BQTNELENBRHdCO0FBQUEsS0FBMUI7QUFHRCxHQWZEOztBQWlCQTtBQUNBSixXQUFTLDRDQUFULEVBQXVELFlBQU07QUFDM0Q7QUFDQU0sV0FBTyxZQUFNO0FBQ1hMLGNBQVEsQ0FBRUYsY0FBRixDQUFSO0FBQ0QsS0FGRDs7QUFJQTtBQUNBYSxlQUFXLFlBQU07QUFDZmIscUJBQWVjLElBQWYsR0FBc0JDLGFBQXRCLENBQW9DWixHQUFwQyxFQUNHYSxPQURILENBQ1dJLFFBQVFDLE9BQVIsQ0FBZ0JmLFNBQWhCLENBRFg7QUFFRCxLQUhEOztBQUtBO0FBQ0FXLE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUN4QixDQUFDLE1BQU0sNkJBQWMsRUFBRWxCLFdBQVdDLGNBQWIsRUFBZCxFQUE2QyxFQUFFRyxRQUFGLEVBQTdDLENBQVAsRUFBOERlLE1BQTlELENBQ0dDLEtBREgsQ0FDU2QsT0FEVCxDQUR3QjtBQUFBLEtBQTFCO0FBSUQsR0FqQkQ7QUFrQkQsQ0EvREQiLCJmaWxlIjoiYmFzZVVybEdldHRlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgYmFzZVVybEdldHRlciBmcm9tICcuLy4uLy4uL21haW4vbGliL2Jhc2VVcmxHZXR0ZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkTW9ja09iamVjdCBmcm9tICcuLy4uL21vY2tzL290aGVycy9wbGFpbk9sZE1vY2tPYmplY3QnXG5jb25zdCB1cmxQYXJzZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuY29uc3QgYXN5bmNVcmxQYXJzZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdCYXNlVXJsR2V0dGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICB1cmwsXG4gICAgaG9zdG5hbWUsXG4gICAgYmFzZVVybCxcbiAgICBwYXJzZWRVcmxcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICB1cmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWVsaW5lJ1xuICAgIGhvc3RuYW1lID0gJ2h0dHBzOi8vZ2l0aHViLmNvbSdcbiAgICBiYXNlVXJsID0gaG9zdG5hbWUgKyAnLydcbiAgICBwYXJzZWRVcmwgPSB7XG4gICAgICBob3N0bmFtZVxuICAgIH1cbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4ge1xuICAgICAgbW9jay52ZXJpZnkoKVxuICAgICAgbW9jay5yZXNldCgpXG4gICAgfSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gZ2V0dGluZyBiYXNlIHVybCB3aXRoIHN5bmMgdXJsUGFyc2VyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBtb2NrcyA9IFsgdXJsUGFyc2VyIF1cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICB1cmxQYXJzZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKS5yZXR1cm5zKHBhcnNlZFVybClcbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBnZXQgYmFzZSB1cmwnLCBhc3luYyAoKSA9PlxuICAgICAgKGF3YWl0IGJhc2VVcmxHZXR0ZXIoeyB1cmxQYXJzZXIgfSkoeyB1cmwgfSkpLnNob3VsZC5lcXVhbChiYXNlVXJsKVxuICAgIClcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gZ2V0dGluZyBiYXNlIHVybCB3aXRoIGFzeW5jIHVybFBhcnNlcicsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmUoKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbIGFzeW5jVXJsUGFyc2VyIF1cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBhc3luY1VybFBhcnNlci5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwpXG4gICAgICAgIC5yZXR1cm5zKFByb21pc2UucmVzb2x2ZShwYXJzZWRVcmwpKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGdldCBiYXNlIHVybCcsIGFzeW5jICgpID0+XG4gICAgICAoYXdhaXQgYmFzZVVybEdldHRlcih7IHVybFBhcnNlcjogYXN5bmNVcmxQYXJzZXIgfSkoeyB1cmwgfSkpLnNob3VsZFxuICAgICAgICAuZXF1YWwoYmFzZVVybClcbiAgICApXG4gIH0pXG59KVxuIl19