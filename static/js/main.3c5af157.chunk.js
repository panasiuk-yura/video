(this.webpackJsonptestvideo=this.webpackJsonptestvideo||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(9),i=n.n(s),o=(n(15),n(16),n(4)),r=n(10),l=n.n(r),u=n(1),d=function(e){var t=e.url,n=Object(c.useRef)(null),a=Object(c.useState)(!1),s=Object(o.a)(a,2),i=s[0],r=s[1];return Object(u.jsxs)("div",{className:"MainPlayerMob".concat(i?" MainPlayerMob--playing":""),onClick:function(){r(!i)},children:[Object(u.jsx)("div",{className:"MainPlayerMob__cover",children:Object(u.jsx)("span",{children:"+"})}),Object(u.jsx)(l.a,{ref:n,width:"100%",height:"auto",volume:1,playing:i,playsinline:!0,url:t,onEnded:function(){n.current.seekTo(0),r(!1)}})]})},j=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];document.querySelector(".video1");return Object(u.jsxs)("div",{onClick:function(){return function(){var e=document.querySelector(".video1");n?(a(!1),e.pause()):(a(!0),e.play())}()},children:["Start Playback",Object(u.jsx)("video",{src:"https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",width:"100%",height:"auto",playsInline:!0,"webkit-playsinline":!0,className:"video1",preload:"auto"})]})};var p=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{url:"https://luk-prod.s3.us-east-2.amazonaws.com/static/HP1.mp4"}),Object(u.jsx)(d,{url:"https://luk-prod.s3.us-east-2.amazonaws.com/static/HP2.mp4"}),Object(u.jsx)(j,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),b()}},[[40,1,2]]]);
//# sourceMappingURL=main.3c5af157.chunk.js.map