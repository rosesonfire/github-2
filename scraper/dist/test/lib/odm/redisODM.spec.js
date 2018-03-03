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
    expectedModelObjProperties = ['save'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi9vZG0vcmVkaXNPRE0uc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwicmVkaXNXcmFwcGVyIiwicmVkaXNXcmFwcGVyQ2xpZW50IiwiaG9zdCIsInBvcnQiLCJleHBlY3RlZE9ETVByb3BlcnRpZXMiLCJleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcyIsInBhc3NlZERhdGEiLCJkYXRhIiwiaWRLZXkiLCJwb3NpdGl2ZVJlcGx5IiwiYmVmb3JlIiwiYmVmb3JlRWFjaCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsImFmdGVyRWFjaCIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwiaXQiLCJyZWRpcyIsInNob3VsZCIsImluY2x1ZGUiLCJrZXlzIiwiY3JlYXRlIiwiYmUiLCJhIiwiZXZlbnR1YWxseSIsImhtc2V0IiwicmVzb2x2ZXMiLCJzYXZlIiwiZXF1YWwiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7b01BTEE7O0FBRUE7O0FBRUE7OztBQUlBO0FBQ0FBLFNBQVMsVUFBVCxFQUFxQixZQUFNO0FBQ3pCLE1BQ0VDLGNBREY7QUFBQSxNQUVFQyxxQkFGRjtBQUFBLE1BR0VDLDJCQUhGO0FBQUEsTUFJRUMsYUFKRjtBQUFBLE1BS0VDLGFBTEY7QUFBQSxNQU1FQyw4QkFORjtBQUFBLE1BT0VDLG1DQVBGO0FBQUEsTUFRRUMsbUJBUkY7QUFBQSxNQVNFQyxhQVRGO0FBQUEsTUFVRUMsY0FWRjtBQUFBLE1BV0VDLHNCQVhGOztBQWFBO0FBQ0FDLFNBQU8sWUFBTTtBQUNYUixXQUFPLFdBQVA7QUFDQUMsV0FBTyxNQUFQO0FBQ0FDLDRCQUF3QixDQUFDLFFBQUQsQ0FBeEI7QUFDQUMsaUNBQTZCLENBQUMsTUFBRCxDQUE3QjtBQUNBQyxpQkFBYSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLE9BQWIsRUFBc0IsR0FBdEIsQ0FBYjtBQUNBQyxXQUFPLEVBQUMsTUFBTSxDQUFQLEVBQVUsU0FBUyxHQUFuQixFQUFQO0FBQ0FDLFlBQVEsSUFBUjtBQUNBQyxvQkFBZ0IsSUFBaEI7QUFDRCxHQVREOztBQVdBO0FBQ0FFLGFBQVcsWUFBTTtBQUNmWCxtQkFBZSw2QkFBZjtBQUNBQyx5QkFBcUIsMkNBQXJCO0FBQ0FELGlCQUFhWSxJQUFiLEdBQW9CQyxhQUFwQixDQUFrQyxFQUFFWCxVQUFGLEVBQVFDLFVBQVIsRUFBbEMsRUFDR1csT0FESCxDQUNXYixrQkFEWDtBQUVELEdBTEQ7O0FBT0E7QUFDQWMsWUFBVTtBQUFBLFdBQU1oQixNQUFNaUIsT0FBTixDQUFjO0FBQUEsYUFBUUMsS0FBS0MsTUFBTCxFQUFSO0FBQUEsS0FBZCxDQUFOO0FBQUEsR0FBVjs7QUFFQTtBQUNBcEIsV0FBUyx3QkFBVCxFQUFtQyxZQUFNO0FBQ3ZDO0FBQ0FhLGVBQVcsWUFBTTtBQUNmWixjQUFRLENBQUVDLFlBQUYsQ0FBUjtBQUNELEtBRkQ7O0FBSUE7QUFDQW1CLE9BQUcsaUNBQUgsRUFBc0M7QUFBQSxhQUNwQyx3QkFBUyxFQUFFQyxPQUFPcEIsWUFBVCxFQUFULEVBQWtDLEVBQUVFLFVBQUYsRUFBUUMsVUFBUixFQUFsQyxFQUFrRGtCLE1BQWxELENBQXlEQyxPQUF6RCxDQUNHQyxJQURILENBQ1FuQixxQkFEUixDQURvQztBQUFBLEtBQXRDOztBQUlBO0FBQ0FOLGFBQVMsOEJBQVQsRUFBeUMsWUFBTTtBQUM3QztBQUNBcUIsU0FBRyx5QkFBSCxFQUE4QjtBQUFBLGVBQzVCLHdCQUFTLEVBQUVDLE9BQU9wQixZQUFULEVBQVQsRUFBa0MsRUFBRUUsVUFBRixFQUFRQyxVQUFSLEVBQWxDLEVBQ0dxQixNQURILENBQ1UsRUFBRWpCLE1BQU1BLElBQVIsRUFBY0MsWUFBZCxFQURWLEVBQ2lDYSxNQURqQyxDQUN3Q0ksRUFEeEMsQ0FDMkNDLENBRDNDLENBQzZDLFNBRDdDLENBRDRCO0FBQUEsT0FBOUI7O0FBSUE7QUFDQVAsU0FBRyxpQ0FBSCxFQUFzQztBQUFBLGVBQ3BDLHdCQUFTLEVBQUVDLE9BQU9wQixZQUFULEVBQVQsRUFBa0MsRUFBRUUsVUFBRixFQUFRQyxVQUFSLEVBQWxDLEVBQ0dxQixNQURILENBQ1UsRUFBRWpCLE1BQU1BLElBQVIsRUFBY0MsWUFBZCxFQURWLEVBQ2lDYSxNQURqQyxDQUN3Q00sVUFEeEMsQ0FDbURMLE9BRG5ELENBRUdDLElBRkgsQ0FFUWxCLDBCQUZSLENBRG9DO0FBQUEsT0FBdEM7QUFJRCxLQVhEO0FBWUQsR0F4QkQ7O0FBMEJBO0FBQ0FQLFdBQVMsNEJBQVQsRUFBdUMsWUFBTTtBQUMzQztBQUNBYSxlQUFXLFlBQU07QUFBQTs7QUFDZixrREFBbUJpQixLQUFuQixDQUF5QmhCLElBQXpCLElBQWdDQyxhQUFoQyxpREFBaURQLFVBQWpELEdBQ0d1QixRQURILENBQ1lwQixhQURaO0FBRUFWLGNBQVEsQ0FBRUMsWUFBRixFQUFnQkMsbUJBQW1CMkIsS0FBbkMsQ0FBUjtBQUNELEtBSkQ7O0FBTUE7QUFDQVQsT0FBRyx5QkFBSCxFQUE4QjtBQUFBLGFBQzVCLENBQUMsTUFBTSx3QkFBUyxFQUFFQyxPQUFPcEIsWUFBVCxFQUFULEVBQWtDLEVBQUVFLFVBQUYsRUFBUUMsVUFBUixFQUFsQyxFQUNKcUIsTUFESSxDQUNHLEVBQUVqQixNQUFNQSxJQUFSLEVBQWNDLFlBQWQsRUFESCxDQUFQLEVBQ2tDc0IsSUFEbEMsR0FDeUNULE1BRHpDLENBQ2dESSxFQURoRCxDQUNtREMsQ0FEbkQsQ0FDcUQsU0FEckQsQ0FENEI7QUFBQSxLQUE5Qjs7QUFJQTtBQUNBUCxPQUFHLHNCQUFILEVBQTJCO0FBQUEsYUFDekIsQ0FBQyxNQUFNLHdCQUFTLEVBQUVDLE9BQU9wQixZQUFULEVBQVQsRUFBa0MsRUFBRUUsVUFBRixFQUFRQyxVQUFSLEVBQWxDLEVBQ0pxQixNQURJLENBQ0csRUFBRWpCLE1BQU1BLElBQVIsRUFBY0MsWUFBZCxFQURILENBQVAsRUFDa0NzQixJQURsQyxHQUN5Q1QsTUFEekMsQ0FDZ0RNLFVBRGhELENBRUdJLEtBRkgsQ0FFU3RCLGFBRlQsQ0FEeUI7QUFBQSxLQUEzQjtBQUlELEdBbEJEO0FBbUJELENBcEZEIiwiZmlsZSI6InJlZGlzT0RNLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBleHBlY3QgZnJvbSAnLi8uLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCByZWRpc09ETSBmcm9tICcuLy4uLy4uLy4uL21haW4vbGliL29kbS9yZWRpc09ETSdcbi8vIG1vY2tzXG5pbXBvcnQgcmVkaXNXcmFwcGVyTW9jaywgeyByZWRpc1dyYXBwZXJDbGllbnRNb2NrIH1cbiAgZnJvbSAnLi8uLi8uLi9tb2Nrcy93cmFwcGVycy9yZWRpc1dyYXBwZXInXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuZGVzY3JpYmUoJ1JlZGlzT0RNJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICByZWRpc1dyYXBwZXIsXG4gICAgcmVkaXNXcmFwcGVyQ2xpZW50LFxuICAgIGhvc3QsXG4gICAgcG9ydCxcbiAgICBleHBlY3RlZE9ETVByb3BlcnRpZXMsXG4gICAgZXhwZWN0ZWRNb2RlbE9ialByb3BlcnRpZXMsXG4gICAgcGFzc2VkRGF0YSxcbiAgICBkYXRhLFxuICAgIGlkS2V5LFxuICAgIHBvc2l0aXZlUmVwbHlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICBob3N0ID0gJ2xvY2FsaG9zdCdcbiAgICBwb3J0ID0gJzEyMzQnXG4gICAgZXhwZWN0ZWRPRE1Qcm9wZXJ0aWVzID0gWydjcmVhdGUnXVxuICAgIGV4cGVjdGVkTW9kZWxPYmpQcm9wZXJ0aWVzID0gWydzYXZlJ11cbiAgICBwYXNzZWREYXRhID0gWzEsICdpZCcsIDEsICd2YWx1ZScsICcxJ11cbiAgICBkYXRhID0geydpZCc6IDEsICd2YWx1ZSc6ICcxJ31cbiAgICBpZEtleSA9ICdpZCdcbiAgICBwb3NpdGl2ZVJlcGx5ID0gJ09LJ1xuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICByZWRpc1dyYXBwZXIgPSByZWRpc1dyYXBwZXJNb2NrKClcbiAgICByZWRpc1dyYXBwZXJDbGllbnQgPSByZWRpc1dyYXBwZXJDbGllbnRNb2NrKClcbiAgICByZWRpc1dyYXBwZXIub25jZSgpLndpdGhFeGFjdEFyZ3MoeyBob3N0LCBwb3J0IH0pXG4gICAgICAucmV0dXJucyhyZWRpc1dyYXBwZXJDbGllbnQpXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGNyZWF0aW5nIHJlZGlzT0RNJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbIHJlZGlzV3JhcHBlciBdXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgaGF2ZSBleHBlY3RlZCBwcm9wZXJ0aWVzJywgKCkgPT5cbiAgICAgIHJlZGlzT0RNKHsgcmVkaXM6IHJlZGlzV3JhcHBlciB9KSh7IGhvc3QsIHBvcnQgfSkuc2hvdWxkLmluY2x1ZGVcbiAgICAgICAgLmtleXMoZXhwZWN0ZWRPRE1Qcm9wZXJ0aWVzKSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIGNyZWF0aW5nIGEgbW9kZWwgb2JqZWN0JywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgICByZWRpc09ETSh7IHJlZGlzOiByZWRpc1dyYXBwZXIgfSkoeyBob3N0LCBwb3J0IH0pXG4gICAgICAgICAgLmNyZWF0ZSh7IGRhdGE6IGRhdGEsIGlkS2V5IH0pLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBoYXZlIGV4cGVjdGVkIHByb3BlcnRpZXMnLCAoKSA9PlxuICAgICAgICByZWRpc09ETSh7IHJlZGlzOiByZWRpc1dyYXBwZXIgfSkoeyBob3N0LCBwb3J0IH0pXG4gICAgICAgICAgLmNyZWF0ZSh7IGRhdGE6IGRhdGEsIGlkS2V5IH0pLnNob3VsZC5ldmVudHVhbGx5LmluY2x1ZGVcbiAgICAgICAgICAua2V5cyhleHBlY3RlZE1vZGVsT2JqUHJvcGVydGllcykpXG4gICAgfSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gc2F2aW5nIGEgbW9kZWwgb2JqZWN0JywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcmVkaXNXcmFwcGVyQ2xpZW50Lmhtc2V0Lm9uY2UoKS53aXRoRXhhY3RBcmdzKC4uLnBhc3NlZERhdGEpXG4gICAgICAgIC5yZXNvbHZlcyhwb3NpdGl2ZVJlcGx5KVxuICAgICAgbW9ja3MgPSBbIHJlZGlzV3JhcHBlciwgcmVkaXNXcmFwcGVyQ2xpZW50Lmhtc2V0IF1cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgYXN5bmMgKCkgPT5cbiAgICAgIChhd2FpdCByZWRpc09ETSh7IHJlZGlzOiByZWRpc1dyYXBwZXIgfSkoeyBob3N0LCBwb3J0IH0pXG4gICAgICAgIC5jcmVhdGUoeyBkYXRhOiBkYXRhLCBpZEtleSB9KSkuc2F2ZSgpLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGJlIHN1Y2Nlc3NmdWwnLCBhc3luYyAoKSA9PlxuICAgICAgKGF3YWl0IHJlZGlzT0RNKHsgcmVkaXM6IHJlZGlzV3JhcHBlciB9KSh7IGhvc3QsIHBvcnQgfSlcbiAgICAgICAgLmNyZWF0ZSh7IGRhdGE6IGRhdGEsIGlkS2V5IH0pKS5zYXZlKCkuc2hvdWxkLmV2ZW50dWFsbHlcbiAgICAgICAgLmVxdWFsKHBvc2l0aXZlUmVwbHkpKVxuICB9KVxufSlcbiJdfQ==