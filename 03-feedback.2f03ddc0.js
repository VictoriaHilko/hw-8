!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function w(e){return c=e,f=setTimeout(_,t),s?p(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function _(){var e=b();if(O(e))return h(e);f=setTimeout(_,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,m&&o?p(e):(o=r=void 0,u)}function S(){var e=b(),n=O(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return w(l);if(d)return f=setTimeout(_,t),p(l)}return void 0===f&&(f=setTimeout(_,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},S.flush=function(){return void 0===f?u:h(b())},S}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};var w=document.querySelector(".feedback-form"),O={email_data:"",message_data:""};w.addEventListener("input",e(t)((function(){O.email_data=w.elements.email.value,O.message_data=w.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),window.addEventListener("load",(function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(w.elements.email.value=e.email_data,w.elements.message.value=e.message_data,console.log(O));console.log(O)})),w.addEventListener("submit",(function(){localStorage.removeItem("feedback-form-state"),reset(w),console.log(O)}))}();
//# sourceMappingURL=03-feedback.2f03ddc0.js.map
