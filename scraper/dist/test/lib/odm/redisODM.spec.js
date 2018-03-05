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
      return (0, _redisODM2.default)({ redis: redisWrapper, host: host, port: port }).should.include.keys(expectedODMProperties);
    });

    // eslint-disable-next-line no-undef
    describe('When creating a model object', function () {
      // eslint-disable-next-line no-undef
      it('should have expected properties', function () {
        return (0, _redisODM2.default)({ redis: redisWrapper, host: host, port: port }).create({ key: data.id, data: data }).should.include.keys(expectedModelObjProperties);
      });

      // eslint-disable-next-line no-undef
      it('should map the data properly', function () {
        var modelObj = (0, _redisODM2.default)({ redis: redisWrapper, host: host, port: port }).create({ key: data.id, data: data });
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
      return (0, _redisODM2.default)({ redis: redisWrapper, host: host, port: port }).create({ key: data.id, data: data }).save().should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should be successful', async function () {
      return (0, _redisODM2.default)({ redis: redisWrapper, host: host, port: port }).create({ key: data.id, data: data }).save().should.eventually.equal(positiveReply);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi9vZG0vcmVkaXNPRE0uc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwicmVkaXNXcmFwcGVyIiwicmVkaXNXcmFwcGVyQ2xpZW50IiwiaG9zdCIsInBvcnQiLCJleHBlY3RlZE9ETVByb3BlcnRpZXMiLCJleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcyIsInBhc3NlZERhdGEiLCJkYXRhIiwicG9zaXRpdmVSZXBseSIsImJlZm9yZSIsImJlZm9yZUVhY2giLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJldHVybnMiLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsIml0IiwicmVkaXMiLCJzaG91bGQiLCJpbmNsdWRlIiwia2V5cyIsImNyZWF0ZSIsImtleSIsImlkIiwibW9kZWxPYmoiLCJtb2RlbE9iakRhdGEiLCJlcXVhbCIsIk9iamVjdCIsImVudHJpZXMiLCJoYXZlIiwib3duIiwicHJvcGVydHkiLCJlbnRyeSIsImhtc2V0IiwicmVzb2x2ZXMiLCJzYXZlIiwiYmUiLCJhIiwiZXZlbnR1YWxseSJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7OztvTUFMQTs7QUFFQTs7QUFFQTs7O0FBSUE7QUFDQUEsU0FBUyxVQUFULEVBQXFCLFlBQU07QUFDekIsTUFDRUMsY0FERjtBQUFBLE1BRUVDLHFCQUZGO0FBQUEsTUFHRUMsMkJBSEY7QUFBQSxNQUlFQyxhQUpGO0FBQUEsTUFLRUMsYUFMRjtBQUFBLE1BTUVDLDhCQU5GO0FBQUEsTUFPRUMsbUNBUEY7QUFBQSxNQVFFQyxtQkFSRjtBQUFBLE1BU0VDLGFBVEY7QUFBQSxNQVVFQyxzQkFWRjs7QUFZQTtBQUNBQyxTQUFPLFlBQU07QUFDWFAsV0FBTyxXQUFQO0FBQ0FDLFdBQU8sTUFBUDtBQUNBQyw0QkFBd0IsQ0FBQyxRQUFELENBQXhCO0FBQ0FDLGlDQUE2QixDQUFDLEtBQUQsRUFBUSxNQUFS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WUFBVCxFQUF1QkUsVUFBdkIsRUFBNkJDLFVBQTdCLEVBQVQsRUFDR29CLE1BREgsQ0FDVSxFQUFFQyxLQUFLakIsS0FBS2tCLEVBQVosRUFBZ0JsQixNQUFNQSxJQUF0QixFQURWLEVBQ3dDOEIsSUFEeEMsR0FDK0NqQixNQUQvQyxDQUNzRGtCLEVBRHRELENBQ3lEQyxDQUR6RCxDQUMyRCxTQUQzRCxDQUQ0QjtBQUFBLEtBQTlCOztBQUlBO0FBQ0FyQixPQUFHLHNCQUFILEVBQTJCO0FBQUEsYUFDekIsd0JBQVMsRUFBRUMsT0FBT25CLFlBQVQsRUFBdUJFLFVBQXZCLEVBQTZCQyxVQUE3QixFQUFULEVBQ0dvQixNQURILENBQ1UsRUFBRUMsS0FBS2pCLEtBQUtrQixFQUFaLEVBQWdCbEIsTUFBTUEsSUFBdEIsRUFEVixFQUN3QzhCLElBRHhDLEdBQytDakIsTUFEL0MsQ0FDc0RvQixVQUR0RCxDQUVHWixLQUZILENBRVNwQixhQUZULENBRHlCO0FBQUEsS0FBM0I7QUFJRCxHQWxCRDtBQW1CRCxDQTVGRCIsImZpbGUiOiJyZWRpc09ETS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgcmVkaXNPRE0gZnJvbSAnLi8uLi8uLi8uLi9tYWluL2xpYi9vZG0vcmVkaXNPRE0nXG4vLyBtb2Nrc1xuaW1wb3J0IHJlZGlzV3JhcHBlck1vY2ssIHsgcmVkaXNXcmFwcGVyQ2xpZW50TW9jayB9XG4gIGZyb20gJy4vLi4vLi4vbW9ja3Mvd3JhcHBlcnMvcmVkaXNXcmFwcGVyJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdSZWRpc09ETScsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgcmVkaXNXcmFwcGVyLFxuICAgIHJlZGlzV3JhcHBlckNsaWVudCxcbiAgICBob3N0LFxuICAgIHBvcnQsXG4gICAgZXhwZWN0ZWRPRE1Qcm9wZXJ0aWVzLFxuICAgIGV4cGVjdGVkTW9kZWxPYmpQcm9wZXJ0aWVzLFxuICAgIHBhc3NlZERhdGEsXG4gICAgZGF0YSxcbiAgICBwb3NpdGl2ZVJlcGx5XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgaG9zdCA9ICdsb2NhbGhvc3QnXG4gICAgcG9ydCA9ICcxMjM0J1xuICAgIGV4cGVjdGVkT0RNUHJvcGVydGllcyA9IFsnY3JlYXRlJ11cbiAgICBleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcyA9IFsna2V5JywgJ2RhdGEnLCAnc2F2ZSddXG4gICAgcGFzc2VkRGF0YSA9IFsxLCAnaWQnLCAxLCAndmFsdWUnLCAnMSddXG4gICAgZGF0YSA9IHsgJ2lkJzogMSwgJ3ZhbHVlJzogJzEnIH1cbiAgICBwb3NpdGl2ZVJlcGx5ID0gJ09LJ1xuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICByZWRpc1dyYXBwZXIgPSByZWRpc1dyYXBwZXJNb2NrKClcbiAgICByZWRpc1dyYXBwZXJDbGllbnQgPSByZWRpc1dyYXBwZXJDbGllbnRNb2NrKClcbiAgICByZWRpc1dyYXBwZXIub25jZSgpLndpdGhFeGFjdEFyZ3MoeyBob3N0LCBwb3J0IH0pXG4gICAgICAucmV0dXJucyhyZWRpc1dyYXBwZXJDbGllbnQpXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGNyZWF0aW5nIHJlZGlzT0RNJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbIHJlZGlzV3JhcHBlciBdXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgaGF2ZSBleHBlY3RlZCBwcm9wZXJ0aWVzJywgKCkgPT5cbiAgICAgIHJlZGlzT0RNKHsgcmVkaXM6IHJlZGlzV3JhcHBlciwgaG9zdCwgcG9ydCB9KS5zaG91bGQuaW5jbHVkZVxuICAgICAgICAua2V5cyhleHBlY3RlZE9ETVByb3BlcnRpZXMpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgZGVzY3JpYmUoJ1doZW4gY3JlYXRpbmcgYSBtb2RlbCBvYmplY3QnLCAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGl0KCdzaG91bGQgaGF2ZSBleHBlY3RlZCBwcm9wZXJ0aWVzJywgKCkgPT5cbiAgICAgICAgcmVkaXNPRE0oeyByZWRpczogcmVkaXNXcmFwcGVyLCBob3N0LCBwb3J0IH0pXG4gICAgICAgICAgLmNyZWF0ZSh7IGtleTogZGF0YS5pZCwgZGF0YTogZGF0YSB9KS5zaG91bGQuaW5jbHVkZVxuICAgICAgICAgIC5rZXlzKGV4cGVjdGVkTW9kZWxPYmpQcm9wZXJ0aWVzKSlcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpdCgnc2hvdWxkIG1hcCB0aGUgZGF0YSBwcm9wZXJseScsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kZWxPYmogPSByZWRpc09ETSh7IHJlZGlzOiByZWRpc1dyYXBwZXIsIGhvc3QsIHBvcnQgfSlcbiAgICAgICAgICAuY3JlYXRlKHsga2V5OiBkYXRhLmlkLCBkYXRhOiBkYXRhIH0pXG4gICAgICAgIGNvbnN0IG1vZGVsT2JqRGF0YSA9IG1vZGVsT2JqLmRhdGFcblxuICAgICAgICBtb2RlbE9iai5rZXkuc2hvdWxkLmVxdWFsKGRhdGEuaWQpXG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSlcbiAgICAgICAgICAuZm9yRWFjaChlbnRyeSA9PiBtb2RlbE9iakRhdGEuc2hvdWxkLmhhdmUub3duLnByb3BlcnR5KC4uLmVudHJ5KSlcblxuICAgICAgICBPYmplY3QuZW50cmllcyhtb2RlbE9iakRhdGEpXG4gICAgICAgICAgLmZvckVhY2goZW50cnkgPT4gZGF0YS5zaG91bGQuaGF2ZS5vd24ucHJvcGVydHkoLi4uZW50cnkpKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBzYXZpbmcgYSBtb2RlbCBvYmplY3QnLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICByZWRpc1dyYXBwZXJDbGllbnQuaG1zZXQub25jZSgpLndpdGhFeGFjdEFyZ3MoLi4ucGFzc2VkRGF0YSlcbiAgICAgICAgLnJlc29sdmVzKHBvc2l0aXZlUmVwbHkpXG4gICAgICBtb2NrcyA9IFsgcmVkaXNXcmFwcGVyLCByZWRpc1dyYXBwZXJDbGllbnQuaG1zZXQgXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgcmVkaXNPRE0oeyByZWRpczogcmVkaXNXcmFwcGVyLCBob3N0LCBwb3J0IH0pXG4gICAgICAgIC5jcmVhdGUoeyBrZXk6IGRhdGEuaWQsIGRhdGE6IGRhdGEgfSkuc2F2ZSgpLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGJlIHN1Y2Nlc3NmdWwnLCBhc3luYyAoKSA9PlxuICAgICAgcmVkaXNPRE0oeyByZWRpczogcmVkaXNXcmFwcGVyLCBob3N0LCBwb3J0IH0pXG4gICAgICAgIC5jcmVhdGUoeyBrZXk6IGRhdGEuaWQsIGRhdGE6IGRhdGEgfSkuc2F2ZSgpLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgIC5lcXVhbChwb3NpdGl2ZVJlcGx5KSlcbiAgfSlcbn0pXG4iXX0=