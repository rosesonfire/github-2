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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL2xpYi9kYXRhRmV0Y2hlci5qcyJdLCJuYW1lcyI6WyJodHRwR2V0dGVyIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtrQkFDZTtBQUFBLE1BQUdBLFVBQUgsUUFBR0EsVUFBSDtBQUFBLFNBQW9CO0FBQUEsUUFBU0MsR0FBVCxTQUFTQSxHQUFUO0FBQUEsV0FBbUJELFdBQVdDLEdBQVgsQ0FBbkI7QUFBQSxHQUFwQjtBQUFBLEMiLCJmaWxlIjoiZGF0YUZldGNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGZXRjaGVzIGRhdGEgZnJvbSBnaXZlbiB1cmxcbmV4cG9ydCBkZWZhdWx0ICh7IGh0dHBHZXR0ZXIgfSkgPT4gYXN5bmMgKHsgdXJsIH0pID0+IGh0dHBHZXR0ZXIodXJsKVxuIl19