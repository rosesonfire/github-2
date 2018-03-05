'use strict';

var _iocHelper = require('./../iocHelper');

var _xmlToJsonConverter = require('./../../main/lib/xmlToJsonConverter');

var _xmlToJsonConverter2 = _interopRequireDefault(_xmlToJsonConverter);

var _xml2js = require('xml2js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var converter = function converter(_ref) {
  var xml = _ref.xml;
  return new Promise(function (resolve, reject) {
    try {
      (0, _xml2js.parseString)(xml, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
};

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _xmlToJsonConverter2.default,
  dependencyInstances: { converter: converter }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2MvbGliL3htbFRvSnNvbkNvbnZlcnRlci5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0ZXIiLCJ4bWwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsInJlc3VsdCIsImUiLCJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImRlcGVuZGVuY3lJbnN0YW5jZXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUdDLEdBQUgsUUFBR0EsR0FBSDtBQUFBLFNBQWEsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUM5RCxRQUFJO0FBQ0YsK0JBQVlILEdBQVosRUFBaUIsVUFBQ0ksR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ2hDLFlBQUlELEdBQUosRUFBUztBQUNQRCxpQkFBT0MsR0FBUDtBQUNELFNBRkQsTUFFTztBQUNMRixrQkFBUUcsTUFBUjtBQUNEO0FBQ0YsT0FORDtBQU9ELEtBUkQsQ0FRRSxPQUFPQyxDQUFQLEVBQVU7QUFDVkgsYUFBT0csQ0FBUDtBQUNEO0FBQ0YsR0FaOEIsQ0FBYjtBQUFBLENBQWxCOztBQWNBQyxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0UsbURBRDJDO0FBRTNDQyx1QkFBcUIsRUFBRVgsb0JBQUY7QUFGc0IsQ0FBbEIsQ0FBM0IiLCJmaWxlIjoieG1sVG9Kc29uQ29udmVydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTmV3SW5zdGFuY2UgfSBmcm9tICcuLy4uL2lvY0hlbHBlcidcbmltcG9ydCB4bWxUb0pzb25Db252ZXJ0ZXIgZnJvbSAnLi8uLi8uLi9tYWluL2xpYi94bWxUb0pzb25Db252ZXJ0ZXInXG5pbXBvcnQgeyBwYXJzZVN0cmluZyB9IGZyb20gJ3htbDJqcydcblxuY29uc3QgY29udmVydGVyID0gKHsgeG1sIH0pID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgdHJ5IHtcbiAgICBwYXJzZVN0cmluZyh4bWwsIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICB9XG4gICAgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlamVjdChlKVxuICB9XG59KVxuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVOZXdJbnN0YW5jZSh7XG4gIGluc3RhbmNlQ29uc3RydWN0b3I6IHhtbFRvSnNvbkNvbnZlcnRlcixcbiAgZGVwZW5kZW5jeUluc3RhbmNlczogeyBjb252ZXJ0ZXIgfVxufSlcbiJdfQ==