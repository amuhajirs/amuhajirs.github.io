"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[38],{4038:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var s=n(4165),a=n(5861),r=n(9439),l=n(1243),o=n(2791),i=n(7689),c=n(1087),m=n(184);function d(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],d=t[1],u=(0,o.useState)(""),f=(0,r.Z)(u,2),h=f[0],p=f[1],x=(0,o.useState)(!1),b=(0,r.Z)(x,2),j=b[0],v=b[1],y=(0,i.s0)(),N=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t){var a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!0),a={email:n,password:h},e.next=5,l.Z.post("/api/admin/login",a).then((function(){return y("/admin/project")})).catch((function(e){console.log(e.response),p("")})).finally((function(){return v(!1)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row justify-content-center align-items-center",style:{height:"80vh"},children:(0,m.jsxs)("div",{className:"col-xl-4 col-lg-5 col-md-7 col-sm-8 col-11 tertiary p-3 shadow-lg",style:{borderRadius:"10px"},children:[(0,m.jsxs)("div",{className:"mb-5",style:{position:"relative"},children:[(0,m.jsx)("div",{className:"d-flex align-items-center",style:{position:"absolute",top:"0",bottom:"0"},children:(0,m.jsx)(c.rU,{to:"/",className:"cool-btn-dark my-auto",children:(0,m.jsx)("i",{className:"fa-solid fa-arrow-left fs-5 font-secondary"})})}),(0,m.jsx)("h1",{className:"font-primary fw-bold text-center",children:"Admin"})]}),(0,m.jsxs)("form",{onSubmit:N,method:"POST",children:[(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"email",className:"form-label font-secondary",children:"Email"}),(0,m.jsx)("input",{type:"email",id:"email",className:"form-control input-theme",onChange:function(e){return d(e.target.value)},value:n})]}),(0,m.jsxs)("div",{className:"mb-4",children:[(0,m.jsx)("label",{htmlFor:"password",className:"form-label font-secondary",children:"Password"}),(0,m.jsx)("input",{type:"password",id:"password",className:"form-control input-theme",onChange:function(e){return p(e.target.value)},value:h})]}),j?(0,m.jsx)("button",{type:"submit",className:"btn-theme-primary w-100",disabled:!0,children:"Logging In..."}):(0,m.jsx)("button",{type:"submit",className:"btn-theme-primary w-100",children:"Log In"})]})]})})})}}}]);
//# sourceMappingURL=38.18abdbd9.chunk.js.map