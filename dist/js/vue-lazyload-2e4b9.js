webpackJsonp([14],{15:function(t,e,n){"use strict";function r(t){return t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function i(t){t=t||{};var e=arguments.length,n=0;if(1===e)return t;for(;++n<e;){var r=arguments[n];_(t)&&(t=r),a(r)&&o(t,r)}return t}function o(t,e){k(t,e);for(var n in e)if(u(n)&&s(e,n)){var r=e[n];a(r)?("undefined"===A(t[n])&&"function"===A(r)&&(t[n]=r),t[n]=i(t[n]||{},r)):t[n]=r}return t}function a(t){return"object"===A(t)||"function"===A(t)}function s(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function u(t){return"__proto__"!==t&&"constructor"!==t&&"prototype"!==t}function d(t,e){if(t.length){var n=t.indexOf(e);return n>-1?t.splice(n,1):void 0}}function c(t,e){for(var n=!1,r=0,i=t.length;r<i;r++)if(e(t[r])){n=!0;break}return n}function l(t,e){if("IMG"===t.tagName&&t.getAttribute("data-srcset")){var n=t.getAttribute("data-srcset"),r=[],i=t.parentNode,o=i.offsetWidth*e,a=void 0,s=void 0,u=void 0;n=n.trim().split(","),n.map(function(t){t=t.trim(),a=t.lastIndexOf(" "),-1===a?(s=t,u=999998):(s=t.substr(0,a),u=parseInt(t.substr(a+1,t.length-a-2),10)),r.push([u,s])}),r.sort(function(t,e){if(t[0]<e[0])return 1;if(t[0]>e[0])return-1;if(t[0]===e[0]){if(-1!==e[1].indexOf(".webp",e[1].length-5))return 1;if(-1!==t[1].indexOf(".webp",t[1].length-5))return-1}return 0});for(var d="",c=void 0,l=0;l<r.length;l++){c=r[l],d=c[1];var h=r[l+1];if(h&&h[0]<o){d=c[1];break}if(!h){d=c[1];break}}return d}}function h(t,e){for(var n=void 0,r=0,i=t.length;r<i;r++)if(e(t[r])){n=t[r];break}return n}function f(){if(!z)return!1;var t=!0,e=document;try{var n=e.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",e.body.appendChild(n),t=!n.offsetWidth,e.body.removeChild(n)}catch(e){t=!1}return t}function v(t,e){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,s=function(){r=Date.now(),n=!1,t.apply(o,a)};i>=e?s():n=setTimeout(s,e)}}}function p(t){return null!==t&&"object"===(void 0===t?"undefined":m(t))}function b(t){if(!(t instanceof Object))return[];if(Object.keys)return Object.keys(t);var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}function y(t){for(var e=t.length,n=[],r=0;r<e;r++)n.push(t[r]);return n}function g(){}Object.defineProperty(e,"__esModule",{value:!0});var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},L=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),_=function(t){return null==t||"function"!=typeof t&&"object"!==(void 0===t?"undefined":m(t))},k=function(t,e){if(null===t||void 0===t)throw new TypeError("expected first argument to be an object.");if(void 0===e||"undefined"==typeof Symbol)return t;if("function"!=typeof Object.getOwnPropertySymbols)return t;for(var n=Object.prototype.propertyIsEnumerable,r=Object(t),i=arguments.length,o=0;++o<i;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var d=s[u];n.call(a,d)&&(r[d]=a[d])}return r},E=Object.prototype.toString,A=function(t){var e=void 0===t?"undefined":m(t);return"undefined"===e?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===e||t instanceof String?"string":"number"===e||t instanceof Number?"number":"function"===e||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(e=E.call(t),"[object RegExp]"===e?"regexp":"[object Date]"===e?"date":"[object Arguments]"===e?"arguments":"[object Error]"===e?"error":"[object Promise]"===e?"promise":r(t)?"buffer":"[object Set]"===e?"set":"[object WeakSet]"===e?"weakset":"[object Map]"===e?"map":"[object WeakMap]"===e?"weakmap":"[object Symbol]"===e?"symbol":"[object Map Iterator]"===e?"mapiterator":"[object Set Iterator]"===e?"setiterator":"[object String Iterator]"===e?"stringiterator":"[object Array Iterator]"===e?"arrayiterator":"[object Int8Array]"===e?"int8array":"[object Uint8Array]"===e?"uint8array":"[object Uint8ClampedArray]"===e?"uint8clampedarray":"[object Int16Array]"===e?"int16array":"[object Uint16Array]"===e?"uint16array":"[object Int32Array]"===e?"int32array":"[object Uint32Array]"===e?"uint32array":"[object Float32Array]"===e?"float32array":"[object Float64Array]"===e?"float64array":"object")},j=i,z="undefined"!=typeof window,I=function(){return!!(z&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)&&("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0)}(),O={event:"event",observer:"observer"},T=function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}if(z)return"function"==typeof window.CustomEvent?window.CustomEvent:(t.prototype=window.Event.prototype,t)}(),S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return z?window.devicePixelRatio||t:t},x=function(){if(z){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}}(),$={on:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];x?t.addEventListener(e,n,{capture:r,passive:!0}):t.addEventListener(e,n,r)},off:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.removeEventListener(e,n,r)}},C=function(t,e,n){var r=new Image;r.src=t.src,r.onload=function(){e({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(t){n(t)}},H=function(t,e){return"undefined"!=typeof getComputedStyle?getComputedStyle(t,null).getPropertyValue(e):t.style[e]},Q=function(t){return H(t,"overflow")+H(t,"overflow-y")+H(t,"overflow-x")},R=function(t){if(z){if(!(t instanceof HTMLElement))return window;for(var e=t;e&&e!==document.body&&e!==document.documentElement&&e.parentNode;){if(/(scroll|auto)/.test(Q(e)))return e;e=e.parentNode}return window}},W=function(){function t(e){var n=e.max;w(this,t),this.options={max:n||100},this._caches=[]}return L(t,[{key:"has",value:function(t){return this._caches.indexOf(t)>-1}},{key:"add",value:function(t){this.has(t)||(this._caches.push(t),this._caches.length>this.options.max&&this.free())}},{key:"free",value:function(){this._caches.shift()}}]),t}(),B=function(){function t(e){var n=e.el,r=e.src,i=e.error,o=e.loading,a=e.bindType,s=e.$parent,u=e.options,d=e.elRenderer,c=e.imageCache;w(this,t),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=s,this.elRenderer=d,this._imageCache=c,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return L(t,[{key:"initState",value:function(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(t){this.performanceData[t]=Date.now()}},{key:"update",value:function(t){var e=t.src,n=t.loading,r=t.error,i=this.src;this.src=e,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var t=this;b(this.options.filter).map(function(e){t.options.filter[e](t,t.options)})}},{key:"renderLoading",value:function(t){var e=this;this.state.loading=!0,C({src:this.loading},function(n){e.render("loading",!1),e.state.loading=!1,t()},function(){t(),e.state.loading=!1,e.options.silent})}},{key:"load",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent,void e()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,e()):void this.renderLoading(function(){t.attempt++,t.options.adapter.beforeLoad&&t.options.adapter.beforeLoad(t,t.options),t.record("loadStart"),C({src:t.src},function(n){t.naturalHeight=n.naturalHeight,t.naturalWidth=n.naturalWidth,t.state.loaded=!0,t.state.error=!1,t.record("loadEnd"),t.render("loaded",!1),t.state.rendered=!0,t._imageCache.add(t.src),e()},function(e){t.options.silent,t.state.error=!0,t.state.loaded=!1,t.render("error",!1)})})}},{key:"render",value:function(t,e){this.elRenderer(this,t,e)}},{key:"performance",value:function(){var t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),t}(),D="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",P=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],M={rootMargin:"0px",threshold:0},N=function(t){return function(){function e(t){var n=t.preLoad,r=t.error,i=t.throttleWait,o=t.preLoadTop,a=t.dispatchEvent,s=t.loading,u=t.attempt,d=t.silent,c=void 0===d||d,l=t.scale,h=t.listenEvents,p=(t.hasbind,t.filter),b=t.adapter,y=t.observer,g=t.observerOptions;w(this,e),this.version="1.3.1",this.mode=O.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:c,dispatchEvent:!!a,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||D,loading:s||D,attempt:u||3,scale:l||S(l),ListenEvents:h||P,hasbind:!1,supportWebp:f(),filter:p||{},adapter:b||{},observer:!!y,observerOptions:g||M},this._initEvent(),this._imageCache=new W({max:200}),this.lazyLoadHandler=v(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?O.observer:O.event)}return L(e,[{key:"config",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j(this.options,t)}},{key:"performance",value:function(){var t=[];return this.ListenerQueue.map(function(e){t.push(e.performance())}),t}},{key:"addLazyBox",value:function(t){this.ListenerQueue.push(t),z&&(this._addListenerTarget(window),this._observer&&this._observer.observe(t.el),t.$el&&t.$el.parentNode&&this._addListenerTarget(t.$el.parentNode))}},{key:"add",value:function(e,n,r){var i=this;if(c(this.ListenerQueue,function(t){return t.el===e}))return this.update(e,n),t.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),a=o.src,s=o.loading,u=o.error;t.nextTick(function(){a=l(e,i.options.scale)||a,i._observer&&i._observer.observe(e);var o=Object.keys(n.modifiers)[0],d=void 0;o&&(d=r.context.$refs[o],d=d?d.$el||d:document.getElementById(o)),d||(d=R(e));var c=new B({bindType:n.arg,$parent:d,el:e,loading:s,error:u,src:a,elRenderer:i._elRenderer.bind(i),options:i.options,imageCache:i._imageCache});i.ListenerQueue.push(c),z&&(i._addListenerTarget(window),i._addListenerTarget(d)),i.lazyLoadHandler(),t.nextTick(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(e,n,r){var i=this,o=this._valueFormatter(n.value),a=o.src,s=o.loading,u=o.error;a=l(e,this.options.scale)||a;var d=h(this.ListenerQueue,function(t){return t.el===e});d?d.update({src:a,loading:s,error:u}):this.add(e,n,r),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),this.lazyLoadHandler(),t.nextTick(function(){return i.lazyLoadHandler()})}},{key:"remove",value:function(t){if(t){this._observer&&this._observer.unobserve(t);var e=h(this.ListenerQueue,function(e){return e.el===t});e&&(this._removeListenerTarget(e.$parent),this._removeListenerTarget(window),d(this.ListenerQueue,e),e.destroy())}}},{key:"removeComponent",value:function(t){t&&(d(this.ListenerQueue,t),this._observer&&this._observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this._removeListenerTarget(t.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(t){var e=this;I||t!==O.observer||(t=O.event),this.mode=t,t===O.event?(this._observer&&(this.ListenerQueue.forEach(function(t){e._observer.unobserve(t.el)}),this._observer=null),this.TargetQueue.forEach(function(t){e._initListen(t.el,!0)})):(this.TargetQueue.forEach(function(t){e._initListen(t.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(t){if(t){var e=h(this.TargetQueue,function(e){return e.el===t});return e?e.childrenCount++:(e={el:t,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===O.event&&this._initListen(e.el,!0),this.TargetQueue.push(e)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(t){var e=this;this.TargetQueue.forEach(function(n,r){n.el===t&&(--n.childrenCount||(e._initListen(n.el,!1),e.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(t,e){var n=this;this.options.ListenEvents.forEach(function(r){return $[e?"on":"off"](t,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var t=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(e,n){t.Event.listeners[e]||(t.Event.listeners[e]=[]),t.Event.listeners[e].push(n)},this.$once=function(e,n){function r(){i.$off(e,r),n.apply(i,arguments)}var i=t;t.$on(e,r)},this.$off=function(e,n){if(!n){if(!t.Event.listeners[e])return;return void(t.Event.listeners[e].length=0)}d(t.Event.listeners[e],n)},this.$emit=function(e,n,r){t.Event.listeners[e]&&t.Event.listeners[e].forEach(function(t){return t(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var t=this,e=[];this.ListenerQueue.forEach(function(t,n){t.el&&t.el.parentNode||e.push(t),t.checkInView()&&t.load()}),e.forEach(function(e){d(t.ListenerQueue,e),e.destroy()})}},{key:"_initIntersectionObserver",value:function(){var t=this;I&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(e){t._observer.observe(e.el)}))}},{key:"_observerHandler",value:function(t,e){var n=this;t.forEach(function(t){t.isIntersecting&&n.ListenerQueue.forEach(function(e){if(e.el===t.target){if(e.state.loaded)return n._observer.unobserve(e.el);e.load()}})})}},{key:"_elRenderer",value:function(t,e,n){if(t.el){var r=t.el,i=t.bindType,o=void 0;switch(e){case"loading":o=t.loading;break;case"error":o=t.error;break;default:o=t.src}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",e),this.$emit(e,t,n),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){var a=new T(e,{detail:t});r.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(t){var e=t,n=this.options.loading,r=this.options.error;return p(t)&&(!t.src&&this.options.silent,e=t.src,n=t.loading||this.options.loading,r=t.error||this.options.error),{src:e,loading:n,error:r}}}]),e}()},q=function(t){return{props:{tag:{type:String,default:"div"}},render:function(t){return!1===this.show?t(this.tag):t(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),z&&this.rect.top<window.innerHeight*t.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*t.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},F=function(){function t(e){var n=e.lazy;w(this,t),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return L(t,[{key:"bind",value:function(t,e,n){var r=new U({el:t,binding:e,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(t,e,n){var r=h(this._queue,function(e){return e.el===t});r&&r.update({el:t,binding:e,vnode:n})}},{key:"unbind",value:function(t,e,n){var r=h(this._queue,function(e){return e.el===t});r&&(r.clear(),d(this._queue,r))}}]),t}(),V={selector:"img"},U=function(){function t(e){var n=e.el,r=e.binding,i=e.vnode,o=e.lazy;w(this,t),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return L(t,[{key:"update",value:function(t){var e=this,n=t.el,r=t.binding;this.el=n,this.options=j({},V,r.value),this.getImgs().forEach(function(t){e.lazy.add(t,j({},e.binding,{value:{src:"dataset"in t?t.dataset.src:t.getAttribute("data-src"),error:("dataset"in t?t.dataset.error:t.getAttribute("data-error"))||e.options.error,loading:("dataset"in t?t.dataset.loading:t.getAttribute("data-loading"))||e.options.loading}}),e.vnode)})}},{key:"getImgs",value:function(){return y(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var t=this;this.getImgs().forEach(function(e){return t.lazy.remove(e)}),this.vnode=null,this.binding=null,this.lazy=null}}]),t}(),G=function(t){return{props:{src:[String,Object],tag:{type:String,default:"img"}},render:function(t){return t(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data:function(){return{el:null,options:{src:"",error:"",loading:"",attempt:t.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:""}},watch:{src:function(){this.init(),t.addLazyBox(this),t.lazyLoadHandler()}},created:function(){this.init(),this.renderSrc=this.options.loading},mounted:function(){this.el=this.$el,t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{init:function(){var e=t._valueFormatter(this.src),n=e.src,r=e.loading,i=e.error;this.state.loaded=!1,this.options.src=n,this.options.error=i,this.options.loading=r,this.renderSrc=this.options.loading},getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),z&&this.rect.top<window.innerHeight*t.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*t.options.preLoad&&this.rect.right>0},load:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;if(this.state.attempt>this.options.attempt-1&&this.state.error)return t.options.silent,void n();var r=this.options.src;C({src:r},function(t){var n=t.src;e.renderSrc=n,e.state.loaded=!0},function(t){e.state.attempt++,e.renderSrc=e.options.error,e.state.error=!0})}}}},J={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=N(t),r=new n(e),i=new F({lazy:r}),o="2"===t.version.split(".")[0];t.prototype.$Lazyload=r,e.lazyComponent&&t.component("lazy-component",q(r)),e.lazyImage&&t.component("lazy-image",G(r)),o?(t.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),t.directive("lazy-container",{bind:i.bind.bind(i),componentUpdated:i.update.bind(i),unbind:i.unbind.bind(i)})):(t.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(t,e){j(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){r.remove(this.el)}}),t.directive("lazy-container",{update:function(t,e){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}};e.default=J},49:function(t,e,n){t.exports=n(15)}},[49]);