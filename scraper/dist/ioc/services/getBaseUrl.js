'use strict';

var _iocHelper = require('./../iocHelper');

var _getBaseUrl = require('./../../main/services/getBaseUrl');

var _getBaseUrl2 = _interopRequireDefault(_getBaseUrl);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _getBaseUrl2.default,
  dependencyInstances: {
    urlParser: _url2.default.parse.bind(_url2.default)
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvZ2V0QmFzZVVybC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImRlcGVuZGVuY3lJbnN0YW5jZXMiLCJ1cmxQYXJzZXIiLCJwYXJzZSIsImJpbmQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFVBQVVDLE9BQU9ELE9BQVAsR0FBaUIsa0NBQWtCO0FBQzNDRSwyQ0FEMkM7QUFFM0NDLHVCQUFxQjtBQUNuQkMsZUFBVyxjQUFJQyxLQUFKLENBQVVDLElBQVY7QUFEUTtBQUZzQixDQUFsQixDQUEzQiIsImZpbGUiOiJnZXRCYXNlVXJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTmV3SW5zdGFuY2UgfSBmcm9tICcuLy4uL2lvY0hlbHBlcidcbmltcG9ydCBnZXRCYXNlVXJsIGZyb20gJy4vLi4vLi4vbWFpbi9zZXJ2aWNlcy9nZXRCYXNlVXJsJ1xuaW1wb3J0IHVybCBmcm9tICd1cmwnXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU5ld0luc3RhbmNlKHtcbiAgaW5zdGFuY2VDb25zdHJ1Y3RvcjogZ2V0QmFzZVVybCxcbiAgZGVwZW5kZW5jeUluc3RhbmNlczoge1xuICAgIHVybFBhcnNlcjogdXJsLnBhcnNlLmJpbmQodXJsKVxuICB9XG59KVxuIl19