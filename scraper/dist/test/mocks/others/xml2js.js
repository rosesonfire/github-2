'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xml2jsStub = exports.xml2jsMock = undefined;

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xml2jsMock = exports.xml2jsMock = function xml2jsMock() {
  return {
    parseString: _sinon2.default.mock()
  };
};

var xml2jsStub = exports.xml2jsStub = function xml2jsStub() {
  return {
    parseString: _sinon2.default.stub()
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L21vY2tzL290aGVycy94bWwyanMuanMiXSwibmFtZXMiOlsieG1sMmpzTW9jayIsInBhcnNlU3RyaW5nIiwibW9jayIsInhtbDJqc1N0dWIiLCJzdHViIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVPLElBQU1BLGtDQUFhLFNBQWJBLFVBQWE7QUFBQSxTQUFPO0FBQy9CQyxpQkFBYSxnQkFBTUMsSUFBTjtBQURrQixHQUFQO0FBQUEsQ0FBbkI7O0FBSUEsSUFBTUMsa0NBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQU87QUFDL0JGLGlCQUFhLGdCQUFNRyxJQUFOO0FBRGtCLEdBQVA7QUFBQSxDQUFuQiIsImZpbGUiOiJ4bWwyanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2lub24gZnJvbSAnc2lub24nXG5cbmV4cG9ydCBjb25zdCB4bWwyanNNb2NrID0gKCkgPT4gKHtcbiAgcGFyc2VTdHJpbmc6IHNpbm9uLm1vY2soKVxufSlcblxuZXhwb3J0IGNvbnN0IHhtbDJqc1N0dWIgPSAoKSA9PiAoe1xuICBwYXJzZVN0cmluZzogc2lub24uc3R1YigpXG59KVxuIl19