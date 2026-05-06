import{n as e,o as t}from"./chunk-BEldbCjX.js";import{s as n,u as r}from"./iframe-BF0Tcrf2.js";import{n as i,t as a}from"./FilterChipExpand-DHqg-sLD.js";var o=e((()=>{})),s,c,l,u,d=e((()=>{o(),s=`c5670p0`,c=`c5670p1`,l=`c5670p2`,u=`c5670p3`}));function f({title:e,chips:t,multiSelect:n,selectedChips:r,onChipClick:i}){return(0,p.jsxs)(`div`,{className:s,children:[(0,p.jsxs)(`div`,{className:c,children:[e,(0,p.jsxs)(`span`,{className:l,children:[` `,n?`중복 가능`:void 0]})]}),(0,p.jsx)(`div`,{className:u,children:t.map(e=>(0,p.jsx)(a,{title:e.title,caption:e.caption,selected:r.includes(e.id),onClick:()=>i(e.id)},e.id))})]})}var p,m=e((()=>{p=n(),d(),i(),f.__docgenInfo={description:``,methods:[],displayName:`FilterSection`,props:{title:{required:!0,tsType:{name:`string`},description:`섹션 헤더 타이틀`},chips:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; title: string; caption?: string }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`caption`,value:{name:`string`,required:!1}}]}}],raw:`{ id: string; title: string; caption?: string }[]`},description:`칩 목록 데이터`},multiSelect:{required:!1,tsType:{name:`boolean`},description:`다중 선택 가능 여부`},selectedChips:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`선택된 칩 ID 목록`},onChipClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(chipId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`chipId`}],return:{name:`void`}}},description:`칩 클릭 이벤트 핸들러`}}}})),h,g,_,v,y,b,x;e((()=>{h=n(),m(),g=t(r()),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Molecules/FilterSection`,component:f,parameters:{layout:`centered`},args:{title:`반려견 크기`,multiSelect:!0,chips:[{id:`s1`,title:`소형견`,caption:`10kg 미만`},{id:`s2`,title:`중형견`,caption:`10~24kg`},{id:`s3`,title:`대형견`,caption:`25~44kg`},{id:`s4`,title:`초대형견`,caption:`45kg 이상`},{id:`s5`,title:`모든 크기`,caption:`(소형~초대형 모두)`}]},tags:[`autodocs`],argTypes:{multiSelect:{control:`boolean`},onChipClick:{action:`onChipClick`},selectedChips:{control:`object`}},decorators:[e=>(0,h.jsx)(`div`,{style:{width:375},children:(0,h.jsx)(e,{})})]},y=e=>{let[t,n]=(0,g.useState)([]),r=t=>{var r;n(n=>e.multiSelect?n.includes(t)?n.filter(e=>e!==t):[...n,t]:n.includes(t)?[]:[t]),(r=e.onChipClick)==null||r.call(e,t)};return(0,h.jsx)(f,{...e,selectedChips:t,onChipClick:r})},b={render:y,args:{title:`반려견 크기`,multiSelect:!0,chips:[{id:`s1`,title:`소형견`,caption:`10kg 미만`},{id:`s2`,title:`중형견`,caption:`10~24kg`},{id:`s3`,title:`대형견`,caption:`25~44kg`},{id:`s4`,title:`초대형견`,caption:`45kg 이상`},{id:`s5`,title:`모든 크기`,caption:`(소형~초대형 모두)`}],selectedChips:[],onChipClick:_()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: InteractiveFilterSection,
  args: {
    title: "반려견 크기",
    multiSelect: true,
    chips: [{
      id: "s1",
      title: "소형견",
      caption: "10kg 미만"
    }, {
      id: "s2",
      title: "중형견",
      caption: "10~24kg"
    }, {
      id: "s3",
      title: "대형견",
      caption: "25~44kg"
    }, {
      id: "s4",
      title: "초대형견",
      caption: "45kg 이상"
    }, {
      id: "s5",
      title: "모든 크기",
      caption: "(소형~초대형 모두)"
    }],
    selectedChips: [],
    onChipClick: fn()
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`]}))();export{b as Default,x as __namedExportsOrder,v as default};