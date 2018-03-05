'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

// Wrapper for the npm package 'redis'
// Replaces the redis client default functions with promise oriented functions
exports.default = function (_ref) {
  var redis = _ref.redis,
      host = _ref.host,
      port = _ref.port;

  var client = redis.createClient({ host: host, port: port });
  return {
    hmset: function hmset() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (0, _utils.createDefensivePromise)(function (resolve, reject) {
        client.hmset.apply(client, args.concat([function (err, replies) {
          if (err) {
            reject(err);
          } else {
            resolve(replies);
          }
        }]));
      });
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi93cmFwcGVycy9yZWRpc0NsaWVudFdyYXBwZXIuanMiXSwibmFtZXMiOlsicmVkaXMiLCJob3N0IiwicG9ydCIsImNsaWVudCIsImNyZWF0ZUNsaWVudCIsImhtc2V0IiwiYXJncyIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJyZXBsaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTtBQUNBO2tCQUNlLGdCQUEyQjtBQUFBLE1BQXhCQSxLQUF3QixRQUF4QkEsS0FBd0I7QUFBQSxNQUFqQkMsSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUN4QyxNQUFNQyxTQUFTSCxNQUFNSSxZQUFOLENBQW1CLEVBQUVILFVBQUYsRUFBUUMsVUFBUixFQUFuQixDQUFmO0FBQ0EsU0FBTztBQUNMRyxXQUFPO0FBQUEsd0NBQUlDLElBQUo7QUFBSUEsWUFBSjtBQUFBOztBQUFBLGFBQWEsbUNBQXVCLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUM5REwsZUFBT0UsS0FBUCxlQUFnQkMsSUFBaEIsU0FBc0IsVUFBQ0csR0FBRCxFQUFNQyxPQUFOLEVBQWtCO0FBQ3RDLGNBQUlELEdBQUosRUFBUztBQUNQRCxtQkFBT0MsR0FBUDtBQUNELFdBRkQsTUFFTztBQUNMRixvQkFBUUcsT0FBUjtBQUNEO0FBQ0YsU0FORDtBQU9ELE9BUm1CLENBQWI7QUFBQTtBQURGLEdBQVA7QUFXRCxDIiwiZmlsZSI6InJlZGlzQ2xpZW50V3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURlZmVuc2l2ZVByb21pc2UgfSBmcm9tICcuLy4uLy4uL3V0aWxzJ1xuXG4vLyBXcmFwcGVyIGZvciB0aGUgbnBtIHBhY2thZ2UgJ3JlZGlzJ1xuLy8gUmVwbGFjZXMgdGhlIHJlZGlzIGNsaWVudCBkZWZhdWx0IGZ1bmN0aW9ucyB3aXRoIHByb21pc2Ugb3JpZW50ZWQgZnVuY3Rpb25zXG5leHBvcnQgZGVmYXVsdCAoeyByZWRpcywgaG9zdCwgcG9ydCB9KSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IHJlZGlzLmNyZWF0ZUNsaWVudCh7IGhvc3QsIHBvcnQgfSlcbiAgcmV0dXJuIHtcbiAgICBobXNldDogKC4uLmFyZ3MpID0+IGNyZWF0ZURlZmVuc2l2ZVByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2xpZW50Lmhtc2V0KC4uLmFyZ3MsIChlcnIsIHJlcGxpZXMpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXBsaWVzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==