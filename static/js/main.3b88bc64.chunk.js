(this.webpackJsonpjorgeramiro=this.webpackJsonpjorgeramiro||[]).push([[0],[,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"Projects":[{"id":"prisma","data":{"name":"Prisma","mainImage":"/images/prisma/prisma-main.jpg","colection":"","sport":"","brand":"","inspo":[{"title":"Inspo","description":"","images":[{"url":"","description":""},{"url":"","description":""}]}],"sketching":{"images":[{"url":""},{"url":""}]},"prototyping":{"images":[{"url":""},{"url":""}]},"finalProduct":{"images":[{"url":""},{"url":""}]}}},{"id":"hook","data":{"name":"Hook","mainImage":"/images/hook/hook-main.png","colection":"","sport":"","brand":"","inspo":[{"title":"Inspo","description":"","images":[{"url":"","description":""},{"url":"","description":""}]}],"sketching":{"images":[{"url":""},{"url":""}]},"prototyping":{"images":[{"url":""},{"url":""}]},"finalProduct":{"images":[{"url":""},{"url":""}]}}},{"id":"modular","data":{"name":"Modular","mainImage":"/images/modular/modular-main.jpg","colection":"","sport":"","brand":"","inspo":[{"title":"Inspo","description":"","images":[{"url":"","description":""},{"url":"","description":""}]}],"sketching":{"images":[{"url":""},{"url":""}]},"prototyping":{"images":[{"url":""},{"url":""}]},"finalProduct":{"images":[{"url":""},{"url":""}]}}}]}')},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/linkedin.8ca5fdce.svg"},function(e,t,a){e.exports=a.p+"static/media/behance.96012082.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram.716b1787.svg"},function(e,t,a){e.exports=a.p+"static/media/rrss.f6f21b50.svg"},function(e,t,a){e.exports=a(43)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=(a(32),a(33),a(7)),l=a(14),s=(a(34),function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){console.log("useeffect");var e=setInterval((function(){o(c+.5)}),500);return c>3&&clearInterval(e),function(){return clearInterval(e)}}),[c]),r.a.createElement("section",{className:"hero-presentation"},r.a.createElement("div",{className:"hero-title"},r.a.createElement("h1",{className:"".concat(c<=1.5?"animate":"invisible")},"Jorge"),r.a.createElement("h1",{className:"".concat(c>=1.5?"animate":"invisible")},"Ramiro")),r.a.createElement("h2",{className:"hero-subtitle ".concat(c>=2?"animate":"invisible")},"Footwear designer"))}),m=a(5),u=(a(35),function(e){var t=e.projects,a=Object(n.useRef)(),c=Object(n.useState)(0),o=Object(i.a)(c,2),l=o[0],s=o[1],u=Object(n.useState)(document.body.getBoundingClientRect().y),d=Object(i.a)(u,2),p=d[0],g=d[1],f=Object(n.useCallback)((function(){var e=document.body.getBoundingClientRect().y,n=a.current.getBoundingClientRect();n.y<0&&n.y>-n.height/2&&(p-e>30?(l+1>=0&&l+1<t.length&&s(l+1),g(e)):p-e<-30&&(l-1>=0&&l-1<t.length&&s(l-1),g(e)))}),[l,p,t.length]);return Object(n.useEffect)((function(){return window.addEventListener("scroll",f),function(){return window.removeEventListener("scroll",f)}}),[f]),r.a.createElement("section",{id:"project-selector",ref:a},r.a.createElement("ul",{className:"project-list"},t.map((function(e,t){return r.a.createElement("li",{key:e.id,className:"project-link ".concat(l===t?"active":""," ").concat(l===t+2||l===t-2?"last":"")},r.a.createElement(m.b,{to:"/projects/".concat(e.id)},"".concat((t+1).toString().padStart(2,"0"),"_").concat(e.data.name)),r.a.createElement("img",{src:"".concat(".").concat(e.data.mainImage),alt:e.data.name}))}))))}),d=(a(41),function(){var e=l.Projects,t=document.body.getBoundingClientRect().y,a=Object(n.useState)("ready"),c=Object(i.a)(a,2),o=c[0],m=c[1],d=Object(n.useCallback)((function(){var e=document.body.getBoundingClientRect().y;if(t-e>1&&"ready"===o){m("running");var a=setTimeout((function(){return m("hidden")}),1e3);return function(){clearTimeout(a)}}}),[o,t]);return Object(n.useEffect)((function(){return window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}}),[d]),r.a.createElement(r.a.Fragment,null,"hidden"!==o&&r.a.createElement("div",{className:"presentation ".concat(o)},r.a.createElement(s,null)),r.a.createElement("div",{className:"container ".concat("ready"===o||"running"===o?"invisible":"")},r.a.createElement(u,{projects:e})))}),p=a(9),g=a(10),f=a(11),b=a(12),v=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"About")}}]),a}(n.Component),E=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this,t=l.Projects.filter((function(t){return t.id===e.props.match.params.id}));return t=t[0],r.a.createElement("h1",null,"Project ",t.data.name)}}]),a}(n.Component),h=(a(42),a(23)),j=a.n(h),w=a(24),k=a.n(w),y=a(25),O=a.n(y),N=a(26),C=a.n(N),I=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar",role:"navigation"},r.a.createElement("ul",{className:"navbar-navigation"},r.a.createElement("li",null,r.a.createElement(m.b,{className:"navlink",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{className:"navlink",to:"/"},"Contact")),r.a.createElement("li",null,r.a.createElement(m.b,{className:"navlink",to:"/about"},"About"))),r.a.createElement("ul",{className:"navbar-socialmedia"},r.a.createElement("li",{className:"dropdown dropdown-top dropdown-mobile dropdown-tablet"},r.a.createElement("a",{className:"socialmedia-dropdown",href:"#"},r.a.createElement("img",{src:C.a,alt:"social media icon"})),r.a.createElement("ul",{className:"socialmedia-links"},r.a.createElement("li",{className:"navicon"},r.a.createElement("a",{href:"https://es.linkedin.com/in/jorgeramiro",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:j.a,alt:"linkedin icon"}))),r.a.createElement("li",{className:"navicon"},r.a.createElement("a",{href:"https://www.behance.net/JorgeRamiro",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:k.a,alt:"behance icon"}))),r.a.createElement("li",{className:"navicon"},r.a.createElement("a",{href:"https://www.instagram.com/ramiro.jorge/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:O.a,alt:"instagram icon"})))))))}}]),a}(n.Component),x=a(6);var P=function(){return r.a.createElement(m.a,null,r.a.createElement(I,null),r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/",exact:!0,component:d}),r.a.createElement(x.a,{path:"/about",exact:!0,component:v}),r.a.createElement(x.a,{path:"/projects/:id",component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.3b88bc64.chunk.js.map