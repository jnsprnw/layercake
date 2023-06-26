import{e as Ge}from"../chunks/index.93323930.js";import{s as Ue,f as w,l as F,g as D,h as z,m as J,d as h,j as g,k as ge,i as H,x as _,z as x,E as ze,q as Ee,a as T,K as Qe,c as C,r as Oe,w as Ie,n as ae,B as ne,C as Ae,e as se}from"../chunks/scheduler.101db06a.js";import{S as Fe,i as Je,b as ue,d as ye,m as fe,t as he,c as We,a as de,e as me,g as Xe}from"../chunks/index.5bc76508.js";import{d as je,t as Ye,M as Ze,g as xe}from"../chunks/downloadBlob.0be372d9.js";import{e as A}from"../chunks/each.af0871f9.js";import{H as _e,h as Se}from"../chunks/hljsDefineSvelte.348e44ec.js";import{u as et}from"../chunks/Brush.html.93f6dc0c.js";import{c as tt}from"../chunks/_components.929b369d.js";async function lt({fetch:n,params:e}){const{slug:l}=e,t=`${l}.json`,s=await n(t),c=await s.json();if(s.status===200)return{slug:l,content:c,active:l};throw Ge(500,`Could not load ${t}: ${c.message}`)}const bt=Object.freeze(Object.defineProperty({__proto__:null,load:lt},Symbol.toStringTag,{value:"Module"}));function nt(n){let e,l,t,s;return{c(){e=w("button"),l=F("Download      "),this.h()},l(c){e=D(c,"BUTTON",{title:!0,class:!0,style:!0});var o=z(e);l=J(o,"Download      "),o.forEach(h),this.h()},h(){e.disabled=n[0],g(e,"title","download zip file"),g(e,"class","icon svelte-1gef78k"),ge(e,"background-image","url(/icons/download.svg)")},m(c,o){H(c,e,o),_(e,l),t||(s=x(e,"click",n[1]),t=!0)},p(c,[o]){o&1&&(e.disabled=c[0])},i:ze,o:ze,d(c){c&&h(e),t=!1,s()}}}function st(n,e,l){let{data:t={}}=e,{slug:s}=e,c=!1;async function o(){l(0,c=!0);const a=[];a.push(...t.modules.map(i=>({path:i.slug.replace("./",""),data:i.contents}))),a.push({path:s,data:t.main.contents});const f=et(a.filter(Boolean),"path",!1);if(f.length===1)je(f[0].data,`layercake-${s}`,!0);else{const i=s.split(".");je(Ye(f),`layercake-${i[0]}.zip`)}l(0,c=!1)}return n.$$set=a=>{"data"in a&&l(2,t=a.data),"slug"in a&&l(3,s=a.slug)},[c,o,t,s]}class at extends Fe{constructor(e){super(),Je(this,e,st,nt,Ue,{data:2,slug:3})}}const{document:pe}=xe;function Te(n,e,l){const t=n.slice();return t[16]=e[l],t}function Ce(n,e,l){const t=n.slice();return t[16]=e[l],t}function He(n,e,l){const t=n.slice();return t[21]=e[l],t}function $e(n,e,l){const t=n.slice();return t[24]=e[l],t}function Le(n){let e,l=n[6](n[3])+"";return{c(){e=w("div"),this.h()},l(t){e=D(t,"DIV",{id:!0,class:!0});var s=z(e);s.forEach(h),this.h()},h(){g(e,"id","params-table"),g(e,"class","svelte-7in5zh")},m(t,s){H(t,e,s),e.innerHTML=l},p(t,s){s&8&&l!==(l=t[6](t[3])+"")&&(e.innerHTML=l)},d(t){t&&h(e)}}}function Me(n){let e,l,t=n[1].usedIn[0].matches.length===0&&n[1].usedIn[1].matches.length>0?" SSR":"",s,c,o,a,f=A(n[1].usedIn),i=[];for(let u=0;u<f.length;u+=1)i[u]=Be(He(n,f,u));return{c(){e=w("h3"),l=F("Used in these"),s=F(t),c=F(" examples:"),o=T();for(let u=0;u<i.length;u+=1)i[u].c();a=se(),this.h()},l(u){e=D(u,"H3",{class:!0});var b=z(e);l=J(b,"Used in these"),s=J(b,t),c=J(b," examples:"),b.forEach(h),o=C(u);for(let d=0;d<i.length;d+=1)i[d].l(u);a=se(),this.h()},h(){g(e,"class","svelte-7in5zh")},m(u,b){H(u,e,b),_(e,l),_(e,s),_(e,c),H(u,o,b);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(u,b);H(u,a,b)},p(u,b){if(b&2&&t!==(t=u[1].usedIn[0].matches.length===0&&u[1].usedIn[1].matches.length>0?" SSR":"")&&ae(s,t),b&2){f=A(u[1].usedIn);let d;for(d=0;d<f.length;d+=1){const k=He(u,f,d);i[d]?i[d].p(k,b):(i[d]=Be(k),i[d].c(),i[d].m(a.parentNode,a))}for(;d<i.length;d+=1)i[d].d(1);i.length=f.length}},d(u){u&&(h(e),h(o),h(a)),ne(i,u)}}}function Ve(n){let e,l,t,s=n[21].group==="SSR"&&n[1].usedIn[0].matches.length>0&&Re(),c=A(n[21].matches),o=[];for(let a=0;a<c.length;a+=1)o[a]=qe($e(n,c,a));return{c(){s&&s.c(),e=T(),l=w("ul");for(let a=0;a<o.length;a+=1)o[a].c();t=T(),this.h()},l(a){s&&s.l(a),e=C(a),l=D(a,"UL",{class:!0});var f=z(l);for(let i=0;i<o.length;i+=1)o[i].l(f);t=C(f),f.forEach(h),this.h()},h(){g(l,"class","svelte-7in5zh")},m(a,f){s&&s.m(a,f),H(a,e,f),H(a,l,f);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(l,null);_(l,t)},p(a,f){if(a[21].group==="SSR"&&a[1].usedIn[0].matches.length>0?s||(s=Re(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),f&2){c=A(a[21].matches);let i;for(i=0;i<c.length;i+=1){const u=$e(a,c,i);o[i]?o[i].p(u,f):(o[i]=qe(u),o[i].c(),o[i].m(l,t))}for(;i<o.length;i+=1)o[i].d(1);o.length=c.length}},d(a){a&&(h(e),h(l)),s&&s.d(a),ne(o,a)}}}function Re(n){let e,l="SSR Examples:";return{c(){e=w("h3"),e.textContent=l,this.h()},l(t){e=D(t,"H3",{class:!0,["data-svelte-h"]:!0}),Oe(e)!=="svelte-jw8f5j"&&(e.textContent=l),this.h()},h(){g(e,"class","svelte-7in5zh")},m(t,s){H(t,e,s)},d(t){t&&h(e)}}}function qe(n){let e,l,t=n[24].split("/").pop()+"",s,c;return{c(){e=w("li"),l=w("a"),s=F(t),this.h()},l(o){e=D(o,"LI",{});var a=z(e);l=D(a,"A",{href:!0,class:!0});var f=z(l);s=J(f,t),f.forEach(h),a.forEach(h),this.h()},h(){g(l,"href",c=n[24]),g(l,"class","svelte-7in5zh")},m(o,a){H(o,e,a),_(e,l),_(l,s)},p(o,a){a&2&&t!==(t=o[24].split("/").pop()+"")&&ae(s,t),a&2&&c!==(c=o[24])&&g(l,"href",c)},d(o){o&&h(e)}}}function Be(n){let e,l=n[21].matches.length>0&&Ve(n);return{c(){l&&l.c(),e=se()},l(t){l&&l.l(t),e=se()},m(t,s){l&&l.m(t,s),H(t,e,s)},p(t,s){t[21].matches.length>0?l?l.p(t,s):(l=Ve(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){t&&h(e),l&&l.d(t)}}}function Pe(n){let e,l=n[16].slug+"",t,s,c,o,a;function f(){return n[10](n[16])}function i(){return n[11](n[16])}return{c(){e=w("li"),t=F(l),s=T(),this.h()},l(u){e=D(u,"LI",{class:!0});var b=z(e);t=J(b,l),s=C(b),b.forEach(h),this.h()},h(){g(e,"class",c="tab "+(n[2]===n[16].slug?"active":"")+" svelte-7in5zh")},m(u,b){H(u,e,b),_(e,t),_(e,s),o||(a=[x(e,"click",f),x(e,"keypress",i)],o=!0)},p(u,b){n=u,b&16&&l!==(l=n[16].slug+"")&&ae(t,l),b&20&&c!==(c="tab "+(n[2]===n[16].slug?"active":"")+" svelte-7in5zh")&&g(e,"class",c)},d(u){u&&h(e),o=!1,Ae(a)}}}function Ne(n){let e,l,t=n[7](n[16].contents,n[16].slug)+"",s;return{c(){e=w("div"),l=w("pre"),s=T(),this.h()},l(c){e=D(c,"DIV",{class:!0,style:!0});var o=z(e);l=D(o,"PRE",{class:!0});var a=z(l);a.forEach(h),s=C(o),o.forEach(h),this.h()},h(){g(l,"class","svelte-7in5zh"),g(e,"class","contents"),ge(e,"display",n[2]===n[16].slug?"block":"none")},m(c,o){H(c,e,o),_(e,l),l.innerHTML=t,_(e,s)},p(c,o){o&16&&t!==(t=c[7](c[16].contents,c[16].slug)+"")&&(l.innerHTML=t),o&20&&ge(e,"display",c[2]===c[16].slug?"block":"none")},d(c){c&&h(e)}}}function ot(n){let e,l,t,s,c='<a href="/components" class="svelte-7in5zh">← View all components</a>',o,a,f=n[5].slug+"",i,u,b,d,k,Q,q,M,Z,B,v=n[6](n[1].componentDescription)+"",L,P,$,oe,V,N,ie,R,K,re,ee,U,ce,ve;pe.title=e=n[5].slug+" component";var W=n[5].component;function be(r){return{}}W&&(k=Ee(W,be())),M=new at({props:{data:n[1],slug:n[0]}});let j=n[1].hasjsDoctable===!0&&Le(n),S=(n[1].usedIn[0].matches.length>0||n[1].usedIn[1].matches.length>0)&&Me(n),X=A(n[4]),E=[];for(let r=0;r<X.length;r+=1)E[r]=Pe(Ce(n,X,r));let Y=A(n[4]),I=[];for(let r=0;r<Y.length;r+=1)I[r]=Ne(Te(n,Y,r));return{c(){l=T(),t=w("div"),s=w("div"),s.innerHTML=c,o=T(),a=w("h1"),i=F(f),u=F(" component"),b=T(),d=w("div"),k&&ue(k.$$.fragment),Q=T(),q=w("div"),ue(M.$$.fragment),Z=T(),B=w("div"),L=T(),j&&j.c(),P=T(),$=w("div"),S&&S.c(),oe=T(),V=w("div"),N=w("ul");for(let r=0;r<E.length;r+=1)E[r].c();ie=T(),R=w("div"),K=w("div"),re=T();for(let r=0;r<I.length;r+=1)I[r].c();this.h()},l(r){Qe("svelte-1675z5z",pe.head).forEach(h),l=C(r),t=D(r,"DIV",{class:!0});var p=z(t);s=D(p,"DIV",{class:!0,["data-svelte-h"]:!0}),Oe(s)!=="svelte-1p7skv0"&&(s.innerHTML=c),o=C(p),a=D(p,"H1",{class:!0});var m=z(a);i=J(m,f),u=J(m," component"),m.forEach(h),b=C(p),d=D(p,"DIV",{class:!0});var O=z(d);k&&ye(k.$$.fragment,O),O.forEach(h),Q=C(p),q=D(p,"DIV",{class:!0});var ke=z(q);ye(M.$$.fragment,ke),ke.forEach(h),Z=C(p),B=D(p,"DIV",{class:!0});var Ke=z(B);Ke.forEach(h),L=C(p),j&&j.l(p),P=C(p),$=D(p,"DIV",{id:!0,class:!0});var we=z($);S&&S.l(we),we.forEach(h),oe=C(p),V=D(p,"DIV",{id:!0,class:!0});var te=z(V);N=D(te,"UL",{id:!0,class:!0});var De=z(N);for(let G=0;G<E.length;G+=1)E[G].l(De);De.forEach(h),ie=C(te),R=D(te,"DIV",{id:!0,class:!0});var le=z(R);K=D(le,"DIV",{class:!0}),z(K).forEach(h),re=C(le);for(let G=0;G<I.length;G+=1)I[G].l(le);le.forEach(h),te.forEach(h),p.forEach(h),this.h()},h(){g(s,"class","all-components svelte-7in5zh"),g(a,"class","svelte-7in5zh"),g(d,"class","chart-hero svelte-7in5zh"),g(q,"class","download svelte-7in5zh"),g(B,"class","dek svelte-7in5zh"),g($,"id","used-in"),g($,"class","svelte-7in5zh"),g(N,"id","page-nav"),g(N,"class","svelte-7in5zh"),g(K,"class","copy svelte-7in5zh"),g(R,"id","contents-container"),g(R,"class","svelte-7in5zh"),g(V,"id","pages"),g(V,"class",ee=Ie(n[1].dek?"has-dek":"")+" svelte-7in5zh"),g(t,"class","main svelte-7in5zh")},m(r,y){H(r,l,y),H(r,t,y),_(t,s),_(t,o),_(t,a),_(a,i),_(a,u),_(t,b),_(t,d),k&&fe(k,d,null),_(t,Q),_(t,q),fe(M,q,null),_(t,Z),_(t,B),B.innerHTML=v,_(t,L),j&&j.m(t,null),_(t,P),_(t,$),S&&S.m($,null),_(t,oe),_(t,V),_(V,N);for(let p=0;p<E.length;p+=1)E[p]&&E[p].m(N,null);_(V,ie),_(V,R),_(R,K),_(R,re);for(let p=0;p<I.length;p+=1)I[p]&&I[p].m(R,null);U=!0,ce||(ve=[x(K,"click",n[8]),x(K,"keypress",n[8])],ce=!0)},p(r,[y]){if((!U||y&32)&&e!==(e=r[5].slug+" component")&&(pe.title=e),(!U||y&32)&&f!==(f=r[5].slug+"")&&ae(i,f),y&32&&W!==(W=r[5].component)){if(k){Xe();const m=k;he(m.$$.fragment,1,0,()=>{me(m,1)}),We()}W?(k=Ee(W,be()),ue(k.$$.fragment),de(k.$$.fragment,1),fe(k,d,null)):k=null}const p={};if(y&2&&(p.data=r[1]),y&1&&(p.slug=r[0]),M.$set(p),(!U||y&2)&&v!==(v=r[6](r[1].componentDescription)+"")&&(B.innerHTML=v),r[1].hasjsDoctable===!0?j?j.p(r,y):(j=Le(r),j.c(),j.m(t,P)):j&&(j.d(1),j=null),r[1].usedIn[0].matches.length>0||r[1].usedIn[1].matches.length>0?S?S.p(r,y):(S=Me(r),S.c(),S.m($,null)):S&&(S.d(1),S=null),y&20){X=A(r[4]);let m;for(m=0;m<X.length;m+=1){const O=Ce(r,X,m);E[m]?E[m].p(O,y):(E[m]=Pe(O),E[m].c(),E[m].m(N,null))}for(;m<E.length;m+=1)E[m].d(1);E.length=X.length}if(y&148){Y=A(r[4]);let m;for(m=0;m<Y.length;m+=1){const O=Te(r,Y,m);I[m]?I[m].p(O,y):(I[m]=Ne(O),I[m].c(),I[m].m(R,null))}for(;m<I.length;m+=1)I[m].d(1);I.length=Y.length}(!U||y&2&&ee!==(ee=Ie(r[1].dek?"has-dek":"")+" svelte-7in5zh"))&&g(V,"class",ee)},i(r){U||(k&&de(k.$$.fragment,r),de(M.$$.fragment,r),U=!0)},o(r){k&&he(k.$$.fragment,r),he(M.$$.fragment,r),U=!1},d(r){r&&(h(l),h(t)),k&&me(k),me(M),j&&j.d(),S&&S.d(),ne(E,r),ne(I,r),ce=!1,Ae(ve)}}}function it(n){const e=l=>l.map(t=>`\`${t.name}\``).join(" &vert; ");if(n.name)return`\`${n.name}\``;if(n.type.elements)return`(${e(n.type.elements)})`;if(n.expression){if(n.expression.name)return`\`${n.expression.name}\``;if(n.expression.elements)return`(${e(n.expression.elements)})`}}function rt(n){return n?`\`${n}\``:"None"}function ct(n){return`<center>${n.type!=="OptionalType"?"yes":"no"}</center>`}function ut(n,e,l){let t,s;const c=new Ze({html:!0,linkfify:!0});_e.registerLanguage("svelte",Se),Se(_e);let{data:o}=e,{slug:a,content:f,active:i}=o;function u(v){return c.render(v)}function b(v,L){const P=L.split(".");let $=P[P.length-1];return $==="csv"&&($="diff"),_e.highlight(v,{language:$}).value}const d=new Map;tt.flatMap(v=>v.components).forEach(v=>{d.set(v.slug,v)});const k=`|Param|Default|Required|Description|
|-----|-------|--------|-----------|`;let Q="",q="";f.hasjsDoctable===!0&&(Q=`${f.jsdocParsed.tags.map(v=>`**${v.name}** ${it(v.type)}|${rt(v.default)}|${ct(v.type)}|${v.description.replace(/^(-|–|—)/g,"").trim()}`).join(`
`)}`,q=f.jsdocParsed.tags.length?`${k}
${Q}`:"");function M(){const v=t[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",v);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const L=document.createElement("textarea");L.textContent=v,L.style.position="fixed",document.body.appendChild(L),L.select();try{return document.execCommand("copy")}catch(P){return console.warn("Copy to clipboard failed.",P),!1}finally{document.body.removeChild(L)}}}const Z=v=>l(2,i=v.slug),B=v=>l(2,i=v.slug);return n.$$set=v=>{"data"in v&&l(9,o=v.data)},n.$$.update=()=>{n.$$.dirty&512&&l(0,{slug:a,content:f,active:i}=o,a,(l(1,f),l(9,o)),(l(2,i),l(9,o))),n.$$.dirty&2&&l(4,t=[f.main].concat(f.modules)),n.$$.dirty&1&&l(5,s=d.get(a))},[a,f,i,q,t,s,u,b,M,o,Z,B]}class kt extends Fe{constructor(e){super(),Je(this,e,ut,ot,Ue,{data:9})}}export{kt as component,bt as universal};
