'use strict';

var _xmlToJsonConverter = require('./../../main/lib/xmlToJsonConverter');

var _xmlToJsonConverter2 = _interopRequireDefault(_xmlToJsonConverter);

var _xml2js = require('xml2js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = function () {
  var xmlToJsonConverterInstance = null;

  try {
    var converter = _xml2js.parseString;
    xmlToJsonConverterInstance = (0, _xmlToJsonConverter2.default)({ converter: converter });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return xmlToJsonConverterInstance;
};

exports['@require'] = [];
exports['@singleton'] = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2MvbGliL3htbFRvSnNvbkNvbnZlcnRlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwieG1sVG9Kc29uQ29udmVydGVySW5zdGFuY2UiLCJjb252ZXJ0ZXIiLCJlIiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFFQUEsVUFBVUMsT0FBT0QsT0FBUCxHQUFpQixZQUFNO0FBQy9CLE1BQUlFLDZCQUE2QixJQUFqQzs7QUFFQSxNQUFJO0FBQ0YsUUFBTUMsK0JBQU47QUFDQUQsaUNBQTZCLGtDQUFtQixFQUFFQyxvQkFBRixFQUFuQixDQUE3QjtBQUNELEdBSEQsQ0FHRSxPQUFPQyxDQUFQLEVBQVU7QUFDVjtBQUNBQyxZQUFRQyxLQUFSLENBQWNGLENBQWQ7QUFDRDs7QUFFRCxTQUFPRiwwQkFBUDtBQUNELENBWkQ7O0FBY0FGLFFBQVEsVUFBUixJQUFzQixFQUF0QjtBQUNBQSxRQUFRLFlBQVIsSUFBd0IsSUFBeEIiLCJmaWxlIjoieG1sVG9Kc29uQ29udmVydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHhtbFRvSnNvbkNvbnZlcnRlciBmcm9tICcuLy4uLy4uL21haW4vbGliL3htbFRvSnNvbkNvbnZlcnRlcidcbmltcG9ydCB7IHBhcnNlU3RyaW5nIH0gZnJvbSAneG1sMmpzJ1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG4gIGxldCB4bWxUb0pzb25Db252ZXJ0ZXJJbnN0YW5jZSA9IG51bGxcblxuICB0cnkge1xuICAgIGNvbnN0IGNvbnZlcnRlciA9IHBhcnNlU3RyaW5nXG4gICAgeG1sVG9Kc29uQ29udmVydGVySW5zdGFuY2UgPSB4bWxUb0pzb25Db252ZXJ0ZXIoeyBjb252ZXJ0ZXIgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihlKVxuICB9XG5cbiAgcmV0dXJuIHhtbFRvSnNvbkNvbnZlcnRlckluc3RhbmNlXG59XG5cbmV4cG9ydHNbJ0ByZXF1aXJlJ10gPSBbXVxuZXhwb3J0c1snQHNpbmdsZXRvbiddID0gdHJ1ZVxuIl19