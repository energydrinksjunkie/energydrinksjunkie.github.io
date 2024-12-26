import{r,j as l}from"./index-BrBwf_4Q.js";const m=()=>{const[i,a]=r.useState(["Welcome to the terminal!"]),[o,s]=r.useState("C:> "),c=r.useRef(null),u=e=>{s(e.target.value)},h=e=>{if(e.key==="Enter"){e.preventDefault();const n=o.trim().split(" ")[1].toLowerCase();switch(n){case"help":a(t=>[...t,o,`Available commands:
- help: Show this help message
- hello: Greet the user
- ktkrvc: Greet the Kiti
- clear: Clear the terminal`]);break;case"hello":a(t=>[...t,o,"Hello, User!"]);break;case"ktkrvc":a(t=>[...t,o,"Hello, Kiti!"]);break;case"clear":a([""]);break;default:a(t=>[...t,o,`Command not found: ${n}
- Type 'help' for a list of available commands`])}s("C:> ")}},p=()=>{var e;(e=c.current)==null||e.focus()};return l.jsxs("div",{style:{overflow:"auto",backgroundColor:"black",color:"white",padding:"10px",fontFamily:"monospace",width:"640px",height:"480px",cursor:"text"},onClick:p,children:[l.jsx("div",{style:{whiteSpace:"pre-wrap"},children:i.map((e,n)=>l.jsx("div",{children:e},n))}),l.jsx("input",{ref:c,type:"text",value:o,onChange:u,onKeyDown:h,style:{backgroundColor:"black",color:"white",border:"none",width:"100%",outline:"none"},autoFocus:!0})]})};export{m as default};
