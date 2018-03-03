'use strict';

var _setup = require('./../../setup');

var _setup2 = _interopRequireDefault(_setup);

var _redisODM = require('./../../../main/lib/odm/redisODM');

var _redisODM2 = _interopRequireDefault(_redisODM);

var _redisWrapper = require('./../../mocks/wrappers/redisWrapper');

var _redisWrapper2 = _interopRequireDefault(_redisWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // eslint-disable-next-line no-unused-vars

// unit

// mocks


// eslint-disable-next-line no-undef
describe('RedisODM', function () {
  var mocks = void 0,
      redisWrapper = void 0,
      redisWrapperClient = void 0,
      host = void 0,
      port = void 0,
      expectedODMProperties = void 0,
      expectedModelObjProperties = void 0,
      passedData = void 0,
      data = void 0,
      positiveReply = void 0;

  // eslint-disable-next-line no-undef
  before(function () {
    host = 'localhost';
    port = '1234';
    expectedODMProperties = ['create'];
    expectedModelObjProperties = ['key', 'data', 'save'];
    passedData = [1, 'id', 1, 'value', '1'];
    data = { 'id': 1, 'value': '1' };
    positiveReply = 'OK';
  });

  // eslint-disable-next-line no-undef
  beforeEach(function () {
    redisWrapper = (0, _redisWrapper2.default)();
    redisWrapperClient = (0, _redisWrapper.redisWrapperClientMock)();
    redisWrapper.once().withExactArgs({ host: host, port: port }).returns(redisWrapperClient);
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
      mocks = [redisWrapper];
    });

    // eslint-disable-next-line no-undef
    it('should have expected properties', function () {
      return (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).should.include.keys(expectedODMProperties);
    });

    // eslint-disable-next-line no-undef
    describe('When creating a model object', function () {
      // eslint-disable-next-line no-undef
      it('should have expected properties', function () {
        return (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).create({ key: data.id, data: data }).should.include.keys(expectedModelObjProperties);
      });

      // eslint-disable-next-line no-undef
      it('should map the data properly', function () {
        var modelObj = (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).create({ key: data.id, data: data });
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
      var _redisWrapperClient$h;

      (_redisWrapperClient$h = redisWrapperClient.hmset.once()).withExactArgs.apply(_redisWrapperClient$h, _toConsumableArray(passedData)).resolves(positiveReply);
      mocks = [redisWrapper, redisWrapperClient.hmset];
    });

    // eslint-disable-next-line no-undef
    it('should return a promise', function () {
      return (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).create({ key: data.id, data: data }).save().should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should be successful', async function () {
      return (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).create({ key: data.id, data: data }).save().should.eventually.equal(positiveReply);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi9vZG0vcmVkaXNPRE0uc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwicmVkaXNXcmFwcGVyIiwicmVkaXNXcmFwcGVyQ2xpZW50IiwiaG9zdCIsInBvcnQiLCJleHBlY3RlZE9ETVByb3BlcnRpZXMiLCJleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcyIsInBhc3NlZERhdGEiLCJkYXRhIiwicG9zaXRpdmVSZXBseSIsImJlZm9yZSIsImJlZm9yZUVhY2giLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJldHVybnMiLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsIml0IiwicmVkaXMiLCJzaG91bGQiLCJpbmNsdWRlIiwia2V5cyIsImNyZWF0ZSIsImtleSIsImlkIiwibW9kZWxPYmoiLCJtb2RlbE9iakRhdGEiLCJlcXVhbCIsIk9iamVjdCIsImVudHJpZXMiLCJoYXZlIiwib3duIiwicHJvcGVydHkiLCJlbnRyeSIsImhtc2V0IiwicmVzb2x2ZXMiLCJzYXZlIiwiYmUiLCJhIiwiZXZlbnR1YWxseSJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7OztvTUFMQTs7QUFFQTs7QUFFQTs7O0FBSUE7QUFDQUEsU0FBUyxVQUFULEVBQXFCLFlBQU07QUFDekIsTUFDRUMsY0FERjtBQUFBLE1BRUVDLHFCQUZGO0FBQUEsTUFHRUMsMkJBSEY7QUFBQSxNQUlFQyxhQUpGO0FBQUEsTUFLRUMsYUFMRjtBQUFBLE1BTUVDLDhCQU5GO0FBQUEsTUFPRUMsbUNBUEY7QUFBQSxNQVFFQyxtQkFSRjtBQUFBLE1BU0VDLGFBVEY7QUFBQSxNQVVFQyxzQkFWRjs7QUFZQTtBQUNBQyxTQUFPLFlBQU07QUFDWFAsV0FBTyxXQUFQO0FBQ0FDLFdBQU8sTUFBUDtBQUNBQyw0QkFBd0IsQ0FBQyxRQUFELENBQXhCO0FBQ0FDLGlDQUE2QixDQUFDLEtBQUQsRUFBUSxNQUFS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QUM1Qix3QkFBUyxFQUFFQyxPQUFPbkIsWUFBVCxFQUFULEVBQWtDLEVBQUVFLFVBQUYsRUFBUUMsVUFBUixFQUFsQyxFQUNHb0IsTUFESCxDQUNVLEVBQUVDLEtBQUtqQixLQUFLa0IsRUFBWixFQUFnQmxCLE1BQU1BLElBQXRCLEVBRFYsRUFDd0M4QixJQUR4QyxHQUMrQ2pCLE1BRC9DLENBQ3NEa0IsRUFEdEQsQ0FDeURDLENBRHpELENBQzJELFNBRDNELENBRDRCO0FBQUEsS0FBOUI7O0FBSUE7QUFDQXJCLE9BQUcsc0JBQUgsRUFBMkI7QUFBQSxhQUN6Qix3QkFBUyxFQUFFQyxPQUFPbkIsWUFBVCxFQUFULEVBQWtDLEVBQUVFLFVBQUYsRUFBUUMsVUFBUixFQUFsQyxFQUNHb0IsTUFESCxDQUNVLEVBQUVDLEtBQUtqQixLQUFLa0IsRUFBWixFQUFnQmxCLE1BQU1BLElBQXRCLEVBRFYsRUFDd0M4QixJQUR4QyxHQUMrQ2pCLE1BRC9DLENBQ3NEb0IsVUFEdEQsQ0FFR1osS0FGSCxDQUVTcEIsYUFGVCxDQUR5QjtBQUFBLEtBQTNCO0FBSUQsR0FsQkQ7QUFtQkQsQ0E1RkQiLCJmaWxlIjoicmVkaXNPRE0uc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGV4cGVjdCBmcm9tICcuLy4uLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHJlZGlzT0RNIGZyb20gJy4vLi4vLi4vLi4vbWFpbi9saWIvb2RtL3JlZGlzT0RNJ1xuLy8gbW9ja3NcbmltcG9ydCByZWRpc1dyYXBwZXJNb2NrLCB7IHJlZGlzV3JhcHBlckNsaWVudE1vY2sgfVxuICBmcm9tICcuLy4uLy4uL21vY2tzL3dyYXBwZXJzL3JlZGlzV3JhcHBlcidcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5kZXNjcmliZSgnUmVkaXNPRE0nLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIHJlZGlzV3JhcHBlcixcbiAgICByZWRpc1dyYXBwZXJDbGllbnQsXG4gICAgaG9zdCxcbiAgICBwb3J0LFxuICAgIGV4cGVjdGVkT0RNUHJvcGVydGllcyxcbiAgICBleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcyxcbiAgICBwYXNzZWREYXRhLFxuICAgIGRhdGEsXG4gICAgcG9zaXRpdmVSZXBseVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmUoKCkgPT4ge1xuICAgIGhvc3QgPSAnbG9jYWxob3N0J1xuICAgIHBvcnQgPSAnMTIzNCdcbiAgICBleHBlY3RlZE9ETVByb3BlcnRpZXMgPSBbJ2NyZWF0ZSddXG4gICAgZXhwZWN0ZWRNb2RlbE9ialByb3BlcnRpZXMgPSBbJ2tleScsICdkYXRhJywgJ3NhdmUnXVxuICAgIHBhc3NlZERhdGEgPSBbMSwgJ2lkJywgMSwgJ3ZhbHVlJywgJzEnXVxuICAgIGRhdGEgPSB7ICdpZCc6IDEsICd2YWx1ZSc6ICcxJyB9XG4gICAgcG9zaXRpdmVSZXBseSA9ICdPSydcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgcmVkaXNXcmFwcGVyID0gcmVkaXNXcmFwcGVyTW9jaygpXG4gICAgcmVkaXNXcmFwcGVyQ2xpZW50ID0gcmVkaXNXcmFwcGVyQ2xpZW50TW9jaygpXG4gICAgcmVkaXNXcmFwcGVyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgaG9zdCwgcG9ydCB9KVxuICAgICAgLnJldHVybnMocmVkaXNXcmFwcGVyQ2xpZW50KVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IG1vY2sudmVyaWZ5KCkpKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjcmVhdGluZyByZWRpc09ETScsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIG1vY2tzID0gWyByZWRpc1dyYXBwZXIgXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGhhdmUgZXhwZWN0ZWQgcHJvcGVydGllcycsICgpID0+XG4gICAgICByZWRpc09ETSh7IHJlZGlzOiByZWRpc1dyYXBwZXIgfSkoeyBob3N0LCBwb3J0IH0pLnNob3VsZC5pbmNsdWRlXG4gICAgICAgIC5rZXlzKGV4cGVjdGVkT0RNUHJvcGVydGllcykpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBkZXNjcmliZSgnV2hlbiBjcmVhdGluZyBhIG1vZGVsIG9iamVjdCcsICgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBoYXZlIGV4cGVjdGVkIHByb3BlcnRpZXMnLCAoKSA9PlxuICAgICAgICByZWRpc09ETSh7IHJlZGlzOiByZWRpc1dyYXBwZXIgfSkoeyBob3N0LCBwb3J0IH0pXG4gICAgICAgICAgLmNyZWF0ZSh7IGtleTogZGF0YS5pZCwgZGF0YTogZGF0YSB9KS5zaG91bGQuaW5jbHVkZVxuICAgICAgICAgIC5rZXlzKGV4cGVjdGVkTW9kZWxPYmpQcm9wZXJ0aWVzKSlcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpdCgnc2hvdWxkIG1hcCB0aGUgZGF0YSBwcm9wZXJseScsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kZWxPYmogPSByZWRpc09ETSh7IHJlZGlzOiByZWRpc1dyYXBwZXIgfSkoeyBob3N0LCBwb3J0IH0pXG4gICAgICAgICAgLmNyZWF0ZSh7IGtleTogZGF0YS5pZCwgZGF0YTogZGF0YSB9KVxuICAgICAgICBjb25zdCBtb2RlbE9iakRhdGEgPSBtb2RlbE9iai5kYXRhXG5cbiAgICAgICAgbW9kZWxPYmoua2V5LnNob3VsZC5lcXVhbChkYXRhLmlkKVxuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpXG4gICAgICAgICAgLmZvckVhY2goZW50cnkgPT4gbW9kZWxPYmpEYXRhLnNob3VsZC5oYXZlLm93bi5wcm9wZXJ0eSguLi5lbnRyeSkpXG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMobW9kZWxPYmpEYXRhKVxuICAgICAgICAgIC5mb3JFYWNoKGVudHJ5ID0+IGRhdGEuc2hvdWxkLmhhdmUub3duLnByb3BlcnR5KC4uLmVudHJ5KSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gc2F2aW5nIGEgbW9kZWwgb2JqZWN0JywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXNXcmFwcGVyQ2xpZW50Lmhtc2V0Lm9uY2UoKS53aXRoRXhhY3RBcmdzKC4uLnBhc3NlZERhdGEpXG4gICAgICAgIC5yZXNvbHZlcyhwb3NpdGl2ZVJlcGx5KVxuICAgICAgbW9ja3MgPSBbIHJlZGlzV3JhcHBlciwgcmVkaXNXcmFwcGVyQ2xpZW50Lmhtc2V0IF1cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgKCkgPT5cbiAgICAgIHJlZGlzT0RNKHsgcmVkaXM6IHJlZGlzV3JhcHBlciB9KSh7IGhvc3QsIHBvcnQgfSlcbiAgICAgICAgLmNyZWF0ZSh7IGtleTogZGF0YS5pZCwgZGF0YTogZGF0YSB9KS5zYXZlKCkuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgYmUgc3VjY2Vzc2Z1bCcsIGFzeW5jICgpID0+XG4gICAgICByZWRpc09ETSh7IHJlZGlzOiByZWRpc1dyYXBwZXIgfSkoeyBob3N0LCBwb3J0IH0pXG4gICAgICAgIC5jcmVhdGUoeyBrZXk6IGRhdGEuaWQsIGRhdGE6IGRhdGEgfSkuc2F2ZSgpLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgIC5lcXVhbChwb3NpdGl2ZVJlcGx5KSlcbiAgfSlcbn0pXG4iXX0=