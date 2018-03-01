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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9iYXNlVXJsR2V0dGVyLnNwZWMuanMiXSwibmFtZXMiOlsidXJsUGFyc2VyIiwiYXN5bmNVcmxQYXJzZXIiLCJkZXNjcmliZSIsIm1vY2tzIiwidXJsIiwiaG9zdG5hbWUiLCJiYXNlVXJsIiwicGFyc2VkVXJsIiwiYmVmb3JlIiwiYWZ0ZXJFYWNoIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJyZXNldCIsImJlZm9yZUVhY2giLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJldHVybnMiLCJpdCIsInNob3VsZCIsImVxdWFsIiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7QUFIQTtBQUlBLElBQU1BLFlBQVksbUNBQWxCO0FBRkE7QUFKQTs7QUFPQSxJQUFNQyxpQkFBaUIsbUNBQXZCOztBQUVBO0FBQ0FDLFNBQVMsZUFBVCxFQUEwQixZQUFNO0FBQzlCLE1BQ0VDLGNBREY7QUFBQSxNQUVFQyxZQUZGO0FBQUEsTUFHRUMsaUJBSEY7QUFBQSxNQUlFQyxnQkFKRjtBQUFBLE1BS0VDLGtCQUxGOztBQU9BO0FBQ0FDLFNBQU8sWUFBTTtBQUNYSixVQUFNLDZCQUFOO0FBQ0FDLGVBQVcsb0JBQVg7QUFDQUMsY0FBVUQsV0FBVyxHQUFyQjtBQUNBRSxnQkFBWTtBQUNWRjtBQURVLEtBQVo7QUFHRCxHQVBEOztBQVNBO0FBQ0FJLFlBQVU7QUFBQSxXQUNSTixNQUFNTyxPQUFOLENBQWMsZ0JBQVE7QUFDcEJDLFdBQUtDLE1BQUw7QUFDQUQsV0FBS0UsS0FBTDtBQUNELEtBSEQsQ0FEUTtBQUFBLEdBQVY7O0FBTUE7QUFDQVgsV0FBUywyQ0FBVCxFQUFzRCxZQUFNO0FBQzFEO0FBQ0FNLFdBQU8sWUFBTTtBQUNYTCxjQUFRLENBQUVILFNBQUYsQ0FBUjtBQUNELEtBRkQ7O0FBSUE7QUFDQWMsZUFBVztBQUFBLGFBQ1RkLFVBQVVlLElBQVYsR0FBaUJDLGFBQWpCLENBQStCWixHQUEvQixFQUFvQ2EsT0FBcEMsQ0FBNENWLFNBQTVDLENBRFM7QUFBQSxLQUFYOztBQUdBO0FBQ0FXLE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUN4QixDQUFDLE1BQU0sNkJBQWMsRUFBRWxCLG9CQUFGLEVBQWQsRUFBNkIsRUFBRUksUUFBRixFQUE3QixDQUFQLEVBQThDZSxNQUE5QyxDQUFxREMsS0FBckQsQ0FBMkRkLE9BQTNELENBRHdCO0FBQUEsS0FBMUI7QUFFRCxHQWJEOztBQWVBO0FBQ0FKLFdBQVMsNENBQVQsRUFBdUQsWUFBTTtBQUMzRDtBQUNBTSxXQUFPLFlBQU07QUFDWEwsY0FBUSxDQUFFRixjQUFGLENBQVI7QUFDRCxLQUZEOztBQUlBO0FBQ0FhLGVBQVc7QUFBQSxhQUFNYixlQUFlYyxJQUFmLEdBQXNCQyxhQUF0QixDQUFvQ1osR0FBcEMsRUFDZGEsT0FEYyxDQUNOSSxRQUFRQyxPQUFSLENBQWdCZixTQUFoQixDQURNLENBQU47QUFBQSxLQUFYOztBQUdBO0FBQ0FXLE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUN4QixDQUFDLE1BQU0sNkJBQWMsRUFBRWxCLFdBQVdDLGNBQWIsRUFBZCxFQUE2QyxFQUFFRyxRQUFGLEVBQTdDLENBQVAsRUFBOERlLE1BQTlELENBQ0dDLEtBREgsQ0FDU2QsT0FEVCxDQUR3QjtBQUFBLEtBQTFCO0FBR0QsR0FkRDtBQWVELENBekREIiwiZmlsZSI6ImJhc2VVcmxHZXR0ZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGV4cGVjdCBmcm9tICcuLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IGJhc2VVcmxHZXR0ZXIgZnJvbSAnLi8uLi8uLi9tYWluL2xpYi9iYXNlVXJsR2V0dGVyJ1xuLy8gbW9ja3NcbmltcG9ydCBwbGFpbk9sZE1vY2tPYmplY3QgZnJvbSAnLi8uLi9tb2Nrcy9vdGhlcnMvcGxhaW5PbGRNb2NrT2JqZWN0J1xuY29uc3QgdXJsUGFyc2VyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbmNvbnN0IGFzeW5jVXJsUGFyc2VyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5kZXNjcmliZSgnQmFzZVVybEdldHRlcicsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgdXJsLFxuICAgIGhvc3RuYW1lLFxuICAgIGJhc2VVcmwsXG4gICAgcGFyc2VkVXJsXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lbGluZSdcbiAgICBob3N0bmFtZSA9ICdodHRwczovL2dpdGh1Yi5jb20nXG4gICAgYmFzZVVybCA9IGhvc3RuYW1lICsgJy8nXG4gICAgcGFyc2VkVXJsID0ge1xuICAgICAgaG9zdG5hbWVcbiAgICB9XG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PlxuICAgIG1vY2tzLmZvckVhY2gobW9jayA9PiB7XG4gICAgICBtb2NrLnZlcmlmeSgpXG4gICAgICBtb2NrLnJlc2V0KClcbiAgICB9KSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gZ2V0dGluZyBiYXNlIHVybCB3aXRoIHN5bmMgdXJsUGFyc2VyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBtb2NrcyA9IFsgdXJsUGFyc2VyIF1cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PlxuICAgICAgdXJsUGFyc2VyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHVybCkucmV0dXJucyhwYXJzZWRVcmwpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBnZXQgYmFzZSB1cmwnLCBhc3luYyAoKSA9PlxuICAgICAgKGF3YWl0IGJhc2VVcmxHZXR0ZXIoeyB1cmxQYXJzZXIgfSkoeyB1cmwgfSkpLnNob3VsZC5lcXVhbChiYXNlVXJsKSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gZ2V0dGluZyBiYXNlIHVybCB3aXRoIGFzeW5jIHVybFBhcnNlcicsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmUoKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbIGFzeW5jVXJsUGFyc2VyIF1cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiBhc3luY1VybFBhcnNlci5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwpXG4gICAgICAucmV0dXJucyhQcm9taXNlLnJlc29sdmUocGFyc2VkVXJsKSkpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGdldCBiYXNlIHVybCcsIGFzeW5jICgpID0+XG4gICAgICAoYXdhaXQgYmFzZVVybEdldHRlcih7IHVybFBhcnNlcjogYXN5bmNVcmxQYXJzZXIgfSkoeyB1cmwgfSkpLnNob3VsZFxuICAgICAgICAuZXF1YWwoYmFzZVVybCkpXG4gIH0pXG59KVxuIl19