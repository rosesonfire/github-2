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
      return asyncUrlParser.once().withExactArgs(url).returns(Promise.resolve(parsedUrl));
    });

    // eslint-disable-next-line no-undef
    it('should get base url', async function () {
      return (await (0, _baseUrlGetter2.default)({ urlParser: asyncUrlParser })({ url: url })).should.equal(baseUrl);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9iYXNlVXJsR2V0dGVyLnNwZWMuanMiXSwibmFtZXMiOlsidXJsUGFyc2VyIiwiYXN5bmNVcmxQYXJzZXIiLCJkZXNjcmliZSIsIm1vY2tzIiwidXJsIiwiaG9zdG5hbWUiLCJiYXNlVXJsIiwicGFyc2VkVXJsIiwiYmVmb3JlIiwiYWZ0ZXJFYWNoIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJyZXNldCIsImJlZm9yZUVhY2giLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJldHVybnMiLCJpdCIsInNob3VsZCIsImJlIiwiYSIsImVxdWFsIiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7QUFIQTtBQUlBLElBQU1BLFlBQVksbUNBQWxCO0FBRkE7QUFKQTs7QUFPQSxJQUFNQyxpQkFBaUIsbUNBQXZCOztBQUVBO0FBQ0FDLFNBQVMsZUFBVCxFQUEwQixZQUFNO0FBQzlCLE1BQ0VDLGNBREY7QUFBQSxNQUVFQyxZQUZGO0FBQUEsTUFHRUMsaUJBSEY7QUFBQSxNQUlFQyxnQkFKRjtBQUFBLE1BS0VDLGtCQUxGOztBQU9BO0FBQ0FDLFNBQU8sWUFBTTtBQUNYSixVQUFNLDZCQUFOO0FBQ0FDLGVBQVcsb0JBQVg7QUFDQUMsY0FBVUQsV0FBVyxHQUFyQjtBQUNBRSxnQkFBWTtBQUNWRjtBQURVLEtBQVo7QUFHRCxHQVBEOztBQVNBO0FBQ0FJLFlBQVU7QUFBQSxXQUNSTixNQUFNTyxPQUFOLENBQWMsZ0JBQVE7QUFDcEJDLFdBQUtDLE1BQUw7QUFDQUQsV0FBS0UsS0FBTDtBQUNELEtBSEQsQ0FEUTtBQUFBLEdBQVY7O0FBTUE7QUFDQVgsV0FBUywyQ0FBVCxFQUFzRCxZQUFNO0FBQzFEO0FBQ0FNLFdBQU8sWUFBTTtBQUNYTCxjQUFRLENBQUVILFNBQUYsQ0FBUjtBQUNELEtBRkQ7O0FBSUE7QUFDQWMsZUFBVztBQUFBLGFBQ1RkLFVBQVVlLElBQVYsR0FBaUJDLGFBQWpCLENBQStCWixHQUEvQixFQUFvQ2EsT0FBcEMsQ0FBNENWLFNBQTVDLENBRFM7QUFBQSxLQUFYOztBQUdBO0FBQ0FXLE9BQUcseUJBQUgsRUFBOEI7QUFBQSxhQUFNLDZCQUFjLEVBQUVsQixvQkFBRixFQUFkLEVBQTZCLEVBQUVJLFFBQUYsRUFBN0IsRUFDakNlLE1BRGlDLENBQzFCQyxFQUQwQixDQUN2QkMsQ0FEdUIsQ0FDckIsU0FEcUIsQ0FBTjtBQUFBLEtBQTlCOztBQUdBO0FBQ0FILE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUN4QixDQUFDLE1BQU0sNkJBQWMsRUFBRWxCLG9CQUFGLEVBQWQsRUFBNkIsRUFBRUksUUFBRixFQUE3QixDQUFQLEVBQThDZSxNQUE5QyxDQUFxREcsS0FBckQsQ0FBMkRoQixPQUEzRCxDQUR3QjtBQUFBLEtBQTFCO0FBRUQsR0FqQkQ7O0FBbUJBO0FBQ0FKLFdBQVMsNENBQVQsRUFBdUQsWUFBTTtBQUMzRDtBQUNBTSxXQUFPLFlBQU07QUFDWEwsY0FBUSxDQUFFRixjQUFGLENBQVI7QUFDRCxLQUZEOztBQUlBO0FBQ0FhLGVBQVc7QUFBQSxhQUFNYixlQUFlYyxJQUFmLEdBQXNCQyxhQUF0QixDQUFvQ1osR0FBcEMsRUFDZGEsT0FEYyxDQUNOTSxRQUFRQyxPQUFSLENBQWdCakIsU0FBaEIsQ0FETSxDQUFOO0FBQUEsS0FBWDs7QUFHQTtBQUNBVyxPQUFHLHFCQUFILEVBQTBCO0FBQUEsYUFDeEIsQ0FBQyxNQUFNLDZCQUFjLEVBQUVsQixXQUFXQyxjQUFiLEVBQWQsRUFBNkMsRUFBRUcsUUFBRixFQUE3QyxDQUFQLEVBQThEZSxNQUE5RCxDQUNHRyxLQURILENBQ1NoQixPQURULENBRHdCO0FBQUEsS0FBMUI7QUFHRCxHQWREO0FBZUQsQ0E3REQiLCJmaWxlIjoiYmFzZVVybEdldHRlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgYmFzZVVybEdldHRlciBmcm9tICcuLy4uLy4uL21haW4vbGliL2Jhc2VVcmxHZXR0ZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkTW9ja09iamVjdCBmcm9tICcuLy4uL21vY2tzL290aGVycy9wbGFpbk9sZE1vY2tPYmplY3QnXG5jb25zdCB1cmxQYXJzZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuY29uc3QgYXN5bmNVcmxQYXJzZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdCYXNlVXJsR2V0dGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICB1cmwsXG4gICAgaG9zdG5hbWUsXG4gICAgYmFzZVVybCxcbiAgICBwYXJzZWRVcmxcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICB1cmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWVsaW5lJ1xuICAgIGhvc3RuYW1lID0gJ2h0dHBzOi8vZ2l0aHViLmNvbSdcbiAgICBiYXNlVXJsID0gaG9zdG5hbWUgKyAnLydcbiAgICBwYXJzZWRVcmwgPSB7XG4gICAgICBob3N0bmFtZVxuICAgIH1cbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWZ0ZXJFYWNoKCgpID0+XG4gICAgbW9ja3MuZm9yRWFjaChtb2NrID0+IHtcbiAgICAgIG1vY2sudmVyaWZ5KClcbiAgICAgIG1vY2sucmVzZXQoKVxuICAgIH0pKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBnZXR0aW5nIGJhc2UgdXJsIHdpdGggc3luYyB1cmxQYXJzZXInLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlKCgpID0+IHtcbiAgICAgIG1vY2tzID0gWyB1cmxQYXJzZXIgXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+XG4gICAgICB1cmxQYXJzZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKS5yZXR1cm5zKHBhcnNlZFVybCkpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PiBiYXNlVXJsR2V0dGVyKHsgdXJsUGFyc2VyIH0pKHsgdXJsIH0pXG4gICAgICAuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgZ2V0IGJhc2UgdXJsJywgYXN5bmMgKCkgPT5cbiAgICAgIChhd2FpdCBiYXNlVXJsR2V0dGVyKHsgdXJsUGFyc2VyIH0pKHsgdXJsIH0pKS5zaG91bGQuZXF1YWwoYmFzZVVybCkpXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGdldHRpbmcgYmFzZSB1cmwgd2l0aCBhc3luYyB1cmxQYXJzZXInLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlKCgpID0+IHtcbiAgICAgIG1vY2tzID0gWyBhc3luY1VybFBhcnNlciBdXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4gYXN5bmNVcmxQYXJzZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKVxuICAgICAgLnJldHVybnMoUHJvbWlzZS5yZXNvbHZlKHBhcnNlZFVybCkpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBnZXQgYmFzZSB1cmwnLCBhc3luYyAoKSA9PlxuICAgICAgKGF3YWl0IGJhc2VVcmxHZXR0ZXIoeyB1cmxQYXJzZXI6IGFzeW5jVXJsUGFyc2VyIH0pKHsgdXJsIH0pKS5zaG91bGRcbiAgICAgICAgLmVxdWFsKGJhc2VVcmwpKVxuICB9KVxufSlcbiJdfQ==