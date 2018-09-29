define("santaPreviewComponents",["lodash","santa-components"],function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1608)}({0:function(t,n){t.exports=e},1608:function(e,t,n){var r,o;r=[n(1609)],void 0===(o=function(e){"use strict";return{components:e}}.apply(t,r))||(e.exports=o)},1609:function(e,t,n){var r,o;r=[n(6),n(1610)],void 0===(o=function(e,t){"use strict";var n=e.components.HeaderContainer,r=e.components.FooterContainer;return{HeaderContainerPreview:t(n),FooterContainerPreview:t(r)}}.apply(t,r))||(e.exports=o)},1610:function(e,t,n){var r,o,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();r=[n(0),n(6)],void 0===(o=function(e,t){"use strict";var n=t.santaTypesDefinitions;return function(r){var o=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,r),i(n,[{key:"getTransformedCssStates",value:function(){return this.props.renderFixedPositionContainers?this.state:e.omit(this.state,"$fixed")}},{key:"getRootPosition",value:function(e){return this.props.renderFixedPositionContainers?e.position:this.props.isMeshLayoutMechanism?"":"absolute"}}]),n}();return o.propTypes=e.defaults({renderFixedPositionContainers:n.RenderFlags.renderFixedPositionContainers.isRequired,isMeshLayoutMechanism:t.santaTypesDefinitions.Layout.isMeshLayoutMechanism},r.propTypes),o.displayName=r.displayName+"Preview)",o}}.apply(t,r))||(e.exports=o)},6:function(e,n){e.exports=t}})});
//# sourceMappingURL=santaPreviewComponents.min.js.map