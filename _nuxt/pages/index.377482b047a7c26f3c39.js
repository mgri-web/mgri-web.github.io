/*! For license information please see ../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{278:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"pageTitle":"Intro to","pageSubtitle":"web development","pageDescription":"Learn to create modern websites and applications at","almaLinkText":"Russian State University for Geological Prospecting","almaLink":"https://mgri.ru/en/","almaVideoText":"Promo-video","ctaText":"Get started"},"ru":{"pageTitle":"Введение в","pageSubtitle":"веб-разработку","pageDescription":"Научитесь создавать современные сайты и приложения в","almaLinkText":"РГГРУ им. Серго Орджоникидзе","almaLink":"https://mgri.ru/","almaVideoText":"Посмотреть видео","ctaText":"Записаться"}}'),delete t.options._Ctor}},279:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"pageTitle":"Intro to web development at MGRI"},"ru":{"pageTitle":"Введение в веб-разработку в РГГРУ"}}'),delete t.options._Ctor}},280:function(t,e,n){},281:function(t,e,n){},282:function(t,e,n){"use strict";n.r(e);n(15),n(44),n(26);var o=n(4),r=n(283),c=n.n(r),l=n(284),f=n.n(l),h=n(2),d=n(189),v=h.a.extend({name:"SectionPromo",components:{CTAButton:d.a},data:function(){return{baffleEl:null,titleTextIndex:0,titleText:{en:["web development","software development"],ru:["веб-разработку","программирование"]}}},mounted:function(){this.initBaffle(),this.initLogoTextAnimation()},methods:{initBaffle:function(){var t=this.$refs.baffle;this.baffleEl=f()(t).set({characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",speed:40})},sleep:function(t){return new Promise((function(e){return setTimeout(e,t)}))},animateText:function(){var t=this;this.baffleEl.text((function(e){return t.getTitleTextNext()})),this.baffleEl.reveal(1e3)},getTitleTextNext:function(){var t=this.$i18n.locale,e=this.titleText[t],n=this.titleTextIndex===e.length-1?0:this.titleTextIndex+1;return this.titleTextIndex=n,this.titleText[t][n]},initLogoTextAnimation:function(){var t=this,e=function(){var n=Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.sleep(c()(4e3,5e3));case 2:t.animateText(),e();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();e()},openPopUp:function(t){this.$accessor.ui.setPopupContent(t)}}}),m=(n(285),n(13)),_=n(286),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"promo"},[n("div",{staticClass:"container flex-desc"},[n("div",{staticClass:"promo__block"},[n("h1",{staticClass:"promo__title"},[t._v("\n        "+t._s(t.$t("pageTitle"))+"\n        "),n("br"),t._v(" "),n("span",{ref:"baffle"},[t._v(t._s(t.$t("pageSubtitle")))])]),t._v(" "),n("div",{staticClass:"promo__description"},[n("p",{staticClass:"promo__description-text"},[t._v("\n          "+t._s(t.$t("pageDescription"))+" "),n("a",{staticClass:"promo__description-link",attrs:{href:t.$t("almaLink"),title:"Mente et Malleo",target:"_blank"},domProps:{textContent:t._s(t.$t("almaLinkText"))}})])]),t._v(" "),n("div",{staticClass:"promo__cta"},[n("CTAButton",{staticClass:"promo__cta-button",attrs:{text:t.$t("ctaText")},nativeOn:{click:function(e){return t.openPopUp("goto")}}}),t._v(" "),n("div",{staticClass:"promo__alma",on:{click:function(e){return t.openPopUp("video")}}},[n("img",{staticClass:"promo__alma-img",attrs:{src:"/svg/play.svg",alt:"Play"}}),t._v(" "),n("p",{staticClass:"promo__alma-text",domProps:{textContent:t._s(t.$t("almaVideoText"))}})])],1)]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"promo__image"},[e("img",{attrs:{src:"/svg/web-monkey.svg",alt:"Web-developer"}})])}],!1,null,"2e3b8d12",null);"function"==typeof _.default&&Object(_.default)(component);e.default=component.exports},283:function(t,e){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=/^(?:0|[1-9]\d*)$/,f=parseFloat,h=parseInt,d=Object.prototype.toString,v=Math.floor,m=Math.min,_=Math.random;function x(t,e,object){if(!y(object))return!1;var n=typeof e;return!!("number"==n?function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!function(t){var e=y(t)?d.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)}(object)&&function(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}(e,object.length):"string"==n&&e in object)&&function(t,e){return t===e||t!=t&&e!=e}(object[e],t)}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function T(t){return t?(t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var l=r.test(t);return l||c.test(t)?h(t.slice(2),l?2:8):o.test(t)?NaN:+t}(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}t.exports=function(t,e,n){if(n&&"boolean"!=typeof n&&x(t,e,n)&&(e=n=void 0),void 0===n&&("boolean"==typeof e?(n=e,e=void 0):"boolean"==typeof t&&(n=t,t=void 0)),void 0===t&&void 0===e?(t=0,e=1):(t=T(t),void 0===e?(e=t,t=0):e=T(e)),t>e){var o=t;t=e,e=o}if(n||t%1||e%1){var r=_();return m(t+r*(e-t+f("1e-"+((r+"").length-1))),e)}return function(t,e){return t+v(_()*(e-t+1))}(t,e)}},284:function(t,e,n){t.exports=function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}}(n(2));t.exports=o.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extend=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},e.mapString=function(t,e){return t.split("").map(e).join("")},e.sample=function(t){return t[Math.floor(Math.random()*t.length)]},e.each=function(t,e){for(var n=0,o=t.length;n<o;n++)e(t[n],n)},e.getTruthyIndices=function(t){return t.map((function(t,e){return!!t&&e})).filter((function(t){return!1!==t}))},e.getElements=function(t){return"string"==typeof t?[].slice.call(document.querySelectorAll(t)):[NodeList,HTMLCollection].some((function(e){return t instanceof e}))?[].slice.call(t):t.nodeType?[t]:t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n(3)),r={characters:"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?",exclude:[" "],speed:50},a=function(){function t(e,n){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.options=(0,o.extend)(Object.create(r),n),this.elements=(0,o.getElements)(e).map(s.default),this.running=!1}return t.prototype.once=function(){var t=this;return(0,o.each)(this.elements,(function(e){return e.write(t.options.characters,t.options.exclude)})),this.running=!0,this},t.prototype.start=function(){var t=this;return clearInterval(this.interval),(0,o.each)(this.elements,(function(t){return t.init()})),this.interval=setInterval((function(){return t.once()}),this.options.speed),this.running=!0,this},t.prototype.stop=function(){return clearInterval(this.interval),this.running=!1,this},t.prototype.set=function(t){return(0,o.extend)(this.options,t),this.running&&this.start(),this},t.prototype.text=function(t){var e=this;return(0,o.each)(this.elements,(function(n){n.text(t(n.value)),e.running||n.write()})),this},t.prototype.reveal=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=e/this.options.speed||1,i=function(){clearInterval(t.interval),t.running=!0,t.interval=setInterval((function(){var e=t.elements.filter((function(t){return!t.bitmap.every((function(t){return!t}))}));(0,o.each)(e,(function(e){var n=Math.ceil(e.value.length/r);e.decay(n).write(t.options.characters,t.options.exclude)})),e.length||(t.stop(),(0,o.each)(t.elements,(function(t){return t.init()})))}),t.options.speed)};return setTimeout(i,n),this},t}();e.default=function(t,e){return new a(t,e)}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),r=function(t){function e(n){o(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n.textContent));return i.element=n,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.write=function(t,e){return this.element.textContent=this.render(t,e),this},e}(function(){function t(e){o(this,t),this.value=e,this.init()}return t.prototype.init=function(){return this.bitmap=this.value.split("").map((function(){return 1})),this},t.prototype.render=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],n=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return e.length?(0,u.mapString)(this.value,(function(o,i){return n.indexOf(o)>-1?o:t.bitmap[i]?(0,u.sample)(e):o})):this.value},t.prototype.decay=function(){for(var t=arguments.length<=0||void 0===arguments[0]?1:arguments[0];t--;){var e=(0,u.getTruthyIndices)(this.bitmap);this.bitmap[(0,u.sample)(e)]=0}return this},t.prototype.text=function(){var t=arguments.length<=0||void 0===arguments[0]?this.value:arguments[0];return this.value=t,this.init(),this},t}());e.default=function(t){return new r(t)}}])},285:function(t,e,n){"use strict";n(280)},286:function(t,e,n){"use strict";var o=n(278),r=n.n(o);e.default=r.a},287:function(t,e,n){"use strict";n(281)},288:function(t,e,n){"use strict";var o=n(279),r=n.n(o);e.default=r.a},289:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(282),c=o.a.extend({layout:"default",components:{SectionPromo:r.default},head:function(){return{title:String(this.$t("pageTitle"))}},transition:{name:"fade",mode:"out-in",afterLeave:function(t){console.log("afterLeave index page",t)}}}),l=(n(287),n(13)),f=n(288),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("SectionPromo")],1)}),[],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports;installComponents(component,{SectionPromo:n(282).default})}}]);