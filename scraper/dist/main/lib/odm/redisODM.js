'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(flattenObject);

// Generates a flat array of an object's key and values
// Example:
//   { 'name': 'abc', 'code': 56 }
//   is generated as
//   [ 'name', 'abc', 'code', 56 ]
function flattenObject(d) {
  var entries, i, len, entry;
  return regeneratorRuntime.wrap(function flattenObject$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          entries = Object.entries(d);
          i = 0, len = entries.length;

        case 2:
          if (!(i < len)) {
            _context.next = 11;
            break;
          }

          entry = entries[i];
          _context.next = 6;
          return entry[0];

        case 6:
          _context.next = 8;
          return entry[1];

        case 8:
          i++;
          _context.next = 2;
          break;

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

// Persits data to a redis server
// Data has to be a json array
// Example:
//   [
//     { 'name': 'abc', 'code': 56 },
//     { 'name': 'efg', 'code': 84 }
//   ]

exports.default = function (_ref) {
  var redis = _ref.redis;
  return function (_ref2) {
    var host = _ref2.host,
        port = _ref2.port;

    var client = redis({ host: host, port: port });

    // data is the data
    // idKey is the key in the data which will be used as the id in the redis hash
    //   object
    return function (_ref3) {
      var data = _ref3.data,
          idKey = _ref3.idKey;
      return Promise.all(data.map(function (d) {
        return client.hmset.apply(client, [d[idKey]].concat(_toConsumableArray(flattenObject(d))));
      }));
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi9vZG0vcmVkaXNPRE0uanMiXSwibmFtZXMiOlsiZmxhdHRlbk9iamVjdCIsImQiLCJlbnRyaWVzIiwiT2JqZWN0IiwiaSIsImxlbiIsImxlbmd0aCIsImVudHJ5IiwicmVkaXMiLCJob3N0IiwicG9ydCIsImNsaWVudCIsImRhdGEiLCJpZEtleSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJobXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7bURBT1dBLGE7O0FBTFg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVdBLGFBQVgsQ0FBMEJDLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxpQkFEUixHQUNrQkMsT0FBT0QsT0FBUCxDQUFlRCxDQUFmLENBRGxCO0FBRVdHLFdBRlgsR0FFZSxDQUZmLEVBRWtCQyxHQUZsQixHQUV3QkgsUUFBUUksTUFGaEM7O0FBQUE7QUFBQSxnQkFFd0NGLElBQUlDLEdBRjVDO0FBQUE7QUFBQTtBQUFBOztBQUdVRSxlQUhWLEdBR2tCTCxRQUFRRSxDQUFSLENBSGxCO0FBQUE7QUFBQSxpQkFLVUcsTUFBTSxDQUFOLENBTFY7O0FBQUE7QUFBQTtBQUFBLGlCQU1VQSxNQUFNLENBQU4sQ0FOVjs7QUFBQTtBQUVpREgsYUFGakQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrQkFDZTtBQUFBLE1BQUdJLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWUsaUJBQW9CO0FBQUEsUUFBakJDLElBQWlCLFNBQWpCQSxJQUFpQjtBQUFBLFFBQVhDLElBQVcsU0FBWEEsSUFBVzs7QUFDaEQsUUFBTUMsU0FBU0gsTUFBTSxFQUFFQyxVQUFGLEVBQVFDLFVBQVIsRUFBTixDQUFmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQU87QUFBQSxVQUFHRSxJQUFILFNBQUdBLElBQUg7QUFBQSxVQUFTQyxLQUFULFNBQVNBLEtBQVQ7QUFBQSxhQUFxQkMsUUFBUUMsR0FBUixDQUFZSCxLQUFLSSxHQUFMLENBQVM7QUFBQSxlQUFLTCxPQUNuRE0sS0FEbUQsZ0JBQzdDaEIsRUFBRVksS0FBRixDQUQ2Qyw0QkFDaENiLGNBQWNDLENBQWQsQ0FEZ0MsR0FBTDtBQUFBLE9BQVQsQ0FBWixDQUFyQjtBQUFBLEtBQVA7QUFFRCxHQVJjO0FBQUEsQyIsImZpbGUiOiJyZWRpc09ETS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnXG5cbi8vIEdlbmVyYXRlcyBhIGZsYXQgYXJyYXkgb2YgYW4gb2JqZWN0J3Mga2V5IGFuZCB2YWx1ZXNcbi8vIEV4YW1wbGU6XG4vLyAgIHsgJ25hbWUnOiAnYWJjJywgJ2NvZGUnOiA1NiB9XG4vLyAgIGlzIGdlbmVyYXRlZCBhc1xuLy8gICBbICduYW1lJywgJ2FiYycsICdjb2RlJywgNTYgXVxuZnVuY3Rpb24gKiBmbGF0dGVuT2JqZWN0IChkKSB7XG4gIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkKVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gZW50cmllcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1tpXVxuXG4gICAgeWllbGQgZW50cnlbMF1cbiAgICB5aWVsZCBlbnRyeVsxXVxuICB9XG59XG5cbi8vIFBlcnNpdHMgZGF0YSB0byBhIHJlZGlzIHNlcnZlclxuLy8gRGF0YSBoYXMgdG8gYmUgYSBqc29uIGFycmF5XG4vLyBFeGFtcGxlOlxuLy8gICBbXG4vLyAgICAgeyAnbmFtZSc6ICdhYmMnLCAnY29kZSc6IDU2IH0sXG4vLyAgICAgeyAnbmFtZSc6ICdlZmcnLCAnY29kZSc6IDg0IH1cbi8vICAgXVxuZXhwb3J0IGRlZmF1bHQgKHsgcmVkaXMgfSkgPT4gKHsgaG9zdCwgcG9ydCB9KSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IHJlZGlzKHsgaG9zdCwgcG9ydCB9KVxuXG4gIC8vIGRhdGEgaXMgdGhlIGRhdGFcbiAgLy8gaWRLZXkgaXMgdGhlIGtleSBpbiB0aGUgZGF0YSB3aGljaCB3aWxsIGJlIHVzZWQgYXMgdGhlIGlkIGluIHRoZSByZWRpcyBoYXNoXG4gIC8vICAgb2JqZWN0XG4gIHJldHVybiAoeyBkYXRhLCBpZEtleSB9KSA9PiBQcm9taXNlLmFsbChkYXRhLm1hcChkID0+IGNsaWVudFxuICAgIC5obXNldChkW2lkS2V5XSwgLi4uZmxhdHRlbk9iamVjdChkKSkpKVxufVxuIl19