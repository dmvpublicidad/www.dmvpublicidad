define("viewerCompsService",["lodash","coreUtils"],function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1894)}({0:function(t,n){t.exports=e},1894:function(e,t,n){var r,o,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r=[n(0),n(4)],void 0===(o=function(e,t){"use strict";var n=t.getPackagesForComponent,r=t.allPackages,o=t.packagesToCallbacks,u=function(){function e(){s(this,e),this._comps={},this.STATUS={PENDING:"PENDING",LOADED:"LOADED",FAILURE:"FAILURE"}}return i(e,[{key:"markComponentAsPending",value:function(e){this._comps[e]||(this._comps[e]={status:this.STATUS.PENDING})}},{key:"isComponentLoaded",value:function(e){return this._comps[e]&&this._comps[e].status===this.STATUS.LOADED}},{key:"markComponentAsLoaded",value:function(e){this._comps[e].status=this.STATUS.LOADED}}]),e}();return function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,t),this.compRegistrar=e,this.siteAspectsRegistry=n,this.storeData=new u}return i(t,[{key:"isComponentLoaded",value:function(e){return this.storeData.isComponentLoaded(e)}},{key:"exists",value:function(e,t){return n(e,t).length>0}},{key:"prefetchComponents",value:function(t){var r=e(t).flatMap(function(e){return n(e)}).uniq().value();r.length>0&&requirejs(r,e.noop)}},{key:"loadAndRegisterAll",value:function(){var e=this;return new Promise(function(e){return requirejs(["skins"],e)}).then(function(t){return Promise.all([function(e,t,n){var i=r(),s=o(i);return new Promise(function(r){return requirejs(i,function(){for(var o=arguments.length,u=Array(o),a=0;a<o;a++)u[a]=arguments[a];i.forEach(function(r,o){return s[r](u[o],t.register,n.registerHostLibsAspect,e.addBatch)}),r()})})}(t.skinsMap,e.compRegistrar,e.siteAspectsRegistry)])})}},{key:"loadAndRegister",value:function(e,t){var r=this;return this.storeData.markComponentAsPending(e),new Promise(function(e){return requirejs(["skins"],e)}).then(function(i){return function(e,t,n,r){var i=o(e);return new Promise(function(o){return requirejs(e,function(){for(var s=arguments.length,u=Array(s),a=0;a<s;a++)u[a]=arguments[a];e.forEach(function(e,o){return i[e](u[o],n.register,r.registerHostLibsAspect,t.addBatch)}),o()})})}(n(e,t),i.skinsMap,r.compRegistrar,r.siteAspectsRegistry)}).then(function(){r.storeData.markComponentAsLoaded(e)})}}]),t}()}.apply(t,r))||(e.exports=o)},4:function(e,n){e.exports=t}})});
//# sourceMappingURL=viewerCompsService.min.js.map