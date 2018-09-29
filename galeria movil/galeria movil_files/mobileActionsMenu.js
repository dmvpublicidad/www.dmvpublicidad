define("mobileActionsMenu",["lodash","utils","core","santaProps","coreUtils","prop-types","santa-components","skins","create-react-class"],function(e,t,i,o,n,s,r,a,l){return function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1536)}({0:function(t,i){t.exports=e},1:function(e,i){e.exports=t},1536:function(e,t,i){var o,n;o=[i(6),i(0),i(2),i(3),i(1537),i(1538),i(7),i(1539),i(1540)],void 0===(n=function(e,t,i,o,n,s,r,a){"use strict";function l(e,o,n,r){function a(e,a){return function(e,o,n,r,a){var l=e.link?e.link.render.href:null;return i.createReactElement(s,{label:e.label,href:l,target:l?"page":null,"data-anchor":t.get(e,"link.render.data-anchor"),closeMenu:a,level:n,hasChildren:e.items&&e.items.length>0,isSelected:"#"+o===e.link&&e.link.pageId,styleId:r})}(a,o,e,n,r)}return t(e).filter("isVisibleMobile").reduce(function(e,i){var o=t(i.items).filter("isVisibleMobile").map(a.bind(null,2)).value();return e.concat([a(1,i)]).concat(o)},[])}function p(e,o,n){return t.map(e,function(e){return function(e,t,o,n){return i.createReactElement(s,{label:function(e){return{facebook:"Facebook",twitter:"Twitter",pinterest:"Pinterest",google_plus:"Google+",tumblr:"Tumblr",blogger:"Blogger",linkedin:"LinkedIn",youtube:"YouTube",vimeo:"Vimeo",flickr:"Flickr","":""}[e]||e}(e),href:t,target:"window",styleId:o,openPopup:n})}(e.id,e.url,o,n)})}var c={displayName:"MobileActionsMenu",mixins:[i.compMixins.skinBasedComp],propTypes:{userColorScheme:o.Types.RendererModel.siteMetaData.quickActions.colorScheme.isRequired,socialLinks:o.Types.RendererModel.siteMetaData.quickActions.socialLinks.isRequired,contactInfo:o.Types.RendererModel.siteMetaData.contactInfo.isRequired,configuration:o.Types.RendererModel.siteMetaData.quickActions.configuration.isRequired,getInvertedZoomRatio:o.Types.mobile.getInvertedZoomRatio.isRequired,siteMenuWithRender:o.Types.Menu.siteMenuWithRender.isRequired,currentUrlPageId:o.Types.Component.currentUrlPageId.isRequired,reportBI:o.Types.reportBI.isRequired,styleId:o.Types.Component.styleId.isRequired,siteId:o.Types.RendererModel.siteId.isRequired,openPopup:o.Types.popup.open.isRequired,siteScrollingBlocker:o.Types.SiteAspects.siteScrollingBlocker.isRequired},getInitialState:function(){return{$display:"closed",$theme:this.props.userColorScheme||"dark",$list:"nolist",zoom:1}},componentDidMount:function(){this.props.siteScrollingBlocker.registerScrollBlockedListener({handleUnblockedBy:this.display,handleBlockedBy:this.hide})},display:function(){this.setState({shouldHide:!1})},hide:function(){this.setState({shouldHide:!0})},componentDidLayout:function(){t.delay(function(){var e=this.props.getInvertedZoomRatio();this.setState({zoom:e})}.bind(this),1e3)},getSkinProperties:function(){var t={display:this.state.shouldHide?"none":""},i=this.props.siteMenuWithRender,o="pages"===this.state.$list?l(i,this.props.currentUrlPageId,this.props.styleId,this.onListCloseClick):[],n="social"===this.state.$list?p(this.props.socialLinks,this.props.styleId,this.props.openPopup):[],s=[];return this.props.configuration.navigationMenuEnabled&&s.push(e.utils.createReactElement("li",{key:"nav",className:this.props.styleId+"_navigation",onClick:this.onMenuItemClick.bind(this,"pages")},e.utils.createReactElement("a"))),this.props.configuration.phoneEnabled&&s.push(e.utils.createReactElement("li",{key:"phone",className:this.props.styleId+"_phone",onClick:this.onMenuItemClick.bind(this,"phone")},e.utils.createReactElement("a"))),this.props.configuration.emailEnabled&&s.push(e.utils.createReactElement("li",{key:"email",className:this.props.styleId+"_email",onClick:this.onMenuItemClick.bind(this,"email")},e.utils.createReactElement("a"))),this.props.configuration.addressEnabled&&s.push(e.utils.createReactElement("li",{key:"address",className:this.props.styleId+"_address",onClick:this.onMenuItemClick.bind(this,"address")},e.utils.createReactElement("a"))),this.props.configuration.socialLinksEnabled&&s.push(e.utils.createReactElement("li",{key:"social",className:this.props.styleId+"_socialLinks",onClick:this.onMenuItemClick.bind(this,"social")},e.utils.createReactElement("a"))),0===s.length&&(t.display="none"),t.zoom=this.state.zoom,{"":{style:t},wrapper:{onSwipeUp:this.onTouchSwipeUp,onSwipeDown:this.onTouchSwipeDown,style:{className:"mobile-actions-menu-wrapper"}},knobContainer:{},knob:{onClick:this.onKnobClick},menuContainer:{children:e.utils.createReactElement("ul",{children:s}),style:{}},lists:{},listTitle:{children:"pages"===this.state.$list?"Pages":"See me on..."},pagesList:{children:e.utils.createReactElement("ul",{children:o})},socialList:{children:e.utils.createReactElement("ul",{children:n})},closeBtn:{onClick:this.onListCloseClick,onTouchEnd:this.onListCloseClick}}},componentWillReceiveProps:function(e){this.props.currentUrlPageId!==e.currentUrlPageId&&this.setState({$list:"nolist"})},onKnobClick:function(e){e.preventDefault(),e.stopPropagation(),this.props.reportBI(n.MOBILE_ACTION_BAR_TOGGLE,{site_id:this.props.siteId,status:"opened"!==this.state.$display}),this.setState({$display:"opened"===this.state.$display?"closed":"opened"})},onTouchSwipeUp:function(e){e.preventDefault(),e.stopPropagation(),"opened"!==this.state.$display&&this.setState({$display:"opened"})},onTouchSwipeDown:function(e){e.preventDefault(),e.stopPropagation(),"closed"!==this.state.$display&&this.setState({$display:"closed"})},onMenuItemClick:function(e,t){switch(t.preventDefault(),t.stopPropagation(),this.props.reportBI(n.MOBILE_ACTION_BAR_USAGE,{site_id:this.props.siteId,button_name:e}),e){case"pages":this.setState({$list:"pages"});break;case"address":window.location.href="http://maps.apple.com/?q="+this.props.contactInfo.address;break;case"phone":window.location.href="tel:"+this.props.contactInfo.phone;break;case"whatsapp":var i=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(new RegExp("[+| |-]","g"),"")}(this.props.contactInfo.whatsapp);window.location.href="https://api.whatsapp.com/send?phone="+i;break;case"email":window.location.href="mailto:"+this.props.contactInfo.email;break;case"social":this.setState({$list:"social"})}},onListCloseClick:function(){return this.setState({$list:"nolist"}),!1}};return i.compRegistrar.register("wysiwyg.viewer.components.MobileActionsMenu",c),r.skinsMap.addBatch(a),c}.apply(t,o))||(e.exports=n)},1537:function(e){e.exports={MOBILE_ACTION_BAR_TOGGLE:{eventId:370,adapter:"ugc-viewer",params:{site_id:"site_id",status:"status"}},MOBILE_ACTION_BAR_USAGE:{eventId:371,adapter:"ugc-viewer",params:{site_id:"site_id",button_name:"button_name"}}}},1538:function(e,t,i){var o,n;o=[i(6),i(5),i(18),i(1)],void 0===(n=function(e,t,i,o){"use strict";return i({displayName:"MobileActionsMenuItem",propTypes:{styleId:t.string.isRequired,target:t.string.isRequired,href:t.string.isRequired,label:t.string.isRequired,isSelected:t.bool,level:t.number,hasChildren:t.bool,"data-anchor":t.string,closeMenu:t.func,openPopup:t.func},render:function(){var t={};t[this.props.styleId+"_selected"]=this.props.isSelected,t[this.props.styleId+"_subItem"]=this.props.level>1,t[this.props.styleId+"_hasChildren"]=this.props.hasChildren;var i="#";return"page"===this.props.target?i=this.props.href:null===this.props.target&&(i=""),e.utils.createReactElement("li",{onClick:this.onItemClick},e.utils.createReactElement("a",{href:i,"data-anchor":this.props["data-anchor"],className:o.classNames(t)},this.props.level>1?"> "+this.props.label:this.props.label))},onItemClick:function(){"window"===this.props.target?this.props.openPopup(this.props.href):"page"===this.props.target&&this.props.closeMenu()}})}.apply(t,o))||(e.exports=n)},1539:function(e,t,i){var o;void 0===(o=function(){"use strict";var e={"wysiwyg.viewer.skins.mobile.MobileActionsMenuSkin":{react:[["div","wrapper",[],{},["div","knobContainer",[],{},["div","knob",[],{}]],["div","menuContainer",[],{}]],["div","lists",[],{},["div","listsShadow",[],{},["div","listsContainer",[],{},["div","pagesList",["_list"],{}],["div","socialList",["_list"],{}]],["div","header",[],{},["div","listTitle",[],{}],["div","closeBtn",[],{}]]]]],css:{"%":"pointer-events:none;","%wrapper":"position:fixed;z-index:98;width:100%;right:0;left:0;-webkit-transition:bottom .2s ease-in-out;transition:bottom .2s ease-in-out;bottom:-58px;",'%[data-state~="opened"] %wrapper':"bottom:0;","%knobContainer":"text-align:center;width:100%;","%knob":'pointer-events:auto;width:150px;height:40px;margin:0 auto;background-image:url("//static.parastorage.com/services/web/2.1113.24/images/wysiwyg/viewer/quickAction_darkSprite.png");background-position:50% -430px;background-size:430px;','%[data-state~="light"] %knob':'background-image:url("//static.parastorage.com/services/web/2.1113.24/images/wysiwyg/viewer/quickAction_lightSprite.png");',"%menuContainer":'display:table;width:100%;background-color:#3e3e3e;background-position:50% 60%;background-size:100% 23px;background-repeat:no-repeat;background-image:url("//static.parastorage.com/services/web/2.1113.24/images/wysiwyg/viewer/quickActions_dark_bg.png");height:53px;box-shadow:0 -5px 15px 0 rgba(0, 0, 0, 0.5);pointer-events:auto;','%[data-state~="light"] %menuContainer':"background:-webkit-linear-gradient(top, #fff 35%, #d7d7d7 80%);background:linear-gradient(to bottom, #fff 35%, #d7d7d7 80%);background-position:inherit;background-size:inherit;background-repeat:inherit;","%menuContainer ul":"display:table-row;list-style:none;","%menuContainer ul li":"display:table-cell;text-align:center;height:53px;border:1px solid #575757;border-left-color:#363636;",'%[data-state~="light"] %menuContainer ul li':"border:1px solid #d9d9d9;border-left-color:#999;","%menuContainer ul li a":'background-image:url("//static.parastorage.com/services/web/2.1113.24/images/wysiwyg/viewer/quickAction_darkSprite.png");background-repeat:no-repeat;width:40px;height:100%;display:inline-block;overflow:hidden;direction:ltr;white-space:nowrap;text-indent:-9999em;background-size:420px;','%[data-state~="light"] %menuContainer ul li a':'background-image:url("//static.parastorage.com/services/web/2.1113.24/images/wysiwyg/viewer/quickAction_lightSprite.png");',"%menuContainer ul li div":"border:1px solid #666;border-bottom-color:#999;margin:3px;","%actionsMenu %_menu ul li div":"border:1px solid #666;border-bottom-color:#999;margin:3px;","%menuContainer ul li%_navigation a":"background-position:-13px -4px;","%menuContainer ul li%_phone a":"background-position:-78px -4px;","%menuContainer ul li%_email a":"background-position:-141px -4px;","%menuContainer ul li%_address a":"background-position:-208px -4px;","%menuContainer ul li%_socialLinks a":"background-position:-273px -4px;","%lists":"position:fixed;background:rgba(0, 0, 0, 0.1);width:100%;height:100%;display:block;z-index:98;top:0;pointer-events:auto;","%lists %header":"left:0;right:0;position:absolute;background-color:rgba(255, 255, 255, 0.9);background-image:-webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.26) 26%, rgba(255, 255, 255, 0.52) 52%, rgba(214, 214, 214, 0.72) 72%, #c9c9c9 100%);background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.26) 26%, rgba(255, 255, 255, 0.52) 52%, rgba(214, 214, 214, 0.72) 72%, #c9c9c9 100%);","%lists %header %closeBtn":'width:35px;height:35px;float:right;background-image:url("//static.parastorage.com/services/web/2.1113.24/images/wysiwyg/viewer/x.png");background-size:40%;background-repeat:no-repeat;background-position:50% 50%;border-left:1px #B0AFAF solid;',"%lists %header %listTitle":"float:left;color:#808080;line-height:35px;padding-left:15px;margin:0;font-size:1.3em;","%listsShadow":"display:block;top:50px;bottom:0;left:13px;right:13px;position:absolute;box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.3);-webkit-transition:top .8s ease-in-out;transition:top .8s ease-in-out;","%listsContainer":"top:35px;bottom:0;left:0;right:0;background:#FFF;position:absolute;overflow-y:auto;","%listsContainer %_list":"background-color:rgba(255, 255, 255, 0.9);",'%[data-state~="nolist"] %lists':"display:none;",'%[data-state~="nolist"] %listsShadow':"top:1000px;","%listsContainer %_list ul":"width:100%;height:100%;","%listsContainer %_list ul li a%_selected":"color:#FFF;background:rgba(16, 90, 200, 0.7);","%listsContainer %_list ul li a":"color:#000;font-size:1.7em;background:transparent;text-decoration:none;cursor:pointer;display:block;padding:1em;border-bottom:1px #B0AFAF solid;"}}};return e}.apply(t,[]))||(e.exports=o)},1540:function(e,t,i){var o,n;o=[i(0),i(2),i(4)],void 0===(n=function(e,t,i){"use strict";function o(){}return o.prototype={getComponentsToRender:function(t){var o=t.getSiteData(),n=function(t){var o=t.getSiteData(),n=t.getPointers(),s=e.get(o.getSiteMetaData(),"quickActions.configuration.quickActionsMenuEnabled",!1),r=n.components.getMasterPage(i.constants.VIEW_MODES.MOBILE),a=!e.some(n.components.getChildren(r),{id:"QUICK_ACTION_BAR"});if(o.isMobileDevice()&&t.getRenderFlag("renderMobileActionMenu")&&s&&a)return{id:"MOBILE_ACTIONS_MENU",skin:"wysiwyg.viewer.skins.mobile.MobileActionsMenuSkin",componentType:"wysiwyg.viewer.components.MobileActionsMenu",styleId:"mobileActionsMenu",layout:{position:"static"}}}(t);return n?[{structure:n,props:{userColorScheme:o.rendererModel.siteMetaData.quickActions.colorScheme}}]:null}},t.siteAspectsRegistry.registerSiteAspect("mobileActionsMenu",o),o}.apply(t,o))||(e.exports=n)},18:function(e,t){e.exports=l},2:function(e,t){e.exports=i},3:function(e,t){e.exports=o},4:function(e,t){e.exports=n},5:function(e,t){e.exports=s},6:function(e,t){e.exports=r},7:function(e,t){e.exports=a}})});
//# sourceMappingURL=mobileActionsMenu.min.js.map