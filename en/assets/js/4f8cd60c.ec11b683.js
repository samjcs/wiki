(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{103:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return t?o.a.createElement(h,s(s({ref:n},l),{},{components:t})):o.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},115:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/nuchain-app-web-extension1-7eed3e5bdbd7628f07b14762a2096625.png"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(103)),i={id:"browser-extension",title:"Browser Extension",sidebar_label:"Extension"},s={unversionedId:"learn/browser-extension",id:"learn/browser-extension",isDocsHomePage:!1,title:"Browser Extension",description:"A login is usually required to access a service/application, but the term login in the Web3 world is",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/learn/extension.md",sourceDirName:"learn",slug:"/learn/browser-extension",permalink:"/en/docs/learn/browser-extension",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/learn/extension.md",version:"current",sidebar_label:"Extension",frontMatter:{id:"browser-extension",title:"Browser Extension",sidebar_label:"Extension"},sidebar:"tutorialSidebar",previous:{title:"Nominator",permalink:"/en/docs/learn/nominator"},next:{title:"Build",permalink:"/en/docs/build/build-intro"}},c=[{value:"Installing the extension",id:"installing-the-extension",children:[]},{value:"Extension function",id:"extension-function",children:[]},{value:"Create an account",id:"create-an-account",children:[]}],l={toc:c};function u(e){var n=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,i,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A login is usually required to access a service/application, but the term login in the Web3 world is\nirrelevant. What is needed in Web3 for authentication and authorization is a cryptographic key\ninstead of ",Object(a.b)("em",{parentName:"p"},"user name")," and ",Object(a.b)("em",{parentName:"p"},"password")," as in the centralized world."),Object(a.b)("p",null,"Currently, the development of Web3 has not been supported by a native frontend in the browser, so\nthat access to the Web3 network still requires tools. For example, on the Ethereum ecosystem there\nis the Metamask tool, on Polkadot there is the Polkadot JS app. The existence of this tools is to\nmake it easier for users to access Web3. In the future, when all browsers (",Object(a.b)("em",{parentName:"p"},"browser"),") already\nsupport Web3 then tools (",Object(a.b)("em",{parentName:"p"},"extension"),") like this will no longer be needed, because they are available\nnatively in the browser."),Object(a.b)("h2",{id:"installing-the-extension"},"Installing the extension"),Object(a.b)("p",null,"At the present until the majority of browsers support Web3, we need a tool to access the Nuchain\nnetwork. This tool is a ",Object(a.b)("em",{parentName:"p"},"browser extension"),", which you can get at:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/nuchain-app/hfcdboaniimgkememgmilhmnkdgggkne"},"Nuchain App for Chrome browser")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/nuchain-app/"},"Nuchain App for Firefox browser"))),Object(a.b)("p",null,"Once installed in the browser, the Nuchain icon will appear as shown in the following image:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Nuchain App web extension",src:t(115).default})),Object(a.b)("h2",{id:"extension-function"},"Extension function"),Object(a.b)("p",null,"The function of this Nuchain App browser extension is to store a ",Object(a.b)("em",{parentName:"p"},"private key")," and secure it offline\nin your browser with a password. Furthermore, when you access a website that supports Web3 this\nextension will be active and ask for your permission to authorize the necessary\noperations/transactions on the Nuchain network securely without needing to expose your private key."),Object(a.b)("p",null,"This is more secure than you putting the private key into a 3rd party application. It is recommended\nnot to save your key in 3rd party app."),Object(a.b)("h2",{id:"create-an-account"},"Create an account"),Object(a.b)("p",null,"Browser extensions can be used to create accounts. Basically, accounts in the Web3 are just\nasymmetric cryptographic key pairs, so this extension only generates random cryptographic keys. For\nmore details, please read the section\n",Object(a.b)("a",{parentName:"p",href:"/en/docs/learn/account#using-browser-extension"},"Creating an account using a browser extension"),"."))}u.isMDXComponent=!0}}]);