'use strict';

var _setup = require('./../setup');

var _dataController = require('./../../main/controllers/dataController');

var _dataController2 = _interopRequireDefault(_dataController);

var _dataService = require('./../mocks/services/dataService');

var _dataService2 = _interopRequireDefault(_dataService);

var _expressWrapper = require('./../mocks/lib/wrappers/expressWrapper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mocks
(0, _setup.describe)('DataController', function () {
  var mocks = void 0,
      dataService = void 0,
      req = void 0,
      res = void 0,
      positiveResponse = void 0;

  (0, _setup.before)(function () {
    req = {
      body: {
        data: '{ "jsonData": "some data"}'
      }
    };
    positiveResponse = Promise.resolve('OK');
  });

  (0, _setup.beforeEach)(function () {
    res = (0, _expressWrapper.resMock)();
    dataService = (0, _dataService2.default)();
    dataService.writeData.once().withExactArgs(req.body.data).returns(positiveResponse);
    res.setBufferedResponse.once().withExactArgs(positiveResponse);
    mocks = [dataService.writeData, res.setBufferedResponse];
  });

  (0, _setup.afterEach)(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  (0, _setup.describe)('When writing data', function () {
    (0, _setup.it)('should write data successfully', function () {
      return (0, _dataController2.default)({ dataService: dataService }).writeData(req, res);
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2NvbnRyb2xsZXJzL2RhdGFDb250cm9sbGVyLnNwZWMuanMiXSwibmFtZXMiOlsibW9ja3MiLCJkYXRhU2VydmljZSIsInJlcSIsInJlcyIsInBvc2l0aXZlUmVzcG9uc2UiLCJib2R5IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwid3JpdGVEYXRhIiwib25jZSIsIndpdGhFeGFjdEFyZ3MiLCJyZXR1cm5zIiwic2V0QnVmZmVyZWRSZXNwb25zZSIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUZBO0FBSUEscUJBQVMsZ0JBQVQsRUFBMkIsWUFBTTtBQUMvQixNQUNFQSxjQURGO0FBQUEsTUFFRUMsb0JBRkY7QUFBQSxNQUdFQyxZQUhGO0FBQUEsTUFJRUMsWUFKRjtBQUFBLE1BS0VDLHlCQUxGOztBQU9BLHFCQUFPLFlBQU07QUFDWEYsVUFBTTtBQUNKRyxZQUFNO0FBQ0pDLGNBQU07QUFERjtBQURGLEtBQU47QUFLQUYsdUJBQW1CRyxRQUFRQyxPQUFSLENBQWdCLElBQWhCLENBQW5CO0FBQ0QsR0FQRDs7QUFTQSx5QkFBVyxZQUFNO0FBQ2ZMLFVBQU0sOEJBQU47QUFDQUYsa0JBQWMsNEJBQWQ7QUFDQUEsZ0JBQVlRLFNBQVosQ0FBc0JDLElBQXRCLEdBQTZCQyxhQUE3QixDQUEyQ1QsSUFBSUcsSUFBSixDQUFTQyxJQUFwRCxFQUNHTSxPQURILENBQ1dSLGdCQURYO0FBRUFELFFBQUlVLG1CQUFKLENBQXdCSCxJQUF4QixHQUErQkMsYUFBL0IsQ0FBNkNQLGdCQUE3QztBQUNBSixZQUFRLENBQUNDLFlBQVlRLFNBQWIsRUFBd0JOLElBQUlVLG1CQUE1QixDQUFSO0FBQ0QsR0FQRDs7QUFTQSx3QkFBVTtBQUFBLFdBQU1iLE1BQU1jLE9BQU4sQ0FBYztBQUFBLGFBQVFDLEtBQUtDLE1BQUwsRUFBUjtBQUFBLEtBQWQsQ0FBTjtBQUFBLEdBQVY7O0FBRUEsdUJBQVMsbUJBQVQsRUFBOEIsWUFBTTtBQUNsQyxtQkFBRyxnQ0FBSCxFQUFxQztBQUFBLGFBQ25DLDhCQUFlLEVBQUVmLHdCQUFGLEVBQWYsRUFBZ0NRLFNBQWhDLENBQTBDUCxHQUExQyxFQUErQ0MsR0FBL0MsQ0FEbUM7QUFBQSxLQUFyQztBQUVELEdBSEQ7QUFJRCxDQWhDRDtBQU5BIiwiZmlsZSI6ImRhdGFDb250cm9sbGVyLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXNjcmliZSwgYmVmb3JlLCBiZWZvcmVFYWNoLCBhZnRlckVhY2gsIGl0IH0gZnJvbSAnLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCBkYXRhQ29udHJvbGxlciBmcm9tICcuLy4uLy4uL21haW4vY29udHJvbGxlcnMvZGF0YUNvbnRyb2xsZXInXG4vLyBtb2Nrc1xuaW1wb3J0IGRhdGFTZXJ2aWNlTW9jayBmcm9tICcuLy4uL21vY2tzL3NlcnZpY2VzL2RhdGFTZXJ2aWNlJ1xuaW1wb3J0IHsgcmVzTW9jayB9IGZyb20gJy4vLi4vbW9ja3MvbGliL3dyYXBwZXJzL2V4cHJlc3NXcmFwcGVyJ1xuXG5kZXNjcmliZSgnRGF0YUNvbnRyb2xsZXInLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIGRhdGFTZXJ2aWNlLFxuICAgIHJlcSxcbiAgICByZXMsXG4gICAgcG9zaXRpdmVSZXNwb25zZVxuXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgcmVxID0ge1xuICAgICAgYm9keToge1xuICAgICAgICBkYXRhOiAneyBcImpzb25EYXRhXCI6IFwic29tZSBkYXRhXCJ9J1xuICAgICAgfVxuICAgIH1cbiAgICBwb3NpdGl2ZVJlc3BvbnNlID0gUHJvbWlzZS5yZXNvbHZlKCdPSycpXG4gIH0pXG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgcmVzID0gcmVzTW9jaygpXG4gICAgZGF0YVNlcnZpY2UgPSBkYXRhU2VydmljZU1vY2soKVxuICAgIGRhdGFTZXJ2aWNlLndyaXRlRGF0YS5vbmNlKCkud2l0aEV4YWN0QXJncyhyZXEuYm9keS5kYXRhKVxuICAgICAgLnJldHVybnMocG9zaXRpdmVSZXNwb25zZSlcbiAgICByZXMuc2V0QnVmZmVyZWRSZXNwb25zZS5vbmNlKCkud2l0aEV4YWN0QXJncyhwb3NpdGl2ZVJlc3BvbnNlKVxuICAgIG1vY2tzID0gW2RhdGFTZXJ2aWNlLndyaXRlRGF0YSwgcmVzLnNldEJ1ZmZlcmVkUmVzcG9uc2VdXG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICBkZXNjcmliZSgnV2hlbiB3cml0aW5nIGRhdGEnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCB3cml0ZSBkYXRhIHN1Y2Nlc3NmdWxseScsICgpID0+XG4gICAgICBkYXRhQ29udHJvbGxlcih7IGRhdGFTZXJ2aWNlIH0pLndyaXRlRGF0YShyZXEsIHJlcykpXG4gIH0pXG59KVxuIl19