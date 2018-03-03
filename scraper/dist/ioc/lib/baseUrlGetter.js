'use strict';

var _baseUrlGetter = require('./../../main/lib/baseUrlGetter');

var _baseUrlGetter2 = _interopRequireDefault(_baseUrlGetter);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = function () {
  var baseUrlGetterInstance = null;

  try {
    var urlParser = _url2.default.parse.bind(_url2.default);
    baseUrlGetterInstance = (0, _baseUrlGetter2.default)({ urlParser: urlParser });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return baseUrlGetterInstance;
};

exports['@require'] = [];
exports['@singleton'] = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2MvbGliL2Jhc2VVcmxHZXR0ZXIuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIm1vZHVsZSIsImJhc2VVcmxHZXR0ZXJJbnN0YW5jZSIsInVybFBhcnNlciIsInBhcnNlIiwiYmluZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUFBLFVBQVVDLE9BQU9ELE9BQVAsR0FBaUIsWUFBTTtBQUMvQixNQUFJRSx3QkFBd0IsSUFBNUI7O0FBRUEsTUFBSTtBQUNGLFFBQU1DLFlBQVksY0FBSUMsS0FBSixDQUFVQyxJQUFWLGVBQWxCO0FBQ0FILDRCQUF3Qiw2QkFBYyxFQUFFQyxvQkFBRixFQUFkLENBQXhCO0FBQ0QsR0FIRCxDQUdFLE9BQU9HLENBQVAsRUFBVTtBQUNWO0FBQ0FDLFlBQVFDLEtBQVIsQ0FBY0YsQ0FBZDtBQUNEOztBQUVELFNBQU9KLHFCQUFQO0FBQ0QsQ0FaRDs7QUFjQUYsUUFBUSxVQUFSLElBQXNCLEVBQXRCO0FBQ0FBLFFBQVEsWUFBUixJQUF3QixJQUF4QiIsImZpbGUiOiJiYXNlVXJsR2V0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VVcmxHZXR0ZXIgZnJvbSAnLi8uLi8uLi9tYWluL2xpYi9iYXNlVXJsR2V0dGVyJ1xuaW1wb3J0IHVybCBmcm9tICd1cmwnXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcbiAgbGV0IGJhc2VVcmxHZXR0ZXJJbnN0YW5jZSA9IG51bGxcblxuICB0cnkge1xuICAgIGNvbnN0IHVybFBhcnNlciA9IHVybC5wYXJzZS5iaW5kKHVybClcbiAgICBiYXNlVXJsR2V0dGVySW5zdGFuY2UgPSBiYXNlVXJsR2V0dGVyKHsgdXJsUGFyc2VyIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgfVxuXG4gIHJldHVybiBiYXNlVXJsR2V0dGVySW5zdGFuY2Vcbn1cblxuZXhwb3J0c1snQHJlcXVpcmUnXSA9IFtdXG5leHBvcnRzWydAc2luZ2xldG9uJ10gPSB0cnVlXG4iXX0=