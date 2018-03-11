'use strict';

var _iocHelper = require('./../iocHelper');

var _writeDataService = require('./../../main/services/writeDataService');

var _writeDataService2 = _interopRequireDefault(_writeDataService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _writeDataService2.default,
  dependencyConfig: {
    odm: 'lib/odm/redisODM'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvd3JpdGVEYXRhU2VydmljZS5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImRlcGVuZGVuY3lDb25maWciLCJvZG0iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0UsaURBRDJDO0FBRTNDQyxvQkFBa0I7QUFDaEJDLFNBQUs7QUFEVztBQUZ5QixDQUFsQixDQUEzQiIsImZpbGUiOiJ3cml0ZURhdGFTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTmV3SW5zdGFuY2UgfSBmcm9tICcuLy4uL2lvY0hlbHBlcidcbmltcG9ydCB3cml0ZURhdGFTZXJ2aWNlIGZyb20gJy4vLi4vLi4vbWFpbi9zZXJ2aWNlcy93cml0ZURhdGFTZXJ2aWNlJ1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVOZXdJbnN0YW5jZSh7XG4gIGluc3RhbmNlQ29uc3RydWN0b3I6IHdyaXRlRGF0YVNlcnZpY2UsXG4gIGRlcGVuZGVuY3lDb25maWc6IHtcbiAgICBvZG06ICdsaWIvb2RtL3JlZGlzT0RNJ1xuICB9XG59KVxuIl19