(this["webpackJsonpspotify-app"]=this["webpackJsonpspotify-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"user":{"firstName":"Adam","lastName":"Lowenthal","id":1,"photo":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg","friends":[{"firstName":"Sam","lastName":"Smith","id":1},{"firstName":"Tarah","lastName":"Forsyth","id":2},{"firstName":"Ricahrd","lastName":"Tomkins","id":3},{"firstName":"Tony","lastName":"Russo","id":4},{"firstName":"Alyssa","lastName":"Marist","id":5},{"firstName":"Ron","lastName":"Samson","id":6}],"main":[{"name":"Browse","id":1},{"name":"Activity","id":2},{"name":"Radio","id":3}],"your music":[{"name":"Songs","id":1},{"name":"Albums","id":2},{"name":"Artists","id":3},{"name":"Local Files","id":4}],"playlists":[{"name":"Doo Wop","id":1},{"name":"Pop Classics","id":2},{"name":"Love $ongs","id":3},{"name":"Hipster","id":4},{"name":"New Music Friday","id":5},{"name":"Techno Poppers","id":6},{"name":"Summer Soothers","id":7},{"name":"Hard Rap","id":8},{"name":"Pop Rap","id":9},{"name":"5 Stars","id":10},{"name":"Dope Dancin","id":11},{"name":"Sleep","id":12}]}}')},,,,,function(e){e.exports=JSON.parse('{"track":{"name":"Nightcall","duration":257000,"inMediaLibrary":179889627,"album":{"releaseDate":2015,"name":"OutRun","image":"https://bit.ly/2M1ewJI","spotify":"https://open.spotify.com/album/3bRM4GQgoFjBRRzhp87Ugb"},"artist":{"name":"Kavinsky","spotify":"https://open.spotify.com/artist/0UF7XLthtbSF2Eur7559oV"}}}')},,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(2),i=s(9),a=s.n(i),r=(s(18),s(19),s(8)),j=s.n(r),o=s(3),l=(s(20),function(e){var t=e.type,s=e.disabled,c=e.onClick;switch(t){case"back":return Object(n.jsx)("button",{type:"button",className:j()("arrow-button",{"arrow-button_disabled":s}),children:Object(n.jsx)(o.c,{size:25})});case"forward":return Object(n.jsx)("button",{type:"button",className:j()("arrow-button",{"arrow-button_disabled":s}),children:Object(n.jsx)(o.e,{size:25})});case"down":return Object(n.jsx)("button",{type:"button",className:"arrow-button arrow-button__down",onClick:c,children:Object(n.jsx)(o.d,{size:25})});case"up":return Object(n.jsx)("button",{type:"button",className:"arrow-button arrow-button__up",onClick:c,children:Object(n.jsx)(o.f,{size:25})});default:return Object(n.jsx)("button",{type:"button",className:"arrow-button",children:Object(n.jsx)(o.e,{size:25})})}}),u=function(){return Object(n.jsxs)("div",{className:"page-flows",children:[Object(n.jsx)("span",{className:"page-flows__arrow",children:Object(n.jsx)(l,{type:"back"})}),Object(n.jsx)("span",{className:"page-flows__arrow",children:Object(n.jsx)(l,{type:"forward",disabled:!0})})]})},b=(s(21),function(){return Object(n.jsx)("div",{className:"search",children:Object(n.jsx)("input",{className:"search__input",type:"text",placeholder:"Search"})})}),d=s(5),m=(s(22),function(){return Object(n.jsxs)("ul",{className:"dropdown-menu",children:[Object(n.jsx)("li",{className:"dropdown-menu__item",children:Object(n.jsx)("a",{className:"dropdown-menu__link",href:"#",children:"Private Session"})}),Object(n.jsx)("li",{className:"dropdown-menu__item",children:Object(n.jsx)("a",{className:"dropdown-menu__link",href:"#",children:"Account"})}),Object(n.jsx)("li",{className:"dropdown-menu__item",children:Object(n.jsx)("a",{className:"dropdown-menu__link",href:"#",children:"Settings"})}),Object(n.jsx)("li",{className:"dropdown-menu__item",children:Object(n.jsx)("a",{className:"dropdown-menu__link",href:"#",children:"Log Out"})})]})}),O=(s(23),function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),s=t[0],i=t[1];return Object(n.jsxs)("div",{className:"user-actions",children:[Object(n.jsx)(l,{type:s?"up":"down",onClick:function(){i(!s)}}),s&&Object(n.jsx)(m,{})]})}),x=(s(24),function(e){var t=e.user;return Object(n.jsxs)("div",{className:"user-info",children:[Object(n.jsx)("div",{className:"user-info__img-container",children:Object(n.jsx)("img",{className:"user-info__img",src:t.photo,alt:"Profile Picture"})}),Object(n.jsx)("div",{className:"user-info__name",children:Object(n.jsx)("span",{children:"".concat(t.firstName," ").concat(t.lastName)})})]})}),p=(s(25),s(4)),h=s(6),f=h.user,N=function(){return Object(n.jsxs)("div",{className:"user",children:[Object(n.jsx)("div",{className:"user__notifications",children:Object(n.jsx)(o.i,{})}),Object(n.jsx)("div",{className:"user__inbox",children:Object(n.jsx)(p.e,{})}),Object(n.jsx)(x,{user:f}),Object(n.jsx)(O,{})]})},_=function(){return Object(n.jsxs)("section",{className:"header",children:[Object(n.jsx)(u,{}),Object(n.jsx)(b,{}),Object(n.jsx)(N,{})]})},y=(s(26),s(27),s(10)),w={main:[{name:"Browse",icon:Object(n.jsx)(p.a,{size:12}),id:1},{name:"Activity",icon:Object(n.jsx)(o.j,{size:12}),id:2},{name:"Radio",icon:Object(n.jsx)(o.k,{size:12}),id:3}],"your music":[{name:"Songs",icon:Object(n.jsx)(y.a,{size:12}),id:1},{name:"Albums",icon:Object(n.jsx)(o.h,{size:12}),id:2},{name:"Artists",icon:Object(n.jsx)(o.j,{size:12}),id:3},{name:"Local Files",icon:Object(n.jsx)(o.g,{size:12}),id:4}],playlists:[{name:"Doo Wop",icon:Object(n.jsx)(o.h,{size:12}),id:1},{name:"Pop Classics",icon:Object(n.jsx)(o.h,{size:12}),id:2},{name:"Love $ongs",icon:Object(n.jsx)(o.h,{size:12}),id:3},{name:"Hipster",icon:Object(n.jsx)(o.h,{size:12}),id:4},{name:"New Music Friday",icon:Object(n.jsx)(o.h,{size:12}),id:5},{name:"Techno Poppers",icon:Object(n.jsx)(o.h,{size:12}),id:6},{name:"Summer Soothers",icon:Object(n.jsx)(o.h,{size:12}),id:7},{name:"Hard Rap",icon:Object(n.jsx)(o.h,{size:12}),id:8},{name:"Pop Rap",icon:Object(n.jsx)(o.h,{size:12}),id:9},{name:"5 Stars",icon:Object(n.jsx)(o.h,{size:12}),id:10},{name:"Dope Dancin",icon:Object(n.jsx)(o.h,{size:12}),id:11},{name:"Sleep",icon:Object(n.jsx)(o.h,{size:12}),id:12}]},v=function(e){var t=e.user,s=e.title,i=e.isVisible,a=Object(c.useRef)(null),r=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(i||null===a.current||(a.current.style.height="0"),i&&null!==r.current&&null!==a.current){var e=r.current.clientHeight;a.current.style.height=e+"px"}}),[i]),Object(n.jsx)("ul",{ref:a,className:"menu-list",children:Object(n.jsx)("div",{ref:r,className:"menu-list__wrapper",children:t[s].map((function(e,t){return Object(n.jsx)("li",{className:"menu-list__item",children:Object(n.jsxs)("a",{className:"menu-list__link",href:"#",children:[Object(n.jsx)("span",{className:"menu-list__icon",children:w[s][t].icon}),Object(n.jsx)("span",{className:"menu-list__title",children:e.name})]})},e.id)}))})})},g=function(e){var t=e.title,s=e.user,i=Object(c.useState)(!0),a=Object(d.a)(i,2),r=a[0],j=a[1];return Object(n.jsxs)("div",{className:"nav-menu",children:[Object(n.jsxs)("button",{className:"nav-menu__button",type:"button",onClick:function(){j(!r)},children:[t,r?Object(n.jsx)(o.d,{}):Object(n.jsx)(o.f,{})]}),Object(n.jsx)(v,{title:t,user:s,isVisible:r})]})},z=(s(28),h.user),k=function(){return Object(n.jsxs)("section",{className:"navigation",children:[Object(n.jsx)(g,{title:"main",user:z}),Object(n.jsx)(g,{title:"your music",user:z}),Object(n.jsx)(g,{title:"playlists",user:z})]})},S=(s(29),function(){return Object(n.jsx)("section",{className:"new-playlist",children:Object(n.jsxs)("a",{className:"new-playlist__link",href:"#",children:[Object(n.jsx)("span",{className:"new-playlist__icon",children:Object(n.jsx)(o.b,{size:25})}),Object(n.jsx)("span",{className:"new-playlist__text",children:"New Playlist"})]})})}),R=(s(30),s(11)),A=(s(31),s(12)),P=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),s=t[0],i=t[1];return Object(n.jsx)("button",{className:"add-to-fav-button",type:"button",onClick:function(){i(!s)},children:s?Object(n.jsx)(A.a,{size:20}):Object(n.jsx)(o.a,{size:22})})},F=R.track,C=function(){return Object(n.jsxs)("section",{className:"playing",children:[Object(n.jsx)("div",{className:"playing__image-container",children:Object(n.jsx)("img",{src:F.album.image,alt:"Album Art"})}),Object(n.jsxs)("div",{className:"playing__track",children:[Object(n.jsx)("a",{className:"playing__track-name",href:F.album.spotify,children:F.name}),Object(n.jsx)("a",{className:"playing__track-artist",href:F.artist.spotify,children:F.artist.name})]}),Object(n.jsx)(P,{})]})},L=(s(32),function(){return Object(n.jsxs)("aside",{className:"sidebar",children:[Object(n.jsx)(k,{}),Object(n.jsx)(S,{}),Object(n.jsx)(C,{})]})}),D=(s(33),function(){return Object(n.jsxs)("section",{className:"content",children:[Object(n.jsx)(L,{}),Object(n.jsx)("div",{children:"Artist"}),Object(n.jsx)("div",{children:"Social"})]})}),M=(s(34),s(35),function(){return Object(n.jsx)("button",{className:"play",type:"button",children:Object(n.jsx)(p.b,{size:37})})}),H=(s(36),function(){return Object(n.jsx)("button",{className:"skip-backward",type:"button",children:Object(n.jsx)(p.c,{size:25})})}),J=(s(37),function(){return Object(n.jsx)("button",{className:"skip-forward",type:"button",children:Object(n.jsx)(p.d,{size:25})})}),T=(s(38),function(){return Object(n.jsxs)("div",{className:"actions",children:[Object(n.jsx)(H,{}),Object(n.jsx)(M,{}),Object(n.jsx)(J,{})]})}),B=(s(39),function(){return Object(n.jsxs)("section",{className:"current-track",children:[Object(n.jsx)(T,{}),Object(n.jsx)("div",{children:"Progress"}),Object(n.jsx)("div",{children:"Options"})]})}),E=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(_,{}),Object(n.jsx)(D,{}),Object(n.jsx)(B,{})]})};s(40),s(41);a.a.render(Object(n.jsx)(E,{}),document.getElementById("root"))}],[[42,1,2]]]);
//# sourceMappingURL=main.1af35c91.chunk.js.map