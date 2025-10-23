import{j as t,m as d,I as u,b as h,T as g}from"./iframe-B5rMEWCp.js";import{r as x}from"./plugin-Bwd1gmFI.js";import{S as m,u as n,a as S}from"./useSearchModal-Fe-GRwXt.js";import{B as c}from"./Button-DQgSH3ep.js";import{a as f,b as M,c as j}from"./DialogTitle-Bs7FxcpM.js";import{B as C}from"./Box-DraZup6g.js";import{S as r}from"./Grid-jWNlySLb.js";import{S as y}from"./SearchType-CKpv_QYw.js";import{L as I}from"./List-BxiaGTP_.js";import{H as R}from"./DefaultResultListItem-eqIvru_z.js";import{s as B,M as D}from"./api-CkcA6Nrp.js";import{S as T}from"./SearchContext-DMU1098n.js";import{w as k}from"./appWrappers-B511bzGN.js";import{SearchBar as v}from"./SearchBar-D8ygxEXj.js";import{a as b}from"./SearchResult-JDy2_1-h.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CGnaL6WJ.js";import"./Plugin-sf3Mc4ko.js";import"./componentData-CZLmI_Bg.js";import"./useAnalytics-6w7twaBy.js";import"./useApp-DWoVMNMG.js";import"./useRouteRef-DgXDPcUw.js";import"./index-MUA7jQ1z.js";import"./ArrowForward-C5sQbe5V.js";import"./translation-V3J_pvwN.js";import"./Page-Cjk1SqED.js";import"./useMediaQuery-B6YDIO6B.js";import"./Divider-CiInb0fJ.js";import"./ArrowBackIos-Bmpj1AiY.js";import"./ArrowForwardIos-Btdq3h8j.js";import"./translation-3e67e6eR.js";import"./Modal-BsquyvUk.js";import"./Portal-Cv57nohz.js";import"./Backdrop-rD7ReIhb.js";import"./styled-DKDAvYRr.js";import"./ExpandMore-DWm0slGh.js";import"./useAsync-BUWxRdKg.js";import"./useMountedState-CZfGw8DF.js";import"./AccordionDetails-DvdI3z34.js";import"./index-DnL3XN75.js";import"./Collapse-DuR5UXJN.js";import"./ListItem-qaMppy6r.js";import"./ListContext-Csw49CaR.js";import"./ListItemIcon-whsTBAXG.js";import"./ListItemText-BR22Cd7n.js";import"./Tabs-CrAC_m2e.js";import"./KeyboardArrowRight-Cw0wbTw3.js";import"./FormLabel-QscWs4q9.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-D9jIcl02.js";import"./InputLabel-BIgW7L-8.js";import"./Select-Cl2jJPAT.js";import"./Popover-Da53lhhD.js";import"./MenuItem-bCoddVJK.js";import"./Checkbox-BB8SyTwl.js";import"./SwitchBase-sOOY2yn9.js";import"./Chip-3V9waU3g.js";import"./Link-0czgN89A.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-BvuT0Te7.js";import"./useIsomorphicLayoutEffect-6Fynx8Lg.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-_SUSBVZp.js";import"./useDebounce-D-tJvECu.js";import"./InputAdornment-BYQIQ5G3.js";import"./TextField-BHRF6Ssf.js";import"./useElementFilter-asYMwFkj.js";import"./EmptyState-C0NZiAgK.js";import"./Progress-BF46Dnzh.js";import"./LinearProgress-C141zAL5.js";import"./ResponseErrorPanel-D1F2af0k.js";import"./ErrorPanel-D-43awA6.js";import"./WarningPanel-DMIuvA07.js";import"./MarkdownContent-BqcP8WUC.js";import"./CodeSnippet-Di1SljWV.js";import"./CopyTextButton-DfIIVZ4B.js";import"./useCopyToClipboard-bKiMgxyz.js";import"./Tooltip-DGSrdRU4.js";import"./Popper-CsrQ0e5W.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    state,
    toggleModal
  } = useSearchModal();
  return <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal} />
    </>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const {
    state,
    toggleModal
  } = useSearchModal();
  return <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Custom Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal}>
        {() => <>
            <DialogTitle>
              <Box className={classes.titleContainer}>
                <SearchBar className={classes.input} />

                <IconButton aria-label="close" onClick={toggleModal}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid container direction="column">
                <Grid item>
                  <SearchType.Tabs defaultValue="" types={[{
                value: 'custom-result-item',
                name: 'Custom Item'
              }, {
                value: 'no-custom-result-item',
                name: 'No Custom Item'
              }]} />
                </Grid>
                <Grid item>
                  <SearchResult>
                    {({
                  results
                }) => <List>
                        {results.map(({
                    document
                  }) => <div role="button" tabIndex={0} key={\`\${document.location}-btn\`} onClick={toggleModal} onKeyPress={toggleModal}>
                            <DefaultResultListItem key={document.location} result={document} />
                          </div>)}
                      </List>}
                  </SearchResult>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.dialogActionsContainer}>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <SearchResultPager />
                </Grid>
              </Grid>
            </DialogActions>
          </>}
      </SearchModal>
    </>;
}`,...i.parameters?.docs?.source}}};const lo=["Default","CustomModal"];export{i as CustomModal,s as Default,lo as __namedExportsOrder,ao as default};
