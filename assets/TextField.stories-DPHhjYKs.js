import{n as e,o as t}from"./chunk-BEldbCjX.js";import{s as n,u as r}from"./iframe-CYVitUf9.js";var i=e((()=>{})),a,o,s,c,l,u=e((()=>{i(),a=`u8h1wg0`,o={default:`u8h1wg2`,focused:`u8h1wg3`,pressed:`u8h1wg4`,filled:`u8h1wg5`,error:`u8h1wg6`,disabled:`u8h1wg7`},s=`u8h1wg8`,c=`u8h1wg9`,l=`u8h1wga`}));function d({label:e,placeholder:t=`Placeholder`,value:n,defaultValue:r,onChange:i,onBlur:u,onFocus:d,disabled:m,validator:h,errorText:g,helperText:_,className:v,id:y,...b}){let x=(0,p.useId)(),S=y??x,C=`${S}-desc`,[w,T]=(0,p.useState)(!1),[E,D]=(0,p.useState)(!1),O=n!=null,[k,A]=(0,p.useState)(r??``),j=O?String(n):k,[M,N]=(0,p.useState)(void 0),P=j.trim().length>0,F=!!(g??M),I=!!m,L=(0,p.useMemo)(()=>{let e=F?o.error:I?o.disabled:w?o.focused:E?o.pressed:P?o.filled:o.default;return[a,e,v].filter(Boolean).join(` `)},[w,E,P,F,I,v]),R=e=>{O||A(e.target.value),i?.(e)},z=e=>{h&&N(h(e)??void 0)},B=e=>{T(!1),z(e.currentTarget.value),u?.(e)},V=e=>{T(!0),d?.(e)},H=F?g??M:_;return(0,f.jsxs)(`div`,{className:a,children:[e&&(0,f.jsx)(`label`,{htmlFor:S,className:`u8h1wg1`,children:e}),(0,f.jsx)(`div`,{className:L,"aria-disabled":I||void 0,children:(0,f.jsx)(`input`,{id:S,className:s,placeholder:t,value:j,onChange:R,onFocus:V,onBlur:B,onMouseDown:()=>D(!0),onMouseUp:()=>D(!1),onKeyDown:()=>D(!0),onKeyUp:()=>D(!1),"aria-invalid":F||void 0,"aria-describedby":H?C:void 0,disabled:I,...b})}),H?(0,f.jsx)(`div`,{id:C,className:F?l:c,children:H}):null]})}var f,p,m=e((()=>{f=n(),p=t(r()),u(),d.__docgenInfo={description:``,methods:[],displayName:`TextField`,props:{label:{required:!1,tsType:{name:`string`},description:`라벨 텍스트`},placeholder:{required:!1,tsType:{name:`string`},description:`placeholder`,defaultValue:{value:`"Placeholder"`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:`컨트롤드 값`},defaultValue:{required:!1,tsType:{name:`string`},description:`언컨트롤드 초기값`},validator:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => string | undefined | null`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`union`,raw:`string | undefined | null`,elements:[{name:`string`},{name:`undefined`},{name:`null`}]}}},description:`유효성 검사 함수: 에러 메시지(string) 반환 시 에러, undefined/null이면 통과`},errorText:{required:!1,tsType:{name:`string`},description:`외부에서 강제로 에러 표시하고 싶을 때`},helperText:{required:!1,tsType:{name:`string`},description:`보조설명(힌트/에러 밑문구 우선순위: errorText > helperText)`}},composes:[`Omit`]}})),h,g,_,v,y,b,x;e((()=>{h=n(),m(),g={title:`Input/TextField`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,h.jsx)(`div`,{style:{width:500},children:(0,h.jsx)(e,{})})],argTypes:{onChange:{action:`change`},onBlur:{action:`blur`}}},_={args:{label:`input`,placeholder:`Place holder`}},v={args:{label:`filled input`,defaultValue:`사용자 입력 후`}},y={args:{label:`error input`,defaultValue:`bad email`,validator:e=>e.includes(`@`)?void 0:`올바른 이메일 형식이 아닙니다.`,helperText:`올바른 이메일을 입력해주세요.`}},b={args:{label:`disabled input`,placeholder:`Place holder`,disabled:!0}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "input",
    placeholder: "Place holder"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "filled input",
    defaultValue: "사용자 입력 후"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "error input",
    defaultValue: "bad email",
    validator: v => v.includes("@") ? undefined : "올바른 이메일 형식이 아닙니다.",
    helperText: "올바른 이메일을 입력해주세요."
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "disabled input",
    placeholder: "Place holder",
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Filled`,`Error`,`Disabled`]}))();export{_ as Default,b as Disabled,y as Error,v as Filled,x as __namedExportsOrder,g as default};