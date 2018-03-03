'use strict';

var _setup = require('./../setup');

var _setup2 = _interopRequireDefault(_setup);

var _baseUrlGetter = require('./../../main/lib/baseUrlGetter');

var _baseUrlGetter2 = _interopRequireDefault(_baseUrlGetter);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-undef

// unit
describe('BaseUrlGetter', function () {
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
    beforeEach(function () {
      asyncUrlParser = (0, _plainOldMockObject2.default)();
      mocks = [asyncUrlParser];
      asyncUrlParser.once().withExactArgs(url).returns(Promise.resolve(parsedUrl));
    });

    // eslint-disable-next-line no-undef
    it('should get base url', function () {
      return (0, _baseUrlGetter2.default)({ urlParser: asyncUrlParser })({ url: url }).should.eventually.equal(baseUrl);
    });
  });
});
// mocks
// eslint-disable-next-line no-unused-vars
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9iYXNlVXJsR2V0dGVyLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJtb2NrcyIsInVybFBhcnNlciIsImFzeW5jVXJsUGFyc2VyIiwidXJsIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsImJhc2VVcmwiLCJwYXJzZWRVcmwiLCJiZWZvcmUiLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsImJlZm9yZUVhY2giLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJldHVybnMiLCJpdCIsInNob3VsZCIsImJlIiwiYSIsImV2ZW50dWFsbHkiLCJlcXVhbCIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7O0FBRUE7O0FBTEE7QUFNQUEsU0FBUyxlQUFULEVBQTBCLFlBQU07QUFDOUIsTUFDRUMsY0FERjtBQUFBLE1BRUVDLGtCQUZGO0FBQUEsTUFHRUMsdUJBSEY7QUFBQSxNQUlFQyxZQUpGO0FBQUEsTUFLRUMsaUJBTEY7QUFBQSxNQU1FQyxpQkFORjtBQUFBLE1BT0VDLGdCQVBGO0FBQUEsTUFRRUMsa0JBUkY7O0FBVUE7QUFDQUMsU0FBTyxZQUFNO0FBQ1hMLFVBQU0sNkJBQU47QUFDQUMsZUFBVyxRQUFYO0FBQ0FDLGVBQVcsWUFBWDtBQUNBQyxjQUFhRixRQUFiLFVBQTBCQyxRQUExQjtBQUNBRSxnQkFBWTtBQUNWSCx3QkFEVTtBQUVWQztBQUZVLEtBQVo7QUFJRCxHQVREOztBQVdBO0FBQ0FJLFlBQVU7QUFBQSxXQUFNVCxNQUFNVSxPQUFOLENBQWM7QUFBQSxhQUFRQyxLQUFLQyxNQUFMLEVBQVI7QUFBQSxLQUFkLENBQU47QUFBQSxHQUFWOztBQUVBO0FBQ0FiLFdBQVMsMkNBQVQsRUFBc0QsWUFBTTtBQUMxRDtBQUNBYyxlQUFXLFlBQU07QUFDZlosa0JBQVksbUNBQVo7QUFDQUQsY0FBUSxDQUFFQyxTQUFGLENBQVI7QUFDQUEsZ0JBQVVhLElBQVYsR0FBaUJDLGFBQWpCLENBQStCWixHQUEvQixFQUFvQ2EsT0FBcEMsQ0FBNENULFNBQTVDO0FBQ0QsS0FKRDs7QUFNQTtBQUNBVSxPQUFHLHlCQUFILEVBQThCO0FBQUEsYUFBTSw2QkFBYyxFQUFFaEIsb0JBQUYsRUFBZCxFQUE2QixFQUFFRSxRQUFGLEVBQTdCLEVBQ2pDZSxNQURpQyxDQUMxQkMsRUFEMEIsQ0FDdkJDLENBRHVCLENBQ3JCLFNBRHFCLENBQU47QUFBQSxLQUE5Qjs7QUFHQTtBQUNBSCxPQUFHLHFCQUFILEVBQTBCO0FBQUEsYUFDeEIsNkJBQWMsRUFBRWhCLG9CQUFGLEVBQWQsRUFBNkIsRUFBRUUsUUFBRixFQUE3QixFQUFzQ2UsTUFBdEMsQ0FBNkNHLFVBQTdDLENBQXdEQyxLQUF4RCxDQUE4RGhCLE9BQTlELENBRHdCO0FBQUEsS0FBMUI7QUFFRCxHQWZEOztBQWlCQTtBQUNBUCxXQUFTLDRDQUFULEVBQXVELFlBQU07QUFDM0Q7QUFDQWMsZUFBVyxZQUFNO0FBQ2ZYLHVCQUFpQixtQ0FBakI7QUFDQUYsY0FBUSxDQUFFRSxjQUFGLENBQVI7QUFDQUEscUJBQWVZLElBQWYsR0FBc0JDLGFBQXRCLENBQW9DWixHQUFwQyxFQUNHYSxPQURILENBQ1dPLFFBQVFDLE9BQVIsQ0FBZ0JqQixTQUFoQixDQURYO0FBRUQsS0FMRDs7QUFPQTtBQUNBVSxPQUFHLHFCQUFILEVBQTBCO0FBQUEsYUFDeEIsNkJBQWMsRUFBRWhCLFdBQVdDLGNBQWIsRUFBZCxFQUE2QyxFQUFFQyxRQUFGLEVBQTdDLEVBQXNEZSxNQUF0RCxDQUE2REcsVUFBN0QsQ0FDR0MsS0FESCxDQUNTaEIsT0FEVCxDQUR3QjtBQUFBLEtBQTFCO0FBR0QsR0FiRDtBQWNELENBM0REO0FBSkE7QUFKQSIsImZpbGUiOiJiYXNlVXJsR2V0dGVyLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBleHBlY3QgZnJvbSAnLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCBiYXNlVXJsR2V0dGVyIGZyb20gJy4vLi4vLi4vbWFpbi9saWIvYmFzZVVybEdldHRlcidcbi8vIG1vY2tzXG5pbXBvcnQgcGxhaW5PbGRNb2NrT2JqZWN0IGZyb20gJy4vLi4vbW9ja3Mvb3RoZXJzL3BsYWluT2xkTW9ja09iamVjdCdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5kZXNjcmliZSgnQmFzZVVybEdldHRlcicsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgdXJsUGFyc2VyLFxuICAgIGFzeW5jVXJsUGFyc2VyLFxuICAgIHVybCxcbiAgICBwcm90b2NvbCxcbiAgICBob3N0bmFtZSxcbiAgICBiYXNlVXJsLFxuICAgIHBhcnNlZFVybFxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmUoKCkgPT4ge1xuICAgIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vdGltZWxpbmUnXG4gICAgcHJvdG9jb2wgPSAnaHR0cHM6J1xuICAgIGhvc3RuYW1lID0gJ2dpdGh1Yi5jb20nXG4gICAgYmFzZVVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vYFxuICAgIHBhcnNlZFVybCA9IHtcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWVcbiAgICB9XG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGdldHRpbmcgYmFzZSB1cmwgd2l0aCBzeW5jIHVybFBhcnNlcicsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIHVybFBhcnNlciA9IHBsYWluT2xkTW9ja09iamVjdCgpXG4gICAgICBtb2NrcyA9IFsgdXJsUGFyc2VyIF1cbiAgICAgIHVybFBhcnNlci5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwpLnJldHVybnMocGFyc2VkVXJsKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PiBiYXNlVXJsR2V0dGVyKHsgdXJsUGFyc2VyIH0pKHsgdXJsIH0pXG4gICAgICAuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgZ2V0IGJhc2UgdXJsJywgKCkgPT5cbiAgICAgIGJhc2VVcmxHZXR0ZXIoeyB1cmxQYXJzZXIgfSkoeyB1cmwgfSkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoYmFzZVVybCkpXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGdldHRpbmcgYmFzZSB1cmwgd2l0aCBhc3luYyB1cmxQYXJzZXInLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBhc3luY1VybFBhcnNlciA9IHBsYWluT2xkTW9ja09iamVjdCgpXG4gICAgICBtb2NrcyA9IFsgYXN5bmNVcmxQYXJzZXIgXVxuICAgICAgYXN5bmNVcmxQYXJzZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKVxuICAgICAgICAucmV0dXJucyhQcm9taXNlLnJlc29sdmUocGFyc2VkVXJsKSlcbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBnZXQgYmFzZSB1cmwnLCAoKSA9PlxuICAgICAgYmFzZVVybEdldHRlcih7IHVybFBhcnNlcjogYXN5bmNVcmxQYXJzZXIgfSkoeyB1cmwgfSkuc2hvdWxkLmV2ZW50dWFsbHlcbiAgICAgICAgLmVxdWFsKGJhc2VVcmwpKVxuICB9KVxufSlcbiJdfQ==