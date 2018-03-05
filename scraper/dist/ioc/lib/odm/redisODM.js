'use strict';

var _iocHelper = require('./../../iocHelper');

var _redisODM = require('./../../../main/lib/odm/redisODM');

var _redisODM2 = _interopRequireDefault(_redisODM);

var _config = require('../../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _redisODM2.default,
  configuration: {
    host: _config.dbConfig.host,
    port: _config.dbConfig.port
  },
  dependencyConfig: {
    redis: 'lib/wrappers/redisWrapper'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pb2MvbGliL29kbS9yZWRpc09ETS5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImNvbmZpZ3VyYXRpb24iLCJob3N0IiwicG9ydCIsImRlcGVuZGVuY3lDb25maWciLCJyZWRpcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBRUFBLFVBQVVDLE9BQU9ELE9BQVAsR0FBaUIsa0NBQWtCO0FBQzNDRSx5Q0FEMkM7QUFFM0NDLGlCQUFlO0FBQ2JDLFVBQU0saUJBQVNBLElBREY7QUFFYkMsVUFBTSxpQkFBU0E7QUFGRixHQUY0QjtBQU0zQ0Msb0JBQWtCO0FBQ2hCQyxXQUFPO0FBRFM7QUFOeUIsQ0FBbEIsQ0FBM0IiLCJmaWxlIjoicmVkaXNPRE0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdJbnN0YW5jZSB9IGZyb20gJy4vLi4vLi4vaW9jSGVscGVyJ1xuaW1wb3J0IHJlZGlzT0RNIGZyb20gJy4vLi4vLi4vLi4vbWFpbi9saWIvb2RtL3JlZGlzT0RNJ1xuaW1wb3J0IHsgZGJDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU5ld0luc3RhbmNlKHtcbiAgaW5zdGFuY2VDb25zdHJ1Y3RvcjogcmVkaXNPRE0sXG4gIGNvbmZpZ3VyYXRpb246IHtcbiAgICBob3N0OiBkYkNvbmZpZy5ob3N0LFxuICAgIHBvcnQ6IGRiQ29uZmlnLnBvcnRcbiAgfSxcbiAgZGVwZW5kZW5jeUNvbmZpZzoge1xuICAgIHJlZGlzOiAnbGliL3dyYXBwZXJzL3JlZGlzV3JhcHBlcidcbiAgfVxufSlcbiJdfQ==