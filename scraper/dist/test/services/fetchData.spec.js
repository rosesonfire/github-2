'use strict';

var _setup = require('./../setup');

var _setup2 = _interopRequireDefault(_setup);

var _fetchData = require('./../../main/services/fetchData');

var _fetchData2 = _interopRequireDefault(_fetchData);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-undef

// unit
describe('FetchData', function () {
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
      return (0, _fetchData2.default)({ httpGetter: httpGetter })({ url: url }).should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should get base url', function () {
      return (0, _fetchData2.default)({ httpGetter: httpGetter })({ url: url }).should.eventually.equal(data);
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
      return (0, _fetchData2.default)({ httpGetter: asyncHttpGetter })({ url: url }).should.eventually.equal(data);
    });
  });
});
// mocks
// eslint-disable-next-line no-unused-vars
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL2ZldGNoRGF0YS5zcGVjLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwibW9ja3MiLCJodHRwR2V0dGVyIiwiYXN5bmNIdHRwR2V0dGVyIiwidXJsIiwiZGF0YSIsImJlZm9yZSIsImFmdGVyRWFjaCIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwiYmVmb3JlRWFjaCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsIml0Iiwic2hvdWxkIiwiYmUiLCJhIiwiZXZlbnR1YWxseSIsImVxdWFsIiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7QUFFQTs7QUFMQTtBQU1BQSxTQUFTLFdBQVQsRUFBc0IsWUFBTTtBQUMxQixNQUNFQyxjQURGO0FBQUEsTUFFRUMsbUJBRkY7QUFBQSxNQUdFQyx3QkFIRjtBQUFBLE1BSUVDLFlBSkY7QUFBQSxNQUtFQyxhQUxGOztBQU9BO0FBQ0FDLFNBQU8sWUFBTTtBQUNYRixVQUFNLDZCQUFOO0FBQ0FDLFdBQU8saUNBQVA7QUFDRCxHQUhEOztBQUtBO0FBQ0FFLFlBQVU7QUFBQSxXQUFNTixNQUFNTyxPQUFOLENBQWM7QUFBQSxhQUFRQyxLQUFLQyxNQUFMLEVBQVI7QUFBQSxLQUFkLENBQU47QUFBQSxHQUFWOztBQUVBO0FBQ0FWLFdBQVMseUNBQVQsRUFBb0QsWUFBTTtBQUN4RDtBQUNBVyxlQUFXLFlBQU07QUFDZlQsbUJBQWEsbUNBQWI7QUFDQUQsY0FBUSxDQUFFQyxVQUFGLENBQVI7QUFDQUEsaUJBQVdVLElBQVgsR0FBa0JDLGFBQWxCLENBQWdDVCxHQUFoQyxFQUFxQ1UsT0FBckMsQ0FBNkNULElBQTdDO0FBQ0QsS0FKRDs7QUFNQTtBQUNBVSxPQUFHLHlCQUFILEVBQThCO0FBQUEsYUFBTSx5QkFBVSxFQUFFYixzQkFBRixFQUFWLEVBQTBCLEVBQUVFLFFBQUYsRUFBMUIsRUFDakNZLE1BRGlDLENBQzFCQyxFQUQwQixDQUN2QkMsQ0FEdUIsQ0FDckIsU0FEcUIsQ0FBTjtBQUFBLEtBQTlCOztBQUdBO0FBQ0FILE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUFNLHlCQUFVLEVBQUViLHNCQUFGLEVBQVYsRUFBMEIsRUFBRUUsUUFBRixFQUExQixFQUFtQ1ksTUFBbkMsQ0FDN0JHLFVBRDZCLENBQ2xCQyxLQURrQixDQUNaZixJQURZLENBQU47QUFBQSxLQUExQjtBQUVELEdBZkQ7O0FBaUJBO0FBQ0FMLFdBQVMsMENBQVQsRUFBcUQsWUFBTTtBQUN6RDtBQUNBVyxlQUFXLFlBQU07QUFDZlIsd0JBQWtCLG1DQUFsQjtBQUNBRixjQUFRLENBQUVFLGVBQUYsQ0FBUjtBQUNBQSxzQkFBZ0JTLElBQWhCLEdBQXVCQyxhQUF2QixDQUFxQ1QsR0FBckMsRUFBMENVLE9BQTFDLENBQWtETyxRQUFRQyxPQUFSLENBQWdCakIsSUFBaEIsQ0FBbEQ7QUFDRCxLQUpEOztBQU1BO0FBQ0FVLE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUN4Qix5QkFBVSxFQUFFYixZQUFZQyxlQUFkLEVBQVYsRUFBMkMsRUFBRUMsUUFBRixFQUEzQyxFQUFvRFksTUFBcEQsQ0FBMkRHLFVBQTNELENBQ0dDLEtBREgsQ0FDU2YsSUFEVCxDQUR3QjtBQUFBLEtBQTFCO0FBR0QsR0FaRDtBQWFELENBakREO0FBSkE7QUFKQSIsImZpbGUiOiJmZXRjaERhdGEuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGV4cGVjdCBmcm9tICcuLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvZmV0Y2hEYXRhJ1xuLy8gbW9ja3NcbmltcG9ydCBwbGFpbk9sZE1vY2tPYmplY3QgZnJvbSAnLi8uLi9tb2Nrcy9vdGhlcnMvcGxhaW5PbGRNb2NrT2JqZWN0J1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdGZXRjaERhdGEnLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIGh0dHBHZXR0ZXIsXG4gICAgYXN5bmNIdHRwR2V0dGVyLFxuICAgIHVybCxcbiAgICBkYXRhXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lbGluZSdcbiAgICBkYXRhID0gJzx4bWw+PHRhZz5Tb21lIGRhdGE8L3RhZz48L3htbD4nXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGZldGNoaW5nIGRhdGEgd2l0aCBzeW5jIGh0dHBHZXR0ZXInLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBodHRwR2V0dGVyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICAgIG1vY2tzID0gWyBodHRwR2V0dGVyIF1cbiAgICAgIGh0dHBHZXR0ZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKS5yZXR1cm5zKGRhdGEpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+IGZldGNoRGF0YSh7IGh0dHBHZXR0ZXIgfSkoeyB1cmwgfSlcbiAgICAgIC5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBnZXQgYmFzZSB1cmwnLCAoKSA9PiBmZXRjaERhdGEoeyBodHRwR2V0dGVyIH0pKHsgdXJsIH0pLnNob3VsZFxuICAgICAgLmV2ZW50dWFsbHkuZXF1YWwoZGF0YSkpXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGZldGNoaW5nIGRhdGEgd2l0aCBhc3luYyBodHRwR2V0dGVyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgYXN5bmNIdHRwR2V0dGVyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICAgIG1vY2tzID0gWyBhc3luY0h0dHBHZXR0ZXIgXVxuICAgICAgYXN5bmNIdHRwR2V0dGVyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHVybCkucmV0dXJucyhQcm9taXNlLnJlc29sdmUoZGF0YSkpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgZ2V0IGJhc2UgdXJsJywgKCkgPT5cbiAgICAgIGZldGNoRGF0YSh7IGh0dHBHZXR0ZXI6IGFzeW5jSHR0cEdldHRlciB9KSh7IHVybCB9KS5zaG91bGQuZXZlbnR1YWxseVxuICAgICAgICAuZXF1YWwoZGF0YSkpXG4gIH0pXG59KVxuIl19