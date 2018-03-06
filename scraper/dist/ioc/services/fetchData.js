'use strict';

var _iocHelper = require('./../iocHelper');

var _fetchData = require('./../../main/services/fetchData');

var _fetchData2 = _interopRequireDefault(_fetchData);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _fetchData2.default,
  dependencyInstances: {
    httpGetter: _axios2.default.get.bind(_axios2.default)
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvZmV0Y2hEYXRhLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJpbnN0YW5jZUNvbnN0cnVjdG9yIiwiZGVwZW5kZW5jeUluc3RhbmNlcyIsImh0dHBHZXR0ZXIiLCJnZXQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0UsMENBRDJDO0FBRTNDQyx1QkFBcUI7QUFDbkJDLGdCQUFZLGdCQUFNQyxHQUFOLENBQVVDLElBQVY7QUFETztBQUZzQixDQUFsQixDQUEzQiIsImZpbGUiOiJmZXRjaERhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdJbnN0YW5jZSB9IGZyb20gJy4vLi4vaW9jSGVscGVyJ1xuaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvZmV0Y2hEYXRhJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVOZXdJbnN0YW5jZSh7XG4gIGluc3RhbmNlQ29uc3RydWN0b3I6IGZldGNoRGF0YSxcbiAgZGVwZW5kZW5jeUluc3RhbmNlczoge1xuICAgIGh0dHBHZXR0ZXI6IGF4aW9zLmdldC5iaW5kKGF4aW9zKVxuICB9XG59KVxuIl19