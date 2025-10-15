import{j as o}from"./iframe-DB3V3M1P.js";import{c as e}from"./plugin-DdkB01Wk.js";import{S as l}from"./Grid-CfknRkjJ.js";import{C as m}from"./ComponentAccordion-Bicyn3I9.js";import{w as a}from"./appWrappers-BeCDEZsw.js";import{T as i}from"./TemplateBackstageLogoIcon-DXtdwO35.js";import{I as s}from"./InfoCard-DvK2mKhQ.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-B7nbzp0m.js";import"./componentData-mQLuWRkV.js";import"./useAnalytics-B8Co1Zeu.js";import"./useApp-B-eWZbLz.js";import"./useRouteRef-B1SGR72k.js";import"./index-Du1GFH8T.js";import"./DialogTitle-CqBGrpPf.js";import"./Modal-DIoR7U7c.js";import"./Portal-gznPE8xU.js";import"./Backdrop-BiEfipJS.js";import"./Button-Ko4eMR9b.js";import"./useObservable-Yiafstbl.js";import"./useIsomorphicLayoutEffect-iZVaeubF.js";import"./ExpandMore-pvULPvYF.js";import"./AccordionDetails-CzfPBmnh.js";import"./index-DnL3XN75.js";import"./Collapse-DjcoKmaX.js";import"./useAsync-_mGEXzu1.js";import"./useMountedState-DeruiZOZ.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-DavYAT72.js";import"./ErrorBoundary-BWcekGKL.js";import"./ErrorPanel-BOiEIrrC.js";import"./WarningPanel-BH0EFZqv.js";import"./MarkdownContent-Bine1RhI.js";import"./CodeSnippet-7m8fnh0J.js";import"./Box-0UP6uhAK.js";import"./styled-BOZdy0F_.js";import"./CopyTextButton-CCCiwQrJ.js";import"./useCopyToClipboard-BE6hxvvA.js";import"./Tooltip-V48XKOvh.js";import"./Popper-BQ7Pkv4c.js";import"./List-DSugy7pP.js";import"./ListContext-DsqJshhp.js";import"./ListItem-DNGvtZA3.js";import"./ListItemText-D8nWU1aE.js";import"./LinkButton-DLHe3OPB.js";import"./Link-RVX05V_6.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-WVo9nPxM.js";import"./Divider-kPhQi6o2.js";import"./CardActions-KP1Qe3Re.js";import"./BottomLink-BwFpKE2c.js";import"./ArrowForward-B7wbdPql.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Grid item xs={12} md={6}>
      <HomePageToolkit tools={Array(8).fill({
      url: '#',
      label: 'link',
      icon: <TemplateBackstageLogoIcon />
    })} />
    </Grid>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const ExpandedComponentAccordion = (props: any) => <ComponentAccordion expanded {...props} />;
  return <InfoCard title="Toolkit" noPadding>
      <Grid item>
        <HomePageToolkit title="Tools 1" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ExpandedComponentAccordion} />
        <HomePageToolkit title="Tools 2" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ComponentAccordion} />
        <HomePageToolkit title="Tools 3" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ComponentAccordion} />
      </Grid>
    </InfoCard>;
}`,...t.parameters?.docs?.source}}};const uo=["Default","InAccordion"];export{r as Default,t as InAccordion,uo as __namedExportsOrder,co as default};
