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
    getBaseUrl = (0, _plainOldMockObject2.default)();
    dataFetcher = (0, _plainOldMockObject2.default)();
    xmlToJsonConverter = (0, _plainOldMockObject2.default)();
    redisODM = (0, _redisODM2.default)();
    redisModelObject = (0, _redisODM.redisModelObjectMock)();
    mocks = [getBaseUrl, dataFetcher, xmlToJsonConverter, redisODM.create, redisModelObject.save];
    getBaseUrl.once().withExactArgs({ url: url }).resolves(baseUrl);
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
        return (0, _scraper2.default)({ url: url, getBaseUrl: getBaseUrl, dataFetcher: dataFetcher, xmlToJsonConverter: xmlToJsonConverter, odm: redisODM })().should.be.a('promise');
      });

      // eslint-disable-next-line no-undef
      it('should persist single data', function () {
        return (0, _scraper2.default)({ url: url, getBaseUrl: getBaseUrl, dataFetcher: dataFetcher, xmlToJsonConverter: xmlToJsonConverter, odm: redisODM })().should.eventually.equalTo([positiveReply]);
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
        return (0, _scraper2.default)({ url: url, getBaseUrl: getBaseUrl, dataFetcher: dataFetcher, xmlToJsonConverter: xmlToJsonConverter, odm: redisODM })().should.eventually.equalTo(multipleJsonData.feed.entry.map(function (en) {
          return positiveReply;
        }));
      });
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL3NjcmFwZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwiZ2V0QmFzZVVybCIsImRhdGFGZXRjaGVyIiwieG1sVG9Kc29uQ29udmVydGVyIiwicmVkaXNPRE0iLCJyZWRpc01vZGVsT2JqZWN0IiwidXJsIiwiYmFzZVVybCIsImZldGNoZWREYXRhIiwic2luZ2xlSnNvbkRhdGEiLCJtdWx0aXBsZUpzb25EYXRhIiwic2luZ2xlUGFzc2VkRGF0YSIsInBvc2l0aXZlUmVwbHkiLCJiZWZvcmUiLCJkYXRhIiwib3RoZXJGaWVsZCIsImZlZWQiLCJlbnRyeSIsImlkIiwiYXV0aG9yIiwibmFtZSIsInVyaSIsInVwZGF0ZWQiLCJvdGhlckZpZWxkcyIsIm90aGVyRmllbGQxIiwib3RoZXJGaWVsZDIiLCJrZXkiLCJldmVudCIsInVwZGF0ZVRpbWUiLCJEYXRlIiwicGFyc2UiLCJiZWZvcmVFYWNoIiwiY3JlYXRlIiwic2F2ZSIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmVzb2x2ZXMiLCJ4bWwiLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsInJldHVybnMiLCJpdCIsIm9kbSIsInNob3VsZCIsImJlIiwiYSIsImV2ZW50dWFsbHkiLCJlcXVhbFRvIiwiZXhhY3RseSIsImxlbmd0aCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUE7O0FBSkE7QUFKQTtBQVNBQSxTQUFTLFNBQVQsRUFBb0IsWUFBTTtBQUN4QixNQUNFQyxjQURGO0FBQUEsTUFFRUMsbUJBRkY7QUFBQSxNQUdFQyxvQkFIRjtBQUFBLE1BSUVDLDJCQUpGO0FBQUEsTUFLRUMsaUJBTEY7QUFBQSxNQU1FQyx5QkFORjtBQUFBLE1BT0VDLFlBUEY7QUFBQSxNQVFFQyxnQkFSRjtBQUFBLE1BU0VDLG9CQVRGO0FBQUEsTUFVRUMsdUJBVkY7QUFB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RUFDR2YsUUFESCxDQUNZeEIsYUFEWjtBQUVELE9BTkQ7O0FBUUE7QUFDQStCLFNBQUcsNkJBQUgsRUFBa0M7QUFBQSxlQUNoQyx1QkFDRSxFQUFFckMsUUFBRixFQUFPTCxzQkFBUCxFQUFtQkMsd0JBQW5CLEVBQWdDQyxzQ0FBaEMsRUFBb0R5QyxLQUFLeEMsUUFBekQsRUFERixJQUVJeUMsTUFGSixDQUVXRyxVQUZYLENBR0dDLE9BSEgsQ0FHV3ZDLGlCQUFpQk0sSUFBakIsQ0FBc0JDLEtBQXRCLENBQTRCbUMsR0FBNUIsQ0FBZ0M7QUFBQSxpQkFBTXhDLGFBQU47QUFBQSxTQUFoQyxDQUhYLENBRGdDO0FBQUEsT0FBbEM7QUFLRCxLQWhCRDtBQWlCRCxHQTFDRDtBQTJDRCxDQWhKRDtBQVBBIiwiZmlsZSI6InNjcmFwZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGV4cGVjdCBmcm9tICcuLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHNjcmFwZXIgZnJvbSAnLi8uLi8uLi9tYWluL3NlcnZpY2VzL3NjcmFwZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkTW9ja09iamVjdCBmcm9tICcuLy4uL21vY2tzL290aGVycy9wbGFpbk9sZE1vY2tPYmplY3QnXG5pbXBvcnQgcmVkaXNPRE1Nb2NrLCB7IHJlZGlzTW9kZWxPYmplY3RNb2NrIH0gZnJvbSAnLi8uLi9tb2Nrcy9saWIvb2RtL3JlZGlzT0RNJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdTY3JhcGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICBnZXRCYXNlVXJsLFxuICAgIGRhdGFGZXRjaGVyLFxuICAgIHhtbFRvSnNvbkNvbnZlcnRlcixcbiAgICByZWRpc09ETSxcbiAgICByZWRpc01vZGVsT2JqZWN0LFxuICAgIHVybCxcbiAgICBiYXNlVXJsLFxuICAgIGZldGNoZWREYXRhLFxuICAgIHNpbmdsZUpzb25EYXRhLFxuICAgIG11bHRpcGxlSnNvbkRhdGEsXG4gICAgc2luZ2xlUGFzc2VkRGF0YSxcbiAgICBwb3NpdGl2ZVJlcGx5XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lbGluZSdcbiAgICBiYXNlVXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nXG4gICAgZmV0Y2hlZERhdGEgPSB7IGRhdGE6ICc8eG1sPnNvbWUgZGF0YTwveG1sPicsIG90aGVyRmllbGQ6ICdvdGhlckZpZWxkJyB9XG4gICAgc2luZ2xlSnNvbkRhdGEgPSB7XG4gICAgICBmZWVkOiB7XG4gICAgICAgIGVudHJ5OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpJc3N1ZUNvbW1lbnRFdmVudC83MzE5Mjc4ODI1J10sXG4gICAgICAgICAgICBhdXRob3I6IFt7XG4gICAgICAgICAgICAgIG5hbWU6IFsnYW5zaWJvdCddLFxuICAgICAgICAgICAgICB1cmk6IFsnaHR0cHM6Ly9naXRodWIuY29tL2Fuc2lib3QnXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB1cGRhdGVkOiBbJzIwMTgtMDMtMDFUMjM6NTg6MzVaJ10sXG4gICAgICAgICAgICBvdGhlckZpZWxkczogW3tcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDE6IFsnb3RoZXJGaWVsZDEnXSxcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDI6IFsnb3RoZXJGaWVsZDInXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gICAgbXVsdGlwbGVKc29uRGF0YSA9IHtcbiAgICAgIGZlZWQ6IHtcbiAgICAgICAgZW50cnk6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogWyd0YWc6Z2l0aHViLmNvbSwyMDA4Oklzc3VlQ29tbWVudEV2ZW50LzczMTkyNzg4MjUnXSxcbiAgICAgICAgICAgIGF1dGhvcjogW3tcbiAgICAgICAgICAgICAgbmFtZTogWydhbnNpYm90J10sXG4gICAgICAgICAgICAgIHVyaTogWydodHRwczovL2dpdGh1Yi5jb20vYW5zaWJvdCddXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IFsnMjAxOC0wMy0wMVQyMzo1ODozNVonXSxcbiAgICAgICAgICAgIG90aGVyRmllbGRzOiBbe1xuICAgICAgICAgICAgICBvdGhlckZpZWxkMTogWydvdGhlckZpZWxkMSddLFxuICAgICAgICAgICAgICBvdGhlckZpZWxkMjogWydvdGhlckZpZWxkMiddXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpBbm90aGVyRXZlbnQvNzMxOTI3ODgyNiddLFxuICAgICAgICAgICAgYXV0aG9yOiBbe1xuICAgICAgICAgICAgICBuYW1lOiBbJ2Fub3RoZXJBdXRob3InXSxcbiAgICAgICAgICAgICAgdXJpOiBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbm90aGVyQXV0aG9yJ11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdXBkYXRlZDogWycyMDE1LTIzLTAyVDIxOjE4OjI1WiddLFxuICAgICAgICAgICAgb3RoZXJGaWVsZHM6IFt7XG4gICAgICAgICAgICAgIG90aGVyRmllbGQxOiBbJ290aGVyRmllbGQyJ10sXG4gICAgICAgICAgICAgIG90aGVyRmllbGQyOiBbJ290aGVyRmllbGQzJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIHNpbmdsZVBhc3NlZERhdGEgPSB7XG4gICAgICBrZXk6ICdhbnNpYm90JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZXZlbnQ6ICdJc3N1ZUNvbW1lbnRFdmVudCcsXG4gICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgIG5hbWU6ICdhbnNpYm90JyxcbiAgICAgICAgICB1cmk6ICdhbnNpYm90J1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVUaW1lOiBuZXcgRGF0ZShEYXRlLnBhcnNlKCcyMDE4LTAzLTAxVDIzOjU4OjM1WicpKVxuICAgICAgfVxuICAgIH1cbiAgICBwb3NpdGl2ZVJlcGx5ID0gJ09LJ1xuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBnZXRCYXNlVXJsID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICBkYXRhRmV0Y2hlciA9IHBsYWluT2xkTW9ja09iamVjdCgpXG4gICAgeG1sVG9Kc29uQ29udmVydGVyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICByZWRpc09ETSA9IHJlZGlzT0RNTW9jaygpXG4gICAgcmVkaXNNb2RlbE9iamVjdCA9IHJlZGlzTW9kZWxPYmplY3RNb2NrKClcbiAgICBtb2NrcyA9IFsgZ2V0QmFzZVVybCwgZGF0YUZldGNoZXIsIHhtbFRvSnNvbkNvbnZlcnRlciwgcmVkaXNPRE0uY3JlYXRlLFxuICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlIF1cbiAgICBnZXRCYXNlVXJsLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgdXJsIH0pLnJlc29sdmVzKGJhc2VVcmwpXG4gICAgZGF0YUZldGNoZXIub25jZSgpLndpdGhFeGFjdEFyZ3MoeyB1cmwgfSkucmVzb2x2ZXMoZmV0Y2hlZERhdGEpXG4gICAgeG1sVG9Kc29uQ29udmVydGVyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHsgeG1sOiBmZXRjaGVkRGF0YS5kYXRhIH0pXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGRlc2NyaWJlKCdXaGVuIGNhbGxpbmcgc2NyYXBlcicsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBzaW5nbGUgZGF0YScsICgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHhtbFRvSnNvbkNvbnZlcnRlci5yZXNvbHZlcyhzaW5nbGVKc29uRGF0YSlcbiAgICAgICAgcmVkaXNPRE0uY3JlYXRlLm9uY2UoKS53aXRoRXhhY3RBcmdzKHNpbmdsZVBhc3NlZERhdGEpXG4gICAgICAgICAgLnJldHVybnMocmVkaXNNb2RlbE9iamVjdClcbiAgICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlLm9uY2UoKS53aXRoRXhhY3RBcmdzKCkucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9taXNlJywgKCkgPT5cbiAgICAgICAgc2NyYXBlcihcbiAgICAgICAgICB7IHVybCwgZ2V0QmFzZVVybCwgZGF0YUZldGNoZXIsIHhtbFRvSnNvbkNvbnZlcnRlciwgb2RtOiByZWRpc09ETSB9XG4gICAgICAgICkoKS5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGl0KCdzaG91bGQgcGVyc2lzdCBzaW5nbGUgZGF0YScsICgpID0+XG4gICAgICAgIHNjcmFwZXIoXG4gICAgICAgICAgeyB1cmwsIGdldEJhc2VVcmwsIGRhdGFGZXRjaGVyLCB4bWxUb0pzb25Db252ZXJ0ZXIsIG9kbTogcmVkaXNPRE0gfVxuICAgICAgICApKCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWxUbyhbcG9zaXRpdmVSZXBseV0pKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBtdWx0aXBsZSBkYXRhJywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgeG1sVG9Kc29uQ29udmVydGVyLnJlc29sdmVzKG11bHRpcGxlSnNvbkRhdGEpXG4gICAgICAgIHJlZGlzT0RNLmNyZWF0ZS5leGFjdGx5KG11bHRpcGxlSnNvbkRhdGEuZmVlZC5lbnRyeS5sZW5ndGgpXG4gICAgICAgICAgLnJldHVybnMocmVkaXNNb2RlbE9iamVjdClcbiAgICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlLmV4YWN0bHkobXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lmxlbmd0aClcbiAgICAgICAgICAucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IG11dGlwbGUgZGF0YScsICgpID0+XG4gICAgICAgIHNjcmFwZXIoXG4gICAgICAgICAgeyB1cmwsIGdldEJhc2VVcmwsIGRhdGFGZXRjaGVyLCB4bWxUb0pzb25Db252ZXJ0ZXIsIG9kbTogcmVkaXNPRE0gfVxuICAgICAgICApKCkuc2hvdWxkLmV2ZW50dWFsbHlcbiAgICAgICAgICAuZXF1YWxUbyhtdWx0aXBsZUpzb25EYXRhLmZlZWQuZW50cnkubWFwKGVuID0+IHBvc2l0aXZlUmVwbHkpKSlcbiAgICB9KVxuICB9KVxufSlcbiJdfQ==