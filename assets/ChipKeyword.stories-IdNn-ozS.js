import{n as e}from"./chunk-BEldbCjX.js";import{s as t}from"./iframe-BF0Tcrf2.js";import{n,t as r}from"./image-rzlooT8t.js";var i=e((()=>{})),a=e((()=>{})),o=e((()=>{})),s,c=e((()=>{i(),a(),o(),s={selected:`j94ivh1 j94ivh0`,default:`j94ivh2 j94ivh0`}}));function l({text:e,selected:t=!1,onClose:r,onClick:i}){return(0,u.jsxs)(`div`,{className:s[t?`selected`:`default`],onClick:i,role:`button`,children:[(0,u.jsx)(`span`,{children:e}),t&&(0,u.jsx)(`button`,{className:`j94ivh3`,onClick:r,"aria-label":`닫기`,children:(0,u.jsx)(n,{src:`/assets/icon16/x_line.svg`,alt:`닫기`,width:16,height:16})})]})}var u,d=e((()=>{u=t(),r(),c(),l.__docgenInfo={description:``,methods:[],displayName:`ChipKeyword`,props:{text:{required:!0,tsType:{name:`string`},description:`칩에 표시될 텍스트`},selected:{required:!1,tsType:{name:`boolean`},description:`선택 상태`,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`닫기 아이콘 클릭 이벤트 핸들러`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`칩 전체 클릭 이벤트 핸들러`}}}})),f,p,m,h,g,_;e((()=>{f=t(),d(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Chip/ChipKeyword`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:p()},argTypes:{selected:{control:`boolean`},onClose:{action:`close`}},decorators:[e=>(0,f.jsx)(`div`,{style:{padding:`20px`},children:(0,f.jsx)(e,{})})]},h={args:{text:`숙박`,selected:!1,onClose:void 0}},g={args:{text:`숙박`,selected:!0,onClose:p()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    text: "숙박",
    selected: false,
    onClose: undefined
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: "숙박",
    selected: true,
    onClose: fn()
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithCloseButton`]}))();export{h as Default,g as WithCloseButton,_ as __namedExportsOrder,m as default};