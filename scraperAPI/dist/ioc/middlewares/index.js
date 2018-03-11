'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _iocHelper = require('./../iocHelper');

var _middlewares = require('./../../main/middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _middlewares2.default,
  dependencyInstances: {
    json: _bodyParser2.default.json(),
    urlencoded: _bodyParser2.default.urlencoded()
  },
  dependencyConfig: {
    requestBuffer: 'middlewares/requestBuffer'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2MvbWlkZGxld2FyZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIm1vZHVsZSIsImluc3RhbmNlQ29uc3RydWN0b3IiLCJkZXBlbmRlbmN5SW5zdGFuY2VzIiwianNvbiIsInVybGVuY29kZWQiLCJkZXBlbmRlbmN5Q29uZmlnIiwicmVxdWVzdEJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUVBOztBQUNBOzs7Ozs7QUFFQUEsVUFBVUMsT0FBT0QsT0FBUCxHQUFpQixrQ0FBa0I7QUFDM0NFLDRDQUQyQztBQUUzQ0MsdUJBQXFCO0FBQ25CQyxVQUFNLHFCQUFXQSxJQUFYLEVBRGE7QUFFbkJDLGdCQUFZLHFCQUFXQSxVQUFYO0FBRk8sR0FGc0I7QUFNM0NDLG9CQUFrQjtBQUNoQkMsbUJBQWU7QUFEQztBQU55QixDQUFsQixDQUEzQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuXG5pbXBvcnQgeyBjcmVhdGVOZXdJbnN0YW5jZSB9IGZyb20gJy4vLi4vaW9jSGVscGVyJ1xuaW1wb3J0IG1pZGRsZXdhcmVzIGZyb20gJy4vLi4vLi4vbWFpbi9taWRkbGV3YXJlcydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiBtaWRkbGV3YXJlcyxcbiAgZGVwZW5kZW5jeUluc3RhbmNlczoge1xuICAgIGpzb246IGJvZHlQYXJzZXIuanNvbigpLFxuICAgIHVybGVuY29kZWQ6IGJvZHlQYXJzZXIudXJsZW5jb2RlZCgpXG4gIH0sXG4gIGRlcGVuZGVuY3lDb25maWc6IHtcbiAgICByZXF1ZXN0QnVmZmVyOiAnbWlkZGxld2FyZXMvcmVxdWVzdEJ1ZmZlcidcbiAgfVxufSlcbiJdfQ==