import{j as e,r as a}from"./iframe-DB3V3M1P.js";import{M as i,m as l,n as c,h as j,i as b,S as v}from"./Menu-4FlOVhUG.js";import"./Box-CYKNDnmS.js";import"./Grid-DcOy4Ilo.js";import{F as h}from"./Flex-UgSlYOe-.js";import"./Container-CbnsVKY0.js";import{B as u}from"./Button-DLYfcxqQ.js";import"./Collapsible-Dxz8zlYf.js";import"./FieldLabel-DvUEwItd.js";import"./SearchField-M2QGNJNW.js";import"./ButtonIcon-BXKxR_TG.js";import"./ButtonLink-ua8-I3az.js";import"./Checkbox-C03QPcdY.js";import"./RadioGroup-rnQZQjqz.js";import"./Tabs-Dxmv8y5X.js";import{T as M}from"./Text-INEN3Y2G.js";import"./TextField-BXKyNfoR.js";import"./Tooltip-Dfy9S1Df.js";import"./Link-DjCpyyhL.js";import"./Select-Dcs0Fv84.js";import"./Skeleton-EAHySwOl.js";import"./Switch-CfN-if7J.js";import{M as f}from"./index-Du1GFH8T.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./useStyles-0KSv8py2.js";import"./useAnimationsFinished-CPx400EF.js";import"./RSPContexts-BSHrhRBZ.js";import"./utils-DLW_tb52.js";import"./useFocusRing-BjAnfjlx.js";import"./useListState-vFFr9u4I.js";import"./usePress-tJArtEap.js";import"./SelectionIndicator-nkrCBb_q.js";import"./context-Cw9i9oyM.js";import"./Hidden-vGeag6Hf.js";import"./useControlledState-B0cvNj1u.js";import"./OverlayArrow-DmB3lukn.js";import"./index-D0-V-GQF.js";import"./Button-dE7afrmx.js";import"./useLocalizedStringFormatter-DatVT-KM.js";import"./VisuallyHidden-Ch-5ui5Z.js";import"./FieldError-rN3h6zCF.js";import"./useLabels-D6TP-BPt.js";import"./isExternalLink-DzQTpl4p.js";import"./Input-D0s0Jep8.js";import"./useFormReset-BZXWnsd-.js";import"./Label-CgA7jDNj.js";import"./Button.module-BfMMAORH.js";import"./Link-B_fX3Dxf.js";import"./TextField.module-BvzK0gC1.js";import"./TextField-CwQkBQWr.js";const je={title:"Backstage UI/MenuAutocompleteListBox",component:i,decorators:[r=>e.jsx(f,{children:e.jsx(r,{})})]},s=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Cherry",value:"cherry"},{label:"Durian",value:"durian"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}],n={args:{children:null},render:()=>{const[r,o]=a.useState(new Set([s[2].value]));return e.jsxs(h,{direction:"column",gap:"2",align:"start",children:[e.jsxs(M,{children:["Selected: ",Array.from(r).join(", ")]}),e.jsxs(i,{isOpen:!0,children:[e.jsx(u,{"aria-label":"Menu",children:"Menu"}),e.jsx(l,{selectedKeys:r,onSelectionChange:o,children:s.map(t=>e.jsx(c,{id:t.value,children:t.label},t.value))})]})]})}},m={args:{...n.args},render:()=>{const[r,o]=a.useState(new Set([s[2].value]));return e.jsxs(h,{direction:"column",gap:"2",align:"center",children:[e.jsxs(M,{children:["Selected: ",Array.from(r).join(", ")]}),e.jsxs(i,{children:[e.jsx(u,{"aria-label":"Menu",children:"Menu"}),e.jsx(l,{selectedKeys:r,onSelectionChange:o,children:s.map(t=>e.jsx(c,{id:t.value,children:t.label},t.value))})]})]})}},p={args:{...n.args},render:()=>{const[r,o]=a.useState(new Set([s[2].value,s[3].value]));return e.jsxs(h,{direction:"column",gap:"2",align:"center",children:[e.jsxs(M,{children:["Selected: ",Array.from(r).join(", ")]}),e.jsxs(i,{children:[e.jsx(u,{"aria-label":"Menu",children:"Menu"}),e.jsx(l,{selectionMode:"multiple",selectedKeys:r,onSelectionChange:o,children:s.map(t=>e.jsx(c,{id:t.value,children:t.label},t.value))})]})]})}},d={args:{...n.args},render:()=>{const[r,o]=a.useState(new Set([s[2].value]));return e.jsxs(h,{direction:"column",gap:"2",align:"start",children:[e.jsxs(M,{children:["Selected: ",Array.from(r).join(", ")]}),e.jsxs(i,{isOpen:!0,children:[e.jsx(u,{"aria-label":"Menu",children:"Menu"}),e.jsxs(j,{children:[e.jsx(b,{children:"Edit"}),e.jsx(b,{children:"Duplicate"}),e.jsxs(v,{children:[e.jsx(b,{children:"Submenu"}),e.jsx(l,{selectedKeys:r,onSelectionChange:o,placement:"right top",children:s.map(t=>e.jsx(c,{id:t.value,children:t.label},t.value))})]})]})]})]})}},x={args:{...n.args},render:()=>{const[r,o]=a.useState([]);return a.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{o(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(i,{isOpen:!0,children:[e.jsx(u,{"aria-label":"Menu",children:"Menu"}),e.jsx(l,{items:r,placeholder:"Search Pokemon...",virtualized:!0,children:r.map((t,S)=>e.jsx(c,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},S))})]})}},g={args:{...n.args},render:()=>{const[r,o]=a.useState([]);return a.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{o(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(i,{isOpen:!0,children:[e.jsx(u,{"aria-label":"Menu",children:"Menu"}),e.jsx(l,{items:r,placeholder:"Search Pokemon...",virtualized:!0,maxHeight:"300px",children:r.map((t,S)=>e.jsx(c,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},S))})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => {
    const [selected, setSelected] = useState<Selection>(new Set([options[2].value]));
    return <Flex direction="column" gap="2" align="start">
        <Text>Selected: {Array.from(selected).join(', ')}</Text>
        <MenuTrigger isOpen>
          <Button aria-label="Menu">Menu</Button>
          <MenuAutocompleteListbox selectedKeys={selected} onSelectionChange={setSelected}>
            {options.map(option => <MenuListBoxItem key={option.value} id={option.value}>
                {option.label}
              </MenuListBoxItem>)}
          </MenuAutocompleteListbox>
        </MenuTrigger>
      </Flex>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => {
    const [selected, setSelected] = useState<Selection>(new Set([options[2].value]));
    return <Flex direction="column" gap="2" align="center">
        <Text>Selected: {Array.from(selected).join(', ')}</Text>
        <MenuTrigger>
          <Button aria-label="Menu">Menu</Button>
          <MenuAutocompleteListbox selectedKeys={selected} onSelectionChange={setSelected}>
            {options.map(option => <MenuListBoxItem key={option.value} id={option.value}>
                {option.label}
              </MenuListBoxItem>)}
          </MenuAutocompleteListbox>
        </MenuTrigger>
      </Flex>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => {
    const [selected, setSelected] = useState<Selection>(new Set([options[2].value, options[3].value]));
    return <Flex direction="column" gap="2" align="center">
        <Text>Selected: {Array.from(selected).join(', ')}</Text>
        <MenuTrigger>
          <Button aria-label="Menu">Menu</Button>
          <MenuAutocompleteListbox selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
            {options.map(option => <MenuListBoxItem key={option.value} id={option.value}>
                {option.label}
              </MenuListBoxItem>)}
          </MenuAutocompleteListbox>
        </MenuTrigger>
      </Flex>;
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => {
    const [selected, setSelected] = useState<Selection>(new Set([options[2].value]));
    return <Flex direction="column" gap="2" align="start">
        <Text>Selected: {Array.from(selected).join(', ')}</Text>
        <MenuTrigger isOpen>
          <Button aria-label="Menu">Menu</Button>
          <Menu>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Duplicate</MenuItem>
            <SubmenuTrigger>
              <MenuItem>Submenu</MenuItem>
              <MenuAutocompleteListbox selectedKeys={selected} onSelectionChange={setSelected} placement="right top">
                {options.map(option => <MenuListBoxItem key={option.value} id={option.value}>
                    {option.label}
                  </MenuListBoxItem>)}
              </MenuAutocompleteListbox>
            </SubmenuTrigger>
          </Menu>
        </MenuTrigger>
      </Flex>;
  }
}`,...d.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => {
    const [pokemon, setPokemon] = useState<Array<{
      name: string;
      url: string;
    }>>([]);
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=1000').then(response => response.json()).then(data => {
        setPokemon(data.results);
      }).catch(error => {
        console.error('Error fetching Pokemon:', error);
      });
    }, []);
    return <MenuTrigger isOpen>
        <Button aria-label="Menu">Menu</Button>
        <MenuAutocompleteListbox items={pokemon} placeholder="Search Pokemon..." virtualized>
          {pokemon.map((p, index) => <MenuListBoxItem key={index} id={p.name}>
              {p.name.charAt(0).toLocaleUpperCase('en-US') + p.name.slice(1)}
            </MenuListBoxItem>)}
        </MenuAutocompleteListbox>
      </MenuTrigger>;
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => {
    const [pokemon, setPokemon] = useState<Array<{
      name: string;
      url: string;
    }>>([]);
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=1000').then(response => response.json()).then(data => {
        setPokemon(data.results);
      }).catch(error => {
        console.error('Error fetching Pokemon:', error);
      });
    }, []);
    return <MenuTrigger isOpen>
        <Button aria-label="Menu">Menu</Button>
        <MenuAutocompleteListbox items={pokemon} placeholder="Search Pokemon..." virtualized maxHeight="300px">
          {pokemon.map((p, index) => <MenuListBoxItem key={index} id={p.name}>
              {p.name.charAt(0).toLocaleUpperCase('en-US') + p.name.slice(1)}
            </MenuListBoxItem>)}
        </MenuAutocompleteListbox>
      </MenuTrigger>;
  }
}`,...g.parameters?.docs?.source}}};const ve=["Default","PreviewListbox","PreviewListboxMultiple","Submenu","Virtualized","VirtualizedMaxHeight"];export{n as Default,m as PreviewListbox,p as PreviewListboxMultiple,d as Submenu,x as Virtualized,g as VirtualizedMaxHeight,ve as __namedExportsOrder,je as default};
