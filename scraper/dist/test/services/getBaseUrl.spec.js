'use strict';

var _setup = require('./../setup');

var _setup2 = _interopRequireDefault(_setup);

var _getBaseUrl = require('./../../main/services/getBaseUrl');

var _getBaseUrl2 = _interopRequireDefault(_getBaseUrl);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-undef

// unit
describe('GetBaseUrl', function () {
  var mocks = void 0,
      urlParser = void 0,
      asyncUrlParser = void 0,
      url = void 0,
      protocol = void 0,
      hostname = void 0,
      baseUrl = void 0,
      parsedUrl = void 0;

  // eslint-disable-next-line no-undef
  before(function () {
    url = 'https://github.com/timeline';
    protocol = 'https:';
    hostname = 'github.com';
    baseUrl = protocol + '//' + hostname + '/';
    parsedUrl = {
      protocol: protocol,
      hostname: hostname
    };
  });

  // eslint-disable-next-line no-undef
  afterEach(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When getting base url with sync urlParser', function () {
    // eslint-disable-next-line no-undef
    beforeEach(function () {
      urlParser = (0, _plainOldMockObject2.default)();
      mocks = [urlParser];
      urlParser.once().withExactArgs(url).returns(parsedUrl);
    });

    // eslint-disable-next-line no-undef
    it('should return a promise', function () {
      return (0, _getBaseUrl2.default)({ urlParser: urlParser })({ url: url }).should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should get base url', function () {
      return (0, _getBaseUrl2.default)({ urlParser: urlParser })({ url: url }).should.eventually.equal(baseUrl);
    });
  });

  // eslint-disable-next-line no-undef
  describe('When getting base url with async urlParser', function () {
    // eslint-disable-next-line no-undef
    beforeEach(function () {
      asyncUrlParser = (0, _plainOldMockObject2.default)();
      mocks = [asyncUrlParser];
      asyncUrlParser.once().withExactArgs(url).returns(Promise.resolve(parsedUrl));
    });

    // eslint-disable-next-line no-undef
    it('should get base url', function () {
      return (0, _getBaseUrl2.default)({ urlParser: asyncUrlParser })({ url: url }).should.eventually.equal(baseUrl);
    });
  });
});
// mocks
// eslint-disable-next-line no-unused-vars
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL2dldEJhc2VVcmwuc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwidXJsUGFyc2VyIiwiYXN5bmNVcmxQYXJzZXIiLCJ1cmwiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwiYmFzZVVybCIsInBhcnNlZFVybCIsImJlZm9yZSIsImFmdGVyRWFjaCIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwiYmVmb3JlRWFjaCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsIml0Iiwic2hvdWxkIiwiYmUiLCJhIiwiZXZlbnR1YWxseSIsImVxdWFsIiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7QUFFQTs7QUFMQTtBQU1BQSxTQUFTLFlBQVQsRUFBdUIsWUFBTTtBQUMzQixNQUNFQyxjQURGO0FBQUEsTUFFRUMsa0JBRkY7QUFBQSxNQUdFQyx1QkFIRjtBQUFBLE1BSUVDLFlBSkY7QUFBQSxNQUtFQyxpQkFMRjtBQUFBLE1BTUVDLGlCQU5GO0FBQUEsTUFPRUMsZ0JBUEY7QUFBQSxNQVFFQyxrQkFSRjs7QUFVQTtBQUNBQyxTQUFPLFlBQU07QUFDWEwsVUFBTSw2QkFBTjtBQUNBQyxlQUFXLFFBQVg7QUFDQUMsZUFBVyxZQUFYO0FBQ0FDLGNBQWFGLFFBQWIsVUFBMEJDLFFBQTFCO0FBQ0FFLGdCQUFZO0FBQ1ZILHdCQURVO0FBRVZDO0FBRlUsS0FBWjtBQUlELEdBVEQ7O0FBV0E7QUFDQUksWUFBVTtBQUFBLFdBQU1ULE1BQU1VLE9BQU4sQ0FBYztBQUFBLGFBQVFDLEtBQUtDLE1BQUwsRUFBUjtBQUFBLEtBQWQsQ0FBTjtBQUFBLEdBQVY7O0FBRUE7QUFDQWIsV0FBUywyQ0FBVCxFQUFzRCxZQUFNO0FBQzFEO0FBQ0FjLGVBQVcsWUFBTTtBQUNmWixrQkFBWSxtQ0FBWjtBQUNBRCxjQUFRLENBQUVDLFNBQUYsQ0FBUjtBQUNBQSxnQkFBVWEsSUFBVixHQUFpQkMsYUFBakIsQ0FBK0JaLEdBQS9CLEVBQW9DYSxPQUFwQyxDQUE0Q1QsU0FBNUM7QUFDRCxLQUpEOztBQU1BO0FBQ0FVLE9BQUcseUJBQUgsRUFBOEI7QUFBQSxhQUFNLDBCQUFXLEVBQUVoQixvQkFBRixFQUFYLEVBQTBCLEVBQUVFLFFBQUYsRUFBMUIsRUFDakNlLE1BRGlDLENBQzFCQyxFQUQwQixDQUN2QkMsQ0FEdUIsQ0FDckIsU0FEcUIsQ0FBTjtBQUFBLEtBQTlCOztBQUdBO0FBQ0FILE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUN4QiwwQkFBVyxFQUFFaEIsb0JBQUYsRUFBWCxFQUEwQixFQUFFRSxRQUFGLEVBQTFCLEVBQW1DZSxNQUFuQyxDQUEwQ0csVUFBMUMsQ0FBcURDLEtBQXJELENBQTJEaEIsT0FBM0QsQ0FEd0I7QUFBQSxLQUExQjtBQUVELEdBZkQ7O0FBaUJBO0FBQ0FQLFdBQVMsNENBQVQsRUFBdUQsWUFBTTtBQUMzRDtBQUNBYyxlQUFXLFlBQU07QUFDZlgsdUJBQWlCLG1DQUFqQjtBQUNBRixjQUFRLENBQUVFLGNBQUYsQ0FBUjtBQUNBQSxxQkFBZVksSUFBZixHQUFzQkMsYUFBdEIsQ0FBb0NaLEdBQXBDLEVBQ0dhLE9BREgsQ0FDV08sUUFBUUMsT0FBUixDQUFnQmpCLFNBQWhCLENBRFg7QUFFRCxLQUxEOztBQU9BO0FBQ0FVLE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUN4QiwwQkFBVyxFQUFFaEIsV0FBV0MsY0FBYixFQUFYLEVBQTBDLEVBQUVDLFFBQUYsRUFBMUMsRUFBbURlLE1BQW5ELENBQTBERyxVQUExRCxDQUNHQyxLQURILENBQ1NoQixPQURULENBRHdCO0FBQUEsS0FBMUI7QUFHRCxHQWJEO0FBY0QsQ0EzREQ7QUFKQTtBQUpBIiwiZmlsZSI6ImdldEJhc2VVcmwuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGV4cGVjdCBmcm9tICcuLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IGdldEJhc2VVcmwgZnJvbSAnLi8uLi8uLi9tYWluL3NlcnZpY2VzL2dldEJhc2VVcmwnXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkTW9ja09iamVjdCBmcm9tICcuLy4uL21vY2tzL290aGVycy9wbGFpbk9sZE1vY2tPYmplY3QnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuZGVzY3JpYmUoJ0dldEJhc2VVcmwnLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIHVybFBhcnNlcixcbiAgICBhc3luY1VybFBhcnNlcixcbiAgICB1cmwsXG4gICAgcHJvdG9jb2wsXG4gICAgaG9zdG5hbWUsXG4gICAgYmFzZVVybCxcbiAgICBwYXJzZWRVcmxcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICB1cmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWVsaW5lJ1xuICAgIHByb3RvY29sID0gJ2h0dHBzOidcbiAgICBob3N0bmFtZSA9ICdnaXRodWIuY29tJ1xuICAgIGJhc2VVcmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L2BcbiAgICBwYXJzZWRVcmwgPSB7XG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lXG4gICAgfVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IG1vY2sudmVyaWZ5KCkpKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBnZXR0aW5nIGJhc2UgdXJsIHdpdGggc3luYyB1cmxQYXJzZXInLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICB1cmxQYXJzZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgICAgbW9ja3MgPSBbIHVybFBhcnNlciBdXG4gICAgICB1cmxQYXJzZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKS5yZXR1cm5zKHBhcnNlZFVybClcbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgKCkgPT4gZ2V0QmFzZVVybCh7IHVybFBhcnNlciB9KSh7IHVybCB9KVxuICAgICAgLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGdldCBiYXNlIHVybCcsICgpID0+XG4gICAgICBnZXRCYXNlVXJsKHsgdXJsUGFyc2VyIH0pKHsgdXJsIH0pLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKGJhc2VVcmwpKVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBnZXR0aW5nIGJhc2UgdXJsIHdpdGggYXN5bmMgdXJsUGFyc2VyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgYXN5bmNVcmxQYXJzZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgICAgbW9ja3MgPSBbIGFzeW5jVXJsUGFyc2VyIF1cbiAgICAgIGFzeW5jVXJsUGFyc2VyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHVybClcbiAgICAgICAgLnJldHVybnMoUHJvbWlzZS5yZXNvbHZlKHBhcnNlZFVybCkpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgZ2V0IGJhc2UgdXJsJywgKCkgPT5cbiAgICAgIGdldEJhc2VVcmwoeyB1cmxQYXJzZXI6IGFzeW5jVXJsUGFyc2VyIH0pKHsgdXJsIH0pLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgIC5lcXVhbChiYXNlVXJsKSlcbiAgfSlcbn0pXG4iXX0=