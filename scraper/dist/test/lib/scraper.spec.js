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
        return (0, _scraper2.default)({ url: url, baseUrlGetter: baseUrlGetter, dataFetcher: dataFetcher, xmlToJsonConverter: xmlToJsonConverter, odm: redisODM }).should.be.a('promise');
      });

      // eslint-disable-next-line no-undef
      it('should persist single data', function () {
        return (0, _scraper2.default)({ url: url, baseUrlGetter: baseUrlGetter, dataFetcher: dataFetcher, xmlToJsonConverter: xmlToJsonConverter, odm: redisODM }).should.eventually.equalTo([positiveReply]);
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
        return (0, _scraper2.default)({ url: url, baseUrlGetter: baseUrlGetter, dataFetcher: dataFetcher, xmlToJsonConverter: xmlToJsonConverter, odm: redisODM }).should.eventually.equalTo(multipleJsonData.feed.entry.map(function (en) {
          return positiveReply;
        }));
      });
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9zY3JhcGVyLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJtb2NrcyIsImJhc2VVcmxHZXR0ZXIiLCJkYXRhRmV0Y2hlciIsInhtbFRvSnNvbkNvbnZlcnRlciIsInJlZGlzT0RNIiwicmVkaXNNb2RlbE9iamVjdCIsInVybCIsImJhc2VVcmwiLCJmZXRjaGVkRGF0YSIsInNpbmdsZUpzb25EYXRhIiwibXVsdGlwbGVKc29uRGF0YSIsInNpbmdsZVBhc3NlZERhdGEiLCJwb3NpdGl2ZVJlcGx5IiwiYmVmb3JlIiwiZGF0YSIsIm90aGVyRmllbGQiLCJmZWVkIiwiZW50cnkiLCJpZCIsImF1dGhvciIsIm5hbWUiLCJ1cmkiLCJ1cGRhdGVkIiwib3RoZXJGaWVsZHMiLCJvdGhlckZpZWxkMSIsIm90aGVyRmllbGQyIiwia2V5IiwiZXZlbnQiLCJ1cGRhdGVUaW1lIiwiRGF0ZSIsInBhcnNlIiwiYmVmb3JlRWFjaCIsImNyZWF0ZSIsInNhdmUiLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJlc29sdmVzIiwieG1sIiwiYWZ0ZXJFYWNoIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJyZXR1cm5zIiwiaXQiLCJvZG0iLCJzaG91bGQiLCJiZSIsImEiLCJldmVudHVhbGx5IiwiZXF1YWxUbyIsImV4YWN0bHkiLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBOztBQUpBO0FBSkE7QUFTQUEsU0FBUyxVQUFULEVBQXFCLFlBQU07QUFDekIsTUFDRUMsY0FERjtBQUFBLE1BRUVDLHNCQUZGO0FBQUEsTUFHRUMsb0JBSEY7QUFBQSxNQUlFQywyQkFKRjtBQUFBLE1BS0VDLGlCQUxGO0FBQUEsTUFNRUMseUJBTkY7QUFBQSxNQU9FQyxZQVBGO0FBQUEsTUFRRUMsZ0JBUkY7QUFBQSxNQVNFQyxvQkFURjtBQUFBLE1BVUVDLHVCQVZGO0FBQUEs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LEVBQ0dmLFFBREgsQ0FDWXhCLGFBRFo7QUFFRCxPQU5EOztBQVFBO0FBQ0ErQixTQUFHLDZCQUFILEVBQWtDO0FBQUEsZUFDaEMsdUJBQ0UsRUFBRXJDLFFBQUYsRUFBT0wsNEJBQVAsRUFBc0JDLHdCQUF0QixFQUFtQ0Msc0NBQW5DLEVBQXVEeUMsS0FBS3hDLFFBQTVELEVBREYsRUFFRXlDLE1BRkYsQ0FFU0csVUFGVCxDQUdHQyxPQUhILENBR1d2QyxpQkFBaUJNLElBQWpCLENBQXNCQyxLQUF0QixDQUE0Qm1DLEdBQTVCLENBQWdDO0FBQUEsaUJBQU14QyxhQUFOO0FBQUEsU0FBaEMsQ0FIWCxDQURnQztBQUFBLE9BQWxDO0FBS0QsS0FoQkQ7QUFpQkQsR0ExQ0Q7QUEyQ0QsQ0FoSkQ7QUFQQSIsImZpbGUiOiJzY3JhcGVyLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBleHBlY3QgZnJvbSAnLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCBzY3JhcGVyIGZyb20gJy4vLi4vLi4vbWFpbi9saWIvc2NyYXBlcidcbi8vIG1vY2tzXG5pbXBvcnQgcGxhaW5PbGRNb2NrT2JqZWN0IGZyb20gJy4vLi4vbW9ja3Mvb3RoZXJzL3BsYWluT2xkTW9ja09iamVjdCdcbmltcG9ydCByZWRpc09ETU1vY2ssIHsgcmVkaXNNb2RlbE9iamVjdE1vY2sgfSBmcm9tICcuLy4uL21vY2tzL2xpYi9vZG0vcmVkaXNPRE0nXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuZGVzY3JpYmUoJ1NjcmFwcGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICBiYXNlVXJsR2V0dGVyLFxuICAgIGRhdGFGZXRjaGVyLFxuICAgIHhtbFRvSnNvbkNvbnZlcnRlcixcbiAgICByZWRpc09ETSxcbiAgICByZWRpc01vZGVsT2JqZWN0LFxuICAgIHVybCxcbiAgICBiYXNlVXJsLFxuICAgIGZldGNoZWREYXRhLFxuICAgIHNpbmdsZUpzb25EYXRhLFxuICAgIG11bHRpcGxlSnNvbkRhdGEsXG4gICAgc2luZ2xlUGFzc2VkRGF0YSxcbiAgICBwb3NpdGl2ZVJlcGx5XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lbGluZSdcbiAgICBiYXNlVXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nXG4gICAgZmV0Y2hlZERhdGEgPSB7IGRhdGE6ICc8eG1sPnNvbWUgZGF0YTwveG1sPicsIG90aGVyRmllbGQ6ICdvdGhlckZpZWxkJyB9XG4gICAgc2luZ2xlSnNvbkRhdGEgPSB7XG4gICAgICBmZWVkOiB7XG4gICAgICAgIGVudHJ5OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpJc3N1ZUNvbW1lbnRFdmVudC83MzE5Mjc4ODI1J10sXG4gICAgICAgICAgICBhdXRob3I6IFt7XG4gICAgICAgICAgICAgIG5hbWU6IFsnYW5zaWJvdCddLFxuICAgICAgICAgICAgICB1cmk6IFsnaHR0cHM6Ly9naXRodWIuY29tL2Fuc2lib3QnXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB1cGRhdGVkOiBbJzIwMTgtMDMtMDFUMjM6NTg6MzVaJ10sXG4gICAgICAgICAgICBvdGhlckZpZWxkczogW3tcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDE6IFsnb3RoZXJGaWVsZDEnXSxcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDI6IFsnb3RoZXJGaWVsZDInXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gICAgbXVsdGlwbGVKc29uRGF0YSA9IHtcbiAgICAgIGZlZWQ6IHtcbiAgICAgICAgZW50cnk6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogWyd0YWc6Z2l0aHViLmNvbSwyMDA4Oklzc3VlQ29tbWVudEV2ZW50LzczMTkyNzg4MjUnXSxcbiAgICAgICAgICAgIGF1dGhvcjogW3tcbiAgICAgICAgICAgICAgbmFtZTogWydhbnNpYm90J10sXG4gICAgICAgICAgICAgIHVyaTogWydodHRwczovL2dpdGh1Yi5jb20vYW5zaWJvdCddXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IFsnMjAxOC0wMy0wMVQyMzo1ODozNVonXSxcbiAgICAgICAgICAgIG90aGVyRmllbGRzOiBbe1xuICAgICAgICAgICAgICBvdGhlckZpZWxkMTogWydvdGhlckZpZWxkMSddLFxuICAgICAgICAgICAgICBvdGhlckZpZWxkMjogWydvdGhlckZpZWxkMiddXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpBbm90aGVyRXZlbnQvNzMxOTI3ODgyNiddLFxuICAgICAgICAgICAgYXV0aG9yOiBbe1xuICAgICAgICAgICAgICBuYW1lOiBbJ2Fub3RoZXJBdXRob3InXSxcbiAgICAgICAgICAgICAgdXJpOiBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbm90aGVyQXV0aG9yJ11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdXBkYXRlZDogWycyMDE1LTIzLTAyVDIxOjE4OjI1WiddLFxuICAgICAgICAgICAgb3RoZXJGaWVsZHM6IFt7XG4gICAgICAgICAgICAgIG90aGVyRmllbGQxOiBbJ290aGVyRmllbGQyJ10sXG4gICAgICAgICAgICAgIG90aGVyRmllbGQyOiBbJ290aGVyRmllbGQzJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIHNpbmdsZVBhc3NlZERhdGEgPSB7XG4gICAgICBrZXk6ICdhbnNpYm90JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZXZlbnQ6ICdJc3N1ZUNvbW1lbnRFdmVudCcsXG4gICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgIG5hbWU6ICdhbnNpYm90JyxcbiAgICAgICAgICB1cmk6ICdhbnNpYm90J1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVUaW1lOiBuZXcgRGF0ZShEYXRlLnBhcnNlKCcyMDE4LTAzLTAxVDIzOjU4OjM1WicpKVxuICAgICAgfVxuICAgIH1cbiAgICBwb3NpdGl2ZVJlcGx5ID0gJ09LJ1xuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBiYXNlVXJsR2V0dGVyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICBkYXRhRmV0Y2hlciA9IHBsYWluT2xkTW9ja09iamVjdCgpXG4gICAgeG1sVG9Kc29uQ29udmVydGVyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICByZWRpc09ETSA9IHJlZGlzT0RNTW9jaygpXG4gICAgcmVkaXNNb2RlbE9iamVjdCA9IHJlZGlzTW9kZWxPYmplY3RNb2NrKClcbiAgICBtb2NrcyA9IFsgYmFzZVVybEdldHRlciwgZGF0YUZldGNoZXIsIHhtbFRvSnNvbkNvbnZlcnRlciwgcmVkaXNPRE0uY3JlYXRlLFxuICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlIF1cbiAgICBiYXNlVXJsR2V0dGVyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgdXJsIH0pLnJlc29sdmVzKGJhc2VVcmwpXG4gICAgZGF0YUZldGNoZXIub25jZSgpLndpdGhFeGFjdEFyZ3MoeyB1cmwgfSkucmVzb2x2ZXMoZmV0Y2hlZERhdGEpXG4gICAgeG1sVG9Kc29uQ29udmVydGVyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgeG1sOiBmZXRjaGVkRGF0YS5kYXRhIH0pXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGNhbGxpbmcgc2NyYXBwZXInLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgZGVzY3JpYmUoJ1doZW4gZmV0Y2hpbmcgc2luZ2xlIGRhdGEnLCAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICB4bWxUb0pzb25Db252ZXJ0ZXIucmVzb2x2ZXMoc2luZ2xlSnNvbkRhdGEpXG4gICAgICAgIHJlZGlzT0RNLmNyZWF0ZS5vbmNlKCkud2l0aEV4YWN0QXJncyhzaW5nbGVQYXNzZWREYXRhKVxuICAgICAgICAgIC5yZXR1cm5zKHJlZGlzTW9kZWxPYmplY3QpXG4gICAgICAgIHJlZGlzTW9kZWxPYmplY3Quc2F2ZS5vbmNlKCkud2l0aEV4YWN0QXJncygpLnJlc29sdmVzKHBvc2l0aXZlUmVwbHkpXG4gICAgICB9KVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICAgIHNjcmFwZXIoXG4gICAgICAgICAgeyB1cmwsIGJhc2VVcmxHZXR0ZXIsIGRhdGFGZXRjaGVyLCB4bWxUb0pzb25Db252ZXJ0ZXIsIG9kbTogcmVkaXNPRE0gfVxuICAgICAgICApLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IHNpbmdsZSBkYXRhJywgKCkgPT5cbiAgICAgICAgc2NyYXBlcihcbiAgICAgICAgICB7IHVybCwgYmFzZVVybEdldHRlciwgZGF0YUZldGNoZXIsIHhtbFRvSnNvbkNvbnZlcnRlciwgb2RtOiByZWRpc09ETSB9XG4gICAgICAgICkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWxUbyhbcG9zaXRpdmVSZXBseV0pKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBtdWx0aXBsZSBkYXRhJywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgeG1sVG9Kc29uQ29udmVydGVyLnJlc29sdmVzKG11bHRpcGxlSnNvbkRhdGEpXG4gICAgICAgIHJlZGlzT0RNLmNyZWF0ZS5leGFjdGx5KG11bHRpcGxlSnNvbkRhdGEuZmVlZC5lbnRyeS5sZW5ndGgpXG4gICAgICAgICAgLnJldHVybnMocmVkaXNNb2RlbE9iamVjdClcbiAgICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlLmV4YWN0bHkobXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lmxlbmd0aClcbiAgICAgICAgICAucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IG11dGlwbGUgZGF0YScsICgpID0+XG4gICAgICAgIHNjcmFwZXIoXG4gICAgICAgICAgeyB1cmwsIGJhc2VVcmxHZXR0ZXIsIGRhdGFGZXRjaGVyLCB4bWxUb0pzb25Db252ZXJ0ZXIsIG9kbTogcmVkaXNPRE0gfVxuICAgICAgICApLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgICAgLmVxdWFsVG8obXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lm1hcChlbiA9PiBwb3NpdGl2ZVJlcGx5KSkpXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=