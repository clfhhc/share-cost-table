(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("23aj");return{page:e.default||e}}])},"23aj":function(e,t,n){"use strict";n.r(t);var a=n("qKvR"),o=n("q1tI"),i=n("/MKj"),r=n("HohS"),c=n.n(r),u=n("m/Pd"),l=n.n(u),s=n("kOwS"),p=n("qNsG"),f=n("YFqc"),d=n.n(f),h=c()().publicRuntimeConfig.linkPrefix,b=function(e){var t=e.href,n=e.as,o=void 0===n?t:n,i=Object(p.a)(e,["href","as"]);return Object(a.a)(d.a,Object(s.a)({href:t,as:"".concat(h).concat(o)},i))},v=function(e){var t=e.title,n=void 0===t?"":t,o=e.description,i=void 0===o?n:o,r=e.charset,c=void 0===r?"utf-8":r,u=e.customDomain,s=void 0===u?"":u,p=e.hrefCanonical,f=e.hrefManifest,d=e.themeColor,v=e.favIconPath,m=e.keywords,g=void 0===m?n:m,y=e.refresh,O=e.appleIconPath,j=e.appleIconSize,k=void 0===j?"192x192":j,w=e.isAmp,I=e.children;return Object(a.a)(l.a,null,Object(a.a)("title",{key:"title"},n),Object(a.a)("meta",{charSet:c,key:"charSet"}),Object(a.a)("meta",{name:"description",key:"description",content:i}),d&&Object(a.a)("meta",{name:"theme-color",key:"theme-color",content:d}),f&&Object(a.a)(b,{href:"".concat(s).concat(f),key:"manifest",passHref:!0},Object(a.a)("link",{key:"manifest",rel:"manifest"})),!w&&p&&Object(a.a)(b,{href:"".concat(s).concat(p),key:"canonical",passHref:!0},Object(a.a)("link",{key:"canonical",rel:"canonical"})),v&&Object(a.a)(b,{href:v,key:"fav-icon",passHref:!0},Object(a.a)("link",{rel:"shortcut icon",key:"fav-icon",type:"image/x-icon"})),Object(a.a)("meta",{name:"keywords",key:"keywords",content:g}),Object(a.a)("meta",{httpEquiv:"X-UA-Compatible",key:"ua-compatible",content:"ie=edge"}),y&&Object(a.a)("meta",{httpEquiv:"refresh",key:"refresh",content:"".concat(y)}),Object(a.a)("meta",{name:"apple-mobile-web-app-capable",key:"apple-mobile-web-app-capable",content:"yes"}),Object(a.a)("meta",{name:"apple-mobile-web-app-status-bar-style",key:"apple-mobile-web-app-status-bar-style",content:"blue"}),Object(a.a)("meta",{name:"apple-mobile-web-app-title",key:"apple-mobile-web-app-title",content:"With Manifest"}),O&&k&&Object(a.a)(b,{href:O,key:"apple-touch-icon",passHref:!0},Object(a.a)("link",{rel:"apple-touch-icon",key:"apple-touch-icon",sizes:k})),O&&Object(a.a)("meta",{name:"msapplication-TitleImage",key:"msapplication-TitleImage",content:"".concat(h).concat(O)}),d&&Object(a.a)("meta",{name:"msapplication-TitleColor",key:"msapplication-TitleColor",content:d}),I)},m=n("pLtp"),g=n.n(m),y=n("eVuF"),O=n.n(y),j=function(){var e={},t=function(t){var n=t.id,a=t.url,o=t.callback,i=t.attr;return function(t){var n=t.id,a=t.url,o=t.attr,i=void 0===o?{}:o,r=t.parent,c=void 0===r?document.body:r;return new O.a(function(t,o){var r=document.getElementById(n),u=function(){var r=document.createElement("script");r.src=a,r.id=n,g()(i).forEach(function(e){r.setAttribute(e,i[e])}),c.appendChild(r),r.onload=function(){return e[n]=a,t()},r.onerror=function(){return o(new Error("Error loading ".concat(a)))}};return r?r?e[n]?t():(r.parentNode.removeChild(r),u()):null:u()})}({id:n,url:a,attr:void 0===i?{}:i}).then(o)};return function(e){return O.a.all(e.map(t))}}(),k=function(e){var t=e.gapiLoaded,n=e.isSignedIn,i=e.apiKey,r=e.clientId,c=e.discoveryDocs,u=void 0===c?["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]:c,l=e.scope,s=e.updateGapiIsLoaded,p=e.updateGoogleSigninStatus,f=function(){gapi.client.init({apiKey:i,clientId:r,discoveryDocs:u,scope:l}).then(function(){gapi.auth2.getAuthInstance().isSignedIn.listen(p),s(),p(gapi.auth2.getAuthInstance().isSignedIn.get())}).catch(function(e){console.error(e)})},d=function(){gapi.load("client:auth2",f)};return Object(o.useEffect)(function(){j([{id:"gapi",url:"https://apis.google.com/js/api.js",parent:document.getElementsByTagName("head").item(0),callback:d}])},[]),Object(a.a)("div",null,t&&(n?Object(a.a)("button",{type:"button",onClick:function(){gapi.auth2.getAuthInstance().signOut()}},"Sign Out"):Object(a.a)("button",{type:"button",onClick:function(){gapi.auth2.getAuthInstance().signIn()}},"Authorize")))},w=n("7zJJ"),I=n("ln6h"),C=n.n(I),E=n("O40h"),S=n("6UnR"),U=n("x/qj"),D=function(){var e=Object(E.default)(C.a.mark(function e(){var t,n,a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)();case 2:return t=e.sent,e.next=5,t.synchronize(!1);case 5:return(n=new U.a).a=10,n.b="Hello World",a=t.getRepository(U.a),e.next=11,a.save(n);case 11:return e.abrupt("return","yes");case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),L=Object(i.b)(function(e){return{dbUrl:e.db.dbUrl}},function(e){return{createDBUrl:function(t){return e(Object(w.a)(t))},loadDb:function(t,n){return e(Object(w.b)(t,n))}}})(function(e){var t=e.dbUrl,n=e.createDBUrl,o=e.loadDb;return Object(a.a)("div",null,Object(a.a)("button",{type:"button",onClick:function(){D().then(function(){return n()})}},"Create a db"),t&&Object(a.a)("a",{href:t,download:"db.sqlite"},"db_link"),Object(a.a)("br",null),Object(a.a)("input",{type:"file",id:"input-db-file",onChange:function(e){e.target.files&&e.target.files.length&&o(e.target.files[0])}}))});n.d(t,"Page",function(){return P});var T=c()().publicRuntimeConfig,x=T.apiKey,q=T.clientId,K=T.customDomain,P=function(e){var t=e.googleDrive,n=e.updateGapiIsLoaded,o=e.updateGoogleSigninStatus;return Object(a.a)("main",null,Object(a.a)(v,{title:"Share Cost Table",themeColor:"red",customDomain:K,hrefCanonical:"/",favIconPath:"/static/icons/favicon.ico",appleIconPath:"/static/icons/icon192x192.png",hrefManifest:"/static/manifest/manifest.json"}),Object(a.a)(k,{gapiLoaded:t.gapiLoaded,isSignedIn:t.googleSignedIn,apiKey:x,clientId:q,scope:"https://www.googleapis.com/auth/drive.metadata.readonly",updateGapiIsLoaded:n,updateGoogleSigninStatus:o}),Object(a.a)(L,null))},A=Object(i.b)(function(e){return{googleDrive:e.googleDrive}},function(e){return{updateGapiIsLoaded:function(){return e(Object(w.e)())},updateGoogleSigninStatus:function(t){return e(Object(w.f)(t))}}})(P);t.default=A},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("KI45"),o=a(n("0iUn")),i=a(n("sLSF")),r=a(n("MI3g")),c=a(n("a7VT")),u=a(n("Tit0")),l=n("5Uuq"),s=n("KI45");t.__esModule=!0,t.default=void 0;var p,f=s(n("LX0d")),d=n("CxY0"),h=l(n("q1tI")),b=(s(n("17x9")),s(n("nOHt"))),v=(n("KA3u"),n("Bu4q"));function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var g=new f.default,y=window.IntersectionObserver;function O(){return p||(y?p=new y(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var j=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,r.default)(this,(0,c.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,n=null,a=null;return function(o,i){if(a&&o===t&&i===n)return a;var r=e(o,i);return t=o,n=i,a=r,r}}(function(e,t){return{href:m(e),as:t?m(t):t}}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,o=n.target;if("A"!==a||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),r=i.href,c=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(r)){var u=window.location.pathname;r=(0,d.resolve)(u,r),c=c?(0,d.resolve)(u,c):r,t.preventDefault();var l=e.props.scroll;null==l&&(l=c.indexOf("#")<0),b.default[e.props.replace?"replace":"push"](r,c,{shallow:e.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&y&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=O();return n?(n.observe(e),g.set(e,t),function(){n.unobserve(e),g.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,d.resolve)(e,t);b.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),r={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(r.href=o||a),h.default.cloneElement(i,r)}}]),t}(h.Component);j.propTypes=void 0,j.defaultProps={prefetch:!0};var k=j;t.default=k}},[["/EDR",1,0]]]);