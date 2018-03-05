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
  var redis = _ref.redis,
      host = _ref.host,
      port = _ref.port;

  var client = redis({ host: host, port: port });

  // Returns an ODM
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
          return client.hmset.apply(client, [key].concat(_toConsumableArray(flattenedData)));
        }
      };
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi9vZG0vcmVkaXNPRE0uanMiXSwibmFtZXMiOlsiZmxhdHRlbkRhdGEiLCJkYXRhIiwiZW50cmllcyIsIk9iamVjdCIsImkiLCJsZW4iLCJsZW5ndGgiLCJlbnRyeSIsInJlZGlzIiwiaG9zdCIsInBvcnQiLCJjbGllbnQiLCJjcmVhdGUiLCJrZXkiLCJmbGF0dGVuZWREYXRhIiwic2F2ZSIsImhtc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OzttREFPV0EsVzs7QUFMWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBV0EsV0FBWCxDQUF3QkMsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGlCQURSLEdBQ2tCQyxPQUFPRCxPQUFQLENBQWVELElBQWYsQ0FEbEI7QUFFV0csV0FGWCxHQUVlLENBRmYsRUFFa0JDLEdBRmxCLEdBRXdCSCxRQUFRSSxNQUZoQzs7QUFBQTtBQUFBLGdCQUV3Q0YsSUFBSUMsR0FGNUM7QUFBQTtBQUFBO0FBQUE7O0FBR1VFLGVBSFYsR0FHa0JMLFFBQVFFLENBQVIsQ0FIbEI7QUFBQTtBQUFBLGlCQUtVRyxNQUFNLENBQU4sQ0FMVjs7QUFBQTtBQUFBO0FBQUEsaUJBTVVBLE1BQU0sQ0FBTixDQU5WOztBQUFBO0FBRWlESCxhQUZqRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O2tCQUNlLGdCQUEyQjtBQUFBLE1BQXhCSSxLQUF3QixRQUF4QkEsS0FBd0I7QUFBQSxNQUFqQkMsSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUN4QyxNQUFNQyxTQUFTSCxNQUFNLEVBQUVDLFVBQUYsRUFBUUMsVUFBUixFQUFOLENBQWY7O0FBRUE7QUFDQSxTQUFPO0FBQ0w7QUFDQTtBQUNBO0FBQ0FFLFlBQVEsdUJBQW1CO0FBQUEsVUFBaEJDLEdBQWdCLFNBQWhCQSxHQUFnQjtBQUFBLFVBQVhaLElBQVcsU0FBWEEsSUFBVzs7QUFDekIsVUFBTWEsNkNBQW9CZCxZQUFZQyxJQUFaLENBQXBCLEVBQU47QUFDQSxhQUFPO0FBQ0xZLGdCQURLO0FBRUxaLGtCQUZLO0FBR0xjLGNBQU07QUFBQSxpQkFBWUosT0FBT0ssS0FBUCxnQkFBYUgsR0FBYiw0QkFBcUJDLGFBQXJCLEdBQVo7QUFBQTtBQUhELE9BQVA7QUFLRDtBQVhJLEdBQVA7QUFhRCxDIiwiZmlsZSI6InJlZGlzT0RNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcblxuLy8gR2VuZXJhdGVzIGEgZmxhdCBhcnJheSBvZiBhbiBvYmplY3QncyBrZXkgYW5kIHZhbHVlc1xuLy8gRXhhbXBsZTpcbi8vICAgeyAnbmFtZSc6ICdhYmMnLCAnY29kZSc6IDU2IH1cbi8vICAgaXMgZ2VuZXJhdGVkIGFzXG4vLyAgIFsgJ25hbWUnLCAnYWJjJywgJ2NvZGUnLCA1NiBdXG5mdW5jdGlvbiAqIGZsYXR0ZW5EYXRhIChkYXRhKSB7XG4gIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gZW50cmllcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1tpXVxuXG4gICAgeWllbGQgZW50cnlbMF1cbiAgICB5aWVsZCBlbnRyeVsxXVxuICB9XG59XG5cbi8vIFBlcnNpdHMgZGF0YSB0byBhIHJlZGlzIHNlcnZlclxuLy8gRGF0YSBoYXMgdG8gYmUgYSBqc29uIGFycmF5XG4vLyBFeGFtcGxlOlxuLy8gICBbXG4vLyAgICAgeyAnbmFtZSc6ICdhYmMnLCAnY29kZSc6IDU2IH0sXG4vLyAgICAgeyAnbmFtZSc6ICdlZmcnLCAnY29kZSc6IDg0IH1cbi8vICAgXVxuZXhwb3J0IGRlZmF1bHQgKHsgcmVkaXMsIGhvc3QsIHBvcnQgfSkgPT4ge1xuICBjb25zdCBjbGllbnQgPSByZWRpcyh7IGhvc3QsIHBvcnQgfSlcblxuICAvLyBSZXR1cm5zIGFuIE9ETVxuICByZXR1cm4ge1xuICAgIC8vIGRhdGEgaXMgdGhlIGRhdGFcbiAgICAvLyBpZEtleSBpcyB0aGUga2V5IGluIHRoZSBkYXRhIHdoaWNoIHdpbGwgYmUgdXNlZCBhcyB0aGUgaWQgaW4gdGhlIHJlZGlzXG4gICAgLy8gICBoYXNoIG9iamVjdFxuICAgIGNyZWF0ZTogKHsga2V5LCBkYXRhIH0pID0+IHtcbiAgICAgIGNvbnN0IGZsYXR0ZW5lZERhdGEgPSBbLi4uZmxhdHRlbkRhdGEoZGF0YSldXG4gICAgICByZXR1cm4ge1xuICAgICAgICBrZXksXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHNhdmU6IGFzeW5jICgpID0+IGNsaWVudC5obXNldChrZXksIC4uLmZsYXR0ZW5lZERhdGEpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=