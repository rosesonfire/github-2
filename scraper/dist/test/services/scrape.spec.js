'use strict';

var _setup = require('./../setup');

var _scrape = require('./../../main/services/scrape');

var _scrape2 = _interopRequireDefault(_scrape);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

var _redisODM = require('./../mocks/lib/odm/redisODM');

var _redisODM2 = _interopRequireDefault(_redisODM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mocks
(0, _setup.describe)('Scrape', function () {
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

  (0, _setup.before)(function () {
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

  (0, _setup.beforeEach)(function () {
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

  (0, _setup.afterEach)(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  (0, _setup.describe)('When scraping', function () {
    (0, _setup.describe)('When fetching single data', function () {
      (0, _setup.beforeEach)(function () {
        convertXMLToJSON.resolves(singleJsonData);
        redisODM.create.once().withExactArgs(singlePassedData).returns(redisModelObject);
        redisModelObject.save.once().withExactArgs().resolves(positiveReply);
      });

      (0, _setup.it)('should return a promise', function () {
        return (0, _scrape2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, convertXMLToJSON: convertXMLToJSON, odm: redisODM })().should.be.a('promise');
      });

      (0, _setup.it)('should persist single data', function () {
        return (0, _scrape2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, convertXMLToJSON: convertXMLToJSON, odm: redisODM })().should.eventually.equalTo([positiveReply]);
      });
    });

    (0, _setup.describe)('When fetching multiple data', function () {
      (0, _setup.beforeEach)(function () {
        convertXMLToJSON.resolves(multipleJsonData);
        redisODM.create.exactly(multipleJsonData.feed.entry.length).returns(redisModelObject);
        redisModelObject.save.exactly(multipleJsonData.feed.entry.length).resolves(positiveReply);
      });

      (0, _setup.it)('should persist mutiple data', function () {
        return (0, _scrape2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, convertXMLToJSON: convertXMLToJSON, odm: redisODM })().should.eventually.equalTo(multipleJsonData.feed.entry.map(function (en) {
          return positiveReply;
        }));
      });
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL3NjcmFwZS5zcGVjLmpzIl0sIm5hbWVzIjpbIm1vY2tzIiwiZ2V0QmFzZVVybCIsImZldGNoRGF0YSIsImNvbnZlcnRYTUxUb0pTT04iLCJyZWRpc09ETSIsInJlZGlzTW9kZWxPYmplY3QiLCJ1cmwiLCJiYXNlVXJsIiwiZmV0Y2hlZERhdGEiLCJzaW5nbGVKc29uRGF0YSIsIm11bHRpcGxlSnNvbkRhdGEiLCJzaW5nbGVQYXNzZWREYXRhIiwicG9zaXRpdmVSZXBseSIsImRhdGEiLCJvdGhlckZpZWxkIiwiZmVlZCIsImVudHJ5IiwiaWQiLCJhdXRob3IiLCJuYW1lIiwidXJpIiwidXBkYXRlZCIsIm90aGVyRmllbGRzIiwib3RoZXJGaWVsZDEiLCJvdGhlckZpZWxkMiIsImtleSIsImV2ZW50IiwidXBkYXRlVGltZSIsIkRhdGUiLCJwYXJzZSIsImNyZWF0ZSIsInNhdmUiLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJlc29sdmVzIiwieG1sIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJyZXR1cm5zIiwib2RtIiwic2hvdWxkIiwiYmUiLCJhIiwiZXZlbnR1YWxseSIsImVxdWFsVG8iLCJleGFjdGx5IiwibGVuZ3RoIiwibWFwIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRkE7QUFJQSxxQkFBUyxRQUFULEVBQW1CLFlBQU07QUFDdkIsTUFDRUEsY0FERjtBQUFBLE1BRUVDLG1CQUZGO0FBQUEsTUFHRUMsa0JBSEY7QUFBQSxNQUlFQyx5QkFKRjtBQUFBLE1BS0VDLGlCQUxGO0FBQUEsTUFNRUMseUJBTkY7QUFBQSxNQU9FQyxZQVBGO0FBQUEsTUFRRUMsZ0JBUkY7QUFBQSxNQVNFQyxvQkFURjtBQUFBLE1BVUVDLHVCQVZGO0FBQUEsTUFXRUMseUJBWEY7QUFBQSxNQVlFQyx5QkFaRjtBQUFBLE1BYUVDLHNCQWJGOztBQWVBLHFCQUFPLFlBQU07QUFD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S0FBS3BDLFFBQXJELEVBREYsSUFFSXFDLE1BRkosQ0FFV0csVUFGWCxDQUdHQyxPQUhILENBR1duQyxpQkFBaUJLLElBQWpCLENBQXNCQyxLQUF0QixDQUE0QmdDLEdBQTVCLENBQWdDO0FBQUEsaUJBQU1wQyxhQUFOO0FBQUEsU0FBaEMsQ0FIWCxDQURnQztBQUFBLE9BQWxDO0FBS0QsS0FkRDtBQWVELEdBbkNEO0FBb0NELENBcklEO0FBTkEiLCJmaWxlIjoic2NyYXBlLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXNjcmliZSwgYmVmb3JlLCBiZWZvcmVFYWNoLCBhZnRlckVhY2gsIGl0IH0gZnJvbSAnLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCBzY3JhcGUgZnJvbSAnLi8uLi8uLi9tYWluL3NlcnZpY2VzL3NjcmFwZSdcbi8vIG1vY2tzXG5pbXBvcnQgcGxhaW5PbGRNb2NrT2JqZWN0IGZyb20gJy4vLi4vbW9ja3Mvb3RoZXJzL3BsYWluT2xkTW9ja09iamVjdCdcbmltcG9ydCByZWRpc09ETU1vY2ssIHsgcmVkaXNNb2RlbE9iamVjdE1vY2sgfSBmcm9tICcuLy4uL21vY2tzL2xpYi9vZG0vcmVkaXNPRE0nXG5cbmRlc2NyaWJlKCdTY3JhcGUnLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIGdldEJhc2VVcmwsXG4gICAgZmV0Y2hEYXRhLFxuICAgIGNvbnZlcnRYTUxUb0pTT04sXG4gICAgcmVkaXNPRE0sXG4gICAgcmVkaXNNb2RlbE9iamVjdCxcbiAgICB1cmwsXG4gICAgYmFzZVVybCxcbiAgICBmZXRjaGVkRGF0YSxcbiAgICBzaW5nbGVKc29uRGF0YSxcbiAgICBtdWx0aXBsZUpzb25EYXRhLFxuICAgIHNpbmdsZVBhc3NlZERhdGEsXG4gICAgcG9zaXRpdmVSZXBseVxuXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lbGluZSdcbiAgICBiYXNlVXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nXG4gICAgZmV0Y2hlZERhdGEgPSB7IGRhdGE6ICc8eG1sPnNvbWUgZGF0YTwveG1sPicsIG90aGVyRmllbGQ6ICdvdGhlckZpZWxkJyB9XG4gICAgc2luZ2xlSnNvbkRhdGEgPSB7XG4gICAgICBmZWVkOiB7XG4gICAgICAgIGVudHJ5OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpJc3N1ZUNvbW1lbnRFdmVudC83MzE5Mjc4ODI1J10sXG4gICAgICAgICAgICBhdXRob3I6IFt7XG4gICAgICAgICAgICAgIG5hbWU6IFsnYW5zaWJvdCddLFxuICAgICAgICAgICAgICB1cmk6IFsnaHR0cHM6Ly9naXRodWIuY29tL2Fuc2lib3QnXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB1cGRhdGVkOiBbJzIwMTgtMDMtMDFUMjM6NTg6MzVaJ10sXG4gICAgICAgICAgICBvdGhlckZpZWxkczogW3tcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDE6IFsnb3RoZXJGaWVsZDEnXSxcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDI6IFsnb3RoZXJGaWVsZDInXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gICAgbXVsdGlwbGVKc29uRGF0YSA9IHtcbiAgICAgIGZlZWQ6IHtcbiAgICAgICAgZW50cnk6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogWyd0YWc6Z2l0aHViLmNvbSwyMDA4Oklzc3VlQ29tbWVudEV2ZW50LzczMTkyNzg4MjUnXSxcbiAgICAgICAgICAgIGF1dGhvcjogW3tcbiAgICAgICAgICAgICAgbmFtZTogWydhbnNpYm90J10sXG4gICAgICAgICAgICAgIHVyaTogWydodHRwczovL2dpdGh1Yi5jb20vYW5zaWJvdCddXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IFsnMjAxOC0wMy0wMVQyMzo1ODozNVonXSxcbiAgICAgICAgICAgIG90aGVyRmllbGRzOiBbe1xuICAgICAgICAgICAgICBvdGhlckZpZWxkMTogWydvdGhlckZpZWxkMSddLFxuICAgICAgICAgICAgICBvdGhlckZpZWxkMjogWydvdGhlckZpZWxkMiddXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpBbm90aGVyRXZlbnQvNzMxOTI3ODgyNiddLFxuICAgICAgICAgICAgYXV0aG9yOiBbe1xuICAgICAgICAgICAgICBuYW1lOiBbJ2Fub3RoZXJBdXRob3InXSxcbiAgICAgICAgICAgICAgdXJpOiBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbm90aGVyQXV0aG9yJ11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdXBkYXRlZDogWycyMDE1LTIzLTAyVDIxOjE4OjI1WiddLFxuICAgICAgICAgICAgb3RoZXJGaWVsZHM6IFt7XG4gICAgICAgICAgICAgIG90aGVyRmllbGQxOiBbJ290aGVyRmllbGQyJ10sXG4gICAgICAgICAgICAgIG90aGVyRmllbGQyOiBbJ290aGVyRmllbGQzJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIHNpbmdsZVBhc3NlZERhdGEgPSB7XG4gICAgICBrZXk6ICdhbnNpYm90JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZXZlbnQ6ICdJc3N1ZUNvbW1lbnRFdmVudCcsXG4gICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgIG5hbWU6ICdhbnNpYm90JyxcbiAgICAgICAgICB1cmk6ICdhbnNpYm90J1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVUaW1lOiBuZXcgRGF0ZShEYXRlLnBhcnNlKCcyMDE4LTAzLTAxVDIzOjU4OjM1WicpKVxuICAgICAgfVxuICAgIH1cbiAgICBwb3NpdGl2ZVJlcGx5ID0gJ09LJ1xuICB9KVxuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGdldEJhc2VVcmwgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIGZldGNoRGF0YSA9IHBsYWluT2xkTW9ja09iamVjdCgpXG4gICAgY29udmVydFhNTFRvSlNPTiA9IHBsYWluT2xkTW9ja09iamVjdCgpXG4gICAgcmVkaXNPRE0gPSByZWRpc09ETU1vY2soKVxuICAgIHJlZGlzTW9kZWxPYmplY3QgPSByZWRpc01vZGVsT2JqZWN0TW9jaygpXG4gICAgbW9ja3MgPSBbIGdldEJhc2VVcmwsIGZldGNoRGF0YSwgY29udmVydFhNTFRvSlNPTiwgcmVkaXNPRE0uY3JlYXRlLFxuICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlIF1cbiAgICBnZXRCYXNlVXJsLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgdXJsIH0pLnJlc29sdmVzKGJhc2VVcmwpXG4gICAgZmV0Y2hEYXRhLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgdXJsIH0pLnJlc29sdmVzKGZldGNoZWREYXRhKVxuICAgIGNvbnZlcnRYTUxUb0pTT04ub25jZSgpLndpdGhFeGFjdEFyZ3MoeyB4bWw6IGZldGNoZWREYXRhLmRhdGEgfSlcbiAgfSlcblxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IG1vY2sudmVyaWZ5KCkpKVxuXG4gIGRlc2NyaWJlKCdXaGVuIHNjcmFwaW5nJywgKCkgPT4ge1xuICAgIGRlc2NyaWJlKCdXaGVuIGZldGNoaW5nIHNpbmdsZSBkYXRhJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIGNvbnZlcnRYTUxUb0pTT04ucmVzb2x2ZXMoc2luZ2xlSnNvbkRhdGEpXG4gICAgICAgIHJlZGlzT0RNLmNyZWF0ZS5vbmNlKCkud2l0aEV4YWN0QXJncyhzaW5nbGVQYXNzZWREYXRhKVxuICAgICAgICAgIC5yZXR1cm5zKHJlZGlzTW9kZWxPYmplY3QpXG4gICAgICAgIHJlZGlzTW9kZWxPYmplY3Quc2F2ZS5vbmNlKCkud2l0aEV4YWN0QXJncygpLnJlc29sdmVzKHBvc2l0aXZlUmVwbHkpXG4gICAgICB9KVxuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgICBzY3JhcGUoXG4gICAgICAgICAgeyB1cmwsIGdldEJhc2VVcmwsIGZldGNoRGF0YSwgY29udmVydFhNTFRvSlNPTiwgb2RtOiByZWRpc09ETSB9XG4gICAgICAgICkoKS5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgICBpdCgnc2hvdWxkIHBlcnNpc3Qgc2luZ2xlIGRhdGEnLCAoKSA9PlxuICAgICAgICBzY3JhcGUoXG4gICAgICAgICAgeyB1cmwsIGdldEJhc2VVcmwsIGZldGNoRGF0YSwgY29udmVydFhNTFRvSlNPTiwgb2RtOiByZWRpc09ETSB9XG4gICAgICAgICkoKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbFRvKFtwb3NpdGl2ZVJlcGx5XSkpXG4gICAgfSlcblxuICAgIGRlc2NyaWJlKCdXaGVuIGZldGNoaW5nIG11bHRpcGxlIGRhdGEnLCAoKSA9PiB7XG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgY29udmVydFhNTFRvSlNPTi5yZXNvbHZlcyhtdWx0aXBsZUpzb25EYXRhKVxuICAgICAgICByZWRpc09ETS5jcmVhdGUuZXhhY3RseShtdWx0aXBsZUpzb25EYXRhLmZlZWQuZW50cnkubGVuZ3RoKVxuICAgICAgICAgIC5yZXR1cm5zKHJlZGlzTW9kZWxPYmplY3QpXG4gICAgICAgIHJlZGlzTW9kZWxPYmplY3Quc2F2ZS5leGFjdGx5KG11bHRpcGxlSnNvbkRhdGEuZmVlZC5lbnRyeS5sZW5ndGgpXG4gICAgICAgICAgLnJlc29sdmVzKHBvc2l0aXZlUmVwbHkpXG4gICAgICB9KVxuXG4gICAgICBpdCgnc2hvdWxkIHBlcnNpc3QgbXV0aXBsZSBkYXRhJywgKCkgPT5cbiAgICAgICAgc2NyYXBlKFxuICAgICAgICAgIHsgdXJsLCBnZXRCYXNlVXJsLCBmZXRjaERhdGEsIGNvbnZlcnRYTUxUb0pTT04sIG9kbTogcmVkaXNPRE0gfVxuICAgICAgICApKCkuc2hvdWxkLmV2ZW50dWFsbHlcbiAgICAgICAgICAuZXF1YWxUbyhtdWx0aXBsZUpzb25EYXRhLmZlZWQuZW50cnkubWFwKGVuID0+IHBvc2l0aXZlUmVwbHkpKSlcbiAgICB9KVxuICB9KVxufSlcbiJdfQ==