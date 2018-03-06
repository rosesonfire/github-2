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
    fetchData.once().withExactArgs(url).resolves(fetchedData);
    convertXMLToJSON.once().withExactArgs(fetchedData.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL3NjcmFwZS5zcGVjLmpzIl0sIm5hbWVzIjpbIm1vY2tzIiwiZ2V0QmFzZVVybCIsImZldGNoRGF0YSIsImNvbnZlcnRYTUxUb0pTT04iLCJyZWRpc09ETSIsInJlZGlzTW9kZWxPYmplY3QiLCJ1cmwiLCJiYXNlVXJsIiwiZmV0Y2hlZERhdGEiLCJzaW5nbGVKc29uRGF0YSIsIm11bHRpcGxlSnNvbkRhdGEiLCJzaW5nbGVQYXNzZWREYXRhIiwicG9zaXRpdmVSZXBseSIsImRhdGEiLCJvdGhlckZpZWxkIiwiZmVlZCIsImVudHJ5IiwiaWQiLCJhdXRob3IiLCJuYW1lIiwidXJpIiwidXBkYXRlZCIsIm90aGVyRmllbGRzIiwib3RoZXJGaWVsZDEiLCJvdGhlckZpZWxkMiIsImtleSIsImV2ZW50IiwidXBkYXRlVGltZSIsIkRhdGUiLCJwYXJzZSIsImNyZWF0ZSIsInNhdmUiLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJlc29sdmVzIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJyZXR1cm5zIiwib2RtIiwic2hvdWxkIiwiYmUiLCJhIiwiZXZlbnR1YWxseSIsImVxdWFsVG8iLCJleGFjdGx5IiwibGVuZ3RoIiwibWFwIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRkE7QUFJQSxxQkFBUyxRQUFULEVBQW1CLFlBQU07QUFDdkIsTUFDRUEsY0FERjtBQUFBLE1BRUVDLG1CQUZGO0FBQUEsTUFHRUMsa0JBSEY7QUFBQSxNQUlFQyx5QkFKRjtBQUFBLE1BS0VDLGlCQUxGO0FBQUEsTUFNRUMseUJBTkY7QUFBQSxNQU9FQyxZQVBGO0FBQUEsTUFRRUMsZ0JBUkY7QUFBQSxNQVNFQyxvQkFURjtBQUFBLE1BVUVDLHVCQVZGO0FBQUEsTUFXRUMseUJBWEY7QUFBQSxNQVlFQyx5QkFaRjtBQUFBLE1BYUVDLHNCQWJGOztBQWVBLHFCQUFPLFlBQU07QUFDWE4sVUFB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RyxVQUZYLENBR0dDLE9BSEgsQ0FHV2xDLGlCQUFpQkssSUFBakIsQ0FBc0JDLEtBQXRCLENBQTRCK0IsR0FBNUIsQ0FBZ0M7QUFBQSxpQkFBTW5DLGFBQU47QUFBQSxTQUFoQyxDQUhYLENBRGdDO0FBQUEsT0FBbEM7QUFLRCxLQWREO0FBZUQsR0FuQ0Q7QUFvQ0QsQ0FySUQ7QUFOQSIsImZpbGUiOiJzY3JhcGUuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlc2NyaWJlLCBiZWZvcmUsIGJlZm9yZUVhY2gsIGFmdGVyRWFjaCwgaXQgfSBmcm9tICcuLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHNjcmFwZSBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvc2NyYXBlJ1xuLy8gbW9ja3NcbmltcG9ydCBwbGFpbk9sZE1vY2tPYmplY3QgZnJvbSAnLi8uLi9tb2Nrcy9vdGhlcnMvcGxhaW5PbGRNb2NrT2JqZWN0J1xuaW1wb3J0IHJlZGlzT0RNTW9jaywgeyByZWRpc01vZGVsT2JqZWN0TW9jayB9IGZyb20gJy4vLi4vbW9ja3MvbGliL29kbS9yZWRpc09ETSdcblxuZGVzY3JpYmUoJ1NjcmFwZScsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgZ2V0QmFzZVVybCxcbiAgICBmZXRjaERhdGEsXG4gICAgY29udmVydFhNTFRvSlNPTixcbiAgICByZWRpc09ETSxcbiAgICByZWRpc01vZGVsT2JqZWN0LFxuICAgIHVybCxcbiAgICBiYXNlVXJsLFxuICAgIGZldGNoZWREYXRhLFxuICAgIHNpbmdsZUpzb25EYXRhLFxuICAgIG11bHRpcGxlSnNvbkRhdGEsXG4gICAgc2luZ2xlUGFzc2VkRGF0YSxcbiAgICBwb3NpdGl2ZVJlcGx5XG5cbiAgYmVmb3JlKCgpID0+IHtcbiAgICB1cmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWVsaW5lJ1xuICAgIGJhc2VVcmwgPSAnaHR0cHM6Ly9naXRodWIuY29tLydcbiAgICBmZXRjaGVkRGF0YSA9IHsgZGF0YTogJzx4bWw+c29tZSBkYXRhPC94bWw+Jywgb3RoZXJGaWVsZDogJ290aGVyRmllbGQnIH1cbiAgICBzaW5nbGVKc29uRGF0YSA9IHtcbiAgICAgIGZlZWQ6IHtcbiAgICAgICAgZW50cnk6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogWyd0YWc6Z2l0aHViLmNvbSwyMDA4Oklzc3VlQ29tbWVudEV2ZW50LzczMTkyNzg4MjUnXSxcbiAgICAgICAgICAgIGF1dGhvcjogW3tcbiAgICAgICAgICAgICAgbmFtZTogWydhbnNpYm90J10sXG4gICAgICAgICAgICAgIHVyaTogWydodHRwczovL2dpdGh1Yi5jb20vYW5zaWJvdCddXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IFsnMjAxOC0wMy0wMVQyMzo1ODozNVonXSxcbiAgICAgICAgICAgIG90aGVyRmllbGRzOiBbe1xuICAgICAgICAgICAgICBvdGhlckZpZWxkMTogWydvdGhlckZpZWxkMSddLFxuICAgICAgICAgICAgICBvdGhlckZpZWxkMjogWydvdGhlckZpZWxkMiddXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgICBtdWx0aXBsZUpzb25EYXRhID0ge1xuICAgICAgZmVlZDoge1xuICAgICAgICBlbnRyeTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBbJ3RhZzpnaXRodWIuY29tLDIwMDg6SXNzdWVDb21tZW50RXZlbnQvNzMxOTI3ODgyNSddLFxuICAgICAgICAgICAgYXV0aG9yOiBbe1xuICAgICAgICAgICAgICBuYW1lOiBbJ2Fuc2lib3QnXSxcbiAgICAgICAgICAgICAgdXJpOiBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbnNpYm90J11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdXBkYXRlZDogWycyMDE4LTAzLTAxVDIzOjU4OjM1WiddLFxuICAgICAgICAgICAgb3RoZXJGaWVsZHM6IFt7XG4gICAgICAgICAgICAgIG90aGVyRmllbGQxOiBbJ290aGVyRmllbGQxJ10sXG4gICAgICAgICAgICAgIG90aGVyRmllbGQyOiBbJ290aGVyRmllbGQyJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogWyd0YWc6Z2l0aHViLmNvbSwyMDA4OkFub3RoZXJFdmVudC83MzE5Mjc4ODI2J10sXG4gICAgICAgICAgICBhdXRob3I6IFt7XG4gICAgICAgICAgICAgIG5hbWU6IFsnYW5vdGhlckF1dGhvciddLFxuICAgICAgICAgICAgICB1cmk6IFsnaHR0cHM6Ly9naXRodWIuY29tL2Fub3RoZXJBdXRob3InXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB1cGRhdGVkOiBbJzIwMTUtMjMtMDJUMjE6MTg6MjVaJ10sXG4gICAgICAgICAgICBvdGhlckZpZWxkczogW3tcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDE6IFsnb3RoZXJGaWVsZDInXSxcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDI6IFsnb3RoZXJGaWVsZDMnXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gICAgc2luZ2xlUGFzc2VkRGF0YSA9IHtcbiAgICAgIGtleTogJ2Fuc2lib3QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBldmVudDogJ0lzc3VlQ29tbWVudEV2ZW50JyxcbiAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgbmFtZTogJ2Fuc2lib3QnLFxuICAgICAgICAgIHVyaTogJ2Fuc2lib3QnXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVRpbWU6IG5ldyBEYXRlKERhdGUucGFyc2UoJzIwMTgtMDMtMDFUMjM6NTg6MzVaJykpXG4gICAgICB9XG4gICAgfVxuICAgIHBvc2l0aXZlUmVwbHkgPSAnT0snXG4gIH0pXG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgZ2V0QmFzZVVybCA9IHBsYWluT2xkTW9ja09iamVjdCgpXG4gICAgZmV0Y2hEYXRhID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICBjb252ZXJ0WE1MVG9KU09OID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICByZWRpc09ETSA9IHJlZGlzT0RNTW9jaygpXG4gICAgcmVkaXNNb2RlbE9iamVjdCA9IHJlZGlzTW9kZWxPYmplY3RNb2NrKClcbiAgICBtb2NrcyA9IFsgZ2V0QmFzZVVybCwgZmV0Y2hEYXRhLCBjb252ZXJ0WE1MVG9KU09OLCByZWRpc09ETS5jcmVhdGUsXG4gICAgICByZWRpc01vZGVsT2JqZWN0LnNhdmUgXVxuICAgIGdldEJhc2VVcmwub25jZSgpLndpdGhFeGFjdEFyZ3MoeyB1cmwgfSkucmVzb2x2ZXMoYmFzZVVybClcbiAgICBmZXRjaERhdGEub25jZSgpLndpdGhFeGFjdEFyZ3ModXJsKS5yZXNvbHZlcyhmZXRjaGVkRGF0YSlcbiAgICBjb252ZXJ0WE1MVG9KU09OLm9uY2UoKS53aXRoRXhhY3RBcmdzKGZldGNoZWREYXRhLmRhdGEpXG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICBkZXNjcmliZSgnV2hlbiBzY3JhcGluZycsICgpID0+IHtcbiAgICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBzaW5nbGUgZGF0YScsICgpID0+IHtcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICBjb252ZXJ0WE1MVG9KU09OLnJlc29sdmVzKHNpbmdsZUpzb25EYXRhKVxuICAgICAgICByZWRpc09ETS5jcmVhdGUub25jZSgpLndpdGhFeGFjdEFyZ3Moc2luZ2xlUGFzc2VkRGF0YSlcbiAgICAgICAgICAucmV0dXJucyhyZWRpc01vZGVsT2JqZWN0KVxuICAgICAgICByZWRpc01vZGVsT2JqZWN0LnNhdmUub25jZSgpLndpdGhFeGFjdEFyZ3MoKS5yZXNvbHZlcyhwb3NpdGl2ZVJlcGx5KVxuICAgICAgfSlcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgKCkgPT5cbiAgICAgICAgc2NyYXBlKFxuICAgICAgICAgIHsgdXJsLCBnZXRCYXNlVXJsLCBmZXRjaERhdGEsIGNvbnZlcnRYTUxUb0pTT04sIG9kbTogcmVkaXNPRE0gfVxuICAgICAgICApKCkuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IHNpbmdsZSBkYXRhJywgKCkgPT5cbiAgICAgICAgc2NyYXBlKFxuICAgICAgICAgIHsgdXJsLCBnZXRCYXNlVXJsLCBmZXRjaERhdGEsIGNvbnZlcnRYTUxUb0pTT04sIG9kbTogcmVkaXNPRE0gfVxuICAgICAgICApKCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWxUbyhbcG9zaXRpdmVSZXBseV0pKVxuICAgIH0pXG5cbiAgICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBtdWx0aXBsZSBkYXRhJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIGNvbnZlcnRYTUxUb0pTT04ucmVzb2x2ZXMobXVsdGlwbGVKc29uRGF0YSlcbiAgICAgICAgcmVkaXNPRE0uY3JlYXRlLmV4YWN0bHkobXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lmxlbmd0aClcbiAgICAgICAgICAucmV0dXJucyhyZWRpc01vZGVsT2JqZWN0KVxuICAgICAgICByZWRpc01vZGVsT2JqZWN0LnNhdmUuZXhhY3RseShtdWx0aXBsZUpzb25EYXRhLmZlZWQuZW50cnkubGVuZ3RoKVxuICAgICAgICAgIC5yZXNvbHZlcyhwb3NpdGl2ZVJlcGx5KVxuICAgICAgfSlcblxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IG11dGlwbGUgZGF0YScsICgpID0+XG4gICAgICAgIHNjcmFwZShcbiAgICAgICAgICB7IHVybCwgZ2V0QmFzZVVybCwgZmV0Y2hEYXRhLCBjb252ZXJ0WE1MVG9KU09OLCBvZG06IHJlZGlzT0RNIH1cbiAgICAgICAgKSgpLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgICAgLmVxdWFsVG8obXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lm1hcChlbiA9PiBwb3NpdGl2ZVJlcGx5KSkpXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=