'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _iocHelper = require('./../../iocHelper');

var _expressWrapper = require('./../../../main/lib/wrappers/expressWrapper');

var _expressWrapper2 = _interopRequireDefault(_expressWrapper);

var _config = require('../../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _expressWrapper2.default,
  configuration: {
    port: _config2.default.scraperApi.port
  },
  dependencyInstances: {
    express: _express2.default
  },
  dependencyConfig: {
    middlewares: 'middlewares',
    routes: 'routes'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pb2MvbGliL3dyYXBwZXJzL2V4cHJlc3NXcmFwcGVyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJpbnN0YW5jZUNvbnN0cnVjdG9yIiwiY29uZmlndXJhdGlvbiIsInBvcnQiLCJzY3JhcGVyQXBpIiwiZGVwZW5kZW5jeUluc3RhbmNlcyIsImV4cHJlc3MiLCJkZXBlbmRlbmN5Q29uZmlnIiwibWlkZGxld2FyZXMiLCJyb3V0ZXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsVUFBVUMsT0FBT0QsT0FBUCxHQUFpQixrQ0FBa0I7QUFDM0NFLCtDQUQyQztBQUUzQ0MsaUJBQWU7QUFDYkMsVUFBTSxpQkFBT0MsVUFBUCxDQUFrQkQ7QUFEWCxHQUY0QjtBQUszQ0UsdUJBQXFCO0FBQ25CQztBQURtQixHQUxzQjtBQVEzQ0Msb0JBQWtCO0FBQ2hCQyxpQkFBYSxhQURHO0FBRWhCQyxZQUFRO0FBRlE7QUFSeUIsQ0FBbEIsQ0FBM0IiLCJmaWxlIjoiZXhwcmVzc1dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgeyBjcmVhdGVOZXdJbnN0YW5jZSB9IGZyb20gJy4vLi4vLi4vaW9jSGVscGVyJ1xuaW1wb3J0IGV4cHJlc3NXcmFwcGVyIGZyb20gJy4vLi4vLi4vLi4vbWFpbi9saWIvd3JhcHBlcnMvZXhwcmVzc1dyYXBwZXInXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiBleHByZXNzV3JhcHBlcixcbiAgY29uZmlndXJhdGlvbjoge1xuICAgIHBvcnQ6IGNvbmZpZy5zY3JhcGVyQXBpLnBvcnRcbiAgfSxcbiAgZGVwZW5kZW5jeUluc3RhbmNlczoge1xuICAgIGV4cHJlc3NcbiAgfSxcbiAgZGVwZW5kZW5jeUNvbmZpZzoge1xuICAgIG1pZGRsZXdhcmVzOiAnbWlkZGxld2FyZXMnLFxuICAgIHJvdXRlczogJ3JvdXRlcydcbiAgfVxufSlcbiJdfQ==