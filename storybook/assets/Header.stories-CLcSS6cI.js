import{j as e}from"./iframe-B5rMEWCp.js";import{H as o}from"./Header-C7BKvg_f.js";import{P as p}from"./Page-CVuEYAw0.js";import{H as r}from"./HeaderLabel-DPHP42UY.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-CDl6w9UR.js";import"./Box-DraZup6g.js";import"./styled-DKDAvYRr.js";import"./Grid-jWNlySLb.js";import"./Breadcrumbs-C999S0Te.js";import"./index-DnL3XN75.js";import"./Popover-Da53lhhD.js";import"./Modal-BsquyvUk.js";import"./Portal-Cv57nohz.js";import"./List-BxiaGTP_.js";import"./ListContext-Csw49CaR.js";import"./ListItem-qaMppy6r.js";import"./Link-0czgN89A.js";import"./lodash-CwBbdt2Q.js";import"./index-MUA7jQ1z.js";import"./useAnalytics-6w7twaBy.js";import"./useApp-DWoVMNMG.js";import"./Page-Cjk1SqED.js";import"./useMediaQuery-B6YDIO6B.js";import"./Tooltip-DGSrdRU4.js";import"./Popper-CsrQ0e5W.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
