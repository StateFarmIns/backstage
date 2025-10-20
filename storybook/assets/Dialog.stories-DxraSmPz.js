import{j as e}from"./iframe-DRkdG3e7.js";import{D as o,d as j,e as l,f as d,g as c}from"./Menu-RpdiJ7Mt.js";import"./Box-CS3hewgS.js";import"./Grid-j8MRZrXX.js";import{F as f}from"./Flex-CgL7uJ5F.js";import"./Container-Dnyqo9JK.js";import{B as r}from"./Button-C6td5q7k.js";import"./Collapsible-f0bRPZBd.js";import"./FieldLabel-Bp8qg6p8.js";import"./SearchField-By8ezkjD.js";import"./ButtonIcon-DsfV3oIj.js";import"./ButtonLink-Dx-273u-.js";import"./Checkbox-DdgTvYrj.js";import"./RadioGroup-JXdczsxu.js";import"./Tabs-C5lYt5KD.js";import{T as i}from"./Text-BN0Ju57F.js";import{T as y}from"./TextField-B2XvdDQE.js";import"./Tooltip-Dg9pwGsO.js";import"./Link-u_jTupwh.js";import{S as T}from"./Select-CHjd_PZh.js";import"./Skeleton-D7wWBvcI.js";import"./Switch-BlhgFaA3.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./useStyles-JllvZotu.js";import"./useAnimationsFinished-DoOALjje.js";import"./RSPContexts-RNgqLzns.js";import"./utils-Do8wdv2E.js";import"./useFocusRing-DcL9jFdt.js";import"./useListState-BEfK7Ajb.js";import"./usePress-B_v-tpR2.js";import"./SelectionIndicator-8XH3m-MM.js";import"./context-Dx5P6Vpw.js";import"./Hidden-DXPHu43e.js";import"./useControlledState-CArjyaSO.js";import"./OverlayArrow-BsVV7uHn.js";import"./index-Dz0edcfd.js";import"./Button-7v72ENDr.js";import"./useLocalizedStringFormatter-BR9RwLAi.js";import"./VisuallyHidden-DAh9rgn6.js";import"./FieldError-wq6_h5HW.js";import"./useLabels-BGnuAS3A.js";import"./isExternalLink-DzQTpl4p.js";import"./index-DZ62LnLt.js";import"./Input-CTHWiPCl.js";import"./useFormReset-CMFGt5H1.js";import"./Label-B_MQmI76.js";import"./Button.module-BHYJStbY.js";import"./Link-D_VGeK7V.js";import"./TextField.module-BNd6YL_d.js";import"./TextField-Dpz9w2_Z.js";const{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,Fe={title:"Backstage UI/Dialog",component:o,args:{isOpen:void 0,defaultOpen:void 0},argTypes:{isOpen:{control:"boolean"},defaultOpen:{control:"boolean"}}},t={render:a=>e.jsxs(j,{children:[e.jsx(r,{variant:"secondary",children:"Open Dialog"}),e.jsxs(o,{...a,children:[e.jsx(l,{children:"Example Dialog"}),e.jsx(d,{children:e.jsx(i,{children:"This is a basic dialog example."})}),e.jsxs(c,{children:[e.jsx(r,{variant:"secondary",slot:"close",children:"Close"}),e.jsx(r,{variant:"primary",slot:"close",children:"Save"})]})]})]})},u={args:{...t.args,defaultOpen:!0},render:t.render},p={args:{isOpen:!0},render:a=>{const[{isOpen:B},O]=b();return e.jsxs(o,{...a,isOpen:B,onOpenChange:F=>O({isOpen:F}),children:[e.jsx(l,{children:"Example Dialog"}),e.jsx(d,{children:e.jsx(i,{children:"This is a basic dialog example."})}),e.jsxs(c,{children:[e.jsx(r,{variant:"secondary",slot:"close",children:"Close"}),e.jsx(r,{variant:"primary",slot:"close",children:"Save"})]})]})}},n={args:{defaultOpen:!0,width:600},render:a=>e.jsxs(j,{children:[e.jsx(r,{variant:"secondary",children:"Open Dialog"}),e.jsxs(o,{...a,children:[e.jsx(l,{children:"Long Content Dialog"}),e.jsx(d,{children:e.jsxs(f,{direction:"column",gap:"3",children:[e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx(i,{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(i,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."})]})}),e.jsxs(c,{children:[e.jsx(r,{variant:"secondary",slot:"close",children:"Cancel"}),e.jsx(r,{variant:"primary",slot:"close",children:"Accept"})]})]})]})},m={args:{defaultOpen:!0,height:500},render:n.render},g={args:{defaultOpen:!0,width:600,height:400},render:n.render},h={args:{defaultOpen:!0,width:"100%",height:"100%"},render:n.render},x={args:{isOpen:!0},render:a=>e.jsxs(j,{...a,children:[e.jsx(r,{variant:"secondary",children:"Delete Item"}),e.jsxs(o,{children:[e.jsx(l,{children:"Confirm Delete"}),e.jsx(d,{children:e.jsx(i,{children:"Are you sure you want to delete this item? This action cannot be undone."})}),e.jsxs(c,{children:[e.jsx(r,{variant:"secondary",slot:"close",children:"Cancel"}),e.jsx(r,{variant:"primary",slot:"close",children:"Delete"})]})]})]})},s={args:{isOpen:!0},render:a=>e.jsxs(j,{...a,children:[e.jsx(r,{variant:"secondary",children:"Create User"}),e.jsxs(o,{children:[e.jsx(l,{children:"Create New User"}),e.jsx(d,{children:e.jsxs(f,{direction:"column",gap:"3",children:[e.jsx(y,{label:"Name",placeholder:"Enter full name"}),e.jsx(y,{label:"Email",placeholder:"Enter email address"}),e.jsx(T,{label:"Role",options:[{value:"admin",label:"Admin"},{value:"user",label:"User"},{value:"viewer",label:"Viewer"}]})]})}),e.jsxs(c,{children:[e.jsx(r,{variant:"secondary",slot:"close",children:"Cancel"}),e.jsx(r,{variant:"primary",slot:"close",children:"Create User"})]})]})]})},D={args:{defaultOpen:void 0,width:600,height:400},render:n.render},v={args:{defaultOpen:void 0},render:s.render};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <DialogTrigger>
        <Button variant="secondary">Open Dialog</Button>
        <Dialog {...args}>
          <DialogHeader>Example Dialog</DialogHeader>
          <DialogBody>
            <Text>This is a basic dialog example.</Text>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">
              Close
            </Button>
            <Button variant="primary" slot="close">
              Save
            </Button>
          </DialogFooter>
        </Dialog>
      </DialogTrigger>;
  }
}`,...t.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultOpen: true
  },
  render: Default.render
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  render: args => {
    const [{
      isOpen
    }, updateArgs] = useArgs();
    return <Dialog {...args} isOpen={isOpen} onOpenChange={value => updateArgs({
      isOpen: value
    })}>
        <DialogHeader>Example Dialog</DialogHeader>
        <DialogBody>
          <Text>This is a basic dialog example.</Text>
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" slot="close">
            Close
          </Button>
          <Button variant="primary" slot="close">
            Save
          </Button>
        </DialogFooter>
      </Dialog>;
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    width: 600
  },
  render: args => <DialogTrigger>
      <Button variant="secondary">Open Dialog</Button>
      <Dialog {...args}>
        <DialogHeader>Long Content Dialog</DialogHeader>
        <DialogBody>
          <Flex direction="column" gap="3">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Text>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
            <Text>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Text>
          </Flex>
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" slot="close">
            Cancel
          </Button>
          <Button variant="primary" slot="close">
            Accept
          </Button>
        </DialogFooter>
      </Dialog>
    </DialogTrigger>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    height: 500
  },
  render: FixedWidth.render
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    width: 600,
    height: 400
  },
  render: FixedWidth.render
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    width: '100%',
    height: '100%'
  },
  render: FixedWidth.render
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  render: args => <DialogTrigger {...args}>
      <Button variant="secondary">Delete Item</Button>
      <Dialog>
        <DialogHeader>Confirm Delete</DialogHeader>
        <DialogBody>
          <Text>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </Text>
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" slot="close">
            Cancel
          </Button>
          <Button variant="primary" slot="close">
            Delete
          </Button>
        </DialogFooter>
      </Dialog>
    </DialogTrigger>
}`,...x.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  render: args => <DialogTrigger {...args}>
      <Button variant="secondary">Create User</Button>
      <Dialog>
        <DialogHeader>Create New User</DialogHeader>
        <DialogBody>
          <Flex direction="column" gap="3">
            <TextField label="Name" placeholder="Enter full name" />
            <TextField label="Email" placeholder="Enter email address" />
            <Select label="Role" options={[{
            value: 'admin',
            label: 'Admin'
          }, {
            value: 'user',
            label: 'User'
          }, {
            value: 'viewer',
            label: 'Viewer'
          }]} />
          </Flex>
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" slot="close">
            Cancel
          </Button>
          <Button variant="primary" slot="close">
            Create User
          </Button>
        </DialogFooter>
      </Dialog>
    </DialogTrigger>
}`,...s.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: undefined,
    width: 600,
    height: 400
  },
  render: FixedWidth.render
}`,...D.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: undefined
  },
  render: WithForm.render
}`,...v.parameters?.docs?.source}}};const Te=["Default","Open","NoTrigger","FixedWidth","FixedHeight","FixedWidthAndHeight","FullWidthAndHeight","Confirmation","WithForm","PreviewFixedWidthAndHeight","PreviewWithForm"];export{x as Confirmation,t as Default,m as FixedHeight,n as FixedWidth,g as FixedWidthAndHeight,h as FullWidthAndHeight,p as NoTrigger,u as Open,D as PreviewFixedWidthAndHeight,v as PreviewWithForm,s as WithForm,Te as __namedExportsOrder,Fe as default};
