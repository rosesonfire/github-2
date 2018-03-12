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
  app: _electrolyte2.default.create('lib/wrappers/expressWrapper'),
  redisClient: _electrolyte2.default.create('lib/wrappers/redisClientWrapper')
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pb2MvaW5kZXguanMiXSwibmFtZXMiOlsidXNlIiwiZGlyIiwiZGVwZW5kZW5jaWVzIiwiYXBwIiwiY3JlYXRlIiwicmVkaXNDbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsc0JBQUlBLEdBQUosQ0FBUSxzQkFBSUMsR0FBSixDQUFRLFVBQVIsQ0FBUjs7QUFFTyxJQUFNQyxzQ0FBZTtBQUMxQkMsT0FBSyxzQkFBSUMsTUFBSixDQUFXLDZCQUFYLENBRHFCO0FBRTFCQyxlQUFhLHNCQUFJRCxNQUFKLENBQVcsaUNBQVg7QUFGYSxDQUFyQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJb0MgZnJvbSAnZWxlY3Ryb2x5dGUnXG5cbklvQy51c2UoSW9DLmRpcignZGlzdC9pb2MnKSlcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVuY2llcyA9IHtcbiAgYXBwOiBJb0MuY3JlYXRlKCdsaWIvd3JhcHBlcnMvZXhwcmVzc1dyYXBwZXInKSxcbiAgcmVkaXNDbGllbnQ6IElvQy5jcmVhdGUoJ2xpYi93cmFwcGVycy9yZWRpc0NsaWVudFdyYXBwZXInKVxufVxuIl19