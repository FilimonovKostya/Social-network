(this["webpackJsonpsocial-etwork"]=this["webpackJsonpsocial-etwork"]||[]).push([[0],[,,function(e,a,t){e.exports={dialogs:"Dialog_dialogs__2ghAi",heading:"Dialog_heading__Zn_mT",dialogsItems:"Dialog_dialogsItems__23NFn",dialog:"Dialog_dialog__2xnEb",messages:"Dialog_messages__2jAWo",messageAvatar:"Dialog_messageAvatar__2F0-H",messageItem:"Dialog_messageItem__2Ipdl",left:"Dialog_left__19BOj",messageAvatarItem:"Dialog_messageAvatarItem__1dpud"}},,,,function(e,a,t){e.exports={nav:"Navbar_nav__1WHX3",active:"Navbar_active__1tIRX"}},,function(e,a,t){e.exports={friendWrapper:"Friends_friendWrapper__R6ytj",friends:"Friends_friends__1_o5l",avatarsFriends:"Friends_avatarsFriends__12bjl"}},,,,,,,,function(e,a,t){e.exports={header:"Header_header__6ghZd"}},,function(e,a,t){e.exports={profile:"Profile_profile__6ywGf"}},function(e,a,t){e.exports={myPosts:"MyPosts_myPosts__1CdWq"}},function(e,a,t){e.exports={post:"Post_post__3MEag"}},function(e,a,t){e.exports=t(33)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(15),i=t.n(l),r=(t(26),t(27),t(16)),m=t.n(r);var c=function(){return s.a.createElement("header",{className:m.a.header},s.a.createElement("img",{src:"https://cdn.worldvectorlogo.com/logos/react-2.svg",alt:"logo"}))},o=t(6),g=t.n(o),d=t(5),u=t(8),v=t.n(u);function p(e){var a=e.state.friends.map((function(e){return s.a.createElement("div",null,s.a.createElement("img",{src:e.src,alt:""}),s.a.createElement("p",null,e.name))}));return s.a.createElement("div",{className:v.a.friendWrapper},s.a.createElement("div",{className:v.a.friends},s.a.createElement("h2",null,"Friends"),s.a.createElement("div",{className:v.a.avatarsFriends},a)))}var f=function(e){return s.a.createElement("div",{className:g.a.nav},s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(d.b,{to:"/profile",activeClassName:g.a.active},"Profile")),s.a.createElement("li",null,s.a.createElement(d.b,{to:"/dialog",activeClassName:g.a.active},"Message")),s.a.createElement("li",null,s.a.createElement(d.b,{to:"/news",activeClassName:g.a.active},"News")),s.a.createElement("li",null,s.a.createElement(d.b,{to:"/settings",activeClassName:g.a.active},"Settings")),s.a.createElement("li",null,s.a.createElement(d.b,{to:"/music",activeClassName:g.a.active},"Music")))),s.a.createElement(p,{state:e.navbar}))},E=t(2),h=t.n(E);function _(e){var a="/dialog/"+e.id;return s.a.createElement("div",{className:h.a.dialog},s.a.createElement("img",{src:e.img,alt:""}),s.a.createElement(d.b,{to:a,className:h.a.dialogsItems,id:"/dialog/"+e.id},e.name))}function b(e){return s.a.createElement("div",{className:h.a.message}," ",s.a.createElement("p",{className:"".concat(h.a.messageItem," ").concat(h.a.left)}," ",e.message))}function N(e){var a=e.dialogsPage.dialogs.map((function(e){return s.a.createElement(_,{name:e.name,id:e.id,img:e.img})})),t=e.dialogsPage.messages.map((function(e){return s.a.createElement(b,{message:e.message})}));return s.a.createElement("div",{className:h.a.dialogs},s.a.createElement("div",null,s.a.createElement("h3",{className:h.a.heading},"Dialog")),s.a.createElement("div",{className:h.a.dialogsItems},a),s.a.createElement("div",{className:h.a.messageAvatar},s.a.createElement("div",{className:h.a.messageAvatarItem},s.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/892/892744.svg",alt:"r"})),s.a.createElement("div",{className:h.a.messageAvatarItem},s.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/136/136401.svg",alt:"r"})),s.a.createElement("div",{className:h.a.messageAvatarItem},s.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/892/892744.svg",alt:"r"})),s.a.createElement("div",{className:h.a.messageAvatarItem},s.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/136/136401.svg",alt:"r"})),s.a.createElement("div",{className:h.a.messageAvatarItem},s.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/892/892744.svg",alt:"r"}))),s.a.createElement("div",{className:h.a.messages},t))}var w=t(1),I=t(18),A=t.n(I),F=t(19),P=t.n(F),k=t(20),x=t.n(k);var D=function(e){return s.a.createElement("div",{className:x.a.post},s.a.createElement("img",{src:e.img,alt:"deadpool"}),s.a.createElement("span",null,e.message),s.a.createElement("span",null," ",s.a.createElement("b",null,"\u2665")," ",e.like," "))};var y=function(e){var a=e.profilePage.posts.map((function(e){return s.a.createElement(D,{message:e.message,like:e.likesCount,img:e.img})}));return s.a.createElement("div",{className:P.a.myPosts},s.a.createElement("div",null,"My posts"),s.a.createElement("textarea",{cols:80,rows:5},"a"),s.a.createElement("div",null,s.a.createElement("button",null,"Send")),a)};function C(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("img",{src:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F1-office-1516329_1920-1200x299.jpg",alt:"bg"})),s.a.createElement("div",null,"Ava + des"))}var j={dialogsPage:{dialogs:[{id:1,name:"Kostya",img:"https://i.pinimg.com/originals/03/be/95/03be95a68fdcf84edfa7b4e311fa45d9.jpg"},{id:2,name:"Julia",img:"https://i.pinimg.com/originals/90/60/b5/9060b5b5cf06dd74532456d92e1f0fe3.jpg"},{id:3,name:"Helena",img:"https://i.pinimg.com/originals/c5/fd/5b/c5fd5b84f9fcb29d7d4a195d79fd0c62.png"},{id:4,name:"Zoi",img:"https://i.pinimg.com/originals/a0/d6/14/a0d61449ed5f52e3c448e7a391318462.png"},{id:5,name:"Ahri",img:"https://i.pinimg.com/originals/60/d1/1c/60d11c933c025721085a322a0399e7d2.jpg"}],messages:[{id:1,message:"Hello, how are u?"},{id:2,message:"I am fine, what about u?"},{id:3,message:"Do u love ReactJs"},{id:4,message:"I like"},{id:5,message:"lorem ispictus farm na htel,lorem ispictus farm na htel,lorem ispictus farm na htel,lorem ispictus farm na htel"}]},profilePage:{posts:[{id:1,message:"Hello how are u?",likesCount:15,img:"https://api.penit.ink/uploads/avatars/default.png"},{id:2,message:"I am fine, thank you",likesCount:8,img:"https://cdn4.iconfinder.com/data/icons/heroes-villains-vol-1-colored/100/Batman-256.png"},{id:3,message:"What about u ?",likesCount:4,img:"https://cdn2.iconfinder.com/data/icons/heroes-villains-vol-2-colored-1/100/Captain_America-256.png"}]},navbar:{friends:[{id:1,src:"https://image.flaticon.com/icons/svg/2155/2155180.svg",name:"Iron Man"},{id:2,src:"https://image.flaticon.com/icons/svg/136/136398.svg",name:"Rossamaha"},{id:3,src:"https://image.flaticon.com/icons/svg/136/136400.svg",name:"Deadpool"}]}};var M=function(){return s.a.createElement("main",{className:A.a.profile},s.a.createElement(C,null),s.a.createElement(y,{profilePage:j.profilePage}))};var W=function(){return s.a.createElement("div",null,s.a.createElement("h2",null,"Message"))};var H=function(){return s.a.createElement("div",null,s.a.createElement("h2",null,"News"))};var B=function(){return s.a.createElement("div",null,s.a.createElement("h2",null,"Settings"))};var J=function(){return s.a.createElement("div",null,s.a.createElement("h2",null,"Music"))};var R=function(e){return s.a.createElement(d.a,null,s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(c,null),s.a.createElement(f,{navbar:e.state.navbar}),s.a.createElement("div",{className:"app-profile"},s.a.createElement(w.a,{path:"/dialog",render:function(){return s.a.createElement(N,{dialogsPage:e.state.dialogsPage})}}),s.a.createElement(w.a,{path:"/message",render:function(){return s.a.createElement(W,null)}}),s.a.createElement(w.a,{path:"/profile",render:function(){return s.a.createElement(M,null)}}),s.a.createElement(w.a,{path:"/news",component:H}),s.a.createElement(w.a,{path:"/settings",component:B}),s.a.createElement(w.a,{path:"/music",component:J}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(R,{state:j})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.65834722.chunk.js.map