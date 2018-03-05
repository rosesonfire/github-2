'use strict';

var _iocHelper = require('./../iocHelper');

var _utils = require('./../../main/utils');

var _xmlToJsonConverter = require('./../../main/services/xmlToJsonConverter');

var _xmlToJsonConverter2 = _interopRequireDefault(_xmlToJsonConverter);

var _xml2js = require('xml2js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var converter = function converter(_ref) {
  var xml = _ref.xml;
  return (0, _utils.createDefensivePromise)(function (resolve, reject) {
    (0, _xml2js.parseString)(xml, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _xmlToJsonConverter2.default,
  dependencyInstances: { converter: converter }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMveG1sVG9Kc29uQ29udmVydGVyLmpzIl0sIm5hbWVzIjpbImNvbnZlcnRlciIsInhtbCIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJyZXN1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImRlcGVuZGVuY3lJbnN0YW5jZXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUdDLEdBQUgsUUFBR0EsR0FBSDtBQUFBLFNBQWEsbUNBQXVCLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN6RSw2QkFBWUYsR0FBWixFQUFpQixVQUFDRyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDaEMsVUFBSUQsR0FBSixFQUFTO0FBQ1BELGVBQU9DLEdBQVA7QUFDRCxPQUZELE1BRU87QUFDTEYsZ0JBQVFHLE1BQVI7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQVI4QixDQUFiO0FBQUEsQ0FBbEI7O0FBVUFDLFVBQVVDLE9BQU9ELE9BQVAsR0FBaUIsa0NBQWtCO0FBQzNDRSxtREFEMkM7QUFFM0NDLHVCQUFxQixFQUFFVCxvQkFBRjtBQUZzQixDQUFsQixDQUEzQiIsImZpbGUiOiJ4bWxUb0pzb25Db252ZXJ0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdJbnN0YW5jZSB9IGZyb20gJy4vLi4vaW9jSGVscGVyJ1xuaW1wb3J0IHsgY3JlYXRlRGVmZW5zaXZlUHJvbWlzZSB9IGZyb20gJy4vLi4vLi4vbWFpbi91dGlscydcbmltcG9ydCB4bWxUb0pzb25Db252ZXJ0ZXIgZnJvbSAnLi8uLi8uLi9tYWluL3NlcnZpY2VzL3htbFRvSnNvbkNvbnZlcnRlcidcbmltcG9ydCB7IHBhcnNlU3RyaW5nIH0gZnJvbSAneG1sMmpzJ1xuXG5jb25zdCBjb252ZXJ0ZXIgPSAoeyB4bWwgfSkgPT4gY3JlYXRlRGVmZW5zaXZlUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIHBhcnNlU3RyaW5nKHhtbCwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgcmVqZWN0KGVycilcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiB4bWxUb0pzb25Db252ZXJ0ZXIsXG4gIGRlcGVuZGVuY3lJbnN0YW5jZXM6IHsgY29udmVydGVyIH1cbn0pXG4iXX0=