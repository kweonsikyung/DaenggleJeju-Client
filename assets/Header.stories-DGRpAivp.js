import{n as e}from"./chunk-BEldbCjX.js";import{s as t}from"./iframe-WEpf8ft9.js";import{n,t as r}from"./image-BfTZqPwt.js";var i=e((()=>{})),a=e((()=>{})),o,s,c,l=e((()=>{i(),a(),o=`_11em6r30`,s=`_11em6r31`,c=`_11em6r32`}));function u({title:e,desc:t,onArrowClick:r,onReClick:i,marginTop:a}){let l=r||i;return(0,d.jsxs)(`div`,{className:o,style:{marginTop:a},children:[(0,d.jsxs)(`div`,{className:s,children:[(0,d.jsx)(`h2`,{className:c,children:e}),l&&(0,d.jsx)(`button`,{className:`_11em6r34`,onClick:r||i,"aria-label":r?`더보기`:`새로고침`,children:(0,d.jsx)(n,{src:r?`/assets/icon24/chevron-right.svg`:`/assets/icon24/rotate-cw.svg`,alt:r?`화살표 아이콘`:`새로고침 아이콘`,width:24,height:24})})]}),t&&(0,d.jsx)(`p`,{className:`_11em6r33`,children:t})]})}var d,f=e((()=>{d=t(),l(),r(),u.__docgenInfo={description:``,methods:[],displayName:`Header`,props:{title:{required:!0,tsType:{name:`string`},description:`제목`},desc:{required:!1,tsType:{name:`string`},description:`설명`},onArrowClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`화살표 클릭 핸들러`},onReClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`새로고침 클릭 핸들러`},marginTop:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`컴포넌트 상단 여백`}}}})),p,m,h,g,_,v;e((()=>{f(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Common/Header`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{title:{control:`text`},desc:{control:`text`},onArrowClick:{action:`arrow clicked`},marginTop:{control:`text`}}},h={args:{title:`진짜 견주가 다녀온 제주 여행!`,desc:`15초로 댕댕이와 어디 갈지 고민 끝`,onArrowClick:void 0,marginTop:`20px`}},g={args:{title:`진짜 견주가 다녀온 제주 여행!`,desc:void 0,onArrowClick:void 0}},_={args:{title:`짖어도 OK! 소음 안심 독채 숙소`,onArrowClick:p()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "진짜 견주가 다녀온 제주 여행!",
    desc: "15초로 댕댕이와 어디 갈지 고민 끝",
    onArrowClick: undefined,
    marginTop: "20px"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "진짜 견주가 다녀온 제주 여행!",
    desc: undefined,
    onArrowClick: undefined
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: "짖어도 OK! 소음 안심 독채 숙소",
    onArrowClick: fn()
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`TitleOnly`,`WithArrow`]}))();export{h as Default,g as TitleOnly,_ as WithArrow,v as __namedExportsOrder,m as default};