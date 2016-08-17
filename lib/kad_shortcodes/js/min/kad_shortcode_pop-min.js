!function(t){var e="Close",n="BeforeClose",o="AfterClose",a="BeforeAppend",i="MarkupParse",s="Open",r="Change",c="mfp",p="."+c,l="mfp-ready",d="mfp-removing",u="mfp-prevent-close",f,m=function(){},h=!!window.jQuery,v,g=t(window),y,C,k,w,b,x=function(t,e){f.ev.on(c+t+p,e)},P=function(e,n,o,a){var i=document.createElement("div");return i.className="mfp-"+e,o&&(i.innerHTML=o),a?n&&n.appendChild(i):(i=t(i),n&&i.appendTo(n)),i},I=function(e,n){f.ev.triggerHandler(c+e,n),f.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),f.st.callbacks[e]&&f.st.callbacks[e].apply(f,t.isArray(n)?n:[n]))},T=function(e){return e===b&&f.currTemplate.closeBtn||(f.currTemplate.closeBtn=t(f.st.closeMarkup.replace("%title%",f.st.tClose)),b=e),f.currTemplate.closeBtn},O=function(){t.magnificPopup.instance||(f=new m,f.init(),t.magnificPopup.instance=f)},_=function(){var t=document.createElement("p").style,e=["ms","O","Moz","Webkit"];if(void 0!==t.transition)return!0;for(;e.length;)if(e.pop()+"Transition"in t)return!0;return!1};m.prototype={constructor:m,init:function(){var e=navigator.appVersion;f.isIE7=-1!==e.indexOf("MSIE 7."),f.isIE8=-1!==e.indexOf("MSIE 8."),f.isLowIE=f.isIE7||f.isIE8,f.isAndroid=/android/gi.test(e),f.isIOS=/iphone|ipad|ipod/gi.test(e),f.supportsTransition=_(),f.probablyMobile=f.isAndroid||f.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),C=t(document),f.popupsCache={}},open:function(e){y||(y=t(document.body));var n;if(e.isObj===!1){f.items=e.items.toArray(),f.index=0;var o=e.items,a;for(n=0;n<o.length;n++)if(a=o[n],a.parsed&&(a=a.el[0]),a===e.el[0]){f.index=n;break}}else f.items=t.isArray(e.items)?e.items:[e.items],f.index=e.index||0;if(f.isOpen)return void f.updateItemHTML();f.types=[],w="",e.mainEl&&e.mainEl.length?f.ev=e.mainEl.eq(0):f.ev=C,e.key?(f.popupsCache[e.key]||(f.popupsCache[e.key]={}),f.currTemplate=f.popupsCache[e.key]):f.currTemplate={},f.st=t.extend(!0,{},t.magnificPopup.defaults,e),f.fixedContentPos="auto"===f.st.fixedContentPos?!f.probablyMobile:f.st.fixedContentPos,f.st.modal&&(f.st.closeOnContentClick=!1,f.st.closeOnBgClick=!1,f.st.showCloseBtn=!1,f.st.enableEscapeKey=!1),f.bgOverlay||(f.bgOverlay=P("bg").on("click"+p,function(){f.close()}),f.wrap=P("wrap").attr("tabindex",-1).on("click"+p,function(t){f._checkIfClose(t.target)&&f.close()}),f.container=P("container",f.wrap)),f.contentContainer=P("content"),f.st.preloader&&(f.preloader=P("preloader",f.container,f.st.tLoading));var r=t.magnificPopup.modules;for(n=0;n<r.length;n++){var c=r[n];c=c.charAt(0).toUpperCase()+c.slice(1),f["init"+c].call(f)}I("BeforeOpen"),f.st.showCloseBtn&&(f.st.closeBtnInside?(x(i,function(t,e,n,o){n.close_replaceWith=T(o.type)}),w+=" mfp-close-btn-in"):f.wrap.append(T())),f.st.alignTop&&(w+=" mfp-align-top"),f.fixedContentPos?f.wrap.css({overflow:f.st.overflowY,overflowX:"hidden",overflowY:f.st.overflowY}):f.wrap.css({top:g.scrollTop(),position:"absolute"}),(f.st.fixedBgPos===!1||"auto"===f.st.fixedBgPos&&!f.fixedContentPos)&&f.bgOverlay.css({height:C.height(),position:"absolute"}),f.st.enableEscapeKey&&C.on("keyup"+p,function(t){27===t.keyCode&&f.close()}),g.on("resize"+p,function(){f.updateSize()}),f.st.closeOnContentClick||(w+=" mfp-auto-cursor"),w&&f.wrap.addClass(w);var d=f.wH=g.height(),u={};if(f.fixedContentPos&&f._hasScrollBar(d)){var m=f._getScrollbarSize();m&&(u.marginRight=m)}f.fixedContentPos&&(f.isIE7?t("body, html").css("overflow","hidden"):u.overflow="hidden");var h=f.st.mainClass;return f.isIE7&&(h+=" mfp-ie7"),h&&f._addClassToMFP(h),f.updateItemHTML(),I("BuildControls"),t("html").css(u),f.bgOverlay.add(f.wrap).prependTo(f.st.prependTo||y),f._lastFocusedEl=document.activeElement,setTimeout(function(){f.content?(f._addClassToMFP(l),f._setFocus()):f.bgOverlay.addClass(l),C.on("focusin"+p,f._onFocusIn)},16),f.isOpen=!0,f.updateSize(d),I(s),e},close:function(){f.isOpen&&(I(n),f.isOpen=!1,f.st.removalDelay&&!f.isLowIE&&f.supportsTransition?(f._addClassToMFP(d),setTimeout(function(){f._close()},f.st.removalDelay)):f._close())},_close:function(){I(e);var n=d+" "+l+" ";if(f.bgOverlay.detach(),f.wrap.detach(),f.container.empty(),f.st.mainClass&&(n+=f.st.mainClass+" "),f._removeClassFromMFP(n),f.fixedContentPos){var a={marginRight:""};f.isIE7?t("body, html").css("overflow",""):a.overflow="",t("html").css(a)}C.off("keyup"+p+" focusin"+p),f.ev.off(p),f.wrap.attr("class","mfp-wrap").removeAttr("style"),f.bgOverlay.attr("class","mfp-bg"),f.container.attr("class","mfp-container"),f.st.showCloseBtn&&(!f.st.closeBtnInside||f.currTemplate[f.currItem.type]===!0)&&f.currTemplate.closeBtn&&f.currTemplate.closeBtn.detach(),f._lastFocusedEl&&t(f._lastFocusedEl).focus(),f.currItem=null,f.content=null,f.currTemplate=null,f.prevHeight=0,I(o)},updateSize:function(t){if(f.isIOS){var e=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*e;f.wrap.css("height",n),f.wH=n}else f.wH=t||g.height();f.fixedContentPos||f.wrap.css("height",f.wH),I("Resize")},updateItemHTML:function(){var e=f.items[f.index];f.contentContainer.detach(),f.content&&f.content.detach(),e.parsed||(e=f.parseEl(f.index));var n=e.type;if(I("BeforeChange",[f.currItem?f.currItem.type:"",n]),f.currItem=e,!f.currTemplate[n]){var o=f.st[n]?f.st[n].markup:!1;I("FirstMarkupParse",o),o?f.currTemplate[n]=t(o):f.currTemplate[n]=!0}k&&k!==e.type&&f.container.removeClass("mfp-"+k+"-holder");var a=f["get"+n.charAt(0).toUpperCase()+n.slice(1)](e,f.currTemplate[n]);f.appendContent(a,n),e.preloaded=!0,I(r,e),k=e.type,f.container.prepend(f.contentContainer),I("AfterChange")},appendContent:function(t,e){f.content=t,t?f.st.showCloseBtn&&f.st.closeBtnInside&&f.currTemplate[e]===!0?f.content.find(".mfp-close").length||f.content.append(T()):f.content=t:f.content="",I(a),f.container.addClass("mfp-"+e+"-holder"),f.contentContainer.append(f.content)},parseEl:function(e){var n=f.items[e],o;if(n.tagName?n={el:t(n)}:(o=n.type,n={data:n,src:n.src}),n.el){for(var a=f.types,i=0;i<a.length;i++)if(n.el.hasClass("mfp-"+a[i])){o=a[i];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=o||f.st.type||"inline",n.index=e,n.parsed=!0,f.items[e]=n,I("ElementParse",n),f.items[e]},addGroup:function(t,e){var n=function(n){n.mfpEl=this,f._openClick(n,t,e)};e||(e={});var o="click.magnificPopup";e.mainEl=t,e.items?(e.isObj=!0,t.off(o).on(o,n)):(e.isObj=!1,e.delegate?t.off(o).on(o,e.delegate,n):(e.items=t,t.off(o).on(o,n)))},_openClick:function(e,n,o){var a=void 0!==o.midClick?o.midClick:t.magnificPopup.defaults.midClick;if(a||2!==e.which&&!e.ctrlKey&&!e.metaKey){var i=void 0!==o.disableOn?o.disableOn:t.magnificPopup.defaults.disableOn;if(i)if(t.isFunction(i)){if(!i.call(f))return!0}else if(g.width()<i)return!0;e.type&&(e.preventDefault(),f.isOpen&&e.stopPropagation()),o.el=t(e.mfpEl),o.delegate&&(o.items=n.find(o.delegate)),f.open(o)}},updateStatus:function(t,e){if(f.preloader){v!==t&&f.container.removeClass("mfp-s-"+v),!e&&"loading"===t&&(e=f.st.tLoading);var n={status:t,text:e};I("UpdateStatus",n),t=n.status,e=n.text,f.preloader.html(e),f.preloader.find("a").on("click",function(t){t.stopImmediatePropagation()}),f.container.addClass("mfp-s-"+t),v=t}},_checkIfClose:function(e){if(!t(e).hasClass(u)){var n=f.st.closeOnContentClick,o=f.st.closeOnBgClick;if(n&&o)return!0;if(!f.content||t(e).hasClass("mfp-close")||f.preloader&&e===f.preloader[0])return!0;if(e===f.content[0]||t.contains(f.content[0],e)){if(n)return!0}else if(o&&t.contains(document,e))return!0;return!1}},_addClassToMFP:function(t){f.bgOverlay.addClass(t),f.wrap.addClass(t)},_removeClassFromMFP:function(t){this.bgOverlay.removeClass(t),f.wrap.removeClass(t)},_hasScrollBar:function(t){return(f.isIE7?C.height():document.body.scrollHeight)>(t||g.height())},_setFocus:function(){(f.st.focus?f.content.find(f.st.focus).eq(0):f.wrap).focus()},_onFocusIn:function(e){return e.target===f.wrap[0]||t.contains(f.wrap[0],e.target)?void 0:(f._setFocus(),!1)},_parseMarkup:function(e,n,o){var a;o.data&&(n=t.extend(o.data,n)),I(i,[e,n,o]),t.each(n,function(t,n){if(void 0===n||n===!1)return!0;if(a=t.split("_"),a.length>1){var o=e.find(p+"-"+a[0]);if(o.length>0){var i=a[1];"replaceWith"===i?o[0]!==n[0]&&o.replaceWith(n):"img"===i?o.is("img")?o.attr("src",n):o.replaceWith('<img src="'+n+'" class="'+o.attr("class")+'" />'):o.attr(a[1],n)}}else e.find(p+"-"+t).html(n)})},_getScrollbarSize:function(){if(void 0===f.scrollbarSize){var t=document.createElement("div");t.id="mfp-sbm",t.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(t),f.scrollbarSize=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return f.scrollbarSize}},t.magnificPopup={instance:null,proto:m.prototype,modules:[],open:function(e,n){return O(),e=e?t.extend(!0,{},e):{},e.isObj=!0,e.index=n||0,this.instance.open(e)},close:function(){return t.magnificPopup.instance&&t.magnificPopup.instance.close()},registerModule:function(e,n){n.options&&(t.magnificPopup.defaults[e]=n.options),t.extend(this.proto,n.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},t.fn.magnificPopup=function(e){O();var n=t(this);if("string"==typeof e)if("open"===e){var o,a=h?n.data("magnificPopup"):n[0].magnificPopup,i=parseInt(arguments[1],10)||0;a.items?o=a.items[i]:(o=n,a.delegate&&(o=o.find(a.delegate)),o=o.eq(i)),f._openClick({mfpEl:o},n,a)}else f.isOpen&&f[e].apply(f,Array.prototype.slice.call(arguments,1));else e=t.extend(!0,{},e),h?n.data("magnificPopup",e):n[0].magnificPopup=e,f.addGroup(n,e);return n};var E="inline",B,M,S,z=function(){S&&(M.after(S.addClass(B)).detach(),S=null)};t.magnificPopup.registerModule(E,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){f.types.push(E),x(e+"."+E,function(){z()})},getInline:function(e,n){if(z(),e.src){var o=f.st.inline,a=t(e.src);if(a.length){var i=a[0].parentNode;i&&i.tagName&&(M||(B=o.hiddenClass,M=P(B),B="mfp-"+B),S=a.after(M).detach().removeClass(B)),f.updateStatus("ready")}else f.updateStatus("error",o.tNotFound),a=t("<div>");return e.inlineElement=a,a}return f.updateStatus("ready"),f._parseMarkup(n,{},e),n}}});var A,F=function(){return void 0===A&&(A=void 0!==document.createElement("p").style.MozTransform),A};t.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(t){return t.is("img")?t:t.find("img")}},proto:{initZoom:function(){var t=f.st.zoom,o=".zoom",a;if(t.enabled&&f.supportsTransition){var i=t.duration,s=function(e){var n=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),o="all "+t.duration/1e3+"s "+t.easing,a={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},i="transition";return a["-webkit-"+i]=a["-moz-"+i]=a["-o-"+i]=a[i]=o,n.css(a),n},r=function(){f.content.css("visibility","visible")},c,p;x("BuildControls"+o,function(){if(f._allowZoom()){if(clearTimeout(c),f.content.css("visibility","hidden"),a=f._getItemToZoom(),!a)return void r();p=s(a),p.css(f._getOffset()),f.wrap.append(p),c=setTimeout(function(){p.css(f._getOffset(!0)),c=setTimeout(function(){r(),setTimeout(function(){p.remove(),a=p=null,I("ZoomAnimationEnded")},16)},i)},16)}}),x(n+o,function(){if(f._allowZoom()){if(clearTimeout(c),f.st.removalDelay=i,!a){if(a=f._getItemToZoom(),!a)return;p=s(a)}p.css(f._getOffset(!0)),f.wrap.append(p),f.content.css("visibility","hidden"),setTimeout(function(){p.css(f._getOffset())},16)}}),x(e+o,function(){f._allowZoom()&&(r(),p&&p.remove(),a=null)})}},_allowZoom:function(){return"image"===f.currItem.type},_getItemToZoom:function(){return f.currItem.hasSize?f.currItem.img:!1},_getOffset:function(e){var n;n=e?f.currItem.img:f.st.zoom.opener(f.currItem.el||f.currItem);var o=n.offset(),a=parseInt(n.css("padding-top"),10),i=parseInt(n.css("padding-bottom"),10);o.top-=t(window).scrollTop()-a;var s={width:n.width(),height:(h?n.innerHeight():n[0].offsetHeight)-i-a};return F()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}}),O()}(window.jQuery||window.Zepto),jQuery(document).ready(function($){$("input.kad-widget-colorpicker").wpColorPicker()}),jQuery(document).on("panelsopen",function(){jQuery("input.kad-widget-colorpicker").wpColorPicker()}),jQuery(document).on("widget-added",function(){jQuery("input.kad-widget-colorpicker").each(function(){jQuery(this).wpColorPicker()})}),jQuery(document).on("widget-updated",function(){jQuery("input.kad-widget-colorpicker").each(function(){jQuery(this).wpColorPicker()})}),jQuery(document).ready(function($){function t(){$(".kadenceshortcode-content").find("input:text, input:file, textarea").val(""),$(".kadenceshortcode-content").find("select").removeAttr("selected"," "),$(".kadenceshortcode-content").find("input:radio, input:checkbox").removeAttr("checked").removeAttr("selected"),$(".kadenceshortcode-content").find(".wp-color-result").attr("style","")}$("body").on("click",".virtue-generator-button",function(){$.magnificPopup.open({mainClass:"mfp-zoom-in",items:{src:"#kadence-shortcode-innercontainer"},type:"inline"})}),$("input.kad-popup-colorpicker").wpColorPicker(),$("#kad-shortcode-insert").click(function(){var t=$("#kadence-shortcodes").val(),e="";if("columns"==t){var n="";$("#options-"+t+' input[type="radio"]').each(function(){"checked"==$(this).attr("checked")&&(n=$(this).attr("value"))}),e="[columns] ","span6"==n?(e+="[span6] ",e+="<p>add content here</p>",e+="[/span6]",e+="[span6] ",e+="<p>add content here</p>",e+="[/span6]"):"span4left"==n?(e+="[span4] ",e+="<p>add content here</p>",e+="[/span4]",e+="[span8] ",e+="<p>add content here</p>",e+="[/span8]"):"span4right"==n?(e+="[span8] ",e+="<p>add content here</p>",e+="[/span8]",e+="[span4] ",e+="<p>add content here</p>",e+="[/span4]"):"span4"==n?(e+="[span4] ",e+="<p>add content here</p>",e+="[/span4]",e+="[span4] ",e+="<p>add content here</p>",e+="[/span4]",e+="[span4] ",e+="<p>add content here</p>",e+="[/span4]"):"span3"==n&&(e+="[span3] ",e+="<p>add content here</p>",e+="[/span3]",e+="[span3] ",e+="<p>add content here</p>",e+="[/span3]",e+="[span3] ",e+="<p>add content here</p>",e+="[/span3]",e+="[span3] ",e+="<p>add content here</p>",e+="[/span3]"),e+="[/columns]"}else if("table"==t){var o=""!=$("#options-"+t+" .kad-sc-columns").attr("value")?parseInt($("#options-"+t+" .kad-sc-columns").val()):2,a=""!=$("#options-"+t+" .kad-sc-rows").attr("value")?parseInt($("#options-"+t+" .kad-sc-rows").val()):2,s="checked"==$("#options-"+t+" #head").attr("checked");if(e="<table>",s){e+="<thead>",e+="<tr>";var r=1;for(c=0;c<o;c++)e+="<th>Column "+r+"</th>",r++;e+="</tr>",e+="</thead>"}e+="<tbody>";var p=1;for(i=0;i<a;i++){e+="<tr>";var r=1;for(c=0;c<o;c++)e+="<td>Row "+p+", Column "+r+"</td>",r++;p++}e+="</tr>",e+="</tbody>",e+="</table>"}else if("tabs"==t)e="[tabs]",e+='[tab title="title1" start=open] <p>Put content here</p> [/tab]',e+='[tab title="title2"] <p>Put content here</p>[/tab]',e+='[tab title="title3"]<p>Copy and paste to create more</p>[/tab]',e+="[/tabs]";else if("accordion"==t)e="[accordion]",e+='[pane title="title1" start=open] <p>Put content here</p> [/pane]',e+='[pane title="title2"] <p>Put content here</p>[/pane]',e+='[pane title="title3"]<p>Copy and paste to create more</p>[/pane]',e+="[/accordion]";else if("pullquote"==t||"blockquote"==t){var l="",d="";$("#options-"+t+" select").each(function(){""!=$(this).attr("value")&&(l+=" "+$(this).attr("id")+'="'+$(this).attr("value")+'"')}),d=$("#options-"+t+" textarea.kad-sc-content").val(),e="["+t,e+=l,e+="]",e+="<p>"+d+"</p>",e+="[/"+t+"]"}else if("kad_modal"==t){var l="",d="";$("#options-"+t+" select").each(function(){""!=$(this).attr("value")&&(l+=" "+$(this).attr("id")+'="'+$(this).attr("value")+'"')}),$("#options-"+t+' input[type="text"]').each(function(){""!=$(this).attr("value")&&(l+=" "+$(this).attr("data-attrname")+'="'+$(this).attr("value")+'"')}),$("#options-"+t+' input[type="text"].wp-color-picker').each(function(){""!=$(this).attr("value")&&(l+=" "+$(this).attr("data-attrname")+'="'+$(this).attr("value")+'"')}),d=$("#options-"+t+" textarea.kad-sc-content").val(),e="["+t,e+=l,e+="]",e+="<p>"+d+"</p>",e+="[/"+t+"]"}else if("iconbox"==t){var l="",d="",u="";$("#options-"+t+" select").each(function(){""!=$(this).attr("value")&&(l+=" "+$(this).attr("id")+'="'+$(this).attr("value")+'"')}),$("#options-"+t+' input[type="text"].kad-sc-link').each(function(){""!=$(this).attr("value")&&(l+=" "+$(this).attr("data-attrname")+'="'+$(this).attr("value")+'"')}),$("#options-"+t+' input[type="text"].wp-color-picker').each(function(){""!=$(this).attr("value")&&(l+=" "+$(this).attr("data-attrname")+'="'+$(this).attr("value")+'"')}),d=$("#options-"+t+" textarea.kad-sc-description").val(),u=$("#options-"+t+' [type="text"].kad-sc-title').attr("value"),e="["+t,e+=l,e+="]",u&&(e+="<h4>"+u+"</h4>"),d&&(e+="<p>"+d+"</p>"),e+="[/"+t+"]"}else if("kt_box"==t){var l="",d="";$("#options-"+t+" select").each(function(){""!=$(this).attr("value")&&(l+=" "+$(this).attr("id")+'="'+$(this).attr("value")+'"')}),$("#options-"+t+' input[type="text"].attr').each(function(){""!=$(this).attr("value")&&(l+=" "+$(this).attr("data-attrname")+'="'+$(this).attr("value")+'"')}),$("#options-"+t+' input[type="text"].wp-color-picker').each(function(){""!=$(this).attr("value")&&(l+=" "+$(this).attr("data-attrname")+'="'+$(this).attr("value")+'"')}),d=$("#options-"+t+" textarea.kad-sc-content").val(),e="["+t,e+=l,e+="]",e+="<p>"+d+"</p>",e+="[/"+t+"]"}else{var l="",f="",m=" ";$("#options-"+t+' input[type="text"].kad-sc-textinput').each(function(){""!=$(this).attr("value")&&(l+=" "+$(this).attr("data-attrname")+'="'+$(this).attr("value")+'"')}),$("#options-"+t+' input[type="text"].kad-popup-colorpicker').each(function(){""!=$(this).attr("value")&&(l+=" "+$(this).attr("data-attrname")+'="'+$(this).attr("value")+'"')}),$("#options-"+t+" select").each(function(){""!=$(this).attr("value")&&(l+=" "+$(this).attr("id")+'="'+$(this).attr("value")+'"')}),$("#options-"+t+' input[type="radio"]').each(function(){"checked"==$(this).attr("checked")&&(l+=" "+$(this).attr("data-attrname")+'="'+$(this).attr("value")+'"')}),$("#options-"+t+" input[type=checkbox]").each(function(){"checked"==$(this).attr("checked")&&(l+=" "+$(this).attr("data-attrname")+'="true"')}),m+=l,e="["+t,e+=m,e+="]"}window.wp.media.editor.insert(e),$.magnificPopup.close()}),$("#kadence-shortcodes").change(function(){$(".shortcode-options").hide(),$("#options-"+$(this).val()).show()}),$("#options-columns input:radio").addClass("input_hidden"),$("#options-columns label").click(function(){$(this).addClass("selected").siblings().removeClass("selected")})});