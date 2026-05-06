import{n as e}from"./chunk-BEldbCjX.js";import{s as t}from"./iframe-EV8NEmu5.js";import{n,t as r}from"./image-C6wOaxeb.js";var i=e((()=>{})),a=e((()=>{})),o=e((()=>{})),s,c,l,u,d=e((()=>{i(),a(),o(),s=`_1fccsmo0`,c={after:`_1fccsmo2 _1fccsmo1`,before:`_1fccsmo3 _1fccsmo1`},l=`_1fccsmo4`,u=`_1fccsmo5`}));function f({state:e,imageUrl:t,text:r,onClick:i}){return(0,p.jsxs)(`button`,{type:`button`,className:s,onClick:i,"aria-label":`${r} 아이템`,children:[(0,p.jsx)(`div`,{className:c[e],children:(0,p.jsx)(n,{src:t,alt:r,width:70,height:70,className:l})}),(0,p.jsx)(`span`,{className:u,children:r})]})}var p,m=e((()=>{p=t(),r(),d(),f.__docgenInfo={description:``,methods:[],displayName:`DangleItem`,props:{state:{required:!0,tsType:{name:`union`,raw:`"before" | "after"`,elements:[{name:`literal`,value:`"before"`},{name:`literal`,value:`"after"`}]},description:`아이템의 상태: 'before' 또는 'after'`},imageUrl:{required:!0,tsType:{name:`string`},description:`아이템에 표시될 이미지 URL`},text:{required:!0,tsType:{name:`string`},description:`아이템 하단에 표시될 텍스트`},onClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`클릭 이벤트 핸들러`}}}})),h,g,_,v,y;e((()=>{m(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Dangle/DangleItem`,component:f,parameters:{layout:`centered`},args:{onClick:h()},argTypes:{state:{control:`radio`,options:[`before`,`after`]},imageUrl:{control:`text`},text:{control:`text`}},tags:[`autodocs`]},_={args:{state:`after`,imageUrl:`/assets/dangle/beach.png`,text:`애월·한림`}},v={args:{state:`before`,imageUrl:`/assets/dangle/beach.png`,text:`애월·한림`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    state: "after",
    imageUrl: "/assets/dangle/beach.png",
    text: "애월·한림"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    state: "before",
    imageUrl: "/assets/dangle/beach.png",
    text: "애월·한림"
  }
}`,...v.parameters?.docs?.source}}},y=[`After`,`Before`]}))();export{_ as After,v as Before,y as __namedExportsOrder,g as default};