import{j as o}from"./iframe-DRkdG3e7.js";import{c as e}from"./plugin-CwRHGhC4.js";import{S as l}from"./Grid-DdhP03dT.js";import{C as m}from"./ComponentAccordion-4RQ4w1rp.js";import{w as a}from"./appWrappers-BiQeAojd.js";import{T as i}from"./TemplateBackstageLogoIcon-DShzMaCR.js";import{I as s}from"./InfoCard-BxigKyxf.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-D_IkCYwK.js";import"./componentData-BPiMkAmd.js";import"./useAnalytics-D4adgS3v.js";import"./useApp-5eUlhv-k.js";import"./useRouteRef-DcqwsiFO.js";import"./index-DZ62LnLt.js";import"./DialogTitle-CRvUdxOU.js";import"./Modal-BuulqZEo.js";import"./Portal-B7yT6sF2.js";import"./Backdrop-CEKLn6o-.js";import"./Button-SoqA5iQw.js";import"./useObservable-77iucGGI.js";import"./useIsomorphicLayoutEffect-Bk6oB7m6.js";import"./ExpandMore-U_4OslcK.js";import"./AccordionDetails-0d2mj9Vr.js";import"./index-DnL3XN75.js";import"./Collapse-KAzvoK9L.js";import"./useAsync-BIYzE4vq.js";import"./useMountedState-BzKksOdK.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-BeXxkZYJ.js";import"./ErrorBoundary-DdhkHI6v.js";import"./ErrorPanel-BBpp51Nq.js";import"./WarningPanel-BnRYyNkG.js";import"./MarkdownContent-e513bAJk.js";import"./CodeSnippet-CuKDja7G.js";import"./Box-DaHRDmmG.js";import"./styled-6jkyVhJx.js";import"./CopyTextButton-1OFqlaqt.js";import"./useCopyToClipboard-Bz2N619O.js";import"./Tooltip-COGr6yaA.js";import"./Popper-xbOvXIVU.js";import"./List-T0-85Df0.js";import"./ListContext-Cal3OaXT.js";import"./ListItem-C5uPx8az.js";import"./ListItemText-CTmnA9Vi.js";import"./LinkButton-XfOuTa1v.js";import"./Link-D0rSWwVe.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-Ukn01Zly.js";import"./Divider-CNFq1GCr.js";import"./CardActions-FNmQIM1F.js";import"./BottomLink-BM_qCnuS.js";import"./ArrowForward-4uDg3mqy.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
