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
    },
    quit: async function quit() {
      return client.quit();
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi93cmFwcGVycy9yZWRpc0NsaWVudFdyYXBwZXIuanMiXSwibmFtZXMiOlsicmVkaXMiLCJob3N0IiwicG9ydCIsImNsaWVudCIsImNyZWF0ZUNsaWVudCIsImhtc2V0IiwiYXJncyIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJyZXBsaWVzIiwicXVpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtrQkFDZSxnQkFBMkI7QUFBQSxNQUF4QkEsS0FBd0IsUUFBeEJBLEtBQXdCO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDeEMsTUFBTUMsU0FBU0gsTUFBTUksWUFBTixDQUFtQixFQUFFSCxVQUFGLEVBQVFDLFVBQVIsRUFBbkIsQ0FBZjtBQUNBLFNBQU87QUFDTEcsV0FBTztBQUFBLHdDQUFJQyxJQUFKO0FBQUlBLFlBQUo7QUFBQTs7QUFBQSxhQUFhLG1DQUF1QixVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDOURMLGVBQU9FLEtBQVAsZUFBZ0JDLElBQWhCLFNBQXNCLFVBQUNHLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUN0QyxjQUFJRCxHQUFKLEVBQVM7QUFDUEQsbUJBQU9DLEdBQVA7QUFDRCxXQUZELE1BRU87QUFDTEYsb0JBQVFHLE9BQVI7QUFDRDtBQUNGLFNBTkQ7QUFPRCxPQVJtQixDQUFiO0FBQUEsS0FERjtBQVVMQyxVQUFNO0FBQUEsYUFBWVIsT0FBT1EsSUFBUCxFQUFaO0FBQUE7QUFWRCxHQUFQO0FBWUQsQyIsImZpbGUiOiJyZWRpc0NsaWVudFdyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEZWZlbnNpdmVQcm9taXNlIH0gZnJvbSAnLi8uLi8uLi91dGlscydcblxuLy8gV3JhcHBlciBmb3IgdGhlIG5wbSBwYWNrYWdlICdyZWRpcydcbi8vIFJlcGxhY2VzIHRoZSByZWRpcyBjbGllbnQgZGVmYXVsdCBmdW5jdGlvbnMgd2l0aCBwcm9taXNlIG9yaWVudGVkIGZ1bmN0aW9uc1xuZXhwb3J0IGRlZmF1bHQgKHsgcmVkaXMsIGhvc3QsIHBvcnQgfSkgPT4ge1xuICBjb25zdCBjbGllbnQgPSByZWRpcy5jcmVhdGVDbGllbnQoeyBob3N0LCBwb3J0IH0pXG4gIHJldHVybiB7XG4gICAgaG1zZXQ6ICguLi5hcmdzKSA9PiBjcmVhdGVEZWZlbnNpdmVQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNsaWVudC5obXNldCguLi5hcmdzLCAoZXJyLCByZXBsaWVzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbGllcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KSxcbiAgICBxdWl0OiBhc3luYyAoKSA9PiBjbGllbnQucXVpdCgpXG4gIH1cbn1cbiJdfQ==