(this.webpackJsonptestvideo=this.webpackJsonptestvideo||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(9),o=n.n(i),s=(n(15),n(16),n(4)),l=n(10),r=n.n(l),u=n(1),p=function(e){var t=e.url,n=Object(c.useRef)(null),a=Object(c.useState)(!1),i=Object(s.a)(a,2),o=i[0],l=i[1];return Object(u.jsxs)("div",{className:"MainPlayerMob".concat(o?" MainPlayerMob--playing":""),onClick:function(){l(!o)},children:[Object(u.jsx)("div",{className:"MainPlayerMob__cover",children:Object(u.jsx)("span",{children:"+"})}),Object(u.jsx)(r.a,{ref:n,width:"100%",height:"auto",volume:1,loop:!1,playing:o,playbackRate:1,playsinline:!0,url:t,onEnded:function(){n.current.seekTo(0),l(!1)}})]})},d=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];document.querySelector(".video1");return Object(u.jsxs)("div",{onClick:function(){return function(){var e=document.querySelector(".video1");n?(a(!1),e.pause()):(a(!0),e.play())}()},children:["Start Playback",Object(u.jsx)("video",{src:"https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",width:"100%",height:"auto",playsInline:!0,"webkit-playsinline":!0,className:"video1",preload:"auto"})]})};var j=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{url:"https://www.youtube.com/watch?v=oUFJJNQGwhk"}),Object(u.jsx)(p,{url:"https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"}),Object(u.jsx)(d,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),b()}},[[40,1,2]]]);
//# sourceMappingURL=main.2e2e83a1.chunk.js.map