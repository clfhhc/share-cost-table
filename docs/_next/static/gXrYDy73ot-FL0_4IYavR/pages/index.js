(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("23aj");return{page:e.default||e}}])},"23aj":function(e,t,n){"use strict";n.r(t);var a=n("qKvR"),o=n("q1tI"),r=n("/MKj"),i=n("HohS"),c=n.n(i),u=n("m/Pd"),l=n.n(u),s=n("kOwS"),p=n("qNsG"),f=n("YFqc"),d=n.n(f),h=c()().publicRuntimeConfig,b=h.customDomain,v=void 0===b?"":b,m=h.linkPrefix,g=function(e){var t=e.href,n=e.as,o=void 0===n?t:n,r=Object(p.a)(e,["href","as"]);return Object(a.a)(d.a,Object(s.a)({href:t,as:"".concat(v).concat(m).concat(o)},r))},y=function(e){var t=e.title,n=void 0===t?"":t,o=e.description,r=void 0===o?n:o,i=e.charset,c=void 0===i?"utf-8":i,u=e.hrefCanonical,s=e.hrefManifest,p=e.themeColor,f=e.favIconPath,d=e.keywords,h=void 0===d?n:d,b=e.refresh,v=e.appleIconPath,y=e.appleIconSize,O=void 0===y?"192x192":y,j=e.isAmp,k=e.children;return Object(a.a)(l.a,null,Object(a.a)("title",{key:"title"},n),Object(a.a)("meta",{charSet:c,key:"charSet"}),Object(a.a)("meta",{name:"description",key:"description",content:r}),p&&Object(a.a)("meta",{name:"theme-color",key:"theme-color",content:p}),s&&Object(a.a)(g,{href:s,key:"manifest",passHref:!0},Object(a.a)("link",{key:"manifest",rel:"preload",as:"manifest"})),!j&&u&&Object(a.a)(g,{href:u,key:"canonical",passHref:!0},Object(a.a)("link",{key:"canonical",rel:"canonical"})),f&&Object(a.a)(g,{href:f,key:"fav-icon",passHref:!0},Object(a.a)("link",{rel:"preload",as:"shortcut icon",key:"fav-icon",type:"image/x-icon"})),Object(a.a)("meta",{name:"keywords",key:"keywords",content:h}),Object(a.a)("meta",{httpEquiv:"X-UA-Compatible",key:"ua-compatible",content:"ie=edge"}),b&&Object(a.a)("meta",{httpEquiv:"refresh",key:"refresh",content:"".concat(b)}),Object(a.a)("meta",{name:"apple-mobile-web-app-capable",key:"apple-mobile-web-app-capable",content:"yes"}),Object(a.a)("meta",{name:"apple-mobile-web-app-status-bar-style",key:"apple-mobile-web-app-status-bar-style",content:"blue"}),Object(a.a)("meta",{name:"apple-mobile-web-app-title",key:"apple-mobile-web-app-title",content:"With Manifest"}),v&&O&&Object(a.a)(g,{href:v,key:"apple-touch-icon",passHref:!0},Object(a.a)("link",{rel:"apple-touch-icon",key:"apple-touch-icon",sizes:O})),v&&Object(a.a)("meta",{name:"msapplication-TitleImage",key:"msapplication-TitleImage",content:"".concat(m).concat(v)}),p&&Object(a.a)("meta",{name:"msapplication-TitleColor",key:"msapplication-TitleColor",content:p}),k)},O=n("pLtp"),j=n.n(O),k=n("eVuF"),w=n.n(k),I=function(){var e={},t=function(t){var n=t.id,a=t.url,o=t.callback,r=t.attr;return function(t){var n=t.id,a=t.url,o=t.attr,r=void 0===o?{}:o,i=t.parent,c=void 0===i?document.body:i;return new w.a(function(t,o){var i=document.getElementById(n),u=function(){var i=document.createElement("script");i.src=a,i.id=n,j()(r).forEach(function(e){i.setAttribute(e,r[e])}),c.appendChild(i),i.onload=function(){return e[n]=a,t()},i.onerror=function(){return o(new Error("Error loading ".concat(a)))}};return i?i?e[n]?t():(i.parentNode.removeChild(i),u()):null:u()})}({id:n,url:a,attr:void 0===r?{}:r}).then(o)};return function(e){return w.a.all(e.map(t))}}(),C=function(e){var t=e.gapiLoaded,n=e.isSignedIn,r=e.apiKey,i=e.clientId,c=e.discoveryDocs,u=void 0===c?["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]:c,l=e.scope,s=e.updateGapiIsLoaded,p=e.updateGoogleSigninStatus,f=function(){gapi.client.init({apiKey:r,clientId:i,discoveryDocs:u,scope:l}).then(function(){gapi.auth2.getAuthInstance().isSignedIn.listen(p),s(),p(gapi.auth2.getAuthInstance().isSignedIn.get())}).catch(function(e){console.error(e)})},d=function(){gapi.load("client:auth2",f)};return Object(o.useEffect)(function(){I([{id:"gapi",url:"https://apis.google.com/js/api.js",parent:document.getElementsByTagName("head").item(0),callback:d}])},[]),Object(a.a)("div",null,t&&(n?Object(a.a)("button",{type:"button",onClick:function(){gapi.auth2.getAuthInstance().signOut()}},"Sign Out"):Object(a.a)("button",{type:"button",onClick:function(){gapi.auth2.getAuthInstance().signIn()}},"Authorize")))},E=n("7zJJ"),S=n("ln6h"),U=n.n(S),L=n("O40h"),T=n("6UnR"),x=n("x/qj"),D=function(){var e=Object(L.default)(U.a.mark(function e(){var t,n,a;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)();case 2:return t=e.sent,e.next=5,t.synchronize(!1);case 5:return(n=new x.a).a=10,n.b="Hello World",a=t.getRepository(x.a),e.next=11,a.save(n);case 11:return e.abrupt("return","yes");case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),q=Object(r.b)(function(e){return{dbUrl:e.db.dbUrl}},function(e){return{createDBUrl:function(t){return e(Object(E.a)(t))},loadDb:function(t,n){return e(Object(E.b)(t,n))}}})(function(e){var t=e.dbUrl,n=e.createDBUrl,o=e.loadDb;return Object(a.a)("div",null,Object(a.a)("button",{type:"button",onClick:function(){D().then(function(){return n()})}},"Create a db"),t&&Object(a.a)("a",{href:t,download:"db.sqlite"},"db_link"),Object(a.a)("br",null),Object(a.a)("input",{type:"file",id:"input-db-file",onChange:function(e){e.target.files&&e.target.files.length&&o(e.target.files[0])}}))});n.d(t,"Page",function(){return M});var K=c()().publicRuntimeConfig,P=K.apiKey,A=K.clientId,M=function(e){var t=e.googleDrive,n=e.updateGapiIsLoaded,o=e.updateGoogleSigninStatus;return Object(a.a)("main",null,Object(a.a)(y,{title:"Share Cost Table",themeColor:"red",hrefCanonical:"/",favIconPath:"/static/icons/favicon.ico",appleIconPath:"/static/icons/icon192x192.png",hrefManifest:"/static/manifest/manifest.json"}),Object(a.a)(C,{gapiLoaded:t.gapiLoaded,isSignedIn:t.googleSignedIn,apiKey:P,clientId:A,scope:"https://www.googleapis.com/auth/drive.metadata.readonly",updateGapiIsLoaded:n,updateGoogleSigninStatus:o}),Object(a.a)(q,null))},R=Object(r.b)(function(e){return{googleDrive:e.googleDrive}},function(e){return{updateGapiIsLoaded:function(){return e(Object(E.e)())},updateGoogleSigninStatus:function(t){return e(Object(E.f)(t))}}})(M);t.default=R},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("KI45"),o=a(n("0iUn")),r=a(n("sLSF")),i=a(n("MI3g")),c=a(n("a7VT")),u=a(n("Tit0")),l=n("5Uuq"),s=n("KI45");t.__esModule=!0,t.default=void 0;var p,f=s(n("LX0d")),d=n("CxY0"),h=l(n("q1tI")),b=(s(n("17x9")),s(n("nOHt"))),v=(n("KA3u"),n("Bu4q"));function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var g=new f.default,y=window.IntersectionObserver;function O(){return p||(y?p=new y(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var j=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,i.default)(this,(0,c.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,n=null,a=null;return function(o,r){if(a&&o===t&&r===n)return a;var i=e(o,r);return t=o,n=r,a=i,i}}(function(e,t){return{href:m(e),as:t?m(t):t}}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,o=n.target;if("A"!==a||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var r=e.formatUrls(e.props.href,e.props.as),i=r.href,c=r.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var u=window.location.pathname;i=(0,d.resolve)(u,i),c=c?(0,d.resolve)(u,c):i,t.preventDefault();var l=e.props.scroll;null==l&&(l=c.indexOf("#")<0),b.default[e.props.replace?"replace":"push"](i,c,{shallow:e.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},e}return(0,u.default)(t,e),(0,r.default)(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&y&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=O();return n?(n.observe(e),g.set(e,t),function(){n.unobserve(e),g.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,d.resolve)(e,t);b.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var r=h.Children.only(t),i={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),e.prefetch()},onClick:function(t){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(i.href=o||a),h.default.cloneElement(r,i)}}]),t}(h.Component);j.propTypes=void 0,j.defaultProps={prefetch:!0};var k=j;t.default=k}},[["/EDR",1,0]]]);