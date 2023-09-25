var Ve=Object.defineProperty;var Ue=(t,e,n)=>e in t?Ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var de=(t,e,n)=>(Ue(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function _(){}function Pe(t){return t()}function Ce(){return Object.create(null)}function ee(t){t.forEach(Pe)}function Ee(t){return typeof t=="function"}function E(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let le;function ze(t,e){return t===e?!0:(le||(le=document.createElement("a")),le.href=e,t===le.href)}function Fe(t){return Object.keys(t).length===0}const xe=typeof window<"u";let Je=xe?t=>requestAnimationFrame(t):_;const We=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function o(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function ve(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function X(t){return document.createTextNode(t)}function k(){return X(" ")}function Ye(){return X("")}function L(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function i(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function De(t){return Array.from(t.childNodes)}function me(t,e){e=""+e,t.data!==e&&(t.data=e)}function $e(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function ie(t,e,n){t.classList.toggle(e,!!n)}let ge;function K(t){ge=t}const D=[],Te=[];let G=[];const Se=[],Ge=Promise.resolve();let pe=!1;function qe(){pe||(pe=!0,Ge.then(Oe))}function oe(t){G.push(t)}const fe=new Set;let Y=0;function Oe(){if(Y!==0)return;const t=ge;do{try{for(;Y<D.length;){const e=D[Y];Y++,K(e),Re(e.$$)}}catch(e){throw D.length=0,Y=0,e}for(K(null),D.length=0,Y=0;Te.length;)Te.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];fe.has(n)||(fe.add(n),n())}G.length=0}while(D.length);for(;Se.length;)Se.pop()();pe=!1,fe.clear(),K(t)}function Re(t){if(t.fragment!==null){t.update(),ee(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(oe)}}function Ke(t){const e=[],n=[];G.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),G=e}const ae=new Set;let Qe;function j(t,e){t&&t.i&&(ae.delete(t),t.i(e))}function U(t,e,n,s){if(t&&t.o){if(ae.has(t))return;ae.add(t),Qe.c.push(()=>{ae.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Z(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function F(t){t&&t.c()}function A(t,e,n){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),oe(()=>{const r=t.$$.on_mount.map(Pe).filter(Ee);t.$$.on_destroy?t.$$.on_destroy.push(...r):ee(r),t.$$.on_mount=[]}),l.forEach(oe)}function P(t,e){const n=t.$$;n.fragment!==null&&(Ke(n.after_update),ee(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xe(t,e){t.$$.dirty[0]===-1&&(D.push(t),qe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(t,e,n,s,l,r,d=null,p=[-1]){const c=ge;K(t);const a=t.$$={fragment:null,ctx:[],props:r,update:_,not_equal:l,bound:Ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ce(),dirty:p,skip_bound:!1,root:e.target||c.$$.root};d&&d(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(u,g,...b)=>{const M=b.length?b[0]:g;return a.ctx&&l(a.ctx[u],a.ctx[u]=M)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](M),f&&Xe(t,u)),g}):[],a.update(),f=!0,ee(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const u=De(e.target);a.fragment&&a.fragment.l(u),u.forEach(w)}else a.fragment&&a.fragment.c();e.intro&&j(t.$$.fragment),A(t,e.target,e.anchor),Oe()}K(c)}class I{constructor(){de(this,"$$");de(this,"$$set")}$destroy(){P(this,1),this.$destroy=_}$on(e,n){if(!Ee(n))return _;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(e){this.$$set&&!Fe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ze="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ze);function et(t){let e;return{c(){e=h("header"),e.innerHTML='<h1>THOMAS MCEVOY</h1> <nav class="svelte-1kmsvki"><a class="nav-link svelte-1kmsvki" href="#about">ABOUT</a> <a class="nav-link svelte-1kmsvki" href="#music">MUSIC</a> <a class="nav-link svelte-1kmsvki" href="#shows">SHOWS</a> <a class="nav-link svelte-1kmsvki" href="#contact">CONTACT</a></nav>',i(e,"class","svelte-1kmsvki")},m(n,s){C(n,e,s)},p:_,i:_,o:_,d(n){n&&w(e)}}}class tt extends I{constructor(e){super(),O(this,e,null,et,E,{})}}const nt="/assets/thomas-portrait-s-ce240fa2.jpg",st="/assets/thomas-portrait-m-75ee6600.jpg",lt="/assets/thomas-m-38a9e901.jpg",Be="/assets/thomas-l-83799bb3.jpg",rt="/assets/thomas-xl-3091acd5.jpg";function at(t){let e;return{c(){e=h("section"),e.innerHTML=`<img src="${Be}" srcset="${nt} 320w, 
            ${st} 640w,
            ${lt} 960w,
            ${Be} 1920w,
            ${rt} 5237w" alt="Thomas"/>`,i(e,"id","hero-image"),i(e,"class","svelte-17w5aeu")},m(n,s){C(n,e,s)},p:_,i:_,o:_,d(n){n&&w(e)}}}class it extends I{constructor(e){super(),O(this,e,null,at,E,{})}}function ot(t){let e;return{c(){e=h("section"),e.innerHTML=`<h2 class="svelte-e860h3">ABOUT</h2> <p class="lead svelte-e860h3">Thomas McEvoy is a New York based pianist with a passion for jazz music.</p> <p class="svelte-e860h3">Thomas began playing piano by ear at the age of four, and graduated from
    <a href="//juilliard.edu" class="svelte-e860h3">Juilliard</a> in 2009, where he studied with
    <a href="//kennybarron.com" class="svelte-e860h3">Kenny Barron</a>. He has performed at major jazz
    venues such as
    <a href="//jazz.org/dizzys" class="svelte-e860h3">Dizzy&#39;s Club</a>,
    <a href="//smallsjazzclub.com" class="svelte-e860h3">Smalls</a>, and
    <a href="//birdlandjazz.com" class="svelte-e860h3">Birdland</a>. His accolades include first place
    in the Phillips Jazz Piano Competition, and the invitation to attend
    <a href="//education.kennedy-center.org/education/jazzahead/" class="svelte-e860h3">Betty Carter&#39;s Jazz Ahead</a>
    composers&#39; residency. He has been fortunate to share the stage with many notable
    artists, including
    <a href="//bennygolson.com" class="svelte-e860h3">Benny Golson</a>,
    <a href="//christianmcbride.com" class="svelte-e860h3">Christian McBride</a>,
    <a href="//steveturre.com" class="svelte-e860h3">Steve Turre</a>,
    <a href="//benwolfe.com" class="svelte-e860h3">Ben Wolfe</a>,
    <a href="//grantstewartjazz.com" class="svelte-e860h3">Grant Stewart</a>,
    <a href="//fukushitainaka.com" class="svelte-e860h3">Fukushi Tainaka</a>, and Delbert Felix.
    Thomas maintains a busy performance schedule and is in demand as a leader
    and a sideman.</p> <p class="expandable svelte-e860h3">Thomas is invested in cultivating the next generation of musicians and music
    appreciators. He has taught students around the world, having conducted
    masterclasses and private lessons in Costa Rica, Colombia, and El Salvador.
    He has also served as guest clinician at
    <a href="//snow.edu" class="svelte-e860h3">Snow College</a>
    in Ephraim, UT, and guest lecturer at The Juilliard School. After spending ten
    years on faculty at
    <a href="//churchstreetschool.org" class="svelte-e860h3">Church Street School for Music and Art</a>, a great community arts school in Tribeca, he currently teaches students
    in his private studio.</p>`,i(e,"id","about"),i(e,"class","about svelte-e860h3")},m(n,s){C(n,e,s)},p:_,i:_,o:_,d(n){n&&w(e)}}}class ct extends I{constructor(e){super(),O(this,e,null,ot,E,{})}}const Q=[{src:"/assets/If I Love Again.mp3",title:"If I Love Again",album:"Standards",number:0},{src:"/assets/It Never Entered My Mind.mp3",title:"It Never Entered My Mind",album:"Standards",number:1},{src:"/assets/All the Things You Are.mp3",title:"All the Things You Are",album:"Standards",number:2},{src:"/assets/Mandjet.mp3",title:"Mandjet",album:"Compositions",number:3},{src:"/assets/Black Hat.mp3",title:"Black Hat, Black Gloves",album:"Compositions",number:4},{src:"/assets/April Fool.mp3",title:"April Fool",album:"Compositions",number:5}];const{isNaN:ut}=We;function He(t,e,n){const s=t.slice();return s[19]=e[n],s}function Le(t,e,n){const s=t.slice();return s[22]=e[n],s}function Ne(t){let e,n,s;function l(){return t[14](t[22])}return{c(){e=h("a"),e.textContent=`${t[22].title.toUpperCase()}`,i(e,"class","song svelte-9g83y1"),ie(e,"song--current",!t[4]&&t[22].number===t[0])},m(r,d){C(r,e,d),n||(s=L(e,"click",l),n=!0)},p(r,d){t=r,d&17&&ie(e,"song--current",!t[4]&&t[22].number===t[0])},d(r){r&&w(e),n=!1,s()}}}function je(t){let e,n=t[22].album===t[19]&&Ne(t);return{c(){n&&n.c(),e=Ye()},m(s,l){n&&n.m(s,l),C(s,e,l)},p(s,l){s[22].album===s[19]?n?n.p(s,l):(n=Ne(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){s&&w(e),n&&n.d(s)}}}function Ae(t){let e,n,s=t[19].toUpperCase()+"",l,r,d,p=Z(Q),c=[];for(let a=0;a<p.length;a+=1)c[a]=je(Le(t,p,a));return{c(){e=h("div"),n=h("h3"),l=X(s),r=k();for(let a=0;a<c.length;a+=1)c[a].c();d=k(),i(n,"class","svelte-9g83y1"),i(e,"class","album svelte-9g83y1")},m(a,f){C(a,e,f),o(e,n),o(n,l),o(e,r);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(e,null);o(e,d)},p(a,f){if(f&64&&s!==(s=a[19].toUpperCase()+"")&&me(l,s),f&209){p=Z(Q);let u;for(u=0;u<p.length;u+=1){const g=Le(a,p,u);c[u]?c[u].p(g,f):(c[u]=je(g),c[u].c(),c[u].m(e,d))}for(;u<c.length;u+=1)c[u].d(1);c.length=p.length}},d(a){a&&w(e),ve(c,a)}}}function dt(t){let e,n,s;return{c(){e=h("button"),e.innerHTML='<svg viewBox="0 0 105.469 131.621"><path fill="#414042" stroke="#bf9600" stroke-width="2.5" d="M13.25 1.25h23.652V131.46H13.25zM68.132 1.25h23.652V131.46H68.132z"></path></svg>',i(e,"id","pause"),i(e,"class","controls__button controls__button--large svelte-9g83y1")},m(l,r){C(l,e,r),n||(s=L(e,"click",t[17]),n=!0)},p:_,d(l){l&&w(e),n=!1,s()}}}function ft(t){let e,n,s;return{c(){e=h("button"),e.innerHTML='<svg viewBox="0 0 105.469 131.621"><path fill="#414042" stroke="#bf9600" stroke-width="2.5" d="M1.25 2.255V129.37l101.858-63.49z"></path></svg>',i(e,"id","play"),i(e,"class","controls__button controls__button--large svelte-9g83y1")},m(l,r){C(l,e,r),n||(s=L(e,"click",t[16]),n=!0)},p:_,d(l){l&&w(e),n=!1,s()}}}function ht(t){let e,n,s,l,r,d,p=!1,c,a=!0,f,u,g,b,M,N,v,T,te,B,V,x=(t[4]?"":re(t[1]))+"",y,_e,q,J,ye,R,ne=(t[4]?"":t[2]?re(t[2]):"0:00")+"",ce,ue,be;function ke(){cancelAnimationFrame(c),r.paused||(c=Je(ke),p=!0),t[10].call(r)}let W=Z(t[6]),$=[];for(let m=0;m<W.length;m+=1)$[m]=Ae(He(t,W,m));function Me(m,S){return m[3]?ft:dt}let se=Me(t),H=se(t);return{c(){e=h("section"),n=h("h2"),n.textContent="MUSIC",s=k(),l=h("div"),r=h("audio"),f=k(),u=h("div");for(let m=0;m<$.length;m+=1)$[m].c();g=k(),b=h("div"),M=h("button"),M.innerHTML='<svg viewBox="0 0 213 132"><path fill="#414042" stroke="#bf9600" stroke-width="3.5" d="M108.418 66l99 61V5zM4 66l99.293 61V5zM108.418 66l99 61V5z"></path></svg>',N=k(),H.c(),v=k(),T=h("button"),T.innerHTML='<svg viewBox="0 0 213 132"><path fill="#414042" stroke="#bf9600" stroke-width="3.5" d="M4 5v122l99-61zM108.125 5v122l99.292-61zM4 5v122l99-61z"></path></svg>',te=k(),B=h("div"),V=h("div"),y=X(x),_e=k(),q=h("div"),J=h("div"),ye=k(),R=h("div"),ce=X(ne),i(n,"class","svelte-9g83y1"),ze(r.src,d=t[5])||i(r,"src",d),i(r,"preload","metadata"),t[2]===void 0&&oe(()=>t[11].call(r)),i(u,"id","playlist"),i(M,"id","previous"),i(M,"class","controls__button controls__button--small svelte-9g83y1"),i(T,"id","next"),i(T,"class","controls__button controls__button--small svelte-9g83y1"),i(b,"id","controls"),i(b,"class","svelte-9g83y1"),i(V,"id","current-time"),i(V,"class","svelte-9g83y1"),i(J,"id","seek-bar"),$e(J,"--progress",t[1]/t[2]+"%"),i(J,"class","svelte-9g83y1"),i(q,"id","progress-bar"),i(q,"class","svelte-9g83y1"),i(R,"id","duration"),i(R,"class","svelte-9g83y1"),i(B,"id","progress"),i(B,"class","svelte-9g83y1"),i(l,"id","player"),i(l,"class","svelte-9g83y1"),ie(l,"paused",t[3]),i(e,"id","music"),i(e,"class","svelte-9g83y1")},m(m,S){C(m,e,S),o(e,n),o(e,s),o(e,l),o(l,r),o(l,f),o(l,u);for(let z=0;z<$.length;z+=1)$[z]&&$[z].m(u,null);o(l,g),o(l,b),o(b,M),o(b,N),H.m(b,null),o(b,v),o(b,T),o(l,te),o(l,B),o(B,V),o(V,y),o(B,_e),o(B,q),o(q,J),o(B,ye),o(B,R),o(R,ce),ue||(be=[L(r,"timeupdate",ke),L(r,"durationchange",t[11]),L(r,"play",t[12]),L(r,"pause",t[12]),L(r,"ended",t[13]),L(M,"click",t[15]),L(T,"click",t[18])],ue=!0)},p(m,[S]){if(S&32&&!ze(r.src,d=m[5])&&i(r,"src",d),!p&&S&2&&!ut(m[1])&&(r.currentTime=m[1]),p=!1,S&8&&a!==(a=m[3])&&r[a?"pause":"play"](),S&209){W=Z(m[6]);let z;for(z=0;z<W.length;z+=1){const we=He(m,W,z);$[z]?$[z].p(we,S):($[z]=Ae(we),$[z].c(),$[z].m(u,null))}for(;z<$.length;z+=1)$[z].d(1);$.length=W.length}se===(se=Me(m))&&H?H.p(m,S):(H.d(1),H=se(m),H&&(H.c(),H.m(b,v))),S&18&&x!==(x=(m[4]?"":re(m[1]))+"")&&me(y,x),S&6&&$e(J,"--progress",m[1]/m[2]+"%"),S&20&&ne!==(ne=(m[4]?"":m[2]?re(m[2]):"0:00")+"")&&me(ce,ne),S&8&&ie(l,"paused",m[3])},i:_,o:_,d(m){m&&w(e),ve($,m),H.d(),ue=!1,ee(be)}}}function re(t){if(isNaN(t))return"...";const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n<10?`0${n}`:n}`}function mt(t,e,n){let{albums:s=[...new Set(Q.map(y=>y.album))]}=e,{currentTrack:l=0}=e,{currentTime:r=0}=e,{duration:d=0}=e,{paused:p=!0}=e,{pristine:c=!0}=e,{src:a=Q[0].src}=e;function f(y){c&&n(4,c=!1),p===!1&&n(3,p=!0),y!==void 0&&(n(0,l=y),n(5,a=Q[y].src)),setTimeout(()=>n(3,p=!1),0)}function u(){c||f(l===0?5:l-1)}function g(){c||f(l===5?0:l+1)}function b(){r=this.currentTime,n(1,r)}function M(){d=this.duration,n(2,d)}function N(){p=this.paused,n(3,p)}const v=()=>g(),T=y=>f(y.number),te=()=>u(),B=()=>f(),V=()=>n(3,p=!p),x=()=>g();return t.$$set=y=>{"albums"in y&&n(6,s=y.albums),"currentTrack"in y&&n(0,l=y.currentTrack),"currentTime"in y&&n(1,r=y.currentTime),"duration"in y&&n(2,d=y.duration),"paused"in y&&n(3,p=y.paused),"pristine"in y&&n(4,c=y.pristine),"src"in y&&n(5,a=y.src)},[l,r,d,p,c,a,s,f,u,g,b,M,N,v,T,te,B,V,x]}class pt extends I{constructor(e){super(),O(this,e,mt,ht,E,{albums:6,currentTrack:0,currentTime:1,duration:2,paused:3,pristine:4,src:5,play:7,previous:8,next:9})}get play(){return this.$$.ctx[7]}get previous(){return this.$$.ctx[8]}get next(){return this.$$.ctx[9]}}const he={year:"2023",month:"September",shows:[{day:2,venue:"The Wallace",url:"//thewallace.com/lounge",band:"Steve Picataggio Trio",time:"7–11 PM"},{day:3,venue:"Church of the Ascension",url:"//ascensionchurchnyc.org",band:"Jazz Vespers",time:"6–7 PM"},{day:4,venue:"Sleep No More",url:"//mckittrickhotel.com",band:"Manderley Bar House Band",time:"9:00–10:30 PM"},{day:6,venue:"Sleep No More",url:"//mckittrickhotel.com",band:"Manderley Bar House Band",time:"9:00–10:30 PM"},{day:7,venue:"The Wallace",url:"//thewallace.com/lounge",band:"Duo with Jane Irving",time:"7–10 PM"},{day:8,venue:"Sleep No More",url:"//mckittrickhotel.com",band:"Manderley Bar House Band",time:"9:30–11:00 PM"},{day:9,venue:"Sleep No More",url:"//mckittrickhotel.com",band:"Manderley Bar House Band",time:"10:00–11:30 PM"},{day:10,venue:"Church of the Ascension",url:"//ascensionchurchnyc.org",band:"Jazz Vespers",time:"6–7 PM"},{day:11,venue:"Sleep No More",url:"//mckittrickhotel.com",band:"Manderley Bar House Band",time:"9:00–10:30 PM"},{day:13,venue:"Sleep No More",url:"//mckittrickhotel.com",band:"Manderley Bar House Band",time:"9:00–10:30 PM"},{day:15,venue:"Sleep No More",url:"//mckittrickhotel.com",band:"Manderley Bar House Band",time:"9:30–11:00 PM"},{day:16,venue:"The Lotos Club",url:"//lotosclub.org",band:"Private Event",time:"6:30–10:30 PM"},{day:17,venue:"Church of the Ascension",url:"//ascensionchurchnyc.org",band:"Jazz Vespers",time:"6–7 PM"},{day:20,venue:"Sleep No More",url:"//mckittrickhotel.com",band:"Manderley Bar House Band",time:"9:00–10:30 PM"},{day:21,venue:"Sleep No More",url:"//mckittrickhotel.com",band:"Manderley Bar House Band",time:"9:00–10:30 PM"},{day:22,venue:"Sleep No More",url:"//mckittrickhotel.com",band:"Manderley Bar House Band",time:"9:30–11:00 PM"},{day:24,venue:"Church of the Ascension",url:"//ascensionchurchnyc.org",band:"Jazz Vespers",time:"6–7 PM"},{day:25,venue:"Sleep No More",url:"//mckittrickhotel.com",band:"Manderley Bar House Band",time:"9:00–10:30 PM"},{day:27,venue:"Sleep No More",url:"//mckittrickhotel.com",band:"Manderley Bar House Band",time:"9:00–10:30 PM"},{day:28,venue:"Sleep No More",url:"//mckittrickhotel.com",band:"Manderley Bar House Band",time:"9:00–10:30 PM"},{day:"",venue:"",url:"",band:"",time:""}]};function vt(t,e,n){const s=t.slice();return s[0]=e[n],s}function gt(t){let e;return{c(){e=h("a"),e.textContent=`${t[0].venue.toUpperCase()}`,i(e,"href",t[0].url),i(e,"class","venue svelte-8pjduz")},m(n,s){C(n,e,s)},d(n){n&&w(e)}}}function _t(t){let e;return{c(){e=h("div"),e.textContent=`${t[0].venue.toUpperCase()}`,i(e,"class","venue svelte-8pjduz")},m(n,s){C(n,e,s)},d(n){n&&w(e)}}}function yt(t){let e,n,s,l,r,d,p,c,a;function f(b,M){return b[0].url?gt:_t}let g=f(t)(t);return{c(){e=h("li"),n=h("div"),n.textContent=`${t[0].day}`,s=k(),l=h("div"),g.c(),r=k(),d=h("div"),d.textContent=`${t[0].band.toUpperCase()}`,p=k(),c=h("div"),c.textContent=`${t[0].time.toUpperCase()}`,a=k(),i(n,"class","day svelte-8pjduz"),i(l,"class","details svelte-8pjduz"),i(e,"class","show svelte-8pjduz")},m(b,M){C(b,e,M),o(e,n),o(e,s),o(e,l),g.m(l,null),o(l,r),o(l,d),o(l,p),o(l,c),o(e,a)},p:_,d(b){b&&w(e),g.d()}}}function bt(t){let e,n,s,l,r,d,p,c=Z(he.shows),a=[];for(let f=0;f<c.length;f+=1)a[f]=yt(vt(t,c,f));return{c(){e=h("section"),n=h("h2"),n.textContent="SHOWS",s=k(),l=h("div"),r=h("h4"),r.textContent=`${he.month} ${he.year}`,d=k(),p=h("ol");for(let f=0;f<a.length;f+=1)a[f].c();i(r,"class","svelte-8pjduz"),i(l,"id","calendar"),i(l,"class","svelte-8pjduz"),i(e,"id","shows"),i(e,"class","svelte-8pjduz")},m(f,u){C(f,e,u),o(e,n),o(e,s),o(e,l),o(l,r),o(l,d),o(l,p);for(let g=0;g<a.length;g+=1)a[g]&&a[g].m(p,null)},p:_,i:_,o:_,d(f){f&&w(e),ve(a,f)}}}class kt extends I{constructor(e){super(),O(this,e,null,bt,E,{})}}function Mt(t){let e;return{c(){e=h("section"),e.innerHTML='<h2 class="svelte-7n05jk">CONTACT</h2> <h3 class="svelte-7n05jk">GOT QUESTIONS / COMMENTS?</h3> <h3 class="svelte-7n05jk">INQUIRE BELOW</h3> <form action="//formspree.io/tmcevoy213@gmail.com" method="POST" class="svelte-7n05jk"><input id="name" type="text" name="name" placeholder="NAME" class="svelte-7n05jk"/> <input id="email" type="email" name="_replyto" placeholder="EMAIL" class="svelte-7n05jk"/> <textarea id="message" name="message" placeholder="MESSAGE" class="svelte-7n05jk"></textarea> <input id="submit" type="submit" value="SEND" class="svelte-7n05jk"/></form>',i(e,"id","contact"),i(e,"class","svelte-7n05jk")},m(n,s){C(n,e,s)},p:_,i:_,o:_,d(n){n&&w(e)}}}function Ie(){this.name="",this.email="",this.message=""}function wt(t,e,n){return[Ie]}class Ct extends I{constructor(e){super(),O(this,e,wt,Mt,E,{resetForm:0})}get resetForm(){return Ie}}function zt(t){let e,n,s,l;return{c(){e=h("footer"),n=h("div"),n.innerHTML='<a id="soundcloud" class="social-icon svelte-kd4il2" href="//soundcloud.com/thomas-mcevoy"><svg viewBox="0 0 20 20"><path d="M0.672,13.055L1,11.654l-0.328-1.447c-0.009-0.043-0.092-0.076-0.191-0.076c-0.102,0-0.184,0.033-0.191,0.076L0,11.654 l0.289,1.4c0.008,0.045,0.09,0.076,0.191,0.076C0.58,13.131,0.663,13.1,0.672,13.055z M2.723,13.832L3,11.668L2.723,8.32 C2.714,8.236,2.609,8.168,2.484,8.168c-0.127,0-0.233,0.068-0.238,0.152L2,11.668l0.246,2.164c0.006,0.086,0.111,0.152,0.238,0.152 C2.609,13.984,2.714,13.918,2.723,13.832z M4.768,13.797L5,11.67L4.768,7.213C4.762,7.107,4.639,7.025,4.486,7.025 c-0.152,0-0.275,0.082-0.281,0.188L4,11.67l0.205,2.129c0.006,0.103,0.129,0.186,0.281,0.186 C4.639,13.984,4.762,13.902,4.768,13.797z M6.81,13.766L7,11.67L6.81,7.18C6.805,7.057,6.664,6.959,6.49,6.959 c-0.176,0-0.316,0.098-0.321,0.221L6,11.67l0.17,2.096c0.004,0.123,0.145,0.221,0.32,0.221C6.664,13.986,6.805,13.891,6.81,13.766z M8.85,13.738L9,11.672L8.85,6.523C8.846,6.381,8.686,6.268,8.492,6.268c-0.194,0-0.354,0.115-0.357,0.256L8,11.67l0.135,2.068 c0.003,0.141,0.163,0.256,0.357,0.256C8.686,13.994,8.846,13.881,8.85,13.738z M10.277,13.996c0.008,0,7.1,0.004,7.145,0.004 C18.846,14,20,12.883,20,11.506c0-1.377-1.154-2.492-2.578-2.492c-0.353,0-0.689,0.07-0.996,0.193 c-0.205-2.246-2.153-4.008-4.529-4.008c-0.581,0-1.148,0.111-1.648,0.297C10.053,5.57,10.002,5.644,10,5.791v7.91 C10.002,13.854,10.124,13.98,10.277,13.996z"></path></svg></a> <a id="linkedin" class="social-icon svelte-kd4il2" href="//linkedin.com/in/tommcevoymusic"><svg viewBox="0 0 32 32"><path d="M7 32H.8V12.1H7V32zM3.8 9.6C1.5 9.6 0 8 0 6.1c0-2 1.5-3.5 3.8-3.5s3.7 1.5 3.8 3.5c0 1.9-1.5 3.5-3.8 3.5zM32 32h-7.1V21.7c0-2.7-1.1-4.5-3.5-4.5-1.9 0-2.9 1.2-3.4 2.4-.2.4-.2 1-.2 1.6V32h-7s.1-18.3 0-19.9h7v3.1c.4-1.4 2.6-3.3 6.2-3.3 4.4 0 7.9 2.9 7.9 9V32z"></path></svg></a>',s=k(),l=h("small"),l.textContent=`ALL CONTENT ©2007–${new Date().getFullYear()} THOMAS MCEVOY`,i(n,"class","social svelte-kd4il2"),i(l,"class","svelte-kd4il2"),i(e,"class","svelte-kd4il2")},m(r,d){C(r,e,d),o(e,n),o(e,s),o(e,l)},p:_,i:_,o:_,d(r){r&&w(e)}}}class $t extends I{constructor(e){super(),O(this,e,null,zt,E,{})}}function Tt(t){let e,n,s,l,r,d,p,c,a,f,u,g,b,M,N;return e=new tt({}),l=new it({}),d=new ct({}),c=new pt({}),f=new kt({}),g=new Ct({}),M=new $t({}),{c(){F(e.$$.fragment),n=k(),s=h("main"),F(l.$$.fragment),r=k(),F(d.$$.fragment),p=k(),F(c.$$.fragment),a=k(),F(f.$$.fragment),u=k(),F(g.$$.fragment),b=k(),F(M.$$.fragment)},m(v,T){A(e,v,T),C(v,n,T),C(v,s,T),A(l,s,null),o(s,r),A(d,s,null),o(s,p),A(c,s,null),o(s,a),A(f,s,null),o(s,u),A(g,s,null),C(v,b,T),A(M,v,T),N=!0},p:_,i(v){N||(j(e.$$.fragment,v),j(l.$$.fragment,v),j(d.$$.fragment,v),j(c.$$.fragment,v),j(f.$$.fragment,v),j(g.$$.fragment,v),j(M.$$.fragment,v),N=!0)},o(v){U(e.$$.fragment,v),U(l.$$.fragment,v),U(d.$$.fragment,v),U(c.$$.fragment,v),U(f.$$.fragment,v),U(g.$$.fragment,v),U(M.$$.fragment,v),N=!1},d(v){v&&(w(n),w(s),w(b)),P(e,v),P(l),P(d),P(c),P(f),P(g),P(M,v)}}}class St extends I{constructor(e){super(),O(this,e,null,Tt,E,{})}}new St({target:document.getElementById("app")});