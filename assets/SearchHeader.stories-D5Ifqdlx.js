import{n as e}from"./chunk-BEldbCjX.js";import{s as t}from"./iframe-WEpf8ft9.js";import{n,t as r}from"./image-BfTZqPwt.js";import{n as i,t as a}from"./SearchField-B_oo_pYf.js";var o=e((()=>{})),s,c,l=e((()=>{o(),s=`_1yk6hkq0`,c={fullWidth:`_1yk6hkq3 _1yk6hkq2`,withBackButton:`_1yk6hkq4 _1yk6hkq2`}}));function u({backIconHandler:e,backIconColor:t=`black`,searchFieldProps:r,onClick:i}){let o=t===`white`?`/assets/icon24/arrow-left_line_white.svg`:`/assets/icon24/arrow-left_line.svg`;return(0,d.jsxs)(`div`,{className:s,children:[e&&(0,d.jsx)(`button`,{className:`_1yk6hkq1`,onClick:e,children:(0,d.jsx)(n,{src:o,alt:`뒤로가기`,width:24,height:24})}),(0,d.jsxs)(`div`,{className:c[e?`withBackButton`:`fullWidth`],children:[(0,d.jsx)(a,{...r,readOnly:!!i}),i&&(0,d.jsx)(`div`,{className:`_1yk6hkq5`,onClick:i})]})]})}var d,f=e((()=>{d=t(),r(),l(),i(),u.__docgenInfo={description:``,methods:[],displayName:`SearchHeader`,props:{backIconHandler:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`back 아이콘 핸들러: 주면 자동으로 아이콘 노출 + 핸들러 등록`},backIconColor:{required:!1,tsType:{name:`union`,raw:`"black" | "white"`,elements:[{name:`literal`,value:`"black"`},{name:`literal`,value:`"white"`}]},description:`back 아이콘 색상`,defaultValue:{value:`"black"`,computed:!1}},searchFieldProps:{required:!1,tsType:{name:`ReactComponentProps`,raw:`React.ComponentProps<typeof SearchField>`,elements:[{name:`SearchField`}]},description:`SearchField의 props`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`클릭 핸들러: 전달하면 SearchField가 버튼처럼 동작`}}}})),p,m,h,g,_,v,y;e((()=>{p=t(),f(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Molecules/SearchHeader`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{searchFieldProps:{placeholder:`제주 지역 또는 장소명 검색`}},decorators:[e=>(0,p.jsx)(`div`,{style:{width:375},children:(0,p.jsx)(e,{})})]},g={args:{backIconHandler:void 0}},_={args:{backIconHandler:m()}},v={args:{backIconHandler:m(),backIconColor:`white`},parameters:{backgrounds:{default:`dark`,values:[{name:`dark`,value:`#333`}]}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    backIconHandler: undefined
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    backIconHandler: fn()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    backIconHandler: fn(),
    backIconColor: "white"
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{
        name: "dark",
        value: "#333"
      }]
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithBackButton`,`BackButtonWhite`]}))();export{v as BackButtonWhite,g as Default,_ as WithBackButton,y as __namedExportsOrder,h as default};