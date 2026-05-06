import{n as e}from"./chunk-BEldbCjX.js";import{s as t}from"./iframe-CYVitUf9.js";var n=e((()=>{})),r=e((()=>{})),i,a,o,s=e((()=>{n(),r(),i=`p0mch50`,a=`p0mch52 p0mch51`,o=`p0mch53 p0mch51`}));function c({children:e,variant:t=`ai`}){let n=t===`user`?o:a;return(0,l.jsx)(`div`,{className:i,children:(0,l.jsx)(`div`,{className:n,children:e})})}var l,u=e((()=>{l=t(),s(),c.__docgenInfo={description:``,methods:[],displayName:`MessageBox`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"ai" | "user"`,elements:[{name:`literal`,value:`"ai"`},{name:`literal`,value:`"user"`}]},description:`메시지 주체 ('ai' 또는 'user')`,defaultValue:{value:`"ai"`,computed:!1}}}}})),d,f,p,m,h;e((()=>{d=t(),u(),f={title:`Chat/MessageBox`,component:c,tags:[`autodocs`],argTypes:{children:{control:`text`,description:`메시지 박스 내부에 표시될 내용`},variant:{control:{type:`radio`},options:[`ai`,`user`],description:`메시지 주체 (ai 또는 user)`}},decorators:[e=>(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsx)(e,{})})]},p={args:{variant:`ai`,children:`안녕하세요! 무엇이 궁금하신가요? 제주여행 중 반려견 건강 걱정은 AI 여행케어가 함께 덜어드릴게요.`}},m={args:{variant:`user`,children:`이동 스트레스 관리에 대해 알려주세요.`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ai",
    children: "안녕하세요! 무엇이 궁금하신가요? 제주여행 중 반려견 건강 걱정은 AI 여행케어가 함께 덜어드릴게요."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "user",
    children: "이동 스트레스 관리에 대해 알려주세요."
  }
}`,...m.parameters?.docs?.source}}},h=[`AiMessage`,`UserMessage`]}))();export{p as AiMessage,m as UserMessage,h as __namedExportsOrder,f as default};