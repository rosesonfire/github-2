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
      idKey = void 0,
      positiveReply = void 0;

  // eslint-disable-next-line no-undef
  before(function () {
    host = 'localhost';
    port = '1234';
    expectedODMProperties = ['create'];
    expectedModelObjProperties = ['data', 'save'];
    passedData = [1, 'id', 1, 'value', '1'];
    data = { 'id': 1, 'value': '1' };
    idKey = 'id';
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
        return (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).create({ data: data, idKey: idKey }).should.include.keys(expectedModelObjProperties);
      });

      // eslint-disable-next-line no-undef
      it('should map the data properly', function () {
        var modelObj = (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).create({ data: data, idKey: idKey });
        var modelObjData = modelObj.data;

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
      return (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).create({ data: data, idKey: idKey }).save().should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should be successful', async function () {
      return (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).create({ data: data, idKey: idKey }).save().should.eventually.equal(positiveReply);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi9vZG0vcmVkaXNPRE0uc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwicmVkaXNXcmFwcGVyIiwicmVkaXNXcmFwcGVyQ2xpZW50IiwiaG9zdCIsInBvcnQiLCJleHBlY3RlZE9ETVByb3BlcnRpZXMiLCJleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcyIsInBhc3NlZERhdGEiLCJkYXRhIiwiaWRLZXkiLCJwb3NpdGl2ZVJlcGx5IiwiYmVmb3JlIiwiYmVmb3JlRWFjaCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsImFmdGVyRWFjaCIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwiaXQiLCJyZWRpcyIsInNob3VsZCIsImluY2x1ZGUiLCJrZXlzIiwiY3JlYXRlIiwibW9kZWxPYmoiLCJtb2RlbE9iakRhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwiaGF2ZSIsIm93biIsInByb3BlcnR5IiwiZW50cnkiLCJobXNldCIsInJlc29sdmVzIiwic2F2ZSIsImJlIiwiYSIsImV2ZW50dWFsbHkiLCJlcXVhbCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7OztvTUFMQTs7QUFFQTs7QUFFQTs7O0FBSUE7QUFDQUEsU0FBUyxVQUFULEVBQXFCLFlBQU07QUFDekIsTUFDRUMsY0FERjtBQUFBLE1BRUVDLHFCQUZGO0FBQUEsTUFHRUMsMkJBSEY7QUFBQSxNQUlFQyxhQUpGO0FBQUEsTUFLRUMsYUFMRjtBQUFBLE1BTUVDLDhCQU5GO0FBQUEsTUFPRUMsbUNBUEY7QUFBQSxNQVFFQyxtQkFSRjtBQUFBLE1BU0VDLGFBVEY7QUFBQSxNQVVFQyxjQVZGO0FBQUEsTUFXRUMsc0JBWEY7O0FBYUE7QUFDQUMsU0FBTyxZQUFNO0FBQ1hSLFdBQU8sV0FBUDtBQUNBQyxXQUFPLE1BQVA7QUFDQUMsNEJBQXdCLENBQUMsUUFBRCxDQUF4QjtBQUNBQyxpQ0FBNkIsQ0FBQyxN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LENBQ1UsRUFBRWpCLE1BQU1BLElBQVIsRUFBY0MsWUFBZCxFQURWLEVBQ2lDMkIsSUFEakMsR0FDd0NkLE1BRHhDLENBQytDZSxFQUQvQyxDQUNrREMsQ0FEbEQsQ0FDb0QsU0FEcEQsQ0FENEI7QUFBQSxLQUE5Qjs7QUFJQTtBQUNBbEIsT0FBRyxzQkFBSCxFQUEyQjtBQUFBLGFBQ3pCLHdCQUFTLEVBQUVDLE9BQU9wQixZQUFULEVBQVQsRUFBa0MsRUFBRUUsVUFBRixFQUFRQyxVQUFSLEVBQWxDLEVBQ0dxQixNQURILENBQ1UsRUFBRWpCLE1BQU1BLElBQVIsRUFBY0MsWUFBZCxFQURWLEVBQ2lDMkIsSUFEakMsR0FDd0NkLE1BRHhDLENBQytDaUIsVUFEL0MsQ0FFR0MsS0FGSCxDQUVTOUIsYUFGVCxDQUR5QjtBQUFBLEtBQTNCO0FBSUQsR0FsQkQ7QUFtQkQsQ0E1RkQiLCJmaWxlIjoicmVkaXNPRE0uc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGV4cGVjdCBmcm9tICcuLy4uLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHJlZGlzT0RNIGZyb20gJy4vLi4vLi4vLi4vbWFpbi9saWIvb2RtL3JlZGlzT0RNJ1xuLy8gbW9ja3NcbmltcG9ydCByZWRpc1dyYXBwZXJNb2NrLCB7IHJlZGlzV3JhcHBlckNsaWVudE1vY2sgfVxuICBmcm9tICcuLy4uLy4uL21vY2tzL3dyYXBwZXJzL3JlZGlzV3JhcHBlcidcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5kZXNjcmliZSgnUmVkaXNPRE0nLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIHJlZGlzV3JhcHBlcixcbiAgICByZWRpc1dyYXBwZXJDbGllbnQsXG4gICAgaG9zdCxcbiAgICBwb3J0LFxuICAgIGV4cGVjdGVkT0RNUHJvcGVydGllcyxcbiAgICBleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcyxcbiAgICBwYXNzZWREYXRhLFxuICAgIGRhdGEsXG4gICAgaWRLZXksXG4gICAgcG9zaXRpdmVSZXBseVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmUoKCkgPT4ge1xuICAgIGhvc3QgPSAnbG9jYWxob3N0J1xuICAgIHBvcnQgPSAnMTIzNCdcbiAgICBleHBlY3RlZE9ETVByb3BlcnRpZXMgPSBbJ2NyZWF0ZSddXG4gICAgZXhwZWN0ZWRNb2RlbE9ialByb3BlcnRpZXMgPSBbJ2RhdGEnLCAnc2F2ZSddXG4gICAgcGFzc2VkRGF0YSA9IFsxLCAnaWQnLCAxLCAndmFsdWUnLCAnMSddXG4gICAgZGF0YSA9IHsgJ2lkJzogMSwgJ3ZhbHVlJzogJzEnIH1cbiAgICBpZEtleSA9ICdpZCdcbiAgICBwb3NpdGl2ZVJlcGx5ID0gJ09LJ1xuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICByZWRpc1dyYXBwZXIgPSByZWRpc1dyYXBwZXJNb2NrKClcbiAgICByZWRpc1dyYXBwZXJDbGllbnQgPSByZWRpc1dyYXBwZXJDbGllbnRNb2NrKClcbiAgICByZWRpc1dyYXBwZXIub25jZSgpLndpdGhFeGFjdEFyZ3MoeyBob3N0LCBwb3J0IH0pXG4gICAgICAucmV0dXJucyhyZWRpc1dyYXBwZXJDbGllbnQpXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGNyZWF0aW5nIHJlZGlzT0RNJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbIHJlZGlzV3JhcHBlciBdXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgaGF2ZSBleHBlY3RlZCBwcm9wZXJ0aWVzJywgKCkgPT5cbiAgICAgIHJlZGlzT0RNKHsgcmVkaXM6IHJlZGlzV3JhcHBlciB9KSh7IGhvc3QsIHBvcnQgfSkuc2hvdWxkLmluY2x1ZGVcbiAgICAgICAgLmtleXMoZXhwZWN0ZWRPRE1Qcm9wZXJ0aWVzKSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIGNyZWF0aW5nIGEgbW9kZWwgb2JqZWN0JywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpdCgnc2hvdWxkIGhhdmUgZXhwZWN0ZWQgcHJvcGVydGllcycsICgpID0+XG4gICAgICAgIHJlZGlzT0RNKHsgcmVkaXM6IHJlZGlzV3JhcHBlciB9KSh7IGhvc3QsIHBvcnQgfSlcbiAgICAgICAgICAuY3JlYXRlKHsgZGF0YTogZGF0YSwgaWRLZXkgfSkuc2hvdWxkLmluY2x1ZGVcbiAgICAgICAgICAua2V5cyhleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcykpXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBtYXAgdGhlIGRhdGEgcHJvcGVybHknLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVsT2JqID0gcmVkaXNPRE0oeyByZWRpczogcmVkaXNXcmFwcGVyIH0pKHsgaG9zdCwgcG9ydCB9KVxuICAgICAgICAgIC5jcmVhdGUoeyBkYXRhOiBkYXRhLCBpZEtleSB9KVxuICAgICAgICBjb25zdCBtb2RlbE9iakRhdGEgPSBtb2RlbE9iai5kYXRhXG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSlcbiAgICAgICAgICAuZm9yRWFjaChlbnRyeSA9PiBtb2RlbE9iakRhdGEuc2hvdWxkLmhhdmUub3duLnByb3BlcnR5KC4uLmVudHJ5KSlcblxuICAgICAgICBPYmplY3QuZW50cmllcyhtb2RlbE9iakRhdGEpXG4gICAgICAgICAgLmZvckVhY2goZW50cnkgPT4gZGF0YS5zaG91bGQuaGF2ZS5vd24ucHJvcGVydHkoLi4uZW50cnkpKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBzYXZpbmcgYSBtb2RlbCBvYmplY3QnLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICByZWRpc1dyYXBwZXJDbGllbnQuaG1zZXQub25jZSgpLndpdGhFeGFjdEFyZ3MoLi4ucGFzc2VkRGF0YSlcbiAgICAgICAgLnJlc29sdmVzKHBvc2l0aXZlUmVwbHkpXG4gICAgICBtb2NrcyA9IFsgcmVkaXNXcmFwcGVyLCByZWRpc1dyYXBwZXJDbGllbnQuaG1zZXQgXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgcmVkaXNPRE0oeyByZWRpczogcmVkaXNXcmFwcGVyIH0pKHsgaG9zdCwgcG9ydCB9KVxuICAgICAgICAuY3JlYXRlKHsgZGF0YTogZGF0YSwgaWRLZXkgfSkuc2F2ZSgpLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGJlIHN1Y2Nlc3NmdWwnLCBhc3luYyAoKSA9PlxuICAgICAgcmVkaXNPRE0oeyByZWRpczogcmVkaXNXcmFwcGVyIH0pKHsgaG9zdCwgcG9ydCB9KVxuICAgICAgICAuY3JlYXRlKHsgZGF0YTogZGF0YSwgaWRLZXkgfSkuc2F2ZSgpLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgIC5lcXVhbChwb3NpdGl2ZVJlcGx5KSlcbiAgfSlcbn0pXG4iXX0=