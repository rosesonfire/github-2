'use strict';

var _setup = require('./../setup');

var _setup2 = _interopRequireDefault(_setup);

var _urlParser = require('./../mocks/others/urlParser');

var _urlParser2 = _interopRequireDefault(_urlParser);

var _baseUrlGetter = require('./../../main/lib/baseUrlGetter');

var _baseUrlGetter2 = _interopRequireDefault(_baseUrlGetter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-undef

// mocks
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
    mocks = [_urlParser2.default];
  });

  // eslint-disable-next-line no-undef
  beforeEach(function () {
    _urlParser2.default.once().withExactArgs(url).returns(parsedUrl);
  });

  // eslint-disable-next-line no-undef
  afterEach(function () {
    mocks.forEach(function (mock) {
      mock.verify();
      mock.reset();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When getting base url', function () {
    // eslint-disable-next-line no-undef
    it('should get base url', function () {
      (0, _baseUrlGetter2.default)({ urlParser: _urlParser2.default })({ url: url }).should.equal(baseUrl);
    });
  });
});
// unit
// eslint-disable-next-line no-unused-vars
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9iYXNlVXJsR2V0dGVyLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJtb2NrcyIsInVybCIsImhvc3RuYW1lIiwiYmFzZVVybCIsInBhcnNlZFVybCIsImJlZm9yZSIsImJlZm9yZUVhY2giLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJldHVybnMiLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsInJlc2V0IiwiaXQiLCJ1cmxQYXJzZXIiLCJzaG91bGQiLCJlcXVhbCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7OztBQUVBOztBQUxBO0FBTUFBLFNBQVMsZUFBVCxFQUEwQixZQUFNO0FBQzlCLE1BQ0VDLGNBREY7QUFBQSxNQUVFQyxZQUZGO0FBQUEsTUFHRUMsaUJBSEY7QUFBQSxNQUlFQyxnQkFKRjtBQUFBLE1BS0VDLGtCQUxGOztBQU9BO0FBQ0FDLFNBQU8sWUFBTTtBQUNYSixVQUFNLDZCQUFOO0FBQ0FDLGVBQVcsb0JBQVg7QUFDQUMsY0FBVUQsV0FBVyxHQUFyQjtBQUNBRSxnQkFBWTtBQUNWRjtBQURVLEtBQVo7QUFHQUYsWUFBUSxxQkFBUjtBQUNELEdBUkQ7O0FBVUE7QUFDQU0sYUFBVyxZQUFNO0FBQ2Ysd0JBQVVDLElBQVYsR0FBaUJDLGFBQWpCLENBQStCUCxHQUEvQixFQUFvQ1EsT0FBcEMsQ0FBNENMLFNBQTVDO0FBQ0QsR0FGRDs7QUFJQTtBQUNBTSxZQUFVLFlBQU07QUFDZFYsVUFBTVcsT0FBTixDQUFjLGdCQUFRO0FBQ3BCQyxXQUFLQyxNQUFMO0FBQ0FELFdBQUtFLEtBQUw7QUFDRCxLQUhEO0FBSUQsR0FMRDs7QUFPQTtBQUNBZixXQUFTLHVCQUFULEVBQWtDLFlBQU07QUFDdEM7QUFDQWdCLE9BQUcscUJBQUgsRUFBMEIsWUFBTTtBQUM5QixtQ0FBYyxFQUFFQyw4QkFBRixFQUFkLEVBQTZCLEVBQUVmLFFBQUYsRUFBN0IsRUFBc0NnQixNQUF0QyxDQUE2Q0MsS0FBN0MsQ0FBbURmLE9BQW5EO0FBQ0QsS0FGRDtBQUdELEdBTEQ7QUFNRCxDQXZDRDtBQUpBO0FBSkEiLCJmaWxlIjoiYmFzZVVybEdldHRlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vc2V0dXAnXG4vLyBtb2Nrc1xuaW1wb3J0IHVybFBhcnNlciBmcm9tICcuLy4uL21vY2tzL290aGVycy91cmxQYXJzZXInXG4vLyB1bml0XG5pbXBvcnQgYmFzZVVybEdldHRlciBmcm9tICcuLy4uLy4uL21haW4vbGliL2Jhc2VVcmxHZXR0ZXInXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuZGVzY3JpYmUoJ0Jhc2VVcmxHZXR0ZXInLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIHVybCxcbiAgICBob3N0bmFtZSxcbiAgICBiYXNlVXJsLFxuICAgIHBhcnNlZFVybFxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmUoKCkgPT4ge1xuICAgIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vdGltZWxpbmUnXG4gICAgaG9zdG5hbWUgPSAnaHR0cHM6Ly9naXRodWIuY29tJ1xuICAgIGJhc2VVcmwgPSBob3N0bmFtZSArICcvJ1xuICAgIHBhcnNlZFVybCA9IHtcbiAgICAgIGhvc3RuYW1lXG4gICAgfVxuICAgIG1vY2tzID0gWyB1cmxQYXJzZXIgXVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICB1cmxQYXJzZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKS5yZXR1cm5zKHBhcnNlZFVybClcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4ge1xuICAgICAgbW9jay52ZXJpZnkoKVxuICAgICAgbW9jay5yZXNldCgpXG4gICAgfSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gZ2V0dGluZyBiYXNlIHVybCcsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGdldCBiYXNlIHVybCcsICgpID0+IHtcbiAgICAgIGJhc2VVcmxHZXR0ZXIoeyB1cmxQYXJzZXIgfSkoeyB1cmwgfSkuc2hvdWxkLmVxdWFsKGJhc2VVcmwpXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=