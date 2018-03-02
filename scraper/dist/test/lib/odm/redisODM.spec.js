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
      mock.verify();
      mock.reset();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When persisting single data', function () {
    // eslint-disable-next-line no-undef
    before(function () {
      mocks = [_redisWrapper2.default, _redisWrapper.redisWrapperClient.hmset];
    });

    // eslint-disable-next-line no-undef
    beforeEach(function () {
      var _redisWrapperClient$h;

      _redisWrapper2.default.once().withExactArgs({ host: host, port: port }).returns(_redisWrapper.redisWrapperClient);
      (_redisWrapperClient$h = _redisWrapper.redisWrapperClient.hmset.once()).withExactArgs.apply(_redisWrapperClient$h, _toConsumableArray(flatSingleData)).resolves(positiveReply);
    });

    // eslint-disable-next-line no-undef
    it('should persist single data', function () {
      return (0, _redisODM2.default)({ redis: _redisWrapper2.default })({ host: host, port: port })({ data: singleData, idKey: idKey }).should.eventually.equalTo([positiveReply]);
    });
  });

  // eslint-disable-next-line no-undef
  describe('When persisting multiple data', function () {
    // eslint-disable-next-line no-undef
    before(function () {
      mocks = [_redisWrapper2.default, _redisWrapper.redisWrapperClient.hmset];
    });

    // eslint-disable-next-line no-undef
    beforeEach(function () {
      _redisWrapper2.default.once().withExactArgs({ host: host, port: port }).returns(_redisWrapper.redisWrapperClient);
      _redisWrapper.redisWrapperClient.hmset.exactly(multiData.length).resolves(positiveReply);
    });

    // eslint-disable-next-line no-undef
    it('should persist multiple data', function () {
      return (0, _redisODM2.default)({ redis: _redisWrapper2.default })({ host: host, port: port })({ data: multiData, idKey: idKey }).should.eventually.equalTo(multiData.map(function (d) {
        return positiveReply;
      }));
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi9vZG0vcmVkaXNPRE0uc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwiaG9zdCIsInBvcnQiLCJmbGF0U2luZ2xlRGF0YSIsInNpbmdsZURhdGEiLCJtdWx0aURhdGEiLCJpZEtleSIsInBvc2l0aXZlUmVwbHkiLCJiZWZvcmUiLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsInJlc2V0IiwiaG1zZXQiLCJiZWZvcmVFYWNoIiwib25jZSIsIndpdGhFeGFjdEFyZ3MiLCJyZXR1cm5zIiwicmVzb2x2ZXMiLCJpdCIsInJlZGlzIiwiZGF0YSIsInNob3VsZCIsImV2ZW50dWFsbHkiLCJlcXVhbFRvIiwiZXhhY3RseSIsImxlbmd0aCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7OztvTUFMQTs7QUFFQTs7QUFFQTs7O0FBSUE7QUFDQUEsU0FBUyxVQUFULEVBQXFCLFlBQU07QUFDekIsTUFDRUMsY0FERjtBQUFBLE1BRUVDLGFBRkY7QUFBQSxNQUdFQyxhQUhGO0FBQUEsTUFJRUMsdUJBSkY7QUFBQSxNQUtFQyxtQkFMRjtBQUFBLE1BTUVDLGtCQU5GO0FBQUEsTUFPRUMsY0FQRjtBQUFBLE1BUUVDLHNCQVJGOztBQVVBO0FBQ0FDLFNBQU8sWUFBTTtBQUNYUCxXQUFPLFdBQVA7QUFDQUMsV0FBTyxNQUFQO0FBQ0FDLHFCQUFpQixDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLE9BQWIsRUFBc0IsR0FBdEIsQ0FBakI7QUFDQUMsaUJBQWEsQ0FBQyxFQUFDLE1BQU0sQ0FBUCxFQUFVLFNBQVMsR0FBbkIsRUFBRCxDQUFiO0FBQ0FDLGdCQUFZLENBQUMsRUFBQyxNQUFNLENBQVAsRUFBVSxTQUFTLEdBQW5CLEVBQUQsRUFBMEIsRUFBQyxNQUFNLENBQVAsRUFBVSxTQUFTLEdBQW5CLEVBQTFCLENBQVo7QUFDQUMsWUFBUSxJQUFSO0FBQ0FDLG9CQUFnQixJQUFoQjtBQUNELEdBUkQ7O0FBVUE7QUFDQUUsWUFBVTtBQUFBLFdBQU1ULE1BQU1VLE9BQU4sQ0FBYyxnQkFBUTtBQUNwQ0MsV0FBS0MsTUFBTDtBQUNBRCxXQUFLRSxLQUFMO0FBQ0QsS0FIZSxDQUFOO0FBQUEsR0FBVjs7QUFLQTtBQUNBZCxXQUFTLDZCQUFULEVBQXdDLFlBQU07QUFDNUM7QUFDQVMsV0FBTyxZQUFNO0FBQ1hSLGNBQVEseUJBQWdCLGlDQUFtQmMsS0FBbkMsQ0FBUjtBQUNELEtBRkQ7O0FBSUE7QUFDQUMsZUFBVyxZQUFNO0FBQUE7O0FBQ2YsNkJBQWFDLElBQWIsR0FBb0JDLGFBQXBCLENBQWtDLEVBQUVoQixVQUFGLEVBQVFDLFVBQVIsRUFBbEMsRUFDR2dCLE9BREg7QUFFQSxnRUFBbUJKLEtBQW5CLENBQXlCRSxJQUF6QixJQUFnQ0MsYUFBaEMsaURBQWlEZCxjQUFqRCxHQUNHZ0IsUUFESCxDQUNZWixhQURaO0FBRUQsS0FMRDs7QUFPQTtBQUNBYSxPQUFHLDRCQUFILEVBQWlDO0FBQUEsYUFDL0Isd0JBQVMsRUFBRUMsNkJBQUYsRUFBVCxFQUFrQyxFQUFFcEIsVUFBRixFQUFRQyxVQUFSLEVBQWxDLEVBQ0UsRUFBRW9CLE1BQU1sQixVQUFSLEVBQW9CRSxZQUFwQixFQURGLEVBQytCaUIsTUFEL0IsQ0FDc0NDLFVBRHRDLENBQ2lEQyxPQURqRCxDQUN5RCxDQUFDbEIsYUFBRCxDQUR6RCxDQUQrQjtBQUFBLEtBQWpDO0FBR0QsR0FsQkQ7O0FBb0JBO0FBQ0FSLFdBQVMsK0JBQVQsRUFBMEMsWUFBTTtBQUM5QztBQUNBUyxXQUFPLFlBQU07QUFDWFIsY0FBUSx5QkFBZ0IsaUNBQW1CYyxLQUFuQyxDQUFSO0FBQ0QsS0FGRDs7QUFJQTtBQUNBQyxlQUFXLFlBQU07QUFDZiw2QkFBYUMsSUFBYixHQUFvQkMsYUFBcEIsQ0FBa0MsRUFBRWhCLFVBQUYsRUFBUUMsVUFBUixFQUFsQyxFQUNHZ0IsT0FESDtBQUVBLHVDQUFtQkosS0FBbkIsQ0FBeUJZLE9BQXpCLENBQWlDckIsVUFBVXNCLE1BQTNDLEVBQW1EUixRQUFuRCxDQUE0RFosYUFBNUQ7QUFDRCxLQUpEOztBQU1BO0FBQ0FhLE9BQUcsOEJBQUgsRUFBbUM7QUFBQSxhQUNqQyx3QkFBUyxFQUFFQyw2QkFBRixFQUFULEVBQWtDLEVBQUVwQixVQUFGLEVBQVFDLFVBQVIsRUFBbEMsRUFDRSxFQUFFb0IsTUFBTWpCLFNBQVIsRUFBbUJDLFlBQW5CLEVBREYsRUFDOEJpQixNQUQ5QixDQUNxQ0MsVUFEckMsQ0FFR0MsT0FGSCxDQUVXcEIsVUFBVXVCLEdBQVYsQ0FBYztBQUFBLGVBQUtyQixhQUFMO0FBQUEsT0FBZCxDQUZYLENBRGlDO0FBQUEsS0FBbkM7QUFJRCxHQWxCRDtBQW1CRCxDQXJFRCIsImZpbGUiOiJyZWRpc09ETS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgcmVkaXNPRE0gZnJvbSAnLi8uLi8uLi8uLi9tYWluL2xpYi9vZG0vcmVkaXNPRE0nXG4vLyBtb2Nrc1xuaW1wb3J0IHJlZGlzV3JhcHBlciwgeyByZWRpc1dyYXBwZXJDbGllbnQgfVxuICBmcm9tICcuLy4uLy4uL21vY2tzL3dyYXBwZXJzL3JlZGlzV3JhcHBlcidcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5kZXNjcmliZSgnUmVkaXNPRE0nLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIGhvc3QsXG4gICAgcG9ydCxcbiAgICBmbGF0U2luZ2xlRGF0YSxcbiAgICBzaW5nbGVEYXRhLFxuICAgIG11bHRpRGF0YSxcbiAgICBpZEtleSxcbiAgICBwb3NpdGl2ZVJlcGx5XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgaG9zdCA9ICdsb2NhbGhvc3QnXG4gICAgcG9ydCA9ICcxMjM0J1xuICAgIGZsYXRTaW5nbGVEYXRhID0gWzEsICdpZCcsIDEsICd2YWx1ZScsICcxJ11cbiAgICBzaW5nbGVEYXRhID0gW3snaWQnOiAxLCAndmFsdWUnOiAnMSd9XVxuICAgIG11bHRpRGF0YSA9IFt7J2lkJzogMSwgJ3ZhbHVlJzogJzEnfSwgeydpZCc6IDIsICd2YWx1ZSc6ICcyJ31dXG4gICAgaWRLZXkgPSAnaWQnXG4gICAgcG9zaXRpdmVSZXBseSA9ICdPSydcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiB7XG4gICAgbW9jay52ZXJpZnkoKVxuICAgIG1vY2sucmVzZXQoKVxuICB9KSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gcGVyc2lzdGluZyBzaW5nbGUgZGF0YScsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmUoKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbIHJlZGlzV3JhcHBlciwgcmVkaXNXcmFwcGVyQ2xpZW50Lmhtc2V0IF1cbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICByZWRpc1dyYXBwZXIub25jZSgpLndpdGhFeGFjdEFyZ3MoeyBob3N0LCBwb3J0IH0pXG4gICAgICAgIC5yZXR1cm5zKHJlZGlzV3JhcHBlckNsaWVudClcbiAgICAgIHJlZGlzV3JhcHBlckNsaWVudC5obXNldC5vbmNlKCkud2l0aEV4YWN0QXJncyguLi5mbGF0U2luZ2xlRGF0YSlcbiAgICAgICAgLnJlc29sdmVzKHBvc2l0aXZlUmVwbHkpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgcGVyc2lzdCBzaW5nbGUgZGF0YScsICgpID0+XG4gICAgICByZWRpc09ETSh7IHJlZGlzOiByZWRpc1dyYXBwZXIgfSkoeyBob3N0LCBwb3J0IH0pKFxuICAgICAgICB7IGRhdGE6IHNpbmdsZURhdGEsIGlkS2V5IH0pLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsVG8oW3Bvc2l0aXZlUmVwbHldKSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gcGVyc2lzdGluZyBtdWx0aXBsZSBkYXRhJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBtb2NrcyA9IFsgcmVkaXNXcmFwcGVyLCByZWRpc1dyYXBwZXJDbGllbnQuaG1zZXQgXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIHJlZGlzV3JhcHBlci5vbmNlKCkud2l0aEV4YWN0QXJncyh7IGhvc3QsIHBvcnQgfSlcbiAgICAgICAgLnJldHVybnMocmVkaXNXcmFwcGVyQ2xpZW50KVxuICAgICAgcmVkaXNXcmFwcGVyQ2xpZW50Lmhtc2V0LmV4YWN0bHkobXVsdGlEYXRhLmxlbmd0aCkucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICB9KVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBwZXJzaXN0IG11bHRpcGxlIGRhdGEnLCAoKSA9PlxuICAgICAgcmVkaXNPRE0oeyByZWRpczogcmVkaXNXcmFwcGVyIH0pKHsgaG9zdCwgcG9ydCB9KShcbiAgICAgICAgeyBkYXRhOiBtdWx0aURhdGEsIGlkS2V5IH0pLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgIC5lcXVhbFRvKG11bHRpRGF0YS5tYXAoZCA9PiBwb3NpdGl2ZVJlcGx5KSkpXG4gIH0pXG59KVxuIl19