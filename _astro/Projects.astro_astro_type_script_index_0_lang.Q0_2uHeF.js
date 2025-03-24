function It(t){return typeof t=="number"}function Et(t){return typeof t=="string"}function gt(t){return typeof t=="boolean"}function zt(t){return Object.prototype.toString.call(t)==="[object Object]"}function F(t){return Math.abs(t)}function Tt(t){return Math.sign(t)}function at(t,e){return F(t-e)}function Jt(t,e){if(t===0||e===0||F(t)<=F(e))return 0;const n=at(F(t),F(e));return F(n/t)}function Zt(t){return Math.round(t*100)/100}function ft(t){return lt(t).map(Number)}function Q(t){return t[pt(t)]}function pt(t){return Math.max(0,t.length-1)}function Dt(t,e){return e===pt(t)}function Bt(t,e=0){return Array.from(Array(t),(n,r)=>e+r)}function lt(t){return Object.keys(t)}function kt(t,e){return[t,e].reduce((n,r)=>(lt(r).forEach(c=>{const s=n[c],o=r[c],u=zt(s)&&zt(o);n[c]=u?kt(s,o):o}),n),{})}function Lt(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function Wt(t,e){const n={start:r,center:c,end:s};function r(){return 0}function c(i){return s(i)/2}function s(i){return e-i}function o(i,a){return Et(t)?n[t](i):t(e,i,a)}return{measure:o}}function dt(){let t=[];function e(c,s,o,u={passive:!0}){let i;if("addEventListener"in c)c.addEventListener(s,o,u),i=()=>c.removeEventListener(s,o,u);else{const a=c;a.addListener(o),i=()=>a.removeListener(o)}return t.push(i),r}function n(){t=t.filter(c=>c())}const r={add:e,clear:n};return r}function tn(t,e,n,r){const c=dt(),s=1e3/60;let o=null,u=0,i=0;function a(){c.add(t,"visibilitychange",()=>{t.hidden&&l()})}function h(){b(),c.clear()}function d(g){if(!i)return;o||(o=g,n(),n());const f=g-o;for(o=g,u+=f;u>=s;)n(),u-=s;const S=u/s;r(S),i&&(i=e.requestAnimationFrame(d))}function m(){i||(i=e.requestAnimationFrame(d))}function b(){e.cancelAnimationFrame(i),o=null,u=0,i=0}function l(){o=null,u=0}return{init:a,destroy:h,start:m,stop:b,update:n,render:r}}function nn(t,e){const n=e==="rtl",r=t==="y",c=r?"y":"x",s=r?"x":"y",o=!r&&n?-1:1,u=h(),i=d();function a(l){const{height:p,width:g}=l;return r?p:g}function h(){return r?"top":n?"right":"left"}function d(){return r?"bottom":n?"left":"right"}function m(l){return l*o}return{scroll:c,cross:s,startEdge:u,endEdge:i,measureSize:a,direction:m}}function ot(t=0,e=0){const n=F(t-e);function r(a){return a<t}function c(a){return a>e}function s(a){return r(a)||c(a)}function o(a){return s(a)?r(a)?t:e:a}function u(a){return n?a-n*Math.ceil((a-e)/n):a}return{length:n,max:e,min:t,constrain:o,reachedAny:s,reachedMax:c,reachedMin:r,removeOffset:u}}function Ht(t,e,n){const{constrain:r}=ot(0,t),c=t+1;let s=o(e);function o(m){return n?F((c+m)%c):r(m)}function u(){return s}function i(m){return s=o(m),d}function a(m){return h().set(u()+m)}function h(){return Ht(t,u(),n)}const d={get:u,set:i,add:a,clone:h};return d}function en(t,e,n,r,c,s,o,u,i,a,h,d,m,b,l,p,g,f,S){const{cross:x,direction:I}=t,O=["INPUT","SELECT","TEXTAREA"],T={passive:!1},E=dt(),L=dt(),D=ot(50,225).constrain(b.measure(20)),P={mouse:300,touch:400},v={mouse:500,touch:600},C=l?43:25;let U=!1,A=0,V=0,H=!1,j=!1,q=!1,$=!1;function _(y){if(!S)return;function M(B){(gt(S)||S(y,B))&&it(B)}const N=e;E.add(N,"dragstart",B=>B.preventDefault(),T).add(N,"touchmove",()=>{},T).add(N,"touchend",()=>{}).add(N,"touchstart",M).add(N,"mousedown",M).add(N,"touchcancel",z).add(N,"contextmenu",z).add(N,"click",Z,!0)}function G(){E.clear(),L.clear()}function X(){const y=$?n:e;L.add(y,"touchmove",k,T).add(y,"touchend",z).add(y,"mousemove",k,T).add(y,"mouseup",z)}function Y(y){const M=y.nodeName||"";return O.includes(M)}function J(){return(l?v:P)[$?"mouse":"touch"]}function rt(y,M){const N=d.add(Tt(y)*-1),B=h.byDistance(y,!l).distance;return l||F(y)<D?B:g&&M?B*.5:h.byIndex(N.get(),0).distance}function it(y){const M=Lt(y,r);$=M,q=l&&M&&!y.buttons&&U,U=at(c.get(),o.get())>=2,!(M&&y.button!==0)&&(Y(y.target)||(H=!0,s.pointerDown(y),a.useFriction(0).useDuration(0),c.set(o),X(),A=s.readPoint(y),V=s.readPoint(y,x),m.emit("pointerDown")))}function k(y){if(!Lt(y,r)&&y.touches.length>=2)return z(y);const N=s.readPoint(y),B=s.readPoint(y,x),K=at(N,A),W=at(B,V);if(!j&&!$&&(!y.cancelable||(j=K>W,!j)))return z(y);const nt=s.pointerMove(y);K>p&&(q=!0),a.useFriction(.3).useDuration(.75),u.start(),c.add(I(nt)),y.preventDefault()}function z(y){const N=h.byDistance(0,!1).index!==d.get(),B=s.pointerUp(y)*J(),K=rt(I(B),N),W=Jt(B,K),nt=C-10*W,tt=f+W/50;j=!1,H=!1,L.clear(),a.useDuration(nt).useFriction(tt),i.distance(K,!l),$=!1,m.emit("pointerUp")}function Z(y){q&&(y.stopPropagation(),y.preventDefault(),q=!1)}function R(){return H}return{init:_,destroy:G,pointerDown:R}}function on(t,e){let r,c;function s(d){return d.timeStamp}function o(d,m){const l=`client${(m||t.scroll)==="x"?"X":"Y"}`;return(Lt(d,e)?d:d.touches[0])[l]}function u(d){return r=d,c=d,o(d)}function i(d){const m=o(d)-o(c),b=s(d)-s(r)>170;return c=d,b&&(r=d),m}function a(d){if(!r||!c)return 0;const m=o(c)-o(r),b=s(d)-s(r),l=s(d)-s(c)>170,p=m/b;return b&&!l&&F(p)>.1?p:0}return{pointerDown:u,pointerMove:i,pointerUp:a,readPoint:o}}function sn(){function t(n){const{offsetTop:r,offsetLeft:c,offsetWidth:s,offsetHeight:o}=n;return{top:r,right:c+s,bottom:r+o,left:c,width:s,height:o}}return{measure:t}}function rn(t){function e(r){return t*(r/100)}return{measure:e}}function cn(t,e,n,r,c,s,o){const u=[t].concat(r);let i,a,h=[],d=!1;function m(g){return c.measureSize(o.measure(g))}function b(g){if(!s)return;a=m(t),h=r.map(m);function f(S){for(const x of S){if(d)return;const I=x.target===t,O=r.indexOf(x.target),T=I?a:h[O],E=m(I?t:r[O]);if(F(E-T)>=.5){g.reInit(),e.emit("resize");break}}}i=new ResizeObserver(S=>{(gt(s)||s(g,S))&&f(S)}),n.requestAnimationFrame(()=>{u.forEach(S=>i.observe(S))})}function l(){d=!0,i&&i.disconnect()}return{init:b,destroy:l}}function un(t,e,n,r,c,s){let o=0,u=0,i=c,a=s,h=t.get(),d=0;function m(){const T=r.get()-t.get(),E=!i;let L=0;return E?(o=0,n.set(r),t.set(r),L=T):(n.set(t),o+=T/i,o*=a,h+=o,t.add(o),L=h-d),u=Tt(L),d=h,O}function b(){const T=r.get()-e.get();return F(T)<.001}function l(){return i}function p(){return u}function g(){return o}function f(){return x(c)}function S(){return I(s)}function x(T){return i=T,O}function I(T){return a=T,O}const O={direction:p,duration:l,velocity:g,seek:m,settled:b,useBaseFriction:S,useBaseDuration:f,useFriction:I,useDuration:x};return O}function an(t,e,n,r,c){const s=c.measure(10),o=c.measure(50),u=ot(.1,.99);let i=!1;function a(){return!(i||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function h(b){if(!a())return;const l=t.reachedMin(e.get())?"min":"max",p=F(t[l]-e.get()),g=n.get()-e.get(),f=u.constrain(p/o);n.subtract(g*f),!b&&F(g)<s&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())}function d(b){i=!b}return{shouldConstrain:a,constrain:h,toggleActive:d}}function fn(t,e,n,r,c){const s=ot(-e+t,0),o=d(),u=h(),i=m();function a(l,p){return at(l,p)<=1}function h(){const l=o[0],p=Q(o),g=o.lastIndexOf(l),f=o.indexOf(p)+1;return ot(g,f)}function d(){return n.map((l,p)=>{const{min:g,max:f}=s,S=s.constrain(l),x=!p,I=Dt(n,p);return x?f:I||a(g,S)?g:a(f,S)?f:S}).map(l=>parseFloat(l.toFixed(3)))}function m(){if(e<=t+c)return[s.max];if(r==="keepSnaps")return o;const{min:l,max:p}=u;return o.slice(l,p)}return{snapsContained:i,scrollContainLimit:u}}function ln(t,e,n){const r=e[0],c=n?r-t:Q(e);return{limit:ot(c,r)}}function dn(t,e,n,r){const s=e.min+.1,o=e.max+.1,{reachedMin:u,reachedMax:i}=ot(s,o);function a(m){return m===1?i(n.get()):m===-1?u(n.get()):!1}function h(m){if(!a(m))return;const b=t*(m*-1);r.forEach(l=>l.add(b))}return{loop:h}}function pn(t){const{max:e,length:n}=t;function r(s){const o=s-e;return n?o/-n:0}return{get:r}}function mn(t,e,n,r,c){const{startEdge:s,endEdge:o}=t,{groupSlides:u}=c,i=d().map(e.measure),a=m(),h=b();function d(){return u(r).map(p=>Q(p)[o]-p[0][s]).map(F)}function m(){return r.map(p=>n[s]-p[s]).map(p=>-F(p))}function b(){return u(a).map(p=>p[0]).map((p,g)=>p+i[g])}return{snaps:a,snapsAligned:h}}function gn(t,e,n,r,c,s){const{groupSlides:o}=c,{min:u,max:i}=r,a=h();function h(){const m=o(s),b=!t||e==="keepSnaps";return n.length===1?[s]:b?m:m.slice(u,i).map((l,p,g)=>{const f=!p,S=Dt(g,p);if(f){const x=Q(g[0])+1;return Bt(x)}if(S){const x=pt(s)-Q(g)[0]+1;return Bt(x,Q(g)[0])}return l})}return{slideRegistry:a}}function hn(t,e,n,r,c){const{reachedAny:s,removeOffset:o,constrain:u}=r;function i(l){return l.concat().sort((p,g)=>F(p)-F(g))[0]}function a(l){const p=t?o(l):u(l),g=e.map((S,x)=>({diff:h(S-p,0),index:x})).sort((S,x)=>F(S.diff)-F(x.diff)),{index:f}=g[0];return{index:f,distance:p}}function h(l,p){const g=[l,l+n,l-n];if(!t)return l;if(!p)return i(g);const f=g.filter(S=>Tt(S)===p);return f.length?i(f):Q(g)-n}function d(l,p){const g=e[l]-c.get(),f=h(g,p);return{index:l,distance:f}}function m(l,p){const g=c.get()+l,{index:f,distance:S}=a(g),x=!t&&s(g);if(!p||x)return{index:f,distance:l};const I=e[f]-S,O=l+h(I,0);return{index:f,distance:O}}return{byDistance:m,byIndex:d,shortcut:h}}function Sn(t,e,n,r,c,s,o){function u(d){const m=d.distance,b=d.index!==e.get();s.add(m),m&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),b&&(n.set(e.get()),e.set(d.index),o.emit("select"))}function i(d,m){const b=c.byDistance(d,m);u(b)}function a(d,m){const b=e.clone().set(d),l=c.byIndex(b.get(),m);u(l)}return{distance:i,index:a}}function yn(t,e,n,r,c,s,o,u){const i={passive:!0,capture:!0};let a=0;function h(b){if(!u)return;function l(p){if(new Date().getTime()-a>10)return;o.emit("slideFocusStart"),t.scrollLeft=0;const S=n.findIndex(x=>x.includes(p));It(S)&&(c.useDuration(0),r.index(S,0),o.emit("slideFocus"))}s.add(document,"keydown",d,!1),e.forEach((p,g)=>{s.add(p,"focus",f=>{(gt(u)||u(b,f))&&l(g)},i)})}function d(b){b.code==="Tab"&&(a=new Date().getTime())}return{init:h}}function ut(t){let e=t;function n(){return e}function r(i){e=o(i)}function c(i){e+=o(i)}function s(i){e-=o(i)}function o(i){return It(i)?i:i.get()}return{get:n,set:r,add:c,subtract:s}}function jt(t,e){const n=t.scroll==="x"?o:u,r=e.style;let c=null,s=!1;function o(m){return`translate3d(${m}px,0px,0px)`}function u(m){return`translate3d(0px,${m}px,0px)`}function i(m){if(s)return;const b=Zt(t.direction(m));b!==c&&(r.transform=n(b),c=b)}function a(m){s=!m}function h(){s||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:h,to:i,toggleActive:a}}function bn(t,e,n,r,c,s,o,u,i){const h=ft(c),d=ft(c).reverse(),m=f().concat(S());function b(E,L){return E.reduce((D,P)=>D-c[P],L)}function l(E,L){return E.reduce((D,P)=>b(D,L)>0?D.concat([P]):D,[])}function p(E){return s.map((L,D)=>({start:L-r[D]+.5+E,end:L+e-.5+E}))}function g(E,L,D){const P=p(L);return E.map(v=>{const C=D?0:-n,U=D?n:0,A=D?"end":"start",V=P[v][A];return{index:v,loopPoint:V,slideLocation:ut(-1),translate:jt(t,i[v]),target:()=>u.get()>V?C:U}})}function f(){const E=o[0],L=l(d,E);return g(L,n,!1)}function S(){const E=e-o[0]-1,L=l(h,E);return g(L,-n,!0)}function x(){return m.every(({index:E})=>{const L=h.filter(D=>D!==E);return b(L,e)<=.1})}function I(){m.forEach(E=>{const{target:L,translate:D,slideLocation:P}=E,v=L();v!==P.get()&&(D.to(v),P.set(v))})}function O(){m.forEach(E=>E.translate.clear())}return{canLoop:x,clear:O,loop:I,loopPoints:m}}function xn(t,e,n){let r,c=!1;function s(i){if(!n)return;function a(h){for(const d of h)if(d.type==="childList"){i.reInit(),e.emit("slidesChanged");break}}r=new MutationObserver(h=>{c||(gt(n)||n(i,h))&&a(h)}),r.observe(t,{childList:!0})}function o(){r&&r.disconnect(),c=!0}return{init:s,destroy:o}}function En(t,e,n,r){const c={};let s=null,o=null,u,i=!1;function a(){u=new IntersectionObserver(l=>{i||(l.forEach(p=>{const g=e.indexOf(p.target);c[g]=p}),s=null,o=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(l=>u.observe(l))}function h(){u&&u.disconnect(),i=!0}function d(l){return lt(c).reduce((p,g)=>{const f=parseInt(g),{isIntersecting:S}=c[f];return(l&&S||!l&&!S)&&p.push(f),p},[])}function m(l=!0){if(l&&s)return s;if(!l&&o)return o;const p=d(l);return l&&(s=p),l||(o=p),p}return{init:a,destroy:h,get:m}}function Ln(t,e,n,r,c,s){const{measureSize:o,startEdge:u,endEdge:i}=t,a=n[0]&&c,h=l(),d=p(),m=n.map(o),b=g();function l(){if(!a)return 0;const S=n[0];return F(e[u]-S[u])}function p(){if(!a)return 0;const S=s.getComputedStyle(Q(r));return parseFloat(S.getPropertyValue(`margin-${i}`))}function g(){return n.map((S,x,I)=>{const O=!x,T=Dt(I,x);return O?m[x]+h:T?m[x]+d:I[x+1][u]-S[u]}).map(F)}return{slideSizes:m,slideSizesWithGaps:b,startGap:h,endGap:d}}function In(t,e,n,r,c,s,o,u,i){const{startEdge:a,endEdge:h,direction:d}=t,m=It(n);function b(f,S){return ft(f).filter(x=>x%S===0).map(x=>f.slice(x,x+S))}function l(f){return f.length?ft(f).reduce((S,x,I)=>{const O=Q(S)||0,T=O===0,E=x===pt(f),L=c[a]-s[O][a],D=c[a]-s[x][h],P=!r&&T?d(o):0,v=!r&&E?d(u):0,C=F(D-v-(L+P));return I&&C>e+i&&S.push(x),E&&S.push(f.length),S},[]).map((S,x,I)=>{const O=Math.max(I[x-1]||0);return f.slice(O,S)}):[]}function p(f){return m?b(f,n):l(f)}return{groupSlides:p}}function Tn(t,e,n,r,c,s,o){const{align:u,axis:i,direction:a,startIndex:h,loop:d,duration:m,dragFree:b,dragThreshold:l,inViewThreshold:p,slidesToScroll:g,skipSnaps:f,containScroll:S,watchResize:x,watchSlides:I,watchDrag:O,watchFocus:T}=s,E=2,L=sn(),D=L.measure(e),P=n.map(L.measure),v=nn(i,a),C=v.measureSize(D),U=rn(C),A=Wt(u,C),V=!d&&!!S,H=d||!!S,{slideSizes:j,slideSizesWithGaps:q,startGap:$,endGap:_}=Ln(v,D,P,n,H,c),G=In(v,C,g,d,D,P,$,_,E),{snaps:X,snapsAligned:Y}=mn(v,A,D,P,G),J=-Q(X)+Q(q),{snapsContained:rt,scrollContainLimit:it}=fn(C,J,Y,S,E),k=V?rt:Y,{limit:z}=ln(J,k,d),Z=Ht(pt(k),h,d),R=Z.clone(),w=ft(n),y=({dragHandler:st,scrollBody:bt,scrollBounds:xt,options:{loop:mt}})=>{mt||xt.constrain(st.pointerDown()),bt.seek()},M=({scrollBody:st,translate:bt,location:xt,offsetLocation:mt,previousLocation:Ut,scrollLooper:qt,slideLooper:$t,dragHandler:Qt,animation:_t,eventHandler:Ft,scrollBounds:Kt,options:{loop:Pt}},Nt)=>{const Ct=st.settled(),Xt=!Kt.shouldConstrain(),Vt=Pt?Ct:Ct&&Xt;Vt&&!Qt.pointerDown()&&(_t.stop(),Ft.emit("settle")),Vt||Ft.emit("scroll");const Yt=xt.get()*Nt+Ut.get()*(1-Nt);mt.set(Yt),Pt&&(qt.loop(st.direction()),$t.loop()),bt.to(mt.get())},N=tn(r,c,()=>y(yt),st=>M(yt,st)),B=.68,K=k[Z.get()],W=ut(K),nt=ut(K),tt=ut(K),et=ut(K),ct=un(W,tt,nt,et,m,B),ht=hn(d,k,J,z,et),St=Sn(N,Z,R,ct,ht,et,o),At=pn(z),Mt=dt(),Gt=En(e,n,o,p),{slideRegistry:wt}=gn(V,S,k,it,G,w),Rt=yn(t,n,wt,St,ct,Mt,o,T),yt={ownerDocument:r,ownerWindow:c,eventHandler:o,containerRect:D,slideRects:P,animation:N,axis:v,dragHandler:en(v,t,r,c,et,on(v,c),W,N,St,ct,ht,Z,o,U,b,l,f,B,O),eventStore:Mt,percentOfView:U,index:Z,indexPrevious:R,limit:z,location:W,offsetLocation:tt,previousLocation:nt,options:s,resizeHandler:cn(e,o,c,n,v,x,L),scrollBody:ct,scrollBounds:an(z,tt,et,ct,U),scrollLooper:dn(J,z,tt,[W,tt,nt,et]),scrollProgress:At,scrollSnapList:k.map(At.get),scrollSnaps:k,scrollTarget:ht,scrollTo:St,slideLooper:bn(v,C,J,j,q,X,k,tt,n),slideFocus:Rt,slidesHandler:xn(e,o,I),slidesInView:Gt,slideIndexes:w,slideRegistry:wt,slidesToScroll:G,target:et,translate:jt(v,e)};return yt}function Dn(){let t={},e;function n(a){e=a}function r(a){return t[a]||[]}function c(a){return r(a).forEach(h=>h(e,a)),i}function s(a,h){return t[a]=r(a).concat([h]),i}function o(a,h){return t[a]=r(a).filter(d=>d!==h),i}function u(){t={}}const i={init:n,emit:c,off:o,on:s,clear:u};return i}const vn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function On(t){function e(s,o){return kt(s,o||{})}function n(s){const o=s.breakpoints||{},u=lt(o).filter(i=>t.matchMedia(i).matches).map(i=>o[i]).reduce((i,a)=>e(i,a),{});return e(s,u)}function r(s){return s.map(o=>lt(o.breakpoints||{})).reduce((o,u)=>o.concat(u),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:r}}function An(t){let e=[];function n(s,o){return e=o.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),e.forEach(u=>u.init(s,t)),o.reduce((u,i)=>Object.assign(u,{[i.name]:i}),{})}function r(){e=e.filter(s=>s.destroy())}return{init:n,destroy:r}}function vt(t,e,n){const r=t.ownerDocument,c=r.defaultView,s=On(c),o=An(s),u=dt(),i=Dn(),{mergeOptions:a,optionsAtMedia:h,optionsMediaQueries:d}=s,{on:m,off:b,emit:l}=i,p=v;let g=!1,f,S=a(vn,vt.globalOptions),x=a(S),I=[],O,T,E;function L(){const{container:w,slides:y}=x;T=(Et(w)?t.querySelector(w):w)||t.children[0];const N=Et(y)?T.querySelectorAll(y):y;E=[].slice.call(N||T.children)}function D(w){const y=Tn(t,T,E,r,c,w,i);if(w.loop&&!y.slideLooper.canLoop()){const M=Object.assign({},w,{loop:!1});return D(M)}return y}function P(w,y){g||(S=a(S,w),x=h(S),I=y||I,L(),f=D(x),d([S,...I.map(({options:M})=>M)]).forEach(M=>u.add(M,"change",v)),x.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(R),f.eventHandler.init(R),f.resizeHandler.init(R),f.slidesHandler.init(R),f.options.loop&&f.slideLooper.loop(),T.offsetParent&&E.length&&f.dragHandler.init(R),O=o.init(R,I)))}function v(w,y){const M=G();C(),P(a({startIndex:M},w),y),i.emit("reInit")}function C(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),o.destroy(),u.clear()}function U(){g||(g=!0,u.clear(),C(),i.emit("destroy"),i.clear())}function A(w,y,M){!x.active||g||(f.scrollBody.useBaseFriction().useDuration(y===!0?0:x.duration),f.scrollTo.index(w,M||0))}function V(w){const y=f.index.add(1).get();A(y,w,-1)}function H(w){const y=f.index.add(-1).get();A(y,w,1)}function j(){return f.index.add(1).get()!==G()}function q(){return f.index.add(-1).get()!==G()}function $(){return f.scrollSnapList}function _(){return f.scrollProgress.get(f.location.get())}function G(){return f.index.get()}function X(){return f.indexPrevious.get()}function Y(){return f.slidesInView.get()}function J(){return f.slidesInView.get(!1)}function rt(){return O}function it(){return f}function k(){return t}function z(){return T}function Z(){return E}const R={canScrollNext:j,canScrollPrev:q,containerNode:z,internalEngine:it,destroy:U,off:b,on:m,emit:l,plugins:rt,previousScrollSnap:X,reInit:p,rootNode:k,scrollNext:V,scrollPrev:H,scrollProgress:_,scrollSnapList:$,scrollTo:A,selectedScrollSnap:G,slideNodes:Z,slidesInView:Y,slidesNotInView:J};return P(e,n),setTimeout(()=>i.emit("init"),0),R}vt.globalOptions=void 0;const Mn={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function wn(t,e){const n=t.scrollSnapList();return typeof e=="number"?n.map(()=>e):e(n,t)}function Fn(t,e){const n=t.rootNode();return e&&e(n)||n}function Ot(t={}){let e,n,r,c,s=null,o=0,u=!1,i=!1,a=!1,h=!1;function d(A,V){n=A;const{mergeOptions:H,optionsAtMedia:j}=V,q=H(Mn,Ot.globalOptions),$=H(q,t);if(e=j($),n.scrollSnapList().length<=1)return;h=e.jump,r=!1,c=wn(n,e.delay);const{eventStore:_,ownerDocument:G}=n.internalEngine(),X=!!n.internalEngine().options.watchDrag,Y=Fn(n,e.rootNode);_.add(G,"visibilitychange",f),X&&n.on("pointerDown",x),X&&!e.stopOnInteraction&&n.on("pointerUp",I),e.stopOnMouseEnter&&_.add(Y,"mouseenter",O),e.stopOnMouseEnter&&!e.stopOnInteraction&&_.add(Y,"mouseleave",T),e.stopOnFocusIn&&n.on("slideFocusStart",g),e.stopOnFocusIn&&!e.stopOnInteraction&&_.add(n.containerNode(),"focusout",p),e.playOnInit&&p()}function m(){n.off("pointerDown",x).off("pointerUp",I).off("slideFocusStart",g),g(),r=!0,u=!1}function b(){const{ownerWindow:A}=n.internalEngine();A.clearTimeout(o),o=A.setTimeout(v,c[n.selectedScrollSnap()]),s=new Date().getTime(),n.emit("autoplay:timerset")}function l(){const{ownerWindow:A}=n.internalEngine();A.clearTimeout(o),o=0,s=null,n.emit("autoplay:timerstopped")}function p(){if(!r){if(S()){a=!0;return}u||n.emit("autoplay:play"),b(),u=!0}}function g(){r||(u&&n.emit("autoplay:stop"),l(),u=!1)}function f(){if(S())return a=u,g();a&&p()}function S(){const{ownerDocument:A}=n.internalEngine();return A.visibilityState==="hidden"}function x(){i||g()}function I(){i||p()}function O(){i=!0,g()}function T(){i=!1,p()}function E(A){typeof A<"u"&&(h=A),p()}function L(){u&&g()}function D(){u&&p()}function P(){return u}function v(){const{index:A}=n.internalEngine(),V=A.clone().add(1).get(),H=n.scrollSnapList().length-1,j=e.stopOnLastSnap&&V===H;if(n.canScrollNext()?n.scrollNext(h):n.scrollTo(0,h),n.emit("autoplay:select"),j)return g();p()}function C(){if(!s)return null;const A=c[n.selectedScrollSnap()],V=new Date().getTime()-s;return A-V}return{name:"autoplay",options:t,init:d,destroy:m,play:E,stop:L,reset:D,isPlaying:P,timeUntilNext:C}}Ot.globalOptions=void 0;document.addEventListener("astro:page-load",()=>{const t={align:"start",loop:!0},n=document.querySelector(".embla")?.querySelector(".embla__viewport");vt(n,t,[Ot()])});
