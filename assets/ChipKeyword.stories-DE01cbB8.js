import{n as e}from"./chunk-BEldbCjX.js";import{s as t}from"./iframe-YFLyBTY8.js";import{n,t as r}from"./image-C_NpUFEF.js";var i=e((()=>{})),a,o=e((()=>{i(),a={selected:`j94ivh1 j94ivh0`,default:`j94ivh2 j94ivh0`}}));function s({text:e,selected:t=!1,onClose:r,onClick:i}){return(0,c.jsxs)(`div`,{className:a[t?`selected`:`default`],onClick:i,role:`button`,children:[(0,c.jsx)(`span`,{children:e}),t&&(0,c.jsx)(`button`,{className:`j94ivh3`,onClick:r,"aria-label":`닫기`,children:(0,c.jsx)(n,{src:`/assets/icon16/x_line.svg`,alt:`닫기`,width:16,height:16})})]})}var c,l=e((()=>{c=t(),r(),o(),s.__docgenInfo={description:``,methods:[],displayName:`ChipKeyword`,props:{text:{required:!0,tsType:{name:`string`},description:`칩에 표시될 텍스트`},selected:{required:!1,tsType:{name:`boolean`},description:`선택 상태`,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`닫기 아이콘 클릭 이벤트 핸들러`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`칩 전체 클릭 이벤트 핸들러`}}}})),u,d,f,p,m,h;e((()=>{u=t(),l(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Chip/ChipKeyword`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:d()},argTypes:{selected:{control:`boolean`},onClose:{action:`close`}},decorators:[e=>(0,u.jsx)(`div`,{style:{padding:`20px`},children:(0,u.jsx)(e,{})})]},p={args:{text:`숙박`,selected:!1,onClose:void 0}},m={args:{text:`숙박`,selected:!0,onClose:d()}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: "숙박",
    selected: false,
    onClose: undefined
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: "숙박",
    selected: true,
    onClose: fn()
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithCloseButton`]}))();export{p as Default,m as WithCloseButton,h as __namedExportsOrder,f as default};