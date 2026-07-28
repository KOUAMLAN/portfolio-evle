import{c as b,r as n,M as P,j as e,u as N,b as V,d as A,e as T,L as q,m as z,X as B}from"./index-BrVhtfCl.js";const D=b("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);const $=b("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);const J=b("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);const O=b("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);const H=b("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);class U extends n.Component{getSnapshotBeforeUpdate(t){const s=this.props.childRef.current;if(s&&t.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=s.offsetHeight||0,i.width=s.offsetWidth||0,i.top=s.offsetTop,i.left=s.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function F({children:r,isPresent:t}){const s=n.useId(),i=n.useRef(null),p=n.useRef({width:0,height:0,top:0,left:0}),{nonce:h}=n.useContext(P);return n.useInsertionEffect(()=>{const{width:u,height:a,top:x,left:o}=p.current;if(t||!i.current||!u||!a)return;i.current.dataset.motionPopId=s;const c=document.createElement("style");return h&&(c.nonce=h),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${a}px !important;
            top: ${x}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),e.jsx(U,{isPresent:t,childRef:i,sizeRef:p,children:n.cloneElement(r,{ref:i})})}const G=({children:r,initial:t,isPresent:s,onExitComplete:i,custom:p,presenceAffectsLayout:h,mode:u})=>{const a=N(K),x=n.useId(),o=n.useCallback(m=>{a.set(m,!0);for(const l of a.values())if(!l)return;i&&i()},[a,i]),c=n.useMemo(()=>({id:x,initial:t,isPresent:s,custom:p,onExitComplete:o,register:m=>(a.set(m,!1),()=>a.delete(m))}),h?[Math.random(),o]:[s,o]);return n.useMemo(()=>{a.forEach((m,l)=>a.set(l,!1))},[s]),n.useEffect(()=>{!s&&!a.size&&i&&i()},[s]),u==="popLayout"&&(r=e.jsx(F,{isPresent:s,children:r})),e.jsx(V.Provider,{value:c,children:r})};function K(){return new Map}const C=r=>r.key||"";function I(r){const t=[];return n.Children.forEach(r,s=>{n.isValidElement(s)&&t.push(s)}),t}const Z=({children:r,custom:t,initial:s=!0,onExitComplete:i,presenceAffectsLayout:p=!0,mode:h="sync",propagate:u=!1})=>{const[a,x]=A(u),o=n.useMemo(()=>I(r),[r]),c=u&&!a?[]:o.map(C),m=n.useRef(!0),l=n.useRef(o),v=N(()=>new Map),[k,j]=n.useState(o),[f,w]=n.useState(o);T(()=>{m.current=!1,l.current=o;for(let y=0;y<f.length;y++){const d=C(f[y]);c.includes(d)?v.delete(d):v.get(d)!==!0&&v.set(d,!1)}},[f,c.length,c.join("-")]);const M=[];if(o!==k){let y=[...o];for(let d=0;d<f.length;d++){const g=f[d],S=C(g);c.includes(S)||(y.splice(d,0,g),M.push(g))}h==="wait"&&M.length&&(y=M),w(I(y)),j(o);return}const{forceRender:E}=n.useContext(q);return e.jsx(e.Fragment,{children:f.map(y=>{const d=C(y),g=u&&!a?!1:o===f||c.includes(d),S=()=>{if(v.has(d))v.set(d,!0);else return;let R=!0;v.forEach(L=>{L||(R=!1)}),R&&(E?.(),w(l.current),u&&x?.(),i&&i())};return e.jsx(G,{isPresent:g,initial:!m.current||s?void 0:!1,custom:g?void 0:t,presenceAffectsLayout:p,mode:h,onExitComplete:g?void 0:S,children:y},d)})})},Q=async r=>{try{const t=await fetch("/api/gemini",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:r})});if(!t.ok)throw new Error("Erreur serveur Gemini");return(await t.json()).answer}catch(t){return console.error("Gemini error:",t),W(r)}},W=r=>{const t=r.toLowerCase();return t.includes("bonjour")||t.includes("salut")?"Bonjour 👋 Je suis l'assistant IA d'Evle. Je peux vous renseigner sur ses compétences, projets et services.":t.includes("compétence")||t.includes("technologie")?"Evle travaille avec React, TypeScript, JavaScript, Node.js, Express, MongoDB, PostgreSQL et Tailwind CSS.":t.includes("projet")?"Vous pouvez découvrir les projets React, applications web et dashboards présentés dans la section portfolio.":t.includes("contact")||t.includes("email")?"Vous pouvez contacter Evle via la section Contact du portfolio.":"Je peux vous aider concernant les projets, les compétences, l'expérience ou les services proposés par Evle."},_=()=>{const[r,t]=n.useState(!1),[s,i]=n.useState([{id:"1",role:"assistant",text:"Bonjour 👋 Je suis l'assistant IA d'Evle. Posez-moi vos questions sur mes projets, compétences ou services."}]),[p,h]=n.useState(""),[u,a]=n.useState(!1),x=n.useRef(null),o=n.useRef(null),c=n.useCallback(()=>{x.current?.scrollIntoView({behavior:"smooth"})},[]);n.useEffect(()=>{c()},[s,c]),n.useEffect(()=>{r&&setTimeout(()=>{o.current?.focus()},100)},[r]);const m=async l=>{if(l?.preventDefault(),!p.trim()||u)return;const v=p.trim(),k={id:Date.now().toString(),role:"user",text:v};i(j=>[...j,k]),h(""),a(!0);try{const j=await Q(v),f={id:(Date.now()+1).toString(),role:"assistant",text:j};i(w=>[...w,f])}catch{i(f=>[...f,{id:(Date.now()+2).toString(),role:"assistant",text:"Une erreur est survenue. Merci de réessayer."}])}finally{a(!1)}};return e.jsxs(e.Fragment,{children:[!r&&e.jsx(z.button,{type:"button",onClick:()=>t(!0),"aria-label":"Ouvrir l'assistant IA",className:`
fixed
bottom-4
right-4
sm:bottom-6
sm:right-6
z-40
w-14
h-14
rounded-full
bg-blue-600
text-white
shadow-2xl
flex
items-center
justify-center
`,whileHover:{scale:1.1},whileTap:{scale:.95},children:e.jsx($,{size:25})}),e.jsx(Z,{children:r&&e.jsxs(e.Fragment,{children:[e.jsx(z.div,{className:`
fixed
inset-0
bg-black/40
z-40
`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>t(!1)}),e.jsx(z.div,{className:`
fixed
z-50
left-3
right-3
bottom-3
sm:left-auto
sm:right-6
sm:w-96
`,initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:30},children:e.jsxs("div",{className:`
bg-white
rounded-3xl
shadow-2xl
border
flex
flex-col
max-h-[80vh]
overflow-hidden
`,children:[e.jsxs("div",{className:`
bg-blue-700
text-white
px-4
py-3
flex
items-center
justify-between
`,children:[e.jsxs("div",{className:`
flex
items-center
gap-2
`,children:[e.jsx(O,{size:18}),e.jsx("span",{className:"font-semibold",children:"Assistant IA Evle"})]}),e.jsx("button",{type:"button",onClick:()=>t(!1),"aria-label":"Fermer l'assistant IA",className:`
p-2
rounded-full
hover:bg-white/20
`,children:e.jsx(B,{size:18})})]}),e.jsxs("div",{className:`
flex-1
overflow-y-auto
p-4
space-y-3
`,children:[s.map(l=>e.jsx("div",{className:`flex ${l.role==="user"?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`

max-w-[85%]

rounded-2xl

px-3

py-2

text-sm

${l.role==="user"?"bg-blue-600 text-white":"bg-gray-100 text-gray-900"}

`,children:[e.jsxs("div",{className:`
flex
gap-1
items-center
text-xs
opacity-70
mb-1
`,children:[l.role==="user"?e.jsx(H,{size:12}):e.jsx(D,{size:12}),e.jsx("span",{children:l.role==="user"?"Vous":"IA"})]}),e.jsx("p",{children:l.text})]})},l.id)),u&&e.jsx("div",{className:"text-sm text-gray-500",children:"L'assistant écrit..."}),e.jsx("div",{ref:x})]}),e.jsxs("form",{onSubmit:m,className:`
border-t
p-3
flex
gap-2
`,children:[e.jsx("input",{ref:o,value:p,onChange:l=>h(l.target.value),disabled:u,placeholder:"Votre question...","aria-label":"Votre question à l'assistant IA",className:`
flex-1
border
rounded-xl
px-3
py-2
focus:outline-none
focus:ring-2
focus:ring-blue-400
`}),e.jsx("button",{type:"submit",disabled:!p.trim()||u,"aria-label":"Envoyer",className:`
bg-blue-700
text-white
rounded-xl
w-10
flex
items-center
justify-center
disabled:opacity-50
`,children:e.jsx(J,{size:18})})]})]})})]})})]})};export{_ as default};
