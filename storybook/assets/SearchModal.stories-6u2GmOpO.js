import{j as t,m as d,I as u,b as h,T as g}from"./iframe-DRkdG3e7.js";import{r as x}from"./plugin-B4d-dnMk.js";import{S as m,u as n,a as S}from"./useSearchModal-BOvcWQix.js";import{B as c}from"./Button-SoqA5iQw.js";import{a as f,b as M,c as j}from"./DialogTitle-CRvUdxOU.js";import{B as C}from"./Box-DaHRDmmG.js";import{S as r}from"./Grid-DdhP03dT.js";import{S as y}from"./SearchType-DLvI15qP.js";import{L as I}from"./List-T0-85Df0.js";import{H as R}from"./DefaultResultListItem-8IWN34uK.js";import{s as B,M as D}from"./api-CMUBJ6LB.js";import{S as T}from"./SearchContext-PUx9mfoy.js";import{w as k}from"./appWrappers-BiQeAojd.js";import{SearchBar as v}from"./SearchBar-D1YWGDgv.js";import{a as b}from"./SearchResult-BGv6aQLd.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CCQNQAX7.js";import"./Plugin-D_IkCYwK.js";import"./componentData-BPiMkAmd.js";import"./useAnalytics-D4adgS3v.js";import"./useApp-5eUlhv-k.js";import"./useRouteRef-DcqwsiFO.js";import"./index-DZ62LnLt.js";import"./ArrowForward-4uDg3mqy.js";import"./translation-BNiQEW_u.js";import"./Page-UNMNBrNq.js";import"./useMediaQuery-CaqT71cc.js";import"./Divider-CNFq1GCr.js";import"./ArrowBackIos-Ci26ZX0m.js";import"./ArrowForwardIos-CNYdIgAQ.js";import"./translation-C0NR9Nhx.js";import"./Modal-BuulqZEo.js";import"./Portal-B7yT6sF2.js";import"./Backdrop-CEKLn6o-.js";import"./styled-6jkyVhJx.js";import"./ExpandMore-U_4OslcK.js";import"./useAsync-BIYzE4vq.js";import"./useMountedState-BzKksOdK.js";import"./AccordionDetails-0d2mj9Vr.js";import"./index-DnL3XN75.js";import"./Collapse-KAzvoK9L.js";import"./ListItem-C5uPx8az.js";import"./ListContext-Cal3OaXT.js";import"./ListItemIcon-D68-Mdi-.js";import"./ListItemText-CTmnA9Vi.js";import"./Tabs-BqgPMFQS.js";import"./KeyboardArrowRight-CzUq_csx.js";import"./FormLabel-flhUnr5Z.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-BHbMEs79.js";import"./InputLabel-D_LMyGxM.js";import"./Select-DMurkJQJ.js";import"./Popover-B-X0WTTG.js";import"./MenuItem-D7FbLLQ2.js";import"./Checkbox-fWYveStV.js";import"./SwitchBase-DPTxtlNj.js";import"./Chip-Dg7_wtsV.js";import"./Link-D0rSWwVe.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-77iucGGI.js";import"./useIsomorphicLayoutEffect-Bk6oB7m6.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-DXEUI6V5.js";import"./useDebounce-BM7lQ8Bb.js";import"./InputAdornment-CHqsG5Hq.js";import"./TextField-Dn8V5DtN.js";import"./useElementFilter-BcMA-BWu.js";import"./EmptyState-BVXmxYVQ.js";import"./Progress-Df4nRmK_.js";import"./LinearProgress-DrDvNLQs.js";import"./ResponseErrorPanel-D4jZtsap.js";import"./ErrorPanel-BBpp51Nq.js";import"./WarningPanel-BnRYyNkG.js";import"./MarkdownContent-e513bAJk.js";import"./CodeSnippet-CuKDja7G.js";import"./CopyTextButton-1OFqlaqt.js";import"./useCopyToClipboard-Bz2N619O.js";import"./Tooltip-COGr6yaA.js";import"./Popper-xbOvXIVU.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
