import{n as e,o as t}from"./chunk-BEldbCjX.js";import{s as n,u as r}from"./iframe-BF0Tcrf2.js";var i=e((()=>{})),a,o,s,c=e((()=>{i(),a=`xptax10`,o=`xptax11`,s=`xptax12`}));function l({currentPage:e,totalPages:t,onPageChange:n}){if(t<=1)return null;let r=Array.from({length:t},(e,t)=>t+1);return(0,u.jsx)(`nav`,{className:a,"aria-label":`페이지네이션`,children:r.map(t=>(0,u.jsx)(`button`,{className:`${o} ${e===t?s:``}`,onClick:()=>n(t),"aria-current":e===t?`page`:void 0},t))})}var u,d=e((()=>{u=n(),c(),l.__docgenInfo={description:``,methods:[],displayName:`Pagination`,props:{currentPage:{required:!0,tsType:{name:`number`},description:`현재 페이지`},totalPages:{required:!0,tsType:{name:`number`},description:`전체 페이지 수`},onPageChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:`페이지 변경 핸들러`}}}})),f,p,m,h,g;e((()=>{f=n(),p=t(r()),d(),m={title:`common/Pagination`,component:l,parameters:{layout:`centered`},tags:[`autodocs`]},h={args:{currentPage:1,totalPages:5,onPageChange:()=>{}},render:e=>{let[t,n]=(0,p.useState)(e.currentPage);return(0,f.jsx)(l,{...e,currentPage:t,onPageChange:n})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: () => {}
  },
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,m as default};