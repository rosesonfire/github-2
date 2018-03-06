'use strict';

var _setup = require('./../setup');

var _setup2 = _interopRequireDefault(_setup);

var _scrape = require('./../../main/services/scrape');

var _scrape2 = _interopRequireDefault(_scrape);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

var _redisODM = require('./../mocks/lib/odm/redisODM');

var _redisODM2 = _interopRequireDefault(_redisODM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-undef

// mocks
// eslint-disable-next-line no-unused-vars
describe('Scrape', function () {
  var mocks = void 0,
      getBaseUrl = void 0,
      fetchData = void 0,
      convertXMLToJSON = void 0,
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
    getBaseUrl = (0, _plainOldMockObject2.default)();
    fetchData = (0, _plainOldMockObject2.default)();
    convertXMLToJSON = (0, _plainOldMockObject2.default)();
    redisODM = (0, _redisODM2.default)();
    redisModelObject = (0, _redisODM.redisModelObjectMock)();
    mocks = [getBaseUrl, fetchData, convertXMLToJSON, redisODM.create, redisModelObject.save];
    getBaseUrl.once().withExactArgs({ url: url }).resolves(baseUrl);
    fetchData.once().withExactArgs({ url: url }).resolves(fetchedData);
    convertXMLToJSON.once().withExactArgs({ xml: fetchedData.data });
  });

  // eslint-disable-next-line no-undef
  afterEach(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When scraping', function () {
    // eslint-disable-next-line no-undef
    describe('When fetching single data', function () {
      // eslint-disable-next-line no-undef
      beforeEach(function () {
        convertXMLToJSON.resolves(singleJsonData);
        redisODM.create.once().withExactArgs(singlePassedData).returns(redisModelObject);
        redisModelObject.save.once().withExactArgs().resolves(positiveReply);
      });

      // eslint-disable-next-line no-undef
      it('should return a promise', function () {
        return (0, _scrape2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, convertXMLToJSON: convertXMLToJSON, odm: redisODM })().should.be.a('promise');
      });

      // eslint-disable-next-line no-undef
      it('should persist single data', function () {
        return (0, _scrape2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, convertXMLToJSON: convertXMLToJSON, odm: redisODM })().should.eventually.equalTo([positiveReply]);
      });
    });

    // eslint-disable-next-line no-undef
    describe('When fetching multiple data', function () {
      // eslint-disable-next-line no-undef
      beforeEach(function () {
        convertXMLToJSON.resolves(multipleJsonData);
        redisODM.create.exactly(multipleJsonData.feed.entry.length).returns(redisModelObject);
        redisModelObject.save.exactly(multipleJsonData.feed.entry.length).resolves(positiveReply);
      });

      // eslint-disable-next-line no-undef
      it('should persist mutiple data', function () {
        return (0, _scrape2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, convertXMLToJSON: convertXMLToJSON, odm: redisODM })().should.eventually.equalTo(multipleJsonData.feed.entry.map(function (en) {
          return positiveReply;
        }));
      });
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL3NjcmFwZS5zcGVjLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwibW9ja3MiLCJnZXRCYXNlVXJsIiwiZmV0Y2hEYXRhIiwiY29udmVydFhNTFRvSlNPTiIsInJlZGlzT0RNIiwicmVkaXNNb2RlbE9iamVjdCIsInVybCIsImJhc2VVcmwiLCJmZXRjaGVkRGF0YSIsInNpbmdsZUpzb25EYXRhIiwibXVsdGlwbGVKc29uRGF0YSIsInNpbmdsZVBhc3NlZERhdGEiLCJwb3NpdGl2ZVJlcGx5IiwiYmVmb3JlIiwiZGF0YSIsIm90aGVyRmllbGQiLCJmZWVkIiwiZW50cnkiLCJpZCIsImF1dGhvciIsIm5hbWUiLCJ1cmkiLCJ1cGRhdGVkIiwib3RoZXJGaWVsZHMiLCJvdGhlckZpZWxkMSIsIm90aGVyRmllbGQyIiwia2V5IiwiZXZlbnQiLCJ1cGRhdGVUaW1lIiwiRGF0ZSIsInBhcnNlIiwiYmVmb3JlRWFjaCIsImNyZWF0ZSIsInNhdmUiLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJlc29sdmVzIiwieG1sIiwiYWZ0ZXJFYWNoIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJyZXR1cm5zIiwiaXQiLCJvZG0iLCJzaG91bGQiLCJiZSIsImEiLCJldmVudHVhbGx5IiwiZXF1YWxUbyIsImV4YWN0bHkiLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBOztBQUpBO0FBSkE7QUFTQUEsU0FBUyxRQUFULEVBQW1CLFlBQU07QUFDdkIsTUFDRUMsY0FERjtBQUFBLE1BRUVDLG1CQUZGO0FBQUEsTUFHRUMsa0JBSEY7QUFBQSxNQUlFQyx5QkFKRjtBQUFBLE1BS0VDLGlCQUxGO0FBQUEsTUFNRUMseUJBTkY7QUFBQSxNQU9FQyxZQVBGO0FBQUEsTUFRRUMsZ0JBUkY7QUFBQSxNQVNFQyxvQkFURjtBQUFBLE1BVUVDLHVCQVZGO0FBQUEsTUFX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QURILENBQ1l4QixhQURaO0FBRUQsT0FORDs7QUFRQTtBQUNBK0IsU0FBRyw2QkFBSCxFQUFrQztBQUFBLGVBQ2hDLHNCQUNFLEVBQUVyQyxRQUFGLEVBQU9MLHNCQUFQLEVBQW1CQyxvQkFBbkIsRUFBOEJDLGtDQUE5QixFQUFnRHlDLEtBQUt4QyxRQUFyRCxFQURGLElBRUl5QyxNQUZKLENBRVdHLFVBRlgsQ0FHR0MsT0FISCxDQUdXdkMsaUJBQWlCTSxJQUFqQixDQUFzQkMsS0FBdEIsQ0FBNEJtQyxHQUE1QixDQUFnQztBQUFBLGlCQUFNeEMsYUFBTjtBQUFBLFNBQWhDLENBSFgsQ0FEZ0M7QUFBQSxPQUFsQztBQUtELEtBaEJEO0FBaUJELEdBMUNEO0FBMkNELENBaEpEO0FBUEEiLCJmaWxlIjoic2NyYXBlLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBleHBlY3QgZnJvbSAnLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCBzY3JhcGUgZnJvbSAnLi8uLi8uLi9tYWluL3NlcnZpY2VzL3NjcmFwZSdcbi8vIG1vY2tzXG5pbXBvcnQgcGxhaW5PbGRNb2NrT2JqZWN0IGZyb20gJy4vLi4vbW9ja3Mvb3RoZXJzL3BsYWluT2xkTW9ja09iamVjdCdcbmltcG9ydCByZWRpc09ETU1vY2ssIHsgcmVkaXNNb2RlbE9iamVjdE1vY2sgfSBmcm9tICcuLy4uL21vY2tzL2xpYi9vZG0vcmVkaXNPRE0nXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuZGVzY3JpYmUoJ1NjcmFwZScsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgZ2V0QmFzZVVybCxcbiAgICBmZXRjaERhdGEsXG4gICAgY29udmVydFhNTFRvSlNPTixcbiAgICByZWRpc09ETSxcbiAgICByZWRpc01vZGVsT2JqZWN0LFxuICAgIHVybCxcbiAgICBiYXNlVXJsLFxuICAgIGZldGNoZWREYXRhLFxuICAgIHNpbmdsZUpzb25EYXRhLFxuICAgIG11bHRpcGxlSnNvbkRhdGEsXG4gICAgc2luZ2xlUGFzc2VkRGF0YSxcbiAgICBwb3NpdGl2ZVJlcGx5XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lbGluZSdcbiAgICBiYXNlVXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nXG4gICAgZmV0Y2hlZERhdGEgPSB7IGRhdGE6ICc8eG1sPnNvbWUgZGF0YTwveG1sPicsIG90aGVyRmllbGQ6ICdvdGhlckZpZWxkJyB9XG4gICAgc2luZ2xlSnNvbkRhdGEgPSB7XG4gICAgICBmZWVkOiB7XG4gICAgICAgIGVudHJ5OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpJc3N1ZUNvbW1lbnRFdmVudC83MzE5Mjc4ODI1J10sXG4gICAgICAgICAgICBhdXRob3I6IFt7XG4gICAgICAgICAgICAgIG5hbWU6IFsnYW5zaWJvdCddLFxuICAgICAgICAgICAgICB1cmk6IFsnaHR0cHM6Ly9naXRodWIuY29tL2Fuc2lib3QnXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB1cGRhdGVkOiBbJzIwMTgtMDMtMDFUMjM6NTg6MzVaJ10sXG4gICAgICAgICAgICBvdGhlckZpZWxkczogW3tcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDE6IFsnb3RoZXJGaWVsZDEnXSxcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDI6IFsnb3RoZXJGaWVsZDInXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gICAgbXVsdGlwbGVKc29uRGF0YSA9IHtcbiAgICAgIGZlZWQ6IHtcbiAgICAgICAgZW50cnk6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogWyd0YWc6Z2l0aHViLmNvbSwyMDA4Oklzc3VlQ29tbWVudEV2ZW50LzczMTkyNzg4MjUnXSxcbiAgICAgICAgICAgIGF1dGhvcjogW3tcbiAgICAgICAgICAgICAgbmFtZTogWydhbnNpYm90J10sXG4gICAgICAgICAgICAgIHVyaTogWydodHRwczovL2dpdGh1Yi5jb20vYW5zaWJvdCddXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IFsnMjAxOC0wMy0wMVQyMzo1ODozNVonXSxcbiAgICAgICAgICAgIG90aGVyRmllbGRzOiBbe1xuICAgICAgICAgICAgICBvdGhlckZpZWxkMTogWydvdGhlckZpZWxkMSddLFxuICAgICAgICAgICAgICBvdGhlckZpZWxkMjogWydvdGhlckZpZWxkMiddXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpBbm90aGVyRXZlbnQvNzMxOTI3ODgyNiddLFxuICAgICAgICAgICAgYXV0aG9yOiBbe1xuICAgICAgICAgICAgICBuYW1lOiBbJ2Fub3RoZXJBdXRob3InXSxcbiAgICAgICAgICAgICAgdXJpOiBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbm90aGVyQXV0aG9yJ11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdXBkYXRlZDogWycyMDE1LTIzLTAyVDIxOjE4OjI1WiddLFxuICAgICAgICAgICAgb3RoZXJGaWVsZHM6IFt7XG4gICAgICAgICAgICAgIG90aGVyRmllbGQxOiBbJ290aGVyRmllbGQyJ10sXG4gICAgICAgICAgICAgIG90aGVyRmllbGQyOiBbJ290aGVyRmllbGQzJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIHNpbmdsZVBhc3NlZERhdGEgPSB7XG4gICAgICBrZXk6ICdhbnNpYm90JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZXZlbnQ6ICdJc3N1ZUNvbW1lbnRFdmVudCcsXG4gICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgIG5hbWU6ICdhbnNpYm90JyxcbiAgICAgICAgICB1cmk6ICdhbnNpYm90J1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVUaW1lOiBuZXcgRGF0ZShEYXRlLnBhcnNlKCcyMDE4LTAzLTAxVDIzOjU4OjM1WicpKVxuICAgICAgfVxuICAgIH1cbiAgICBwb3NpdGl2ZVJlcGx5ID0gJ09LJ1xuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBnZXRCYXNlVXJsID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICBmZXRjaERhdGEgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIGNvbnZlcnRYTUxUb0pTT04gPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIHJlZGlzT0RNID0gcmVkaXNPRE1Nb2NrKClcbiAgICByZWRpc01vZGVsT2JqZWN0ID0gcmVkaXNNb2RlbE9iamVjdE1vY2soKVxuICAgIG1vY2tzID0gWyBnZXRCYXNlVXJsLCBmZXRjaERhdGEsIGNvbnZlcnRYTUxUb0pTT04sIHJlZGlzT0RNLmNyZWF0ZSxcbiAgICAgIHJlZGlzTW9kZWxPYmplY3Quc2F2ZSBdXG4gICAgZ2V0QmFzZVVybC5vbmNlKCkud2l0aEV4YWN0QXJncyh7IHVybCB9KS5yZXNvbHZlcyhiYXNlVXJsKVxuICAgIGZldGNoRGF0YS5vbmNlKCkud2l0aEV4YWN0QXJncyh7IHVybCB9KS5yZXNvbHZlcyhmZXRjaGVkRGF0YSlcbiAgICBjb252ZXJ0WE1MVG9KU09OLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgeG1sOiBmZXRjaGVkRGF0YS5kYXRhIH0pXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIHNjcmFwaW5nJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIGZldGNoaW5nIHNpbmdsZSBkYXRhJywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgY29udmVydFhNTFRvSlNPTi5yZXNvbHZlcyhzaW5nbGVKc29uRGF0YSlcbiAgICAgICAgcmVkaXNPRE0uY3JlYXRlLm9uY2UoKS53aXRoRXhhY3RBcmdzKHNpbmdsZVBhc3NlZERhdGEpXG4gICAgICAgICAgLnJldHVybnMocmVkaXNNb2RlbE9iamVjdClcbiAgICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlLm9uY2UoKS53aXRoRXhhY3RBcmdzKCkucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgKCkgPT5cbiAgICAgICAgc2NyYXBlKFxuICAgICAgICAgIHsgdXJsLCBnZXRCYXNlVXJsLCBmZXRjaERhdGEsIGNvbnZlcnRYTUxUb0pTT04sIG9kbTogcmVkaXNPRE0gfVxuICAgICAgICApKCkuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpdCgnc2hvdWxkIHBlcnNpc3Qgc2luZ2xlIGRhdGEnLCAoKSA9PlxuICAgICAgICBzY3JhcGUoXG4gICAgICAgICAgeyB1cmwsIGdldEJhc2VVcmwsIGZldGNoRGF0YSwgY29udmVydFhNTFRvSlNPTiwgb2RtOiByZWRpc09ETSB9XG4gICAgICAgICkoKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbFRvKFtwb3NpdGl2ZVJlcGx5XSkpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIGZldGNoaW5nIG11bHRpcGxlIGRhdGEnLCAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICBjb252ZXJ0WE1MVG9KU09OLnJlc29sdmVzKG11bHRpcGxlSnNvbkRhdGEpXG4gICAgICAgIHJlZGlzT0RNLmNyZWF0ZS5leGFjdGx5KG11bHRpcGxlSnNvbkRhdGEuZmVlZC5lbnRyeS5sZW5ndGgpXG4gICAgICAgICAgLnJldHVybnMocmVkaXNNb2RlbE9iamVjdClcbiAgICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlLmV4YWN0bHkobXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lmxlbmd0aClcbiAgICAgICAgICAucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IG11dGlwbGUgZGF0YScsICgpID0+XG4gICAgICAgIHNjcmFwZShcbiAgICAgICAgICB7IHVybCwgZ2V0QmFzZVVybCwgZmV0Y2hEYXRhLCBjb252ZXJ0WE1MVG9KU09OLCBvZG06IHJlZGlzT0RNIH1cbiAgICAgICAgKSgpLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgICAgLmVxdWFsVG8obXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lm1hcChlbiA9PiBwb3NpdGl2ZVJlcGx5KSkpXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=