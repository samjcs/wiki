(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{78:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return l})),n.d(a,"toc",(function(){return u})),n.d(a,"default",(function(){return b}));var i=n(3),t=n(7),r=(n(0),n(98)),o={id:"build-organization",title:"Organisasi",sidebar_label:"Organisasi"},l={unversionedId:"build/build-organization",id:"build/build-organization",isDocsHomePage:!1,title:"Organisasi",description:"Nuchain mendukung pembuatan organisasi di dalam blockchain.",source:"@site/docs/build/build-organization.md",sourceDirName:"build",slug:"/build/build-organization",permalink:"/docs/build/build-organization",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/build/build-organization.md",version:"current",sidebar_label:"Organisasi",frontMatter:{id:"build-organization",title:"Organisasi",sidebar_label:"Organisasi"},sidebar:"tutorialSidebar",previous:{title:"Decentralized Identity (DId)",permalink:"/docs/build/build-did"},next:{title:"Sertifikat Digital",permalink:"/docs/build/build-certificate"}},u=[{value:"Membuat Organisasi",id:"membuat-organisasi",children:[]}],s={toc:u};function b(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Nuchain mendukung pembuatan organisasi di dalam ",Object(r.b)("em",{parentName:"p"},"blockchain"),"."),Object(r.b)("p",null,"Organisasi adalah objek yang sama seperti akun menggunakan ",Object(r.b)("em",{parentName:"p"},"address")," yang sama seperti akun biasa\nbedanya organisasi tidak dikontrol secara langsung tetapi dikontrol oleh ",Object(r.b)("inlineCode",{parentName:"p"},"admin")," atau orang yang\nmemiliki akses sebagai ",Object(r.b)("inlineCode",{parentName:"p"},"admin")," melalui delegasi ",Object(r.b)("a",{parentName:"p",href:"/docs/build/build-did"},"Decentralized ID"),"."),Object(r.b)("p",null,"Organisasi ini diperlukan untuk menggunakan fitur lainnya, seperti sertifikat digital, supply chain,\ndll."),Object(r.b)("h3",{id:"membuat-organisasi"},"Membuat Organisasi"),Object(r.b)("p",null,"Untuk membuat organisasi cukup dengan melakukan pemanggilan fungsi ekstrinsik ",Object(r.b)("inlineCode",{parentName:"p"},"organization.create"),"\ndengan parameter:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," - nama dari organisasi."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"description")," - deskripsi singkat yang menjelaskan tentang organisasi."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"admin")," - ID akun yang akan memiliki akses pada organisasi."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"website")," - URL website organisasi."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"email")," - Email organisasi.")),Object(r.b)("p",null,"Pembuatan organisasi di jaringan Nuchain membutuhkan biaya 10 ARA (belum termasuk biaya transaksi)\nbiaya ini akan masuk ke kebendaharaan."))}b.isMDXComponent=!0},98:function(e,a,n){"use strict";n.d(a,"a",(function(){return c})),n.d(a,"b",(function(){return m}));var i=n(0),t=n.n(i);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,i,t=function(e,a){if(null==e)return{};var n,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=t.a.createContext({}),b=function(e){var a=t.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=b(e.components);return t.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},p=t.a.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=b(n),p=i,m=c["".concat(o,".").concat(p)]||c[p]||d[p]||r;return n?t.a.createElement(m,l(l({ref:a},s),{},{components:n})):t.a.createElement(m,l({ref:a},s))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);