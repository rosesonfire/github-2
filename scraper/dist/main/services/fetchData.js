"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Fetches data from given url
exports.default = function (_ref) {
  var http = _ref.http;
  return async function (url) {
    return http.get(url);
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL2ZldGNoRGF0YS5qcyJdLCJuYW1lcyI6WyJodHRwIiwidXJsIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtrQkFDZTtBQUFBLE1BQUdBLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWMsZ0JBQU9DLEdBQVA7QUFBQSxXQUFlRCxLQUFLRSxHQUFMLENBQVNELEdBQVQsQ0FBZjtBQUFBLEdBQWQ7QUFBQSxDIiwiZmlsZSI6ImZldGNoRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZldGNoZXMgZGF0YSBmcm9tIGdpdmVuIHVybFxuZXhwb3J0IGRlZmF1bHQgKHsgaHR0cCB9KSA9PiBhc3luYyAodXJsKSA9PiBodHRwLmdldCh1cmwpXG4iXX0=