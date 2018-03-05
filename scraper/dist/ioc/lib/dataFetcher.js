'use strict';

var _iocHelper = require('./../iocHelper');

var _dataFetcher = require('./../../main/lib/dataFetcher');

var _dataFetcher2 = _interopRequireDefault(_dataFetcher);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _dataFetcher2.default,
  dependencyInstances: {
    httpGetter: _axios2.default.get.bind(_axios2.default)
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2MvbGliL2RhdGFGZXRjaGVyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJpbnN0YW5jZUNvbnN0cnVjdG9yIiwiZGVwZW5kZW5jeUluc3RhbmNlcyIsImh0dHBHZXR0ZXIiLCJnZXQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0UsNENBRDJDO0FBRTNDQyx1QkFBcUI7QUFDbkJDLGdCQUFZLGdCQUFNQyxHQUFOLENBQVVDLElBQVY7QUFETztBQUZzQixDQUFsQixDQUEzQiIsImZpbGUiOiJkYXRhRmV0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5ld0luc3RhbmNlIH0gZnJvbSAnLi8uLi9pb2NIZWxwZXInXG5pbXBvcnQgZGF0YUZldGNoZXIgZnJvbSAnLi8uLi8uLi9tYWluL2xpYi9kYXRhRmV0Y2hlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiBkYXRhRmV0Y2hlcixcbiAgZGVwZW5kZW5jeUluc3RhbmNlczoge1xuICAgIGh0dHBHZXR0ZXI6IGF4aW9zLmdldC5iaW5kKGF4aW9zKVxuICB9XG59KVxuIl19