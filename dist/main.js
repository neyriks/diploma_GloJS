!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{let e=document.querySelector(".clubs-list"),t=document.querySelector(".clubs-list ul");e.addEventListener("click",()=>{let e=document.querySelector(".clubs-list ul").style.display;t.style.display="block"===e?"none":"block"})};var i=()=>{const e=document.querySelector(".open-popup"),t=document.getElementById("free_visit_form"),n=document.querySelector("#free_visit_form .close-form"),o=document.querySelector("#free_visit_form .overlay");e.addEventListener("click",()=>{t.style.display="block",t.style.opacity=0,function({duration:e,draw:t,timing:n}){const o=performance.now();requestAnimationFrame((function i(s){let r=(s-o)/e;r>1&&(r=1);const l=n(r);t(l),r<1&&requestAnimationFrame(i)}))}({duration:500,timing:e=>e,draw(e){t.style.opacity=1*e}})}),n.addEventListener("click",()=>{t.style.display="none"}),o.addEventListener("click",e=>{e.target===o&&(t.style.display="none")})};var s=()=>{const e=document.querySelector(".fixed-gift"),t=document.querySelector("#gift"),n=document.querySelector("#gift .close-form"),o=document.querySelector("#gift .overlay"),i=document.querySelector("#gift .close-btn");e?(e.addEventListener("click",()=>{t.style.display="block",t.style.opacity=0,function({duration:e,draw:t,timing:n}){const o=performance.now();requestAnimationFrame((function i(s){let r=(s-o)/e;r>1&&(r=1);const l=n(r);t(l),r<1&&requestAnimationFrame(i)}))}({duration:500,timing:e=>e,draw(e){t.style.opacity=1*e}}),e.style.display="none"}),n.addEventListener("click",()=>{t.style.display="none"}),o.addEventListener("click",e=>{e.target===o&&(t.style.display="none")}),i.addEventListener("click",()=>{t.style.display="none"})):console.log("No gift on this page")};var r=()=>{const e=document.querySelector(".callback-btn"),t=document.querySelector("#callback_form"),n=document.querySelector(".close-form"),o=document.querySelector(".overlay");e.addEventListener("click",()=>{t.style.display="block"}),e.addEventListener("click",()=>{t.style.display="block",t.style.opacity=0,function({duration:e,draw:t,timing:n}){const o=performance.now();requestAnimationFrame((function i(s){let r=(s-o)/e;r>1&&(r=1);const l=n(r);t(l),r<1&&requestAnimationFrame(i)}))}({duration:500,timing:e=>e,draw(e){t.style.opacity=1*e}})}),n.addEventListener("click",()=>{t.style.display="none"}),o.addEventListener("click",e=>{e.target===o&&(t.style.display="none")})};var l=()=>{const e=document.querySelector(".top-menu");window.addEventListener("scroll",()=>{let t=window.scrollY;e.style.position=t>400?"fixed":""})};var c=()=>{const e=document.querySelector(".top-menu img"),t=document.querySelector(".popup-menu"),n=document.querySelector(".close-menu-btn img"),o=document.querySelectorAll(".scroll");e.addEventListener("click",()=>{t.style.display="flex"}),n.addEventListener("click",()=>{t.style.display="none"}),o.forEach(e=>{e.addEventListener("click",()=>{t.style.display="none"})})};var a=()=>{const e=document.querySelectorAll(".main-slider .slide");let t=0;setInterval(()=>{e[t].style.display="none",t++,t>=e.length&&(t=0),e[t].style.display="inline-block"},4e3)};var d=()=>{const e=document.querySelector("#totop");document.addEventListener("scroll",()=>{let t=window.scrollY;e.style.display=t<=500?"none":"block"})};var u=()=>{const e=document.getElementById("thanks"),t=document.querySelectorAll("form"),n=document.createElement("div");n.classList.add("toDel"),n.style.cssText="font-size: 16px; color: #ffd11a; margin-top: 5px;",t.forEach(t=>{t.addEventListener("submit",t=>{t.preventDefault();let s=t.target,r=s.children,l=s.querySelector(".personal-data");for(let e=0;e<r.length;e++)if(l){if(!1===s.querySelector(".personal-data input").checked){const e=document.createElement("div");return e.classList.add("validator-error"),e.textContent="Необходимо согласиться на обработку данных",l.insertAdjacentElement("beforeend",e),void setTimeout(()=>e.remove(),2e3)}}s.appendChild(n),n.innerHTML="Загрузка...";let c=s.querySelectorAll("input"),a=s.querySelector("#price-total");const d=new FormData;a&&d.append(a.id,a.textContent),c.forEach(e=>{("text"===e.type||"tel"===e.type||"checkbox"!==e.type&&e.checked)&&d.append(e.name,e.value)}),i(d).then(e=>{if(200!==e.status)throw new Error("status network");n.remove(),o(),s.querySelectorAll("input").forEach(e=>{e.value="",e.checked="",e.classList.remove("success")})}).catch(t=>{n.remove(),o(),e.querySelector(".form-content").innerHTML='<p>Во время отправки формы возникала ошибка.</p>\n                <button class="btn close-btn">OK</button>'})}),t.addEventListener("input",e=>{const t=e.target;"phone"===t.name&&(t.value=t.value.replace(/[^\\+\d]/g,"")),"name"===t.name&&(t.value=t.value.replace(/[^а-я ]/gi,""))})});const o=()=>{e.style.display="block",e.querySelector(".form-content").innerHTML='<h4>Спасибо!</h4><p>Ваша заявка отправлена.<br>\n        Мы свяжемся с вами в ближайшее время.</p><button class="btn close-btn">OK</button>',e.addEventListener("click",t=>{let n=t.target;n.closest(".form-content")&&!n.classList.contains("close-btn")||(e.style.display="none")}),setTimeout(()=>{e.style.display="none"},3e3)};(()=>{const e=document.createElement("style");e.textContent="\n        .validator-error {\n            margin-top: 15px;\n            font-size: 18px;\n            font-family:sans-serif;\n            color: red;\n        }\n        ",document.head.appendChild(e)})();const i=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:e})};var p=class{constructor({main:e,wrap:t,next:n,prev:o,infinity:i=!1,position:s=0,slidesToShow:r=3,responsive:l=[]}){e||t||console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"'),this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(n),this.prev=document.querySelector(o),this.slidesToShow=r,this.options={position:s,slideWidth:Math.floor(100/this.slidesToShow),infinity:i,maxPosition:this.slides.length-this.slidesToShow},this.responsive=l}init(){this.addLexClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}addLexClass(){this.main.classList.add("lex-slider"),this.wrap.classList.add("lex-slider__wrap");for(const e of this.slides)e.classList.add("lex-slider__item")}addStyle(){let e=document.getElementById("sliderCarousel-style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n        .lex-slider {\n          overflow: hidden !important;\n        }\n        .lex-slider__wrap {\n          display: flex !important;\n          transition: transform 0.5s !important;\n          will-change: transform !important;\n        }\n        .lex-slider__item {\n          flex: 0 0 ${this.options.slideWidth}% !important;\n          margin: 0 auto;\n        }\n        `,document.head.appendChild(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlide.bind(this)),this.next.addEventListener("click",this.nextSlide.bind(this))}prevSlide(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.slideWidth}%)`)}nextSlide(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.slideWidth}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="lex-slider__prev",this.next.className="lex-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);const e=document.createElement("style");e.textContent="\n        .lex-slider__prev,\n        .lex-slider__next {\n          margin: 0 10px;\n          border: 20px solid transparent;\n          cursor: pointer;\n          background: transparent;\n        }\n        .lex-slider__next {\n          position: absolute;\n          top: 144px;\n          right: -10px;\n          border-left-color: #181728;\n        }\n        .lex-slider__prev {\n          position: absolute;\n          top: 144px;\n          border-right-color: #181728;\n        }\n        .lex-slider__prev:hover,\n        .lex-slider__next:hover,\n        .lex-slider__prev:focus,\n        .lex-slider__next:focus {\n          background: transparent;\n          outline: none;\n        }\n        ",document.head.appendChild(e)}responseInit(){const e=this.slidesToShow,t=this.responsive.map(e=>e.breakpoint),n=Math.max(...t),o=()=>{const o=document.documentElement.clientWidth;if(o<n)for(let e=0;e<t.length;e++)o<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.slideWidth=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.slideWidth=Math.floor(100/this.slidesToShow),this.addStyle()};o(),window.addEventListener("resize",o)}};var m=()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide"),n=(document.querySelectorAll("#gallery button"),document.querySelectorAll(".dot"));t.forEach((e,t)=>{0===t?e.style.display="block":0!==t&&(e.style.display="none")});let o=0;e.addEventListener("click",e=>{let i=e.target;(e.preventDefault(),i.matches(".slider-arrow, .dot"))&&(t[o].style.display="none",((e,t,n)=>{e[t].classList.remove(n)})(n,o,"dot_active"),i.matches("#arrow_right")&&o++,i.matches("#arrow_left")?o--:i.matches(".dot")&&n.forEach((e,t)=>{e===i&&(o=t)}),o>=t.length&&(o=0),o<0&&(o=t.length-1),((e,t)=>{e[t].style.display="block"})(t,o),((e,t,n)=>{e[t].classList.add(n)})(n,o,"dot_active"))})};var y=()=>{let e=document.querySelectorAll(".time input"),t=document.getElementById("price-total");console.log(e);for(let n=0;n<e.length;n++){let n=2999*e.value;t.innerHTML=n}};(()=>{const e=[...document.querySelectorAll('li>a[href^="#"]'),document.querySelector("#totop")];for(const t of e)t.addEventListener("click",e=>{e.preventDefault();const n=t.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})})})(),o(),i(),s(),r(),l(),c(),a(),d(),u(),m(),y(),new p({main:"#services .wrapper",wrap:".services-slider"}).init()}]);