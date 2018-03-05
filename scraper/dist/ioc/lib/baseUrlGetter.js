'use strict';

var _iocHelper = require('./../iocHelper');

var _baseUrlGetter = require('./../../main/lib/baseUrlGetter');

var _baseUrlGetter2 = _interopRequireDefault(_baseUrlGetter);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _baseUrlGetter2.default,
  dependencyInstances: {
    urlParser: _url2.default.parse.bind(_url2.default)
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2MvbGliL2Jhc2VVcmxHZXR0ZXIuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIm1vZHVsZSIsImluc3RhbmNlQ29uc3RydWN0b3IiLCJkZXBlbmRlbmN5SW5zdGFuY2VzIiwidXJsUGFyc2VyIiwicGFyc2UiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0UsOENBRDJDO0FBRTNDQyx1QkFBcUI7QUFDbkJDLGVBQVcsY0FBSUMsS0FBSixDQUFVQyxJQUFWO0FBRFE7QUFGc0IsQ0FBbEIsQ0FBM0IiLCJmaWxlIjoiYmFzZVVybEdldHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5ld0luc3RhbmNlIH0gZnJvbSAnLi8uLi9pb2NIZWxwZXInXG5pbXBvcnQgYmFzZVVybEdldHRlciBmcm9tICcuLy4uLy4uL21haW4vbGliL2Jhc2VVcmxHZXR0ZXInXG5pbXBvcnQgdXJsIGZyb20gJ3VybCdcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiBiYXNlVXJsR2V0dGVyLFxuICBkZXBlbmRlbmN5SW5zdGFuY2VzOiB7XG4gICAgdXJsUGFyc2VyOiB1cmwucGFyc2UuYmluZCh1cmwpXG4gIH1cbn0pXG4iXX0=