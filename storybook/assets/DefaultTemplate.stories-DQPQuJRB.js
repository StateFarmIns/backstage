import{j as t,T as p,c,C as l,m as i,a as d}from"./iframe-DB3V3M1P.js";import{s as g,H as u}from"./plugin-DekLzjP_.js";import{c as h}from"./api-Cs4Bh5_L.js";import{c as f}from"./catalogApiMock-B7rvYdpz.js";import{s as x}from"./api-Omokc20s.js";import{S as y}from"./SearchContext-e_b_Cjh4.js";import{P as S}from"./Page-GHVKG3qM.js";import{S as r}from"./Grid-CfknRkjJ.js";import{b as k,a as j,c as C}from"./plugin-DdkB01Wk.js";import{T as P}from"./TemplateBackstageLogo-BgC8jvXB.js";import{T}from"./TemplateBackstageLogoIcon-DXtdwO35.js";import{e as I}from"./routes-DeFyM09r.js";import{w as v}from"./appWrappers-BeCDEZsw.js";import{s as G}from"./StarredEntitiesApi-DZVWj0uK.js";import{M as A}from"./MockStarredEntitiesApi-DPo2I5up.js";import{I as B}from"./InfoCard-DvK2mKhQ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-ifvX4xvl.js";import"./Plugin-B7nbzp0m.js";import"./componentData-mQLuWRkV.js";import"./useAnalytics-B8Co1Zeu.js";import"./useApp-B-eWZbLz.js";import"./useRouteRef-B1SGR72k.js";import"./index-Du1GFH8T.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./useAsync-_mGEXzu1.js";import"./useMountedState-DeruiZOZ.js";import"./DialogTitle-CqBGrpPf.js";import"./Modal-DIoR7U7c.js";import"./Portal-gznPE8xU.js";import"./Backdrop-BiEfipJS.js";import"./Button-Ko4eMR9b.js";import"./useObservable-Yiafstbl.js";import"./useIsomorphicLayoutEffect-iZVaeubF.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-DavYAT72.js";import"./ErrorBoundary-BWcekGKL.js";import"./ErrorPanel-BOiEIrrC.js";import"./WarningPanel-BH0EFZqv.js";import"./ExpandMore-pvULPvYF.js";import"./AccordionDetails-CzfPBmnh.js";import"./index-DnL3XN75.js";import"./Collapse-DjcoKmaX.js";import"./MarkdownContent-Bine1RhI.js";import"./CodeSnippet-7m8fnh0J.js";import"./Box-0UP6uhAK.js";import"./styled-BOZdy0F_.js";import"./CopyTextButton-CCCiwQrJ.js";import"./useCopyToClipboard-BE6hxvvA.js";import"./Tooltip-V48XKOvh.js";import"./Popper-BQ7Pkv4c.js";import"./List-DSugy7pP.js";import"./ListContext-DsqJshhp.js";import"./ListItem-DNGvtZA3.js";import"./ListItemText-D8nWU1aE.js";import"./LinkButton-DLHe3OPB.js";import"./Link-RVX05V_6.js";import"./CardHeader-WVo9nPxM.js";import"./Divider-kPhQi6o2.js";import"./CardActions-KP1Qe3Re.js";import"./BottomLink-BwFpKE2c.js";import"./ArrowForward-B7wbdPql.js";const b=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],E=f({entities:b}),a=new A;a.toggleStarred("component:default/example-starred-entity");a.toggleStarred("component:default/example-starred-entity-2");a.toggleStarred("component:default/example-starred-entity-3");a.toggleStarred("component:default/example-starred-entity-4");const Wt={title:"Plugins/Home/Templates",decorators:[e=>v(t.jsx(t.Fragment,{children:t.jsx(p,{apis:[[h,E],[G,a],[x,{query:()=>Promise.resolve({results:[]})}],[c,new l({stackoverflow:{baseUrl:"https://api.stackexchange.com/2.2"}})]],children:t.jsx(e,{})})}),{mountedRoutes:{"/hello-company":g.routes.root,"/catalog/:namespace/:kind/:name":I}})]},H=i(e=>({searchBarInput:{maxWidth:"60vw",margin:"auto",backgroundColor:e.palette.background.paper,borderRadius:"50px",boxShadow:e.shadows[1]},searchBarOutline:{borderStyle:"none"}})),R=i(e=>({container:{margin:e.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),o=()=>{const e=H(),{svg:s,path:n,container:m}=R();return t.jsx(y,{children:t.jsx(S,{themeId:"home",children:t.jsx(d,{children:t.jsxs(r,{container:!0,justifyContent:"center",spacing:6,children:[t.jsx(k,{className:m,logo:t.jsx(P,{classes:{svg:s,path:n}})}),t.jsx(r,{container:!0,item:!0,xs:12,justifyContent:"center",children:t.jsx(u,{InputProps:{classes:{root:e.searchBarInput,notchedOutline:e.searchBarOutline}},placeholder:"Search"})}),t.jsxs(r,{container:!0,item:!0,xs:12,children:[t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(j,{})}),t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(C,{tools:Array(8).fill({url:"#",label:"link",icon:t.jsx(T,{})})})}),t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(B,{title:"Composable Section",children:t.jsx("div",{style:{height:370}})})})]})]})})})})};o.__docgenInfo={description:"",methods:[],displayName:"DefaultTemplate"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const {
    svg,
    path,
    container
  } = useLogoStyles();
  return <SearchContextProvider>
      <Page themeId="home">
        <Content>
          <Grid container justifyContent="center" spacing={6}>
            <HomePageCompanyLogo className={container} logo={<TemplateBackstageLogo classes={{
            svg,
            path
          }} />} />
            <Grid container item xs={12} justifyContent="center">
              <HomePageSearchBar InputProps={{
              classes: {
                root: classes.searchBarInput,
                notchedOutline: classes.searchBarOutline
              }
            }} placeholder="Search" />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageToolkit tools={Array(8).fill({
                url: '#',
                label: 'link',
                icon: <TemplateBackstageLogoIcon />
              })} />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard title="Composable Section">
                  {/* placeholder for content */}
                  <div style={{
                  height: 370
                }} />
                </InfoCard>
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>;
}`,...o.parameters?.docs?.source}}};const zt=["DefaultTemplate"];export{o as DefaultTemplate,zt as __namedExportsOrder,Wt as default};
