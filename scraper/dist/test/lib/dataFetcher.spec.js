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
    it('should get base url', function () {
      return (0, _dataFetcher2.default)({ httpGetter: httpGetter })({ url: url }).should.eventually.equal(data);
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
    it('should get base url', function () {
      return (0, _dataFetcher2.default)({ httpGetter: asyncHttpGetter })({ url: url }).should.eventually.equal(data);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9kYXRhRmV0Y2hlci5zcGVjLmpzIl0sIm5hbWVzIjpbImh0dHBHZXR0ZXIiLCJhc3luY0h0dHBHZXR0ZXIiLCJkZXNjcmliZSIsIm1vY2tzIiwidXJsIiwiZGF0YSIsImJlZm9yZSIsImFmdGVyRWFjaCIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwicmVzZXQiLCJiZWZvcmVFYWNoIiwib25jZSIsIndpdGhFeGFjdEFyZ3MiLCJyZXR1cm5zIiwiaXQiLCJzaG91bGQiLCJiZSIsImEiLCJldmVudHVhbGx5IiwiZXF1YWwiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7OztBQUhBO0FBSUEsSUFBTUEsYUFBYSxtQ0FBbkI7QUFGQTtBQUpBOztBQU9BLElBQU1DLGtCQUFrQixtQ0FBeEI7O0FBRUE7QUFDQUMsU0FBUyxhQUFULEVBQXdCLFlBQU07QUFDNUIsTUFDRUMsY0FERjtBQUFBLE1BRUVDLFlBRkY7QUFBQSxNQUdFQyxhQUhGOztBQUtBO0FBQ0FDLFNBQU8sWUFBTTtBQUNYRixVQUFNLDZCQUFOO0FBQ0FDLFdBQU8saUNBQVA7QUFDRCxHQUhEOztBQUtBO0FBQ0FFLFlBQVU7QUFBQSxXQUFNSixNQUFNSyxPQUFOLENBQWMsZ0JBQVE7QUFDcENDLFdBQUtDLE1BQUw7QUFDQUQsV0FBS0UsS0FBTDtBQUNELEtBSGUsQ0FBTjtBQUFBLEdBQVY7O0FBS0E7QUFDQVQsV0FBUyx5Q0FBVCxFQUFvRCxZQUFNO0FBQ3hEO0FBQ0FJLFdBQU8sWUFBTTtBQUNYSCxjQUFRLENBQUVILFVBQUYsQ0FBUjtBQUNELEtBRkQ7O0FBSUE7QUFDQVksZUFBVztBQUFBLGFBQU1aLFdBQVdhLElBQVgsR0FBa0JDLGFBQWxCLENBQWdDVixHQUFoQyxFQUFxQ1csT0FBckMsQ0FBNkNWLElBQTdDLENBQU47QUFBQSxLQUFYOztBQUVBO0FBQ0FXLE9BQUcseUJBQUgsRUFBOEI7QUFBQSxhQUFNLDJCQUFZLEVBQUVoQixzQkFBRixFQUFaLEVBQTRCLEVBQUVJLFFBQUYsRUFBNUIsRUFDakNhLE1BRGlDLENBQzFCQyxFQUQwQixDQUN2QkMsQ0FEdUIsQ0FDckIsU0FEcUIsQ0FBTjtBQUFBLEtBQTlCOztBQUdBO0FBQ0FILE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUFNLDJCQUFZLEVBQUVoQixzQkFBRixFQUFaLEVBQTRCLEVBQUVJLFFBQUYsRUFBNUIsRUFBcUNhLE1BQXJDLENBQzdCRyxVQUQ2QixDQUNsQkMsS0FEa0IsQ0FDWmhCLElBRFksQ0FBTjtBQUFBLEtBQTFCO0FBRUQsR0FoQkQ7O0FBa0JBO0FBQ0FILFdBQVMsMENBQVQsRUFBcUQsWUFBTTtBQUN6RDtBQUNBSSxXQUFPLFlBQU07QUFDWEgsY0FBUSxDQUFFRixlQUFGLENBQVI7QUFDRCxLQUZEOztBQUlBO0FBQ0FXLGVBQVc7QUFBQSxhQUFNWCxnQkFBZ0JZLElBQWhCLEdBQXVCQyxhQUF2QixDQUFxQ1YsR0FBckMsRUFDZFcsT0FEYyxDQUNOTyxRQUFRQyxPQUFSLENBQWdCbEIsSUFBaEIsQ0FETSxDQUFOO0FBQUEsS0FBWDs7QUFHQTtBQUNBVyxPQUFHLHFCQUFILEVBQTBCO0FBQUEsYUFDeEIsMkJBQVksRUFBRWhCLFlBQVlDLGVBQWQsRUFBWixFQUE2QyxFQUFFRyxRQUFGLEVBQTdDLEVBQXNEYSxNQUF0RCxDQUE2REcsVUFBN0QsQ0FDR0MsS0FESCxDQUNTaEIsSUFEVCxDQUR3QjtBQUFBLEtBQTFCO0FBR0QsR0FkRDtBQWVELENBckREIiwiZmlsZSI6ImRhdGFGZXRjaGVyLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBleHBlY3QgZnJvbSAnLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCBkYXRhRmV0Y2hlciBmcm9tICcuLy4uLy4uL21haW4vbGliL2RhdGFGZXRjaGVyJ1xuLy8gbW9ja3NcbmltcG9ydCBwbGFpbk9sZE1vY2tPYmplY3QgZnJvbSAnLi8uLi9tb2Nrcy9vdGhlcnMvcGxhaW5PbGRNb2NrT2JqZWN0J1xuY29uc3QgaHR0cEdldHRlciA9IHBsYWluT2xkTW9ja09iamVjdCgpXG5jb25zdCBhc3luY0h0dHBHZXR0ZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdEYXRhRmV0Y2hlcicsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgdXJsLFxuICAgIGRhdGFcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICB1cmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWVsaW5lJ1xuICAgIGRhdGEgPSAnPHhtbD48dGFnPlNvbWUgZGF0YTwvdGFnPjwveG1sPidcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiB7XG4gICAgbW9jay52ZXJpZnkoKVxuICAgIG1vY2sucmVzZXQoKVxuICB9KSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gZmV0Y2hpbmcgZGF0YSB3aXRoIHN5bmMgaHR0cEdldHRlcicsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmUoKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbIGh0dHBHZXR0ZXIgXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IGh0dHBHZXR0ZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKS5yZXR1cm5zKGRhdGEpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgKCkgPT4gZGF0YUZldGNoZXIoeyBodHRwR2V0dGVyIH0pKHsgdXJsIH0pXG4gICAgICAuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgZ2V0IGJhc2UgdXJsJywgKCkgPT4gZGF0YUZldGNoZXIoeyBodHRwR2V0dGVyIH0pKHsgdXJsIH0pLnNob3VsZFxuICAgICAgLmV2ZW50dWFsbHkuZXF1YWwoZGF0YSkpXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGZldGNoaW5nIGRhdGEgd2l0aCBhc3luYyBodHRwR2V0dGVyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBtb2NrcyA9IFsgYXN5bmNIdHRwR2V0dGVyIF1cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiBhc3luY0h0dHBHZXR0ZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKVxuICAgICAgLnJldHVybnMoUHJvbWlzZS5yZXNvbHZlKGRhdGEpKSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgZ2V0IGJhc2UgdXJsJywgKCkgPT5cbiAgICAgIGRhdGFGZXRjaGVyKHsgaHR0cEdldHRlcjogYXN5bmNIdHRwR2V0dGVyIH0pKHsgdXJsIH0pLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgIC5lcXVhbChkYXRhKSlcbiAgfSlcbn0pXG4iXX0=