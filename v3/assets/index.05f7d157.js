import{c as H,f as E,h as J,v as j,i as _,G as K,w as Q,p as X}from"./use-translate.789845f9.js";import{b as c,t as r,n as f,w as Y}from"./with-install.c13b505f.js";import{z as Z,D as z,C as h,x as P,e as b,j as T,v as V,I as F,q as p}from"./vue-libs.1dda7261.js";import{c as ee}from"./interceptor.4e67a670.js";import{u as te}from"./index.5b10c1d9.js";const[ne,g]=H("stepper"),ae=200,le=600,v=(t,s)=>String(t)===String(s);var ie=Z({name:ne,props:{min:c(1),max:c(1/0),name:c(""),step:c(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:r,showMinus:r,showInput:r,longPress:r,allowEmpty:Boolean,modelValue:f,inputWidth:f,buttonSize:f,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:c(1),decimalLength:f},emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(t,{emit:s}){const o=e=>{const{min:n,max:i,allowEmpty:m,decimalLength:l}=t;return m&&e===""||(e=j(String(e),!t.integer),e=e===""?0:+e,e=Number.isNaN(e)?+n:e,e=Math.max(Math.min(+i,e),+n),_(l)&&(e=e.toFixed(+l))),e},R=()=>{var i;const e=(i=t.modelValue)!=null?i:t.defaultValue,n=o(e);return v(n,t.modelValue)||s("update:modelValue",n),n};let u;const I=z(),a=z(R()),x=h(()=>t.disabled||t.disableMinus||a.value<=+t.min),y=h(()=>t.disabled||t.disablePlus||a.value>=+t.max),k=h(()=>({width:E(t.inputWidth),height:E(t.buttonSize)})),N=h(()=>J(t.buttonSize)),G=()=>{const e=o(a.value);v(e,a.value)||(a.value=e)},C=e=>{t.beforeChange?ee({args:[e],interceptor:t.beforeChange,done(){a.value=e}}):a.value=e},S=()=>{if(u==="plus"&&y.value||u==="minus"&&x.value){s("overlimit",u);return}const e=u==="minus"?-t.step:+t.step,n=o(K(+a.value,e));C(n),s(u)},q=e=>{const n=e.target,{value:i}=n,{decimalLength:m}=t;let l=j(String(i),!t.integer);if(_(m)&&l.includes(".")){const D=l.split(".");l=`${D[0]}.${D[1].slice(0,+m)}`}t.beforeChange?n.value=String(a.value):v(i,l)||(n.value=l);const U=l===String(+l);C(U?+l:l)},A=e=>{var n;t.disableInput?(n=I.value)==null||n.blur():s("focus",e)},O=e=>{const n=e.target,i=o(n.value);n.value=String(i),a.value=i,p(()=>{s("blur",e),Q()})};let w,d;const L=()=>{d=setTimeout(()=>{S(),L()},ae)},W=()=>{t.longPress&&(w=!1,clearTimeout(d),d=setTimeout(()=>{w=!0,S(),L()},le))},M=e=>{t.longPress&&(clearTimeout(d),w&&X(e))},$=e=>{t.disableInput&&e.preventDefault()},B=e=>({onClick:n=>{n.preventDefault(),u=e,S()},onTouchstart:()=>{u=e,W()},onTouchend:M,onTouchcancel:M});return P([()=>t.max,()=>t.min,()=>t.integer,()=>t.decimalLength],G),P(()=>t.modelValue,e=>{v(e,a.value)||(a.value=o(e))}),P(a,e=>{s("update:modelValue",e),s("change",e,{name:t.name})}),te(()=>t.modelValue),()=>b("div",{class:g([t.theme])},[T(b("button",F({type:"button",style:N.value,class:g("minus",{disabled:x.value})},B("minus")),null),[[V,t.showMinus]]),T(b("input",{ref:I,type:t.integer?"tel":"text",role:"spinbutton",class:g("input"),value:a.value,style:k.value,disabled:t.disabled,readonly:t.disableInput,inputmode:t.integer?"numeric":"decimal",placeholder:t.placeholder,"aria-valuemax":+t.max,"aria-valuemin":+t.min,"aria-valuenow":+a.value,onBlur:O,onInput:q,onFocus:A,onMousedown:$},null),[[V,t.showInput]]),T(b("button",F({type:"button",style:N.value,class:g("plus",{disabled:y.value})},B("plus")),null),[[V,t.showPlus]])])}});const me=Y(ie);export{me as S};
