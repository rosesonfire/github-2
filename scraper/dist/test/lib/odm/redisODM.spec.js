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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi9vZG0vcmVkaXNPRE0uc3BlYy5qcyJdLCJuYW1lcyI6WyJtb2NrcyIsInJlZGlzQ2xpZW50IiwiZXhwZWN0ZWRPRE1Qcm9wZXJ0aWVzIiwiZXhwZWN0ZWRNb2RlbE9ialByb3BlcnRpZXMiLCJwYXNzZWREYXRhIiwiZGF0YSIsInBvc2l0aXZlUmVwbHkiLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsInNob3VsZCIsImhhdmUiLCJhbGwiLCJrZXlzIiwiY3JlYXRlIiwia2V5IiwiaWQiLCJtb2RlbE9iaiIsIm1vZGVsT2JqRGF0YSIsImVxdWFsIiwiT2JqZWN0IiwiZW50cmllcyIsIm93biIsInByb3BlcnR5IiwiZW50cnkiLCJobXNldCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmVzb2x2ZXMiLCJzYXZlIiwiYmUiLCJhIiwiZXZlbnR1YWxseSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7OztBQUVBOzs7Ozs7O0FBSEE7O0FBRUE7OztBQUlBLHFCQUFTLFVBQVQsRUFBcUIsWUFBTTtBQUN6QixNQUNFQSxjQURGO0FBQUEsTUFFRUMsb0JBRkY7QUFBQSxNQUdFQyw4QkFIRjtBQUFBLE1BSUVDLG1DQUpGO0FBQUEsTUFLRUMsbUJBTEY7QUFBQSxNQU1FQyxhQU5GO0FBQUEsTUFPRUMsc0JBUEY7O0FBU0EscUJBQU8sWUFBTTtBQUNYSiw0QkFBd0IsQ0FBQyxRQUFELENBQXhCO0FBQ0FDLGlDQUE2QixDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLE1BQWhCLENBQTdCO0FBQ0FDLGlCQUFhLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLEVBQWEsT0FBYixFQUFzQixHQUF0QixDQUFiO0FBQ0FDLFdBQU8sRUFBRSxNQUFNLENBQVIsRUFBVyxTQUFTLEdBQXBCLEVBQVA7QUFDQUMsb0JBQWdCLElBQWhCO0FBQ0QsR0FORDs7QUFRQSx5QkFBVyxZQUFNO0FBQ2ZMLGtCQUFjLG1DQUFkO0FBQ0QsR0FGRDs7QUFJQSx3QkFBVTtBQUFBLFdBQU1ELE1BQU1PLE9BQU4sQ0FBYztBQUFBLGFBQVFDLEtBQUtDLE1BQUwsRUFBUjtBQUFBLEtBQWQsQ0FBTjtBQUFBLEdBQVY7O0FBRUEsdUJBQVMsd0JBQVQsRUFBbUMsWUFBTTtBQUN2QywyQkFBVyxZQUFNO0FBQ2ZULGNBQVEsRUFBUjtBQUNELEtBRkQ7O0FBSUEsbUJBQUcsaUNBQUgsRUFBc0M7QUFBQSxhQUNwQyx3QkFBUyxFQUFFQyx3QkFBRixFQUFULEVBQTBCUyxNQUExQixDQUFpQ0MsSUFBakMsQ0FBc0NDLEdBQXRDLENBQTBDQyxJQUExQyxDQUErQ1gscUJBQS9DLENBRG9DO0FBQUEsS0FBdEM7O0FBR0EseUJBQVMsOEJBQVQsRUFBeUMsWUFBTTtBQUM3QyxxQkFBRyxpQ0FBSCxFQUFzQztBQUFBLGVBQ3BDLHdCQUFTLEVBQUVELHdCQUFGLEVBQVQsRUFDR2EsTUFESCxDQUNVLEVBQUVDLEtBQUtWLEtBQUtXLEVBQVosRUFBZ0JYLE1BQU1BLElBQXRCLEVBRFYsRUFDd0NLLE1BRHhDLENBQytDQyxJQUQvQyxDQUNvREMsR0FEcEQsQ0FFR0MsSUFGSCxDQUVRViwwQkFGUixDQURvQztBQUFBLE9BQXRDOztBQUtBLHFCQUFHLDhCQUFILEVBQW1DLFlBQU07QUFDdkMsWUFBTWMsV0FBVyx3QkFBUyxFQUFFaEIsd0JBQUYsRUFBVCxFQUNkYSxNQURjLENBQ1AsRUFBRUMsS0FBS1YsS0FBS1csRUFBWixFQUFnQlgsTUFBTUEsSUFBdEIsRUFETyxDQUFqQjtBQUVBLFlBQU1hLGVBQWVELFNBQVNaLElBQTlCOztBQUVBWSxpQkFBU0YsR0FBVCxDQUFhTCxNQUFiLENBQW9CUyxLQUFwQixDQUEwQmQsS0FBS1csRUFBL0I7O0FBRUFJLGVBQU9DLE9BQVAsQ0FBZWhCLElBQWYsRUFDR0UsT0FESCxDQUNXO0FBQUE7O0FBQUEsaUJBQVMsc0NBQWFHLE1BQWIsQ0FBb0JDLElBQXBCLENBQXlCVyxHQUF6QixFQUE2QkMsUUFBN0IsaURBQXlDQyxLQUF6QyxFQUFUO0FBQUEsU0FEWDs7QUFHQUosZUFBT0MsT0FBUCxDQUFlSCxZQUFmLEVBQ0dYLE9BREgsQ0FDVztBQUFBOztBQUFBLGlCQUFTLDhCQUFLRyxNQUFMLENBQVlDLElBQVosQ0FBaUJXLEdBQWpCLEVBQXFCQyxRQUFyQixpREFBaUNDLEtBQWpDLEVBQVQ7QUFBQSxTQURYO0FBRUQsT0FaRDtBQWFELEtBbkJEO0FBb0JELEdBNUJEOztBQThCQSx1QkFBUyw0QkFBVCxFQUF1QyxZQUFNO0FBQzNDLDJCQUFXLFlBQU07QUFBQTs7QUFDZiwyQ0FBWUMsS0FBWixDQUFrQkMsSUFBbEIsSUFBeUJDLGFBQXpCLGlEQUEwQ3ZCLFVBQTFDLEdBQ0d3QixRQURILENBQ1l0QixhQURaO0FBRUFOLGNBQVEsQ0FBRUMsWUFBWXdCLEtBQWQsQ0FBUjtBQUNELEtBSkQ7O0FBTUEsbUJBQUcseUJBQUgsRUFBOEI7QUFBQSxhQUM1Qix3QkFBUyxFQUFFeEIsd0JBQUYsRUFBVCxFQUNHYSxNQURILENBQ1UsRUFBRUMsS0FBS1YsS0FBS1csRUFBWixFQUFnQlgsTUFBTUEsSUFBdEIsRUFEVixFQUN3Q3dCLElBRHhDLEdBQytDbkIsTUFEL0MsQ0FDc0RvQixFQUR0RCxDQUN5REMsQ0FEekQsQ0FDMkQsU0FEM0QsQ0FENEI7QUFBQSxLQUE5Qjs7QUFJQSxtQkFBRyxzQkFBSCxFQUEyQjtBQUFBLGFBQ3pCLHdCQUFTLEVBQUU5Qix3QkFBRixFQUFULEVBQ0dhLE1BREgsQ0FDVSxFQUFFQyxLQUFLVixLQUFLVyxFQUFaLEVBQWdCWCxNQUFNQSxJQUF0QixFQURWLEVBQ3dDd0IsSUFEeEMsR0FDK0NuQixNQUQvQyxDQUNzRHNCLFVBRHRELENBRUdiLEtBRkgsQ0FFU2IsYUFGVCxDQUR5QjtBQUFBLEtBQTNCO0FBSUQsR0FmRDtBQWdCRCxDQXRFRCIsImZpbGUiOiJyZWRpc09ETS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzY3JpYmUsIGJlZm9yZSwgYmVmb3JlRWFjaCwgYWZ0ZXJFYWNoLCBpdCB9IGZyb20gJy4vLi4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgcmVkaXNPRE0gZnJvbSAnLi8uLi8uLi8uLi9tYWluL2xpYi9vZG0vcmVkaXNPRE0nXG4vLyBtb2Nrc1xuaW1wb3J0IHJlZGlzQ2xpZW50V3JhcHBlck1vY2tcbiAgZnJvbSAnLi8uLi8uLi9tb2Nrcy9saWIvd3JhcHBlcnMvcmVkaXNDbGllbnRXcmFwcGVyJ1xuXG5kZXNjcmliZSgnUmVkaXNPRE0nLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIHJlZGlzQ2xpZW50LFxuICAgIGV4cGVjdGVkT0RNUHJvcGVydGllcyxcbiAgICBleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcyxcbiAgICBwYXNzZWREYXRhLFxuICAgIGRhdGEsXG4gICAgcG9zaXRpdmVSZXBseVxuXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgZXhwZWN0ZWRPRE1Qcm9wZXJ0aWVzID0gWydjcmVhdGUnXVxuICAgIGV4cGVjdGVkTW9kZWxPYmpQcm9wZXJ0aWVzID0gWydrZXknLCAnZGF0YScsICdzYXZlJ11cbiAgICBwYXNzZWREYXRhID0gWzEsICdpZCcsIDEsICd2YWx1ZScsICcxJ11cbiAgICBkYXRhID0geyAnaWQnOiAxLCAndmFsdWUnOiAnMScgfVxuICAgIHBvc2l0aXZlUmVwbHkgPSAnT0snXG4gIH0pXG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgcmVkaXNDbGllbnQgPSByZWRpc0NsaWVudFdyYXBwZXJNb2NrKClcbiAgfSlcblxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IG1vY2sudmVyaWZ5KCkpKVxuXG4gIGRlc2NyaWJlKCdXaGVuIGNyZWF0aW5nIHJlZGlzT0RNJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbXVxuICAgIH0pXG5cbiAgICBpdCgnc2hvdWxkIGhhdmUgZXhwZWN0ZWQgcHJvcGVydGllcycsICgpID0+XG4gICAgICByZWRpc09ETSh7IHJlZGlzQ2xpZW50IH0pLnNob3VsZC5oYXZlLmFsbC5rZXlzKGV4cGVjdGVkT0RNUHJvcGVydGllcykpXG5cbiAgICBkZXNjcmliZSgnV2hlbiBjcmVhdGluZyBhIG1vZGVsIG9iamVjdCcsICgpID0+IHtcbiAgICAgIGl0KCdzaG91bGQgaGF2ZSBleHBlY3RlZCBwcm9wZXJ0aWVzJywgKCkgPT5cbiAgICAgICAgcmVkaXNPRE0oeyByZWRpc0NsaWVudCB9KVxuICAgICAgICAgIC5jcmVhdGUoeyBrZXk6IGRhdGEuaWQsIGRhdGE6IGRhdGEgfSkuc2hvdWxkLmhhdmUuYWxsXG4gICAgICAgICAgLmtleXMoZXhwZWN0ZWRNb2RlbE9ialByb3BlcnRpZXMpKVxuXG4gICAgICBpdCgnc2hvdWxkIG1hcCB0aGUgZGF0YSBwcm9wZXJseScsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kZWxPYmogPSByZWRpc09ETSh7IHJlZGlzQ2xpZW50IH0pXG4gICAgICAgICAgLmNyZWF0ZSh7IGtleTogZGF0YS5pZCwgZGF0YTogZGF0YSB9KVxuICAgICAgICBjb25zdCBtb2RlbE9iakRhdGEgPSBtb2RlbE9iai5kYXRhXG5cbiAgICAgICAgbW9kZWxPYmoua2V5LnNob3VsZC5lcXVhbChkYXRhLmlkKVxuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpXG4gICAgICAgICAgLmZvckVhY2goZW50cnkgPT4gbW9kZWxPYmpEYXRhLnNob3VsZC5oYXZlLm93bi5wcm9wZXJ0eSguLi5lbnRyeSkpXG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMobW9kZWxPYmpEYXRhKVxuICAgICAgICAgIC5mb3JFYWNoKGVudHJ5ID0+IGRhdGEuc2hvdWxkLmhhdmUub3duLnByb3BlcnR5KC4uLmVudHJ5KSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxuICBkZXNjcmliZSgnV2hlbiBzYXZpbmcgYSBtb2RlbCBvYmplY3QnLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICByZWRpc0NsaWVudC5obXNldC5vbmNlKCkud2l0aEV4YWN0QXJncyguLi5wYXNzZWREYXRhKVxuICAgICAgICAucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIG1vY2tzID0gWyByZWRpc0NsaWVudC5obXNldCBdXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICByZWRpc09ETSh7IHJlZGlzQ2xpZW50IH0pXG4gICAgICAgIC5jcmVhdGUoeyBrZXk6IGRhdGEuaWQsIGRhdGE6IGRhdGEgfSkuc2F2ZSgpLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICBpdCgnc2hvdWxkIGJlIHN1Y2Nlc3NmdWwnLCBhc3luYyAoKSA9PlxuICAgICAgcmVkaXNPRE0oeyByZWRpc0NsaWVudCB9KVxuICAgICAgICAuY3JlYXRlKHsga2V5OiBkYXRhLmlkLCBkYXRhOiBkYXRhIH0pLnNhdmUoKS5zaG91bGQuZXZlbnR1YWxseVxuICAgICAgICAuZXF1YWwocG9zaXRpdmVSZXBseSkpXG4gIH0pXG59KVxuIl19