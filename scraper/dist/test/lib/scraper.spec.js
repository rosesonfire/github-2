'use strict';

var _setup = require('./../setup');

var _setup2 = _interopRequireDefault(_setup);

var _scraper = require('./../../main/lib/scraper');

var _scraper2 = _interopRequireDefault(_scraper);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

var _redisODM = require('./../mocks/lib/odm/redisODM');

var _redisODM2 = _interopRequireDefault(_redisODM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-undef

// mocks
// eslint-disable-next-line no-unused-vars
describe('Scrapper', function () {
  var mocks = void 0,
      baseUrlGetter = void 0,
      dataFetcher = void 0,
      xmlToJsonConverter = void 0,
      redisODM = void 0,
      redisModelObject = void 0,
      url = void 0,
      baseUrl = void 0,
      fetchedData = void 0,
      singleJsonData = void 0,
      multipleJsonData = void 0,
      singlePassedData = void 0,
      positiveReply = void 0;

  // eslint-disable-next-line no-undef
  before(function () {
    url = 'https://github.com/timeline';
    baseUrl = 'https://github.com/';
    fetchedData = { data: '<xml>some data</xml>', otherField: 'otherField' };
    singleJsonData = {
      feed: {
        entry: [{
          id: ['tag:github.com,2008:IssueCommentEvent/7319278825'],
          author: [{
            name: ['ansibot'],
            uri: ['https://github.com/ansibot']
          }],
          updated: ['2018-03-01T23:58:35Z'],
          otherFields: [{
            otherField1: ['otherField1'],
            otherField2: ['otherField2']
          }]
        }]
      }
    };
    multipleJsonData = {
      feed: {
        entry: [{
          id: ['tag:github.com,2008:IssueCommentEvent/7319278825'],
          author: [{
            name: ['ansibot'],
            uri: ['https://github.com/ansibot']
          }],
          updated: ['2018-03-01T23:58:35Z'],
          otherFields: [{
            otherField1: ['otherField1'],
            otherField2: ['otherField2']
          }]
        }, {
          id: ['tag:github.com,2008:AnotherEvent/7319278826'],
          author: [{
            name: ['anotherAuthor'],
            uri: ['https://github.com/anotherAuthor']
          }],
          updated: ['2015-23-02T21:18:25Z'],
          otherFields: [{
            otherField1: ['otherField2'],
            otherField2: ['otherField3']
          }]
        }]
      }
    };
    singlePassedData = {
      key: 'ansibot',
      data: {
        event: 'IssueCommentEvent',
        author: {
          name: 'ansibot',
          uri: 'ansibot'
        },
        updateTime: new Date(Date.parse('2018-03-01T23:58:35Z'))
      }
    };
    positiveReply = 'OK';
  });

  // eslint-disable-next-line no-undef
  beforeEach(function () {
    baseUrlGetter = (0, _plainOldMockObject2.default)();
    dataFetcher = (0, _plainOldMockObject2.default)();
    xmlToJsonConverter = (0, _plainOldMockObject2.default)();
    redisODM = (0, _redisODM2.default)();
    redisModelObject = (0, _redisODM.redisModelObjectMock)();
    mocks = [baseUrlGetter, dataFetcher, xmlToJsonConverter, redisODM.create, redisModelObject.save];
    baseUrlGetter.once().withExactArgs({ url: url }).resolves(baseUrl);
    dataFetcher.once().withExactArgs({ url: url }).resolves(fetchedData);
    xmlToJsonConverter.once().withExactArgs({ xml: fetchedData.data });
  });

  // eslint-disable-next-line no-undef
  afterEach(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When calling scrapper', function () {
    // eslint-disable-next-line no-undef
    describe('When fetching single data', function () {
      // eslint-disable-next-line no-undef
      beforeEach(function () {
        xmlToJsonConverter.resolves(singleJsonData);
        redisODM.create.once().withExactArgs(singlePassedData).returns(redisModelObject);
        redisModelObject.save.once().withExactArgs().resolves(positiveReply);
      });

      // eslint-disable-next-line no-undef
      it('should return a promise', function () {
        return (0, _scraper2.default)({ url: url, baseUrlGetter: baseUrlGetter, dataFetcher: dataFetcher, xmlToJsonConverter: xmlToJsonConverter, odm: redisODM })().should.be.a('promise');
      });

      // eslint-disable-next-line no-undef
      it('should persist single data', function () {
        return (0, _scraper2.default)({ url: url, baseUrlGetter: baseUrlGetter, dataFetcher: dataFetcher, xmlToJsonConverter: xmlToJsonConverter, odm: redisODM })().should.eventually.equalTo([positiveReply]);
      });
    });

    // eslint-disable-next-line no-undef
    describe('When fetching multiple data', function () {
      // eslint-disable-next-line no-undef
      beforeEach(function () {
        xmlToJsonConverter.resolves(multipleJsonData);
        redisODM.create.exactly(multipleJsonData.feed.entry.length).returns(redisModelObject);
        redisModelObject.save.exactly(multipleJsonData.feed.entry.length).resolves(positiveReply);
      });

      // eslint-disable-next-line no-undef
      it('should persist mutiple data', function () {
        return (0, _scraper2.default)({ url: url, baseUrlGetter: baseUrlGetter, dataFetcher: dataFetcher, xmlToJsonConverter: xmlToJsonConverter, odm: redisODM })().should.eventually.equalTo(multipleJsonData.feed.entry.map(function (en) {
          return positiveReply;
        }));
      });
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9zY3JhcGVyLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJtb2NrcyIsImJhc2VVcmxHZXR0ZXIiLCJkYXRhRmV0Y2hlciIsInhtbFRvSnNvbkNvbnZlcnRlciIsInJlZGlzT0RNIiwicmVkaXNNb2RlbE9iamVjdCIsInVybCIsImJhc2VVcmwiLCJmZXRjaGVkRGF0YSIsInNpbmdsZUpzb25EYXRhIiwibXVsdGlwbGVKc29uRGF0YSIsInNpbmdsZVBhc3NlZERhdGEiLCJwb3NpdGl2ZVJlcGx5IiwiYmVmb3JlIiwiZGF0YSIsIm90aGVyRmllbGQiLCJmZWVkIiwiZW50cnkiLCJpZCIsImF1dGhvciIsIm5hbWUiLCJ1cmkiLCJ1cGRhdGVkIiwib3RoZXJGaWVsZHMiLCJvdGhlckZpZWxkMSIsIm90aGVyRmllbGQyIiwia2V5IiwiZXZlbnQiLCJ1cGRhdGVUaW1lIiwiRGF0ZSIsInBhcnNlIiwiYmVmb3JlRWFjaCIsImNyZWF0ZSIsInNhdmUiLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJlc29sdmVzIiwieG1sIiwiYWZ0ZXJFYWNoIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJyZXR1cm5zIiwiaXQiLCJvZG0iLCJzaG91bGQiLCJiZSIsImEiLCJldmVudHVhbGx5IiwiZXF1YWxUbyIsImV4YWN0bHkiLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBOztBQUpBO0FBSkE7QUFTQUEsU0FBUyxVQUFULEVBQXFCLFlBQU07QUFDekIsTUFDRUMsY0FERjtBQUFBLE1BRUVDLHNCQUZGO0FBQUEsTUFHRUMsb0JBSEY7QUFBQSxNQUlFQywyQkFKRjtBQUFBLE1BS0VDLGlCQUxGO0FBQUEsTUFNRUMseUJBTkY7QUFBQSxNQU9FQyxZQVBGO0FBQUEsTUFRRUMsZ0JBUkY7QUFBQSxNQVNFQyxvQkFURjtBQUFBLE1BVUVDLHVCQVZGO0FBQUEs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MUQsRUFDR2YsUUFESCxDQUNZeEIsYUFEWjtBQUVELE9BTkQ7O0FBUUE7QUFDQStCLFNBQUcsNkJBQUgsRUFBa0M7QUFBQSxlQUNoQyx1QkFDRSxFQUFFckMsUUFBRixFQUFPTCw0QkFBUCxFQUFzQkMsd0JBQXRCLEVBQW1DQyxzQ0FBbkMsRUFBdUR5QyxLQUFLeEMsUUFBNUQsRUFERixJQUVJeUMsTUFGSixDQUVXRyxVQUZYLENBR0dDLE9BSEgsQ0FHV3ZDLGlCQUFpQk0sSUFBakIsQ0FBc0JDLEtBQXRCLENBQTRCbUMsR0FBNUIsQ0FBZ0M7QUFBQSxpQkFBTXhDLGFBQU47QUFBQSxTQUFoQyxDQUhYLENBRGdDO0FBQUEsT0FBbEM7QUFLRCxLQWhCRDtBQWlCRCxHQTFDRDtBQTJDRCxDQWhKRDtBQVBBIiwiZmlsZSI6InNjcmFwZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGV4cGVjdCBmcm9tICcuLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHNjcmFwZXIgZnJvbSAnLi8uLi8uLi9tYWluL2xpYi9zY3JhcGVyJ1xuLy8gbW9ja3NcbmltcG9ydCBwbGFpbk9sZE1vY2tPYmplY3QgZnJvbSAnLi8uLi9tb2Nrcy9vdGhlcnMvcGxhaW5PbGRNb2NrT2JqZWN0J1xuaW1wb3J0IHJlZGlzT0RNTW9jaywgeyByZWRpc01vZGVsT2JqZWN0TW9jayB9IGZyb20gJy4vLi4vbW9ja3MvbGliL29kbS9yZWRpc09ETSdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5kZXNjcmliZSgnU2NyYXBwZXInLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIGJhc2VVcmxHZXR0ZXIsXG4gICAgZGF0YUZldGNoZXIsXG4gICAgeG1sVG9Kc29uQ29udmVydGVyLFxuICAgIHJlZGlzT0RNLFxuICAgIHJlZGlzTW9kZWxPYmplY3QsXG4gICAgdXJsLFxuICAgIGJhc2VVcmwsXG4gICAgZmV0Y2hlZERhdGEsXG4gICAgc2luZ2xlSnNvbkRhdGEsXG4gICAgbXVsdGlwbGVKc29uRGF0YSxcbiAgICBzaW5nbGVQYXNzZWREYXRhLFxuICAgIHBvc2l0aXZlUmVwbHlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICB1cmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWVsaW5lJ1xuICAgIGJhc2VVcmwgPSAnaHR0cHM6Ly9naXRodWIuY29tLydcbiAgICBmZXRjaGVkRGF0YSA9IHsgZGF0YTogJzx4bWw+c29tZSBkYXRhPC94bWw+Jywgb3RoZXJGaWVsZDogJ290aGVyRmllbGQnIH1cbiAgICBzaW5nbGVKc29uRGF0YSA9IHtcbiAgICAgIGZlZWQ6IHtcbiAgICAgICAgZW50cnk6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogWyd0YWc6Z2l0aHViLmNvbSwyMDA4Oklzc3VlQ29tbWVudEV2ZW50LzczMTkyNzg4MjUnXSxcbiAgICAgICAgICAgIGF1dGhvcjogW3tcbiAgICAgICAgICAgICAgbmFtZTogWydhbnNpYm90J10sXG4gICAgICAgICAgICAgIHVyaTogWydodHRwczovL2dpdGh1Yi5jb20vYW5zaWJvdCddXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IFsnMjAxOC0wMy0wMVQyMzo1ODozNVonXSxcbiAgICAgICAgICAgIG90aGVyRmllbGRzOiBbe1xuICAgICAgICAgICAgICBvdGhlckZpZWxkMTogWydvdGhlckZpZWxkMSddLFxuICAgICAgICAgICAgICBvdGhlckZpZWxkMjogWydvdGhlckZpZWxkMiddXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgICBtdWx0aXBsZUpzb25EYXRhID0ge1xuICAgICAgZmVlZDoge1xuICAgICAgICBlbnRyeTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBbJ3RhZzpnaXRodWIuY29tLDIwMDg6SXNzdWVDb21tZW50RXZlbnQvNzMxOTI3ODgyNSddLFxuICAgICAgICAgICAgYXV0aG9yOiBbe1xuICAgICAgICAgICAgICBuYW1lOiBbJ2Fuc2lib3QnXSxcbiAgICAgICAgICAgICAgdXJpOiBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbnNpYm90J11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdXBkYXRlZDogWycyMDE4LTAzLTAxVDIzOjU4OjM1WiddLFxuICAgICAgICAgICAgb3RoZXJGaWVsZHM6IFt7XG4gICAgICAgICAgICAgIG90aGVyRmllbGQxOiBbJ290aGVyRmllbGQxJ10sXG4gICAgICAgICAgICAgIG90aGVyRmllbGQyOiBbJ290aGVyRmllbGQyJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogWyd0YWc6Z2l0aHViLmNvbSwyMDA4OkFub3RoZXJFdmVudC83MzE5Mjc4ODI2J10sXG4gICAgICAgICAgICBhdXRob3I6IFt7XG4gICAgICAgICAgICAgIG5hbWU6IFsnYW5vdGhlckF1dGhvciddLFxuICAgICAgICAgICAgICB1cmk6IFsnaHR0cHM6Ly9naXRodWIuY29tL2Fub3RoZXJBdXRob3InXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB1cGRhdGVkOiBbJzIwMTUtMjMtMDJUMjE6MTg6MjVaJ10sXG4gICAgICAgICAgICBvdGhlckZpZWxkczogW3tcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDE6IFsnb3RoZXJGaWVsZDInXSxcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDI6IFsnb3RoZXJGaWVsZDMnXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gICAgc2luZ2xlUGFzc2VkRGF0YSA9IHtcbiAgICAgIGtleTogJ2Fuc2lib3QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBldmVudDogJ0lzc3VlQ29tbWVudEV2ZW50JyxcbiAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgbmFtZTogJ2Fuc2lib3QnLFxuICAgICAgICAgIHVyaTogJ2Fuc2lib3QnXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVRpbWU6IG5ldyBEYXRlKERhdGUucGFyc2UoJzIwMTgtMDMtMDFUMjM6NTg6MzVaJykpXG4gICAgICB9XG4gICAgfVxuICAgIHBvc2l0aXZlUmVwbHkgPSAnT0snXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGJhc2VVcmxHZXR0ZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIGRhdGFGZXRjaGVyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICB4bWxUb0pzb25Db252ZXJ0ZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIHJlZGlzT0RNID0gcmVkaXNPRE1Nb2NrKClcbiAgICByZWRpc01vZGVsT2JqZWN0ID0gcmVkaXNNb2RlbE9iamVjdE1vY2soKVxuICAgIG1vY2tzID0gWyBiYXNlVXJsR2V0dGVyLCBkYXRhRmV0Y2hlciwgeG1sVG9Kc29uQ29udmVydGVyLCByZWRpc09ETS5jcmVhdGUsXG4gICAgICByZWRpc01vZGVsT2JqZWN0LnNhdmUgXVxuICAgIGJhc2VVcmxHZXR0ZXIub25jZSgpLndpdGhFeGFjdEFyZ3MoeyB1cmwgfSkucmVzb2x2ZXMoYmFzZVVybClcbiAgICBkYXRhRmV0Y2hlci5vbmNlKCkud2l0aEV4YWN0QXJncyh7IHVybCB9KS5yZXNvbHZlcyhmZXRjaGVkRGF0YSlcbiAgICB4bWxUb0pzb25Db252ZXJ0ZXIub25jZSgpLndpdGhFeGFjdEFyZ3MoeyB4bWw6IGZldGNoZWREYXRhLmRhdGEgfSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gY2FsbGluZyBzY3JhcHBlcicsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBzaW5nbGUgZGF0YScsICgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHhtbFRvSnNvbkNvbnZlcnRlci5yZXNvbHZlcyhzaW5nbGVKc29uRGF0YSlcbiAgICAgICAgcmVkaXNPRE0uY3JlYXRlLm9uY2UoKS53aXRoRXhhY3RBcmdzKHNpbmdsZVBhc3NlZERhdGEpXG4gICAgICAgICAgLnJldHVybnMocmVkaXNNb2RlbE9iamVjdClcbiAgICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlLm9uY2UoKS53aXRoRXhhY3RBcmdzKCkucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgKCkgPT5cbiAgICAgICAgc2NyYXBlcihcbiAgICAgICAgICB7IHVybCwgYmFzZVVybEdldHRlciwgZGF0YUZldGNoZXIsIHhtbFRvSnNvbkNvbnZlcnRlciwgb2RtOiByZWRpc09ETSB9XG4gICAgICAgICkoKS5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGl0KCdzaG91bGQgcGVyc2lzdCBzaW5nbGUgZGF0YScsICgpID0+XG4gICAgICAgIHNjcmFwZXIoXG4gICAgICAgICAgeyB1cmwsIGJhc2VVcmxHZXR0ZXIsIGRhdGFGZXRjaGVyLCB4bWxUb0pzb25Db252ZXJ0ZXIsIG9kbTogcmVkaXNPRE0gfVxuICAgICAgICApKCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWxUbyhbcG9zaXRpdmVSZXBseV0pKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBtdWx0aXBsZSBkYXRhJywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgeG1sVG9Kc29uQ29udmVydGVyLnJlc29sdmVzKG11bHRpcGxlSnNvbkRhdGEpXG4gICAgICAgIHJlZGlzT0RNLmNyZWF0ZS5leGFjdGx5KG11bHRpcGxlSnNvbkRhdGEuZmVlZC5lbnRyeS5sZW5ndGgpXG4gICAgICAgICAgLnJldHVybnMocmVkaXNNb2RlbE9iamVjdClcbiAgICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlLmV4YWN0bHkobXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lmxlbmd0aClcbiAgICAgICAgICAucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IG11dGlwbGUgZGF0YScsICgpID0+XG4gICAgICAgIHNjcmFwZXIoXG4gICAgICAgICAgeyB1cmwsIGJhc2VVcmxHZXR0ZXIsIGRhdGFGZXRjaGVyLCB4bWxUb0pzb25Db252ZXJ0ZXIsIG9kbTogcmVkaXNPRE0gfVxuICAgICAgICApKCkuc2hvdWxkLmV2ZW50dWFsbHlcbiAgICAgICAgICAuZXF1YWxUbyhtdWx0aXBsZUpzb25EYXRhLmZlZWQuZW50cnkubWFwKGVuID0+IHBvc2l0aXZlUmVwbHkpKSlcbiAgICB9KVxuICB9KVxufSlcbiJdfQ==