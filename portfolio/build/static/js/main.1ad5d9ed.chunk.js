(this.webpackJsonpguidr=this.webpackJsonpguidr||[]).push([[0],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(83),o=a.n(l),i=a(28),c=(a(95),a(96),a(16)),s=a.n(c);function p(){return localStorage.getItem("token")}var u=function(){return s.a.create({baseURL:"https://guidr-2.herokuapp.com/api/",headers:{authorization:p()}})},m=Object(n.createContext)({updateTrip:function(){}}),d=a(33),E=(a(81),a(21)),h=Object(E.c)({mapPropsToValues:function(e){return{username:"",password:""}},validationSchema:d.a().shape({username:d.b().min(2,"Too Short!").max(70,"Too Long!").required("UserName is Required!"),password:d.b().min(6,"Too Short!").max(70,"Too Long!").required("Password is Required")}),handleSubmit:function(e,t){var a=t.props,n=t.setSubmitting,r=t.resetForm;u().post("auth/login",e).then((function(e){console.log("Data",e),localStorage.setItem("token",e.data.token),a.history.push("/Trips")})).catch((function(e){return console.log(e.response)})),setTimeout((function(){console.log("Entered Value",e),n(!1)}),1e3),r()}})((function(e){var t=e.values,a=e.errors,n=e.touched;return r.a.createElement(E.b,{className:"formBody"},r.a.createElement("h1",null," Login "),r.a.createElement(E.a,{className:"input",type:"text",name:"username",placeholder:"UserName"}),n.username&&a.username&&r.a.createElement("p",{className:"errors"},a.username),r.a.createElement(E.a,{className:"input",type:"password",name:"password",placeholder:"Password"}),n.password&&a.password&&r.a.createElement("p",{className:"errors"},a.password),r.a.createElement("button",{className:"button",type:"submit",disabled:t.isSubmitting},t.isSubmitting?"Submitting":"Login"))}));var v=Object(E.c)({mapPropsToValues:function(e){return{username:"",password:""}},validationSchema:d.a().shape({username:d.b().min(2,"Too Short!").max(70,"Too Long!").required("UserName is Required!"),password:d.b().min(6,"Too Short!").max(70,"Too Long!").required("Password is Required")}),handleSubmit:function(e,t){var a=t.setSubmitting,n=t.resetForm;s.a.post("https://guidr-2.herokuapp.com/api/auth/register",e).then((function(e){console.log("Data",e)})).catch((function(e){return console.log(e.response)})),setTimeout((function(){console.log("Entered Value",e),a(!1)}),1e3),n()}})((function(e){var t=e.values,a=e.errors,n=e.touched;return r.a.createElement("div",null,r.a.createElement("p",null,"Choose a username and password"),r.a.createElement(E.b,{className:"formBody"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement(E.a,{className:"input",type:"text",name:"username",placeholder:"UserName"}),n.username&&a.username&&r.a.createElement("p",{className:"errors"},a.username),r.a.createElement(E.a,{className:"input",type:"password",name:"password",placeholder:"Password"}),n.password&&a.password&&r.a.createElement("p",{className:"errors"},a.password),r.a.createElement("button",{className:"button",type:"submit",disabled:t.isSubmitting},t.isSubmitting?"SigningUp":"Submit")))})),g=a(32),f=a(6);var b=function(e){var t=Object(n.useContext)(m).updateTrip,a=Object(g.f)();return r.a.createElement("div",{className:"trip"},r.a.createElement("h1",null,e.title),r.a.createElement("h3",null,"Click card for more details"),r.a.createElement("button",{onClick:function(n){return function(e,n){e.preventDefault(),u().delete("/trips/".concat(n)).then((function(e){console.log("Deleted"),t(),a.push("/Trips")})).catch((function(e){console.log(e)}))}(n,e.id)}},"Delete Trip"),r.a.createElement(f.b,{to:"/UpdateTrip/".concat(e.id)},r.a.createElement("button",null,"Update Trip")))};var T=function(){var e=Object(n.useContext)(m).trips;return r.a.createElement("div",{className:"trips"},e.map((function(e){return r.a.createElement(f.b,{to:"/SingleTrip/".concat(e.id)},r.a.createElement(b,{title:e.title,key:e.id,id:e.id,description:e.description,distance:e.distance,date:e.date,type:e.trip_type}))})))},w=a(89);var x=function(e){var t=e.component,a=Object(w.a)(e,["component"]);return r.a.createElement(g.b,Object.assign({},a,{render:function(e){return localStorage.getItem("token")?r.a.createElement(t,e):r.a.createElement(g.a,{to:"/signin"})}}))},y=a(45),S=a(46),C=a(65);var N=function(){var e=Object(n.useContext)(m).updateTrip,t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],o=a[1],c=function(e){o(Object(S.a)({},l,Object(y.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"CreateTrip"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=C(localStorage.getItem("token"));l.user_id=a.userid,u().post("trips",l).then((function(t){o({newTrip:t.data}),e(),document.getElementById("reset").reset()})).catch((function(e){return console.log(e.response,l)}))},id:"reset"},r.a.createElement("h1",null,"Create a new trip"),r.a.createElement("input",{type:"text",name:"title",placeholder:"New Trip Name",value:l.title,onChange:c}),r.a.createElement("input",{type:"text",name:"description",placeholder:"Trip Description",value:l.description,onChange:c}),r.a.createElement("input",{type:"text",name:"duration",placeholder:"Trip Duration",value:l.duration,onChange:c}),r.a.createElement("input",{type:"text",name:"distance",placeholder:"Distance Traveled",value:l.distance,onChange:c}),r.a.createElement("input",{type:"text",name:"trip_type",placeholder:"Type of Trip",value:l.trip_type,onChange:c}),r.a.createElement("p",null,"Private Guide"),r.a.createElement("input",{className:"checkbox",type:"checkbox",name:"is_private",value:l.is_private=0,onChange:c}),r.a.createElement("p",null,"Professional Guide"),r.a.createElement("input",{className:"checkbox",type:"checkbox",name:"is_professional",value:l.is_professional=0,onChange:c}),r.a.createElement("input",{type:"time",name:"date",value:l.date,onChange:c}),r.a.createElement("button",null,"Add Trip")))};var O=function(e){return console.log("logout"),localStorage.removeItem("token"),r.a.createElement(g.a,{to:"/login"})},j=a(65);var k=function(e){var t=Object(n.useContext)(m).updateTrip,a=Object(n.useState)([]),l=Object(i.a)(a,2),o=l[0],c=l[1];Object(n.useEffect)((function(){u().get("trips/".concat(e.match.params.id)).then((function(e){c(e.data[0])})).catch((function(e){console.log(e)}))}),[e.match.params.id]);var s=function(e){c(Object(S.a)({},o,Object(y.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"CreateTrip"},r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var n=j(localStorage.getItem("token"));o.user_id=n.userid,u().put("trips/".concat(o.id),o).then((function(a){console.log(o),c({tripUpdate:a.data}),console.log(a),t(),e.history.push("/SingleTrip/".concat(o.id))})).catch((function(e){return console.log(e.response,o)}))},id:"reset"},r.a.createElement("h1",null,"Update Trip"),r.a.createElement("input",{type:"text",name:"title",placeholder:"New Trip Name",value:o.title,onChange:s}),r.a.createElement("input",{type:"text",name:"description",placeholder:"Trip Description",value:o.description,onChange:s}),r.a.createElement("input",{type:"text",name:"duration",placeholder:"Trip Duration",value:o.duration,onChange:s}),r.a.createElement("input",{type:"text",name:"distance",placeholder:"Distance Traveled",value:o.distance,onChange:s}),r.a.createElement("input",{type:"text",name:"trip_type",placeholder:"Type of Trip",value:o.trip_type,onChange:s}),r.a.createElement("p",null,"Private Guide"),r.a.createElement("input",{className:"checkbox",type:"checkbox",name:"is_private",value:o.is_private=0,onChange:s}),r.a.createElement("p",null,"Professional Guide"),r.a.createElement("input",{className:"checkbox",type:"checkbox",name:"is_professional",value:o.is_professional=0,onChange:s}),r.a.createElement("input",{type:"time",name:"date",value:o.date,onChange:s}),r.a.createElement("button",null,"Update Trip")))};var L=function(e){return r.a.createElement("div",{className:"trip"},r.a.createElement("h1",null,"Trip Details"),r.a.createElement("p",null,r.a.createElement("strong",null,"TITLE: "),e.title),r.a.createElement("p",null,r.a.createElement("strong",null,"DESCRIPTION: "),e.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Duration: "),e.duration),r.a.createElement("p",null,r.a.createElement("strong",null,"DISTANCE: "),e.distance),r.a.createElement("p",null,r.a.createElement("strong",null,"DATE: "),e.date),r.a.createElement("p",null,r.a.createElement("strong",null,"TYPE: "),e.type),r.a.createElement(f.b,{to:"/UpdateTrip/".concat(e.id)},r.a.createElement("button",null,"Update Trip")))};var P=function(e){var t=Object(n.useContext)(m).trips.filter((function(t){return t.id==e.match.params.id}));return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(L,{title:e.title,key:e.id,id:e.id,description:e.description,duration:e.duration,distance:e.distance,date:e.date,type:e.trip_type})})))},F=a(70),U=a.n(F),D=a(88);a(66);var I=function(e){return r.a.createElement("div",{id:"location"},r.a.createElement("h1",null,"LOCATION"),r.a.createElement("section",null,r.a.createElement("p",null,r.a.createElement("b",null,"Location:")," ",e.location),r.a.createElement("p",null,r.a.createElement("b",null,"Elevation:")," ",e.elevation," Ft"),r.a.createElement("p",null,r.a.createElement("b",null,"Wind Speed:")," ",e.windSpeed," MPH"),r.a.createElement("p",null,r.a.createElement("b",null,"Wind Gust:")," ",e.windGust," MPH"),r.a.createElement("p",null,r.a.createElement("b",null,"Wind Chill:")," ",e.windChill," ","\xb0","F"),r.a.createElement("p",null,r.a.createElement("b",null,"Snow Fall:")," ",e.snowFallAmount," Inches"),r.a.createElement("p",null,r.a.createElement("b",null,"Probability:")," ",e.probability,"%")))};var _=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"noaah1"},"TEMPERATURE"),r.a.createElement("div",{id:"temperature"},r.a.createElement("section",null,r.a.createElement("p",{className:"sectionTitle currTemp"},"Curr Temp"),r.a.createElement("p",{className:"sectionContent"},e.currTemp,"\xb0"," F")),r.a.createElement("section",null,r.a.createElement("p",{className:"sectionTitle"},"Max Temp"),r.a.createElement("p",{className:"sectionContent"},e.maxTemp,"\xb0"," F")),r.a.createElement("section",null,r.a.createElement("p",{className:"sectionTitle"},"Min Temp"),r.a.createElement("p",{className:"sectionContent"},e.minTemp,"\xb0"," F"))))};var A=function(e){return r.a.createElement("div",{id:"forecast"},r.a.createElement("h1",null,"FORECAST"),r.a.createElement("section",null,r.a.createElement("p",null,e.forecast)))};var R=function(e){return r.a.createElement("div",{id:"freezing"},r.a.createElement("section",null,r.a.createElement("p",{className:"sectionTitle"},"Freezing Level"),r.a.createElement("p",{className:"sectionContent"},e.snowLevel," FT")))};var G=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],o=a[1];return Object(n.useEffect)(Object(D.a)(U.a.mark((function e(){var t,a,n,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.weather.gov/gridpoints/PQR/142,88","https://api.weather.gov/gridpoints/PQR/142,88/forecast","https://api.weather.gov/stations/mhm66/observations/latest","https://api.weather.gov/stations/mhm66",t=s.a.get("https://api.weather.gov/gridpoints/PQR/142,88"),a=s.a.get("https://api.weather.gov/gridpoints/PQR/142,88/forecast"),n=s.a.get("https://api.weather.gov/stations/mhm66/observations/latest"),r=s.a.get("https://api.weather.gov/stations/mhm66"),s.a.all([t,a,n,r]).then(s.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t[0].data.properties.elevation.value/.3048,r=1.8*t[0].data.properties.maxTemperature.values[0].value+32,i=1.8*t[0].data.properties.minTemperature.values[0].value+32,c=(t[0].data.properties.snowLevel.values[0].value/.3048).toFixed(0),s=(t[0].data.properties.snowfallAmount.values[3].value/25.4).toFixed(0),p=t[0].data.properties.probabilityOfPrecipitation.values[3].value.toFixed(0);console.log("Snow Level",t[0].data.properties.snowLevel.values);var u=t[1].data.properties.periods[0].detailedForecast,m=(1.8*t[2].data.properties.temperature.value+32).toFixed(0),d=(t[2].data.properties.windSpeed.value/1.609).toFixed(0),E=(t[2].data.properties.windGust.value/1.609).toFixed(0),h=(1.8*t[2].data.properties.windChill.value+32).toFixed(0),v=t[3].data.properties.name;o(Object(S.a)({},l,{elevation:n,maxTemp:r,minTemp:i,snowLevel:c,currTemp:m,locationName:v,forecast:u,windSpeed:d,windGust:E,windChill:h,snowFallAmount:s,probability:p}))}))).catch((function(e){console.log(e)})),e.next=11,s.a.get("https://api.weather.gov/gridpoints/PQR/142,88").then((function(e){var t=e.data.properties.temperature.values;t.map((function(e){})),console.log("Temp array",t)}));case 11:case"end":return e.stop()}}),e)}))),[]),r.a.createElement("div",null,r.a.createElement(_,{maxTemp:l.maxTemp,minTemp:l.minTemp,currTemp:l.currTemp}),r.a.createElement(R,{snowLevel:l.snowLevel}),r.a.createElement("div",{className:"sideBySide"},r.a.createElement(A,{forecast:l.forecast}),r.a.createElement(I,{location:l.locationName,elevation:l.elevation,windSpeed:l.windSpeed,windGust:l.windGust,windChill:l.windChill,snowFallAmount:l.snowFallAmount,probability:l.probability})))},q=a(65);var B=Object(g.g)((function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],o=a[1],c=p(),s=[l.user_id,!c,e.history,c];return Object(n.useEffect)((function(){c?function(){var e=q(localStorage.getItem("token"));l.user_id=e.userid}():console.log("Signed In"),u().get("trips").then((function(e){o(e.data)})).catch((function(t){localStorage.removeItem("token"),e.history.push("/Login"),console.log(t)}))}),s),r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(G,null)),r.a.createElement("div",{id:"guidr"},r.a.createElement("section",null,r.a.createElement("h1",null,"Guided Trips"),r.a.createElement("h5",null,"A Lambda School Project")),r.a.createElement("nav",null,!c&&r.a.createElement(f.c,{to:"/SignUp"},"Sign Up"),!c&&r.a.createElement(f.c,{to:"/Login",activeClassName:"active"},"Login"),c&&r.a.createElement(f.c,{to:"/CreateTrip"},"Add Trip"),c&&r.a.createElement(f.c,{to:"/Trips"},"Trip List"),c&&r.a.createElement(f.c,{to:"/Logout"},"Logout")),r.a.createElement(g.b,{exact:!0,path:"/login",component:h}),r.a.createElement(g.b,{exact:!0,path:"/SignUp",component:v}),r.a.createElement(m.Provider,{value:{trips:l,updateTrip:function(){u().get("trips").then((function(e){o(e.data)})).catch((function(t){localStorage.removeItem("token"),e.history.push("/Login"),console.log(t)}))}}},r.a.createElement(x,{exact:!0,path:"/Trips",component:T}),r.a.createElement(x,{exact:!0,path:"/Trip/:id",component:b}),r.a.createElement(x,{exact:!0,path:"/SingleTrip/:id",component:P}),r.a.createElement(x,{exact:!0,path:"/UpdateTrip/:id",component:k}),r.a.createElement(x,{exact:!0,path:"/CreateTrip",component:N})),r.a.createElement(x,{exact:!0,path:"/Logout",component:O})))}));o.a.render(r.a.createElement(f.a,null,r.a.createElement(B,null)),document.getElementById("root"))},66:function(e,t,a){},81:function(e,t,a){},90:function(e,t,a){e.exports=a(122)},95:function(e,t,a){},96:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.1ad5d9ed.chunk.js.map