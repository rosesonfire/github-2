'use strict';

var _setup = require('./../setup');

var _getBaseUrl = require('./../../main/services/getBaseUrl');

var _getBaseUrl2 = _interopRequireDefault(_getBaseUrl);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
(0, _setup.describe)('GetBaseUrl', function () {
  var mocks = void 0,
      urlParser = void 0,
      asyncUrlParser = void 0,
      url = void 0,
      protocol = void 0,
      hostname = void 0,
      baseUrl = void 0,
      parsedUrl = void 0;

  (0, _setup.before)(function () {
    url = 'https://github.com/timeline';
    protocol = 'https:';
    hostname = 'github.com';
    baseUrl = protocol + '//' + hostname + '/';
    parsedUrl = {
      protocol: protocol,
      hostname: hostname
    };
  });

  (0, _setup.afterEach)(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  (0, _setup.describe)('When getting base url with sync urlParser', function () {
    (0, _setup.beforeEach)(function () {
      urlParser = (0, _plainOldMockObject2.default)();
      mocks = [urlParser];
      urlParser.once().withExactArgs(url).returns(parsedUrl);
    });

    (0, _setup.it)('should return a promise', function () {
      return (0, _getBaseUrl2.default)({ urlParser: urlParser })({ url: url }).should.be.a('promise');
    });

    (0, _setup.it)('should get base url', function () {
      return (0, _getBaseUrl2.default)({ urlParser: urlParser })({ url: url }).should.eventually.equal(baseUrl);
    });
  });

  (0, _setup.describe)('When getting base url with async urlParser', function () {
    (0, _setup.beforeEach)(function () {
      asyncUrlParser = (0, _plainOldMockObject2.default)();
      mocks = [asyncUrlParser];
      asyncUrlParser.once().withExactArgs(url).returns(Promise.resolve(parsedUrl));
    });

    (0, _setup.it)('should get base url', function () {
      return (0, _getBaseUrl2.default)({ urlParser: asyncUrlParser })({ url: url }).should.eventually.equal(baseUrl);
    });
  });
});
// mocks
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL2dldEJhc2VVcmwuc3BlYy5qcyJdLCJuYW1lcyI6WyJtb2NrcyIsInVybFBhcnNlciIsImFzeW5jVXJsUGFyc2VyIiwidXJsIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsImJhc2VVcmwiLCJwYXJzZWRVcmwiLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsInNob3VsZCIsImJlIiwiYSIsImV2ZW50dWFsbHkiLCJlcXVhbCIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOzs7O0FBRUE7Ozs7OztBQUhBO0FBS0EscUJBQVMsWUFBVCxFQUF1QixZQUFNO0FBQzNCLE1BQ0VBLGNBREY7QUFBQSxNQUVFQyxrQkFGRjtBQUFBLE1BR0VDLHVCQUhGO0FBQUEsTUFJRUMsWUFKRjtBQUFBLE1BS0VDLGlCQUxGO0FBQUEsTUFNRUMsaUJBTkY7QUFBQSxNQU9FQyxnQkFQRjtBQUFBLE1BUUVDLGtCQVJGOztBQVVBLHFCQUFPLFlBQU07QUFDWEosVUFBTSw2QkFBTjtBQUNBQyxlQUFXLFFBQVg7QUFDQUMsZUFBVyxZQUFYO0FBQ0FDLGNBQWFGLFFBQWIsVUFBMEJDLFFBQTFCO0FBQ0FFLGdCQUFZO0FBQ1ZILHdCQURVO0FBRVZDO0FBRlUsS0FBWjtBQUlELEdBVEQ7O0FBV0Esd0JBQVU7QUFBQSxXQUFNTCxNQUFNUSxPQUFOLENBQWM7QUFBQSxhQUFRQyxLQUFLQyxNQUFMLEVBQVI7QUFBQSxLQUFkLENBQU47QUFBQSxHQUFWOztBQUVBLHVCQUFTLDJDQUFULEVBQXNELFlBQU07QUFDMUQsMkJBQVcsWUFBTTtBQUNmVCxrQkFBWSxtQ0FBWjtBQUNBRCxjQUFRLENBQUVDLFNBQUYsQ0FBUjtBQUNBQSxnQkFBVVUsSUFBVixHQUFpQkMsYUFBakIsQ0FBK0JULEdBQS9CLEVBQW9DVSxPQUFwQyxDQUE0Q04sU0FBNUM7QUFDRCxLQUpEOztBQU1BLG1CQUFHLHlCQUFILEVBQThCO0FBQUEsYUFBTSwwQkFBVyxFQUFFTixvQkFBRixFQUFYLEVBQTBCLEVBQUVFLFFBQUYsRUFBMUIsRUFDakNXLE1BRGlDLENBQzFCQyxFQUQwQixDQUN2QkMsQ0FEdUIsQ0FDckIsU0FEcUIsQ0FBTjtBQUFBLEtBQTlCOztBQUdBLG1CQUFHLHFCQUFILEVBQTBCO0FBQUEsYUFDeEIsMEJBQVcsRUFBRWYsb0JBQUYsRUFBWCxFQUEwQixFQUFFRSxRQUFGLEVBQTFCLEVBQW1DVyxNQUFuQyxDQUEwQ0csVUFBMUMsQ0FBcURDLEtBQXJELENBQTJEWixPQUEzRCxDQUR3QjtBQUFBLEtBQTFCO0FBRUQsR0FaRDs7QUFjQSx1QkFBUyw0Q0FBVCxFQUF1RCxZQUFNO0FBQzNELDJCQUFXLFlBQU07QUFDZkosdUJBQWlCLG1DQUFqQjtBQUNBRixjQUFRLENBQUVFLGNBQUYsQ0FBUjtBQUNBQSxxQkFBZVMsSUFBZixHQUFzQkMsYUFBdEIsQ0FBb0NULEdBQXBDLEVBQ0dVLE9BREgsQ0FDV00sUUFBUUMsT0FBUixDQUFnQmIsU0FBaEIsQ0FEWDtBQUVELEtBTEQ7O0FBT0EsbUJBQUcscUJBQUgsRUFBMEI7QUFBQSxhQUN4QiwwQkFBVyxFQUFFTixXQUFXQyxjQUFiLEVBQVgsRUFBMEMsRUFBRUMsUUFBRixFQUExQyxFQUFtRFcsTUFBbkQsQ0FBMERHLFVBQTFELENBQ0dDLEtBREgsQ0FDU1osT0FEVCxDQUR3QjtBQUFBLEtBQTFCO0FBR0QsR0FYRDtBQVlELENBbEREO0FBSEEiLCJmaWxlIjoiZ2V0QmFzZVVybC5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzY3JpYmUsIGJlZm9yZSwgYmVmb3JlRWFjaCwgYWZ0ZXJFYWNoLCBpdCB9IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgZ2V0QmFzZVVybCBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvZ2V0QmFzZVVybCdcbi8vIG1vY2tzXG5pbXBvcnQgcGxhaW5PbGRNb2NrT2JqZWN0IGZyb20gJy4vLi4vbW9ja3Mvb3RoZXJzL3BsYWluT2xkTW9ja09iamVjdCdcblxuZGVzY3JpYmUoJ0dldEJhc2VVcmwnLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIHVybFBhcnNlcixcbiAgICBhc3luY1VybFBhcnNlcixcbiAgICB1cmwsXG4gICAgcHJvdG9jb2wsXG4gICAgaG9zdG5hbWUsXG4gICAgYmFzZVVybCxcbiAgICBwYXJzZWRVcmxcblxuICBiZWZvcmUoKCkgPT4ge1xuICAgIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vdGltZWxpbmUnXG4gICAgcHJvdG9jb2wgPSAnaHR0cHM6J1xuICAgIGhvc3RuYW1lID0gJ2dpdGh1Yi5jb20nXG4gICAgYmFzZVVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vYFxuICAgIHBhcnNlZFVybCA9IHtcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWVcbiAgICB9XG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICBkZXNjcmliZSgnV2hlbiBnZXR0aW5nIGJhc2UgdXJsIHdpdGggc3luYyB1cmxQYXJzZXInLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICB1cmxQYXJzZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgICAgbW9ja3MgPSBbIHVybFBhcnNlciBdXG4gICAgICB1cmxQYXJzZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKS5yZXR1cm5zKHBhcnNlZFVybClcbiAgICB9KVxuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgKCkgPT4gZ2V0QmFzZVVybCh7IHVybFBhcnNlciB9KSh7IHVybCB9KVxuICAgICAgLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICBpdCgnc2hvdWxkIGdldCBiYXNlIHVybCcsICgpID0+XG4gICAgICBnZXRCYXNlVXJsKHsgdXJsUGFyc2VyIH0pKHsgdXJsIH0pLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKGJhc2VVcmwpKVxuICB9KVxuXG4gIGRlc2NyaWJlKCdXaGVuIGdldHRpbmcgYmFzZSB1cmwgd2l0aCBhc3luYyB1cmxQYXJzZXInLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBhc3luY1VybFBhcnNlciA9IHBsYWluT2xkTW9ja09iamVjdCgpXG4gICAgICBtb2NrcyA9IFsgYXN5bmNVcmxQYXJzZXIgXVxuICAgICAgYXN5bmNVcmxQYXJzZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKVxuICAgICAgICAucmV0dXJucyhQcm9taXNlLnJlc29sdmUocGFyc2VkVXJsKSlcbiAgICB9KVxuXG4gICAgaXQoJ3Nob3VsZCBnZXQgYmFzZSB1cmwnLCAoKSA9PlxuICAgICAgZ2V0QmFzZVVybCh7IHVybFBhcnNlcjogYXN5bmNVcmxQYXJzZXIgfSkoeyB1cmwgfSkuc2hvdWxkLmV2ZW50dWFsbHlcbiAgICAgICAgLmVxdWFsKGJhc2VVcmwpKVxuICB9KVxufSlcbiJdfQ==