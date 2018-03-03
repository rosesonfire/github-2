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
      singleRequiredData = void 0,
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
    singleRequiredData = {
      event: 'IssueCommentEvent',
      author: {
        name: 'ansibot',
        uri: 'ansibot'
      },
      updateTime: new Date(Date.parse('2018-03-01T23:58:35Z'))
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
    baseUrlGetter.once().withExactArgs(url).resolves(baseUrl);
    dataFetcher.once().withExactArgs(url).resolves(fetchedData);
    xmlToJsonConverter.once().withExactArgs(fetchedData.data);
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
        redisODM.create.once().withExactArgs(singleRequiredData).returns(redisModelObject);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi9zY3JhcGVyLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJtb2NrcyIsImJhc2VVcmxHZXR0ZXIiLCJkYXRhRmV0Y2hlciIsInhtbFRvSnNvbkNvbnZlcnRlciIsInJlZGlzT0RNIiwicmVkaXNNb2RlbE9iamVjdCIsInVybCIsImJhc2VVcmwiLCJmZXRjaGVkRGF0YSIsInNpbmdsZUpzb25EYXRhIiwibXVsdGlwbGVKc29uRGF0YSIsInNpbmdsZVJlcXVpcmVkRGF0YSIsInBvc2l0aXZlUmVwbHkiLCJiZWZvcmUiLCJkYXRhIiwib3RoZXJGaWVsZCIsImZlZWQiLCJlbnRyeSIsImlkIiwiYXV0aG9yIiwibmFtZSIsInVyaSIsInVwZGF0ZWQiLCJvdGhlckZpZWxkcyIsIm90aGVyRmllbGQxIiwib3RoZXJGaWVsZDIiLCJldmVudCIsInVwZGF0ZVRpbWUiLCJEYXRlIiwicGFyc2UiLCJiZWZvcmVFYWNoIiwiY3JlYXRlIiwic2F2ZSIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmVzb2x2ZXMiLCJhZnRlckVhY2giLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsInJldHVybnMiLCJpdCIsIm9kbSIsInNob3VsZCIsImJlIiwiYSIsImV2ZW50dWFsbHkiLCJlcXVhbFRvIiwiZXhhY3RseSIsImxlbmd0aCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUE7O0FBSkE7QUFKQTtBQVNBQSxTQUFTLFVBQVQsRUFBcUIsWUFBTTtBQUN6QixNQUNFQyxjQURGO0FBQUEsTUFFRUMsc0JBRkY7QUFBQSxNQUdFQyxvQkFIRjtBQUFBLE1BSUVDLDJCQUpGO0FBQUEsTUFLRUMsaUJBTEY7QUFBQSxNQU1FQyx5QkFORjtBQUFBLE1BT0VDLFlBUEY7QUFBQSxNQVFFQyxnQkFSRjtBQUFBLE1BU0VDLG9CQVRGO0FBQUEsTUFVRUMsdUJBVkY7QUFBQSxNQVdFQyx5QkFY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LEVBQUVuQyxRQUFGLEVBQU9MLDRCQUFQLEVBQXNCQyx3QkFBdEIsRUFBbUNDLHNDQUFuQyxFQUF1RHVDLEtBQUt0QyxRQUE1RCxFQURGLEVBRUV1QyxNQUZGLENBRVNHLFVBRlQsQ0FHR0MsT0FISCxDQUdXckMsaUJBQWlCTSxJQUFqQixDQUFzQkMsS0FBdEIsQ0FBNEJpQyxHQUE1QixDQUFnQztBQUFBLGlCQUFNdEMsYUFBTjtBQUFBLFNBQWhDLENBSFgsQ0FEZ0M7QUFBQSxPQUFsQztBQUtELEtBaEJEO0FBaUJELEdBMUNEO0FBMkNELENBN0lEO0FBUEEiLCJmaWxlIjoic2NyYXBlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZXhwZWN0IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgc2NyYXBlciBmcm9tICcuLy4uLy4uL21haW4vbGliL3NjcmFwZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkTW9ja09iamVjdCBmcm9tICcuLy4uL21vY2tzL290aGVycy9wbGFpbk9sZE1vY2tPYmplY3QnXG5pbXBvcnQgcmVkaXNPRE1Nb2NrLCB7IHJlZGlzTW9kZWxPYmplY3RNb2NrIH0gZnJvbSAnLi8uLi9tb2Nrcy9saWIvb2RtL3JlZGlzT0RNJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdTY3JhcHBlcicsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgYmFzZVVybEdldHRlcixcbiAgICBkYXRhRmV0Y2hlcixcbiAgICB4bWxUb0pzb25Db252ZXJ0ZXIsXG4gICAgcmVkaXNPRE0sXG4gICAgcmVkaXNNb2RlbE9iamVjdCxcbiAgICB1cmwsXG4gICAgYmFzZVVybCxcbiAgICBmZXRjaGVkRGF0YSxcbiAgICBzaW5nbGVKc29uRGF0YSxcbiAgICBtdWx0aXBsZUpzb25EYXRhLFxuICAgIHNpbmdsZVJlcXVpcmVkRGF0YSxcbiAgICBwb3NpdGl2ZVJlcGx5XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lbGluZSdcbiAgICBiYXNlVXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nXG4gICAgZmV0Y2hlZERhdGEgPSB7IGRhdGE6ICc8eG1sPnNvbWUgZGF0YTwveG1sPicsIG90aGVyRmllbGQ6ICdvdGhlckZpZWxkJyB9XG4gICAgc2luZ2xlSnNvbkRhdGEgPSB7XG4gICAgICBmZWVkOiB7XG4gICAgICAgIGVudHJ5OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpJc3N1ZUNvbW1lbnRFdmVudC83MzE5Mjc4ODI1J10sXG4gICAgICAgICAgICBhdXRob3I6IFt7XG4gICAgICAgICAgICAgIG5hbWU6IFsnYW5zaWJvdCddLFxuICAgICAgICAgICAgICB1cmk6IFsnaHR0cHM6Ly9naXRodWIuY29tL2Fuc2lib3QnXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB1cGRhdGVkOiBbJzIwMTgtMDMtMDFUMjM6NTg6MzVaJ10sXG4gICAgICAgICAgICBvdGhlckZpZWxkczogW3tcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDE6IFsnb3RoZXJGaWVsZDEnXSxcbiAgICAgICAgICAgICAgb3RoZXJGaWVsZDI6IFsnb3RoZXJGaWVsZDInXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gICAgbXVsdGlwbGVKc29uRGF0YSA9IHtcbiAgICAgIGZlZWQ6IHtcbiAgICAgICAgZW50cnk6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogWyd0YWc6Z2l0aHViLmNvbSwyMDA4Oklzc3VlQ29tbWVudEV2ZW50LzczMTkyNzg4MjUnXSxcbiAgICAgICAgICAgIGF1dGhvcjogW3tcbiAgICAgICAgICAgICAgbmFtZTogWydhbnNpYm90J10sXG4gICAgICAgICAgICAgIHVyaTogWydodHRwczovL2dpdGh1Yi5jb20vYW5zaWJvdCddXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IFsnMjAxOC0wMy0wMVQyMzo1ODozNVonXSxcbiAgICAgICAgICAgIG90aGVyRmllbGRzOiBbe1xuICAgICAgICAgICAgICBvdGhlckZpZWxkMTogWydvdGhlckZpZWxkMSddLFxuICAgICAgICAgICAgICBvdGhlckZpZWxkMjogWydvdGhlckZpZWxkMiddXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFsndGFnOmdpdGh1Yi5jb20sMjAwODpBbm90aGVyRXZlbnQvNzMxOTI3ODgyNiddLFxuICAgICAgICAgICAgYXV0aG9yOiBbe1xuICAgICAgICAgICAgICBuYW1lOiBbJ2Fub3RoZXJBdXRob3InXSxcbiAgICAgICAgICAgICAgdXJpOiBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbm90aGVyQXV0aG9yJ11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdXBkYXRlZDogWycyMDE1LTIzLTAyVDIxOjE4OjI1WiddLFxuICAgICAgICAgICAgb3RoZXJGaWVsZHM6IFt7XG4gICAgICAgICAgICAgIG90aGVyRmllbGQxOiBbJ290aGVyRmllbGQyJ10sXG4gICAgICAgICAgICAgIG90aGVyRmllbGQyOiBbJ290aGVyRmllbGQzJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIHNpbmdsZVJlcXVpcmVkRGF0YSA9IHtcbiAgICAgIGV2ZW50OiAnSXNzdWVDb21tZW50RXZlbnQnLFxuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIG5hbWU6ICdhbnNpYm90JyxcbiAgICAgICAgdXJpOiAnYW5zaWJvdCdcbiAgICAgIH0sXG4gICAgICB1cGRhdGVUaW1lOiBuZXcgRGF0ZShEYXRlLnBhcnNlKCcyMDE4LTAzLTAxVDIzOjU4OjM1WicpKVxuICAgIH1cbiAgICBwb3NpdGl2ZVJlcGx5ID0gJ09LJ1xuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBiYXNlVXJsR2V0dGVyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICBkYXRhRmV0Y2hlciA9IHBsYWluT2xkTW9ja09iamVjdCgpXG4gICAgeG1sVG9Kc29uQ29udmVydGVyID0gcGxhaW5PbGRNb2NrT2JqZWN0KClcbiAgICByZWRpc09ETSA9IHJlZGlzT0RNTW9jaygpXG4gICAgcmVkaXNNb2RlbE9iamVjdCA9IHJlZGlzTW9kZWxPYmplY3RNb2NrKClcbiAgICBtb2NrcyA9IFsgYmFzZVVybEdldHRlciwgZGF0YUZldGNoZXIsIHhtbFRvSnNvbkNvbnZlcnRlciwgcmVkaXNPRE0uY3JlYXRlLFxuICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlIF1cbiAgICBiYXNlVXJsR2V0dGVyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHVybCkucmVzb2x2ZXMoYmFzZVVybClcbiAgICBkYXRhRmV0Y2hlci5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwpLnJlc29sdmVzKGZldGNoZWREYXRhKVxuICAgIHhtbFRvSnNvbkNvbnZlcnRlci5vbmNlKCkud2l0aEV4YWN0QXJncyhmZXRjaGVkRGF0YS5kYXRhKVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IG1vY2sudmVyaWZ5KCkpKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjYWxsaW5nIHNjcmFwcGVyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGRlc2NyaWJlKCdXaGVuIGZldGNoaW5nIHNpbmdsZSBkYXRhJywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgeG1sVG9Kc29uQ29udmVydGVyLnJlc29sdmVzKHNpbmdsZUpzb25EYXRhKVxuICAgICAgICByZWRpc09ETS5jcmVhdGUub25jZSgpLndpdGhFeGFjdEFyZ3Moc2luZ2xlUmVxdWlyZWREYXRhKVxuICAgICAgICAgIC5yZXR1cm5zKHJlZGlzTW9kZWxPYmplY3QpXG4gICAgICAgIHJlZGlzTW9kZWxPYmplY3Quc2F2ZS5vbmNlKCkud2l0aEV4YWN0QXJncygpLnJlc29sdmVzKHBvc2l0aXZlUmVwbHkpXG4gICAgICB9KVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICAgIHNjcmFwZXIoXG4gICAgICAgICAgeyB1cmwsIGJhc2VVcmxHZXR0ZXIsIGRhdGFGZXRjaGVyLCB4bWxUb0pzb25Db252ZXJ0ZXIsIG9kbTogcmVkaXNPRE0gfVxuICAgICAgICApLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IHNpbmdsZSBkYXRhJywgKCkgPT5cbiAgICAgICAgc2NyYXBlcihcbiAgICAgICAgICB7IHVybCwgYmFzZVVybEdldHRlciwgZGF0YUZldGNoZXIsIHhtbFRvSnNvbkNvbnZlcnRlciwgb2RtOiByZWRpc09ETSB9XG4gICAgICAgICkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWxUbyhbcG9zaXRpdmVSZXBseV0pKVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBkZXNjcmliZSgnV2hlbiBmZXRjaGluZyBtdWx0aXBsZSBkYXRhJywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgeG1sVG9Kc29uQ29udmVydGVyLnJlc29sdmVzKG11bHRpcGxlSnNvbkRhdGEpXG4gICAgICAgIHJlZGlzT0RNLmNyZWF0ZS5leGFjdGx5KG11bHRpcGxlSnNvbkRhdGEuZmVlZC5lbnRyeS5sZW5ndGgpXG4gICAgICAgICAgLnJldHVybnMocmVkaXNNb2RlbE9iamVjdClcbiAgICAgICAgcmVkaXNNb2RlbE9iamVjdC5zYXZlLmV4YWN0bHkobXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lmxlbmd0aClcbiAgICAgICAgICAucmVzb2x2ZXMocG9zaXRpdmVSZXBseSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgaXQoJ3Nob3VsZCBwZXJzaXN0IG11dGlwbGUgZGF0YScsICgpID0+XG4gICAgICAgIHNjcmFwZXIoXG4gICAgICAgICAgeyB1cmwsIGJhc2VVcmxHZXR0ZXIsIGRhdGFGZXRjaGVyLCB4bWxUb0pzb25Db252ZXJ0ZXIsIG9kbTogcmVkaXNPRE0gfVxuICAgICAgICApLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgICAgLmVxdWFsVG8obXVsdGlwbGVKc29uRGF0YS5mZWVkLmVudHJ5Lm1hcChlbiA9PiBwb3NpdGl2ZVJlcGx5KSkpXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=