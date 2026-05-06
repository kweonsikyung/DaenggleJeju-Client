import{n as e}from"./chunk-BEldbCjX.js";import{s as t}from"./iframe-CYVitUf9.js";import{n,t as r}from"./image-CiCZpZ_M.js";var i=e((()=>{})),a,o,s,c,l=e((()=>{i(),a=`_1ywl48n0`,o=`_1ywl48n1`,s={kakao:`_1ywl48n2`,naver:`_1ywl48n3`,google:`_1ywl48n4`},c=`_1ywl48n5`}));function u({provider:e,title:t,className:r,...i}){return(0,d.jsxs)(`button`,{type:`button`,className:[a,s[e],r].filter(Boolean).join(` `),"aria-label":t,...i,children:[(0,d.jsx)(n,{src:`/assets/login/${e}.svg`,alt:``,width:24,height:24,className:o,priority:!0}),(0,d.jsx)(`span`,{className:c,children:t})]})}var d,f=e((()=>{d=t(),r(),l(),u.__docgenInfo={description:``,methods:[],displayName:`LoginButton`,props:{provider:{required:!0,tsType:{name:`LoginType`},description:``},title:{required:!0,tsType:{name:`string`},description:``}},composes:[`Omit`]}})),p,m=e((()=>{p=function(e){return e.KAKAO=`kakao`,e.NAVER=`naver`,e.GOOGLE=`google`,e}({})})),h,g,_,v,y,b;e((()=>{h=t(),f(),m(),g={title:`Button/LoginButton`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{provider:{control:`inline-radio`,options:[p.KAKAO,p.NAVER,p.GOOGLE]},onClick:{action:`clicked`}},decorators:[e=>(0,h.jsx)(`div`,{style:{width:375},children:(0,h.jsx)(e,{})})]},_={args:{provider:p.KAKAO,title:`Kakao로 시작하기`}},v={args:{provider:p.NAVER,title:`Naver로 시작하기`}},y={args:{provider:p.GOOGLE,title:`Google로 시작하기`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    provider: LOGIN_TYPE.KAKAO,
    title: "Kakao로 시작하기"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    provider: LOGIN_TYPE.NAVER,
    title: "Naver로 시작하기"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    provider: LOGIN_TYPE.GOOGLE,
    title: "Google로 시작하기"
  }
}`,...y.parameters?.docs?.source}}},b=[`Kakao`,`Naver`,`Google`]}))();export{y as Google,_ as Kakao,v as Naver,b as __namedExportsOrder,g as default};