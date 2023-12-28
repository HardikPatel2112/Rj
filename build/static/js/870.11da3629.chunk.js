"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[870],{8119:(e,t,r)=>{r.d(t,{Z:()=>b});var o=r(3366),n=r(7462),a=r(7313),i=r(2197),l=r(1921),s=r(7592),c=r(7342),d=r(1171),v=r(6417);const u=(0,d.Z)((0,v.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var h=r(7430),m=r(2298);function p(e){return(0,m.Z)("MuiAvatar",e)}(0,h.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],f=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,n.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),k=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),w=(0,s.ZP)(u,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const b=a.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:s,children:d,className:u,component:h="div",imgProps:m,sizes:b,src:y,srcSet:x,variant:E="circular"}=r,z=(0,o.Z)(r,g);let M=null;const Z=function(e){let{crossOrigin:t,referrerPolicy:r,src:o,srcSet:n}=e;const[i,l]=a.useState(!1);return a.useEffect((()=>{if(!o&&!n)return;l(!1);let e=!0;const a=new Image;return a.onload=()=>{e&&l("loaded")},a.onerror=()=>{e&&l("error")},a.crossOrigin=t,a.referrerPolicy=r,a.src=o,n&&(a.srcset=n),()=>{e=!1}}),[t,r,o,n]),i}((0,n.Z)({},m,{src:y,srcSet:x})),C=y||x,L=C&&"error"!==Z,j=(0,n.Z)({},r,{colorDefault:!L,component:h,variant:E}),O=(e=>{const{classes:t,variant:r,colorDefault:o}=e,n={root:["root",r,o&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(n,p,t)})(j);return M=L?(0,v.jsx)(k,(0,n.Z)({alt:s,srcSet:x,src:y,sizes:b,ownerState:j,className:O.img},m)):null!=d?d:C&&s?s[0]:(0,v.jsx)(w,{ownerState:j,className:O.fallback}),(0,v.jsx)(f,(0,n.Z)({as:h,ownerState:j,className:(0,i.Z)(O.root,u),ref:t},z,{children:M}))}))},7363:(e,t,r)=>{r.d(t,{Z:()=>i,f:()=>a});var o=r(7430),n=r(2298);function a(e){return(0,n.Z)("MuiListItemIcon",e)}const i=(0,o.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},1081:(e,t,r)=>{r.d(t,{L:()=>a,Z:()=>i});var o=r(7430),n=r(2298);function a(e){return(0,n.Z)("MuiListItemText",e)}const i=(0,o.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},3319:(e,t,r)=>{r.d(t,{Z:()=>M});var o=r(3366),n=r(7462),a=r(7313),i=r(2197),l=r(1921),s=r(7551),c=r(7592),d=r(7342),v=r(1195),u=r(3021),h=r(4993),m=r(6983),p=r(7430);const g=(0,p.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var f=r(7363),k=r(1081),w=r(2298);function b(e){return(0,w.Z)("MuiMenuItem",e)}const y=(0,p.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var x=r(6417);const E=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],z=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(y.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(y.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(y.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},["&.".concat(y.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(y.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["& + .".concat(g.root)]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},["& + .".concat(g.inset)]:{marginLeft:52},["& .".concat(k.Z.root)]:{marginTop:0,marginBottom:0},["& .".concat(k.Z.inset)]:{paddingLeft:36},["& .".concat(f.Z.root)]:{minWidth:36}},!r.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},r.dense&&(0,n.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{["& .".concat(f.Z.root," svg")]:{fontSize:"1.25rem"}}))})),M=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:c="li",dense:u=!1,divider:p=!1,disableGutters:g=!1,focusVisibleClassName:f,role:k="menuitem",tabIndex:w,className:y}=r,M=(0,o.Z)(r,E),Z=a.useContext(v.Z),C=a.useMemo((()=>({dense:u||Z.dense||!1,disableGutters:g})),[Z.dense,u,g]),L=a.useRef(null);(0,h.Z)((()=>{s&&L.current&&L.current.focus()}),[s]);const j=(0,n.Z)({},r,{dense:C.dense,divider:p,disableGutters:g}),O=(e=>{const{disabled:t,dense:r,divider:o,disableGutters:a,selected:i,classes:s}=e,c={root:["root",r&&"dense",t&&"disabled",!a&&"gutters",o&&"divider",i&&"selected"]},d=(0,l.Z)(c,b,s);return(0,n.Z)({},s,d)})(r),N=(0,m.Z)(L,t);let S;return r.disabled||(S=void 0!==w?w:-1),(0,x.jsx)(v.Z.Provider,{value:C,children:(0,x.jsx)(z,(0,n.Z)({ref:N,role:k,tabIndex:S,component:c,focusVisibleClassName:(0,i.Z)(O.focusVisible,f),className:(0,i.Z)(O.root,y)},M,{ownerState:j,classes:O}))})}))},1834:(e,t,r)=>{r.d(t,{HiG:()=>l,IWo:()=>f,N7y:()=>E,SyR:()=>c,d2n:()=>h,dcc:()=>C,f7T:()=>N,haR:()=>M,irF:()=>v,o7N:()=>w,ruR:()=>j,v$_:()=>y,vUr:()=>p});var o=r(7313);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=["size","color","stroke"];function l(e){var t=e.size,r=void 0===t?24:t,l=e.color,s=void 0===l?"currentColor":l,c=e.stroke,d=void 0===c?2:c,v=a(e,i);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-arrow-down-right",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:d,stroke:s,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},v),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("line",{x1:7,y1:7,x2:17,y2:17}),o.createElement("polyline",{points:"17 8 17 17 8 17"}))}var s=["size","color","stroke"];function c(e){var t=e.size,r=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,c=e.stroke,d=void 0===c?2:c,v=a(e,s);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-arrow-up-left",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:d,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},v),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("line",{x1:7,y1:7,x2:17,y2:17}),o.createElement("polyline",{points:"16 7 7 7 7 16"}))}var d=["size","color","stroke"];function v(e){var t=e.size,r=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,s=e.stroke,c=void 0===s?2:s,v=a(e,d);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-basket",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:c,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},v),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("polyline",{points:"7 10 12 4 17 10"}),o.createElement("path",{d:"M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"}),o.createElement("circle",{cx:12,cy:15,r:2}))}var u=["size","color","stroke"];function h(e){var t=e.size,r=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,s=e.stroke,c=void 0===s?2:s,d=a(e,u);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-bell-ringing",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:c,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"}),o.createElement("path",{d:"M9 17v1a3 3 0 0 0 6 0v-1"}),o.createElement("path",{d:"M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"}),o.createElement("path",{d:"M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"}))}var m=["size","color","stroke"];function p(e){var t=e.size,r=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,s=e.stroke,c=void 0===s?2:s,d=a(e,m);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-copy",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:c,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("rect",{x:8,y:8,width:12,height:12,rx:2}),o.createElement("path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"}))}var g=["size","color","stroke"];function f(e){var t=e.size,r=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,s=e.stroke,c=void 0===s?2:s,d=a(e,g);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-currency-dollar",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:c,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"}),o.createElement("path",{d:"M12 3v3m0 12v3"}))}var k=["size","color","stroke"];function w(e){var t=e.size,r=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,s=e.stroke,c=void 0===s?2:s,d=a(e,k);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-layout-dashboard",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:c,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M4 4h6v8h-6z"}),o.createElement("path",{d:"M4 16h6v4h-6z"}),o.createElement("path",{d:"M14 12h6v8h-6z"}),o.createElement("path",{d:"M14 4h6v4h-6z"}))}var b=["size","color","stroke"];function y(e){var t=e.size,r=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,s=e.stroke,c=void 0===s?2:s,d=a(e,b);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-list-check",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:c,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M3.5 5.5l1.5 1.5l2.5 -2.5"}),o.createElement("path",{d:"M3.5 11.5l1.5 1.5l2.5 -2.5"}),o.createElement("path",{d:"M3.5 17.5l1.5 1.5l2.5 -2.5"}),o.createElement("line",{x1:11,y1:6,x2:20,y2:6}),o.createElement("line",{x1:11,y1:12,x2:20,y2:12}),o.createElement("line",{x1:11,y1:18,x2:20,y2:18}))}var x=["size","color","stroke"];function E(e){var t=e.size,r=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,s=e.stroke,c=void 0===s?2:s,d=a(e,x);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-login",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:c,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),o.createElement("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"}))}var z=["size","color","stroke"];function M(e){var t=e.size,r=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,s=e.stroke,c=void 0===s?2:s,d=a(e,z);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-mail",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:c,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("rect",{x:3,y:5,width:18,height:14,rx:2}),o.createElement("polyline",{points:"3 7 12 13 21 7"}))}var Z=["size","color","stroke"];function C(e){var t=e.size,r=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,s=e.stroke,c=void 0===s?2:s,d=a(e,Z);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-menu",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:c,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("line",{x1:4,y1:8,x2:20,y2:8}),o.createElement("line",{x1:4,y1:16,x2:20,y2:16}))}var L=["size","color","stroke"];function j(e){var t=e.size,r=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,s=e.stroke,c=void 0===s?2:s,d=a(e,L);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-typography",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:c,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("line",{x1:4,y1:20,x2:7,y2:20}),o.createElement("line",{x1:14,y1:20,x2:21,y2:20}),o.createElement("line",{x1:6.9,y1:15,x2:13.8,y2:15}),o.createElement("line",{x1:10.2,y1:6.3,x2:16,y2:20}),o.createElement("polyline",{points:"5 20 11 4 13 4 20 20"}))}var O=["size","color","stroke"];function N(e){var t=e.size,r=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,s=e.stroke,c=void 0===s?2:s,d=a(e,O);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-user",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:c,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("circle",{cx:12,cy:7,r:4}),o.createElement("path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}))}}}]);