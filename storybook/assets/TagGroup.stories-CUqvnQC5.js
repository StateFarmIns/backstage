import{r as y,j as a}from"./iframe-B5rMEWCp.js";import{p,q as g}from"./Menu-BeOXhxGZ.js";import"./Box-BnhwnwB9.js";import"./Grid-luR2MsP7.js";import{F as $}from"./Flex-D1MPskRw.js";import"./Container-BJwRxTDh.js";import"./Button-B9aMlntz.js";import"./Collapsible-DgGTYJs6.js";import"./FieldLabel-B7pnDkX_.js";import"./SearchField-eT76ZaQG.js";import"./ButtonIcon-2wRYBHju.js";import"./ButtonLink-jpMkgzoO.js";import"./Checkbox-C07PouC2.js";import"./RadioGroup-Bdo-6Otd.js";import"./Tabs-Bg_zbw5U.js";import"./Text-Vtt0Xsyt.js";import"./TextField-etOCrMvN.js";import"./Tooltip-0timl-2E.js";import"./Link-p30RC4ob.js";import"./Select-O_EzD56-.js";import"./Skeleton-BuFgSZaI.js";import"./Switch-CpXHQDU6.js";import"./VisuallyHidden-DXTlkPp7.js";import{Y as w,e as A,d as k,g as D}from"./index-C8GihcpZ.js";import{M as R}from"./index-MUA7jQ1z.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./useStyles-CBH6FDUm.js";import"./useAnimationsFinished-EXtHxpXs.js";import"./RSPContexts-ktp0Dxes.js";import"./utils-DHGDFEAl.js";import"./useFocusRing-Dk8-PtBk.js";import"./useListState-CXNduW7B.js";import"./usePress-WWVTUsMl.js";import"./SelectionIndicator-BlHcArnn.js";import"./context-xsLMgyV1.js";import"./Hidden-D-kxa8IG.js";import"./useControlledState-DLEwl9TE.js";import"./OverlayArrow-BnAT0xUD.js";import"./Button-zFDwNRxD.js";import"./useLocalizedStringFormatter-DK6u51ir.js";import"./VisuallyHidden-DHupDChM.js";import"./FieldError-BuXL5XPg.js";import"./useLabels-DUqGopwl.js";import"./isExternalLink-DzQTpl4p.js";import"./Input-BuZTq0J5.js";import"./useFormReset-Cb9BNVL6.js";import"./Label-DuUQ7bys.js";import"./Button.module-BHYJStbY.js";import"./Link-3RMog4Gc.js";import"./TextField.module-BNd6YL_d.js";import"./TextField-DmyBQ7iH.js";function M(o){let{initialItems:r=[],initialSelectedKeys:c,getKey:n=d=>{var m;return(m=d.id)!==null&&m!==void 0?m:d.key},filter:t,initialFilterText:e=""}=o,[i,s]=y.useState({items:r,selectedKeys:c==="all"?"all":new Set(c||[]),filterText:e}),l=y.useMemo(()=>t?i.items.filter(d=>t(d,i.filterText)):i.items,[i.items,i.filterText,t]);return{...i,items:l,...C({getKey:n},s),getItem(d){return i.items.find(m=>n(m)===d)}}}function C(o,r){let{cursor:c,getKey:n}=o;return{setSelectedKeys(t){r(e=>({...e,selectedKeys:t}))},addKeysToSelection(t){r(e=>e.selectedKeys==="all"?e:t==="all"?{...e,selectedKeys:"all"}:{...e,selectedKeys:new Set([...e.selectedKeys,...t])})},removeKeysFromSelection(t){r(e=>{if(t==="all")return{...e,selectedKeys:new Set};let i=e.selectedKeys==="all"?new Set(e.items.map(n)):new Set(e.selectedKeys);for(let s of t)i.delete(s);return{...e,selectedKeys:i}})},setFilterText(t){r(e=>({...e,filterText:t}))},insert(t,...e){r(i=>T(i,t,...e))},insertBefore(t,...e){r(i=>{let s=i.items.findIndex(l=>n?.(l)===t);if(s===-1)if(i.items.length===0)s=0;else return i;return T(i,s,...e)})},insertAfter(t,...e){r(i=>{let s=i.items.findIndex(l=>n?.(l)===t);if(s===-1)if(i.items.length===0)s=0;else return i;return T(i,s+1,...e)})},prepend(...t){r(e=>T(e,0,...t))},append(...t){r(e=>T(e,e.items.length,...t))},remove(...t){r(e=>{let i=new Set(t),s=e.items.filter(d=>!i.has(n(d))),l="all";if(e.selectedKeys!=="all"){l=new Set(e.selectedKeys);for(let d of t)l.delete(d)}return c==null&&s.length===0&&(l=new Set),{...e,items:s,selectedKeys:l}})},removeSelectedItems(){r(t=>{if(t.selectedKeys==="all")return{...t,items:[],selectedKeys:new Set};let e=t.selectedKeys,i=t.items.filter(s=>!e.has(n(s)));return{...t,items:i,selectedKeys:new Set}})},move(t,e){r(i=>{let s=i.items.findIndex(m=>n(m)===t);if(s===-1)return i;let l=i.items.slice(),[d]=l.splice(s,1);return l.splice(e,0,d),{...i,items:l}})},moveBefore(t,e){r(i=>{let s=i.items.findIndex(m=>n(m)===t);if(s===-1)return i;let d=(Array.isArray(e)?e:[...e]).map(m=>i.items.findIndex(S=>n(S)===m)).sort((m,S)=>m-S);return L(i,d,s)})},moveAfter(t,e){r(i=>{let s=i.items.findIndex(m=>n(m)===t);if(s===-1)return i;let d=(Array.isArray(e)?e:[...e]).map(m=>i.items.findIndex(S=>n(S)===m)).sort((m,S)=>m-S);return L(i,d,s+1)})},update(t,e){r(i=>{let s=i.items.findIndex(l=>n(l)===t);return s===-1?i:{...i,items:[...i.items.slice(0,s),e,...i.items.slice(s+1)]}})}}}function T(o,r,...c){return{...o,items:[...o.items.slice(0,r),...c,...o.items.slice(r)]}}function L(o,r,c){c-=r.filter(e=>e<c).length;let n=r.map(e=>({from:e,to:c++}));for(let e=0;e<n.length;e++){let i=n[e].from;for(let s=e;s<n.length;s++)n[s].from>i&&n[s].from--}for(let e=0;e<n.length;e++){let i=n[e];for(let s=n.length-1;s>e;s--){let l=n[s];l.from<i.to?i.to++:l.from++}}let t=o.items.slice();for(let e of n){let[i]=t.splice(e.from,1);t.splice(e.to,0,i)}return{...o,items:t}}const Re={title:"Backstage UI/TagGroup",component:p,argTypes:{selectionMode:{control:{type:"inline-radio"},options:["single","multiple"]},"aria-label":{control:{type:"text"}}},decorators:[o=>a.jsx(R,{children:a.jsx(o,{})})]},u=[{id:"banana",name:"Banana",icon:a.jsx(w,{})},{id:"apple",name:"Apple",icon:a.jsx(A,{}),isDisabled:!0},{id:"orange",name:"Orange",icon:a.jsx(k,{}),isDisabled:!0},{id:"pear",name:"Pear",icon:a.jsx(D,{})},{id:"grape",name:"Grape",icon:a.jsx(w,{})},{id:"pineapple",name:"Pineapple",icon:a.jsx(k,{})},{id:"strawberry",name:"Strawberry",icon:a.jsx(D,{})}],f={args:{"aria-label":"Tag Group"},render:o=>a.jsx(p,{...o,children:u.map(r=>a.jsx(g,{children:r.name},r.id))})},x={args:{...f.args},render:o=>a.jsxs($,{direction:"column",children:[a.jsx(p,{...o,children:u.map(r=>a.jsx(g,{size:"small",icon:r.icon,children:r.name},r.id))}),a.jsx(p,{...o,children:u.map(r=>a.jsx(g,{size:"medium",icon:r.icon,children:r.name},r.id))})]})},v={args:{selectionMode:"single","aria-label":"Tag Group"},render:o=>{const[r,c]=y.useState(new Set(["travel"]));return a.jsx(p,{items:u,selectedKeys:r,onSelectionChange:c,...o,children:n=>a.jsx(g,{children:n.name})})}},h={args:{selectionMode:"multiple","aria-label":"Tag Group"},render:o=>{const[r,c]=y.useState(new Set(["travel","shopping"]));return a.jsx(p,{items:u,selectedKeys:r,onSelectionChange:c,...o,children:n=>a.jsx(g,{children:n.name})})}},j={args:{...f.args},render:o=>a.jsx(p,{...o,children:u.map(r=>a.jsx(g,{icon:r.icon?r.icon:void 0,children:r.name},r.id))})},K={render:o=>a.jsx(p,{...o,children:u.map(r=>a.jsx(g,{href:`/items/${r.id}`,children:r.name},r.id))})},G={render:o=>a.jsx(p,{...o,children:u.map(r=>a.jsx(g,{isDisabled:r.isDisabled,children:r.name},r.id))})},b={args:{...f.args},render:o=>{const[r,c]=y.useState(new Set(["travel"])),n=M({initialItems:u});return a.jsx(p,{items:n.items,onRemove:t=>n.remove(...t),selectedKeys:r,onSelectionChange:c,...o,children:t=>a.jsx(g,{children:t.name})})}},I={args:{...f.args},render:o=>{const[r,c]=y.useState(new Set(["travel"])),n=M({initialItems:u});return a.jsx(p,{items:n.items,onRemove:t=>n.remove(...t),selectedKeys:r,onSelectionChange:c,...o,children:t=>a.jsx(g,{icon:t.icon?t.icon:void 0,children:t.name})})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Tag Group'
  },
  render: args => <TagGroup {...args}>
      {initialList.map(item => <Tag key={item.id}>{item.name}</Tag>)}
    </TagGroup>
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <Flex direction="column">
      <TagGroup {...args}>
        {initialList.map(item => <Tag key={item.id} size="small" icon={item.icon}>
            {item.name}
          </Tag>)}
      </TagGroup>
      <TagGroup {...args}>
        {initialList.map(item => <Tag key={item.id} size="medium" icon={item.icon}>
            {item.name}
          </Tag>)}
      </TagGroup>
    </Flex>
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single',
    'aria-label': 'Tag Group'
  },
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['travel']));
    return <TagGroup items={initialList} selectedKeys={selected} onSelectionChange={setSelected} {...args}>
        {item => <Tag>{item.name}</Tag>}
      </TagGroup>;
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    'aria-label': 'Tag Group'
  },
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['travel', 'shopping']));
    return <TagGroup items={initialList} selectedKeys={selected} onSelectionChange={setSelected} {...args}>
        {item => <Tag>{item.name}</Tag>}
      </TagGroup>;
  }
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <TagGroup {...args}>
      {initialList.map(item => <Tag key={item.id} icon={item.icon ? item.icon : undefined}>
          {item.name}
        </Tag>)}
    </TagGroup>
}`,...j.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <TagGroup {...args}>
      {initialList.map(item => <Tag key={item.id} href={\`/items/\${item.id}\`}>
          {item.name}
        </Tag>)}
    </TagGroup>
}`,...K.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <TagGroup {...args}>
      {initialList.map(item => <Tag key={item.id} isDisabled={item.isDisabled}>
          {item.name}
        </Tag>)}
    </TagGroup>
}`,...G.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['travel']));
    const list = useListData({
      initialItems: initialList
    });
    return <TagGroup items={list.items} onRemove={keys => list.remove(...keys)} selectedKeys={selected} onSelectionChange={setSelected} {...args}>
        {item => <Tag>{item.name}</Tag>}
      </TagGroup>;
  }
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['travel']));
    const list = useListData({
      initialItems: initialList
    });
    return <TagGroup items={list.items} onRemove={keys => list.remove(...keys)} selectedKeys={selected} onSelectionChange={setSelected} {...args}>
        {item => <Tag icon={item.icon ? item.icon : undefined}>{item.name}</Tag>}
      </TagGroup>;
  }
}`,...I.parameters?.docs?.source}}};const Ce=["Default","Sizes","SelectionModeSingle","SelectionModeMultiple","WithIcon","WithLink","Disabled","RemovingTags","WithIconAndRemoveButton"];export{f as Default,G as Disabled,b as RemovingTags,h as SelectionModeMultiple,v as SelectionModeSingle,x as Sizes,j as WithIcon,I as WithIconAndRemoveButton,K as WithLink,Ce as __namedExportsOrder,Re as default};
