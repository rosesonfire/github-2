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
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js })({ xml: xml }).should.be.a('promise');
      });

      // eslint-disable-next-line no-undef
      it('should return correct json', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js })({ xml: xml }).should.eventually.equal(jsonData);
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
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js })({ xml: xml }).should.eventually.be.rejected;
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
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js })({ xml: xml }).should.eventually.be.rejected;
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
      (0, _xml2jsWrapper2.default)({ xml2js: xml2js })({ xml: xml });
      '1'.should.equal('1');
    });
  });
});
// mocks
// eslint-disable-next-line no-unused-vars
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi93cmFwcGVycy94bWwyanNXcmFwcGVyLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJtb2NrcyIsInhtbDJqcyIsInhtbCIsImpzb25EYXRhIiwiYmVmb3JlIiwiYSIsImIiLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsImJlZm9yZUVhY2giLCJwYXJzZVN0cmluZyIsImNhbGxzRmFrZSIsImFyZ3MiLCJsZW5ndGgiLCJpdCIsInNob3VsZCIsImJlIiwiZXZlbnR1YWxseSIsImVxdWFsIiwiRXJyb3IiLCJyZWplY3RlZCIsIm9uY2UiLCJ3aXRoQXJncyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7QUFMQTtBQU1BQSxTQUFTLGVBQVQsRUFBMEIsWUFBTTtBQUM5QixNQUNFQyxjQURGO0FBQUEsTUFFRUMsZUFGRjtBQUFBLE1BR0VDLFlBSEY7QUFBQSxNQUlFQyxpQkFKRjs7QUFNQTtBQUNBQyxTQUFPLFlBQU07QUFDWEYsVUFBTSwwQkFBTjtBQUNBQyxlQUFXLEVBQUNFLEdBQUcsQ0FBSixFQUFPQyxHQUFHLENBQVYsRUFBWDtBQUNELEdBSEQ7O0FBS0E7QUFDQUMsWUFBVTtBQUFBLFdBQU1QLE1BQU1RLE9BQU4sQ0FBYztBQUFBLGFBQVFDLEtBQUtDLE1BQUwsRUFBUjtBQUFBLEtBQWQsQ0FBTjtBQUFBLEdBQVY7O0FBRUE7QUFDQVgsV0FBUyxpQ0FBVCxFQUE0QyxZQUFNO0FBQ2hEO0FBQ0FZLGVBQVcsWUFBTTtBQUNmVixlQUFTLHlCQUFUO0FBQ0FELGNBQVEsRUFBUjtBQUNELEtBSEQ7QUFJQTtBQUNBRCxhQUFTLGlCQUFULEVBQTRCLFlBQU07QUFDaEM7QUFDQVksaUJBQVcsWUFBTTtBQUNmVixlQUFPVyxXQUFQLENBQ0dDLFNBREgsQ0FDYTtBQUFBLDRDQUFJQyxJQUFKO0FBQUlBLGdCQUFKO0FBQUE7O0FBQUEsaUJBQWFBLEtBQUtBLEtBQUtDLE1BQUwsR0FBYyxDQUFuQixFQUFzQixJQUF0QixFQUE0QlosUUFBNUIsQ0FBYjtBQUFBLFNBRGI7QUFFRCxPQUhEOztBQUtBO0FBQ0FhLFNBQUcseUJBQUgsRUFBOEI7QUFBQSxlQUM1Qiw2QkFBYyxFQUFFZixjQUFGLEVBQWQsRUFBMEIsRUFBRUMsUUFBRixFQUExQixFQUFtQ2UsTUFBbkMsQ0FBMENDLEVBQTFDLENBQTZDYixDQUE3QyxDQUErQyxTQUEvQyxDQUQ0QjtBQUFBLE9BQTlCOztBQUdBO0FBQ0FXLFNBQUcsNEJBQUgsRUFBaUM7QUFBQSxlQUMvQiw2QkFBYyxFQUFFZixjQUFGLEVBQWQsRUFBMEIsRUFBRUMsUUFBRixFQUExQixFQUFtQ2UsTUFBbkMsQ0FBMENFLFVBQTFDLENBQXFEQyxLQUFyRCxDQUEyRGpCLFFBQTNELENBRCtCO0FBQUEsT0FBakM7QUFFRCxLQWREOztBQWdCQTtBQUNBSixhQUFTLGdDQUFULEVBQTJDLFlBQU07QUFDL0M7QUFDQVksaUJBQVcsWUFBTTtBQUNmVixlQUFPVyxXQUFQLENBQ0dDLFNBREgsQ0FDYTtBQUFBLDZDQUFJQyxJQUFKO0FBQUlBLGdCQUFKO0FBQUE7O0FBQUEsaUJBQWFBLEtBQUtBLEtBQUtDLE1BQUwsR0FBYyxDQUFuQixFQUFzQixJQUFJTSxLQUFKLENBQVUsS0FBVixDQUF0QixFQUF3QyxJQUF4QyxDQUFiO0FBQUEsU0FEYjtBQUVELE9BSEQ7O0FBS0E7QUFDQUwsU0FBRyxhQUFILEVBQWtCO0FBQUEsZUFDaEIsNkJBQWMsRUFBRWYsY0FBRixFQUFkLEVBQTBCLEVBQUVDLFFBQUYsRUFBMUIsRUFBbUNlLE1BQW5DLENBQTBDRSxVQUExQyxDQUFxREQsRUFBckQsQ0FBd0RJLFFBRHhDO0FBQUEsT0FBbEI7QUFFRCxLQVZEOztBQVlBO0FBQ0F2QixhQUFTLHdCQUFULEVBQW1DLFlBQU07QUFDdkM7QUFDQVksaUJBQVcsWUFBTTtBQUNmVixlQUFPVyxXQUFQLENBQ0dDLFNBREgsQ0FDYSxZQUFhO0FBQUUsZ0JBQU0sSUFBSVEsS0FBSixDQUFVLEtBQVYsQ0FBTjtBQUF3QixTQURwRDtBQUVELE9BSEQ7O0FBS0E7QUFDQUwsU0FBRyxhQUFILEVBQWtCO0FBQUEsZUFDaEIsNkJBQWMsRUFBRWYsY0FBRixFQUFkLEVBQTBCLEVBQUVDLFFBQUYsRUFBMUIsRUFBbUNlLE1BQW5DLENBQTBDRSxVQUExQyxDQUFxREQsRUFBckQsQ0FBd0RJLFFBRHhDO0FBQUEsT0FBbEI7QUFFRCxLQVZEO0FBV0QsR0FoREQ7O0FBa0RBO0FBQ0F2QixXQUFTLGlDQUFULEVBQTRDLFlBQU07QUFDaEQ7QUFDQVksZUFBVyxZQUFNO0FBQ2ZWLGVBQVMseUJBQVQ7QUFDQUQsY0FBUSxDQUFDQyxPQUFPVyxXQUFSLENBQVI7QUFDQVgsYUFBT1csV0FBUCxDQUFtQlcsSUFBbkIsR0FBMEJDLFFBQTFCLENBQW1DdEIsR0FBbkM7QUFDRCxLQUpEO0FBS0E7QUFDQWMsT0FBRyx3Q0FBSCxFQUE2QyxZQUFNO0FBQ2pELG1DQUFjLEVBQUVmLGNBQUYsRUFBZCxFQUEwQixFQUFFQyxRQUFGLEVBQTFCO0FBQ0EsVUFBSWUsTUFBSixDQUFXRyxLQUFYLENBQWlCLEdBQWpCO0FBQ0QsS0FIRDtBQUlELEdBWkQ7QUFhRCxDQWpGRDtBQUpBO0FBSkEiLCJmaWxlIjoieG1sMmpzV3JhcHBlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgeG1sMmpzV3JhcHBlciBmcm9tICcuLy4uLy4uLy4uL21haW4vbGliL3dyYXBwZXJzL3htbDJqc1dyYXBwZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHsgeG1sMmpzTW9jaywgeG1sMmpzU3R1YiB9IGZyb20gJy4vLi4vLi4vbW9ja3Mvb3RoZXJzL3htbDJqcydcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5kZXNjcmliZSgnWE1MMkpTV3JhcHBlcicsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgeG1sMmpzLFxuICAgIHhtbCxcbiAgICBqc29uRGF0YVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmUoKCkgPT4ge1xuICAgIHhtbCA9ICc8eG1sPlNvbWUgeG1sIGRhdGE8L3htbD4nXG4gICAganNvbkRhdGEgPSB7YTogMSwgYjogMn1cbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gY29udmVydGluZyB4bWwgdG8ganNvbiAoMSknLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICB4bWwyanMgPSB4bWwyanNTdHViKClcbiAgICAgIG1vY2tzID0gW11cbiAgICB9KVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIHN1Y2Nlc3NmdWwnLCAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICB4bWwyanMucGFyc2VTdHJpbmdcbiAgICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0obnVsbCwganNvbkRhdGEpKVxuICAgICAgfSlcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzIH0pKHsgeG1sIH0pLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gY29ycmVjdCBqc29uJywgKCkgPT5cbiAgICAgICAgeG1sMmpzV3JhcHBlcih7IHhtbDJqcyB9KSh7IHhtbCB9KS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbChqc29uRGF0YSkpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIGNvcmUgeG1sMmpzIHJldHVybnMgZXJyb3InLCAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICB4bWwyanMucGFyc2VTdHJpbmdcbiAgICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0obmV3IEVycm9yKCdlcnInKSwgbnVsbCkpXG4gICAgICB9KVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGl0KCdzaG91bGQgZmFpbCcsICgpID0+XG4gICAgICAgIHhtbDJqc1dyYXBwZXIoeyB4bWwyanMgfSkoeyB4bWwgfSkuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWQpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIGNvcmUgeG1sMmpzIGZhaWxzJywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgeG1sMmpzLnBhcnNlU3RyaW5nXG4gICAgICAgICAgLmNhbGxzRmFrZSgoLi4uYXJncykgPT4geyB0aHJvdyBuZXcgRXJyb3IoJ2VycicpIH0pXG4gICAgICB9KVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGl0KCdzaG91bGQgZmFpbCcsICgpID0+XG4gICAgICAgIHhtbDJqc1dyYXBwZXIoeyB4bWwyanMgfSkoeyB4bWwgfSkuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWQpXG4gICAgfSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gY29udmVydGluZyB4bWwgdG8ganNvbiAoMiknLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICB4bWwyanMgPSB4bWwyanNNb2NrKClcbiAgICAgIG1vY2tzID0gW3htbDJqcy5wYXJzZVN0cmluZ11cbiAgICAgIHhtbDJqcy5wYXJzZVN0cmluZy5vbmNlKCkud2l0aEFyZ3MoeG1sKVxuICAgIH0pXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBiZSBjYWxsZWQgd2l0aCBwcm9wZXIgYXJndW1lbnRzJywgKCkgPT4ge1xuICAgICAgeG1sMmpzV3JhcHBlcih7IHhtbDJqcyB9KSh7IHhtbCB9KVxuICAgICAgJzEnLnNob3VsZC5lcXVhbCgnMScpXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=