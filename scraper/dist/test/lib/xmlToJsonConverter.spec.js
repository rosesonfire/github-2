'use strict';

var _setup = require('./../setup');

var _setup2 = _interopRequireDefault(_setup);

var _xmlToJsonConverter = require('./../../main/lib/xmlToJsonConverter');

var _xmlToJsonConverter2 = _interopRequireDefault(_xmlToJsonConverter);

var _plainOldMockObject = require('./../mocks/others/plainOldMockObject');

var _plainOldMockObject2 = _interopRequireDefault(_plainOldMockObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
var converter = (0, _plainOldMockObject2.default)();
// mocks
// eslint-disable-next-line no-unused-vars

var asyncConverter = (0, _plainOldMockObject2.default)();

// eslint-disable-next-line no-undef
describe('XmlToJsonConverter', function () {
  var mocks = void 0,
      xml = void 0,
      jsonData = void 0;

  // eslint-disable-next-line no-undef
  before(function () {
    xml =
    /* eslint-disable */
    '<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xml:lang="en-US">\n  <id>tag:github.com,2008:/timeline</id>\n  <link type="text/html" rel="alternate" href="https://github.com/timeline" />\n  <link type="application/atom+xml" rel="self" href="https://github.com/timeline" />\n  <title>GitHub Public Timeline Feed</title>\n  <updated>2018-03-01T23:58:35Z</updated>\n  <entry>\n    <id>tag:github.com,2008:IssueCommentEvent/7319278825</id>\n    <published>2018-03-01T23:58:35Z</published>\n    <updated>2018-03-01T23:58:35Z</updated>\n    <link type="text/html" rel="alternate" href="https://github.com/ansible/ansible/pull/36931#issuecomment-369773515" />\n    <title type="html">ansibot commented on pull request ansible/ansible#36931</title>\n    <author>\n      <name>ansibot</name>\n      <email />\n      <uri>https://github.com/ansibot</uri>\n    </author>\n    <media:thumbnail height="30" width="30" url="https://avatars3.githubusercontent.com/u/6585283?s=30&amp;v=4" />\n    <content type="html">&lt;!-- issue_comment --&gt;\n&lt;div class="d-flex border-bottom border-gray-light py-3"&gt;\n  \n&lt;span class="position-relative mr-3"&gt;\n  &lt;a href="/ansibot" rel="noreferrer"&gt;&lt;img alt="@ansibot" class="avatar" height="32" src="https://avatars0.githubusercontent.com/u/6585283?s=64&amp;amp;v=4" width="32"&gt;&lt;/a&gt;\n&lt;/span&gt;\n\n  &lt;div class="d-flex flex-column width-full"&gt;\n    &lt;div&gt;\n      &lt;div class="d-flex flex-justify-between flex-items-baseline"&gt;\n        &lt;div&gt;\n          &lt;a href="/ansibot" class="link-gray-dark text-bold wb-break-all" data-ga-click="News feed, event click, Event click type:IssueCommentEvent target:actor" data-hydro-click-hmac="0b4c656b7b6559ca7cc93b318e042cf312ca3b7b2bc151806fb59a52ce1ff73d" data-hydro-click="{&amp;quot;event_type&amp;quot;:&amp;quot;news_feed.event.click&amp;quot;,&amp;quot;payload&amp;quot;:{&amp;quot;action_target&amp;quot;:&amp;quot;actor&amp;quot;,&amp;quot;event&amp;quot;:{&amp;quot;repo_id&amp;quot;:3638964,&amp;quot;actor_id&amp;quot;:6585283,&amp;quot;public&amp;quot;:true,&amp;quot;type&amp;quot;:&amp;quot;IssueCommentEvent&amp;quot;,&amp;quot;target_id&amp;quot;:null,&amp;quot;id&amp;quot;:7319278825,&amp;quot;additional_details_shown&amp;quot;:false},&amp;quot;org_id&amp;quot;:null,&amp;quot;originating_request_id&amp;quot;:&amp;quot;D108:869F:2AD6D14:3E2C216:5A9893AA&amp;quot;}}" rel="noreferrer"&gt;ansibot&lt;/a&gt; commented on pull request &lt;a href="/ansible/ansible/pull/36931#issuecomment-369773515" class="link-gray-dark text-bold" data-ga-click="News feed, event click, Event click type:IssueCommentEvent target:issue-comment" data-hydro-click-hmac="b86b9b2886e58465af52445692e372f5075f8190e9eec90cb8f8d60253b315a5" data-hydro-click="{&amp;quot;event_type&amp;quot;:&amp;quot;news_feed.event.click&amp;quot;,&amp;quot;payload&amp;quot;:{&amp;quot;action_target&amp;quot;:&amp;quot;issue-comment&amp;quot;,&amp;quot;event&amp;quot;:{&amp;quot;repo_id&amp;quot;:3638964,&amp;quot;actor_id&amp;quot;:6585283,&amp;quot;public&amp;quot;:true,&amp;quot;type&amp;quot;:&amp;quot;IssueCommentEvent&amp;quot;,&amp;quot;target_id&amp;quot;:null,&amp;quot;id&amp;quot;:7319278825,&amp;quot;additional_details_shown&amp;quot;:false},&amp;quot;org_id&amp;quot;:null,&amp;quot;originating_request_id&amp;quot;:&amp;quot;D108:869F:2AD6D14:3E2C216:5A9893AA&amp;quot;}}" title="postgresql_user: set encrypted as default and fix empty password reporting changed" rel="noreferrer"&gt;ansible/ansible#36931&lt;/a&gt;\n        &lt;/div&gt;\n        &lt;span class="f6 text-gray-light ml-4"&gt;\n          &lt;relative-time datetime="2018-03-01T23:58:35Z"&gt;Mar 2, 2018&lt;/relative-time&gt;\n        &lt;/span&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="message markdown-body mt-3"&gt;\n      &lt;blockquote&gt;\n        &lt;p&gt;cc &lt;a href="https://github.com/matburt" class="user-mention" rel="noreferrer"&gt;@matburt&lt;/a&gt; &lt;a href="https://github.com/nerzhul" class="user-mention" rel="noreferrer"&gt;@nerzhul&lt;/a&gt;\n&lt;a href="https://github.com/ansible/ansibullbot/blob/master/ISSUE_HELP.md" rel="noreferrer"&gt;click here for bot help&lt;/a&gt;\n&lt;/p&gt;\n      &lt;/blockquote&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;</content>\n  </entry>\n</feed>';
    /* eslint-enable */
    jsonData = {};
  });

  // eslint-disable-next-line no-undef
  afterEach(function () {
    return mocks.forEach(function (mock) {
      mock.verify();
      mock.reset();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When converting data with sync converter', function () {
    // eslint-disable-next-line no-undef
    before(function () {
      mocks = [converter];
    });

    // eslint-disable-next-line no-undef
    beforeEach(function () {
      return converter.once().withExactArgs(xml).returns(jsonData);
    });

    // eslint-disable-next-line no-undef
    it('should return a promise', function () {
      return (0, _xmlToJsonConverter2.default)({ converter: converter })({ xml: xml }).should.be.a('promise');
    });

    // eslint-disable-next-line no-undef
    it('should get converted data', async function () {
      return (await (0, _xmlToJsonConverter2.default)({ converter: converter })({ xml: xml })).should.equal(jsonData);
    });
  });

  // eslint-disable-next-line no-undef
  describe('When converting data with async converter', function () {
    // eslint-disable-next-line no-undef
    before(function () {
      mocks = [asyncConverter];
    });

    // eslint-disable-next-line no-undef
    beforeEach(function () {
      return asyncConverter.once().withExactArgs(xml).returns(Promise.resolve(jsonData));
    });

    // eslint-disable-next-line no-undef
    it('should get converted data', async function () {
      return (await (0, _xmlToJsonConverter2.default)({ converter: asyncConverter })({ xml: xml })).should.equal(jsonData);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2xpYi94bWxUb0pzb25Db252ZXJ0ZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0ZXIiLCJhc3luY0NvbnZlcnRlciIsImRlc2NyaWJlIiwibW9ja3MiLCJ4bWwiLCJqc29uRGF0YSIsImJlZm9yZSIsImFmdGVyRWFjaCIsImZvckVhY2giLCJtb2NrIiwidmVyaWZ5IiwicmVzZXQiLCJiZWZvcmVFYWNoIiwib25jZSIsIndpdGhFeGFjdEFyZ3MiLCJyZXR1cm5zIiwiaXQiLCJzaG91bGQiLCJiZSIsImEiLCJlcXVhbCIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7O0FBSEE7QUFJQSxJQUFNQSxZQUFZLG1DQUFsQjtBQUZBO0FBSkE7O0FBT0EsSUFBTUMsaUJBQWlCLG1DQUF2Qjs7QUFFQTtBQUNBQyxTQUFTLG9CQUFULEVBQStCLFlBQU07QUFDbkMsTUFDRUMsY0FERjtBQUFBLE1BRUVDLFlBRkY7QUFBQSxNQUdFQyxpQkFIRjs7QUFLQTtBQUNBQyxTQUFPLFlBQU07QUFDWEY7QUFDSjtBQURJO0FBa0RKO0FBQ0lDLGVBQVcsRUFBWDtBQUNELEdBckREOztBQXVEQTtBQUNBRSxZQUFVO0FBQUEsV0FBTUosTUFBTUssT0FBTixDQUFjLGdCQUFRO0FBQ3BDQyxXQUFLQyxNQUFMO0FBQ0FELFdBQUtFLEtBQUw7QUFDRCxLQUhlLENBQU47QUFBQSxHQUFWOztBQUtBO0FBQ0FULFdBQVMsMENBQVQsRUFBcUQsWUFBTTtBQUN6RDtBQUNBSSxXQUFPLFlBQU07QUFDWEgsY0FBUSxDQUFFSCxTQUFGLENBQVI7QUFDRCxLQUZEOztBQUlBO0FBQ0FZLGVBQVc7QUFBQSxhQUFNWixVQUFVYSxJQUFWLEdBQWlCQyxhQUFqQixDQUErQlYsR0FBL0IsRUFBb0NXLE9BQXBDLENBQTRDVixRQUE1QyxDQUFOO0FBQUEsS0FBWDs7QUFFQTtBQUNBVyxPQUFHLHlCQUFILEVBQThCO0FBQUEsYUFDNUIsa0NBQW1CLEVBQUVoQixvQkFBRixFQUFuQixFQUFrQyxFQUFFSSxRQUFGLEVBQWxDLEVBQTJDYSxNQUEzQyxDQUFrREMsRUFBbEQsQ0FBcURDLENBQXJELENBQXVELFNBQXZELENBRDRCO0FBQUEsS0FBOUI7O0FBR0E7QUFDQUgsT0FBRywyQkFBSCxFQUFnQztBQUFBLGFBQzlCLENBQUMsTUFBTSxrQ0FBbUIsRUFBRWhCLG9CQUFGLEVBQW5CLEVBQWtDLEVBQUVJLFFBQUYsRUFBbEMsQ0FBUCxFQUFtRGEsTUFBbkQsQ0FDR0csS0FESCxDQUNTZixRQURULENBRDhCO0FBQUEsS0FBaEM7QUFHRCxHQWpCRDs7QUFtQkE7QUFDQUgsV0FBUywyQ0FBVCxFQUFzRCxZQUFNO0FBQzFEO0FBQ0FJLFdBQU8sWUFBTTtBQUNYSCxjQUFRLENBQUVGLGNBQUYsQ0FBUjtBQUNELEtBRkQ7O0FBSUE7QUFDQVcsZUFBVztBQUFBLGFBQU1YLGVBQWVZLElBQWYsR0FBc0JDLGFBQXRCLENBQW9DVixHQUFwQyxFQUNkVyxPQURjLENBQ05NLFFBQVFDLE9BQVIsQ0FBZ0JqQixRQUFoQixDQURNLENBQU47QUFBQSxLQUFYOztBQUdBO0FBQ0FXLE9BQUcsMkJBQUgsRUFBZ0M7QUFBQSxhQUM5QixDQUFDLE1BQU0sa0NBQW1CLEVBQUVoQixXQUFXQyxjQUFiLEVBQW5CLEVBQWtELEVBQUVHLFFBQUYsRUFBbEQsQ0FBUCxFQUNHYSxNQURILENBQ1VHLEtBRFYsQ0FDZ0JmLFFBRGhCLENBRDhCO0FBQUEsS0FBaEM7QUFHRCxHQWREO0FBZUQsQ0F4R0QiLCJmaWxlIjoieG1sVG9Kc29uQ29udmVydGVyLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBleHBlY3QgZnJvbSAnLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCB4bWxUb0pzb25Db252ZXJ0ZXIgZnJvbSAnLi8uLi8uLi9tYWluL2xpYi94bWxUb0pzb25Db252ZXJ0ZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHBsYWluT2xkTW9ja09iamVjdCBmcm9tICcuLy4uL21vY2tzL290aGVycy9wbGFpbk9sZE1vY2tPYmplY3QnXG5jb25zdCBjb252ZXJ0ZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuY29uc3QgYXN5bmNDb252ZXJ0ZXIgPSBwbGFpbk9sZE1vY2tPYmplY3QoKVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmRlc2NyaWJlKCdYbWxUb0pzb25Db252ZXJ0ZXInLCAoKSA9PiB7XG4gIGxldFxuICAgIG1vY2tzLFxuICAgIHhtbCxcbiAgICBqc29uRGF0YVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBiZWZvcmUoKCkgPT4ge1xuICAgIHhtbCA9XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPGZlZWQgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDA1L0F0b21cIiB4bWxuczptZWRpYT1cImh0dHA6Ly9zZWFyY2gueWFob28uY29tL21yc3MvXCIgeG1sOmxhbmc9XCJlbi1VU1wiPlxuICA8aWQ+dGFnOmdpdGh1Yi5jb20sMjAwODovdGltZWxpbmU8L2lkPlxuICA8bGluayB0eXBlPVwidGV4dC9odG1sXCIgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90aW1lbGluZVwiIC8+XG4gIDxsaW5rIHR5cGU9XCJhcHBsaWNhdGlvbi9hdG9tK3htbFwiIHJlbD1cInNlbGZcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3RpbWVsaW5lXCIgLz5cbiAgPHRpdGxlPkdpdEh1YiBQdWJsaWMgVGltZWxpbmUgRmVlZDwvdGl0bGU+XG4gIDx1cGRhdGVkPjIwMTgtMDMtMDFUMjM6NTg6MzVaPC91cGRhdGVkPlxuICA8ZW50cnk+XG4gICAgPGlkPnRhZzpnaXRodWIuY29tLDIwMDg6SXNzdWVDb21tZW50RXZlbnQvNzMxOTI3ODgyNTwvaWQ+XG4gICAgPHB1Ymxpc2hlZD4yMDE4LTAzLTAxVDIzOjU4OjM1WjwvcHVibGlzaGVkPlxuICAgIDx1cGRhdGVkPjIwMTgtMDMtMDFUMjM6NTg6MzVaPC91cGRhdGVkPlxuICAgIDxsaW5rIHR5cGU9XCJ0ZXh0L2h0bWxcIiByZWw9XCJhbHRlcm5hdGVcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Fuc2libGUvYW5zaWJsZS9wdWxsLzM2OTMxI2lzc3VlY29tbWVudC0zNjk3NzM1MTVcIiAvPlxuICAgIDx0aXRsZSB0eXBlPVwiaHRtbFwiPmFuc2lib3QgY29tbWVudGVkIG9uIHB1bGwgcmVxdWVzdCBhbnNpYmxlL2Fuc2libGUjMzY5MzE8L3RpdGxlPlxuICAgIDxhdXRob3I+XG4gICAgICA8bmFtZT5hbnNpYm90PC9uYW1lPlxuICAgICAgPGVtYWlsIC8+XG4gICAgICA8dXJpPmh0dHBzOi8vZ2l0aHViLmNvbS9hbnNpYm90PC91cmk+XG4gICAgPC9hdXRob3I+XG4gICAgPG1lZGlhOnRodW1ibmFpbCBoZWlnaHQ9XCIzMFwiIHdpZHRoPVwiMzBcIiB1cmw9XCJodHRwczovL2F2YXRhcnMzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzY1ODUyODM/cz0zMCZhbXA7dj00XCIgLz5cbiAgICA8Y29udGVudCB0eXBlPVwiaHRtbFwiPiZsdDshLS0gaXNzdWVfY29tbWVudCAtLSZndDtcbiZsdDtkaXYgY2xhc3M9XCJkLWZsZXggYm9yZGVyLWJvdHRvbSBib3JkZXItZ3JheS1saWdodCBweS0zXCImZ3Q7XG4gIFxuJmx0O3NwYW4gY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtci0zXCImZ3Q7XG4gICZsdDthIGhyZWY9XCIvYW5zaWJvdFwiIHJlbD1cIm5vcmVmZXJyZXJcIiZndDsmbHQ7aW1nIGFsdD1cIkBhbnNpYm90XCIgY2xhc3M9XCJhdmF0YXJcIiBoZWlnaHQ9XCIzMlwiIHNyYz1cImh0dHBzOi8vYXZhdGFyczAuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjU4NTI4Mz9zPTY0JmFtcDthbXA7dj00XCIgd2lkdGg9XCIzMlwiJmd0OyZsdDsvYSZndDtcbiZsdDsvc3BhbiZndDtcblxuICAmbHQ7ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIHdpZHRoLWZ1bGxcIiZndDtcbiAgICAmbHQ7ZGl2Jmd0O1xuICAgICAgJmx0O2RpdiBjbGFzcz1cImQtZmxleCBmbGV4LWp1c3RpZnktYmV0d2VlbiBmbGV4LWl0ZW1zLWJhc2VsaW5lXCImZ3Q7XG4gICAgICAgICZsdDtkaXYmZ3Q7XG4gICAgICAgICAgJmx0O2EgaHJlZj1cIi9hbnNpYm90XCIgY2xhc3M9XCJsaW5rLWdyYXktZGFyayB0ZXh0LWJvbGQgd2ItYnJlYWstYWxsXCIgZGF0YS1nYS1jbGljaz1cIk5ld3MgZmVlZCwgZXZlbnQgY2xpY2ssIEV2ZW50IGNsaWNrIHR5cGU6SXNzdWVDb21tZW50RXZlbnQgdGFyZ2V0OmFjdG9yXCIgZGF0YS1oeWRyby1jbGljay1obWFjPVwiMGI0YzY1NmI3YjY1NTljYTdjYzkzYjMxOGUwNDJjZjMxMmNhM2I3YjJiYzE1MTgwNmZiNTlhNTJjZTFmZjczZFwiIGRhdGEtaHlkcm8tY2xpY2s9XCJ7JmFtcDtxdW90O2V2ZW50X3R5cGUmYW1wO3F1b3Q7OiZhbXA7cXVvdDtuZXdzX2ZlZWQuZXZlbnQuY2xpY2smYW1wO3F1b3Q7LCZhbXA7cXVvdDtwYXlsb2FkJmFtcDtxdW90Ozp7JmFtcDtxdW90O2FjdGlvbl90YXJnZXQmYW1wO3F1b3Q7OiZhbXA7cXVvdDthY3RvciZhbXA7cXVvdDssJmFtcDtxdW90O2V2ZW50JmFtcDtxdW90Ozp7JmFtcDtxdW90O3JlcG9faWQmYW1wO3F1b3Q7OjM2Mzg5NjQsJmFtcDtxdW90O2FjdG9yX2lkJmFtcDtxdW90Ozo2NTg1MjgzLCZhbXA7cXVvdDtwdWJsaWMmYW1wO3F1b3Q7OnRydWUsJmFtcDtxdW90O3R5cGUmYW1wO3F1b3Q7OiZhbXA7cXVvdDtJc3N1ZUNvbW1lbnRFdmVudCZhbXA7cXVvdDssJmFtcDtxdW90O3RhcmdldF9pZCZhbXA7cXVvdDs6bnVsbCwmYW1wO3F1b3Q7aWQmYW1wO3F1b3Q7OjczMTkyNzg4MjUsJmFtcDtxdW90O2FkZGl0aW9uYWxfZGV0YWlsc19zaG93biZhbXA7cXVvdDs6ZmFsc2V9LCZhbXA7cXVvdDtvcmdfaWQmYW1wO3F1b3Q7Om51bGwsJmFtcDtxdW90O29yaWdpbmF0aW5nX3JlcXVlc3RfaWQmYW1wO3F1b3Q7OiZhbXA7cXVvdDtEMTA4Ojg2OUY6MkFENkQxNDozRTJDMjE2OjVBOTg5M0FBJmFtcDtxdW90O319XCIgcmVsPVwibm9yZWZlcnJlclwiJmd0O2Fuc2lib3QmbHQ7L2EmZ3Q7IGNvbW1lbnRlZCBvbiBwdWxsIHJlcXVlc3QgJmx0O2EgaHJlZj1cIi9hbnNpYmxlL2Fuc2libGUvcHVsbC8zNjkzMSNpc3N1ZWNvbW1lbnQtMzY5NzczNTE1XCIgY2xhc3M9XCJsaW5rLWdyYXktZGFyayB0ZXh0LWJvbGRcIiBkYXRhLWdhLWNsaWNrPVwiTmV3cyBmZWVkLCBldmVudCBjbGljaywgRXZlbnQgY2xpY2sgdHlwZTpJc3N1ZUNvbW1lbnRFdmVudCB0YXJnZXQ6aXNzdWUtY29tbWVudFwiIGRhdGEtaHlkcm8tY2xpY2staG1hYz1cImI4NmI5YjI4ODZlNTg0NjVhZjUyNDQ1NjkyZTM3MmY1MDc1ZjgxOTBlOWVlYzkwY2I4ZjhkNjAyNTNiMzE1YTVcIiBkYXRhLWh5ZHJvLWNsaWNrPVwieyZhbXA7cXVvdDtldmVudF90eXBlJmFtcDtxdW90OzomYW1wO3F1b3Q7bmV3c19mZWVkLmV2ZW50LmNsaWNrJmFtcDtxdW90OywmYW1wO3F1b3Q7cGF5bG9hZCZhbXA7cXVvdDs6eyZhbXA7cXVvdDthY3Rpb25fdGFyZ2V0JmFtcDtxdW90OzomYW1wO3F1b3Q7aXNzdWUtY29tbWVudCZhbXA7cXVvdDssJmFtcDtxdW90O2V2ZW50JmFtcDtxdW90Ozp7JmFtcDtxdW90O3JlcG9faWQmYW1wO3F1b3Q7OjM2Mzg5NjQsJmFtcDtxdW90O2FjdG9yX2lkJmFtcDtxdW90Ozo2NTg1MjgzLCZhbXA7cXVvdDtwdWJsaWMmYW1wO3F1b3Q7OnRydWUsJmFtcDtxdW90O3R5cGUmYW1wO3F1b3Q7OiZhbXA7cXVvdDtJc3N1ZUNvbW1lbnRFdmVudCZhbXA7cXVvdDssJmFtcDtxdW90O3RhcmdldF9pZCZhbXA7cXVvdDs6bnVsbCwmYW1wO3F1b3Q7aWQmYW1wO3F1b3Q7OjczMTkyNzg4MjUsJmFtcDtxdW90O2FkZGl0aW9uYWxfZGV0YWlsc19zaG93biZhbXA7cXVvdDs6ZmFsc2V9LCZhbXA7cXVvdDtvcmdfaWQmYW1wO3F1b3Q7Om51bGwsJmFtcDtxdW90O29yaWdpbmF0aW5nX3JlcXVlc3RfaWQmYW1wO3F1b3Q7OiZhbXA7cXVvdDtEMTA4Ojg2OUY6MkFENkQxNDozRTJDMjE2OjVBOTg5M0FBJmFtcDtxdW90O319XCIgdGl0bGU9XCJwb3N0Z3Jlc3FsX3VzZXI6IHNldCBlbmNyeXB0ZWQgYXMgZGVmYXVsdCBhbmQgZml4IGVtcHR5IHBhc3N3b3JkIHJlcG9ydGluZyBjaGFuZ2VkXCIgcmVsPVwibm9yZWZlcnJlclwiJmd0O2Fuc2libGUvYW5zaWJsZSMzNjkzMSZsdDsvYSZndDtcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XG4gICAgICAgICZsdDtzcGFuIGNsYXNzPVwiZjYgdGV4dC1ncmF5LWxpZ2h0IG1sLTRcIiZndDtcbiAgICAgICAgICAmbHQ7cmVsYXRpdmUtdGltZSBkYXRldGltZT1cIjIwMTgtMDMtMDFUMjM6NTg6MzVaXCImZ3Q7TWFyIDIsIDIwMTgmbHQ7L3JlbGF0aXZlLXRpbWUmZ3Q7XG4gICAgICAgICZsdDsvc3BhbiZndDtcbiAgICAgICZsdDsvZGl2Jmd0O1xuICAgICZsdDsvZGl2Jmd0O1xuICAgICZsdDtkaXYgY2xhc3M9XCJtZXNzYWdlIG1hcmtkb3duLWJvZHkgbXQtM1wiJmd0O1xuICAgICAgJmx0O2Jsb2NrcXVvdGUmZ3Q7XG4gICAgICAgICZsdDtwJmd0O2NjICZsdDthIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWF0YnVydFwiIGNsYXNzPVwidXNlci1tZW50aW9uXCIgcmVsPVwibm9yZWZlcnJlclwiJmd0O0BtYXRidXJ0Jmx0Oy9hJmd0OyAmbHQ7YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25lcnpodWxcIiBjbGFzcz1cInVzZXItbWVudGlvblwiIHJlbD1cIm5vcmVmZXJyZXJcIiZndDtAbmVyemh1bCZsdDsvYSZndDtcbiZsdDthIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYW5zaWJsZS9hbnNpYnVsbGJvdC9ibG9iL21hc3Rlci9JU1NVRV9IRUxQLm1kXCIgcmVsPVwibm9yZWZlcnJlclwiJmd0O2NsaWNrIGhlcmUgZm9yIGJvdCBoZWxwJmx0Oy9hJmd0O1xuJmx0Oy9wJmd0O1xuICAgICAgJmx0Oy9ibG9ja3F1b3RlJmd0O1xuICAgICZsdDsvZGl2Jmd0O1xuICAmbHQ7L2RpdiZndDtcbiZsdDsvZGl2Jmd0OzwvY29udGVudD5cbiAgPC9lbnRyeT5cbjwvZmVlZD5gXG4vKiBlc2xpbnQtZW5hYmxlICovXG4gICAganNvbkRhdGEgPSB7fVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IHtcbiAgICBtb2NrLnZlcmlmeSgpXG4gICAgbW9jay5yZXNldCgpXG4gIH0pKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBkZXNjcmliZSgnV2hlbiBjb252ZXJ0aW5nIGRhdGEgd2l0aCBzeW5jIGNvbnZlcnRlcicsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmUoKCkgPT4ge1xuICAgICAgbW9ja3MgPSBbIGNvbnZlcnRlciBdXG4gICAgfSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZUVhY2goKCkgPT4gY29udmVydGVyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHhtbCkucmV0dXJucyhqc29uRGF0YSkpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgeG1sVG9Kc29uQ29udmVydGVyKHsgY29udmVydGVyIH0pKHsgeG1sIH0pLnNob3VsZC5iZS5hKCdwcm9taXNlJykpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBpdCgnc2hvdWxkIGdldCBjb252ZXJ0ZWQgZGF0YScsIGFzeW5jICgpID0+XG4gICAgICAoYXdhaXQgeG1sVG9Kc29uQ29udmVydGVyKHsgY29udmVydGVyIH0pKHsgeG1sIH0pKS5zaG91bGRcbiAgICAgICAgLmVxdWFsKGpzb25EYXRhKSlcbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZGVzY3JpYmUoJ1doZW4gY29udmVydGluZyBkYXRhIHdpdGggYXN5bmMgY29udmVydGVyJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBtb2NrcyA9IFsgYXN5bmNDb252ZXJ0ZXIgXVxuICAgIH0pXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBiZWZvcmVFYWNoKCgpID0+IGFzeW5jQ29udmVydGVyLm9uY2UoKS53aXRoRXhhY3RBcmdzKHhtbClcbiAgICAgIC5yZXR1cm5zKFByb21pc2UucmVzb2x2ZShqc29uRGF0YSkpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgaXQoJ3Nob3VsZCBnZXQgY29udmVydGVkIGRhdGEnLCBhc3luYyAoKSA9PlxuICAgICAgKGF3YWl0IHhtbFRvSnNvbkNvbnZlcnRlcih7IGNvbnZlcnRlcjogYXN5bmNDb252ZXJ0ZXIgfSkoeyB4bWwgfSkpXG4gICAgICAgIC5zaG91bGQuZXF1YWwoanNvbkRhdGEpKVxuICB9KVxufSlcbiJdfQ==