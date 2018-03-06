'use strict';

var _iocHelper = require('./../iocHelper');

var _scraper = require('./../../main/services/scraper');

var _scraper2 = _interopRequireDefault(_scraper);

var _config = require('./../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _scraper2.default,
  configuration: {
    url: _config.scraperConfig.endpoint
  },
  dependencyConfig: {
    getBaseUrl: 'services/getBaseUrl',
    fetchData: 'services/fetchData',
    convertXMLToJSON: 'services/convertXMLToJSON',
    odm: 'lib/odm/redisODM'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvc2NyYXBlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImNvbmZpZ3VyYXRpb24iLCJ1cmwiLCJlbmRwb2ludCIsImRlcGVuZGVuY3lDb25maWciLCJnZXRCYXNlVXJsIiwiZmV0Y2hEYXRhIiwiY29udmVydFhNTFRvSlNPTiIsIm9kbSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBRUFBLFVBQVVDLE9BQU9ELE9BQVAsR0FBaUIsa0NBQWtCO0FBQzNDRSx3Q0FEMkM7QUFFM0NDLGlCQUFlO0FBQ2JDLFNBQUssc0JBQWNDO0FBRE4sR0FGNEI7QUFLM0NDLG9CQUFrQjtBQUNoQkMsZ0JBQVkscUJBREk7QUFFaEJDLGVBQVcsb0JBRks7QUFHaEJDLHNCQUFrQiwyQkFIRjtBQUloQkMsU0FBSztBQUpXO0FBTHlCLENBQWxCLENBQTNCIiwiZmlsZSI6InNjcmFwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdJbnN0YW5jZSB9IGZyb20gJy4vLi4vaW9jSGVscGVyJ1xuaW1wb3J0IHNjcmFwZXIgZnJvbSAnLi8uLi8uLi9tYWluL3NlcnZpY2VzL3NjcmFwZXInXG5pbXBvcnQgeyBzY3JhcGVyQ29uZmlnIH0gZnJvbSAnLi8uLi8uLi9jb25maWcnXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU5ld0luc3RhbmNlKHtcbiAgaW5zdGFuY2VDb25zdHJ1Y3Rvcjogc2NyYXBlcixcbiAgY29uZmlndXJhdGlvbjoge1xuICAgIHVybDogc2NyYXBlckNvbmZpZy5lbmRwb2ludFxuICB9LFxuICBkZXBlbmRlbmN5Q29uZmlnOiB7XG4gICAgZ2V0QmFzZVVybDogJ3NlcnZpY2VzL2dldEJhc2VVcmwnLFxuICAgIGZldGNoRGF0YTogJ3NlcnZpY2VzL2ZldGNoRGF0YScsXG4gICAgY29udmVydFhNTFRvSlNPTjogJ3NlcnZpY2VzL2NvbnZlcnRYTUxUb0pTT04nLFxuICAgIG9kbTogJ2xpYi9vZG0vcmVkaXNPRE0nXG4gIH1cbn0pXG4iXX0=