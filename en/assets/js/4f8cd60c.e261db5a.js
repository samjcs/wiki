"use strict";(self.webpackChunknuchain_wiki_2=self.webpackChunknuchain_wiki_2||[]).push([[169],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(t),d=o,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},863:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a={id:"browser-extension",title:"Browser Extension",sidebar_label:"Extension"},s=void 0,c={unversionedId:"learn/browser-extension",id:"learn/browser-extension",isDocsHomePage:!1,title:"Browser Extension",description:"A login is usually required to access a service/application, but the term login in the Web3 world is",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/learn/extension.md",sourceDirName:"learn",slug:"/learn/browser-extension",permalink:"/en/docs/learn/browser-extension",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/learn/extension.md",tags:[],version:"current",frontMatter:{id:"browser-extension",title:"Browser Extension",sidebar_label:"Extension"},sidebar:"tutorialSidebar",previous:{title:"Nominator",permalink:"/en/docs/learn/nominator"},next:{title:"Intro",permalink:"/en/docs/build/build-intro"}},l=[{value:"Installing the extension",id:"installing-the-extension",children:[]},{value:"Extension function",id:"extension-function",children:[]},{value:"Create an account",id:"create-an-account",children:[]}],u={toc:l};function p(e){var n=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A login is usually required to access a service/application, but the term login in the Web3 world is\nirrelevant. What is needed in Web3 for authentication and authorization is a cryptographic key\ninstead of ",(0,i.kt)("em",{parentName:"p"},"user name")," and ",(0,i.kt)("em",{parentName:"p"},"password")," as in the centralized world."),(0,i.kt)("p",null,"Currently, the development of Web3 has not been supported by a native frontend in the browser, so\nthat access to the Web3 network still requires tools. For example, on the Ethereum ecosystem there\nis the Metamask tool, on Polkadot there is the Polkadot JS app. The existence of this tools is to\nmake it easier for users to access Web3. In the future, when all browsers (",(0,i.kt)("em",{parentName:"p"},"browser"),") already\nsupport Web3 then tools (",(0,i.kt)("em",{parentName:"p"},"extension"),") like this will no longer be needed, because they are available\nnatively in the browser."),(0,i.kt)("h2",{id:"installing-the-extension"},"Installing the extension"),(0,i.kt)("p",null,"At the present until the majority of browsers support Web3, we need a tool to access the Nuchain\nnetwork. This tool is a ",(0,i.kt)("em",{parentName:"p"},"browser extension"),", which you can get at:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/nuchain-app/hfcdboaniimgkememgmilhmnkdgggkne"},"Nuchain App for Chrome browser")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/nuchain-app/"},"Nuchain App for Firefox browser"))),(0,i.kt)("p",null,"Once installed in the browser, the Nuchain icon will appear as shown in the following image:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nuchain App web extension",src:t(5902).Z})),(0,i.kt)("h2",{id:"extension-function"},"Extension function"),(0,i.kt)("p",null,"The function of this Nuchain App browser extension is to store a ",(0,i.kt)("em",{parentName:"p"},"private key")," and secure it offline\nin your browser with a password. Furthermore, when you access a website that supports Web3 this\nextension will be active and ask for your permission to authorize the necessary\noperations/transactions on the Nuchain network securely without needing to expose your private key."),(0,i.kt)("p",null,"This is more secure than you putting the private key into a 3rd party application. It is recommended\nnot to save your key in 3rd party app."),(0,i.kt)("h2",{id:"create-an-account"},"Create an account"),(0,i.kt)("p",null,"Browser extensions can be used to create accounts. Basically, accounts in the Web3 are just\nasymmetric cryptographic key pairs, so this extension only generates random cryptographic keys. For\nmore details, please read the section\n",(0,i.kt)("a",{parentName:"p",href:"/en/docs/learn/account#using-browser-extension"},"Creating an account using a browser extension"),"."))}p.isMDXComponent=!0},5902:function(e,n,t){n.Z=t.p+"assets/images/nuchain-app-web-extension1-7eed3e5bdbd7628f07b14762a2096625.png"}}]);