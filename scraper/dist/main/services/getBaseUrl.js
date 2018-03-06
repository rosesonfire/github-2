"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Parses url and returns the baseUrl
exports.default = function (_ref) {
  var urlParser = _ref.urlParser;
  return async function (url) {
    var _ref2 = await urlParser(url),
        protocol = _ref2.protocol,
        hostname = _ref2.hostname;

    var baseUrl = protocol + "//" + hostname + "/";

    return baseUrl;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL2dldEJhc2VVcmwuanMiXSwibmFtZXMiOlsidXJsUGFyc2VyIiwidXJsIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsImJhc2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO2tCQUNlO0FBQUEsTUFBR0EsU0FBSCxRQUFHQSxTQUFIO0FBQUEsU0FBbUIsZ0JBQU9DLEdBQVAsRUFBZTtBQUFBLGdCQUNoQixNQUFNRCxVQUFVQyxHQUFWLENBRFU7QUFBQSxRQUN2Q0MsUUFEdUMsU0FDdkNBLFFBRHVDO0FBQUEsUUFDN0JDLFFBRDZCLFNBQzdCQSxRQUQ2Qjs7QUFFL0MsUUFBTUMsVUFBYUYsUUFBYixVQUEwQkMsUUFBMUIsTUFBTjs7QUFFQSxXQUFPQyxPQUFQO0FBQ0QsR0FMYztBQUFBLEMiLCJmaWxlIjoiZ2V0QmFzZVVybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBhcnNlcyB1cmwgYW5kIHJldHVybnMgdGhlIGJhc2VVcmxcbmV4cG9ydCBkZWZhdWx0ICh7IHVybFBhcnNlciB9KSA9PiBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lIH0gPSBhd2FpdCB1cmxQYXJzZXIodXJsKVxuICBjb25zdCBiYXNlVXJsID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS9gXG5cbiAgcmV0dXJuIGJhc2VVcmxcbn1cbiJdfQ==