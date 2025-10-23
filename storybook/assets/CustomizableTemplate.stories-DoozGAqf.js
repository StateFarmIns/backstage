import{j as t,T as i,c as m,C as a}from"./iframe-B5rMEWCp.js";import{w as n}from"./appWrappers-B511bzGN.js";import{s as p,H as s}from"./plugin-Bwd1gmFI.js";import{c as d}from"./api-lylPkq2d.js";import{c}from"./catalogApiMock-DGJHE9_x.js";import{M as g}from"./MockStarredEntitiesApi-CndIrF5u.js";import{s as l}from"./api-CkcA6Nrp.js";import{C as h}from"./CustomHomepageGrid-tkCKTPCC.js";import{H as f,a as u}from"./plugin-CiFGwJvS.js";import{e as y}from"./routes-jaryzysS.js";import{s as w}from"./StarredEntitiesApi-9CrTHCfs.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-BvuT0Te7.js";import"./useIsomorphicLayoutEffect-6Fynx8Lg.js";import"./useAnalytics-6w7twaBy.js";import"./useAsync-BUWxRdKg.js";import"./useMountedState-CZfGw8DF.js";import"./componentData-CZLmI_Bg.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-MUA7jQ1z.js";import"./useApp-DWoVMNMG.js";import"./index-CGnaL6WJ.js";import"./Plugin-sf3Mc4ko.js";import"./useRouteRef-DgXDPcUw.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-DM7u-IkY.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-DQpFArqy.js";import"./Grid-jWNlySLb.js";import"./Box-DraZup6g.js";import"./styled-DKDAvYRr.js";import"./TextField-BHRF6Ssf.js";import"./Select-Cl2jJPAT.js";import"./index-DnL3XN75.js";import"./Popover-Da53lhhD.js";import"./Modal-BsquyvUk.js";import"./Portal-Cv57nohz.js";import"./List-BxiaGTP_.js";import"./ListContext-Csw49CaR.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-D9jIcl02.js";import"./FormLabel-QscWs4q9.js";import"./InputLabel-BIgW7L-8.js";import"./ListItem-qaMppy6r.js";import"./ListItemIcon-whsTBAXG.js";import"./ListItemText-BR22Cd7n.js";import"./Remove-Bmtpi3lO.js";import"./useCopyToClipboard-bKiMgxyz.js";import"./Button-DQgSH3ep.js";import"./Divider-CiInb0fJ.js";import"./FormControlLabel-BBNrdSEa.js";import"./Checkbox-BB8SyTwl.js";import"./SwitchBase-sOOY2yn9.js";import"./RadioGroup-DI3OcboU.js";import"./MenuItem-bCoddVJK.js";import"./translation-O1QjaDJx.js";import"./DialogTitle-Bs7FxcpM.js";import"./Backdrop-rD7ReIhb.js";import"./Tooltip-DGSrdRU4.js";import"./Popper-CsrQ0e5W.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-wqHLMCwv.js";import"./Edit-cfovlTiy.js";import"./Cancel-C_NF01Pz.js";import"./Progress-BF46Dnzh.js";import"./LinearProgress-C141zAL5.js";import"./ContentHeader-BFQGzOfZ.js";import"./Helmet-CDl6w9UR.js";import"./ErrorBoundary-DrXe1ibM.js";import"./ErrorPanel-D-43awA6.js";import"./WarningPanel-DMIuvA07.js";import"./ExpandMore-DWm0slGh.js";import"./AccordionDetails-DvdI3z34.js";import"./Collapse-DuR5UXJN.js";import"./MarkdownContent-BqcP8WUC.js";import"./CodeSnippet-Di1SljWV.js";import"./CopyTextButton-DfIIVZ4B.js";import"./LinkButton-CxCEP9Aw.js";import"./Link-0czgN89A.js";import"./useElementFilter-asYMwFkj.js";import"./InfoCard-BP0dGgWk.js";import"./CardContent-DXGZbcGr.js";import"./CardHeader-BjT8rmwI.js";import"./CardActions-BCFls5V4.js";import"./BottomLink-DX_zQi-m.js";import"./ArrowForward-C5sQbe5V.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
