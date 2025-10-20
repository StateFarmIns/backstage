import{ag as v,ah as f,ai as h,aj as T,s as y,j as e,T as x,a0 as S}from"./iframe-DRkdG3e7.js";import{C as V}from"./MenuBook-DT7FoZwv.js";import{U as j}from"./Person-BigiHTW2.js";import{S as s}from"./SearchType-DLvI15qP.js";import{s as g,M as _}from"./api-CMUBJ6LB.js";import{S as D}from"./SearchContext-PUx9mfoy.js";import{S as u}from"./Grid-DdhP03dT.js";import"./preload-helper-D9Z9MdNV.js";import"./ExpandMore-U_4OslcK.js";import"./useAsync-BIYzE4vq.js";import"./useMountedState-BzKksOdK.js";import"./translation-BNiQEW_u.js";import"./Box-DaHRDmmG.js";import"./styled-6jkyVhJx.js";import"./AccordionDetails-0d2mj9Vr.js";import"./index-DnL3XN75.js";import"./Collapse-KAzvoK9L.js";import"./List-T0-85Df0.js";import"./ListContext-Cal3OaXT.js";import"./Divider-CNFq1GCr.js";import"./ListItem-C5uPx8az.js";import"./ListItemIcon-D68-Mdi-.js";import"./ListItemText-CTmnA9Vi.js";import"./Tabs-BqgPMFQS.js";import"./KeyboardArrowRight-CzUq_csx.js";import"./FormLabel-flhUnr5Z.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-BHbMEs79.js";import"./InputLabel-D_LMyGxM.js";import"./Select-DMurkJQJ.js";import"./Popover-B-X0WTTG.js";import"./Modal-BuulqZEo.js";import"./Portal-B7yT6sF2.js";import"./MenuItem-D7FbLLQ2.js";import"./Checkbox-fWYveStV.js";import"./SwitchBase-DPTxtlNj.js";import"./Chip-Dg7_wtsV.js";import"./lodash-CwBbdt2Q.js";import"./useAnalytics-D4adgS3v.js";var r={},n;function I(){if(n)return r;n=1;var i=v(),l=f();Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var c=l(h()),m=i(T()),d=(0,m.default)(c.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");return r.default=d,r}var R=I();const q=y(R),ve={title:"Plugins/Search/SearchType",component:s,decorators:[i=>e.jsx(x,{apis:[[g,new _]],children:e.jsx(D,{children:e.jsx(u,{container:!0,direction:"row",children:e.jsx(u,{item:!0,xs:4,children:e.jsx(i,{})})})})})]},p=["value-1","value-2","value-3"],a=()=>e.jsx(S,{style:{padding:10},children:e.jsx(s,{name:"Search type",values:p,defaultValue:p[0]})}),o=()=>e.jsx(s.Accordion,{name:"Result Types",defaultValue:"value-1",types:[{value:"value-1",name:"Value One",icon:e.jsx(V,{})},{value:"value-2",name:"Value Two",icon:e.jsx(q,{})},{value:"value-3",name:"Value Three",icon:e.jsx(j,{})}]}),t=()=>e.jsx(s.Tabs,{defaultValue:"value-1",types:[{value:"value-1",name:"Value One"},{value:"value-2",name:"Value Two"},{value:"value-3",name:"Value Three"}]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Accordion"};t.__docgenInfo={description:"",methods:[],displayName:"Tabs"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
