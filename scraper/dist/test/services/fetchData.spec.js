'use strict';

var _setup = require('./../setup');

var _fetchData = require('./../../main/services/fetchData');

var _fetchData2 = _interopRequireDefault(_fetchData);

var _axiosWrapper = require('./../mocks/lib/wrappers/axiosWrapper');

var _axiosWrapper2 = _interopRequireDefault(_axiosWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
(0, _setup.describe)('FetchData', function () {
  var mocks = void 0,
      axios = void 0,
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

  (0, _setup.describe)('When fetching data', function () {
    (0, _setup.beforeEach)(function () {
      axios = (0, _axiosWrapper2.default)();
      mocks = [axios.get];
      axios.get.once().withExactArgs(url).returns(Promise.resolve(data));
    });

    (0, _setup.it)('should return a promise', function () {
      return (0, _fetchData2.default)({ http: axios })(url).should.be.a('promise');
    });

    (0, _setup.it)('should fetch data', function () {
      return (0, _fetchData2.default)({ http: axios })(url).should.eventually.equal(data);
    });
  });
});
// mocks
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL2ZldGNoRGF0YS5zcGVjLmpzIl0sIm5hbWVzIjpbIm1vY2tzIiwiYXhpb3MiLCJ1cmwiLCJkYXRhIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJnZXQiLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJldHVybnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImh0dHAiLCJzaG91bGQiLCJiZSIsImEiLCJldmVudHVhbGx5IiwiZXF1YWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7Ozs7QUFFQTs7Ozs7O0FBSEE7QUFLQSxxQkFBUyxXQUFULEVBQXNCLFlBQU07QUFDMUIsTUFDRUEsY0FERjtBQUFBLE1BRUVDLGNBRkY7QUFBQSxNQUdFQyxZQUhGO0FBQUEsTUFJRUMsYUFKRjs7QUFNQSxxQkFBTyxZQUFNO0FBQ1hELFVBQU0sNkJBQU47QUFDQUMsV0FBTyxpQ0FBUDtBQUNELEdBSEQ7O0FBS0Esd0JBQVU7QUFBQSxXQUFNSCxNQUFNSSxPQUFOLENBQWM7QUFBQSxhQUFRQyxLQUFLQyxNQUFMLEVBQVI7QUFBQSxLQUFkLENBQU47QUFBQSxHQUFWOztBQUVBLHVCQUFTLG9CQUFULEVBQStCLFlBQU07QUFDbkMsMkJBQVcsWUFBTTtBQUNmTCxjQUFRLDZCQUFSO0FBQ0FELGNBQVEsQ0FBRUMsTUFBTU0sR0FBUixDQUFSO0FBQ0FOLFlBQU1NLEdBQU4sQ0FBVUMsSUFBVixHQUFpQkMsYUFBakIsQ0FBK0JQLEdBQS9CLEVBQW9DUSxPQUFwQyxDQUE0Q0MsUUFBUUMsT0FBUixDQUFnQlQsSUFBaEIsQ0FBNUM7QUFDRCxLQUpEOztBQU1BLG1CQUFHLHlCQUFILEVBQThCO0FBQUEsYUFDNUIseUJBQVUsRUFBRVUsTUFBTVosS0FBUixFQUFWLEVBQTJCQyxHQUEzQixFQUFnQ1ksTUFBaEMsQ0FBdUNDLEVBQXZDLENBQTBDQyxDQUExQyxDQUE0QyxTQUE1QyxDQUQ0QjtBQUFBLEtBQTlCOztBQUdBLG1CQUFHLG1CQUFILEVBQXdCO0FBQUEsYUFDdEIseUJBQVUsRUFBRUgsTUFBTVosS0FBUixFQUFWLEVBQTJCQyxHQUEzQixFQUFnQ1ksTUFBaEMsQ0FBdUNHLFVBQXZDLENBQWtEQyxLQUFsRCxDQUF3RGYsSUFBeEQsQ0FEc0I7QUFBQSxLQUF4QjtBQUVELEdBWkQ7QUFhRCxDQTNCRDtBQUhBIiwiZmlsZSI6ImZldGNoRGF0YS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzY3JpYmUsIGJlZm9yZSwgYmVmb3JlRWFjaCwgYWZ0ZXJFYWNoLCBpdCB9IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vLi4vLi4vbWFpbi9zZXJ2aWNlcy9mZXRjaERhdGEnXG4vLyBtb2Nrc1xuaW1wb3J0IGF4aW9zV3JhcHBlck1vY2sgZnJvbSAnLi8uLi9tb2Nrcy9saWIvd3JhcHBlcnMvYXhpb3NXcmFwcGVyJ1xuXG5kZXNjcmliZSgnRmV0Y2hEYXRhJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICBheGlvcyxcbiAgICB1cmwsXG4gICAgZGF0YVxuXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lbGluZSdcbiAgICBkYXRhID0gJzx4bWw+PHRhZz5Tb21lIGRhdGE8L3RhZz48L3htbD4nXG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBkYXRhJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgYXhpb3MgPSBheGlvc1dyYXBwZXJNb2NrKClcbiAgICAgIG1vY2tzID0gWyBheGlvcy5nZXQgXVxuICAgICAgYXhpb3MuZ2V0Lm9uY2UoKS53aXRoRXhhY3RBcmdzKHVybCkucmV0dXJucyhQcm9taXNlLnJlc29sdmUoZGF0YSkpXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICBmZXRjaERhdGEoeyBodHRwOiBheGlvcyB9KSh1cmwpLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICBpdCgnc2hvdWxkIGZldGNoIGRhdGEnLCAoKSA9PlxuICAgICAgZmV0Y2hEYXRhKHsgaHR0cDogYXhpb3MgfSkodXJsKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbChkYXRhKSlcbiAgfSlcbn0pXG4iXX0=