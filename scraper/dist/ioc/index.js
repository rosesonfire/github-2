'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependencies = undefined;

var _electrolyte = require('electrolyte');

var _electrolyte2 = _interopRequireDefault(_electrolyte);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_electrolyte2.default.use(_electrolyte2.default.dir('dist/ioc'));

var dependencies = exports.dependencies = {
  scraper: _electrolyte2.default.create('services/scraper'),
  redisClient: _electrolyte2.default.create('lib/wrappers/redisClientWrapper')
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pb2MvaW5kZXguanMiXSwibmFtZXMiOlsidXNlIiwiZGlyIiwiZGVwZW5kZW5jaWVzIiwic2NyYXBlciIsImNyZWF0ZSIsInJlZGlzQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVBLHNCQUFJQSxHQUFKLENBQVEsc0JBQUlDLEdBQUosQ0FBUSxVQUFSLENBQVI7O0FBRU8sSUFBTUMsc0NBQWU7QUFDMUJDLFdBQVMsc0JBQUlDLE1BQUosQ0FBVyxrQkFBWCxDQURpQjtBQUUxQkMsZUFBYSxzQkFBSUQsTUFBSixDQUFXLGlDQUFYO0FBRmEsQ0FBckIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW9DIGZyb20gJ2VsZWN0cm9seXRlJ1xuXG5Jb0MudXNlKElvQy5kaXIoJ2Rpc3QvaW9jJykpXG5cbmV4cG9ydCBjb25zdCBkZXBlbmRlbmNpZXMgPSB7XG4gIHNjcmFwZXI6IElvQy5jcmVhdGUoJ3NlcnZpY2VzL3NjcmFwZXInKSxcbiAgcmVkaXNDbGllbnQ6IElvQy5jcmVhdGUoJ2xpYi93cmFwcGVycy9yZWRpc0NsaWVudFdyYXBwZXInKVxufVxuIl19