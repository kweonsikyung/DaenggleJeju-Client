import{n as e}from"./chunk-BEldbCjX.js";import{s as t}from"./iframe-CYVitUf9.js";import{n,t as r}from"./image-CiCZpZ_M.js";var i=e((()=>{})),a,o,s,c,l,u,d=e((()=>{i(),a=`_1mxwos00`,o=`_1mxwos05`,s=`_1mxwos06 _1mxwos05`,c=`_1mxwos07`,l=`_1mxwos08`,u=`_1mxwos09`}));function f({backIconHandler:e,title:t,isShowLogo:r=!1,rightIcons:i=[],sticky:d=!1,transparent:f=!1,whiteIcon:m=!1,className:h}){return(0,p.jsxs)(`header`,{className:[a,d&&`_1mxwos01`,f&&`_1mxwos02`,h].filter(Boolean).join(` `),role:`banner`,children:[(0,p.jsx)(`div`,{className:s,children:e?(0,p.jsx)(`button`,{type:`button`,className:[o,m&&`_1mxwos03`].filter(Boolean).join(` `),onClick:e,"aria-label":`뒤로가기`,children:(0,p.jsx)(n,{src:`/assets/icon24/arrow-left_line.svg`,alt:`뒤로가기`,width:24,height:24})}):null}),(0,p.jsx)(`div`,{className:c,"aria-live":`polite`,children:r?(0,p.jsx)(n,{src:`/assets/logo/logo-top.svg`,alt:`댕글 로고`,width:72.56,height:24}):t?(0,p.jsx)(`div`,{className:l,title:t,children:t}):null}),(0,p.jsx)(`nav`,{className:u,"aria-label":`topbar-actions`,children:i.map(({icon:e,onClick:t},n)=>(0,p.jsx)(`button`,{type:`button`,className:[o,m&&`_1mxwos03`].filter(Boolean).join(` `),onClick:t,"aria-label":`action-${n+1}`,children:e},n))})]})}var p,m=e((()=>{p=t(),r(),d(),f.__docgenInfo={description:`TopBar
- backIconHandler 있으면 자동으로 back 아이콘 노출
- isShowLogo면 logo-top.svg 노출
- rightIcons는 오른쪽 끝부터 보이도록 row-reverse 배치`,methods:[],displayName:`TopBar`,props:{backIconHandler:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`back 아이콘 핸들러: 주면 자동으로 아이콘 노출 + 핸들러 등록`},title:{required:!1,tsType:{name:`string`},description:`제목 텍스트`},isShowLogo:{required:!1,tsType:{name:`boolean`},description:`상단 로고 노출 여부`,defaultValue:{value:`false`,computed:!1}},rightIcons:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  icon: ReactNode; // 24x24 아이콘
  onClick?: () => void; // 아이콘 클릭
}`,signature:{properties:[{key:`icon`,value:{name:`ReactNode`,required:!0}},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1}}]}}],raw:`{
  icon: ReactNode; // 24x24 아이콘
  onClick?: () => void; // 아이콘 클릭
}[]`},description:`우측 아이콘들(오른쪽 끝부터 보임)`,defaultValue:{value:`[]`,computed:!1}},sticky:{required:!1,tsType:{name:`boolean`},description:`상단 고정 여부`,defaultValue:{value:`false`,computed:!1}},transparent:{required:!1,tsType:{name:`boolean`},description:`배경 투명 여부`,defaultValue:{value:`false`,computed:!1}},whiteIcon:{required:!1,tsType:{name:`boolean`},description:`아이콘 흰색 여부`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`추가 클래스`}}}})),h,g,_,v,y,b,x,S;e((()=>{h=t(),r(),m(),g={title:`Common/TopBar`,component:f,parameters:{layout:`centered`},decorators:[e=>(0,h.jsx)(`div`,{style:{width:375},children:(0,h.jsx)(e,{})})],tags:[`autodocs`],argTypes:{title:{control:`text`},isShowLogo:{control:`boolean`},sticky:{control:`boolean`}}},_=(e,t,r=()=>alert(`icon clicked`))=>({icon:(0,h.jsx)(n,{src:e,alt:t,width:24,height:24}),onClick:r}),v={parameters:{docs:{description:{story:`브랜드 로고가 중앙에 노출되는 TopBar.`}}},args:{isShowLogo:!0,backIconHandler:()=>alert(`back clicked`),rightIcons:[_(`/assets/icon24/search.svg`,`검색`)]}},y={parameters:{docs:{description:{story:`큐레이션/영상 재생 페이지 등 액션 아이콘이 있는 TopBar.`}}},args:{backIconHandler:()=>alert(`back clicked`),rightIcons:[_(`/assets/icon24/search.svg`,`검색`)]}},b={parameters:{docs:{description:{story:`여행케어 화면에 쓰이는 기본 TopBar(타이틀만).`}}},args:{title:`AI 여행케어`,sticky:!0}},x={args:{title:`댕글추천`,isShowLogo:!1,backIconHandler:()=>alert(`back clicked`),rightIcons:[_(`/assets/icon24/search.svg`,`검색`),_(`/assets/icon24/share_line.svg`,`공유`),_(`/assets/icon24/bookmark_line.svg`,`북마크`)]}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "브랜드 로고가 중앙에 노출되는 TopBar."
      }
    }
  },
  args: {
    isShowLogo: true,
    backIconHandler: () => alert("back clicked"),
    rightIcons: [ri("/assets/icon24/search.svg", "검색")]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "큐레이션/영상 재생 페이지 등 액션 아이콘이 있는 TopBar."
      }
    }
  },
  args: {
    backIconHandler: () => alert("back clicked"),
    rightIcons: [ri("/assets/icon24/search.svg", "검색")]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "여행케어 화면에 쓰이는 기본 TopBar(타이틀만)."
      }
    }
  },
  args: {
    title: "AI 여행케어",
    sticky: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: "댕글추천",
    isShowLogo: false,
    backIconHandler: () => alert("back clicked"),
    rightIcons: [ri("/assets/icon24/search.svg", "검색"), ri("/assets/icon24/share_line.svg", "공유"), ri("/assets/icon24/bookmark_line.svg", "북마크")]
  }
}`,...x.parameters?.docs?.source}}},S=[`WithLogo`,`WithAction`,`TitleOnly`,`All`]}))();export{x as All,b as TitleOnly,y as WithAction,v as WithLogo,S as __namedExportsOrder,g as default};