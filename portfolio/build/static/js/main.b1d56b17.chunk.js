(this.webpackJsonpguidr=this.webpackJsonpguidr||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(81),c=a.n(o),i=a(45),l=(a(92),a(93),a(51)),s=a.n(l);function u(){return localStorage.getItem("token")}var p=function(){return s.a.create({baseURL:"https://guidr-2.herokuapp.com/api/",headers:{authorization:u()}})},m=Object(n.createContext)({updateTrip:function(){}}),d=a(31),h=(a(79),a(20)),E=Object(h.c)({mapPropsToValues:function(e){return{username:"",password:""}},validationSchema:d.a().shape({username:d.b().min(2,"Too Short!").max(70,"Too Long!").required("UserName is Required!"),password:d.b().min(6,"Too Short!").max(70,"Too Long!").required("Password is Required")}),handleSubmit:function(e,t){var a=t.props,n=t.setSubmitting,r=t.resetForm;p().post("auth/login",e).then((function(e){console.log("Data",e),localStorage.setItem("token",e.data.token),a.history.push("/Trips")})).catch((function(e){return console.log(e.response)})),setTimeout((function(){console.log("Entered Value",e),n(!1)}),1e3),r()}})((function(e){var t=e.values,a=e.errors,n=e.touched;return r.a.createElement(h.b,{className:"formBody"},r.a.createElement("h1",null," Login "),r.a.createElement(h.a,{className:"input",type:"text",name:"username",placeholder:"UserName"}),n.username&&a.username&&r.a.createElement("p",{className:"errors"},a.username),r.a.createElement(h.a,{className:"input",type:"password",name:"password",placeholder:"Password"}),n.password&&a.password&&r.a.createElement("p",{className:"errors"},a.password),r.a.createElement("button",{className:"button",type:"submit",disabled:t.isSubmitting},t.isSubmitting?"Submitting":"Login"))}));var g=Object(h.c)({mapPropsToValues:function(e){return{username:"",password:""}},validationSchema:d.a().shape({username:d.b().min(2,"Too Short!").max(70,"Too Long!").required("UserName is Required!"),password:d.b().min(6,"Too Short!").max(70,"Too Long!").required("Password is Required")}),handleSubmit:function(e,t){var a=t.setSubmitting,n=t.resetForm;s.a.post("https://guidr-2.herokuapp.com/api/auth/register",e).then((function(e){console.log("Data",e)})).catch((function(e){return console.log(e.response)})),setTimeout((function(){console.log("Entered Value",e),a(!1)}),1e3),n()}})((function(e){var t=e.values,a=e.errors,n=e.touched;return r.a.createElement(h.b,{className:"formBody"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement(h.a,{className:"input",type:"text",name:"username",placeholder:"UserName"}),n.username&&a.username&&r.a.createElement("p",{className:"errors"},a.username),r.a.createElement(h.a,{className:"input",type:"password",name:"password",placeholder:"Password"}),n.password&&a.password&&r.a.createElement("p",{className:"errors"},a.password),r.a.createElement("button",{className:"button",type:"submit",disabled:t.isSubmitting},t.isSubmitting?"SigningUp":"Sign Up"))})),f=a(30),v=a(6);var b=function(e){var t=Object(f.f)();return r.a.createElement("div",{className:"trip"},r.a.createElement("h1",null,"TITLE"),r.a.createElement("h2",null,e.title),r.a.createElement("h3",null,"Click card for more details"),r.a.createElement("button",{onClick:function(a){return function(e,a){e.preventDefault(),p().delete("/trips/".concat(a)).then((function(e){console.log("Deleted"),t.push("/Trips")})).catch((function(e){console.log(e)}))}(a,e.id)}},"Delete Trip"),r.a.createElement(v.b,{to:"/UpdateTrip/".concat(e.id)},r.a.createElement("button",null,"Update Trip")))};var T=function(){var e=Object(n.useContext)(m).trips;return r.a.createElement("div",null,e.map((function(e){return r.a.createElement(v.b,{to:"/SingleTrip/".concat(e.id)},r.a.createElement(b,{title:e.title,key:e.id,id:e.id,description:e.description,distance:e.distance,date:e.date,type:e.trip_type}))})))},S=a(86);var y=function(e){var t=e.component,a=Object(S.a)(e,["component"]);return r.a.createElement(f.b,Object.assign({},a,{render:function(e){return localStorage.getItem("token")?r.a.createElement(t,e):r.a.createElement(f.a,{to:"/signin"})}}))},x=a(43),N=a(59),C=a(65);var O=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],c=function(e){o(Object(N.a)({},a,Object(x.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"CreateTrip"},r.a.createElement("h1",null,"Create a new trip"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=C(localStorage.getItem("token"));a.user_id=t.userid,p().post("trips",a).then((function(e){console.log(a),o({newTrip:e.data}),console.log(e),document.getElementById("reset").reset()})).catch((function(e){return console.log(e.response,a)}))},id:"reset"},r.a.createElement("input",{type:"text",name:"title",placeholder:"New Trip Name",value:a.title,onChange:c}),r.a.createElement("input",{type:"text",name:"description",placeholder:"Trip Description",value:a.description,onChange:c}),r.a.createElement("input",{type:"text",name:"duration",placeholder:"Trip Duration",value:a.duration,onChange:c}),r.a.createElement("input",{type:"text",name:"distance",placeholder:"Distance Traveled",value:a.distance,onChange:c}),r.a.createElement("input",{type:"text",name:"trip_type",placeholder:"Type of Trip",value:a.trip_type,onChange:c}),r.a.createElement("p",null,"Private Guide"),r.a.createElement("input",{className:"checkbox",type:"checkbox",name:"is_private",value:a.is_private=0,onChange:c}),r.a.createElement("p",null,"Professional Guide"),r.a.createElement("input",{className:"checkbox",type:"checkbox",name:"is_professional",value:a.is_professional=0,onChange:c}),r.a.createElement("input",{type:"time",name:"date",value:a.date,onChange:c}),r.a.createElement("button",null,"Add Trip")))};var k=function(e){return console.log("logout"),localStorage.removeItem("token"),r.a.createElement(f.a,{to:"/login"})},w=a(65);var j=function(e){var t=Object(n.useContext)(m),a=t.trips,o=t.updateTrip;console.log(a);var c=Object(n.useState)([]),l=Object(i.a)(c,2),s=l[0],u=l[1];Object(n.useEffect)((function(){p().get("trips/".concat(e.match.params.id)).then((function(e){u(e.data[0])})).catch((function(e){console.log(e)}))}),[e.match.params.id]);var d=function(e){u(Object(N.a)({},s,Object(x.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"CreateTrip"},r.a.createElement("h1",null,"Update Trip"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),o();var a=w(localStorage.getItem("token"));s.user_id=a.userid,p().put("trips/".concat(s.id),s).then((function(t){console.log(s),u({tripUpdate:t.data}),console.log(t),e.history.push("/SingleTrip/".concat(s.id))})).catch((function(e){return console.log(e.response,s)}))},id:"reset"},r.a.createElement("input",{type:"text",name:"title",placeholder:"New Trip Name",value:s.title,onChange:d}),r.a.createElement("input",{type:"text",name:"description",placeholder:"Trip Description",value:s.description,onChange:d}),r.a.createElement("input",{type:"text",name:"duration",placeholder:"Trip Duration",value:s.duration,onChange:d}),r.a.createElement("input",{type:"text",name:"distance",placeholder:"Distance Traveled",value:s.distance,onChange:d}),r.a.createElement("input",{type:"text",name:"trip_type",placeholder:"Type of Trip",value:s.trip_type,onChange:d}),r.a.createElement("p",null,"Private Guide"),r.a.createElement("input",{className:"checkbox",type:"checkbox",name:"is_private",value:s.is_private=0,onChange:d}),r.a.createElement("p",null,"Professional Guide"),r.a.createElement("input",{className:"checkbox",type:"checkbox",name:"is_professional",value:s.is_professional=0,onChange:d}),r.a.createElement("input",{type:"time",name:"date",value:s.date,onChange:d}),r.a.createElement("button",null,"Update Trip")))};var I=function(e){return r.a.createElement("div",{className:"trip"},r.a.createElement("h1",null,"Trip Details"),r.a.createElement("p",null,r.a.createElement("strong",null,"TITLE: "),e.title),r.a.createElement("p",null,r.a.createElement("strong",null,"DESCRIPTION: "),e.description),r.a.createElement("p",null,r.a.createElement("strong",null,"DISTANCE: "),e.distance),r.a.createElement("p",null,r.a.createElement("strong",null,"DATE: "),e.date),r.a.createElement("p",null,r.a.createElement("strong",null,"TYPE: "),e.type),r.a.createElement(v.b,{to:"/UpdateTrip/".concat(e.id)},r.a.createElement("button",null,"Update Trip")))};var U=function(e){var t=Object(n.useContext)(m).trips.filter((function(t){return t.id==e.match.params.id}));return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(I,{title:e.title,key:e.id,id:e.id,description:e.description,distance:e.distance,date:e.date,type:e.trip_type})})))},_=a(65);var D=Object(f.g)((function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),o=a[0],c=a[1],l=u();return Object(n.useEffect)((function(){l?function(){var e=_(localStorage.getItem("token"));o.user_id=e.userid}():console.log("Signed In"),p().get("trips").then((function(e){c(e.data)})).catch((function(t){localStorage.removeItem("token"),e.history.push("/Login"),console.log(t)}))}),[o.user_id,!l,e.history,l]),r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"A WORK IN PROGRESS"),r.a.createElement("h1",null,"SOMETHING MORE IS COMING SOON!")),r.a.createElement("div",{id:"guidr"},r.a.createElement("nav",null,!l&&r.a.createElement(v.b,{to:"/SignUp"},"Sign Up"),!l&&r.a.createElement(v.b,{to:"/Login"},"Login"),l&&r.a.createElement(v.b,{to:"/CreateTrip"},"Create A Trip"),l&&r.a.createElement(v.b,{to:"/Trips"},"Trip List"),l&&r.a.createElement(v.b,{to:"/Logout"},"Logout")),r.a.createElement(f.b,{exact:!0,path:"/login",component:E}),r.a.createElement(f.b,{exact:!0,path:"/SignUp",component:g}),r.a.createElement(m.Provider,{value:{trips:o,updateTrip:function(){p().get("trips").then((function(e){c(e.data)})).catch((function(t){localStorage.removeItem("token"),e.history.push("/Login"),console.log(t)}))}}},r.a.createElement(y,{exact:!0,path:"/Trips",component:T}),r.a.createElement(y,{exact:!0,path:"/Trip/:id",component:b}),r.a.createElement(y,{exact:!0,path:"/SingleTrip/:id",component:U}),r.a.createElement(y,{exact:!0,path:"/UpdateTrip/:id",component:j})),r.a.createElement(y,{exact:!0,path:"/CreateTrip",component:O}),r.a.createElement(y,{exact:!0,path:"/Logout",component:k})))}));c.a.render(r.a.createElement(v.a,null,r.a.createElement(D,null)),document.getElementById("root"))},79:function(e,t,a){},87:function(e,t,a){e.exports=a(118)},92:function(e,t,a){},93:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.b1d56b17.chunk.js.map