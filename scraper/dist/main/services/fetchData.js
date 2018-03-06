"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Fetches data from given url
exports.default = function (_ref) {
  var httpGetter = _ref.httpGetter;
  return async function (_ref2) {
    var url = _ref2.url;
    return httpGetter(url);
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL2ZldGNoRGF0YS5qcyJdLCJuYW1lcyI6WyJodHRwR2V0dGVyIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtrQkFDZTtBQUFBLE1BQUdBLFVBQUgsUUFBR0EsVUFBSDtBQUFBLFNBQW9CO0FBQUEsUUFBU0MsR0FBVCxTQUFTQSxHQUFUO0FBQUEsV0FBbUJELFdBQVdDLEdBQVgsQ0FBbkI7QUFBQSxHQUFwQjtBQUFBLEMiLCJmaWxlIjoiZmV0Y2hEYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmV0Y2hlcyBkYXRhIGZyb20gZ2l2ZW4gdXJsXG5leHBvcnQgZGVmYXVsdCAoeyBodHRwR2V0dGVyIH0pID0+IGFzeW5jICh7IHVybCB9KSA9PiBodHRwR2V0dGVyKHVybClcbiJdfQ==