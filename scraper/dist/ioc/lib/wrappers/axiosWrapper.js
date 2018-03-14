'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _rxjs = require('rxjs');

var _rxjs2 = _interopRequireDefault(_rxjs);

var _iocHelper = require('./../../iocHelper');

var _axiosWrapper = require('./../../../main/lib/wrappers/axiosWrapper');

var _axiosWrapper2 = _interopRequireDefault(_axiosWrapper);

var _config = require('./../../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _axiosWrapper2.default,
  configuration: {
    maxPollTries: _config2.default.scraper.maxPollTries,
    pollingInterval: _config2.default.scraper.pollingInterval
  },
  dependencyInstances: {
    axios: _axios2.default,
    Rx: _rxjs2.default
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pb2MvbGliL3dyYXBwZXJzL2F4aW9zV3JhcHBlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImNvbmZpZ3VyYXRpb24iLCJtYXhQb2xsVHJpZXMiLCJzY3JhcGVyIiwicG9sbGluZ0ludGVydmFsIiwiZGVwZW5kZW5jeUluc3RhbmNlcyIsImF4aW9zIiwiUngiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0UsNkNBRDJDO0FBRTNDQyxpQkFBZTtBQUNiQyxrQkFBYyxpQkFBT0MsT0FBUCxDQUFlRCxZQURoQjtBQUViRSxxQkFBaUIsaUJBQU9ELE9BQVAsQ0FBZUM7QUFGbkIsR0FGNEI7QUFNM0NDLHVCQUFxQjtBQUNuQkMsMEJBRG1CO0FBRW5CQztBQUZtQjtBQU5zQixDQUFsQixDQUEzQiIsImZpbGUiOiJheGlvc1dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgUnggZnJvbSAncnhqcydcblxuaW1wb3J0IHsgY3JlYXRlTmV3SW5zdGFuY2UgfSBmcm9tICcuLy4uLy4uL2lvY0hlbHBlcidcbmltcG9ydCBheGlvc1dyYXBwZXIgZnJvbSAnLi8uLi8uLi8uLi9tYWluL2xpYi93cmFwcGVycy9heGlvc1dyYXBwZXInXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vLi4vLi4vLi4vY29uZmlnJ1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVOZXdJbnN0YW5jZSh7XG4gIGluc3RhbmNlQ29uc3RydWN0b3I6IGF4aW9zV3JhcHBlcixcbiAgY29uZmlndXJhdGlvbjoge1xuICAgIG1heFBvbGxUcmllczogY29uZmlnLnNjcmFwZXIubWF4UG9sbFRyaWVzLFxuICAgIHBvbGxpbmdJbnRlcnZhbDogY29uZmlnLnNjcmFwZXIucG9sbGluZ0ludGVydmFsXG4gIH0sXG4gIGRlcGVuZGVuY3lJbnN0YW5jZXM6IHtcbiAgICBheGlvcyxcbiAgICBSeFxuICB9XG59KVxuIl19