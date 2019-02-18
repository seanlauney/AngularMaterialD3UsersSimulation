# Code Challenge App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

<div id="readme" class="Box Box--condensed instapaper_body md js-code-block-container">
    <div class="Box-header px-2 clearfix">
      <h3 class="Box-title pr-3">
        <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
        README.md
      </h3>
    </div>
      <div class="Box-body p-6">
        <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-material-design-for-angularjs-apps" class="anchor" aria-hidden="true" href="#material-design-for-angularjs-apps"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Material Design for AngularJS Apps</h1>
<p><a href="https://www.npmjs.com/package/angular-material" rel="nofollow"><img src="https://camo.githubusercontent.com/d531b7613f8fe7db556f0e2e27401793614a8f97/68747470733a2f2f62616467652e667572792e696f2f6a732f616e67756c61722d6d6174657269616c2e737667" alt="npm version" data-canonical-src="https://badge.fury.io/js/angular-material.svg" style="max-width:100%;"></a>
<a href="https://travis-ci.org/angular/material" rel="nofollow"><img src="https://camo.githubusercontent.com/1eb3f848588892593f6aaab7f7c8241fb3a0bf2a/68747470733a2f2f7472617669732d63692e6f72672f616e67756c61722f6d6174657269616c2e737667" alt="Build Status" data-canonical-src="https://travis-ci.org/angular/material.svg" style="max-width:100%;"></a>
<a href="https://gitter.im/angular/material?utm_source=badge&amp;utm_medium=badge" rel="nofollow"><img src="https://camo.githubusercontent.com/5a1a640d29111f1d32231e647baef8fc37c0abb3/68747470733a2f2f6261646765732e6769747465722e696d2f616e67756c61722f6d6174657269616c322e737667" alt="Gitter" data-canonical-src="https://badges.gitter.im/angular/material2.svg" style="max-width:100%;"></a></p>
<p><a href="https://material.io/archive/guidelines/" rel="nofollow">Material Design</a> is a specification for a
unified system of visual, motion, and interaction design that adapts across different devices. Our
goal is to deliver a lean, lightweight set of AngularJS-native UI elements that implement the
material design specification for use in AngularJS single-page applications (SPAs).</p>
<p><strong>AngularJS Material</strong> is an implementation of Google's
<a href="https://material.io/archive/guidelines/material-design/" rel="nofollow">Material Design Specification (2014-2017)</a>
for <a href="https://angularjs.org" rel="nofollow">AngularJS</a> developers.</p>
<p>For an implementation of the <a href="https://material.io/design/" rel="nofollow">Material Design Specification (2018+)</a>,
please see the <a href="https://github.com/angular/material2">Angular Material</a> project which is built for
<a href="https://angular.io" rel="nofollow">Angular</a> developers.</p>
<p><a target="_blank" rel="noopener noreferrer" href="https://cloud.githubusercontent.com/assets/210413/5077572/30dfc2f0-6e6a-11e4-9723-07c918128f4f.png"><img src="https://cloud.githubusercontent.com/assets/210413/5077572/30dfc2f0-6e6a-11e4-9723-07c918128f4f.png" alt="venn diagram" style="max-width:100%;"></a></p>
<p>AngularJS Material includes a rich set of reusable, well-tested, and accessible UI components.</p>
<p>Quick Links:</p>
<ul>
<li><a href="#demos">API &amp; Demos</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#building">Building</a></li>
<li><a href="#installing">Installing</a></li>
</ul>
<p>Please note that using AngularJS Material requires the use of <strong><a href="https://angularjs.org/" rel="nofollow">AngularJS</a>
1.4.x</strong> or higher.</p>
<p>AngularJS Material is targeted for the browser versions defined in the <code>browserslist</code> field
of our <a href="/angular/material/blob/master/package.json">package.json</a>. Below is a screenshot from
<a href="http://browserl.ist/?q=%3E+0.5%25%2C+last+2+versions%2C+Firefox+ESR%2C+not+ie+%3C%3D+10%2C+not+ie_mob+%3C%3D+10%2C+not+bb+%3C%3D+10%2C+not+op_mob+%3C%3D+12.1" rel="nofollow">browserl.ist</a>
that provides a visual representation of this configuration:</p>
<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/3506071/50240047-c7e00780-0391-11e9-9241-6674a412ce94.png"><img src="https://user-images.githubusercontent.com/3506071/50240047-c7e00780-0391-11e9-9241-6674a412ce94.png" alt="AngularJS Material Browser Support" style="max-width:100%;"></a></p>
<h2><a id="user-content--online-documentation-and-demos" class="anchor" aria-hidden="true" href="#-online-documentation-and-demos"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-demos"></a> Online Documentation and Demos</h2>
<div>
  <a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/3506071/39335179-ef92562e-497f-11e8-9f27-e23dc3a868f9.png"><img src="https://user-images.githubusercontent.com/3506071/39335179-ef92562e-497f-11e8-9f27-e23dc3a868f9.png" alt="AngularJS Material docs website" style="max-width:100%;"></a>
