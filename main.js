(()=>{var t={588:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,o=Object.create(a.prototype),i=new k(r||[]);return o._invoke=function(t,e,n){var r=d;return function(a,o){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=T(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?f:p,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",p="suspendedYield",h="executing",f="completed",m={};function v(){}function y(){}function g(){}var x={};x[o]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(F([])));L&&L!==n&&r.call(L,o)&&(x=L);var E=g.prototype=v.prototype=Object.create(x);function C(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function n(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function T(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function F(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=E.constructor=g,g.constructor=y,y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},C(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},C(E),s(E,c,"Generator"),E[o]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=F,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return c.type="throw",c.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;M(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:F(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}(()=>{"use strict";function t(t,e,n){this.tempC="".concat(t,"°C"),this.minC="Min: ".concat(e,"°C"),this.maxC="Max: ".concat(n,"°C"),this.tempF="".concat(Math.round(1.8*parseInt(t,10)+32),"°F"),this.minF="Min: ".concat(Math.round(1.8*parseInt(e,10)+32),"°F"),this.maxF="Max: ".concat(Math.round(1.8*parseInt(n,10)+32),"°F")}n(588);const e=function(e,n,r,a,o,i){var c=function(t){return t.split(" ").map((function(t){return t[0].toUpperCase()+t.substring(1).toLowerCase()})).join(" ")},s=new t(n,a,o),u=c(e),l=document.createElement("div");l.classList.add("main-container");var d=document.createElement("div"),p=document.createElement("div");p.classList.add("d-flex","img-and-place");var h=document.createElement("i");h.classList.add("fas","fa-map-marker-alt","place");var f=document.createElement("h1");f.classList.add("place"),f.innerText=u;var m=document.createElement("img");m.src="images/".concat(r,".png"),m.classList.add("icon"),p.appendChild(h),p.appendChild(f),p.appendChild(m);var v=document.createElement("div");v.classList.add("min-max");var y=document.createElement("p");y.classList.add("margin-sides"),y.innerText=s.minC;var g=document.createElement("p");g.classList.add("margin-sides"),g.innerText=s.maxC;var x=document.createElement("p");x.classList.add("margin-sides"),x.innerText="Change unit:";var w=document.createElement("label");w.classList.add("switch");var L=document.createElement("input");L.type="checkbox";var E=document.createElement("span");E.classList.add("slider","round"),w.appendChild(L),w.appendChild(E),v.appendChild(y),v.appendChild(g),v.appendChild(x),v.appendChild(w),d.appendChild(p),d.appendChild(v);var C=document.createElement("p");C.classList.add("temperature"),C.innerText=s.tempC,E.addEventListener("click",(function(){C.innerText===s.tempC?(C.innerText=s.tempF,g.innerText=s.maxF,y.innerText=s.minF):(C.innerText=s.tempC,g.innerText=s.maxC,y.innerText=s.minC)}));var b=document.createElement("div"),T=document.createElement("p");return T.innerText=c(i),b.appendChild(T),l.appendChild(d),l.appendChild(C),l.appendChild(b),l},r="d362540f0879a45de98cfb259a0bbb42";function a(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,s,"next",t)}function s(t){a(i,r,o,c,s,"throw",t)}c(void 0)}))}}function i(){return(i=o(regeneratorRuntime.mark((function t(e){var n,a,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=").concat(r),t.prev=1,t.next=4,fetch(n,{mode:"cors"});case 4:return a=t.sent,t.next=7,a.json();case 7:if("404"!==(o=t.sent).cod){t.next=10;break}return t.abrupt("return",o);case 10:return i={statusDesc:o.weather[0].description,icon:o.weather[0].icon,temp:Math.round(o.main.temp),tempFeeling:Math.round(o.main.feels_like),tempMin:Math.round(o.main.temp_min),tempMax:Math.round(o.main.temp_max),full:o},t.abrupt("return",i);case 14:return t.prev=14,t.t0=t.catch(1),t.abrupt("return",t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})))).apply(this,arguments)}const c=function(t){return i.apply(this,arguments)};function s(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}document.body.appendChild(function(){var t,n=document.body,r=(t=!1,{changeStatus:function(){t=!0},getStatus:function(){return t}}),a=document.createElement("form");a.classList.add("form"),a.method="get";var o=document.createElement("input");o.classList.add("input"),o.placeholder="Enter City Name",o.maxLength="65";var i=document.createElement("p");i.classList.add("msj","d-none");var u=document.createElement("button");return u.classList.add("btn"),u.innerText="Show",n.appendChild(i),a.appendChild(o),a.appendChild(u),u.addEventListener("click",function(){var t,a=(t=regeneratorRuntime.mark((function t(a){var s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=4,c(o.value);case 4:s=t.sent,""===o.value?(i.innerText="Please, add a city",i.classList.remove("d-none"),i.classList.add("d-flex")):s.message?(i.innerText=s.message[0].toUpperCase()+s.message.substring(1).toLowerCase(),i.classList.remove("d-none"),i.classList.add("d-flex")):(i.classList.remove("d-flex"),i.classList.add("d-none"),console.log(n.lastChild),!0===r.getStatus()?n.replaceChild(e(o.value,s.temp,s.icon,s.tempMin,s.tempMax,s.statusDesc),n.lastChild):(r.changeStatus(),n.appendChild(e(o.value,s.temp,s.icon,s.tempMin,s.tempMax,s.statusDesc))));case 6:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){s(o,r,a,i,c,"next",t)}function c(t){s(o,r,a,i,c,"throw",t)}i(void 0)}))});return function(t){return a.apply(this,arguments)}}()),a}())})()})();