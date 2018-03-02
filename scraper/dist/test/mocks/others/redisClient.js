'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redisClientStub = exports.redisClientMock = undefined;

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redisClientMock = exports.redisClientMock = {
  hmset: _sinon2.default.mock()
};

var redisClientStub = exports.redisClientStub = {
  hmset: _sinon2.default.stub()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L21vY2tzL290aGVycy9yZWRpc0NsaWVudC5qcyJdLCJuYW1lcyI6WyJyZWRpc0NsaWVudE1vY2siLCJobXNldCIsIm1vY2siLCJyZWRpc0NsaWVudFN0dWIiLCJzdHViIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVPLElBQU1BLDRDQUFrQjtBQUM3QkMsU0FBTyxnQkFBTUMsSUFBTjtBQURzQixDQUF4Qjs7QUFJQSxJQUFNQyw0Q0FBa0I7QUFDN0JGLFNBQU8sZ0JBQU1HLElBQU47QUFEc0IsQ0FBeEIiLCJmaWxlIjoicmVkaXNDbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2lub24gZnJvbSAnc2lub24nXG5cbmV4cG9ydCBjb25zdCByZWRpc0NsaWVudE1vY2sgPSB7XG4gIGhtc2V0OiBzaW5vbi5tb2NrKClcbn1cblxuZXhwb3J0IGNvbnN0IHJlZGlzQ2xpZW50U3R1YiA9IHtcbiAgaG1zZXQ6IHNpbm9uLnN0dWIoKVxufVxuIl19