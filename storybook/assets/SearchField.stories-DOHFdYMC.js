import{j as e}from"./iframe-DRkdG3e7.js";import{S as a,H as z}from"./SearchField-By8ezkjD.js";import{$ as L}from"./FieldError-wq6_h5HW.js";import{F as f}from"./Flex-CgL7uJ5F.js";import{F as R}from"./FieldLabel-Bp8qg6p8.js";import{B as i}from"./ButtonIcon-DsfV3oIj.js";import{U as w,c as n}from"./index-Dz0edcfd.js";import{B as y}from"./Button-C6td5q7k.js";import{M as v}from"./index-DZ62LnLt.js";import"./preload-helper-D9Z9MdNV.js";import"./Link-D_VGeK7V.js";import"./utils-Do8wdv2E.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-DcL9jFdt.js";import"./usePress-B_v-tpR2.js";import"./useStyles-JllvZotu.js";import"./Text-BN0Ju57F.js";import"./Tabs-C5lYt5KD.js";import"./useListState-BEfK7Ajb.js";import"./SelectionIndicator-8XH3m-MM.js";import"./context-Dx5P6Vpw.js";import"./Hidden-DXPHu43e.js";import"./useControlledState-CArjyaSO.js";import"./useLabels-BGnuAS3A.js";import"./Button-7v72ENDr.js";import"./Input-CTHWiPCl.js";import"./useFormReset-CMFGt5H1.js";import"./RSPContexts-RNgqLzns.js";import"./Label-B_MQmI76.js";import"./useLocalizedStringFormatter-BR9RwLAi.js";import"./TextField.module-BNd6YL_d.js";import"./Button.module-BHYJStbY.js";const ce={title:"Backstage UI/SearchField",component:a,argTypes:{isRequired:{control:"boolean"},icon:{control:"object"},placeholder:{control:"text"}}},s={args:{name:"url",style:{maxWidth:"300px"},"aria-label":"Search"}},c={args:{...s.args},render:r=>e.jsxs(f,{direction:"row",gap:"4",style:{width:"100%",maxWidth:"600px"},children:[e.jsx(a,{...r,size:"small"}),e.jsx(a,{...r,size:"medium"})]})},d={args:{...s.args,defaultValue:"https://example.com"}},t={args:{...s.args,label:"Label"}},m={args:{...t.args,description:"Description"}},u={args:{...t.args,isRequired:!0}},p={args:{...s.args,isDisabled:!0}},l={args:{...s.args},render:r=>e.jsx(a,{...r,placeholder:"Enter a URL",size:"small",icon:e.jsx(w,{})})},g={args:{...l.args,isDisabled:!0}},h={args:{...t.args},render:r=>e.jsx(L,{validationErrors:{url:"Invalid URL"},children:e.jsx(a,{...r})})},x={args:{...t.args,validate:r=>r==="admin"?"Nice try!":null}},b={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(R,{htmlFor:"custom-field",id:"custom-field-label",label:"Custom Field"}),e.jsx(a,{id:"custom-field","aria-labelledby":"custom-field-label",name:"custom-field",defaultValue:"Custom Field"})]})},o={args:{...s.args,startCollapsed:!0},render:r=>e.jsxs(f,{direction:"row",gap:"4",children:[e.jsx(a,{...r,size:"small"}),e.jsx(a,{...r,size:"medium"})]})},S={decorators:[r=>e.jsx(v,{children:e.jsx(r,{})})],render:r=>e.jsx(e.Fragment,{children:e.jsx(z,{title:"Title",customActions:e.jsxs(e.Fragment,{children:[e.jsx(i,{"aria-label":"Cactus icon button",icon:e.jsx(n,{}),size:"small",variant:"secondary"}),e.jsx(a,{"aria-label":"Search",...r,size:"small"}),e.jsx(i,{"aria-label":"Cactus icon button",icon:e.jsx(n,{}),size:"small",variant:"secondary"})]})})})},j={args:{...o.args},decorators:[r=>e.jsx(v,{children:e.jsx(r,{})})],render:r=>e.jsx(e.Fragment,{children:e.jsx(z,{title:"Title",customActions:e.jsxs(e.Fragment,{children:[e.jsx(i,{"aria-label":"Cactus icon button",icon:e.jsx(n,{}),size:"small",variant:"secondary"}),e.jsx(a,{...r,size:"small"}),e.jsx(i,{"aria-label":"Cactus icon button",icon:e.jsx(n,{}),size:"small",variant:"secondary"})]})})})},C={args:{...o.args},render:r=>e.jsxs(f,{direction:"row",gap:"2",style:{width:"100%",maxWidth:"600px"},children:[e.jsx(a,{...r,size:"small"}),e.jsx(i,{"aria-label":"Cactus icon button",icon:e.jsx(n,{}),size:"small",variant:"secondary"}),e.jsx(y,{size:"small",variant:"secondary",children:"Hello world"}),e.jsx(a,{...r,size:"medium"}),e.jsx(i,{"aria-label":"Cactus icon button",icon:e.jsx(n,{}),size:"medium",variant:"secondary"}),e.jsx(y,{size:"medium",variant:"secondary",children:"Hello world"})]})},F={args:{...o.args},render:r=>{const W=D=>{console.log("Search value:",D)};return e.jsx(f,{direction:"row",gap:"2",style:{width:"100%",maxWidth:"600px"},children:e.jsx(a,{...r,onChange:W,size:"small"})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'url',
    style: {
      maxWidth: '300px'
    },
    'aria-label': 'Search'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <Flex direction="row" gap="4" style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <SearchField {...args} size="small" />
      <SearchField {...args} size="medium" />
    </Flex>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultValue: 'https://example.com'
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Label'
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args,
    description: 'Description'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args,
    isRequired: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDisabled: true
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <SearchField {...args} placeholder="Enter a URL" size="small" icon={<RiEBike2Line />} />
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithIcon.args,
    isDisabled: true
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args
  },
  render: args => <Form validationErrors={{
    url: 'Invalid URL'
  }}>
      <SearchField {...args} />
    </Form>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args,
    validate: value => value === 'admin' ? 'Nice try!' : null
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <FieldLabel htmlFor="custom-field" id="custom-field-label" label="Custom Field" />
      <SearchField id="custom-field" aria-labelledby="custom-field-label" name="custom-field" defaultValue="Custom Field" />
    </>
}`,...b.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    startCollapsed: true
  },
  render: args => <Flex direction="row" gap="4">
      <SearchField {...args} size="small" />
      <SearchField {...args} size="medium" />
    </Flex>
}`,...o.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <MemoryRouter>
        <Story />
      </MemoryRouter>],
  render: args => <>
      <Header title="Title" customActions={<>
            <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="small" variant="secondary" />
            <SearchField aria-label="Search" {...args} size="small" />
            <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="small" variant="secondary" />
          </>} />
    </>
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...StartCollapsed.args
  },
  decorators: [Story => <MemoryRouter>
        <Story />
      </MemoryRouter>],
  render: args => <>
      <Header title="Title" customActions={<>
            <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="small" variant="secondary" />
            <SearchField {...args} size="small" />
            <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="small" variant="secondary" />
          </>} />
    </>
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...StartCollapsed.args
  },
  render: args => <Flex direction="row" gap="2" style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <SearchField {...args} size="small" />
      <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="small" variant="secondary" />
      <Button size="small" variant="secondary">
        Hello world
      </Button>
      <SearchField {...args} size="medium" />
      <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="medium" variant="secondary" />
      <Button size="medium" variant="secondary">
        Hello world
      </Button>
    </Flex>
}`,...C.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...StartCollapsed.args
  },
  render: args => {
    const handleChange = (value: string) => {
      console.log('Search value:', value);
    };
    return <Flex direction="row" gap="2" style={{
      width: '100%',
      maxWidth: '600px'
    }}>
        <SearchField {...args} onChange={handleChange} size="small" />
      </Flex>;
  }
}`,...F.parameters?.docs?.source}}};const de=["Default","Sizes","DefaultValue","WithLabel","WithDescription","Required","Disabled","WithIcon","DisabledWithIcon","ShowError","Validation","CustomField","StartCollapsed","InHeader","StartCollapsedInHeader","StartCollapsedWithButtons","StartCollapsedWithOnChange"];export{b as CustomField,s as Default,d as DefaultValue,p as Disabled,g as DisabledWithIcon,S as InHeader,u as Required,h as ShowError,c as Sizes,o as StartCollapsed,j as StartCollapsedInHeader,C as StartCollapsedWithButtons,F as StartCollapsedWithOnChange,x as Validation,m as WithDescription,l as WithIcon,t as WithLabel,de as __namedExportsOrder,ce as default};
