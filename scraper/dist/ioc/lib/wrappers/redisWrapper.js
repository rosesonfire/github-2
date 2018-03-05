'use strict';

var _iocHelper = require('./../../iocHelper');

var _redisWrapper = require('./../../../main/lib/wrappers/redisWrapper');

var _redisWrapper2 = _interopRequireDefault(_redisWrapper);

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _redisWrapper2.default,
  dependencyInstances: {
    redis: _redis2.default.createClient.bind(_redis2.default)
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pb2MvbGliL3dyYXBwZXJzL3JlZGlzV3JhcHBlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImRlcGVuZGVuY3lJbnN0YW5jZXMiLCJyZWRpcyIsImNyZWF0ZUNsaWVudCIsImJpbmQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFVBQVVDLE9BQU9ELE9BQVAsR0FBaUIsa0NBQWtCO0FBQzNDRSw2Q0FEMkM7QUFFM0NDLHVCQUFxQjtBQUNuQkMsV0FBTyxnQkFBTUMsWUFBTixDQUFtQkMsSUFBbkI7QUFEWTtBQUZzQixDQUFsQixDQUEzQiIsImZpbGUiOiJyZWRpc1dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdJbnN0YW5jZSB9IGZyb20gJy4vLi4vLi4vaW9jSGVscGVyJ1xuaW1wb3J0IHJlZGlzV3JhcHBlciBmcm9tICcuLy4uLy4uLy4uL21haW4vbGliL3dyYXBwZXJzL3JlZGlzV3JhcHBlcidcbmltcG9ydCByZWRpcyBmcm9tICdyZWRpcydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiByZWRpc1dyYXBwZXIsXG4gIGRlcGVuZGVuY3lJbnN0YW5jZXM6IHtcbiAgICByZWRpczogcmVkaXMuY3JlYXRlQ2xpZW50LmJpbmQocmVkaXMpXG4gIH1cbn0pXG4iXX0=