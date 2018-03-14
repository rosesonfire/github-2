'use strict';

var _setup = require('./../setup');

var _saveData = require('./../../main/services/saveData');

var _saveData2 = _interopRequireDefault(_saveData);

var _axiosWrapper = require('./../mocks/lib/wrappers/axiosWrapper');

var _axiosWrapper2 = _interopRequireDefault(_axiosWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
(0, _setup.describe)('SaveData', function () {
  var mocks = void 0,
      axios = void 0,
      url = void 0,
      data = void 0,
      reply = void 0;

  (0, _setup.before)(function () {
    url = 'https://github.com/timeline';
    data = {
      data: { someKey: 'someValue' }
    };
    reply = { reply: 'OK' };
  });

  (0, _setup.afterEach)(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  (0, _setup.describe)('When saving data', function () {
    (0, _setup.beforeEach)(function () {
      axios = (0, _axiosWrapper2.default)();
      mocks = [axios.postWithPolling];
      axios.postWithPolling.once().withExactArgs(url, data).returns(Promise.resolve(reply));
    });

    (0, _setup.it)('should return a promise', function () {
      return (0, _saveData2.default)({ http: axios, url: url })(data.data).should.be.a('promise');
    });

    (0, _setup.it)('should save data', function () {
      return (0, _saveData2.default)({ http: axios, url: url })(data.data).should.eventually.equal(reply);
    });
  });
});
// mocks
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL3NhdmVEYXRhLnNwZWMuanMiXSwibmFtZXMiOlsibW9ja3MiLCJheGlvcyIsInVybCIsImRhdGEiLCJyZXBseSIsInNvbWVLZXkiLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsInBvc3RXaXRoUG9sbGluZyIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsIlByb21pc2UiLCJyZXNvbHZlIiwiaHR0cCIsInNob3VsZCIsImJlIiwiYSIsImV2ZW50dWFsbHkiLCJlcXVhbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7OztBQUVBOzs7Ozs7QUFIQTtBQUtBLHFCQUFTLFVBQVQsRUFBcUIsWUFBTTtBQUN6QixNQUNFQSxjQURGO0FBQUEsTUFFRUMsY0FGRjtBQUFBLE1BR0VDLFlBSEY7QUFBQSxNQUlFQyxhQUpGO0FBQUEsTUFLRUMsY0FMRjs7QUFPQSxxQkFBTyxZQUFNO0FBQ1hGLFVBQU0sNkJBQU47QUFDQUMsV0FBTztBQUNMQSxZQUFNLEVBQUVFLFNBQVMsV0FBWDtBQURELEtBQVA7QUFHQUQsWUFBUSxFQUFFQSxPQUFPLElBQVQsRUFBUjtBQUNELEdBTkQ7O0FBUUEsd0JBQVU7QUFBQSxXQUFNSixNQUFNTSxPQUFOLENBQWM7QUFBQSxhQUFRQyxLQUFLQyxNQUFMLEVBQVI7QUFBQSxLQUFkLENBQU47QUFBQSxHQUFWOztBQUVBLHVCQUFTLGtCQUFULEVBQTZCLFlBQU07QUFDakMsMkJBQVcsWUFBTTtBQUNmUCxjQUFRLDZCQUFSO0FBQ0FELGNBQVEsQ0FBRUMsTUFBTVEsZUFBUixDQUFSO0FBQ0FSLFlBQU1RLGVBQU4sQ0FBc0JDLElBQXRCLEdBQTZCQyxhQUE3QixDQUEyQ1QsR0FBM0MsRUFBZ0RDLElBQWhELEVBQ0dTLE9BREgsQ0FDV0MsUUFBUUMsT0FBUixDQUFnQlYsS0FBaEIsQ0FEWDtBQUVELEtBTEQ7O0FBT0EsbUJBQUcseUJBQUgsRUFBOEI7QUFBQSxhQUM1Qix3QkFBUyxFQUFFVyxNQUFNZCxLQUFSLEVBQWVDLFFBQWYsRUFBVCxFQUErQkMsS0FBS0EsSUFBcEMsRUFBMENhLE1BQTFDLENBQWlEQyxFQUFqRCxDQUFvREMsQ0FBcEQsQ0FBc0QsU0FBdEQsQ0FENEI7QUFBQSxLQUE5Qjs7QUFHQSxtQkFBRyxrQkFBSCxFQUF1QjtBQUFBLGFBQ3JCLHdCQUFTLEVBQUVILE1BQU1kLEtBQVIsRUFBZUMsUUFBZixFQUFULEVBQStCQyxLQUFLQSxJQUFwQyxFQUEwQ2EsTUFBMUMsQ0FBaURHLFVBQWpELENBQTREQyxLQUE1RCxDQUFrRWhCLEtBQWxFLENBRHFCO0FBQUEsS0FBdkI7QUFFRCxHQWJEO0FBY0QsQ0FoQ0Q7QUFIQSIsImZpbGUiOiJzYXZlRGF0YS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzY3JpYmUsIGJlZm9yZSwgYmVmb3JlRWFjaCwgYWZ0ZXJFYWNoLCBpdCB9IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgc2F2ZURhdGEgZnJvbSAnLi8uLi8uLi9tYWluL3NlcnZpY2VzL3NhdmVEYXRhJ1xuLy8gbW9ja3NcbmltcG9ydCBheGlvc1dyYXBwZXJNb2NrIGZyb20gJy4vLi4vbW9ja3MvbGliL3dyYXBwZXJzL2F4aW9zV3JhcHBlcidcblxuZGVzY3JpYmUoJ1NhdmVEYXRhJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICBheGlvcyxcbiAgICB1cmwsXG4gICAgZGF0YSxcbiAgICByZXBseVxuXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lbGluZSdcbiAgICBkYXRhID0ge1xuICAgICAgZGF0YTogeyBzb21lS2V5OiAnc29tZVZhbHVlJyB9XG4gICAgfVxuICAgIHJlcGx5ID0geyByZXBseTogJ09LJyB9XG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICBkZXNjcmliZSgnV2hlbiBzYXZpbmcgZGF0YScsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGF4aW9zID0gYXhpb3NXcmFwcGVyTW9jaygpXG4gICAgICBtb2NrcyA9IFsgYXhpb3MucG9zdFdpdGhQb2xsaW5nIF1cbiAgICAgIGF4aW9zLnBvc3RXaXRoUG9sbGluZy5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwsIGRhdGEpXG4gICAgICAgIC5yZXR1cm5zKFByb21pc2UucmVzb2x2ZShyZXBseSkpXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICBzYXZlRGF0YSh7IGh0dHA6IGF4aW9zLCB1cmwgfSkoZGF0YS5kYXRhKS5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgaXQoJ3Nob3VsZCBzYXZlIGRhdGEnLCAoKSA9PlxuICAgICAgc2F2ZURhdGEoeyBodHRwOiBheGlvcywgdXJsIH0pKGRhdGEuZGF0YSkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwocmVwbHkpKVxuICB9KVxufSlcbiJdfQ==