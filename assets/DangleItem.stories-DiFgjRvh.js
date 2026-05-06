import{n as e}from"./chunk-BEldbCjX.js";import{s as t}from"./iframe-C27z3qJ4.js";import{n,t as r}from"./image-w6t0hgxD.js";var i=e((()=>{})),a,o,s,c,l=e((()=>{i(),a=`_1fccsmo0`,o={after:`_1fccsmo2 _1fccsmo1`,before:`_1fccsmo3 _1fccsmo1`},s=`_1fccsmo4`,c=`_1fccsmo5`}));function u({state:e,imageUrl:t,text:r,onClick:i}){return(0,d.jsxs)(`button`,{type:`button`,className:a,onClick:i,"aria-label":`${r} 아이템`,children:[(0,d.jsx)(`div`,{className:o[e],children:(0,d.jsx)(n,{src:t,alt:r,width:70,height:70,className:s})}),(0,d.jsx)(`span`,{className:c,children:r})]})}var d,f=e((()=>{d=t(),r(),l(),u.__docgenInfo={description:``,methods:[],displayName:`DangleItem`,props:{state:{required:!0,tsType:{name:`union`,raw:`"before" | "after"`,elements:[{name:`literal`,value:`"before"`},{name:`literal`,value:`"after"`}]},description:`아이템의 상태: 'before' 또는 'after'`},imageUrl:{required:!0,tsType:{name:`string`},description:`아이템에 표시될 이미지 URL`},text:{required:!0,tsType:{name:`string`},description:`아이템 하단에 표시될 텍스트`},onClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`클릭 이벤트 핸들러`}}}})),p,m,h,g,_;e((()=>{f(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Dangle/DangleItem`,component:u,parameters:{layout:`centered`},args:{onClick:p()},argTypes:{state:{control:`radio`,options:[`before`,`after`]},imageUrl:{control:`text`},text:{control:`text`}},tags:[`autodocs`]},h={args:{state:`after`,imageUrl:`/assets/dangle/beach.png`,text:`애월·한림`}},g={args:{state:`before`,imageUrl:`/assets/dangle/beach.png`,text:`애월·한림`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: "after",
    imageUrl: "/assets/dangle/beach.png",
    text: "애월·한림"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: "before",
    imageUrl: "/assets/dangle/beach.png",
    text: "애월·한림"
  }
}`,...g.parameters?.docs?.source}}},_=[`After`,`Before`]}))();export{h as After,g as Before,_ as __namedExportsOrder,m as default};