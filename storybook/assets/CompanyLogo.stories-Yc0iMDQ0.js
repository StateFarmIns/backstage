import{j as t,T as a,c,C as g,m as l}from"./iframe-B5rMEWCp.js";import{b as i,r as d}from"./plugin-CiFGwJvS.js";import{S as s}from"./Grid-jWNlySLb.js";import{w as u}from"./appWrappers-B511bzGN.js";import{T as f}from"./TemplateBackstageLogo-iauOVHXi.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-sf3Mc4ko.js";import"./componentData-CZLmI_Bg.js";import"./useAnalytics-6w7twaBy.js";import"./useApp-DWoVMNMG.js";import"./useRouteRef-DgXDPcUw.js";import"./index-MUA7jQ1z.js";import"./InfoCard-BP0dGgWk.js";import"./CardContent-DXGZbcGr.js";import"./ErrorBoundary-DrXe1ibM.js";import"./ErrorPanel-D-43awA6.js";import"./WarningPanel-DMIuvA07.js";import"./ExpandMore-DWm0slGh.js";import"./AccordionDetails-DvdI3z34.js";import"./index-DnL3XN75.js";import"./Collapse-DuR5UXJN.js";import"./MarkdownContent-BqcP8WUC.js";import"./CodeSnippet-Di1SljWV.js";import"./Box-DraZup6g.js";import"./styled-DKDAvYRr.js";import"./CopyTextButton-DfIIVZ4B.js";import"./useCopyToClipboard-bKiMgxyz.js";import"./useMountedState-CZfGw8DF.js";import"./Tooltip-DGSrdRU4.js";import"./Popper-CsrQ0e5W.js";import"./Portal-Cv57nohz.js";import"./List-BxiaGTP_.js";import"./ListContext-Csw49CaR.js";import"./ListItem-qaMppy6r.js";import"./ListItemText-BR22Cd7n.js";import"./LinkButton-CxCEP9Aw.js";import"./Button-DQgSH3ep.js";import"./Link-0czgN89A.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-BjT8rmwI.js";import"./Divider-CiInb0fJ.js";import"./CardActions-BCFls5V4.js";import"./BottomLink-DX_zQi-m.js";import"./ArrowForward-C5sQbe5V.js";import"./DialogTitle-Bs7FxcpM.js";import"./Modal-BsquyvUk.js";import"./Backdrop-rD7ReIhb.js";import"./useObservable-BvuT0Te7.js";import"./useIsomorphicLayoutEffect-6Fynx8Lg.js";import"./useAsync-BUWxRdKg.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    container
  } = useLogoStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo className={container} />
    </Grid>;
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const {
    container,
    svg,
    path
  } = useLogoStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo className={container} logo={<TemplateBackstageLogo classes={{
      svg,
      path
    }} />} />
    </Grid>;
}`,...e.parameters?.docs?.source}}};const Co=["Default","CustomLogo"];export{e as CustomLogo,r as Default,Co as __namedExportsOrder,yo as default};
