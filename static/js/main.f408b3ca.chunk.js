(this.webpackJsonpsim4=this.webpackJsonpsim4||[]).push([[0],{11:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(41),c=(n(11),n(1)),s=n(23),o=n(7),u=n(6),l=[{id:0,text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",image:"server.png",buttons:[{number:"1",text:"[Continue]",next:1}]},{id:1,text:"Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",image:"ellinor.png",buttons:[{number:"1",text:"[Continue]",next:2}]},{id:2,text:"Aute irure dolor in reprehenderit in voluptate velit esse?",image:"ellinor.png",buttons:[{number:"1",text:"Dolor in reprehenderit",next:3},{number:"2",text:"In reprehenderit",next:4}]},{id:3,text:"Good. Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",image:"Elli_excited.png",buttons:[{number:"1",text:"[Restart]",next:0}]},{id:4,text:"Oh dear. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",image:"Elli_sad.png",buttons:[{number:"1",text:"[Go back]",next:2}]}],d=n(2),x=a.a.createContext();function j(e){var t=a.a.useState(0),n=Object(u.a)(t,2),i=n[0],r=n[1];return Object(d.jsx)(x.Provider,{value:{scenes:l,currIndex:i,updateScene:function(e){setTimeout((function(){return r(e)}),600)}},children:e.children})}var b={initial:{opacity:0},animate:{opacity:1,transition:{duration:.4,ease:"easeOut"}},exit:{opacity:0,transition:{duration:.4,ease:"easeIn"}}};function m(){var e=a.a.useContext(x),t=e.currIndex,n=e.scenes;return Object(d.jsxs)(o.motion.div,{variants:b,initial:"initial",animate:"animate",exit:"exit",className:"content",children:[Object(d.jsx)("div",{className:"content-text",children:n[t].text}),Object(d.jsx)("img",{className:"content-image",src:n[t].image,alt:"Aisha"})]})}var p={initial:{x:-100,opacity:0},animate:{x:24,opacity:1,transition:{duration:.4,ease:"easeOut"}},exit:{opacity:0,y:window.innerHeight,transition:{duration:.6,ease:"easeIn"}}};function v(){var e=a.a.useContext(x),t=e.currIndex,n=e.scenes,i=e.updateScene,r=Object(c.f)();return Object(d.jsx)(o.motion.div,{className:"options",children:Object(d.jsx)(o.motion.div,{variants:p,initial:"initial",animate:"animate",exit:"exit",className:"buttons",children:n&&n[t].buttons.map((function(e){return Object(d.jsxs)("div",{className:"button",onClick:function(){return t=e.next,i(t),void r("/".concat(t));var t},children:[Object(d.jsxs)("div",{className:"button-number",children:[" ",e.number]}),Object(d.jsxs)("span",{children:[" ",e.text]})]},e.text)}))})})}n(60);function h(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(m,{}),Object(d.jsx)(v,{})]})}var O=function(){var e=Object(c.e)();return Object(d.jsx)(o.AnimatePresence,{exitBeforeEnter:!0,children:Object(d.jsxs)(c.c,{location:e,children:[Object(d.jsx)(c.a,{path:"/",element:Object(d.jsx)(h,{})}),Object(d.jsx)(c.a,{path:"/:id",element:Object(d.jsx)(h,{})})]},e.pathname)})};function g(){return Object(d.jsx)(s.a,{children:Object(d.jsx)(O,{})})}var f=document.getElementById("root");Object(r.createRoot)(f).render(Object(d.jsx)(i.StrictMode,{children:Object(d.jsx)(j,{children:Object(d.jsx)(g,{})})}))}},[[144,1,2]]]);
//# sourceMappingURL=main.f408b3ca.chunk.js.map