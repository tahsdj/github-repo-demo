(this["webpackJsonpgithub-repo-infinite-scroll"]=this["webpackJsonpgithub-repo-infinite-scroll"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(4),r=n.n(o),i=n(2),s=n(1);n(10),n(11);var u=function(e){var t=e.title,n=e.description,c=e.url;return a.a.createElement("div",{className:"repo"},a.a.createElement("h2",{className:"title"},t),a.a.createElement("p",{className:"description"},n),a.a.createElement("a",{className:"link",href:c,target:"_blank"},c))},l=function(e){var t=Object(c.useState)(e.repos),n=Object(s.a)(t,2),a=n[0],o=n[1],r=Object(c.useState)(e.page),u=Object(s.a)(r,2),l=u[0],p=u[1],h=Object(c.useState)(e.isFetching),f=Object(s.a)(h,2),g=f[0],m=f[1],d=Object(c.useState)(!1),b=Object(s.a)(d,2),j=b[0],v=b[1];function O(){var e=document.body.scrollHeight,t=document.body.clientHeight;window.scrollY+t>=e-50&&!g&&(m(!0),fetch("https://api.github.com/users/tahsdj/repos?page=".concat(l,"&per_page=10")).then((function(e){return e.json()})).then((function(e){0===e.length?v(!0):(p((function(e){return e+1})),o((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))}))),m(!1)})).catch((function(e){console.log(e),m(!1)})))}return Object(c.useEffect)((function(){return j||window.addEventListener("scroll",O),function(){return window.removeEventListener("scroll",O)}}),[a,l,g,j]),[{repos:a,page:l,isFetching:g},{setRepos:o,setPage:p,setFetchingStatus:m}]},p={repos:[],page:1,isFetching:!1};var h=function(){var e=l(p),t=Object(s.a)(e,2),n=t[0],o=t[1],r=n.repos,h=n.page,f=n.isFetching,g=o.setRepos,m=o.setPage,d=o.setFetchingStatus;return Object(c.useEffect)((function(){d(!0),fetch("https://api.github.com/users/tahsdj/repos?page=".concat(h,"&per_page=10")).then((function(e){return e.json()})).then((function(e){g((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))})),m((function(e){return e+1})),d(!1)})).catch((function(e){console.log(e),d(!1)}))}),[]),a.a.createElement("div",{className:"App"},r.map((function(e,t){return a.a.createElement(u,{key:"repo-".concat(t),title:e.name,description:e.description,url:e.svn_url})})),f&&a.a.createElement("div",{className:"msg"},"fetching..."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.ca1a1e62.chunk.js.map