'use strict';

var _setup = require('./../../setup');

var _setup2 = _interopRequireDefault(_setup);

var _redisODM = require('./../../../main/lib/odm/redisODM');

var _redisODM2 = _interopRequireDefault(_redisODM);

var _redisClientWrapper = require('./../../mocks/lib/wrappers/redisClientWrapper');

var _redisClientWrapper2 = _interopRequireDefault(_redisClientWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // eslint-disable-next-line no-unused-vars

// unit

// mocks


// eslint-disable-next-line no-undef
describe('RedisODM', function () {
  var mocks = void 0,
      redisClient = void 0,
      expectedODMProperties = void 0,
      expectedModelObjProperties = void 0,
      passedData = void 0,
      data = void 0,
      positiveReply = void 0;

  // eslint-disable-next-line no-undef
  before(function () {
    expectedODMProperties = ['create'];
    expectedModelObjProperties = ['key', 'data', 'save'];
    passedData = [1, 'id', 1, 'value', '1'];
    data = { 'id': 1, 'value': '1' };
    positiveReply = 'OK';
  });

  // eslint-disable-next-line no-undef
  beforeEach(function () {
    redisClient = (0, _redisClientWrapper2.default)();
  });

  // eslint-disable-next-line no-undef
  afterEach(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When creating redisODM', function () {
    // eslint-disable-next-line no-undef
    beforeEach(function () {
      mocks = [];
    });
    // eslint-disable-next-line no-undef
    it('should have expected properties', function () {
      return (0, _redisODM2.default)({ redisClient: redisClient }).should.have.all.keys(expectedODMProperties);
    });

    // eslint-disable-next-line no-undef
    describe('When creating a model object', function () {
      // eslint-disable-next-line no-undef
      it('should have expected properties', function () {
        return (0, _redisODM2.default)({ redisClient: redisClient }).create({ key: data.id, data: data }).should.have.all.keys(expectedModelObjProperties);
      });

      // eslint-disable-next-line no-undef
      it('should map the data properly', function () {
        var modelObj = (0, _redisODM2.default)({ redisClient: redisClient }).create({ key: data.id, data: data });
        var modelObjData = modelObj.data;

        modelObj.key.should.equal(data.id);

        Object.entries(data).forEach(function (entry) {
          var _modelObjData$should$;

          return (_modelObjData$should$ = modelObjData.should.have.own).property.apply(_modelObjData$should$, _toConsumableArray(entry));
        });

        Object.entries(modelObjData).forEach(function (entry) {
          var _data$should$have$own;

          return (_data$should$have$own = data.should.have.own).property.apply(_data$should$have$own, _toConsumableArray(entry));
        });
      });
    });
  });

  // eslint-disable-next-line no-undef
  describe('When saving a model object', function () {
    // eslint-disable-next-line no-undef
    beforeEach(function () {
      var _redisClient$hmset$on;

      (_redisClient$hmset$on = redisClient.hmset.once()).withExactArgs.apply(_redisClient$hmset$on, _toConsumableArray(passedData)).resolves(positiveReply);
      mocks = [redisClient.hmset];
    });

    // eslint-disable-next-line no-undef
    it('should return a promise', function () {
      return (0, _redisODM2.default)({ redisClient: redisClient }).create({ key: data.id, data: data }).save().should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should be successful', async function () {
      return (0, _redisODM2.default)({ redisClient: redisClient }).create({ key: data.id, data: data }).save().should.eventually.equal(positiveReply);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi9vZG0vcmVkaXNPRE0uc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwicmVkaXNDbGllbnQiLCJleHBlY3RlZE9ETVByb3BlcnRpZXMiLCJleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcyIsInBhc3NlZERhdGEiLCJkYXRhIiwicG9zaXRpdmVSZXBseSIsImJlZm9yZSIsImJlZm9yZUVhY2giLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsIml0Iiwic2hvdWxkIiwiaGF2ZSIsImFsbCIsImtleXMiLCJjcmVhdGUiLCJrZXkiLCJpZCIsIm1vZGVsT2JqIiwibW9kZWxPYmpEYXRhIiwiZXF1YWwiLCJPYmplY3QiLCJlbnRyaWVzIiwib3duIiwicHJvcGVydHkiLCJlbnRyeSIsImhtc2V0Iiwib25jZSIsIndpdGhFeGFjdEFyZ3MiLCJyZXNvbHZlcyIsInNhdmUiLCJiZSIsImEiLCJldmVudHVhbGx5Il0sIm1hcHBpbmdzIjoiOztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7O29NQUxBOztBQUVBOztBQUVBOzs7QUFJQTtBQUNBQSxTQUFTLFVBQVQsRUFBcUIsWUFBTTtBQUN6QixNQUNFQyxjQURGO0FBQUEsTUFFRUMsb0JBRkY7QUFBQSxNQUdFQyw4QkFIRjtBQUFBLE1BSUVDLG1DQUpGO0FBQUEsTUFLRUMsbUJBTEY7QUFBQSxNQU1FQyxhQU5GO0FBQUEsTUFPRUMsc0JBUEY7O0FBU0E7QUFDQUMsU0FBTyxZQUFNO0FBQ1hMLDRCQUF3QixDQUFDLFFBQUQsQ0FBeEI7QUFDQUMsaUNBQTZCLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsTUFBaEIsQ0FBN0I7QUFDQUMsaUJBQWEsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxPQUFiLEVBQXNCLEdBQXRCLENBQWI7QUFDQUMsV0FBTyxFQUFFLE1BQU0sQ0FBUixFQUFXLFNBQVMsR0FBcEIsRUFBUDtBQUNBQyxvQkFBZ0IsSUFBaEI7QUFDRCxHQU5EOztBQVFBO0FBQ0FFLGFBQVcsWUFBTTtBQUNmUCxrQkFBYyxtQ0FBZDtBQUNELEdBRkQ7O0FBSUE7QUFDQVEsWUFBVTtBQUFBLFdBQU1ULE1BQU1VLE9BQU4sQ0FBYztBQUFBLGFBQVFDLEtBQUtDLE1BQUwsRUFBUjtBQUFBLEtBQWQsQ0FBTjtBQUFBLEdBQVY7O0FBRUE7QUFDQWIsV0FBUyx3QkFBVCxFQUFtQyxZQUFNO0FBQ3ZDO0FBQ0FTLGVBQVcsWUFBTTtBQUNmUixjQUFRLEVBQVI7QUFDRCxLQUZEO0FBR0E7QUFDQWEsT0FBRyxpQ0FBSCxFQUFzQztBQUFBLGFBQ3BDLHdCQUFTLEVBQUVaLHdCQUFGLEVBQVQsRUFBMEJhLE1BQTFCLENBQWlDQyxJQUFqQyxDQUFzQ0MsR0FBdEMsQ0FBMENDLElBQTFDLENBQStDZixxQkFBL0MsQ0FEb0M7QUFBQSxLQUF0Qzs7QUFHQTtBQUNBSCxhQUFTLDhCQUFULEVBQXlDLFlBQU07QUFDN0M7QUFDQWMsU0FBRyxpQ0FBSCxFQUFzQztBQUFBLGVBQ3BDLHdCQUFTLEVBQUVaLHdCQUFGLEVBQVQsRUFDR2lCLE1BREgsQ0FDVSxFQUFFQyxLQUFLZCxLQUFLZSxFQUFaLEVBQWdCZixNQUFNQSxJQUF0QixFQURWLEVBQ3dDUyxNQUR4QyxDQUMrQ0MsSUFEL0MsQ0FDb0RDLEdBRHBELENBRUdDLElBRkgsQ0FFUWQsMEJBRlIsQ0FEb0M7QUFBQSxPQUF0Qzs7QUFLQTtBQUNBVSxTQUFHLDhCQUFILEVBQW1DLFlBQU07QUFDdkMsWUFBTVEsV0FBVyx3QkFBUyxFQUFFcEIsd0JBQUYsRUFBVCxFQUNkaUIsTUFEYyxDQUNQLEVBQUVDLEtBQUtkLEtBQUtlLEVBQVosRUFBZ0JmLE1BQU1BLElBQXRCLEVBRE8sQ0FBakI7QUFFQSxZQUFNaUIsZUFBZUQsU0FBU2hCLElBQTlCOztBQUVBZ0IsaUJBQVNGLEdBQVQsQ0FBYUwsTUFBYixDQUFvQlMsS0FBcEIsQ0FBMEJsQixLQUFLZSxFQUEvQjs7QUFFQUksZUFBT0MsT0FBUCxDQUFlcEIsSUFBZixFQUNHSyxPQURILENBQ1c7QUFBQTs7QUFBQSxpQkFBUyxzQ0FBYUksTUFBYixDQUFvQkMsSUFBcEIsQ0FBeUJXLEdBQXpCLEVBQTZCQyxRQUE3QixpREFBeUNDLEtBQXpDLEVBQVQ7QUFBQSxTQURYOztBQUdBSixlQUFPQyxPQUFQLENBQWVILFlBQWYsRUFDR1osT0FESCxDQUNXO0FBQUE7O0FBQUEsaUJBQVMsOEJBQUtJLE1BQUwsQ0FBWUMsSUFBWixDQUFpQlcsR0FBakIsRUFBcUJDLFFBQXJCLGlEQUFpQ0MsS0FBakMsRUFBVDtBQUFBLFNBRFg7QUFFRCxPQVpEO0FBYUQsS0FyQkQ7QUFzQkQsR0FoQ0Q7O0FBa0NBO0FBQ0E3QixXQUFTLDRCQUFULEVBQXVDLFlBQU07QUFDM0M7QUFDQVMsZUFBVyxZQUFNO0FBQUE7O0FBQ2YsMkNBQVlxQixLQUFaLENBQWtCQyxJQUFsQixJQUF5QkMsYUFBekIsaURBQTBDM0IsVUFBMUMsR0FDRzRCLFFBREgsQ0FDWTFCLGFBRFo7QUFFQU4sY0FBUSxDQUFFQyxZQUFZNEIsS0FBZCxDQUFSO0FBQ0QsS0FKRDs7QUFNQTtBQUNBaEIsT0FBRyx5QkFBSCxFQUE4QjtBQUFBLGFBQzVCLHdCQUFTLEVBQUVaLHdCQUFGLEVBQVQsRUFDR2lCLE1BREgsQ0FDVSxFQUFFQyxLQUFLZCxLQUFLZSxFQUFaLEVBQWdCZixNQUFNQSxJQUF0QixFQURWLEVBQ3dDNEIsSUFEeEMsR0FDK0NuQixNQUQvQyxDQUNzRG9CLEVBRHRELENBQ3lEQyxDQUR6RCxDQUMyRCxTQUQzRCxDQUQ0QjtBQUFBLEtBQTlCOztBQUlBO0FBQ0F0QixPQUFHLHNCQUFILEVBQTJCO0FBQUEsYUFDekIsd0JBQVMsRUFBRVosd0JBQUYsRUFBVCxFQUNHaUIsTUFESCxDQUNVLEVBQUVDLEtBQUtkLEtBQUtlLEVBQVosRUFBZ0JmLE1BQU1BLElBQXRCLEVBRFYsRUFDd0M0QixJQUR4QyxHQUMrQ25CLE1BRC9DLENBQ3NEc0IsVUFEdEQsQ0FFR2IsS0FGSCxDQUVTakIsYUFGVCxDQUR5QjtBQUFBLEtBQTNCO0FBSUQsR0FsQkQ7QUFtQkQsQ0FsRkQiLCJmaWxlIjoicmVkaXNPRE0uc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGV4cGVjdCBmcm9tICcuLy4uLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHJlZGlzT0RNIGZyb20gJy4vLi4vLi4vLi4vbWFpbi9saWIvb2RtL3JlZGlzT0RNJ1xuLy8gbW9ja3NcbmltcG9ydCByZWRpc0NsaWVudFdyYXBwZXJNb2NrXG4gIGZyb20gJy4vLi4vLi4vbW9ja3MvbGliL3dyYXBwZXJzL3JlZGlzQ2xpZW50V3JhcHBlcidcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5kZXNjcmliZSgnUmVkaXNPRE0nLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIHJlZGlzQ2xpZW50LFxuICAgIGV4cGVjdGVkT0RNUHJvcGVydGllcyxcbiAgICBleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcyxcbiAgICBwYXNzZWREYXRhLFxuICAgIGRhdGEsXG4gICAgcG9zaXRpdmVSZXBseVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmUoKCkgPT4ge1xuICAgIGV4cGVjdGVkT0RNUHJvcGVydGllcyA9IFsnY3JlYXRlJ11cbiAgICBleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcyA9IFsna2V5JywgJ2RhdGEnLCAnc2F2ZSddXG4gICAgcGFzc2VkRGF0YSA9IFsxLCAnaWQnLCAxLCAndmFsdWUnLCAnMSddXG4gICAgZGF0YSA9IHsgJ2lkJzogMSwgJ3ZhbHVlJzogJzEnIH1cbiAgICBwb3NpdGl2ZVJlcGx5ID0gJ09LJ1xuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICByZWRpc0NsaWVudCA9IHJlZGlzQ2xpZW50V3JhcHBlck1vY2soKVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IG1vY2sudmVyaWZ5KCkpKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjcmVhdGluZyByZWRpc09ETScsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIG1vY2tzID0gW11cbiAgICB9KVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgaGF2ZSBleHBlY3RlZCBwcm9wZXJ0aWVzJywgKCkgPT5cbiAgICAgIHJlZGlzT0RNKHsgcmVkaXNDbGllbnQgfSkuc2hvdWxkLmhhdmUuYWxsLmtleXMoZXhwZWN0ZWRPRE1Qcm9wZXJ0aWVzKSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIGNyZWF0aW5nIGEgbW9kZWwgb2JqZWN0JywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpdCgnc2hvdWxkIGhhdmUgZXhwZWN0ZWQgcHJvcGVydGllcycsICgpID0+XG4gICAgICAgIHJlZGlzT0RNKHsgcmVkaXNDbGllbnQgfSlcbiAgICAgICAgICAuY3JlYXRlKHsga2V5OiBkYXRhLmlkLCBkYXRhOiBkYXRhIH0pLnNob3VsZC5oYXZlLmFsbFxuICAgICAgICAgIC5rZXlzKGV4cGVjdGVkTW9kZWxPYmpQcm9wZXJ0aWVzKSlcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpdCgnc2hvdWxkIG1hcCB0aGUgZGF0YSBwcm9wZXJseScsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kZWxPYmogPSByZWRpc09ETSh7IHJlZGlzQ2xpZW50IH0pXG4gICAgICAgICAgLmNyZWF0ZSh7IGtleTogZGF0YS5pZCwgZGF0YTogZGF0YSB9KVxuICAgICAgICBjb25zdCBtb2RlbE9iakRhdGEgPSBtb2RlbE9iai5kYXRhXG5cbiAgICAgICAgbW9kZWxPYmoua2V5LnNob3VsZC5lcXVhbChkYXRhLmlkKVxuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpXG4gICAgICAgICAgLmZvckVhY2goZW50cnkgPT4gbW9kZWxPYmpEYXRhLnNob3VsZC5oYXZlLm93bi5wcm9wZXJ0eSguLi5lbnRyeSkpXG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMobW9kZWxPYmpEYXRhKVxuICAgICAgICAgIC5mb3JFYWNoKGVudHJ5ID0+IGRhdGEuc2hvdWxkLmhhdmUub3duLnByb3BlcnR5KC4uLmVudHJ5KSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gc2F2aW5nIGEgbW9kZWwgb2JqZWN0JywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXNDbGllbnQuaG1zZXQub25jZSgpLndpdGhFeGFjdEFyZ3MoLi4ucGFzc2VkRGF0YSlcbiAgICAgICAgLnJlc29sdmVzKHBvc2l0aXZlUmVwbHkpXG4gICAgICBtb2NrcyA9IFsgcmVkaXNDbGllbnQuaG1zZXQgXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgcmVkaXNPRE0oeyByZWRpc0NsaWVudCB9KVxuICAgICAgICAuY3JlYXRlKHsga2V5OiBkYXRhLmlkLCBkYXRhOiBkYXRhIH0pLnNhdmUoKS5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBiZSBzdWNjZXNzZnVsJywgYXN5bmMgKCkgPT5cbiAgICAgIHJlZGlzT0RNKHsgcmVkaXNDbGllbnQgfSlcbiAgICAgICAgLmNyZWF0ZSh7IGtleTogZGF0YS5pZCwgZGF0YTogZGF0YSB9KS5zYXZlKCkuc2hvdWxkLmV2ZW50dWFsbHlcbiAgICAgICAgLmVxdWFsKHBvc2l0aXZlUmVwbHkpKVxuICB9KVxufSlcbiJdfQ==