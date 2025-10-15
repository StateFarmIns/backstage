import{j as t,T as i,c as m,C as a}from"./iframe-DB3V3M1P.js";import{w as n}from"./appWrappers-BeCDEZsw.js";import{s as p,H as s}from"./plugin-DekLzjP_.js";import{c as d}from"./api-Cs4Bh5_L.js";import{c}from"./catalogApiMock-B7rvYdpz.js";import{M as g}from"./MockStarredEntitiesApi-DPo2I5up.js";import{s as l}from"./api-Omokc20s.js";import{C as h}from"./CustomHomepageGrid-Bc-SDj7T.js";import{H as f,a as u}from"./plugin-DdkB01Wk.js";import{e as y}from"./routes-DeFyM09r.js";import{s as w}from"./StarredEntitiesApi-DZVWj0uK.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-Yiafstbl.js";import"./useIsomorphicLayoutEffect-iZVaeubF.js";import"./useAnalytics-B8Co1Zeu.js";import"./useAsync-_mGEXzu1.js";import"./useMountedState-DeruiZOZ.js";import"./componentData-mQLuWRkV.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-Du1GFH8T.js";import"./useApp-B-eWZbLz.js";import"./index-ifvX4xvl.js";import"./Plugin-B7nbzp0m.js";import"./useRouteRef-B1SGR72k.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-2RTRQNLF.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-Bm5zuNY2.js";import"./Grid-CfknRkjJ.js";import"./Box-0UP6uhAK.js";import"./styled-BOZdy0F_.js";import"./TextField-C7aS7L7L.js";import"./Select-CgxMBjvC.js";import"./index-DnL3XN75.js";import"./Popover-BMFySmHA.js";import"./Modal-DIoR7U7c.js";import"./Portal-gznPE8xU.js";import"./List-DSugy7pP.js";import"./ListContext-DsqJshhp.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-B-HcGT8J.js";import"./FormLabel-VMGDyE8O.js";import"./InputLabel-BngUTZmP.js";import"./ListItem-DNGvtZA3.js";import"./ListItemIcon-CXpX-vW7.js";import"./ListItemText-D8nWU1aE.js";import"./Remove-B2VjAoab.js";import"./useCopyToClipboard-BE6hxvvA.js";import"./Button-Ko4eMR9b.js";import"./Divider-kPhQi6o2.js";import"./FormControlLabel-CTelAyJx.js";import"./Checkbox-CBHZni_L.js";import"./SwitchBase-D2L2W6EG.js";import"./RadioGroup-CaKPKvir.js";import"./MenuItem-C4JFIfLM.js";import"./translation-BoZL78kA.js";import"./DialogTitle-CqBGrpPf.js";import"./Backdrop-BiEfipJS.js";import"./Tooltip-V48XKOvh.js";import"./Popper-BQ7Pkv4c.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-kwfFEWD2.js";import"./Edit-9-Z5Atns.js";import"./Cancel-Bn8UPF1G.js";import"./Progress-DAy5rVeL.js";import"./LinearProgress-Drry4w8a.js";import"./ContentHeader-DIxvxTg4.js";import"./Helmet-BGx6lV-m.js";import"./ErrorBoundary-BWcekGKL.js";import"./ErrorPanel-BOiEIrrC.js";import"./WarningPanel-BH0EFZqv.js";import"./ExpandMore-pvULPvYF.js";import"./AccordionDetails-CzfPBmnh.js";import"./Collapse-DjcoKmaX.js";import"./MarkdownContent-Bine1RhI.js";import"./CodeSnippet-7m8fnh0J.js";import"./CopyTextButton-CCCiwQrJ.js";import"./LinkButton-DLHe3OPB.js";import"./Link-RVX05V_6.js";import"./useElementFilter-BASPgGPN.js";import"./InfoCard-DvK2mKhQ.js";import"./CardContent-DavYAT72.js";import"./CardHeader-WVo9nPxM.js";import"./CardActions-KP1Qe3Re.js";import"./BottomLink-BwFpKE2c.js";import"./ArrowForward-B7wbdPql.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  // This is the default configuration that is shown to the user
  // when first arriving to the homepage.
  const defaultConfig = [{
    component: 'HomePageSearchBar',
    x: 0,
    y: 0,
    width: 12,
    height: 5
  }, {
    component: 'HomePageRandomJoke',
    x: 0,
    y: 2,
    width: 6,
    height: 16
  }, {
    component: 'HomePageStarredEntities',
    x: 6,
    y: 2,
    width: 6,
    height: 12
  }];
  return <CustomHomepageGrid config={defaultConfig} rowHeight={10}>
      // Insert the allowed widgets inside the grid. User can add, organize and
      // remove the widgets as they want.
      <HomePageSearchBar />
      <HomePageRandomJoke />
      <HomePageStarredEntities />
    </CustomHomepageGrid>;
}`,...e.parameters?.docs?.source}}};const ae=["CustomizableTemplate"];export{e as CustomizableTemplate,ae as __namedExportsOrder,me as default};
