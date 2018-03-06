'use strict';

var _setup = require('./../../setup');

var _redisODM = require('./../../../main/lib/odm/redisODM');

var _redisODM2 = _interopRequireDefault(_redisODM);

var _redisClientWrapper = require('./../../mocks/lib/wrappers/redisClientWrapper');

var _redisClientWrapper2 = _interopRequireDefault(_redisClientWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
// unit

// mocks


(0, _setup.describe)('RedisODM', function () {
  var mocks = void 0,
      redisClient = void 0,
      expectedODMProperties = void 0,
      expectedModelObjProperties = void 0,
      passedData = void 0,
      data = void 0,
      positiveReply = void 0;

  (0, _setup.before)(function () {
    expectedODMProperties = ['create'];
    expectedModelObjProperties = ['key', 'data', 'save'];
    passedData = [1, 'id', 1, 'value', '1'];
    data = { 'id': 1, 'value': '1' };
    positiveReply = 'OK';
  });

  (0, _setup.beforeEach)(function () {
    redisClient = (0, _redisClientWrapper2.default)();
  });

  (0, _setup.afterEach)(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  (0, _setup.describe)('When creating redisODM', function () {
    (0, _setup.beforeEach)(function () {
      mocks = [];
    });
    (0, _setup.it)('should have expected properties', function () {
      return (0, _redisODM2.default)({ redisClient: redisClient }).should.have.all.keys(expectedODMProperties);
    });

    (0, _setup.describe)('When creating a model object', function () {
      (0, _setup.it)('should have expected properties', function () {
        return (0, _redisODM2.default)({ redisClient: redisClient }).create({ key: data.id, data: data }).should.have.all.keys(expectedModelObjProperties);
      });

      (0, _setup.it)('should map the data properly', function () {
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

  (0, _setup.describe)('When saving a model object', function () {
    (0, _setup.beforeEach)(function () {
      var _redisClient$hmset$on;

      (_redisClient$hmset$on = redisClient.hmset.once()).withExactArgs.apply(_redisClient$hmset$on, _toConsumableArray(passedData)).resolves(positiveReply);
      mocks = [redisClient.hmset];
    });

    (0, _setup.it)('should return a promise', function () {
      return (0, _redisODM2.default)({ redisClient: redisClient }).create({ key: data.id, data: data }).save().should.be.a('promise');
    });

    (0, _setup.it)('should be successful', async function () {
      return (0, _redisODM2.default)({ redisClient: redisClient }).create({ key: data.id, data: data }).save().should.eventually.equal(positiveReply);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi9vZG0vcmVkaXNPRE0uc3BlYy5qcyJdLCJuYW1lcyI6WyJtb2NrcyIsInJlZGlzQ2xpZW50IiwiZXhwZWN0ZWRPRE1Qcm9wZXJ0aWVzIiwiZXhwZWN0ZWRNb2RlbE9ialByb3BlcnRpZXMiLCJwYXNzZWREYXRhIiwiZGF0YSIsInBvc2l0aXZlUmVwbHkiLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsInNob3VsZCIsImhhdmUiLCJhbGwiLCJrZXlzIiwiY3JlYXRlIiwia2V5IiwiaWQiLCJtb2RlbE9iaiIsIm1vZGVsT2JqRGF0YSIsImVxdWFsIiwiT2JqZWN0IiwiZW50cmllcyIsIm93biIsInByb3BlcnR5IiwiZW50cnkiLCJobXNldCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmVzb2x2ZXMiLCJzYXZlIiwiYmUiLCJhIiwiZXZlbnR1YWxseSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7OztBQUVBOzs7Ozs7O0FBSEE7O0FBRUE7OztBQUlBLHFCQUFTLFVBQVQsRUFBcUIsWUFBTTtBQUN6QixNQUNFQSxjQURGO0FBQUEsTUFFRUMsb0JBRkY7QUFBQSxNQUdFQyw4QkFIRjtBQUFBLE1BSUVDLG1DQUpGO0FBQUEsTUFLRUMsbUJBTEY7QUFBQSxNQU1FQyxhQU5GO0FBQUEsTUFPRUMsc0JBUEY7O0FBU0EscUJBQU8sWUFBTTtBQUNYSiw0QkFBd0IsQ0FBQyxRQUFELENBQXhCO0FBQ0FDLGlDQUE2QixDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLE1BQWhCLENBQTdCO0FBQ0FDLGlCQUFhLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLEVBQWEsT0FBYixFQUFzQixHQUF0QixDQUFiO0FBQ0FDLFdBQU8sRUFBRSxNQUFNLENBQVIsRUFBVyxTQUFTLEdBQXBCLEVBQVA7QUFDQUMsb0JBQWdCLElBQWhCO0FBQ0QsR0FORDs7QUFRQSx5QkFBVyxZQUFNO0FBQ2ZMLGtCQUFjLG1DQUFkO0FBQ0QsR0FGRDs7QUFJQSx3QkFBVTtBQUFBLFdBQU1ELE1BQU1PLE9BQU4sQ0FBYztBQUFBLGFBQVFDLEtBQUtDLE1BQUwsRUFBUjtBQUFBLEtBQWQsQ0FBTjtBQUFBLEdBQVY7O0FBRUEsdUJBQVMsd0JBQVQsRUFBbUMsWUFBTTtBQUN2QywyQkFBVyxZQUFNO0FBQ2ZULGNBQVEsRUFBUjtBQUNELEtBRkQ7QUFHQSxtQkFBRyxpQ0FBSCxFQUFzQztBQUFBLGFBQ3BDLHdCQUFTLEVBQUVDLHdCQUFGLEVBQVQsRUFBMEJTLE1BQTFCLENBQWlDQyxJQUFqQyxDQUFzQ0MsR0FBdEMsQ0FBMENDLElBQTFDLENBQStDWCxxQkFBL0MsQ0FEb0M7QUFBQSxLQUF0Qzs7QUFHQSx5QkFBUyw4QkFBVCxFQUF5QyxZQUFNO0FBQzdDLHFCQUFHLGlDQUFILEVBQXNDO0FBQUEsZUFDcEMsd0JBQVMsRUFBRUQsd0JBQUYsRUFBVCxFQUNHYSxNQURILENBQ1UsRUFBRUMsS0FBS1YsS0FBS1csRUFBWixFQUFnQlgsTUFBTUEsSUFBdEIsRUFEVixFQUN3Q0ssTUFEeEMsQ0FDK0NDLElBRC9DLENBQ29EQyxHQURwRCxDQUVHQyxJQUZILENBRVFWLDBCQUZSLENBRG9DO0FBQUEsT0FBdEM7O0FBS0EscUJBQUcsOEJBQUgsRUFBbUMsWUFBTTtBQUN2QyxZQUFNYyxXQUFXLHdCQUFTLEVBQUVoQix3QkFBRixFQUFULEVBQ2RhLE1BRGMsQ0FDUCxFQUFFQyxLQUFLVixLQUFLVyxFQUFaLEVBQWdCWCxNQUFNQSxJQUF0QixFQURPLENBQWpCO0FBRUEsWUFBTWEsZUFBZUQsU0FBU1osSUFBOUI7O0FBRUFZLGlCQUFTRixHQUFULENBQWFMLE1BQWIsQ0FBb0JTLEtBQXBCLENBQTBCZCxLQUFLVyxFQUEvQjs7QUFFQUksZUFBT0MsT0FBUCxDQUFlaEIsSUFBZixFQUNHRSxPQURILENBQ1c7QUFBQTs7QUFBQSxpQkFBUyxzQ0FBYUcsTUFBYixDQUFvQkMsSUFBcEIsQ0FBeUJXLEdBQXpCLEVBQTZCQyxRQUE3QixpREFBeUNDLEtBQXpDLEVBQVQ7QUFBQSxTQURYOztBQUdBSixlQUFPQyxPQUFQLENBQWVILFlBQWYsRUFDR1gsT0FESCxDQUNXO0FBQUE7O0FBQUEsaUJBQVMsOEJBQUtHLE1BQUwsQ0FBWUMsSUFBWixDQUFpQlcsR0FBakIsRUFBcUJDLFFBQXJCLGlEQUFpQ0MsS0FBakMsRUFBVDtBQUFBLFNBRFg7QUFFRCxPQVpEO0FBYUQsS0FuQkQ7QUFvQkQsR0EzQkQ7O0FBNkJBLHVCQUFTLDRCQUFULEVBQXVDLFlBQU07QUFDM0MsMkJBQVcsWUFBTTtBQUFBOztBQUNmLDJDQUFZQyxLQUFaLENBQWtCQyxJQUFsQixJQUF5QkMsYUFBekIsaURBQTBDdkIsVUFBMUMsR0FDR3dCLFFBREgsQ0FDWXRCLGFBRFo7QUFFQU4sY0FBUSxDQUFFQyxZQUFZd0IsS0FBZCxDQUFSO0FBQ0QsS0FKRDs7QUFNQSxtQkFBRyx5QkFBSCxFQUE4QjtBQUFBLGFBQzVCLHdCQUFTLEVBQUV4Qix3QkFBRixFQUFULEVBQ0dhLE1BREgsQ0FDVSxFQUFFQyxLQUFLVixLQUFLVyxFQUFaLEVBQWdCWCxNQUFNQSxJQUF0QixFQURWLEVBQ3dDd0IsSUFEeEMsR0FDK0NuQixNQUQvQyxDQUNzRG9CLEVBRHRELENBQ3lEQyxDQUR6RCxDQUMyRCxTQUQzRCxDQUQ0QjtBQUFBLEtBQTlCOztBQUlBLG1CQUFHLHNCQUFILEVBQTJCO0FBQUEsYUFDekIsd0JBQVMsRUFBRTlCLHdCQUFGLEVBQVQsRUFDR2EsTUFESCxDQUNVLEVBQUVDLEtBQUtWLEtBQUtXLEVBQVosRUFBZ0JYLE1BQU1BLElBQXRCLEVBRFYsRUFDd0N3QixJQUR4QyxHQUMrQ25CLE1BRC9DLENBQ3NEc0IsVUFEdEQsQ0FFR2IsS0FGSCxDQUVTYixhQUZULENBRHlCO0FBQUEsS0FBM0I7QUFJRCxHQWZEO0FBZ0JELENBckVEIiwiZmlsZSI6InJlZGlzT0RNLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXNjcmliZSwgYmVmb3JlLCBiZWZvcmVFYWNoLCBhZnRlckVhY2gsIGl0IH0gZnJvbSAnLi8uLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCByZWRpc09ETSBmcm9tICcuLy4uLy4uLy4uL21haW4vbGliL29kbS9yZWRpc09ETSdcbi8vIG1vY2tzXG5pbXBvcnQgcmVkaXNDbGllbnRXcmFwcGVyTW9ja1xuICBmcm9tICcuLy4uLy4uL21vY2tzL2xpYi93cmFwcGVycy9yZWRpc0NsaWVudFdyYXBwZXInXG5cbmRlc2NyaWJlKCdSZWRpc09ETScsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgcmVkaXNDbGllbnQsXG4gICAgZXhwZWN0ZWRPRE1Qcm9wZXJ0aWVzLFxuICAgIGV4cGVjdGVkTW9kZWxPYmpQcm9wZXJ0aWVzLFxuICAgIHBhc3NlZERhdGEsXG4gICAgZGF0YSxcbiAgICBwb3NpdGl2ZVJlcGx5XG5cbiAgYmVmb3JlKCgpID0+IHtcbiAgICBleHBlY3RlZE9ETVByb3BlcnRpZXMgPSBbJ2NyZWF0ZSddXG4gICAgZXhwZWN0ZWRNb2RlbE9ialByb3BlcnRpZXMgPSBbJ2tleScsICdkYXRhJywgJ3NhdmUnXVxuICAgIHBhc3NlZERhdGEgPSBbMSwgJ2lkJywgMSwgJ3ZhbHVlJywgJzEnXVxuICAgIGRhdGEgPSB7ICdpZCc6IDEsICd2YWx1ZSc6ICcxJyB9XG4gICAgcG9zaXRpdmVSZXBseSA9ICdPSydcbiAgfSlcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICByZWRpc0NsaWVudCA9IHJlZGlzQ2xpZW50V3JhcHBlck1vY2soKVxuICB9KVxuXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgZGVzY3JpYmUoJ1doZW4gY3JlYXRpbmcgcmVkaXNPRE0nLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBtb2NrcyA9IFtdXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIGhhdmUgZXhwZWN0ZWQgcHJvcGVydGllcycsICgpID0+XG4gICAgICByZWRpc09ETSh7IHJlZGlzQ2xpZW50IH0pLnNob3VsZC5oYXZlLmFsbC5rZXlzKGV4cGVjdGVkT0RNUHJvcGVydGllcykpXG5cbiAgICBkZXNjcmliZSgnV2hlbiBjcmVhdGluZyBhIG1vZGVsIG9iamVjdCcsICgpID0+IHtcbiAgICAgIGl0KCdzaG91bGQgaGF2ZSBleHBlY3RlZCBwcm9wZXJ0aWVzJywgKCkgPT5cbiAgICAgICAgcmVkaXNPRE0oeyByZWRpc0NsaWVudCB9KVxuICAgICAgICAgIC5jcmVhdGUoeyBrZXk6IGRhdGEuaWQsIGRhdGE6IGRhdGEgfSkuc2hvdWxkLmhhdmUuYWxsXG4gICAgICAgICAgLmtleXMoZXhwZWN0ZWRNb2RlbE9ialByb3BlcnRpZXMpKVxuXG4gICAgICBpdCgnc2hvdWxkIG1hcCB0aGUgZGF0YSBwcm9wZXJseScsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kZWxPYmogPSByZWRpc09ETSh7IHJlZGlzQ2xpZW50IH0pXG4gICAgICAgICAgLmNyZWF0ZSh7IGtleTogZGF0YS5pZCwgZGF0YTogZGF0YSB9KVxuICAgICAgICBjb25zdCBtb2RlbE9iakRhdGEgPSBtb2RlbE9iai5kYXRhXG5cbiAgICAgICAgbW9kZWxPYmoua2V5LnNob3VsZC5lcXVhbChkYXRhLmlkKVxuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpXG4gICAgICAgICAgLmZvckVhY2goZW50cnkgPT4gbW9kZWxPYmpEYXRhLnNob3VsZC5oYXZlLm93bi5wcm9wZXJ0eSguLi5lbnRyeSkpXG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMobW9kZWxPYmpEYXRhKVxuICAgICAgICAgIC5mb3JFYWNoKGVudHJ5ID0+IGRhdGEuc2hvdWxkLmhhdmUub3duLnByb3BlcnR5KC4uLmVudHJ5KSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxuICBkZXNjcmliZSgnV2hlbiBzYXZpbmcgYSBtb2RlbCBvYmplY3QnLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICByZWRpc0NsaWVudC5obXNldC5vbmNlKCkud2l0aEV4YWN0QXJncyguLi5wYXNzZWREYXRhKVxuICAgICAgICAucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIG1vY2tzID0gWyByZWRpc0NsaWVudC5obXNldCBdXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICByZWRpc09ETSh7IHJlZGlzQ2xpZW50IH0pXG4gICAgICAgIC5jcmVhdGUoeyBrZXk6IGRhdGEuaWQsIGRhdGE6IGRhdGEgfSkuc2F2ZSgpLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICBpdCgnc2hvdWxkIGJlIHN1Y2Nlc3NmdWwnLCBhc3luYyAoKSA9PlxuICAgICAgcmVkaXNPRE0oeyByZWRpc0NsaWVudCB9KVxuICAgICAgICAuY3JlYXRlKHsga2V5OiBkYXRhLmlkLCBkYXRhOiBkYXRhIH0pLnNhdmUoKS5zaG91bGQuZXZlbnR1YWxseVxuICAgICAgICAuZXF1YWwocG9zaXRpdmVSZXBseSkpXG4gIH0pXG59KVxuIl19