(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(7),j=c.n(s),r=c(6),o=c(2),u=c(0);var a=function(e){var t=e.id,c=(e.userId,e.title),n=e.body,i=e.del,s=e.edit;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{className:"just",children:["Unique Id: ",t]}),Object(u.jsx)("h1",{className:"just",children:c}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{className:"just",children:n}),Object(u.jsx)("button",{onClick:i,children:"Delete"}),Object(u.jsx)("button",{onClick:s,children:"Edit"})]})};c(13);var d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(!1),j=Object(o.a)(s,2),d=j[0],l=j[1],b=Object(n.useState)(),O=Object(o.a)(b,2),h=O[0],p=O[1],x=Object(n.useState)(),f=Object(o.a)(x,2),v=f[0],m=f[1],g=Object(n.useState)(),y=Object(o.a)(g,2),I=y[0],S=y[1];Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]);var k=function(){var e=Object(r.a)(c);console.log(e[I].title),e[I].title=h,e[I].body=v,i(e),l(!1)};return Object(u.jsx)("div",{className:"grid-container",children:c.map((function(e,t){return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)(a,{id:e.id,userId:e.userId,title:e.title,body:e.body,del:function(){return function(e){console.log("Index",e);var t=Object(r.a)(c);t.splice(e,1),i(t)}(t)},edit:function(){return function(e){console.log(e),l(!0),S(e)}(t)}}),d&&I===t&&Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Edit Title"}),Object(u.jsx)("input",{onChange:function(e){return p(e.target.value)},placeholder:e.title}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"Edit Body"}),Object(u.jsx)("input",{onChange:function(e){return m(e.target.value)},placeholder:e.body}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:k,children:"update"})]})]})}))})};j.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.60fe7a61.chunk.js.map