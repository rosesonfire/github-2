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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9iYXNlVXJsR2V0dGVyLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJtb2NrcyIsInVybFBhcnNlciIsImFzeW5jVXJsUGFyc2VyIiwidXJsIiwiaG9zdG5hbWUiLCJiYXNlVXJsIiwicGFyc2VkVXJsIiwiYmVmb3JlIiwiYWZ0ZXJFYWNoIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJiZWZvcmVFYWNoIiwib25jZSIsIndpdGhFeGFjdEFyZ3MiLCJyZXR1cm5zIiwiaXQiLCJzaG91bGQiLCJiZSIsImEiLCJldmVudHVhbGx5IiwiZXF1YWwiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7OztBQUVBOztBQUxBO0FBTUFBLFNBQVMsZUFBVCxFQUEwQixZQUFNO0FBQzlCLE1BQ0VDLGNBREY7QUFBQSxNQUVFQyxrQkFGRjtBQUFBLE1BR0VDLHVCQUhGO0FBQUEsTUFJRUMsWUFKRjtBQUFBLE1BS0VDLGlCQUxGO0FBQUEsTUFNRUMsZ0JBTkY7QUFBQSxNQU9FQyxrQkFQRjs7QUFTQTtBQUNBQyxTQUFPLFlBQU07QUFDWEosVUFBTSw2QkFBTjtBQUNBQyxlQUFXLG9CQUFYO0FBQ0FDLGNBQVVELFdBQVcsR0FBckI7QUFDQUUsZ0JBQVk7QUFDVkY7QUFEVSxLQUFaO0FBR0QsR0FQRDs7QUFTQTtBQUNBSSxZQUFVO0FBQUEsV0FBTVIsTUFBTVMsT0FBTixDQUFjO0FBQUEsYUFBUUMsS0FBS0MsTUFBTCxFQUFSO0FBQUEsS0FBZCxDQUFOO0FBQUEsR0FBVjs7QUFFQTtBQUNBWixXQUFTLDJDQUFULEVBQXNELFlBQU07QUFDMUQ7QUFDQWEsZUFBVyxZQUFNO0FBQ2ZYLGtCQUFZLG1DQUFaO0FBQ0FELGNBQVEsQ0FBRUMsU0FBRixDQUFSO0FBQ0FBLGdCQUFVWSxJQUFWLEdBQWlCQyxhQUFqQixDQUErQlgsR0FBL0IsRUFBb0NZLE9BQXBDLENBQTRDVCxTQUE1QztBQUNELEtBSkQ7O0FBTUE7QUFDQVUsT0FBRyx5QkFBSCxFQUE4QjtBQUFBLGFBQU0sNkJBQWMsRUFBRWYsb0JBQUYsRUFBZCxFQUE2QixFQUFFRSxRQUFGLEVBQTdCLEVBQ2pDYyxNQURpQyxDQUMxQkMsRUFEMEIsQ0FDdkJDLENBRHVCLENBQ3JCLFNBRHFCLENBQU47QUFBQSxLQUE5Qjs7QUFHQTtBQUNBSCxPQUFHLHFCQUFILEVBQTBCO0FBQUEsYUFDeEIsNkJBQWMsRUFBRWYsb0JBQUYsRUFBZCxFQUE2QixFQUFFRSxRQUFGLEVBQTdCLEVBQXNDYyxNQUF0QyxDQUE2Q0csVUFBN0MsQ0FBd0RDLEtBQXhELENBQThEaEIsT0FBOUQsQ0FEd0I7QUFBQSxLQUExQjtBQUVELEdBZkQ7O0FBaUJBO0FBQ0FOLFdBQVMsNENBQVQsRUFBdUQsWUFBTTtBQUMzRDtBQUNBYSxlQUFXLFlBQU07QUFDZlYsdUJBQWlCLG1DQUFqQjtBQUNBRixjQUFRLENBQUVFLGNBQUYsQ0FBUjtBQUNBQSxxQkFBZVcsSUFBZixHQUFzQkMsYUFBdEIsQ0FBb0NYLEdBQXBDLEVBQ0dZLE9BREgsQ0FDV08sUUFBUUMsT0FBUixDQUFnQmpCLFNBQWhCLENBRFg7QUFFRCxLQUxEOztBQU9BO0FBQ0FVLE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUN4Qiw2QkFBYyxFQUFFZixXQUFXQyxjQUFiLEVBQWQsRUFBNkMsRUFBRUMsUUFBRixFQUE3QyxFQUFzRGMsTUFBdEQsQ0FBNkRHLFVBQTdELENBQ0dDLEtBREgsQ0FDU2hCLE9BRFQsQ0FEd0I7QUFBQSxLQUExQjtBQUdELEdBYkQ7QUFjRCxDQXhERDtBQUpBO0FBSkEiLCJmaWxlIjoiYmFzZVVybEdldHRlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgYmFzZVVybEdldHRlciBmcm9tICcuLy4uLy4uL21haW4vbGliL2Jhc2VVcmxHZXR0ZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkTW9ja09iamVjdCBmcm9tICcuLy4uL21vY2tzL290aGVycy9wbGFpbk9sZE1vY2tPYmplY3QnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuZGVzY3JpYmUoJ0Jhc2VVcmxHZXR0ZXInLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIHVybFBhcnNlcixcbiAgICBhc3luY1VybFBhcnNlcixcbiAgICB1cmwsXG4gICAgaG9zdG5hbWUsXG4gICAgYmFzZVVybCxcbiAgICBwYXJzZWRVcmxcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICB1cmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWVsaW5lJ1xuICAgIGhvc3RuYW1lID0gJ2h0dHBzOi8vZ2l0aHViLmNvbSdcbiAgICBiYXNlVXJsID0gaG9zdG5hbWUgKyAnLydcbiAgICBwYXJzZWRVcmwgPSB7XG4gICAgICBob3N0bmFtZVxuICAgIH1cbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gZ2V0dGluZyBiYXNlIHVybCB3aXRoIHN5bmMgdXJsUGFyc2VyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgdXJsUGFyc2VyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICAgIG1vY2tzID0gWyB1cmxQYXJzZXIgXVxuICAgICAgdXJsUGFyc2VyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHVybCkucmV0dXJucyhwYXJzZWRVcmwpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+IGJhc2VVcmxHZXR0ZXIoeyB1cmxQYXJzZXIgfSkoeyB1cmwgfSlcbiAgICAgIC5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBnZXQgYmFzZSB1cmwnLCAoKSA9PlxuICAgICAgYmFzZVVybEdldHRlcih7IHVybFBhcnNlciB9KSh7IHVybCB9KS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbChiYXNlVXJsKSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gZ2V0dGluZyBiYXNlIHVybCB3aXRoIGFzeW5jIHVybFBhcnNlcicsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGFzeW5jVXJsUGFyc2VyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICAgIG1vY2tzID0gWyBhc3luY1VybFBhcnNlciBdXG4gICAgICBhc3luY1VybFBhcnNlci5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwpXG4gICAgICAgIC5yZXR1cm5zKFByb21pc2UucmVzb2x2ZShwYXJzZWRVcmwpKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGdldCBiYXNlIHVybCcsICgpID0+XG4gICAgICBiYXNlVXJsR2V0dGVyKHsgdXJsUGFyc2VyOiBhc3luY1VybFBhcnNlciB9KSh7IHVybCB9KS5zaG91bGQuZXZlbnR1YWxseVxuICAgICAgICAuZXF1YWwoYmFzZVVybCkpXG4gIH0pXG59KVxuIl19