define("checkboxGroup",["lodash","core","santaProps","skins","reactDOM","textCommon"],function(e,t,i,o,n,r){return function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=716)}({0:function(t,i){t.exports=e},12:function(e,t){e.exports=n},2:function(e,i){e.exports=t},3:function(e,t){e.exports=i},35:function(e,t){e.exports=r},7:function(e,t){e.exports=o},716:function(e,t,i){var o,n;o=[i(0),i(12),i(2),i(3),i(35),i(7),i(717)],void 0===(n=function(e,t,i,o,n,r,s){"use strict";var c=["checkbox0","refs","input"],p=function(e){return i.compMixins.validatableWithSyncMixin.getPublicState(e)},a=function(e){return"vertical"===e.compProp.layout},l={displayName:"CheckboxGroup",propTypes:{compData:o.Types.Component.compData.isRequired,compProp:o.Types.Component.compProp.isRequired,shouldResetComponent:o.Types.RenderFlags.shouldResetComponent,isMobileView:o.Types.isMobileView},mixins:[i.compMixins.skinBasedComp,i.compMixins.runTimeCompData,n.textScaleMixin,i.compMixins.inputFocusMixin,i.compMixins.validatableWithSyncMixin.validatableWithSync,i.compMixins.compStateMixin(p),i.compMixins.createChildComponentMixin],statics:{useSantaTypes:!0,compSpecificIsDomOnlyOverride:function(){return!1},behaviors:e.assign({},i.compMixins.inputFocusMixin.INPUT_FOCUS_BEHAVIORS,i.compMixins.validatableWithSyncMixin.VALIDATABLE_WITH_SYNC_BEHAVIORS)},getInitialState:function(){return e.assign(p(),{$mobile:this.props.isMobileView?"mobile":"desktop"})},componentWillReceiveProps:function(e){e.shouldResetComponent&&e.shouldResetComponent!==this.props.shouldResetComponent&&this.hideValidityIndication()},getFirstCheckboxInputDOMNode:function(){var i=e.get(this.refs,c);return t.findDOMNode(i)},getAllCheckboxInputsDOMNodes:function(){return e(this.refs).filter(function(e,t){return 0===t.indexOf("checkbox")}).values().map(function(t){return e.get(t,["refs","input"])}).value()},focus:function(){(e.find(this.getAllCheckboxInputsDOMNodes(),"checked")||this.getFirstCheckboxInputDOMNode()).focus()},blur:function(){e.forEach(this.getAllCheckboxInputsDOMNodes(),function(e){e.blur()})},setCheckboxSelected:function(t,i,o){var n=e.cloneDeep(this.props.compData.options);n[i].checked=!t.checked,this.updateData({options:n}),this.handleAction("change",o)},createChildren:function(){var t=!e.some(this.props.compData.options,"checked");return e.map(this.props.compData.options,e.partial(this.createChildCheckbox,t))},createChildCheckbox:function(e,t,i){var o=this.props.compData.options.length,n=i===o-1,r={id:this.props.id+"checkbox"+i,ref:"checkbox"+i,text:this.props.compData.options[i].label,groupName:this.props.id,key:"checkbox"+i+t.label,onChange:this.setCheckboxSelected.bind(this,t,i),buttonSize:this.props.compProp.buttonSize,previewState:this.getComponentPreviewState(),invalid:!this.isValid(),validityIndication:this.shouldShowValidityIndication(),"data-error":!this.isValid(),textStyle:this.getFontSize("fnt"),numOfOptions:o,layout:this.props.compProp.layout,style:{},checked:t.checked,noneSelected:e};return n||(a(this.props)?r.style.marginBottom=this.props.compProp.buttonsMargin:r.style.marginRight=this.props.compProp.buttonsMargin),this.createChildComponent(t,"wysiwyg.viewer.components.inputs.Checkbox","checkbox",r)},getLabelStyle:function(){var t=this.props.compProp,i=t.alignment,o=t.labelMargin,n=this.props.compData.label;return e.merge({},this.getFontSize("fnt2"),{display:n?"inline-block":"none",marginBottom:o,textAlign:i,direction:"right"===i?"rtl":"ltr"})},getSkinProperties:function(){var e={};e[this.props.compProp.layout+"-axis"]=!0;var t=this.createChildren();return{"":{style:{height:"",minWidth:a(this.props)?60:60*t.length},className:this.classSet(e)},items:{children:t},label:{children:this.props.compData.label,style:this.getLabelStyle()}}}};return i.compRegistrar.register("wysiwyg.viewer.components.inputs.CheckboxGroup",l,!0),r.skinsMap.addBatch(s),l}.apply(t,o))||(e.exports=n)},717:function(e,t,i){var o;void 0===(o=function(){"use strict";var e={"skins.input.CheckboxGroupDefaultSkin":{react:[["fieldset",null,[],{},["legend",null,[],{},["div","label",[],{}]],["div","items",[],{}]]],exports:{checkbox:{skin:"wysiwyg.viewer.skins.input.CheckboxBasicSkin"}},params:{fnt2:"FONT",txt2:"TEXT_COLOR"},paramsDefaults:{fnt2:"font_8",txt2:"color_15"},css:{"%items":"display:-webkit-box;display:-webkit-flex;display:flex;","%_horizontal-axis %items":"-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;","%_vertical-axis %items":"-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;","%label":"[fnt2]  color:[txt2];word-break:break-word;display:inline-block;line-height:1;width:100%;"}}};return e}.apply(t,[]))||(e.exports=o)}})});
//# sourceMappingURL=checkboxGroup.min.js.map