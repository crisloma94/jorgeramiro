(this.webpackJsonpjorgeramiro=this.webpackJsonpjorgeramiro||[]).push([[0],[,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"Projects":[{"id":"prisma","data":{"name":"Prisma","mainImage":"/images/prisma/prisma-main.jpg","colection":"","sport":"","brand":"","inspo":[{"title":"Inspo","description":"","images":[{"url":"","description":""},{"url":"","description":""}]}],"sketching":{"images":[{"url":""},{"url":""}]},"prototyping":{"images":[{"url":""},{"url":""}]},"finalProduct":{"images":[{"url":""},{"url":""}]}}},{"id":"hook","data":{"name":"Hook","mainImage":"/images/hook/hook-main.png","colection":"","sport":"","brand":"","inspo":[{"title":"Inspo","description":"","images":[{"url":"","description":""},{"url":"","description":""}]}],"sketching":{"images":[{"url":""},{"url":""}]},"prototyping":{"images":[{"url":""},{"url":""}]},"finalProduct":{"images":[{"url":""},{"url":""}]}}},{"id":"modular","data":{"name":"Modular","mainImage":"/images/modular/modular-main.jpg","colection":"","sport":"","brand":"","inspo":[{"title":"Inspo","description":"","images":[{"url":"","description":""},{"url":"","description":""}]}],"sketching":{"images":[{"url":""},{"url":""}]},"prototyping":{"images":[{"url":""},{"url":""}]},"finalProduct":{"images":[{"url":""},{"url":""}]}}}]}')},,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/linkedin.8ca5fdce.svg"},function(e,a,t){e.exports=t.p+"static/media/behance.96012082.svg"},function(e,a,t){e.exports=t.p+"static/media/instagram.716b1787.svg"},function(e,a,t){e.exports=t.p+"static/media/rrss.f6f21b50.svg"},function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),i=t.n(c),o=(t(32),t(33),t(10)),l=t(14),s=(t(34),function(e){var a=Object(n.useState)(0),t=Object(o.a)(a,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){i(c+.5)}),500);return c>4&&clearInterval(e),function(){return clearInterval(e)}}),[c]),r.a.createElement("section",{className:"hero-presentation"},r.a.createElement("div",{className:"hero-title"},r.a.createElement("h1",{className:"".concat(c<=.5?"animate":"invisible")},"Jorge"),r.a.createElement("h1",{className:"".concat(c>=1?"animate":"invisible")},"Ramiro")),r.a.createElement("div",{className:"scroll-warning"},r.a.createElement("div",{className:"scroll-indicator ".concat(c>=2?"animate":"invisible")},r.a.createElement("div",{className:"".concat(c>=2?"scroll-border":"")})),r.a.createElement("p",{className:"scroll-text ".concat(c>=3?"animate":"invisible")},"Scroll down")))}),m=t(5),u=(t(35),function(e){var a=e.projects,t=Object(n.useState)(0),c=Object(o.a)(t,2),i=c[0],l=c[1],s=Object(n.useCallback)((function(e){e.deltaY>2?i+1>=0&&i+1<a.length&&l(i+1):e.deltaY<-2&&i-1>=0&&i-1<a.length&&l(i-1)}),[i,a.length]);return Object(n.useEffect)((function(){return window.addEventListener("wheel",s),function(){return window.removeEventListener("wheel",s)}}),[s]),r.a.createElement("section",{id:"project-selector"},r.a.createElement("ul",{className:"project-list"},a.map((function(e,a){return r.a.createElement("li",{key:e.id,className:"project-link ".concat(i===a?"active":""," ").concat(i===a+2||i===a-2?"last":"")},r.a.createElement(m.b,{to:"/projects/".concat(e.id)},"".concat((a+1).toString().padStart(2,"0"),"_").concat(e.data.name)),r.a.createElement("img",{src:"".concat(".").concat(e.data.mainImage),alt:e.data.name}))}))))}),d=(t(41),function(){var e=l.Projects,a=Object(n.useState)("ready"),t=Object(o.a)(a,2),c=t[0],i=t[1],m=Object(n.useCallback)((function(e){if(e.deltaY>1&&"ready"===c){i("running");var a=setTimeout((function(){return i("hidden")}),1e3);return function(){clearTimeout(a)}}}),[c]);return Object(n.useEffect)((function(){var e=setTimeout((function(){window.addEventListener("wheel",m)}),4e3);return function(){clearTimeout(e),window.removeEventListener("wheel",m)}}),[m]),r.a.createElement(r.a.Fragment,null,"hidden"!==c&&r.a.createElement("div",{className:"presentation ".concat(c)},r.a.createElement(s,null)),"hidden"===c&&r.a.createElement("div",{className:"container ".concat("ready"===c||"running"===c?"invisible":"")},r.a.createElement(u,{projects:e})))}),p=t(8),g=t(9),f=t(11),v=t(12),E=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"About")}}]),t}(n.Component),b=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(g.a)(t,[{key:"render",value:function(){var e=this,a=l.Projects.filter((function(a){return a.id===e.props.match.params.id}));return a=a[0],r.a.createElement("h1",null,"Project ",a.data.name)}}]),t}(n.Component),h=(t(42),t(23)),j=t.n(h),w=t(24),k=t.n(w),N=t(25),O=t.n(N),y=t(26),I=t.n(y),x=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar",role:"navigation"},r.a.createElement("ul",{className:"navbar-navigation"},r.a.createElement("li",null,r.a.createElement(m.b,{className:"navlink",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{className:"navlink",to:"/"},"Contact")),r.a.createElement("li",null,r.a.createElement(m.b,{className:"navlink",to:"/about"},"About"))),r.a.createElement("ul",{className:"navbar-socialmedia"},r.a.createElement("li",{className:"dropdown dropdown-top dropdown-mobile dropdown-tablet"},r.a.createElement("a",{className:"socialmedia-dropdown",href:"#"},r.a.createElement("img",{src:I.a,alt:"social media icon"})),r.a.createElement("ul",{className:"socialmedia-links"},r.a.createElement("li",{className:"navicon"},r.a.createElement("a",{href:"https://es.linkedin.com/in/jorgeramiro",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:j.a,alt:"linkedin icon"}))),r.a.createElement("li",{className:"navicon"},r.a.createElement("a",{href:"https://www.behance.net/JorgeRamiro",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:k.a,alt:"behance icon"}))),r.a.createElement("li",{className:"navicon"},r.a.createElement("a",{href:"https://www.instagram.com/ramiro.jorge/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:O.a,alt:"instagram icon"})))))))}}]),t}(n.Component),P=t(6);var S=function(){return r.a.createElement(m.a,null,r.a.createElement(x,null),r.a.createElement(P.c,null,r.a.createElement(P.a,{path:"/",exact:!0,component:d}),r.a.createElement(P.a,{path:"/about",exact:!0,component:E}),r.a.createElement(P.a,{path:"/projects/:id",component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.2139a144.chunk.js.map