'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils');

exports.default = function (_ref) {
  var xml2js = _ref.xml2js;
  return {
    convert: function convert(xml) {
      return (0, _utils.createDefensivePromise)(function (resolve, reject) {
        xml2js.parseString(xml, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi93cmFwcGVycy94bWwyanNXcmFwcGVyLmpzIl0sIm5hbWVzIjpbInhtbDJqcyIsImNvbnZlcnQiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyc2VTdHJpbmciLCJ4bWwiLCJlcnIiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztrQkFFZTtBQUFBLE1BQUdBLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQWlCO0FBQzlCQyxhQUFTO0FBQUEsYUFBTyxtQ0FBdUIsVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzFESCxlQUFPSSxXQUFQLENBQW1CQyxHQUFuQixFQUF3QixVQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDdkMsY0FBSUQsR0FBSixFQUFTO0FBQ1BILG1CQUFPRyxHQUFQO0FBQ0QsV0FGRCxNQUVPO0FBQ0xKLG9CQUFRSyxNQUFSO0FBQ0Q7QUFDRixTQU5EO0FBT0QsT0FSZSxDQUFQO0FBQUE7QUFEcUIsR0FBakI7QUFBQSxDIiwiZmlsZSI6InhtbDJqc1dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEZWZlbnNpdmVQcm9taXNlIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IHhtbDJqcyB9KSA9PiAoe1xuICBjb252ZXJ0OiB4bWwgPT4gY3JlYXRlRGVmZW5zaXZlUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgeG1sMmpzLnBhcnNlU3RyaW5nKHhtbCwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcbiJdfQ==