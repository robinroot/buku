!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="464329cc-bb9f-4c90-80a8-323746a078e6",e._sentryDebugIdIdentifier="sentry-dbid-464329cc-bb9f-4c90-80a8-323746a078e6")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4818],{84818:function(e,t,n){let r;n.d(t,{d:function(){return H}});var o=n(52676),i=n(36984),a=n(75271);let l={DURATION:.5,EASE:[.32,.72,0,1]},u=a.createContext({drawerRef:{current:null},overlayRef:{current:null},scaleBackground:()=>{},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,handleOnly:!1,isOpen:!1,isDragging:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},visible:!1,closeDrawer:()=>{},setVisible:()=>{},direction:"bottom"}),c=()=>{let e=a.useContext(u);if(!e)throw Error("useDrawerContext must be used within a Drawer.Root");return e},s=new WeakMap;function d(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!(e instanceof HTMLElement))return;let r={};Object.entries(t).forEach(t=>{let[n,o]=t;if(n.startsWith("--")){e.style.setProperty(n,o);return}r[n]=e.style[n],e.style[n]=o}),n||s.set(e,r)}function f(e,t){if(!e||!(e instanceof HTMLElement))return;let n=s.get(e);n&&(t?e.style[t]=n[t]:Object.entries(n).forEach(t=>{let[n,r]=t;e.style[n]=r}))}let m=e=>{switch(e){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return e}};function g(e,t){if(!e)return null;let n=window.getComputedStyle(e),r=n.transform||n.webkitTransform||n.mozTransform,o=r.match(/^matrix3d\((.+)\)$/);return o?parseFloat(o[1].split(", ")[m(t)?13:12]):(o=r.match(/^matrix\((.+)\)$/))?parseFloat(o[1].split(", ")[m(t)?5:4]):null}function p(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a.useCallback(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.forEach(t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})}(...t),t)}let h=null,w=a.useLayoutEffect;function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];for(let e of t)"function"==typeof e&&e(...n)}}function b(){return y(/^iPhone/)||y(/^iPad/)||y(/^Mac/)&&navigator.maxTouchPoints>1}function y(e){return null!=window.navigator?e.test(window.navigator.platform):void 0}let E="undefined"!=typeof document&&window.visualViewport;function x(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function R(e){for(x(e)&&(e=e.parentElement);e&&!x(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}let D=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),T=0;function A(e,t,n){let r=e.style[t];return e.style[t]=n,()=>{e.style[t]=r}}function C(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function O(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let t=R(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let n=t.getBoundingClientRect().top,r=e.getBoundingClientRect().top;e.getBoundingClientRect().bottom>t.getBoundingClientRect().bottom&&(t.scrollTop+=r-n)}e=t.parentElement}}function M(e){return e instanceof HTMLInputElement&&!D.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function N(e){let t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>function(){for(var e,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return null===(e=t.current)||void 0===e?void 0:e.call(t,...r)},[])}let S="vaul-dragging";function P(e){var t;let{open:n,onOpenChange:c,children:s,shouldScaleBackground:p,onDrag:y,onRelease:x,snapPoints:D,nested:P=!1,setBackgroundColorOnScale:I=!0,closeThreshold:k=.25,scrollLockTimeout:j=100,dismissible:H=!0,handleOnly:L=!1,fadeFromIndex:W=D&&D.length-1,activeSnapPoint:z,setActiveSnapPoint:U,fixed:F,modal:Y=!0,onClose:B,noBodyStyles:q,direction:_="bottom",preventScrollRestoration:V=!0,disablePreventScroll:X=!1}=e,[$=!1,K]=a.useState(!1),[G,J]=a.useState(!1),[Q,Z]=a.useState(!1),[ee,et]=a.useState(!1),[en,er]=a.useState(!1),[eo,ei]=a.useState(!1),ea=a.useRef(null),el=a.useRef(null),eu=a.useRef(null),ec=a.useRef(null),es=a.useRef(null),ed=a.useRef(!1),ef=a.useRef(null),em=a.useRef(0),eg=a.useRef(!1),ep=a.useRef(0),eh=a.useRef(null),ew=a.useRef((null===(t=eh.current)||void 0===t?void 0:t.getBoundingClientRect().height)||0),ev=a.useRef(0),eb=a.useCallback(e=>{D&&e===eD.length-1&&(el.current=new Date)},[]),{activeSnapPoint:ey,activeSnapPointIndex:eE,setActiveSnapPoint:ex,onRelease:eR,snapPointsOffset:eD,onDrag:eT,shouldFade:eA,getPercentageDragged:eC}=function(e){let{activeSnapPointProp:t,setActiveSnapPointProp:n,snapPoints:r,drawerRef:o,overlayRef:i,fadeFromIndex:u,onSnapPointChange:c,direction:s="bottom"}=e,[f,g]=function(e){let{prop:t,defaultProp:n,onChange:r=()=>{}}=e,[o,i]=function(e){let{defaultProp:t,onChange:n}=e,r=a.useState(t),[o]=r,i=a.useRef(o),l=N(n);return a.useEffect(()=>{i.current!==o&&(l(o),i.current=o)},[o,i,l]),r}({defaultProp:n,onChange:r}),l=void 0!==t,u=l?t:o,c=N(r);return[u,a.useCallback(e=>{if(l){let n="function"==typeof e?e(t):e;n!==t&&c(n)}else i(e)},[l,t,i,c])]}({prop:t,defaultProp:null==r?void 0:r[0],onChange:n}),p=a.useMemo(()=>f===(null==r?void 0:r[r.length-1])||null,[r,f]),h=r&&r.length>0&&(u||0===u)&&!Number.isNaN(u)&&r[u]===f||!r,w=a.useMemo(()=>null==r?void 0:r.findIndex(e=>e===f),[r,f]),v=a.useMemo(()=>{var e;return null!==(e=null==r?void 0:r.map(e=>{let t="string"==typeof e,n=0;if(t&&(n=parseInt(e,10)),m(s)){let r=t?n:e*window.innerHeight;return"bottom"===s?window.innerHeight-r:-window.innerHeight+r}let r=t?n:e*window.innerWidth;return"right"===s?window.innerWidth-r:-window.innerWidth+r}))&&void 0!==e?e:[]},[r]),b=a.useMemo(()=>null!==w?null==v?void 0:v[w]:null,[v,w]),y=a.useCallback(e=>{var t;let n=null!==(t=null==v?void 0:v.findIndex(t=>t===e))&&void 0!==t?t:null;c(n),d(o.current,{transition:"transform ".concat(l.DURATION,"s cubic-bezier(").concat(l.EASE.join(","),")"),transform:m(s)?"translate3d(0, ".concat(e,"px, 0)"):"translate3d(".concat(e,"px, 0, 0)")}),v&&n!==v.length-1&&n!==u?d(i.current,{transition:"opacity ".concat(l.DURATION,"s cubic-bezier(").concat(l.EASE.join(","),")"),opacity:"0"}):d(i.current,{transition:"opacity ".concat(l.DURATION,"s cubic-bezier(").concat(l.EASE.join(","),")"),opacity:"1"}),g(null!==n?null==r?void 0:r[n]:null)},[o.current,r,v,u,i,g]);return a.useEffect(()=>{if(f||t){var e;let n=null!==(e=null==r?void 0:r.findIndex(e=>e===t||e===f))&&void 0!==e?e:-1;v&&-1!==n&&"number"==typeof v[n]&&y(v[n])}},[f,t,r,v,y]),{isLastSnapPoint:p,activeSnapPoint:f,shouldFade:h,getPercentageDragged:function(e,t){if(!r||"number"!=typeof w||!v||void 0===u)return null;let n=w===u-1;if(w>=u&&t)return 0;if(n&&!t)return 1;if(!h&&!n)return null;let o=n?w+1:w-1,i=e/Math.abs(n?v[o]-v[o-1]:v[o+1]-v[o]);return n?1-i:i},setActiveSnapPoint:g,activeSnapPointIndex:w,onRelease:function(e){let{draggedDistance:t,closeDrawer:n,velocity:o,dismissible:a}=e;if(void 0===u)return;let c="bottom"===s||"right"===s?(null!=b?b:0)-t:(null!=b?b:0)+t,f=w===u-1,g=0===w,h=t>0;if(f&&d(i.current,{transition:"opacity ".concat(l.DURATION,"s cubic-bezier(").concat(l.EASE.join(","),")")}),o>2&&!h){a?n():y(v[0]);return}if(o>2&&h&&v&&r){y(v[r.length-1]);return}let E=null==v?void 0:v.reduce((e,t)=>"number"!=typeof e||"number"!=typeof t?e:Math.abs(t-c)<Math.abs(e-c)?t:e),x=m(s)?window.innerHeight:window.innerWidth;if(o>.4&&Math.abs(t)<.4*x){let e=h?1:-1;if(e>0&&p){y(v[r.length-1]);return}if(g&&e<0&&a&&n(),null===w)return;y(v[w+e]);return}y(E)},onDrag:function(e){let{draggedDistance:t}=e;if(null===b)return;let n="bottom"===s||"right"===s?b-t:b+t;("bottom"===s||"right"===s)&&n<v[v.length-1]||("top"===s||"left"===s)&&n>v[v.length-1]||d(o.current,{transform:m(s)?"translate3d(0, ".concat(n,"px, 0)"):"translate3d(".concat(n,"px, 0, 0)")})},snapPointsOffset:v}}({snapPoints:D,activeSnapPointProp:z,setActiveSnapPointProp:U,drawerRef:eh,fadeFromIndex:W,overlayRef:ea,onSnapPointChange:eb,direction:_});!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{isDisabled:t}=e;w(()=>{if(!t){let e,t,n,o,i,a;return 1==++T&&(r=b()?(t=0,n=window.pageXOffset,o=window.pageYOffset,i=v(A(document.documentElement,"paddingRight","".concat(window.innerWidth-document.documentElement.clientWidth,"px"))),window.scrollTo(0,0),a=v(C(document,"touchstart",n=>{((e=R(n.target))!==document.documentElement||e!==document.body)&&(t=n.changedTouches[0].pageY)},{passive:!1,capture:!0}),C(document,"touchmove",n=>{if(!e||e===document.documentElement||e===document.body){n.preventDefault();return}let r=n.changedTouches[0].pageY,o=e.scrollTop,i=e.scrollHeight-e.clientHeight;0!==i&&((o<=0&&r>t||o>=i&&r<t)&&n.preventDefault(),t=r)},{passive:!1,capture:!0}),C(document,"touchend",e=>{let t=e.target;M(t)&&t!==document.activeElement&&(e.preventDefault(),t.style.transform="translateY(-2000px)",t.focus(),requestAnimationFrame(()=>{t.style.transform=""}))},{passive:!1,capture:!0}),C(document,"focus",e=>{let t=e.target;M(t)&&(t.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{t.style.transform="",E&&(E.height<window.innerHeight?requestAnimationFrame(()=>{O(t)}):E.addEventListener("resize",()=>O(t),{once:!0}))}))},!0),C(window,"scroll",()=>{window.scrollTo(0,0)})),()=>{i(),a(),window.scrollTo(n,o)}):v(A(document.documentElement,"paddingRight","".concat(window.innerWidth-document.documentElement.clientWidth,"px")))),()=>{0==--T&&r()}}},[t])}({isDisabled:!$||en||!Y||eo||!G||X});let{restorePositionSetting:eO}=function(e){let{isOpen:t,modal:n,nested:r,hasBeenOpened:o,preventScrollRestoration:i,noBodyStyles:l}=e,[u,c]=a.useState(()=>window.location.href),s=a.useRef(0),d=a.useCallback(()=>{if(null===h&&t&&!l){h={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height,right:"unset"};let{scrollX:e,innerHeight:t}=window;document.body.style.setProperty("position","fixed","important"),Object.assign(document.body.style,{top:"".concat(-s.current,"px"),left:"".concat(-e,"px"),right:"0px",height:"auto"}),window.setTimeout(()=>window.requestAnimationFrame(()=>{let e=t-window.innerHeight;e&&s.current>=t&&(document.body.style.top="".concat(-(s.current+e),"px"))}),300)}},[t]),f=a.useCallback(()=>{if(null!==h&&!l){let e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);Object.assign(document.body.style,h),window.requestAnimationFrame(()=>{if(i&&u!==window.location.href){c(window.location.href);return}window.scrollTo(t,e)}),h=null}},[u]);return a.useEffect(()=>{function e(){s.current=window.scrollY}return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),a.useEffect(()=>{r||!o||(t?(window.matchMedia("(display-mode: standalone)").matches||d(),n||window.setTimeout(()=>{f()},500)):f())},[t,o,u,n,r,d,f]),{restorePositionSetting:f}}({isOpen:$,modal:Y,nested:P,hasBeenOpened:G,preventScrollRestoration:V,noBodyStyles:q});function eM(){return(window.innerWidth-26)/window.innerWidth}function eN(e,t){var n;let r=e,o=null===(n=window.getSelection())||void 0===n?void 0:n.toString(),i=eh.current?g(eh.current,_):null,a=new Date;if(r.hasAttribute("data-vaul-no-drag")||r.closest("[data-vaul-no-drag]"))return!1;if("right"===_||"left"===_)return!0;if(el.current&&a.getTime()-el.current.getTime()<500)return!1;if(null!==i&&("bottom"===_?i>0:i<0))return!0;if(o&&o.length>0)return!1;if(es.current&&a.getTime()-es.current.getTime()<j&&0===i||t)return es.current=a,!1;for(;r;){if(r.scrollHeight>r.clientHeight){if(0!==r.scrollTop||r.classList.contains("vaul-scrollable")&&!t)return es.current=new Date,!1;if("dialog"===r.getAttribute("role"))break}r=r.parentNode}return!0}function eS(){eh.current&&(en&&eh.current&&(eh.current.classList.remove(S),ed.current=!1,er(!1),ec.current=new Date),null==B||B(),d(eh.current,{transform:m(_)?"translate3d(0, ".concat("bottom"===_?"100%":"-100%",", 0)"):"translate3d(".concat("right"===_?"100%":"-100%",", 0, 0)"),transition:"transform ".concat(l.DURATION,"s cubic-bezier(").concat(l.EASE.join(","),")")}),d(ea.current,{opacity:"0",transition:"opacity ".concat(l.DURATION,"s cubic-bezier(").concat(l.EASE.join(","),")")}),eI(!1),setTimeout(()=>{Z(!1),K(!1)},300),setTimeout(()=>{D&&ex(D[0])},1e3*l.DURATION))}function eP(){if(!eh.current)return;let e=document.querySelector("[vaul-drawer-wrapper]"),t=g(eh.current,_);d(eh.current,{transform:"translate3d(0, 0, 0)",transition:"transform ".concat(l.DURATION,"s cubic-bezier(").concat(l.EASE.join(","),")")}),d(ea.current,{transition:"opacity ".concat(l.DURATION,"s cubic-bezier(").concat(l.EASE.join(","),")"),opacity:"1"}),p&&t&&t>0&&$&&d(e,{borderRadius:"".concat(8,"px"),overflow:"hidden",...m(_)?{transform:"scale(".concat(eM(),") translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)"),transformOrigin:"top"}:{transform:"scale(".concat(eM(),") translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)"),transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:"".concat(l.DURATION,"s"),transitionTimingFunction:"cubic-bezier(".concat(l.EASE.join(","),")")},!0)}function eI(e){let t=document.querySelector("[vaul-drawer-wrapper]");t&&p&&(e?(I&&!q&&(d(document.body,{background:document.body.style.backgroundColor||document.body.style.background}),d(document.body,{background:"black"},!0)),d(t,{borderRadius:"".concat(8,"px"),overflow:"hidden",...m(_)?{transform:"scale(".concat(eM(),") translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)"),transformOrigin:"top"}:{transform:"scale(".concat(eM(),") translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)"),transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:"".concat(l.DURATION,"s"),transitionTimingFunction:"cubic-bezier(".concat(l.EASE.join(","),")")})):(f(t,"overflow"),f(t,"transform"),f(t,"borderRadius"),d(t,{transitionProperty:"transform, border-radius",transitionDuration:"".concat(l.DURATION,"s"),transitionTimingFunction:"cubic-bezier(".concat(l.EASE.join(","),")")})))}return a.useEffect(()=>()=>{eI(!1),eO()},[]),a.useEffect(()=>{var e;function t(){if(eh.current&&(M(document.activeElement)||eg.current)){var e;let t=(null===(e=window.visualViewport)||void 0===e?void 0:e.height)||0,n=window.innerHeight-t,r=eh.current.getBoundingClientRect().height||0;ev.current||(ev.current=r);let o=eh.current.getBoundingClientRect().top;if(Math.abs(ep.current-n)>60&&(eg.current=!eg.current),D&&D.length>0&&eD&&eE&&(n+=eD[eE]||0),ep.current=n,r>t||eg.current){let e=eh.current.getBoundingClientRect().height,r=e;e>t&&(r=t-26),F?eh.current.style.height="".concat(e-Math.max(n,0),"px"):eh.current.style.height="".concat(Math.max(r,t-o),"px")}else eh.current.style.height="auto";D&&D.length>0&&!eg.current?eh.current.style.bottom="0px":eh.current.style.bottom="".concat(Math.max(n,0),"px")}}return null===(e=window.visualViewport)||void 0===e||e.addEventListener("resize",t),()=>{var e;return null===(e=window.visualViewport)||void 0===e?void 0:e.removeEventListener("resize",t)}},[eE,D,eD]),a.useEffect(()=>{if(!eh.current)return;let e=new ResizeObserver(()=>{if(Q){var e;let t=null==eh?void 0:null===(e=eh.current)||void 0===e?void 0:e.querySelectorAll("*");null==t||t.forEach(e=>{e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth?e.classList.add("vaul-scrollable"):e.classList.remove("vaul-scrollable")})}});return e.observe(eh.current),()=>e.disconnect()},[Q]),a.useEffect(()=>{if(!$&&p){let e=setTimeout(()=>{f(document.body)},200);return()=>clearTimeout(e)}},[$,p]),a.useLayoutEffect(()=>{n?(K(!0),J(!0)):eS()},[n]),a.useEffect(()=>{ee&&(null==c||c($))},[$]),a.useEffect(()=>{et(!0)},[]),a.useEffect(()=>{$&&(d(document.documentElement,{scrollBehavior:"auto"}),el.current=new Date,eI(!0))},[$]),a.useEffect(()=>{if(eh.current&&Q){var e;let t=null==eh?void 0:null===(e=eh.current)||void 0===e?void 0:e.querySelectorAll("*");null==t||t.forEach(e=>{(e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth)&&e.classList.add("vaul-scrollable")})}},[Q]),(0,o.jsx)(i.fC,{modal:Y,onOpenChange:e=>{if(void 0!==n){null==c||c(e);return}e?(J(!0),K(e)):eS()},open:$,"data-sentry-element":"unknown","data-sentry-component":"Root","data-sentry-source-file":"index.tsx",children:(0,o.jsx)(u.Provider,{value:{visible:Q,activeSnapPoint:ey,snapPoints:D,setActiveSnapPoint:ex,drawerRef:eh,overlayRef:ea,scaleBackground:eI,onOpenChange:c,onPress:function(e){var t;(H||D)&&(!eh.current||eh.current.contains(e.target))&&(ew.current=(null===(t=eh.current)||void 0===t?void 0:t.getBoundingClientRect().height)||0,er(!0),eu.current=new Date,b()&&window.addEventListener("touchend",()=>ed.current=!1,{once:!0}),e.target.setPointerCapture(e.pointerId),em.current=m(_)?e.clientY:e.clientX)},setVisible:Z,onRelease:function(e){var t;if(!en||!eh.current)return;eh.current.classList.remove(S),ed.current=!1,er(!1),ec.current=new Date;let n=g(eh.current,_);if(!eN(e.target,!1)||!n||Number.isNaN(n)||null===eu.current)return;let r=ec.current.getTime()-eu.current.getTime(),o=em.current-(m(_)?e.clientY:e.clientX),i=Math.abs(o)/r;if(i>.05&&(ei(!0),setTimeout(()=>{ei(!1)},200)),D){eR({draggedDistance:o*("bottom"===_||"right"===_?1:-1),closeDrawer:eS,velocity:i,dismissible:H}),null==x||x(e,!0);return}if("bottom"===_||"right"===_?o>0:o<0){eP(),null==x||x(e,!0);return}if(i>.4||n>=Math.min(null!==(t=eh.current.getBoundingClientRect().height)&&void 0!==t?t:0,window.innerHeight)*k){eS(),null==x||x(e,!1);return}null==x||x(e,!0),eP()},onDrag:function(e){if(eh.current&&en){let t="bottom"===_||"right"===_?1:-1,n=(em.current-(m(_)?e.clientY:e.clientX))*t,r=n>0,o=D&&!H&&!r;if(o&&0===eE)return;let i=Math.abs(n),a=document.querySelector("[vaul-drawer-wrapper]"),l=i/ew.current,u=eC(i,r);if(null!==u&&(l=u),o&&l>=1||!ed.current&&!eN(e.target,r))return;if(eh.current.classList.add(S),ed.current=!0,d(eh.current,{transition:"none"}),d(ea.current,{transition:"none"}),D&&eT({draggedDistance:n}),r&&!D){let e=Math.min(-(8*(Math.log(n+1)-2)*1),0)*t;d(eh.current,{transform:m(_)?"translate3d(0, ".concat(e,"px, 0)"):"translate3d(".concat(e,"px, 0, 0)")});return}let c=1-l;if((eA||W&&eE===W-1)&&(null==y||y(e,l),d(ea.current,{opacity:"".concat(c),transition:"none"},!0)),a&&ea.current&&p){let e=Math.min(eM()+l*(1-eM()),1),t=8-8*l,n=Math.max(0,14-14*l);d(a,{borderRadius:"".concat(t,"px"),transform:m(_)?"scale(".concat(e,") translate3d(0, ").concat(n,"px, 0)"):"scale(".concat(e,") translate3d(").concat(n,"px, 0, 0)"),transition:"none"},!0)}if(!D){let e=i*t;d(eh.current,{transform:m(_)?"translate3d(0, ".concat(e,"px, 0)"):"translate3d(".concat(e,"px, 0, 0)")})}}},dismissible:H,handleOnly:L,isOpen:$,isDragging:en,shouldFade:eA,closeDrawer:eS,onNestedDrag:function(e,t){if(t<0)return;let n=m(_)?window.innerHeight:window.innerWidth,r=(n-16)/n,o=r+t*(1-r),i=-16+16*t;d(eh.current,{transform:m(_)?"scale(".concat(o,") translate3d(0, ").concat(i,"px, 0)"):"scale(".concat(o,") translate3d(").concat(i,"px, 0, 0)"),transition:"none"})},onNestedOpenChange:function(e){let t=e?(window.innerWidth-16)/window.innerWidth:1;ef.current&&window.clearTimeout(ef.current),d(eh.current,{transition:"transform ".concat(l.DURATION,"s cubic-bezier(").concat(l.EASE.join(","),")"),transform:"scale(".concat(t,") translate3d(0, ").concat(e?-16:0,"px, 0)")}),!e&&eh.current&&(ef.current=setTimeout(()=>{let e=g(eh.current,_);d(eh.current,{transition:"none",transform:m(_)?"translate3d(0, ".concat(e,"px, 0)"):"translate3d(".concat(e,"px, 0, 0)")})},500))},onNestedRelease:function(e,t){let n=m(_)?window.innerHeight:window.innerWidth,r=t?(n-16)/n:1,o=t?-16:0;t&&d(eh.current,{transition:"transform ".concat(l.DURATION,"s cubic-bezier(").concat(l.EASE.join(","),")"),transform:m(_)?"scale(".concat(r,") translate3d(0, ").concat(o,"px, 0)"):"scale(".concat(r,") translate3d(").concat(o,"px, 0, 0)")})},keyboardIsOpen:eg,openProp:n,modal:Y,snapPointsOffset:eD,direction:_},"data-sentry-element":"unknown","data-sentry-source-file":"index.tsx",children:s})})}let I=a.forwardRef(function(e,t){let{preventCycle:n=!1,children:r,...i}=e,{visible:l,closeDrawer:u,isDragging:s,snapPoints:d,activeSnapPoint:f,setActiveSnapPoint:m,dismissible:g,handleOnly:p,onPress:h,onDrag:w}=c(),v=a.useRef(null),b=a.useRef(!1);function y(){window.clearTimeout(v.current),b.current=!1}return(0,o.jsx)("div",{onClick:function(){if(b.current){y();return}window.setTimeout(()=>{!function(){if(s||n||b.current){y();return}if(y(),(!d||0===d.length)&&g||f===d[d.length-1]&&g){u();return}let e=d.findIndex(e=>e===f);-1!==e&&m(d[e+1])}()},120)},onDoubleClick:()=>{b.current=!0,u()},onPointerCancel:y,onPointerDown:e=>{p&&h(e),v.current=window.setTimeout(()=>{b.current=!0},250)},onPointerMove:e=>{p&&w(e)},ref:t,"vaul-drawer-visible":l?"true":"false","vaul-handle":"","aria-hidden":"true",...i,children:(0,o.jsx)("span",{"vaul-handle-hitarea":"","aria-hidden":"true",children:r})})});I.displayName="Drawer.Handle";let k=a.forwardRef(function(e,t){let{children:n,...r}=e,{overlayRef:a,snapPoints:l,onRelease:u,shouldFade:s,isOpen:d,visible:f}=c(),m=p(t,a),g=l&&l.length>0;return(0,o.jsx)(i.aV,{onMouseUp:u,ref:m,"vaul-drawer-visible":f?"true":"false","vaul-overlay":"","vaul-snap-points":d&&g?"true":"false","vaul-snap-points-overlay":d&&s?"true":"false",...r})});k.displayName="Drawer.Overlay";let j=a.forwardRef(function(e,t){let{onOpenAutoFocus:n,onPointerDownOutside:r,onAnimationEnd:l,style:u,...s}=e,{drawerRef:d,onPress:f,onRelease:m,onDrag:g,dismissible:h,keyboardIsOpen:w,snapPointsOffset:v,visible:b,closeDrawer:y,modal:E,openProp:x,onOpenChange:R,setVisible:D,handleOnly:T,direction:A}=c(),C=p(t,d),O=a.useRef(null),M=a.useRef(!1),N=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(M.current)return!0;let r=Math.abs(e.y),o=Math.abs(e.x),i=o>r,a=["bottom","right"].includes(t)?1:-1;if("left"===t||"right"===t){if(!(e.x*a<0)&&o>=0&&o<=n)return i}else if(!(e.y*a<0)&&r>=0&&r<=n)return!i;return M.current=!0,!0};return a.useEffect(()=>{D(!0)},[]),(0,o.jsx)(i.VY,{"vaul-drawer":"","vaul-drawer-direction":A,"vaul-drawer-visible":b?"true":"false",...s,ref:C,style:v&&v.length>0?{"--snap-point-height":"".concat(v[0],"px"),...u}:u,onOpenAutoFocus:e=>{if(n)n(e);else{var t;e.preventDefault(),null===(t=d.current)||void 0===t||t.focus()}},onPointerDown:e=>{var t;T||(null===(t=s.onPointerDown)||void 0===t||t.call(s,e),O.current={x:e.clientX,y:e.clientY},f(e))},onPointerDownOutside:e=>{if(null==r||r(e),!E||e.defaultPrevented){e.preventDefault();return}w.current&&(w.current=!1),e.preventDefault(),null==R||R(!1),h&&void 0===x&&y()},onFocusOutside:e=>{if(!E){e.preventDefault();return}},onEscapeKeyDown:e=>{if(!E){e.preventDefault();return}},onPointerMove:e=>{var t;if(T||(null===(t=s.onPointerMove)||void 0===t||t.call(s,e),!O.current))return;let n=e.clientY-O.current.y,r=e.clientX-O.current.x,o="touch"===e.pointerType?10:2;N({x:r,y:n},A,o)?g(e):(Math.abs(r)>o||Math.abs(n)>o)&&(O.current=null)},onPointerUp:e=>{var t;null===(t=s.onPointerUp)||void 0===t||t.call(s,e),O.current=null,M.current=!1,m(e)}})});j.displayName="Drawer.Content";let H={Root:P,NestedRoot:function(e){let{onDrag:t,onOpenChange:n,...r}=e,{onNestedDrag:i,onNestedOpenChange:a,onNestedRelease:l}=c();if(!i)throw Error("Drawer.NestedRoot must be placed in another drawer");return(0,o.jsx)(P,{nested:!0,onClose:()=>{a(!1)},onDrag:(e,n)=>{i(e,n),null==t||t(e,n)},onOpenChange:e=>{e&&a(e),null==n||n(e)},onRelease:l,...r,"data-sentry-element":"Root","data-sentry-component":"NestedRoot","data-sentry-source-file":"index.tsx"})},Content:j,Handle:I,Overlay:k,Trigger:i.xz,Portal:i.h_,Close:i.x8,Title:i.Dx,Description:i.dk}}}]);