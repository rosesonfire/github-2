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
      axiosWrapper = void 0,
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
      axiosWrapper = (0, _axiosWrapper2.default)();
      mocks = [axiosWrapper.get];
      axiosWrapper.get.once().withExactArgs(url).returns(Promise.resolve(data));
    });

    (0, _setup.it)('should fetch data', function () {
      return (0, _fetchData2.default)({ http: axiosWrapper })(url).should.eventually.equal(data);
    });
  });
});
// mocks
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL2ZldGNoRGF0YS5zcGVjLmpzIl0sIm5hbWVzIjpbIm1vY2tzIiwiYXhpb3NXcmFwcGVyIiwidXJsIiwiZGF0YSIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwiZ2V0Iiwib25jZSIsIndpdGhFeGFjdEFyZ3MiLCJyZXR1cm5zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJodHRwIiwic2hvdWxkIiwiZXZlbnR1YWxseSIsImVxdWFsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOzs7O0FBRUE7Ozs7OztBQUhBO0FBS0EscUJBQVMsV0FBVCxFQUFzQixZQUFNO0FBQzFCLE1BQ0VBLGNBREY7QUFBQSxNQUVFQyxxQkFGRjtBQUFBLE1BR0VDLFlBSEY7QUFBQSxNQUlFQyxhQUpGOztBQU1BLHFCQUFPLFlBQU07QUFDWEQsVUFBTSw2QkFBTjtBQUNBQyxXQUFPLGlDQUFQO0FBQ0QsR0FIRDs7QUFLQSx3QkFBVTtBQUFBLFdBQU1ILE1BQU1JLE9BQU4sQ0FBYztBQUFBLGFBQVFDLEtBQUtDLE1BQUwsRUFBUjtBQUFBLEtBQWQsQ0FBTjtBQUFBLEdBQVY7O0FBRUEsdUJBQVMsb0JBQVQsRUFBK0IsWUFBTTtBQUNuQywyQkFBVyxZQUFNO0FBQ2ZMLHFCQUFlLDZCQUFmO0FBQ0FELGNBQVEsQ0FBRUMsYUFBYU0sR0FBZixDQUFSO0FBQ0FOLG1CQUFhTSxHQUFiLENBQWlCQyxJQUFqQixHQUF3QkMsYUFBeEIsQ0FBc0NQLEdBQXRDLEVBQTJDUSxPQUEzQyxDQUFtREMsUUFBUUMsT0FBUixDQUFnQlQsSUFBaEIsQ0FBbkQ7QUFDRCxLQUpEOztBQU1BLG1CQUFHLG1CQUFILEVBQXdCO0FBQUEsYUFDdEIseUJBQVUsRUFBRVUsTUFBTVosWUFBUixFQUFWLEVBQWtDQyxHQUFsQyxFQUF1Q1ksTUFBdkMsQ0FBOENDLFVBQTlDLENBQXlEQyxLQUF6RCxDQUErRGIsSUFBL0QsQ0FEc0I7QUFBQSxLQUF4QjtBQUVELEdBVEQ7QUFVRCxDQXhCRDtBQUhBIiwiZmlsZSI6ImZldGNoRGF0YS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzY3JpYmUsIGJlZm9yZSwgYmVmb3JlRWFjaCwgYWZ0ZXJFYWNoLCBpdCB9IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vLi4vLi4vbWFpbi9zZXJ2aWNlcy9mZXRjaERhdGEnXG4vLyBtb2Nrc1xuaW1wb3J0IGF4aW9zV3JhcHBlck1vY2sgZnJvbSAnLi8uLi9tb2Nrcy9saWIvd3JhcHBlcnMvYXhpb3NXcmFwcGVyJ1xuXG5kZXNjcmliZSgnRmV0Y2hEYXRhJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICBheGlvc1dyYXBwZXIsXG4gICAgdXJsLFxuICAgIGRhdGFcblxuICBiZWZvcmUoKCkgPT4ge1xuICAgIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vdGltZWxpbmUnXG4gICAgZGF0YSA9ICc8eG1sPjx0YWc+U29tZSBkYXRhPC90YWc+PC94bWw+J1xuICB9KVxuXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgZGVzY3JpYmUoJ1doZW4gZmV0Y2hpbmcgZGF0YScsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGF4aW9zV3JhcHBlciA9IGF4aW9zV3JhcHBlck1vY2soKVxuICAgICAgbW9ja3MgPSBbIGF4aW9zV3JhcHBlci5nZXQgXVxuICAgICAgYXhpb3NXcmFwcGVyLmdldC5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwpLnJldHVybnMoUHJvbWlzZS5yZXNvbHZlKGRhdGEpKVxuICAgIH0pXG5cbiAgICBpdCgnc2hvdWxkIGZldGNoIGRhdGEnLCAoKSA9PlxuICAgICAgZmV0Y2hEYXRhKHsgaHR0cDogYXhpb3NXcmFwcGVyIH0pKHVybCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoZGF0YSkpXG4gIH0pXG59KVxuIl19