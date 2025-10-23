import{j as o}from"./iframe-B5rMEWCp.js";import{c as e}from"./plugin-CiFGwJvS.js";import{S as l}from"./Grid-jWNlySLb.js";import{C as m}from"./ComponentAccordion-C1q5TTS3.js";import{w as a}from"./appWrappers-B511bzGN.js";import{T as i}from"./TemplateBackstageLogoIcon-BVsvVyXb.js";import{I as s}from"./InfoCard-BP0dGgWk.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-sf3Mc4ko.js";import"./componentData-CZLmI_Bg.js";import"./useAnalytics-6w7twaBy.js";import"./useApp-DWoVMNMG.js";import"./useRouteRef-DgXDPcUw.js";import"./index-MUA7jQ1z.js";import"./DialogTitle-Bs7FxcpM.js";import"./Modal-BsquyvUk.js";import"./Portal-Cv57nohz.js";import"./Backdrop-rD7ReIhb.js";import"./Button-DQgSH3ep.js";import"./useObservable-BvuT0Te7.js";import"./useIsomorphicLayoutEffect-6Fynx8Lg.js";import"./ExpandMore-DWm0slGh.js";import"./AccordionDetails-DvdI3z34.js";import"./index-DnL3XN75.js";import"./Collapse-DuR5UXJN.js";import"./useAsync-BUWxRdKg.js";import"./useMountedState-CZfGw8DF.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-DXGZbcGr.js";import"./ErrorBoundary-DrXe1ibM.js";import"./ErrorPanel-D-43awA6.js";import"./WarningPanel-DMIuvA07.js";import"./MarkdownContent-BqcP8WUC.js";import"./CodeSnippet-Di1SljWV.js";import"./Box-DraZup6g.js";import"./styled-DKDAvYRr.js";import"./CopyTextButton-DfIIVZ4B.js";import"./useCopyToClipboard-bKiMgxyz.js";import"./Tooltip-DGSrdRU4.js";import"./Popper-CsrQ0e5W.js";import"./List-BxiaGTP_.js";import"./ListContext-Csw49CaR.js";import"./ListItem-qaMppy6r.js";import"./ListItemText-BR22Cd7n.js";import"./LinkButton-CxCEP9Aw.js";import"./Link-0czgN89A.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-BjT8rmwI.js";import"./Divider-CiInb0fJ.js";import"./CardActions-BCFls5V4.js";import"./BottomLink-DX_zQi-m.js";import"./ArrowForward-C5sQbe5V.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
