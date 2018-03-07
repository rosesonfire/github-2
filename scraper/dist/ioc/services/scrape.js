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
    odm: 'lib/odm/redisODM'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvc2NyYXBlLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJpbnN0YW5jZUNvbnN0cnVjdG9yIiwiY29uZmlndXJhdGlvbiIsInVybCIsInNjcmFwZXIiLCJlbmRwb2ludCIsImRlcGVuZGVuY3lDb25maWciLCJnZXRCYXNlVXJsIiwiZmV0Y2hEYXRhIiwiY29udmVydFhNTFRvSlNPTiIsIm9kbSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsVUFBVUMsT0FBT0QsT0FBUCxHQUFpQixrQ0FBa0I7QUFDM0NFLHVDQUQyQztBQUUzQ0MsaUJBQWU7QUFDYkMsU0FBSyxpQkFBT0MsT0FBUCxDQUFlQztBQURQLEdBRjRCO0FBSzNDQyxvQkFBa0I7QUFDaEJDLGdCQUFZLHFCQURJO0FBRWhCQyxlQUFXLG9CQUZLO0FBR2hCQyxzQkFBa0IsMkJBSEY7QUFJaEJDLFNBQUs7QUFKVztBQUx5QixDQUFsQixDQUEzQiIsImZpbGUiOiJzY3JhcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdJbnN0YW5jZSB9IGZyb20gJy4vLi4vaW9jSGVscGVyJ1xuaW1wb3J0IHNjcmFwZSBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvc2NyYXBlJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLy4uLy4uL2NvbmZpZydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiBzY3JhcGUsXG4gIGNvbmZpZ3VyYXRpb246IHtcbiAgICB1cmw6IGNvbmZpZy5zY3JhcGVyLmVuZHBvaW50XG4gIH0sXG4gIGRlcGVuZGVuY3lDb25maWc6IHtcbiAgICBnZXRCYXNlVXJsOiAnc2VydmljZXMvZ2V0QmFzZVVybCcsXG4gICAgZmV0Y2hEYXRhOiAnc2VydmljZXMvZmV0Y2hEYXRhJyxcbiAgICBjb252ZXJ0WE1MVG9KU09OOiAnc2VydmljZXMvY29udmVydFhNTFRvSlNPTicsXG4gICAgb2RtOiAnbGliL29kbS9yZWRpc09ETSdcbiAgfVxufSlcbiJdfQ==