function Tt(t){return typeof t=="number"}function Lt(t){return typeof t=="string"}function gt(t){return typeof t=="boolean"}function Vt(t){return Object.prototype.toString.call(t)==="[object Object]"}function F(t){return Math.abs(t)}function It(t){return Math.sign(t)}function ft(t,n){return F(t-n)}function Yt(t,n){if(t===0||n===0||F(t)<=F(n))return 0;const r=ft(F(t),F(n));return F(r/t)}function Jt(t){return Math.round(t*100)/100}function at(t){return lt(t).map(Number)}function k(t){return t[pt(t)]}function pt(t){return Math.max(0,t.length-1)}function vt(t,n){return n===pt(t)}function zt(t,n=0){return Array.from(Array(t),(r,s)=>n+s)}function lt(t){return Object.keys(t)}function Bt(t,n){return[t,n].reduce((r,s)=>(lt(s).forEach(c=>{const o=r[c],e=s[c],f=Vt(o)&&Vt(e);r[c]=f?Bt(o,e):e}),r),{})}function Et(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function Zt(t,n){const r={start:s,center:c,end:o};function s(){return 0}function c(i){return o(i)/2}function o(i){return n-i}function e(i,u){return Lt(t)?r[t](i):t(n,i,u)}return{measure:e}}function dt(){let t=[];function n(c,o,e,f={passive:!0}){let i;if("addEventListener"in c)c.addEventListener(o,e,f),i=()=>c.removeEventListener(o,e,f);else{const u=c;u.addListener(e),i=()=>u.removeListener(e)}return t.push(i),s}function r(){t=t.filter(c=>c())}const s={add:n,clear:r};return s}function Wt(t,n,r,s){const c=dt(),o=1e3/60;let e=null,f=0,i=0;function u(){c.add(t,"visibilitychange",()=>{t.hidden&&l()})}function h(){b(),c.clear()}function d(g){if(!i)return;e||(e=g,r(),r());const a=g-e;for(e=g,f+=a;f>=o;)r(),f-=o;const S=f/o;s(S),i&&(i=n.requestAnimationFrame(d))}function p(){i||(i=n.requestAnimationFrame(d))}function b(){n.cancelAnimationFrame(i),e=null,f=0,i=0}function l(){e=null,f=0}return{init:u,destroy:h,start:p,stop:b,update:r,render:s}}function tn(t,n){const r=n==="rtl",s=t==="y",c=s?"y":"x",o=s?"x":"y",e=!s&&r?-1:1,f=h(),i=d();function u(l){const{height:m,width:g}=l;return s?m:g}function h(){return s?"top":r?"right":"left"}function d(){return s?"bottom":r?"left":"right"}function p(l){return l*e}return{scroll:c,cross:o,startEdge:f,endEdge:i,measureSize:u,direction:p}}function tt(t=0,n=0){const r=F(t-n);function s(u){return u<t}function c(u){return u>n}function o(u){return s(u)||c(u)}function e(u){return o(u)?s(u)?t:n:u}function f(u){return r?u-r*Math.ceil((u-n)/r):u}return{length:r,max:n,min:t,constrain:e,reachedAny:o,reachedMax:c,reachedMin:s,removeOffset:f}}function kt(t,n,r){const{constrain:s}=tt(0,t),c=t+1;let o=e(n);function e(p){return r?F((c+p)%c):s(p)}function f(){return o}function i(p){return o=e(p),d}function u(p){return h().set(f()+p)}function h(){return kt(t,f(),r)}const d={get:f,set:i,add:u,clone:h};return d}function nn(t,n,r,s,c,o,e,f,i,u,h,d,p,b,l,m,g,a,S){const{cross:x,direction:T}=t,A=["INPUT","SELECT","TEXTAREA"],I={passive:!1},L=dt(),E=dt(),v=tt(50,225).constrain(b.measure(20)),O={mouse:300,touch:400},D={mouse:500,touch:600},V=l?43:25;let G=!1,H=0,j=0,J=!1,X=!1,U=!1,$=!1;function rt(y){if(!S)return;function M(N){(gt(S)||S(y,N))&&it(N)}const w=n;L.add(w,"dragstart",N=>N.preventDefault(),I).add(w,"touchmove",()=>{},I).add(w,"touchend",()=>{}).add(w,"touchstart",M).add(w,"mousedown",M).add(w,"touchcancel",C).add(w,"contextmenu",C).add(w,"click",_,!0)}function q(){L.clear(),E.clear()}function nt(){const y=$?r:n;E.add(y,"touchmove",z,I).add(y,"touchend",C).add(y,"mousemove",z,I).add(y,"mouseup",C)}function et(y){const M=y.nodeName||"";return A.includes(M)}function Q(){return(l?D:O)[$?"mouse":"touch"]}function st(y,M){const w=d.add(It(y)*-1),N=h.byDistance(y,!l).distance;return l||F(y)<v?N:g&&M?N*.5:h.byIndex(w.get(),0).distance}function it(y){const M=Et(y,s);$=M,U=l&&M&&!y.buttons&&G,G=ft(c.get(),e.get())>=2,!(M&&y.button!==0)&&(et(y.target)||(J=!0,o.pointerDown(y),u.useFriction(0).useDuration(0),c.set(e),nt(),H=o.readPoint(y),j=o.readPoint(y,x),p.emit("pointerDown")))}function z(y){if(!Et(y,s)&&y.touches.length>=2)return C(y);const w=o.readPoint(y),N=o.readPoint(y,x),R=ft(w,H),K=ft(N,j);if(!X&&!$&&(!y.cancelable||(X=R>K,!X)))return C(y);const Z=o.pointerMove(y);R>m&&(U=!0),u.useFriction(.3).useDuration(.75),f.start(),c.add(T(Z)),y.preventDefault()}function C(y){const w=h.byDistance(0,!1).index!==d.get(),N=o.pointerUp(y)*Q(),R=st(T(N),w),K=Yt(N,R),Z=V-10*K,Y=a+K/50;X=!1,J=!1,E.clear(),u.useDuration(Z).useFriction(Y),i.distance(R,!l),$=!1,p.emit("pointerUp")}function _(y){U&&(y.stopPropagation(),y.preventDefault(),U=!1)}function B(){return J}return{init:rt,destroy:q,pointerDown:B}}function en(t,n){let s,c;function o(d){return d.timeStamp}function e(d,p){const l=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(Et(d,n)?d:d.touches[0])[l]}function f(d){return s=d,c=d,e(d)}function i(d){const p=e(d)-e(c),b=o(d)-o(s)>170;return c=d,b&&(s=d),p}function u(d){if(!s||!c)return 0;const p=e(c)-e(s),b=o(d)-o(s),l=o(d)-o(c)>170,m=p/b;return b&&!l&&F(m)>.1?m:0}return{pointerDown:f,pointerMove:i,pointerUp:u,readPoint:e}}function on(){function t(r){const{offsetTop:s,offsetLeft:c,offsetWidth:o,offsetHeight:e}=r;return{top:s,right:c+o,bottom:s+e,left:c,width:o,height:e}}return{measure:t}}function rn(t){function n(s){return t*(s/100)}return{measure:n}}function sn(t,n,r,s,c,o,e){const f=[t].concat(s);let i,u,h=[],d=!1;function p(g){return c.measureSize(e.measure(g))}function b(g){if(!o)return;u=p(t),h=s.map(p);function a(S){for(const x of S){if(d)return;const T=x.target===t,A=s.indexOf(x.target),I=T?u:h[A],L=p(T?t:s[A]);if(F(L-I)>=.5){g.reInit(),n.emit("resize");break}}}i=new ResizeObserver(S=>{(gt(o)||o(g,S))&&a(S)}),r.requestAnimationFrame(()=>{f.forEach(S=>i.observe(S))})}function l(){d=!0,i&&i.disconnect()}return{init:b,destroy:l}}function cn(t,n,r,s,c,o){let e=0,f=0,i=c,u=o,h=t.get(),d=0;function p(){const I=s.get()-t.get(),L=!i;let E=0;return L?(e=0,r.set(s),t.set(s),E=I):(r.set(t),e+=I/i,e*=u,h+=e,t.add(e),E=h-d),f=It(E),d=h,A}function b(){const I=s.get()-n.get();return F(I)<.001}function l(){return i}function m(){return f}function g(){return e}function a(){return x(c)}function S(){return T(o)}function x(I){return i=I,A}function T(I){return u=I,A}const A={direction:m,duration:l,velocity:g,seek:p,settled:b,useBaseFriction:S,useBaseDuration:a,useFriction:T,useDuration:x};return A}function un(t,n,r,s,c){const o=c.measure(10),e=c.measure(50),f=tt(.1,.99);let i=!1;function u(){return!(i||!t.reachedAny(r.get())||!t.reachedAny(n.get()))}function h(b){if(!u())return;const l=t.reachedMin(n.get())?"min":"max",m=F(t[l]-n.get()),g=r.get()-n.get(),a=f.constrain(m/e);r.subtract(g*a),!b&&F(g)<o&&(r.set(t.constrain(r.get())),s.useDuration(25).useBaseFriction())}function d(b){i=!b}return{shouldConstrain:u,constrain:h,toggleActive:d}}function fn(t,n,r,s,c){const o=tt(-n+t,0),e=d(),f=h(),i=p();function u(l,m){return ft(l,m)<=1}function h(){const l=e[0],m=k(e),g=e.lastIndexOf(l),a=e.indexOf(m)+1;return tt(g,a)}function d(){return r.map((l,m)=>{const{min:g,max:a}=o,S=o.constrain(l),x=!m,T=vt(r,m);return x?a:T||u(g,S)?g:u(a,S)?a:S}).map(l=>parseFloat(l.toFixed(3)))}function p(){if(n<=t+c)return[o.max];if(s==="keepSnaps")return e;const{min:l,max:m}=f;return e.slice(l,m)}return{snapsContained:i,scrollContainLimit:f}}function an(t,n,r){const s=n[0],c=r?s-t:k(n);return{limit:tt(c,s)}}function ln(t,n,r,s){const o=n.min+.1,e=n.max+.1,{reachedMin:f,reachedMax:i}=tt(o,e);function u(p){return p===1?i(r.get()):p===-1?f(r.get()):!1}function h(p){if(!u(p))return;const b=t*(p*-1);s.forEach(l=>l.add(b))}return{loop:h}}function dn(t){const{max:n,length:r}=t;function s(o){const e=o-n;return r?e/-r:0}return{get:s}}function pn(t,n,r,s,c){const{startEdge:o,endEdge:e}=t,{groupSlides:f}=c,i=d().map(n.measure),u=p(),h=b();function d(){return f(s).map(m=>k(m)[e]-m[0][o]).map(F)}function p(){return s.map(m=>r[o]-m[o]).map(m=>-F(m))}function b(){return f(u).map(m=>m[0]).map((m,g)=>m+i[g])}return{snaps:u,snapsAligned:h}}function mn(t,n,r,s,c,o){const{groupSlides:e}=c,{min:f,max:i}=s,u=h();function h(){const p=e(o),b=!t||n==="keepSnaps";return r.length===1?[o]:b?p:p.slice(f,i).map((l,m,g)=>{const a=!m,S=vt(g,m);if(a){const x=k(g[0])+1;return zt(x)}if(S){const x=pt(o)-k(g)[0]+1;return zt(x,k(g)[0])}return l})}return{slideRegistry:u}}function gn(t,n,r,s,c){const{reachedAny:o,removeOffset:e,constrain:f}=s;function i(l){return l.concat().sort((m,g)=>F(m)-F(g))[0]}function u(l){const m=t?e(l):f(l),g=n.map((S,x)=>({diff:h(S-m,0),index:x})).sort((S,x)=>F(S.diff)-F(x.diff)),{index:a}=g[0];return{index:a,distance:m}}function h(l,m){const g=[l,l+r,l-r];if(!t)return l;if(!m)return i(g);const a=g.filter(S=>It(S)===m);return a.length?i(a):k(g)-r}function d(l,m){const g=n[l]-c.get(),a=h(g,m);return{index:l,distance:a}}function p(l,m){const g=c.get()+l,{index:a,distance:S}=u(g),x=!t&&o(g);if(!m||x)return{index:a,distance:l};const T=n[a]-S,A=l+h(T,0);return{index:a,distance:A}}return{byDistance:p,byIndex:d,shortcut:h}}function hn(t,n,r,s,c,o,e){function f(d){const p=d.distance,b=d.index!==n.get();o.add(p),p&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),b&&(r.set(n.get()),n.set(d.index),e.emit("select"))}function i(d,p){const b=c.byDistance(d,p);f(b)}function u(d,p){const b=n.clone().set(d),l=c.byIndex(b.get(),p);f(l)}return{distance:i,index:u}}function Sn(t,n,r,s,c,o,e,f){const i={passive:!0,capture:!0};let u=0;function h(b){if(!f)return;function l(m){if(new Date().getTime()-u>10)return;e.emit("slideFocusStart"),t.scrollLeft=0;const S=r.findIndex(x=>x.includes(m));Tt(S)&&(c.useDuration(0),s.index(S,0),e.emit("slideFocus"))}o.add(document,"keydown",d,!1),n.forEach((m,g)=>{o.add(m,"focus",a=>{(gt(f)||f(b,a))&&l(g)},i)})}function d(b){b.code==="Tab"&&(u=new Date().getTime())}return{init:h}}function ut(t){let n=t;function r(){return n}function s(i){n=e(i)}function c(i){n+=e(i)}function o(i){n-=e(i)}function e(i){return Tt(i)?i:i.get()}return{get:r,set:s,add:c,subtract:o}}function Gt(t,n){const r=t.scroll==="x"?e:f,s=n.style;let c=null,o=!1;function e(p){return`translate3d(${p}px,0px,0px)`}function f(p){return`translate3d(0px,${p}px,0px)`}function i(p){if(o)return;const b=Jt(t.direction(p));b!==c&&(s.transform=r(b),c=b)}function u(p){o=!p}function h(){o||(s.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:h,to:i,toggleActive:u}}function yn(t,n,r,s,c,o,e,f,i){const h=at(c),d=at(c).reverse(),p=a().concat(S());function b(L,E){return L.reduce((v,O)=>v-c[O],E)}function l(L,E){return L.reduce((v,O)=>b(v,E)>0?v.concat([O]):v,[])}function m(L){return o.map((E,v)=>({start:E-s[v]+.5+L,end:E+n-.5+L}))}function g(L,E,v){const O=m(E);return L.map(D=>{const V=v?0:-r,G=v?r:0,H=v?"end":"start",j=O[D][H];return{index:D,loopPoint:j,slideLocation:ut(-1),translate:Gt(t,i[D]),target:()=>f.get()>j?V:G}})}function a(){const L=e[0],E=l(d,L);return g(E,r,!1)}function S(){const L=n-e[0]-1,E=l(h,L);return g(E,-r,!0)}function x(){return p.every(({index:L})=>{const E=h.filter(v=>v!==L);return b(E,n)<=.1})}function T(){p.forEach(L=>{const{target:E,translate:v,slideLocation:O}=L,D=E();D!==O.get()&&(v.to(D),O.set(D))})}function A(){p.forEach(L=>L.translate.clear())}return{canLoop:x,clear:A,loop:T,loopPoints:p}}function bn(t,n,r){let s,c=!1;function o(i){if(!r)return;function u(h){for(const d of h)if(d.type==="childList"){i.reInit(),n.emit("slidesChanged");break}}s=new MutationObserver(h=>{c||(gt(r)||r(i,h))&&u(h)}),s.observe(t,{childList:!0})}function e(){s&&s.disconnect(),c=!0}return{init:o,destroy:e}}function xn(t,n,r,s){const c={};let o=null,e=null,f,i=!1;function u(){f=new IntersectionObserver(l=>{i||(l.forEach(m=>{const g=n.indexOf(m.target);c[g]=m}),o=null,e=null,r.emit("slidesInView"))},{root:t.parentElement,threshold:s}),n.forEach(l=>f.observe(l))}function h(){f&&f.disconnect(),i=!0}function d(l){return lt(c).reduce((m,g)=>{const a=parseInt(g),{isIntersecting:S}=c[a];return(l&&S||!l&&!S)&&m.push(a),m},[])}function p(l=!0){if(l&&o)return o;if(!l&&e)return e;const m=d(l);return l&&(o=m),l||(e=m),m}return{init:u,destroy:h,get:p}}function Ln(t,n,r,s,c,o){const{measureSize:e,startEdge:f,endEdge:i}=t,u=r[0]&&c,h=l(),d=m(),p=r.map(e),b=g();function l(){if(!u)return 0;const S=r[0];return F(n[f]-S[f])}function m(){if(!u)return 0;const S=o.getComputedStyle(k(s));return parseFloat(S.getPropertyValue(`margin-${i}`))}function g(){return r.map((S,x,T)=>{const A=!x,I=vt(T,x);return A?p[x]+h:I?p[x]+d:T[x+1][f]-S[f]}).map(F)}return{slideSizes:p,slideSizesWithGaps:b,startGap:h,endGap:d}}function En(t,n,r,s,c,o,e,f,i){const{startEdge:u,endEdge:h,direction:d}=t,p=Tt(r);function b(a,S){return at(a).filter(x=>x%S===0).map(x=>a.slice(x,x+S))}function l(a){return a.length?at(a).reduce((S,x,T)=>{const A=k(S)||0,I=A===0,L=x===pt(a),E=c[u]-o[A][u],v=c[u]-o[x][h],O=!s&&I?d(e):0,D=!s&&L?d(f):0,V=F(v-D-(E+O));return T&&V>n+i&&S.push(x),L&&S.push(a.length),S},[]).map((S,x,T)=>{const A=Math.max(T[x-1]||0);return a.slice(A,S)}):[]}function m(a){return p?b(a,r):l(a)}return{groupSlides:m}}function Tn(t,n,r,s,c,o,e){const{align:f,axis:i,direction:u,startIndex:h,loop:d,duration:p,dragFree:b,dragThreshold:l,inViewThreshold:m,slidesToScroll:g,skipSnaps:a,containScroll:S,watchResize:x,watchSlides:T,watchDrag:A,watchFocus:I}=o,L=2,E=on(),v=E.measure(n),O=r.map(E.measure),D=tn(i,u),V=D.measureSize(v),G=rn(V),H=Zt(f,V),j=!d&&!!S,J=d||!!S,{slideSizes:X,slideSizesWithGaps:U,startGap:$,endGap:rt}=Ln(D,v,O,r,J,c),q=En(D,V,g,d,v,O,$,rt,L),{snaps:nt,snapsAligned:et}=pn(D,H,v,O,q),Q=-k(nt)+k(U),{snapsContained:st,scrollContainLimit:it}=fn(V,Q,et,S,L),z=j?st:et,{limit:C}=an(Q,z,d),_=kt(pt(z),h,d),B=_.clone(),P=at(r),y=({dragHandler:ot,scrollBody:bt,scrollBounds:xt,options:{loop:mt}})=>{mt||xt.constrain(ot.pointerDown()),bt.seek()},M=({scrollBody:ot,translate:bt,location:xt,offsetLocation:mt,previousLocation:qt,scrollLooper:Rt,slideLooper:Ut,dragHandler:$t,animation:Qt,eventHandler:Ft,scrollBounds:_t,options:{loop:Ot}},wt)=>{const Ct=ot.settled(),Kt=!_t.shouldConstrain(),Nt=Ot?Ct:Ct&&Kt;Nt&&!$t.pointerDown()&&(Qt.stop(),Ft.emit("settle")),Nt||Ft.emit("scroll");const Xt=xt.get()*wt+qt.get()*(1-wt);mt.set(Xt),Ot&&(Rt.loop(ot.direction()),Ut.loop()),bt.to(mt.get())},w=Wt(s,c,()=>y(yt),ot=>M(yt,ot)),N=.68,R=z[_.get()],K=ut(R),Z=ut(R),Y=ut(R),W=ut(R),ct=cn(K,Y,Z,W,p,N),ht=gn(d,z,Q,C,W),St=hn(w,_,B,ct,ht,W,e),Mt=dn(C),At=dt(),Ht=xn(n,r,e,m),{slideRegistry:Pt}=mn(j,S,z,it,q,P),jt=Sn(t,r,Pt,St,ct,At,e,I),yt={ownerDocument:s,ownerWindow:c,eventHandler:e,containerRect:v,slideRects:O,animation:w,axis:D,dragHandler:nn(D,t,s,c,W,en(D,c),K,w,St,ct,ht,_,e,G,b,l,a,N,A),eventStore:At,percentOfView:G,index:_,indexPrevious:B,limit:C,location:K,offsetLocation:Y,previousLocation:Z,options:o,resizeHandler:sn(n,e,c,r,D,x,E),scrollBody:ct,scrollBounds:un(C,Y,W,ct,G),scrollLooper:ln(Q,C,Y,[K,Y,Z,W]),scrollProgress:Mt,scrollSnapList:z.map(Mt.get),scrollSnaps:z,scrollTarget:ht,scrollTo:St,slideLooper:yn(D,V,Q,X,U,nt,z,Y,r),slideFocus:jt,slidesHandler:bn(n,e,T),slidesInView:Ht,slideIndexes:P,slideRegistry:Pt,slidesToScroll:q,target:W,translate:Gt(D,n)};return yt}function In(){let t={},n;function r(u){n=u}function s(u){return t[u]||[]}function c(u){return s(u).forEach(h=>h(n,u)),i}function o(u,h){return t[u]=s(u).concat([h]),i}function e(u,h){return t[u]=s(u).filter(d=>d!==h),i}function f(){t={}}const i={init:r,emit:c,off:e,on:o,clear:f};return i}const vn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Dn(t){function n(o,e){return Bt(o,e||{})}function r(o){const e=o.breakpoints||{},f=lt(e).filter(i=>t.matchMedia(i).matches).map(i=>e[i]).reduce((i,u)=>n(i,u),{});return n(o,f)}function s(o){return o.map(e=>lt(e.breakpoints||{})).reduce((e,f)=>e.concat(f),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:r,optionsMediaQueries:s}}function Mn(t){let n=[];function r(o,e){return n=e.filter(({options:f})=>t.optionsAtMedia(f).active!==!1),n.forEach(f=>f.init(o,t)),e.reduce((f,i)=>Object.assign(f,{[i.name]:i}),{})}function s(){n=n.filter(o=>o.destroy())}return{init:r,destroy:s}}function Dt(t,n,r){const s=t.ownerDocument,c=s.defaultView,o=Dn(c),e=Mn(o),f=dt(),i=In(),{mergeOptions:u,optionsAtMedia:h,optionsMediaQueries:d}=o,{on:p,off:b,emit:l}=i,m=D;let g=!1,a,S=u(vn,Dt.globalOptions),x=u(S),T=[],A,I,L;function E(){const{container:P,slides:y}=x;I=(Lt(P)?t.querySelector(P):P)||t.children[0];const w=Lt(y)?I.querySelectorAll(y):y;L=[].slice.call(w||I.children)}function v(P){const y=Tn(t,I,L,s,c,P,i);if(P.loop&&!y.slideLooper.canLoop()){const M=Object.assign({},P,{loop:!1});return v(M)}return y}function O(P,y){g||(S=u(S,P),x=h(S),T=y||T,E(),a=v(x),d([S,...T.map(({options:M})=>M)]).forEach(M=>f.add(M,"change",D)),x.active&&(a.translate.to(a.location.get()),a.animation.init(),a.slidesInView.init(),a.slideFocus.init(B),a.eventHandler.init(B),a.resizeHandler.init(B),a.slidesHandler.init(B),a.options.loop&&a.slideLooper.loop(),I.offsetParent&&L.length&&a.dragHandler.init(B),A=e.init(B,T)))}function D(P,y){const M=q();V(),O(u({startIndex:M},P),y),i.emit("reInit")}function V(){a.dragHandler.destroy(),a.eventStore.clear(),a.translate.clear(),a.slideLooper.clear(),a.resizeHandler.destroy(),a.slidesHandler.destroy(),a.slidesInView.destroy(),a.animation.destroy(),e.destroy(),f.clear()}function G(){g||(g=!0,f.clear(),V(),i.emit("destroy"),i.clear())}function H(P,y,M){!x.active||g||(a.scrollBody.useBaseFriction().useDuration(y===!0?0:x.duration),a.scrollTo.index(P,M||0))}function j(P){const y=a.index.add(1).get();H(y,P,-1)}function J(P){const y=a.index.add(-1).get();H(y,P,1)}function X(){return a.index.add(1).get()!==q()}function U(){return a.index.add(-1).get()!==q()}function $(){return a.scrollSnapList}function rt(){return a.scrollProgress.get(a.location.get())}function q(){return a.index.get()}function nt(){return a.indexPrevious.get()}function et(){return a.slidesInView.get()}function Q(){return a.slidesInView.get(!1)}function st(){return A}function it(){return a}function z(){return t}function C(){return I}function _(){return L}const B={canScrollNext:X,canScrollPrev:U,containerNode:C,internalEngine:it,destroy:G,off:b,on:p,emit:l,plugins:st,previousScrollSnap:nt,reInit:m,rootNode:z,scrollNext:j,scrollPrev:J,scrollProgress:rt,scrollSnapList:$,scrollTo:H,selectedScrollSnap:q,slideNodes:_,slidesInView:et,slidesNotInView:Q};return O(n,r),setTimeout(()=>i.emit("init"),0),B}Dt.globalOptions=void 0;document.addEventListener("astro:page-load",()=>{const t={align:"start",loop:!0},r=document.querySelector(".embla")?.querySelector(".embla__viewport");Dt(r,t,[])});
