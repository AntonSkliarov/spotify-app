(this["webpackJsonpspotify-app"]=this["webpackJsonpspotify-app"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"user":{"firstName":"Adam","lastName":"Lowenthal","id":1,"photo":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg","friends":[{"firstName":"Sam","lastName":"Smith","id":1},{"firstName":"Tarah","lastName":"Forsyth","id":2},{"firstName":"Ricahrd","lastName":"Tomkins","id":3},{"firstName":"Tony","lastName":"Russo","id":4},{"firstName":"Alyssa","lastName":"Marist","id":5},{"firstName":"Ron","lastName":"Samson","id":6}],"main":[{"name":"Browse","id":1},{"name":"Activity","id":2},{"name":"Radio","id":3}],"yourMusic":[{"name":"Songs","id":1},{"name":"Albums","id":2},{"name":"Artists","id":3},{"name":"Local Files","id":4}],"playlists":[{"name":"Doo Wop","id":1},{"name":"Pop Classics","id":2},{"name":"Love $ongs","id":3},{"name":"Hipster","id":4},{"name":"New Music Friday","id":5},{"name":"Techno Poppers","id":6},{"name":"Summer Soothers","id":7},{"name":"Hard Rap","id":8},{"name":"Pop Rap","id":9},{"name":"5 Stars","id":10},{"name":"Dope Dancin","id":11},{"name":"Sleep","id":12}]}}')},,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var n=t(1),c=t(2),i=t(6),a=t.n(i),r=(t(14),t(15),t(3)),o=function(){return Object(n.jsxs)("div",{className:"page-flows",children:[Object(n.jsx)("span",{className:"page-flows__arrow",children:Object(n.jsx)("button",{type:"button",className:"button page-flows__button",children:Object(n.jsx)(r.a,{size:25})})}),Object(n.jsx)("span",{className:"page-flows__arrow",children:Object(n.jsx)("button",{type:"button",className:"button page-flows__button page-flows__button_disabled",children:Object(n.jsx)(r.c,{size:25})})})]})},j=(t(16),function(){return Object(n.jsx)("div",{className:"search",children:Object(n.jsx)("input",{className:"search__input",type:"text",placeholder:"Search"})})}),l=t(8),d=(t(17),function(){return Object(n.jsxs)("ul",{className:"dropdown-menu",children:[Object(n.jsx)("li",{className:"dropdown-menu__item",children:Object(n.jsx)("a",{className:"dropdown-menu__link",href:"#",children:"Private Session"})}),Object(n.jsx)("li",{className:"dropdown-menu__item",children:Object(n.jsx)("a",{className:"dropdown-menu__link",href:"#",children:"Account"})}),Object(n.jsx)("li",{className:"dropdown-menu__item",children:Object(n.jsx)("a",{className:"dropdown-menu__link",href:"#",children:"Settings"})}),Object(n.jsx)("li",{className:"dropdown-menu__item",children:Object(n.jsx)("a",{className:"dropdown-menu__link",href:"#",children:"Log Out"})})]})}),m=(t(18),function(){var e=Object(c.useState)(!1),s=Object(l.a)(e,2),t=s[0],i=s[1],a=function(){i(!t)};return Object(n.jsxs)("div",{className:"user-actions",children:[!t&&Object(n.jsx)("button",{className:"button user-actions__button",type:"button",onClick:a,children:Object(n.jsx)(r.b,{size:25})}),t&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{className:"button user-actions__button",type:"button",onClick:a,children:Object(n.jsx)(r.d,{size:25})}),Object(n.jsx)(d,{})]})]})}),u=(t(19),function(e){var s=e.user;return Object(n.jsxs)("div",{className:"user-info",children:[Object(n.jsx)("div",{className:"user-info__img-container",children:Object(n.jsx)("img",{className:"user-info__img",src:s.photo,alt:"Profile Picture"})}),Object(n.jsx)("div",{className:"user-info__name",children:Object(n.jsx)("span",{children:"".concat(s.firstName," ").concat(s.lastName)})})]})}),b=(t(20),t(7)),O=t(4),x=O.user,h=function(){return Object(n.jsxs)("div",{className:"user",children:[Object(n.jsx)("div",{className:"user__notifications",children:Object(n.jsx)(r.e,{})}),Object(n.jsx)("div",{className:"user__inbox",children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(u,{user:x}),Object(n.jsx)(m,{})]})},p=function(){return Object(n.jsxs)("section",{className:"header",children:[Object(n.jsx)(o,{}),Object(n.jsx)(j,{}),Object(n.jsx)(h,{})]})},f=(t(21),function(e){var s=e.title;return Object(n.jsxs)("div",{className:"nav-list",children:[Object(n.jsxs)("button",{className:"nav-list__button",type:"button",children:[s,Object(n.jsx)(r.b,{})]}),Object(n.jsx)("ul",{children:Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"#",children:["Icon",Object(n.jsx)("span",{children:"item name"})]})})})]})}),N=(t(22),function(){return Object(n.jsxs)("section",{className:"navigation",children:[console.log(O),Object(n.jsx)(f,{title:"main"}),Object(n.jsx)(f,{title:"your music"}),Object(n.jsx)(f,{title:"playlists"})]})}),_=(t(23),function(){return Object(n.jsxs)("aside",{className:"sidebar-menu",children:[Object(n.jsx)(N,{}),Object(n.jsx)("section",{children:"New Playlist"}),Object(n.jsx)("section",{children:"Playing"})]})}),w=(t(24),function(){return Object(n.jsxs)("section",{className:"content",children:[Object(n.jsx)(_,{}),Object(n.jsx)("div",{children:"Artist"}),Object(n.jsx)("div",{children:"Social"})]})}),v=(t(25),function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{}),Object(n.jsx)(w,{}),Object(n.jsx)("section",{className:"current-track",children:"Bottom bar"})]})});t(26),t(27);a.a.render(Object(n.jsx)(v,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.15352a27.chunk.js.map