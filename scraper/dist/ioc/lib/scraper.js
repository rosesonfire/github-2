'use strict';

var _iocHelper = require('./../iocHelper');

var _scraper = require('./../../main/lib/scraper');

var _scraper2 = _interopRequireDefault(_scraper);

var _config = require('./../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _scraper2.default,
  configuration: {
    url: _config.scraperConfig.endpoint
  },
  dependencyConfig: {
    baseUrlGetter: 'lib/baseUrlGetter',
    dataFetcher: 'lib/dataFetcher',
    xmlToJsonConverter: 'lib/xmlToJsonConverter',
    odm: 'lib/odm/redisODM'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2MvbGliL3NjcmFwZXIuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIm1vZHVsZSIsImluc3RhbmNlQ29uc3RydWN0b3IiLCJjb25maWd1cmF0aW9uIiwidXJsIiwiZW5kcG9pbnQiLCJkZXBlbmRlbmN5Q29uZmlnIiwiYmFzZVVybEdldHRlciIsImRhdGFGZXRjaGVyIiwieG1sVG9Kc29uQ29udmVydGVyIiwib2RtIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQUEsVUFBVUMsT0FBT0QsT0FBUCxHQUFpQixrQ0FBa0I7QUFDM0NFLHdDQUQyQztBQUUzQ0MsaUJBQWU7QUFDYkMsU0FBSyxzQkFBY0M7QUFETixHQUY0QjtBQUszQ0Msb0JBQWtCO0FBQ2hCQyxtQkFBZSxtQkFEQztBQUVoQkMsaUJBQWEsaUJBRkc7QUFHaEJDLHdCQUFvQix3QkFISjtBQUloQkMsU0FBSztBQUpXO0FBTHlCLENBQWxCLENBQTNCIiwiZmlsZSI6InNjcmFwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdJbnN0YW5jZSB9IGZyb20gJy4vLi4vaW9jSGVscGVyJ1xuaW1wb3J0IHNjcmFwZXIgZnJvbSAnLi8uLi8uLi9tYWluL2xpYi9zY3JhcGVyJ1xuaW1wb3J0IHsgc2NyYXBlckNvbmZpZyB9IGZyb20gJy4vLi4vLi4vY29uZmlnJ1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVOZXdJbnN0YW5jZSh7XG4gIGluc3RhbmNlQ29uc3RydWN0b3I6IHNjcmFwZXIsXG4gIGNvbmZpZ3VyYXRpb246IHtcbiAgICB1cmw6IHNjcmFwZXJDb25maWcuZW5kcG9pbnRcbiAgfSxcbiAgZGVwZW5kZW5jeUNvbmZpZzoge1xuICAgIGJhc2VVcmxHZXR0ZXI6ICdsaWIvYmFzZVVybEdldHRlcicsXG4gICAgZGF0YUZldGNoZXI6ICdsaWIvZGF0YUZldGNoZXInLFxuICAgIHhtbFRvSnNvbkNvbnZlcnRlcjogJ2xpYi94bWxUb0pzb25Db252ZXJ0ZXInLFxuICAgIG9kbTogJ2xpYi9vZG0vcmVkaXNPRE0nXG4gIH1cbn0pXG4iXX0=