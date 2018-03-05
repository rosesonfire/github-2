'use strict';

var _iocHelper = require('./../iocHelper');

var _dataFetcher = require('./../../main/services/dataFetcher');

var _dataFetcher2 = _interopRequireDefault(_dataFetcher);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _dataFetcher2.default,
  dependencyInstances: {
    httpGetter: _axios2.default.get.bind(_axios2.default)
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvZGF0YUZldGNoZXIuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIm1vZHVsZSIsImluc3RhbmNlQ29uc3RydWN0b3IiLCJkZXBlbmRlbmN5SW5zdGFuY2VzIiwiaHR0cEdldHRlciIsImdldCIsImJpbmQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFVBQVVDLE9BQU9ELE9BQVAsR0FBaUIsa0NBQWtCO0FBQzNDRSw0Q0FEMkM7QUFFM0NDLHVCQUFxQjtBQUNuQkMsZ0JBQVksZ0JBQU1DLEdBQU4sQ0FBVUMsSUFBVjtBQURPO0FBRnNCLENBQWxCLENBQTNCIiwiZmlsZSI6ImRhdGFGZXRjaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTmV3SW5zdGFuY2UgfSBmcm9tICcuLy4uL2lvY0hlbHBlcidcbmltcG9ydCBkYXRhRmV0Y2hlciBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvZGF0YUZldGNoZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU5ld0luc3RhbmNlKHtcbiAgaW5zdGFuY2VDb25zdHJ1Y3RvcjogZGF0YUZldGNoZXIsXG4gIGRlcGVuZGVuY3lJbnN0YW5jZXM6IHtcbiAgICBodHRwR2V0dGVyOiBheGlvcy5nZXQuYmluZChheGlvcylcbiAgfVxufSlcbiJdfQ==