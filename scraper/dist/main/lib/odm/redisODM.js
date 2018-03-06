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

// Maps data and persits it to a redis server
// Data has to be a json array
// Example:
//   [
//     { 'name': 'abc', 'code': 56 },
//     { 'name': 'efg', 'code': 84 }
//   ]

exports.default = function (_ref) {
  var redisClient = _ref.redisClient;
  return {
    // data is the data
    // idKey is the key in the data which will be used as the id in the redis
    //   hash object
    create: function create(_ref2) {
      var key = _ref2.key,
          data = _ref2.data;

      var flattenedData = [].concat(_toConsumableArray(flattenData(data)));

      return {
        key: key,
        data: data,
        save: async function save() {
          return redisClient.hmset.apply(redisClient, [key].concat(_toConsumableArray(flattenedData)));
        }
      };
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi9vZG0vcmVkaXNPRE0uanMiXSwibmFtZXMiOlsiZmxhdHRlbkRhdGEiLCJkYXRhIiwiZW50cmllcyIsIk9iamVjdCIsImkiLCJsZW4iLCJsZW5ndGgiLCJlbnRyeSIsInJlZGlzQ2xpZW50IiwiY3JlYXRlIiwia2V5IiwiZmxhdHRlbmVkRGF0YSIsInNhdmUiLCJobXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7bURBT1dBLFc7O0FBTFg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVdBLFdBQVgsQ0FBd0JDLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxpQkFEUixHQUNrQkMsT0FBT0QsT0FBUCxDQUFlRCxJQUFmLENBRGxCO0FBRVdHLFdBRlgsR0FFZSxDQUZmLEVBRWtCQyxHQUZsQixHQUV3QkgsUUFBUUksTUFGaEM7O0FBQUE7QUFBQSxnQkFFd0NGLElBQUlDLEdBRjVDO0FBQUE7QUFBQTtBQUFBOztBQUdVRSxlQUhWLEdBR2tCTCxRQUFRRSxDQUFSLENBSGxCO0FBQUE7QUFBQSxpQkFLVUcsTUFBTSxDQUFOLENBTFY7O0FBQUE7QUFBQTtBQUFBLGlCQU1VQSxNQUFNLENBQU4sQ0FOVjs7QUFBQTtBQUVpREgsYUFGakQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrQkFDZTtBQUFBLE1BQUdJLFdBQUgsUUFBR0EsV0FBSDtBQUFBLFNBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBQyxZQUFRLHVCQUFtQjtBQUFBLFVBQWhCQyxHQUFnQixTQUFoQkEsR0FBZ0I7QUFBQSxVQUFYVCxJQUFXLFNBQVhBLElBQVc7O0FBQ3pCLFVBQU1VLDZDQUFvQlgsWUFBWUMsSUFBWixDQUFwQixFQUFOOztBQUVBLGFBQU87QUFDTFMsZ0JBREs7QUFFTFQsa0JBRks7QUFHTFcsY0FBTTtBQUFBLGlCQUFZSixZQUFZSyxLQUFaLHFCQUFrQkgsR0FBbEIsNEJBQTBCQyxhQUExQixHQUFaO0FBQUE7QUFIRCxPQUFQO0FBS0Q7QUFaa0MsR0FBdEI7QUFBQSxDIiwiZmlsZSI6InJlZGlzT0RNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcblxuLy8gR2VuZXJhdGVzIGEgZmxhdCBhcnJheSBvZiBhbiBvYmplY3QncyBrZXkgYW5kIHZhbHVlc1xuLy8gRXhhbXBsZTpcbi8vICAgeyAnbmFtZSc6ICdhYmMnLCAnY29kZSc6IDU2IH1cbi8vICAgaXMgZ2VuZXJhdGVkIGFzXG4vLyAgIFsgJ25hbWUnLCAnYWJjJywgJ2NvZGUnLCA1NiBdXG5mdW5jdGlvbiAqIGZsYXR0ZW5EYXRhIChkYXRhKSB7XG4gIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gZW50cmllcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1tpXVxuXG4gICAgeWllbGQgZW50cnlbMF1cbiAgICB5aWVsZCBlbnRyeVsxXVxuICB9XG59XG5cbi8vIE1hcHMgZGF0YSBhbmQgcGVyc2l0cyBpdCB0byBhIHJlZGlzIHNlcnZlclxuLy8gRGF0YSBoYXMgdG8gYmUgYSBqc29uIGFycmF5XG4vLyBFeGFtcGxlOlxuLy8gICBbXG4vLyAgICAgeyAnbmFtZSc6ICdhYmMnLCAnY29kZSc6IDU2IH0sXG4vLyAgICAgeyAnbmFtZSc6ICdlZmcnLCAnY29kZSc6IDg0IH1cbi8vICAgXVxuZXhwb3J0IGRlZmF1bHQgKHsgcmVkaXNDbGllbnQgfSkgPT4gKHtcbiAgLy8gZGF0YSBpcyB0aGUgZGF0YVxuICAvLyBpZEtleSBpcyB0aGUga2V5IGluIHRoZSBkYXRhIHdoaWNoIHdpbGwgYmUgdXNlZCBhcyB0aGUgaWQgaW4gdGhlIHJlZGlzXG4gIC8vICAgaGFzaCBvYmplY3RcbiAgY3JlYXRlOiAoeyBrZXksIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IGZsYXR0ZW5lZERhdGEgPSBbLi4uZmxhdHRlbkRhdGEoZGF0YSldXG5cbiAgICByZXR1cm4ge1xuICAgICAga2V5LFxuICAgICAgZGF0YSxcbiAgICAgIHNhdmU6IGFzeW5jICgpID0+IHJlZGlzQ2xpZW50Lmhtc2V0KGtleSwgLi4uZmxhdHRlbmVkRGF0YSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=