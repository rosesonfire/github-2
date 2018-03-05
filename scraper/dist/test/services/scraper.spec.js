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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL3NjcmFwZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIm1vY2tzIiwiYmFzZVVybEdldHRlciIsImRhdGFGZXRjaGVyIiwieG1sVG9Kc29uQ29udmVydGVyIiwicmVkaXNPRE0iLCJyZWRpc01vZGVsT2JqZWN0IiwidXJsIiwiYmFzZVVybCIsImZldGNoZWREYXRhIiwic2luZ2xlSnNvbkRhdGEiLCJtdWx0aXBsZUpzb25EYXRhIiwic2luZ2xlUGFzc2VkRGF0YSIsInBvc2l0aXZlUmVwbHkiLCJiZWZvcmUiLCJkYXRhIiwib3RoZXJGaWVsZCIsImZlZWQiLCJlbnRyeSIsImlkIiwiYXV0aG9yIiwibmFtZSIsInVyaSIsInVwZGF0ZWQiLCJvdGhlckZpZWxkcyIsIm90aGVyRmllbGQxIiwib3RoZXJGaWVsZDIiLCJrZXkiLCJldmVudCIsInVwZGF0ZVRpbWUiLCJEYXRlIiwicGFyc2UiLCJiZWZvcmVFYWNoIiwiY3JlYXRlIiwic2F2ZSIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmVzb2x2ZXMiLCJ4bWwiLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsInJldHVybnMiLCJpdCIsIm9kbSIsInNob3VsZCIsImJlIiwiYSIsImV2ZW50dWFsbHkiLCJlcXVhbFRvIiwiZXhhY3RseSIsImxlbmd0aCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUE7O0FBSkE7QUFKQTtBQVNBQSxTQUFTLFNBQVQsRUFBb0IsWUFBTTtBQUN4QixNQUNFQyxjQURGO0FBQUEsTUFFRUMsc0JBRkY7QUFBQSxNQUdFQyxvQkFIRjtBQUFBLE1BSUVDLDJCQUpGO0FBQUEsTUFLRUMsaUJBTEY7QUFBQSxNQU1FQyx5QkFORjtBQUFBLE1BT0VDLFlBUEY7QUFBQSxNQVFFQyxnQkFSRjtBQUFBLE1BU0VDLG9CQVRGO0FBQUEsTUFVRUMsdUJBVkY7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QyxNQUExRCxFQUNHZixRQURILENBQ1l4QixhQURaO0FBRUQsT0FORDs7QUFRQTtBQUNBK0IsU0FBRyw2QkFBSCxFQUFrQztBQUFBLGVBQ2hDLHVCQUNFLEVBQUVyQyxRQUFGLEVBQU9MLDRCQUFQLEVBQXNCQyx3QkFBdEIsRUFBbUNDLHNDQUFuQyxFQUF1RHlDLEtBQUt4QyxRQUE1RCxFQURGLElBRUl5QyxNQUZKLENBRVdHLFVBRlgsQ0FHR0MsT0FISCxDQUdXdkMsaUJBQWlCTSxJQUFqQixDQUFzQkMsS0FBdEIsQ0FBNEJtQyxHQUE1QixDQUFnQztBQUFBLGlCQUFNeEMsYUFBTjtBQUFBLFNBQWhDLENBSFgsQ0FEZ0M7QUFBQSxPQUFsQztBQUtELEtBaEJEO0FBaUJELEdBMUNEO0FBMkNELENBaEpEO0FBUEEiLCJmaWxlIjoic2NyYXBlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgc2NyYXBlciBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvc2NyYXBlcidcbi8vIG1vY2tzXG5pbXBvcnQgcGxhaW5PbGRNb2NrT2JqZWN0IGZyb20gJy4vLi4vbW9ja3Mvb3RoZXJzL3BsYWluT2xkTW9ja09iamVjdCdcbmltcG9ydCByZWRpc09ETU1vY2ssIHsgcmVkaXNNb2RlbE9iamVjdE1vY2sgfSBmcm9tICcuLy4uL21vY2tzL2xpYi9vZG0vcmVkaXNPRE0nXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuZGVzY3JpYmUoJ1NjcmFwZXInLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIGJhc2VVcmxHZXR0ZXIsXG4gICAgZGF0YUZldGNoZXIsXG4gICAgeG1sVG9Kc29uQ29udmVydGVyLFxuICAgIHJlZGlzT0RNLFxuICAgIHJlZGlzTW9kZWxPYmplY3QsXG4gICAgdXJsLFxuICAgIGJhc2VVcmwsXG4gICAgZmV0Y2hlZERhdGEsXG4gICAgc2luZ2xlSnNvbkRhdGEsXG4gICAgbXVsdGlwbGVKc29uRGF0YSxcbiAgICBzaW5nbGVQYXNzZWREYXRhLFxuICAgIHBvc2l0aXZlUmVwbHlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYmVmb3JlKCgpID0+IHtcbiAgICB1cmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWVsaW5lJ1xuICAgIGJhc2VVcmwgPSAnaHR0cHM6Ly9naXRodWIuY29tLydcbiAgICBmZXRjaGVkRGF0YSA9IHsgZGF0YTogJzx4bWw+c29tZSBkYXRhPC94bWw+Jywgb3RoZXJGaWVsZDogJ290aGVyRmllbGQnIH1cbiAgICBzaW5nbGVKc29uRGF0YSA9IHtcbiAgICAgIGZlZWQ6IHtcbiAgICAgICAgZW50cnk6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogWyd0YWc6Z2l0aHViLmNvbSwyMDA4Oklzc3VlQ29tbWVudEV2ZW50LzczMTkyNzg4MjUnXSxcbiAgICAgICAgICAgIGF1dGhvcjogW3tcbiAgICAgICAgICAgICAgbmFtZTogWydhbnNpYm90J10sXG4gICAgICAgICAgICAgIHVyaTogWydodHRwczovL2dpdGh1Yi5jb20vYW5zaWJvdCddXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IFsnMjAxOC0wMy0wMVQyMzo1ODozNVonXSxcbiAgICAgICAgICAgIG90aGVyRmllbGRzOiBbe1xuICAgICAgICAgICAgICBvdGhlckZpZWxkMTogWydvdGhlckZpZWxkMSddLFxuICAgICAgICAgICAgICBvdGhlckZpZWxkMjogWydvdGhlckZpZWxkMiddXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgICBtdWx0aXBsZUpzb25EYXRhID0ge1xuICAgICAgZmVlZDoge1xuICAgICAgICBlbnRyeTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBbJ3RhZzpnaXRodWIuY29tLDIwMDg6SXNzdWVDb21tZW50RXZlbnQvNzMxOTI3ODgyNSddLFxuICAgICAgICAgICAgYXV0aG9yOiBbe1xuICAgICAgICAgICAgICBuYW1lOiBbJ2Fuc2lib3QnXSxcbiAgICAgICAgICAgICAgdXJpOiBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbnNpYm90J11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdXBkYXRlZDogWycyMDE4LTAzLTAxVDIzOjU4OjM1WiddLFxuICAgICAgICAgICAgb3RoZXJGaWVsZHM6IFt7XG4gICAgICAgICAgICAgIG90aGVyRmllbGQxOiBbJ290aGVyRmllbGQxJ10sXG4gICAgICAgICAgICAgIG90aGVyRmllbGQyOiBbJ290aGVyRmllbGQyJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogWyd0YWc6Z2l0aHViLmNvbSwyMDA4OkFub3RoZXJFdmVudC83MzE5Mjc4ODI2J10sXG4gICAgICAgICAgICBhdXRob3I6IFt7XG4gICAgICAgICAgICAgIG5hbWU6IFsnYW5vdGhlckF1dGhvciddLFxuICAgICAgICAgICAgICB1cmk6IFsnaHR0cHM6Ly9naXRodWIuY29tL2Fub3RoZXJBdXRob3InXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB1cGRhdGVkOiBbJzIwMTUtMjMtMDJUMjE6MTg6MjVaJ10sXG4gICAgICAgICAgICBvdGhlckZpZWxkczogW3tcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDE6IFsnb3RoZXJGaWVsZDInXSxcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDI6IFsnb3RoZXJGaWVsZDMnXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gICAgc2luZ2xlUGFzc2VkRGF0YSA9IHtcbiAgICAgIGtleTogJ2Fuc2lib3QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBldmVudDogJ0lzc3VlQ29tbWVudEV2ZW50JyxcbiAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgbmFtZTogJ2Fuc2lib3QnLFxuICAgICAgICAgIHVyaTogJ2Fuc2lib3QnXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVRpbWU6IG5ldyBEYXRlKERhdGUucGFyc2UoJzIwMTgtMDMtMDFUMjM6NTg6MzVaJykpXG4gICAgICB9XG4gICAgfVxuICAgIHBvc2l0aXZlUmVwbHkgPSAnT0snXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGJhc2VVcmxHZXR0ZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIGRhdGFGZXRjaGVyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICB4bWxUb0pzb25Db252ZXJ0ZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuICAgIHJlZGlzT0RNID0gcmVkaXNPRE1Nb2NrKClcbiAgICByZWRpc01vZGVsT2JqZWN0ID0gcmVkaXNNb2RlbE9iamVjdE1vY2soKVxuICAgIG1vY2tzID0gWyBiYXNlVXJsR2V0dGVyLCBkYXRhRmV0Y2hlciwgeG1sVG9Kc29uQ29udmVydGVyLCByZWRpc09ETS5jcmVhdGUsXG4gICAgICByZWRpc01vZGVsT2JqZWN0LnNhdmUgXVxuICAgIGJhc2VVcmxHZXR0ZXIub25jZSgpLndpdGhFeGFjdEFyZ3MoeyB1cmwgfSkucmVzb2x2ZXMoYmFzZVVybClcbiAgICBkYXRhRmV0Y2hlci5vbmNlKCkud2l0aEV4YWN0QXJncyh7IHVybCB9KS5yZXNvbHZlcyhmZXRjaGVkRGF0YSlcbiAgICB4bWxUb0pzb25Db252ZXJ0ZXIub25jZSgpLndpdGhFeGFjdEFyZ3MoeyB4bWw6IGZldGNoZWREYXRhLmRhdGEgfSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gY2FsbGluZyBzY3JhcGVyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIGZldGNoaW5nIHNpbmdsZSBkYXRhJywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgeG1sVG9Kc29uQ29udmVydGVyLnJlc29sdmVzKHNpbmdsZUpzb25EYXRhKVxuICAgICAgICByZWRpc09ETS5jcmVhdGUub25jZSgpLndpdGhFeGFjdEFyZ3Moc2luZ2xlUGFzc2VkRGF0YSlcbiAgICAgICAgICAucmV0dXJucyhyZWRpc01vZGVsT2JqZWN0KVxuICAgICAgICByZWRpc01vZGVsT2JqZWN0LnNhdmUub25jZSgpLndpdGhFeGFjdEFyZ3MoKS5yZXNvbHZlcyhwb3NpdGl2ZVJlcGx5KVxuICAgICAgfSlcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgICBzY3JhcGVyKFxuICAgICAgICAgIHsgdXJsLCBiYXNlVXJsR2V0dGVyLCBkYXRhRmV0Y2hlciwgeG1sVG9Kc29uQ29udmVydGVyLCBvZG06IHJlZGlzT0RNIH1cbiAgICAgICAgKSgpLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IHNpbmdsZSBkYXRhJywgKCkgPT5cbiAgICAgICAgc2NyYXBlcihcbiAgICAgICAgICB7IHVybCwgYmFzZVVybEdldHRlciwgZGF0YUZldGNoZXIsIHhtbFRvSnNvbkNvbnZlcnRlciwgb2RtOiByZWRpc09ETSB9XG4gICAgICAgICkoKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbFRvKFtwb3NpdGl2ZVJlcGx5XSkpXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIGZldGNoaW5nIG11bHRpcGxlIGRhdGEnLCAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICB4bWxUb0pzb25Db252ZXJ0ZXIucmVzb2x2ZXMobXVsdGlwbGVKc29uRGF0YSlcbiAgICAgICAgcmVkaXNPRE0uY3JlYXRlLmV4YWN0bHkobXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lmxlbmd0aClcbiAgICAgICAgICAucmV0dXJucyhyZWRpc01vZGVsT2JqZWN0KVxuICAgICAgICByZWRpc01vZGVsT2JqZWN0LnNhdmUuZXhhY3RseShtdWx0aXBsZUpzb25EYXRhLmZlZWQuZW50cnkubGVuZ3RoKVxuICAgICAgICAgIC5yZXNvbHZlcyhwb3NpdGl2ZVJlcGx5KVxuICAgICAgfSlcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpdCgnc2hvdWxkIHBlcnNpc3QgbXV0aXBsZSBkYXRhJywgKCkgPT5cbiAgICAgICAgc2NyYXBlcihcbiAgICAgICAgICB7IHVybCwgYmFzZVVybEdldHRlciwgZGF0YUZldGNoZXIsIHhtbFRvSnNvbkNvbnZlcnRlciwgb2RtOiByZWRpc09ETSB9XG4gICAgICAgICkoKS5zaG91bGQuZXZlbnR1YWxseVxuICAgICAgICAgIC5lcXVhbFRvKG11bHRpcGxlSnNvbkRhdGEuZmVlZC5lbnRyeS5tYXAoZW4gPT4gcG9zaXRpdmVSZXBseSkpKVxuICAgIH0pXG4gIH0pXG59KVxuIl19