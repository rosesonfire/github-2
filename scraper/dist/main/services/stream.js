'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../utils');

// TODO: this is not going to work because
//    1. the sleep is synchronous (verify though..)
//    2. the internal promises don't get resolved before going to
//       next sleep cycle... :( (verify though..)

// Start scrapping
exports.default = function (_ref) {
  var Rx = _ref.Rx,
      scrape = _ref.scrape,
      fetchInterval = _ref.fetchInterval;
  return function () {
    return (0, _utils.createDefensivePromise)(function (resolve, reject) {
      return Rx.Observable.interval(fetchInterval)
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
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL3N0cmVhbS5qcyJdLCJuYW1lcyI6WyJSeCIsInNjcmFwZSIsImZldGNoSW50ZXJ2YWwiLCJyZXNvbHZlIiwicmVqZWN0IiwiT2JzZXJ2YWJsZSIsImludGVydmFsIiwibWFwIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJlIiwic3Vic2NyaWJlIiwicmVzcG9uc2UiLCJ0aGVuIiwibG9nIiwiZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO2tCQUNlO0FBQUEsTUFBR0EsRUFBSCxRQUFHQSxFQUFIO0FBQUEsTUFBT0MsTUFBUCxRQUFPQSxNQUFQO0FBQUEsTUFBZUMsYUFBZixRQUFlQSxhQUFmO0FBQUEsU0FBbUM7QUFBQSxXQUNoRCxtQ0FBdUIsVUFBQ0MsT0FBRCxFQUFVQyxNQUFWO0FBQUEsYUFDckJKLEdBQUdLLFVBQUgsQ0FDR0MsUUFESCxDQUNZSixhQURaO0FBRUU7QUFGRixPQUdHSyxHQUhILENBR087QUFBQSxlQUFLTixRQUFMO0FBQUEsT0FIUDtBQUlFO0FBSkYsT0FLR08sS0FMSCxDQUtTO0FBQUEsZUFBS0MsUUFBUUMsS0FBUixDQUFjQyxDQUFkLENBQUw7QUFBQSxPQUxUO0FBTUU7QUFDQTtBQVBGLE9BUUdDLFNBUkgsQ0FRYTtBQUFBLGVBQ1RDO0FBQ0U7QUFERixTQUVHQyxJQUZILENBRVE7QUFBQSxpQkFBWUwsUUFBUU0sR0FBUixDQUFZRixRQUFaLENBQVo7QUFBQSxTQUZSO0FBR0U7QUFIRixTQUlHTCxLQUpILENBSVM7QUFBQSxpQkFBTUMsUUFBUUMsS0FBUixDQUFjTSxFQUFkLENBQU47QUFBQSxTQUpULENBRFM7QUFBQSxPQVJiLENBRHFCO0FBQUEsS0FBdkIsQ0FEZ0Q7QUFBQSxHQUFuQztBQUFBLEMiLCJmaWxlIjoic3RyZWFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGVmZW5zaXZlUHJvbWlzZSB9IGZyb20gJy4vLi4vdXRpbHMnXG5cbi8vIFRPRE86IHRoaXMgaXMgbm90IGdvaW5nIHRvIHdvcmsgYmVjYXVzZVxuLy8gICAgMS4gdGhlIHNsZWVwIGlzIHN5bmNocm9ub3VzICh2ZXJpZnkgdGhvdWdoLi4pXG4vLyAgICAyLiB0aGUgaW50ZXJuYWwgcHJvbWlzZXMgZG9uJ3QgZ2V0IHJlc29sdmVkIGJlZm9yZSBnb2luZyB0b1xuLy8gICAgICAgbmV4dCBzbGVlcCBjeWNsZS4uLiA6KCAodmVyaWZ5IHRob3VnaC4uKVxuXG4vLyBTdGFydCBzY3JhcHBpbmdcbmV4cG9ydCBkZWZhdWx0ICh7IFJ4LCBzY3JhcGUsIGZldGNoSW50ZXJ2YWwgfSkgPT4gKCkgPT5cbiAgY3JlYXRlRGVmZW5zaXZlUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIFJ4Lk9ic2VydmFibGVcbiAgICAgIC5pbnRlcnZhbChmZXRjaEludGVydmFsKVxuICAgICAgLy8gLnRha2UoMTApIC8vIHVzZWQgd2hpbGUgdGVzdGluZ1xuICAgICAgLm1hcChfID0+IHNjcmFwZSgpKVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpXG4gICAgICAvLyAudGFrZUxhc3QoMSkgLy8gdXNlZCB3aGlsZSB0ZXN0aW5nXG4gICAgICAvLyAubWFwKHJlc29sdmUpIC8vIHVzZWQgd2hpbGUgdGVzdGluZ1xuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PlxuICAgICAgICByZXNwb25zZVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgLmNhdGNoKGVyID0+IGNvbnNvbGUuZXJyb3IoZXIpKSkpXG4iXX0=