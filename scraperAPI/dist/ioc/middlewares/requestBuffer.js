'use strict';

var _iocHelper = require('./../iocHelper');

var _requestBuffer = require('./../../main/middlewares/requestBuffer');

var _requestBuffer2 = _interopRequireDefault(_requestBuffer);

var _config = require('./../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _requestBuffer2.default,
  configuration: {
    requestBufferLimit: _config.scraperApi.requestBuffer.bufferLimit,
    ttl: _config.scraperApi.requestBuffer.ttl
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2MvbWlkZGxld2FyZXMvcmVxdWVzdEJ1ZmZlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImNvbmZpZ3VyYXRpb24iLCJyZXF1ZXN0QnVmZmVyTGltaXQiLCJyZXF1ZXN0QnVmZmVyIiwiYnVmZmVyTGltaXQiLCJ0dGwiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0UsOENBRDJDO0FBRTNDQyxpQkFBZTtBQUNiQyx3QkFBb0IsbUJBQVdDLGFBQVgsQ0FBeUJDLFdBRGhDO0FBRWJDLFNBQUssbUJBQVdGLGFBQVgsQ0FBeUJFO0FBRmpCO0FBRjRCLENBQWxCLENBQTNCIiwiZmlsZSI6InJlcXVlc3RCdWZmZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdJbnN0YW5jZSB9IGZyb20gJy4vLi4vaW9jSGVscGVyJ1xuaW1wb3J0IHJlcXVlc3RCdWZmZXIgZnJvbSAnLi8uLi8uLi9tYWluL21pZGRsZXdhcmVzL3JlcXVlc3RCdWZmZXInXG5pbXBvcnQgeyBzY3JhcGVyQXBpIH0gZnJvbSAnLi8uLi8uLi9jb25maWcnXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU5ld0luc3RhbmNlKHtcbiAgaW5zdGFuY2VDb25zdHJ1Y3RvcjogcmVxdWVzdEJ1ZmZlcixcbiAgY29uZmlndXJhdGlvbjoge1xuICAgIHJlcXVlc3RCdWZmZXJMaW1pdDogc2NyYXBlckFwaS5yZXF1ZXN0QnVmZmVyLmJ1ZmZlckxpbWl0LFxuICAgIHR0bDogc2NyYXBlckFwaS5yZXF1ZXN0QnVmZmVyLnR0bFxuICB9XG59KVxuIl19