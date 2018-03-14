'use strict';

var _rxjs = require('rxjs');

var _rxjs2 = _interopRequireDefault(_rxjs);

var _iocHelper = require('./../iocHelper');

var _stream = require('./../../main/services/stream');

var _stream2 = _interopRequireDefault(_stream);

var _config = require('./../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _stream2.default,
  configuration: {
    fetchInterval: _config2.default.scraper.fetchInterval
  },
  dependencyInstances: {
    Rx: _rxjs2.default
  },
  dependencyConfig: {
    scrape: 'services/scrape'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvc3RyZWFtLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJpbnN0YW5jZUNvbnN0cnVjdG9yIiwiY29uZmlndXJhdGlvbiIsImZldGNoSW50ZXJ2YWwiLCJzY3JhcGVyIiwiZGVwZW5kZW5jeUluc3RhbmNlcyIsIlJ4IiwiZGVwZW5kZW5jeUNvbmZpZyIsInNjcmFwZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0UsdUNBRDJDO0FBRTNDQyxpQkFBZTtBQUNiQyxtQkFBZSxpQkFBT0MsT0FBUCxDQUFlRDtBQURqQixHQUY0QjtBQUszQ0UsdUJBQXFCO0FBQ25CQztBQURtQixHQUxzQjtBQVEzQ0Msb0JBQWtCO0FBQ2hCQyxZQUFRO0FBRFE7QUFSeUIsQ0FBbEIsQ0FBM0IiLCJmaWxlIjoic3RyZWFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJ4IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IGNyZWF0ZU5ld0luc3RhbmNlIH0gZnJvbSAnLi8uLi9pb2NIZWxwZXInXG5pbXBvcnQgc3RyZWFtIGZyb20gJy4vLi4vLi4vbWFpbi9zZXJ2aWNlcy9zdHJlYW0nXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vLi4vLi4vY29uZmlnJ1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVOZXdJbnN0YW5jZSh7XG4gIGluc3RhbmNlQ29uc3RydWN0b3I6IHN0cmVhbSxcbiAgY29uZmlndXJhdGlvbjoge1xuICAgIGZldGNoSW50ZXJ2YWw6IGNvbmZpZy5zY3JhcGVyLmZldGNoSW50ZXJ2YWxcbiAgfSxcbiAgZGVwZW5kZW5jeUluc3RhbmNlczoge1xuICAgIFJ4XG4gIH0sXG4gIGRlcGVuZGVuY3lDb25maWc6IHtcbiAgICBzY3JhcGU6ICdzZXJ2aWNlcy9zY3JhcGUnXG4gIH1cbn0pXG4iXX0=