</div><br>
<ul>
<li>Visit <a href="https://material.angularjs.org/" rel="nofollow">material.angularjs.org</a> online to review the API, see the
components in action via live demos, and to read our detailed guides which include the layout system,
theming system, typography, and more.</li>
<li>Or you can build the documentation and demos locally; see
<a href="https://github.com/angular/material/tree/master/docs/README.md">Build Docs &amp; Demos</a> for details.</li>
</ul>
<h2><a id="user-content--our-release-processes" class="anchor" aria-hidden="true" href="#-our-release-processes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-releasing"></a> Our Release Processes</h2>
<p>To preserve stability with applications currently using AngularJS Material, we do not follow semver.
We have three types of releases:</p>
<ul>
<li><code>major</code> :  major releases will be done in the separate <a href="https://github.com/angular/material2">Angular Material</a> repo.
This type of release will not be used within AngularJS Material.</li>
<li><code>minor</code>:  contain breaking changes in addition to patch release changes.</li>
<li><code>patch</code>:  non-breaking changes (no API, CSS, UX changes that will cause breaks in existing AngularJS Material applications).</li>
</ul>
<h5><a id="user-content-patch-releases" class="anchor" aria-hidden="true" href="#patch-releases"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Patch Releases</h5>
<p>The patch builds (1.1.8, 1.1.9, 1.1.10, etc.) are prepared based on commits in the <code>master</code> branch;
which contains only non-breaking changes (I.e. bug fixes, new features, API additions, and minimal
non-breaking CSS changes). We are targeting <code>patch</code> releases every 2 weeks.</p>
<h5><a id="user-content-minor-releases" class="anchor" aria-hidden="true" href="#minor-releases"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Minor Releases</h5>
<p>The minor builds (1.1.0, 1.2.0, 1.3.0) can contain breaking changes to CSS, APIs, and UX.
Our formal release of <code>minor</code> builds is much less frequent. The release process for <code>minor</code> builds is currently
being re-evaluated.</p>
<blockquote>
<p>For the purposes of AngularJS Material, you <em>could</em> think of the patch releases as being <em>minor</em> changes
and the 'minor' releases as being <em>major</em> changes according to semver.</p>
</blockquote>
<h2><a id="user-content--contributing" class="anchor" aria-hidden="true" href="#-contributing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-contributing"></a> Contributing</h2>
<p>Developers interested in contributing should read the following guidelines:</p>
<ul>
<li><a href="/angular/material/blob/master/.github/CONTRIBUTING.md#submit">Issue Guidelines</a></li>
<li><a href="/angular/material/blob/master/.github/CONTRIBUTING.md">Contributing Guidelines</a></li>
<li><a href="/angular/material/blob/master/docs/guides/CODING.md">Coding Guidelines</a></li>
<li><a href="/angular/material/blob/master/docs/guides/PULL_REQUESTS.md">Pull Request Guide</a></li>
<li><a href="/angular/material/blob/master/docs/guides/COMMIT_LEVELS.md">Software Process</a></li>
<li><a href="/angular/material/blob/master/CHANGELOG.md">Change Log</a></li>
</ul>
<blockquote>
<p>Please do <strong>not</strong> ask general questions in an issue. Issues are only to report bugs, request
enhancements, or request new features. For general questions and discussions, use the
<a href="https://groups.google.com/forum/#!forum/ngmaterial" rel="nofollow">AngularJS Material Forum</a>.</p>
</blockquote>
<p>It is important to note that for each release, the <a href="/angular/material/blob/master/CHANGELOG.md">ChangeLog</a> is a resource that will
itemize all:</p>
<ul>
<li>Bug Fixes</li>
<li>New Features</li>
<li>Breaking Changes</li>
</ul>
<h2><a id="user-content--building" class="anchor" aria-hidden="true" href="#-building"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-building"></a> Building</h2>
<p>Developers can build AngularJS Material using NPM and gulp.</p>
<p>First install or update your local project's <strong>npm</strong> dependencies:</p>
<div class="highlight highlight-source-shell"><pre>npm install</pre></div>
<p>Then run the <strong>gulp</strong> tasks:</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> To build `angular-material.js/.css` and `Theme` files in the `/dist` directory</span>
gulp build

