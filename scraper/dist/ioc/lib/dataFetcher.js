'use strict';

var _dataFetcher = require('./../../main/lib/dataFetcher');

var _dataFetcher2 = _interopRequireDefault(_dataFetcher);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = function () {
  var dataFetcherInstance = null;

  try {
    var httpGetter = _axios2.default.get.bind(_axios2.default);
    dataFetcherInstance = (0, _dataFetcher2.default)({ httpGetter: httpGetter });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return dataFetcherInstance;
};

exports['@require'] = [];
exports['@singleton'] = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2MvbGliL2RhdGFGZXRjaGVyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJkYXRhRmV0Y2hlckluc3RhbmNlIiwiaHR0cEdldHRlciIsImdldCIsImJpbmQiLCJlIiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLFlBQU07QUFDL0IsTUFBSUUsc0JBQXNCLElBQTFCOztBQUVBLE1BQUk7QUFDRixRQUFNQyxhQUFhLGdCQUFNQyxHQUFOLENBQVVDLElBQVYsaUJBQW5CO0FBQ0FILDBCQUFzQiwyQkFBWSxFQUFFQyxzQkFBRixFQUFaLENBQXRCO0FBQ0QsR0FIRCxDQUdFLE9BQU9HLENBQVAsRUFBVTtBQUNWO0FBQ0FDLFlBQVFDLEtBQVIsQ0FBY0YsQ0FBZDtBQUNEOztBQUVELFNBQU9KLG1CQUFQO0FBQ0QsQ0FaRDs7QUFjQUYsUUFBUSxVQUFSLElBQXNCLEVBQXRCO0FBQ0FBLFFBQVEsWUFBUixJQUF3QixJQUF4QiIsImZpbGUiOiJkYXRhRmV0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhRmV0Y2hlciBmcm9tICcuLy4uLy4uL21haW4vbGliL2RhdGFGZXRjaGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG4gIGxldCBkYXRhRmV0Y2hlckluc3RhbmNlID0gbnVsbFxuXG4gIHRyeSB7XG4gICAgY29uc3QgaHR0cEdldHRlciA9IGF4aW9zLmdldC5iaW5kKGF4aW9zKVxuICAgIGRhdGFGZXRjaGVySW5zdGFuY2UgPSBkYXRhRmV0Y2hlcih7IGh0dHBHZXR0ZXIgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihlKVxuICB9XG5cbiAgcmV0dXJuIGRhdGFGZXRjaGVySW5zdGFuY2Vcbn1cblxuZXhwb3J0c1snQHJlcXVpcmUnXSA9IFtdXG5leHBvcnRzWydAc2luZ2xldG9uJ10gPSB0cnVlXG4iXX0=