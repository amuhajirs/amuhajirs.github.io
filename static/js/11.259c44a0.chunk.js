"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[11],{6011:function(e,a,s){s.r(a),s.d(a,{default:function(){return p}});var n=s(4165),t=s(5861),r=s(9439),i=s(2791),c=s(1243),l=s(7689),o=s(1087),d=s(184);function p(){var e=(0,i.useState)({}),a=(0,r.Z)(e,2),s=a[0],p=a[1],f=(0,l.s0)(),u=(0,l.UO)().id;(0,i.useEffect)((function(){c.Z.get("/api/emails/".concat(u),{baseURL:"https://api-ahmad-muhajir.cyclic.app"}).then((function(e){return p(e.data)})).catch((function(e){return console.log(e.response)}))}),[u]);var h=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.delete("/api/emails/".concat(a),{baseURL:"https://api-ahmad-muhajir.cyclic.app"}).then((function(e){console.log(e.data),f("/admin/email")})).catch((function(e){return console.log(e.response)}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:"tertiary",style:{borderRadius:"10px"},"data-aos":"fade-up",children:[(0,d.jsxs)("div",{className:"d-flex py-3 px-2 justify-content-between align-items-center",style:{borderRadius:"10px",boxShadow:"0px 10px 10px 2px #0b192f",zIndex:"999"},children:[(0,d.jsx)(o.rU,{to:"/admin/email",className:"cool-btn-dark",children:(0,d.jsx)("i",{className:"fa-solid fa-arrow-left"})}),(0,d.jsx)("h3",{children:s.subject}),(0,d.jsx)("span",{className:"cool-btn-dark",onClick:function(){return h(s._id)},children:(0,d.jsx)("i",{className:"fa-solid fa-trash"})})]}),(0,d.jsxs)("div",{className:"mt-3 p-4",children:[(0,d.jsx)("div",{style:{marginBottom:"10px"},children:(0,d.jsx)("h2",{className:"font-primary",style:{textAlign:"center",fontWeight:"bold"},children:"Email from Portfolio"})}),(0,d.jsxs)("div",{className:"mb-4",children:[(0,d.jsx)("h4",{className:"font-secondary fw-bold",children:"Message: "}),(0,d.jsx)("div",{className:"bg-white",style:{borderRadius:"10px",padding:"10px",wordWrap:"break-word"},children:(0,d.jsx)("p",{className:"text-black",style:{fontSize:"15px",whiteSpace:"pre-wrap"},children:s.message})})]}),(0,d.jsx)("div",{children:(0,d.jsxs)("p",{className:"m-0 font-secondary",style:{fontSize:"15px"},children:["from ",s.name,",",(0,d.jsx)("br",{}),s.email]})})]})]})}}}]);
//# sourceMappingURL=11.259c44a0.chunk.js.map