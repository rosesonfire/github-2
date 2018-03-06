'use strict';

var _setup = require('./../../setup');

var _xml2jsWrapper = require('./../../../main/lib/wrappers/xml2jsWrapper');

var _xml2jsWrapper2 = _interopRequireDefault(_xml2jsWrapper);

var _xml2js = require('./../../mocks/others/xml2js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
(0, _setup.describe)('XML2JSWrapper', function () {
  var mocks = void 0,
      xml2js = void 0,
      xml = void 0,
      jsonData = void 0;

  (0, _setup.before)(function () {
    xml = '<xml>Some xml data</xml>';
    jsonData = { a: 1, b: 2 };
  });

  (0, _setup.afterEach)(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  (0, _setup.describe)('When converting xml to json (1)', function () {
    (0, _setup.beforeEach)(function () {
      xml2js = (0, _xml2js.xml2jsStub)();
      mocks = [];
    });
    (0, _setup.describe)('When successful', function () {
      (0, _setup.beforeEach)(function () {
        xml2js.parseString.callsFake(function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return args[args.length - 1](null, jsonData);
        });
      });

      (0, _setup.it)('should return a promise', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js }).convert(xml).should.be.a('promise');
      });

      (0, _setup.it)('should return correct json', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js }).convert(xml).should.eventually.equal(jsonData);
      });
    });

    (0, _setup.describe)('When core xml2js returns error', function () {
      (0, _setup.beforeEach)(function () {
        xml2js.parseString.callsFake(function () {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return args[args.length - 1](new Error('err'), null);
        });
      });

      (0, _setup.it)('should fail', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js }).convert(xml).should.eventually.be.rejected;
      });
    });

    (0, _setup.describe)('When core xml2js fails', function () {
      (0, _setup.beforeEach)(function () {
        xml2js.parseString.callsFake(function () {
          throw new Error('err');
        });
      });

      (0, _setup.it)('should fail', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js }).convert(xml).should.eventually.be.rejected;
      });
    });
  });

  (0, _setup.describe)('When converting xml to json (2)', function () {
    (0, _setup.beforeEach)(function () {
      xml2js = (0, _xml2js.xml2jsMock)();
      mocks = [xml2js.parseString];
      xml2js.parseString.once().withArgs(xml);
    });

    (0, _setup.it)('should be called with proper arguments', function () {
      (0, _xml2jsWrapper2.default)({ xml2js: xml2js }).convert(xml);
      '1'.should.equal('1');
    });
  });
});
// mocks
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi93cmFwcGVycy94bWwyanNXcmFwcGVyLnNwZWMuanMiXSwibmFtZXMiOlsibW9ja3MiLCJ4bWwyanMiLCJ4bWwiLCJqc29uRGF0YSIsImEiLCJiIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJwYXJzZVN0cmluZyIsImNhbGxzRmFrZSIsImFyZ3MiLCJsZW5ndGgiLCJjb252ZXJ0Iiwic2hvdWxkIiwiYmUiLCJldmVudHVhbGx5IiwiZXF1YWwiLCJFcnJvciIsInJlamVjdGVkIiwib25jZSIsIndpdGhBcmdzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOzs7O0FBRUE7Ozs7QUFIQTtBQUtBLHFCQUFTLGVBQVQsRUFBMEIsWUFBTTtBQUM5QixNQUNFQSxjQURGO0FBQUEsTUFFRUMsZUFGRjtBQUFBLE1BR0VDLFlBSEY7QUFBQSxNQUlFQyxpQkFKRjs7QUFNQSxxQkFBTyxZQUFNO0FBQ1hELFVBQU0sMEJBQU47QUFDQUMsZUFBVyxFQUFDQyxHQUFHLENBQUosRUFBT0MsR0FBRyxDQUFWLEVBQVg7QUFDRCxHQUhEOztBQUtBLHdCQUFVO0FBQUEsV0FBTUwsTUFBTU0sT0FBTixDQUFjO0FBQUEsYUFBUUMsS0FBS0MsTUFBTCxFQUFSO0FBQUEsS0FBZCxDQUFOO0FBQUEsR0FBVjs7QUFFQSx1QkFBUyxpQ0FBVCxFQUE0QyxZQUFNO0FBQ2hELDJCQUFXLFlBQU07QUFDZlAsZUFBUyx5QkFBVDtBQUNBRCxjQUFRLEVBQVI7QUFDRCxLQUhEO0FBSUEseUJBQVMsaUJBQVQsRUFBNEIsWUFBTTtBQUNoQyw2QkFBVyxZQUFNO0FBQ2ZDLGVBQU9RLFdBQVAsQ0FDR0MsU0FESCxDQUNhO0FBQUEsNENBQUlDLElBQUo7QUFBSUEsZ0JBQUo7QUFBQTs7QUFBQSxpQkFBYUEsS0FBS0EsS0FBS0MsTUFBTCxHQUFjLENBQW5CLEVBQXNCLElBQXRCLEVBQTRCVCxRQUE1QixDQUFiO0FBQUEsU0FEYjtBQUVELE9BSEQ7O0FBS0EscUJBQUcseUJBQUgsRUFBOEI7QUFBQSxlQUM1Qiw2QkFBYyxFQUFFRixjQUFGLEVBQWQsRUFBMEJZLE9BQTFCLENBQWtDWCxHQUFsQyxFQUF1Q1ksTUFBdkMsQ0FBOENDLEVBQTlDLENBQWlEWCxDQUFqRCxDQUFtRCxTQUFuRCxDQUQ0QjtBQUFBLE9BQTlCOztBQUdBLHFCQUFHLDRCQUFILEVBQWlDO0FBQUEsZUFDL0IsNkJBQWMsRUFBRUgsY0FBRixFQUFkLEVBQTBCWSxPQUExQixDQUFrQ1gsR0FBbEMsRUFBdUNZLE1BQXZDLENBQThDRSxVQUE5QyxDQUNHQyxLQURILENBQ1NkLFFBRFQsQ0FEK0I7QUFBQSxPQUFqQztBQUdELEtBWkQ7O0FBY0EseUJBQVMsZ0NBQVQsRUFBMkMsWUFBTTtBQUMvQyw2QkFBVyxZQUFNO0FBQ2ZGLGVBQU9RLFdBQVAsQ0FDR0MsU0FESCxDQUNhO0FBQUEsNkNBQUlDLElBQUo7QUFBSUEsZ0JBQUo7QUFBQTs7QUFBQSxpQkFBYUEsS0FBS0EsS0FBS0MsTUFBTCxHQUFjLENBQW5CLEVBQXNCLElBQUlNLEtBQUosQ0FBVSxLQUFWLENBQXRCLEVBQXdDLElBQXhDLENBQWI7QUFBQSxTQURiO0FBRUQsT0FIRDs7QUFLQSxxQkFBRyxhQUFILEVBQWtCO0FBQUEsZUFDaEIsNkJBQWMsRUFBRWpCLGNBQUYsRUFBZCxFQUEwQlksT0FBMUIsQ0FBa0NYLEdBQWxDLEVBQXVDWSxNQUF2QyxDQUE4Q0UsVUFBOUMsQ0FBeURELEVBQXpELENBQTRESSxRQUQ1QztBQUFBLE9BQWxCO0FBRUQsS0FSRDs7QUFVQSx5QkFBUyx3QkFBVCxFQUFtQyxZQUFNO0FBQ3ZDLDZCQUFXLFlBQU07QUFDZmxCLGVBQU9RLFdBQVAsQ0FDR0MsU0FESCxDQUNhLFlBQWE7QUFBRSxnQkFBTSxJQUFJUSxLQUFKLENBQVUsS0FBVixDQUFOO0FBQXdCLFNBRHBEO0FBRUQsT0FIRDs7QUFLQSxxQkFBRyxhQUFILEVBQWtCO0FBQUEsZUFDaEIsNkJBQWMsRUFBRWpCLGNBQUYsRUFBZCxFQUEwQlksT0FBMUIsQ0FBa0NYLEdBQWxDLEVBQXVDWSxNQUF2QyxDQUE4Q0UsVUFBOUMsQ0FBeURELEVBQXpELENBQTRESSxRQUQ1QztBQUFBLE9BQWxCO0FBRUQsS0FSRDtBQVNELEdBdENEOztBQXdDQSx1QkFBUyxpQ0FBVCxFQUE0QyxZQUFNO0FBQ2hELDJCQUFXLFlBQU07QUFDZmxCLGVBQVMseUJBQVQ7QUFDQUQsY0FBUSxDQUFDQyxPQUFPUSxXQUFSLENBQVI7QUFDQVIsYUFBT1EsV0FBUCxDQUFtQlcsSUFBbkIsR0FBMEJDLFFBQTFCLENBQW1DbkIsR0FBbkM7QUFDRCxLQUpEOztBQU1BLG1CQUFHLHdDQUFILEVBQTZDLFlBQU07QUFDakQsbUNBQWMsRUFBRUQsY0FBRixFQUFkLEVBQTBCWSxPQUExQixDQUFrQ1gsR0FBbEM7QUFDQSxVQUFJWSxNQUFKLENBQVdHLEtBQVgsQ0FBaUIsR0FBakI7QUFDRCxLQUhEO0FBSUQsR0FYRDtBQVlELENBbEVEO0FBSEEiLCJmaWxlIjoieG1sMmpzV3JhcHBlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzY3JpYmUsIGJlZm9yZSwgYmVmb3JlRWFjaCwgYWZ0ZXJFYWNoLCBpdCB9IGZyb20gJy4vLi4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgeG1sMmpzV3JhcHBlciBmcm9tICcuLy4uLy4uLy4uL21haW4vbGliL3dyYXBwZXJzL3htbDJqc1dyYXBwZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHsgeG1sMmpzTW9jaywgeG1sMmpzU3R1YiB9IGZyb20gJy4vLi4vLi4vbW9ja3Mvb3RoZXJzL3htbDJqcydcblxuZGVzY3JpYmUoJ1hNTDJKU1dyYXBwZXInLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIHhtbDJqcyxcbiAgICB4bWwsXG4gICAganNvbkRhdGFcblxuICBiZWZvcmUoKCkgPT4ge1xuICAgIHhtbCA9ICc8eG1sPlNvbWUgeG1sIGRhdGE8L3htbD4nXG4gICAganNvbkRhdGEgPSB7YTogMSwgYjogMn1cbiAgfSlcblxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IG1vY2sudmVyaWZ5KCkpKVxuXG4gIGRlc2NyaWJlKCdXaGVuIGNvbnZlcnRpbmcgeG1sIHRvIGpzb24gKDEpJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgeG1sMmpzID0geG1sMmpzU3R1YigpXG4gICAgICBtb2NrcyA9IFtdXG4gICAgfSlcbiAgICBkZXNjcmliZSgnV2hlbiBzdWNjZXNzZnVsJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHhtbDJqcy5wYXJzZVN0cmluZ1xuICAgICAgICAgIC5jYWxsc0Zha2UoKC4uLmFyZ3MpID0+IGFyZ3NbYXJncy5sZW5ndGggLSAxXShudWxsLCBqc29uRGF0YSkpXG4gICAgICB9KVxuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzIH0pLmNvbnZlcnQoeG1sKS5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBjb3JyZWN0IGpzb24nLCAoKSA9PlxuICAgICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzIH0pLmNvbnZlcnQoeG1sKS5zaG91bGQuZXZlbnR1YWxseVxuICAgICAgICAgIC5lcXVhbChqc29uRGF0YSkpXG4gICAgfSlcblxuICAgIGRlc2NyaWJlKCdXaGVuIGNvcmUgeG1sMmpzIHJldHVybnMgZXJyb3InLCAoKSA9PiB7XG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgeG1sMmpzLnBhcnNlU3RyaW5nXG4gICAgICAgICAgLmNhbGxzRmFrZSgoLi4uYXJncykgPT4gYXJnc1thcmdzLmxlbmd0aCAtIDFdKG5ldyBFcnJvcignZXJyJyksIG51bGwpKVxuICAgICAgfSlcblxuICAgICAgaXQoJ3Nob3VsZCBmYWlsJywgKCkgPT5cbiAgICAgICAgeG1sMmpzV3JhcHBlcih7IHhtbDJqcyB9KS5jb252ZXJ0KHhtbCkuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWQpXG4gICAgfSlcblxuICAgIGRlc2NyaWJlKCdXaGVuIGNvcmUgeG1sMmpzIGZhaWxzJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHhtbDJqcy5wYXJzZVN0cmluZ1xuICAgICAgICAgIC5jYWxsc0Zha2UoKC4uLmFyZ3MpID0+IHsgdGhyb3cgbmV3IEVycm9yKCdlcnInKSB9KVxuICAgICAgfSlcblxuICAgICAgaXQoJ3Nob3VsZCBmYWlsJywgKCkgPT5cbiAgICAgICAgeG1sMmpzV3JhcHBlcih7IHhtbDJqcyB9KS5jb252ZXJ0KHhtbCkuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWQpXG4gICAgfSlcbiAgfSlcblxuICBkZXNjcmliZSgnV2hlbiBjb252ZXJ0aW5nIHhtbCB0byBqc29uICgyKScsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIHhtbDJqcyA9IHhtbDJqc01vY2soKVxuICAgICAgbW9ja3MgPSBbeG1sMmpzLnBhcnNlU3RyaW5nXVxuICAgICAgeG1sMmpzLnBhcnNlU3RyaW5nLm9uY2UoKS53aXRoQXJncyh4bWwpXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgYmUgY2FsbGVkIHdpdGggcHJvcGVyIGFyZ3VtZW50cycsICgpID0+IHtcbiAgICAgIHhtbDJqc1dyYXBwZXIoeyB4bWwyanMgfSkuY29udmVydCh4bWwpXG4gICAgICAnMScuc2hvdWxkLmVxdWFsKCcxJylcbiAgICB9KVxuICB9KVxufSlcbiJdfQ==