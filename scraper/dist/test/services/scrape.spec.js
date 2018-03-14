'use strict';

var _setup = require('./../setup');

var _scrape = require('./../../main/services/scrape');

var _scrape2 = _interopRequireDefault(_scrape);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
(0, _setup.describe)('Scrape', function () {
  var mocks = void 0,
      getBaseUrl = void 0,
      fetchData = void 0,
      convertXMLToJSON = void 0,
      saveData = void 0,
      url = void 0,
      baseUrl = void 0,
      fetchedData = void 0,
      jsonData = void 0,
      requiredDataSet = void 0,
      replies = void 0;

  (0, _setup.before)(function () {
    url = 'https://github.com/timeline';
    baseUrl = 'https://github.com/';
    fetchedData = { data: '<xml>some data</xml>', otherField: 'otherField' };
    jsonData = {
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
          updated: ['2015-04-02T21:18:25Z'],
          otherFields: [{
            otherField1: ['otherField2'],
            otherField2: ['otherField3']
          }]
        }]
      }
    };
    requiredDataSet = [{
      event: 'IssueCommentEvent',
      author: {
        name: 'ansibot',
        uri: 'ansibot'
      },
      updateTime: new Date(Date.parse('2018-03-01T23:58:35Z'))
    }, {
      event: 'AnotherEvent',
      author: {
        name: 'anotherAuthor',
        uri: 'anotherAuthor'
      },
      updateTime: new Date(Date.parse('2015-04-02T21:18:25Z'))
    }];
    replies = [{
      requestToken: '1234',
      succeeded: true,
      error: null
    }, {
      requestToken: '5678',
      succeeded: false,
      error: new Error('err')
    }];
  });

  (0, _setup.beforeEach)(function () {
    getBaseUrl = (0, _plainOldMockObject2.default)();
    fetchData = (0, _plainOldMockObject2.default)();
    convertXMLToJSON = (0, _plainOldMockObject2.default)();
    saveData = (0, _plainOldMockObject2.default)();
    mocks = [getBaseUrl, fetchData, convertXMLToJSON, saveData];
    getBaseUrl.once().withExactArgs(url).resolves(baseUrl);
    fetchData.once().withExactArgs(url).resolves(fetchedData);
    convertXMLToJSON.once().withExactArgs(fetchedData.data).resolves(jsonData);
    saveData.once().withExactArgs(requiredDataSet).resolves(replies);
  });

  (0, _setup.afterEach)(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  (0, _setup.describe)('When scraping', function () {
    (0, _setup.it)('should return a promise', function () {
      return (0, _scrape2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, convertXMLToJSON: convertXMLToJSON, saveData: saveData })().should.be.a('promise');
    });

    (0, _setup.it)('should persist data', function () {
      return (0, _scrape2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, convertXMLToJSON: convertXMLToJSON, saveData: saveData })().should.eventually.equalTo(replies);
    });
  });
});
// mocks
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL3NjcmFwZS5zcGVjLmpzIl0sIm5hbWVzIjpbIm1vY2tzIiwiZ2V0QmFzZVVybCIsImZldGNoRGF0YSIsImNvbnZlcnRYTUxUb0pTT04iLCJzYXZlRGF0YSIsInVybCIsImJhc2VVcmwiLCJmZXRjaGVkRGF0YSIsImpzb25EYXRhIiwicmVxdWlyZWREYXRhU2V0IiwicmVwbGllcyIsImRhdGEiLCJvdGhlckZpZWxkIiwiZmVlZCIsImVudHJ5IiwiaWQiLCJhdXRob3IiLCJuYW1lIiwidXJpIiwidXBkYXRlZCIsIm90aGVyRmllbGRzIiwib3RoZXJGaWVsZDEiLCJvdGhlckZpZWxkMiIsImV2ZW50IiwidXBkYXRlVGltZSIsIkRhdGUiLCJwYXJzZSIsInJlcXVlc3RUb2tlbiIsInN1Y2NlZWRlZCIsImVycm9yIiwiRXJyb3IiLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJlc29sdmVzIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJzaG91bGQiLCJiZSIsImEiLCJldmVudHVhbGx5IiwiZXF1YWxUbyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7OztBQUVBOzs7Ozs7QUFIQTtBQUtBLHFCQUFTLFFBQVQsRUFBbUIsWUFBTTtBQUN2QixNQUNFQSxjQURGO0FBQUEsTUFFRUMsbUJBRkY7QUFBQSxNQUdFQyxrQkFIRjtBQUFBLE1BSUVDLHlCQUpGO0FBQUEsTUFLRUMsaUJBTEY7QUFBQSxNQU1FQyxZQU5GO0FBQUEsTUFPRUMsZ0JBUEY7QUFBQSxNQVFFQyxvQkFSRjtBQUFBLE1BU0VDLGlCQVRGO0FBQUEsTUFVRUMsd0JBVkY7QUFBQSxNQVdFQyxnQkFYRjs7QUFhQSxxQkFBTyxZQUFNO0FBQ1hMLFVBQU0sNkJBQU47QUFDQUMsY0FBVSxxQkFBVjtBQUNBQyxrQkFBYyxFQUFFSSxNQUFNLHNCQUFSLEVBQWdDQyxZQUFZLFlBQTVDLEVBQWQ7QUFDQUosZUFBVztBQUNUSyxZQUFNO0FBQ0pDLGVBQU8sQ0FD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QkFBaEQsRUFERixJQUVJaUMsTUFGSixDQUVXRyxVQUZYLENBRXNCQyxPQUZ0QixDQUU4Qi9CLE9BRjlCLENBRHdCO0FBQUEsS0FBMUI7QUFJRCxHQVZEO0FBV0QsQ0F6R0Q7QUFIQSIsImZpbGUiOiJzY3JhcGUuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlc2NyaWJlLCBiZWZvcmUsIGJlZm9yZUVhY2gsIGFmdGVyRWFjaCwgaXQgfSBmcm9tICcuLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHNjcmFwZSBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvc2NyYXBlJ1xuLy8gbW9ja3NcbmltcG9ydCBwbGFpbk9sZE1vY2tPYmplY3QgZnJvbSAnLi8uLi9tb2Nrcy9vdGhlcnMvcGxhaW5PbGRNb2NrT2JqZWN0J1xuXG5kZXNjcmliZSgnU2NyYXBlJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICBnZXRCYXNlVXJsLFxuICAgIGZldGNoRGF0YSxcbiAgICBjb252ZXJ0WE1MVG9KU09OLFxuICAgIHNhdmVEYXRhLFxuICAgIHVybCxcbiAgICBiYXNlVXJsLFxuICAgIGZldGNoZWREYXRhLFxuICAgIGpzb25EYXRhLFxuICAgIHJlcXVpcmVkRGF0YVNldCxcbiAgICByZXBsaWVzXG5cbiAgYmVmb3JlKCgpID0+IHtcbiAgICB1cmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWVsaW5lJ1xuICAgIGJhc2VVcmwgPSAnaHR0cHM6Ly9naXRodWIuY29tLydcbiAgICBmZXRjaGVkRGF0YSA9IHsgZGF0YTogJzx4bWw+c29tZSBkYXRhPC94bWw+Jywgb3RoZXJGaWVsZDogJ290aGVyRmllbGQnIH1cbiAgICBqc29uRGF0YSA9IHtcbiAgICAgIGZlZWQ6IHtcbiAgICAgICAgZW50cnk6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogWyd0YWc6Z2l0aHViLmNvbSwyMDA4Oklzc3VlQ29tbWVudEV2ZW50LzczMTkyNzg4MjUnXSxcbiAgICAgICAgICAgIGF1dGhvcjogW3tcbiAgICAgICAgICAgICAgbmFtZTogWydhbnNpYm90J10sXG4gICAgICAgICAgICAgIHVyaTogWydodHRwczovL2dpdGh1Yi5jb20vYW5zaWJvdCddXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IFsnMjAxOC0wMy0wMVQyMzo1ODozNVonXSxcbiAgICAgICAgICAgIG90aGVyRmllbGRzOiBbe1xuICAgICAgICAgICAgICBvdGhlckZpZWxkMTogWydvdGhlckZpZWxkMSddLFxuICAgICAgICAgICAgICBvdGhlckZpZWxkMjogWydvdGhlckZpZWxkMiddXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpBbm90aGVyRXZlbnQvNzMxOTI3ODgyNiddLFxuICAgICAgICAgICAgYXV0aG9yOiBbe1xuICAgICAgICAgICAgICBuYW1lOiBbJ2Fub3RoZXJBdXRob3InXSxcbiAgICAgICAgICAgICAgdXJpOiBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbm90aGVyQXV0aG9yJ11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdXBkYXRlZDogWycyMDE1LTA0LTAyVDIxOjE4OjI1WiddLFxuICAgICAgICAgICAgb3RoZXJGaWVsZHM6IFt7XG4gICAgICAgICAgICAgIG90aGVyRmllbGQxOiBbJ290aGVyRmllbGQyJ10sXG4gICAgICAgICAgICAgIG90aGVyRmllbGQyOiBbJ290aGVyRmllbGQzJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIHJlcXVpcmVkRGF0YVNldCA9IFtcbiAgICAgIHtcbiAgICAgICAgZXZlbnQ6ICdJc3N1ZUNvbW1lbnRFdmVudCcsXG4gICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgIG5hbWU6ICdhbnNpYm90JyxcbiAgICAgICAgICB1cmk6ICdhbnNpYm90J1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVUaW1lOiBuZXcgRGF0ZShEYXRlLnBhcnNlKCcyMDE4LTAzLTAxVDIzOjU4OjM1WicpKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZXZlbnQ6ICdBbm90aGVyRXZlbnQnLFxuICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICBuYW1lOiAnYW5vdGhlckF1dGhvcicsXG4gICAgICAgICAgdXJpOiAnYW5vdGhlckF1dGhvcidcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlVGltZTogbmV3IERhdGUoRGF0ZS5wYXJzZSgnMjAxNS0wNC0wMlQyMToxODoyNVonKSlcbiAgICAgIH1cbiAgICBdXG4gICAgcmVwbGllcyA9IFtcbiAgICAgIHtcbiAgICAgICAgcmVxdWVzdFRva2VuOiAnMTIzNCcsXG4gICAgICAgIHN1Y2NlZWRlZDogdHJ1ZSxcbiAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJlcXVlc3RUb2tlbjogJzU2NzgnLFxuICAgICAgICBzdWNjZWVkZWQ6IGZhbHNlLFxuICAgICAgICBlcnJvcjogbmV3IEVycm9yKCdlcnInKVxuICAgICAgfVxuICAgIF1cbiAgfSlcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBnZXRCYXNlVXJsID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICBmZXRjaERhdGEgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIGNvbnZlcnRYTUxUb0pTT04gPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIHNhdmVEYXRhID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICBtb2NrcyA9IFsgZ2V0QmFzZVVybCwgZmV0Y2hEYXRhLCBjb252ZXJ0WE1MVG9KU09OLCBzYXZlRGF0YSBdXG4gICAgZ2V0QmFzZVVybC5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwpLnJlc29sdmVzKGJhc2VVcmwpXG4gICAgZmV0Y2hEYXRhLm9uY2UoKS53aXRoRXhhY3RBcmdzKHVybCkucmVzb2x2ZXMoZmV0Y2hlZERhdGEpXG4gICAgY29udmVydFhNTFRvSlNPTi5vbmNlKCkud2l0aEV4YWN0QXJncyhmZXRjaGVkRGF0YS5kYXRhKS5yZXNvbHZlcyhqc29uRGF0YSlcbiAgICBzYXZlRGF0YS5vbmNlKCkud2l0aEV4YWN0QXJncyhyZXF1aXJlZERhdGFTZXQpLnJlc29sdmVzKHJlcGxpZXMpXG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICBkZXNjcmliZSgnV2hlbiBzY3JhcGluZycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgc2NyYXBlKFxuICAgICAgICB7IHVybCwgZ2V0QmFzZVVybCwgZmV0Y2hEYXRhLCBjb252ZXJ0WE1MVG9KU09OLCBzYXZlRGF0YSB9XG4gICAgICApKCkuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgIGl0KCdzaG91bGQgcGVyc2lzdCBkYXRhJywgKCkgPT5cbiAgICAgIHNjcmFwZShcbiAgICAgICAgeyB1cmwsIGdldEJhc2VVcmwsIGZldGNoRGF0YSwgY29udmVydFhNTFRvSlNPTiwgc2F2ZURhdGEgfVxuICAgICAgKSgpLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsVG8ocmVwbGllcykpXG4gIH0pXG59KVxuIl19