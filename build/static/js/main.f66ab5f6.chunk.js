(this["webpackJsonpstarry-weather"]=this["webpackJsonpstarry-weather"]||[]).push([[0],{27:function(e,t,c){},40:function(e,t,c){},59:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(29),i=c.n(a),l=c(33),r=c(4),o=c(18),j=(c(40),c(31)),d=c(2),h=c(30),b=c.n(h),u=(c(59),c(27),c(0));function O(e){return Object(u.jsx)(u.Fragment,{children:"current"===e.type?Object(u.jsxs)("div",{className:"weather-wrap",children:[Object(u.jsx)("h3",{children:"Now"}),Object(u.jsx)("img",{src:e.data.condition.icon,alt:e.data.condition.text}),Object(u.jsxs)("h3",{children:[Math.floor(e.data["temp_"+e.params.temp]),"\xb0"]})]}):Object(u.jsxs)("div",{className:"weather-wrap",children:[Object(u.jsxs)("h3",{children:[e.data.time.substr(11,2)," h"]}),Object(u.jsx)("img",{src:e.data.condition.icon,alt:e.data.condition.text}),Object(u.jsxs)("h3",{children:[Math.floor(e.data["temp_"+e.params.temp]),"\xb0"]})]})})}function x(e){var t=Object(s.useState)(),c=Object(r.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){!function(t){var c=[];if(t.localTime<=23-e.num)t.today.hour.slice(t.localTime,t.localTime+e.num).forEach((function(e){c.push(e)}));else{var s=24-t.localTime;t.today.hour.slice(t.localTime,t.localTime+s).forEach((function(e){c.push(e)})),s=e.num-s,t.tomorrow.hour.slice(0,s).forEach((function(e){c.push(e)}))}a(c)}(e)}),[e]),Object(u.jsx)(u.Fragment,{children:n?n.map((function(t){return Object(u.jsx)(O,{data:t,params:e.params},t.time.substr(11,2))})):null})}c(61);function p(e){return Object(u.jsxs)("div",{className:"average-wrap",children:[Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:"Humidity"}),Object(u.jsx)("p",{children:e.curentData.humidity+" %"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:"Feels like"}),Object(u.jsxs)("p",{children:[e.curentData["feelslike_"+e.params.temp],"\xb0"]})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:"UV index"}),Object(u.jsx)("p",{children:e.curentData.uv})]})]})}),Object(u.jsx)("div",{className:"line"}),Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:"Chance of rain"}),Object(u.jsx)("p",{children:e.dailyData.daily_chance_of_rain+" %"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:"Chance of snow"}),Object(u.jsx)("p",{children:e.dailyData.daily_chance_of_snow+" %"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:"Clouds"}),Object(u.jsx)("p",{children:e.curentData.cloud+" %"})]})]})}),Object(u.jsx)("div",{className:"line"}),Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:"Wind direction"}),Object(u.jsx)("p",{children:e.curentData.wind_dir})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:"Wind speed"}),Object(u.jsx)("p",{children:e.curentData["wind_"+e.params.speed]+" "+e.params.speed})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:"Pressure"}),Object(u.jsx)("p",{children:e.curentData["pressure_"+e.params.pressure]+" "+e.params.pressure})]})]})})]})}var m=c(5);c(62);function f(e){var t=Object(s.useState)({lang:"en",temp:"c",speed:"kph",pressure:"mb"}),c=Object(r.a)(t,2),n=c[0],a=c[1],i=function(t,c){switch(t){case"lang":a(Object(m.a)(Object(m.a)({},n),{},{lang:c})),e.onChange(Object(m.a)(Object(m.a)({},n),{},{lang:c}));break;case"temp":a(Object(m.a)(Object(m.a)({},n),{},{temp:c})),e.onChange(Object(m.a)(Object(m.a)({},n),{},{temp:c}));break;case"speed":a(Object(m.a)(Object(m.a)({},n),{},{speed:c})),e.onChange(Object(m.a)(Object(m.a)({},n),{},{speed:c}));break;case"pressure":a(Object(m.a)(Object(m.a)({},n),{},{pressure:c})),e.onChange(Object(m.a)(Object(m.a)({},n),{},{pressure:c}))}};function l(e){console.log(e)}return Object(u.jsxs)("div",{className:"settings-wrap",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Language :"}),Object(u.jsx)("li",{children:"Temperature : "}),Object(u.jsx)("li",{children:"Speed : "}),Object(u.jsx)("li",{children:"Pressure : "}),Object(u.jsx)("li",{children:"Source : "})]})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{onClick:function(){i("lang","en")},onChange:l,className:"en"===n.lang?"active":null,src:"https://img.icons8.com/dusk/64/000000/usa.png",alt:"en"}),Object(u.jsx)("span",{children:" / "}),Object(u.jsx)("img",{onClick:function(){i("lang","fr")},onChange:l,className:"fr"===n.lang?"active":null,src:"https://img.icons8.com/dusk/64/000000/france.png",alt:"fr"}),Object(u.jsx)("span",{children:" / "}),Object(u.jsx)("img",{onClick:function(){i("lang","es")},onChange:l,className:"es"===n.lang?"active":null,src:"https://img.icons8.com/dusk/64/000000/spain.png",alt:"es"}),Object(u.jsx)("span",{children:" / "}),Object(u.jsx)("img",{onClick:function(){i("lang","de")},onChange:l,className:"de"===n.lang?"active":null,src:"https://img.icons8.com/dusk/64/000000/germany.png",alt:"ge"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{onClick:function(){i("temp","c")},onChange:l,className:"c"===n.temp?"active":null,children:" Celcius"}),Object(u.jsx)("span",{children:" /"}),Object(u.jsx)("span",{onClick:function(){i("temp","f")},onChange:l,className:"f"===n.temp?"active":null,children:" Fahrenheit"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{onClick:function(){i("speed","kph")},onChange:l,className:"kph"===n.speed?"active":null,children:" Km/h"}),Object(u.jsx)("span",{children:" /"}),Object(u.jsx)("span",{onClick:function(){i("speed","mph")},onChange:l,className:"mph"===n.speed?"active":null,children:" Mph"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{onClick:function(){i("pressure","mb")},onChange:l,className:"mb"===n.pressure?"active":null,children:" Millibars"}),Object(u.jsx)("span",{children:" /"}),Object(u.jsx)("span",{onClick:function(){i("pressure","in")},onChange:l,className:"in"===n.pressure?"active":null,children:" Inches"})]}),Object(u.jsx)("li",{children:Object(u.jsx)("span",{children:Object(u.jsx)("a",{href:"https://www.weatherapi.com/",title:"Free Weather API",children:"WeatherAPI.com"})})})]})})]})}c(63);function g(){return Object(u.jsxs)("div",{className:"Loader",children:[Object(u.jsx)("img",{src:"https://img.icons8.com/dusk/100/000000/partly-cloudy-day--v2.png",alt:"Loading logo"}),Object(u.jsx)("h1",{children:"We checking the starry sky"}),Object(u.jsxs)("h1",{children:["Please wait ",Object(u.jsx)("span",{children:"."})," ",Object(u.jsx)("span",{children:"."})," ",Object(u.jsx)("span",{children:"."})]})]})}function v(e){var t=Object(s.useRef)(null),c=Object(s.useRef)(null),n=Object(s.useState)(!0),a=Object(r.a)(n,2),i=a[0],l=a[1],o=Object(s.useState)(1),j=Object(r.a)(o,2),d=j[0],h=j[1],m=Object(s.useState)(),v=Object(r.a)(m,2),y=v[0],w=v[1],N=Object(s.useState)(),k=Object(r.a)(N,2),C=k[0],_=k[1],L=Object(s.useState)({lang:"en",temp:"c",speed:"kph",pressure:"mb"}),D=Object(r.a)(L,2),S=D[0],M=D[1];Object(s.useEffect)((function(){function t(t){b()("https://api.weatherapi.com/v1/forecast.json?key="+C+"&q="+t+"&days=2&alerts=yes&lang="+S.lang).then((function(e){console.log(e.data),w(e.data),function(e,t,s){if(console.log("allo"),"Fullmoon"!==s)switch(t){case 1:c.current.classList.add("day");break;case 0:c.current.classList.add("night")}else c.current.classList.add("fullmoon");switch(e){case 1003:c.current.classList.add("litecloudy");break;case 1009:c.current.classList.add("overcast")}}(e.data.current.condition.code,e.data.current.is_day,e.data.forecast.forecastday[0].astro.moon_phase)})).catch((function(t){t.response&&e.handleAlert(t.response.data.error.message),l(!1)}))}_("9fc431d6956447d08eb223147210108"),void 0!==C&&!0===i&&(void 0!==e.city?t(e.city):void 0!==e.coords&&t(e.coords.lat+","+e.coords.lng))}),[e,C,S,i]);var F=function(e){h(e)};return Object(u.jsx)(u.Fragment,{children:i&&Object(u.jsx)("div",{className:"Weather",ref:t,children:y?Object(u.jsxs)("div",{className:"card",ref:c,children:[Object(u.jsxs)("div",{className:"top",children:[Object(u.jsx)("img",{onClick:function(){l(!1)},className:"close-component",src:"https://img.icons8.com/windows/64/ffffff/macos-close.png",alt:"close component"}),Object(u.jsx)("h3",{children:y?y.location.name:"Unknown"}),Object(u.jsxs)("h1",{className:"temp",children:[y?Math.floor(y.current["temp_"+S.temp]):"0","\xb0"]}),Object(u.jsx)("h2",{className:"weather",children:y?y.current.condition.text:"unknown"}),Object(u.jsxs)("p",{children:[y?"Max: "+Math.floor(y.forecast.forecastday[0].day["maxtemp_"+S.temp])+"\xb0 ":"0",y?"/ Min: "+Math.floor(y.forecast.forecastday[0].day["mintemp_"+S.temp])+"\xb0":"0"]})]}),Object(u.jsxs)("div",{className:"middle",children:[Object(u.jsxs)("div",{className:"clouds",children:[Object(u.jsx)("div",{className:"cloud cloud1"}),Object(u.jsx)("div",{className:"cloud cloud2"}),Object(u.jsx)("div",{className:"cloud cloud3"}),Object(u.jsx)("div",{className:"cloud cloud4"}),Object(u.jsx)("div",{className:"cloud cloud5"}),Object(u.jsx)("div",{className:"cloud cloud6"}),Object(u.jsx)("div",{className:"cloud cloud7"})]}),Object(u.jsx)("div",{className:"sun-viewbox",children:Object(u.jsx)("div",{className:"sun"})})]}),Object(u.jsxs)("div",{className:"bot",children:[Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 505 200",children:[Object(u.jsxs)("defs",{children:[Object(u.jsxs)("linearGradient",{id:"D\xe9grad\xe9_sans_nom_13",x1:"352.96",y1:"60.25",x2:"386.46",y2:"200.15",gradientUnits:"userSpaceOnUse",children:[Object(u.jsx)("stop",{offset:"0",stopColor:"#fff"}),Object(u.jsx)("stop",{offset:"0.03",stopColor:"#fff",stopOpacity:"0.93"}),Object(u.jsx)("stop",{offset:"0.18",stopColor:"#fff",stopOpacity:"0.65"}),Object(u.jsx)("stop",{offset:"0.33",stopColor:"#fff",stopOpacity:"0.42"}),Object(u.jsx)("stop",{offset:"0.45",stopColor:"#fff",stopOpacity:"0.24"}),Object(u.jsx)("stop",{offset:"0.57",stopColor:"#fff",stopOpacity:"0.11"}),Object(u.jsx)("stop",{offset:"0.66",stopColor:"#fff",stopOpacity:"0.03"}),Object(u.jsx)("stop",{offset:"0.73",stopColor:"#fff",stopOpacity:"0"})]}),Object(u.jsx)("linearGradient",{id:"D\xe9grad\xe9_sans_nom_13-2",x1:"277.11",y1:"48.33",x2:"298.29",y2:"85.02",xlinkHref:"#D\xe9grad\xe9_sans_nom_13"}),Object(u.jsx)("linearGradient",{id:"D\xe9grad\xe9_sans_nom_13-3",x1:"296.38",y1:"13.1",x2:"317.54",y2:"66.44",xlinkHref:"#D\xe9grad\xe9_sans_nom_13"}),Object(u.jsx)("linearGradient",{id:"D\xe9grad\xe9_sans_nom_13-4",x1:"170.88",y1:"88.15",x2:"211.06",y2:"113.13",xlinkHref:"#D\xe9grad\xe9_sans_nom_13"}),Object(u.jsx)("linearGradient",{id:"D\xe9grad\xe9_sans_nom_13-5",x1:"273.47",y1:"35.18",x2:"303.17",y2:"63.34",xlinkHref:"#D\xe9grad\xe9_sans_nom_13"})]}),Object(u.jsx)("g",{id:"Calque_2","data-name":"Calque 2",children:Object(u.jsxs)("g",{id:"Calque_3","data-name":"Calque 3",children:[Object(u.jsx)("polygon",{id:"mount",className:"cls-1",points:"4.5 160.5 148.5 60.5 155.5 60.5 162.5 56.5 168.5 61.5 181 52 188 53 200 41 208 41 236 13 243 15 250 6 257 10 259 0 279 11 285 11 301 25 314 26 330 42 353 46 377 64 382 65 407 87 415 83 423 90 433 89 505 146 505 419 0 419 4.5 160.5"}),Object(u.jsxs)("g",{id:"shadows",children:[Object(u.jsx)("polygon",{className:"cls-2",points:"314 206 280 152 261 144 236 121 236 103 253 114 236 90 236 77 260 94 260 83 282 106 315 121 312 110 334 120 332 94 317 74 331 80 325 62 347 61 339 51 348 55 353 46 368 65 377 64 382 65 407 87 411 90 415 83 431 98 433 89 505 146 478 158 457 134 410 106 451 141 435 171 413 161 406 149 365 118 407 174 314 206"}),Object(u.jsx)("polygon",{className:"cls-3",points:"286 84 279 71 257 55 277 59 263 40 313 69 286 84"}),Object(u.jsx)("polygon",{className:"cls-4",points:"316 63 264 23 250 6 269 15 259 0 279 11 285 11 301 25 314 26 330 42 353 46 316 63"}),Object(u.jsx)("path",{className:"cls-5",d:"M179,139c-1-2-24-35-24-35l42,12L153,88l-2-16,21,11h7l27,28,6-24-16-4L175,63l10,1-4-12,7,1,17,16,24,14-18,68Z"}),Object(u.jsx)("polygon",{className:"cls-6",points:"286 49 267 34 272 33 288 44 294 51 286 49"})]})]})})]}),Object(u.jsxs)("div",{className:"footer-content",children:[Object(u.jsxs)("div",{className:"top",children:[Object(u.jsx)("h3",{children:y?new Date(1e3*y.location.localtime_epoch).toLocaleDateString(S.lang,{weekday:"long",day:"numeric",month:"short"}):null}),Object(u.jsxs)("div",{children:[Object(u.jsx)("svg",{className:1===d?"active-svg":null,onClick:function(){F(1)},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Object(u.jsx)("path",{d:"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"})}),Object(u.jsxs)("svg",{className:2===d?"active-svg":null,onClick:function(){F(2)},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(u.jsx)("circle",{cx:"12",cy:"12",r:"5"}),Object(u.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),Object(u.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),Object(u.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),Object(u.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),Object(u.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),Object(u.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),Object(u.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),Object(u.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),Object(u.jsxs)("svg",{className:3===d?"active-svg":null,onClick:function(){F(3)},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(u.jsx)("circle",{cx:"12",cy:"12",r:"3"}),Object(u.jsx)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})]})]}),Object(u.jsx)("div",{className:"line"}),Object(u.jsxs)("div",{className:"bot",children:[Object(u.jsxs)("div",{className:1===d?"tab-temp":"hide",children:[y?Object(u.jsx)(O,{data:y.current,params:S,type:"current"},parseInt(y.location.localtime.substr(11,2))):null,y?Object(u.jsx)(x,{num:4,localTime:parseInt(y.location.localtime.substr(11,2))+1,today:y.forecast.forecastday[0],tomorrow:y.forecast.forecastday[1],params:S}):null]}),Object(u.jsx)("div",{className:2===d?"tab-stat":"hide",children:y?Object(u.jsx)(p,{dailyData:y.forecast.forecastday[0].day,curentData:y.current,params:S}):null}),Object(u.jsx)("div",{className:3===d?"tab-settings":"hide",children:Object(u.jsx)(f,{onChange:function(e){M(e)}})})]})]})]})]}):Object(u.jsx)(g,{})})})}c(64);function y(e){var t=Object(s.useState)(""),c=Object(r.a)(t,2),n=c[0],a=c[1];return Object(u.jsx)("div",{className:"wrapper-input",children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==n&&e.onChange(n),a("")},children:[Object(u.jsx)("label",{htmlFor:"city",children:"City"}),Object(u.jsx)("input",{value:n,onChange:function(e){return a(e.target.value)},name:"city",type:"text",autoComplete:"off"})]})})}function w(e){var t=Object(s.useRef)(null);return Object(s.useEffect)((function(){e.alert&&""!==e.alert&&(t.current.classList.remove("fade-out"),t.current.classList.add("fade-in"),setTimeout((function(){t.current.classList.add("fade-out"),t.current.classList.remove("fade-in"),setTimeout((function(){e.handleAlert("")}),1e3)}),3e3))}),[e]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"alert",ref:t,children:[Object(u.jsx)("img",{src:"https://img.icons8.com/dusk/64/000000/cancel.png",alt:"danger alert"}),Object(u.jsx)("p",{children:e.alert?e.alert:""}),Object(u.jsx)("img",{onClick:function(){t.current.classList.add("fade-out"),t.current.classList.remove("fade-in")},src:"https://img.icons8.com/windows/64/ffffff/macos-close.png",alt:"close alert"})]})})}function N(){var e=Object(s.useState)(!0),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(),i=Object(r.a)(a,2),h=i[0],b=i[1],O=Object(s.useState)([]),x=Object(r.a)(O,2),p=x[0],m=x[1],f=Object(s.useState)(),N=Object(r.a)(f,2),k=N[0],C=N[1];function _(e){C(e)}return Object(s.useEffect)((function(){o.a.initialize("G-S75JB5D6QL"),o.a.pageview(window.location.pathname+window.location.search),navigator.userAgent.match(/(android|iphone)/gi)&&window.screen.orientation.lock("portrait"),document.title="Starry Weather",setTimeout((function(){n(!1)}),1e3),navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){b({lat:e.coords.latitude,lng:e.coords.longitude})})):console.log("Geolocation is not supported by this browser.")}),[]),Object(u.jsx)("div",{className:"App",children:c?Object(u.jsx)(g,{}):Object(u.jsx)(j.a,{children:Object(u.jsxs)(d.c,{children:[Object(u.jsxs)(d.a,{path:"/",exact:!0,children:[Object(u.jsxs)("div",{className:"slider",children:[Object(u.jsxs)("div",{className:"flex-col",children:[Object(u.jsx)(y,{onChange:function(e){m([].concat(Object(l.a)(p),[e]))},alert:k,handleAlert:_}),Object(u.jsx)(w,{alert:k,handleAlert:_})]}),Object(u.jsx)(v,{coords:h||void 0,handleAlert:_}),p.map((function(e,t){return Object(u.jsx)(v,{city:e,handleAlert:_},t)}))]}),Object(u.jsxs)("div",{className:"footer",children:["Made with ",Object(u.jsx)("img",{src:"https://img.icons8.com/dusk/64/000000/like.png",alt:"love"})," for learning purposes by ",Object(u.jsx)("a",{href:"https://delceyhugo.dev/",children:"me"}),"."]})]}),Object(u.jsx)(d.a,{path:"/",children:Object(u.jsx)("div",{children:"ERROR 404"})})]})})})}var k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),k()}},[[68,1,2]]]);
//# sourceMappingURL=main.f66ab5f6.chunk.js.map