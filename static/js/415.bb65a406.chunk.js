"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{415:function(t,n,e){e.r(n);var r=e(861),c=e(439),a=e(757),u=e.n(a),o=e(791),s=e(689),i=e(87),p=e(760),f=e(184);n.default=function(){var t=(0,o.useState)([]),n=(0,c.Z)(t,2),e=n[0],a=n[1],l=(0,s.TH)();function v(){return(v=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.XT)();case 3:n=t.sent,a(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return(0,o.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)("ul",{children:e.map((function(t){return(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(t.id),state:{from:l},children:t.title})},t.id)}))})]})}},760:function(t,n,e){e.d(n,{Ap:function(){return g},WZ:function(){return x},Wf:function(){return d},XT:function(){return v},YJ:function(){return h}});var r=e(861),c=e(757),a=e.n(c),u=e(243),o="472e2968956e411613c9f600cc68feb5",s="https://api.themoviedb.org/3",i="en-US",p="/search/movie",f="false",l="/movie",v=function(){var t=(0,r.Z)(a().mark((function t(){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s).concat("/trending/movie/day","?api_key=").concat(o,"&page=1&language=").concat(i));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(n){var e,r,c,l=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=l.length>1&&void 0!==l[1]?l[1]:1,t.next=3,u.Z.get("".concat(s).concat(p,"?query=").concat(n,"&api_key=").concat(o,"&page=").concat(e,"&include_adult=").concat(f,"&language=").concat(i));case 3:return r=t.sent,c=r.data,t.abrupt("return",c.results);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s).concat(l,"/").concat(n,"?api_key=").concat(o,"&language=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),g=function(){var t=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s).concat(l,"/").concat(n).concat("/credits","?api_key=").concat(o,"&language=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),x=function(){var t=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s).concat(l,"/").concat(n).concat("/reviews","?api_key=").concat(o,"&language=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.bb65a406.chunk.js.map