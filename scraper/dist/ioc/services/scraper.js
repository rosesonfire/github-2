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
    xmlToJsonConverter: 'services/xmlToJsonConverter',
    odm: 'lib/odm/redisODM'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvc2NyYXBlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImNvbmZpZ3VyYXRpb24iLCJ1cmwiLCJlbmRwb2ludCIsImRlcGVuZGVuY3lDb25maWciLCJnZXRCYXNlVXJsIiwiZmV0Y2hEYXRhIiwieG1sVG9Kc29uQ29udmVydGVyIiwib2RtIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQUEsVUFBVUMsT0FBT0QsT0FBUCxHQUFpQixrQ0FBa0I7QUFDM0NFLHdDQUQyQztBQUUzQ0MsaUJBQWU7QUFDYkMsU0FBSyxzQkFBY0M7QUFETixHQUY0QjtBQUszQ0Msb0JBQWtCO0FBQ2hCQyxnQkFBWSxxQkFESTtBQUVoQkMsZUFBVyxvQkFGSztBQUdoQkMsd0JBQW9CLDZCQUhKO0FBSWhCQyxTQUFLO0FBSlc7QUFMeUIsQ0FBbEIsQ0FBM0IiLCJmaWxlIjoic2NyYXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5ld0luc3RhbmNlIH0gZnJvbSAnLi8uLi9pb2NIZWxwZXInXG5pbXBvcnQgc2NyYXBlciBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvc2NyYXBlcidcbmltcG9ydCB7IHNjcmFwZXJDb25maWcgfSBmcm9tICcuLy4uLy4uL2NvbmZpZydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiBzY3JhcGVyLFxuICBjb25maWd1cmF0aW9uOiB7XG4gICAgdXJsOiBzY3JhcGVyQ29uZmlnLmVuZHBvaW50XG4gIH0sXG4gIGRlcGVuZGVuY3lDb25maWc6IHtcbiAgICBnZXRCYXNlVXJsOiAnc2VydmljZXMvZ2V0QmFzZVVybCcsXG4gICAgZmV0Y2hEYXRhOiAnc2VydmljZXMvZmV0Y2hEYXRhJyxcbiAgICB4bWxUb0pzb25Db252ZXJ0ZXI6ICdzZXJ2aWNlcy94bWxUb0pzb25Db252ZXJ0ZXInLFxuICAgIG9kbTogJ2xpYi9vZG0vcmVkaXNPRE0nXG4gIH1cbn0pXG4iXX0=