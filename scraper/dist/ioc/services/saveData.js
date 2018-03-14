'use strict';

var _iocHelper = require('./../iocHelper');

var _saveData = require('./../../main/services/saveData');

var _saveData2 = _interopRequireDefault(_saveData);

var _config = require('./../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _saveData2.default,
  configuration: {
    url: 'http://' + _config2.default.dataAPI.host + ':' + _config2.default.dataAPI.port + ('' + _config2.default.dataAPI.path)
  },
  dependencyConfig: {
    http: 'lib/wrappers/axiosWrapper'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvc2F2ZURhdGEuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIm1vZHVsZSIsImluc3RhbmNlQ29uc3RydWN0b3IiLCJjb25maWd1cmF0aW9uIiwidXJsIiwiZGF0YUFQSSIsImhvc3QiLCJwb3J0IiwicGF0aCIsImRlcGVuZGVuY3lDb25maWciLCJodHRwIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0UseUNBRDJDO0FBRTNDQyxpQkFBZTtBQUNiQyxTQUFLLFlBQVUsaUJBQU9DLE9BQVAsQ0FBZUMsSUFBekIsU0FBaUMsaUJBQU9ELE9BQVAsQ0FBZUUsSUFBaEQsU0FDRyxpQkFBT0YsT0FBUCxDQUFlRyxJQURsQjtBQURRLEdBRjRCO0FBTTNDQyxvQkFBa0I7QUFDaEJDLFVBQU07QUFEVTtBQU55QixDQUFsQixDQUEzQiIsImZpbGUiOiJzYXZlRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5ld0luc3RhbmNlIH0gZnJvbSAnLi8uLi9pb2NIZWxwZXInXG5pbXBvcnQgc2F2ZURhdGEgZnJvbSAnLi8uLi8uLi9tYWluL3NlcnZpY2VzL3NhdmVEYXRhJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLy4uLy4uL2NvbmZpZydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiBzYXZlRGF0YSxcbiAgY29uZmlndXJhdGlvbjoge1xuICAgIHVybDogYGh0dHA6Ly8ke2NvbmZpZy5kYXRhQVBJLmhvc3R9OiR7Y29uZmlnLmRhdGFBUEkucG9ydH1gICtcbiAgICAgICAgIGAke2NvbmZpZy5kYXRhQVBJLnBhdGh9YFxuICB9LFxuICBkZXBlbmRlbmN5Q29uZmlnOiB7XG4gICAgaHR0cDogJ2xpYi93cmFwcGVycy9heGlvc1dyYXBwZXInXG4gIH1cbn0pXG4iXX0=