import{n as e}from"./chunk-BEldbCjX.js";import{s as t}from"./iframe-C27z3qJ4.js";import{n,t as r}from"./image-w6t0hgxD.js";var i=e((()=>{})),a,o,s,c=e((()=>{i(),a=`_11em6r30`,o=`_11em6r31`,s=`_11em6r32`}));function l({title:e,desc:t,onArrowClick:r,onReClick:i,marginTop:c}){let l=r||i;return(0,u.jsxs)(`div`,{className:a,style:{marginTop:c},children:[(0,u.jsxs)(`div`,{className:o,children:[(0,u.jsx)(`h2`,{className:s,children:e}),l&&(0,u.jsx)(`button`,{className:`_11em6r34`,onClick:r||i,"aria-label":r?`더보기`:`새로고침`,children:(0,u.jsx)(n,{src:r?`/assets/icon24/chevron-right.svg`:`/assets/icon24/rotate-cw.svg`,alt:r?`화살표 아이콘`:`새로고침 아이콘`,width:24,height:24})})]}),t&&(0,u.jsx)(`p`,{className:`_11em6r33`,children:t})]})}var u,d=e((()=>{u=t(),c(),r(),l.__docgenInfo={description:``,methods:[],displayName:`Header`,props:{title:{required:!0,tsType:{name:`string`},description:`제목`},desc:{required:!1,tsType:{name:`string`},description:`설명`},onArrowClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`화살표 클릭 핸들러`},onReClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`새로고침 클릭 핸들러`},marginTop:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`컴포넌트 상단 여백`}}}})),f,p,m,h,g,_;e((()=>{d(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Common/Header`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{title:{control:`text`},desc:{control:`text`},onArrowClick:{action:`arrow clicked`},marginTop:{control:`text`}}},m={args:{title:`진짜 견주가 다녀온 제주 여행!`,desc:`15초로 댕댕이와 어디 갈지 고민 끝`,onArrowClick:void 0,marginTop:`20px`}},h={args:{title:`진짜 견주가 다녀온 제주 여행!`,desc:void 0,onArrowClick:void 0}},g={args:{title:`짖어도 OK! 소음 안심 독채 숙소`,onArrowClick:f()}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "진짜 견주가 다녀온 제주 여행!",
    desc: "15초로 댕댕이와 어디 갈지 고민 끝",
    onArrowClick: undefined,
    marginTop: "20px"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "진짜 견주가 다녀온 제주 여행!",
    desc: undefined,
    onArrowClick: undefined
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "짖어도 OK! 소음 안심 독채 숙소",
    onArrowClick: fn()
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`TitleOnly`,`WithArrow`]}))();export{m as Default,h as TitleOnly,g as WithArrow,_ as __namedExportsOrder,p as default};