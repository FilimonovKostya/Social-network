(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{10:function(e,t,a){e.exports={nav:"Navbar_nav__2U-_x",link:"Navbar_link__2FJB7",activeLink:"Navbar_activeLink__12B-c"}},18:function(e,t,a){e.exports={header:"Header_header__3dd_c",wrapper:"Header_wrapper__32Hpm",avatar:"Header_avatar__2C8UD",logo:"Header_logo__ZFtkv",info:"Header_info__1IKK9",btn:"Header_btn__2EZez"}},22:function(e,t,a){e.exports={container:"Users_container__3NHj6",pagination:"Users_pagination__1OSdb",active:"Users_active__1vVkz",avatarIcon:"Users_avatarIcon__2RIPT",usersWrapper:"Users_usersWrapper__XpLlY",btn:"Users_btn__3rcgB"}},23:function(e,t,a){e.exports={wrapper:"UserCard_wrapper__pSyan",profil:"UserCard_profil__29Lsk",ikon:"UserCard_ikon__1tudV",arama:"UserCard_arama__1QPeu",bgImage:"UserCard_bgImage__3bFqL",avatar:"UserCard_avatar__1FEML",text:"UserCard_text__2t99r"}},26:function(e,t,a){e.exports={wrapperForm:"Login_wrapperForm__3Er_4",loginForm:"Login_loginForm__LdGZs",links:"Login_links__37sYo",error:"Login_error__20HyL"}},33:function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return m})),a.d(t,"d",(function(){return g})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return E})),a.d(t,"f",(function(){return v})),a.d(t,"g",(function(){return h}));var n=a(1),r=a.n(n),c=a(4),o=a(5),u=a(2),i=a(9),s={posts:[{message:"Chose React or Vue ?",avatarImg:"",likes:2,id:1},{message:"React awesome library, in my opinion",avatarImg:"",likes:100,id:2},{message:"No, Vanila Js is the best framework",avatarImg:"",likes:-20,id:3}],userProfile:{},status:"Samurai"},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={message:t.message,avatarImg:"",likes:5,id:4};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[a])});case"SET-USER-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{userProfile:t.userProfile});case"SET-STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"UPDATE-PHOTO":return Object(u.a)(Object(u.a)({},e),{},{userProfile:Object(u.a)(Object(u.a)({},e.userProfile),{},{photos:t.photos})});case"UPDATE-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{userProfile:Object(u.a)(Object(u.a)({},e.userProfile),t.contacts)});default:return e}},m=function(e){return{type:"ADD-POST",message:e}},f=function(e){return{type:"SET-STATUS",status:e}},p=function(e){return{type:"UPDATE-PHOTO",photos:e}},d=function(e){return{type:"UPDATE-PROFILE",contacts:e}},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.setUsers(e);case 2:n=t.sent,a({type:"SET-USER-PROFILE",userProfile:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.getStatus(e);case 2:n=t.sent,a(f(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.changeStatus(e);case 2:0===t.sent.data.resultCode&&a(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.updatePhoto(e);case 2:0===(n=t.sent).data.resultCode&&(console.log("res",n.data),a(p(n.data.data.photos)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.updateProfile(e);case 2:0===(n=t.sent).data.resultCode&&(console.log("res in profile",n.data),a(d(e)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},43:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return u}));var n=a(5),r=a(2),c={dialogs:[{id:1,name:"Batman"},{id:2,name:"Pavel Durov"},{id:3,name:"Ilon Mask"},{id:4,name:"Den Abramov"},{id:5,name:"Filimonov Kostya"}],messages:[{id:1,message:"Hi"},{id:2,message:"Do you like React.JS ?"},{id:3,message:"What do you think about Vue?"},{id:4,message:"Do you heard about Vanila JS ?"},{id:5,message:"React awesome!!"}]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var a={id:6,message:t.message};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(n.a)(e.messages),[a])});default:return e}},u=function(e){return{type:"ADD-MESSAGE",message:e}}},45:function(e,t,a){e.exports=a.p+"static/media/loading.97e129a5.svg"},46:function(e,t,a){e.exports={wrapper:"Preloader_wrapper__2yM77"}},48:function(e,t,a){e.exports=a(78)},53:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(27),r=a.n(n),c=a(0),o=a.n(c),u=a(7),i=(a(53),a(10)),s=a.n(i),l=function(){return o.a.createElement("nav",{className:s.a.nav},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(u.b,{to:"/profile",className:s.a.link,activeClassName:s.a.activeLink},"Profile")),o.a.createElement("li",null,o.a.createElement(u.b,{to:"/dialogs",className:s.a.link,activeClassName:s.a.activeLink},"Dialogs")),o.a.createElement("li",null,o.a.createElement(u.b,{to:"/users",className:s.a.link,activeClassName:s.a.activeLink},"Users")),o.a.createElement("li",null,o.a.createElement(u.b,{to:"/news",className:s.a.link,activeClassName:s.a.activeLink},"News")),o.a.createElement("li",null,o.a.createElement(u.b,{to:"/settings",className:s.a.link,activeClassName:s.a.activeLink},"Settings")),o.a.createElement("li",null,o.a.createElement(u.b,{to:"/music",className:s.a.link,activeClassName:s.a.activeLink},"Music"))))},m=a(6),f=function(){return o.a.createElement("div",null,"settings")},p=function(){return o.a.createElement("div",null,"music")},d=function(){return o.a.createElement("p",null,"News")},g=a(14),b=a(22),E=a.n(b),v=a(23),h=a.n(v),O=function(e){var t=e.name,a=e.status,n=e.followed,r=e.id,c=e.photos,i=e.followTC,s=e.isDisabled,l=e.unFollowTC;return console.log("followed",n),o.a.createElement("div",{className:h.a.wrapper},o.a.createElement("div",{className:h.a.profil},o.a.createElement("div",{className:h.a.bgImage}),o.a.createElement(u.b,{to:"profile/".concat(r)}," ",o.a.createElement("img",{className:h.a.avatar,src:c.small?c.small:"https://pm1.narvii.com/6802/b775c9e1266f61a61737324b45e0975ed22d7328v2_hq.jpg",alt:t})," "),o.a.createElement("div",{className:h.a.text},o.a.createElement("div",null,o.a.createElement("p",null,"Name : ",t),o.a.createElement("p",null,"Status : ",a),o.a.createElement("p",null,"Follow : ",n?"subscribe":"not subscribe"))),o.a.createElement("div",null,n?o.a.createElement("button",{disabled:s,onClick:function(){return l(r)}}," un Follow"):o.a.createElement("button",{disabled:s,onClick:function(){return i(r)}},"  Follow"))))},w=a(17),_=function(e){for(var t=e.totalCount,a=e.currentPage,n=e.setCurrentPage,r=Math.ceil(t/10),u=[],i=1;i<=r;i++)u.push(i);var s=Math.ceil(r/10),l=Object(c.useState)(1),m=Object(w.a)(l,2),f=m[0],p=m[1],d=10*(f-1)+1,g=10*f;return o.a.createElement(o.a.Fragment,null,f>1&&o.a.createElement("button",{onClick:function(){p(f-1)}},"PREV"),u.filter((function(e){return e>=d&&e<=g})).map((function(e){return o.a.createElement("span",{className:e===a?E.a.active:"",key:e,onClick:function(){return n(e)}},e)})),s>f&&o.a.createElement("button",{onClick:function(){p(f+1)}},"NEXT"))},T=function(e){var t=e.items,a=e.currentPage,n=e.totalCount,r=e.setCurrentPageAC,c=e.isDisabled,u=e.followTC,i=e.unFollowTC,s=t.map((function(e,t){return o.a.createElement(O,{isDisabled:c,followTC:u,unFollowTC:i,key:t,name:e.name,status:e.status,followed:e.followed,id:e.id,photos:e.photos})}));return o.a.createElement("div",{className:E.a.container},o.a.createElement("div",{className:E.a.pagination},o.a.createElement(_,{totalCount:n,currentPage:a,setCurrentPage:r})),o.a.createElement("div",{className:E.a.usersWrapper},s))},j=a(1),C=a.n(j),S=a(4),k=a(5),P=a(2),N=a(9),L={items:[],currentPage:1,error:null,totalCount:0,pageSize:10,isLoading:!1,isDisabled:!1},A=function(e){return{type:"SET-LOADING-STATUS",isLoading:e}},y=function(e){return{type:"SET-DISABLED-STATUS",isDisabled:e}},U=a(45),I=a.n(U),D=a(46),x=a.n(D),F=function(){return o.a.createElement("div",{className:x.a.wrapper},o.a.createElement("img",{src:I.a,alt:"preloader"}))},R=function(e){return e.usersPage.items},z=function(e){return e.usersPage.currentPage},H=function(e){return e.usersPage.totalCount},M=function(e){return e.usersPage.pageSize},W=function(e){return e.usersPage.isLoading},G=function(e){return e.usersPage.isDisabled},B=a(15),q=Object(B.c)(Object(g.b)((function(e){return{items:R(e),currentPage:z(e),totalCount:H(e),pageSize:M(e),isLoading:W(e),isDisabled:G(e)}}),{setCurrentPageAC:function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},getUsersPageTC:function(e,t){return function(){var a=Object(S.a)(C.a.mark((function a(n){var r;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(A(!0)),a.next=3,N.a.getUsers(e,t);case 3:r=a.sent,n({type:"SET-TOTAL-COUNT",totalCount:Math.ceil(r.totalCount/t)}),n({type:"SET-USERS",users:r.items}),n(A(!1)),n(y(!1));case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},followTC:function(e){return function(){var t=Object(S.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(y(!0)),t.next=3,N.a.follow(e);case 3:a(y(!1)),a({type:"FOLLOW",userId:e});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollowTC:function(e){return function(){var t=Object(S.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(y(!0)),t.next=3,N.a.unFollow(e);case 3:a(y(!1)),a({type:"UN-FOLLOW",userId:e});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){var t=e.items,a=e.currentPage,n=e.totalCount,r=e.setCurrentPageAC,u=e.isDisabled,i=e.followTC,s=e.unFollowTC,l=e.pageSize,m=e.isLoading,f=e.getUsersPageTC;return Object(c.useEffect)((function(){f(a,l)}),[a,l]),m?o.a.createElement(F,null):o.a.createElement(T,{items:t,currentPage:a,totalCount:n,unFollowTC:s,followTC:i,setCurrentPageAC:r,isDisabled:u})})),J=a(18),V=a.n(J),K=function(e){var t=e.login,a=e.logoutTC;return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"https://pm1.narvii.com/6802/b775c9e1266f61a61737324b45e0975ed22d7328v2_hq.jpg",alt:"person"}),o.a.createElement("div",{className:V.a.info},o.a.createElement("h3",null,t),t?o.a.createElement("button",{className:V.a.btn,onClick:function(){return a(!1)}}," Logout "):o.a.createElement(u.b,{to:"/login"}," Name: ",t," Login ")))},Z=function(e){var t=e.login,a=e.logoutTC;return o.a.createElement("header",{className:V.a.header},o.a.createElement("div",{className:V.a.wrapper},o.a.createElement("div",{className:V.a.avatar},o.a.createElement(K,{login:t,logoutTC:a}))),o.a.createElement("div",{className:V.a.logo},o.a.createElement("img",{src:"https://cdn.worldvectorlogo.com/logos/react-2.svg",alt:"logo"})))},Y={isAuth:!1,messages:[""],data:{id:0,email:"",login:""},resultCode:0},X=function(e){return{type:"SET-LOGIN",data:e}},Q=function(e){return{type:"SET-AUTH",isAuth:e}},$=function(){return function(){var e=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.getAuth();case 2:0===(a=e.sent).data.resultCode&&t(X(a.data.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ee=Object(B.c)(Object(g.b)((function(e){return{login:e.auth.data.login,isAuth:e.auth.isAuth}}),{logoutTC:function(){return function(){var e=Object(S.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.logout();case 2:t(X({id:0,email:"",login:""})),t(Q(!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getAuthDataTC:$}))((function(e){var t=e.login,a=e.logoutTC,n=(e.isAuth,e.getAuthDataTC);return Object(c.useEffect)((function(){n()})),o.a.createElement(Z,{logoutTC:a,login:t})})),te={isInitialize:!1},ae=a(32),ne=a(26),re=a.n(ne),ce=function(){var e=Object(ae.a)({mode:"onTouched"}),t=e.register,a=e.handleSubmit,n=e.formState.errors,r=Object(g.c)(),c=a((function(e){return r(function(e){return function(){var t=Object(S.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.setLogin(e);case 2:a(Q(!0));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}));return o.a.createElement("div",{className:re.a.wrapperForm},o.a.createElement("form",{className:re.a.loginForm,onSubmit:c},o.a.createElement("input",Object.assign({type:"text",value:"konstantinfilimonou@gmail.com",className:n.email?"".concat(re.a.error):"",placeholder:n.email?"Required field":"Email"},t("email",{required:!0}))),o.a.createElement("input",Object.assign({type:"password",value:"KOSTYA1234END.",className:n.password?"".concat(re.a.error):"",placeholder:n.password?"Required field":"Password"},t("password",{required:!0,minLength:5}))),o.a.createElement("input",{type:"submit",name:"Login",value:"Login"})))},oe=Object(B.c)(Object(g.b)((function(e){return{isAuth:e.auth.isAuth}})))((function(e){return e.isAuth?o.a.createElement(m.a,{to:"/profile"}):o.a.createElement(ce,null)})),ue=function(e){return o.a.createElement(c.Suspense,{fallback:o.a.createElement(F,null)},o.a.createElement(e,null))},ie=o.a.lazy((function(){return a.e(4).then(a.bind(null,88))})),se=o.a.lazy((function(){return a.e(3).then(a.bind(null,87))}));var le=Object(B.c)(Object(g.b)((function(e){return{isInitialize:e.app.isInitialize}}),{setInitializeAppTC:function(){return function(){var e=Object(S.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t($());case 2:t({type:"SET-INITIALIZE"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))((function(e){var t=e.isInitialize,a=e.setInitializeAppTC;return Object(c.useEffect)((function(){a()}),[]),t?o.a.createElement("div",{className:"app-wrapper"},o.a.createElement(ee,null),o.a.createElement(l,null),o.a.createElement("div",{className:"app-content"},o.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return ue(se)}}),o.a.createElement(m.b,{path:"/dialogs",render:function(){return ue(ie)}}),o.a.createElement(m.b,{path:"/users",render:function(){return o.a.createElement(q,null)}}),o.a.createElement(m.b,{path:"/news",render:function(){return o.a.createElement(d,null)}}),o.a.createElement(m.b,{path:"/settings",render:function(){return o.a.createElement(f,null)}}),o.a.createElement(m.b,{path:"/music",render:function(){return o.a.createElement(p,null)}}),o.a.createElement(m.b,{exact:!0,path:"/login",render:function(){return o.a.createElement(oe,null)}}))):o.a.createElement(F,null)})),me=a(43),fe=a(33),pe=a(47),de=Object(B.b)({dialogsPage:me.b,profilePage:fe.e,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(P.a)(Object(P.a)({},e),{},{items:e.items.map((function(e){return e.id===t.userId?Object(P.a)(Object(P.a)({},e),{},{followed:!0}):e}))});case"UN-FOLLOW":return Object(P.a)(Object(P.a)({},e),{},{items:e.items.map((function(e){return e.id===t.userId?Object(P.a)(Object(P.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(P.a)(Object(P.a)({},e),{},{items:[].concat(Object(k.a)(t.users),Object(k.a)(e.items))});case"SET-CURRENT-PAGE":return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-COUNT":return Object(P.a)(Object(P.a)({},e),{},{totalCount:t.totalCount});case"SET-LOADING-STATUS":return Object(P.a)(Object(P.a)({},e),{},{isLoading:t.isLoading});case"SET-DISABLED-STATUS":return Object(P.a)(Object(P.a)({},e),{},{isDisabled:t.isDisabled});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LOGIN":return Object(P.a)(Object(P.a)({},e),{},{isAuth:!0,data:Object(P.a)({},t.data)});case"SET-AUTH":return Object(P.a)(Object(P.a)({},e),{},{isAuth:t.isAuth});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-INITIALIZE":return Object(P.a)(Object(P.a)({},e),{},{isInitialize:!0});default:return e}}}),ge=Object(B.d)(de,Object(B.a)(pe.a));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u.a,null,o.a.createElement(g.a,{store:ge},o.a.createElement(le,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(44),r=a.n(n).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a918abd3-e56d-4f51-9680-86b073810b9f"}}),c={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},setUsers:function(e){return r.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(e)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unFollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},getAuth:function(){return r.get("auth/me")},setLogin:function(e){return r.post("auth/login",e)},logout:function(){return r.delete("auth/login")},getStatus:function(e){return r.get("profile/status/".concat(e))},changeStatus:function(e){return r.put("profile/status",{status:e})},updatePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},updateProfile:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return r.put("/profile",{AboutMe:"Test",lookingForAJobDescription:"Test",fullName:"Test",contacts:e})}))}}},[[48,1,2]]]);
//# sourceMappingURL=main.164ba603.chunk.js.map