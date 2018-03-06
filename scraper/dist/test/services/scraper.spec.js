'use strict';

var _setup = require('./../setup');

var _setup2 = _interopRequireDefault(_setup);

var _scraper = require('./../../main/services/scraper');

var _scraper2 = _interopRequireDefault(_scraper);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

var _redisODM = require('./../mocks/lib/odm/redisODM');

var _redisODM2 = _interopRequireDefault(_redisODM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-undef

// mocks
// eslint-disable-next-line no-unused-vars
describe('Scraper', function () {
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
  describe('When calling scraper', function () {
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
        return (0, _scraper2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, convertXMLToJSON: convertXMLToJSON, odm: redisODM })().should.be.a('promise');
      });

      // eslint-disable-next-line no-undef
      it('should persist single data', function () {
        return (0, _scraper2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, convertXMLToJSON: convertXMLToJSON, odm: redisODM })().should.eventually.equalTo([positiveReply]);
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
        return (0, _scraper2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, convertXMLToJSON: convertXMLToJSON, odm: redisODM })().should.eventually.equalTo(multipleJsonData.feed.entry.map(function (en) {
          return positiveReply;
        }));
      });
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL3NjcmFwZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwiZ2V0QmFzZVVybCIsImZldGNoRGF0YSIsImNvbnZlcnRYTUxUb0pTT04iLCJyZWRpc09ETSIsInJlZGlzTW9kZWxPYmplY3QiLCJ1cmwiLCJiYXNlVXJsIiwiZmV0Y2hlZERhdGEiLCJzaW5nbGVKc29uRGF0YSIsIm11bHRpcGxlSnNvbkRhdGEiLCJzaW5nbGVQYXNzZWREYXRhIiwicG9zaXRpdmVSZXBseSIsImJlZm9yZSIsImRhdGEiLCJvdGhlckZpZWxkIiwiZmVlZCIsImVudHJ5IiwiaWQiLCJhdXRob3IiLCJuYW1lIiwidXJpIiwidXBkYXRlZCIsIm90aGVyRmllbGRzIiwib3RoZXJGaWVsZDEiLCJvdGhlckZpZWxkMiIsImtleSIsImV2ZW50IiwidXBkYXRlVGltZSIsIkRhdGUiLCJwYXJzZSIsImJlZm9yZUVhY2giLCJjcmVhdGUiLCJzYXZlIiwib25jZSIsIndpdGhFeGFjdEFyZ3MiLCJyZXNvbHZlcyIsInhtbCIsImFmdGVyRWFjaCIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwicmV0dXJucyIsIml0Iiwib2RtIiwic2hvdWxkIiwiYmUiLCJhIiwiZXZlbnR1YWxseSIsImVxdWFsVG8iLCJleGFjdGx5IiwibGVuZ3RoIiwibWFwIl0sIm1hcHBpbmdzIjoiOztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQTs7QUFKQTtBQUpBO0FBU0FBLFNBQVMsU0FBVCxFQUFvQixZQUFNO0FBQ3hCLE1BQ0VDLGNBREY7QUFBQSxNQUVFQyxtQkFGRjtBQUFBLE1BR0VDLGtCQUhGO0FBQUEsTUFJRUMseUJBSkY7QUFBQSxNQUtFQyxpQkFMRjtBQUFBLE1BTUVDLHlCQU5GO0FBQUEsTUFPRUMsWUFQRjtBQUFBLE1BUUVDLGdCQVJGO0FBQUEsTUFTRUMsb0JBVEY7QUFBQSxNQVVFQyx1QkFWRjtBQUFBLE1B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LFFBREgsQ0FDWXhCLGFBRFo7QUFFRCxPQU5EOztBQVFBO0FBQ0ErQixTQUFHLDZCQUFILEVBQWtDO0FBQUEsZUFDaEMsdUJBQ0UsRUFBRXJDLFFBQUYsRUFBT0wsc0JBQVAsRUFBbUJDLG9CQUFuQixFQUE4QkMsa0NBQTlCLEVBQWdEeUMsS0FBS3hDLFFBQXJELEVBREYsSUFFSXlDLE1BRkosQ0FFV0csVUFGWCxDQUdHQyxPQUhILENBR1d2QyxpQkFBaUJNLElBQWpCLENBQXNCQyxLQUF0QixDQUE0Qm1DLEdBQTVCLENBQWdDO0FBQUEsaUJBQU14QyxhQUFOO0FBQUEsU0FBaEMsQ0FIWCxDQURnQztBQUFBLE9BQWxDO0FBS0QsS0FoQkQ7QUFpQkQsR0ExQ0Q7QUEyQ0QsQ0FoSkQ7QUFQQSIsImZpbGUiOiJzY3JhcGVyLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBleHBlY3QgZnJvbSAnLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCBzY3JhcGVyIGZyb20gJy4vLi4vLi4vbWFpbi9zZXJ2aWNlcy9zY3JhcGVyJ1xuLy8gbW9ja3NcbmltcG9ydCBwbGFpbk9sZE1vY2tPYmplY3QgZnJvbSAnLi8uLi9tb2Nrcy9vdGhlcnMvcGxhaW5PbGRNb2NrT2JqZWN0J1xuaW1wb3J0IHJlZGlzT0RNTW9jaywgeyByZWRpc01vZGVsT2JqZWN0TW9jayB9IGZyb20gJy4vLi4vbW9ja3MvbGliL29kbS9yZWRpc09ETSdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5kZXNjcmliZSgnU2NyYXBlcicsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgZ2V0QmFzZVVybCxcbiAgICBmZXRjaERhdGEsXG4gICAgY29udmVydFhNTFRvSlNPTixcbiAgICByZWRpc09ETSxcbiAgICByZWRpc01vZGVsT2JqZWN0LFxuICAgIHVybCxcbiAgICBiYXNlVXJsLFxuICAgIGZldGNoZWREYXRhLFxuICAgIHNpbmdsZUpzb25EYXRhLFxuICAgIG11bHRpcGxlSnNvbkRhdGEsXG4gICAgc2luZ2xlUGFzc2VkRGF0YSxcbiAgICBwb3NpdGl2ZVJlcGx5XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lbGluZSdcbiAgICBiYXNlVXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nXG4gICAgZmV0Y2hlZERhdGEgPSB7IGRhdGE6ICc8eG1sPnNvbWUgZGF0YTwveG1sPicsIG90aGVyRmllbGQ6ICdvdGhlckZpZWxkJyB9XG4gICAgc2luZ2xlSnNvbkRhdGEgPSB7XG4gICAgICBmZWVkOiB7XG4gICAgICAgIGVudHJ5OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpJc3N1ZUNvbW1lbnRFdmVudC83MzE5Mjc4ODI1J10sXG4gICAgICAgICAgICBhdXRob3I6IFt7XG4gICAgICAgICAgICAgIG5hbWU6IFsnYW5zaWJvdCddLFxuICAgICAgICAgICAgICB1cmk6IFsnaHR0cHM6Ly9naXRodWIuY29tL2Fuc2lib3QnXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB1cGRhdGVkOiBbJzIwMTgtMDMtMDFUMjM6NTg6MzVaJ10sXG4gICAgICAgICAgICBvdGhlckZpZWxkczogW3tcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDE6IFsnb3RoZXJGaWVsZDEnXSxcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDI6IFsnb3RoZXJGaWVsZDInXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gICAgbXVsdGlwbGVKc29uRGF0YSA9IHtcbiAgICAgIGZlZWQ6IHtcbiAgICAgICAgZW50cnk6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogWyd0YWc6Z2l0aHViLmNvbSwyMDA4Oklzc3VlQ29tbWVudEV2ZW50LzczMTkyNzg4MjUnXSxcbiAgICAgICAgICAgIGF1dGhvcjogW3tcbiAgICAgICAgICAgICAgbmFtZTogWydhbnNpYm90J10sXG4gICAgICAgICAgICAgIHVyaTogWydodHRwczovL2dpdGh1Yi5jb20vYW5zaWJvdCddXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IFsnMjAxOC0wMy0wMVQyMzo1ODozNVonXSxcbiAgICAgICAgICAgIG90aGVyRmllbGRzOiBbe1xuICAgICAgICAgICAgICBvdGhlckZpZWxkMTogWydvdGhlckZpZWxkMSddLFxuICAgICAgICAgICAgICBvdGhlckZpZWxkMjogWydvdGhlckZpZWxkMiddXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpBbm90aGVyRXZlbnQvNzMxOTI3ODgyNiddLFxuICAgICAgICAgICAgYXV0aG9yOiBbe1xuICAgICAgICAgICAgICBuYW1lOiBbJ2Fub3RoZXJBdXRob3InXSxcbiAgICAgICAgICAgICAgdXJpOiBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbm90aGVyQXV0aG9yJ11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdXBkYXRlZDogWycyMDE1LTIzLTAyVDIxOjE4OjI1WiddLFxuICAgICAgICAgICAgb3RoZXJGaWVsZHM6IFt7XG4gICAgICAgICAgICAgIG90aGVyRmllbGQxOiBbJ290aGVyRmllbGQyJ10sXG4gICAgICAgICAgICAgIG90aGVyRmllbGQyOiBbJ290aGVyRmllbGQzJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIHNpbmdsZVBhc3NlZERhdGEgPSB7XG4gICAgICBrZXk6ICdhbnNpYm90JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZXZlbnQ6ICdJc3N1ZUNvbW1lbnRFdmVudCcsXG4gICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgIG5hbWU6ICdhbnNpYm90JyxcbiAgICAgICAgICB1cmk6ICdhbnNpYm90J1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVUaW1lOiBuZXcgRGF0ZShEYXRlLnBhcnNlKCcyMDE4LTAzLTAxVDIzOjU4OjM1WicpKVxuICAgICAgfVxuICAgIH1cbiAgICBwb3NpdGl2ZVJlcGx5ID0gJ09LJ1xuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBnZXRCYXNlVXJsID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICBmZXRjaERhdGEgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIGNvbnZlcnRYTUxUb0pTT04gPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIHJlZGlzT0RNID0gcmVkaXNPRE1Nb2NrKClcbiAgICByZWRpc01vZGVsT2JqZWN0ID0gcmVkaXNNb2RlbE9iamVjdE1vY2soKVxuICAgIG1vY2tzID0gWyBnZXRCYXNlVXJsLCBmZXRjaERhdGEsIGNvbnZlcnRYTUxUb0pTT04sIHJlZGlzT0RNLmNyZWF0ZSxcbiAgICAgIHJlZGlzTW9kZWxPYmplY3Quc2F2ZSBdXG4gICAgZ2V0QmFzZVVybC5vbmNlKCkud2l0aEV4YWN0QXJncyh7IHVybCB9KS5yZXNvbHZlcyhiYXNlVXJsKVxuICAgIGZldGNoRGF0YS5vbmNlKCkud2l0aEV4YWN0QXJncyh7IHVybCB9KS5yZXNvbHZlcyhmZXRjaGVkRGF0YSlcbiAgICBjb252ZXJ0WE1MVG9KU09OLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgeG1sOiBmZXRjaGVkRGF0YS5kYXRhIH0pXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGNhbGxpbmcgc2NyYXBlcicsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBzaW5nbGUgZGF0YScsICgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIGNvbnZlcnRYTUxUb0pTT04ucmVzb2x2ZXMoc2luZ2xlSnNvbkRhdGEpXG4gICAgICAgIHJlZGlzT0RNLmNyZWF0ZS5vbmNlKCkud2l0aEV4YWN0QXJncyhzaW5nbGVQYXNzZWREYXRhKVxuICAgICAgICAgIC5yZXR1cm5zKHJlZGlzTW9kZWxPYmplY3QpXG4gICAgICAgIHJlZGlzTW9kZWxPYmplY3Quc2F2ZS5vbmNlKCkud2l0aEV4YWN0QXJncygpLnJlc29sdmVzKHBvc2l0aXZlUmVwbHkpXG4gICAgICB9KVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICAgIHNjcmFwZXIoXG4gICAgICAgICAgeyB1cmwsIGdldEJhc2VVcmwsIGZldGNoRGF0YSwgY29udmVydFhNTFRvSlNPTiwgb2RtOiByZWRpc09ETSB9XG4gICAgICAgICkoKS5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGl0KCdzaG91bGQgcGVyc2lzdCBzaW5nbGUgZGF0YScsICgpID0+XG4gICAgICAgIHNjcmFwZXIoXG4gICAgICAgICAgeyB1cmwsIGdldEJhc2VVcmwsIGZldGNoRGF0YSwgY29udmVydFhNTFRvSlNPTiwgb2RtOiByZWRpc09ETSB9XG4gICAgICAgICkoKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbFRvKFtwb3NpdGl2ZVJlcGx5XSkpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIGZldGNoaW5nIG11bHRpcGxlIGRhdGEnLCAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICBjb252ZXJ0WE1MVG9KU09OLnJlc29sdmVzKG11bHRpcGxlSnNvbkRhdGEpXG4gICAgICAgIHJlZGlzT0RNLmNyZWF0ZS5leGFjdGx5KG11bHRpcGxlSnNvbkRhdGEuZmVlZC5lbnRyeS5sZW5ndGgpXG4gICAgICAgICAgLnJldHVybnMocmVkaXNNb2RlbE9iamVjdClcbiAgICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlLmV4YWN0bHkobXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lmxlbmd0aClcbiAgICAgICAgICAucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IG11dGlwbGUgZGF0YScsICgpID0+XG4gICAgICAgIHNjcmFwZXIoXG4gICAgICAgICAgeyB1cmwsIGdldEJhc2VVcmwsIGZldGNoRGF0YSwgY29udmVydFhNTFRvSlNPTiwgb2RtOiByZWRpc09ETSB9XG4gICAgICAgICkoKS5zaG91bGQuZXZlbnR1YWxseVxuICAgICAgICAgIC5lcXVhbFRvKG11bHRpcGxlSnNvbkRhdGEuZmVlZC5lbnRyeS5tYXAoZW4gPT4gcG9zaXRpdmVSZXBseSkpKVxuICAgIH0pXG4gIH0pXG59KVxuIl19