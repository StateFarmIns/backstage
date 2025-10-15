import{j as e}from"./iframe-DB3V3M1P.js";import{H as o}from"./Header-BySLmf7P.js";import{P as p}from"./Page-GHVKG3qM.js";import{H as r}from"./HeaderLabel-7xa1e5vb.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-BGx6lV-m.js";import"./Box-0UP6uhAK.js";import"./styled-BOZdy0F_.js";import"./Grid-CfknRkjJ.js";import"./Breadcrumbs-Bf-LYTTp.js";import"./index-DnL3XN75.js";import"./Popover-BMFySmHA.js";import"./Modal-DIoR7U7c.js";import"./Portal-gznPE8xU.js";import"./List-DSugy7pP.js";import"./ListContext-DsqJshhp.js";import"./ListItem-DNGvtZA3.js";import"./Link-RVX05V_6.js";import"./lodash-CwBbdt2Q.js";import"./index-Du1GFH8T.js";import"./useAnalytics-B8Co1Zeu.js";import"./useApp-B-eWZbLz.js";import"./Page-DE0PgqzH.js";import"./useMediaQuery-Dww4fk3e.js";import"./Tooltip-V48XKOvh.js";import"./Popper-BQ7Pkv4c.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
  type: string;
  title: string;
  subtitle: string;
}) => {
  const {
    type
  } = args;
  return <Page themeId={type}>
      <Header {...args}>{labels}</Header>
    </Page>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,N as default};
