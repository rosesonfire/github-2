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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL2Jhc2VVcmxHZXR0ZXIuanMiXSwibmFtZXMiOlsidXJsUGFyc2VyIiwidXJsIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsImJhc2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO2tCQUNlO0FBQUEsTUFBR0EsU0FBSCxRQUFHQSxTQUFIO0FBQUEsU0FBbUIsdUJBQW1CO0FBQUEsUUFBVkMsR0FBVSxTQUFWQSxHQUFVOztBQUFBLGdCQUNwQixNQUFNRCxVQUFVQyxHQUFWLENBRGM7QUFBQSxRQUMzQ0MsUUFEMkMsU0FDM0NBLFFBRDJDO0FBQUEsUUFDakNDLFFBRGlDLFNBQ2pDQSxRQURpQzs7QUFFbkQsUUFBTUMsVUFBYUYsUUFBYixVQUEwQkMsUUFBMUIsTUFBTjtBQUNBLFdBQU9DLE9BQVA7QUFDRCxHQUpjO0FBQUEsQyIsImZpbGUiOiJiYXNlVXJsR2V0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFyc2VzIHVybCBhbmQgcmV0dXJucyB0aGUgYmFzZVVybFxuZXhwb3J0IGRlZmF1bHQgKHsgdXJsUGFyc2VyIH0pID0+IGFzeW5jICh7IHVybCB9KSA9PiB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lIH0gPSBhd2FpdCB1cmxQYXJzZXIodXJsKVxuICBjb25zdCBiYXNlVXJsID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS9gXG4gIHJldHVybiBiYXNlVXJsXG59XG4iXX0=