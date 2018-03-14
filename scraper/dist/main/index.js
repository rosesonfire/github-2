'use strict';

var _rxjs = require('rxjs');

var _rxjs2 = _interopRequireDefault(_rxjs);

var _ioc = require('./../ioc');

var _utils = require('./utils');

var _config = require('./../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Start scrapping
// TODO: this is not going to work because
//    1. the sleep is synchronous (verify though..)
//    2. the internal promises don't get resolved before going to
//       next sleep cycle... :( (verify though..)
(0, _utils.createDefensivePromise)(async function (resolve, reject) {
  var scrape = await _ioc.dependencies.scrape;

  _rxjs2.default.Observable.interval(_config2.default.scraper.fetchInterval)
  // .take(10) // used while testing
  .map(function (_) {
    return scrape();
  })
  // eslint-disable-next-line no-console
  .catch(function (e) {
    return console.error(e);
  })
  // .takeLast(1) // used while testing
  // .map(resolve) // used while testing
  .subscribe(function (response) {
    return response
    // eslint-disable-next-line no-console
    .then(function (response) {
      return console.log(response);
    })
    // eslint-disable-next-line no-console
    .catch(function (er) {
      return console.error(er);
    });
  });
})
// eslint-disable-next-line no-console
.catch(function (e) {
  return console.error(e);
});
// .then(response => console.log(response)) // used while testing
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlc29sdmUiLCJyZWplY3QiLCJzY3JhcGUiLCJPYnNlcnZhYmxlIiwiaW50ZXJ2YWwiLCJzY3JhcGVyIiwiZmV0Y2hJbnRlcnZhbCIsIm1hcCIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwiZSIsInN1YnNjcmliZSIsInJlc3BvbnNlIiwidGhlbiIsImxvZyIsImVyIl0sIm1hcHBpbmdzIjoiOztBQUlBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFRQSxtQ0FBdUIsZ0JBQU9BLE9BQVAsRUFBZ0JDLE1BQWhCLEVBQTJCO0FBQ2hELE1BQU1DLFNBQVMsTUFBTSxrQkFBYUEsTUFBbEM7O0FBRUEsaUJBQUdDLFVBQUgsQ0FDR0MsUUFESCxDQUNZLGlCQUFPQyxPQUFQLENBQWVDLGFBRDNCO0FBRUU7QUFGRixHQUdHQyxHQUhILENBR087QUFBQSxXQUFLTCxRQUFMO0FBQUEsR0FIUDtBQUlFO0FBSkYsR0FLR00sS0FMSCxDQUtTO0FBQUEsV0FBS0MsUUFBUUMsS0FBUixDQUFjQyxDQUFkLENBQUw7QUFBQSxHQUxUO0FBTUU7QUFDQTtBQVBGLEdBUUdDLFNBUkgsQ0FRYTtBQUFBLFdBQ1RDO0FBQ0U7QUFERixLQUVHQyxJQUZILENBRVE7QUFBQSxhQUFZTCxRQUFRTSxHQUFSLENBQVlGLFFBQVosQ0FBWjtBQUFBLEtBRlI7QUFHRTtBQUhGLEtBSUdMLEtBSkgsQ0FJUztBQUFBLGFBQU1DLFFBQVFDLEtBQVIsQ0FBY00sRUFBZCxDQUFOO0FBQUEsS0FKVCxDQURTO0FBQUEsR0FSYjtBQWNELENBakJEO0FBa0JFO0FBbEJGLENBbUJHUixLQW5CSCxDQW1CUztBQUFBLFNBQUtDLFFBQVFDLEtBQVIsQ0FBY0MsQ0FBZCxDQUFMO0FBQUEsQ0FuQlQ7QUFvQkUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPOiB0aGlzIGlzIG5vdCBnb2luZyB0byB3b3JrIGJlY2F1c2Vcbi8vICAgIDEuIHRoZSBzbGVlcCBpcyBzeW5jaHJvbm91cyAodmVyaWZ5IHRob3VnaC4uKVxuLy8gICAgMi4gdGhlIGludGVybmFsIHByb21pc2VzIGRvbid0IGdldCByZXNvbHZlZCBiZWZvcmUgZ29pbmcgdG9cbi8vICAgICAgIG5leHQgc2xlZXAgY3ljbGUuLi4gOiggKHZlcmlmeSB0aG91Z2guLilcbmltcG9ydCBSeCBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBkZXBlbmRlbmNpZXMgfSBmcm9tICcuLy4uL2lvYydcbmltcG9ydCB7IGNyZWF0ZURlZmVuc2l2ZVByb21pc2UgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLy4uL2NvbmZpZydcblxuLy8gU3RhcnQgc2NyYXBwaW5nXG5jcmVhdGVEZWZlbnNpdmVQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgY29uc3Qgc2NyYXBlID0gYXdhaXQgZGVwZW5kZW5jaWVzLnNjcmFwZVxuXG4gIFJ4Lk9ic2VydmFibGVcbiAgICAuaW50ZXJ2YWwoY29uZmlnLnNjcmFwZXIuZmV0Y2hJbnRlcnZhbClcbiAgICAvLyAudGFrZSgxMCkgLy8gdXNlZCB3aGlsZSB0ZXN0aW5nXG4gICAgLm1hcChfID0+IHNjcmFwZSgpKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSlcbiAgICAvLyAudGFrZUxhc3QoMSkgLy8gdXNlZCB3aGlsZSB0ZXN0aW5nXG4gICAgLy8gLm1hcChyZXNvbHZlKSAvLyB1c2VkIHdoaWxlIHRlc3RpbmdcbiAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+XG4gICAgICByZXNwb25zZVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIC5jYXRjaChlciA9PiBjb25zb2xlLmVycm9yKGVyKSkpXG59KVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKVxuICAvLyAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpIC8vIHVzZWQgd2hpbGUgdGVzdGluZ1xuIl19