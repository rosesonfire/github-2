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
      flatSingleData = void 0,
      singleData = void 0,
      multiData = void 0,
      idKey = void 0,
      positiveReply = void 0;

  // eslint-disable-next-line no-undef
  before(function () {
    host = 'localhost';
    port = '1234';
    flatSingleData = [1, 'id', 1, 'value', '1'];
    singleData = [{ 'id': 1, 'value': '1' }];
    multiData = [{ 'id': 1, 'value': '1' }, { 'id': 2, 'value': '2' }];
    idKey = 'id';
    positiveReply = 'OK';
  });

  // eslint-disable-next-line no-undef
  afterEach(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When persisting data', function () {
    // eslint-disable-next-line no-undef
    beforeEach(function () {
      redisWrapper = (0, _redisWrapper2.default)();
      redisWrapperClient = (0, _redisWrapper.redisWrapperClientMock)();
      mocks = [redisWrapper, redisWrapperClient.hmset];
      redisWrapper.once().withExactArgs({ host: host, port: port }).returns(redisWrapperClient);
    });

    // eslint-disable-next-line no-undef
    describe('When persisting single data', function () {
      // eslint-disable-next-line no-undef
      beforeEach(function () {
        var _redisWrapperClient$h;

        return (_redisWrapperClient$h = redisWrapperClient.hmset.once()).withExactArgs.apply(_redisWrapperClient$h, _toConsumableArray(flatSingleData)).resolves(positiveReply);
      });

      // eslint-disable-next-line no-undef
      it('should persist single data', function () {
        return (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port })({ data: singleData, idKey: idKey }).should.eventually.equalTo([positiveReply]);
      });
    });

    // eslint-disable-next-line no-undef
    describe('When persisting multiple data', function () {
      // eslint-disable-next-line no-undef
      beforeEach(function () {
        return redisWrapperClient.hmset.exactly(multiData.length).resolves(positiveReply);
      });

      // eslint-disable-next-line no-undef
      it('should persist multiple data', function () {
        return (0, _redisODM2.default)({ redis: redisWrapper })({ host: host, port: port })({ data: multiData, idKey: idKey }).should.eventually.equalTo(multiData.map(function (d) {
          return positiveReply;
        }));
      });
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi9vZG0vcmVkaXNPRE0uc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwicmVkaXNXcmFwcGVyIiwicmVkaXNXcmFwcGVyQ2xpZW50IiwiaG9zdCIsInBvcnQiLCJmbGF0U2luZ2xlRGF0YSIsInNpbmdsZURhdGEiLCJtdWx0aURhdGEiLCJpZEtleSIsInBvc2l0aXZlUmVwbHkiLCJiZWZvcmUiLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsImJlZm9yZUVhY2giLCJobXNldCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsInJlc29sdmVzIiwiaXQiLCJyZWRpcyIsImRhdGEiLCJzaG91bGQiLCJldmVudHVhbGx5IiwiZXF1YWxUbyIsImV4YWN0bHkiLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7b01BTEE7O0FBRUE7O0FBRUE7OztBQUlBO0FBQ0FBLFNBQVMsVUFBVCxFQUFxQixZQUFNO0FBQ3pCLE1BQ0VDLGNBREY7QUFBQSxNQUVFQyxxQkFGRjtBQUFBLE1BR0VDLDJCQUhGO0FBQUEsTUFJRUMsYUFKRjtBQUFBLE1BS0VDLGFBTEY7QUFBQSxNQU1FQyx1QkFORjtBQUFBLE1BT0VDLG1CQVBGO0FBQUEsTUFRRUMsa0JBUkY7QUFBQSxNQVNFQyxjQVRGO0FBQUEsTUFVRUMsc0JBVkY7O0FBWUE7QUFDQUMsU0FBTyxZQUFNO0FBQ1hQLFdBQU8sV0FBUDtBQUNBQyxXQUFPLE1BQVA7QUFDQUMscUJBQWlCLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLEVBQWEsT0FBYixFQUFzQixHQUF0QixDQUFqQjtBQUNBQyxpQkFBYSxDQUFDLEVBQUMsTUFBTSxDQUFQLEVBQVUsU0FBUyxHQUFuQixFQUFELENBQWI7QUFDQUMsZ0JBQVksQ0FBQyxFQUFDLE1BQU0sQ0FBUCxFQUFVLFNBQVMsR0FBbkIsRUFBRCxFQUEwQixFQUFDLE1BQU0sQ0FBUCxFQUFVLFNBQVMsR0FBbkIsRUFBMUIsQ0FBWjtBQUNBQyxZQUFRLElBQVI7QUFDQUMsb0JBQWdCLElBQWhCO0FBQ0QsR0FSRDs7QUFVQTtBQUNBRSxZQUFVO0FBQUEsV0FBTVgsTUFBTVksT0FBTixDQUFjO0FBQUEsYUFBUUMsS0FBS0MsTUFBTCxFQUFSO0FBQUEsS0FBZCxDQUFOO0FBQUEsR0FBVjs7QUFFQTtBQUNBZixXQUFTLHNCQUFULEVBQWlDLFlBQU07QUFDckM7QUFDQWdCLGVBQVcsWUFBTTtBQUNmZCxxQkFBZSw2QkFBZjtBQUNBQywyQkFBcUIsMkNBQXJCO0FBQ0FGLGNBQVEsQ0FBRUMsWUFBRixFQUFnQkMsbUJBQW1CYyxLQUFuQyxDQUFSO0FBQ0FmLG1CQUFhZ0IsSUFBYixHQUFvQkMsYUFBcEIsQ0FBa0MsRUFBRWYsVUFBRixFQUFRQyxVQUFSLEVBQWxDLEVBQ0dlLE9BREgsQ0FDV2pCLGtCQURYO0FBRUQsS0FORDs7QUFRQTtBQUNBSCxhQUFTLDZCQUFULEVBQXdDLFlBQU07QUFDNUM7QUFDQWdCLGlCQUFXO0FBQUE7O0FBQUEsZUFBTSw0Q0FBbUJDLEtBQW5CLENBQXlCQyxJQUF6QixJQUNkQyxhQURjLGlEQUNHYixjQURILEdBQ21CZSxRQURuQixDQUM0QlgsYUFENUIsQ0FBTjtBQUFBLE9BQVg7O0FBR0E7QUFDQVksU0FBRyw0QkFBSCxFQUFpQztBQUFBLGVBQy9CLHdCQUFTLEVBQUVDLE9BQU9yQixZQUFULEVBQVQsRUFBa0MsRUFBRUUsVUFBRixFQUFRQyxVQUFSLEVBQWxDLEVBQ0UsRUFBRW1CLE1BQU1qQixVQUFSLEVBQW9CRSxZQUFwQixFQURGLEVBQytCZ0IsTUFEL0IsQ0FDc0NDLFVBRHRDLENBRUdDLE9BRkgsQ0FFVyxDQUFDakIsYUFBRCxDQUZYLENBRCtCO0FBQUEsT0FBakM7QUFJRCxLQVZEOztBQVlBO0FBQ0FWLGFBQVMsK0JBQVQsRUFBMEMsWUFBTTtBQUM5QztBQUNBZ0IsaUJBQVc7QUFBQSxlQUFNYixtQkFBbUJjLEtBQW5CLENBQXlCVyxPQUF6QixDQUFpQ3BCLFVBQVVxQixNQUEzQyxFQUNkUixRQURjLENBQ0xYLGFBREssQ0FBTjtBQUFBLE9BQVg7O0FBR0E7QUFDQVksU0FBRyw4QkFBSCxFQUFtQztBQUFBLGVBQ2pDLHdCQUFTLEVBQUVDLE9BQU9yQixZQUFULEVBQVQsRUFBa0MsRUFBRUUsVUFBRixFQUFRQyxVQUFSLEVBQWxDLEVBQ0UsRUFBRW1CLE1BQU1oQixTQUFSLEVBQW1CQyxZQUFuQixFQURGLEVBQzhCZ0IsTUFEOUIsQ0FDcUNDLFVBRHJDLENBRUdDLE9BRkgsQ0FFV25CLFVBQVVzQixHQUFWLENBQWM7QUFBQSxpQkFBS3BCLGFBQUw7QUFBQSxTQUFkLENBRlgsQ0FEaUM7QUFBQSxPQUFuQztBQUlELEtBVkQ7QUFXRCxHQW5DRDtBQW9DRCxDQWhFRCIsImZpbGUiOiJyZWRpc09ETS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgcmVkaXNPRE0gZnJvbSAnLi8uLi8uLi8uLi9tYWluL2xpYi9vZG0vcmVkaXNPRE0nXG4vLyBtb2Nrc1xuaW1wb3J0IHJlZGlzV3JhcHBlck1vY2ssIHsgcmVkaXNXcmFwcGVyQ2xpZW50TW9jayB9XG4gIGZyb20gJy4vLi4vLi4vbW9ja3Mvd3JhcHBlcnMvcmVkaXNXcmFwcGVyJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdSZWRpc09ETScsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgcmVkaXNXcmFwcGVyLFxuICAgIHJlZGlzV3JhcHBlckNsaWVudCxcbiAgICBob3N0LFxuICAgIHBvcnQsXG4gICAgZmxhdFNpbmdsZURhdGEsXG4gICAgc2luZ2xlRGF0YSxcbiAgICBtdWx0aURhdGEsXG4gICAgaWRLZXksXG4gICAgcG9zaXRpdmVSZXBseVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmUoKCkgPT4ge1xuICAgIGhvc3QgPSAnbG9jYWxob3N0J1xuICAgIHBvcnQgPSAnMTIzNCdcbiAgICBmbGF0U2luZ2xlRGF0YSA9IFsxLCAnaWQnLCAxLCAndmFsdWUnLCAnMSddXG4gICAgc2luZ2xlRGF0YSA9IFt7J2lkJzogMSwgJ3ZhbHVlJzogJzEnfV1cbiAgICBtdWx0aURhdGEgPSBbeydpZCc6IDEsICd2YWx1ZSc6ICcxJ30sIHsnaWQnOiAyLCAndmFsdWUnOiAnMid9XVxuICAgIGlkS2V5ID0gJ2lkJ1xuICAgIHBvc2l0aXZlUmVwbHkgPSAnT0snXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIHBlcnNpc3RpbmcgZGF0YScsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIHJlZGlzV3JhcHBlciA9IHJlZGlzV3JhcHBlck1vY2soKVxuICAgICAgcmVkaXNXcmFwcGVyQ2xpZW50ID0gcmVkaXNXcmFwcGVyQ2xpZW50TW9jaygpXG4gICAgICBtb2NrcyA9IFsgcmVkaXNXcmFwcGVyLCByZWRpc1dyYXBwZXJDbGllbnQuaG1zZXQgXVxuICAgICAgcmVkaXNXcmFwcGVyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgaG9zdCwgcG9ydCB9KVxuICAgICAgICAucmV0dXJucyhyZWRpc1dyYXBwZXJDbGllbnQpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIHBlcnNpc3Rpbmcgc2luZ2xlIGRhdGEnLCAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4gcmVkaXNXcmFwcGVyQ2xpZW50Lmhtc2V0Lm9uY2UoKVxuICAgICAgICAud2l0aEV4YWN0QXJncyguLi5mbGF0U2luZ2xlRGF0YSkucmVzb2x2ZXMocG9zaXRpdmVSZXBseSkpXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IHNpbmdsZSBkYXRhJywgKCkgPT5cbiAgICAgICAgcmVkaXNPRE0oeyByZWRpczogcmVkaXNXcmFwcGVyIH0pKHsgaG9zdCwgcG9ydCB9KShcbiAgICAgICAgICB7IGRhdGE6IHNpbmdsZURhdGEsIGlkS2V5IH0pLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgICAgLmVxdWFsVG8oW3Bvc2l0aXZlUmVwbHldKSlcbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgZGVzY3JpYmUoJ1doZW4gcGVyc2lzdGluZyBtdWx0aXBsZSBkYXRhJywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHJlZGlzV3JhcHBlckNsaWVudC5obXNldC5leGFjdGx5KG11bHRpRGF0YS5sZW5ndGgpXG4gICAgICAgIC5yZXNvbHZlcyhwb3NpdGl2ZVJlcGx5KSlcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpdCgnc2hvdWxkIHBlcnNpc3QgbXVsdGlwbGUgZGF0YScsICgpID0+XG4gICAgICAgIHJlZGlzT0RNKHsgcmVkaXM6IHJlZGlzV3JhcHBlciB9KSh7IGhvc3QsIHBvcnQgfSkoXG4gICAgICAgICAgeyBkYXRhOiBtdWx0aURhdGEsIGlkS2V5IH0pLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgICAgLmVxdWFsVG8obXVsdGlEYXRhLm1hcChkID0+IHBvc2l0aXZlUmVwbHkpKSlcbiAgICB9KVxuICB9KVxufSlcbiJdfQ==