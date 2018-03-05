'use strict';

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

var _iocHelper = require('./../../iocHelper');

var _redisClientWrapper = require('./../../../main/lib/wrappers/redisClientWrapper');

var _redisClientWrapper2 = _interopRequireDefault(_redisClientWrapper);

var _config = require('../../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _redisClientWrapper2.default,
  configuration: {
    host: _config.dbConfig.host,
    port: _config.dbConfig.port
  },
  dependencyInstances: {
    redis: _redis2.default
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pb2MvbGliL3dyYXBwZXJzL3JlZGlzQ2xpZW50V3JhcHBlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImNvbmZpZ3VyYXRpb24iLCJob3N0IiwicG9ydCIsImRlcGVuZGVuY3lJbnN0YW5jZXMiLCJyZWRpcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQUEsVUFBVUMsT0FBT0QsT0FBUCxHQUFpQixrQ0FBa0I7QUFDM0NFLG1EQUQyQztBQUUzQ0MsaUJBQWU7QUFDYkMsVUFBTSxpQkFBU0EsSUFERjtBQUViQyxVQUFNLGlCQUFTQTtBQUZGLEdBRjRCO0FBTTNDQyx1QkFBcUI7QUFDbkJDO0FBRG1CO0FBTnNCLENBQWxCLENBQTNCIiwiZmlsZSI6InJlZGlzQ2xpZW50V3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWRpcyBmcm9tICdyZWRpcydcblxuaW1wb3J0IHsgY3JlYXRlTmV3SW5zdGFuY2UgfSBmcm9tICcuLy4uLy4uL2lvY0hlbHBlcidcbmltcG9ydCByZWRpc0NsaWVudFdyYXBwZXIgZnJvbSAnLi8uLi8uLi8uLi9tYWluL2xpYi93cmFwcGVycy9yZWRpc0NsaWVudFdyYXBwZXInXG5pbXBvcnQgeyBkYkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiByZWRpc0NsaWVudFdyYXBwZXIsXG4gIGNvbmZpZ3VyYXRpb246IHtcbiAgICBob3N0OiBkYkNvbmZpZy5ob3N0LFxuICAgIHBvcnQ6IGRiQ29uZmlnLnBvcnRcbiAgfSxcbiAgZGVwZW5kZW5jeUluc3RhbmNlczoge1xuICAgIHJlZGlzOiByZWRpc1xuICB9XG59KVxuIl19