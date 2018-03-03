'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redisClientStub = exports.redisClientMock = undefined;

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redisClientMock = exports.redisClientMock = function redisClientMock() {
  return {
    hmset: _sinon2.default.mock()
  };
};

var redisClientStub = exports.redisClientStub = function redisClientStub() {
  return {
    hmset: _sinon2.default.stub()
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L21vY2tzL290aGVycy9yZWRpc0NsaWVudC5qcyJdLCJuYW1lcyI6WyJyZWRpc0NsaWVudE1vY2siLCJobXNldCIsIm1vY2siLCJyZWRpc0NsaWVudFN0dWIiLCJzdHViIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVPLElBQU1BLDRDQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxTQUFPO0FBQ3BDQyxXQUFPLGdCQUFNQyxJQUFOO0FBRDZCLEdBQVA7QUFBQSxDQUF4Qjs7QUFJQSxJQUFNQyw0Q0FBa0IsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTztBQUNwQ0YsV0FBTyxnQkFBTUcsSUFBTjtBQUQ2QixHQUFQO0FBQUEsQ0FBeEIiLCJmaWxlIjoicmVkaXNDbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2lub24gZnJvbSAnc2lub24nXG5cbmV4cG9ydCBjb25zdCByZWRpc0NsaWVudE1vY2sgPSAoKSA9PiAoe1xuICBobXNldDogc2lub24ubW9jaygpXG59KVxuXG5leHBvcnQgY29uc3QgcmVkaXNDbGllbnRTdHViID0gKCkgPT4gKHtcbiAgaG1zZXQ6IHNpbm9uLnN0dWIoKVxufSlcbiJdfQ==