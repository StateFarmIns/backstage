import{j as e}from"./iframe-DRkdG3e7.js";import{C as t}from"./CodeSnippet-CuKDja7G.js";import{I as o}from"./InfoCard-BxigKyxf.js";import"./preload-helper-D9Z9MdNV.js";import"./Box-DaHRDmmG.js";import"./styled-6jkyVhJx.js";import"./CopyTextButton-1OFqlaqt.js";import"./useCopyToClipboard-Bz2N619O.js";import"./useMountedState-BzKksOdK.js";import"./Tooltip-COGr6yaA.js";import"./Popper-xbOvXIVU.js";import"./Portal-B7yT6sF2.js";import"./CardContent-BeXxkZYJ.js";import"./ErrorBoundary-DdhkHI6v.js";import"./ErrorPanel-BBpp51Nq.js";import"./WarningPanel-BnRYyNkG.js";import"./ExpandMore-U_4OslcK.js";import"./AccordionDetails-0d2mj9Vr.js";import"./index-DnL3XN75.js";import"./Collapse-KAzvoK9L.js";import"./MarkdownContent-e513bAJk.js";import"./Grid-DdhP03dT.js";import"./List-T0-85Df0.js";import"./ListContext-Cal3OaXT.js";import"./ListItem-C5uPx8az.js";import"./ListItemText-CTmnA9Vi.js";import"./LinkButton-XfOuTa1v.js";import"./Button-SoqA5iQw.js";import"./Link-D0rSWwVe.js";import"./lodash-CwBbdt2Q.js";import"./index-DZ62LnLt.js";import"./useAnalytics-D4adgS3v.js";import"./useApp-5eUlhv-k.js";import"./CardHeader-Ukn01Zly.js";import"./Divider-CNFq1GCr.js";import"./CardActions-FNmQIM1F.js";import"./BottomLink-BM_qCnuS.js";import"./ArrowForward-4uDg3mqy.js";const X={title:"Data Display/CodeSnippet",component:t},d={width:300},r=`const greeting = "Hello";
const world = "World";

const greet = person => greeting + " " + person + "!";

greet(world);
`,m=`const greeting: string = "Hello";
const world: string = "World";

const greet = (person: string): string => greeting + " " + person + "!";

greet(world);
`,c=`greeting = "Hello"
world = "World"

def greet(person):
    return f"{greeting} {person}!"

greet(world)
`,s=()=>e.jsx(o,{title:"JavaScript example",children:e.jsx(t,{text:"const hello = 'World';",language:"javascript"})}),a=()=>e.jsx(o,{title:"JavaScript multi-line example",children:e.jsx(t,{text:r,language:"javascript"})}),i=()=>e.jsx(o,{title:"Show line numbers",children:e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0})}),n=()=>e.jsxs(o,{title:"Overflow",children:[e.jsx("div",{style:d,children:e.jsx(t,{text:r,language:"javascript"})}),e.jsx("div",{style:d,children:e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0})})]}),p=()=>e.jsxs(o,{title:"Multiple languages",children:[e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0}),e.jsx(t,{text:m,language:"typescript",showLineNumbers:!0}),e.jsx(t,{text:c,language:"python",showLineNumbers:!0})]}),l=()=>e.jsx(o,{title:"Copy Code",children:e.jsx(t,{text:r,language:"javascript",showCopyCodeButton:!0})});s.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"MultipleLines"};i.__docgenInfo={description:"",methods:[],displayName:"LineNumbers"};n.__docgenInfo={description:"",methods:[],displayName:"Overflow"};p.__docgenInfo={description:"",methods:[],displayName:"Languages"};l.__docgenInfo={description:"",methods:[],displayName:"CopyCode"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <InfoCard title="JavaScript example">
    <CodeSnippet text="const hello = 'World';" language="javascript" />
  </InfoCard>`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <InfoCard title="JavaScript multi-line example">
    <CodeSnippet text={JAVASCRIPT} language="javascript" />
  </InfoCard>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <InfoCard title="Show line numbers">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
  </InfoCard>`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <InfoCard title="Overflow">
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" />
    </div>
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    </div>
  </InfoCard>`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <InfoCard title="Multiple languages">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    <CodeSnippet text={TYPESCRIPT} language="typescript" showLineNumbers />
    <CodeSnippet text={PYTHON} language="python" showLineNumbers />
  </InfoCard>`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <InfoCard title="Copy Code">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showCopyCodeButton />
  </InfoCard>`,...l.parameters?.docs?.source}}};const Z=["Default","MultipleLines","LineNumbers","Overflow","Languages","CopyCode"];export{l as CopyCode,s as Default,p as Languages,i as LineNumbers,a as MultipleLines,n as Overflow,Z as __namedExportsOrder,X as default};
