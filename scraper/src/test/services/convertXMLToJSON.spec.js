import { describe, before, beforeEach, afterEach, it } from './../setup'
// unit
import convertXMLToJSON from './../../main/services/convertXMLToJSON'
// mocks
import xml2jsWrapperMock from './../mocks/lib/wrappers/xml2jsWrapper'

describe('ConvertXMLToJSON', () => {
  let
    mocks,
    converter,
    asyncConverter,
    xml,
    jsonData

  before(() => {
    xml =
/* eslint-disable */
`<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xml:lang="en-US">
  <id>tag:github.com,2008:/timeline</id>
  <link type="text/html" rel="alternate" href="https://github.com/timeline" />
  <link type="application/atom+xml" rel="self" href="https://github.com/timeline" />
  <title>GitHub Public Timeline Feed</title>
  <updated>2018-03-01T23:58:35Z</updated>
  <entry>
    <id>tag:github.com,2008:IssueCommentEvent/7319278825</id>
    <published>2018-03-01T23:58:35Z</published>
    <updated>2018-03-01T23:58:35Z</updated>
    <link type="text/html" rel="alternate" href="https://github.com/ansible/ansible/pull/36931#issuecomment-369773515" />
    <title type="html">ansibot commented on pull request ansible/ansible#36931</title>
    <author>
      <name>ansibot</name>
      <email />
      <uri>https://github.com/ansibot</uri>
    </author>
    <media:thumbnail height="30" width="30" url="https://avatars3.githubusercontent.com/u/6585283?s=30&amp;v=4" />
    <content type="html">&lt;!-- issue_comment --&gt;
&lt;div class="d-flex border-bottom border-gray-light py-3"&gt;
  
&lt;span class="position-relative mr-3"&gt;
  &lt;a href="/ansibot" rel="noreferrer"&gt;&lt;img alt="@ansibot" class="avatar" height="32" src="https://avatars0.githubusercontent.com/u/6585283?s=64&amp;amp;v=4" width="32"&gt;&lt;/a&gt;
&lt;/span&gt;

  &lt;div class="d-flex flex-column width-full"&gt;
    &lt;div&gt;
      &lt;div class="d-flex flex-justify-between flex-items-baseline"&gt;
        &lt;div&gt;
          &lt;a href="/ansibot" class="link-gray-dark text-bold wb-break-all" data-ga-click="News feed, event click, Event click type:IssueCommentEvent target:actor" data-hydro-click-hmac="0b4c656b7b6559ca7cc93b318e042cf312ca3b7b2bc151806fb59a52ce1ff73d" data-hydro-click="{&amp;quot;event_type&amp;quot;:&amp;quot;news_feed.event.click&amp;quot;,&amp;quot;payload&amp;quot;:{&amp;quot;action_target&amp;quot;:&amp;quot;actor&amp;quot;,&amp;quot;event&amp;quot;:{&amp;quot;repo_id&amp;quot;:3638964,&amp;quot;actor_id&amp;quot;:6585283,&amp;quot;public&amp;quot;:true,&amp;quot;type&amp;quot;:&amp;quot;IssueCommentEvent&amp;quot;,&amp;quot;target_id&amp;quot;:null,&amp;quot;id&amp;quot;:7319278825,&amp;quot;additional_details_shown&amp;quot;:false},&amp;quot;org_id&amp;quot;:null,&amp;quot;originating_request_id&amp;quot;:&amp;quot;D108:869F:2AD6D14:3E2C216:5A9893AA&amp;quot;}}" rel="noreferrer"&gt;ansibot&lt;/a&gt; commented on pull request &lt;a href="/ansible/ansible/pull/36931#issuecomment-369773515" class="link-gray-dark text-bold" data-ga-click="News feed, event click, Event click type:IssueCommentEvent target:issue-comment" data-hydro-click-hmac="b86b9b2886e58465af52445692e372f5075f8190e9eec90cb8f8d60253b315a5" data-hydro-click="{&amp;quot;event_type&amp;quot;:&amp;quot;news_feed.event.click&amp;quot;,&amp;quot;payload&amp;quot;:{&amp;quot;action_target&amp;quot;:&amp;quot;issue-comment&amp;quot;,&amp;quot;event&amp;quot;:{&amp;quot;repo_id&amp;quot;:3638964,&amp;quot;actor_id&amp;quot;:6585283,&amp;quot;public&amp;quot;:true,&amp;quot;type&amp;quot;:&amp;quot;IssueCommentEvent&amp;quot;,&amp;quot;target_id&amp;quot;:null,&amp;quot;id&amp;quot;:7319278825,&amp;quot;additional_details_shown&amp;quot;:false},&amp;quot;org_id&amp;quot;:null,&amp;quot;originating_request_id&amp;quot;:&amp;quot;D108:869F:2AD6D14:3E2C216:5A9893AA&amp;quot;}}" title="postgresql_user: set encrypted as default and fix empty password reporting changed" rel="noreferrer"&gt;ansible/ansible#36931&lt;/a&gt;
        &lt;/div&gt;
        &lt;span class="f6 text-gray-light ml-4"&gt;
          &lt;relative-time datetime="2018-03-01T23:58:35Z"&gt;Mar 2, 2018&lt;/relative-time&gt;
        &lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="message markdown-body mt-3"&gt;
      &lt;blockquote&gt;
        &lt;p&gt;cc &lt;a href="https://github.com/matburt" class="user-mention" rel="noreferrer"&gt;@matburt&lt;/a&gt; &lt;a href="https://github.com/nerzhul" class="user-mention" rel="noreferrer"&gt;@nerzhul&lt;/a&gt;
&lt;a href="https://github.com/ansible/ansibullbot/blob/master/ISSUE_HELP.md" rel="noreferrer"&gt;click here for bot help&lt;/a&gt;
&lt;/p&gt;
      &lt;/blockquote&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</content>
  </entry>
</feed>`
/* eslint-enable */
    jsonData = {}
  })

  afterEach(() => mocks.forEach(mock => mock.verify()))

  describe('When converting data with sync converter', () => {
    beforeEach(() => {
      converter = xml2jsWrapperMock()
      mocks = [ converter.convert ]
      converter.convert.once().withExactArgs(xml).returns(jsonData)
    })

    it('should return a promise', () =>
      convertXMLToJSON({ converter })(xml).should.be.a('promise'))

    it('should get converted data', () =>
      convertXMLToJSON({ converter })(xml).should.eventually
        .equal(jsonData))
  })

  describe('When converting data with async converter', () => {
    beforeEach(() => {
      asyncConverter = xml2jsWrapperMock()
      mocks = [ asyncConverter.convert ]
      asyncConverter.convert.once().withExactArgs(xml)
        .returns(Promise.resolve(jsonData))
    })

    it('should get converted data', () =>
      convertXMLToJSON({ converter: asyncConverter })(xml).should
        .eventually.equal(jsonData))
  })
})
