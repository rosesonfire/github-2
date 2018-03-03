'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(flattenData);

// Generates a flat array of an object's key and values
// Example:
//   { 'name': 'abc', 'code': 56 }
//   is generated as
//   [ 'name', 'abc', 'code', 56 ]
function flattenData(data) {
  var entries, i, len, entry;
  return regeneratorRuntime.wrap(function flattenData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          entries = Object.entries(data);
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

    // Returns an ODM
    return {
      // data is the data
      // idKey is the key in the data which will be used as the id in the redis
      //   hash object
      create: function create(_ref3) {
        var data = _ref3.data,
            idKey = _ref3.idKey;

        var id = data[idKey];
        var flattenedData = [id].concat(_toConsumableArray(flattenData(data)));
        return {
          data: data,
          save: async function save() {
            return client.hmset.apply(client, _toConsumableArray(flattenedData));
          }
        };
      }
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi9vZG0vcmVkaXNPRE0uanMiXSwibmFtZXMiOlsiZmxhdHRlbkRhdGEiLCJkYXRhIiwiZW50cmllcyIsIk9iamVjdCIsImkiLCJsZW4iLCJsZW5ndGgiLCJlbnRyeSIsInJlZGlzIiwiaG9zdCIsInBvcnQiLCJjbGllbnQiLCJjcmVhdGUiLCJpZEtleSIsImlkIiwiZmxhdHRlbmVkRGF0YSIsInNhdmUiLCJobXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7bURBT1dBLFc7O0FBTFg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVdBLFdBQVgsQ0FBd0JDLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxpQkFEUixHQUNrQkMsT0FBT0QsT0FBUCxDQUFlRCxJQUFmLENBRGxCO0FBRVdHLFdBRlgsR0FFZSxDQUZmLEVBRWtCQyxHQUZsQixHQUV3QkgsUUFBUUksTUFGaEM7O0FBQUE7QUFBQSxnQkFFd0NGLElBQUlDLEdBRjVDO0FBQUE7QUFBQTtBQUFBOztBQUdVRSxlQUhWLEdBR2tCTCxRQUFRRSxDQUFSLENBSGxCO0FBQUE7QUFBQSxpQkFLVUcsTUFBTSxDQUFOLENBTFY7O0FBQUE7QUFBQTtBQUFBLGlCQU1VQSxNQUFNLENBQU4sQ0FOVjs7QUFBQTtBQUVpREgsYUFGakQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrQkFDZTtBQUFBLE1BQUdJLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWUsaUJBQW9CO0FBQUEsUUFBakJDLElBQWlCLFNBQWpCQSxJQUFpQjtBQUFBLFFBQVhDLElBQVcsU0FBWEEsSUFBVzs7QUFDaEQsUUFBTUMsU0FBU0gsTUFBTSxFQUFFQyxVQUFGLEVBQVFDLFVBQVIsRUFBTixDQUFmOztBQUVBO0FBQ0EsV0FBTztBQUNMO0FBQ0E7QUFDQTtBQUNBRSxjQUFRLHVCQUFxQjtBQUFBLFlBQWxCWCxJQUFrQixTQUFsQkEsSUFBa0I7QUFBQSxZQUFaWSxLQUFZLFNBQVpBLEtBQVk7O0FBQzNCLFlBQU1DLEtBQUtiLEtBQUtZLEtBQUwsQ0FBWDtBQUNBLFlBQU1FLGlCQUFpQkQsRUFBakIsNEJBQXdCZCxZQUFZQyxJQUFaLENBQXhCLEVBQU47QUFDQSxlQUFPO0FBQ0xBLG9CQURLO0FBRUxlLGdCQUFNO0FBQUEsbUJBQVlMLE9BQU9NLEtBQVAsa0NBQWdCRixhQUFoQixFQUFaO0FBQUE7QUFGRCxTQUFQO0FBSUQ7QUFYSSxLQUFQO0FBYUQsR0FqQmM7QUFBQSxDIiwiZmlsZSI6InJlZGlzT0RNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcblxuLy8gR2VuZXJhdGVzIGEgZmxhdCBhcnJheSBvZiBhbiBvYmplY3QncyBrZXkgYW5kIHZhbHVlc1xuLy8gRXhhbXBsZTpcbi8vICAgeyAnbmFtZSc6ICdhYmMnLCAnY29kZSc6IDU2IH1cbi8vICAgaXMgZ2VuZXJhdGVkIGFzXG4vLyAgIFsgJ25hbWUnLCAnYWJjJywgJ2NvZGUnLCA1NiBdXG5mdW5jdGlvbiAqIGZsYXR0ZW5EYXRhIChkYXRhKSB7XG4gIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gZW50cmllcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1tpXVxuXG4gICAgeWllbGQgZW50cnlbMF1cbiAgICB5aWVsZCBlbnRyeVsxXVxuICB9XG59XG5cbi8vIFBlcnNpdHMgZGF0YSB0byBhIHJlZGlzIHNlcnZlclxuLy8gRGF0YSBoYXMgdG8gYmUgYSBqc29uIGFycmF5XG4vLyBFeGFtcGxlOlxuLy8gICBbXG4vLyAgICAgeyAnbmFtZSc6ICdhYmMnLCAnY29kZSc6IDU2IH0sXG4vLyAgICAgeyAnbmFtZSc6ICdlZmcnLCAnY29kZSc6IDg0IH1cbi8vICAgXVxuZXhwb3J0IGRlZmF1bHQgKHsgcmVkaXMgfSkgPT4gKHsgaG9zdCwgcG9ydCB9KSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IHJlZGlzKHsgaG9zdCwgcG9ydCB9KVxuXG4gIC8vIFJldHVybnMgYW4gT0RNXG4gIHJldHVybiB7XG4gICAgLy8gZGF0YSBpcyB0aGUgZGF0YVxuICAgIC8vIGlkS2V5IGlzIHRoZSBrZXkgaW4gdGhlIGRhdGEgd2hpY2ggd2lsbCBiZSB1c2VkIGFzIHRoZSBpZCBpbiB0aGUgcmVkaXNcbiAgICAvLyAgIGhhc2ggb2JqZWN0XG4gICAgY3JlYXRlOiAoeyBkYXRhLCBpZEtleSB9KSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGRhdGFbaWRLZXldXG4gICAgICBjb25zdCBmbGF0dGVuZWREYXRhID0gW2lkLCAuLi5mbGF0dGVuRGF0YShkYXRhKV1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIHNhdmU6IGFzeW5jICgpID0+IGNsaWVudC5obXNldCguLi5mbGF0dGVuZWREYXRhKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19