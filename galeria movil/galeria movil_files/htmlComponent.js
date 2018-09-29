define("htmlComponent",["lodash","utils","core","santaProps","santa-components","skins","reactDOM"],function(t,e,o,n,r,s,i){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1423)}({0:function(e,o){e.exports=t},1:function(t,o){t.exports=e},12:function(t,e){t.exports=i},1423:function(t,e,o){var n,r;n=[o(6),o(0),o(2),o(1),o(12),o(3),o(7),o(1424)],void 0===(r=function(t,e,o,n,r,s,i,p){"use strict";var a=o.compMixins,l=n.urlUtils,c="static.wix.com";function u(t){return!!t.url}var m={displayName:"HtmlComponent",mixins:[a.skinBasedComp],propTypes:{compData:s.Types.Component.compData,compProp:s.Types.Component.compProp,isExperimentOpen:s.Types.isExperimentOpen,serviceTopologyStaticHTMLComponentUrl:s.Types.ServiceTopology.staticHTMLComponentUrl,useSandboxInHTMLComp:s.Types.RendererModel.useSandboxInHTMLComp,os:s.Types.Browser.os.isRequired,registerComponentToPostMessage:s.Types.HtmlPostMessage.registerComponent.isRequired,unRegisterComponentFromPostMessage:s.Types.HtmlPostMessage.unRegisterComponent.isRequired,externalBaseUrl:s.Types.PublicModel.externalBaseUrl},getIframeAttributes:function(){var t={width:"100%",height:"100%",ref:"iframe",scrolling:this.props.compData.scrolling||"auto","data-src":u(this.props.compData)?function(){var t=this.props.compData.url,o="external"===this.props.compData.sourceType,r=this.props.serviceTopologyStaticHTMLComponentUrl,s=e.startsWith(this.props.serviceTopologyStaticHTMLComponentUrl,"https")?"https:":"http:";if(!o&&n.stringUtils.startsWith(t,"html/")&&(t=r+t),t=l.addProtocolIfMissing(t,s),r=l.addProtocolIfMissing(r),"https:"===s&&(t=l.setProtocol(t,s)),!o&&(t=t.replace("//static.wixstatic.com",r),e.includes(t,c))){var i=e.head(t.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im));t=t.replace(i,r)}return t}.call(this):""};return this.props.compData.allowFullScreen&&e.assign(t,{allowFullScreen:!0}),e.get(this.props,"compProp.isHidden")&&e.set(t,"style.display","none"),function(){return this.props.useSandboxInHTMLComp}.call(this)?e.assign(t,{sandbox:"allow-same-origin allow-forms allow-popups allow-scripts allow-pointer-lock"}):t},onLoad:function(){this.props.registerComponentToPostMessage(this.props.id,this.refs.iframe.contentWindow)},getInitialState:function(){return{$content:u(this.props.compData)?"hasContent":"noContent"}},componentDidMount:function(){var t=r.findDOMNode(this.refs.iframe);t&&(t.onload=this.onLoad)},componentWillUnmount:function(){this.props.unRegisterComponentFromPostMessage(this.props.id)},componentWillReceiveProps:function(){this.setState({$content:u(this.props.compData)?"hasContent":"noContent"})},getSkinProperties:function(){var o={};return!0===this.props.os.ios&&e.assign(o,{overflow:"scroll",WebkitOverflowScrolling:"touch"}),{"":{style:o},iFrameHolder:{children:[t.utils.createReactElement("iframe",this.getIframeAttributes())]}}}};return o.compRegistrar.register("wysiwyg.viewer.components.HtmlComponent",m),i.skinsMap.addBatch(p),m}.apply(e,n))||(t.exports=r)},1424:function(t,e,o){var n;void 0===(n=function(){"use strict";var t={"wysiwyg.viewer.skins.HtmlComponentSkin":{react:[["div","iFrameHolder",[],{}]],css:{"%iFrameHolder":"width:100%;height:100%;","%iFrameHolder > iframe":"position:absolute;",'%[data-state="noContent"]':"background-color:#A5A5A5;"}}};return t}.apply(e,[]))||(t.exports=n)},2:function(t,e){t.exports=o},3:function(t,e){t.exports=n},6:function(t,e){t.exports=r},7:function(t,e){t.exports=s}})});
//# sourceMappingURL=htmlComponent.min.js.map