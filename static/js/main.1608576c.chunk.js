(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{13:function(e,t,n){e.exports={main:"ChangePassword_main__2WzyB"}},21:function(e,t,n){e.exports={main:"Input_main__r0bcX",input:"Input_input__SCFHN"}},25:function(e,t,n){e.exports={main:"App_main__9tVZ8"}},26:function(e,t,n){e.exports={main:"Form_main__pDYwp"}},28:function(e,t,n){e.exports={main:"Button_main__3RPJ_"}},29:function(e,t,n){e.exports={main:"Home_main__3zPLT"}},3:function(e,t,n){e.exports={main:"Header_main__1JOAU",inner:"Header_inner__33XPD",title:"Header_title__1F92a",nav:"Header_nav__1qWb_",link:"Header_link__3idJx",active:"Header_active__39ugI",logout:"Header_logout__2QUcr",email:"Header_email__1S9Ro"}},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),s=n.n(c),i=n(15),l=function(){return Object(i.b)()},o=i.c,u=n(25),d=n.n(u),j=n(9),b=n(2),m=n(13),p=n.n(m),x=n(11),h=n.n(x),O=n(18),f=n(10),g=Object(f.b)("auth/login",function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout((function(){return e(t)}),2e3)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),_=Object(f.b)("auth/changePassword",function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout((function(){return e(t)}),800)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(f.b)("auth/logout",Object(O.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),v=Object(f.c)({name:"user",initialState:{loading:!1,email:null,password:null,loggedIn:!1},reducers:{},extraReducers:function(e){e.addCase(_.fulfilled,(function(e,t){e.password=t.payload})).addCase(g.fulfilled,(function(e,t){e.email=t.payload.email,e.password=t.payload.password,e.loggedIn=!0})).addCase(w.fulfilled,(function(e){e.email=null,e.password=null,e.loggedIn=!1})).addMatcher((function(e){return e.type.endsWith("/pending")}),(function(e){e.loading=!0})).addMatcher((function(e){return e.type.endsWith("/fulfilled")}),(function(e){e.loading=!1}))}}).reducer,N=n(26),P=n.n(N),y=n(27),k=n.n(y),C=n(1),H=function(e){var t=e.className,n=e.onSubmit,a=e.children;return Object(C.jsx)("form",{className:k()(P.a.main,t),onSubmit:n,children:a})},S=n(17),T=n(7),I=n(21),F=n.n(I),D=["label"],L=function(e){return Object(C.jsx)(J,Object(T.a)(Object(T.a)({required:!0},e),{},{type:"password",pattern:"^((?=.*[A-Z])(?=.*)).{4,8}$",placeholder:"Between 4 and 10 characters, at least one capital letter"}))},J=function(e){var t=e.label,n=Object(S.a)(e,D);return Object(C.jsxs)("label",{className:F.a.main,children:[Object(C.jsx)("span",{children:t}),Object(C.jsx)("input",Object(T.a)({className:F.a.input},n))]})},R=J,B=n(28),W=n.n(B),A=["children"],E=function(e){var t=e.children,n=Object(S.a)(e,A);return Object(C.jsx)("button",Object(T.a)(Object(T.a)({},n),{},{className:W.a.main,children:t}))},M=function(){var e=o((function(e){return e.user.password})),t=l();return Object(C.jsxs)(H,{onSubmit:function(n){n.preventDefault();var a=n.currentTarget.currentPassword.value,r=n.currentTarget.newPassword.value,c=n.currentTarget.repeatPassword.value;a===e&&r===c&&t(_(r))},className:p.a.main,children:[Object(C.jsx)(L,{label:"Current password",name:"currentPassword"}),Object(C.jsx)(L,{label:"New password",name:"newPassword"}),Object(C.jsx)(L,{label:"Repeat password",name:"repeatPassword"}),Object(C.jsx)(E,{type:"submit",children:"Submit"})]})},q=n(29),z=n.n(q),U=function(){return Object(C.jsxs)("div",{className:z.a.main,children:[Object(C.jsx)("h1",{children:"Home Page"}),Object(C.jsx)(j.b,{exact:!0,to:"/change-password",children:"Change password"})]})},X=function(){var e=l();return Object(C.jsxs)(H,{onSubmit:function(t){t.preventDefault(),e(g({email:t.currentTarget.email.value,password:t.currentTarget.password.value}))},className:p.a.main,children:[Object(C.jsx)(R,{label:"Email",type:"email",name:"email",placeholder:"test@test.com"}),Object(C.jsx)(L,{label:"Password",name:"password"}),Object(C.jsx)(E,{type:"submit",children:"Submit"})]})},Z=function(){var e=l();return Object(C.jsxs)(H,{onSubmit:function(t){t.preventDefault(),e(g({email:t.currentTarget.email.value,password:t.currentTarget.password.value}))},className:p.a.main,children:[Object(C.jsx)(R,{label:"Email",type:"email",name:"email",placeholder:"test@test.com"}),Object(C.jsx)(L,{label:"Password"}),Object(C.jsx)(E,{type:"submit",children:"Submit"})]})},Q=n(3),V=n.n(Q),Y=function(){var e=o((function(e){return e.user})),t=e.loggedIn,n=e.email,a=l();return Object(C.jsx)("div",{className:V.a.main,children:Object(C.jsxs)("div",{className:V.a.inner,children:[Object(C.jsx)("h1",{className:V.a.title,children:"Login demo"}),Object(C.jsx)("nav",{className:V.a.nav,children:t?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(j.b,{exact:!0,to:"/",className:V.a.link,activeClassName:V.a.active,children:" Home "}),Object(C.jsx)(j.b,{exact:!0,to:"/change-password",className:V.a.link,activeClassName:V.a.active,children:" Change password "})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(j.b,{exact:!0,to:"/login",className:V.a.link,activeClassName:V.a.active,children:" Login "}),Object(C.jsx)(j.b,{exact:!0,to:"/register",className:V.a.link,activeClassName:V.a.active,children:" Register "})]})}),t&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("p",{className:V.a.email,children:["Logged in as ",n]}),Object(C.jsx)("button",{className:V.a.link,onClick:function(e){e.preventDefault(),a(w())},children:"Logout"})]})]})})},$=function(){var e=o((function(e){return e.user})),t=e.loggedIn,n=e.loading;return Object(C.jsx)("div",{className:d.a.main,children:Object(C.jsxs)(j.a,{basename:"/login-demo",children:[Object(C.jsx)(Y,{})," ",n?Object(C.jsx)("p",{children:"Loading..."}):Object(C.jsx)(b.d,{children:t?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(b.b,{exact:!0,path:"/",children:[" ",Object(C.jsx)(U,{})," "]})," ",Object(C.jsxs)(b.b,{exact:!0,path:"/change-password",children:[Object(C.jsx)(M,{})," "]})," ",Object(C.jsx)(b.a,{to:"/"})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(b.b,{exact:!0,path:"/login",children:[" ",Object(C.jsx)(X,{})," "]})," ",Object(C.jsxs)(b.b,{exact:!0,path:"/register",children:[Object(C.jsx)(Z,{})," "]})," ",Object(C.jsx)(b.a,{to:"/login"})]})})]})})},G=Object(f.a)({reducer:{user:v},devTools:!1});n(46),n(47);s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(i.a,{store:G,children:Object(C.jsx)($,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.1608576c.chunk.js.map