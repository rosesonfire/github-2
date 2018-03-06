'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _iocHelper = require('./../iocHelper');

var _fetchData = require('./../../main/services/fetchData');

var _fetchData2 = _interopRequireDefault(_fetchData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _fetchData2.default,
  dependencyInstances: {
    httpGetter: _axios2.default.get.bind(_axios2.default)
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvZmV0Y2hEYXRhLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJpbnN0YW5jZUNvbnN0cnVjdG9yIiwiZGVwZW5kZW5jeUluc3RhbmNlcyIsImh0dHBHZXR0ZXIiLCJnZXQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0UsMENBRDJDO0FBRTNDQyx1QkFBcUI7QUFDbkJDLGdCQUFZLGdCQUFNQyxHQUFOLENBQVVDLElBQVY7QUFETztBQUZzQixDQUFsQixDQUEzQiIsImZpbGUiOiJmZXRjaERhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCB7IGNyZWF0ZU5ld0luc3RhbmNlIH0gZnJvbSAnLi8uLi9pb2NIZWxwZXInXG5pbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vLi4vLi4vbWFpbi9zZXJ2aWNlcy9mZXRjaERhdGEnXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU5ld0luc3RhbmNlKHtcbiAgaW5zdGFuY2VDb25zdHJ1Y3RvcjogZmV0Y2hEYXRhLFxuICBkZXBlbmRlbmN5SW5zdGFuY2VzOiB7XG4gICAgaHR0cEdldHRlcjogYXhpb3MuZ2V0LmJpbmQoYXhpb3MpXG4gIH1cbn0pXG4iXX0=