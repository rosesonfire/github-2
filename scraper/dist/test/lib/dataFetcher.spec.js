'use strict';

var _setup = require('./../setup');

var _setup2 = _interopRequireDefault(_setup);

var _dataFetcher = require('./../../main/lib/dataFetcher');

var _dataFetcher2 = _interopRequireDefault(_dataFetcher);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-undef

// unit
describe('DataFetcher', function () {
  var mocks = void 0,
      httpGetter = void 0,
      asyncHttpGetter = void 0,
      url = void 0,
      data = void 0;

  // eslint-disable-next-line no-undef
  before(function () {
    url = 'https://github.com/timeline';
    data = '<xml><tag>Some data</tag></xml>';
  });

  // eslint-disable-next-line no-undef
  afterEach(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When fetching data with sync httpGetter', function () {
    // eslint-disable-next-line no-undef
    beforeEach(function () {
      httpGetter = (0, _plainOldMockObject2.default)();
      mocks = [httpGetter];
      httpGetter.once().withExactArgs(url).returns(data);
    });

    // eslint-disable-next-line no-undef
    it('should return a promise', function () {
      return (0, _dataFetcher2.default)({ httpGetter: httpGetter })({ url: url }).should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should get base url', function () {
      return (0, _dataFetcher2.default)({ httpGetter: httpGetter })({ url: url }).should.eventually.equal(data);
    });
  });

  // eslint-disable-next-line no-undef
  describe('When fetching data with async httpGetter', function () {
    // eslint-disable-next-line no-undef
    beforeEach(function () {
      asyncHttpGetter = (0, _plainOldMockObject2.default)();
      mocks = [asyncHttpGetter];
      asyncHttpGetter.once().withExactArgs(url).returns(Promise.resolve(data));
    });

    // eslint-disable-next-line no-undef
    it('should get base url', function () {
      return (0, _dataFetcher2.default)({ httpGetter: asyncHttpGetter })({ url: url }).should.eventually.equal(data);
    });
  });
});
// mocks
// eslint-disable-next-line no-unused-vars
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9kYXRhRmV0Y2hlci5zcGVjLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwibW9ja3MiLCJodHRwR2V0dGVyIiwiYXN5bmNIdHRwR2V0dGVyIiwidXJsIiwiZGF0YSIsImJlZm9yZSIsImFmdGVyRWFjaCIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwiYmVmb3JlRWFjaCIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsIml0Iiwic2hvdWxkIiwiYmUiLCJhIiwiZXZlbnR1YWxseSIsImVxdWFsIiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7QUFFQTs7QUFMQTtBQU1BQSxTQUFTLGFBQVQsRUFBd0IsWUFBTTtBQUM1QixNQUNFQyxjQURGO0FBQUEsTUFFRUMsbUJBRkY7QUFBQSxNQUdFQyx3QkFIRjtBQUFBLE1BSUVDLFlBSkY7QUFBQSxNQUtFQyxhQUxGOztBQU9BO0FBQ0FDLFNBQU8sWUFBTTtBQUNYRixVQUFNLDZCQUFOO0FBQ0FDLFdBQU8saUNBQVA7QUFDRCxHQUhEOztBQUtBO0FBQ0FFLFlBQVU7QUFBQSxXQUFNTixNQUFNTyxPQUFOLENBQWM7QUFBQSxhQUFRQyxLQUFLQyxNQUFMLEVBQVI7QUFBQSxLQUFkLENBQU47QUFBQSxHQUFWOztBQUVBO0FBQ0FWLFdBQVMseUNBQVQsRUFBb0QsWUFBTTtBQUN4RDtBQUNBVyxlQUFXLFlBQU07QUFDZlQsbUJBQWEsbUNBQWI7QUFDQUQsY0FBUSxDQUFFQyxVQUFGLENBQVI7QUFDQUEsaUJBQVdVLElBQVgsR0FBa0JDLGFBQWxCLENBQWdDVCxHQUFoQyxFQUFxQ1UsT0FBckMsQ0FBNkNULElBQTdDO0FBQ0QsS0FKRDs7QUFNQTtBQUNBVSxPQUFHLHlCQUFILEVBQThCO0FBQUEsYUFBTSwyQkFBWSxFQUFFYixzQkFBRixFQUFaLEVBQTRCLEVBQUVFLFFBQUYsRUFBNUIsRUFDakNZLE1BRGlDLENBQzFCQyxFQUQwQixDQUN2QkMsQ0FEdUIsQ0FDckIsU0FEcUIsQ0FBTjtBQUFBLEtBQTlCOztBQUdBO0FBQ0FILE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUFNLDJCQUFZLEVBQUViLHNCQUFGLEVBQVosRUFBNEIsRUFBRUUsUUFBRixFQUE1QixFQUFxQ1ksTUFBckMsQ0FDN0JHLFVBRDZCLENBQ2xCQyxLQURrQixDQUNaZixJQURZLENBQU47QUFBQSxLQUExQjtBQUVELEdBZkQ7O0FBaUJBO0FBQ0FMLFdBQVMsMENBQVQsRUFBcUQsWUFBTTtBQUN6RDtBQUNBVyxlQUFXLFlBQU07QUFDZlIsd0JBQWtCLG1DQUFsQjtBQUNBRixjQUFRLENBQUVFLGVBQUYsQ0FBUjtBQUNBQSxzQkFBZ0JTLElBQWhCLEdBQXVCQyxhQUF2QixDQUFxQ1QsR0FBckMsRUFBMENVLE9BQTFDLENBQWtETyxRQUFRQyxPQUFSLENBQWdCakIsSUFBaEIsQ0FBbEQ7QUFDRCxLQUpEOztBQU1BO0FBQ0FVLE9BQUcscUJBQUgsRUFBMEI7QUFBQSxhQUN4QiwyQkFBWSxFQUFFYixZQUFZQyxlQUFkLEVBQVosRUFBNkMsRUFBRUMsUUFBRixFQUE3QyxFQUFzRFksTUFBdEQsQ0FBNkRHLFVBQTdELENBQ0dDLEtBREgsQ0FDU2YsSUFEVCxDQUR3QjtBQUFBLEtBQTFCO0FBR0QsR0FaRDtBQWFELENBakREO0FBSkE7QUFKQSIsImZpbGUiOiJkYXRhRmV0Y2hlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgZGF0YUZldGNoZXIgZnJvbSAnLi8uLi8uLi9tYWluL2xpYi9kYXRhRmV0Y2hlcidcbi8vIG1vY2tzXG5pbXBvcnQgcGxhaW5PbGRNb2NrT2JqZWN0IGZyb20gJy4vLi4vbW9ja3Mvb3RoZXJzL3BsYWluT2xkTW9ja09iamVjdCdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5kZXNjcmliZSgnRGF0YUZldGNoZXInLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIGh0dHBHZXR0ZXIsXG4gICAgYXN5bmNIdHRwR2V0dGVyLFxuICAgIHVybCxcbiAgICBkYXRhXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lbGluZSdcbiAgICBkYXRhID0gJzx4bWw+PHRhZz5Tb21lIGRhdGE8L3RhZz48L3htbD4nXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGZldGNoaW5nIGRhdGEgd2l0aCBzeW5jIGh0dHBHZXR0ZXInLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBodHRwR2V0dGVyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICAgIG1vY2tzID0gWyBodHRwR2V0dGVyIF1cbiAgICAgIGh0dHBHZXR0ZXIub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKS5yZXR1cm5zKGRhdGEpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+IGRhdGFGZXRjaGVyKHsgaHR0cEdldHRlciB9KSh7IHVybCB9KVxuICAgICAgLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGdldCBiYXNlIHVybCcsICgpID0+IGRhdGFGZXRjaGVyKHsgaHR0cEdldHRlciB9KSh7IHVybCB9KS5zaG91bGRcbiAgICAgIC5ldmVudHVhbGx5LmVxdWFsKGRhdGEpKVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBkYXRhIHdpdGggYXN5bmMgaHR0cEdldHRlcicsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGFzeW5jSHR0cEdldHRlciA9IHBsYWluT2xkTW9ja09iamVjdCgpXG4gICAgICBtb2NrcyA9IFsgYXN5bmNIdHRwR2V0dGVyIF1cbiAgICAgIGFzeW5jSHR0cEdldHRlci5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwpLnJldHVybnMoUHJvbWlzZS5yZXNvbHZlKGRhdGEpKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGdldCBiYXNlIHVybCcsICgpID0+XG4gICAgICBkYXRhRmV0Y2hlcih7IGh0dHBHZXR0ZXI6IGFzeW5jSHR0cEdldHRlciB9KSh7IHVybCB9KS5zaG91bGQuZXZlbnR1YWxseVxuICAgICAgICAuZXF1YWwoZGF0YSkpXG4gIH0pXG59KVxuIl19