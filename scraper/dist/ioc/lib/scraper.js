'use strict';

var _scraper = require('./../../main/lib/scraper');

var _scraper2 = _interopRequireDefault(_scraper);

var _config = require('./../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = function (baseUrlGetter, dataFetcher, xmlToJsonConverter, redisODM) {
  var scraperInstance = null;

  try {
    var url = _config.scraperConfig.endpoint;
    var odm = redisODM;

    scraperInstance = (0, _scraper2.default)({ url: url, baseUrlGetter: baseUrlGetter, dataFetcher: dataFetcher, xmlToJsonConverter: xmlToJsonConverter, odm: odm });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return scraperInstance;
};

exports['@require'] = ['lib/baseUrlGetter', 'lib/dataFetcher', 'lib/xmlToJsonConverter', 'lib/odm/redisODM'];
exports['@singleton'] = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2MvbGliL3NjcmFwZXIuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIm1vZHVsZSIsImJhc2VVcmxHZXR0ZXIiLCJkYXRhRmV0Y2hlciIsInhtbFRvSnNvbkNvbnZlcnRlciIsInJlZGlzT0RNIiwic2NyYXBlckluc3RhbmNlIiwidXJsIiwiZW5kcG9pbnQiLCJvZG0iLCJlIiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFFQUEsVUFBVUMsT0FBT0QsT0FBUCxHQUFpQixVQUFDRSxhQUFELEVBQWdCQyxXQUFoQixFQUE2QkMsa0JBQTdCLEVBQ3pCQyxRQUR5QixFQUNaO0FBQ2IsTUFBSUMsa0JBQWtCLElBQXRCOztBQUVBLE1BQUk7QUFDRixRQUFNQyxNQUFNLHNCQUFjQyxRQUExQjtBQUNBLFFBQU1DLE1BQU1KLFFBQVo7O0FBRUFDLHNCQUFrQix1QkFDaEIsRUFBRUMsUUFBRixFQUFPTCw0QkFBUCxFQUFzQkMsd0JBQXRCLEVBQW1DQyxzQ0FBbkMsRUFBdURLLFFBQXZELEVBRGdCLENBQWxCO0FBRUQsR0FORCxDQU1FLE9BQU9DLENBQVAsRUFBVTtBQUNWO0FBQ0FDLFlBQVFDLEtBQVIsQ0FBY0YsQ0FBZDtBQUNEOztBQUVELFNBQU9KLGVBQVA7QUFDRCxDQWhCRDs7QUFrQkFOLFFBQVEsVUFBUixJQUFzQixDQUFDLG1CQUFELEVBQXNCLGlCQUF0QixFQUNwQix3QkFEb0IsRUFDTSxrQkFETixDQUF0QjtBQUVBQSxRQUFRLFlBQVIsSUFBd0IsSUFBeEIiLCJmaWxlIjoic2NyYXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzY3JhcGVyIGZyb20gJy4vLi4vLi4vbWFpbi9saWIvc2NyYXBlcidcbmltcG9ydCB7IHNjcmFwZXJDb25maWcgfSBmcm9tICcuLy4uLy4uL2NvbmZpZydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gKGJhc2VVcmxHZXR0ZXIsIGRhdGFGZXRjaGVyLCB4bWxUb0pzb25Db252ZXJ0ZXIsXG4gIHJlZGlzT0RNKSA9PiB7XG4gIGxldCBzY3JhcGVySW5zdGFuY2UgPSBudWxsXG5cbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBzY3JhcGVyQ29uZmlnLmVuZHBvaW50XG4gICAgY29uc3Qgb2RtID0gcmVkaXNPRE1cblxuICAgIHNjcmFwZXJJbnN0YW5jZSA9IHNjcmFwZXIoXG4gICAgICB7IHVybCwgYmFzZVVybEdldHRlciwgZGF0YUZldGNoZXIsIHhtbFRvSnNvbkNvbnZlcnRlciwgb2RtIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgfVxuXG4gIHJldHVybiBzY3JhcGVySW5zdGFuY2Vcbn1cblxuZXhwb3J0c1snQHJlcXVpcmUnXSA9IFsnbGliL2Jhc2VVcmxHZXR0ZXInLCAnbGliL2RhdGFGZXRjaGVyJyxcbiAgJ2xpYi94bWxUb0pzb25Db252ZXJ0ZXInLCAnbGliL29kbS9yZWRpc09ETSddXG5leHBvcnRzWydAc2luZ2xldG9uJ10gPSB0cnVlXG4iXX0=