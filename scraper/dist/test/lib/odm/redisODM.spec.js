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
      it('should return a promise', function () {
        return (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).create({ data: data, idKey: idKey }).should.be.a('promise');
      });

      // eslint-disable-next-line no-undef
      it('should have expected properties', function () {
        return (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).create({ data: data, idKey: idKey }).should.eventually.include.keys(expectedModelObjProperties);
      });

      // eslint-disable-next-line no-undef
      it('should map the data properly', async function () {
        var modelObj = await (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).create({ data: data, idKey: idKey });
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
    it('should return a promise', async function () {
      return (await (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).create({ data: data, idKey: idKey })).save().should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should be successful', async function () {
      return (await (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port }).create({ data: data, idKey: idKey })).save().should.eventually.equal(positiveReply);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi9vZG0vcmVkaXNPRE0uc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwicmVkaXNXcmFwcGVyIiwicmVkaXNXcmFwcGVyQ2xpZW50IiwiaG9zdCIsInBvcnQiLCJleHBlY3RlZE9ETVByb3BlcnRpZXMiLCJleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcyIsInBhc3NlZERhdGEiLCJkYXRhIiwiaWRLZXkiLCJwb3NpdGl2ZVJlcGx5IiwiYmVmb3JlIiwiYmVmb3JlRWFjaCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsImFmdGVyRWFjaCIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwiaXQiLCJyZWRpcyIsInNob3VsZCIsImluY2x1ZGUiLCJrZXlzIiwiY3JlYXRlIiwiYmUiLCJhIiwiZXZlbnR1YWxseSIsIm1vZGVsT2JqIiwibW9kZWxPYmpEYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImhhdmUiLCJvd24iLCJwcm9wZXJ0eSIsImVudHJ5IiwiaG1zZXQiLCJyZXNvbHZlcyIsInNhdmUiLCJlcXVhbCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7OztvTUFMQTs7QUFFQTs7QUFFQTs7O0FBSUE7QUFDQUEsU0FBUyxVQUFULEVBQXFCLFlBQU07QUFDekIsTUFDRUMsY0FERjtBQUFBLE1BRUVDLHFCQUZGO0FBQUEsTUFHRUMsMkJBSEY7QUFBQSxNQUlFQyxhQUpGO0FBQUEsTUFLRUMsYUFMRjtBQUFBLE1BTUVDLDhCQU5GO0FBQUEsTUFPRUMsbUNBUEY7QUFBQSxNQVFFQyxtQkFSRjtBQUFBLE1BU0VDLGFBVEY7QUFBQSxNQVVFQyxjQVZGO0FBQUEsTUFXRUMsc0JBWEY7O0FBYUE7QUFDQUMsU0FBTyxZQUFNO0FBQ1hSLFdBQU8sV0FBUDtBQUNBQyxXQUFPLE1BQVA7QUFDQUMsNEJBQXdCLENBQUMsUUFBRCxDQUF4QjtBQUNBQyxpQ0FBNkIsQ0FBQyxN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QUFuQixDQUF5QnhCLElBQXpCLElBQWdDQyxhQUFoQyxpREFBaURQLFVBQWpELEdBQ0crQixRQURILENBQ1k1QixhQURaO0FBRUFWLGNBQVEsQ0FBRUMsWUFBRixFQUFnQkMsbUJBQW1CbUMsS0FBbkMsQ0FBUjtBQUNELEtBSkQ7O0FBTUE7QUFDQWpCLE9BQUcseUJBQUgsRUFBOEI7QUFBQSxhQUM1QixDQUFDLE1BQU0sd0JBQVMsRUFBRUMsT0FBT3BCLFlBQVQsRUFBVCxFQUFrQyxFQUFFRSxVQUFGLEVBQVFDLFVBQVIsRUFBbEMsRUFDSnFCLE1BREksQ0FDRyxFQUFFakIsTUFBTUEsSUFBUixFQUFjQyxZQUFkLEVBREgsQ0FBUCxFQUNrQzhCLElBRGxDLEdBQ3lDakIsTUFEekMsQ0FDZ0RJLEVBRGhELENBQ21EQyxDQURuRCxDQUNxRCxTQURyRCxDQUQ0QjtBQUFBLEtBQTlCOztBQUlBO0FBQ0FQLE9BQUcsc0JBQUgsRUFBMkI7QUFBQSxhQUN6QixDQUFDLE1BQU0sd0JBQVMsRUFBRUMsT0FBT3BCLFlBQVQsRUFBVCxFQUFrQyxFQUFFRSxVQUFGLEVBQVFDLFVBQVIsRUFBbEMsRUFDSnFCLE1BREksQ0FDRyxFQUFFakIsTUFBTUEsSUFBUixFQUFjQyxZQUFkLEVBREgsQ0FBUCxFQUNrQzhCLElBRGxDLEdBQ3lDakIsTUFEekMsQ0FDZ0RNLFVBRGhELENBRUdZLEtBRkgsQ0FFUzlCLGFBRlQsQ0FEeUI7QUFBQSxLQUEzQjtBQUlELEdBbEJEO0FBbUJELENBakdEIiwiZmlsZSI6InJlZGlzT0RNLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBleHBlY3QgZnJvbSAnLi8uLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCByZWRpc09ETSBmcm9tICcuLy4uLy4uLy4uL21haW4vbGliL29kbS9yZWRpc09ETSdcbi8vIG1vY2tzXG5pbXBvcnQgcmVkaXNXcmFwcGVyTW9jaywgeyByZWRpc1dyYXBwZXJDbGllbnRNb2NrIH1cbiAgZnJvbSAnLi8uLi8uLi9tb2Nrcy93cmFwcGVycy9yZWRpc1dyYXBwZXInXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuZGVzY3JpYmUoJ1JlZGlzT0RNJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICByZWRpc1dyYXBwZXIsXG4gICAgcmVkaXNXcmFwcGVyQ2xpZW50LFxuICAgIGhvc3QsXG4gICAgcG9ydCxcbiAgICBleHBlY3RlZE9ETVByb3BlcnRpZXMsXG4gICAgZXhwZWN0ZWRNb2RlbE9ialByb3BlcnRpZXMsXG4gICAgcGFzc2VkRGF0YSxcbiAgICBkYXRhLFxuICAgIGlkS2V5LFxuICAgIHBvc2l0aXZlUmVwbHlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICBob3N0ID0gJ2xvY2FsaG9zdCdcbiAgICBwb3J0ID0gJzEyMzQnXG4gICAgZXhwZWN0ZWRPRE1Qcm9wZXJ0aWVzID0gWydjcmVhdGUnXVxuICAgIGV4cGVjdGVkTW9kZWxPYmpQcm9wZXJ0aWVzID0gWydkYXRhJywgJ3NhdmUnXVxuICAgIHBhc3NlZERhdGEgPSBbMSwgJ2lkJywgMSwgJ3ZhbHVlJywgJzEnXVxuICAgIGRhdGEgPSB7ICdpZCc6IDEsICd2YWx1ZSc6ICcxJyB9XG4gICAgaWRLZXkgPSAnaWQnXG4gICAgcG9zaXRpdmVSZXBseSA9ICdPSydcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgcmVkaXNXcmFwcGVyID0gcmVkaXNXcmFwcGVyTW9jaygpXG4gICAgcmVkaXNXcmFwcGVyQ2xpZW50ID0gcmVkaXNXcmFwcGVyQ2xpZW50TW9jaygpXG4gICAgcmVkaXNXcmFwcGVyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgaG9zdCwgcG9ydCB9KVxuICAgICAgLnJldHVybnMocmVkaXNXcmFwcGVyQ2xpZW50KVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IG1vY2sudmVyaWZ5KCkpKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjcmVhdGluZyByZWRpc09ETScsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIG1vY2tzID0gWyByZWRpc1dyYXBwZXIgXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGhhdmUgZXhwZWN0ZWQgcHJvcGVydGllcycsICgpID0+XG4gICAgICByZWRpc09ETSh7IHJlZGlzOiByZWRpc1dyYXBwZXIgfSkoeyBob3N0LCBwb3J0IH0pLnNob3VsZC5pbmNsdWRlXG4gICAgICAgIC5rZXlzKGV4cGVjdGVkT0RNUHJvcGVydGllcykpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBkZXNjcmliZSgnV2hlbiBjcmVhdGluZyBhIG1vZGVsIG9iamVjdCcsICgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgKCkgPT5cbiAgICAgICAgcmVkaXNPRE0oeyByZWRpczogcmVkaXNXcmFwcGVyIH0pKHsgaG9zdCwgcG9ydCB9KVxuICAgICAgICAgIC5jcmVhdGUoeyBkYXRhOiBkYXRhLCBpZEtleSB9KS5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGl0KCdzaG91bGQgaGF2ZSBleHBlY3RlZCBwcm9wZXJ0aWVzJywgKCkgPT5cbiAgICAgICAgcmVkaXNPRE0oeyByZWRpczogcmVkaXNXcmFwcGVyIH0pKHsgaG9zdCwgcG9ydCB9KVxuICAgICAgICAgIC5jcmVhdGUoeyBkYXRhOiBkYXRhLCBpZEtleSB9KS5zaG91bGQuZXZlbnR1YWxseS5pbmNsdWRlXG4gICAgICAgICAgLmtleXMoZXhwZWN0ZWRNb2RlbE9ialByb3BlcnRpZXMpKVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGl0KCdzaG91bGQgbWFwIHRoZSBkYXRhIHByb3Blcmx5JywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RlbE9iaiA9IGF3YWl0IHJlZGlzT0RNKHsgcmVkaXM6IHJlZGlzV3JhcHBlciB9KSh7IGhvc3QsIHBvcnQgfSlcbiAgICAgICAgICAuY3JlYXRlKHsgZGF0YTogZGF0YSwgaWRLZXkgfSlcbiAgICAgICAgY29uc3QgbW9kZWxPYmpEYXRhID0gbW9kZWxPYmouZGF0YVxuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpXG4gICAgICAgICAgLmZvckVhY2goZW50cnkgPT4gbW9kZWxPYmpEYXRhLnNob3VsZC5oYXZlLm93bi5wcm9wZXJ0eSguLi5lbnRyeSkpXG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMobW9kZWxPYmpEYXRhKVxuICAgICAgICAgIC5mb3JFYWNoKGVudHJ5ID0+IGRhdGEuc2hvdWxkLmhhdmUub3duLnByb3BlcnR5KC4uLmVudHJ5KSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gc2F2aW5nIGEgbW9kZWwgb2JqZWN0JywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXNXcmFwcGVyQ2xpZW50Lmhtc2V0Lm9uY2UoKS53aXRoRXhhY3RBcmdzKC4uLnBhc3NlZERhdGEpXG4gICAgICAgIC5yZXNvbHZlcyhwb3NpdGl2ZVJlcGx5KVxuICAgICAgbW9ja3MgPSBbIHJlZGlzV3JhcHBlciwgcmVkaXNXcmFwcGVyQ2xpZW50Lmhtc2V0IF1cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgYXN5bmMgKCkgPT5cbiAgICAgIChhd2FpdCByZWRpc09ETSh7IHJlZGlzOiByZWRpc1dyYXBwZXIgfSkoeyBob3N0LCBwb3J0IH0pXG4gICAgICAgIC5jcmVhdGUoeyBkYXRhOiBkYXRhLCBpZEtleSB9KSkuc2F2ZSgpLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGJlIHN1Y2Nlc3NmdWwnLCBhc3luYyAoKSA9PlxuICAgICAgKGF3YWl0IHJlZGlzT0RNKHsgcmVkaXM6IHJlZGlzV3JhcHBlciB9KSh7IGhvc3QsIHBvcnQgfSlcbiAgICAgICAgLmNyZWF0ZSh7IGRhdGE6IGRhdGEsIGlkS2V5IH0pKS5zYXZlKCkuc2hvdWxkLmV2ZW50dWFsbHlcbiAgICAgICAgLmVxdWFsKHBvc2l0aXZlUmVwbHkpKVxuICB9KVxufSlcbiJdfQ==