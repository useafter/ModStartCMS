!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/asset//",o(o.s=292)}({292:function(e,t,r){var c=r(6);window.api.commonVerify=function(e){var n=c.extend({generateServer:"",selectorTarget:"",selectorGenerate:"",selectorCountdown:"",selectorRegenerate:"",selectorCaptcha:"",selectorCaptchaImg:"",interval:60,tipError:function(e){window.api.dialog.tipError(e)},sendError:function(e){window.api.dialog.tipError(e)},formData:function(){return{}}},e),o=0,a=function(){var e=c(n.selectorCountdown);e.is("input")?e.val(o+" s"):e.html(o+" s"),0<o?(o--,setTimeout(a,1e3),c(n.selectorCountdown).show(),c(n.selectorRegenerate).hide()):(e.hide(),c(n.selectorCountdown).hide(),c(n.selectorRegenerate).show())},i=!1,e=function(){var e=c(n.selectorTarget).val(),t=null;if(n.selectorCaptcha&&!(t=c(n.selectorCaptcha).val()))return n.tipError("图片验证码为空"),!1;if(i)return!1;i=!0,window.api.dialog.loadingOn();var r=n.formData();return window.api.base.post(n.generateServer,Object.assign(r,{target:e,captcha:t}),function(e){window.api.dialog.loadingOff(),i=!1,window.api.base.defaultFormCallback(e,{success:function(e){e.data&&alert(e.data),c(n.selectorGenerate).hide(),o=n.interval,a(o)},error:function(e){c(n.selectorCaptchaImg).click(),e.data&&alert(e.data),n.sendError(e.msg)}})}),!1};c(n.selectorGenerate).on("click",e),c(n.selectorRegenerate).on("click",e)}},6:function(e,t){e.exports=window.$}});