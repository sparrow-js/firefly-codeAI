!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s="../../node_modules/thread-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/less/less-worker.ts")}({"../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":function(e,t){function r(e,t,r,n,o,i,s){try{var l=e[i](s),a=l.value}catch(e){return void r(e)}l.done?t(a):Promise.resolve(a).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var s=e.apply(t,n);function l(e){r(s,o,i,l,a,"next",e)}function a(e){r(s,o,i,l,a,"throw",e)}l(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},"../../node_modules/@babel/runtime/helpers/defineProperty.js":function(e,t,r){var n=r("../../node_modules/@babel/runtime/helpers/toPropertyKey.js");e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},"../../node_modules/@babel/runtime/helpers/toPrimitive.js":function(e,t,r){var n=r("../../node_modules/@babel/runtime/helpers/typeof.js").default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"../../node_modules/@babel/runtime/helpers/toPropertyKey.js":function(e,t,r){var n=r("../../node_modules/@babel/runtime/helpers/typeof.js").default,o=r("../../node_modules/@babel/runtime/helpers/toPrimitive.js");e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},"../../node_modules/@babel/runtime/helpers/typeof.js":function(e,t){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},"../../node_modules/path-browserify/index.js":function(e,t,r){"use strict";(function(t){function r(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var r,n="",o=0,i=-1,s=0,l=0;l<=e.length;++l){if(l<e.length)r=e.charCodeAt(l);else{if(47===r)break;r=47}if(47===r){if(i===l-1||1===s);else if(i!==l-1&&2===s){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var a=n.lastIndexOf("/");if(a!==n.length-1){-1===a?(n="",o=0):o=(n=n.slice(0,a)).length-1-n.lastIndexOf("/"),i=l,s=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=l,s=0;continue}t&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),o=l-i-1;i=l,s=0}else 46===r&&-1!==s?++s:s=-1}return n}var o={resolve:function(){for(var e,o="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var l;s>=0?l=arguments[s]:(void 0===e&&(e=t.cwd()),l=e),r(l),0!==l.length&&(o=l+"/"+o,i=47===l.charCodeAt(0))}return o=n(o,!i),i?o.length>0?"/"+o:"/":o.length>0?o:"."},normalize:function(e){if(r(e),0===e.length)return".";var t=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!t)).length||t||(e="."),e.length>0&&o&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return r(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var n=arguments[t];r(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":o.normalize(e)},relative:function(e,t){if(r(e),r(t),e===t)return"";if((e=o.resolve(e))===(t=o.resolve(t)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var i=e.length,s=i-n,l=1;l<t.length&&47===t.charCodeAt(l);++l);for(var a=t.length-l,u=s<a?s:a,c=-1,d=0;d<=u;++d){if(d===u){if(a>u){if(47===t.charCodeAt(l+d))return t.slice(l+d+1);if(0===d)return t.slice(l+d)}else s>u&&(47===e.charCodeAt(n+d)?c=d:0===d&&(c=0));break}var f=e.charCodeAt(n+d);if(f!==t.charCodeAt(l+d))break;47===f&&(c=d)}var h="";for(d=n+c+1;d<=i;++d)d!==i&&47!==e.charCodeAt(d)||(0===h.length?h+="..":h+="/..");return h.length>0?h+t.slice(l+c):(l+=c,47===t.charCodeAt(l)&&++l,t.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(r(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,o=-1,i=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!i){o=s;break}}else i=!1;return-1===o?n?"/":".":n&&1===o?"//":e.slice(0,o)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');r(e);var n,o=0,i=-1,s=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var l=t.length-1,a=-1;for(n=e.length-1;n>=0;--n){var u=e.charCodeAt(n);if(47===u){if(!s){o=n+1;break}}else-1===a&&(s=!1,a=n+1),l>=0&&(u===t.charCodeAt(l)?-1==--l&&(i=n):(l=-1,i=a))}return o===i?i=a:-1===i&&(i=e.length),e.slice(o,i)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!s){o=n+1;break}}else-1===i&&(s=!1,i=n+1);return-1===i?"":e.slice(o,i)},extname:function(e){r(e);for(var t=-1,n=0,o=-1,i=!0,s=0,l=e.length-1;l>=0;--l){var a=e.charCodeAt(l);if(47!==a)-1===o&&(i=!1,o=l+1),46===a?-1===t?t=l:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=l+1;break}}return-1===t||-1===o||0===s||1===s&&t===o-1&&t===n+1?"":e.slice(t,o)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){r(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,o=e.charCodeAt(0),i=47===o;i?(t.root="/",n=1):n=0;for(var s=-1,l=0,a=-1,u=!0,c=e.length-1,d=0;c>=n;--c)if(47!==(o=e.charCodeAt(c)))-1===a&&(u=!1,a=c+1),46===o?-1===s?s=c:1!==d&&(d=1):-1!==s&&(d=-1);else if(!u){l=c+1;break}return-1===s||-1===a||0===d||1===d&&s===a-1&&s===l+1?-1!==a&&(t.base=t.name=0===l&&i?e.slice(1,a):e.slice(l,a)):(0===l&&i?(t.name=e.slice(1,s),t.base=e.slice(1,a)):(t.name=e.slice(l,s),t.base=e.slice(l,a)),t.ext=e.slice(s,a)),l>0?t.dir=e.slice(0,l-1):i&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o}).call(this,r("../../node_modules/process/browser.js"))},"../../node_modules/process/browser.js":function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var a,u=[],c=!1,d=-1;function f(){c&&a&&(c=!1,a.length?u=a.concat(u):d=-1,u.length&&h())}function h(){if(!c){var e=l(f);c=!0;for(var t=u.length;t;){for(a=u,u=[];++d<t;)a&&a[d].run();d=-1,t=u.length}a=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||c||l(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"../../node_modules/thread-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/less/less-worker.ts":function(e,t,r){"use strict";r.r(t);var n=r("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),o=r.n(n),i=r("../../node_modules/@babel/runtime/helpers/defineProperty.js"),s=r.n(i);class l extends Error{}var a=r("../../node_modules/path-browserify/index.js"),u=r.n(a);const c=/^~?([@A-Za-z\-_].*)/;function d(e,t){return f.apply(this,arguments)}function f(){return(f=o()((function*(e,t){const r=t.loaderContextId,n=t.childHandler,o=yield n.callFn({method:"resolve-async-transpiled-module",data:{path:e,options:{ignoredExtensions:[".less",".css"]},loaderContextId:r}});if(!o.found)throw new Error("Module ".concat(e," not found."));return o}))).apply(this,arguments)}var h=function(e){return{install(t,r){function n(){}n.prototype=new t.FileManager,n.prototype.constructor=n,n.prototype.supports=function(e){return!0},n.prototype.loadFile=function(){var t=o()((function*(t,r){r=r||"/";let n=t=t.replace("file://","");"/"!==t[0]&&(n=u.a.join(r,t));let o=e.files[n];if(null==o)try{if("~"===t[0])throw new Error("Skip resolution, it is a node_module");o=(yield d(n,e)).code,e.files[n]=o}catch(e){const n=t.match(c);if(n&&n[1]){for(var i=arguments.length,s=new Array(i>2?i-2:0),l=2;l<i;l++)s[l-2]=arguments[l];return this.loadFile("/node_modules/".concat(n[1]),r,...s)}}return e.addDependency(n),{contents:o,filename:n}}));return function(e,r){return t.apply(this,arguments)}}(),r.addFileManager(new n)}}};const p=new class{constructor(e){s()(this,"name",void 0),s()(this,"functions",new Map),s()(this,"pendingCalls",new Map),s()(this,"callId",0),s()(this,"isReady",!1),s()(this,"initializeFS",void 0),s()(this,"queuedMessages",[]),this.name=e,self.addEventListener("message",e=>{this.handleMessage(e.data).catch(console.error)}),self.postMessage({type:"worker_started",codesandbox:!0})}registerFunction(e,t){this.functions.set(e,t)}registerFSInitializer(e){this.initializeFS=e}handleMessage(e){var t=this;return o()((function*(){if("object"==typeof e&&e.codesandbox)if(t.isReady)switch(e.type){case"ping":t.isReady&&(yield t.emitReady());break;case"request":yield t.handleCallRequest(e);break;case"response":yield t.handleCallResponse(e);break;case"initialize-fs":if(!t.initializeFS)throw new Error("initializeFS is undefined for ".concat(t.name));yield t.initializeFS()}else t.queuedMessages.push(e);else e.browserfsMessage||console.warn("Invalid message from main thread to ".concat(t.name),e)}))()}handleCallResponse(e){const t=this.pendingCalls.get(e.idx);t&&(e.isError?t.reject(function(e){const t=new l(e.message);return t.name=e.name,t.columnNumber=e.columnNumber,t.fileName=e.fileName,t.lineNumber=e.lineNumber,t}(e.data)):t.resolve(e.data))}handleCallRequest(e){var t=this;return o()((function*(){try{const r=t.functions.get(e.method);if(!r)throw new Error("Could not find registered child function for call ".concat(t.name,"#").concat(e.method));const n=yield r(e.data);self.postMessage({type:"response",codesandbox:!0,idx:e.idx,data:n})}catch(t){console.error(t),self.postMessage({type:"response",codesandbox:!0,idx:e.idx,isError:!0,data:(r=t,{name:r.name,message:r.message,fileName:r.fileName,lineNumber:r.lineNumber,columnNumber:r.columnNumber})})}var r}))()}callFn(e){let t=e.method,r=e.data;const n=this.callId++,o={type:"request",codesandbox:!0,idx:n,method:t,data:r};return new Promise((e,i)=>{this.pendingCalls.set(n,{method:t,data:r,resolve:e,reject:i}),self.postMessage(o)})}emitReady(){this.isReady=!0,this.queuedMessages.forEach(e=>{console.warn("Run queued message",e),this.handleMessage(e).catch(console.error)}),self.postMessage({type:"ready",codesandbox:!0})}}("less-worker");function m(){return(m=o()((function*(e){const t=e.code,r=e.path,n=e.files,o=e.loaderContextId,i=[],s={files:n,loaderContextId:o,childHandler:p,addDependency:e=>{i.push({path:e})}},l=t.replace(/^\n$/gm,""),a=less;return{css:(yield a.render(l,{filename:r,plugins:[h(s)]})).css,transpilationDependencies:i}}))).apply(this,arguments)}self.less={env:"development"},self.window=self,self.window.document={currentScript:{async:!0},createElement:()=>({appendChild:()=>{}}),createTextNode:()=>({}),getElementsByTagName:()=>[],head:{appendChild:()=>{},removeChild:()=>{}}},self.importScripts("".concat("","/static/js/less-4.1.2.min.js")),p.registerFunction("compile",(function(e){return m.apply(this,arguments)})),p.emitReady()}});
//# sourceMappingURL=less-transpiler.74a88bd2.worker.js.map