!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);fetch("https://baconipsum.com/api/?type=all-meat&paras=6").then(e=>e.json()).then(e=>{let t=e;const n=document.querySelector(".articles");t.forEach((e,t)=>{let r=e;r.length>410&&(r=e.slice(0,410));let a=function(e,t){let n=document.createElement("div");n.classList.add("article");let r=function(e){let t=document.createElement("h4"),n=e%4==0||e%4==3?"heading_orange":"heading_purple";t.classList.add("heading",n);let r=document.createElement("p");return r.classList.add("heading__text"),r.innerHTML="about super logo",t.append(r),t}(t),a=function(e){let t=document.createElement("img");return t.classList.add("article__image"),t.setAttribute("alt","image"),t.setAttribute("src",`https://picsum.photos/140?random=${e}`),t}(t),o=function(e){let t=document.createElement("div");t.classList.add("article__content");let n=document.createElement("p");n.classList.add("article__text"),n.innerHTML=e;let r=document.createElement("a");return r.classList.add("article__link-read-more"),r.setAttribute("href","#"),r.innerHTML="Read more...",t.append(n),t.append(r),t}(e);return n.append(r),n.append(a),n.append(o),n}(r,t);n.append(a)})})},function(e,t,n){}]);