import{n as e}from"./chunk-BEldbCjX.js";import{s as t}from"./iframe-YFLyBTY8.js";import{n,t as r}from"./image-C_NpUFEF.js";var i=e((()=>{})),a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x=e((()=>{i(),a=`a8owfz0`,o=`a8owfz1`,s=`a8owfz2`,c=`a8owfz3`,l=`a8owfz4`,u=`a8owfz5`,d=`a8owfz6`,f=`a8owfz7`,p=`a8owfz9`,m=`a8owfza`,h=`a8owfzb`,g=`a8owfzc`,_=`a8owfzd`,v=`a8owfze`,y=`a8owfzf`,b=`a8owfzg`}));function S({profileImageUrl:e,userName:t,dogInfo:r,locationCategory:i,placeName:m,isMine:x,rating:S,date:E,chips:D,content:O,onClick:k}){return(0,C.jsxs)(`div`,{className:a,onClick:k,children:[x?(0,C.jsxs)(`div`,{className:s,children:[(0,C.jsx)(`span`,{className:c,children:i}),(0,C.jsx)(`div`,{className:l,children:m})]}):(0,C.jsxs)(`div`,{className:o,children:[(0,C.jsx)(n,{src:e||`/assets/dangle/dog.png`,alt:t||`user`,width:24,height:24,className:u}),(0,C.jsxs)(`div`,{className:d,children:[(0,C.jsx)(`span`,{className:f,children:t}),r&&(0,C.jsx)(`span`,{className:`a8owfz8`,children:r})]})]}),(0,C.jsxs)(`div`,{className:g,children:[(0,C.jsxs)(`div`,{className:p,children:[(0,C.jsx)(T,{rating:S}),(0,C.jsx)(`span`,{className:h,children:E})]}),D.map((e,t)=>{let n=w[t];return n?(0,C.jsxs)(`div`,{className:_,children:[(0,C.jsx)(`span`,{className:v,children:n}),(0,C.jsx)(`span`,{className:y,children:e})]},n):null})]}),(0,C.jsx)(`p`,{className:b,children:O})]})}var C,w,T,E=e((()=>{C=t(),r(),x(),w=[`출입 가능 여부`,`출입 조건`,`반려견 친화도`],T=({rating:e})=>(0,C.jsx)(`div`,{className:m,children:[...[,,,,,]].map((t,r)=>(0,C.jsx)(n,{alt:r<e?`paw-filled`:`paw-empty`,width:16,height:16,src:r<e?`/assets/icon24/dogfootprint-blue.svg`:`/assets/icon24/dogfootprint-white.svg`},r))}),S.__docgenInfo={description:``,methods:[],displayName:`DangleReview`,props:{profileImageUrl:{required:!1,tsType:{name:`string`},description:`[isMine=false] 리뷰 작성자의 프로필 이미지 URL`},userName:{required:!1,tsType:{name:`string`},description:`[isMine=false] 리뷰 작성자의 이름`},dogInfo:{required:!1,tsType:{name:`string`},description:`[isMine=false] 리뷰 작성자의 반려견 정보`},locationCategory:{required:!1,tsType:{name:`string`},description:`[isMine=true] 장소 위치/카테고리`},placeName:{required:!1,tsType:{name:`string`},description:`[isMine=true] 장소명`},isMine:{required:!0,tsType:{name:`boolean`},description:`내가 쓴 리뷰인지 여부`},rating:{required:!0,tsType:{name:`number`},description:`평점 (1-5 사이의 숫자)`},date:{required:!0,tsType:{name:`string`},description:`리뷰 작성 날짜 (API: createdAtText)`},chips:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`리뷰 칩 배열 (API: chips)`},content:{required:!0,tsType:{name:`string`},description:`리뷰 본문 내용 (API: body)`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`[isMine=true] 카드 클릭 이벤트 핸들러`}}}})),D,O,k,A,j,M;e((()=>{D=t(),E(),O={title:`Dangle/DangleReview`,component:S,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{rating:{control:{type:`range`,min:0,max:5,step:1}},isMine:{control:`boolean`},profileImageUrl:{control:`text`},userName:{control:`text`},dogInfo:{control:`text`},locationCategory:{control:`text`},placeName:{control:`text`},date:{control:`text`},content:{control:`text`}},decorators:[e=>(0,D.jsx)(`div`,{style:{width:375,display:`flex`,flexDirection:`column`,gap:`16px`},children:(0,D.jsx)(e,{})})]},k={name:`다른 사람 리뷰 (Default)`,args:{isMine:!1,profileImageUrl:`/assets/dangle/dog_profile1.png`,userName:`해투 견주님`,dogInfo:`골든리트리버 · 7살 · 대형견 · 20kg 이상`,rating:5,date:`2025.03.14`,chips:[`실내 모든 곳 이용 가능`,`목줄 착용 필수`,`매우 친절`],content:`대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책...`,locationCategory:void 0,placeName:void 0}},A={name:`다른 사람 리뷰 (4점)`,args:{isMine:!1,profileImageUrl:`/assets/dangle/dog_profile2.png`,userName:`댕댕이 견주님`,dogInfo:`푸들 · 3살 · 소형견 · 5kg 미만`,rating:4,date:`2025.03.12`,chips:[`실내 일부만 가능`,`이동가방 필수`,`친절`],content:`사장님이 친절하셨어요. 소형견 친구들이 놀기 좋은 곳 같아요. 공간이 넓지는 않지만 아기자기하게 잘 꾸며져 있습니다.`,locationCategory:void 0,placeName:void 0}},j={name:`내 리뷰 (isMine=true)`,args:{isMine:!0,locationCategory:`제주시 애월읍 · 콘도`,placeName:`한화리조트 제주`,rating:5,date:`2025.03.14`,chips:[`실내 일부만 가능`,`이동가방 필수`,`친절`],content:`대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책...`,profileImageUrl:void 0,userName:void 0,dogInfo:void 0}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "다른 사람 리뷰 (Default)",
  args: {
    isMine: false,
    profileImageUrl: "/assets/dangle/dog_profile1.png",
    userName: "해투 견주님",
    dogInfo: "골든리트리버 · 7살 · 대형견 · 20kg 이상",
    rating: 5,
    date: "2025.03.14",
    chips: ["실내 모든 곳 이용 가능",
    // CHIP_LABELS_OTHER[0] "출입 가능 여부"
    "목줄 착용 필수",
    // CHIP_LABELS_OTHER[1] "출입 조건"
    "매우 친절" // CHIP_LABELS_OTHER[2] "반려견 친화도"
    ],
    content: "대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책...",
    locationCategory: undefined,
    placeName: undefined
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "다른 사람 리뷰 (4점)",
  args: {
    isMine: false,
    // [UPDATE]
    profileImageUrl: "/assets/dangle/dog_profile2.png",
    userName: "댕댕이 견주님",
    dogInfo: "푸들 · 3살 · 소형견 · 5kg 미만",
    rating: 4,
    date: "2025.03.12",
    chips: ["실내 일부만 가능",
    // CHIP_LABELS_OTHER[0] "출입 가능 여부"
    "이동가방 필수",
    // CHIP_LABELS_OTHER[1] "출입 조건"
    "친절" // CHIP_LABELS_OTHER[2] "반려견 친화도"
    ],
    content: "사장님이 친절하셨어요. 소형견 친구들이 놀기 좋은 곳 같아요. 공간이 넓지는 않지만 아기자기하게 잘 꾸며져 있습니다.",
    locationCategory: undefined,
    placeName: undefined
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "내 리뷰 (isMine=true)",
  args: {
    isMine: true,
    locationCategory: "제주시 애월읍 · 콘도",
    placeName: "한화리조트 제주",
    rating: 5,
    date: "2025.03.14",
    chips: ["실내 일부만 가능",
    // CHIP_LABELS_OTHER[0] "출입 가능 여부"
    "이동가방 필수",
    // CHIP_LABELS_OTHER[1] "출입 조건"
    "친절" // CHIP_LABELS_OTHER[2] "반려견 친화도"
    ],
    content: "대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책...",
    profileImageUrl: undefined,
    userName: undefined,
    dogInfo: undefined
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`FourStars`,`MyReview`]}))();export{k as Default,A as FourStars,j as MyReview,M as __namedExportsOrder,O as default};