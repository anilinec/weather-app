(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{106:function(e,t,c){},124:function(e,t,c){},135:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(32),i=c.n(r),s=(c(106),c(21)),l=c(88),j=c.n(l),o=(c(124),c(5));function d(){return Object(o.jsx)("div",{className:"app-header",children:"Current Weather"})}var u=c(149),b=c(150),h=c(89),O=c.n(h),m=c(23),x=c(24);function f(e){var t=e.temprature,c=e.city,a=e.humidity,n=e.icon,r=null;return"Haze"===n?r=Object(o.jsx)(m.a,{icon:x.d,size:"lg",color:"#212121"}):"Thunderstorm"===n?r=Object(o.jsx)(m.a,{icon:x.a,size:"lg",color:"#212121"}):"Drizzle"===n||"Rain"===n?r=Object(o.jsx)(m.a,{icon:x.c,size:"lg",color:"#212121"}):"Snow"===n?r=Object(o.jsx)(m.a,{icon:x.e,size:"lg",color:"#212121"}):"Mist"===n?r=Object(o.jsx)(m.a,{icon:x.d,size:"lg",color:"#212121"}):"Clear"===n?r=Object(o.jsx)(m.a,{icon:x.f,size:"lg",color:"#212121"}):"Clouds"===n&&(r=Object(o.jsx)(m.a,{icon:x.b,size:"lg",color:"#212121"})),Object(o.jsxs)(u.a,{className:"weather-card-main",children:[Object(o.jsxs)(u.a.Content,{className:"weather-card",children:[Object(o.jsx)(u.a.Header,{className:"weather-card-child",children:c}),Object(o.jsx)("div",{className:"icon-container",children:r})]}),Object(o.jsx)(u.a.Content,{children:Object(o.jsx)(b.a,{children:Object(o.jsx)(b.a.Event,{children:Object(o.jsxs)(b.a.Content,{children:[Object(o.jsx)("h5",{className:"weather-card-child",children:O()().format("MMMM Do, h:mm a")}),Object(o.jsxs)("div",{className:"weather-card",children:[Object(o.jsxs)("div",{className:"weather-card-child",children:[Object(o.jsx)("b",{children:"Temprature"}),": ",Math.floor(t)," \u2103"]}),Object(o.jsxs)("div",{className:"weather-card-child",children:[Object(o.jsx)("b",{children:"Humidity"}),": ",a," %"]})]})]})})})})]})}var g=c(148);var p=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(null),i=Object(s.a)(r,2),l=i[0],u=i[1],b=Object(a.useState)(""),h=Object(s.a)(b,2),O=h[0],m=h[1],x=Object(a.useState)(null),p=Object(s.a)(x,2),v=p[0],w=p[1],S=Object(a.useState)(null),z=Object(s.a)(S,2),C=z[0],N=z[1],y=Object(a.useState)(null),M=Object(s.a)(y,2),F=M[0],P=M[1],T=Object(a.useState)(null),D=Object(s.a)(T,2),E=D[0],H=D[1],L=Object(a.useState)(""),k=Object(s.a)(L,2),B=k[0],I=k[1],J=Object(a.useState)(!0),W=Object(s.a)(J,2),R=W[0],q=W[1];return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude),u(e.coords.longitude)})),j.a.get("".concat("https://api.openweathermap.org/data/2.5/onecall","?lat=").concat(c,"&lon=").concat(l,"&exclude=hourly,minutely&appid=").concat("56e52227876feacc8e29f9e8b65c4cf5","&units=metric")).then((function(e){q(!1),w(e.data.current.temp),H(e.data.current.sunset),P(e.data.current.sunrise),N(e.data.current.humidity),m(e.data.timezone),I(e.data.current.weather[0].main)}))}),[c,l]),Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(d,{}),R?Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Loading..Please Wait"}),Object(o.jsx)(g.a,{active:!0,inline:"centered"})]}):Object(o.jsx)(f,{temprature:v,humidity:C,sunrise:F,sunset:E,city:O,icon:B})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,151)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};c(134);i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),v()}},[[135,1,2]]]);
//# sourceMappingURL=main.19697bc1.chunk.js.map