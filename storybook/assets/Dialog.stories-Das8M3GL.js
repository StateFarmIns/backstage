import{j as e}from"./iframe-B5rMEWCp.js";import{D as o,d as j,e as l,f as d,g as c}from"./Menu-BeOXhxGZ.js";import"./Box-BnhwnwB9.js";import"./Grid-luR2MsP7.js";import{F as f}from"./Flex-D1MPskRw.js";import"./Container-BJwRxTDh.js";import{B as r}from"./Button-B9aMlntz.js";import"./Collapsible-DgGTYJs6.js";import"./FieldLabel-B7pnDkX_.js";import"./SearchField-eT76ZaQG.js";import"./ButtonIcon-2wRYBHju.js";import"./ButtonLink-jpMkgzoO.js";import"./Checkbox-C07PouC2.js";import"./RadioGroup-Bdo-6Otd.js";import"./Tabs-Bg_zbw5U.js";import{T as i}from"./Text-Vtt0Xsyt.js";import{T as y}from"./TextField-etOCrMvN.js";import"./Tooltip-0timl-2E.js";import"./Link-p30RC4ob.js";import{S as T}from"./Select-O_EzD56-.js";import"./Skeleton-BuFgSZaI.js";import"./Switch-CpXHQDU6.js";import"./VisuallyHidden-DXTlkPp7.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./useStyles-CBH6FDUm.js";import"./useAnimationsFinished-EXtHxpXs.js";import"./RSPContexts-ktp0Dxes.js";import"./utils-DHGDFEAl.js";import"./useFocusRing-Dk8-PtBk.js";import"./useListState-CXNduW7B.js";import"./usePress-WWVTUsMl.js";import"./SelectionIndicator-BlHcArnn.js";import"./context-xsLMgyV1.js";import"./Hidden-D-kxa8IG.js";import"./useControlledState-DLEwl9TE.js";import"./OverlayArrow-BnAT0xUD.js";import"./index-C8GihcpZ.js";import"./Button-zFDwNRxD.js";import"./useLocalizedStringFormatter-DK6u51ir.js";import"./VisuallyHidden-DHupDChM.js";import"./FieldError-BuXL5XPg.js";import"./useLabels-DUqGopwl.js";import"./isExternalLink-DzQTpl4p.js";import"./index-MUA7jQ1z.js";import"./Input-BuZTq0J5.js";import"./useFormReset-Cb9BNVL6.js";import"./Label-DuUQ7bys.js";import"./Button.module-BHYJStbY.js";import"./Link-3RMog4Gc.js";import"./TextField.module-BNd6YL_d.js";import"./TextField-DmyBQ7iH.js";const{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,Te={title:"Backstage UI/Dialog",component:o,args:{isOpen:void 0,defaultOpen:void 0},argTypes:{isOpen:{control:"boolean"},defaultOpen:{control:"boolean"}}},t={render:a=>e.jsxs(j,{children:[e.jsx(r,{variant:"secondary",children:"Open Dialog"}),e.jsxs(o,{...a,children:[e.jsx(l,{children:"Example Dialog"}),e.jsx(d,{children:e.jsx(i,{children:"This is a basic dialog example."})}),e.jsxs(c,{children:[e.jsx(r,{variant:"secondary",slot:"close",children:"Close"}),e.jsx(r,{variant:"primary",slot:"close",children:"Save"})]})]})]})},u={args:{...t.args,defaultOpen:!0},render:t.render},p={args:{isOpen:!0},render:a=>{const[{isOpen:B},O]=b();return e.jsxs(o,{...a,isOpen:B,onOpenChange:F=>O({isOpen:F}),children:[e.jsx(l,{children:"Example Dialog"}),e.jsx(d,{children:e.jsx(i,{children:"This is a basic dialog example."})}),e.jsxs(c,{children:[e.jsx(r,{variant:"secondary",slot:"close",children:"Close"}),e.jsx(r,{variant:"primary",slot:"close",children:"Save"})]})]})}},n={args:{defaultOpen:!0,width:600},render:a=>e.jsxs(j,{children:[e.jsx(r,{variant:"secondary",children:"Open Dialog"}),e.jsxs(o,{...a,children:[e.jsx(l,{children:"Long Content Dialog"}),e.jsx(d,{children:e.jsxs(f,{direction:"column",gap:"3",children:[e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx(i,{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(i,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."})]})}),e.jsxs(c,{children:[e.jsx(r,{variant:"secondary",slot:"close",children:"Cancel"}),e.jsx(r,{variant:"primary",slot:"close",children:"Accept"})]})]})]})},m={args:{defaultOpen:!0,height:500},render:n.render},g={args:{defaultOpen:!0,width:600,height:400},render:n.render},h={args:{defaultOpen:!0,width:"100%",height:"100%"},render:n.render},x={args:{isOpen:!0},render:a=>e.jsxs(j,{...a,children:[e.jsx(r,{variant:"secondary",children:"Delete Item"}),e.jsxs(o,{children:[e.jsx(l,{children:"Confirm Delete"}),e.jsx(d,{children:e.jsx(i,{children:"Are you sure you want to delete this item? This action cannot be undone."})}),e.jsxs(c,{children:[e.jsx(r,{variant:"secondary",slot:"close",children:"Cancel"}),e.jsx(r,{variant:"primary",slot:"close",children:"Delete"})]})]})]})},s={args:{isOpen:!0},render:a=>e.jsxs(j,{...a,children:[e.jsx(r,{variant:"secondary",children:"Create User"}),e.jsxs(o,{children:[e.jsx(l,{children:"Create New User"}),e.jsx(d,{children:e.jsxs(f,{direction:"column",gap:"3",children:[e.jsx(y,{label:"Name",placeholder:"Enter full name"}),e.jsx(y,{label:"Email",placeholder:"Enter email address"}),e.jsx(T,{label:"Role",options:[{value:"admin",label:"Admin"},{value:"user",label:"User"},{value:"viewer",label:"Viewer"}]})]})}),e.jsxs(c,{children:[e.jsx(r,{variant:"secondary",slot:"close",children:"Cancel"}),e.jsx(r,{variant:"primary",slot:"close",children:"Create User"})]})]})]})},D={args:{defaultOpen:void 0,width:600,height:400},render:n.render},v={args:{defaultOpen:void 0},render:s.render};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const be=["Default","Open","NoTrigger","FixedWidth","FixedHeight","FixedWidthAndHeight","FullWidthAndHeight","Confirmation","WithForm","PreviewFixedWidthAndHeight","PreviewWithForm"];export{x as Confirmation,t as Default,m as FixedHeight,n as FixedWidth,g as FixedWidthAndHeight,h as FullWidthAndHeight,p as NoTrigger,u as Open,D as PreviewFixedWidthAndHeight,v as PreviewWithForm,s as WithForm,be as __namedExportsOrder,Te as default};
