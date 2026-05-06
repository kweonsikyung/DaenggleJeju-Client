import{n as e}from"./chunk-BEldbCjX.js";import{s as t}from"./iframe-YFLyBTY8.js";var n=e((()=>{})),r,i,a,o=e((()=>{n(),r=`p0mch50`,i=`p0mch52 p0mch51`,a=`p0mch53 p0mch51`}));function s({children:e,variant:t=`ai`}){let n=t===`user`?a:i;return(0,c.jsx)(`div`,{className:r,children:(0,c.jsx)(`div`,{className:n,children:e})})}var c,l=e((()=>{c=t(),o(),s.__docgenInfo={description:``,methods:[],displayName:`MessageBox`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"ai" | "user"`,elements:[{name:`literal`,value:`"ai"`},{name:`literal`,value:`"user"`}]},description:`메시지 주체 ('ai' 또는 'user')`,defaultValue:{value:`"ai"`,computed:!1}}}}})),u,d,f,p,m;e((()=>{u=t(),l(),d={title:`Chat/MessageBox`,component:s,tags:[`autodocs`],argTypes:{children:{control:`text`,description:`메시지 박스 내부에 표시될 내용`},variant:{control:{type:`radio`},options:[`ai`,`user`],description:`메시지 주체 (ai 또는 user)`}},decorators:[e=>(0,u.jsx)(`div`,{style:{width:`500px`},children:(0,u.jsx)(e,{})})]},f={args:{variant:`ai`,children:`안녕하세요! 무엇이 궁금하신가요? 제주여행 중 반려견 건강 걱정은 AI 여행케어가 함께 덜어드릴게요.`}},p={args:{variant:`user`,children:`이동 스트레스 관리에 대해 알려주세요.`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ai",
    children: "안녕하세요! 무엇이 궁금하신가요? 제주여행 중 반려견 건강 걱정은 AI 여행케어가 함께 덜어드릴게요."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "user",
    children: "이동 스트레스 관리에 대해 알려주세요."
  }
}`,...p.parameters?.docs?.source}}},m=[`AiMessage`,`UserMessage`]}))();export{f as AiMessage,p as UserMessage,m as __namedExportsOrder,d as default};