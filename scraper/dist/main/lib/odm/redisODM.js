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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi9vZG0vcmVkaXNPRE0uanMiXSwibmFtZXMiOlsiZmxhdHRlbkRhdGEiLCJkYXRhIiwiZW50cmllcyIsIk9iamVjdCIsImkiLCJsZW4iLCJsZW5ndGgiLCJlbnRyeSIsInJlZGlzQ2xpZW50IiwiY3JlYXRlIiwia2V5IiwiZmxhdHRlbmVkRGF0YSIsInNhdmUiLCJobXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7bURBT1dBLFc7O0FBTFg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVdBLFdBQVgsQ0FBd0JDLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxpQkFEUixHQUNrQkMsT0FBT0QsT0FBUCxDQUFlRCxJQUFmLENBRGxCO0FBRVdHLFdBRlgsR0FFZSxDQUZmLEVBRWtCQyxHQUZsQixHQUV3QkgsUUFBUUksTUFGaEM7O0FBQUE7QUFBQSxnQkFFd0NGLElBQUlDLEdBRjVDO0FBQUE7QUFBQTtBQUFBOztBQUdVRSxlQUhWLEdBR2tCTCxRQUFRRSxDQUFSLENBSGxCO0FBQUE7QUFBQSxpQkFLVUcsTUFBTSxDQUFOLENBTFY7O0FBQUE7QUFBQTtBQUFBLGlCQU1VQSxNQUFNLENBQU4sQ0FOVjs7QUFBQTtBQUVpREgsYUFGakQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrQkFDZTtBQUFBLE1BQUdJLFdBQUgsUUFBR0EsV0FBSDtBQUFBLFNBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBQyxZQUFRLHVCQUFtQjtBQUFBLFVBQWhCQyxHQUFnQixTQUFoQkEsR0FBZ0I7QUFBQSxVQUFYVCxJQUFXLFNBQVhBLElBQVc7O0FBQ3pCLFVBQU1VLDZDQUFvQlgsWUFBWUMsSUFBWixDQUFwQixFQUFOO0FBQ0EsYUFBTztBQUNMUyxnQkFESztBQUVMVCxrQkFGSztBQUdMVyxjQUFNO0FBQUEsaUJBQVlKLFlBQVlLLEtBQVoscUJBQWtCSCxHQUFsQiw0QkFBMEJDLGFBQTFCLEdBQVo7QUFBQTtBQUhELE9BQVA7QUFLRDtBQVhrQyxHQUF0QjtBQUFBLEMiLCJmaWxlIjoicmVkaXNPRE0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuXG4vLyBHZW5lcmF0ZXMgYSBmbGF0IGFycmF5IG9mIGFuIG9iamVjdCdzIGtleSBhbmQgdmFsdWVzXG4vLyBFeGFtcGxlOlxuLy8gICB7ICduYW1lJzogJ2FiYycsICdjb2RlJzogNTYgfVxuLy8gICBpcyBnZW5lcmF0ZWQgYXNcbi8vICAgWyAnbmFtZScsICdhYmMnLCAnY29kZScsIDU2IF1cbmZ1bmN0aW9uICogZmxhdHRlbkRhdGEgKGRhdGEpIHtcbiAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEpXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBlbnRyaWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZW50cnkgPSBlbnRyaWVzW2ldXG5cbiAgICB5aWVsZCBlbnRyeVswXVxuICAgIHlpZWxkIGVudHJ5WzFdXG4gIH1cbn1cblxuLy8gTWFwcyBkYXRhIGFuZCBwZXJzaXRzIGl0IHRvIGEgcmVkaXMgc2VydmVyXG4vLyBEYXRhIGhhcyB0byBiZSBhIGpzb24gYXJyYXlcbi8vIEV4YW1wbGU6XG4vLyAgIFtcbi8vICAgICB7ICduYW1lJzogJ2FiYycsICdjb2RlJzogNTYgfSxcbi8vICAgICB7ICduYW1lJzogJ2VmZycsICdjb2RlJzogODQgfVxuLy8gICBdXG5leHBvcnQgZGVmYXVsdCAoeyByZWRpc0NsaWVudCB9KSA9PiAoe1xuICAvLyBkYXRhIGlzIHRoZSBkYXRhXG4gIC8vIGlkS2V5IGlzIHRoZSBrZXkgaW4gdGhlIGRhdGEgd2hpY2ggd2lsbCBiZSB1c2VkIGFzIHRoZSBpZCBpbiB0aGUgcmVkaXNcbiAgLy8gICBoYXNoIG9iamVjdFxuICBjcmVhdGU6ICh7IGtleSwgZGF0YSB9KSA9PiB7XG4gICAgY29uc3QgZmxhdHRlbmVkRGF0YSA9IFsuLi5mbGF0dGVuRGF0YShkYXRhKV1cbiAgICByZXR1cm4ge1xuICAgICAga2V5LFxuICAgICAgZGF0YSxcbiAgICAgIHNhdmU6IGFzeW5jICgpID0+IHJlZGlzQ2xpZW50Lmhtc2V0KGtleSwgLi4uZmxhdHRlbmVkRGF0YSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=