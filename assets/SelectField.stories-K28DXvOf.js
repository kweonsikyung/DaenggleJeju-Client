import{n as e,o as t}from"./chunk-BEldbCjX.js";import{s as n,u as r}from"./iframe-CYVitUf9.js";import{n as i,t as a}from"./image-CiCZpZ_M.js";var o=e((()=>{})),s,c,l,u,d,f=e((()=>{o(),s=`_5njj8n0`,c=`_5njj8n2`,l={default:`_5njj8n3`,filled:`_5njj8n4`,disabled:`_5njj8n5`},u=`_5njj8n6`,d=`_5njj8n7`}));function p({label:e,placeholder:t=`선택해주세요`,value:n,disabled:r,onClick:a,className:o,id:f}){let p=(0,h.useId)(),g=f??p,_=n!=null&&n.trim().length>0,v=!!r,y=(0,h.useMemo)(()=>{let e=v?l.disabled:_?l.filled:l.default;return[c,e,o].filter(Boolean).join(` `)},[_,v,o]);return(0,m.jsxs)(`div`,{className:s,children:[e&&(0,m.jsx)(`label`,{htmlFor:g,className:`_5njj8n1`,children:e}),(0,m.jsxs)(`button`,{id:g,type:`button`,className:y,onClick:a,disabled:v,"aria-haspopup":`listbox`,children:[(0,m.jsx)(`span`,{className:_?u:d,children:_?n:t}),(0,m.jsx)(i,{src:`/assets/icon24/chevron-down.svg`,alt:`선택`,width:24,height:24})]})]})}var m,h,g=e((()=>{m=n(),h=t(r()),f(),a(),p.__docgenInfo={description:``,methods:[],displayName:`SelectField`,props:{label:{required:!1,tsType:{name:`string`},description:`라벨 텍스트`},placeholder:{required:!1,tsType:{name:`string`},description:`placeholder`,defaultValue:{value:`"선택해주세요"`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:`선택된 값`},disabled:{required:!1,tsType:{name:`boolean`},description:`비활성화 여부`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`클릭 이벤트 핸들러`},className:{required:!1,tsType:{name:`string`},description:``},id:{required:!1,tsType:{name:`string`},description:``}}}})),_,v,y,b,x,S,C;e((()=>{_=n(),g(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Input/SelectField`,component:p,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,_.jsx)(`div`,{style:{width:500},children:(0,_.jsx)(e,{})})],argTypes:{onClick:{action:`clicked`}}},b={args:{label:`label`,placeholder:`placeholder`,onClick:v()}},x={args:{label:`label`,value:`selected value`,onClick:v()}},S={args:{label:`비활성화`,placeholder:`선택 불가`,disabled:!0}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "label",
    placeholder: "placeholder",
    onClick: fn()
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "label",
    value: "selected value",
    onClick: fn()
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "비활성화",
    placeholder: "선택 불가",
    disabled: true
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Filled`,`Disabled`]}))();export{b as Default,S as Disabled,x as Filled,C as __namedExportsOrder,y as default};