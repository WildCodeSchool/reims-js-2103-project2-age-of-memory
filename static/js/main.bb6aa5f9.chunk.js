(this["webpackJsonpreims-js-2103-project2-age-of-memory"]=this["webpackJsonpreims-js-2103-project2-age-of-memory"]||[]).push([[0],[,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),r=n.n(s),i=(n(14),n(2)),o=n.p+"static/media/logo.f33279a6.png",l=(n(15),n(16),n(4)),u=n(9),d=(n(17),n.p+"static/media/cardE.2b295aea.png"),j=n.p+"static/media/cardR.7ade8f16.png",b=n(0),m=function(e){var t=e.imageUrl,n=e.id,a=e.setFirstCardClicked,s=e.setSecondCardClicked,r=e.firstCardClicked,o=e.sideSelect,l=e.pairCount,u=c.a.useState(!1),m=Object(i.a)(u,2),O=m[0],h=m[1],p={1:j,2:d};function x(){!1===O&&(h(!O),null!=r?s({id:n,setIsVisible:h}):a({id:n,setIsVisible:h}))}return c.a.useEffect((function(){h(!1)}),[l]),Object(b.jsx)("div",{className:"card-container",role:"button",tabIndex:"-1",onKeyDown:x,onClick:O?null:x,children:Object(b.jsx)("img",{className:"card",src:O?t:p[o],alt:""})})};m.defaultProps={firstCardClicked:void 0};var O=m;var h=function(e){var t=e.pairCount,n=e.sideSelect,a=e.urlSearch,s=e.setCurrentPairCount,r=e.currentPairCount,o=c.a.useState(),d=Object(i.a)(o,2),j=d[0],m=d[1],h=c.a.useState(),p=Object(i.a)(h,2),x=p[0],f=p[1];c.a.useEffect((function(){null!=j&&null!=x&&(j.id.slice(0,-2)===x.id.slice(0,-2)?s(r+1):(setTimeout((function(){return j.setIsVisible(!1)}),500),setTimeout((function(){return x.setIsVisible(!1)}),500)),m(null),f(null))}),[j,x]);var v=c.a.useState([]),g=Object(i.a)(v,2),C=g[0],S=g[1];return c.a.useEffect((function(){fetch("https://api.unsplash.com/search/photos/?client_id=".concat("8w1Lc-VTX7CuEXNQ5Qo48_US7I2WOy-3is4sizxVtKQ","&query=").concat(a,"&orientation=portrait&per_page=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.results.reduce((function(e,t){var n=t.id;return[].concat(Object(u.a)(e),[Object(l.a)(Object(l.a)({},t),{},{id:"".concat(n,"a")}),Object(l.a)(Object(l.a)({},t),{},{id:"".concat(n,"b")})])}),[]);t.sort((function(){return Math.random()-.5})),S(t)}))}),[t]),Object(b.jsx)(b.Fragment,{children:C.map((function(e){return Object(b.jsx)(O,{imageUrl:e.urls.thumb,id:e.id,firstCardClicked:j,setFirstCardClicked:m,setSecondCardClicked:f,sideSelect:n,pairCount:t},e.id)}))})};var p=function(e){var t=e.sideSelect,n=e.urlSearch,a=e.pairCount,c=e.setCurrentPairCount,s=e.currentPairCount,r=e.setPairCount;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(h,{pairCount:a,sideSelect:t,urlSearch:n,setCurrentPairCount:c,currentPairCount:s,setPairCount:r})})};var x=function(e){var t=e.sideSelect,n=e.urlSearch,a=e.pairCount,s=e.setPairCount,r=e.setGameBoard,o=e.setEndPageIsDisplayed,l=c.a.useState(0),u=Object(i.a)(l,2),d=u[0],j=u[1];function m(){a<12?(s(a+3),j(0)):o(!0)}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("span",{className:"pairMatched",children:["Pairs:"," ",d," ","sur"," ",a]}),d===a&&Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"ModalWin",children:[Object(b.jsx)("p",{className:"Win",children:"Niveau compl\xe9t\xe9, bien Jou\xe9 ! \ud83e\uddd9\ud83c\udffd\u200d\u2642\ufe0f "}),Object(b.jsx)("button",{className:"button",type:"button",onClick:function(){r(!1)},children:"Accueil"}),Object(b.jsx)("button",{className:"button",type:"button",onClick:m,children:"Niveau Suivant"})]})}),Object(b.jsx)("div",{className:"Gameboard",children:d!==a&&Object(b.jsx)(p,{sideSelect:t,urlSearch:n,pairCount:a,setCurrentPairCount:j,currentPairCount:d,setPairCount:s})})]})};n(19);var f=function(e){var t=e.sideSelect,n=e.setSideSelect,a=e.gameBoard,s=e.setGameBoard,r=e.setEndPageIsDisplayed,o=c.a.useState(!1),l=Object(i.a)(o,2),u=l[0],d=l[1],j=c.a.useState(!1),m=Object(i.a)(j,2),O=m[0],h=m[1],p=c.a.useState(3),f=Object(i.a)(p,2),v=f[0],g=f[1];return!0===a?Object(b.jsx)(x,{sideSelect:t,urlSearch:{1:"Roman%20Empire",2:"Egypt"}[t],pairCount:v,setPairCount:g,setGameBoard:s,setEndPageIsDisplayed:r}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"side-select",children:Object(b.jsxs)("div",{className:"side-camp",children:[Object(b.jsx)("div",{className:"title-camp",children:Object(b.jsx)("h2",{children:"Choisis ton camp"})}),Object(b.jsxs)("div",{className:"side-select-btn",children:[Object(b.jsx)("button",{type:"button",className:u?"btn-roman-clicked":"btn-roman",onClick:function(){n(1),d(!u),h(!1)},children:"Romain"}),Object(b.jsx)("button",{type:"button",className:O?"btn-egypt-clicked":"btn-egypt",onClick:function(){n(2),h(!O),d(!1)},children:"Egyptien"})]})]})}),Object(b.jsxs)("div",{className:"btn-container",children:[Object(b.jsx)("div",{className:"select-container",children:Object(b.jsxs)("select",{className:"browser-default custom-select",onChange:function(e){g(parseInt(e.target.value,10))},children:[Object(b.jsx)("option",{value:3,children:"Facile"}),Object(b.jsx)("option",{value:6,children:"Moyen"}),Object(b.jsx)("option",{value:9,children:"Difficile"}),Object(b.jsx)("option",{value:12,children:"Hardcore"})]})}),Object(b.jsx)("div",{className:"play-container",children:Object(b.jsx)("button",{className:"btn-play",type:"button",onClick:function(){null!=t?s(!a):alert("Choisis d'abord ton camp pour pouvoir jouer !")},children:"Play"})})]})]})};n(7);var v=function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],r=c[1];function o(){r(!s)}return!1===s?Object(b.jsx)("button",{type:"button",id:"rules",onClick:function(){r(!0)},children:"R\xe8gles"}):Object(b.jsx)("div",{id:"myModal",className:"modal",children:Object(b.jsxs)("div",{className:"modal-content",children:[t,Object(b.jsx)("div",{id:"card-button",role:"button","aria-label":"Close",tabIndex:"-1",onKeyDown:o,onClick:o,className:o?"isOpened":"notOpened"})]})})},g=n.p+"static/media/Baniere.950211cd.png",C=n.p+"static/media/BaniereRomain.43503a1a.png",S=n.p+"static/media/BaniereEgypte.f92993d5.png";var N=function(e){var t,n=e.logo,a=e.sideSelect,c=e.setGameBoard,s={1:C,2:S};function r(){c(!1)}return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("img",{className:"Baniere",src:null!==(t=s[a])&&void 0!==t?t:g,alt:""}),Object(b.jsx)("div",{className:"bannerFlex",role:"button",tabIndex:"-1",onKeyDown:r,onClick:r,children:Object(b.jsx)("img",{className:"logo",src:n,alt:"Age of Memory"})}),Object(b.jsx)("div",{className:"rulesButton",children:Object(b.jsx)("div",{className:"modal",children:Object(b.jsx)(v,{children:Object(b.jsxs)("p",{className:"rulestext",children:["But du jeu :",Object(b.jsx)("br",{}),"Collecter des paires de cartes correspondantes.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"L'Egypte et L'Empire Romain sont en guerre.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Choisissez votre camp !!!",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Le th\xe8me du jeu ainsi que les cartes s adapteront \xe0 votre choix.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Plusieurs niveaux de difficult\xe9 possible,",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"plus vous jouez en difficult\xe9 \xe9lev\xe9e,",Object(b.jsx)("br",{}),"plus vous gagnerez de points,",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"ainsi vous mettez toutes les chances de votre c\xf4t\xe9 pour faire gagner votre camp :",Object(b.jsx)("br",{}),"il y a 4 niveaux principaux de difficult\xe9 qui augmentent \xe0 chaque fois que vous finissez une partie.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Exemple : pour le niveau facile, vous d\xe9buterez avec 3 paires de cartes, ensuite, 4, ensuite 5 etc..."]})})})})]})};n(20);var y=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"end-text",children:Object(b.jsxs)("h1",{children:["F\xc9LICITATIONS !",Object(b.jsx)("br",{}),"Vous avez termin\xe9 tous les niveaux.",Object(b.jsx)("br",{}),"Merci d'avoir jou\xe9 !"]})}),Object(b.jsxs)("div",{className:"names",children:[Object(b.jsx)("h3",{children:"Jeu con\xe7u et r\xe9alis\xe9 par:"}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/marjorie-thomassin-b8659a193/",target:"_blank",rel:"noreferrer",children:"Marjorie"})," ",Object(b.jsx)("a",{href:"https://www.linkedin.com/in/pascal-joly-a62a23196/",target:"_blank",rel:"noreferrer",children:"Pascal"})," ",Object(b.jsx)("a",{href:"https://www.linkedin.com/in/denis-machet-a29330209/",target:"_blank",rel:"noreferrer",children:"Denis"})," ",Object(b.jsx)("a",{href:"https://www.linkedin.com/in/thomas-dufour-28763b144/",target:"_blank",rel:"noreferrer",children:"Thomas"})," ",Object(b.jsx)("a",{href:"https://www.linkedin.com/in/brian-bertili-622b86188/",target:"_blank",rel:"noreferrer",children:"Brian"})]})]})};var k=function(){var e=c.a.useState(),t=Object(i.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),r=Object(i.a)(s,2),l=r[0],u=r[1],d=c.a.useState(!1),j=Object(i.a)(d,2),m=j[0],O=j[1];return!0===l?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{sideSelect:n,logo:o,setGameBoard:O}),Object(b.jsx)(y,{})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{sideSelect:n,logo:o,gameBoard:m,setGameBoard:O}),Object(b.jsx)(f,{setSideSelect:a,sideSelect:n,endPageIsDisplayed:l,setEndPageIsDisplayed:u,gameBoard:m,setGameBoard:O})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),P()}],[[21,1,2]]]);
//# sourceMappingURL=main.bb6aa5f9.chunk.js.map