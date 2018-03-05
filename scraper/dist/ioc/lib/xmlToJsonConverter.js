'use strict';

var _iocHelper = require('./../iocHelper');

var _utils = require('./../../main/utils');

var _xmlToJsonConverter = require('./../../main/lib/xmlToJsonConverter');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2MvbGliL3htbFRvSnNvbkNvbnZlcnRlci5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0ZXIiLCJ4bWwiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwicmVzdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImluc3RhbmNlQ29uc3RydWN0b3IiLCJkZXBlbmRlbmN5SW5zdGFuY2VzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVk7QUFBQSxNQUFHQyxHQUFILFFBQUdBLEdBQUg7QUFBQSxTQUFhLG1DQUF1QixVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDekUsNkJBQVlGLEdBQVosRUFBaUIsVUFBQ0csR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ2hDLFVBQUlELEdBQUosRUFBUztBQUNQRCxlQUFPQyxHQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0xGLGdCQUFRRyxNQUFSO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FSOEIsQ0FBYjtBQUFBLENBQWxCOztBQVVBQyxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0UsbURBRDJDO0FBRTNDQyx1QkFBcUIsRUFBRVQsb0JBQUY7QUFGc0IsQ0FBbEIsQ0FBM0IiLCJmaWxlIjoieG1sVG9Kc29uQ29udmVydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTmV3SW5zdGFuY2UgfSBmcm9tICcuLy4uL2lvY0hlbHBlcidcbmltcG9ydCB7IGNyZWF0ZURlZmVuc2l2ZVByb21pc2UgfSBmcm9tICcuLy4uLy4uL21haW4vdXRpbHMnXG5pbXBvcnQgeG1sVG9Kc29uQ29udmVydGVyIGZyb20gJy4vLi4vLi4vbWFpbi9saWIveG1sVG9Kc29uQ29udmVydGVyJ1xuaW1wb3J0IHsgcGFyc2VTdHJpbmcgfSBmcm9tICd4bWwyanMnXG5cbmNvbnN0IGNvbnZlcnRlciA9ICh7IHhtbCB9KSA9PiBjcmVhdGVEZWZlbnNpdmVQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgcGFyc2VTdHJpbmcoeG1sLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZWplY3QoZXJyKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHJlc3VsdClcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVOZXdJbnN0YW5jZSh7XG4gIGluc3RhbmNlQ29uc3RydWN0b3I6IHhtbFRvSnNvbkNvbnZlcnRlcixcbiAgZGVwZW5kZW5jeUluc3RhbmNlczogeyBjb252ZXJ0ZXIgfVxufSlcbiJdfQ==