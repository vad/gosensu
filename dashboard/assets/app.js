/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
/**
 * @license
 * Lo-Dash 1.0.1 (Custom Build) lodash.com/license
 * Build: `lodash underscore -o ./dist/lodash.underscore.js`
 * Underscore.js 1.4.4 underscorejs.org/LICENSE
 */

;(function(n,t){function r(n,t){var r;if(n&&qt[typeof n])for(r in t||(t=G),n)if(t(n[r],r,n)===tt)break}function e(n,t,r){if(n){t=t&&typeof r=="undefined"?t:a(t,r);var e=n.length;if(r=-1,typeof e=="number")for(;++r<e&&t(n[r],r,n)!==tt;);else for(r in n)if(pt.call(n,r)&&t(n[r],r,n)===tt)break}}function u(n){return n&&typeof n=="object"&&n.__wrapped__?n:this instanceof u?(this.__wrapped__=n,void 0):new u(n)}function o(n,t){var r=n.b,e=t.b;if(n=n.a,t=t.a,n!==t){if(n>t||typeof n=="undefined")return 1;if(n<t||typeof t=="undefined")return-1
}return r<e?-1:1}function i(n,t,r){function e(){var a=arguments,f=o?this:t;return u||(n=t[i]),r.length&&(a=a.length?(a=p(a),r.concat(a)):r),this instanceof e?(l.prototype=n.prototype,f=new l,l.prototype=K,a=n.apply(f,a),w(a)?a:f):n.apply(f,a)}var u=j(n),o=!r,i=t;return o&&(r=t),u||(t=n),e}function a(n,t,r){if(n==K)return G;var e=typeof n;if("function"!=e){if("object"!=e)return function(t){return t[n]};var u=Dt(n);return function(t){for(var r=u.length,e=L;r--&&(e=t[u[r]]===n[u[r]]););return e}}return typeof t!="undefined"?1===r?function(r){return n.call(t,r)
}:2===r?function(r,e){return n.call(t,r,e)}:4===r?function(r,e,u,o){return n.call(t,r,e,u,o)}:function(r,e,u){return n.call(t,r,e,u)}:n}function f(n){return"\\"+It[n]}function c(n){return Mt[n]}function l(){}function p(n,t,r){t||(t=0),typeof r=="undefined"&&(r=n?n.length:0);var e=-1;r=r-t||0;for(var u=Array(0>r?0:r);++e<r;)u[e]=n[t+e];return u}function s(n){return $t[n]}function v(n){return vt.call(n)==wt}function h(n){var t,r=[],e=function(n,t){r.push(t)};if(n&&qt[typeof n])for(t in e||(e=G),n)if(pt.call(n,t)&&e(n[t],t,n)===tt)break;
return r}function g(n){if(!n)return n;for(var t=1,r=arguments.length;t<r;t++){var e=arguments[t];if(e)for(var u in e)n[u]=e[u]}return n}function y(n){if(!n)return n;for(var t=1,r=arguments.length;t<r;t++){var e=arguments[t];if(e)for(var u in e)n[u]==K&&(n[u]=e[u])}return n}function m(n){var t=[];return r(n,function(n,r){j(n)&&t.push(r)}),t.sort()}function _(n){for(var t=-1,r=Dt(n),e=r.length,u={};++t<e;){var o=r[t];u[n[o]]=o}return u}function d(n){if(!n)return J;if(Bt(n)||x(n))return!n.length;for(var t in n)if(pt.call(n,t))return L;
return J}function b(n,t,e,u){if(n===t)return 0!==n||1/n==1/t;var o=typeof n,i=typeof t;if(n===n&&(!n||"function"!=o&&"object"!=o)&&(!t||"function"!=i&&"object"!=i))return L;if(n==K||t==K)return n===t;if(i=vt.call(n),o=vt.call(t),i!=o)return L;switch(i){case xt:case Et:return+n==+t;case Ot:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case Nt:case kt:return n==t+""}if(o=i==At,!o){if(n.__wrapped__||t.__wrapped__)return b(n.__wrapped__||n,t.__wrapped__||t,e,u);if(i!=St)return L;var i=n.constructor,a=t.constructor;
if(i!=a&&(!j(i)||!(i instanceof i&&j(a)&&a instanceof a)))return L}for(e||(e=[]),u||(u=[]),i=e.length;i--;)if(e[i]==n)return u[i]==t;var f=J,c=0;if(e.push(n),u.push(t),o){if(c=t.length,f=c==n.length)for(;c--&&(f=b(n[c],t[c],e,u)););return f}return r(t,function(t,r,o){return pt.call(o,r)?(c++,!(f=pt.call(n,r)&&b(n[r],t,e,u))&&tt):void 0}),f&&r(n,function(n,t,r){return pt.call(r,t)?!(f=-1<--c)&&tt:void 0}),f}function j(n){return typeof n=="function"}function w(n){return n?qt[typeof n]:L}function A(n){return typeof n=="number"||vt.call(n)==Ot
}function x(n){return typeof n=="string"||vt.call(n)==kt}function E(n){for(var t=-1,r=Dt(n),e=r.length,u=Array(e);++t<e;)u[t]=n[r[t]];return u}function O(n,t){var r=L;return typeof(n?n.length:0)=="number"?r=-1<z(n,t):e(n,function(n){return(r=n===t)&&tt}),r}function S(n,t,r){var u=J;if(t=a(t,r),Bt(n)){r=-1;for(var o=n.length;++r<o&&(u=!!t(n[r],r,n)););}else e(n,function(n,r,e){return!(u=!!t(n,r,e))&&tt});return u}function N(n,t,r){var u=[];if(t=a(t,r),Bt(n)){r=-1;for(var o=n.length;++r<o;){var i=n[r];
t(i,r,n)&&u.push(i)}}else e(n,function(n,r,e){t(n,r,e)&&u.push(n)});return u}function k(n,t,r){var e;return t=a(t,r),F(n,function(n,r,u){return t(n,r,u)?(e=n,tt):void 0}),e}function F(n,t,r){if(t&&typeof r=="undefined"&&Bt(n)){r=-1;for(var u=n.length;++r<u&&t(n[r],r,n)!==tt;);}else e(n,t,r)}function R(n,t,r){var u=-1,o=n?n.length:0,i=Array(typeof o=="number"?o:0);if(t=a(t,r),Bt(n))for(;++u<o;)i[u]=t(n[u],u,n);else e(n,function(n,r,e){i[++u]=t(n,r,e)});return i}function T(n,t,r){var u=-1/0,o=u;if(!t&&Bt(n)){r=-1;
for(var i=n.length;++r<i;){var f=n[r];f>o&&(o=f)}}else t=a(t,r),e(n,function(n,r,e){r=t(n,r,e),r>u&&(u=r,o=n)});return o}function q(n,t,r,u){var o=3>arguments.length;if(t=a(t,u,4),Bt(n)){var i=-1,f=n.length;for(o&&(r=n[++i]);++i<f;)r=t(r,n[i],i,n)}else e(n,function(n,e,u){r=o?(o=L,n):t(r,n,e,u)});return r}function I(n,t,r,e){var u=n?n.length:0,o=3>arguments.length;if(typeof u!="number")var i=Dt(n),u=i.length;return t=a(t,e,4),F(n,function(e,a,f){a=i?i[--u]:--u,r=o?(o=L,n[a]):t(r,n[a],a,f)}),r}function B(n,t,r){var u;
if(t=a(t,r),Bt(n)){r=-1;for(var o=n.length;++r<o&&!(u=t(n[r],r,n)););}else e(n,function(n,r,e){return(u=t(n,r,e))&&tt});return!!u}function D(n,t,r){return r&&d(t)?K:(r?k:N)(n,t)}function M(n,t,r){if(n){var e=0,u=n.length;if(typeof t!="number"&&t!=K){var o=-1;for(t=a(t,r);++o<u&&t(n[o],o,n);)e++}else if(e=t,e==K||r)return n[0];return p(n,0,bt(dt(0,e),u))}}function $(n,t){for(var r=-1,e=n?n.length:0,u=[];++r<e;){var o=n[r];Bt(o)?st.apply(u,t?o:$(o)):u.push(o)}return u}function z(n,t,r){var e=-1,u=n?n.length:0;
if(typeof r=="number")e=(0>r?dt(0,u+r):r||0)-1;else if(r)return e=P(n,t),n[e]===t?e:-1;for(;++e<u;)if(n[e]===t)return e;return-1}function C(n,t,r){if(typeof t!="number"&&t!=K){var e=0,u=-1,o=n?n.length:0;for(t=a(t,r);++u<o&&t(n[u],u,n);)e++}else e=t==K||r?1:dt(0,t);return p(n,e)}function P(n,t,r,e){var u=0,o=n?n.length:u;for(r=r?a(r,e,1):G,t=r(t);u<o;)e=u+o>>>1,r(n[e])<t?u=e+1:o=e;return u}function U(n,t,r,e){var u=-1,o=n?n.length:0,i=[],f=i;for(typeof t=="function"&&(e=r,r=t,t=L),r&&(f=[],r=a(r,e));++u<o;){e=n[u];
var c=r?r(e,u,n):e;(t?!u||f[f.length-1]!==c:0>z(f,c))&&(r&&f.push(c),i.push(e))}return i}function V(n,t){return Ft||ht&&2<arguments.length?ht.call.apply(ht,arguments):i(n,t,p(arguments,2))}function W(n){var r=p(arguments,1);return setTimeout(function(){n.apply(t,r)},1)}function G(n){return n}function H(n){F(m(n),function(t){var r=u[t]=n[t];u.prototype[t]=function(){var n=[this.__wrapped__];return st.apply(n,arguments),n=r.apply(u,n),this.__chain__&&(n=new u(n),n.__chain__=J),n}})}var J=!0,K=null,L=!1,Q=typeof exports=="object"&&exports,X=typeof module=="object"&&module&&module.exports==Q&&module,Y=typeof global=="object"&&global;
Y.global===Y&&(n=Y);var Z=[],Y={},nt=0,tt=Y,rt=n._,et=/&(?:amp|lt|gt|quot|#39);/g,ut=RegExp("^"+(Y.valueOf+"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),ot=/($^)/,it=/[&<>"']/g,at=/['\n\r\t\u2028\u2029\\]/g,ft=Math.ceil,ct=Z.concat,lt=Math.floor,pt=Y.hasOwnProperty,st=Z.push,vt=Y.toString,ht=ut.test(ht=p.bind)&&ht,gt=ut.test(gt=Array.isArray)&&gt,yt=n.isFinite,mt=n.isNaN,_t=ut.test(_t=Object.keys)&&_t,dt=Math.max,bt=Math.min,jt=Math.random,wt="[object Arguments]",At="[object Array]",xt="[object Boolean]",Et="[object Date]",Ot="[object Number]",St="[object Object]",Nt="[object RegExp]",kt="[object String]",Y=!!n.attachEvent,Y=ht&&!/\n|true/.test(ht+Y),Ft=ht&&!Y,Rt=(Rt={0:1,length:1},Z.splice.call(Rt,0,1),Rt[0]),Tt=arguments.constructor==Object,qt={"boolean":L,"function":J,object:J,number:L,string:L,undefined:L},It={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"};
u.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,variable:""},v(arguments)||(v=function(n){return n?pt.call(n,"callee"):L});var Bt=gt||function(n){return Tt&&n instanceof Array||vt.call(n)==At},Dt=_t?function(n){return w(n)?_t(n):[]}:h,Mt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$t=_(Mt);j(/x/)&&(j=function(n){return n instanceof Function||"[object Function]"==vt.call(n)});var zt=R;Y&&X&&typeof setImmediate=="function"&&(W=V(setImmediate,n)),u.after=function(n,t){return 1>n?t():function(){return 1>--n?t.apply(this,arguments):void 0
}},u.bind=V,u.bindAll=function(n){for(var t=ct.apply(Z,arguments),r=1<t.length?0:(t=m(n),-1),e=t.length;++r<e;){var u=t[r];n[u]=V(n[u],n)}return n},u.compact=function(n){for(var t=-1,r=n?n.length:0,e=[];++t<r;){var u=n[t];u&&e.push(u)}return e},u.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length;r--;)t=[n[r].apply(this,t)];return t[0]}},u.countBy=function(n,t,r){var e={};return t=a(t,r),F(n,function(n,r,u){r=t(n,r,u)+"",pt.call(e,r)?e[r]++:e[r]=1}),e},u.debounce=function(n,t,r){function e(){a=K,r||(o=n.apply(i,u))
}var u,o,i,a;return function(){var f=r&&!a;return u=arguments,i=this,clearTimeout(a),a=setTimeout(e,t),f&&(o=n.apply(i,u)),o}},u.defaults=y,u.defer=W,u.delay=function(n,r){var e=p(arguments,2);return setTimeout(function(){n.apply(t,e)},r)},u.difference=function(n){for(var t=-1,r=n.length,e=ct.apply(Z,arguments),u=[];++t<r;){var o=n[t];0>z(e,o,r)&&u.push(o)}return u},u.filter=N,u.flatten=$,u.forEach=F,u.functions=m,u.groupBy=function(n,t,r){var e={};return t=a(t,r),F(n,function(n,r,u){r=t(n,r,u)+"",(pt.call(e,r)?e[r]:e[r]=[]).push(n)
}),e},u.initial=function(n,t,r){if(!n)return[];var e=0,u=n.length;if(typeof t!="number"&&t!=K){var o=u;for(t=a(t,r);o--&&t(n[o],o,n);)e++}else e=t==K||r?1:t||e;return p(n,0,bt(dt(0,u-e),u))},u.intersection=function(n){var t=arguments,r=t.length,e=-1,u=n?n.length:0,o=[];n:for(;++e<u;){var i=n[e];if(0>z(o,i)){for(var a=r;--a;)if(0>z(t[a],i))continue n;o.push(i)}}return o},u.invert=_,u.invoke=function(n,t){var r=p(arguments,2),e=-1,u=typeof t=="function",o=n?n.length:0,i=Array(typeof o=="number"?o:0);
return F(n,function(n){i[++e]=(u?t:n[t]).apply(n,r)}),i},u.keys=Dt,u.map=R,u.max=T,u.memoize=function(n,t){var r={};return function(){var e=(t?t.apply(this,arguments):arguments[0])+"";return pt.call(r,e)?r[e]:r[e]=n.apply(this,arguments)}},u.min=function(n,t,r){var u=1/0,o=u;if(!t&&Bt(n)){r=-1;for(var i=n.length;++r<i;){var f=n[r];f<o&&(o=f)}}else t=a(t,r),e(n,function(n,r,e){r=t(n,r,e),r<u&&(u=r,o=n)});return o},u.object=function(n,t){for(var r=-1,e=n?n.length:0,u={};++r<e;){var o=n[r];t?u[o]=t[r]:u[o[0]]=o[1]
}return u},u.omit=function(n){var t=ct.apply(Z,arguments),e={};return r(n,function(n,r){0>z(t,r,1)&&(e[r]=n)}),e},u.once=function(n){var t,r;return function(){return t?r:(t=J,r=n.apply(this,arguments),n=K,r)}},u.pairs=function(n){for(var t=-1,r=Dt(n),e=r.length,u=Array(e);++t<e;){var o=r[t];u[t]=[o,n[o]]}return u},u.partial=function(n){return i(n,p(arguments,1))},u.pick=function(n){for(var t=0,r=ct.apply(Z,arguments),e=r.length,u={};++t<e;){var o=r[t];o in n&&(u[o]=n[o])}return u},u.pluck=zt,u.range=function(n,t,r){n=+n||0,r=+r||1,t==K&&(t=n,n=0);
var e=-1;t=dt(0,ft((t-n)/r));for(var u=Array(t);++e<t;)u[e]=n,n+=r;return u},u.reject=function(n,t,r){return t=a(t,r),N(n,function(n,r,e){return!t(n,r,e)})},u.rest=C,u.shuffle=function(n){var t=-1,r=n?n.length:0,e=Array(typeof r=="number"?r:0);return F(n,function(n){var r=lt(jt()*(++t+1));e[t]=e[r],e[r]=n}),e},u.sortBy=function(n,t,r){var e=-1,u=n?n.length:0,i=Array(typeof u=="number"?u:0);for(t=a(t,r),F(n,function(n,r,u){i[++e]={a:t(n,r,u),b:e,c:n}}),u=i.length,i.sort(o);u--;)i[u]=i[u].c;return i
},u.tap=function(n,t){return t(n),n},u.throttle=function(n,t){function r(){a=new Date,i=K,u=n.apply(o,e)}var e,u,o,i,a=0;return function(){var f=new Date,c=t-(f-a);return e=arguments,o=this,0<c?i||(i=setTimeout(r,c)):(clearTimeout(i),i=K,a=f,u=n.apply(o,e)),u}},u.times=function(n,t,r){n=+n||0;for(var e=-1,u=Array(n);++e<n;)u[e]=t.call(r,e);return u},u.toArray=function(n){return n&&typeof n.length=="number"?p(n):E(n)},u.union=function(){return U(ct.apply(Z,arguments))},u.uniq=U,u.values=E,u.where=D,u.without=function(n){for(var t=-1,r=n.length,e=[];++t<r;){var u=n[t];
0>z(arguments,u,1)&&e.push(u)}return e},u.wrap=function(n,t){return function(){var r=[n];return st.apply(r,arguments),t.apply(this,r)}},u.zip=function(n){for(var t=-1,r=n?T(zt(arguments,"length")):0,e=Array(r);++t<r;)e[t]=zt(arguments,t);return e},u.collect=R,u.drop=C,u.each=F,u.extend=g,u.methods=m,u.select=N,u.tail=C,u.unique=U,u.clone=function(n){return w(n)?Bt(n)?p(n):g({},n):n},u.contains=O,u.escape=function(n){return n==K?"":(n+"").replace(it,c)},u.every=S,u.find=k,u.findWhere=function(n,t){return D(n,t,J)
},u.has=function(n,t){return n?pt.call(n,t):L},u.identity=G,u.indexOf=z,u.isArguments=v,u.isArray=Bt,u.isBoolean=function(n){return n===J||n===L||vt.call(n)==xt},u.isDate=function(n){return n instanceof Date||vt.call(n)==Et},u.isElement=function(n){return n?1===n.nodeType:L},u.isEmpty=d,u.isEqual=b,u.isFinite=function(n){return yt(n)&&!mt(parseFloat(n))},u.isFunction=j,u.isNaN=function(n){return A(n)&&n!=+n},u.isNull=function(n){return n===K},u.isNumber=A,u.isObject=w,u.isRegExp=function(n){return n instanceof RegExp||vt.call(n)==Nt
},u.isString=x,u.isUndefined=function(n){return typeof n=="undefined"},u.lastIndexOf=function(n,t,r){var e=n?n.length:0;for(typeof r=="number"&&(e=(0>r?dt(0,e+r):bt(r,e-1))+1);e--;)if(n[e]===t)return e;return-1},u.mixin=H,u.noConflict=function(){return n._=rt,this},u.random=function(n,t){return n==K&&t==K&&(t=1),n=+n||0,t==K&&(t=n,n=0),n+lt(jt()*((+t||0)-n+1))},u.reduce=q,u.reduceRight=I,u.result=function(n,t){var r=n?n[t]:K;return j(r)?n[t]():r},u.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Dt(n).length
},u.some=B,u.sortedIndex=P,u.template=function(n,t,r){n||(n=""),r=y({},r,u.templateSettings);var e=0,o="__p+='",i=r.variable;n.replace(RegExp((r.escape||ot).source+"|"+(r.interpolate||ot).source+"|"+(r.evaluate||ot).source+"|$","g"),function(t,r,u,i,a){return o+=n.slice(e,a).replace(at,f),r&&(o+="'+_['escape']("+r+")+'"),i&&(o+="';"+i+";__p+='"),u&&(o+="'+((__t=("+u+"))==null?'':__t)+'"),e=a+t.length,t}),o+="';\n",i||(i="obj",o="with("+i+"||{}){"+o+"}"),o="function("+i+"){var __t,__p='',__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}"+o+"return __p}";
try{var a=Function("_","return "+o)(u)}catch(c){throw c.source=o,c}return t?a(t):(a.source=o,a)},u.unescape=function(n){return n==K?"":(n+"").replace(et,s)},u.uniqueId=function(n){var t=++nt+"";return n?n+t:t},u.all=S,u.any=B,u.detect=k,u.foldl=q,u.foldr=I,u.include=O,u.inject=q,u.first=M,u.last=function(n,t,r){if(n){var e=0,u=n.length;if(typeof t!="number"&&t!=K){var o=u;for(t=a(t,r);o--&&t(n[o],o,n);)e++}else if(e=t,e==K||r)return n[u-1];return p(n,dt(0,u-e))}},u.take=M,u.head=M,u.chain=function(n){return n=new u(n),n.__chain__=J,n
},u.VERSION="1.0.1",H(u),u.prototype.chain=function(){return this.__chain__=J,this},u.prototype.value=function(){return this.__wrapped__},e("pop push reverse shift sort splice unshift".split(" "),function(n){var t=Z[n];u.prototype[n]=function(){var n=this.__wrapped__;return t.apply(n,arguments),Rt&&0===n.length&&delete n[0],this}}),e(["concat","join","slice"],function(n){var t=Z[n];u.prototype[n]=function(){var n=t.apply(this.__wrapped__,arguments);return this.__chain__&&(n=new u(n),n.__chain__=J),n
}}),Q?X?(X.exports=u)._=u:Q._=u:n._=u})(this);
(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeners;if(!r)return this;var s=!e&&!i;if(typeof e==="object")i=this;if(t)(r={})[t._listenerId]=t;for(var n in r){r[n].off(e,i,this);if(s)delete this._listeners[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={});var n=e._listenerId||(e._listenerId=h.uniqueId("l"));s[n]=e;if(typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i;var r=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};h.extend(this,h.pick(e,p));if(e.parse)r=this.parse(r,e)||{};if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};var p=["url","urlRoot","collection"];h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};R(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false;i=h.extend({validate:true},i);if(!this._validate(r,i))return false;if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};R(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}R(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}));return false}});var v=["keys","values","pairs","invert","pick","omit"];h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var g=a.Collection=function(t,e){e||(e={});if(e.url)this.url=e.url;if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,merge:false,remove:false};h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t];e||(e={});var i,r,s,n;for(i=0,r=t.length;i<r;i++){n=this.get(t[i]);if(!n)continue;delete this._byId[n.id];delete this._byId[n.cid];s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m);if(e.parse)t=this.parse(t,e);if(!h.isArray(t))t=t?[t]:[];var i,s,a,o,u,l;var c=e.at;var f=this.comparator&&c==null&&e.sort!==false;var d=h.isString(this.comparator)?this.comparator:null;var p=[],v=[],g={};for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue;if(u=this.get(a)){if(e.remove)g[u.cid]=true;if(e.merge){u.set(a.attributes,e);if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true;this.length+=p.length;if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true});if(e.silent)return this;for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e);return this},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return this},push:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:this.length},e));return t},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:0},e));return t},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0;return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},sortedIndex:function(t,e,i){e||(e=this.comparator);var r=h.isFunction(e)?e:function(t){return t.get(e)};return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};R(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(s){if(e.wait)i.add(t,e);if(r)r(t,s,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e||(e={});e.collection=this;var i=new this.model(t,e);if(!i._validate(t,e)){this.trigger("invalid",this,t,e);return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var w=["groupBy","countBy","sortBy"];h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var b=a.View=function(t){this.cid=h.uniqueId("view");this._configure(t||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(x);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t);h.extend(this,h.pick(t,E));this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=k[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var S=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var $=/\((.*?)\)/g;var T=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var P=/^\/+|\/+$/g;var O=/msie [\w.]+/;var C=/\/$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({},{root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(P,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}});return i},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:e};t=this.getFragment(t||"");if(this.fragment===t)return;this.fragment=t;var i=this.root+t;if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var j=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=g.extend=S.extend=b.extend=I.extend=j;var U=function(){throw new Error('A "url" property or function must be specified')};var R=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
/*
//@ sourceMappingURL=backbone-min.map
*/
;
/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-modal.js, bootstrap-dropdown.js, bootstrap-scrollspy.js, bootstrap-tab.js, bootstrap-tooltip.js, bootstrap-popover.js, bootstrap-affix.js, bootstrap-alert.js, bootstrap-button.js, bootstrap-collapse.js, bootstrap-carousel.js, bootstrap-typeahead.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/

!function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in").attr("aria-hidden",!1),b.enforceFocus(),c?b.$element.one(a.support.transition.end,function(){b.$element.focus().trigger("shown")}):b.$element.focus().trigger("shown")})},hide:function(b){b&&b.preventDefault();var c=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var b=this;a(document).on("focusin.modal",function(a){b.$element[0]!==a.target&&!b.$element.has(a.target).length&&b.$element.focus()})},escape:function(){var a=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(b){b.which==27&&a.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),b.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),b.hideModal()})},hideModal:function(a){this.$element.hide().trigger("hidden"),this.backdrop()},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?a.proxy(this.$element[0].focus,this.$element[0]):a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,a.proxy(this.removeBackdrop,this)):this.removeBackdrop()):b&&b()}},a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a(document).on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f).one("hide",function(){c.focus()})})}(window.jQuery),!function(a){function d(){a(b).each(function(){e(a(this)).removeClass("open")})}function e(b){var c=b.attr("data-target"),d;return c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")),d=a(c),d.length||(d=b.parent()),d}var b="[data-toggle=dropdown]",c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),f,g;if(c.is(".disabled, :disabled"))return;return f=e(c),g=f.hasClass("open"),d(),g||(f.toggleClass("open"),c.focus()),!1},keydown:function(b){var c,d,f,g,h,i;if(!/(38|40|27)/.test(b.keyCode))return;c=a(this),b.preventDefault(),b.stopPropagation();if(c.is(".disabled, :disabled"))return;g=e(c),h=g.hasClass("open");if(!h||h&&b.keyCode==27)return c.click();d=a("[role=menu] li:not(.divider) a",g);if(!d.length)return;i=d.index(d.filter(":focus")),b.keyCode==38&&i>0&&i--,b.keyCode==40&&i<d.length-1&&i++,~i||(i=0),d.eq(i).focus()}},a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a(document).on("click.dropdown.data-api touchstart.dropdown.data-api",d).on("click.dropdown touchstart.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown.data-api touchstart.dropdown.data-api",b,c.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",b+", [role=menu]",c.prototype.keydown)}(window.jQuery),!function(a){function b(b,c){var d=a.proxy(this.process,this),e=a(b).is("body")?a(window):a(b),f;this.options=a.extend({},a.fn.scrollspy.defaults,c),this.$scrollElement=e.on("scroll.scroll-spy.data-api",d),this.selector=(this.options.target||(f=a(b).attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=a("body"),this.refresh(),this.process()}b.prototype={constructor:b,refresh:function(){var b=this,c;this.offsets=a([]),this.targets=a([]),c=this.$body.find(this.selector).map(function(){var b=a(this),c=b.data("target")||b.attr("href"),d=/^#\w/.test(c)&&a(c);return d&&d.length&&[[d.position().top,c]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},activate:function(b){var c,d;this.activeTarget=b,a(this.selector).parent(".active").removeClass("active"),d=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',c=a(d).parent("li").addClass("active"),c.parent(".dropdown-menu").length&&(c=c.closest("li.dropdown").addClass("active")),c.trigger("activate")}},a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("scrollspy"),f=typeof c=="object"&&c;e||d.data("scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.defaults={offset:10},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),!function(a){var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target"),e,f,g;d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;e=c.find(".active:last a")[0],g=a.Event("show",{relatedTarget:e}),b.trigger(g);if(g.isDefaultPrevented())return;f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g(),e.removeClass("in")}},a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),!function(a){var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,this.options.trigger=="click"?this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this)):this.options.trigger!="manual"&&(e=this.options.trigger=="hover"?"mouseenter":"focus",f=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(e+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f+"."+this.type,this.options.selector,a.proxy(this.leave,this))),this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,b,this.$element.data()),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.show)return c.show();clearTimeout(this.timeout),c.hoverState="in",this.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!c.options.delay||!c.options.delay.hide)return c.hide();c.hoverState="out",this.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},show:function(){var a,b,c,d,e,f,g;if(this.hasContent()&&this.enabled){a=this.tip(),this.setContent(),this.options.animation&&a.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,b=/in/.test(f),a.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element),c=this.getPosition(b),d=a[0].offsetWidth,e=a[0].offsetHeight;switch(b?f.split(" ")[1]:f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}a.offset(g).addClass(f).addClass("in")}},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function d(){var b=setTimeout(function(){c.off(a.support.transition.end).detach()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.detach()})}var b=this,c=this.tip();return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d():c.detach(),this},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(b){return a.extend({},b?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);c[c.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}},a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!1}}(window.jQuery),!function(a){var b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content > *")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-content")||(typeof c.content=="function"?c.content.call(b[0]):c.content),a},tip:function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}}),a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f=typeof c=="object"&&c;e||d.data("popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),!function(a){var b=function(b,c){this.options=a.extend({},a.fn.affix.defaults,c),this.$window=a(window).on("scroll.affix.data-api",a.proxy(this.checkPosition,this)).on("click.affix.data-api",a.proxy(function(){setTimeout(a.proxy(this.checkPosition,this),1)},this)),this.$element=a(b),this.checkPosition()};b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var b=a(document).height(),c=this.$window.scrollTop(),d=this.$element.offset(),e=this.options.offset,f=e.bottom,g=e.top,h="affix affix-top affix-bottom",i;typeof e!="object"&&(f=g=e),typeof g=="function"&&(g=e.top()),typeof f=="function"&&(f=e.bottom()),i=this.unpin!=null&&c+this.unpin<=d.top?!1:f!=null&&d.top+this.$element.height()>=b-f?"bottom":g!=null&&c<=g?"top":!1;if(this.affixed===i)return;this.affixed=i,this.unpin=i=="bottom"?d.top-c:null,this.$element.removeClass(h).addClass("affix"+(i?"-"+i:""))},a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("affix"),f=typeof c=="object"&&c;e||d.data("affix",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.defaults={offset:0},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery),!function(a){var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed").remove()}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()},a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a(document).on("click.alert.data-api",b,c.prototype.close)}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")},a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a(document).on("click.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle")})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.collapse.defaults,c),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b,c,d,e;if(this.transitioning)return;b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find("> .accordion-group > .in");if(d&&d.length){e=d.data("collapse");if(e&&e.transitioning)return;d.collapse("hide"),e||d.data("collapse",null)}this.$element[b](0),this.transition("addClass",a.Event("show"),"shown"),a.support.transition&&this.$element[b](this.$element[0][c])},hide:function(){var b;if(this.transitioning)return;b=this.dimension(),this.reset(this.$element[b]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[b](0)},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth,this.$element[a!==null?"addClass":"removeClass"]("collapse"),this},transition:function(b,c,d){var e=this,f=function(){c.type=="show"&&e.reset(),e.transitioning=0,e.$element.trigger(d)};this.$element.trigger(c);if(c.isDefaultPrevented())return;this.transitioning=1,this.$element[b]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=typeof c=="object"&&c;e||d.data("collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=b,a(document).on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":c.data();c[a(e).hasClass("in")?"addClass":"removeClass"]("collapsed"),a(e).collapse(f)})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=c,this.options.slide&&this.slide(this.options.slide),this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(b){return b||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},to:function(b){var c=this.$element.find(".item.active"),d=c.parent().children(),e=d.index(c),f=this;if(b>d.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){f.to(b)}):e==b?this.pause().cycle():this.slide(b>e?"next":"prev",a(d[b]))},pause:function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle()),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this,j;this.sliding=!0,f&&this.pause(),e=e.length?e:this.$element.find(".item")[h](),j=a.Event("slide",{relatedTarget:e[0]});if(e.hasClass("active"))return;if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),this.$element.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)})}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}},a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=a.extend({},a.fn.carousel.defaults,typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.cycle()})},a.fn.carousel.defaults={interval:5e3,pause:"hover"},a.fn.carousel.Constructor=b,a(document).on("click.carousel.data-api","[data-slide]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),c.data());e.carousel(f),b.preventDefault()})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.typeahead.defaults,c),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=a(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};b.prototype={constructor:b,select:function(){var a=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(a)).change(),this.hide()},updater:function(a){return a},show:function(){var b=a.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:b.top+b.height,left:b.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(b){var c;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(c=a.isFunction(this.source)?this.source(this.query,a.proxy(this.process,this)):this.source,c?this.process(c):this)},process:function(b){var c=this;return b=a.grep(b,function(a){return c.matcher(a)}),b=this.sorter(b),b.length?this.render(b.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){var b=[],c=[],d=[],e;while(e=a.shift())e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?c.push(e):d.push(e):b.push(e);return b.concat(c,d)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(new RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(b){var c=this;return b=a(b).map(function(b,d){return b=a(c.options.item).attr("data-value",d),b.find("a").html(c.highlighter(d)),b[0]}),b.first().addClass("active"),this.$menu.html(b),this},next:function(b){var c=this.$menu.find(".active").removeClass("active"),d=c.next();d.length||(d=a(this.$menu.find("li")[0])),d.addClass("active")},prev:function(a){var b=this.$menu.find(".active").removeClass("active"),c=b.prev();c.length||(c=this.$menu.find("li").last()),c.addClass("active")},listen:function(){this.$element.on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",a.proxy(this.keydown,this)),this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this))},eventSupported:function(a){var b=a in this.$element;return b||(this.$element.setAttribute(a,"return;"),b=typeof this.$element[a]=="function"),b},move:function(a){if(!this.shown)return;switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault(),this.prev();break;case 40:a.preventDefault(),this.next()}a.stopPropagation()},keydown:function(b){this.suppressKeyPressRepeat=!~a.inArray(b.keyCode,[40,38,9,13,27]),this.move(b)},keypress:function(a){if(this.suppressKeyPressRepeat)return;this.move(a)},keyup:function(a){switch(a.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation(),a.preventDefault()},blur:function(a){var b=this;setTimeout(function(){b.hide()},150)},click:function(a){a.stopPropagation(),a.preventDefault(),this.select()},mouseenter:function(b){this.$menu.find(".active").removeClass("active"),a(b.currentTarget).addClass("active")}},a.fn.typeahead=function(c){return this.each(function(){var d=a(this),e=d.data("typeahead"),f=typeof c=="object"&&c;e||d.data("typeahead",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},a.fn.typeahead.Constructor=b,a(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(b){var c=a(this);if(c.data("typeahead"))return;b.preventDefault(),c.typeahead(c.data())})}(window.jQuery)
;
// retina.js, a high-resolution image swapper (http://retinajs.com), v0.0.2

(function(){function t(e){this.path=e;var t=this.path.split("."),n=t.slice(0,t.length-1).join("."),r=t[t.length-1];this.at_2x_path=n+"@2x."+r}function n(e){this.el=e,this.path=new t(this.el.getAttribute("src"));var n=this;this.path.check_2x_variant(function(e){e&&n.swap()})}var e=typeof exports=="undefined"?window:exports;e.RetinaImagePath=t,t.confirmed_paths=[],t.prototype.is_external=function(){return!!this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain)},t.prototype.check_2x_variant=function(e){var n,r=this;if(this.is_external())return e(!1);if(this.at_2x_path in t.confirmed_paths)return e(!0);n=new XMLHttpRequest,n.open("HEAD",this.at_2x_path),n.onreadystatechange=function(){return n.readyState!=4?e(!1):n.status>=200&&n.status<=399?(t.confirmed_paths.push(r.at_2x_path),e(!0)):e(!1)},n.send()},e.RetinaImage=n,n.prototype.swap=function(e){function n(){t.el.complete?(t.el.setAttribute("width",t.el.offsetWidth),t.el.setAttribute("height",t.el.offsetHeight),t.el.setAttribute("src",e)):setTimeout(n,5)}typeof e=="undefined"&&(e=this.path.at_2x_path);var t=this;n()},e.devicePixelRatio>1&&(window.onload=function(){var e=document.getElementsByTagName("img"),t=[],r,i;for(r=0;r<e.length;r++)i=e[r],t.push(new n(i))})})();
(function(n){n(["jquery"],function(n){return function(){function u(r){return(r||(r=i()),container=n("#"+r.containerId),container.children().length)?container:(container=n("<div/>").attr("id",r.containerId).addClass(r.positionClass),container.appendTo(n(r.target)),t=container,container)}function i(){return n.extend({},o,f.options)}function e(n){(t||(t=u()),n.is(":visible"))||(n.remove(),n=null,t.children().length===0&&t.remove())}var t,o={tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,fadeIn:300,fadeOut:1e3,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body"},s=function(n,t,u){return r({iconClass:i().iconClasses.error,message:n,optionsOverride:u,title:t})},h=function(n,t,u){return r({iconClass:i().iconClasses.info,message:n,optionsOverride:u,title:t})},r=function(t){function o(){if(!(n(":focus",f).length>0))return f.fadeOut(r.fadeOut,function(){e(f)})}function y(){(r.timeOut>0||r.extendedTimeOut>0)&&(h=setTimeout(o,r.extendedTimeOut))}function p(){clearTimeout(h),f.stop(!0,!0).fadeIn(r.fadeIn)}var r=i(),s=t.iconClass||r.iconClass;typeof t.optionsOverride!="undefined"&&(r=n.extend(r,t.optionsOverride),s=t.optionsOverride.iconClass||s);var h=null,a=u(r),f=n("<div/>"),c=n("<div/>"),l=n("<div/>"),v={options:r,map:t};return t.iconClass&&f.addClass(r.toastClass).addClass(s),t.title&&(c.append(t.title).addClass(r.titleClass),f.append(c)),t.message&&(l.append(t.message).addClass(r.messageClass),f.append(l)),f.hide(),a.prepend(f),f.fadeIn(r.fadeIn),r.timeOut>0&&(h=setTimeout(o,r.timeOut)),f.hover(p,y),!r.onclick&&r.tapToDismiss&&f.click(o),r.onclick&&f.click(function(){r.onclick()&&o()}),r.debug&&console&&console.log(v),f},c=function(n,t,u){return r({iconClass:i().iconClasses.success,message:n,optionsOverride:u,title:t})},l=function(n,t,u){return r({iconClass:i().iconClasses.warning,message:n,optionsOverride:u,title:t})},a=function(r){var f=i();if(t||u(f),r&&n(":focus",r).length===0){r.fadeOut(f.fadeOut,function(){e(r)});return}t.children().length&&t.fadeOut(f.fadeOut,function(){t.remove()})},f={clear:a,error:s,getContainer:u,info:h,options:{},success:c,version:"1.2.2",warning:l};return f}()})})(typeof define=="function"&&define.amd?define:function(n,t){typeof module!="undefined"&&module.exports?module.exports=t(require(n[0])):window.toastr=t(window.jQuery)})
;
liquidMetal = (function() {
  var SCORE_NO_MATCH = 0.0;
  var SCORE_MATCH = 1.0;
  var SCORE_TRAILING = 0.8;
  var SCORE_TRAILING_BUT_STARTED = 0.9;
  var SCORE_BUFFER = 0.85;
  var WORD_SEPARATORS = " \t_-";

  return {
    lastScore: null,
    lastScoreArray: null,

    score: function(string, abbrev) {
      // short circuits
      if (abbrev.length === 0) return SCORE_TRAILING;
      if (abbrev.length > string.length) return SCORE_NO_MATCH;

      // match & score all
      var allScores = [];
      var search = string.toLowerCase();
      abbrev = abbrev.toLowerCase();
      this._scoreAll(string, search, abbrev, -1, 0, [], allScores);

      // complete miss
      if (allScores.length == 0) return 0;

      // sum per-character scores into overall scores,
      // selecting the maximum score
      var maxScore = 0.0, maxArray = [];
      for (var i = 0; i < allScores.length; i++) {
        var scores = allScores[i];
        var scoreSum = 0.0;
        for (var j = 0; j < string.length; j++) { scoreSum += scores[j]; }
        if (scoreSum > maxScore) {
          maxScore = scoreSum;
          maxArray = scores;
        }
      }

      // normalize max score by string length
      // s. t. the perfect match score = 1
      maxScore /= string.length;

      // record maximum score & score array, return
      this.lastScore = maxScore;
      this.lastScoreArray = maxArray;
      return maxScore;
    },

    _scoreAll: function(string, search, abbrev, searchIndex, abbrIndex, scores, allScores) {
      // save completed match scores at end of search
      if (abbrIndex == abbrev.length) {
        // add trailing score for the remainder of the match
        var started = (search.charAt(0) == abbrev.charAt(0));
        var trailScore = started ? SCORE_TRAILING_BUT_STARTED : SCORE_TRAILING;
        fillArray(scores, trailScore, scores.length, string.length);
        // save score clone (since reference is persisted in scores)
        allScores.push(scores.slice(0));
        return;
      }

      // consume current char to match
      var c = abbrev.charAt(abbrIndex);
      abbrIndex++;

      // cancel match if a character is missing
      var index = search.indexOf(c, searchIndex);
      if (index == -1) return;

      // match all instances of the abbreviaton char
      var scoreIndex = searchIndex; // score section to update
      while ((index = search.indexOf(c, searchIndex+1)) != -1) {
        // score this match according to context
        if (isNewWord(string, index)) {
          scores[index-1] = 1;
          fillArray(scores, SCORE_BUFFER, scoreIndex+1, index-1);
        }
        else if (isUpperCase(string, index)) {
          fillArray(scores, SCORE_BUFFER, scoreIndex+1, index);
        }
        else {
          fillArray(scores, SCORE_NO_MATCH, scoreIndex+1, index);
        }
        scores[index] = SCORE_MATCH;

        // consume matched string and continue search
        searchIndex = index;
        this._scoreAll(string, search, abbrev, searchIndex, abbrIndex, scores, allScores);
      }
    }
  };

  function isUpperCase(string, index) {
    var c = string.charAt(index);
    return ("A" <= c && c <= "Z");
  }

   function isNewWord(string, index) {
    var c = string.charAt(index-1);
    return (WORD_SEPARATORS.indexOf(c) != -1);
  }

  function fillArray(array, value, from, to) {
    for (var i = from; i < to; i++) { array[i] = value; }
    return array;
  }
})();
//
// Scroll into view
// https://gist.github.com/hsablonniere/2581101
//

if (!Element.prototype.scrollIntoViewIfNeeded) {
  Element.prototype.scrollIntoViewIfNeeded = function (centerIfNeeded) {
    centerIfNeeded = arguments.length === 0 ? true : !!centerIfNeeded;

    var parent = this.parentNode,
        parentComputedStyle = window.getComputedStyle(parent, null),
        parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue('border-top-width')),
        parentBorderLeftWidth = parseInt(parentComputedStyle.getPropertyValue('border-left-width')),
        overTop = this.offsetTop - parent.offsetTop < parent.scrollTop,
        overBottom = (this.offsetTop - parent.offsetTop + this.clientHeight - parentBorderTopWidth) > (parent.scrollTop + parent.clientHeight),
        overLeft = this.offsetLeft - parent.offsetLeft < parent.scrollLeft,
        overRight = (this.offsetLeft - parent.offsetLeft + this.clientWidth - parentBorderLeftWidth) > (parent.scrollLeft + parent.clientWidth),
        alignWithTop = overTop && !overBottom;

    if ((overTop || overBottom) && centerIfNeeded) {
      parent.scrollTop = this.offsetTop - parent.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + this.clientHeight / 2;
    }

    if ((overLeft || overRight) && centerIfNeeded) {
      parent.scrollLeft = this.offsetLeft - parent.offsetLeft - parent.clientWidth / 2 - parentBorderLeftWidth + this.clientWidth / 2;
    }

    if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
      this.scrollIntoView(alignWithTop);
    }
  };
}
;
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.TokenField = (function(_super) {
    __extends(TokenField, _super);

    function TokenField() {
      _ref = TokenField.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TokenField.prototype.tagName = "ul";

    TokenField.prototype.className = "token-field";

    TokenField.prototype.events = {
      "blur input": function() {
        this.$el.removeClass("focus");
        return this.selectTokenAtIndex(Infinity);
      },
      "focus input": function() {
        return this.$el.addClass("focus");
      },
      "click": function() {
        return this.inputTester.focus();
      },
      "click input": function() {
        return this.selectTokenAtIndex(Infinity);
      },
      "keyup input": "keyup",
      "keydown input": "keydown",
      "keypress input": "keypress",
      "mousedown ul li": function(e) {
        return e.preventDefault();
      },
      "click ul li": "clickToken",
      "click .close": "clickToCloseToken"
    };

    TokenField.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      TokenField.__super__.initialize.apply(this, arguments);
      this.selectedIndex = Infinity;
      this.tokens = [];
      return this.delegate = options.delegate;
    };

    TokenField.prototype.render = function() {
      this.container = document.createElement("li");
      this.container.className = "tokens";
      this.textContent = document.createElement("span");
      this.inputTester = document.createElement("input");
      this.inputTester.setAttribute("placeholder", "Add filters...");
      this.inputTester.setAttribute("autocorrect", "off");
      this.inputTester.setAttribute("autocapitalize", "off");
      this.inputTester.setAttribute("autocomplete", "off");
      this.container.appendChild(this.textContent);
      this.container.appendChild(this.inputTester);
      this.el.appendChild(this.container);
      return this;
    };

    TokenField.prototype.insertToken = function(object) {
      var token;
      token = this.prepareObject(object);
      this.el.insertBefore(token.node, this.container);
      return this.tokens.push(token);
    };

    TokenField.prototype.prepareObject = function(object) {
      var data, node, token;
      data = this.delegate.visualisationForObject(object, this);
      if (_.isString(data)) {
        node = document.createElement("li");
        node.innerHTML = data;
      }
      token = {
        object: object,
        node: node || data
      };
      return token;
    };

    TokenField.prototype.tokenize = function() {
      var object, string;
      string = this.inputTester.value;
      object = this.delegate.objectForString(string, this);
      this.insertToken(object);
      return this.textContent.innerHTML = this.inputTester.value = "";
    };

    TokenField.prototype.selectPreviousToken = function() {
      if (this.selectedIndex < 1) {
        return;
      }
      if (this.selectedIndex === Infinity) {
        return this.selectTokenAtIndex(this.tokens.length - 1);
      } else {
        return this.selectTokenAtIndex(this.selectedIndex - 1);
      }
    };

    TokenField.prototype.selectNextToken = function() {
      if (this.selectedIndex === Infinity) {
        return;
      }
      if (this.selectedIndex < this.tokens.length - 1) {
        return this.selectTokenAtIndex(this.selectedIndex + 1);
      } else {
        return this.selectTokenAtIndex(Infinity);
      }
    };

    TokenField.prototype.selectTokenAtIndex = function(index) {
      if (this.selectedIndex !== Infinity) {
        $(this.tokens[this.selectedIndex].node).removeClass("selected");
      }
      if (index === Infinity) {
        this.selectedIndex = Infinity;
        this.$el.removeClass("selected-token");
        return;
      }
      if ((0 <= index && index < this.tokens.length)) {
        this.selectedIndex = index;
        if (this.inputTester.value.length === 0) {
          this.$el.addClass("selected-token");
        }
        return $(this.tokens[this.selectedIndex].node).addClass("selected");
      }
    };

    TokenField.prototype.deleteTokenAtIndex = function(index, deselect) {
      var token;
      if (index < this.tokens.length) {
        token = this.tokens.splice(index, 1);
        this.el.removeChild(token[0].node);
        if (!deselect) {
          this.selectedIndex = Infinity;
          if (this.tokens.length) {
            return this.selectTokenAtIndex(Math.max(index - 1, 0));
          } else {
            return this.selectTokenAtIndex(Infinity);
          }
        }
      }
    };

    TokenField.prototype.clickToken = function(e) {
      var index, target;
      e.stopPropagation();
      target = e.currentTarget;
      if ((index = this._indexForTarget(target)) >= 0) {
        this.selectTokenAtIndex(index);
      }
      return this.inputTester.focus();
    };

    TokenField.prototype.clickToCloseToken = function(e) {
      var index, target;
      e.stopPropagation();
      target = $(e.currentTarget).closest("li")[0];
      if ((index = this._indexForTarget(target)) < 0) {
        return;
      }
      this.deleteTokenAtIndex(index, true);
      if (this.selectedIndex === Infinity) {
        return;
      }
      if (this.tokens.length === 0) {
        this.selectedIndex = Infinity;
        this.selectTokenAtIndex(Infinity);
        return;
      }
      if (index <= this.selectedIndex) {
        this.selectedIndex = Math.max(index - 1, 0);
      }
    };

    TokenField.prototype._indexForTarget = function(target) {
      var index, token, _i, _len, _ref1;
      _ref1 = this.tokens;
      for (index = _i = 0, _len = _ref1.length; _i < _len; index = ++_i) {
        token = _ref1[index];
        if (target === token.node) {
          return index;
        }
      }
    };

    TokenField.prototype.keyup = function(e) {
      this.textContent.innerHTML = this.inputTester.value;
      switch (e.keyCode) {
        case 13:
          return this.tokenize();
      }
    };

    TokenField.prototype.keydown = function(e) {
      switch (e.keyCode) {
        case 8:
          if (this.selectedIndex !== Infinity) {
            this.deleteTokenAtIndex(this.selectedIndex);
            return e.preventDefault();
          } else if (this.inputTester.selectionStart === 0 && this.inputTester.selectionEnd === 0) {
            this.selectTokenAtIndex(this.tokens.length - 1);
            return e.preventDefault();
          }
          break;
        case 37:
          if (this.inputTester.selectionStart === 0 || this.selectedIndex !== Infinity) {
            e.preventDefault();
            return this.selectPreviousToken();
          }
          break;
        case 39:
          if (this.selectedIndex !== Infinity) {
            e.preventDefault();
            return this.selectNextToken();
          }
      }
    };

    TokenField.prototype.keypress = function(e) {
      if (this.selectedIndex !== Infinity) {
        this.deleteTokenAtIndex(this.selectedIndex, true);
        this.selectedIndex = Infinity;
        return this.selectTokenAtIndex(Infinity);
      }
    };

    return TokenField;

  })(Backbone.View);

}).call(this);
/*

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

// lib/handlebars/browser-prefix.js
var Handlebars = {};

(function(Handlebars, undefined) {
;
// lib/handlebars/base.js

Handlebars.VERSION = "1.0.0";
Handlebars.COMPILER_REVISION = 4;

Handlebars.REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '>= 1.0.0'
};

Handlebars.helpers  = {};
Handlebars.partials = {};

var toString = Object.prototype.toString,
    functionType = '[object Function]',
    objectType = '[object Object]';

Handlebars.registerHelper = function(name, fn, inverse) {
  if (toString.call(name) === objectType) {
    if (inverse || fn) { throw new Handlebars.Exception('Arg not supported with multiple helpers'); }
    Handlebars.Utils.extend(this.helpers, name);
  } else {
    if (inverse) { fn.not = inverse; }
    this.helpers[name] = fn;
  }
};

Handlebars.registerPartial = function(name, str) {
  if (toString.call(name) === objectType) {
    Handlebars.Utils.extend(this.partials,  name);
  } else {
    this.partials[name] = str;
  }
};

Handlebars.registerHelper('helperMissing', function(arg) {
  if(arguments.length === 2) {
    return undefined;
  } else {
    throw new Error("Missing helper: '" + arg + "'");
  }
});

Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  var inverse = options.inverse || function() {}, fn = options.fn;

  var type = toString.call(context);

  if(type === functionType) { context = context.call(this); }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      return Handlebars.helpers.each(context, options);
    } else {
      return inverse(this);
    }
  } else {
    return fn(context);
  }
});

Handlebars.K = function() {};

Handlebars.createFrame = Object.create || function(object) {
  Handlebars.K.prototype = object;
  var obj = new Handlebars.K();
  Handlebars.K.prototype = null;
  return obj;
};

Handlebars.logger = {
  DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

  methodMap: {0: 'debug', 1: 'info', 2: 'warn', 3: 'error'},

  // can be overridden in the host environment
  log: function(level, obj) {
    if (Handlebars.logger.level <= level) {
      var method = Handlebars.logger.methodMap[level];
      if (typeof console !== 'undefined' && console[method]) {
        console[method].call(console, obj);
      }
    }
  }
};

Handlebars.log = function(level, obj) { Handlebars.logger.log(level, obj); };

Handlebars.registerHelper('each', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var i = 0, ret = "", data;

  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  if(context && typeof context === 'object') {
    if(context instanceof Array){
      for(var j = context.length; i<j; i++) {
        if (data) { data.index = i; }
        ret = ret + fn(context[i], { data: data });
      }
    } else {
      for(var key in context) {
        if(context.hasOwnProperty(key)) {
          if(data) { data.key = key; }
          ret = ret + fn(context[key], {data: data});
          i++;
        }
      }
    }
  }

  if(i === 0){
    ret = inverse(this);
  }

  return ret;
});

Handlebars.registerHelper('if', function(conditional, options) {
  var type = toString.call(conditional);
  if(type === functionType) { conditional = conditional.call(this); }

  if(!conditional || Handlebars.Utils.isEmpty(conditional)) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('unless', function(conditional, options) {
  return Handlebars.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn});
});

Handlebars.registerHelper('with', function(context, options) {
  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if (!Handlebars.Utils.isEmpty(context)) return options.fn(context);
});

Handlebars.registerHelper('log', function(context, options) {
  var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
  Handlebars.log(level, context);
});
;
// lib/handlebars/utils.js

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

Handlebars.Exception = function(message) {
  var tmp = Error.prototype.constructor.apply(this, arguments);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }
};
Handlebars.Exception.prototype = new Error();

// Build out our basic SafeString type
Handlebars.SafeString = function(string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

var escape = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};

var badChars = /[&<>"'`]/g;
var possible = /[&<>"'`]/;

var escapeChar = function(chr) {
  return escape[chr] || "&amp;";
};

Handlebars.Utils = {
  extend: function(obj, value) {
    for(var key in value) {
      if(value.hasOwnProperty(key)) {
        obj[key] = value[key];
      }
    }
  },

  escapeExpression: function(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof Handlebars.SafeString) {
      return string.toString();
    } else if (string == null || string === false) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = string.toString();

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  },

  isEmpty: function(value) {
    if (!value && value !== 0) {
      return true;
    } else if(toString.call(value) === "[object Array]" && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }
};
;
// lib/handlebars/runtime.js

Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    var container = {
      escapeExpression: Handlebars.Utils.escapeExpression,
      invokePartial: Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = Handlebars.VM.program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = Handlebars.VM.program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common) {
          ret = {};
          Handlebars.Utils.extend(ret, common);
          Handlebars.Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: Handlebars.VM.programWithDepth,
      noop: Handlebars.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var result = templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);

      var compilerInfo = container.compilerInfo || [],
          compilerRevision = compilerInfo[0] || 1,
          currentRevision = Handlebars.COMPILER_REVISION;

      if (compilerRevision !== currentRevision) {
        if (compilerRevision < currentRevision) {
          var runtimeVersions = Handlebars.REVISION_CHANGES[currentRevision],
              compilerVersions = Handlebars.REVISION_CHANGES[compilerRevision];
          throw "Template was precompiled with an older version of Handlebars than the current runtime. "+
                "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").";
        } else {
          // Use the embedded version info since the runtime doesn't know about this revision yet
          throw "Template was precompiled with a newer version of Handlebars than the current runtime. "+
                "Please update your runtime to a newer version ("+compilerInfo[1]+").";
        }
      }

      return result;
    };
  },

  programWithDepth: function(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var program = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    program.program = i;
    program.depth = args.length;
    return program;
  },
  program: function(i, fn, data) {
    var program = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    program.program = i;
    program.depth = 0;
    return program;
  },
  noop: function() { return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    var options = { helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    } else if (!Handlebars.compile) {
      throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      partials[name] = Handlebars.compile(partial, {data: data !== undefined});
      return partials[name](context, options);
    }
  }
};

Handlebars.template = Handlebars.VM.template;
;
// lib/handlebars/browser-suffix.js
})(Handlebars);
;
(function() {
  Handlebars.registerHelper("selected", function(selected) {
    if (selected) {
      return "checked";
    } else {
      return "";
    }
  });

  Handlebars.registerHelper("truncate", function(text, length) {
    var truncated;
    truncated = text.substring(0, length);
    if (text.length > length) {
      truncated = truncated + "...";
    }
    return truncated;
  });

  Handlebars.registerHelper("strip", function(text) {
    return text.toString().replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  });

}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["autocomplete/results_check_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li><i class=\"icon-wrench\"></i> <span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["autocomplete/results_check_item"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["autocomplete/results_check_token"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<i class=\"icon-wrench\"></i> <span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> <i class=\"icon-remove-sign close\"></i>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["autocomplete/results_check_token"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["autocomplete/results_client_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li><i class=\"icon-hdd\"></i> <span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["autocomplete/results_client_item"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["autocomplete/results_client_token"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<i class=\"icon-hdd\"></i> <span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> <i class=\"icon-remove-sign close\"></i>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["autocomplete/results_client_token"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["autocomplete/results_query_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li><i class=\"icon-search\"></i> <span>";
  if (stack1 = helpers.query) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.query; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["autocomplete/results_query_item"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["autocomplete/results_query_token"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<i class=\"icon-search\"></i> <span>";
  if (stack1 = helpers.query) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.query; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> <i class=\"icon-remove-sign close\"></i>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["autocomplete/results_query_token"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["checks/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"counts_container\" class=\"form-stacked\">\n  <h4>Checks Count</h4>\n  <ul id=\"counts\">\n    <li><span class=\"label label-success\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.checks),stack1 == null || stack1 === false ? stack1 : stack1.models)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " total</span></li>\n  </ul>\n</div>\n\n<div id=\"filter\"></div>\n\n<div id=\"checks_container\"></div>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["checks/index"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["checks/list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<table id=\"generic\" class=\"table table-bordered sensu-table\">\n  <thead>\n    <tr>\n      <th class=\"col_check_id\">Check</th>\n      <th class=\"col_command\">Command</th>\n      <th class=\"col_interval\">Interval</th>\n      <th class=\"col_subscribers\">Subscribers</th>\n      <th class=\"col_standalone\">Standalone</th>\n    </tr>\n  </thead>\n  <tbody></tbody>\n</table>\n";
  });
  return this.HandlebarsTemplates["checks/list"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["checks/list_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td class=\"check_id\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td class=\"command\">";
  if (stack1 = helpers.command) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.command; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td class=\"interval\">";
  if (stack1 = helpers.interval) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.interval; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td class=\"subscribers\">";
  if (stack1 = helpers.subscribers) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subscribers; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td class=\"standalone\">";
  if (stack1 = helpers.standalone) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.standalone; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["checks/list_item"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["clients/counts"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"counts_container\" class=\"form-stacked\">\n  <h4>Clients Count</h4>\n  <ul>\n    <li><span class=\"label label-success\">";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.count; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " total</span></li>\n  </ul>\n</div>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["clients/counts"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["clients/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"counts\"></div>\n\n<div id=\"filter\"></div>\n\n<div class=\"btn-group\">\n  <a id=\"toggle-checkboxes\" class=\"btn btn-success\" href=\"#clients\">\n    <i class=\"icon-check icon-white\" />\n  </a>\n  <a class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n    <span class=\"caret\" />\n  </a>\n  <ul class=\"dropdown-menu\">\n    <li class=\"dropdown-header\">Select</li>\n    <li><a id=\"select-all\" href=\"#clients\"><i class=\"icon-check\" /> All</a></li>\n    <li><a id=\"select-none\" href=\"#clients\"><i class=\"icon-ban-circle\" /> None</a></li>\n    <li><a id=\"select-silenced\" href=\"#clients\"><i class=\"icon-volume-off\" /> Silenced</a></li>\n    <li><a id=\"select-unsilenced\" href=\"#clients\"><i class=\"icon-volume-up\" /> Unsilenced</a></li>\n    <li class=\"divider\" />\n    <li class=\"dropdown-header\">Actions</li>\n    <li><a id=\"silence-selected-clients\" href=\"#clients\"><i class=\"icon-volume-off\" /> Silence Clients</a></li>\n    <li><a id=\"unsilence-selected-clients\" href=\"#clients\"><i class=\"icon-volume-up\" /> Unsilence Clients</a></li>\n    <li><a id=\"remove-selected\" href=\"#clients\"><i class=\"icon-remove\" /> Remove Clients</a></li>\n  </ul>\n</div>\n\n<div id=\"clients_container\"></div>\n";
  });
  return this.HandlebarsTemplates["clients/index"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["clients/list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<table id=\"generic\" class=\"table table-bordered sensu-table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th class=\"col_client_id\">Client</th>\n      <th class=\"col_public_ip\">Public IP</th>\n      <th class=\"col_timestamp\">Timestamp</th>\n      <th class=\"col_subscriptions\">Subscriptions</th>\n    </tr>\n  </thead>\n  <tbody></tbody>\n</table>\n";
  });
  return this.HandlebarsTemplates["clients/list"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["clients/list_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  
  return "\n    <i class=\"icon-volume-off icon-white unsilenced\"/>\n  ";
  }

function program3(depth0,data) {
  
  
  return "\n    <i class=\"icon-volume-up icon-white\" />\n  ";
  }

  buffer += "<td class=\"select\">\n  <input type=\"checkbox\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.selected || depth0.selected),stack1 ? stack1.call(depth0, depth0.selected, options) : helperMissing.call(depth0, "selected", depth0.selected, options)))
    + "/>\n</td>\n<td class=\"client_id\">\n  ";
  stack2 = helpers['if'].call(depth0, depth0.silenced, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n</td>\n<td class=\"public_ip\">";
  if (stack2 = helpers.address) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.address; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n<td class=\"timestamp\">";
  if (stack2 = helpers.timestamp) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.timestamp; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n<td class=\"subscriptions\">";
  if (stack2 = helpers.subscriptions) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.subscriptions; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["clients/list_item"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["clients/modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <div class=\"well\">\n      <h5>"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h5>\n      <span class=\"modal_value\">";
  stack2 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>\n    </div>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
  }

function program4(depth0,data) {
  
  
  return "false/nil";
  }

function program6(depth0,data) {
  
  
  return "\n      <i class=\"icon-volume-off icon-white\" />\n      <span>&nbsp;Un-silence Client</span>\n    ";
  }

function program8(depth0,data) {
  
  
  return "\n      <i class=\"icon-volume-up icon-white\" />\n      <span>&nbsp;Silence Client</span>\n    ";
  }

  buffer += "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n    <h4 id=\"modal_label\">\n      <span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </h4>\n</div>\n<div class=\"modal-body\">\n  <h3 class=\"section_title\">client data</h3>\n  ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"modal-footer\">\n  <button id=\"silence_client\" class=\"btn btn-danger\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0.silenced, {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n  <button id=\"remove_client\" class=\"btn btn-danger\">\n      <i class=\"icon-remove icon-white\" />\n      <span>&nbsp;Remove Client</span>\n  </button>\n</div>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["clients/modal"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["empty_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"empty-indicator\">\n  <i class=\"icon-search\"></i>\n  <h3>No items found</h3>\n</div>\n";
  });
  return this.HandlebarsTemplates["empty_list"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"error_container\">\n  <i class=\"icon-remove-sign\"></i>\n  <h1>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  <p>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["error"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["events/counts"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"counts_container\" class=\"form-stacked\">\n  <h4>Events Count</h4>\n  <ul>\n    <li><span class=\"label label-success\">";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " total</span></li>\n    <li><span class=\"label label-important\">";
  if (stack1 = helpers.critical) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.critical; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " critical</span></li>\n    <li><span class=\"label label-warning\">";
  if (stack1 = helpers.warning) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.warning; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " warning</span></li>\n    <li><span class=\"label label-unknown\">";
  if (stack1 = helpers.unknown) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.unknown; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " unknown</span></li>\n  </ul>\n</div>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["events/counts"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["events/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"counts\"></div>\n\n<div id=\"filter\"></div>\n\n<div class=\"btn-group\">\n  <a id=\"toggle-checkboxes\" class=\"btn btn-success\" href=\"#events\">\n    <i class=\"icon-check icon-white\" />\n  </a>\n  <a class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n    <span class=\"caret\" />\n  </a>\n  <ul class=\"dropdown-menu\">\n    <li class=\"dropdown-header\">Select</li>\n    <li><a id=\"select-all\" href=\"#events\"><i class=\"icon-check\" /> All</a></li>\n    <li><a id=\"select-none\" href=\"#events\"><i class=\"icon-ban-circle\" /> None</a></li>\n    <li><a id=\"select-critical\" href=\"#events\"><i class=\"icon-fire\" /> Critical</a></li>\n    <li><a id=\"select-unknown\" href=\"#events\"><i class=\"icon-question-sign\" /> Unknown</a></li>\n    <li><a id=\"select-warning\" href=\"#events\"><i class=\"icon-warning-sign\" /> Warning</a></li>\n    <li><a id=\"select-silenced-clients\" href=\"#events\"><i class=\"icon-volume-off\" /> Silenced Clients</a></li>\n    <li><a id=\"select-silenced-checks\" href=\"#events\"><i class=\"icon-volume-off\" /> Silenced Checks</a></li>\n    <li><a id=\"select-unsilenced-clients\" href=\"#events\"><i class=\"icon-volume-up\" /> Unsilenced Clients</a></li>\n    <li><a id=\"select-unsilenced-checks\" href=\"#events\"><i class=\"icon-volume-up\" /> Unsilenced Checks</a></li>\n    <li class=\"divider\" />\n    <li class=\"dropdown-header\">Actions</li>\n    <li><a id=\"resolve-selected\" href=\"#events\"><i class=\"icon-ok-sign\" /> Resolve</a></li>\n    <li><a id=\"silence-selected-clients\" href=\"#events\"><i class=\"icon-volume-off\" /> Silence Clients</a></li>\n    <li><a id=\"silence-selected-checks\" href=\"#events\"><i class=\"icon-volume-off\" /> Silence Checks</a></li>\n    <li><a id=\"unsilence-selected-clients\" href=\"#events\"><i class=\"icon-volume-up\" /> Unsilence Clients</a></li>\n    <li><a id=\"unsilence-selected-checks\" href=\"#events\"><i class=\"icon-volume-up\" /> Unsilence Checks</a></li>\n  </ul>\n</div>\n\n<div id=\"list\"></div>\n";
  });
  return this.HandlebarsTemplates["events/index"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["events/list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<table id=\"events_table\" class=\"table table-bordered sensu-table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th class=\"col_client\">Client</th>\n      <th class=\"col_check\">Check</th>\n      <th class=\"col_output\">Output</th>\n    </tr>\n  </thead>\n  <tbody></tbody>\n</table>\n";
  });
  return this.HandlebarsTemplates["events/list"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["events/list_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  
  return "\n    <i class=\"icon-volume-off icon-white unsilenced\"/>\n  ";
  }

function program3(depth0,data) {
  
  
  return "\n    <i class=\"icon-volume-up icon-white\" />\n  ";
  }

  buffer += "<td class=\"select\"><input type=\"checkbox\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.selected || depth0.selected),stack1 ? stack1.call(depth0, depth0.selected, options) : helperMissing.call(depth0, "selected", depth0.selected, options)))
    + "/></td>\n<td class=\"client\">\n  ";
  stack2 = helpers['if'].call(depth0, depth0.client_silenced, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  if (stack2 = helpers.client) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.client; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n</td>\n<td class=\"check\">\n  ";
  stack2 = helpers['if'].call(depth0, depth0.silenced, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  if (stack2 = helpers.check) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.check; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n</td>\n<td class=\"output\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.truncate || depth0.truncate),stack1 ? stack1.call(depth0, depth0.output, 90, options) : helperMissing.call(depth0, "truncate", depth0.output, 90, options)))
    + "</td>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["events/list_item"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["events/modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n      <strong>"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong> <span class=\"modal_value\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.strip || depth0.strip),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "strip", depth0, options)))
    + "</span><br/>\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <strong>"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong> <span class=\"modal_value\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span><br />\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n      <i class=\"icon-volume-off icon-white\" />\n      <span>&nbsp;Un-silence Client</span>\n    ";
  }

function program9(depth0,data) {
  
  
  return "\n      <i class=\"icon-volume-up icon-white\" />\n      <span>&nbsp;Silence Client</span>\n    ";
  }

function program11(depth0,data) {
  
  
  return "\n      <i class=\"icon-volume-off icon-white\" />\n      <span>&nbsp;Un-silence Check</span>\n    ";
  }

function program13(depth0,data) {
  
  
  return "\n      <i class=\"icon-volume-up icon-white\" />\n      <span>&nbsp;Silence Check</span>\n    ";
  }

  buffer += "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n    <h4 id=\"modal_label\">\n      <span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.event),stack1 == null || stack1 === false ? stack1 : stack1.client)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><br />\n      <small>"
    + escapeExpression(((stack1 = ((stack1 = depth0.event),stack1 == null || stack1 === false ? stack1 : stack1.check)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</small>\n    </h4>\n</div>\n<div class=\"modal-body\">\n  <h3 class=\"section_title\">event data</h3>\n  <div class=\"well\">\n  ";
  stack2 = helpers.each.call(depth0, depth0.event, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </div>\n\n  <h3 class=\"section_title\">client data</h3>\n  <div class=\"well\">\n  ";
  stack2 = helpers.each.call(depth0, depth0.client, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button id=\"silence_client\" class=\"btn btn-danger\">\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.silenced), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </button>\n  <button id=\"silence_check\" class=\"btn btn-danger\">\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.event),stack1 == null || stack1 === false ? stack1 : stack1.silenced), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </button>\n  <button id=\"resolve_check\" class=\"btn btn-danger\">\n    <i class=\"icon-ok icon-white\" />\n    <span>&nbsp;Resolve</span>\n  </button>\n</div>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["events/modal"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["info/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"info_label\" class=\"form-stacked\">\n  <h4>Sensu & Dashboard Info</h4>\n</div>\n\n<table id=\"info_table\" class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th class=\"col_info_name\">Name</th>\n      <th class=\"col_info_value\">Value</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Sensu Version</td>\n      <td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.sensu),stack1 == null || stack1 === false ? stack1 : stack1.version)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    </tr>\n    <tr>\n      <td>Sensu Dashboard Version</td>\n      <td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.sensu_dashboard),stack1 == null || stack1 === false ? stack1 : stack1.version)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    </tr>\n    <tr>\n      <td>Sensu Dashboard Poll Frequency</td>\n      <td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.sensu_dashboard),stack1 == null || stack1 === false ? stack1 : stack1.poll_frequency)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " seconds</td>\n    </tr>\n    <tr>\n      <td>RabbitMQ</td>\n      <td>";
  if (stack2 = helpers.rmq_status) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rmq_status; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n    </tr>\n    <tr>\n      <td>Keepalive Messages</td>\n      <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.rabbitmq),stack1 == null || stack1 === false ? stack1 : stack1.keepalives)),stack1 == null || stack1 === false ? stack1 : stack1.messages)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    </tr>\n    <tr>\n      <td>Keepalive Consumers</td>\n      <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.rabbitmq),stack1 == null || stack1 === false ? stack1 : stack1.keepalives)),stack1 == null || stack1 === false ? stack1 : stack1.consumers)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    </tr>\n    <tr>\n      <td>Result Messages</td>\n      <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.rabbitmq),stack1 == null || stack1 === false ? stack1 : stack1.results)),stack1 == null || stack1 === false ? stack1 : stack1.messages)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    </tr>\n    <tr>\n      <td>Result Consumers</td>\n      <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.rabbitmq),stack1 == null || stack1 === false ? stack1 : stack1.results)),stack1 == null || stack1 === false ? stack1 : stack1.consumers)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    </tr>\n    <tr>\n      <td>Redis</td>\n      <td>";
  if (stack2 = helpers.redis_status) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.redis_status; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n    </tr>\n    <tr>\n    </tr>\n    <tr>\n    </tr>\n  </tbody>\n</table>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["info/index"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <h4 id=\"modal_label\">\n      <span>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span><br />\n      ";
  stack1 = helpers['if'].call(depth0, depth0.subtitle, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h4>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<small>";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</small>";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <p>";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  ";
  return buffer;
  }

  buffer += "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"modal-body\">\n  ";
  stack1 = helpers['if'].call(depth0, depth0.body, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"modal-footer\">\n  <a href=\"#\" class=\"btn\">Close</a>\n</div>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["modal"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["stashes/counts"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"counts_container\" class=\"form-stacked\">\n  <h4>Stashes Count</h4>\n  <ul>\n    <li><span class=\"label label-success\">";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.count; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " total</span></li>\n  </ul>\n</div>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["stashes/counts"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["stashes/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"counts\"></div>\n\n<div id=\"filter\"></div>\n\n<div class=\"btn-group\">\n  <a id=\"toggle-checkboxes\" class=\"btn btn-success\" href=\"#stashes\">\n    <i class=\"icon-check icon-white\" />\n  </a>\n  <a class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n    <span class=\"caret\" />\n  </a>\n  <ul class=\"dropdown-menu\">\n    <li class=\"dropdown-header\">Select</li>\n    <li><a id=\"select-all\" href=\"#stashes\"><i class=\"icon-check\" /> All</a></li>\n    <li><a id=\"select-none\" href=\"#stashes\"><i class=\"icon-ban-circle\" /> None</a></li>\n    <li class=\"divider\" />\n    <li class=\"dropdown-header\">Actions</li>\n    <li><a id=\"remove-selected\" href=\"#stashes\"><i class=\"icon-remove\" /> Remove</a></li>\n  </ul>\n</div>\n\n<div id=\"stashes_container\"></div>\n";
  });
  return this.HandlebarsTemplates["stashes/index"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["stashes/list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<table id=\"generic\" class=\"table table-bordered sensu-table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th class=\"col_path\">Path</th>\n      <th class=\"col_keys\">Keys</th>\n    </tr>\n  </thead>\n  <tbody></tbody>\n</table>\n";
  });
  return this.HandlebarsTemplates["stashes/list"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["stashes/list_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<td class=\"select\">\n  <input type=\"checkbox\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.selected || depth0.selected),stack1 ? stack1.call(depth0, depth0.selected, options) : helperMissing.call(depth0, "selected", depth0.selected, options)))
    + "/>\n</td>\n<td class=\"path\">";
  if (stack2 = helpers.path) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.path; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n<td class=\"keys\">";
  if (stack2 = helpers.key_list) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.key_list; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["stashes/list_item"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["stashes/modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <div class=\"well\">\n      <h5>"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h5>\n      <span>";
  stack2 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>\n    </div>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
  }

function program4(depth0,data) {
  
  
  return "false/nil";
  }

  buffer += "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n    <h4 id=\"modal_label\">\n      <span>";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </h4>\n</div>\n<div class=\"modal-body\">\n  <h3 class=\"section_title\">stash data</h3>\n  <div class=\"well\">\n    <h5>Path</h5>\n    <span class=\"modal_value\">";
  if (stack1 = helpers.path) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>\n  ";
  stack1 = helpers.each.call(depth0, depth0.content, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"modal-footer\">\n  <button id=\"remove_stash\" class=\"btn btn-danger\">\n    <i class=\"icon-remove icon-white\" />\n    <span>&nbsp;Remove</span>\n  </button>\n</div>\n";
  return buffer;
  });
  return this.HandlebarsTemplates["stashes/modal"];
}).call(this);
(function() {
  this.namespace = function(nspace, payload, context) {
    var currentPart, parent, parts;
    payload = payload || {};
    context = context || window;
    parts = nspace.split(".");
    parent = context;
    currentPart = "";
    while (currentPart = parts.shift()) {
      if (parts.length !== 0) {
        parent[currentPart] = parent[currentPart] || {};
      } else {
        parent[currentPart] = parent[currentPart] || payload;
      }
      parent = parent[currentPart];
    }
    return payload(parent);
  };

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Models", function(exports) {
    var _ref;
    return exports.Check = (function(_super) {
      __extends(Check, _super);

      function Check() {
        _ref = Check.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Check.prototype.defaults = {
        handlers: ["default"],
        standalone: false,
        subscribers: [],
        interval: 60
      };

      Check.prototype.idAttribute = "name";

      return Check;

    })(Backbone.Model);
  });

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Models", function(exports) {
    var _ref;
    return exports.Client = (function(_super) {
      __extends(Client, _super);

      function Client() {
        this.remove = __bind(this.remove, this);
        this.unsilence = __bind(this.unsilence, this);
        this.silence = __bind(this.silence, this);
        _ref = Client.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Client.prototype.defaults = {
        name: null,
        address: null,
        subscriptions: [],
        timestamp: 0
      };

      Client.prototype.idAttribute = "name";

      Client.prototype.initialize = function() {
        this.set({
          silence_path: "silence/" + (this.get("name"))
        });
        this.listenTo(SensuDashboard.Stashes, "reset", this.setSilencing);
        this.listenTo(SensuDashboard.Stashes, "add", this.setSilencing);
        this.listenTo(SensuDashboard.Stashes, "remove", this.setSilencing);
        return this.setSilencing();
      };

      Client.prototype.setSilencing = function() {
        var silenced;
        silenced = false;
        if (SensuDashboard.Stashes.get(this.get("silence_path"))) {
          silenced = true;
        }
        if (this.get("silenced") !== silenced) {
          return this.set({
            silenced: silenced
          });
        }
      };

      Client.prototype.silence = function(options) {
        var stash,
          _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        return stash = SensuDashboard.Stashes.create({
          path: this.get("silence_path"),
          content: {
            timestamp: Math.round(new Date().getTime() / 1000)
          }
        }, {
          success: function(model, response, opts) {
            if (_this.successCallback) {
              return _this.successCallback.apply(_this, [_this, response]);
            }
          },
          error: function(model, xhr, opts) {
            if (_this.errorCallback) {
              return _this.errorCallback.apply(_this, [_this, xhr, opts]);
            }
          }
        });
      };

      Client.prototype.unsilence = function(options) {
        var stash,
          _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        stash = SensuDashboard.Stashes.get(this.get("silence_path"));
        if (stash) {
          return stash.destroy({
            success: function(model, response, opts) {
              if (_this.successCallback) {
                return _this.successCallback.apply(_this, [_this, response, opts]);
              }
            },
            error: function(model, xhr, opts) {
              if (_this.errorCallback) {
                return _this.errorCallback.apply(_this, [_this, xhr, opts]);
              }
            }
          });
        } else {
          if (this.errorCallback) {
            return this.errorCallback.apply(this, [this]);
          }
        }
      };

      Client.prototype.remove = function(options) {
        var _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        return this.destroy({
          wait: true,
          success: function(model, response, opts) {
            if (_this.successCallback) {
              return _this.successCallback.apply(_this, [model, response, opts]);
            }
          },
          error: function(model, xhr, opts) {
            if (_this.errorCallback) {
              return _this.errorCallback.apply(_this, [model, xhr, opts]);
            }
          }
        });
      };

      return Client;

    })(Backbone.Model);
  });

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Models", function(exports) {
    var _ref;
    return exports.Event = (function(_super) {
      __extends(Event, _super);

      function Event() {
        this.unsilence = __bind(this.unsilence, this);
        this.silence = __bind(this.silence, this);
        this.resolve = __bind(this.resolve, this);
        _ref = Event.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Event.prototype.defaults = {
        client: null,
        check: null,
        occurrences: 0,
        output: null,
        status: 3,
        flapping: false,
        issued: "0000-00-00T00:00:00Z"
      };

      Event.prototype.initialize = function() {
        this.set({
          id: "" + (this.get("client")) + "/" + (this.get("check"))
        });
        this.setOutputIfEmpty(this.get("output"));
        this.setStatusName(this.get("status"));
        this.set({
          url: "/events/" + (this.get("id")),
          client_silence_path: "silence/" + (this.get("client")),
          silence_path: "silence/" + (this.get("id"))
        });
        this.listenTo(SensuDashboard.Stashes, "reset", this.setSilencing);
        this.listenTo(SensuDashboard.Stashes, "add", this.setSilencing);
        this.listenTo(SensuDashboard.Stashes, "remove", this.setSilencing);
        return this.setSilencing();
      };

      Event.prototype.setSilencing = function() {
        var client_silenced, silenced;
        silenced = false;
        client_silenced = false;
        if (SensuDashboard.Stashes.get(this.get("silence_path"))) {
          silenced = true;
        }
        if (SensuDashboard.Stashes.get(this.get("client_silence_path"))) {
          client_silenced = true;
        }
        if (this.get("silenced") !== silenced || this.get("client_silenced") !== client_silenced) {
          return this.set({
            silenced: silenced,
            client_silenced: client_silenced
          });
        }
      };

      Event.prototype.setOutputIfEmpty = function(output) {
        if (output === "") {
          return this.set({
            output: "nil output"
          });
        }
      };

      Event.prototype.setStatusName = function(status) {
        switch (status) {
          case 1:
            return this.set({
              status_name: "warning"
            });
          case 2:
            return this.set({
              status_name: "critical"
            });
          default:
            return this.set({
              status_name: "unknown"
            });
        }
      };

      Event.prototype.resolve = function(options) {
        var _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        return this.destroy({
          success: function(model, response, opts) {
            if (_this.successCallback) {
              return _this.successCallback.apply(_this, [model, response, opts]);
            }
          },
          error: function(model, xhr, opts) {
            if (_this.errorCallback) {
              return _this.errorCallback.apply(_this, [model, xhr, opts]);
            }
          }
        });
      };

      Event.prototype.silence = function(options) {
        var stash,
          _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        return stash = SensuDashboard.Stashes.create({
          path: this.get("silence_path"),
          content: {
            timestamp: Math.round(new Date().getTime() / 1000)
          }
        }, {
          success: function(model, response, opts) {
            if (_this.successCallback) {
              return _this.successCallback.apply(_this, [_this, response]);
            }
          },
          error: function(model, xhr, opts) {
            if (_this.errorCallback) {
              return _this.errorCallback.apply(_this, [_this, xhr, opts]);
            }
          }
        });
      };

      Event.prototype.unsilence = function(options) {
        var stash,
          _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        stash = SensuDashboard.Stashes.get(this.get("silence_path"));
        if (stash) {
          return stash.destroy({
            success: function(model, response, opts) {
              if (_this.successCallback) {
                return _this.successCallback.apply(_this, [_this, response, opts]);
              }
            },
            error: function(model, xhr, opts) {
              if (_this.errorCallback) {
                return _this.errorCallback.apply(_this, [_this, xhr, opts]);
              }
            }
          });
        } else {
          if (this.errorCallback) {
            return this.errorCallback.apply(this, [this]);
          }
        }
      };

      return Event;

    })(Backbone.Model);
  });

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Models", function(exports) {
    var _ref;
    return exports.Info = (function(_super) {
      __extends(Info, _super);

      function Info() {
        this.onFetch = __bind(this.onFetch, this);
        this.executeLongPolling = __bind(this.executeLongPolling, this);
        this.stopLongPolling = __bind(this.stopLongPolling, this);
        this.startLongPolling = __bind(this.startLongPolling, this);
        _ref = Info.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Info.prototype.defaults = {
        sensu: {
          version: null
        },
        dashboard: {
          version: null
        },
        rabbitmq: {
          keepalives: {
            messages: 0,
            consumers: 0
          },
          results: {
            messages: 0,
            consumers: 0
          },
          connected: false
        },
        redis: {
          connected: false
        },
        sensu_dashboard: {
          version: null,
          poll_frequency: 10
        }
      };

      Info.prototype.url = "/info";

      Info.prototype.initialize = function() {
        this.setRMQStatus(this.get("rabbitmq").connected);
        return this.setRedisStatus(this.get("redis").connected);
      };

      Info.prototype.setRMQStatus = function(status) {
        return this.set({
          rmq_status: this._onlineStatus(status)
        });
      };

      Info.prototype.setRedisStatus = function(status) {
        return this.set({
          redis_status: this._onlineStatus(status)
        });
      };

      Info.prototype._onlineStatus = function(status) {
        if (status) {
          return "Online";
        } else {
          return "Offline";
        }
      };

      Info.prototype.longPolling = false;

      Info.prototype.intervalSeconds = 10;

      Info.prototype.startLongPolling = function(intervalSeconds) {
        this.longPolling = true;
        if (intervalSeconds) {
          this.intervalSeconds = intervalSeconds;
        }
        return this.executeLongPolling();
      };

      Info.prototype.stopLongPolling = function() {
        return this.longPolling = false;
      };

      Info.prototype.executeLongPolling = function() {
        var _this = this;
        return this.fetch({
          success: function() {
            return _this.onFetch();
          }
        });
      };

      Info.prototype.onFetch = function() {
        if (this.longPolling) {
          return setTimeout(this.executeLongPolling, 1000 * this.intervalSeconds);
        }
      };

      return Info;

    })(Backbone.Model);
  });

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Models", function(exports) {
    var _ref;
    return exports.Stash = (function(_super) {
      __extends(Stash, _super);

      function Stash() {
        this.remove = __bind(this.remove, this);
        this.sync = __bind(this.sync, this);
        this.create = __bind(this.create, this);
        this.isNew = __bind(this.isNew, this);
        _ref = Stash.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Stash.prototype.defaults = {
        path: "silence",
        content: {}
      };

      Stash.prototype.idAttribute = "path";

      Stash.prototype.isNew = function() {
        return !_.contains(SensuDashboard.Stashes.models, this);
      };

      Stash.prototype.create = function(attributes, options) {
        options || (options = {});
        options.wait = true;
        return Backbone.create(attributes, options);
      };

      Stash.prototype.sync = function(method, model, options) {
        options || (options = {});
        if (method === "delete") {
          options.url = "" + SensuDashboard.Stashes.url + "/" + (model.get("path"));
        }
        return Backbone.sync(method, model, options);
      };

      Stash.prototype.remove = function(options) {
        var _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        return this.destroy({
          wait: true,
          success: function(model, response, opts) {
            if (_this.successCallback) {
              return _this.successCallback.apply(_this, [model, response, opts]);
            }
          },
          error: function(model, xhr, opts) {
            if (_this.errorCallback) {
              return _this.errorCallback.apply(_this, [model, xhr, opts]);
            }
          }
        });
      };

      return Stash;

    })(Backbone.Model);
  });

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Collections", function(exports) {
    var _ref;
    return exports.Base = (function(_super) {
      __extends(Base, _super);

      function Base() {
        this.onFetch = __bind(this.onFetch, this);
        this.executeLongPolling = __bind(this.executeLongPolling, this);
        this.stopLongPolling = __bind(this.stopLongPolling, this);
        this.startLongPolling = __bind(this.startLongPolling, this);
        _ref = Base.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Base.prototype.longPolling = false;

      Base.prototype.intervalSeconds = 10;

      Base.prototype.startLongPolling = function(intervalSeconds) {
        this.longPolling = true;
        if (intervalSeconds) {
          this.intervalSeconds = intervalSeconds;
        }
        return this.executeLongPolling();
      };

      Base.prototype.stopLongPolling = function() {
        return this.longPolling = false;
      };

      Base.prototype.executeLongPolling = function() {
        var _this = this;
        return this.fetch({
          success: function() {
            return _this.onFetch();
          }
        });
      };

      Base.prototype.onFetch = function() {
        if (this.longPolling) {
          return setTimeout(this.executeLongPolling, 1000 * this.intervalSeconds);
        }
      };

      return Base;

    })(Backbone.Collection);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Collections", function(exports) {
    var _ref;
    return exports.Checks = (function(_super) {
      __extends(Checks, _super);

      function Checks() {
        _ref = Checks.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Checks.prototype.model = SensuDashboard.Models.Check;

      Checks.prototype.url = "/checks";

      Checks.prototype.comparator = function(event) {
        return event.get("name");
      };

      return Checks;

    })(SensuDashboard.Collections.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Collections", function(exports) {
    var _ref;
    return exports.Clients = (function(_super) {
      __extends(Clients, _super);

      function Clients() {
        _ref = Clients.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Clients.prototype.model = SensuDashboard.Models.Client;

      Clients.prototype.url = "/clients";

      Clients.prototype.comparator = function(event) {
        return event.get("name");
      };

      Clients.prototype.getSelected = function() {
        return this.where({
          selected: true
        });
      };

      Clients.prototype.toggleSelected = function() {
        var selected;
        selected = true;
        if (this.getSelected().length === this.length) {
          selected = false;
        }
        return this.each(function(client) {
          return client.set({
            selected: selected
          });
        });
      };

      Clients.prototype.getSilenced = function() {
        return this.where({
          silenced: true
        });
      };

      Clients.prototype.getUnsilenced = function() {
        return this.where({
          silenced: false
        });
      };

      Clients.prototype.getSelectedSilenced = function() {
        return this.where({
          silenced: true,
          selected: true
        });
      };

      Clients.prototype.getSelectedUnsilenced = function() {
        return this.where({
          silenced: false,
          selected: true
        });
      };

      Clients.prototype.selectAll = function() {
        return this.each(function(client) {
          return client.set({
            selected: true
          });
        });
      };

      Clients.prototype.selectNone = function() {
        return this.each(function(client) {
          return client.set({
            selected: false
          });
        });
      };

      Clients.prototype.selectSilenced = function() {
        var client, clients, clients_selected, selected, _i, _len, _results;
        clients = this.getSilenced();
        clients_selected = this.getSelectedSilenced();
        _results = [];
        for (_i = 0, _len = clients.length; _i < _len; _i++) {
          client = clients[_i];
          selected = true;
          if (clients_selected.length === clients.length) {
            selected = false;
          }
          _results.push(client.set({
            selected: selected
          }));
        }
        return _results;
      };

      Clients.prototype.selectUnsilenced = function() {
        var client, clients, clients_selected, selected, _i, _len, _results;
        clients = this.getUnsilenced();
        clients_selected = this.getSelectedUnsilenced();
        _results = [];
        for (_i = 0, _len = clients.length; _i < _len; _i++) {
          client = clients[_i];
          selected = true;
          if (clients_selected.length === clients.length) {
            selected = false;
          }
          _results.push(client.set({
            selected: selected
          }));
        }
        return _results;
      };

      Clients.prototype.silenceSelected = function(options) {
        var client, _i, _len, _ref1, _results,
          _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        _ref1 = this.getSelected();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          client = _ref1[_i];
          _results.push(client.silence({
            success: function(model, response, opts) {
              if (_this.successCallback) {
                return _this.successCallback.call(_this, model);
              }
            },
            error: function(model, xhr, opts) {
              if (_this.errorCallback) {
                return _this.errorCallback.call(_this, model);
              }
            }
          }));
        }
        return _results;
      };

      Clients.prototype.unsilenceSelected = function(options) {
        var client, _i, _len, _ref1, _results,
          _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        _ref1 = this.getSelected();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          client = _ref1[_i];
          _results.push(client.unsilence({
            success: function(model, xhr, opts) {
              if (_this.successCallback) {
                return _this.successCallback.call(_this, model);
              }
            },
            error: function(model, xhr, opts) {
              if (_this.errorCallback) {
                return _this.errorCallback.call(_this, model);
              }
            }
          }));
        }
        return _results;
      };

      Clients.prototype.removeSelected = function(options) {
        var client, _i, _len, _ref1, _results,
          _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        _ref1 = this.getSelected();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          client = _ref1[_i];
          _results.push(client.remove({
            success: function(model, response, opts) {
              if (_this.successCallback) {
                return _this.successCallback.call(_this, model);
              }
            },
            error: function(model, xhr, opts) {
              if (_this.errorCallback) {
                return _this.errorCallback.call(_this, model);
              }
            }
          }));
        }
        return _results;
      };

      return Clients;

    })(SensuDashboard.Collections.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Collections", function(exports) {
    var _ref;
    return exports.Events = (function(_super) {
      __extends(Events, _super);

      function Events() {
        _ref = Events.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Events.prototype.model = SensuDashboard.Models.Event;

      Events.prototype.url = "/events";

      Events.prototype.comparator = function(event) {
        return event.get("status_name");
      };

      Events.prototype.getSelected = function() {
        return this.where({
          selected: true
        });
      };

      Events.prototype.getSelectedClients = function() {
        return _.map(this.getSelected(), function(event) {
          return event.get("client");
        });
      };

      Events.prototype.getUniqueSelectedClients = function() {
        var clients;
        return clients = _.uniq(this.getSelectedClients());
      };

      Events.prototype.getCriticals = function() {
        return this.where({
          status: 2
        });
      };

      Events.prototype.getUnknowns = function() {
        return this.filter(function(event) {
          var status;
          status = event.get("status");
          return status !== 1 && status !== 2;
        });
      };

      Events.prototype.getWarnings = function() {
        return this.where({
          status: 1
        });
      };

      Events.prototype.getSilenced = function() {
        return this.where({
          silenced: true
        });
      };

      Events.prototype.getSilencedClients = function() {
        return this.where({
          client_silenced: true
        });
      };

      Events.prototype.getUnsilenced = function() {
        return this.where({
          silenced: false
        });
      };

      Events.prototype.getUnsilencedClients = function() {
        return this.where({
          client_silenced: false
        });
      };

      Events.prototype.getSelectedCriticals = function() {
        return this.where({
          status: 2,
          selected: true
        });
      };

      Events.prototype.getSelectedUnknowns = function() {
        return this.filter(function(event) {
          var selected, status;
          status = event.get("status");
          selected = event.get("selected");
          return status !== 1 && status !== 2 && selected === true;
        });
      };

      Events.prototype.getSelectedWarnings = function() {
        return this.where({
          status: 1,
          selected: true
        });
      };

      Events.prototype.getSelectedSilenced = function() {
        return this.where({
          silenced: true,
          selected: true
        });
      };

      Events.prototype.getSelectedSilencedClients = function() {
        return this.where({
          client_silenced: true,
          selected: true
        });
      };

      Events.prototype.getSelectedUnsilenced = function() {
        return this.where({
          silenced: false,
          selected: true
        });
      };

      Events.prototype.getSelectedUnsilencedClients = function() {
        return this.where({
          client_silenced: false,
          selected: true
        });
      };

      Events.prototype.toggleSelected = function() {
        var selected;
        selected = true;
        if (this.getSelected().length === this.length) {
          selected = false;
        }
        return this.each(function(event) {
          return event.set({
            selected: selected
          });
        });
      };

      Events.prototype.selectAll = function() {
        return this.each(function(event) {
          return event.set({
            selected: true
          });
        });
      };

      Events.prototype.selectNone = function() {
        return this.each(function(event) {
          return event.set({
            selected: false
          });
        });
      };

      Events.prototype.selectCritical = function() {
        var event, events, events_selected, selected, _i, _len, _results;
        events = this.getCriticals();
        events_selected = this.getSelectedCriticals();
        _results = [];
        for (_i = 0, _len = events.length; _i < _len; _i++) {
          event = events[_i];
          selected = true;
          if (events_selected.length === events.length) {
            selected = false;
          }
          _results.push(event.set({
            selected: selected
          }));
        }
        return _results;
      };

      Events.prototype.selectUnknown = function() {
        var event, events, events_selected, selected, _i, _len, _results;
        events = this.getUnknowns();
        events_selected = this.getSelectedUnknowns();
        _results = [];
        for (_i = 0, _len = events.length; _i < _len; _i++) {
          event = events[_i];
          selected = true;
          if (events_selected.length === events.length) {
            selected = false;
          }
          _results.push(event.set({
            selected: selected
          }));
        }
        return _results;
      };

      Events.prototype.selectWarning = function() {
        var event, events, events_selected, selected, _i, _len, _results;
        events = this.getWarnings();
        events_selected = this.getSelectedWarnings();
        _results = [];
        for (_i = 0, _len = events.length; _i < _len; _i++) {
          event = events[_i];
          selected = true;
          if (events_selected.length === events.length) {
            selected = false;
          }
          _results.push(event.set({
            selected: selected
          }));
        }
        return _results;
      };

      Events.prototype.selectSilenced = function() {
        var event, events, events_selected, selected, _i, _len, _results;
        events = this.getSilenced();
        events_selected = this.getSelectedSilenced();
        _results = [];
        for (_i = 0, _len = events.length; _i < _len; _i++) {
          event = events[_i];
          selected = true;
          if (events_selected.length === events.length) {
            selected = false;
          }
          _results.push(event.set({
            selected: selected
          }));
        }
        return _results;
      };

      Events.prototype.selectSilencedClients = function() {
        var event, events, events_selected, selected, _i, _len, _results;
        events = this.getSilencedClients();
        events_selected = this.getSelectedSilencedClients();
        _results = [];
        for (_i = 0, _len = events.length; _i < _len; _i++) {
          event = events[_i];
          selected = true;
          if (events_selected.length === events.length) {
            selected = false;
          }
          _results.push(event.set({
            selected: selected
          }));
        }
        return _results;
      };

      Events.prototype.selectUnsilenced = function() {
        var event, events, events_selected, selected, _i, _len, _results;
        events = this.getUnsilenced();
        events_selected = this.getSelectedUnsilenced();
        _results = [];
        for (_i = 0, _len = events.length; _i < _len; _i++) {
          event = events[_i];
          selected = true;
          if (events_selected.length === events.length) {
            selected = false;
          }
          _results.push(event.set({
            selected: selected
          }));
        }
        return _results;
      };

      Events.prototype.selectUnsilencedClients = function() {
        var event, events, events_selected, selected, _i, _len, _results;
        events = this.getUnsilencedClients();
        events_selected = this.getSelectedUnsilencedClients();
        _results = [];
        for (_i = 0, _len = events.length; _i < _len; _i++) {
          event = events[_i];
          selected = true;
          if (events_selected.length === events.length) {
            selected = false;
          }
          _results.push(event.set({
            selected: selected
          }));
        }
        return _results;
      };

      Events.prototype.resolveSelected = function(options) {
        var event, _i, _len, _ref1, _results,
          _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        _ref1 = this.getSelected();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          event = _ref1[_i];
          _results.push(event.resolve({
            success: function(model, response, opts) {
              if (_this.successCallback) {
                return _this.successCallback.call(_this, model);
              }
            },
            error: function(model, xhr, opts) {
              if (_this.errorCallback) {
                return _this.errorCallback.call(_this, model);
              }
            }
          }));
        }
        return _results;
      };

      Events.prototype.silenceSelectedChecks = function(options) {
        var event, _i, _len, _ref1, _results,
          _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        _ref1 = this.getSelected();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          event = _ref1[_i];
          _results.push(event.silence({
            success: function(model, response, opts) {
              if (_this.successCallback) {
                return _this.successCallback.call(_this, model);
              }
            },
            error: function(model, xhr, opts) {
              if (_this.errorCallback) {
                return _this.errorCallback.call(_this, model);
              }
            }
          }));
        }
        return _results;
      };

      Events.prototype.unsilenceSelectedChecks = function(options) {
        var event, _i, _len, _ref1, _results,
          _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        _ref1 = this.getSelected();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          event = _ref1[_i];
          _results.push(event.unsilence({
            success: function(model, response, opts) {
              if (_this.successCallback) {
                return _this.successCallback.call(_this, model);
              }
            },
            error: function(model, xhr, opts) {
              if (_this.errorCallback) {
                return _this.errorCallback.call(_this, model);
              }
            }
          }));
        }
        return _results;
      };

      Events.prototype.silenceSelectedClients = function(options) {
        var client, _i, _len, _ref1, _results,
          _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        _ref1 = this.getUniqueSelectedClients();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          client = _ref1[_i];
          _results.push(SensuDashboard.Clients.get(client).silence({
            success: function(model, response, opts) {
              if (_this.successCallback) {
                return _this.successCallback.call(_this, model);
              }
            },
            error: function(model, xhr, opts) {
              if (_this.errorCallback) {
                return _this.errorCallback.call(_this, model);
              }
            }
          }));
        }
        return _results;
      };

      Events.prototype.unsilenceSelectedClients = function(options) {
        var client, _i, _len, _ref1, _results,
          _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        _ref1 = this.getUniqueSelectedClients();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          client = _ref1[_i];
          _results.push(SensuDashboard.Clients.get(client).unsilence({
            success: function(model, response, opts) {
              if (_this.successCallback) {
                return _this.successCallback.call(_this, model);
              }
            },
            error: function(model, xhr, opts) {
              if (_this.errorCallback) {
                return _this.errorCallback.call(_this, model);
              }
            }
          }));
        }
        return _results;
      };

      return Events;

    })(SensuDashboard.Collections.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Collections", function(exports) {
    var _ref;
    return exports.Stashes = (function(_super) {
      __extends(Stashes, _super);

      function Stashes() {
        _ref = Stashes.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Stashes.prototype.model = SensuDashboard.Models.Stash;

      Stashes.prototype.url = "/stashes";

      Stashes.prototype.getSelected = function() {
        return this.where({
          selected: true
        });
      };

      Stashes.prototype.toggleSelected = function() {
        var selected;
        selected = true;
        if (this.getSelected().length === this.length) {
          selected = false;
        }
        return this.each(function(stash) {
          return stash.set({
            selected: selected
          });
        });
      };

      Stashes.prototype.selectAll = function() {
        return this.each(function(stash) {
          return stash.set({
            selected: true
          });
        });
      };

      Stashes.prototype.selectNone = function() {
        return this.each(function(stash) {
          return stash.set({
            selected: false
          });
        });
      };

      Stashes.prototype.removeSelected = function(options) {
        var stash, _i, _len, _ref1, _results,
          _this = this;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        _ref1 = this.getSelected();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          stash = _ref1[_i];
          _results.push(stash.remove({
            success: function(model, xhr, opts) {
              if (_this.successCallback) {
                return _this.successCallback.call(_this, model);
              }
            },
            error: function(model, xhr, opts) {
              if (_this.errorCallback) {
                return _this.errorCallback.call(_this, model);
              }
            }
          }));
        }
        return _results;
      };

      Stashes.prototype.create = function(attributes, options) {
        options || (options = {});
        options.wait = true;
        return Backbone.Collection.prototype.create.call(this, attributes, options);
      };

      return Stashes;

    })(SensuDashboard.Collections.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Models.Metadata", function(exports) {
    var _ref;
    return exports.Events = (function(_super) {
      __extends(Events, _super);

      function Events() {
        _ref = Events.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Events.prototype.defaults = {
        total: 0,
        warning: 0,
        critical: 0,
        unknown: 0
      };

      Events.prototype.initialize = function() {
        SensuDashboard.Events.on("all", this.updateCounts, this);
        return this.updateCounts();
      };

      Events.prototype.updateCounts = function() {
        return this.set({
          events: SensuDashboard.Events,
          total: SensuDashboard.Events.length,
          warning: SensuDashboard.Events.getWarnings().length,
          critical: SensuDashboard.Events.getCriticals().length,
          unknown: SensuDashboard.Events.getUnknowns().length
        });
      };

      return Events;

    })(Backbone.Model);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views", function(exports) {
    var _ref;
    return exports.Base = (function(_super) {
      __extends(Base, _super);

      function Base() {
        _ref = Base.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Base.prototype.template = function(args) {
        var tmpl;
        tmpl = HandlebarsTemplates[this.name];
        if (tmpl) {
          return tmpl(args);
        }
      };

      Base.prototype.assign = function(view, selector) {
        return view.setElement(this.$(selector)).render();
      };

      Base.prototype.dispose = function() {
        this.remove();
        this.off();
        if (this.model) {
          this.model.off(null, null, this);
        }
        if (this.collection) {
          return this.collection.off(null, null, this);
        }
      };

      return Base;

    })(Backbone.View);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views", function(exports) {
    var _ref;
    return exports.Error = (function(_super) {
      __extends(Error, _super);

      function Error() {
        _ref = Error.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Error.prototype.el = $("#main");

      Error.prototype.name = "error";

      Error.prototype.initialize = function() {
        this.template_data = {
          title: "Oh no!" != null ? "Oh no!" : this.options.title,
          message: "Something isn't right. Try refreshing." != null ? "Something isn't right. Try refreshing." : this.options.message
        };
        return this.render();
      };

      Error.prototype.render = function() {
        this.$el.html(this.template(this.template_data));
        return this;
      };

      return Error;

    })(SensuDashboard.Views.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views", function(exports) {
    var _ref;
    return exports.List = (function(_super) {
      __extends(List, _super);

      function List() {
        _ref = List.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      List.prototype.collectionEl = "tbody";

      List.prototype.itemName = "list_item";

      List.prototype.itemClass = function() {
        return exports.ListItem;
      };

      List.prototype.itemView = function(model) {
        var kls, view;
        kls = this.itemClass();
        return view = new kls({
          model: model,
          name: this.itemName
        });
      };

      List.prototype.initialize = function() {
        this.listenTo(this.collection, "remove", this.removeItem);
        this.listenTo(this.collection, "reset", this.render);
        return this.listenTo(this.collection, "add", this.render);
      };

      List.prototype.addItem = function(item) {
        this.renderItem(item);
        return this.collection.sort();
      };

      List.prototype.removeItem = function(item, collection) {
        if (collection == null) {
          collection = this.collection;
        }
        return this.renderEmpty(collection);
      };

      List.prototype.renderItem = function(item) {
        var item_view;
        item_view = this.itemView(item);
        return this.$el.find(this.collectionEl).append(item_view.render().el);
      };

      List.prototype.renderCollection = function(collection) {
        var _this = this;
        if (collection == null) {
          collection = this.collection;
        }
        if (!this.renderEmpty(collection)) {
          return collection.each(function(item) {
            return _this.renderItem(item);
          });
        }
      };

      List.prototype.renderEmpty = function(collection) {
        var tmpl;
        if (collection == null) {
          collection = this.collection;
        }
        if (collection.isEmpty()) {
          tmpl = HandlebarsTemplates["empty_list"];
          this.$el.html(tmpl());
          return true;
        } else {
          return false;
        }
      };

      List.prototype.render = function() {
        this.$el.html(this.template());
        return this.renderCollection();
      };

      return List;

    })(SensuDashboard.Views.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views", function(exports) {
    var _ref;
    return exports.ListItem = (function(_super) {
      __extends(ListItem, _super);

      function ListItem() {
        _ref = ListItem.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ListItem.prototype.tagName = "tr";

      ListItem.prototype.initialize = function() {
        if (!this.name) {
          this.name = this.options.name;
        }
        this.listenTo(this.model, "change", this.render);
        return this.listenTo(this.model, "destroy", this.remove);
      };

      ListItem.prototype.render = function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      };

      return ListItem;

    })(SensuDashboard.Views.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views", function(exports) {
    var _ref;
    return exports.Modal = (function(_super) {
      __extends(Modal, _super);

      function Modal() {
        _ref = Modal.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Modal.prototype.tagName = "div";

      Modal.prototype.className = "modal hide fade";

      Modal.prototype.attributes = {
        tabindex: "-1",
        role: "dialog"
      };

      Modal.prototype.initialize = function() {
        var _this = this;
        this.template = HandlebarsTemplates[this.options.name || "modal"];
        this.$el.on("hidden", function() {
          return _this.remove();
        });
        return this.render();
      };

      Modal.prototype.render = function() {
        this.$el.html(this.template(this.model || {}));
        this.$el.appendTo("body");
        return this.$el.modal("show");
      };

      Modal.prototype.remove = function() {
        this.$el.modal("hide");
        return Modal.__super__.remove.apply(this, arguments);
      };

      return Modal;

    })(SensuDashboard.Views.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views", function(exports) {
    var _ref;
    return exports.AutoCompleteField = (function(_super) {
      __extends(AutoCompleteField, _super);

      function AutoCompleteField() {
        _ref = AutoCompleteField.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AutoCompleteField.prototype.name = "auto_complete_field";

      AutoCompleteField.prototype.className = "token-field";

      AutoCompleteField.prototype.placeholder = "";

      AutoCompleteField.prototype.minInputValue = 2;

      AutoCompleteField.prototype.maxResults = 9;

      AutoCompleteField.prototype.localEvents = {
        "blur input": "_blur",
        "focus input": "_focus",
        "focusin input": "focusIn",
        "focusout input": "focusOut"
      };

      AutoCompleteField.prototype.focusIn = function() {
        return $("#filter").addClass("focus");
      };

      AutoCompleteField.prototype.focusOut = function() {
        return $("#filter").removeClass("focus");
      };

      AutoCompleteField.prototype.initialize = function() {
        AutoCompleteField.__super__.initialize.apply(this, arguments);
        this.events = _.extend({}, this.events, this.localEvents);
        this.matcher = new SensuDashboard.Matcher({
          sources: this.options.sources
        });
        this.resultsView = this.options.resultsView || new SensuDashboard.Views.AutoCompleteResults(this.options.resultsViewOptions);
        this.resultsView.setDelegate(this);
        this.resultsView.on("item:selected", this.tokenize, this);
        return this;
      };

      AutoCompleteField.prototype.render = function() {
        var _base;
        AutoCompleteField.__super__.render.apply(this, arguments);
        this.inputTester.setAttribute("placeholder", "");
        this.placeholderContent = document.createElement("span");
        this.placeholderContent.innerHTML = "Filter...";
        this.container.appendChild(this.placeholderContent);
        this.textContent.className = "copy";
        if (typeof (_base = this.resultsView).setTarget === "function") {
          _base.setTarget(this.inputTester);
        }
        return this;
      };

      AutoCompleteField.prototype.addCollection = function(collection) {
        return this.matcher.addSource(collection);
      };

      AutoCompleteField.prototype.insertToken = function(object) {
        var node, token;
        node = new exports.AutoCompleteToken({
          item: object
        }).render();
        token = {
          object: object,
          node: node.el
        };
        this.el.insertBefore(token.node, this.container);
        this.tokens.push(token);
        this.delegate.filtersUpdated();
        return $(this.placeholderContent).show();
      };

      AutoCompleteField.prototype.tokenize = function() {
        var object;
        object = this.resultsView.autoCompleteTokenFieldItemSelected();
        this.inputTester.focus();
        this.insertToken(object);
        return this.textContent.innerHTML = this.inputTester.value = "";
      };

      AutoCompleteField.prototype.deleteTokenAtIndex = function(index, deselect) {
        AutoCompleteField.__super__.deleteTokenAtIndex.call(this, index, deselect);
        return this.delegate.filtersUpdated();
      };

      AutoCompleteField.prototype._filterCollection = function(query) {
        var results;
        results = this.matcher.query(query);
        results = _.first(results, this.maxResults);
        results.push(query);
        return results;
      };

      AutoCompleteField.prototype.queryMeetsMinLength = function(query) {
        if (query == null) {
          query = this.inputTester.value;
        }
        return query.trim().length >= this.minInputValue;
      };

      AutoCompleteField.prototype.keydown = function(e) {
        this.resultsView.keyDown(e);
        return AutoCompleteField.__super__.keydown.apply(this, arguments);
      };

      AutoCompleteField.prototype.keyup = function(e) {
        switch (e.keyCode) {
          case 38:
          case 40:
            return false;
        }
        this.textContent.innerHTML = this.inputTester.value;
        switch (e.keyCode) {
          case 13:
            return this.tokenize();
          default:
            return this._queryEntered(this.inputTester.value);
        }
      };

      AutoCompleteField.prototype.keypress = function(e) {
        if (e.keyCode === 13 && this.inputTester.value === "") {
          this._submit();
          e.preventDefault();
        }
      };

      AutoCompleteField.prototype._submit = function() {
        return this.trigger("submit");
      };

      AutoCompleteField.prototype._blur = function(e) {
        this.$el.removeClass("focus");
        this.selectTokenAtIndex(Infinity);
        return this.resultsView.autoCompleteTokenFieldBlur();
      };

      AutoCompleteField.prototype._focus = function(e) {
        this.$el.addClass("focus");
        return this._queryEntered(this.inputTester.value);
      };

      AutoCompleteField.prototype._queryEntered = function(query) {
        if (query.length > 0) {
          if (this.selectedIndex !== Infinity) {
            this.selectTokenAtIndex(Infinity);
          }
          $(this.placeholderContent).hide();
        }
        if (this.queryMeetsMinLength(query)) {
          return this._showPopover(this._filterCollection(query));
        } else {
          return this.resultsView.autoCompleteTokenFieldEmpty(false);
        }
      };

      AutoCompleteField.prototype._showPopover = _.debounce(function(collection) {
        this.resultsView.setCollection(collection);
        return this.resultsView.autoCompleteTokenFieldResults();
      }, 75);

      AutoCompleteField.prototype.destroy = function() {
        this.resultsView.off(null, null, this);
        return AutoCompleteField.__super__.destroy.apply(this, arguments);
      };

      return AutoCompleteField;

    })(TokenField);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views", function(exports) {
    var _ref;
    return exports.AutoCompleteResults = (function(_super) {
      __extends(AutoCompleteResults, _super);

      function AutoCompleteResults() {
        _ref = AutoCompleteResults.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AutoCompleteResults.prototype.tagName = "ul";

      AutoCompleteResults.prototype.name = "autocomplete/results";

      AutoCompleteResults.prototype.className = "auto-complete-results";

      AutoCompleteResults.prototype.events = {
        "mousedown li": function(e) {
          e.preventDefault();
          return e.stopPropagation();
        },
        "mouseup li": "selectItem",
        "mouseover li": "_mouseoverItem"
      };

      AutoCompleteResults.prototype.visible = false;

      AutoCompleteResults.prototype.initialize = function(options) {
        AutoCompleteResults.__super__.initialize.apply(this, arguments);
        this.selectedIndex = -1;
        return this.items = [];
      };

      AutoCompleteResults.prototype.setDelegate = function(delegate) {
        return this.delegate = delegate;
      };

      AutoCompleteResults.prototype.renderItem = function(item, index) {
        var context, type;
        type = item instanceof SensuDashboard.Models.Check ? "check" : item instanceof SensuDashboard.Models.Client ? "client" : "query";
        context = item.toJSON ? item.toJSON() : {
          query: item
        };
        return HandlebarsTemplates["" + this.name + "_" + type + "_item"](context);
      };

      AutoCompleteResults.prototype.renderCollection = function() {
        var model, _i, _len, _ref1;
        this.render();
        this.$el.empty();
        _ref1 = this.collection;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          model = _ref1[_i];
          this.$el.append($(this.renderItem(model)));
        }
        this.items = this.$el.find("> li").toArray();
        this.selectedIndex = -1;
        this.selectAtIndex(0);
        return this;
      };

      AutoCompleteResults.prototype.setCollection = function(collection) {
        return this.collection = collection;
      };

      AutoCompleteResults.prototype.selectNext = function() {
        var item;
        item = this.selectAtIndex(this.selectedIndex + 1);
        if (item) {
          return item.scrollIntoViewIfNeeded(false);
        }
      };

      AutoCompleteResults.prototype.selectPrevious = function() {
        var item;
        item = this.selectAtIndex(this.selectedIndex - 1);
        if (item) {
          return item.scrollIntoViewIfNeeded(true);
        }
      };

      AutoCompleteResults.prototype.selectedObject = function() {
        return this.collection[this.selectedIndex];
      };

      AutoCompleteResults.prototype.selectAtIndex = function(index) {
        var item;
        if ((0 <= index && index < this.items.length)) {
          this.$el.find(".selected").removeClass("selected");
          item = this.items[index];
          $(item).addClass("selected");
          this.selectedIndex = index;
          return item;
        }
      };

      AutoCompleteResults.prototype.selectItem = function() {
        var item;
        if (!(item = this.selectedObject())) {
          return;
        }
        return this.trigger("item:selected", item);
      };

      AutoCompleteResults.prototype.deselectAll = function() {
        return this.$el.find(".selected").removeClass("selected");
      };

      AutoCompleteResults.prototype._mouseoverItem = function(e) {
        var index;
        index = _.indexOf(this.items, e.currentTarget);
        if (this.selectedIndex === index) {
          return;
        }
        return this.selectAtIndex(index);
      };

      AutoCompleteResults.prototype.keyDown = function(e) {
        switch (e.keyCode) {
          case 40:
            e.preventDefault();
            this.selectNext();
            return false;
          case 38:
            e.preventDefault();
            this.selectPrevious();
            return false;
        }
        return true;
      };

      AutoCompleteResults.prototype._hide = function() {
        if (this.visible) {
          this.setElement($("<ul/>"));
          $(this.delegate.inputTester).popover("hide");
          return this.visible = false;
        }
      };

      AutoCompleteResults.prototype._show = function() {
        if (!this.visible) {
          $(this.delegate.inputTester).popover({
            html: true,
            content: this.$el,
            placement: "bottom",
            trigger: "manual"
          }).popover("show");
          this.setElement(this.delegate.$el.find("div.popover-content ul.auto-complete-results")[0]);
          this.visible = true;
        }
        return this.renderCollection();
      };

      AutoCompleteResults.prototype.autoCompleteTokenFieldEmpty = function() {
        return this._hide();
      };

      AutoCompleteResults.prototype.autoCompleteTokenFieldBlur = function() {
        return this._hide();
      };

      AutoCompleteResults.prototype.autoCompleteTokenFieldResults = function() {
        return this._show();
      };

      AutoCompleteResults.prototype.autoCompleteTokenFieldItemSelected = function() {
        this._hide();
        return this.selectedObject();
      };

      return AutoCompleteResults;

    })(exports.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views", function(exports) {
    var _ref;
    return exports.AutoCompleteToken = (function(_super) {
      __extends(AutoCompleteToken, _super);

      function AutoCompleteToken() {
        _ref = AutoCompleteToken.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AutoCompleteToken.prototype.tagName = "li";

      AutoCompleteToken.prototype.className = "token";

      AutoCompleteToken.prototype.initialize = function() {
        this.delegate = this.options.delegate;
        return this.setItem(this.options.item);
      };

      AutoCompleteToken.prototype.setItem = function(item) {
        this.item = item;
        return this.type = item instanceof SensuDashboard.Models.Check ? "check" : item instanceof SensuDashboard.Models.Client ? "client" : "query";
      };

      AutoCompleteToken.prototype.context = function() {
        if (_.isString(this.item)) {
          return {
            query: this.item
          };
        } else {
          return this.item.toJSON();
        }
      };

      AutoCompleteToken.prototype.render = function() {
        var tmpl;
        tmpl = HandlebarsTemplates["autocomplete/results_" + this.type + "_token"];
        this.$el.html(tmpl(this.context()));
        return this;
      };

      return AutoCompleteToken;

    })(exports.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Clients", function(exports) {
    var _ref;
    return exports.Counts = (function(_super) {
      __extends(Counts, _super);

      function Counts() {
        _ref = Counts.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Counts.prototype.name = "clients/counts";

      Counts.prototype.initialize = function(collection) {
        return this.listenTo(this.collection, "all", this.render);
      };

      Counts.prototype.render = function() {
        var template_data;
        template_data = {
          count: this.collection.models.length
        };
        this.$el.html(this.template(template_data));
        return this;
      };

      return Counts;

    })(SensuDashboard.Views.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Clients", function(exports) {
    var _ref;
    return exports.Index = (function(_super) {
      __extends(Index, _super);

      function Index() {
        _ref = Index.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Index.prototype.name = "clients/index";

      Index.prototype.events = {
        "click #toggle-checkboxes": "toggleSelected",
        "click #select-all": "selectAll",
        "click #select-none": "selectNone",
        "click #select-silenced": "selectSilenced",
        "click #select-unsilenced": "selectUnsilenced",
        "click #silence-selected-clients": "silenceSelected",
        "click #unsilence-selected-clients": "unsilenceSelected"
      };

      Index.prototype.initialize = function() {
        this.counts_subview = new SensuDashboard.Views.Clients.Counts({
          collection: this.collection
        });
        this.autocomplete_view = new SensuDashboard.Views.AutoCompleteField();
        return this.subview = new exports.List({
          collection: this.collection,
          autocomplete_view: this.autocomplete_view
        });
      };

      Index.prototype.render = function() {
        this.$el.html(this.template({
          clients: this.collection
        }));
        this.assign(this.counts_subview, "#counts");
        this.assign(this.subview, "#clients_container");
        this.$el.find("#filter").html(this.autocomplete_view.render().el);
        return this;
      };

      Index.prototype.toggleSelected = function() {
        return this.collection.toggleSelected();
      };

      Index.prototype.selectAll = function() {
        return this.collection.selectAll();
      };

      Index.prototype.selectNone = function() {
        return this.collection.selectNone();
      };

      Index.prototype.selectSilenced = function() {
        return this.collection.selectSilenced();
      };

      Index.prototype.selectUnsilenced = function() {
        return this.collection.selectUnsilenced();
      };

      Index.prototype.silenceSelected = function() {
        return this.collection.silenceSelected({
          success: function(model) {
            var client_name;
            client_name = model.get("name");
            return toastr.success("Silenced client " + client_name + ".", "Success!", {
              positionClass: "toast-bottom-right"
            });
          },
          error: function(model, xhr, opts) {
            var client_name;
            client_name = model.get("name");
            return toastr.error("Error silencing client " + client_name + ".", "Silencing Error!", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      };

      Index.prototype.unsilenceSelected = function() {
        return this.collection.unsilenceSelected({
          success: function(model) {
            var client_name;
            client_name = model.get("name");
            return toastr.success("Un-silenced client " + client_name + ".", "Success!", {
              positionClass: "toast-bottom-right"
            });
          },
          error: function(model) {
            var client_name;
            client_name = model.get("name");
            return toastr.error("Error un-silencing client " + client_name + ".            The client may already be un-sileneced or Sensu API is down.", "Un-silencing Error!", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      };

      Index.prototype.removeSelected = function() {
        return this.collection.removeSelected({
          success: function(model) {
            return toastr.success("Removed client " + (model.get("name")) + ".", "Success!", {
              positionClass: "toast-bottom-right"
            });
          },
          error: function(model) {
            return toastr.error("Error removing client " + (model.get("name")) + ".            The client may have already been removed or Sensu API is down.", "Removal Error!", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      };

      return Index;

    })(SensuDashboard.Views.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  namespace("SensuDashboard.Views.Clients", function(exports) {
    var _ref;
    return exports.List = (function(_super) {
      __extends(List, _super);

      function List() {
        _ref = List.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      List.prototype.name = "clients/list";

      List.prototype.initialize = function() {
        this.autocomplete_view = this.options.autocomplete_view;
        this.autocomplete_view.delegate = this;
        return List.__super__.initialize.apply(this, arguments);
      };

      List.prototype.itemClass = function() {
        return exports.ListItem;
      };

      List.prototype.resolvedCollection = function() {
        var resolved, token, _i, _len, _ref1,
          _this = this;
        resolved = this.collection.chain();
        _ref1 = this.autocomplete_view.tokens;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          token = _ref1[_i];
          resolved = _.isString(token.object) ? resolved.filter(function(record) {
            var result;
            result = _this.matchForKeys(token.object, record, {
              key: "address",
              threshold: 0.85
            }, {
              key: "name",
              threshold: 0.9
            });
            return result || _.detect(record.get("subscriptions"), function(sub) {
              return liquidMetal.score(sub, token.object) > 0.96;
            }) !== void 0;
          }) : void 0;
        }
        return resolved;
      };

      List.prototype.matchForKeys = function() {
        var args, q, record, result,
          _this = this;
        q = arguments[0], record = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
        result = _.detect(args, function(options) {
          var score, value;
          value = record.get(options.key);
          score = liquidMetal.score(value, q);
          return score >= (options.threshold || 0.7);
        });
        return !(result === void 0);
      };

      List.prototype.resolved = function() {
        return _(this.resolvedCollection().map().value());
      };

      List.prototype.renderCollection = function(collection) {
        return List.__super__.renderCollection.call(this, collection || this.resolved());
      };

      List.prototype.renderEmpty = function(collection) {
        return List.__super__.renderEmpty.call(this, collection || this.resolved());
      };

      List.prototype.filtersUpdated = function() {
        var filtered;
        filtered = this.resolved();
        this.collection.each(function(model) {
          if (!filtered.contains(model)) {
            return model.set({
              selected: false
            });
          }
        });
        this.$el.html(this.template());
        return this.renderCollection(filtered);
      };

      return List;

    })(SensuDashboard.Views.List);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Clients", function(exports) {
    var _ref;
    return exports.ListItem = (function(_super) {
      __extends(ListItem, _super);

      function ListItem() {
        _ref = ListItem.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ListItem.prototype.name = "clients/list_item";

      ListItem.prototype.className = function() {
        return this.model.get("name");
      };

      ListItem.prototype.events = {
        "click td:not(.select)": "showDetails",
        "click input[type=checkbox]": "toggleSelect"
      };

      ListItem.prototype.toggleSelect = function() {
        return this.model.set({
          selected: !this.model.get("selected")
        });
      };

      ListItem.prototype.showDetails = function() {
        return new SensuDashboard.Views.Clients.Modal({
          name: "clients/modal",
          model: this.model
        });
      };

      return ListItem;

    })(SensuDashboard.Views.ListItem);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Clients", function(exports) {
    var _ref;
    return exports.Modal = (function(_super) {
      __extends(Modal, _super);

      function Modal() {
        _ref = Modal.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Modal.prototype.name = "clients/modal";

      Modal.prototype.events = {
        "click #silence_client": "silenceClient",
        "click #remove_client": "removeClient"
      };

      Modal.prototype.initialize = function() {
        var _this = this;
        this.$el.on("hidden", function() {
          return _this.remove();
        });
        this.listenTo(this.model, "change", this.render);
        this.listenTo(this.model, "destroy", this.remove);
        return this.render();
      };

      Modal.prototype.render = function() {
        var template_data;
        template_data = this.model.toJSON();
        if (this.$el.html() === "") {
          this.$el.html(this.template(template_data));
          this.$el.appendTo("body");
          return this.$el.modal("show");
        } else {
          return this.$el.html(this.template(template_data));
        }
      };

      Modal.prototype.silenceClient = function(ev) {
        var icon, parent, tag_name, text;
        tag_name = $(ev.target).prop("tagName");
        if (tag_name === "SPAN" || tag_name === "I") {
          parent = $(ev.target).parent();
        } else {
          parent = $(ev.target);
        }
        icon = parent.find("i").first();
        text = parent.find("span").first();
        if (this.model.get("silenced")) {
          icon.removeClass("icon-volume-off").addClass("icon-spinner icon-spin");
          text.html("Un-silencing...");
          return this.model.unsilence({
            success: function(model) {
              var client_name;
              client_name = model.get("name");
              return toastr.success("Un-silenced client " + client_name + ".", "Success!", {
                positionClass: "toast-bottom-right"
              });
            },
            error: function(model) {
              var client_name;
              client_name = model.get("name");
              return toastr.error("Error un-silencing client " + client_name + ".              The client may already be un-sileneced or Sensu API is down.", "Un-silencing Error!", {
                positionClass: "toast-bottom-right"
              });
            }
          });
        } else {
          icon.removeClass("icon-volume-up").addClass("icon-spinner icon-spin");
          text.html("Silencing...");
          return this.model.silence({
            success: function(model) {
              var client_name;
              client_name = model.get("name");
              return toastr.success("Silenced client " + client_name + ".", "Success!", {
                positionClass: "toast-bottom-right"
              });
            },
            error: function(model, xhr, opts) {
              var client_name;
              client_name = model.get("name");
              return toastr.error("Error silencing client " + client_name + ".", "Silencing Error!", {
                positionClass: "toast-bottom-right"
              });
            }
          });
        }
      };

      Modal.prototype.removeClient = function(ev) {
        var icon, parent, tag_name, text;
        tag_name = $(ev.target).prop("tagName");
        if (tag_name === "SPAN" || tag_name === "I") {
          parent = $(ev.target).parent();
        } else {
          parent = $(ev.target);
        }
        icon = parent.find("i").first();
        text = parent.find("span").first();
        icon.removeClass("icon-remove").addClass("icon-spinner icon-spin");
        text.html("Removing...");
        return this.model.remove({
          success: function(model) {
            return toastr.success("Removed client " + (model.get("name")) + ".", "Success!", {
              positionClass: "toast-bottom-right"
            });
          },
          error: function(model) {
            return toastr.error("Error removing client " + (model.get("name")) + ".            The client may have already been removed or Sensu API is down.", "Removal Error!", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      };

      return Modal;

    })(SensuDashboard.Views.Modal);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Events", function(exports) {
    var _ref;
    return exports.Counts = (function(_super) {
      __extends(Counts, _super);

      function Counts() {
        _ref = Counts.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Counts.prototype.name = "events/counts";

      Counts.prototype.initialize = function(model) {
        return this.listenTo(this.model, "all", this.render);
      };

      Counts.prototype.render = function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      };

      return Counts;

    })(SensuDashboard.Views.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Events", function(exports) {
    var _ref;
    return exports.Index = (function(_super) {
      __extends(Index, _super);

      function Index() {
        _ref = Index.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Index.prototype.name = "events/index";

      Index.prototype.events = {
        "click #toggle-checkboxes": "toggleSelected",
        "click #select-all": "selectAll",
        "click #select-none": "selectNone",
        "click #select-critical": "selectCritical",
        "click #select-unknown": "selectUnknown",
        "click #select-warning": "selectWarning",
        "click #select-silenced-clients": "selectSilencedClients",
        "click #select-unsilenced-clients": "selectUnsilencedClients",
        "click #select-silenced-checks": "selectSilencedChecks",
        "click #select-unsilenced-checks": "selectUnsilencedChecks",
        "click #resolve-selected": "resolveSelected",
        "click #silence-selected-clients": "silenceSelectedClients",
        "click #silence-selected-checks": "silenceSelectedChecks",
        "click #unsilence-selected-clients": "unsilenceSelectedClients",
        "click #unsilence-selected-checks": "unsilenceSelectedChecks"
      };

      Index.prototype.initialize = function() {
        this.events_collection = this.model.get("events");
        this.counts_subview = new SensuDashboard.Views.Events.Counts({
          model: this.model
        });
        this.autocomplete_view = new SensuDashboard.Views.AutoCompleteField({
          sources: [SensuDashboard.Clients, SensuDashboard.Checks]
        });
        return this.list_subview = new SensuDashboard.Views.Events.List({
          collection: this.events_collection,
          autocomplete_view: this.autocomplete_view
        });
      };

      Index.prototype.render = function() {
        this.$el.html(this.template());
        this.assign(this.counts_subview, "#counts");
        this.assign(this.list_subview, "#list");
        this.$el.find("#filter").html(this.autocomplete_view.render().el);
        return this;
      };

      Index.prototype.toggleSelected = function() {
        return this.events_collection.toggleSelected();
      };

      Index.prototype.selectAll = function() {
        return this.events_collection.selectAll();
      };

      Index.prototype.selectNone = function() {
        return this.events_collection.selectNone();
      };

      Index.prototype.selectCritical = function() {
        return this.events_collection.selectCritical();
      };

      Index.prototype.selectUnknown = function() {
        return this.events_collection.selectUnknown();
      };

      Index.prototype.selectWarning = function() {
        return this.events_collection.selectWarning();
      };

      Index.prototype.selectSilencedClients = function() {
        return this.events_collection.selectSilencedClients();
      };

      Index.prototype.selectUnsilencedClients = function() {
        return this.events_collection.selectUnsilencedClients();
      };

      Index.prototype.selectSilencedChecks = function() {
        return this.events_collection.selectSilenced();
      };

      Index.prototype.selectUnsilencedChecks = function() {
        var events_selected;
        events_selected = this.events_collection.getSelected().length;
        return this.events_collection.selectUnsilenced({
          success: function() {
            return toastr.success("Unsilenced " + events_selected + " events", "Success!", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      };

      Index.prototype.resolveSelected = function() {
        return this.events_collection.resolveSelected({
          success: function(model) {
            var event_name;
            event_name = "" + (model.get("client")) + "_" + (model.get("check"));
            return toastr.success("Resolved event " + event_name + ".", "Success!", {
              positionClass: "toast-bottom-right"
            });
          },
          error: function(model) {
            var event_name;
            event_name = "" + (model.get("client")) + "_" + (model.get("check"));
            return toastr.error("Error resolving event " + event_name + ". Is Sensu API running?", "Resolving Error", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      };

      Index.prototype.silenceSelectedClients = function() {
        return this.events_collection.silenceSelectedClients({
          success: function(model) {
            var client_name;
            client_name = model.get("name");
            return toastr.success("Silenced client " + client_name + ".", "Success!", {
              positionClass: "toast-bottom-right"
            });
          },
          error: function(model, xhr, opts) {
            var client_name;
            client_name = model.get("name");
            return toastr.error("Error silencing client " + client_name + ".", "Silencing Error!", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      };

      Index.prototype.silenceSelectedChecks = function() {
        return this.events_collection.silenceSelectedChecks({
          success: function(model) {
            var check_name;
            check_name = model.get("check");
            return toastr.success("Silenced check " + check_name + ".", "Success!", {
              positionClass: "toast-bottom-right"
            });
          },
          error: function(model) {
            var check_name;
            check_name = model.get("check");
            return toastr.error("Error silencing check " + check_name + ".", "Silencing Error!", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      };

      Index.prototype.unsilenceSelectedClients = function() {
        return this.events_collection.unsilenceSelectedClients({
          success: function(model) {
            var client_name;
            client_name = model.get("name");
            return toastr.success("Un-silenced client " + client_name, "Success!", {
              positionClass: "toast-bottom-right"
            });
          },
          error: function(model) {
            var client_name;
            client_name = model.get("name");
            return toastr.error("Error un-silencing client " + client_name + ".            The client may already be un-sileneced or Sensu API is down.", "Un-silencing Error!", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      };

      Index.prototype.unsilenceSelectedChecks = function() {
        return this.events_collection.unsilenceSelectedChecks({
          success: function(model) {
            var check_name;
            check_name = model.get("check");
            return toastr.success("Un-silenced check " + check_name + ".", "Success!", {
              positionClass: "toast-bottom-right"
            });
          },
          error: function(model) {
            var check_name;
            check_name = model.get("check");
            return toastr.error("Error un-silencing check " + check_name + ".            The check may already be un-sileneced or Sensu API is down.", "Un-silencing Error!", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      };

      return Index;

    })(SensuDashboard.Views.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Events", function(exports) {
    var _ref;
    return exports.List = (function(_super) {
      __extends(List, _super);

      function List() {
        _ref = List.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      List.prototype.name = "events/list";

      List.prototype.initialize = function() {
        this.autocomplete_view = this.options.autocomplete_view;
        this.autocomplete_view.delegate = this;
        return List.__super__.initialize.apply(this, arguments);
      };

      List.prototype.itemClass = function() {
        return exports.ListItem;
      };

      List.prototype.resolvedCollection = function() {
        var model, resolved, token, _i, _len, _ref1;
        resolved = this.collection.chain();
        _ref1 = this.autocomplete_view.tokens;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          token = _ref1[_i];
          model = token.object;
          resolved = model instanceof SensuDashboard.Models.Check ? resolved.filter(function(record) {
            return record.get("check") === model.get("name");
          }) : model instanceof SensuDashboard.Models.Client ? resolved.filter(function(record) {
            return record.get("client") === model.get("name");
          }) : _.isString(model) ? resolved.filter(function(record) {
            var output, result;
            output = record.get("output").toLowerCase();
            result = output.indexOf(model.toLowerCase()) !== -1;
            return result || record.get("check").toLowerCase() === model.toLowerCase();
          }) : void 0;
        }
        return resolved;
      };

      List.prototype.resolved = function() {
        return _(this.resolvedCollection().map().value());
      };

      List.prototype.renderCollection = function(collection) {
        return List.__super__.renderCollection.call(this, collection || this.resolved());
      };

      List.prototype.renderEmpty = function(collection) {
        return List.__super__.renderEmpty.call(this, collection || this.resolved());
      };

      List.prototype.filtersUpdated = function() {
        var filtered;
        filtered = this.resolved();
        this.collection.each(function(model) {
          if (!filtered.contains(model)) {
            return model.set({
              selected: false
            });
          }
        });
        this.$el.html(this.template());
        return this.renderCollection(filtered);
      };

      return List;

    })(SensuDashboard.Views.List);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Events", function(exports) {
    var _ref;
    return exports.ListItem = (function(_super) {
      __extends(ListItem, _super);

      function ListItem() {
        _ref = ListItem.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ListItem.prototype.name = "events/list_item";

      ListItem.prototype.className = function() {
        return this.model.get("status_name");
      };

      ListItem.prototype.events = {
        "click td:not(.select)": "showDetails",
        "click input[type=checkbox]": "toggleSelect"
      };

      ListItem.prototype.initialize = function() {
        this.client = SensuDashboard.Clients.get(this.model.get("client"));
        this.listenTo(this.client, "remove", this.remove);
        return ListItem.__super__.initialize.apply(this, arguments);
      };

      ListItem.prototype.toggleSelect = function() {
        return this.model.set({
          selected: !this.model.get("selected")
        });
      };

      ListItem.prototype.showDetails = function() {
        return new SensuDashboard.Views.Events.Modal({
          event: this.model,
          client: this.client
        });
      };

      return ListItem;

    })(SensuDashboard.Views.ListItem);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Events", function(exports) {
    var _ref;
    return exports.Modal = (function(_super) {
      __extends(Modal, _super);

      function Modal() {
        _ref = Modal.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Modal.prototype.name = "events/modal";

      Modal.prototype.events = {
        "click #silence_client": "silenceClient",
        "click #silence_check": "silenceCheck",
        "click #resolve_check": "resolveCheck"
      };

      Modal.prototype.initialize = function() {
        var _this = this;
        this.$el.on("hidden", function() {
          return _this.remove();
        });
        this.event = this.options.event;
        this.client = this.options.client;
        this.listenTo(this.event, "change", this.render);
        this.listenTo(this.event, "destroy", this.remove);
        this.listenTo(this.client, "change", this.render);
        this.listenTo(this.client, "destroy", this.remove);
        return this.render();
      };

      Modal.prototype.render = function() {
        var template_data;
        template_data = {
          event: this.event.toJSON(),
          client: this.client.toJSON()
        };
        if (this.$el.html() === "") {
          this.$el.html(this.template(template_data));
          this.$el.appendTo("body");
          return this.$el.modal("show");
        } else {
          return this.$el.html(this.template(template_data));
        }
      };

      Modal.prototype.silenceClient = function(ev) {
        var icon, parent, tag_name, text;
        tag_name = $(ev.target).prop("tagName");
        if (tag_name === "SPAN" || tag_name === "I") {
          parent = $(ev.target).parent();
        } else {
          parent = $(ev.target);
        }
        icon = parent.find("i").first();
        text = parent.find("span").first();
        if (this.client.get("silenced")) {
          icon.removeClass("icon-volume-off").addClass("icon-spinner icon-spin");
          text.html("Un-silencing...");
          return this.client.unsilence({
            success: function(model) {
              var client_name;
              client_name = model.get("name");
              return toastr.success("Un-silenced client " + client_name + ".", "Success!", {
                positionClass: "toast-bottom-right"
              });
            },
            error: function(model) {
              var client_name;
              client_name = model.get("name");
              return toastr.error("Error un-silencing client " + client_name + ".              The client may already be un-sileneced or Sensu API is down.", "Un-silencing Error!", {
                positionClass: "toast-bottom-right"
              });
            }
          });
        } else {
          icon.removeClass("icon-volume-up").addClass("icon-spinner icon-spin");
          text.html("Silencing...");
          return this.client.silence({
            success: function(model) {
              var client_name;
              client_name = model.get("name");
              return toastr.success("Silenced client " + client_name + ".", "Success!", {
                positionClass: "toast-bottom-right"
              });
            },
            error: function(model, xhr, opts) {
              var client_name;
              client_name = model.get("name");
              return toastr.error("Error silencing client " + client_name + ".", "Silencing Error!", {
                positionClass: "toast-bottom-right"
              });
            }
          });
        }
      };

      Modal.prototype.silenceCheck = function(ev) {
        var icon, parent, tag_name, text;
        tag_name = $(ev.target).prop("tagName");
        if (tag_name === "SPAN" || tag_name === "I") {
          parent = $(ev.target).parent();
        } else {
          parent = $(ev.target);
        }
        icon = parent.find("i").first();
        text = parent.find("span").first();
        if (this.event.get("silenced")) {
          icon.removeClass("icon-volume-off").addClass("icon-spinner icon-spin");
          text.html("Un-silencing...");
          return this.event.unsilence({
            success: function(model) {
              var check_name;
              check_name = model.get("check");
              return toastr.success("Un-silenced check " + check_name + ".", "Success!", {
                positionClass: "toast-bottom-right"
              });
            },
            error: function(model) {
              var check_name;
              check_name = model.get("check");
              return toastr.error("Error un-silencing check " + check_name + ".              The check may already be un-sileneced or Sensu API is down.", "Un-silencing Error!", {
                positionClass: "toast-bottom-right"
              });
            }
          });
        } else {
          icon.removeClass("icon-volume-up").addClass("icon-spinner icon-spin");
          text.html("Silencing...");
          return this.event.silence({
            success: function(model) {
              var check_name;
              check_name = model.get("check");
              return toastr.success("Silenced check " + check_name + ".", "Success!", {
                positionClass: "toast-bottom-right"
              });
            },
            error: function(model) {
              var check_name;
              check_name = model.get("check");
              return toastr.error("Error silencing check " + check_name + ".", "Silencing Error!", {
                positionClass: "toast-bottom-right"
              });
            }
          });
        }
      };

      Modal.prototype.resolveCheck = function(ev) {
        var icon, parent, tag_name, text;
        tag_name = $(ev.target).prop("tagName");
        if (tag_name === "SPAN" || tag_name === "I") {
          parent = $(ev.target).parent();
        } else {
          parent = $(ev.target);
        }
        icon = parent.find("i").first();
        text = parent.find("span").first();
        icon.removeClass("icon-ok").addClass("icon-spinner icon-spin");
        text.html("Resolving...");
        return this.event.resolve({
          success: function(model) {
            var event_name;
            event_name = "" + (model.get("client")) + "_" + (model.get("check"));
            return toastr.success("Resolved event " + event_name + ".", "Success!", {
              positionClass: "toast-bottom-right"
            });
          },
          error: function(model) {
            var event_name;
            event_name = "" + (model.get("client")) + "_" + (model.get("check"));
            return toastr.error("Error resolving event " + event_name + ". Is Sensu API running?", "Resolving Error", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      };

      return Modal;

    })(SensuDashboard.Views.Modal);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Stashes", function(exports) {
    var _ref;
    return exports.Counts = (function(_super) {
      __extends(Counts, _super);

      function Counts() {
        _ref = Counts.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Counts.prototype.name = "stashes/counts";

      Counts.prototype.initialize = function(collection) {
        return this.listenTo(this.collection, "all", this.render);
      };

      Counts.prototype.render = function() {
        var template_data;
        template_data = {
          count: this.collection.models.length
        };
        this.$el.html(this.template(template_data));
        return this;
      };

      return Counts;

    })(SensuDashboard.Views.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Stashes", function(exports) {
    var _ref;
    return exports.Index = (function(_super) {
      __extends(Index, _super);

      function Index() {
        _ref = Index.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Index.prototype.name = "stashes/index";

      Index.prototype.events = {
        "click #toggle-checkboxes": "toggleSelected",
        "click #select-all": "selectAll",
        "click #select-none": "selectNone",
        "click #remove-selected": "removeSelected"
      };

      Index.prototype.initialize = function() {
        this.autocomplete_view = new SensuDashboard.Views.AutoCompleteField();
        this.counts_subview = new SensuDashboard.Views.Stashes.Counts({
          collection: this.collection
        });
        return this.stashes_view = new exports.List({
          collection: this.collection,
          autocomplete_view: this.autocomplete_view
        });
      };

      Index.prototype.render = function() {
        this.$el.html(this.template({
          stashes: this.collection
        }));
        this.assign(this.counts_subview, "#counts");
        this.assign(this.stashes_view, "#stashes_container");
        this.$el.find("#filter").html(this.autocomplete_view.render().el);
        return this;
      };

      Index.prototype.toggleSelected = function() {
        return this.collection.toggleSelected();
      };

      Index.prototype.selectAll = function() {
        return this.collection.selectAll();
      };

      Index.prototype.selectNone = function() {
        return this.collection.selectNone();
      };

      Index.prototype.removeSelected = function() {
        return this.collection.removeSelected({
          success: function(model) {
            var stash_name;
            stash_name = model.get("path");
            return toastr.success("Removed stash " + stash_name + ".", "Success!", {
              positionClass: "toast-bottom-right"
            });
          },
          error: function(model) {
            var stash_name;
            stash_name = model.get("path");
            return toastr.error("Error removing stash " + stash_name + ".            The stash may already be removed or Sensu API is down.", "Removal Error!", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      };

      return Index;

    })(SensuDashboard.Views.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Stashes", function(exports) {
    var _ref;
    return exports.List = (function(_super) {
      __extends(List, _super);

      function List() {
        _ref = List.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      List.prototype.name = "stashes/list";

      List.prototype.initialize = function() {
        this.autocomplete_view = this.options.autocomplete_view;
        this.autocomplete_view.delegate = this;
        return List.__super__.initialize.apply(this, arguments);
      };

      List.prototype.itemClass = function() {
        return exports.ListItem;
      };

      List.prototype.resolvedCollection = function() {
        var resolved, token, _i, _len, _ref1,
          _this = this;
        resolved = this.collection.chain();
        _ref1 = this.autocomplete_view.tokens;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          token = _ref1[_i];
          resolved = _.isString(token.object) ? resolved.filter(function(record) {
            return _.detect(record.get("path").split("/"), function(part) {
              return liquidMetal.score(part, token.object) > 0.9;
            }) !== void 0;
          }) : void 0;
        }
        return resolved;
      };

      List.prototype.resolved = function() {
        return _(this.resolvedCollection().map().value());
      };

      List.prototype.renderCollection = function(collection) {
        return List.__super__.renderCollection.call(this, collection || this.resolved());
      };

      List.prototype.renderEmpty = function(collection) {
        return List.__super__.renderEmpty.call(this, collection || this.resolved());
      };

      List.prototype.filtersUpdated = function() {
        var filtered;
        filtered = this.resolved();
        this.collection.each(function(model) {
          if (!filtered.contains(model)) {
            return model.set({
              selected: false
            });
          }
        });
        this.$el.html(this.template());
        return this.renderCollection(filtered);
      };

      return List;

    })(SensuDashboard.Views.List);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Stashes", function(exports) {
    var _ref;
    return exports.ListItem = (function(_super) {
      __extends(ListItem, _super);

      function ListItem() {
        _ref = ListItem.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ListItem.prototype.name = "stashes/list_item";

      ListItem.prototype.className = function() {
        return this.model.get("status_name");
      };

      ListItem.prototype.events = {
        "click td:not(.select)": "showDetails",
        "click input[type=checkbox]": "toggleSelect"
      };

      ListItem.prototype.render = function() {
        var template_data;
        template_data = {
          selected: this.model.get("selected"),
          path: this.model.get("path"),
          key_list: Object.keys(this.model.get("content")).join(", ")
        };
        this.$el.html(this.template(template_data));
        return this;
      };

      ListItem.prototype.toggleSelect = function() {
        return this.model.set({
          selected: !this.model.get("selected")
        });
      };

      ListItem.prototype.showDetails = function() {
        return new SensuDashboard.Views.Stashes.Modal({
          name: "stashes/modal",
          model: this.model
        });
      };

      return ListItem;

    })(SensuDashboard.Views.ListItem);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Stashes", function(exports) {
    var _ref;
    return exports.Modal = (function(_super) {
      __extends(Modal, _super);

      function Modal() {
        _ref = Modal.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Modal.prototype.name = "stashes/modal";

      Modal.prototype.events = {
        "click #remove_stash": "removeStash"
      };

      Modal.prototype.initialize = function() {
        var _this = this;
        this.$el.on("hidden", function() {
          return _this.remove();
        });
        this.listenTo(this.model, "change", this.render);
        this.listenTo(this.model, "destroy", this.remove);
        return this.render();
      };

      Modal.prototype.render = function() {
        var template_data;
        template_data = this.model.toJSON();
        if (this.$el.html() === "") {
          this.$el.html(this.template(template_data));
          this.$el.appendTo("body");
          return this.$el.modal("show");
        } else {
          return this.$el.html(this.template(template_data));
        }
      };

      Modal.prototype.removeStash = function(ev) {
        var icon, parent, tag_name, text;
        tag_name = $(ev.target).prop("tagName");
        if (tag_name === "SPAN" || tag_name === "I") {
          parent = $(ev.target).parent();
        } else {
          parent = $(ev.target);
        }
        icon = parent.find("i").first();
        text = parent.find("span").first();
        icon.removeClass("icon-remove").addClass("icon-spinner icon-spin");
        text.html("Removing...");
        return this.model.remove({
          success: function(model) {
            var stash_name;
            stash_name = model.get("path");
            return toastr.success("Removed stash " + stash_name + ".", "Success!", {
              positionClass: "toast-bottom-right"
            });
          },
          error: function(model) {
            var stash_name;
            stash_name = model.get("path");
            return toastr.error("Error removing stash " + stash_name + ".            The stash may already be removed or Sensu API is down.", "Removal Error!", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      };

      return Modal;

    })(SensuDashboard.Views.Modal);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Info", function(exports) {
    var _ref;
    return exports.Index = (function(_super) {
      __extends(Index, _super);

      function Index() {
        _ref = Index.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Index.prototype.name = "info/index";

      Index.prototype.initialize = function() {
        this.listenTo(this.model, "destroy", this.render);
        return this.listenTo(this.model, "change", this.render);
      };

      Index.prototype.render = function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      };

      return Index;

    })(SensuDashboard.Views.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Checks", function(exports) {
    var _ref;
    return exports.Index = (function(_super) {
      __extends(Index, _super);

      function Index() {
        _ref = Index.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Index.prototype.name = "checks/index";

      Index.prototype.initialize = function() {
        this.autocomplete_view = new SensuDashboard.Views.AutoCompleteField();
        return this.subview = new exports.List({
          collection: this.collection,
          autocomplete_view: this.autocomplete_view
        });
      };

      Index.prototype.render = function() {
        this.$el.html(this.template({
          checks: this.collection
        }));
        this.assign(this.subview, "#checks_container");
        this.$el.find("#filter").html(this.autocomplete_view.render().el);
        return this;
      };

      return Index;

    })(SensuDashboard.Views.Base);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  namespace("SensuDashboard.Views.Checks", function(exports) {
    var _ref;
    return exports.List = (function(_super) {
      __extends(List, _super);

      function List() {
        _ref = List.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      List.prototype.name = "checks/list";

      List.prototype.initialize = function() {
        this.autocomplete_view = this.options.autocomplete_view;
        this.autocomplete_view.delegate = this;
        return List.__super__.initialize.apply(this, arguments);
      };

      List.prototype.itemClass = function() {
        return exports.ListItem;
      };

      List.prototype.resolvedCollection = function() {
        var resolved, token, _i, _len, _ref1,
          _this = this;
        resolved = this.collection.chain();
        _ref1 = this.autocomplete_view.tokens;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          token = _ref1[_i];
          resolved = _.isString(token.object) ? resolved.filter(function(record) {
            var result;
            result = _this.matchForKeys(token.object, record, {
              key: "interval",
              threshold: 1
            }, {
              key: "name",
              threshold: 0.92
            });
            return result || _.detect(record.get("subscribers"), function(sub) {
              return liquidMetal.score(sub, token.object) > 0.96;
            }) !== void 0;
          }) : void 0;
        }
        return resolved;
      };

      List.prototype.matchForKeys = function() {
        var args, q, record, result,
          _this = this;
        q = arguments[0], record = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
        result = _.detect(args, function(options) {
          var score, value;
          value = record.get(options.key).toString();
          score = liquidMetal.score(value, q);
          return score >= (options.threshold || 0.7);
        });
        return !(result === void 0);
      };

      List.prototype.renderCollection = function() {
        return List.__super__.renderCollection.call(this, _(this.resolvedCollection().map().value()));
      };

      List.prototype.renderEmpty = function() {
        return List.__super__.renderEmpty.call(this, _(this.resolvedCollection().map().value()));
      };

      List.prototype.filtersUpdated = function() {
        return this.render();
      };

      return List;

    })(SensuDashboard.Views.List);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard.Views.Checks", function(exports) {
    var _ref;
    return exports.ListItem = (function(_super) {
      __extends(ListItem, _super);

      function ListItem() {
        _ref = ListItem.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ListItem.prototype.name = "checks/list_item";

      ListItem.prototype.className = function() {
        return this.model.get("name");
      };

      ListItem.prototype.render = function() {
        this.$el.html(this.template(this.presenter()));
        return this;
      };

      ListItem.prototype.presenter = function() {
        return _.extend(this.model.toJSON(), {
          standalone: this.model.get("standalone") || "false"
        });
      };

      return ListItem;

    })(SensuDashboard.Views.ListItem);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard", function(exports) {
    return exports.StateManager = (function(_super) {
      __extends(StateManager, _super);

      StateManager.prototype.views = [];

      function StateManager(states, defaultState) {
        this._buildStates(states);
        this._buildRoutes();
        this._defaultRoute(defaultState);
        StateManager.__super__.constructor.apply(this, arguments);
      }

      StateManager.prototype.register = function(view) {
        return this.views.push(view);
      };

      StateManager.prototype.disposeAll = function() {
        var view, _i, _len, _ref, _results;
        _ref = this.views;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          view = _ref[_i];
          _results.push(view.dispose());
        }
        return _results;
      };

      StateManager.prototype.reset = function() {
        this.disposeAll();
        return this.views = [];
      };

      StateManager.prototype.count = function() {
        return this.views.length;
      };

      StateManager.prototype.pushTop = function(view) {
        this.reset();
        return this.register(view);
      };

      StateManager.prototype._getState = function(name) {
        return _.find(this.states, function(state) {
          return state.name === name;
        });
      };

      StateManager.prototype._buildStates = function(states) {
        var name, state, _results;
        this.states = [];
        _results = [];
        for (name in states) {
          state = states[name];
          _results.push(this.states.push(new state({
            name: name
          })));
        }
        return _results;
      };

      StateManager.prototype._buildRoutes = function() {
        var state, _i, _len, _ref, _results;
        _ref = this.states;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          state = _ref[_i];
          _results.push(this.route(state.route, state.name, this._enterView(state)));
        }
        return _results;
      };

      StateManager.prototype._defaultRoute = function(defaultState) {
        var state;
        defaultState || (defaultState = this.states[0].name);
        state = this._getState(defaultState);
        return this.route("", defaultState, this._enterView(state));
      };

      StateManager.prototype._enterView = function(state) {
        return function(context) {
          var view;
          view = state.enter(context);
          return state.transition(this, view);
        };
      };

      return StateManager;

    })(Backbone.Router);
  });

}).call(this);
(function() {
  namespace("SensuDashboard", function(exports) {
    return exports.State = (function() {
      State.prototype.collection = null;

      State.prototype.model = null;

      State.prototype.route = "";

      State.prototype._beforeSetupView = null;

      State.prototype.setupView = null;

      State.prototype._afterSetupView = null;

      function State(opts) {
        this.name = opts.name;
      }

      State.prototype.enter = function() {
        var context, view;
        context = {};
        if (this.model) {
          context.model = this.model();
        }
        if (this.collection) {
          context.collection = this.collection();
        }
        view = this.view(context);
        if (this._beforeSetupView && _.isFunction(this._beforeSetupView)) {
          this._beforeSetupView(view, attributes);
        }
        if (this.setupView && _.isFunction(this.setupView)) {
          this.setupView(view, attributes);
        }
        if (this._afterSetupView && _.isFunction(this._afterSetupView)) {
          this._afterSetupView(view, attributes);
        }
        return view;
      };

      State.prototype.exit = function() {};

      return State;

    })();
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard", function(exports) {
    var _ref;
    return exports.MainState = (function(_super) {
      __extends(MainState, _super);

      function MainState() {
        _ref = MainState.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MainState.prototype.transition = function(manager, view) {
        $("#main").html(view.render().el);
        return manager.pushTop(view);
      };

      return MainState;

    })(exports.State);
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace("SensuDashboard", function(exports) {
    var _ref, _ref1, _ref2, _ref3, _ref4;
    return exports.States = new exports.StateManager({
      events: (function(_super) {
        __extends(_Class, _super);

        function _Class() {
          _ref = _Class.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        _Class.prototype.route = "events";

        _Class.prototype.view = function(opts) {
          return new SensuDashboard.Views.Events.Index({
            model: SensuDashboard.EventsMetadata
          });
        };

        return _Class;

      })(exports.MainState),
      clients: (function(_super) {
        __extends(_Class, _super);

        function _Class() {
          _ref1 = _Class.__super__.constructor.apply(this, arguments);
          return _ref1;
        }

        _Class.prototype.route = "clients";

        _Class.prototype.view = function(opts) {
          return new SensuDashboard.Views.Clients.Index({
            collection: SensuDashboard.Clients
          });
        };

        return _Class;

      })(exports.MainState),
      stashes: (function(_super) {
        __extends(_Class, _super);

        function _Class() {
          _ref2 = _Class.__super__.constructor.apply(this, arguments);
          return _ref2;
        }

        _Class.prototype.route = "stashes";

        _Class.prototype.view = function(opts) {
          return new SensuDashboard.Views.Stashes.Index({
            collection: SensuDashboard.Stashes
          });
        };

        return _Class;

      })(exports.MainState),
      checks: (function(_super) {
        __extends(_Class, _super);

        function _Class() {
          _ref3 = _Class.__super__.constructor.apply(this, arguments);
          return _ref3;
        }

        _Class.prototype.route = "checks";

        _Class.prototype.view = function(opts) {
          return new SensuDashboard.Views.Checks.Index({
            collection: SensuDashboard.Checks
          });
        };

        return _Class;

      })(exports.MainState),
      info: (function(_super) {
        __extends(_Class, _super);

        function _Class() {
          _ref4 = _Class.__super__.constructor.apply(this, arguments);
          return _ref4;
        }

        _Class.prototype.route = "info";

        _Class.prototype.view = function(opts) {
          return new SensuDashboard.Views.Info.Index({
            model: SensuDashboard.Info
          });
        };

        return _Class;

      })(exports.MainState)
    }, "events");
  });

}).call(this);
(function() {
  namespace("SensuDashboard", function(exports) {
    return exports.Matcher = (function() {
      function Matcher(options) {
        if (options == null) {
          options = {};
        }
        options = _.defaults(options, {
          threshold: 0.70,
          sources: []
        });
        this.sources = options.sources;
        this.threshold = options.threshold;
      }

      Matcher.prototype.query = function(query) {
        var results, source, _i, _len, _ref,
          _this = this;
        results = [];
        _ref = this.sources;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          source = _ref[_i];
          source.each(function(model) {
            var score;
            score = model.validForQuery ? model.validForQuery(query, _this.threshold) : (score = liquidMetal.score(model.get("name"), query), score > _this.threshold ? score : void 0);
            if (score > 0) {
              return results.push({
                score: score,
                model: model
              });
            }
          });
        }
        results.sort(function(a, b) {
          return b.score - a.score;
        });
        return _.pluck(results, "model");
      };

      Matcher.prototype.addSource = function(source) {
        return this.sources.push(source);
      };

      return Matcher;

    })();
  });

}).call(this);
(function() {
  namespace("SensuDashboard", function(exports) {
    return exports.Bootstrapper = (function() {
      function Bootstrapper(options) {
        var error;
        if (options == null) {
          options = {};
        }
        this.successCallback = options.success;
        this.errorCallback = options.error;
        try {
          $.ajax({
            type: "GET",
            url: "/all",
            context: this,
            dataType: "json",
            success: function(data, textStatus, jqXHR) {
              SensuDashboard.PollFrequency = data.info.sensu_dashboard.poll_frequency;
              SensuDashboard.Stashes = new SensuDashboard.Collections.Stashes(data.stashes);
              SensuDashboard.Events = new SensuDashboard.Collections.Events(data.events);
              SensuDashboard.Clients = new SensuDashboard.Collections.Clients(data.clients);
              SensuDashboard.Checks = new SensuDashboard.Collections.Checks(data.checks);
              SensuDashboard.EventsMetadata = new SensuDashboard.Models.Metadata.Events;
              SensuDashboard.Info = new SensuDashboard.Models.Info(data.info);
              SensuDashboard.Stashes.startLongPolling(SensuDashboard.PollFrequency);
              SensuDashboard.Events.startLongPolling(SensuDashboard.PollFrequency);
              SensuDashboard.Clients.startLongPolling(SensuDashboard.PollFrequency);
              SensuDashboard.Checks.startLongPolling(SensuDashboard.PollFrequency);
              SensuDashboard.Info.startLongPolling(SensuDashboard.PollFrequency);
              return this.successCallback.call(this);
            },
            error: function(jqXHR, textStatus, errorThrown) {
              return this.error();
            }
          });
        } catch (_error) {
          error = _error;
          this.error();
        }
      }

      Bootstrapper.prototype.error = function() {
        this.errorCallback.call(this);
      };

      return Bootstrapper;

    })();
  });

}).call(this);
(function() {
  namespace("SensuDashboard", function(exports) {
    var Application;
    Application = (function() {
      function Application() {
        var bootstrapper,
          _this = this;
        $.ajaxSetup({
          cache: false
        });
        bootstrapper = new SensuDashboard.Bootstrapper({
          success: function() {
            return _this.boot();
          },
          error: function() {
            new SensuDashboard.Views.Error;
            return toastr.error("Error during bootstrap. Is Sensu API running?", "Bootstrap Error", {
              positionClass: "toast-bottom-right"
            });
          }
        });
      }

      Application.prototype.boot = function() {
        return Backbone.history.start();
      };

      return Application;

    })();
    return exports.App = new Application();
  });

}).call(this);






































