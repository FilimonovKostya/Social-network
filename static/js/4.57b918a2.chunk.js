(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{79:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",(function(){return n}))},80:function(e,t,a){"use strict";var n=a(79),r=a(0),s=a.n(r),i=a(6),c=a(14),o=["isAuth"],u=function(e){return{isAuth:e.auth.isAuth}};t.a=function(e){return Object(c.b)(u)((function(t){t.isAuth;var a=Object(n.a)(t,o);return t.isAuth?s.a.createElement(e,a):s.a.createElement(i.a,{to:"/login"})}))}},82:function(e,t,a){e.exports={wrapper:"Dialogs_wrapper__3XvIC",dialogs:"Dialogs_dialogs__jn-sE",messages:"Dialogs_messages__3FOjF",textArea:"Dialogs_textArea__3YMYx",button:"Dialogs_button__1jXAB"}},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(82),i=a.n(s),c=a(7),o=function(e){var t=e.id,a=e.name;return r.a.createElement(c.b,{to:"/dialogs/".concat(t)},a)},u=function(e){var t=e.message;return r.a.createElement("p",null,t)},l=a(32),m=function(e){var t=e.dialogsData,a=e.addMessageAC,n=Object(l.a)(),s=n.register,c=n.handleSubmit,m=t.dialogs.map((function(e){return r.a.createElement(o,{key:e.id,id:e.id,name:e.name})})),g=t.messages.map((function(e){return r.a.createElement(u,{key:e.id,message:e.message})})),d=c((function(e){return a(e.textarea)}));return r.a.createElement("div",{className:i.a.wrapper},r.a.createElement("div",{className:i.a.dialogs},m),r.a.createElement("div",{className:i.a.messages},g),r.a.createElement("div",{className:i.a.textArea},r.a.createElement("textarea",Object.assign({cols:30,rows:10},s("textarea"))),r.a.createElement("button",{className:i.a.button,onClick:d},"Send")))},g=a(43),d=a(14),f=a(15),b=a(80);t.default=Object(f.c)(Object(d.b)((function(e){return{dialogsData:e.dialogsPage}}),{addMessageAC:g.a}),b.a)(m)}}]);
//# sourceMappingURL=4.57b918a2.chunk.js.map