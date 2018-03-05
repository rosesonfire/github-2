'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils');

exports.default = function (_ref) {
  var xml2js = _ref.xml2js;
  return function (_ref2) {
    var xml = _ref2.xml;
    return (0, _utils.createDefensivePromise)(function (resolve, reject) {
      xml2js.parseString(xml, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi93cmFwcGVycy94bWwyanNXcmFwcGVyLmpzIl0sIm5hbWVzIjpbInhtbDJqcyIsInhtbCIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZVN0cmluZyIsImVyciIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O2tCQUVlO0FBQUEsTUFBR0EsTUFBSCxRQUFHQSxNQUFIO0FBQUEsU0FBZ0I7QUFBQSxRQUFHQyxHQUFILFNBQUdBLEdBQUg7QUFBQSxXQUM3QixtQ0FBdUIsVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzFDSCxhQUFPSSxXQUFQLENBQW1CSCxHQUFuQixFQUF3QixVQUFDSSxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDdkMsWUFBSUQsR0FBSixFQUFTO0FBQ1BGLGlCQUFPRSxHQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0xILGtCQUFRSSxNQUFSO0FBQ0Q7QUFDRixPQU5EO0FBT0QsS0FSRCxDQUQ2QjtBQUFBLEdBQWhCO0FBQUEsQyIsImZpbGUiOiJ4bWwyanNXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGVmZW5zaXZlUHJvbWlzZSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyB4bWwyanMgfSkgPT4gKHsgeG1sIH0pID0+XG4gIGNyZWF0ZURlZmVuc2l2ZVByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHhtbDJqcy5wYXJzZVN0cmluZyh4bWwsIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbiJdfQ==