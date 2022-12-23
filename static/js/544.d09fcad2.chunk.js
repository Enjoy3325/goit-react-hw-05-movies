"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{951:function(n,t,e){e.d(t,{s:function(){return x}});var r,c,a,i=e(731),o=e(739),u=e(168),s=e(444),p=s.ZP.img(r||(r=(0,u.Z)(["\n  width: 100%;\n  border-radius: 15px;\n"]))),f=s.ZP.div(c||(c=(0,u.Z)(["\n  position: relative;\n  display: block;\n  z-index: -1;\n"]))),l=s.ZP.span(a||(a=(0,u.Z)(["\n  position: absolute;\n  font-size: 18px;\n  line-height: 1.8;\n  font-weight: 900;\n  display: block;\n  color: #ff9000;\n  top: 10px;\n  left: 10px;\n  margin: 0;\n  color: #ff9000;\n"]))),v=(e(791),e(277)),h=e(184),d=function(n){var t=n.movie,e=(0,o.TH)();return(0,h.jsx)(v.Lm,{children:(0,h.jsx)(i.rU,{to:"/movies/".concat(t.id),state:{from:e},children:(0,h.jsxs)(f,{children:[(0,h.jsx)(p,{alt:t.title||"movie",src:t.poster_path?"http://image.tmdb.org/t/p/w500".concat(t.poster_path):"https://via.placeholder.com/395x574"}),(0,h.jsx)(l,{children:t.vote_average.toFixed(2)})]})})})},x=function(n){var t=n.movies;return(0,h.jsx)(v.Pg,{children:t.map((function(n){return(0,h.jsx)(d,{movie:n},n.id)}))})}},277:function(n,t,e){e.d(t,{Dx:function(){return f},Lm:function(){return p},Pg:function(){return s},QE:function(){return l}});var r,c,a,i,o=e(168),u=e(444),s=u.ZP.ul(r||(r=(0,o.Z)(["\n  text-align: center;\n  cursor: pointer;\n  display: grid;\n  width: 100%;\n  gap: 30px 30px;\n  grid-template-columns: repeat(4, 2fr);\n  margin-top: 30px;\n  margin-bottom: 30px;\n"]))),p=u.ZP.li(c||(c=(0,o.Z)(["\n  transition: all 0.2s ease-in-out;\n  border-radius: 10px;\n  :hover,\n  :focus {\n    transform: scale(1.1);\n  }\n"]))),f=u.ZP.h1(a||(a=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 25px;\n  font-size: 24px;\n  line-height: 1.1;\n  font-weight: 700;\n"]))),l=u.ZP.h2(i||(i=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 25px;\n  font-size: 18px;\n  line-height: 1.3;\n  font-weight: 600;\n"])))},854:function(n,t,e){e.d(t,{a:function(){return c}});e(791);var r=e(184),c=function(){return(0,r.jsx)("p",{children:"Loading..."})}},544:function(n,t,e){e.r(t);var r=e(861),c=e(885),a=e(757),i=e.n(a),o=e(464),u=e(77),s=e(277),p=e(791),f=e(951),l=e(854),v=e(184);t.default=function(){var n=(0,p.useState)([]),t=(0,c.Z)(n,2),e=t[0],a=t[1],h=(0,p.useState)(!1),d=(0,c.Z)(h,2),x=d[0],m=d[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),n.prev=1,n.next=4,(0,o.wr)();case 4:t=n.sent,a(t.results),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:return n.prev=10,m(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,8,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.jsxs)(u.$,{children:[(0,v.jsx)(s.Dx,{children:"Welcome to Movies Style"}),(0,v.jsx)(s.QE,{children:"Trending today"}),x&&(0,v.jsx)(l.a,{}),(0,v.jsx)(f.s,{movies:e})]})}},77:function(n,t,e){e.d(t,{$:function(){return a}});var r,c=e(168),a=e(444).ZP.section(r||(r=(0,c.Z)(["\n  width: 100%;\n  max-width: 1200px;\n  display: block;\n  text-align: center;\n  padding-top: 450px;\n  padding-bottom: 15px;\n  margin: auto;\n"])))},464:function(n,t,e){e.d(t,{$5:function(){return p},I2:function(){return s},sv:function(){return l},wr:function(){return u},xc:function(){return f}});var r=e(861),c=e(757),a=e.n(c),i="631075854851454119cb09d20165cf60",o="https://api.themoviedb.org/3",u=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/trending/all/day?api_key=").concat(i));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("\n".concat(o,"/search/movie?api_key=").concat(i,"&page=1&query=").concat(t));case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("\n".concat(o,"/movie/").concat(t,"/credits?&api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}()},861:function(n,t,e){function r(n,t,e,r,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void e(s)}o.done?t(u):Promise.resolve(u).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var i=n.apply(t,e);function o(n){r(i,c,a,o,u,"next",n)}function u(n){r(i,c,a,o,u,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=544.d09fcad2.chunk.js.map