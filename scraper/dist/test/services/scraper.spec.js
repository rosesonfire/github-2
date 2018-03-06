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
    getBaseUrl = (0, _plainOldMockObject2.default)();
    fetchData = (0, _plainOldMockObject2.default)();
    xmlToJsonConverter = (0, _plainOldMockObject2.default)();
    redisODM = (0, _redisODM2.default)();
    redisModelObject = (0, _redisODM.redisModelObjectMock)();
    mocks = [getBaseUrl, fetchData, xmlToJsonConverter, redisODM.create, redisModelObject.save];
    getBaseUrl.once().withExactArgs({ url: url }).resolves(baseUrl);
    fetchData.once().withExactArgs({ url: url }).resolves(fetchedData);
    xmlToJsonConverter.once().withExactArgs({ xml: fetchedData.data });
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
        xmlToJsonConverter.resolves(singleJsonData);
        redisODM.create.once().withExactArgs(singlePassedData).returns(redisModelObject);
        redisModelObject.save.once().withExactArgs().resolves(positiveReply);
      });

      // eslint-disable-next-line no-undef
      it('should return a promise', function () {
        return (0, _scraper2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, xmlToJsonConverter: xmlToJsonConverter, odm: redisODM })().should.be.a('promise');
      });

      // eslint-disable-next-line no-undef
      it('should persist single data', function () {
        return (0, _scraper2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, xmlToJsonConverter: xmlToJsonConverter, odm: redisODM })().should.eventually.equalTo([positiveReply]);
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
        return (0, _scraper2.default)({ url: url, getBaseUrl: getBaseUrl, fetchData: fetchData, xmlToJsonConverter: xmlToJsonConverter, odm: redisODM })().should.eventually.equalTo(multipleJsonData.feed.entry.map(function (en) {
          return positiveReply;
        }));
      });
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL3NjcmFwZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwiZ2V0QmFzZVVybCIsImZldGNoRGF0YSIsInhtbFRvSnNvbkNvbnZlcnRlciIsInJlZGlzT0RNIiwicmVkaXNNb2RlbE9iamVjdCIsInVybCIsImJhc2VVcmwiLCJmZXRjaGVkRGF0YSIsInNpbmdsZUpzb25EYXRhIiwibXVsdGlwbGVKc29uRGF0YSIsInNpbmdsZVBhc3NlZERhdGEiLCJwb3NpdGl2ZVJlcGx5IiwiYmVmb3JlIiwiZGF0YSIsIm90aGVyRmllbGQiLCJmZWVkIiwiZW50cnkiLCJpZCIsImF1dGhvciIsIm5hbWUiLCJ1cmkiLCJ1cGRhdGVkIiwib3RoZXJGaWVsZHMiLCJvdGhlckZpZWxkMSIsIm90aGVyRmllbGQyIiwia2V5IiwiZXZlbnQiLCJ1cGRhdGVUaW1lIiwiRGF0ZSIsInBhcnNlIiwiYmVmb3JlRWFjaCIsImNyZWF0ZSIsInNhdmUiLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJlc29sdmVzIiwieG1sIiwiYWZ0ZXJFYWNoIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJyZXR1cm5zIiwiaXQiLCJvZG0iLCJzaG91bGQiLCJiZSIsImEiLCJldmVudHVhbGx5IiwiZXF1YWxUbyIsImV4YWN0bHkiLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBOztBQUpBO0FBSkE7QUFTQUEsU0FBUyxTQUFULEVBQW9CLFlBQU07QUFDeEIsTUFDRUMsY0FERjtBQUFBLE1BRUVDLG1CQUZGO0FBQUEsTUFHRUMsa0JBSEY7QUFBQSxNQUlFQywyQkFKRjtBQUFBLE1BS0VDLGlCQUxGO0FBQUEsTUFNRUMseUJBTkY7QUFBQSxNQU9FQyxZQVBGO0FBQUEsTUFRRUMsZ0JBUkY7QUFBQSxNQVNFQyxvQkFURjtBQUFBLE1BVUVDLHVCQVZGO0FBQUEs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R2YsUUFESCxDQUNZeEIsYUFEWjtBQUVELE9BTkQ7O0FBUUE7QUFDQStCLFNBQUcsNkJBQUgsRUFBa0M7QUFBQSxlQUNoQyx1QkFDRSxFQUFFckMsUUFBRixFQUFPTCxzQkFBUCxFQUFtQkMsb0JBQW5CLEVBQThCQyxzQ0FBOUIsRUFBa0R5QyxLQUFLeEMsUUFBdkQsRUFERixJQUVJeUMsTUFGSixDQUVXRyxVQUZYLENBR0dDLE9BSEgsQ0FHV3ZDLGlCQUFpQk0sSUFBakIsQ0FBc0JDLEtBQXRCLENBQTRCbUMsR0FBNUIsQ0FBZ0M7QUFBQSxpQkFBTXhDLGFBQU47QUFBQSxTQUFoQyxDQUhYLENBRGdDO0FBQUEsT0FBbEM7QUFLRCxLQWhCRDtBQWlCRCxHQTFDRDtBQTJDRCxDQWhKRDtBQVBBIiwiZmlsZSI6InNjcmFwZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGV4cGVjdCBmcm9tICcuLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHNjcmFwZXIgZnJvbSAnLi8uLi8uLi9tYWluL3NlcnZpY2VzL3NjcmFwZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkTW9ja09iamVjdCBmcm9tICcuLy4uL21vY2tzL290aGVycy9wbGFpbk9sZE1vY2tPYmplY3QnXG5pbXBvcnQgcmVkaXNPRE1Nb2NrLCB7IHJlZGlzTW9kZWxPYmplY3RNb2NrIH0gZnJvbSAnLi8uLi9tb2Nrcy9saWIvb2RtL3JlZGlzT0RNJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdTY3JhcGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICBnZXRCYXNlVXJsLFxuICAgIGZldGNoRGF0YSxcbiAgICB4bWxUb0pzb25Db252ZXJ0ZXIsXG4gICAgcmVkaXNPRE0sXG4gICAgcmVkaXNNb2RlbE9iamVjdCxcbiAgICB1cmwsXG4gICAgYmFzZVVybCxcbiAgICBmZXRjaGVkRGF0YSxcbiAgICBzaW5nbGVKc29uRGF0YSxcbiAgICBtdWx0aXBsZUpzb25EYXRhLFxuICAgIHNpbmdsZVBhc3NlZERhdGEsXG4gICAgcG9zaXRpdmVSZXBseVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmUoKCkgPT4ge1xuICAgIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vdGltZWxpbmUnXG4gICAgYmFzZVVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vJ1xuICAgIGZldGNoZWREYXRhID0geyBkYXRhOiAnPHhtbD5zb21lIGRhdGE8L3htbD4nLCBvdGhlckZpZWxkOiAnb3RoZXJGaWVsZCcgfVxuICAgIHNpbmdsZUpzb25EYXRhID0ge1xuICAgICAgZmVlZDoge1xuICAgICAgICBlbnRyeTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBbJ3RhZzpnaXRodWIuY29tLDIwMDg6SXNzdWVDb21tZW50RXZlbnQvNzMxOTI3ODgyNSddLFxuICAgICAgICAgICAgYXV0aG9yOiBbe1xuICAgICAgICAgICAgICBuYW1lOiBbJ2Fuc2lib3QnXSxcbiAgICAgICAgICAgICAgdXJpOiBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbnNpYm90J11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdXBkYXRlZDogWycyMDE4LTAzLTAxVDIzOjU4OjM1WiddLFxuICAgICAgICAgICAgb3RoZXJGaWVsZHM6IFt7XG4gICAgICAgICAgICAgIG90aGVyRmllbGQxOiBbJ290aGVyRmllbGQxJ10sXG4gICAgICAgICAgICAgIG90aGVyRmllbGQyOiBbJ290aGVyRmllbGQyJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIG11bHRpcGxlSnNvbkRhdGEgPSB7XG4gICAgICBmZWVkOiB7XG4gICAgICAgIGVudHJ5OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpJc3N1ZUNvbW1lbnRFdmVudC83MzE5Mjc4ODI1J10sXG4gICAgICAgICAgICBhdXRob3I6IFt7XG4gICAgICAgICAgICAgIG5hbWU6IFsnYW5zaWJvdCddLFxuICAgICAgICAgICAgICB1cmk6IFsnaHR0cHM6Ly9naXRodWIuY29tL2Fuc2lib3QnXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB1cGRhdGVkOiBbJzIwMTgtMDMtMDFUMjM6NTg6MzVaJ10sXG4gICAgICAgICAgICBvdGhlckZpZWxkczogW3tcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDE6IFsnb3RoZXJGaWVsZDEnXSxcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDI6IFsnb3RoZXJGaWVsZDInXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBbJ3RhZzpnaXRodWIuY29tLDIwMDg6QW5vdGhlckV2ZW50LzczMTkyNzg4MjYnXSxcbiAgICAgICAgICAgIGF1dGhvcjogW3tcbiAgICAgICAgICAgICAgbmFtZTogWydhbm90aGVyQXV0aG9yJ10sXG4gICAgICAgICAgICAgIHVyaTogWydodHRwczovL2dpdGh1Yi5jb20vYW5vdGhlckF1dGhvciddXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IFsnMjAxNS0yMy0wMlQyMToxODoyNVonXSxcbiAgICAgICAgICAgIG90aGVyRmllbGRzOiBbe1xuICAgICAgICAgICAgICBvdGhlckZpZWxkMTogWydvdGhlckZpZWxkMiddLFxuICAgICAgICAgICAgICBvdGhlckZpZWxkMjogWydvdGhlckZpZWxkMyddXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgICBzaW5nbGVQYXNzZWREYXRhID0ge1xuICAgICAga2V5OiAnYW5zaWJvdCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGV2ZW50OiAnSXNzdWVDb21tZW50RXZlbnQnLFxuICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICBuYW1lOiAnYW5zaWJvdCcsXG4gICAgICAgICAgdXJpOiAnYW5zaWJvdCdcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlVGltZTogbmV3IERhdGUoRGF0ZS5wYXJzZSgnMjAxOC0wMy0wMVQyMzo1ODozNVonKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcG9zaXRpdmVSZXBseSA9ICdPSydcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgZ2V0QmFzZVVybCA9IHBsYWluT2xkTW9ja09iamVjdCgpXG4gICAgZmV0Y2hEYXRhID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICB4bWxUb0pzb25Db252ZXJ0ZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIHJlZGlzT0RNID0gcmVkaXNPRE1Nb2NrKClcbiAgICByZWRpc01vZGVsT2JqZWN0ID0gcmVkaXNNb2RlbE9iamVjdE1vY2soKVxuICAgIG1vY2tzID0gWyBnZXRCYXNlVXJsLCBmZXRjaERhdGEsIHhtbFRvSnNvbkNvbnZlcnRlciwgcmVkaXNPRE0uY3JlYXRlLFxuICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlIF1cbiAgICBnZXRCYXNlVXJsLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgdXJsIH0pLnJlc29sdmVzKGJhc2VVcmwpXG4gICAgZmV0Y2hEYXRhLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgdXJsIH0pLnJlc29sdmVzKGZldGNoZWREYXRhKVxuICAgIHhtbFRvSnNvbkNvbnZlcnRlci5vbmNlKCkud2l0aEV4YWN0QXJncyh7IHhtbDogZmV0Y2hlZERhdGEuZGF0YSB9KVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IG1vY2sudmVyaWZ5KCkpKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjYWxsaW5nIHNjcmFwZXInLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgZGVzY3JpYmUoJ1doZW4gZmV0Y2hpbmcgc2luZ2xlIGRhdGEnLCAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICB4bWxUb0pzb25Db252ZXJ0ZXIucmVzb2x2ZXMoc2luZ2xlSnNvbkRhdGEpXG4gICAgICAgIHJlZGlzT0RNLmNyZWF0ZS5vbmNlKCkud2l0aEV4YWN0QXJncyhzaW5nbGVQYXNzZWREYXRhKVxuICAgICAgICAgIC5yZXR1cm5zKHJlZGlzTW9kZWxPYmplY3QpXG4gICAgICAgIHJlZGlzTW9kZWxPYmplY3Quc2F2ZS5vbmNlKCkud2l0aEV4YWN0QXJncygpLnJlc29sdmVzKHBvc2l0aXZlUmVwbHkpXG4gICAgICB9KVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICAgIHNjcmFwZXIoXG4gICAgICAgICAgeyB1cmwsIGdldEJhc2VVcmwsIGZldGNoRGF0YSwgeG1sVG9Kc29uQ29udmVydGVyLCBvZG06IHJlZGlzT0RNIH1cbiAgICAgICAgKSgpLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IHNpbmdsZSBkYXRhJywgKCkgPT5cbiAgICAgICAgc2NyYXBlcihcbiAgICAgICAgICB7IHVybCwgZ2V0QmFzZVVybCwgZmV0Y2hEYXRhLCB4bWxUb0pzb25Db252ZXJ0ZXIsIG9kbTogcmVkaXNPRE0gfVxuICAgICAgICApKCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWxUbyhbcG9zaXRpdmVSZXBseV0pKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBtdWx0aXBsZSBkYXRhJywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgeG1sVG9Kc29uQ29udmVydGVyLnJlc29sdmVzKG11bHRpcGxlSnNvbkRhdGEpXG4gICAgICAgIHJlZGlzT0RNLmNyZWF0ZS5leGFjdGx5KG11bHRpcGxlSnNvbkRhdGEuZmVlZC5lbnRyeS5sZW5ndGgpXG4gICAgICAgICAgLnJldHVybnMocmVkaXNNb2RlbE9iamVjdClcbiAgICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlLmV4YWN0bHkobXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lmxlbmd0aClcbiAgICAgICAgICAucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IG11dGlwbGUgZGF0YScsICgpID0+XG4gICAgICAgIHNjcmFwZXIoXG4gICAgICAgICAgeyB1cmwsIGdldEJhc2VVcmwsIGZldGNoRGF0YSwgeG1sVG9Kc29uQ29udmVydGVyLCBvZG06IHJlZGlzT0RNIH1cbiAgICAgICAgKSgpLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgICAgLmVxdWFsVG8obXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lm1hcChlbiA9PiBwb3NpdGl2ZVJlcGx5KSkpXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=