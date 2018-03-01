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
    it('should get base url', async function () {
      return (await (0, _baseUrlGetter2.default)({ urlParser: _urlParser2.default })({ url: url })).should.equal(baseUrl);
    });
  });
});
// unit
// eslint-disable-next-line no-unused-vars
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9iYXNlVXJsR2V0dGVyLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJtb2NrcyIsInVybCIsImhvc3RuYW1lIiwiYmFzZVVybCIsInBhcnNlZFVybCIsImJlZm9yZSIsImJlZm9yZUVhY2giLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJldHVybnMiLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsInJlc2V0IiwiaXQiLCJ1cmxQYXJzZXIiLCJzaG91bGQiLCJlcXVhbCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7OztBQUVBOztBQUxBO0FBTUFBLFNBQVMsZUFBVCxFQUEwQixZQUFNO0FBQzlCLE1BQ0VDLGNBREY7QUFBQSxNQUVFQyxZQUZGO0FBQUEsTUFHRUMsaUJBSEY7QUFBQSxNQUlFQyxnQkFKRjtBQUFBLE1BS0VDLGtCQUxGOztBQU9BO0FBQ0FDLFNBQU8sWUFBTTtBQUNYSixVQUFNLDZCQUFOO0FBQ0FDLGVBQVcsb0JBQVg7QUFDQUMsY0FBVUQsV0FBVyxHQUFyQjtBQUNBRSxnQkFBWTtBQUNWRjtBQURVLEtBQVo7QUFHQUYsWUFBUSxxQkFBUjtBQUNELEdBUkQ7O0FBVUE7QUFDQU0sYUFBVyxZQUFNO0FBQ2Ysd0JBQVVDLElBQVYsR0FBaUJDLGFBQWpCLENBQStCUCxHQUEvQixFQUFvQ1EsT0FBcEMsQ0FBNENMLFNBQTVDO0FBQ0QsR0FGRDs7QUFJQTtBQUNBTSxZQUFVLFlBQU07QUFDZFYsVUFBTVcsT0FBTixDQUFjLGdCQUFRO0FBQ3BCQyxXQUFLQyxNQUFMO0FBQ0FELFdBQUtFLEtBQUw7QUFDRCxLQUhEO0FBSUQsR0FMRDs7QUFPQTtBQUNBZixXQUFTLHVCQUFULEVBQWtDLFlBQU07QUFDdEM7QUFDQWdCLE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUN4QixDQUFDLE1BQU0sNkJBQWMsRUFBRUMsOEJBQUYsRUFBZCxFQUE2QixFQUFFZixRQUFGLEVBQTdCLENBQVAsRUFBOENnQixNQUE5QyxDQUFxREMsS0FBckQsQ0FBMkRmLE9BQTNELENBRHdCO0FBQUEsS0FBMUI7QUFHRCxHQUxEO0FBTUQsQ0F2Q0Q7QUFKQTtBQUpBIiwiZmlsZSI6ImJhc2VVcmxHZXR0ZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGV4cGVjdCBmcm9tICcuLy4uL3NldHVwJ1xuLy8gbW9ja3NcbmltcG9ydCB1cmxQYXJzZXIgZnJvbSAnLi8uLi9tb2Nrcy9vdGhlcnMvdXJsUGFyc2VyJ1xuLy8gdW5pdFxuaW1wb3J0IGJhc2VVcmxHZXR0ZXIgZnJvbSAnLi8uLi8uLi9tYWluL2xpYi9iYXNlVXJsR2V0dGVyJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdCYXNlVXJsR2V0dGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICB1cmwsXG4gICAgaG9zdG5hbWUsXG4gICAgYmFzZVVybCxcbiAgICBwYXJzZWRVcmxcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICB1cmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWVsaW5lJ1xuICAgIGhvc3RuYW1lID0gJ2h0dHBzOi8vZ2l0aHViLmNvbSdcbiAgICBiYXNlVXJsID0gaG9zdG5hbWUgKyAnLydcbiAgICBwYXJzZWRVcmwgPSB7XG4gICAgICBob3N0bmFtZVxuICAgIH1cbiAgICBtb2NrcyA9IFsgdXJsUGFyc2VyIF1cbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgdXJsUGFyc2VyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHVybCkucmV0dXJucyhwYXJzZWRVcmwpXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgbW9ja3MuZm9yRWFjaChtb2NrID0+IHtcbiAgICAgIG1vY2sudmVyaWZ5KClcbiAgICAgIG1vY2sucmVzZXQoKVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGdldHRpbmcgYmFzZSB1cmwnLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBnZXQgYmFzZSB1cmwnLCBhc3luYyAoKSA9PlxuICAgICAgKGF3YWl0IGJhc2VVcmxHZXR0ZXIoeyB1cmxQYXJzZXIgfSkoeyB1cmwgfSkpLnNob3VsZC5lcXVhbChiYXNlVXJsKVxuICAgIClcbiAgfSlcbn0pXG4iXX0=