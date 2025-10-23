import{j as e}from"./iframe-B5rMEWCp.js";import{V as n}from"./VisuallyHidden-DXTlkPp7.js";import{T as s}from"./Text-Vtt0Xsyt.js";import{F as t}from"./Flex-D1MPskRw.js";import"./preload-helper-D9Z9MdNV.js";import"./useStyles-CBH6FDUm.js";import"./clsx-B-dksMZM.js";const x={title:"Backstage UI/VisuallyHidden",component:n,parameters:{docs:{description:{component:"Visually hides content while keeping it accessible to screen readers. Commonly used for descriptive labels, and other screen-reader-only content."}}}},r={render:()=>e.jsxs(t,{direction:"column",gap:"4",children:[e.jsx(s,{as:"p",children:"This text is followed by a paragraph that is visually hidden but accessible to screen readers. Try using a screen reader to hear it, or inspect the DOM to see it's there."}),e.jsx(n,{children:"This content is visually hidden but accessible to screen readers"})]})},a={render:()=>e.jsxs(t,{direction:"column",gap:"4",children:[e.jsx(n,{children:e.jsx(s,{as:"h2",children:"Footer links"})}),e.jsx(s,{as:"p",children:e.jsx("a",{href:"#",children:"About us"})}),e.jsx(s,{as:"p",children:e.jsx("a",{href:"#",children:"Jobs"})}),e.jsx(s,{as:"p",children:e.jsx("a",{href:"#",children:"Terms and Conditions"})}),e.jsx(s,{as:"p",variant:"body-small",color:"secondary",children:'(Screen readers hear: "Footer links" followed by the list of links)'})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4">
      <Text as="p">
        This text is followed by a paragraph that is visually hidden but
        accessible to screen readers. Try using a screen reader to hear it, or
        inspect the DOM to see it's there.
      </Text>
      <VisuallyHidden>
        This content is visually hidden but accessible to screen readers
      </VisuallyHidden>
    </Flex>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4">
      <VisuallyHidden>
        <Text as="h2">Footer links</Text>
      </VisuallyHidden>
      <Text as="p">
        <a href="#">About us</a>
      </Text>
      <Text as="p">
        <a href="#">Jobs</a>
      </Text>
      <Text as="p">
        <a href="#">Terms and Conditions</a>
      </Text>
      <Text as="p" variant="body-small" color="secondary">
        (Screen readers hear: "Footer links" followed by the list of links)
      </Text>
    </Flex>
}`,...a.parameters?.docs?.source}}};const m=["Default","ExampleUsage"];export{r as Default,a as ExampleUsage,m as __namedExportsOrder,x as default};
