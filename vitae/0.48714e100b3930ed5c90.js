webpackJsonp([0],{373:function(n,e,t){"use strict";function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:a,payload:n}}function r(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments[1],t=f[e.type];return t?t(n,e):n}Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"COUNTER_INCREMENT",function(){return a}),t.d(e,"COUNTER_DOUBLE_ASYNC",function(){return l}),e.increment=u,t.d(e,"doubleAsync",function(){return s}),t.d(e,"actions",function(){return d}),e.default=r;var c,o=t(376),i=t.n(o),a="COUNTER_INCREMENT",l="COUNTER_DOUBLE_ASYNC",s=function(){return function(n,e){return new Promise(function(t){setTimeout(function(){n({type:l,payload:e().counter}),t()},200)})}},d={increment:u,doubleAsync:s},f=(c={},i()(c,a,function(n,e){return n+e.payload}),i()(c,l,function(n,e){return 2*n}),c),b=0},374:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=t(95),r=t(373),c=t(375),o={increment:function(){return t.i(r.increment)(1)},doubleAsync:r.doubleAsync},i=function(n){return{counter:n.counter}};e.default=t.i(u.connect)(i,o)(c.a)},375:function(n,e,t){"use strict";var u=t(5),r=t.n(u),c=t(7),o=t.n(c),i=function(n){var e=n.counter,t=n.increment,u=n.doubleAsync;return r.a.createElement("div",{style:{margin:"0 auto"}},r.a.createElement("h2",null,"Counter: ",e),r.a.createElement("button",{className:"btn btn-primary",onClick:t},"Increment")," ",r.a.createElement("button",{className:"btn btn-secondary",onClick:u},"Double (Async)"))};i.propTypes={counter:o.a.number.isRequired,increment:o.a.func.isRequired,doubleAsync:o.a.func.isRequired},e.a=i},376:function(n,e,t){"use strict";e.__esModule=!0;var u=t(172),r=function(n){return n&&n.__esModule?n:{default:n}}(u);e.default=function(n,e,t){return e in n?(0,r.default)(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}}});
//# sourceMappingURL=0.48714e100b3930ed5c90.js.map