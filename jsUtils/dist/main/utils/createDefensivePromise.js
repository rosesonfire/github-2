"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Creates a new promise object
exports.default = function (executorFunc) {
  return new Promise(function (resolve, reject) {
    try {
      Promise.resolve(executorFunc(resolve, reject)).catch(function (err) {
        return reject(err);
      });
    } catch (e) {
      reject(e);
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3V0aWxzL2NyZWF0ZURlZmVuc2l2ZVByb21pc2UuanMiXSwibmFtZXMiOlsiZXhlY3V0b3JGdW5jIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjYXRjaCIsImVyciIsImUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO2tCQUNlLFVBQUNBLFlBQUQ7QUFBQSxTQUNiLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDL0IsUUFBSTtBQUNGRixjQUFRQyxPQUFSLENBQWdCRixhQUFhRSxPQUFiLEVBQXNCQyxNQUF0QixDQUFoQixFQUErQ0MsS0FBL0MsQ0FBcUQ7QUFBQSxlQUFPRCxPQUFPRSxHQUFQLENBQVA7QUFBQSxPQUFyRDtBQUNELEtBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDVkgsYUFBT0csQ0FBUDtBQUNEO0FBQ0YsR0FORCxDQURhO0FBQUEsQyIsImZpbGUiOiJjcmVhdGVEZWZlbnNpdmVQcm9taXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlcyBhIG5ldyBwcm9taXNlIG9iamVjdFxuZXhwb3J0IGRlZmF1bHQgKGV4ZWN1dG9yRnVuYykgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0b3JGdW5jKHJlc29sdmUsIHJlamVjdCkpLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZSlcbiAgICB9XG4gIH0pXG4iXX0=