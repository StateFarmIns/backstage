import{ag as v,ah as f,ai as h,aj as T,s as y,j as e,T as x,a0 as S}from"./iframe-DB3V3M1P.js";import{C as V}from"./MenuBook-2tqEO2jt.js";import{U as j}from"./Person-B8v05sDe.js";import{S as s}from"./SearchType-CkwTD_3-.js";import{s as g,M as _}from"./api-Omokc20s.js";import{S as D}from"./SearchContext-e_b_Cjh4.js";import{S as u}from"./Grid-CfknRkjJ.js";import"./preload-helper-D9Z9MdNV.js";import"./ExpandMore-pvULPvYF.js";import"./useAsync-_mGEXzu1.js";import"./useMountedState-DeruiZOZ.js";import"./translation-Cw9mqKsq.js";import"./Box-0UP6uhAK.js";import"./styled-BOZdy0F_.js";import"./AccordionDetails-CzfPBmnh.js";import"./index-DnL3XN75.js";import"./Collapse-DjcoKmaX.js";import"./List-DSugy7pP.js";import"./ListContext-DsqJshhp.js";import"./Divider-kPhQi6o2.js";import"./ListItem-DNGvtZA3.js";import"./ListItemIcon-CXpX-vW7.js";import"./ListItemText-D8nWU1aE.js";import"./Tabs-C0Lp1Mja.js";import"./KeyboardArrowRight-CLaaaVJ1.js";import"./FormLabel-VMGDyE8O.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-B-HcGT8J.js";import"./InputLabel-BngUTZmP.js";import"./Select-CgxMBjvC.js";import"./Popover-BMFySmHA.js";import"./Modal-DIoR7U7c.js";import"./Portal-gznPE8xU.js";import"./MenuItem-C4JFIfLM.js";import"./Checkbox-CBHZni_L.js";import"./SwitchBase-D2L2W6EG.js";import"./Chip-V4XntPM6.js";import"./lodash-CwBbdt2Q.js";import"./useAnalytics-B8Co1Zeu.js";var r={},n;function I(){if(n)return r;n=1;var i=v(),l=f();Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var c=l(h()),m=i(T()),d=(0,m.default)(c.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");return r.default=d,r}var R=I();const q=y(R),ve={title:"Plugins/Search/SearchType",component:s,decorators:[i=>e.jsx(x,{apis:[[g,new _]],children:e.jsx(D,{children:e.jsx(u,{container:!0,direction:"row",children:e.jsx(u,{item:!0,xs:4,children:e.jsx(i,{})})})})})]},p=["value-1","value-2","value-3"],a=()=>e.jsx(S,{style:{padding:10},children:e.jsx(s,{name:"Search type",values:p,defaultValue:p[0]})}),o=()=>e.jsx(s.Accordion,{name:"Result Types",defaultValue:"value-1",types:[{value:"value-1",name:"Value One",icon:e.jsx(V,{})},{value:"value-2",name:"Value Two",icon:e.jsx(q,{})},{value:"value-3",name:"Value Three",icon:e.jsx(j,{})}]}),t=()=>e.jsx(s.Tabs,{defaultValue:"value-1",types:[{value:"value-1",name:"Value One"},{value:"value-2",name:"Value Two"},{value:"value-3",name:"Value Three"}]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Accordion"};t.__docgenInfo={description:"",methods:[],displayName:"Tabs"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchType name="Search type" values={values} defaultValue={values[0]} />
    </Paper>;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <SearchType.Accordion name="Result Types" defaultValue="value-1" types={[{
    value: 'value-1',
    name: 'Value One',
    icon: <CatalogIcon />
  }, {
    value: 'value-2',
    name: 'Value Two',
    icon: <DocsIcon />
  }, {
    value: 'value-3',
    name: 'Value Three',
    icon: <UsersGroupsIcon />
  }]} />;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <SearchType.Tabs defaultValue="value-1" types={[{
    value: 'value-1',
    name: 'Value One'
  }, {
    value: 'value-2',
    name: 'Value Two'
  }, {
    value: 'value-3',
    name: 'Value Three'
  }]} />;
}`,...t.parameters?.docs?.source}}};const fe=["Default","Accordion","Tabs"];export{o as Accordion,a as Default,t as Tabs,fe as __namedExportsOrder,ve as default};
