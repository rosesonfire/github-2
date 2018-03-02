'use strict';

var _setup = require('./../setup');

var _setup2 = _interopRequireDefault(_setup);

var _dataFetcher = require('./../../main/lib/dataFetcher');

var _dataFetcher2 = _interopRequireDefault(_dataFetcher);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
var httpGetter = (0, _plainOldMockObject2.default)();
// mocks
// eslint-disable-next-line no-unused-vars

var asyncHttpGetter = (0, _plainOldMockObject2.default)();

// eslint-disable-next-line no-undef
describe('DataFetcher', function () {
  var mocks = void 0,
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
      mock.verify();
      mock.reset();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When fetching data with sync httpGetter', function () {
    // eslint-disable-next-line no-undef
    before(function () {
      mocks = [httpGetter];
    });

    // eslint-disable-next-line no-undef
    beforeEach(function () {
      return httpGetter.once().withExactArgs(url).returns(data);
    });

    // eslint-disable-next-line no-undef
    it('should return a promise', function () {
      return (0, _dataFetcher2.default)({ httpGetter: httpGetter })({ url: url }).should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should get base url', async function () {
      return (await (0, _dataFetcher2.default)({ httpGetter: httpGetter })({ url: url })).should.equal(data);
    });
  });

  // eslint-disable-next-line no-undef
  describe('When fetching data with async httpGetter', function () {
    // eslint-disable-next-line no-undef
    before(function () {
      mocks = [asyncHttpGetter];
    });

    // eslint-disable-next-line no-undef
    beforeEach(function () {
      return asyncHttpGetter.once().withExactArgs(url).returns(Promise.resolve(data));
    });

    // eslint-disable-next-line no-undef
    it('should get base url', async function () {
      return (await (0, _dataFetcher2.default)({ httpGetter: asyncHttpGetter })({ url: url })).should.equal(data);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9kYXRhRmV0Y2hlci5zcGVjLmpzIl0sIm5hbWVzIjpbImh0dHBHZXR0ZXIiLCJhc3luY0h0dHBHZXR0ZXIiLCJkZXNjcmliZSIsIm1vY2tzIiwidXJsIiwiZGF0YSIsImJlZm9yZSIsImFmdGVyRWFjaCIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwicmVzZXQiLCJiZWZvcmVFYWNoIiwib25jZSIsIndpdGhFeGFjdEFyZ3MiLCJyZXR1cm5zIiwiaXQiLCJzaG91bGQiLCJiZSIsImEiLCJlcXVhbCIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7O0FBSEE7QUFJQSxJQUFNQSxhQUFhLG1DQUFuQjtBQUZBO0FBSkE7O0FBT0EsSUFBTUMsa0JBQWtCLG1DQUF4Qjs7QUFFQTtBQUNBQyxTQUFTLGFBQVQsRUFBd0IsWUFBTTtBQUM1QixNQUNFQyxjQURGO0FBQUEsTUFFRUMsWUFGRjtBQUFBLE1BR0VDLGFBSEY7O0FBS0E7QUFDQUMsU0FBTyxZQUFNO0FBQ1hGLFVBQU0sNkJBQU47QUFDQUMsV0FBTyxpQ0FBUDtBQUNELEdBSEQ7O0FBS0E7QUFDQUUsWUFBVTtBQUFBLFdBQU1KLE1BQU1LLE9BQU4sQ0FBYyxnQkFBUTtBQUNwQ0MsV0FBS0MsTUFBTDtBQUNBRCxXQUFLRSxLQUFMO0FBQ0QsS0FIZSxDQUFOO0FBQUEsR0FBVjs7QUFLQTtBQUNBVCxXQUFTLHlDQUFULEVBQW9ELFlBQU07QUFDeEQ7QUFDQUksV0FBTyxZQUFNO0FBQ1hILGNBQVEsQ0FBRUgsVUFBRixDQUFSO0FBQ0QsS0FGRDs7QUFJQTtBQUNBWSxlQUFXO0FBQUEsYUFBTVosV0FBV2EsSUFBWCxHQUFrQkMsYUFBbEIsQ0FBZ0NWLEdBQWhDLEVBQXFDVyxPQUFyQyxDQUE2Q1YsSUFBN0MsQ0FBTjtBQUFBLEtBQVg7O0FBRUE7QUFDQVcsT0FBRyx5QkFBSCxFQUE4QjtBQUFBLGFBQU0sMkJBQVksRUFBRWhCLHNCQUFGLEVBQVosRUFBNEIsRUFBRUksUUFBRixFQUE1QixFQUNqQ2EsTUFEaUMsQ0FDMUJDLEVBRDBCLENBQ3ZCQyxDQUR1QixDQUNyQixTQURxQixDQUFOO0FBQUEsS0FBOUI7O0FBR0E7QUFDQUgsT0FBRyxxQkFBSCxFQUEwQjtBQUFBLGFBQ3hCLENBQUMsTUFBTSwyQkFBWSxFQUFFaEIsc0JBQUYsRUFBWixFQUE0QixFQUFFSSxRQUFGLEVBQTVCLENBQVAsRUFBNkNhLE1BQTdDLENBQW9ERyxLQUFwRCxDQUEwRGYsSUFBMUQsQ0FEd0I7QUFBQSxLQUExQjtBQUVELEdBaEJEOztBQWtCQTtBQUNBSCxXQUFTLDBDQUFULEVBQXFELFlBQU07QUFDekQ7QUFDQUksV0FBTyxZQUFNO0FBQ1hILGNBQVEsQ0FBRUYsZUFBRixDQUFSO0FBQ0QsS0FGRDs7QUFJQTtBQUNBVyxlQUFXO0FBQUEsYUFBTVgsZ0JBQWdCWSxJQUFoQixHQUF1QkMsYUFBdkIsQ0FBcUNWLEdBQXJDLEVBQ2RXLE9BRGMsQ0FDTk0sUUFBUUMsT0FBUixDQUFnQmpCLElBQWhCLENBRE0sQ0FBTjtBQUFBLEtBQVg7O0FBR0E7QUFDQVcsT0FBRyxxQkFBSCxFQUEwQjtBQUFBLGFBQ3hCLENBQUMsTUFBTSwyQkFBWSxFQUFFaEIsWUFBWUMsZUFBZCxFQUFaLEVBQTZDLEVBQUVHLFFBQUYsRUFBN0MsQ0FBUCxFQUE4RGEsTUFBOUQsQ0FDR0csS0FESCxDQUNTZixJQURULENBRHdCO0FBQUEsS0FBMUI7QUFHRCxHQWREO0FBZUQsQ0FyREQiLCJmaWxlIjoiZGF0YUZldGNoZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGV4cGVjdCBmcm9tICcuLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IGRhdGFGZXRjaGVyIGZyb20gJy4vLi4vLi4vbWFpbi9saWIvZGF0YUZldGNoZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkTW9ja09iamVjdCBmcm9tICcuLy4uL21vY2tzL290aGVycy9wbGFpbk9sZE1vY2tPYmplY3QnXG5jb25zdCBodHRwR2V0dGVyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbmNvbnN0IGFzeW5jSHR0cEdldHRlciA9IHBsYWluT2xkTW9ja09iamVjdCgpXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuZGVzY3JpYmUoJ0RhdGFGZXRjaGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICB1cmwsXG4gICAgZGF0YVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmUoKCkgPT4ge1xuICAgIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vdGltZWxpbmUnXG4gICAgZGF0YSA9ICc8eG1sPjx0YWc+U29tZSBkYXRhPC90YWc+PC94bWw+J1xuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IHtcbiAgICBtb2NrLnZlcmlmeSgpXG4gICAgbW9jay5yZXNldCgpXG4gIH0pKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBkYXRhIHdpdGggc3luYyBodHRwR2V0dGVyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBtb2NrcyA9IFsgaHR0cEdldHRlciBdXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4gaHR0cEdldHRlci5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwpLnJldHVybnMoZGF0YSkpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PiBkYXRhRmV0Y2hlcih7IGh0dHBHZXR0ZXIgfSkoeyB1cmwgfSlcbiAgICAgIC5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBnZXQgYmFzZSB1cmwnLCBhc3luYyAoKSA9PlxuICAgICAgKGF3YWl0IGRhdGFGZXRjaGVyKHsgaHR0cEdldHRlciB9KSh7IHVybCB9KSkuc2hvdWxkLmVxdWFsKGRhdGEpKVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBkYXRhIHdpdGggYXN5bmMgaHR0cEdldHRlcicsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmUoKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbIGFzeW5jSHR0cEdldHRlciBdXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4gYXN5bmNIdHRwR2V0dGVyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHVybClcbiAgICAgIC5yZXR1cm5zKFByb21pc2UucmVzb2x2ZShkYXRhKSkpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGdldCBiYXNlIHVybCcsIGFzeW5jICgpID0+XG4gICAgICAoYXdhaXQgZGF0YUZldGNoZXIoeyBodHRwR2V0dGVyOiBhc3luY0h0dHBHZXR0ZXIgfSkoeyB1cmwgfSkpLnNob3VsZFxuICAgICAgICAuZXF1YWwoZGF0YSkpXG4gIH0pXG59KVxuIl19