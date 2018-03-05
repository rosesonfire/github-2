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
    baseUrlGetter: 'services/baseUrlGetter',
    dataFetcher: 'services/dataFetcher',
    xmlToJsonConverter: 'services/xmlToJsonConverter',
    odm: 'lib/odm/redisODM'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvc2NyYXBlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImNvbmZpZ3VyYXRpb24iLCJ1cmwiLCJlbmRwb2ludCIsImRlcGVuZGVuY3lDb25maWciLCJiYXNlVXJsR2V0dGVyIiwiZGF0YUZldGNoZXIiLCJ4bWxUb0pzb25Db252ZXJ0ZXIiLCJvZG0iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBQSxVQUFVQyxPQUFPRCxPQUFQLEdBQWlCLGtDQUFrQjtBQUMzQ0Usd0NBRDJDO0FBRTNDQyxpQkFBZTtBQUNiQyxTQUFLLHNCQUFjQztBQUROLEdBRjRCO0FBSzNDQyxvQkFBa0I7QUFDaEJDLG1CQUFlLHdCQURDO0FBRWhCQyxpQkFBYSxzQkFGRztBQUdoQkMsd0JBQW9CLDZCQUhKO0FBSWhCQyxTQUFLO0FBSlc7QUFMeUIsQ0FBbEIsQ0FBM0IiLCJmaWxlIjoic2NyYXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5ld0luc3RhbmNlIH0gZnJvbSAnLi8uLi9pb2NIZWxwZXInXG5pbXBvcnQgc2NyYXBlciBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvc2NyYXBlcidcbmltcG9ydCB7IHNjcmFwZXJDb25maWcgfSBmcm9tICcuLy4uLy4uL2NvbmZpZydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiBzY3JhcGVyLFxuICBjb25maWd1cmF0aW9uOiB7XG4gICAgdXJsOiBzY3JhcGVyQ29uZmlnLmVuZHBvaW50XG4gIH0sXG4gIGRlcGVuZGVuY3lDb25maWc6IHtcbiAgICBiYXNlVXJsR2V0dGVyOiAnc2VydmljZXMvYmFzZVVybEdldHRlcicsXG4gICAgZGF0YUZldGNoZXI6ICdzZXJ2aWNlcy9kYXRhRmV0Y2hlcicsXG4gICAgeG1sVG9Kc29uQ29udmVydGVyOiAnc2VydmljZXMveG1sVG9Kc29uQ29udmVydGVyJyxcbiAgICBvZG06ICdsaWIvb2RtL3JlZGlzT0RNJ1xuICB9XG59KVxuIl19