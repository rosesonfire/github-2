'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Parses url and returns the baseUrl
exports.default = function (_ref) {
  var urlParser = _ref.urlParser;
  return async function (_ref2) {
    var url = _ref2.url;

    var _urlParser = urlParser(url),
        hostname = _urlParser.hostname;

    var baseUrl = hostname + '/';
    return baseUrl;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL2xpYi9iYXNlVXJsR2V0dGVyLmpzIl0sIm5hbWVzIjpbInVybFBhcnNlciIsInVybCIsImhvc3RuYW1lIiwiYmFzZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7a0JBQ2U7QUFBQSxNQUFHQSxTQUFILFFBQUdBLFNBQUg7QUFBQSxTQUFtQix1QkFBbUI7QUFBQSxRQUFWQyxHQUFVLFNBQVZBLEdBQVU7O0FBQUEscUJBQzlCRCxVQUFVQyxHQUFWLENBRDhCO0FBQUEsUUFDM0NDLFFBRDJDLGNBQzNDQSxRQUQyQzs7QUFFbkQsUUFBTUMsVUFBVUQsV0FBVyxHQUEzQjtBQUNBLFdBQU9DLE9BQVA7QUFDRCxHQUpjO0FBQUEsQyIsImZpbGUiOiJiYXNlVXJsR2V0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFyc2VzIHVybCBhbmQgcmV0dXJucyB0aGUgYmFzZVVybFxuZXhwb3J0IGRlZmF1bHQgKHsgdXJsUGFyc2VyIH0pID0+IGFzeW5jICh7IHVybCB9KSA9PiB7XG4gIGNvbnN0IHsgaG9zdG5hbWUgfSA9IHVybFBhcnNlcih1cmwpXG4gIGNvbnN0IGJhc2VVcmwgPSBob3N0bmFtZSArICcvJ1xuICByZXR1cm4gYmFzZVVybFxufVxuIl19