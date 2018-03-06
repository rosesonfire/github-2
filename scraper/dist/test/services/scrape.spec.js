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
    getBaseUrl.once().withExactArgs(url).resolves(baseUrl);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL3NjcmFwZS5zcGVjLmpzIl0sIm5hbWVzIjpbIm1vY2tzIiwiZ2V0QmFzZVVybCIsImZldGNoRGF0YSIsImNvbnZlcnRYTUxUb0pTT04iLCJyZWRpc09ETSIsInJlZGlzTW9kZWxPYmplY3QiLCJ1cmwiLCJiYXNlVXJsIiwiZmV0Y2hlZERhdGEiLCJzaW5nbGVKc29uRGF0YSIsIm11bHRpcGxlSnNvbkRhdGEiLCJzaW5nbGVQYXNzZWREYXRhIiwicG9zaXRpdmVSZXBseSIsImRhdGEiLCJvdGhlckZpZWxkIiwiZmVlZCIsImVudHJ5IiwiaWQiLCJhdXRob3IiLCJuYW1lIiwidXJpIiwidXBkYXRlZCIsIm90aGVyRmllbGRzIiwib3RoZXJGaWVsZDEiLCJvdGhlckZpZWxkMiIsImtleSIsImV2ZW50IiwidXBkYXRlVGltZSIsIkRhdGUiLCJwYXJzZSIsImNyZWF0ZSIsInNhdmUiLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJlc29sdmVzIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJyZXR1cm5zIiwib2RtIiwic2hvdWxkIiwiYmUiLCJhIiwiZXZlbnR1YWxseSIsImVxdWFsVG8iLCJleGFjdGx5IiwibGVuZ3RoIiwibWFwIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRkE7QUFJQSxxQkFBUyxRQUFULEVBQW1CLFlBQU07QUFDdkIsTUFDRUEsY0FERjtBQUFBLE1BRUVDLG1CQUZGO0FBQUEsTUFHRUMsa0JBSEY7QUFBQSxNQUlFQyx5QkFKRjtBQUFBLE1BS0VDLGlCQUxGO0FBQUEsTUFNRUMseUJBTkY7QUFBQSxNQU9FQyxZQVBGO0FBQUEsTUFRRUMsZ0JBUkY7QUFBQSxNQVNFQyxvQkFURjtBQUFBLE1BVUVDLHVCQVZGO0FBQUEsTUFXRUMseUJBWEY7QUFBQSxNQVlFQyx5QkFaRjtBQUFBLE1BYUVDLHNCQWJGOztBQWVBLHFCQUFPLFlBQU07QUFDWE4sVUFB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R0MsT0FISCxDQUdXbEMsaUJBQWlCSyxJQUFqQixDQUFzQkMsS0FBdEIsQ0FBNEIrQixHQUE1QixDQUFnQztBQUFBLGlCQUFNbkMsYUFBTjtBQUFBLFNBQWhDLENBSFgsQ0FEZ0M7QUFBQSxPQUFsQztBQUtELEtBZEQ7QUFlRCxHQW5DRDtBQW9DRCxDQXJJRDtBQU5BIiwiZmlsZSI6InNjcmFwZS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzY3JpYmUsIGJlZm9yZSwgYmVmb3JlRWFjaCwgYWZ0ZXJFYWNoLCBpdCB9IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgc2NyYXBlIGZyb20gJy4vLi4vLi4vbWFpbi9zZXJ2aWNlcy9zY3JhcGUnXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkTW9ja09iamVjdCBmcm9tICcuLy4uL21vY2tzL290aGVycy9wbGFpbk9sZE1vY2tPYmplY3QnXG5pbXBvcnQgcmVkaXNPRE1Nb2NrLCB7IHJlZGlzTW9kZWxPYmplY3RNb2NrIH0gZnJvbSAnLi8uLi9tb2Nrcy9saWIvb2RtL3JlZGlzT0RNJ1xuXG5kZXNjcmliZSgnU2NyYXBlJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICBnZXRCYXNlVXJsLFxuICAgIGZldGNoRGF0YSxcbiAgICBjb252ZXJ0WE1MVG9KU09OLFxuICAgIHJlZGlzT0RNLFxuICAgIHJlZGlzTW9kZWxPYmplY3QsXG4gICAgdXJsLFxuICAgIGJhc2VVcmwsXG4gICAgZmV0Y2hlZERhdGEsXG4gICAgc2luZ2xlSnNvbkRhdGEsXG4gICAgbXVsdGlwbGVKc29uRGF0YSxcbiAgICBzaW5nbGVQYXNzZWREYXRhLFxuICAgIHBvc2l0aXZlUmVwbHlcblxuICBiZWZvcmUoKCkgPT4ge1xuICAgIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vdGltZWxpbmUnXG4gICAgYmFzZVVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vJ1xuICAgIGZldGNoZWREYXRhID0geyBkYXRhOiAnPHhtbD5zb21lIGRhdGE8L3htbD4nLCBvdGhlckZpZWxkOiAnb3RoZXJGaWVsZCcgfVxuICAgIHNpbmdsZUpzb25EYXRhID0ge1xuICAgICAgZmVlZDoge1xuICAgICAgICBlbnRyeTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBbJ3RhZzpnaXRodWIuY29tLDIwMDg6SXNzdWVDb21tZW50RXZlbnQvNzMxOTI3ODgyNSddLFxuICAgICAgICAgICAgYXV0aG9yOiBbe1xuICAgICAgICAgICAgICBuYW1lOiBbJ2Fuc2lib3QnXSxcbiAgICAgICAgICAgICAgdXJpOiBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbnNpYm90J11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdXBkYXRlZDogWycyMDE4LTAzLTAxVDIzOjU4OjM1WiddLFxuICAgICAgICAgICAgb3RoZXJGaWVsZHM6IFt7XG4gICAgICAgICAgICAgIG90aGVyRmllbGQxOiBbJ290aGVyRmllbGQxJ10sXG4gICAgICAgICAgICAgIG90aGVyRmllbGQyOiBbJ290aGVyRmllbGQyJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIG11bHRpcGxlSnNvbkRhdGEgPSB7XG4gICAgICBmZWVkOiB7XG4gICAgICAgIGVudHJ5OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpJc3N1ZUNvbW1lbnRFdmVudC83MzE5Mjc4ODI1J10sXG4gICAgICAgICAgICBhdXRob3I6IFt7XG4gICAgICAgICAgICAgIG5hbWU6IFsnYW5zaWJvdCddLFxuICAgICAgICAgICAgICB1cmk6IFsnaHR0cHM6Ly9naXRodWIuY29tL2Fuc2lib3QnXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB1cGRhdGVkOiBbJzIwMTgtMDMtMDFUMjM6NTg6MzVaJ10sXG4gICAgICAgICAgICBvdGhlckZpZWxkczogW3tcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDE6IFsnb3RoZXJGaWVsZDEnXSxcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDI6IFsnb3RoZXJGaWVsZDInXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBbJ3RhZzpnaXRodWIuY29tLDIwMDg6QW5vdGhlckV2ZW50LzczMTkyNzg4MjYnXSxcbiAgICAgICAgICAgIGF1dGhvcjogW3tcbiAgICAgICAgICAgICAgbmFtZTogWydhbm90aGVyQXV0aG9yJ10sXG4gICAgICAgICAgICAgIHVyaTogWydodHRwczovL2dpdGh1Yi5jb20vYW5vdGhlckF1dGhvciddXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IFsnMjAxNS0yMy0wMlQyMToxODoyNVonXSxcbiAgICAgICAgICAgIG90aGVyRmllbGRzOiBbe1xuICAgICAgICAgICAgICBvdGhlckZpZWxkMTogWydvdGhlckZpZWxkMiddLFxuICAgICAgICAgICAgICBvdGhlckZpZWxkMjogWydvdGhlckZpZWxkMyddXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgICBzaW5nbGVQYXNzZWREYXRhID0ge1xuICAgICAga2V5OiAnYW5zaWJvdCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGV2ZW50OiAnSXNzdWVDb21tZW50RXZlbnQnLFxuICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICBuYW1lOiAnYW5zaWJvdCcsXG4gICAgICAgICAgdXJpOiAnYW5zaWJvdCdcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlVGltZTogbmV3IERhdGUoRGF0ZS5wYXJzZSgnMjAxOC0wMy0wMVQyMzo1ODozNVonKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcG9zaXRpdmVSZXBseSA9ICdPSydcbiAgfSlcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBnZXRCYXNlVXJsID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICBmZXRjaERhdGEgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIGNvbnZlcnRYTUxUb0pTT04gPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIHJlZGlzT0RNID0gcmVkaXNPRE1Nb2NrKClcbiAgICByZWRpc01vZGVsT2JqZWN0ID0gcmVkaXNNb2RlbE9iamVjdE1vY2soKVxuICAgIG1vY2tzID0gWyBnZXRCYXNlVXJsLCBmZXRjaERhdGEsIGNvbnZlcnRYTUxUb0pTT04sIHJlZGlzT0RNLmNyZWF0ZSxcbiAgICAgIHJlZGlzTW9kZWxPYmplY3Quc2F2ZSBdXG4gICAgZ2V0QmFzZVVybC5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwpLnJlc29sdmVzKGJhc2VVcmwpXG4gICAgZmV0Y2hEYXRhLm9uY2UoKS53aXRoRXhhY3RBcmdzKHVybCkucmVzb2x2ZXMoZmV0Y2hlZERhdGEpXG4gICAgY29udmVydFhNTFRvSlNPTi5vbmNlKCkud2l0aEV4YWN0QXJncyhmZXRjaGVkRGF0YS5kYXRhKVxuICB9KVxuXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgZGVzY3JpYmUoJ1doZW4gc2NyYXBpbmcnLCAoKSA9PiB7XG4gICAgZGVzY3JpYmUoJ1doZW4gZmV0Y2hpbmcgc2luZ2xlIGRhdGEnLCAoKSA9PiB7XG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgY29udmVydFhNTFRvSlNPTi5yZXNvbHZlcyhzaW5nbGVKc29uRGF0YSlcbiAgICAgICAgcmVkaXNPRE0uY3JlYXRlLm9uY2UoKS53aXRoRXhhY3RBcmdzKHNpbmdsZVBhc3NlZERhdGEpXG4gICAgICAgICAgLnJldHVybnMocmVkaXNNb2RlbE9iamVjdClcbiAgICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlLm9uY2UoKS53aXRoRXhhY3RBcmdzKCkucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIH0pXG5cbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICAgIHNjcmFwZShcbiAgICAgICAgICB7IHVybCwgZ2V0QmFzZVVybCwgZmV0Y2hEYXRhLCBjb252ZXJ0WE1MVG9KU09OLCBvZG06IHJlZGlzT0RNIH1cbiAgICAgICAgKSgpLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAgIGl0KCdzaG91bGQgcGVyc2lzdCBzaW5nbGUgZGF0YScsICgpID0+XG4gICAgICAgIHNjcmFwZShcbiAgICAgICAgICB7IHVybCwgZ2V0QmFzZVVybCwgZmV0Y2hEYXRhLCBjb252ZXJ0WE1MVG9KU09OLCBvZG06IHJlZGlzT0RNIH1cbiAgICAgICAgKSgpLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsVG8oW3Bvc2l0aXZlUmVwbHldKSlcbiAgICB9KVxuXG4gICAgZGVzY3JpYmUoJ1doZW4gZmV0Y2hpbmcgbXVsdGlwbGUgZGF0YScsICgpID0+IHtcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICBjb252ZXJ0WE1MVG9KU09OLnJlc29sdmVzKG11bHRpcGxlSnNvbkRhdGEpXG4gICAgICAgIHJlZGlzT0RNLmNyZWF0ZS5leGFjdGx5KG11bHRpcGxlSnNvbkRhdGEuZmVlZC5lbnRyeS5sZW5ndGgpXG4gICAgICAgICAgLnJldHVybnMocmVkaXNNb2RlbE9iamVjdClcbiAgICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlLmV4YWN0bHkobXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lmxlbmd0aClcbiAgICAgICAgICAucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIH0pXG5cbiAgICAgIGl0KCdzaG91bGQgcGVyc2lzdCBtdXRpcGxlIGRhdGEnLCAoKSA9PlxuICAgICAgICBzY3JhcGUoXG4gICAgICAgICAgeyB1cmwsIGdldEJhc2VVcmwsIGZldGNoRGF0YSwgY29udmVydFhNTFRvSlNPTiwgb2RtOiByZWRpc09ETSB9XG4gICAgICAgICkoKS5zaG91bGQuZXZlbnR1YWxseVxuICAgICAgICAgIC5lcXVhbFRvKG11bHRpcGxlSnNvbkRhdGEuZmVlZC5lbnRyeS5tYXAoZW4gPT4gcG9zaXRpdmVSZXBseSkpKVxuICAgIH0pXG4gIH0pXG59KVxuIl19