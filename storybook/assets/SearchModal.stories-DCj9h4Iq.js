import{j as t,m as d,I as u,b as h,T as g}from"./iframe-DB3V3M1P.js";import{r as x}from"./plugin-DekLzjP_.js";import{S as m,u as n,a as S}from"./useSearchModal-C_owTNQg.js";import{B as c}from"./Button-Ko4eMR9b.js";import{a as f,b as M,c as j}from"./DialogTitle-CqBGrpPf.js";import{B as C}from"./Box-0UP6uhAK.js";import{S as r}from"./Grid-CfknRkjJ.js";import{S as y}from"./SearchType-CkwTD_3-.js";import{L as I}from"./List-DSugy7pP.js";import{H as R}from"./DefaultResultListItem-C07JS46R.js";import{s as B,M as D}from"./api-Omokc20s.js";import{S as T}from"./SearchContext-e_b_Cjh4.js";import{w as k}from"./appWrappers-BeCDEZsw.js";import{SearchBar as v}from"./SearchBar-CvuuqyuZ.js";import{a as b}from"./SearchResult-Cg0SgqJG.js";import"./preload-helper-D9Z9MdNV.js";import"./index-ifvX4xvl.js";import"./Plugin-B7nbzp0m.js";import"./componentData-mQLuWRkV.js";import"./useAnalytics-B8Co1Zeu.js";import"./useApp-B-eWZbLz.js";import"./useRouteRef-B1SGR72k.js";import"./index-Du1GFH8T.js";import"./ArrowForward-B7wbdPql.js";import"./translation-Cw9mqKsq.js";import"./Page-DE0PgqzH.js";import"./useMediaQuery-Dww4fk3e.js";import"./Divider-kPhQi6o2.js";import"./ArrowBackIos-Cv6OFlE_.js";import"./ArrowForwardIos-VJN6tVS9.js";import"./translation-Czk3Qh9Y.js";import"./Modal-DIoR7U7c.js";import"./Portal-gznPE8xU.js";import"./Backdrop-BiEfipJS.js";import"./styled-BOZdy0F_.js";import"./ExpandMore-pvULPvYF.js";import"./useAsync-_mGEXzu1.js";import"./useMountedState-DeruiZOZ.js";import"./AccordionDetails-CzfPBmnh.js";import"./index-DnL3XN75.js";import"./Collapse-DjcoKmaX.js";import"./ListItem-DNGvtZA3.js";import"./ListContext-DsqJshhp.js";import"./ListItemIcon-CXpX-vW7.js";import"./ListItemText-D8nWU1aE.js";import"./Tabs-C0Lp1Mja.js";import"./KeyboardArrowRight-CLaaaVJ1.js";import"./FormLabel-VMGDyE8O.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-B-HcGT8J.js";import"./InputLabel-BngUTZmP.js";import"./Select-CgxMBjvC.js";import"./Popover-BMFySmHA.js";import"./MenuItem-C4JFIfLM.js";import"./Checkbox-CBHZni_L.js";import"./SwitchBase-D2L2W6EG.js";import"./Chip-V4XntPM6.js";import"./Link-RVX05V_6.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-Yiafstbl.js";import"./useIsomorphicLayoutEffect-iZVaeubF.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-BBcn8_tK.js";import"./useDebounce-Bu2FCsK2.js";import"./InputAdornment-DrocgHX3.js";import"./TextField-C7aS7L7L.js";import"./useElementFilter-BASPgGPN.js";import"./EmptyState-I7ZtKCWX.js";import"./Progress-DAy5rVeL.js";import"./LinearProgress-Drry4w8a.js";import"./ResponseErrorPanel-B1FfyQ_d.js";import"./ErrorPanel-BOiEIrrC.js";import"./WarningPanel-BH0EFZqv.js";import"./MarkdownContent-Bine1RhI.js";import"./CodeSnippet-7m8fnh0J.js";import"./CopyTextButton-CCCiwQrJ.js";import"./useCopyToClipboard-BE6hxvvA.js";import"./Tooltip-V48XKOvh.js";import"./Popper-BQ7Pkv4c.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
