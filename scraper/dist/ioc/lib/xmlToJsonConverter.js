'use strict';

var _xmlToJsonConverter = require('./../../main/lib/xmlToJsonConverter');

var _xmlToJsonConverter2 = _interopRequireDefault(_xmlToJsonConverter);

var _xml2js = require('xml2js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = function () {
  var xmlToJsonConverterInstance = null;

  try {
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
    xmlToJsonConverterInstance = (0, _xmlToJsonConverter2.default)({ converter: converter });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return xmlToJsonConverterInstance;
};

exports['@require'] = [];
exports['@singleton'] = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2MvbGliL3htbFRvSnNvbkNvbnZlcnRlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwieG1sVG9Kc29uQ29udmVydGVySW5zdGFuY2UiLCJjb252ZXJ0ZXIiLCJ4bWwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsInJlc3VsdCIsImUiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLFlBQU07QUFDL0IsTUFBSUUsNkJBQTZCLElBQWpDOztBQUVBLE1BQUk7QUFDRixRQUFNQyxZQUFZLFNBQVpBLFNBQVk7QUFBQSxVQUFHQyxHQUFILFFBQUdBLEdBQUg7QUFBQSxhQUFhLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDOUQsWUFBSTtBQUNGLG1DQUFZSCxHQUFaLEVBQWlCLFVBQUNJLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNoQyxnQkFBSUQsR0FBSixFQUFTO0FBQ1BELHFCQUFPQyxHQUFQO0FBQ0QsYUFGRCxNQUVPO0FBQ0xGLHNCQUFRRyxNQUFSO0FBQ0Q7QUFDRixXQU5EO0FBT0QsU0FSRCxDQVFFLE9BQU9DLENBQVAsRUFBVTtBQUNWSCxpQkFBT0csQ0FBUDtBQUNEO0FBQ0YsT0FaOEIsQ0FBYjtBQUFBLEtBQWxCO0FBYUFSLGlDQUE2QixrQ0FBbUIsRUFBRUMsb0JBQUYsRUFBbkIsQ0FBN0I7QUFDRCxHQWZELENBZUUsT0FBT08sQ0FBUCxFQUFVO0FBQ1Y7QUFDQUMsWUFBUUMsS0FBUixDQUFjRixDQUFkO0FBQ0Q7O0FBRUQsU0FBT1IsMEJBQVA7QUFDRCxDQXhCRDs7QUEwQkFGLFFBQVEsVUFBUixJQUFzQixFQUF0QjtBQUNBQSxRQUFRLFlBQVIsSUFBd0IsSUFBeEIiLCJmaWxlIjoieG1sVG9Kc29uQ29udmVydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHhtbFRvSnNvbkNvbnZlcnRlciBmcm9tICcuLy4uLy4uL21haW4vbGliL3htbFRvSnNvbkNvbnZlcnRlcidcbmltcG9ydCB7IHBhcnNlU3RyaW5nIH0gZnJvbSAneG1sMmpzJ1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG4gIGxldCB4bWxUb0pzb25Db252ZXJ0ZXJJbnN0YW5jZSA9IG51bGxcblxuICB0cnkge1xuICAgIGNvbnN0IGNvbnZlcnRlciA9ICh7IHhtbCB9KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZVN0cmluZyh4bWwsIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB4bWxUb0pzb25Db252ZXJ0ZXJJbnN0YW5jZSA9IHhtbFRvSnNvbkNvbnZlcnRlcih7IGNvbnZlcnRlciB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKGUpXG4gIH1cblxuICByZXR1cm4geG1sVG9Kc29uQ29udmVydGVySW5zdGFuY2Vcbn1cblxuZXhwb3J0c1snQHJlcXVpcmUnXSA9IFtdXG5leHBvcnRzWydAc2luZ2xldG9uJ10gPSB0cnVlXG4iXX0=