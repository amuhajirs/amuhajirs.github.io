"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[288],{4784:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(184);function r(){return(0,a.jsx)("div",{className:"d-flex justify-content-center","data-aos":"fade-up",children:(0,a.jsx)("h3",{className:"font-secondary",children:"Something went wrong ;("})})}},6288:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(4165),r=n(3433),s=n(5861),c=n(9439),i=n(2791),o=n(1087),l=n(2426),u=n.n(l),d=n(4784),m=n(4008),f=n(184);function p(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),n=t[0],l=t[1],p=(0,i.useState)(0),x=(0,c.Z)(p,2),h=x[0],b=x[1],y=(0,i.useState)(!1),j=(0,c.Z)(y,2),Z=j[0],v=j[1],N=(0,i.useState)(!1),w=(0,c.Z)(N,2),g=w[0],k=w[1],S=(0,i.useState)(!1),E=(0,c.Z)(S,2),M=E[0],C=E[1],D=(0,i.useState)([]),A=(0,c.Z)(D,2),z=A[0],H=A[1],T=document.querySelector("#deleteModal");function _(){return(_=(0,s.Z)((0,a.Z)().mark((function e(){var t,n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.ym)();case 2:t=e.sent,n=t.data,r=t.error,n&&(n.data.length<1&&k(!0),l(n.data),b(n.data.length)),r&&v(!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,i.useEffect)((function(){!function(){_.apply(this,arguments)}()}),[]);var I=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H([].concat((0,r.Z)(z),[t])),b((function(e){return e-1===0&&k(!0),e-1})),e.next=4,(0,m.nd)(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,(0,m.HG)();case 3:t=e.sent,t.data&&(window.bootstrap.Modal.getInstance(T).hide(),l([]),b(0)),C(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{className:"fw-bold font-primary mb-3","data-aos":"fade-right",children:"EMAIL"}),Z?(0,f.jsx)(d.Z,{}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"d-flex mb-4 justify-content-between align-items-center px-3 py-2 tertiary",style:{borderRadius:"10px"},"data-aos":"fade-up",children:[(0,f.jsxs)("span",{className:"font-secondary",children:["There are ",h," Emails"]}),(0,f.jsx)("span",{className:"cool-btn-dark py-2 px-3",style:{aspectRatio:"unset",borderRadius:"20px"},"data-bs-toggle":"modal","data-bs-target":"#deleteModal",children:(0,f.jsx)("span",{className:"text-danger text-end",style:{cursor:"pointer"},children:"Delete All"})})]}),g&&(0,f.jsx)("div",{className:"d-flex justify-content-center mt-5",style:{position:"absolute",right:"25%",left:"25%"},children:(0,f.jsx)("h1",{className:"font-primary text-center",children:"No Emails"})}),n.map((function(e){return(0,f.jsxs)("div",{className:"".concat(z.includes(e._id)?"deleting":"show-email"),children:[(0,f.jsx)("hr",{className:"m-0 mb-1"}),(0,f.jsxs)("div",{className:"email-container mb-1 d-flex justify-content-start align-items-center",children:[(0,f.jsx)(o.rU,{to:"/admin/email/".concat(e._id),className:"w-100 p-3 d-flex justify-content-between",children:(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:"font-primary m-0",children:e.name}),(0,f.jsx)("p",{className:"font-secondary m-0",style:{fontSize:"12px"},children:e.subject}),(0,f.jsx)("p",{className:"font-secondary m-0",style:{fontSize:"12px"},children:e.message})]})}),(0,f.jsx)("div",{style:{position:"absolute",right:"10px",top:"10px"},children:(0,f.jsx)("p",{className:"font-secondary m-0 text-end",style:{fontSize:"12px"},children:u()(e.createdAt).format("HH:mm, MMMM Do")})}),(0,f.jsx)("div",{style:{position:"absolute",right:"10px",bottom:"10px"},onClick:function(){return I(e._id)},children:(0,f.jsx)("span",{className:"cool-btn-dark",children:(0,f.jsx)("i",{className:"fa-solid fa-trash text-danger"})})})]})]},e._id)})),(0,f.jsx)("div",{className:"modal fade",id:"deleteModal",tabIndex:"-1","aria-hidden":"true",children:(0,f.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,f.jsxs)("div",{className:"modal-content tertiary",children:[(0,f.jsxs)("div",{className:"modal-header","data-bs-theme":"dark",children:[(0,f.jsx)("h1",{className:"modal-title fs-5 ",children:"Delete Emails"}),(0,f.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,f.jsxs)("div",{className:"modal-body ",children:["Are you sure want to delete ",(0,f.jsx)("b",{className:"",children:"All"}),"?",(0,f.jsxs)("div",{className:"mt-5 d-flex gap-2 justify-content-end",children:[(0,f.jsx)("button",{type:"button",className:"btn btn-cancel","data-bs-dismiss":"modal",children:"Cancel"}),M?(0,f.jsx)("button",{type:"button",className:"btn btn-danger",disabled:!0,children:"Deleting..."}):(0,f.jsx)("button",{type:"button",className:"btn btn-danger",onClick:L,children:"Delete"})]})]})]})})})]})]})}},4008:function(e,t,n){n.d(t,{Cz:function(){return c},HG:function(){return u},ki:function(){return o},nd:function(){return l},ym:function(){return i}});var a=n(4165),r=n(5861),s=n(5289),c=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/api/emails",{method:"POST",body:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/api/emails",{params:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/api/emails/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/api/emails/".concat(t),{method:"DELETE"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/api/emails",{method:"DELETE"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=288.1c898f3f.chunk.js.map