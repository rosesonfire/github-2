'use strict';

var _setup = require('./../setup');

var _fetchData = require('./../../main/services/fetchData');

var _fetchData2 = _interopRequireDefault(_fetchData);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
(0, _setup.describe)('FetchData', function () {
  var mocks = void 0,
      httpGetter = void 0,
      asyncHttpGetter = void 0,
      url = void 0,
      data = void 0;

  (0, _setup.before)(function () {
    url = 'https://github.com/timeline';
    data = '<xml><tag>Some data</tag></xml>';
  });

  (0, _setup.afterEach)(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  (0, _setup.describe)('When fetching data with sync httpGetter', function () {
    (0, _setup.beforeEach)(function () {
      httpGetter = (0, _plainOldMockObject2.default)();
      mocks = [httpGetter];
      httpGetter.once().withExactArgs(url).returns(data);
    });

    (0, _setup.it)('should return a promise', function () {
      return (0, _fetchData2.default)({ httpGetter: httpGetter })(url).should.be.a('promise');
    });

    (0, _setup.it)('should fetch data', function () {
      return (0, _fetchData2.default)({ httpGetter: httpGetter })(url).should.eventually.equal(data);
    });
  });

  (0, _setup.describe)('When fetching data with async httpGetter', function () {
    (0, _setup.beforeEach)(function () {
      asyncHttpGetter = (0, _plainOldMockObject2.default)();
      mocks = [asyncHttpGetter];
      asyncHttpGetter.once().withExactArgs(url).returns(Promise.resolve(data));
    });

    (0, _setup.it)('should fetch data', function () {
      return (0, _fetchData2.default)({ httpGetter: asyncHttpGetter })(url).should.eventually.equal(data);
    });
  });
});
// mocks
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL2ZldGNoRGF0YS5zcGVjLmpzIl0sIm5hbWVzIjpbIm1vY2tzIiwiaHR0cEdldHRlciIsImFzeW5jSHR0cEdldHRlciIsInVybCIsImRhdGEiLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsInNob3VsZCIsImJlIiwiYSIsImV2ZW50dWFsbHkiLCJlcXVhbCIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOzs7O0FBRUE7Ozs7OztBQUhBO0FBS0EscUJBQVMsV0FBVCxFQUFzQixZQUFNO0FBQzFCLE1BQ0VBLGNBREY7QUFBQSxNQUVFQyxtQkFGRjtBQUFBLE1BR0VDLHdCQUhGO0FBQUEsTUFJRUMsWUFKRjtBQUFBLE1BS0VDLGFBTEY7O0FBT0EscUJBQU8sWUFBTTtBQUNYRCxVQUFNLDZCQUFOO0FBQ0FDLFdBQU8saUNBQVA7QUFDRCxHQUhEOztBQUtBLHdCQUFVO0FBQUEsV0FBTUosTUFBTUssT0FBTixDQUFjO0FBQUEsYUFBUUMsS0FBS0MsTUFBTCxFQUFSO0FBQUEsS0FBZCxDQUFOO0FBQUEsR0FBVjs7QUFFQSx1QkFBUyx5Q0FBVCxFQUFvRCxZQUFNO0FBQ3hELDJCQUFXLFlBQU07QUFDZk4sbUJBQWEsbUNBQWI7QUFDQUQsY0FBUSxDQUFFQyxVQUFGLENBQVI7QUFDQUEsaUJBQVdPLElBQVgsR0FBa0JDLGFBQWxCLENBQWdDTixHQUFoQyxFQUFxQ08sT0FBckMsQ0FBNkNOLElBQTdDO0FBQ0QsS0FKRDs7QUFNQSxtQkFBRyx5QkFBSCxFQUE4QjtBQUFBLGFBQU0seUJBQVUsRUFBRUgsc0JBQUYsRUFBVixFQUEwQkUsR0FBMUIsRUFDakNRLE1BRGlDLENBQzFCQyxFQUQwQixDQUN2QkMsQ0FEdUIsQ0FDckIsU0FEcUIsQ0FBTjtBQUFBLEtBQTlCOztBQUdBLG1CQUFHLG1CQUFILEVBQXdCO0FBQUEsYUFBTSx5QkFBVSxFQUFFWixzQkFBRixFQUFWLEVBQTBCRSxHQUExQixFQUErQlEsTUFBL0IsQ0FDM0JHLFVBRDJCLENBQ2hCQyxLQURnQixDQUNWWCxJQURVLENBQU47QUFBQSxLQUF4QjtBQUVELEdBWkQ7O0FBY0EsdUJBQVMsMENBQVQsRUFBcUQsWUFBTTtBQUN6RCwyQkFBVyxZQUFNO0FBQ2ZGLHdCQUFrQixtQ0FBbEI7QUFDQUYsY0FBUSxDQUFFRSxlQUFGLENBQVI7QUFDQUEsc0JBQWdCTSxJQUFoQixHQUF1QkMsYUFBdkIsQ0FBcUNOLEdBQXJDLEVBQTBDTyxPQUExQyxDQUFrRE0sUUFBUUMsT0FBUixDQUFnQmIsSUFBaEIsQ0FBbEQ7QUFDRCxLQUpEOztBQU1BLG1CQUFHLG1CQUFILEVBQXdCO0FBQUEsYUFDdEIseUJBQVUsRUFBRUgsWUFBWUMsZUFBZCxFQUFWLEVBQTJDQyxHQUEzQyxFQUFnRFEsTUFBaEQsQ0FBdURHLFVBQXZELENBQ0dDLEtBREgsQ0FDU1gsSUFEVCxDQURzQjtBQUFBLEtBQXhCO0FBR0QsR0FWRDtBQVdELENBeENEO0FBSEEiLCJmaWxlIjoiZmV0Y2hEYXRhLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXNjcmliZSwgYmVmb3JlLCBiZWZvcmVFYWNoLCBhZnRlckVhY2gsIGl0IH0gZnJvbSAnLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCBmZXRjaERhdGEgZnJvbSAnLi8uLi8uLi9tYWluL3NlcnZpY2VzL2ZldGNoRGF0YSdcbi8vIG1vY2tzXG5pbXBvcnQgcGxhaW5PbGRNb2NrT2JqZWN0IGZyb20gJy4vLi4vbW9ja3Mvb3RoZXJzL3BsYWluT2xkTW9ja09iamVjdCdcblxuZGVzY3JpYmUoJ0ZldGNoRGF0YScsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgaHR0cEdldHRlcixcbiAgICBhc3luY0h0dHBHZXR0ZXIsXG4gICAgdXJsLFxuICAgIGRhdGFcblxuICBiZWZvcmUoKCkgPT4ge1xuICAgIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vdGltZWxpbmUnXG4gICAgZGF0YSA9ICc8eG1sPjx0YWc+U29tZSBkYXRhPC90YWc+PC94bWw+J1xuICB9KVxuXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgZGVzY3JpYmUoJ1doZW4gZmV0Y2hpbmcgZGF0YSB3aXRoIHN5bmMgaHR0cEdldHRlcicsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGh0dHBHZXR0ZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgICAgbW9ja3MgPSBbIGh0dHBHZXR0ZXIgXVxuICAgICAgaHR0cEdldHRlci5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwpLnJldHVybnMoZGF0YSlcbiAgICB9KVxuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgKCkgPT4gZmV0Y2hEYXRhKHsgaHR0cEdldHRlciB9KSh1cmwpXG4gICAgICAuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgIGl0KCdzaG91bGQgZmV0Y2ggZGF0YScsICgpID0+IGZldGNoRGF0YSh7IGh0dHBHZXR0ZXIgfSkodXJsKS5zaG91bGRcbiAgICAgIC5ldmVudHVhbGx5LmVxdWFsKGRhdGEpKVxuICB9KVxuXG4gIGRlc2NyaWJlKCdXaGVuIGZldGNoaW5nIGRhdGEgd2l0aCBhc3luYyBodHRwR2V0dGVyJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgYXN5bmNIdHRwR2V0dGVyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICAgIG1vY2tzID0gWyBhc3luY0h0dHBHZXR0ZXIgXVxuICAgICAgYXN5bmNIdHRwR2V0dGVyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHVybCkucmV0dXJucyhQcm9taXNlLnJlc29sdmUoZGF0YSkpXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgZmV0Y2ggZGF0YScsICgpID0+XG4gICAgICBmZXRjaERhdGEoeyBodHRwR2V0dGVyOiBhc3luY0h0dHBHZXR0ZXIgfSkodXJsKS5zaG91bGQuZXZlbnR1YWxseVxuICAgICAgICAuZXF1YWwoZGF0YSkpXG4gIH0pXG59KVxuIl19