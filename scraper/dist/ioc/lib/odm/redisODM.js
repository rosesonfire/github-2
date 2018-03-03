'use strict';

var _redisODM = require('./../../../main/lib/odm/redisODM');

var _redisODM2 = _interopRequireDefault(_redisODM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = function (redisWrapper) {
  var redisODMInstance = null;

  try {
    redisODMInstance = (0, _redisODM2.default)({ redis: redisWrapper });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return redisODMInstance;
};

exports['@require'] = ['lib/wrappers/redisWrapper'];
exports['@singleton'] = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pb2MvbGliL29kbS9yZWRpc09ETS5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwicmVkaXNXcmFwcGVyIiwicmVkaXNPRE1JbnN0YW5jZSIsInJlZGlzIiwiZSIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUFBLFVBQVVDLE9BQU9ELE9BQVAsR0FBaUIsVUFBQ0UsWUFBRCxFQUFrQjtBQUMzQyxNQUFJQyxtQkFBbUIsSUFBdkI7O0FBRUEsTUFBSTtBQUNGQSx1QkFBbUIsd0JBQVMsRUFBRUMsT0FBT0YsWUFBVCxFQUFULENBQW5CO0FBQ0QsR0FGRCxDQUVFLE9BQU9HLENBQVAsRUFBVTtBQUNWO0FBQ0FDLFlBQVFDLEtBQVIsQ0FBY0YsQ0FBZDtBQUNEOztBQUVELFNBQU9GLGdCQUFQO0FBQ0QsQ0FYRDs7QUFhQUgsUUFBUSxVQUFSLElBQXNCLENBQUMsMkJBQUQsQ0FBdEI7QUFDQUEsUUFBUSxZQUFSLElBQXdCLElBQXhCIiwiZmlsZSI6InJlZGlzT0RNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZGlzT0RNIGZyb20gJy4vLi4vLi4vLi4vbWFpbi9saWIvb2RtL3JlZGlzT0RNJ1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSAocmVkaXNXcmFwcGVyKSA9PiB7XG4gIGxldCByZWRpc09ETUluc3RhbmNlID0gbnVsbFxuXG4gIHRyeSB7XG4gICAgcmVkaXNPRE1JbnN0YW5jZSA9IHJlZGlzT0RNKHsgcmVkaXM6IHJlZGlzV3JhcHBlciB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKGUpXG4gIH1cblxuICByZXR1cm4gcmVkaXNPRE1JbnN0YW5jZVxufVxuXG5leHBvcnRzWydAcmVxdWlyZSddID0gWydsaWIvd3JhcHBlcnMvcmVkaXNXcmFwcGVyJ11cbmV4cG9ydHNbJ0BzaW5nbGV0b24nXSA9IHRydWVcbiJdfQ==