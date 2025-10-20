import{j as e}from"./iframe-DRkdG3e7.js";import{C as t}from"./Collapsible-f0bRPZBd.js";import{B as n}from"./Button-C6td5q7k.js";import{B as l}from"./Box-CS3hewgS.js";import{T as a}from"./Text-BN0Ju57F.js";import{V as p,f as d}from"./index-Dz0edcfd.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./useStyles-JllvZotu.js";import"./useAnimationsFinished-DoOALjje.js";import"./Button-7v72ENDr.js";import"./utils-Do8wdv2E.js";import"./Hidden-DXPHu43e.js";import"./useFocusRing-DcL9jFdt.js";import"./usePress-B_v-tpR2.js";import"./Button.module-BHYJStbY.js";const O={title:"Backstage UI/Collapsible",component:t.Root},r={args:{style:{display:"flex",flexDirection:"column",gap:"var(--bui-space-2)",alignItems:"center"},children:e.jsxs(e.Fragment,{children:[e.jsx(t.Trigger,{render:(i,s)=>e.jsx(n,{variant:"secondary",iconEnd:s.open?e.jsx(p,{}):e.jsx(d,{}),...i,children:s.open?"Close Panel":"Open Panel"})}),e.jsx(t.Panel,{children:e.jsxs(l,{p:"4",style:{border:"1px solid var(--bui-border)",backgroundColor:"var(--bui-bg-surface-1)",color:"var(--bui-fg-primary)",borderRadius:"var(--bui-radius-2)",width:"460px"},children:[e.jsx(a,{children:"It's the edge of the world and all of Western civilization"}),e.jsx(a,{children:"The sun may rise in the East, at least it settled in a final location"}),e.jsx(a,{children:"It's understood that Hollywood sells Californication"})]})})]})}},o={args:{...r.args,defaultOpen:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--bui-space-2)',
      alignItems: 'center'
    },
    children: <>
        <Collapsible.Trigger render={(props, state) => <Button variant="secondary" iconEnd={state.open ? <RiArrowUpSLine /> : <RiArrowDownSLine />} {...props}>
              {state.open ? 'Close Panel' : 'Open Panel'}
            </Button>} />
        <Collapsible.Panel>
          <Box p="4" style={{
          border: '1px solid var(--bui-border)',
          backgroundColor: 'var(--bui-bg-surface-1)',
          color: 'var(--bui-fg-primary)',
          borderRadius: 'var(--bui-radius-2)',
          width: '460px'
        }}>
            <Text>
              It's the edge of the world and all of Western civilization
            </Text>
            <Text>
              The sun may rise in the East, at least it settled in a final
              location
            </Text>
            <Text>It's understood that Hollywood sells Californication</Text>
          </Box>
        </Collapsible.Panel>
      </>
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultOpen: true
  }
}`,...o.parameters?.docs?.source}}};const P=["Default","Open"];export{r as Default,o as Open,P as __namedExportsOrder,O as default};
