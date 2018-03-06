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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi93cmFwcGVycy94bWwyanNXcmFwcGVyLnNwZWMuanMiXSwibmFtZXMiOlsibW9ja3MiLCJ4bWwyanMiLCJ4bWwiLCJqc29uRGF0YSIsImEiLCJiIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJwYXJzZVN0cmluZyIsImNhbGxzRmFrZSIsImFyZ3MiLCJsZW5ndGgiLCJjb252ZXJ0Iiwic2hvdWxkIiwiYmUiLCJldmVudHVhbGx5IiwiZXF1YWwiLCJFcnJvciIsInJlamVjdGVkIiwib25jZSIsIndpdGhBcmdzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOzs7O0FBRUE7Ozs7QUFIQTtBQUtBLHFCQUFTLGVBQVQsRUFBMEIsWUFBTTtBQUM5QixNQUNFQSxjQURGO0FBQUEsTUFFRUMsZUFGRjtBQUFBLE1BR0VDLFlBSEY7QUFBQSxNQUlFQyxpQkFKRjs7QUFNQSxxQkFBTyxZQUFNO0FBQ1hELFVBQU0sMEJBQU47QUFDQUMsZUFBVyxFQUFDQyxHQUFHLENBQUosRUFBT0MsR0FBRyxDQUFWLEVBQVg7QUFDRCxHQUhEOztBQUtBLHdCQUFVO0FBQUEsV0FBTUwsTUFBTU0sT0FBTixDQUFjO0FBQUEsYUFBUUMsS0FBS0MsTUFBTCxFQUFSO0FBQUEsS0FBZCxDQUFOO0FBQUEsR0FBVjs7QUFFQSx1QkFBUyxpQ0FBVCxFQUE0QyxZQUFNO0FBQ2hELDJCQUFXLFlBQU07QUFDZlAsZUFBUyx5QkFBVDtBQUNBRCxjQUFRLEVBQVI7QUFDRCxLQUhEO0FBSUEseUJBQVMsaUJBQVQsRUFBNEIsWUFBTTtBQUNoQyw2QkFBVyxZQUFNO0FBQ2ZDLGVBQU9RLFdBQVAsQ0FDR0MsU0FESCxDQUNhO0FBQUEsNENBQUlDLElBQUo7QUFBSUEsZ0JBQUo7QUFBQTs7QUFBQSxpQkFBYUEsS0FBS0EsS0FBS0MsTUFBTCxHQUFjLENBQW5CLEVBQXNCLElBQXRCLEVBQTRCVCxRQUE1QixDQUFiO0FBQUEsU0FEYjtBQUVELE9BSEQ7O0FBS0EscUJBQUcseUJBQUgsRUFBOEI7QUFBQSxlQUM1Qiw2QkFBYyxFQUFFRixjQUFGLEVBQWQsRUFBMEJZLE9BQTFCLENBQWtDWCxHQUFsQyxFQUF1Q1ksTUFBdkMsQ0FBOENDLEVBQTlDLENBQWlEWCxDQUFqRCxDQUFtRCxTQUFuRCxDQUQ0QjtBQUFBLE9BQTlCOztBQUdBLHFCQUFHLDRCQUFILEVBQWlDO0FBQUEsZUFDL0IsNkJBQWMsRUFBRUgsY0FBRixFQUFkLEVBQTBCWSxPQUExQixDQUFrQ1gsR0FBbEMsRUFBdUNZLE1BQXZDLENBQThDRSxVQUE5QyxDQUNHQyxLQURILENBQ1NkLFFBRFQsQ0FEK0I7QUFBQSxPQUFqQztBQUdELEtBWkQ7O0FBY0EseUJBQVMsZ0NBQVQsRUFBMkMsWUFBTTtBQUMvQyw2QkFBVyxZQUFNO0FBQ2ZGLGVBQU9RLFdBQVAsQ0FDR0MsU0FESCxDQUNhO0FBQUEsNkNBQUlDLElBQUo7QUFBSUEsZ0JBQUo7QUFBQTs7QUFBQSxpQkFBYUEsS0FBS0EsS0FBS0MsTUFBTCxHQUFjLENBQW5CLEVBQXNCLElBQUlNLEtBQUosQ0FBVSxLQUFWLENBQXRCLEVBQXdDLElBQXhDLENBQWI7QUFBQSxTQURiO0FBRUQsT0FIRDs7QUFLQSxxQkFBRyxhQUFILEVBQWtCO0FBQUEsZUFDaEIsNkJBQWMsRUFBRWpCLGNBQUYsRUFBZCxFQUEwQlksT0FBMUIsQ0FBa0NYLEdBQWxDLEVBQXVDWSxNQUF2QyxDQUE4Q0UsVUFBOUMsQ0FBeURELEVBQXpELENBQTRESSxRQUQ1QztBQUFBLE9BQWxCO0FBRUQsS0FSRDs7QUFVQSx5QkFBUyx3QkFBVCxFQUFtQyxZQUFNO0FBQ3ZDLDZCQUFXLFlBQU07QUFDZmxCLGVBQU9RLFdBQVAsQ0FDR0MsU0FESCxDQUNhLFlBQWE7QUFBRSxnQkFBTSxJQUFJUSxLQUFKLENBQVUsS0FBVixDQUFOO0FBQXdCLFNBRHBEO0FBRUQsT0FIRDs7QUFLQSxxQkFBRyxhQUFILEVBQWtCO0FBQUEsZUFDaEIsNkJBQWMsRUFBRWpCLGNBQUYsRUFBZCxFQUEwQlksT0FBMUIsQ0FBa0NYLEdBQWxDLEVBQXVDWSxNQUF2QyxDQUE4Q0UsVUFBOUMsQ0FBeURELEVBQXpELENBQTRESSxRQUQ1QztBQUFBLE9BQWxCO0FBRUQsS0FSRDtBQVNELEdBdENEOztBQXdDQSx1QkFBUyxpQ0FBVCxFQUE0QyxZQUFNO0FBQ2hELDJCQUFXLFlBQU07QUFDZmxCLGVBQVMseUJBQVQ7QUFDQUQsY0FBUSxDQUFDQyxPQUFPUSxXQUFSLENBQVI7QUFDQVIsYUFBT1EsV0FBUCxDQUFtQlcsSUFBbkIsR0FBMEJDLFFBQTFCLENBQW1DbkIsR0FBbkM7QUFDRCxLQUpEO0FBS0EsbUJBQUcsd0NBQUgsRUFBNkMsWUFBTTtBQUNqRCxtQ0FBYyxFQUFFRCxjQUFGLEVBQWQsRUFBMEJZLE9BQTFCLENBQWtDWCxHQUFsQztBQUNBLFVBQUlZLE1BQUosQ0FBV0csS0FBWCxDQUFpQixHQUFqQjtBQUNELEtBSEQ7QUFJRCxHQVZEO0FBV0QsQ0FqRUQ7QUFIQSIsImZpbGUiOiJ4bWwyanNXcmFwcGVyLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXNjcmliZSwgYmVmb3JlLCBiZWZvcmVFYWNoLCBhZnRlckVhY2gsIGl0IH0gZnJvbSAnLi8uLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCB4bWwyanNXcmFwcGVyIGZyb20gJy4vLi4vLi4vLi4vbWFpbi9saWIvd3JhcHBlcnMveG1sMmpzV3JhcHBlcidcbi8vIG1vY2tzXG5pbXBvcnQgeyB4bWwyanNNb2NrLCB4bWwyanNTdHViIH0gZnJvbSAnLi8uLi8uLi9tb2Nrcy9vdGhlcnMveG1sMmpzJ1xuXG5kZXNjcmliZSgnWE1MMkpTV3JhcHBlcicsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgeG1sMmpzLFxuICAgIHhtbCxcbiAgICBqc29uRGF0YVxuXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgeG1sID0gJzx4bWw+U29tZSB4bWwgZGF0YTwveG1sPidcbiAgICBqc29uRGF0YSA9IHthOiAxLCBiOiAyfVxuICB9KVxuXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgZGVzY3JpYmUoJ1doZW4gY29udmVydGluZyB4bWwgdG8ganNvbiAoMSknLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICB4bWwyanMgPSB4bWwyanNTdHViKClcbiAgICAgIG1vY2tzID0gW11cbiAgICB9KVxuICAgIGRlc2NyaWJlKCdXaGVuIHN1Y2Nlc3NmdWwnLCAoKSA9PiB7XG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgeG1sMmpzLnBhcnNlU3RyaW5nXG4gICAgICAgICAgLmNhbGxzRmFrZSgoLi4uYXJncykgPT4gYXJnc1thcmdzLmxlbmd0aCAtIDFdKG51bGwsIGpzb25EYXRhKSlcbiAgICAgIH0pXG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICAgIHhtbDJqc1dyYXBwZXIoeyB4bWwyanMgfSkuY29udmVydCh4bWwpLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIGNvcnJlY3QganNvbicsICgpID0+XG4gICAgICAgIHhtbDJqc1dyYXBwZXIoeyB4bWwyanMgfSkuY29udmVydCh4bWwpLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgICAgLmVxdWFsKGpzb25EYXRhKSlcbiAgICB9KVxuXG4gICAgZGVzY3JpYmUoJ1doZW4gY29yZSB4bWwyanMgcmV0dXJucyBlcnJvcicsICgpID0+IHtcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICB4bWwyanMucGFyc2VTdHJpbmdcbiAgICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0obmV3IEVycm9yKCdlcnInKSwgbnVsbCkpXG4gICAgICB9KVxuXG4gICAgICBpdCgnc2hvdWxkIGZhaWwnLCAoKSA9PlxuICAgICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzIH0pLmNvbnZlcnQoeG1sKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZClcbiAgICB9KVxuXG4gICAgZGVzY3JpYmUoJ1doZW4gY29yZSB4bWwyanMgZmFpbHMnLCAoKSA9PiB7XG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgeG1sMmpzLnBhcnNlU3RyaW5nXG4gICAgICAgICAgLmNhbGxzRmFrZSgoLi4uYXJncykgPT4geyB0aHJvdyBuZXcgRXJyb3IoJ2VycicpIH0pXG4gICAgICB9KVxuXG4gICAgICBpdCgnc2hvdWxkIGZhaWwnLCAoKSA9PlxuICAgICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzIH0pLmNvbnZlcnQoeG1sKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZClcbiAgICB9KVxuICB9KVxuXG4gIGRlc2NyaWJlKCdXaGVuIGNvbnZlcnRpbmcgeG1sIHRvIGpzb24gKDIpJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgeG1sMmpzID0geG1sMmpzTW9jaygpXG4gICAgICBtb2NrcyA9IFt4bWwyanMucGFyc2VTdHJpbmddXG4gICAgICB4bWwyanMucGFyc2VTdHJpbmcub25jZSgpLndpdGhBcmdzKHhtbClcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgYmUgY2FsbGVkIHdpdGggcHJvcGVyIGFyZ3VtZW50cycsICgpID0+IHtcbiAgICAgIHhtbDJqc1dyYXBwZXIoeyB4bWwyanMgfSkuY29udmVydCh4bWwpXG4gICAgICAnMScuc2hvdWxkLmVxdWFsKCcxJylcbiAgICB9KVxuICB9KVxufSlcbiJdfQ==