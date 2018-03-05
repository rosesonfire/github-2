'use strict';

var _setup = require('./../setup');

var _setup2 = _interopRequireDefault(_setup);

var _dataFetcher = require('./../../main/services/dataFetcher');

var _dataFetcher2 = _interopRequireDefault(_dataFetcher);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-undef

// unit
describe('DataFetcher', function () {
  var mocks = void 0,
      httpGetter = void 0,
      asyncHttpGetter = void 0,
      url = void 0,
      data = void 0;

  // eslint-disable-next-line no-undef
  before(function () {
    url = 'https://github.com/timeline';
    data = '<xml><tag>Some data</tag></xml>';
  });

  // eslint-disable-next-line no-undef
  afterEach(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When fetching data with sync httpGetter', function () {
    // eslint-disable-next-line no-undef
    beforeEach(function () {
      httpGetter = (0, _plainOldMockObject2.default)();
      mocks = [httpGetter];
      httpGetter.once().withExactArgs(url).returns(data);
    });

    // eslint-disable-next-line no-undef
    it('should return a promise', function () {
      return (0, _dataFetcher2.default)({ httpGetter: httpGetter })({ url: url }).should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should get base url', function () {
      return (0, _dataFetcher2.default)({ httpGetter: httpGetter })({ url: url }).should.eventually.equal(data);
    });
  });

  // eslint-disable-next-line no-undef
  describe('When fetching data with async httpGetter', function () {
    // eslint-disable-next-line no-undef
    beforeEach(function () {
      asyncHttpGetter = (0, _plainOldMockObject2.default)();
      mocks = [asyncHttpGetter];
      asyncHttpGetter.once().withExactArgs(url).returns(Promise.resolve(data));
    });

    // eslint-disable-next-line no-undef
    it('should get base url', function () {
      return (0, _dataFetcher2.default)({ httpGetter: asyncHttpGetter })({ url: url }).should.eventually.equal(data);
    });
  });
});
// mocks
// eslint-disable-next-line no-unused-vars
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL2RhdGFGZXRjaGVyLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJtb2NrcyIsImh0dHBHZXR0ZXIiLCJhc3luY0h0dHBHZXR0ZXIiLCJ1cmwiLCJkYXRhIiwiYmVmb3JlIiwiYWZ0ZXJFYWNoIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJiZWZvcmVFYWNoIiwib25jZSIsIndpdGhFeGFjdEFyZ3MiLCJyZXR1cm5zIiwiaXQiLCJzaG91bGQiLCJiZSIsImEiLCJldmVudHVhbGx5IiwiZXF1YWwiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7OztBQUVBOztBQUxBO0FBTUFBLFNBQVMsYUFBVCxFQUF3QixZQUFNO0FBQzVCLE1BQ0VDLGNBREY7QUFBQSxNQUVFQyxtQkFGRjtBQUFBLE1BR0VDLHdCQUhGO0FBQUEsTUFJRUMsWUFKRjtBQUFBLE1BS0VDLGFBTEY7O0FBT0E7QUFDQUMsU0FBTyxZQUFNO0FBQ1hGLFVBQU0sNkJBQU47QUFDQUMsV0FBTyxpQ0FBUDtBQUNELEdBSEQ7O0FBS0E7QUFDQUUsWUFBVTtBQUFBLFdBQU1OLE1BQU1PLE9BQU4sQ0FBYztBQUFBLGFBQVFDLEtBQUtDLE1BQUwsRUFBUjtBQUFBLEtBQWQsQ0FBTjtBQUFBLEdBQVY7O0FBRUE7QUFDQVYsV0FBUyx5Q0FBVCxFQUFvRCxZQUFNO0FBQ3hEO0FBQ0FXLGVBQVcsWUFBTTtBQUNmVCxtQkFBYSxtQ0FBYjtBQUNBRCxjQUFRLENBQUVDLFVBQUYsQ0FBUjtBQUNBQSxpQkFBV1UsSUFBWCxHQUFrQkMsYUFBbEIsQ0FBZ0NULEdBQWhDLEVBQXFDVSxPQUFyQyxDQUE2Q1QsSUFBN0M7QUFDRCxLQUpEOztBQU1BO0FBQ0FVLE9BQUcseUJBQUgsRUFBOEI7QUFBQSxhQUFNLDJCQUFZLEVBQUViLHNCQUFGLEVBQVosRUFBNEIsRUFBRUUsUUFBRixFQUE1QixFQUNqQ1ksTUFEaUMsQ0FDMUJDLEVBRDBCLENBQ3ZCQyxDQUR1QixDQUNyQixTQURxQixDQUFOO0FBQUEsS0FBOUI7O0FBR0E7QUFDQUgsT0FBRyxxQkFBSCxFQUEwQjtBQUFBLGFBQU0sMkJBQVksRUFBRWIsc0JBQUYsRUFBWixFQUE0QixFQUFFRSxRQUFGLEVBQTVCLEVBQXFDWSxNQUFyQyxDQUM3QkcsVUFENkIsQ0FDbEJDLEtBRGtCLENBQ1pmLElBRFksQ0FBTjtBQUFBLEtBQTFCO0FBRUQsR0FmRDs7QUFpQkE7QUFDQUwsV0FBUywwQ0FBVCxFQUFxRCxZQUFNO0FBQ3pEO0FBQ0FXLGVBQVcsWUFBTTtBQUNmUix3QkFBa0IsbUNBQWxCO0FBQ0FGLGNBQVEsQ0FBRUUsZUFBRixDQUFSO0FBQ0FBLHNCQUFnQlMsSUFBaEIsR0FBdUJDLGFBQXZCLENBQXFDVCxHQUFyQyxFQUEwQ1UsT0FBMUMsQ0FBa0RPLFFBQVFDLE9BQVIsQ0FBZ0JqQixJQUFoQixDQUFsRDtBQUNELEtBSkQ7O0FBTUE7QUFDQVUsT0FBRyxxQkFBSCxFQUEwQjtBQUFBLGFBQ3hCLDJCQUFZLEVBQUViLFlBQVlDLGVBQWQsRUFBWixFQUE2QyxFQUFFQyxRQUFGLEVBQTdDLEVBQXNEWSxNQUF0RCxDQUE2REcsVUFBN0QsQ0FDR0MsS0FESCxDQUNTZixJQURULENBRHdCO0FBQUEsS0FBMUI7QUFHRCxHQVpEO0FBYUQsQ0FqREQ7QUFKQTtBQUpBIiwiZmlsZSI6ImRhdGFGZXRjaGVyLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBleHBlY3QgZnJvbSAnLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCBkYXRhRmV0Y2hlciBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvZGF0YUZldGNoZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkTW9ja09iamVjdCBmcm9tICcuLy4uL21vY2tzL290aGVycy9wbGFpbk9sZE1vY2tPYmplY3QnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuZGVzY3JpYmUoJ0RhdGFGZXRjaGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICBodHRwR2V0dGVyLFxuICAgIGFzeW5jSHR0cEdldHRlcixcbiAgICB1cmwsXG4gICAgZGF0YVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmUoKCkgPT4ge1xuICAgIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vdGltZWxpbmUnXG4gICAgZGF0YSA9ICc8eG1sPjx0YWc+U29tZSBkYXRhPC90YWc+PC94bWw+J1xuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IG1vY2sudmVyaWZ5KCkpKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBkYXRhIHdpdGggc3luYyBodHRwR2V0dGVyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgaHR0cEdldHRlciA9IHBsYWluT2xkTW9ja09iamVjdCgpXG4gICAgICBtb2NrcyA9IFsgaHR0cEdldHRlciBdXG4gICAgICBodHRwR2V0dGVyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHVybCkucmV0dXJucyhkYXRhKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PiBkYXRhRmV0Y2hlcih7IGh0dHBHZXR0ZXIgfSkoeyB1cmwgfSlcbiAgICAgIC5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBnZXQgYmFzZSB1cmwnLCAoKSA9PiBkYXRhRmV0Y2hlcih7IGh0dHBHZXR0ZXIgfSkoeyB1cmwgfSkuc2hvdWxkXG4gICAgICAuZXZlbnR1YWxseS5lcXVhbChkYXRhKSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gZmV0Y2hpbmcgZGF0YSB3aXRoIGFzeW5jIGh0dHBHZXR0ZXInLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBhc3luY0h0dHBHZXR0ZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgICAgbW9ja3MgPSBbIGFzeW5jSHR0cEdldHRlciBdXG4gICAgICBhc3luY0h0dHBHZXR0ZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKS5yZXR1cm5zKFByb21pc2UucmVzb2x2ZShkYXRhKSlcbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBnZXQgYmFzZSB1cmwnLCAoKSA9PlxuICAgICAgZGF0YUZldGNoZXIoeyBodHRwR2V0dGVyOiBhc3luY0h0dHBHZXR0ZXIgfSkoeyB1cmwgfSkuc2hvdWxkLmV2ZW50dWFsbHlcbiAgICAgICAgLmVxdWFsKGRhdGEpKVxuICB9KVxufSlcbiJdfQ==