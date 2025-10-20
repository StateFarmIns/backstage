import{j as t,T as i,c as m,C as a}from"./iframe-DRkdG3e7.js";import{w as n}from"./appWrappers-BiQeAojd.js";import{s as p,H as s}from"./plugin-B4d-dnMk.js";import{c as d}from"./api-CQESgmzr.js";import{c}from"./catalogApiMock-CqovpDzE.js";import{M as g}from"./MockStarredEntitiesApi-kaH7JUJU.js";import{s as l}from"./api-CMUBJ6LB.js";import{C as h}from"./CustomHomepageGrid-C7loI6TD.js";import{H as f,a as u}from"./plugin-CwRHGhC4.js";import{e as y}from"./routes-BTOxkO0z.js";import{s as w}from"./StarredEntitiesApi-CGwbhSwQ.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-77iucGGI.js";import"./useIsomorphicLayoutEffect-Bk6oB7m6.js";import"./useAnalytics-D4adgS3v.js";import"./useAsync-BIYzE4vq.js";import"./useMountedState-BzKksOdK.js";import"./componentData-BPiMkAmd.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-DZ62LnLt.js";import"./useApp-5eUlhv-k.js";import"./index-CCQNQAX7.js";import"./Plugin-D_IkCYwK.js";import"./useRouteRef-DcqwsiFO.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-Ba-gC5bi.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-DXv-UWkq.js";import"./Grid-DdhP03dT.js";import"./Box-DaHRDmmG.js";import"./styled-6jkyVhJx.js";import"./TextField-Dn8V5DtN.js";import"./Select-DMurkJQJ.js";import"./index-DnL3XN75.js";import"./Popover-B-X0WTTG.js";import"./Modal-BuulqZEo.js";import"./Portal-B7yT6sF2.js";import"./List-T0-85Df0.js";import"./ListContext-Cal3OaXT.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-BHbMEs79.js";import"./FormLabel-flhUnr5Z.js";import"./InputLabel-D_LMyGxM.js";import"./ListItem-C5uPx8az.js";import"./ListItemIcon-D68-Mdi-.js";import"./ListItemText-CTmnA9Vi.js";import"./Remove-Bo0wAyD8.js";import"./useCopyToClipboard-Bz2N619O.js";import"./Button-SoqA5iQw.js";import"./Divider-CNFq1GCr.js";import"./FormControlLabel-B5K-eIUg.js";import"./Checkbox-fWYveStV.js";import"./SwitchBase-DPTxtlNj.js";import"./RadioGroup-ClNH_HUg.js";import"./MenuItem-D7FbLLQ2.js";import"./translation-B19BBo-n.js";import"./DialogTitle-CRvUdxOU.js";import"./Backdrop-CEKLn6o-.js";import"./Tooltip-COGr6yaA.js";import"./Popper-xbOvXIVU.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-eL511Gan.js";import"./Edit-o1wNzV4S.js";import"./Cancel-vELaHaqQ.js";import"./Progress-Df4nRmK_.js";import"./LinearProgress-DrDvNLQs.js";import"./ContentHeader-Bxt4hxYi.js";import"./Helmet-ZQIOoyK3.js";import"./ErrorBoundary-DdhkHI6v.js";import"./ErrorPanel-BBpp51Nq.js";import"./WarningPanel-BnRYyNkG.js";import"./ExpandMore-U_4OslcK.js";import"./AccordionDetails-0d2mj9Vr.js";import"./Collapse-KAzvoK9L.js";import"./MarkdownContent-e513bAJk.js";import"./CodeSnippet-CuKDja7G.js";import"./CopyTextButton-1OFqlaqt.js";import"./LinkButton-XfOuTa1v.js";import"./Link-D0rSWwVe.js";import"./useElementFilter-BcMA-BWu.js";import"./InfoCard-BxigKyxf.js";import"./CardContent-BeXxkZYJ.js";import"./CardHeader-Ukn01Zly.js";import"./CardActions-FNmQIM1F.js";import"./BottomLink-BM_qCnuS.js";import"./ArrowForward-4uDg3mqy.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
