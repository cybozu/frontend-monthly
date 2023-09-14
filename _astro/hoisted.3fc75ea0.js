const v=n=>history.state&&history.replaceState(n,""),b=!!document.startViewTransition,y=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),S=n=>document.dispatchEvent(new Event(n)),A=()=>S("astro:page-load"),h="data-astro-transition-persist";let u=0;history.state?(u=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):y()&&history.replaceState({index:u,scrollX,scrollY},"");const x=(n,e)=>{let t=!1,r=!1;return(...l)=>{if(t){r=!0;return}n(...l),t=!0,setTimeout(()=>{r&&(r=!1,n(...l)),t=!1},e)}};async function L(n){let e;try{e=await fetch(n)}catch{return{ok:!1}}const t=await e.text();return{ok:e.ok,html:t,redirected:e.redirected?e.url:void 0,contentType:e.headers.get("content-type")}}function T(){const n=document.querySelector('[name="astro-view-transitions-fallback"]');return n?n.getAttribute("content"):"animate"}function k(){for(const n of document.scripts)n.dataset.astroExec=""}function R(){let n=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const t=document.createElement("script");t.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const l=new Promise(m=>{t.onload=m});n=n.then(()=>l)}t.setAttribute(r.name,r.value)}t.dataset.astroExec="",e.replaceWith(t)}return n}function P(n){const e=n.effect;return!e||!(e instanceof KeyframeEffect)||!e.target?!1:window.getComputedStyle(e.target,e.pseudoElement).animationIterationCount==="infinite"}const Y=new DOMParser;async function E(n,e,t,r){const l=o=>{const s=o.getAttribute(h),c=s&&n.head.querySelector(`[${h}="${s}"]`);if(c)return c;if(o.matches("link[rel=stylesheet]")){const a=o.getAttribute("href");return n.head.querySelector(`link[rel=stylesheet][href="${a}"]`)}if(o.tagName==="SCRIPT"){let a=o;for(const f of n.scripts)if(a.textContent&&a.textContent===f.textContent||a.type===f.type&&a.src===f.src)return f}return null},m=()=>{n.querySelectorAll("head noscript").forEach(i=>i.remove());const o=document.documentElement,s=[...o.attributes].filter(({name:i})=>(o.removeAttribute(i),i.startsWith("data-astro-")));[...n.documentElement.attributes,...s].forEach(({name:i,value:d})=>o.setAttribute(i,d));for(const i of Array.from(document.head.children)){const d=l(i);d?d.remove():i.remove()}document.head.append(...n.head.children);const c=document.body;document.body.replaceWith(n.body);for(const i of c.querySelectorAll(`[${h}]`)){const d=i.getAttribute(h),w=document.querySelector(`[${h}="${d}"]`);w&&w.replaceWith(i)}scrollTo({left:0,top:0,behavior:"instant"});let a=0,f=0;if(!t&&e.hash){const i=decodeURIComponent(e.hash.slice(1)),d=document.getElementById(i);d&&(d.scrollIntoView(),a=Math.max(0,d.offsetLeft+d.offsetWidth-document.documentElement.clientWidth),f=d.offsetTop)}else t&&scrollTo(t.scrollX,t.scrollY);!t&&history.pushState({index:++u,scrollX:a,scrollY:f},"",e.href),S("astro:after-swap")},p=[];for(const o of n.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${h}="${o.getAttribute(h)}"], link[rel=stylesheet]`)){const s=document.createElement("link");s.setAttribute("rel","preload"),s.setAttribute("as","style"),s.setAttribute("href",o.getAttribute("href")),p.push(new Promise(c=>{["load","error"].forEach(a=>s.addEventListener(a,c)),document.head.append(s)}))}if(p.length&&await Promise.all(p),r==="animate"){const o=document.getAnimations();document.documentElement.dataset.astroTransitionFallback="old";const s=document.getAnimations().filter(f=>!o.includes(f)&&!P(f)),c=Promise.all(s.map(f=>f.finished)),a=()=>{m(),document.documentElement.dataset.astroTransitionFallback="new"};await c,a()}else m()}async function g(n,e,t){let r;const l=e.href,{html:m,ok:p,contentType:o,redirected:s}=await L(l);if(s&&(e=new URL(s)),!p||o!=="text/html"){location.href=l;return}const c=Y.parseFromString(m,o);if(!c.querySelector('[name="astro-view-transitions-enabled"]')){location.href=l;return}!t&&history.replaceState({index:u,scrollX,scrollY},""),document.documentElement.dataset.astroTransition=n,b?r=document.startViewTransition(()=>E(c,e,t)).finished:r=E(c,e,t,T());try{await r}finally{await R(),k(),A()}}function q(n){if(document.querySelector(`link[rel=prefetch][href="${n}"]`))return;if(navigator.connection){let t=navigator.connection;if(t.saveData||/(2|3)g/.test(t.effectiveType||""))return}let e=document.createElement("link");e.setAttribute("rel","prefetch"),e.setAttribute("href",n),document.head.append(e)}if(b||T()!=="none"){k(),document.addEventListener("click",e=>{let t=e.target;if(t instanceof Element&&t.tagName!=="A"&&(t=t.closest("a")),!(!t||!(t instanceof HTMLAnchorElement)||t.dataset.astroReload!==void 0||t.hasAttribute("download")||!t.href||t.target&&t.target!=="_self"||t.origin!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||!y())){if(location.pathname===t.pathname&&location.search===t.search){if(t.hash)return;if(e.preventDefault(),location.hash){history.replaceState({index:u,scrollX,scrollY:-(scrollY+1)},"");const r={index:++u,scrollX:0,scrollY:0};history.pushState(r,"",t.href)}scrollTo({left:0,top:0,behavior:"instant"});return}e.preventDefault(),g("forward",new URL(t.href))}}),addEventListener("popstate",e=>{if(!y()&&e.state){history.scrollRestoration&&(history.scrollRestoration="manual"),location.reload();return}if(e.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}history.scrollRestoration&&(history.scrollRestoration="manual");const t=history.state,r=t.index,l=r>u?"forward":"back";u=r,t.scrollY<0?scrollTo(t.scrollX,-(t.scrollY+1)):g(l,new URL(location.href),t)}),["mouseenter","touchstart","focus"].forEach(e=>{document.addEventListener(e,t=>{if(t.target instanceof HTMLAnchorElement){let r=t.target;r.origin===location.origin&&r.pathname!==location.pathname&&y()&&q(r.pathname)}},{passive:!0,capture:!0})}),addEventListener("load",A);const n=()=>{v({...history.state,scrollX,scrollY})};"onscrollend"in window?addEventListener("scrollend",n):addEventListener("scroll",x(n,300))}
