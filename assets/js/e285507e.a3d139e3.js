(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(7),r=(n(0),n(247)),o={title:"Create pull requests"},s={unversionedId:"contributing/pulls",id:"contributing/pulls",isDocsHomePage:!1,title:"Create pull requests",description:"This section is addressed to the committers and to anyone interested in knowing",source:"@site/docs/contributing/pulls.md",sourceDirName:"contributing",slug:"/contributing/pulls",permalink:"/docs/contributing/pulls",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/contributing/pulls.md",version:"current",lastUpdatedBy:"Joseph Mawa",lastUpdatedAt:1619714999,formattedLastUpdatedAt:"4/29/2021",frontMatter:{title:"Create pull requests"},sidebar:"docs",previous:{title:"DevOps with CI/CD",permalink:"/docs/contributing/devops"},next:{title:"Publish blog",permalink:"/docs/contributing/blog"}},c=[{value:"Handling pull requests",id:"handling-pull-requests",children:[]},{value:"Committing guidelines",id:"committing-guidelines",children:[]},{value:"Reverting commits",id:"reverting-commits",children:[]},{value:"Special Thanks",id:"special-thanks",children:[]}],l={toc:c};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section is addressed to the committers and to anyone interested in knowing\nhow code gets committed into Wechaty. If you're a community member who wants to\ncontribute code to Wechaty, look at ",Object(r.b)("a",{parentName:"p",href:"/docs/contributing/git"},"working with git")," instead."),Object(r.b)("h2",{id:"handling-pull-requests"},"Handling pull requests"),Object(r.b)("p",null,"Since Wechaty is hosted on GitHub, patches are provided in the form of pull\nrequests."),Object(r.b)("p",null,"When committing a pull request, make sure each individual commit matches the\ncommit guidelines described below. Contributors are expected to provide the\nbest pull requests possible. In practice however, committers - who will likely\nbe more familiar with the commit guidelines - may decide to bring a commit up\nto standard themselves."),Object(r.b)("p",null,"If you find yourself checking out pull requests locally more often, this git\nalias will be helpful:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'[alias]\n    pr = !sh -c \\"git fetch upstream pull/${1}/head:pr/${1} && git checkout pr/${1}\\"\n')),Object(r.b)("p",null,"Add it to your ",Object(r.b)("inlineCode",{parentName:"p"},"~/.gitconfig"),", and set ",Object(r.b)("inlineCode",{parentName:"p"},"upstream")," to be ",Object(r.b)("inlineCode",{parentName:"p"},"wechaty/wechaty"),".\nThen you can run ",Object(r.b)("inlineCode",{parentName:"p"},"git pr ####")," to checkout the corresponding pull request."),Object(r.b)("p",null,"At this point, you can work on the code. Use ",Object(r.b)("inlineCode",{parentName:"p"},"git rebase -i")," and ",Object(r.b)("inlineCode",{parentName:"p"},"git\ncommit --amend")," to make sure the commits have the expected level of quality.\nOnce you're ready:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'# Pull in the latest changes from main.\ngit checkout main\ngit pull upstream main\n# Rebase the pull request on main.\ngit checkout pr/####\ngit rebase main\ngit checkout main\n# Merge the work as "fast-forward" to main to avoid a merge commit.\n# (in practice, you can omit "--ff-only" since you just rebased)\ngit merge --ff-only pr/XXXX\n# If you\'re not sure if you did things correctly, check that only the\n# changes you expect will be pushed to upstream.\ngit push --dry-run upstream main\n# Push!\ngit push upstream main\n# Delete the pull request branch.\ngit branch -d pr/xxxx\n')),Object(r.b)("p",null,"Force push to the branch after rebasing on main but before merging and pushing\nto upstream. This allows the commit hashes on main and the branch to match\nwhich automatically closes the pull request."),Object(r.b)("p",null,"If a pull request doesn't need to be merged as multiple commits, you can use\nGitHub's \"Squash and merge\" button on the website. Edit the commit message as\nneeded and remove\nthe pull request number that's automatically appended to the message's first\nline."),Object(r.b)("p",null,"When rewriting the commit history of a pull request, the goal is to make\nWechaty's commit history as usable as possible:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If a patch contains back-and-forth commits, then rewrite those into one.\nFor example, if a commit adds some code and a second commit fixes stylistic\nissues introduced in the first commit, those commits should be squashed\nbefore merging.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Separate changes to different commits by logical grouping: if you do a\nstylistic cleanup at the same time as you do other changes to a file,\nseparating the changes into two different commits will make reviewing\nhistory easier.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Beware of merges of upstream branches in the pull requests.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Tests should pass and docs should build after each commit. Neither the\ntests nor the docs should emit warnings.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Trivial and small patches usually are best done in one commit. Medium to\nlarge work may be split into multiple commits if it makes sense."))),Object(r.b)("p",null,"Practicality beats purity, so it is up to each committer to decide how much\nhistory mangling to do for a pull request. The main points are engaging the\ncommunity, getting work done, and having a usable commit history."),Object(r.b)("h2",{id:"committing-guidelines"},"Committing guidelines"),Object(r.b)("p",null,"In addition, please follow the following guidelines when committing code to\nWechaty's Git repository:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Never change the published history of ",Object(r.b)("inlineCode",{parentName:"p"},"wechaty/wechaty")," branches by force\npushing. If you absolutely must (for security reasons for example), first\ndiscuss the situation with the team.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'For any medium-to-big changes, where "medium-to-big" is according to\nyour judgment, please bring things up on the ',Object(r.b)("em",{parentName:"p"},"wechaty"),"\nmailing list before making the change."),Object(r.b)("p",{parentName:"li"},"If you bring something up on ",Object(r.b)("em",{parentName:"p"},"wechaty")," mailist and nobody responds,\nplease don't take that to mean your idea is great and should be\nimplemented immediately because nobody contested it. Everyone doesn't always\nhave a lot of time to read mailing list discussions immediately, so you may\nhave to wait a couple of days before getting a response.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Write detailed commit messages in the past tense, not present tense."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'Good: "Fixed Unicode bug in RSS API."'),Object(r.b)("li",{parentName:"ul"},'Bad: "Fixes Unicode bug in RSS API."'),Object(r.b)("li",{parentName:"ul"},'Bad: "Fixing Unicode bug in RSS API."')),Object(r.b)("p",{parentName:"li"},"The commit message should be in lines of 72 chars maximum. There should be\na subject line, separated by a blank line and then paragraphs of 72 char\nlines. The limits are soft. For the subject line, shorter is better. In the\nbody of the commit message more detail is better than less:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-text"},"Fixed #18307 -- Added git workflow guidelines.\n\nRefactored the Wechaty's documentation to remove mentions of SVN\nspecific tasks. Added guidelines of how to use Git, GitHub, and\nhow to use pull request together with Trac instead.\n")),Object(r.b)("p",{parentName:"li"},'Credit the contributors in the commit message: "Thanks A for the report and B\nfor review." Use git\'s ',Object(r.b)("a",{parentName:"p",href:"https://help.github.com/articles/creating-a-commit-with-multiple-authors/"},"Co-Authored-By")," as appropriate.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'For commits to a branch, prefix the commit message with the branch name.\nFor example: "',"[1.4.x]",' Fixed #xxxxx -- Added support for mind reading."')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Limit commits to the most granular change that makes sense. This means,\nuse frequent small commits rather than infrequent large commits. For\nexample, if implementing feature X requires a small change to library Y,\nfirst commit the change to library Y, then commit feature X in a separate\ncommit. This goes a ",Object(r.b)("em",{parentName:"p"},"long")," way- in helping everyone follow your changes.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Separate bug fixes from feature changes. Bugfixes may need to be backported\nto the stable branch, according to ",Object(r.b)("strong",{parentName:"p"},"to-be-added"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If your commit closes an issue in the Wechaty ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues"},"issues"),',\nbegin your commit message with the text "Fixed #xxxxx", where "xxxxx" is the\nnumber of the issue your commit fixes. Example: "Fixed #123 -- Added\nwhizbang feature.". Any commit message in that format will automatically\nclose the referenced issue and post a comment\nto it with the full commit message.'))),Object(r.b)("h2",{id:"reverting-commits"},"Reverting commits"),Object(r.b)("p",null,"Nobody's perfect; mistakes will be committed."),Object(r.b)("p",null,"But try very hard to ensure that mistakes don't happen. Just because we have a\nreversion policy doesn't relax your responsibility to aim for the highest\nquality possible. Really: double-check your work, or have it checked by\nanother committer, ",Object(r.b)("strong",{parentName:"p"},"before")," you commit it in the first place!"),Object(r.b)("p",null,"When a mistaken commit is discovered, please follow these guidelines:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If possible, have the original author revert their own commit.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Don't revert another author's changes without permission from the\noriginal author.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use git revert -- this will make a reverse commit, but the original\ncommit will still be part of the commit history.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the original author can't be reached (within a reasonable amount\nof time -- a day or so) and the problem is severe -- crashing bug,\nmajor test failures, etc. -- then ask for objections on the\n",Object(r.b)("em",{parentName:"p"},"wechaty")," mailing list then revert if there are none.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the problem is small (a feature commit after feature freeze,\nsay), wait it out.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If there's a disagreement between the committer and the\nreverter-to-be then try to work it out on the ",Object(r.b)("em",{parentName:"p"},"wechaty"),"\nmailing list. If an agreement can't be reached then it should\nbe put to a vote.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the commit introduced a confirmed, disclosed security\nvulnerability then the commit may be reverted immediately without\npermission from anyone.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The release branch maintainer may back out commits to the release\nbranch without permission if the commit breaks the release branch.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you mistakenly push a topic branch to ",Object(r.b)("inlineCode",{parentName:"p"},"wechaty/wechaty"),", delete it.\nFor instance, if you did: ",Object(r.b)("inlineCode",{parentName:"p"},"git push upstream feature_antigravity"),",\ndo a reverse push: ",Object(r.b)("inlineCode",{parentName:"p"},"git push upstream :feature_antigravity"),"."))),Object(r.b)("h2",{id:"special-thanks"},"Special Thanks"),Object(r.b)("p",null,"I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from ",Object(r.b)("a",{parentName:"p",href:"https://github.com/django/django/blob/main/docs/internals/contributing/committing-code.txt"},"Django contributing docs")))}m.isMDXComponent=!0},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),m=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(n),p=a,h=u["".concat(o,".").concat(p)]||u[p]||b[p]||r;return n?i.a.createElement(h,s(s({ref:t},l),{},{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);