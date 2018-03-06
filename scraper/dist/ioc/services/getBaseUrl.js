'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _iocHelper = require('./../iocHelper');

var _getBaseUrl = require('./../../main/services/getBaseUrl');

var _getBaseUrl2 = _interopRequireDefault(_getBaseUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _getBaseUrl2.default,
  dependencyInstances: {
    urlParser: _url2.default.parse.bind(_url2.default)
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvZ2V0QmFzZVVybC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImRlcGVuZGVuY3lJbnN0YW5jZXMiLCJ1cmxQYXJzZXIiLCJwYXJzZSIsImJpbmQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFFQTs7QUFDQTs7Ozs7O0FBRUFBLFVBQVVDLE9BQU9ELE9BQVAsR0FBaUIsa0NBQWtCO0FBQzNDRSwyQ0FEMkM7QUFFM0NDLHVCQUFxQjtBQUNuQkMsZUFBVyxjQUFJQyxLQUFKLENBQVVDLElBQVY7QUFEUTtBQUZzQixDQUFsQixDQUEzQiIsImZpbGUiOiJnZXRCYXNlVXJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVybCBmcm9tICd1cmwnXG5cbmltcG9ydCB7IGNyZWF0ZU5ld0luc3RhbmNlIH0gZnJvbSAnLi8uLi9pb2NIZWxwZXInXG5pbXBvcnQgZ2V0QmFzZVVybCBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvZ2V0QmFzZVVybCdcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiBnZXRCYXNlVXJsLFxuICBkZXBlbmRlbmN5SW5zdGFuY2VzOiB7XG4gICAgdXJsUGFyc2VyOiB1cmwucGFyc2UuYmluZCh1cmwpXG4gIH1cbn0pXG4iXX0=