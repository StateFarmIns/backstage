import{j as t,T as a,c,C as g,m as l}from"./iframe-DB3V3M1P.js";import{b as i,r as d}from"./plugin-DdkB01Wk.js";import{S as s}from"./Grid-CfknRkjJ.js";import{w as u}from"./appWrappers-BeCDEZsw.js";import{T as f}from"./TemplateBackstageLogo-BgC8jvXB.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-B7nbzp0m.js";import"./componentData-mQLuWRkV.js";import"./useAnalytics-B8Co1Zeu.js";import"./useApp-B-eWZbLz.js";import"./useRouteRef-B1SGR72k.js";import"./index-Du1GFH8T.js";import"./InfoCard-DvK2mKhQ.js";import"./CardContent-DavYAT72.js";import"./ErrorBoundary-BWcekGKL.js";import"./ErrorPanel-BOiEIrrC.js";import"./WarningPanel-BH0EFZqv.js";import"./ExpandMore-pvULPvYF.js";import"./AccordionDetails-CzfPBmnh.js";import"./index-DnL3XN75.js";import"./Collapse-DjcoKmaX.js";import"./MarkdownContent-Bine1RhI.js";import"./CodeSnippet-7m8fnh0J.js";import"./Box-0UP6uhAK.js";import"./styled-BOZdy0F_.js";import"./CopyTextButton-CCCiwQrJ.js";import"./useCopyToClipboard-BE6hxvvA.js";import"./useMountedState-DeruiZOZ.js";import"./Tooltip-V48XKOvh.js";import"./Popper-BQ7Pkv4c.js";import"./Portal-gznPE8xU.js";import"./List-DSugy7pP.js";import"./ListContext-DsqJshhp.js";import"./ListItem-DNGvtZA3.js";import"./ListItemText-D8nWU1aE.js";import"./LinkButton-DLHe3OPB.js";import"./Button-Ko4eMR9b.js";import"./Link-RVX05V_6.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-WVo9nPxM.js";import"./Divider-kPhQi6o2.js";import"./CardActions-KP1Qe3Re.js";import"./BottomLink-BwFpKE2c.js";import"./ArrowForward-B7wbdPql.js";import"./DialogTitle-CqBGrpPf.js";import"./Modal-DIoR7U7c.js";import"./Backdrop-BiEfipJS.js";import"./useObservable-Yiafstbl.js";import"./useIsomorphicLayoutEffect-iZVaeubF.js";import"./useAsync-_mGEXzu1.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
