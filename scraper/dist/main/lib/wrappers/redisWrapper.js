"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

        return new Promise(function (resolve, reject) {
          try {
            client.hmset.apply(client, args.concat([function (err, replies) {
              if (err) {
                reject(err);
              } else {
                resolve(replies);
              }
            }]));
          } catch (e) {
            reject(e);
          }
        });
      }
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi93cmFwcGVycy9yZWRpc1dyYXBwZXIuanMiXSwibmFtZXMiOlsicmVkaXMiLCJob3N0IiwicG9ydCIsImNsaWVudCIsImhtc2V0IiwiYXJncyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwicmVwbGllcyIsImUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO2tCQUNlO0FBQUEsTUFBR0EsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZSxpQkFBb0I7QUFBQSxRQUFqQkMsSUFBaUIsU0FBakJBLElBQWlCO0FBQUEsUUFBWEMsSUFBVyxTQUFYQSxJQUFXOztBQUNoRCxRQUFNQyxTQUFTSCxNQUFNLEVBQUVDLFVBQUYsRUFBUUMsVUFBUixFQUFOLENBQWY7QUFDQSxXQUFPO0FBQ0xFLGFBQU87QUFBQSwwQ0FBSUMsSUFBSjtBQUFJQSxjQUFKO0FBQUE7O0FBQUEsZUFBYSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ25ELGNBQUk7QUFDRkwsbUJBQU9DLEtBQVAsZUFBZ0JDLElBQWhCLFNBQXNCLFVBQUNJLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUN0QyxrQkFBSUQsR0FBSixFQUFTO0FBQ1BELHVCQUFPQyxHQUFQO0FBQ0QsZUFGRCxNQUVPO0FBQ0xGLHdCQUFRRyxPQUFSO0FBQ0Q7QUFDRixhQU5EO0FBT0QsV0FSRCxDQVFFLE9BQU9DLENBQVAsRUFBVTtBQUNWSCxtQkFBT0csQ0FBUDtBQUNEO0FBQ0YsU0FabUIsQ0FBYjtBQUFBO0FBREYsS0FBUDtBQWVELEdBakJjO0FBQUEsQyIsImZpbGUiOiJyZWRpc1dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZXBsYWNlcyB0aGUgcmVkaXMgY2xpZW50IGRlZmF1bHQgZnVuY3Rpb25zIHdpdGggcHJvbWlzZSBvcmllbnRlZCBmdW5jdGlvbnNcbmV4cG9ydCBkZWZhdWx0ICh7IHJlZGlzIH0pID0+ICh7IGhvc3QsIHBvcnQgfSkgPT4ge1xuICBjb25zdCBjbGllbnQgPSByZWRpcyh7IGhvc3QsIHBvcnQgfSlcbiAgcmV0dXJuIHtcbiAgICBobXNldDogKC4uLmFyZ3MpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNsaWVudC5obXNldCguLi5hcmdzLCAoZXJyLCByZXBsaWVzKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXBsaWVzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19