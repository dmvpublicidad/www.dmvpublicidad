define("mediaPlayer",["lodash","core","santaProps","coreUtils","santa-components","skins","react","components"],function(e,t,i,n,o,r,a,s){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1523)}({0:function(t,i){t.exports=e},1523:function(e,t,i){var n,o;n=[i(0),i(19),i(2),i(4),i(3),i(24),i(6),i(7),i(1524)],void 0===(o=function(e,t,i,n,o,r,a,s,c){"use strict";var l=n.mediaConsts,p=r.mediaCommon.mediaLogicMixins.mediaPlayer,u=i.compMixins.timeoutsMixin,d=a.mixins.inlineContentMixin,m={displayName:"MediaPlayer",mixins:[i.compMixins.skinBasedComp,p,u,i.compMixins.createChildComponentMixin,d],propTypes:{style:o.Types.Component.style.isRequired,compDesign:o.Types.Component.compDesign,compProp:o.Types.Component.compProp,isMobileDevice:o.Types.Device.isMobileDevice,containerStyle:o.Types.MediaPlayerDesign.containerStyle,isMobileView:o.Types.isMobileView},statics:{behaviors:r.mediaCommon.mediaBehaviors.mediaPlayer},getInitialState:function(){return this.timedHoverAndAnimationDuration=!1,{hover:!1,timedHover:!1}},addPropsToChildren:function(i){var n={allowReplay:e.get(this.props.compProp.playerInteraction,"allowReplay",!0),playerInHoverInteraction:"none"!==this.props.compProp.playerInteraction.rollIn&&!this.isMobile(),playerInHoverState:this.state.hover,playerInTimedHoverState:this.state.timedHover};return t.Children.map(i,function(e){return t.cloneElement(e,n)})},toggleHover:function(e){var t=this.getMediaState().playbackState===l.playbackTypes.PLAY_ENDED,i=!1===this.props.compProp.playerInteraction.allowReplay&&t,n="mouseleave"!==e.type&&!i;this.setState({hover:n}),n||this.removeTimedHover()},setTimedHover:function(){var e=this;this.state.timedHover||this.setState({timedHover:!0},function(){e.timedHoverAndAnimationDuration=!0}),this.setTimeout(this.removeTimedHover,this.isMobile()?4e3:2e3)},removeTimedHover:function(){var e=this;this.setState({timedHover:!1}),this.setTimeout(function(){e.timedHoverAndAnimationDuration=!1},500)},handleHoverAction:function(e){var t=this;return function(i){t.toggleHover(i),e.forEach(function(e){if(e.action){var t=e.params||[];e.action.apply(e,function(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}(t))}})}},getAudioHoverInteraction:function(t){var i=e.get(this.props.compProp,["playerAudioInteraction",t]);return{mute:{action:this.mediaVolumeFadeOut,params:[.5]},unmute:{action:this.mediaVolumeFadeIn,params:[.5]}}[i]},getVideoHoverInteraction:function(e){var t=this.props.compProp.playerInteraction[e];return{play:{action:this.playMedia},pause:{action:this.pauseMedia},none:null}[t]},getClickInteraction:function(){var e=this;return{toggle:function(){return e.togglePlayMedia()},play:function(){return e.playMedia()}}[this.props.compProp.playerInteraction.click]},convertHoverToCommandActions:function(){var t=this;return"pause"===this.props.compProp.playerInteraction.rollOut?function(){return t.togglePlayMedia()}:"play"===this.props.compProp.playerInteraction.rollIn?function(){return t.playMedia()}:e.noop},shouldTriggerAction:function(){var e=this.getMediaState().playbackState===l.playbackTypes.IDLE,t=!1===this.props.compDesign.background.mediaRef.hasAudio||this.props.compProp.disableAudio;return this.timedHoverAndAnimationDuration||e||t},getTouchInteraction:function(e){var t=this;return function(i){i.preventDefault(),t.invokeMobileInteraction(i,e)}},getMobileClickInteraction:function(e){var t=this;return function(i){t.invokeMobileInteraction(i,e)}},invokeMobileInteraction:function(e,t){this.setTimedHover(),this.shouldTriggerAction()&&t(),this.toggleHover(e)},isMobile:function(){return this.props.isMobileView||this.props.isMobileDevice},getInteractionEvents:function(){if(this.isMobile()){var t=this.getClickInteraction()||this.convertHoverToCommandActions();return function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({},this.props.isMobileDevice?"onTap":"onClick",this.getMobileClickInteraction(t))}var i=[this.getVideoHoverInteraction("rollIn"),this.getAudioHoverInteraction("rollIn")],n=[this.getVideoHoverInteraction("rollOut"),this.getAudioHoverInteraction("rollOut")];return{onMouseMove:this.setTimedHover,onClick:this.getClickInteraction(),onMouseEnter:this.handleHoverAction(e.compact(i)),onMouseLeave:this.handleHoverAction(e.compact(n))}},getSkinProperties:function(){var t={"":{style:this.props.style},background:this.createFillLayers(),container:{style:this.props.containerStyle},inlineContent:{children:this.getChildrenRenderer({children:this.addPropsToChildren(this.props.children)})}};return e.assign(t.container,this.getInteractionEvents()),t}};return i.compRegistrar.register("wysiwyg.viewer.components.MediaPlayer",m),s.skinsMap.addBatch(c),m}.apply(t,n))||(e.exports=o)},1524:function(e,t,i){var n;void 0===(n=function(){"use strict";var e={"wysiwyg.viewer.skins.mediaPlayerSkin":{react:[["div","container",[],{},["div","background",[],{}],["div","inlineContentParent",[],{},["div","inlineContent",[],{}]]]],css:{"% *":"-webkit-tap-highlight-color:rgba(0, 0, 0, 0);","%inlineContentParent":"position:absolute;top:0;right:0;bottom:0;left:0;","%container":"position:absolute;top:0;left:0;width:100%;height:100%;"}}};return e}.apply(t,[]))||(e.exports=n)},19:function(e,t){e.exports=a},2:function(e,i){e.exports=t},24:function(e,t){e.exports=s},3:function(e,t){e.exports=i},4:function(e,t){e.exports=n},6:function(e,t){e.exports=o},7:function(e,t){e.exports=r}})});
//# sourceMappingURL=mediaPlayer.min.js.map