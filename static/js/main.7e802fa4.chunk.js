(this.webpackJsonpevents=this.webpackJsonpevents||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(3),c=n.n(i),r=n(4),l=n(5),o=n(7),d=n(6),j=(n(12),n(0)),b=function(e){var t=e.eventsList,n=e.handleClick,a=t.imageUrl,s=t.name,i=t.location,c=t.registrationStatus;return Object(j.jsx)("div",{className:"col-6",children:Object(j.jsxs)("li",{children:[Object(j.jsx)("button",{type:"button",onClick:function(){console.log("clicked"),n(c)},children:Object(j.jsx)("img",{className:"w-100",src:a,alt:"event"})}),Object(j.jsx)("p",{children:s}),Object(j.jsx)("p",{children:i})]})})},h=(n(14),[{id:"f9bb2373-b80e-46b8-8219-f07217b9f3ce",imageUrl:"https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png",name:"Canada Dance Festival",location:"Canada, America",registrationStatus:"YET_TO_REGISTER"},{id:"c0040497-e9cb-4873-baa9-ef5b994abfff",imageUrl:"https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png",name:"Puthanalkkal Kalavela",location:"Karnataka, India",registrationStatus:"REGISTERED"},{id:"0037d5e4-4005-4030-987b-ce41b691b92a",imageUrl:"https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png",name:"Nithyopahara",location:"Kerala, India",registrationStatus:"REGISTRATIONS_CLOSED"},{id:"c9ff08cb-610c-4382-9939-78e5e50a72b2",imageUrl:"https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png",name:"Shivam",location:"Andhra Pradesh, India",registrationStatus:"YET_TO_REGISTER"},{id:"d1153723-5b6e-4628-9a1a-ccd8f84f1273",imageUrl:"https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png",name:"Janapada Kolatam",location:"Tamil Nadu, India",registrationStatus:"REGISTERED"},{id:"7d6ec013-d0ae-4d84-b776-14b733a9174f",imageUrl:"https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png",name:"Colonial Fest",location:"Washington, America",registrationStatus:"REGISTRATIONS_CLOSED"}]),u=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={status:"Initial"},e.handleClick=function(t){console.log(t),e.setState({status:t})},e.renderStatus=function(){switch(e.state.status){case"Initial":return Object(j.jsx)("p",{children:"Click on an event, to view its registration details"});case"YET_TO_REGISTER":return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:"w-100",src:"https://assets.ccbp.in/frontend/react-js/events-register-img.png",alt:"yet to register"}),Object(j.jsx)("p",{children:"A live performance brings so much to your relationship with dance. Seeing dance live can often make you fall totally in love with this beautiful art form."}),Object(j.jsx)("button",{className:"btn btn-primary",type:"button",children:"Register Here"})]});case"REGISTERED":return Object(j.jsx)("div",{className:"d-flex flex-column justify-content-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{width:"100px",src:"https://assets.ccbp.in/frontend/react-js/events-regestered-img.png",alt:"registered"}),Object(j.jsx)("h1",{children:"You have already registered for the event"})]})});case"REGISTRATIONS_CLOSED":return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:"w-100",src:"https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png",alt:"registrations closed"}),Object(j.jsx)("h1",{children:"Registrations Are Closed Now!"}),Object(j.jsx)("p",{children:"Stay tuned. We will reopen the registrations soon!"})]});default:return null}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.status;return console.log(t),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"events col-6 text-light p-3",children:[Object(j.jsx)("h1",{children:"Events"}),Object(j.jsx)("ul",{children:h.map((function(t){return Object(j.jsx)(b,{eventsList:t,handleClick:e.handleClick},t.id)}))})]}),Object(j.jsx)("div",{className:"col-6 p-3",children:this.renderStatus()})]})})}}]),n}(a.Component),g=u,m=(n(15),function(){return Object(j.jsx)(g,{})});c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7e802fa4.chunk.js.map