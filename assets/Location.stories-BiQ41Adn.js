import{n as e,o as t}from"./chunk-BEldbCjX.js";import{s as n,u as r}from"./iframe-YFLyBTY8.js";var i=e((()=>{})),a,o,s,c,l=e((()=>{i(),a=`_87b4cx0`,o={default:`_87b4cx1`,selected:`_87b4cx2`,disabled:`_87b4cx3`},s=`_87b4cx4`,c=`_87b4cx5`}));function u({title:e,desc:t,selected:n=!1,disabled:r=!1,className:i,onClick:l,...u}){return(0,d.jsxs)(`button`,{type:`button`,className:[a,n?o.selected:o.default,r?o.disabled:``,i].filter(Boolean).join(` `),disabled:r,onClick:l,role:`checkbox`,"aria-checked":n,"data-selected":n||void 0,...u,children:[(0,d.jsx)(`span`,{className:s,children:e}),t?(0,d.jsx)(`span`,{className:c,children:t}):null]})}var d,f=e((()=>{d=n(),l(),u.__docgenInfo={description:``,methods:[],displayName:`Location`,props:{title:{required:!0,tsType:{name:`string`},description:`상단 굵은 타이틀`},desc:{required:!1,tsType:{name:`string`},description:`하단 보조 설명(선택)`},selected:{required:!1,tsType:{name:`boolean`},description:`선택 상태 (다중 선택 가능 시 외부에서 관리)`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`비활성화`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),p,m,h,g,_,v,y,b,x;e((()=>{p=n(),m=t(r()),f(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Button/Location`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{title:{control:`text`},desc:{control:`text`},selected:{control:`boolean`},disabled:{control:`boolean`},onClick:{action:`clicked`}},args:{title:`기본 타이틀`,desc:`기본 설명`,onClick:h()}},_={args:{title:`제주 전체`,desc:`제주 전지역`,selected:!1,disabled:!1}},v={args:{title:`제주시(도심)`,desc:`공항·쇼핑·맛집·야경`,selected:!0}},y={args:{title:`안덕/대정`,desc:`산방산·해안·마라도`,disabled:!0}},b={args:{},render:()=>{let e=[{id:1,title:`제주 전체`,desc:`제주 전지역`},{id:2,title:`제주시(도심)`,desc:`공항·쇼핑·맛집·야경`},{id:3,title:`애월/한림/한경`,desc:`바다·카페·노을`},{id:4,title:`조천/구좌/우도`,desc:`해변·자연·드라이브`},{id:5,title:`서귀포시(중문)`,desc:`리조트·폭포·올레길`},{id:6,title:`성산/표선/남원`,desc:`일출·해변·해녀`},{id:7,title:`안덕/대정`,desc:`산방산·해안·마라도`}],[t,n]=(0,m.useState)([1]),r=e=>n(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`16px`,width:375},children:e.map(e=>(0,p.jsx)(u,{title:e.title,desc:e.desc,selected:t.includes(e.id),onClick:()=>r(e.id)},e.id))})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: "제주 전체",
    desc: "제주 전지역",
    selected: false,
    disabled: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "제주시(도심)",
    desc: "공항·쇼핑·맛집·야경",
    selected: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "안덕/대정",
    desc: "산방산·해안·마라도",
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const items = [{
      id: 1,
      title: "제주 전체",
      desc: "제주 전지역"
    }, {
      id: 2,
      title: "제주시(도심)",
      desc: "공항·쇼핑·맛집·야경"
    }, {
      id: 3,
      title: "애월/한림/한경",
      desc: "바다·카페·노을"
    }, {
      id: 4,
      title: "조천/구좌/우도",
      desc: "해변·자연·드라이브"
    }, {
      id: 5,
      title: "서귀포시(중문)",
      desc: "리조트·폭포·올레길"
    }, {
      id: 6,
      title: "성산/표선/남원",
      desc: "일출·해변·해녀"
    }, {
      id: 7,
      title: "안덕/대정",
      desc: "산방산·해안·마라도"
    }];
    const [selected, setSelected] = useState<number[]>([1]);
    const toggle = (id: number) => setSelected(prev => prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]);
    return <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px",
      width: 375
    }}>
        {items.map(it => <Location key={it.id} title={it.title} desc={it.desc} selected={selected.includes(it.id)} onClick={() => toggle(it.id)} />)}
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Selected`,`Disabled`,`GridSelectable`]}))();export{_ as Default,y as Disabled,b as GridSelectable,v as Selected,x as __namedExportsOrder,g as default};