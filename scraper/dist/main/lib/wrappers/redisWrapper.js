'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

// Replaces the redis client default functions with promise oriented functions
exports.default = function (_ref) {
  var redis = _ref.redis;
  return function (_ref2) {
    var host = _ref2.host,
        port = _ref2.port;

    var client = redis({ host: host, port: port });
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
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi93cmFwcGVycy9yZWRpc1dyYXBwZXIuanMiXSwibmFtZXMiOlsicmVkaXMiLCJob3N0IiwicG9ydCIsImNsaWVudCIsImhtc2V0IiwiYXJncyIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJyZXBsaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTtrQkFDZTtBQUFBLE1BQUdBLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWUsaUJBQW9CO0FBQUEsUUFBakJDLElBQWlCLFNBQWpCQSxJQUFpQjtBQUFBLFFBQVhDLElBQVcsU0FBWEEsSUFBVzs7QUFDaEQsUUFBTUMsU0FBU0gsTUFBTSxFQUFFQyxVQUFGLEVBQVFDLFVBQVIsRUFBTixDQUFmO0FBQ0EsV0FBTztBQUNMRSxhQUFPO0FBQUEsMENBQUlDLElBQUo7QUFBSUEsY0FBSjtBQUFBOztBQUFBLGVBQWEsbUNBQXVCLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUM5REosaUJBQU9DLEtBQVAsZUFBZ0JDLElBQWhCLFNBQXNCLFVBQUNHLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUN0QyxnQkFBSUQsR0FBSixFQUFTO0FBQ1BELHFCQUFPQyxHQUFQO0FBQ0QsYUFGRCxNQUVPO0FBQ0xGLHNCQUFRRyxPQUFSO0FBQ0Q7QUFDRixXQU5EO0FBT0QsU0FSbUIsQ0FBYjtBQUFBO0FBREYsS0FBUDtBQVdELEdBYmM7QUFBQSxDIiwiZmlsZSI6InJlZGlzV3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURlZmVuc2l2ZVByb21pc2UgfSBmcm9tICcuLy4uLy4uL3V0aWxzJ1xuXG4vLyBSZXBsYWNlcyB0aGUgcmVkaXMgY2xpZW50IGRlZmF1bHQgZnVuY3Rpb25zIHdpdGggcHJvbWlzZSBvcmllbnRlZCBmdW5jdGlvbnNcbmV4cG9ydCBkZWZhdWx0ICh7IHJlZGlzIH0pID0+ICh7IGhvc3QsIHBvcnQgfSkgPT4ge1xuICBjb25zdCBjbGllbnQgPSByZWRpcyh7IGhvc3QsIHBvcnQgfSlcbiAgcmV0dXJuIHtcbiAgICBobXNldDogKC4uLmFyZ3MpID0+IGNyZWF0ZURlZmVuc2l2ZVByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2xpZW50Lmhtc2V0KC4uLmFyZ3MsIChlcnIsIHJlcGxpZXMpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXBsaWVzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==