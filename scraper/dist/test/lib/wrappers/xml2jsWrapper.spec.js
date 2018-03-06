'use strict';

var _setup = require('./../../setup');

var _setup2 = _interopRequireDefault(_setup);

var _xml2jsWrapper = require('./../../../main/lib/wrappers/xml2jsWrapper');

var _xml2jsWrapper2 = _interopRequireDefault(_xml2jsWrapper);

var _xml2js = require('./../../mocks/others/xml2js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-undef

// unit
describe('XML2JSWrapper', function () {
  var mocks = void 0,
      xml2js = void 0,
      xml = void 0,
      jsonData = void 0;

  // eslint-disable-next-line no-undef
  before(function () {
    xml = '<xml>Some xml data</xml>';
    jsonData = { a: 1, b: 2 };
  });

  // eslint-disable-next-line no-undef
  afterEach(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When converting xml to json (1)', function () {
    // eslint-disable-next-line no-undef
    beforeEach(function () {
      xml2js = (0, _xml2js.xml2jsStub)();
      mocks = [];
    });
    // eslint-disable-next-line no-undef
    describe('When successful', function () {
      // eslint-disable-next-line no-undef
      beforeEach(function () {
        xml2js.parseString.callsFake(function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return args[args.length - 1](null, jsonData);
        });
      });

      // eslint-disable-next-line no-undef
      it('should return a promise', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js }).convert(xml).should.be.a('promise');
      });

      // eslint-disable-next-line no-undef
      it('should return correct json', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js }).convert(xml).should.eventually.equal(jsonData);
      });
    });

    // eslint-disable-next-line no-undef
    describe('When core xml2js returns error', function () {
      // eslint-disable-next-line no-undef
      beforeEach(function () {
        xml2js.parseString.callsFake(function () {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return args[args.length - 1](new Error('err'), null);
        });
      });

      // eslint-disable-next-line no-undef
      it('should fail', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js }).convert(xml).should.eventually.be.rejected;
      });
    });

    // eslint-disable-next-line no-undef
    describe('When core xml2js fails', function () {
      // eslint-disable-next-line no-undef
      beforeEach(function () {
        xml2js.parseString.callsFake(function () {
          throw new Error('err');
        });
      });

      // eslint-disable-next-line no-undef
      it('should fail', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js }).convert(xml).should.eventually.be.rejected;
      });
    });
  });

  // eslint-disable-next-line no-undef
  describe('When converting xml to json (2)', function () {
    // eslint-disable-next-line no-undef
    beforeEach(function () {
      xml2js = (0, _xml2js.xml2jsMock)();
      mocks = [xml2js.parseString];
      xml2js.parseString.once().withArgs(xml);
    });
    // eslint-disable-next-line no-undef
    it('should be called with proper arguments', function () {
      (0, _xml2jsWrapper2.default)({ xml2js: xml2js }).convert(xml);
      '1'.should.equal('1');
    });
  });
});
// mocks
// eslint-disable-next-line no-unused-vars
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi93cmFwcGVycy94bWwyanNXcmFwcGVyLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJtb2NrcyIsInhtbDJqcyIsInhtbCIsImpzb25EYXRhIiwiYmVmb3JlIiwiYSIsImIiLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsImJlZm9yZUVhY2giLCJwYXJzZVN0cmluZyIsImNhbGxzRmFrZSIsImFyZ3MiLCJsZW5ndGgiLCJpdCIsImNvbnZlcnQiLCJzaG91bGQiLCJiZSIsImV2ZW50dWFsbHkiLCJlcXVhbCIsIkVycm9yIiwicmVqZWN0ZWQiLCJvbmNlIiwid2l0aEFyZ3MiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7O0FBTEE7QUFNQUEsU0FBUyxlQUFULEVBQTBCLFlBQU07QUFDOUIsTUFDRUMsY0FERjtBQUFBLE1BRUVDLGVBRkY7QUFBQSxNQUdFQyxZQUhGO0FBQUEsTUFJRUMsaUJBSkY7O0FBTUE7QUFDQUMsU0FBTyxZQUFNO0FBQ1hGLFVBQU0sMEJBQU47QUFDQUMsZUFBVyxFQUFDRSxHQUFHLENBQUosRUFBT0MsR0FBRyxDQUFWLEVBQVg7QUFDRCxHQUhEOztBQUtBO0FBQ0FDLFlBQVU7QUFBQSxXQUFNUCxNQUFNUSxPQUFOLENBQWM7QUFBQSxhQUFRQyxLQUFLQyxNQUFMLEVBQVI7QUFBQSxLQUFkLENBQU47QUFBQSxHQUFWOztBQUVBO0FBQ0FYLFdBQVMsaUNBQVQsRUFBNEMsWUFBTTtBQUNoRDtBQUNBWSxlQUFXLFlBQU07QUFDZlYsZUFBUyx5QkFBVDtBQUNBRCxjQUFRLEVBQVI7QUFDRCxLQUhEO0FBSUE7QUFDQUQsYUFBUyxpQkFBVCxFQUE0QixZQUFNO0FBQ2hDO0FBQ0FZLGlCQUFXLFlBQU07QUFDZlYsZUFBT1csV0FBUCxDQUNHQyxTQURILENBQ2E7QUFBQSw0Q0FBSUMsSUFBSjtBQUFJQSxnQkFBSjtBQUFBOztBQUFBLGlCQUFhQSxLQUFLQSxLQUFLQyxNQUFMLEdBQWMsQ0FBbkIsRUFBc0IsSUFBdEIsRUFBNEJaLFFBQTVCLENBQWI7QUFBQSxTQURiO0FBRUQsT0FIRDs7QUFLQTtBQUNBYSxTQUFHLHlCQUFILEVBQThCO0FBQUEsZUFDNUIsNkJBQWMsRUFBRWYsY0FBRixFQUFkLEVBQTBCZ0IsT0FBMUIsQ0FBa0NmLEdBQWxDLEVBQXVDZ0IsTUFBdkMsQ0FBOENDLEVBQTlDLENBQWlEZCxDQUFqRCxDQUFtRCxTQUFuRCxDQUQ0QjtBQUFBLE9BQTlCOztBQUdBO0FBQ0FXLFNBQUcsNEJBQUgsRUFBaUM7QUFBQSxlQUMvQiw2QkFBYyxFQUFFZixjQUFGLEVBQWQsRUFBMEJnQixPQUExQixDQUFrQ2YsR0FBbEMsRUFBdUNnQixNQUF2QyxDQUE4Q0UsVUFBOUMsQ0FDR0MsS0FESCxDQUNTbEIsUUFEVCxDQUQrQjtBQUFBLE9BQWpDO0FBR0QsS0FmRDs7QUFpQkE7QUFDQUosYUFBUyxnQ0FBVCxFQUEyQyxZQUFNO0FBQy9DO0FBQ0FZLGlCQUFXLFlBQU07QUFDZlYsZUFBT1csV0FBUCxDQUNHQyxTQURILENBQ2E7QUFBQSw2Q0FBSUMsSUFBSjtBQUFJQSxnQkFBSjtBQUFBOztBQUFBLGlCQUFhQSxLQUFLQSxLQUFLQyxNQUFMLEdBQWMsQ0FBbkIsRUFBc0IsSUFBSU8sS0FBSixDQUFVLEtBQVYsQ0FBdEIsRUFBd0MsSUFBeEMsQ0FBYjtBQUFBLFNBRGI7QUFFRCxPQUhEOztBQUtBO0FBQ0FOLFNBQUcsYUFBSCxFQUFrQjtBQUFBLGVBQ2hCLDZCQUFjLEVBQUVmLGNBQUYsRUFBZCxFQUEwQmdCLE9BQTFCLENBQWtDZixHQUFsQyxFQUF1Q2dCLE1BQXZDLENBQThDRSxVQUE5QyxDQUF5REQsRUFBekQsQ0FBNERJLFFBRDVDO0FBQUEsT0FBbEI7QUFFRCxLQVZEOztBQVlBO0FBQ0F4QixhQUFTLHdCQUFULEVBQW1DLFlBQU07QUFDdkM7QUFDQVksaUJBQVcsWUFBTTtBQUNmVixlQUFPVyxXQUFQLENBQ0dDLFNBREgsQ0FDYSxZQUFhO0FBQUUsZ0JBQU0sSUFBSVMsS0FBSixDQUFVLEtBQVYsQ0FBTjtBQUF3QixTQURwRDtBQUVELE9BSEQ7O0FBS0E7QUFDQU4sU0FBRyxhQUFILEVBQWtCO0FBQUEsZUFDaEIsNkJBQWMsRUFBRWYsY0FBRixFQUFkLEVBQTBCZ0IsT0FBMUIsQ0FBa0NmLEdBQWxDLEVBQXVDZ0IsTUFBdkMsQ0FBOENFLFVBQTlDLENBQXlERCxFQUF6RCxDQUE0REksUUFENUM7QUFBQSxPQUFsQjtBQUVELEtBVkQ7QUFXRCxHQWpERDs7QUFtREE7QUFDQXhCLFdBQVMsaUNBQVQsRUFBNEMsWUFBTTtBQUNoRDtBQUNBWSxlQUFXLFlBQU07QUFDZlYsZUFBUyx5QkFBVDtBQUNBRCxjQUFRLENBQUNDLE9BQU9XLFdBQVIsQ0FBUjtBQUNBWCxhQUFPVyxXQUFQLENBQW1CWSxJQUFuQixHQUEwQkMsUUFBMUIsQ0FBbUN2QixHQUFuQztBQUNELEtBSkQ7QUFLQTtBQUNBYyxPQUFHLHdDQUFILEVBQTZDLFlBQU07QUFDakQsbUNBQWMsRUFBRWYsY0FBRixFQUFkLEVBQTBCZ0IsT0FBMUIsQ0FBa0NmLEdBQWxDO0FBQ0EsVUFBSWdCLE1BQUosQ0FBV0csS0FBWCxDQUFpQixHQUFqQjtBQUNELEtBSEQ7QUFJRCxHQVpEO0FBYUQsQ0FsRkQ7QUFKQTtBQUpBIiwiZmlsZSI6InhtbDJqc1dyYXBwZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGV4cGVjdCBmcm9tICcuLy4uLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHhtbDJqc1dyYXBwZXIgZnJvbSAnLi8uLi8uLi8uLi9tYWluL2xpYi93cmFwcGVycy94bWwyanNXcmFwcGVyJ1xuLy8gbW9ja3NcbmltcG9ydCB7IHhtbDJqc01vY2ssIHhtbDJqc1N0dWIgfSBmcm9tICcuLy4uLy4uL21vY2tzL290aGVycy94bWwyanMnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuZGVzY3JpYmUoJ1hNTDJKU1dyYXBwZXInLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIHhtbDJqcyxcbiAgICB4bWwsXG4gICAganNvbkRhdGFcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICB4bWwgPSAnPHhtbD5Tb21lIHhtbCBkYXRhPC94bWw+J1xuICAgIGpzb25EYXRhID0ge2E6IDEsIGI6IDJ9XG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGNvbnZlcnRpbmcgeG1sIHRvIGpzb24gKDEpJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgeG1sMmpzID0geG1sMmpzU3R1YigpXG4gICAgICBtb2NrcyA9IFtdXG4gICAgfSlcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBkZXNjcmliZSgnV2hlbiBzdWNjZXNzZnVsJywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgeG1sMmpzLnBhcnNlU3RyaW5nXG4gICAgICAgICAgLmNhbGxzRmFrZSgoLi4uYXJncykgPT4gYXJnc1thcmdzLmxlbmd0aCAtIDFdKG51bGwsIGpzb25EYXRhKSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgKCkgPT5cbiAgICAgICAgeG1sMmpzV3JhcHBlcih7IHhtbDJqcyB9KS5jb252ZXJ0KHhtbCkuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBjb3JyZWN0IGpzb24nLCAoKSA9PlxuICAgICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzIH0pLmNvbnZlcnQoeG1sKS5zaG91bGQuZXZlbnR1YWxseVxuICAgICAgICAgIC5lcXVhbChqc29uRGF0YSkpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIGNvcmUgeG1sMmpzIHJldHVybnMgZXJyb3InLCAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICB4bWwyanMucGFyc2VTdHJpbmdcbiAgICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0obmV3IEVycm9yKCdlcnInKSwgbnVsbCkpXG4gICAgICB9KVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGl0KCdzaG91bGQgZmFpbCcsICgpID0+XG4gICAgICAgIHhtbDJqc1dyYXBwZXIoeyB4bWwyanMgfSkuY29udmVydCh4bWwpLnNob3VsZC5ldmVudHVhbGx5LmJlLnJlamVjdGVkKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBkZXNjcmliZSgnV2hlbiBjb3JlIHhtbDJqcyBmYWlscycsICgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHhtbDJqcy5wYXJzZVN0cmluZ1xuICAgICAgICAgIC5jYWxsc0Zha2UoKC4uLmFyZ3MpID0+IHsgdGhyb3cgbmV3IEVycm9yKCdlcnInKSB9KVxuICAgICAgfSlcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpdCgnc2hvdWxkIGZhaWwnLCAoKSA9PlxuICAgICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzIH0pLmNvbnZlcnQoeG1sKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZClcbiAgICB9KVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjb252ZXJ0aW5nIHhtbCB0byBqc29uICgyKScsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIHhtbDJqcyA9IHhtbDJqc01vY2soKVxuICAgICAgbW9ja3MgPSBbeG1sMmpzLnBhcnNlU3RyaW5nXVxuICAgICAgeG1sMmpzLnBhcnNlU3RyaW5nLm9uY2UoKS53aXRoQXJncyh4bWwpXG4gICAgfSlcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHByb3BlciBhcmd1bWVudHMnLCAoKSA9PiB7XG4gICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzIH0pLmNvbnZlcnQoeG1sKVxuICAgICAgJzEnLnNob3VsZC5lcXVhbCgnMScpXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=