(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{103:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return d}));var t=n(0),i=n.n(t);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function u(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?u(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),l=function(e){var a=i.a.useContext(b),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=l(e.components);return i.a.createElement(b.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},c=i.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,u=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=l(n),c=t,d=p["".concat(u,".").concat(c)]||p[c]||m[c]||r;return n?i.a.createElement(d,s(s({ref:a},b),{},{components:n})):i.a.createElement(d,s({ref:a},b))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,u=new Array(r);u[0]=c;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:t,u[1]=s;for(var b=2;b<r;b++)u[b]=n[b];return i.a.createElement.apply(null,u)}return i.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},115:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/nuchain-app-web-extension1-7eed3e5bdbd7628f07b14762a2096625.png"},98:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return u})),n.d(a,"metadata",(function(){return s})),n.d(a,"toc",(function(){return o})),n.d(a,"default",(function(){return l}));var t=n(3),i=n(7),r=(n(0),n(103)),u={id:"browser-extension",title:"Browser Extension",sidebar_label:"Extension"},s={unversionedId:"learn/browser-extension",id:"learn/browser-extension",isDocsHomePage:!1,title:"Browser Extension",description:"Untuk mengakses sebuah layanan/aplikasi biasanya dibutuhkan login, namun istilah login di dunia Web3 tidak relevan. Yang dibutuhkan di Web3 untuk otentikasi dan otorisasi adalah kunci kriptografi bukan lagi user name dan password seperti di dunia sentralisasi.",source:"@site/docs/learn/extension.md",sourceDirName:"learn",slug:"/learn/browser-extension",permalink:"/docs/learn/browser-extension",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/learn/extension.md",version:"current",sidebar_label:"Extension",frontMatter:{id:"browser-extension",title:"Browser Extension",sidebar_label:"Extension"},sidebar:"tutorialSidebar",previous:{title:"Nominator",permalink:"/docs/learn/nominator"},next:{title:"Build",permalink:"/docs/build/build-intro"}},o=[{value:"Memasang ekstensi",id:"memasang-ekstensi",children:[]},{value:"Fungsi ekstensi",id:"fungsi-ekstensi",children:[]},{value:"Membuat akun",id:"membuat-akun",children:[]}],b={toc:o};function l(e){var a=e.components,u=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},b,u,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Untuk mengakses sebuah layanan/aplikasi biasanya dibutuhkan login, namun istilah login di dunia Web3 tidak relevan. Yang dibutuhkan di Web3 untuk otentikasi dan otorisasi adalah kunci kriptografi bukan lagi ",Object(r.b)("em",{parentName:"p"},"user name")," dan ",Object(r.b)("em",{parentName:"p"},"password")," seperti di dunia sentralisasi."),Object(r.b)("p",null,"Saat ini perkembangan Web3 belum didukung oleh adanya native frontend pada browser, sehingga untuk mengakses jaringan Web3 masih membutuhkan alat bantu, sebagai contoh pada ekosistem Ethereum ada alat bantu Metamask, pada Polkadot ada Polkadot JS app, dll. hal ini untuk mempermudah pengguna dalam mengakses Web3, kedepannya ketika semua peramban (",Object(r.b)("em",{parentName:"p"},"browser"),") sudah mendukung Web3 maka alat-alat bantu (",Object(r.b)("em",{parentName:"p"},"extension"),") seperti ini tidak dibutuhkan lagi, karena telah tersedia secara native di peramban."),Object(r.b)("h2",{id:"memasang-ekstensi"},"Memasang ekstensi"),Object(r.b)("p",null,"Untuk sementara ini hingga mayoritas peramban mendukung Web3, maka kita membutuhkan alat bantu untuk mengakses jaringan Nuchain, alat bantu ini berupa ",Object(r.b)("em",{parentName:"p"},"browser extension"),", yang bisa Anda dapatkan di: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/nuchain-app/hfcdboaniimgkememgmilhmnkdgggkne"},"Nuchain App untuk peramban Chrome")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#"},"Nuchain App untuk peramban Firefox"))),Object(r.b)("p",null,"Setelah terpasang di peramban maka akan muncul icon Nuchain seperti pada gambar berikut:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Nuchain App web extension",src:n(115).default})),Object(r.b)("h2",{id:"fungsi-ekstensi"},"Fungsi ekstensi"),Object(r.b)("p",null,"Fungsi dari ekstensi peramban Nuchain App ini adalah untuk menyimpan ",Object(r.b)("em",{parentName:"p"},"private key")," dan mengamankannya secara ",Object(r.b)("em",{parentName:"p"},"offline")," di peramban Anda dengan kata kunci, selanjutnya ketika Anda mengakses website yang mendukung Web3 maka ekstensi ini akan aktif dan meminta ijin Anda untuk otorisasi dalam melakukan operasi/transaksi yang diperlukan di jaringan Nuchain secara aman tanpa perlu meng-expose kunci privat Anda."),Object(r.b)("p",null,"Hal ini lebih aman daripada Anda menaruh kunci privat ke aplikasi pihak ke-3, dan lebih baik jangan pernah melakukan hal itu (menyimpan ke pihak ke-3)."),Object(r.b)("h2",{id:"membuat-akun"},"Membuat akun"),Object(r.b)("p",null,"Anda juga bisa membuat akun melalui ekstensi. Pada hakekatnya akun di dunia Web3 itu hanyalah pasangan asimetris kunci kriptografi, jadi ekstensi ini hanya membuatkan kunci kriptografi secara acak.\nUntuk lebih detailnya silahkan baca bagian ",Object(r.b)("a",{parentName:"p",href:"/docs/learn/account#menggunakan-ekstensi-peramban"},"Membuat akun menggunakan ekstensi peramban"),"."))}l.isMDXComponent=!0}}]);