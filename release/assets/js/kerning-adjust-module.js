"use strict";function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}/*!
 * js-kerning-adjust-module.js JavaScript Library v1.0
 * https://github.com/yama-dev/js-kerning-adjust-module
 * Copyright yama-dev
 * Licensed under the MIT license.
 * Date: 2016-11-07
 */
!function(){var n=function(){function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,n);var a=this;window.console||(window.console={log:function(n){}}),this.currentUrl=location.href,this.config={mode:e.mode||"px",elem:t||".kam",defaultFontSize:e.defaultFontSize||16,defaultLetterSpacing:e.defaultLetterSpacing||"normal",setLetterSpacing:e.setLetterSpacing||"normal",dataFilePath:e.dataFilePath||"./assets/js/kam-config.json",dataFontStatus:null},this.currentUrl.search(/localhost/)===-1&&this.currentUrl.search(/192.168/)===-1||this.DebugMode(),document.addEventListener("DOMContentLoaded",function(n){var t=new XMLHttpRequest;t.onreadystatechange=function(){t.readyState===XMLHttpRequest.DONE&&200===t.status&&(a.config.dataFontStatus=JSON.parse(t.responseText),a.CacheElement(),a.BindEvent())},t.open("GET","./kam-config.json",!0),t.send(null)})}return n.prototype.DebugMode=function(){console.log(this)},n.prototype.CacheElement=function(){this.$elem=document.querySelectorAll(this.config.elem)},n.prototype.BindEvent=function(){this.EventDispatcher()},n.prototype.EventDispatcher=function(){var n=this;this.$elem.forEach(function(t){n.SetKerning(t)})},n.prototype.SetKerning=function(n){for(var t=Array.prototype.slice.call(n.innerHTML),e="",a="",s=0;s<t.length;++s){a="";for(var o in this.config.dataFontStatus)o===t[s]&&(a=this.config.dataFontStatus[o]);e+="<span",""!=a&&(e+=' style="',null!=a[0]&&null!=a[0]&&void 0!=a[0]&&(e+=" font-size:"+(this.config.defaultFontSize+Number(a[0]))+"px; "),null!=a[1]&&null!=a[1]&&void 0!=a[1]&&(e+=" letter-spacing:"+Number(a[1])+"px; "),e+='"'),e+=">",e+=t[s],e+="</span>"}this.OutputKerning(n,e)},n.prototype.OutputKerning=function(n,t){var e=t;e=e.replace(/<span><<\/span><span .*>b<\/span><span .*>r<\/span><span>><\/span>/g,"<br>"),e=e.replace(/<span><<\/span><span .*>b<\/span><span .*>r<\/span><span>\/<\/span><span>><\/span>/g,"<br>"),e=e.replace(/<span><<\/span><span .*>b<\/span><span .*>r<\/span><span> <\/span><span>\/<\/span><span>><\/span>/g,"<br>"),n.innerHTML=e},n}();window.KERNING_ADJUST_MODULE=n||{}}(window);