'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redisWrapperClientMock = undefined;

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redisWrapperClientMock = exports.redisWrapperClientMock = function redisWrapperClientMock() {
  return {
    hmset: _sinon2.default.mock()
  };
};

exports.default = function () {
  return _sinon2.default.mock();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L21vY2tzL3dyYXBwZXJzL3JlZGlzV3JhcHBlci5qcyJdLCJuYW1lcyI6WyJyZWRpc1dyYXBwZXJDbGllbnRNb2NrIiwiaG1zZXQiLCJtb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVPLElBQU1BLDBEQUF5QixTQUF6QkEsc0JBQXlCO0FBQUEsU0FBTztBQUMzQ0MsV0FBTyxnQkFBTUMsSUFBTjtBQURvQyxHQUFQO0FBQUEsQ0FBL0I7O2tCQUlRO0FBQUEsU0FBTSxnQkFBTUEsSUFBTixFQUFOO0FBQUEsQyIsImZpbGUiOiJyZWRpc1dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2lub24gZnJvbSAnc2lub24nXG5cbmV4cG9ydCBjb25zdCByZWRpc1dyYXBwZXJDbGllbnRNb2NrID0gKCkgPT4gKHtcbiAgaG1zZXQ6IHNpbm9uLm1vY2soKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gc2lub24ubW9jaygpXG4iXX0=