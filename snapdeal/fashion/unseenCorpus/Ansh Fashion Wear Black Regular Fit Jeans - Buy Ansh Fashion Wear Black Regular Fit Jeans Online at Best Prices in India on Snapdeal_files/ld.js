if(!window.criteo_q||window.criteo_q instanceof Array){var oldQueue=window.criteo_q||[];window.criteo_q=function(){function g(a){for(var b=document.cookie.split(";"),d=0;d<b.length;d++){var f=b[d],c=f.substr(0,f.indexOf("=")).replace(/^\s+|\s+$/g,""),f=f.substr(f.indexOf("=")+1);if(c===a)return(decodeURIComponent||unescape)(f)}return null}function y(a,b){if(a&&1<a.length){"?"===a[0]&&(a="&"+a.substr(1));var d="&"+b+"=",f=a.indexOf(d);if(-1!==f){var c=a.indexOf("&",f+d.length);return a.slice(f+d.length,
0>c?void 0:c)}}}var n=function(){var a=navigator.userAgent.match(/^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i),b=!!a,a=a&&11<=parseFloat(a[1]);return{is_safari:b,has_itp:a}}(),c={bodyReady:!1,domReady:!1,queue:[],actions:[],disingScheduled:[],accounts:[],acid:null,axid:null,pxsig:null,idcpy:null,idfs:null,idfs_read:!1,optout:!1,ccp:null,cop:null,ua:n,syncframe_loading:n.is_safari,waiting_syncframe:n.has_itp},e={tagVersion:"4.5.0",
handlerUrlPrefix:("https:"===document.location.protocol?"https://sslwidget.":"http://widget.")+"criteo.com/event",handlerResponseType:"single",responseType:"js",handlerParams:{v:"4.5.0"},extraData:[],customerInfo:[],manualDising:!1,manualFlush:!1,disOnce:!1,partialDis:!1,idfsCookieName:"cto_idfs",guidCookieName:"cto_idcpy",guidCookieRetentionTimeHours:9490,optoutCookieName:"cto_optout",optoutCookieRetentionTimeHours:43800,gumSyncFrameEndPoint:window.CriteoSyncFrameUrlOverride||"https://gum.criteo.com/syncframe",
gumSyncFrameId:"criteo-syncframe",forceSyncFrame:!1,eventMap:{applaunched:"al",viewitem:"vp",viewhome:"vh",viewlist:"vl",viewbasket:"vb",viewsearch:"vs",tracktransaction:"vc",calldising:"dis",setdata:"exd",setemail:"ce"},propMap:{event:"e",account:"a",currency:"c",product:"p",item:"p","item.id":"i","item.price":"pr","item.quantity":"q","product.id":"i","product.price":"pr","product.quantity":"q",data:"d",keywords:"kw",checkin_date:"din",checkout_date:"dout",deduplication:"dd",attribution:"at","attribution.channel":"ac",
"attribution.value":"v",user_segment:"si",new_customer:"nc",customer_id:"ci",email:"m",hash_method:"h",transaction_value:"tv",responseType:"rt",page_name:"pn",page_id:"pi",page_type:"pt",page_number:"pnb",category:"ca",filters:"f","filters.name":"fn","filters.operator":"fo","filters.value":"fv",retailer_visitor_id:"rvi",price:"pr",availability:"av"},setters:{seturl:{cfg:"handlerUrlPrefix",evt:"url"},setaccount:{cfg:"account",evt:"account"},setcalltype:{cfg:"handlerResponseType",evt:"type"},setresponsetype:{cfg:"responseType",
evt:"type"},oninitialized:{cfg:"onInitialized",evt:"callback"},ondomready:{cfg:"onDOMReady",evt:"callback"},beforeappend:{cfg:"beforeAppend",evt:"callback"},aftereval:{cfg:"afterEval",evt:"callback"},onflush:{cfg:"onFlush",evt:"callback"}},flags:{disonce:"disOnce",manualdising:"manualDising",manualflush:"manualFlush",nopartialflush:"noPartialFlush",disonpartialflush:"partialDis"}},t=function(a,b,d){var f=new Date;f.setTime(f.getTime()+36E5*d);d="expires="+f.toUTCString();for(var f=document.location.hostname.split("."),
c=0;c<f.length;++c){var e=f.slice(f.length-c-1,f.length).join("."),e="domain=."+e;document.cookie=a+"="+(encodeURIComponent||escape)(b)+";"+d+";"+e+";path=/";if((e=g(a))&&e===b)break}},E=function(){var a=document.createElement("iframe"),b={uid:c.idcpy,idfs:c.idfs,optout:c.optout},d=e.gumSyncFrameEndPoint;if(b.uid||b.idfs||b.optout)d+="#"+JSON.stringify(b);a.src=d;a.id=e.gumSyncFrameId;a.width=0;a.height=0;a.frameBorder=0;a.setAttribute("style","border-width:0px; margin:0px; display:none");return a},
u=function(a,b,d){t(a,b,d);if(window.localStorage)try{window.localStorage.setItem(a,b)}catch(f){}},v=function(a){var b;window.localStorage&&(b=window.localStorage.getItem(a));return g(a)||b},F=function(){if(c.syncframe_loading&&window.addEventListener||e.forceSyncFrame){var a=E(),b=function(a){var b=a.data;if(b.isCriteoMessage){a.stopPropagation();c.syncframe_loading=!1;c.idfs_read=b.idfsRead;if(b.optout)c.optout=!0,u(e.optoutCookieName,"1",e.optoutCookieRetentionTimeHours),b=e.guidCookieName,t(b,
"",0),window.localStorage&&window.localStorage.removeItem(b),b=e.idfsCookieName,t(b,"",0),window.localStorage&&window.localStorage.removeItem(b);else if(b.uid||b.idfs)b.uid&&(a=b.uid,c.idcpy=a,u(e.guidCookieName,a,e.guidCookieRetentionTimeHours)),b.idfs&&(b=b.idfs,c.idfs=b,u(e.idfsCookieName,b,e.guidCookieRetentionTimeHours));c.waiting_syncframe&&c.waiting_syncframe&&(c.waiting_syncframe=!1,q())}};window.addEventListener&&(window.addEventListener("message",b,!0),c.queue.push({event:"appendtag",element:a}))}else c.syncframe_loading=
!1},w=function(a){if(a&&a.referrer){var b=a.createElement("a");b.href=a.referrer;return b}return null};(function(a){a.idcpy=v(e.guidCookieName);a.optout=Boolean(v(e.optoutCookieName));a.idfs=v(e.idfsCookieName)})(c);(function(a){var b=g("criteo_acid"),d=g("cto_axid"),c=g("cto_pxsig"),e=g("cto_optout");null===b&&null===d&&null===e&&null===c?(b=new Date,b.setTime(b.getTime()+1E4),b="expires="+b.toUTCString(),document.cookie=["criteo_write_test=ChUIBBINbXlHb29nbGVSdGJJZBgBIAE","path=/",b].join("; "),
b=g("criteo_write_test"),a.canWriteCookie=null!==b,document.cookie="criteo_write_test=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC"):(a.acid=b,a.axid=null!==e?"optout":d,a.pxsig=c,a.canWriteCookie=!0)})(c);(function(a,b){var d,c;try{c=a.top.location.search}catch(e){var l=a;try{for(;l.parent.document!==l.document;)if(l.parent.document)l=l.parent;else break}catch(k){}if(l&&(l=w(l.document)))c=l.search}c&&(d=y(c,"cto_pld"));if(!d)try{var g=w(a.top.document);g&&g.search&&(d=y(g.search,"cto_pld"))}catch(m){}d&&
(b.cop=d)})(window,c);(function(a){c.waiting_syncframe=c.waiting_syncframe&&!a.idcpy&&!a.optout&&!a.idfs;c.waiting_syncframe&&setTimeout(function(){c.waiting_syncframe&&(c.waiting_syncframe=!1,q())},1E4)})(c);(function(a){var b=g("criteo_cookie_perm");null!==b&&(a.ccp=b)})(c);var n=function(){for(var a=0;a<arguments.length;++a)c.queue.push(arguments[a]);q()},q=function(){for(var a=[],b=c.queue,d=0;d<b.length;++d){var f=b[d];if(f instanceof Array)b.splice.apply(b,[d+1,0].concat(f));else if(f instanceof
Function)b.splice(d+1,0,f());else if(f&&"[object Object]"===f.toString())switch(p(f,d,b,a)){case 0:a.push(f);break;case -1:a=a.concat(b.slice(d)),d=b.length}}e.afterEval instanceof Function&&(a=e.afterEval(b,a,c,e));c.queue=a||[];!e.manualFlush&&((!e.noPartialFlush||0===c.queue.length)&&!c.waiting_syncframe)&&z(0!==c.queue.length)},p=function(a,b,d,f){if(!c.domReady&&a.requiresDOM&&"no"!==a.requiresDOM)return"blocking"===a.requiresDOM?-1:0;delete a.requiresDOM;if(!a.event)return k(a),1;a.account&&
x(a.account,c.accounts);a.event=a.event.toLowerCase();switch(a.event){case "setdata":return a=k(a),e.extraData.push(a),A(c.actions,k(a)),1;case "setparameter":for(var h in a)"event"!==h.toLowerCase()&&a.hasOwnProperty(h)&&(e.handlerParams[h]=a[h]);return 1;case "calldising":a.hasOwnProperty("account")||(a.account=c.accounts);b=e.handlerResponseType;a.hasOwnProperty("type")&&(b=a.type,delete a.type);x(a.account,c.disingScheduled);"sequential"===b&&(a.dc=!0);break;case "setcustomerid":return a.event=
"setdata",a.customer_id=a.id,delete a.id,p(a);case "setretailervisitorid":return a.event="setdata",a.retailer_visitor_id=a.id,delete a.id,p(a);case "setemail":case "sethashedemail":case "ceh":a.event="setemail";if(a.hasOwnProperty("email")){a.email instanceof Array||(a.email=[a.email]);b=a.email;d=[];for(f=0;f<b.length;f++)void 0!==b[f]&&null!==b[f]&&d.push(String(b[f]));a.email=d}b=k(a);e.customerInfo.push(b);B(c.actions,k(a));return 1;case "setsitetype":b="d";if("mobile"===a.type||"m"===a.type)b=
"m";if("tablet"===a.type||"t"===a.type)b="t";a.event="setdata";delete a.type;a.site_type=b;return p(a);case "appendtag":c.bodyReady&&!e.container&&((b=document.body)?(d=document.createElement("div"),d.setAttribute("id","criteo-tags-div"),d.style.display="none",b.appendChild(d),b=d):b=void 0,e.container=b);a.url&&(a.isImgUrl?(b=document.createElement("img"),b.setAttribute("style","display:none;"),b.setAttribute("width","1"),b.setAttribute("height","1")):(b=document.createElement("script"),b.setAttribute("async",
"true"),b.setAttribute("type","text/javascript")),b.setAttribute("src",a.url),a.element=b);e.beforeAppend instanceof Function&&(a.element=e.beforeAppend(a.element,c,e));k(a);if(a.element&&(a.element.tagName||a.isImgUrl))if(!e.container&&("script"===a.element.tagName.toLowerCase()||a.isImgUrl))b=document.getElementsByTagName("script")[0],a.element.setAttribute("data-owner","criteo-tag"),b.parentNode.insertBefore(a.element,b);else if(e.container)e.container.appendChild(a.element);else return 0;return 1;
case "gettagstate":return a.callback instanceof Function?a.callback(c,e):1;case "flush":case "flushevents":return z(b!==d.length-1||0!==f.length),1}if(b=e.setters[a.event])return e[b.cfg]=a[b.evt],1;if(b=e.flags[a.event])return e[b]=!0,1;c.actions.push(k(a));return 1},z=function(a){e.onFlush instanceof Function&&(c.actions=e.onFlush(c.actions,c,e));if(0!==c.actions.length){for(var b=0;b<e.extraData.length;++b)A(c.actions,e.extraData[b]);for(b=0;b<e.customerInfo.length;++b)B(c.actions,e.customerInfo[b]);
if(!e.manualDising&&(!a||e.partialDis)){a=[];for(b=0;b<c.accounts.length;++b)s(c.disingScheduled,c.accounts[b])||a.push(c.accounts[b]);0<a.length&&p({event:"callDising",account:a})}a=c.actions;b=[];1===c.accounts.length&&(e.account=c.accounts[0]);e.account&&b.push("a="+m(e.account,[]));"js"!==e.responseType&&b.push("rt="+m(e.responseType,[]));if(e.handlerParams){var d=decodeURIComponent(m(e.handlerParams,[]));d&&b.push(d)}for(d=0;d<a.length;++d)a[d].account&&r(e.account,a[d].account)&&delete a[d].account,
b.push("p"+d+"="+m(a[d],[]));null!==c.acid&&b.push("acid="+c.acid);null!==c.axid&&b.push("axid="+c.axid);null!==c.pxsig&&b.push("pxsig="+c.pxsig);c.canWriteCookie&&b.push("adce=1");null!==c.ccp&&b.push("ccp="+c.ccp);null!==c.cop&&b.push("cop="+c.cop);c.idcpy&&(b.push("idcpy="+c.idcpy),b.push("iddom="+document.location.hostname));c.idfs&&b.push("idfs="+c.idfs);c.idfs_read&&b.push("idfs_read=1");c.optout&&b.push("optout=1");g("cto_clc")&&b.push("clc=1");a=b.join("&");a={event:"appendTag",url:e.handlerUrlPrefix+
"?"+a,isImgUrl:"gif"===e.responseType};c.actions=[];p(a);e.disOnce||(c.disingScheduled=[])}},A=function(a,b){for(var d=0;d<a.length;++d){var c=a[d];if(c.event===b.event&&r(b.account,c.account)){for(var e in b)b.hasOwnProperty(e)&&"account"!==e&&(c[e]=b[e]);return}}a.push(b)},B=function(a,b){for(var d=0;d<a.length;++d){var c=a[d];if(c.event===b.event&&r(b.account,c.account)&&("hash_method"in b?b.hash_method:"")===("hash_method"in c?c.hash_method:"")){if(b.hasOwnProperty("email")){for(var d=c,c=c.email,
e=b.email,l=[],g=0;g<e.length;++g)s(c,e[g])||l.push(e[g]);c=c.concat(l);d.email=c}return}}a.push(b)},k=function(a){var b=a;if(a instanceof Function)return b=a(),b instanceof Function?b:k(b);if(a instanceof Array)for(var b=[],d=0;d<a.length;++d)b[d]=k(a[d]);else if(a&&"[object Object]"===a.toString())for(d in b={},a)a.hasOwnProperty(d)&&(b[d]=k(a[d]));return b},H=function(a,b){var d=b.join(".");return e.propMap[d]?e.propMap[d]:a},r=function(a,b){if(!(a instanceof Array))return r([a],b);if(!(b instanceof
Array))return r(a,[b]);if(a.length!==b.length)return!1;for(var d=0;d<a.length;++d)if(!s(b,a[d]))return!1;return!0},m=function(a,b){var d="";if(a instanceof Function)d=m(a(),b);else if(a instanceof Array){for(var c=[],h=0;h<a.length;++h)c[h]=m(a[h],b);d+="["+c.join(",")+"]"}else if(a&&"[object Object]"===a.toString()){c=[];for(h in a)if(a.hasOwnProperty(h)){var g=b.concat([h]);c.push(H(h,g)+"="+m(a[h],g))}d+=c.join("&")}else d=1===b.length&&"event"===b[0]?d+(e.eventMap[a.toLowerCase()]?e.eventMap[a.toLowerCase()]:
a):d+a;return encodeURIComponent(d)},x=function(a,b){if(a instanceof Array)for(var d=0;d<a.length;++d)x(a[d],b);else s(b,a)||b.push(a)},s=function(a,b){for(var d=0;d<a.length;++d)if(a[d]===b)return!0;return!1},I=function(a){if(a){var b=a.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("src",a.location.protocol+"//static.criteo.net/js/ld/ld-tag-debug.4.5.0.js");a=a.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)}};(function(a){(function d(){document.body?
setTimeout(a,0):setTimeout(d,10)})()})(function(){c.bodyReady=e.onInitialized instanceof Function?e.onInitialized(c,e):!0;F();q()});(function(a,b){if("complete"===a.readyState)b();else if(a.addEventListener)a.addEventListener("DOMContentLoaded",b,!1),window.addEventListener("load",b,!1);else{a.attachEvent("onreadystatechange",b);window.attachEvent("onload",b);var d=!1;try{d=null===window.frameElement&&document.documentElement}catch(c){}if(d&&d.doScroll)(function G(){if(d){try{d.doScroll("left")}catch(a){return setTimeout(G,
50)}b()}})();else{var e=!1,g=a.onload,k=a.onreadystatechange;a.onload=a.onreadystatechange=function(){k instanceof Function&&k();if(!e&&(!a.readyState||"loaded"===a.readyState||"complete"===a.readyState))g instanceof Function&&g(),e=!0,b()}}}})(document,function(){c.domReady=e.onDOMReady instanceof Function?e.onDOMReady(c,e):!0;q()});(function(a){try{var b=w(a);b&&b.hostname!==a.location.hostname&&e.extraData.push({event:"setData",ref:b.protocol+"//"+b.hostname})}catch(d){}})(document);(function(a,
b){if(a&&b){var d=/^\#(enable|disable)-criteo-tag-debug-mode(\=(\d+))?$/.exec(b);if(d&&4==d.length){var c="enable"==d[1],e=d[3],d="criteoTagDebugMode=";c&&(e&&!isNaN(e))&&(d+=parseInt(e,10));c=c?(new Date).getTime()+864E5:0;c="expires="+(new Date(c)).toUTCString();document.cookie=[d,"path=/",c].join("; ");window.location.href=window.location.href.substr(0,window.location.href.indexOf("#"))}}})(document,window.location.hash);var C;C=document?"function"!=typeof Array.prototype.indexOf?!1:-1!==document.cookie.indexOf("criteoTagDebugMode="):
!1;if(C){var D={originalPush:n,stagedPushes:[],stagedErrors:[],push:function(){0<arguments.length&&this.stagedPushes.push(arguments)},pushError:function(a){this.stagedErrors.push(a)}};window.onerror=function(a){return function(b,c,e,g){D.pushError({message:b,url:c,lineNumber:e,column:g});return a&&"function"===typeof a?a.apply(this,arguments):!1}}(window.onerror);I(document);return D}return{push:n}}();window.criteo_q.push.apply(window.criteo_q,oldQueue)};
