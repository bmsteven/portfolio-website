(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[8],{39:function(e,c,s){"use strict";c.a=[{id:1,name:"Home",path:"/home"},{id:2,name:"About",path:"/about"},{id:3,name:"Resume",path:"/resume"},{id:4,name:"Portfolio",path:"/portfolio"},{id:5,name:"Contact",path:"/contact"}]},40:function(e,c,s){"use strict";var t=s(2);c.a=function(e){var c=e.children;return Object(t.jsx)("footer",{children:Object(t.jsxs)("div",{className:"container",children:[c,Object(t.jsx)("span",{children:"\xa9 bm dev"})]})})}},41:function(e,c,s){"use strict";var t=s(10),n=s(1),a=s(4),i=s(16),o=s(48),r=s(49),l=s(17),d=s.p+"static/media/logo.01c6b3f0.png",j=s.p+"static/media/logo-dark.1d8dd029.png",h=s(11),b=s(2);c.a=function(e){var c=e.routes,s=e.navProps,m=Object(h.d)(),u=Object(h.e)().mode,O=Object(a.f)(),p=Object(n.useState)(!1),x=Object(t.a)(p,2),f=x[0],v=x[1],N=function(){v(!1),document.body.classList.remove("no-scrolling")};return Object(b.jsx)("div",{className:"nav ".concat(s),children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)(i.a,{to:"/",children:Object(b.jsx)("img",{src:"".concat("dark"===u?d:j),alt:"bm dev logo",loading:"lazy"})})}),Object(b.jsx)("div",{className:"burger open-menu",onClick:function(){v(!0),document.body.classList.add("no-scrolling")},children:Object(b.jsx)(o.a,{})}),Object(b.jsxs)("nav",{className:f?"open":"",children:[Object(b.jsx)("div",{className:"burger close-menu",onClick:N,children:Object(b.jsx)(r.c,{})}),Object(b.jsx)("ul",{children:c.map((function(e,c){return Object(b.jsx)("li",{className:f?"navlink navlink-".concat(e.id):"",children:Object(b.jsx)(i.a,{to:e.path,className:(s=e.path,(O.pathname.indexOf(s)>-1?"active":"")+(e.pro?" active":"")),onClick:N,children:e.name})},c);var s}))})]}),Object(b.jsx)("div",{className:"change-mode",children:"dark"===u?Object(b.jsx)("span",{onClick:function(){m({type:h.b})},children:Object(b.jsx)(l.s,{className:"icon icon-light"})}):Object(b.jsx)("span",{onClick:function(){m({type:h.a})},children:Object(b.jsx)(l.o,{className:"icon icon-dark"})})})]})})}},55:function(e,c,s){"use strict";s.r(c);var t=s(9),n=s(1),a=s(39),i=s(17),o=s(2),r=function(e){var c=e.title,s=e.classname,t=e.children;return Object(o.jsxs)("section",{className:"resume-template ".concat(s),children:[Object(o.jsxs)("h2",{className:"".concat(s,"-header tertiary-header"),children:[Object(o.jsx)("div",{}),Object(o.jsx)("span",{className:"span"}),Object(o.jsx)("span",{className:"title",children:c})]}),t]})},l=[{id:1,started:"2019",finished:"Now",school:"Online Platforms",course:"Software Development",description:"Since I was Introduced to Software world I learned through different learning platforms like Udemy, Sololearn and PluralSight and earned several certificates and improved my skills"},{id:2,started:"2016",finished:"2020",school:"Water Institute",course:"Bachelor Degree In Water Resources",description:"I've been brilliant student at the Institute doing great in studies and modules involving Mathematics and Projects.\nDuring My time at the institute I learned several other computer skills like autoCAD, ArchiCad and others. \nMy average GPA was 4.4 - First Class"},{id:3,started:"2014",finished:"2016",school:"Iyunga Technical School",course:"PCM",description:"I pursued my high school education at Iyunga which is located at Mbeya Tanzania and I went on to become top 3 student in my class scoring division 1.7 with A in Pure Mathematics"},{id:4,started:"2010",finished:"2013",school:"Azania Secondary School",course:"Science",description:"While studying at Azania I participated in different workshops that were established to boost Education System in Tanzania. \nI was also one of brilliant students passing all subjects with an A in Basic Mathematics and division 1 point 15 score. I was also good in science practicals and projects"}],d=function(){return Object(o.jsx)(r,{classname:"education",title:"Education Background",children:Object(o.jsx)("div",{className:"showcase",children:l.map((function(e){return Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{children:e.course}),Object(o.jsxs)("div",{className:"date-school",children:[Object(o.jsx)("span",{children:Object(o.jsx)(i.e,{className:"icon"})}),Object(o.jsxs)("span",{children:[e.started," - ",e.finished]})," ","| ",Object(o.jsx)("span",{className:"school",children:e.school})]}),Object(o.jsx)("p",{children:e.description})]},e.id)}))})})},j=s(49),h=[{id:1,title:"4+ years experience",icon:Object(o.jsx)(i.n,{className:"icon"})},{id:2,title:"15+ Projects",icon:Object(o.jsx)(j.a,{className:"icon"})}],b=function(){return Object(o.jsx)(r,{title:"My Experience",classname:"experience",children:Object(o.jsx)("div",{className:"showcase",children:h.map((function(e){return Object(o.jsxs)("article",{children:[Object(o.jsx)("span",{className:"icon-container",children:e.icon}),Object(o.jsx)("h2",{children:e.title})]},e.id)}))})})},m=["Figma","HTML, CSS & JavaScript","Reactjs & React Native","Sass","nodejs","Firebase","MySql","Git & Github"],u=[{id:1,title:"Web/App design",icon:Object(o.jsx)(i.h,{className:"icon"})},{id:2,title:"Web development",icon:Object(o.jsx)(i.g,{className:"icon"})},{id:3,title:"Mobile App Development",icon:Object(o.jsx)(j.b,{className:"icon"})}],O=function(){return Object(o.jsxs)(r,{classname:"skills",title:"My Skills",children:[Object(o.jsx)("div",{className:"showcase",children:u.map((function(e){return Object(o.jsxs)("article",{children:[Object(o.jsx)("span",{className:"icon-container",children:e.icon}),Object(o.jsx)("h2",{children:e.title})]},e.id)}))}),Object(o.jsxs)("div",{className:"tools",children:[Object(o.jsx)("h2",{children:"Tools, languages and libraries"}),Object(o.jsx)("div",{className:"showcase",children:m.map((function(e,c){return Object(o.jsx)("article",{children:Object(o.jsxs)("span",{children:[Object(o.jsx)(i.f,{className:"icon"})," ",e]})},c)}))})]})]})},p=s(41),x=s(40);c.default=function(e){var c=Object.assign({},e);return Object(n.useEffect)((function(){document.title="My Resume - Benedict's Portfolio "}),[]),Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(p.a,Object(t.a)(Object(t.a)({},c),{},{navProps:"nav-header",routes:a.a})),Object(o.jsx)("main",{className:"main-content resume",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("header",{className:"primary-header resume-header",children:Object(o.jsxs)("h2",{children:[Object(o.jsx)("span",{}),"My Resume"]})}),Object(o.jsx)(b,{}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(d,{}),Object(o.jsx)(O,{})]})]})}),Object(o.jsx)(x.a,{})]})}}}]);
//# sourceMappingURL=8.4e92b573.chunk.js.map