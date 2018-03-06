'use strict';

var _iocHelper = require('./../iocHelper');

var _scrape = require('./../../main/services/scrape');

var _scrape2 = _interopRequireDefault(_scrape);

var _config = require('./../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _scrape2.default,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvc2NyYXBlLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJpbnN0YW5jZUNvbnN0cnVjdG9yIiwiY29uZmlndXJhdGlvbiIsInVybCIsImVuZHBvaW50IiwiZGVwZW5kZW5jeUNvbmZpZyIsImdldEJhc2VVcmwiLCJmZXRjaERhdGEiLCJjb252ZXJ0WE1MVG9KU09OIiwib2RtIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQUEsVUFBVUMsT0FBT0QsT0FBUCxHQUFpQixrQ0FBa0I7QUFDM0NFLHVDQUQyQztBQUUzQ0MsaUJBQWU7QUFDYkMsU0FBSyxzQkFBY0M7QUFETixHQUY0QjtBQUszQ0Msb0JBQWtCO0FBQ2hCQyxnQkFBWSxxQkFESTtBQUVoQkMsZUFBVyxvQkFGSztBQUdoQkMsc0JBQWtCLDJCQUhGO0FBSWhCQyxTQUFLO0FBSlc7QUFMeUIsQ0FBbEIsQ0FBM0IiLCJmaWxlIjoic2NyYXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTmV3SW5zdGFuY2UgfSBmcm9tICcuLy4uL2lvY0hlbHBlcidcbmltcG9ydCBzY3JhcGUgZnJvbSAnLi8uLi8uLi9tYWluL3NlcnZpY2VzL3NjcmFwZSdcbmltcG9ydCB7IHNjcmFwZXJDb25maWcgfSBmcm9tICcuLy4uLy4uL2NvbmZpZydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiBzY3JhcGUsXG4gIGNvbmZpZ3VyYXRpb246IHtcbiAgICB1cmw6IHNjcmFwZXJDb25maWcuZW5kcG9pbnRcbiAgfSxcbiAgZGVwZW5kZW5jeUNvbmZpZzoge1xuICAgIGdldEJhc2VVcmw6ICdzZXJ2aWNlcy9nZXRCYXNlVXJsJyxcbiAgICBmZXRjaERhdGE6ICdzZXJ2aWNlcy9mZXRjaERhdGEnLFxuICAgIGNvbnZlcnRYTUxUb0pTT046ICdzZXJ2aWNlcy9jb252ZXJ0WE1MVG9KU09OJyxcbiAgICBvZG06ICdsaWIvb2RtL3JlZGlzT0RNJ1xuICB9XG59KVxuIl19