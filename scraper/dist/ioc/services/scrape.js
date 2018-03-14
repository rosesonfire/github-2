'use strict';

var _iocHelper = require('./../iocHelper');

var _scrape = require('./../../main/services/scrape');

var _scrape2 = _interopRequireDefault(_scrape);

var _config = require('./../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _scrape2.default,
  configuration: {
    url: _config2.default.scraper.endpoint
  },
  dependencyConfig: {
    getBaseUrl: 'services/getBaseUrl',
    fetchData: 'services/fetchData',
    convertXMLToJSON: 'services/convertXMLToJSON',
    saveData: 'services/saveData'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvc2NyYXBlLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJpbnN0YW5jZUNvbnN0cnVjdG9yIiwiY29uZmlndXJhdGlvbiIsInVybCIsInNjcmFwZXIiLCJlbmRwb2ludCIsImRlcGVuZGVuY3lDb25maWciLCJnZXRCYXNlVXJsIiwiZmV0Y2hEYXRhIiwiY29udmVydFhNTFRvSlNPTiIsInNhdmVEYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0UsdUNBRDJDO0FBRTNDQyxpQkFBZTtBQUNiQyxTQUFLLGlCQUFPQyxPQUFQLENBQWVDO0FBRFAsR0FGNEI7QUFLM0NDLG9CQUFrQjtBQUNoQkMsZ0JBQVkscUJBREk7QUFFaEJDLGVBQVcsb0JBRks7QUFHaEJDLHNCQUFrQiwyQkFIRjtBQUloQkMsY0FBVTtBQUpNO0FBTHlCLENBQWxCLENBQTNCIiwiZmlsZSI6InNjcmFwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5ld0luc3RhbmNlIH0gZnJvbSAnLi8uLi9pb2NIZWxwZXInXG5pbXBvcnQgc2NyYXBlIGZyb20gJy4vLi4vLi4vbWFpbi9zZXJ2aWNlcy9zY3JhcGUnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vLi4vLi4vY29uZmlnJ1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVOZXdJbnN0YW5jZSh7XG4gIGluc3RhbmNlQ29uc3RydWN0b3I6IHNjcmFwZSxcbiAgY29uZmlndXJhdGlvbjoge1xuICAgIHVybDogY29uZmlnLnNjcmFwZXIuZW5kcG9pbnRcbiAgfSxcbiAgZGVwZW5kZW5jeUNvbmZpZzoge1xuICAgIGdldEJhc2VVcmw6ICdzZXJ2aWNlcy9nZXRCYXNlVXJsJyxcbiAgICBmZXRjaERhdGE6ICdzZXJ2aWNlcy9mZXRjaERhdGEnLFxuICAgIGNvbnZlcnRYTUxUb0pTT046ICdzZXJ2aWNlcy9jb252ZXJ0WE1MVG9KU09OJyxcbiAgICBzYXZlRGF0YTogJ3NlcnZpY2VzL3NhdmVEYXRhJ1xuICB9XG59KVxuIl19