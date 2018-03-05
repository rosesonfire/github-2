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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL2RhdGFGZXRjaGVyLmpzIl0sIm5hbWVzIjpbImh0dHBHZXR0ZXIiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO2tCQUNlO0FBQUEsTUFBR0EsVUFBSCxRQUFHQSxVQUFIO0FBQUEsU0FBb0I7QUFBQSxRQUFTQyxHQUFULFNBQVNBLEdBQVQ7QUFBQSxXQUFtQkQsV0FBV0MsR0FBWCxDQUFuQjtBQUFBLEdBQXBCO0FBQUEsQyIsImZpbGUiOiJkYXRhRmV0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZldGNoZXMgZGF0YSBmcm9tIGdpdmVuIHVybFxuZXhwb3J0IGRlZmF1bHQgKHsgaHR0cEdldHRlciB9KSA9PiBhc3luYyAoeyB1cmwgfSkgPT4gaHR0cEdldHRlcih1cmwpXG4iXX0=