<span class="pl-c"><span class="pl-c">#</span> To build the AngularJS Material Docs and Demos in `/dist/docs` directory</span>
gulp docs</pre></div>
<p>For development, use the <code>docs:watch</code> <strong>NPM</strong> script to run in dev mode:</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> To build the AngularJS Material Source, Docs, and Demos in watch mode</span>
npm run docs:watch</pre></div>
<p>For more details on how the build process works and additional commands (available for testing and
debugging) developers should read the <a href="/angular/material/blob/master/docs/guides/BUILD.md">Build Guide</a>.</p>
<h2><a id="user-content--installing-build-distribution-files" class="anchor" aria-hidden="true" href="#-installing-build-distribution-files"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-installing"></a> Installing Build (Distribution Files)</h2>
<h4><a id="user-content-npm" class="anchor" aria-hidden="true" href="#npm"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>NPM</h4>
<p>For developers not interested in building the AngularJS Material library... use <strong>NPM</strong> to install
and use the AngularJS Material distribution files.</p>
<p>Change to your project's root directory.</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> To get the latest stable version, use Bower from the command line.</span>
npm install angular-material --save

<span class="pl-c"><span class="pl-c">#</span> To get the most recent, latest committed-to-master version use:</span>
npm install http://github.com/angular/bower-material#master --save</pre></div>
<h4><a id="user-content-other-dependency-managers" class="anchor" aria-hidden="true" href="#other-dependency-managers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Other Dependency Managers</h4>
<p>Visit <a href="https://github.com/angular/bower-material/blob/master/README.md">Bower-Material</a> for more
details on how to install and use the AngularJS Material distribution files within your own local
project.</p>
<p>This includes instructions for <a href="https://github.com/angular/bower-material#bower">Bower</a>
and <a href="https://github.com/angular/bower-material#jspm">JSPM</a>.</p>
<h4><a id="user-content-cdn" class="anchor" aria-hidden="true" href="#cdn"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CDN</h4>
<p>CDN versions of AngularJS Material are now available.</p>
<p>With the Google CDN, you will not need to download local copies of the distribution files. Instead
simply reference the CDN urls to easily use those remote library files. This is especially useful
when using online tools such as <a href="http://codepen.io/" rel="nofollow">CodePen</a>, <a href="http://plnkr.co/" rel="nofollow">Plunker</a>, or
<a href="http://jsfiddle.net/" rel="nofollow">JSFiddle</a>.</p>
<div class="highlight highlight-text-html-basic"><pre>  &lt;<span class="pl-ent">head</span>&gt;

    <span class="pl-c"><span class="pl-c">&lt;!--</span> AngularJS Material CSS now available via Google CDN; version 1.1.9 used here <span class="pl-c">--&gt;</span></span>
   &lt;<span class="pl-ent">link</span> <span class="pl-e">rel</span>=<span class="pl-s"><span class="pl-pds">"</span>stylesheet<span class="pl-pds">"</span></span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>https://ajax.googleapis.com/ajax/libs/angular_material/1.1.9/angular-material.min.css<span class="pl-pds">"</span></span>&gt;

  &lt;/<span class="pl-ent">head</span>&gt;
  &lt;<span class="pl-ent">body</span>&gt;

    <span class="pl-c"><span class="pl-c">&lt;!--</span> AngularJS Material Dependencies <span class="pl-c">--&gt;</span></span>
    &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://ajax.googleapis.com/ajax/libs/angularjs/1.7.4/angular.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
    &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://ajax.googleapis.com/ajax/libs/angularjs/1.7.4/angular-animate.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
    &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://ajax.googleapis.com/ajax/libs/angularjs/1.7.4/angular-aria.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
    &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://ajax.googleapis.com/ajax/libs/angularjs/1.7.4/angular-messages.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;

    <span class="pl-c"><span class="pl-c">&lt;!--</span> AngularJS Material Javascript now available via Google CDN; version 1.1.10 used here <span class="pl-c">--&gt;</span></span>
    &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://ajax.googleapis.com/ajax/libs/angular_material/1.1.10/angular-material.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
  &lt;/<span class="pl-ent">body</span>&gt;</pre></div>
