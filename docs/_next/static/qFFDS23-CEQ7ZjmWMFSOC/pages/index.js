(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("23aj");return{page:e.default||e}}])},"23aj":function(e,t,n){"use strict";n.r(t);var a=n("qKvR"),o=n("q1tI"),i=n("/MKj"),r=n("HohS"),c=n.n(r),p=n("m/Pd"),s=n.n(p),l=n("kOwS"),u=n("qNsG"),f=n("YFqc"),d=n.n(f),h=c()().publicRuntimeConfig.linkPrefix,v=function(e){var t=e.href,n=e.as,o=void 0===n?t:n,i=Object(u.a)(e,["href","as"]);return Object(a.a)(d.a,Object(l.a)({href:t,as:"".concat(h).concat(o)},i))},m=function(e){var t=e.title,n=void 0===t?"":t,o=e.description,i=void 0===o?n:o,r=e.charset,c=void 0===r?"utf-8":r,p=e.hrefCanonical,l=e.hrefManifest,u=e.themeColor,f=e.favIconPath,d=e.keywords,m=void 0===d?n:d,g=e.refresh,b=e.appleIconPath,y=e.appleIconSize,k=void 0===y?"192x192":y,O=e.isAmp,w=e.children;return Object(a.a)(s.a,null,Object(a.a)("title",{key:"title"},n),Object(a.a)("meta",{charSet:c,key:"charSet"}),Object(a.a)("meta",{name:"description",key:"description",content:i}),u&&Object(a.a)("meta",{name:"theme-color",key:"theme-color",content:u}),l&&Object(a.a)(v,{href:l,key:"manifest",passHref:!0},Object(a.a)("link",{key:"manifest",rel:"manifest"})),!O&&p&&Object(a.a)(v,{href:p,key:"canonical",passHref:!0},Object(a.a)("link",{key:"canonical",rel:"canonical"})),f&&Object(a.a)(v,{href:f,key:"fav-icon",passHref:!0},Object(a.a)("link",{rel:"shortcut icon",key:"fav-icon",type:"image/x-icon"})),Object(a.a)("meta",{name:"keywords",key:"keywords",content:m}),Object(a.a)("meta",{httpEquiv:"X-UA-Compatible",key:"ua-compatible",content:"ie=edge"}),g&&Object(a.a)("meta",{httpEquiv:"refresh",key:"refresh",content:"".concat(g)}),Object(a.a)("meta",{name:"apple-mobile-web-app-capable",key:"apple-mobile-web-app-capable",content:"yes"}),Object(a.a)("meta",{name:"apple-mobile-web-app-status-bar-style",key:"apple-mobile-web-app-status-bar-style",content:"blue"}),Object(a.a)("meta",{name:"apple-mobile-web-app-title",key:"apple-mobile-web-app-title",content:"With Manifest"}),b&&k&&Object(a.a)(v,{href:b,key:"apple-touch-icon",passHref:!0},Object(a.a)("link",{rel:"apple-touch-icon",key:"apple-touch-icon",sizes:k})),b&&Object(a.a)("meta",{name:"msapplication-TitleImage",key:"msapplication-TitleImage",content:"".concat(h).concat(b)}),u&&Object(a.a)("meta",{name:"msapplication-TitleColor",key:"msapplication-TitleColor",content:u}),w)},g=n("pLtp"),b=n.n(g),y=n("eVuF"),k=n.n(y),O=function(){var e={},t=function(t){var n=t.id,a=t.url,o=t.callback,i=t.attr;return function(t){var n=t.id,a=t.url,o=t.attr,i=void 0===o?{}:o,r=t.parent,c=void 0===r?document.body:r;return new k.a(function(t,o){var r=document.getElementById(n),p=function(){var r=document.createElement("script");r.src=a,r.id=n,b()(i).forEach(function(e){r.setAttribute(e,i[e])}),c.appendChild(r),r.onload=function(){return e[n]=a,t()},r.onerror=function(){return o(new Error("Error loading ".concat(a)))}};return r?r?e[n]?t():(r.parentNode.removeChild(r),p()):null:p()})}({id:n,url:a,attr:void 0===i?{}:i}).then(o)};return function(e){return k.a.all(e.map(t))}}(),w=function(e){var t=e.gapiLoaded,n=e.isSignedIn,i=e.apiKey,r=e.clientId,c=e.discoveryDocs,p=void 0===c?["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]:c,s=e.scope,l=e.updateGapiIsLoaded,u=e.updateGoogleSigninStatus,f=function(){gapi.client.init({apiKey:i,clientId:r,discoveryDocs:p,scope:s}).then(function(){gapi.auth2.getAuthInstance().isSignedIn.listen(u),l(),u(gapi.auth2.getAuthInstance().isSignedIn.get())}).catch(function(e){console.error(e)})},d=function(){gapi.load("client:auth2",f)};return Object(o.useEffect)(function(){O([{id:"gapi",url:"https://apis.google.com/js/api.js",parent:document.getElementsByTagName("head").item(0),callback:d}])},[]),Object(a.a)("div",null,t&&(n?Object(a.a)("button",{type:"button",onClick:function(){gapi.auth2.getAuthInstance().signOut()}},"Sign Out"):Object(a.a)("button",{type:"button",onClick:function(){gapi.auth2.getAuthInstance().signIn()}},"Authorize")))},j=n("sLDa");n.d(t,"Page",function(){return C});var I=c()().publicRuntimeConfig,E=I.apiKey,S=I.clientId,C=function(e){var t=e.googleDrive,n=e.updateGapiIsLoaded,o=e.updateGoogleSigninStatus;return Object(a.a)("main",null,Object(a.a)(m,{title:"Nextjs Typescript Eslint",themeColor:"red",hrefCanonical:"/",favIconPath:"/static/icons/favicon.ico",appleIconPath:"/static/icons/icon192x192.png",hrefManifest:"/static/manifest/manifest.json"}),Object(a.a)(w,{gapiLoaded:t.gapiLoaded,isSignedIn:t.googleSignedIn,apiKey:E,clientId:S,scope:"https://www.googleapis.com/auth/drive.metadata.readonly",updateGapiIsLoaded:n,updateGoogleSigninStatus:o}))},L=Object(i.b)(function(e){return{googleDrive:e.googleDrive}},function(e){return{updateGapiIsLoaded:function(){return e({type:j.a.UPDATE_GAPI_IS_LOADED,payload:!0})},updateGoogleSigninStatus:function(t){return e(function(e){return{type:j.a.UPDATE_GOOGLE_SIGNED_IN,payload:e}}(t))}}})(C);t.default=L},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("KI45"),o=a(n("0iUn")),i=a(n("sLSF")),r=a(n("MI3g")),c=a(n("a7VT")),p=a(n("Tit0")),s=n("5Uuq"),l=n("KI45");t.__esModule=!0,t.default=void 0;var u,f=l(n("LX0d")),d=n("CxY0"),h=s(n("q1tI")),v=(l(n("17x9")),l(n("nOHt"))),m=(n("KA3u"),n("Bu4q"));function g(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var b=new f.default,y=window.IntersectionObserver;function k(){return u||(y?u=new y(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var O=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,r.default)(this,(0,c.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,n=null,a=null;return function(o,i){if(a&&o===t&&i===n)return a;var r=e(o,i);return t=o,n=i,a=r,r}}(function(e,t){return{href:g(e),as:t?g(t):t}}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,o=n.target;if("A"!==a||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),r=i.href,c=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(r)){var p=window.location.pathname;r=(0,d.resolve)(p,r),c=c?(0,d.resolve)(p,c):r,t.preventDefault();var s=e.props.scroll;null==s&&(s=c.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](r,c,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})}}},e}return(0,p.default)(t,e),(0,i.default)(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&y&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),b.set(e,t),function(){n.unobserve(e),b.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,d.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),r={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(r.href=o||a),h.default.cloneElement(i,r)}}]),t}(h.Component);O.propTypes=void 0,O.defaultProps={prefetch:!0};var w=O;t.default=w}},[["/EDR",1,0]]]);