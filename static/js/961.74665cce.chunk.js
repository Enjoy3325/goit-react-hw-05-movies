"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{854:function(n,e,t){t.d(e,{a:function(){return c}});t(791);var r=t(184),c=function(){return(0,r.jsx)("p",{children:"Loading..."})}},961:function(n,e,t){t.r(e);var r=t(861),c=t(885),a=t(757),u=t.n(a),o=t(791),i=t(464),s=t(739),v=t(445),l=t(854),p=t(184);e.default=function(){var n,e,t=(0,o.useState)(null),a=(0,c.Z)(t,2),f=a[0],d=a[1],h=(0,s.UO)().movieId,x=(0,o.useState)(!1),m=(0,c.Z)(x,2),w=m[0],j=m[1],g=(0,s.TH)(),k=(0,o.useRef)(null===g||void 0===g||null===(n=g.state)||void 0===n?void 0:n.from);return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),n.prev=1,n.next=4,(0,i.$5)(h);case 4:e=n.sent,d(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log("error :>> ",n.t0);case 11:return n.prev=11,j(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[h]),f&&(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:(null===f||void 0===f?void 0:f.title)||(null===f||void 0===f?void 0:f.name)}),(0,p.jsx)("img",{alt:(null===f||void 0===f?void 0:f.title)||(null===f||void 0===f?void 0:f.title),src:"http://image.tmdb.org/t/p/w500".concat(null===f||void 0===f?void 0:f.poster_path)}),(0,p.jsxs)(v.Fg,{to:null===k||void 0===k?void 0:k.current,state:{from:g},children:["Go Back",w&&(0,p.jsx)(l.a,{})]}),(0,p.jsx)(v.Fg,{to:"cast",state:{from:g},children:"Casts"}),(0,p.jsx)(v.Fg,{to:"reviews",state:{from:g},children:"Reviews"}),(0,p.jsx)("div",{children:(0,p.jsx)("span",{children:null===f||void 0===f||null===(e=f.vote_average)||void 0===e?void 0:e.toFixed(2)})}),(0,p.jsxs)("h3",{children:["Release date: ",null===f||void 0===f?void 0:f.release_date]}),(0,p.jsxs)("h4",{children:["Geners: ",function(){var n=(null===f||void 0===f?void 0:f.genres)&&(null===f||void 0===f?void 0:f.genres.map((function(n){return null===n||void 0===n?void 0:n.name})));return null===n||void 0===n?void 0:n.join(", ")}()]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsxs)("p",{children:["Users Score: ",null===f||void 0===f?void 0:f.overview]}),(0,p.jsx)(o.Suspense,{fallback:(0,p.jsx)(l.a,{}),children:(0,p.jsx)(s.j3,{})})]})}},464:function(n,e,t){t.d(e,{$5:function(){return v},I2:function(){return s},sv:function(){return p},wr:function(){return i},xc:function(){return l}});var r=t(861),c=t(757),a=t.n(c),u="631075854851454119cb09d20165cf60",o="https://api.themoviedb.org/3",i=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/trending/all/day?api_key=").concat(u));case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("\n".concat(o,"/search/movie?api_key=").concat(u,"&page=1&query=").concat(e));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("\n".concat(o,"/movie/").concat(e,"/credits?&api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},861:function(n,e,t){function r(n,e,t,r,c,a,u){try{var o=n[a](u),i=o.value}catch(s){return void t(s)}o.done?e(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,a){var u=n.apply(e,t);function o(n){r(u,c,a,o,i,"next",n)}function i(n){r(u,c,a,o,i,"throw",n)}o(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=961.74665cce.chunk.js.map