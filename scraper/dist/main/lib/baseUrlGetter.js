'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Parses url and returns the baseUrl
exports.default = function (_ref) {
  var urlParser = _ref.urlParser;
  return async function (_ref2) {
    var url = _ref2.url;

    var _ref3 = await urlParser(url),
        hostname = _ref3.hostname;

    var baseUrl = hostname + '/';
    return baseUrl;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL2xpYi9iYXNlVXJsR2V0dGVyLmpzIl0sIm5hbWVzIjpbInVybFBhcnNlciIsInVybCIsImhvc3RuYW1lIiwiYmFzZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7a0JBQ2U7QUFBQSxNQUFHQSxTQUFILFFBQUdBLFNBQUg7QUFBQSxTQUFtQix1QkFBbUI7QUFBQSxRQUFWQyxHQUFVLFNBQVZBLEdBQVU7O0FBQUEsZ0JBQzlCLE1BQU1ELFVBQVVDLEdBQVYsQ0FEd0I7QUFBQSxRQUMzQ0MsUUFEMkMsU0FDM0NBLFFBRDJDOztBQUVuRCxRQUFNQyxVQUFVRCxXQUFXLEdBQTNCO0FBQ0EsV0FBT0MsT0FBUDtBQUNELEdBSmM7QUFBQSxDIiwiZmlsZSI6ImJhc2VVcmxHZXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYXJzZXMgdXJsIGFuZCByZXR1cm5zIHRoZSBiYXNlVXJsXG5leHBvcnQgZGVmYXVsdCAoeyB1cmxQYXJzZXIgfSkgPT4gYXN5bmMgKHsgdXJsIH0pID0+IHtcbiAgY29uc3QgeyBob3N0bmFtZSB9ID0gYXdhaXQgdXJsUGFyc2VyKHVybClcbiAgY29uc3QgYmFzZVVybCA9IGhvc3RuYW1lICsgJy8nXG4gIHJldHVybiBiYXNlVXJsXG59XG4iXX0=