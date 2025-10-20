import{j as t,T as a,c,C as g,m as l}from"./iframe-DRkdG3e7.js";import{b as i,r as d}from"./plugin-CwRHGhC4.js";import{S as s}from"./Grid-DdhP03dT.js";import{w as u}from"./appWrappers-BiQeAojd.js";import{T as f}from"./TemplateBackstageLogo-D-GuHlsx.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-D_IkCYwK.js";import"./componentData-BPiMkAmd.js";import"./useAnalytics-D4adgS3v.js";import"./useApp-5eUlhv-k.js";import"./useRouteRef-DcqwsiFO.js";import"./index-DZ62LnLt.js";import"./InfoCard-BxigKyxf.js";import"./CardContent-BeXxkZYJ.js";import"./ErrorBoundary-DdhkHI6v.js";import"./ErrorPanel-BBpp51Nq.js";import"./WarningPanel-BnRYyNkG.js";import"./ExpandMore-U_4OslcK.js";import"./AccordionDetails-0d2mj9Vr.js";import"./index-DnL3XN75.js";import"./Collapse-KAzvoK9L.js";import"./MarkdownContent-e513bAJk.js";import"./CodeSnippet-CuKDja7G.js";import"./Box-DaHRDmmG.js";import"./styled-6jkyVhJx.js";import"./CopyTextButton-1OFqlaqt.js";import"./useCopyToClipboard-Bz2N619O.js";import"./useMountedState-BzKksOdK.js";import"./Tooltip-COGr6yaA.js";import"./Popper-xbOvXIVU.js";import"./Portal-B7yT6sF2.js";import"./List-T0-85Df0.js";import"./ListContext-Cal3OaXT.js";import"./ListItem-C5uPx8az.js";import"./ListItemText-CTmnA9Vi.js";import"./LinkButton-XfOuTa1v.js";import"./Button-SoqA5iQw.js";import"./Link-D0rSWwVe.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-Ukn01Zly.js";import"./Divider-CNFq1GCr.js";import"./CardActions-FNmQIM1F.js";import"./BottomLink-BM_qCnuS.js";import"./ArrowForward-4uDg3mqy.js";import"./DialogTitle-CRvUdxOU.js";import"./Modal-BuulqZEo.js";import"./Backdrop-CEKLn6o-.js";import"./useObservable-77iucGGI.js";import"./useIsomorphicLayoutEffect-Bk6oB7m6.js";import"./useAsync-BIYzE4vq.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
