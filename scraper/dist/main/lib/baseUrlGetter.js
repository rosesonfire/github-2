"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Parses url and returns the baseUrl
exports.default = function (_ref) {
  var urlParser = _ref.urlParser;
  return async function (_ref2) {
    var url = _ref2.url;

    var _ref3 = await urlParser(url),
        protocol = _ref3.protocol,
        hostname = _ref3.hostname;

    var baseUrl = protocol + "//" + hostname + "/";
    return baseUrl;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL2xpYi9iYXNlVXJsR2V0dGVyLmpzIl0sIm5hbWVzIjpbInVybFBhcnNlciIsInVybCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJiYXNlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtrQkFDZTtBQUFBLE1BQUdBLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFNBQW1CLHVCQUFtQjtBQUFBLFFBQVZDLEdBQVUsU0FBVkEsR0FBVTs7QUFBQSxnQkFDcEIsTUFBTUQsVUFBVUMsR0FBVixDQURjO0FBQUEsUUFDM0NDLFFBRDJDLFNBQzNDQSxRQUQyQztBQUFBLFFBQ2pDQyxRQURpQyxTQUNqQ0EsUUFEaUM7O0FBRW5ELFFBQU1DLFVBQWFGLFFBQWIsVUFBMEJDLFFBQTFCLE1BQU47QUFDQSxXQUFPQyxPQUFQO0FBQ0QsR0FKYztBQUFBLEMiLCJmaWxlIjoiYmFzZVVybEdldHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBhcnNlcyB1cmwgYW5kIHJldHVybnMgdGhlIGJhc2VVcmxcbmV4cG9ydCBkZWZhdWx0ICh7IHVybFBhcnNlciB9KSA9PiBhc3luYyAoeyB1cmwgfSkgPT4ge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSB9ID0gYXdhaXQgdXJsUGFyc2VyKHVybClcbiAgY29uc3QgYmFzZVVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vYFxuICByZXR1cm4gYmFzZVVybFxufVxuIl19