<p>Developers seeking the latest, most-current build versions can use <a href="https://cdn.gitcdn.link/" rel="nofollow">GitCDN.link</a> to
pull directly from the distribution GitHub
<a href="https://github.com/angular/bower-material">Bower-Material</a> repository:</p>
<div class="highlight highlight-text-html-basic"><pre>  &lt;<span class="pl-ent">head</span>&gt;

    <span class="pl-c"><span class="pl-c">&lt;!--</span> AngularJS Material CSS using GitCDN to load directly from `bower-material/master` <span class="pl-c">--&gt;</span></span>
    &lt;<span class="pl-ent">link</span> <span class="pl-e">rel</span>=<span class="pl-s"><span class="pl-pds">"</span>stylesheet<span class="pl-pds">"</span></span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>https://cdn.gitcdn.link/cdn/angular/bower-material/master/angular-material.css<span class="pl-pds">"</span></span>&gt;

  &lt;/<span class="pl-ent">head</span>&gt;
  &lt;<span class="pl-ent">body</span>&gt;

    <span class="pl-c"><span class="pl-c">&lt;!--</span> AngularJS Material Dependencies <span class="pl-c">--&gt;</span></span>
    &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://ajax.googleapis.com/ajax/libs/angularjs/1.7.4/angular.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
    &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://ajax.googleapis.com/ajax/libs/angularjs/1.7.4/angular-animate.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
    &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://ajax.googleapis.com/ajax/libs/angularjs/1.7.4/angular-aria.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
    &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://ajax.googleapis.com/ajax/libs/angularjs/1.7.4/angular-messages.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;

    <span class="pl-c"><span class="pl-c">&lt;!--</span> AngularJS Material Javascript using GitCDN to load directly from `bower-material/master` <span class="pl-c">--&gt;</span></span>
    &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://cdn.gitcdn.link/cdn/angular/bower-material/master/angular-material.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;

  &lt;/<span class="pl-ent">body</span>&gt;</pre></div>
<p>Once you have all the necessary assets installed, add <code>ngMaterial</code> and <code>ngMessages</code> as dependencies for your app:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">angular</span>.<span class="pl-en">module</span>(<span class="pl-s"><span class="pl-pds">'</span>myApp<span class="pl-pds">'</span></span>, [<span class="pl-s"><span class="pl-pds">'</span>ngMaterial<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>ngMessages<span class="pl-pds">'</span></span>]);</pre></div>
</article>
      </div>
  </div>
