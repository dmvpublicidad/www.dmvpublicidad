define("boxSlideShowSlide",["lodash","core","prop-types","santa-components","skins","zepto","reactDOM","components","stripSlideShow"],function(e,t,o,n,i,r,s,l,a){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=710)}({0:function(t,o){t.exports=e},10:function(e,t){e.exports=r},12:function(e,t){e.exports=s},2:function(e,o){e.exports=t},231:function(e,t){e.exports=a},24:function(e,t){e.exports=l},5:function(e,t){e.exports=o},6:function(e,t){e.exports=n},7:function(e,t){e.exports=i},710:function(e,t,o){var n,i;n=[o(0),o(10),o(5),o(12),o(24),o(6),o(2),o(7),o(231),o(711)],void 0===(i=function(e,t,o,n,i,r,s,l,a,d){"use strict";var p=r.mixins.scrollMixin,u={displayName:"boxSlideShowSlide",mixins:[i.mediaCommon.mediaLogicMixins.fill,s.compMixins.skinBasedComp,p,s.compMixins.createChildComponentMixin,s.compMixins.inlineContentMixin],propTypes:{style:a.SlideShowSantaTypes.slideStyle,shouldHideOverflowContent:o.bool,flexibleBoxHeight:o.bool,onMouseEnter:o.func,onMouseLeave:o.func,parentId:o.string,minHeight:o.number},statics:{applyCompSpecificDomOnlyPatches:function(e,o){t(n.findDOMNode(e)).data("min-height",o.minHeight)},behaviors:i.mediaCommon.mediaBehaviors.fill},getSkinProperties:function(){return{"":{"data-shouldhideoverflowcontent":this.props.shouldHideOverflowContent&&!this.props.flexibleBoxHeight,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,"data-flexibleboxheight":this.props.flexibleBoxHeight,"data-parent-id":this.props.parentId,"data-min-height":this.props.style.minHeight},background:this.createFillLayers(),inlineContent:{children:this.getChildrenRenderer()}}}};return s.compRegistrar.register("wysiwyg.viewer.components.BoxSlideShowSlide",u),l.skinsMap.addBatch(d),u}.apply(t,n))||(e.exports=i)},711:function(e,t,o){var n;void 0===(n=function(){"use strict";var e={"wysiwyg.common.components.boxSlideShowSlide.viewer.skins.boxSlideShowSlideSkin":{react:[["div","background",[],{},["div","backgroundMedia",[],{}]],["div","borderNode",[],{}],["div","inlineContentParent",[],{},["div","inlineContent",[],{}]]],params:{brw:"BORDER_SIZE",brd:"BORDER_COLOR_ALPHA"},paramsDefaults:{brw:"0",brd:"color_11"},css:{"%borderNode":"border:[brw] solid [brd];position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;","%inlineContent":"position:absolute;top:0;right:0;bottom:0;left:0;","%inlineContentParent":"position:absolute;width:100%;height:100%;",'%[data-leaving="true"]':"position:absolute;top:0;right:0;bottom:0;left:0;",'%[data-shouldhideoverflowcontent="true"]':"overflow:hidden;"}}};return e}.apply(t,[]))||(e.exports=n)}})});
//# sourceMappingURL=boxSlideShowSlide.min.js.map