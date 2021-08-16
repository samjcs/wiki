(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},152:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/extrinsics-menu-64998d352dc3d39621a122ebf874d13c.png"},153:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/extrinsic-submission-19914434c820698db660ec5e77a5be19.png"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(103)),c={en:"learn-extrinsic",title:"Extrinsic",sidebar_label:"Extrinsic"},o={unversionedId:"learn/learn-extrinsic",id:"learn/learn-extrinsic",isDocsHomePage:!1,title:"Extrinsic",description:"Extrinsic is a term for executing transactions or operations on the network that are mutable, meaning that operations will affect state/data on the network.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/learn/learn-extrinsic.md",sourceDirName:"learn",slug:"/learn/learn-extrinsic",permalink:"/en/docs/learn/learn-extrinsic",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/learn/learn-extrinsic.md",version:"current",sidebar_label:"Extrinsic",frontMatter:{en:"learn-extrinsic",title:"Extrinsic",sidebar_label:"Extrinsic"}},s=[{value:"Using Dashboard",id:"using-dashboard",children:[]},{value:"Programmatic",id:"programmatic",children:[]}],l={toc:s};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Extrinsic is a term for executing transactions or operations on the network that are ",Object(i.b)("em",{parentName:"p"},"mutable"),", meaning that operations will affect state/data on the network."),Object(i.b)("p",null,"There are two ways to access extrinsic:"),Object(i.b)("h2",{id:"using-dashboard"},"Using Dashboard"),Object(i.b)("p",null,"The easiest way is to use ",Object(i.b)("a",{parentName:"p",href:"https://dashboard.nuchain.network"},"Nuchain dashboard"),". This method is usually used for testing or exploration only. The practical way is the programmatic way, see the section ",Object(i.b)("a",{parentName:"p",href:"#programmatic"},"Programmatic"),"."),Object(i.b)("p",null,"You can access extrinsic functions via ",Object(i.b)("a",{parentName:"p",href:"https://dashboard.nuchain.network"},"Nuchain dashboard")," > ",Object(i.b)("strong",{parentName:"p"},"Extrinsic"),": menu"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Extrinsic Menu",src:n(152).default})),Object(i.b)("p",null,"On the ",Object(i.b)("strong",{parentName:"p"},"Extrinsic")," page you will find an interface that makes it easy for you to call function based on the modules available in Nuchain."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Extrinsic Submission",src:n(153).default})),Object(i.b)("p",null,"The above image is an example of transferring an ARA to another account via an extrinsic function using the ",Object(i.b)("inlineCode",{parentName:"p"},"balances")," module with the function name ",Object(i.b)("inlineCode",{parentName:"p"},"transfer"),"."),Object(i.b)("h2",{id:"programmatic"},"Programmatic"),Object(i.b)("p",null,"Nuchain provides a ",Object(i.b)("a",{parentName:"p",href:"https://github.com/nusantarachain/api"},"javascript library")," to make it easier to access extrinsic programmatically."),Object(i.b)("p",null,"Example of doing transfer programmatically:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'const api = await ApiPromise.create({\n  provider: new WsProvider(NUCHAIN_NODE_ADDRESS),\n});\n\n// make extrinsic function calls\n// in the `balances` module of the `transfer` function.\napi.tx.balances.transfer(recipient, 100).signAndSend(sender, ({ status, events }) => {\n  if (status.isInBlock || status.isFinalized) {\n    console.log("Transfer successful!");\n  }\n});\n')))}u.isMDXComponent=!0}}]);