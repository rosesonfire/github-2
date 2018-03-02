'use strict';

var _redisWrapper = require('./../../../main/lib/wrappers/redisWrapper');

var _redisWrapper2 = _interopRequireDefault(_redisWrapper);

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = function () {
  var redisWrapperInstance = null;

  try {
    var redisClientCreator = _redis2.default.createClient.bind(_redis2.default);
    redisWrapperInstance = (0, _redisWrapper2.default)({ redis: redisClientCreator });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return redisWrapperInstance;
};

exports['@require'] = [];
exports['@singleton'] = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pb2MvbGliL3dyYXBwZXJzL3JlZGlzV3JhcHBlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwicmVkaXNXcmFwcGVySW5zdGFuY2UiLCJyZWRpc0NsaWVudENyZWF0b3IiLCJjcmVhdGVDbGllbnQiLCJiaW5kIiwicmVkaXMiLCJlIiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLFlBQU07QUFDL0IsTUFBSUUsdUJBQXVCLElBQTNCOztBQUVBLE1BQUk7QUFDRixRQUFNQyxxQkFBcUIsZ0JBQU1DLFlBQU4sQ0FBbUJDLElBQW5CLGlCQUEzQjtBQUNBSCwyQkFBdUIsNEJBQWEsRUFBRUksT0FBT0gsa0JBQVQsRUFBYixDQUF2QjtBQUNELEdBSEQsQ0FHRSxPQUFPSSxDQUFQLEVBQVU7QUFDVjtBQUNBQyxZQUFRQyxLQUFSLENBQWNGLENBQWQ7QUFDRDs7QUFFRCxTQUFPTCxvQkFBUDtBQUNELENBWkQ7O0FBY0FGLFFBQVEsVUFBUixJQUFzQixFQUF0QjtBQUNBQSxRQUFRLFlBQVIsSUFBd0IsSUFBeEIiLCJmaWxlIjoicmVkaXNXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZGlzV3JhcHBlciBmcm9tICcuLy4uLy4uLy4uL21haW4vbGliL3dyYXBwZXJzL3JlZGlzV3JhcHBlcidcbmltcG9ydCByZWRpcyBmcm9tICdyZWRpcydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuICBsZXQgcmVkaXNXcmFwcGVySW5zdGFuY2UgPSBudWxsXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZWRpc0NsaWVudENyZWF0b3IgPSByZWRpcy5jcmVhdGVDbGllbnQuYmluZChyZWRpcylcbiAgICByZWRpc1dyYXBwZXJJbnN0YW5jZSA9IHJlZGlzV3JhcHBlcih7IHJlZGlzOiByZWRpc0NsaWVudENyZWF0b3IgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihlKVxuICB9XG5cbiAgcmV0dXJuIHJlZGlzV3JhcHBlckluc3RhbmNlXG59XG5cbmV4cG9ydHNbJ0ByZXF1aXJlJ10gPSBbXVxuZXhwb3J0c1snQHNpbmdsZXRvbiddID0gdHJ1ZVxuIl19