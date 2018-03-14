'use strict';

var _iocHelper = require('./../iocHelper');

var _fetchData = require('./../../main/services/fetchData');

var _fetchData2 = _interopRequireDefault(_fetchData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _fetchData2.default,
  dependencyConfig: {
    http: 'lib/wrappers/axiosWrapper'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvZmV0Y2hEYXRhLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJpbnN0YW5jZUNvbnN0cnVjdG9yIiwiZGVwZW5kZW5jeUNvbmZpZyIsImh0dHAiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0UsMENBRDJDO0FBRTNDQyxvQkFBa0I7QUFDaEJDLFVBQU07QUFEVTtBQUZ5QixDQUFsQixDQUEzQiIsImZpbGUiOiJmZXRjaERhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdJbnN0YW5jZSB9IGZyb20gJy4vLi4vaW9jSGVscGVyJ1xuaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvZmV0Y2hEYXRhJ1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVOZXdJbnN0YW5jZSh7XG4gIGluc3RhbmNlQ29uc3RydWN0b3I6IGZldGNoRGF0YSxcbiAgZGVwZW5kZW5jeUNvbmZpZzoge1xuICAgIGh0dHA6ICdsaWIvd3JhcHBlcnMvYXhpb3NXcmFwcGVyJ1xuICB9XG59KVxuIl19