(this.webpackJsonpdropdown=this.webpackJsonpdropdown||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),o=n(7),u=n.n(o),a=n(2),i=n(5),l=n(0),b=function(){var t=Object(r.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)(null),u=Object(i.a)(o,2),b=u[0],f=u[1],s=Object(r.useState)([]),p=Object(i.a)(s,2),j=p[0],g=p[1],O=Object(r.useRef)(j),d=function(t){g(Object(a.a)(O.current))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("form",{onSubmit:function(t){t.preventDefault(),""!==n?(g((function(t){return[].concat(Object(a.a)(t),[{color:n}])})),c("")):alert("\uc0c9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694")},children:Object(l.jsx)("input",{type:"text",value:n,onChange:function(t){return c(t.target.value)},placeholder:"\uc0c9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})}),Object(l.jsx)("section",{style:{marginTop:"20px"},children:[].concat(Object(a.a)(j),[{color:"transparent"}]).map((function(t,e){return Object(l.jsx)("div",{draggable:!0,style:{display:"inline-block",background:t.color,width:"50px",height:"50px",marginRight:"20px"},onDragStart:function(t){return function(t,e){f(t)}(e)},onDragOver:function(t){t.stopPropagation(),t.preventDefault()},onDrop:function(t){return function(t,e){var n,r;"number"===typeof b&&b>=e?(n=j[b+1],(r=j.filter((function(t,e){return e!==("number"===typeof b?b:0)+1})))[e]=n,O.current=r,g(r),f(null)):"number"===typeof b&&(n=j[b],(r=j.filter((function(t,e){return e!==("number"===typeof b?b:0)&&void 0!==t})))[e]=n,r.length>O.current.length&&(r=r.filter((function(t,e){return e!==r.length-2}))),O.current=r,g(r),f(null))}(0,e)},onDragEnter:function(t){return function(t,e){g((function(e){return O.current=e,"number"===typeof b&&t<b?[].concat(Object(a.a)(e.slice(0,t)),[{color:"transparent"}],Object(a.a)(e.slice(t))):"number"===typeof b&&t>b?[].concat(Object(a.a)(e.slice(0,t+1)),[{color:"transparent"}],Object(a.a)(e.slice(t+1))):e}))}(e)},onDragLeave:d})}))})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,u=e.getTTFB;n(t),r(t),c(t),o(t),u(t)}))};u.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.b07dedca.chunk.js.map