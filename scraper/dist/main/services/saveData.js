"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Persists the data through the data api
exports.default = function (_ref) {
  var http = _ref.http,
      url = _ref.url;
  return async function (data) {
    return http.postWithPolling(url, { data: data });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL3NhdmVEYXRhLmpzIl0sIm5hbWVzIjpbImh0dHAiLCJ1cmwiLCJkYXRhIiwicG9zdFdpdGhQb2xsaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtrQkFDZTtBQUFBLE1BQUdBLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLEdBQVQsUUFBU0EsR0FBVDtBQUFBLFNBQW1CLGdCQUFPQyxJQUFQO0FBQUEsV0FDaENGLEtBQUtHLGVBQUwsQ0FBcUJGLEdBQXJCLEVBQTBCLEVBQUVDLFVBQUYsRUFBMUIsQ0FEZ0M7QUFBQSxHQUFuQjtBQUFBLEMiLCJmaWxlIjoic2F2ZURhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQZXJzaXN0cyB0aGUgZGF0YSB0aHJvdWdoIHRoZSBkYXRhIGFwaVxuZXhwb3J0IGRlZmF1bHQgKHsgaHR0cCwgdXJsIH0pID0+IGFzeW5jIChkYXRhKSA9PlxuICBodHRwLnBvc3RXaXRoUG9sbGluZyh1cmwsIHsgZGF0YSB9KVxuIl19