(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(52)},28:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(7),i=a.n(r),c=(a(28),a(5)),l=a(6),s=a(21);function d(e){return{type:"FETCH_AIRPORTS",payload:e}}var u=a(20),m=a.n(u);a(51);var p=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(o.useState)({}),u=Object(c.a)(i,2),p=u[0],f=u[1],h=Object(o.useState)(!1),w=Object(c.a)(h,2),y=w[0],E=w[1],b=Object(o.useState)(!0),g=Object(c.a)(b,2),v=g[0],O=g[1],C=Object(o.useState)(!1),j=Object(c.a)(C,2),S=j[0],L=j[1],_=Object(l.c)(function(e){return e.fetchAPI}),T=Object(l.b)();Object(o.useEffect)(function(){_.data?A():k(),void 0!==p.city&&R()});var k=function(){T(function(e){m.a.get("https://argodeep.github.io/React-Redux-Hooks-with-axios-redux-thunk/master/public/airport.json").then(function(t){e(d(t.data))}).catch(function(t){e(d([]))})})},A=function(){O(!1)},R=function(){document.title="Searched Airport - ".concat(p.airport)},N=Object(s.a)(500,function(e){var t=_.data;e.length>1?(r(t.filter(function(t){return t.airport.toLowerCase().includes(e.toLowerCase())||t.city.toLowerCase().includes(e.toLowerCase())||t.iata.toLowerCase().includes(e.toLowerCase())})),E(!0)):1===e.length?(r(t.filter(function(t){return t.airport.charAt(0).toLowerCase()===e.toLowerCase()||t.city.charAt(0).toLowerCase()===e.toLowerCase()||t.iata.charAt(0).toLowerCase()===e.toLowerCase()})),E(!0)):0===e.length&&(r([]),E(!1),L(!1))});return n.a.createElement("div",{style:{outline:"none",border:0}},!1===v&&n.a.createElement("div",{style:{outline:"none",border:0}},n.a.createElement("div",{style:{width:"100%",display:"block"}},n.a.createElement("input",{type:"text",placeholder:"Enter Airport Name, Code or City Name",className:"Search",onChange:function(e){return function(e){var t=e.target.value.trim().toLowerCase();N(t)}(e)}})),n.a.createElement("div",{className:"Gap"}),n.a.createElement("h5",{style:{marginTop:10,marginBottom:10,fontSize:15,color:"#f0ad4e",textAlign:"center"}},!0===y&&"Search Results",!0===S&&"Selected Airport"),!0===S&&n.a.createElement("div",{className:"Results"},n.a.createElement("div",{style:{marginTop:0,padding:10},onClick:function(){return L(!0)}},n.a.createElement("div",{style:{width:"100%",display:"block"}},n.a.createElement("span",{style:{fontWeight:"bold"}},p.city),n.a.createElement("span",{style:{float:"right"}},p.iata)),n.a.createElement("p",{style:{marginTop:5,marginBottom:0,paddingBottom:5,color:"#777",borderBottom:"0.5px solid #9997"}},p.airport))),!1===S&&!0===y&&a.map(function(e,t){return n.a.createElement("div",{className:"Results",key:t},n.a.createElement("div",{style:{marginTop:0,padding:10},id:"Select",onClick:function(){return function(e){L(!0),E(!1),f({airport:e.airport,city:e.city,iata:e.iata})}(e)}},n.a.createElement("div",{style:{width:"100%",display:"block"}},n.a.createElement("span",{style:{fontWeight:"bold"}},e.city),n.a.createElement("span",{style:{float:"right"}},e.iata)),n.a.createElement("p",{style:{marginTop:5,marginBottom:0,paddingBottom:5,color:"#777",borderBottom:"0.5px solid #9997"}},e.airport)))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(3),h=Object(f.c)({fetchAPI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_AIRPORTS":return t.payload;default:return e}}}),w=a(22),y=Object(f.d)(h,Object(f.a)(w.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(n.a.createElement(l.a,{store:y},n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.bb70fe56.chunk.js.map