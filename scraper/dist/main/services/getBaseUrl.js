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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL2dldEJhc2VVcmwuanMiXSwibmFtZXMiOlsidXJsUGFyc2VyIiwidXJsIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsImJhc2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO2tCQUNlO0FBQUEsTUFBR0EsU0FBSCxRQUFHQSxTQUFIO0FBQUEsU0FBbUIsdUJBQW1CO0FBQUEsUUFBVkMsR0FBVSxTQUFWQSxHQUFVOztBQUFBLGdCQUNwQixNQUFNRCxVQUFVQyxHQUFWLENBRGM7QUFBQSxRQUMzQ0MsUUFEMkMsU0FDM0NBLFFBRDJDO0FBQUEsUUFDakNDLFFBRGlDLFNBQ2pDQSxRQURpQzs7QUFFbkQsUUFBTUMsVUFBYUYsUUFBYixVQUEwQkMsUUFBMUIsTUFBTjs7QUFFQSxXQUFPQyxPQUFQO0FBQ0QsR0FMYztBQUFBLEMiLCJmaWxlIjoiZ2V0QmFzZVVybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBhcnNlcyB1cmwgYW5kIHJldHVybnMgdGhlIGJhc2VVcmxcbmV4cG9ydCBkZWZhdWx0ICh7IHVybFBhcnNlciB9KSA9PiBhc3luYyAoeyB1cmwgfSkgPT4ge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSB9ID0gYXdhaXQgdXJsUGFyc2VyKHVybClcbiAgY29uc3QgYmFzZVVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vYFxuXG4gIHJldHVybiBiYXNlVXJsXG59XG4iXX0=