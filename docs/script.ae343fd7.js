parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oAKr":[function(require,module,exports) {
module.exports="Blackmoji.115ca4d3.gif";
},{}],"wFJa":[function(require,module,exports) {
module.exports="Blackmoji2.f7fd9338.gif";
},{}],"ZVXr":[function(require,module,exports) {
module.exports="text-delete.7406ccf4.gif";
},{}],"H1MV":[function(require,module,exports) {
module.exports="Whitemoji.11013762.gif";
},{}],"YjS8":[function(require,module,exports) {
module.exports="Whitemoji2.42f06418.gif";
},{}],"fQwx":[function(require,module,exports) {
module.exports={Blackmoji:require("./Blackmoji.gif"),Blackmoji2:require("./Blackmoji2.gif"),"text-delete":require("./text-delete.gif"),Whitemoji:require("./Whitemoji.gif"),Whitemoji2:require("./Whitemoji2.gif")};
},{"./Blackmoji.gif":"oAKr","./Blackmoji2.gif":"wFJa","./text-delete.gif":"ZVXr","./Whitemoji.gif":"H1MV","./Whitemoji2.gif":"YjS8"}],"geDd":[function(require,module,exports) {
var define;
var e;!function(t,n){"function"==typeof e&&e.amd?e(function(){return n(t)}):"object"==typeof exports?module.exports=n:t.emergence=n(t)}(this,function(e){"use strict";var t,n,o,i,r,s,c,a,l,d,f={},u=function(){},m=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(navigator.userAgent)},h=function(e){var t=e.offsetWidth,n=e.offsetHeight,o=0,i=0;do{isNaN(e.offsetTop)||(o+=e.offsetTop),isNaN(e.offsetLeft)||(i+=e.offsetLeft)}while(null!==(e=e.offsetParent));return{width:t,height:n,top:o,left:i}},g=function(e){if(function(e){return null===e.offsetParent}(e))return!1;var t,o,i,r,f,u,m,g,v=h(e),w=function(e){var t,n;return e!==window?(t=e.clientWidth,n=e.clientHeight):(t=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight),{width:t,height:n}}(n),p=function(e){return e!==window?{x:e.scrollLeft+h(e).left,y:e.scrollTop+h(e).top}:{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}}(n),E=v.width,y=v.height,L=v.top,b=v.left;return t=L+y*s,o=b+E-E*s,i=L+y-y*s,r=b+E*s,f=p.y+c,u=p.x-a+w.width,m=p.y-l+w.height,g=p.x+d,t<m&&i>f&&r<u&&o>g},v=function(){t||(clearTimeout(t),t=setTimeout(function(){f.engage(),t=null},o))};return f.init=function(e){var t,f,h=function(e,t){return parseInt(e||t,10)};n=(e=e||{}).container||window,i=void 0===e.reset||e.reset,r=void 0===e.handheld||e.handheld,o=h(e.throttle,250),t=e.elemCushion,f=.15,s=parseFloat(t||f),c=h(e.offsetTop,0),a=h(e.offsetRight,0),l=h(e.offsetBottom,0),d=h(e.offsetLeft,0),u=e.callback||u,"querySelectorAll"in document?(m()&&r||!m())&&(document.documentElement.className+=" emergence",window.addEventListener?(window.addEventListener("load",v,!1),n.addEventListener("scroll",v,!1),n.addEventListener("resize",v,!1)):(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&v()}),n.attachEvent("onscroll",v),n.attachEvent("onresize",v))):console.log("Emergence.js is not supported in this browser.")},f.engage=function(){for(var e,t=document.querySelectorAll("[data-emergence]"),n=t.length,o=0;o<n;o++)e=t[o],g(e)?(e.setAttribute("data-emergence","visible"),e.className=e.className,u(e,"visible")):!0===i?(e.setAttribute("data-emergence","hidden"),e.className=e.className,u(e,"reset")):!1===i&&u(e,"noreset");n||f.disengage()},f.disengage=function(){window.removeEventListener?(n.removeEventListener("scroll",v,!1),n.removeEventListener("resize",v,!1)):(n.detachEvent("onscroll",v),n.detachEvent("onresize",v)),clearTimeout(t)},f});
},{}],"mpVp":[function(require,module,exports) {
var t=require("*.gif"),i=t.Whitemoji2,e=t.Blackmoji2;window.addEventListener("load",function(){$("[data-src=Whitemoji2]")[0].setAttribute("src",i)},!1);var o=2e4;setTimeout(function(){$(".arrow").css("visibility","visible")},o);var n=require("emergence.js"),s=n(),r="home-group",a="show-me-your-work-group",c="what-you-can-do-group",h="smooth-animation-group",l="contact-group",u={};document.querySelectorAll(".message-block").forEach(function(t){return t.style.top="0px"}),document.querySelectorAll(".group-container").forEach(function(t,i){return t.style.order=i});var p=window.devicePixelRatio,d=Math.PI,f=Math.sqrt,y=Math.round,m=Math.random,w=Math.cos,v=Math.sin,x=window.requestAnimationFrame,g=window.cancelAnimationFrame||window.cancelRequestAnimationFrame,b=Date.now||function(){return(new Date).getTime()};function C(){var t=d/180,i=[["#df0049","#660671"],["#00e857","#005291"],["#2bebbc","#05798a"],["#ffd200","#b06c00"]];function e(t,i){this.x=t,this.y=i,this.Length=function(){return f(this.SqrLength())},this.SqrLength=function(){return this.x*this.x+this.y*this.y},this.Add=function(t){this.x+=t.x,this.y+=t.y},this.Sub=function(t){this.x-=t.x,this.y-=t.y},this.Div=function(t){this.x/=t,this.y/=t},this.Mul=function(t){this.x*=t,this.y*=t},this.Normalize=function(){var t=this.SqrLength();if(0!=t){var i=1/f(t);this.x*=i,this.y*=i}},this.Normalized=function(){var t=this.SqrLength();if(0!=t){var i=1/f(t);return new e(this.x*i,this.y*i)}return new e(0,0)}}function o(t,i,o,n){this.position=new e(t,i),this.mass=o,this.drag=n,this.force=new e(0,0),this.velocity=new e(0,0),this.AddForce=function(t){this.force.Add(t)},this.Integrate=function(t){var i=this.CurrentForce(this.position);i.Div(this.mass);var o=new e(this.velocity.x,this.velocity.y);o.Mul(t),this.position.Add(o),i.Mul(t),this.velocity.Add(i),this.force=new e(0,0)},this.CurrentForce=function(t,i){var o=new e(this.force.x,this.force.y),n=this.velocity.Length(),s=new e(this.velocity.x,this.velocity.y);return s.Mul(this.drag*this.mass*n),o.Sub(s),o}}function n(o,s){this.pos=new e(o,s),this.rotationSpeed=600*m()+800,this.angle=t*m()*360,this.rotation=t*m()*360,this.cosA=1,this.size=5,this.oscillationSpeed=1.5*m()+.5,this.xSpeed=40,this.ySpeed=60*m()+50,this.corners=new Array,this.time=m();var r=y(m()*(i.length-1));this.frontColor=i[r][0],this.backColor=i[r][1];for(var a=0;a<4;a++){var c=w(this.angle+t*(90*a+45)),h=v(this.angle+t*(90*a+45));this.corners[a]=new e(c,h)}this.Update=function(i){this.time+=i,this.rotation+=this.rotationSpeed*i,this.cosA=w(t*this.rotation),this.pos.x+=w(this.time*this.oscillationSpeed)*this.xSpeed*i,this.pos.y+=this.ySpeed*i,this.pos.y>n.bounds.y&&(this.pos.x=m()*n.bounds.x,this.pos.y=0)},this.Draw=function(t){this.cosA>0?t.fillStyle=this.frontColor:t.fillStyle=this.backColor,t.beginPath(),t.moveTo((this.pos.x+this.corners[0].x*this.size)*p,(this.pos.y+this.corners[0].y*this.size*this.cosA)*p);for(var i=1;i<4;i++)t.lineTo((this.pos.x+this.corners[i].x*this.size)*p,(this.pos.y+this.corners[i].y*this.size*this.cosA)*p);t.closePath(),t.fill()}}function s(n,r,a,c,h,l,u,d){this.particleDist=c,this.particleCount=a,this.particleMass=u,this.particleDrag=d,this.particles=new Array;var x=y(m()*(i.length-1));this.frontColor=i[x][0],this.backColor=i[x][1],this.xOff=w(t*l)*h,this.yOff=v(t*l)*h,this.position=new e(n,r),this.prevPosition=new e(n,r),this.velocityInherit=2*m()+4,this.time=100*m(),this.oscillationSpeed=2*m()+2,this.oscillationDistance=40*m()+40,this.ySpeed=40*m()+80;for(var g=0;g<this.particleCount;g++)this.particles[g]=new o(n,r-g*this.particleDist,this.particleMass,this.particleDrag);this.Update=function(t){var i=0;this.time+=t*this.oscillationSpeed,this.position.y+=this.ySpeed*t,this.position.x+=w(this.time)*this.oscillationDistance*t,this.particles[0].position=this.position;var o=this.prevPosition.x-this.position.x,n=this.prevPosition.y-this.position.y,r=f(o*o+n*n);for(this.prevPosition=new e(this.position.x,this.position.y),i=1;i<this.particleCount;i++){var a=e.Sub(this.particles[i-1].position,this.particles[i].position);a.Normalize(),a.Mul(r/t*this.velocityInherit),this.particles[i].AddForce(a)}for(i=1;i<this.particleCount;i++)this.particles[i].Integrate(t);for(i=1;i<this.particleCount;i++){var c=new e(this.particles[i].position.x,this.particles[i].position.y);c.Sub(this.particles[i-1].position),c.Normalize(),c.Mul(this.particleDist),c.Add(this.particles[i-1].position),this.particles[i].position=c}this.position.y>s.bounds.y+this.particleDist*this.particleCount&&this.Reset()},this.Reset=function(){this.position.y=-m()*s.bounds.y,this.position.x=m()*s.bounds.x,this.prevPosition=new e(this.position.x,this.position.y),this.velocityInherit=2*m()+4,this.time=100*m(),this.oscillationSpeed=2*m()+1.5,this.oscillationDistance=40*m()+40,this.ySpeed=40*m()+80;var t=y(m()*(i.length-1));this.frontColor=i[t][0],this.backColor=i[t][1],this.particles=new Array;for(var n=0;n<this.particleCount;n++)this.particles[n]=new o(this.position.x,this.position.y-n*this.particleDist,this.particleMass,this.particleDrag)},this.Draw=function(t){for(var i=0;i<this.particleCount-1;i++){var o=new e(this.particles[i].position.x+this.xOff,this.particles[i].position.y+this.yOff),n=new e(this.particles[i+1].position.x+this.xOff,this.particles[i+1].position.y+this.yOff);this.Side(this.particles[i].position.x,this.particles[i].position.y,this.particles[i+1].position.x,this.particles[i+1].position.y,n.x,n.y)<0?(t.fillStyle=this.frontColor,t.strokeStyle=this.frontColor):(t.fillStyle=this.backColor,t.strokeStyle=this.backColor),0==i?(t.beginPath(),t.moveTo(this.particles[i].position.x*p,this.particles[i].position.y*p),t.lineTo(this.particles[i+1].position.x*p,this.particles[i+1].position.y*p),t.lineTo(.5*(this.particles[i+1].position.x+n.x)*p,.5*(this.particles[i+1].position.y+n.y)*p),t.closePath(),t.stroke(),t.fill(),t.beginPath(),t.moveTo(n.x*p,n.y*p),t.lineTo(o.x*p,o.y*p),t.lineTo(.5*(this.particles[i+1].position.x+n.x)*p,.5*(this.particles[i+1].position.y+n.y)*p),t.closePath(),t.stroke(),t.fill()):i==this.particleCount-2?(t.beginPath(),t.moveTo(this.particles[i].position.x*p,this.particles[i].position.y*p),t.lineTo(this.particles[i+1].position.x*p,this.particles[i+1].position.y*p),t.lineTo(.5*(this.particles[i].position.x+o.x)*p,.5*(this.particles[i].position.y+o.y)*p),t.closePath(),t.stroke(),t.fill(),t.beginPath(),t.moveTo(n.x*p,n.y*p),t.lineTo(o.x*p,o.y*p),t.lineTo(.5*(this.particles[i].position.x+o.x)*p,.5*(this.particles[i].position.y+o.y)*p),t.closePath(),t.stroke(),t.fill()):(t.beginPath(),t.moveTo(this.particles[i].position.x*p,this.particles[i].position.y*p),t.lineTo(this.particles[i+1].position.x*p,this.particles[i+1].position.y*p),t.lineTo(n.x*p,n.y*p),t.lineTo(o.x*p,o.y*p),t.closePath(),t.stroke(),t.fill())}},this.Side=function(t,i,e,o,n,s){return(t-e)*(s-o)-(i-o)*(n-e)}}e.Lerp=function(t,i,o){return new e((i.x-t.x)*o+t.x,(i.y-t.y)*o+t.y)},e.Distance=function(t,i){return f(e.SqrDistance(t,i))},e.SqrDistance=function(t,i){var e=t.x-i.x,o=t.y-i.y;return e*e+o*o+z*z},e.Scale=function(t,i){return new e(t.x*i.x,t.y*i.y)},e.Min=function(t,i){return new e(Math.min(t.x,i.x),Math.min(t.y,i.y))},e.Max=function(t,i){return new e(Math.max(t.x,i.x),Math.max(t.y,i.y))},e.ClampMagnitude=function(t,i){var o=t.Normalized;return new e(o.x*i,o.y*i)},e.Sub=function(t,i){return new e(t.x-i.x,t.y-i.y,t.z-i.z)},n.bounds=new e(0,0),s.bounds=new e(0,0),(r={}).Context=function(t){var i=0,o=document.getElementById(t),a=o.parentNode,c=a.offsetWidth,h=a.offsetHeight;o.width=c*p,o.height=h*p;var l=o.getContext("2d"),u=new Array;for(s.bounds=new e(c,h),i=0;i<11;i++)u[i]=new s(m()*c,-m()*h*2,30,8,8,45,1,.05);var d=new Array;for(n.bounds=new e(c,h),i=0;i<95;i++)d[i]=new n(m()*c,m()*h);this.resize=function(){c=a.offsetWidth,h=a.offsetHeight,o.width=c*p,o.height=h*p,n.bounds=new e(c,h),s.bounds=new e(c,h)},this.start=function(){this.stop();this.update()},this.stop=function(){g(this.interval)},this.update=function(){var t=0;for(l.clearRect(0,0,o.width,o.height),t=0;t<95;t++)d[t].Update(.02),d[t].Draw(l);for(t=0;t<11;t++)u[t].Update(.02),u[t].Draw(l);this.interval=x(function(){r.update()})}};var r=new r.Context("confetti");r.start(),window.addEventListener("resize",function(t){r.resize()});var a=document.getElementById("confetti");a.width=window.innerWidth,a.height=window.innerHeight}function S(t,i){document.getElementById(t).style.order=i,document.getElementById(t).classList.remove("hidden")}function k(t,i,e){if(!u["".concat(i).concat(e)]){var o=document.createElement("a"),n=document.createTextNode(t);return o.appendChild(n),o.setAttribute("href",i),o.classList.add("btn"),document.querySelector("#".concat(e," .button-group")).appendChild(o),u["".concat(i).concat(e)]=!0,o}return null}function A(t){t.remove()}function M(t,i){var e=document.querySelector(t);if(e&&!e.classList.contains("gallery-active")){var o="right"==i?i:"left";e.classList.add("gallery-active"),e.style.position="relative";var n=e.childElementCount,s=e.clientWidth,r=n*(s/n)/1.5;e.style[o]=-r+"px";var a=0;e.addEventListener("click",function(){var t=parseInt(e.style[o].replace("px",""));++a>=n?(e.style[o]=-r+"px",a=0):e.style[o]=a==n-1?"0px":t+s/n+"px"})}}!function(t){var i=b();var e=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.clearTimeout;x=t.requestAnimationFrame||t.webkitRequestAnimationFrame||function(t){var e=b(),o=Math.max(0,16-(e-i)),n=setTimeout(t,o);return i=e,n},g=function(i){e.call(t,i)}}(window),document.querySelector("#".concat(r," .show-me-your-work-btn")).addEventListener("click",function(){S(a,1),document.querySelector("#".concat(r," .what-you-can-do-btn")).remove(),document.querySelector("#".concat(r," .show-me-your-work-btn")).remove(),M(".gallery-block-show-me-your-work");var t=k("Give me more","#smooth-animation-group",a),i=k("What can you do?","#what-you-can-do-group",a);i&&i.addEventListener("click",function(){A(t),A(i),S(c,2);var e=k("How can I contact you?","#contact-group",c);e&&e.addEventListener("click",function(){A(e),S(l,3),$("#confetti").addClass("opa"),C()})}),t&&t.addEventListener("click",function(){A(i),A(t),S(h,2),M(".gallery-block-smooth-animation");var e=k("What you can do?","#what-you-can-do-group",h);e&&e.addEventListener("click",function(){A(e),S(c,3);var t=k("How can I contact you?","#contact-group",c);t&&t.addEventListener("click",function(){A(t),S(l,4),$("#confetti").addClass("opa"),C()})})})}),document.querySelector("#".concat(r," .what-you-can-do-btn")).addEventListener("click",function(){S(c,1),document.querySelector("#".concat(r," .show-me-your-work-btn")).remove(),document.querySelector("#".concat(r," .what-you-can-do-btn")).remove();var t=k("Show your workkk","#show-me-your-work-group",c);t.addEventListener("click",function(){A(t),S(a,2),M(".gallery-block-show-me-your-work");var i=k("Give me more","#smooth-animation-group",a),e=k("How can I contact you?","#contact-group",a);i.addEventListener("click",function(){A(e),A(i),S(h,3),M(".gallery-block-smooth-animation");var t=k("How can I contact you?","#contact-group",h);t.addEventListener("click",function(){A(t),S(l,4),$("#confetti").addClass("opa"),C()})}),e.addEventListener("click",function(){A(e),A(i),S(l,3),$("#confetti").addClass("opa"),C()})})}),M(".gallery-block-home-group"),s.init({container:window,reset:!1,handheld:!0,throttle:25,elemCushion:.15,offsetTop:0,offsetRight:0,offsetBottom:0,offsetLeft:0,callback:function(t,i){document.querySelectorAll(".message-block[data-emergence=visible]").forEach(function(t){var i=t.getBoundingClientRect().top,e=window.outerHeight;if(i>=0&&i<=e){var o=i/e*100;o>=0&&o<=8?t.style.top=i/e*100-120+"px":o>8&&o<=25?t.style.top=i/e*100-100+"px":o>25&&o<=50?t.style.top=i/e*100-85+"px":o>50&&o<=75?t.style.top=i/e*70-60+"px":o>75&&o<=100&&(t.style.top=i/e*50-40+"px")}})}}),setTimeout(function(){window.scrollTo(0,0)},200),$(document).ready(function(){$(".profile").addClass("animate"),$(".page").addClass("move"),$(".header").addClass("opac")}),$(window).scroll(function(){$(this).scrollTop()>50?($(".profile.animate").addClass("smaller"),$(".frame").addClass("animatef"),$(".warp").addClass("hidden")):($(".profile.animate").removeClass("smaller"),$(".frame").removeClass("animatef"),$(".warp").addClass("hidden"))}),window.onload=function(){!function(){var t=new Date,i=t.getHours(),e=t.getHours(),o=t.getMinutes(),n=(t.getSeconds(),"PM");o<10&&(o="0"+o);e>12&&(e-=12);0==e&&(e=12);i<12&&(n="AM");document.getElementById("currentTime").innerHTML=e+":"+o+" "+n}()};var T=document.querySelector('.theme-switch input[type="checkbox"]');function L(t){t.target.checked?(document.documentElement.setAttribute("data-theme","dark"),$(".profile").attr("src",src="".concat(e))):(document.documentElement.setAttribute("data-theme","light"),$(".profile").attr("src",src="".concat(i)))}T.addEventListener("change",L,!1),function(t,i){t.fn.inViewport=function(e){return this.each(function(o,n){function s(){var o=t(n).outerHeight(),s=t(i).height(),r=n.getBoundingClientRect(),a=r.top,c=r.bottom;return e.call(n,Math.max(0,a>0?Math.min(o,s-a):Math.min(c,s)))}s(),t(i).on("resize scroll",s)})}}(jQuery,window),$(".bigger").inViewport(function(t){t&&$(this).addClass("triggeredCSS3")}),$(".box").inViewport(function(t){t&&$(this).addClass("load")});
},{"*.gif":"fQwx","emergence.js":"geDd"}]},{},["mpVp"], null)
//# sourceMappingURL=script.ae343fd7.js.map