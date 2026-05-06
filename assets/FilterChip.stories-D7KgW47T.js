import{n as e}from"./chunk-BEldbCjX.js";import{s as t}from"./iframe-BF0Tcrf2.js";import{n,t as r}from"./image-rzlooT8t.js";var i=e((()=>{})),a,o,s,c=e((()=>{i(),a={selected:`_119cfh11 _119cfh10`,default:`_119cfh12 _119cfh10`},o={selected:`_119cfh13`,default:`_119cfh14`},s={selected:`_119cfh15`,default:`_119cfh16`}}));function l({text:e,iconUrl:t,selected:r=!1,onClick:i}){return(0,u.jsxs)(`button`,{className:a[r?`selected`:`default`],onClick:i,role:`button`,children:[t&&(0,u.jsx)(`div`,{className:s[r?`selected`:`default`],children:(0,u.jsx)(n,{src:t,alt:``,width:16,height:16})}),(0,u.jsx)(`span`,{className:o[r?`selected`:`default`],children:e})]})}var u,d=e((()=>{u=t(),r(),c(),l.__docgenInfo={description:``,methods:[],displayName:`FilterChip`,props:{text:{required:!0,tsType:{name:`string`},description:`칩에 표시될 텍스트`},iconUrl:{required:!1,tsType:{name:`string`},description:`아이콘 URL`},selected:{required:!1,tsType:{name:`boolean`},description:`선택 상태`,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`클릭 이벤트 핸들러`}}}})),f,p,m,h,g,_;e((()=>{d(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Chip/FilterChip`,component:l,parameters:{layout:`centered`},args:{text:`댕글`,onClick:f()},tags:[`autodocs`],argTypes:{selected:{control:`boolean`}}},m={args:{selected:!1,iconUrl:`/assets/icon12/play_filled.svg`}},h={args:{selected:!0,iconUrl:`/assets/icon12/play_filled.svg`}},g={args:{text:`숙소`,selected:!1,iconUrl:void 0}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    iconUrl: "/assets/icon12/play_filled.svg"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    iconUrl: "/assets/icon12/play_filled.svg"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: "숙소",
    selected: false,
    iconUrl: undefined
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Selected`,`TextOnly`]}))();export{m as Default,h as Selected,g as TextOnly,_ as __namedExportsOrder,p as default};