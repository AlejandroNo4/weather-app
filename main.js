(()=>{var t={588:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),o=new M(n||[]);return i._invoke=function(t,e,r){var n=d;return function(a,i){if(n===h)throw new Error("Generator is already running");if(n===f){if("throw"===a)throw i;return j()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=T(o,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?f:p,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=f,r.method="throw",r.arg=s.arg)}}}(t,r,o),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",p="suspendedYield",h="executing",f="completed",m={};function v(){}function y(){}function g(){}var x={};x[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(F([])));L&&L!==r&&n.call(L,i)&&(x=L);var E=g.prototype=v.prototype=Object.create(x);function C(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(a,i,o,c){var s=l(t[a],t,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,o,c)}),(function(t){r("throw",t,o,c)})):e.resolve(d).then((function(t){u.value=t,o(u)}),(function(t){return r("throw",t,o,c)}))}c(s.arg)}var a;this._invoke=function(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}}function T(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,T(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function F(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=E.constructor=g,g.constructor=y,y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},C(b.prototype),b.prototype[o]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new b(u(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},C(E),s(E,c,"Generator"),E[i]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=F,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}(()=>{"use strict";function t(t,e,r){this.tempC=t+"°C",this.minC="Min: "+e+"°C",this.maxC="Max: "+r+"°C",this.tempF=Math.round(1.8*parseInt(t)+32)+"°F",this.minF="Min: "+Math.round(1.8*parseInt(e)+32)+"°F",this.maxF="Max: "+Math.round(1.8*parseInt(r)+32)+"°F"}r(588);var e=function(e,r,n,a,i,o){var c=function(t){return t.split(" ").map((function(t){return t[0].toUpperCase()+t.substring(1).toLowerCase()})).join(" ")},s=new t(r,a,i),u=c(e),l=document.createElement("div");l.classList.add("main-container");var d=document.createElement("div"),p=document.createElement("div");p.classList.add("d-flex","img-and-place");var h=document.createElement("i");h.classList.add("fas","fa-map-marker-alt","place");var f=document.createElement("h1");f.classList.add("place"),f.innerText=u;var m=document.createElement("img");m.src="images/".concat(n,".png"),m.classList.add("icon"),p.appendChild(h),p.appendChild(f),p.appendChild(m);var v=document.createElement("div");v.classList.add("min-max");var y=document.createElement("p");y.classList.add("margin-sides"),y.innerText=s.minC;var g=document.createElement("p");g.classList.add("margin-sides"),g.innerText=s.maxC;var x=document.createElement("p");x.classList.add("margin-sides"),x.innerText="Change unit:";var w=document.createElement("label");w.classList.add("switch");var L=document.createElement("input");L.type="checkbox";var E=document.createElement("span");E.classList.add("slider","round"),w.appendChild(L),w.appendChild(E),v.appendChild(y),v.appendChild(g),v.appendChild(x),v.appendChild(w),d.appendChild(p),d.appendChild(v);var C=document.createElement("p");C.classList.add("temperature"),C.innerText=s.tempC,E.addEventListener("click",(function(){C.innerText===s.tempC?(C.innerText=s.tempF,g.innerText=s.maxF,y.innerText=s.minF):(C.innerText=s.tempC,g.innerText=s.maxC,y.innerText=s.minC)}));var b=document.createElement("div"),T=document.createElement("p");return T.innerText=c(o),b.appendChild(T),l.appendChild(d),l.appendChild(C),l.appendChild(b),l},n="d362540f0879a45de98cfb259a0bbb42";function a(t,e,r,n,a,i,o){try{var c=t[i](o),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,a)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function c(t){a(o,n,i,c,s,"next",t)}function s(t){a(o,n,i,c,s,"throw",t)}c(void 0)}))}}function o(t){return c.apply(this,arguments)}function c(){return(c=i(regeneratorRuntime.mark((function t(e){var r,a,i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=").concat(n),t.prev=1,t.next=4,fetch(r,{mode:"cors"});case 4:return a=t.sent,t.next=7,a.json();case 7:if("404"!==(i=t.sent).cod){t.next=12;break}return t.abrupt("return",i);case 12:return o={statusDesc:i.weather[0].description,icon:i.weather[0].icon,temp:Math.round(i.main.temp),tempFeeling:Math.round(i.main.feels_like),tempMin:Math.round(i.main.temp_min),tempMax:Math.round(i.main.temp_max),full:i},t.abrupt("return",o);case 14:t.next=19;break;case 16:return t.prev=16,t.t0=t.catch(1),t.abrupt("return",t.t0);case 19:case"end":return t.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function s(t,e,r,n,a,i,o){try{var c=t[i](o),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,a)}document.body.appendChild(function(){var t=document.body,r=document.createElement("form");r.classList.add("form"),r.method="get";var n=document.createElement("input");n.classList.add("input"),n.placeholder="Enter City Name",n.maxLength="65";var a=document.createElement("p");a.classList.add("msj","d-none");var i=document.createElement("button");return i.classList.add("btn"),i.innerText="Show",t.appendChild(a),r.appendChild(n),r.appendChild(i),i.addEventListener("click",function(){var r,i=(r=regeneratorRuntime.mark((function r(i){var c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i.preventDefault(),r.next=3,o(n.value);case 3:c=r.sent,""===n.value?(a.innerText="Please, add a city",a.classList.remove("d-none"),a.classList.add("d-flex")):c.message?(a.innerText=c.message[0].toUpperCase()+c.message.substring(1).toLowerCase(),a.classList.remove("d-none"),a.classList.add("d-flex")):(a.classList.remove("d-flex"),a.classList.add("d-none"),null!=t.childNodes[9]?t.replaceChild(e(n.value,c.temp,c.icon,c.tempMin,c.tempMax,c.statusDesc),t.childNodes[9]):t.appendChild(e(n.value,c.temp,c.icon,c.tempMin,c.tempMax,c.statusDesc)));case 5:case"end":return r.stop()}}),r)})),function(){var t=this,e=arguments;return new Promise((function(n,a){var i=r.apply(t,e);function o(t){s(i,n,a,o,c,"next",t)}function c(t){s(i,n,a,o,c,"throw",t)}o(void 0)}))});return function(t){return i.apply(this,arguments)}}()),r}())})()})();