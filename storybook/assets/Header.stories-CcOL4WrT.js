import{j as e}from"./iframe-DRkdG3e7.js";import{H as o}from"./Header-TaOu6Z4-.js";import{P as p}from"./Page-Q4Cg0ltz.js";import{H as r}from"./HeaderLabel-BjwE25N3.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-ZQIOoyK3.js";import"./Box-DaHRDmmG.js";import"./styled-6jkyVhJx.js";import"./Grid-DdhP03dT.js";import"./Breadcrumbs-CdqXel2U.js";import"./index-DnL3XN75.js";import"./Popover-B-X0WTTG.js";import"./Modal-BuulqZEo.js";import"./Portal-B7yT6sF2.js";import"./List-T0-85Df0.js";import"./ListContext-Cal3OaXT.js";import"./ListItem-C5uPx8az.js";import"./Link-D0rSWwVe.js";import"./lodash-CwBbdt2Q.js";import"./index-DZ62LnLt.js";import"./useAnalytics-D4adgS3v.js";import"./useApp-5eUlhv-k.js";import"./Page-UNMNBrNq.js";import"./useMediaQuery-CaqT71cc.js";import"./Tooltip-COGr6yaA.js";import"./Popper-xbOvXIVU.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
