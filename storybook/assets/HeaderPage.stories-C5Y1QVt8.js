import{j as e}from"./iframe-DRkdG3e7.js";import{H as o,M as v,h as j,i as T}from"./Menu-RpdiJ7Mt.js";import"./Box-CS3hewgS.js";import"./Grid-j8MRZrXX.js";import"./Flex-CgL7uJ5F.js";import{C as u}from"./Container-Dnyqo9JK.js";import{B as x}from"./Button-C6td5q7k.js";import"./Collapsible-f0bRPZBd.js";import"./FieldLabel-Bp8qg6p8.js";import"./SearchField-By8ezkjD.js";import{B as M}from"./ButtonIcon-DsfV3oIj.js";import"./ButtonLink-Dx-273u-.js";import"./Checkbox-DdgTvYrj.js";import"./RadioGroup-JXdczsxu.js";import"./Tabs-C5lYt5KD.js";import{T as t}from"./Text-BN0Ju57F.js";import"./TextField-B2XvdDQE.js";import"./Tooltip-Dg9pwGsO.js";import"./Link-u_jTupwh.js";import"./Select-CHjd_PZh.js";import"./Skeleton-D7wWBvcI.js";import"./Switch-BlhgFaA3.js";import{t as C}from"./index-Dz0edcfd.js";import{M as b}from"./index-DZ62LnLt.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./useStyles-JllvZotu.js";import"./useAnimationsFinished-DoOALjje.js";import"./RSPContexts-RNgqLzns.js";import"./utils-Do8wdv2E.js";import"./useFocusRing-DcL9jFdt.js";import"./useListState-BEfK7Ajb.js";import"./usePress-B_v-tpR2.js";import"./SelectionIndicator-8XH3m-MM.js";import"./context-Dx5P6Vpw.js";import"./Hidden-DXPHu43e.js";import"./useControlledState-CArjyaSO.js";import"./OverlayArrow-BsVV7uHn.js";import"./Button-7v72ENDr.js";import"./useLocalizedStringFormatter-BR9RwLAi.js";import"./VisuallyHidden-DAh9rgn6.js";import"./FieldError-wq6_h5HW.js";import"./useLabels-BGnuAS3A.js";import"./isExternalLink-DzQTpl4p.js";import"./Input-CTHWiPCl.js";import"./useFormReset-CMFGt5H1.js";import"./Label-B_MQmI76.js";import"./Button.module-BHYJStbY.js";import"./Link-D_VGeK7V.js";import"./TextField.module-BNd6YL_d.js";import"./TextField-Dpz9w2_Z.js";const Ce={title:"Backstage UI/HeaderPage",component:o,parameters:{layout:"fullscreen"}},f=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],y=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],n=r=>e.jsx(b,{children:e.jsx(r,{})}),R=[r=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"250px",position:"fixed",left:"var(--sb-panel-left)",top:"var(--sb-panel-top)",bottom:"var(--sb-panel-bottom)",backgroundColor:"var(--sb-sidebar-bg)",borderRadius:"var(--sb-panel-radius)",border:"var(--sb-sidebar-border)",borderRight:"var(--sb-sidebar-border-right)",zIndex:1}}),e.jsxs("div",{style:{paddingLeft:"var(--sb-content-padding-inline)",minHeight:"200vh"},children:[e.jsx(r,{}),e.jsx(u,{children:e.jsx(t,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."})})]})]})],s={args:{title:"Page Title"}},i={args:{...s.args,tabs:f},decorators:[n]},c={decorators:[n],render:()=>e.jsx(o,{...s.args,customActions:e.jsxs(e.Fragment,{children:[e.jsx(x,{children:"Custom action"}),e.jsxs(v,{children:[e.jsx(M,{variant:"tertiary",icon:e.jsx(C,{}),"aria-label":"More options"}),e.jsx(j,{placement:"bottom end",children:y.map(r=>e.jsx(T,{onAction:r.onClick,href:r.href,children:r.label},r.value))})]})]})})},m={decorators:[n],args:{...s.args,breadcrumbs:[{label:"Home",href:"/"}]}},h={decorators:[n],args:{...s.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}},a={decorators:[n],render:()=>e.jsx(o,{...s.args,tabs:f,customActions:e.jsx(x,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]})},l={args:{...a.args},decorators:[n,...R],render:a.render},g={args:{title:"Route Matching Demo",tabs:[{id:"home",label:"Home",href:"/home"},{id:"mentorship",label:"Mentorship",href:"/mentorship",matchStrategy:"prefix"},{id:"catalog",label:"Catalog",href:"/catalog",matchStrategy:"prefix"},{id:"settings",label:"Settings",href:"/settings"}]},render:r=>e.jsxs(b,{initialEntries:["/mentorship/events"],children:[e.jsx(o,{...r}),e.jsxs(u,{children:[e.jsxs(t,{children:[e.jsx("strong",{children:"Current URL:"})," /mentorship/events"]}),e.jsx("br",{}),e.jsxs(t,{children:[`Notice how the "Mentorship" tab is active even though we're on a nested route. This is because it uses`," ",e.jsx("code",{children:'matchStrategy="prefix"'}),"."]}),e.jsx("br",{}),e.jsxs(t,{children:["• ",e.jsx("strong",{children:"Home"}),": exact matching (default) - not active"]}),e.jsxs(t,{children:["• ",e.jsx("strong",{children:"Mentorship"}),": prefix matching - IS active (URL starts with /mentorship)"]}),e.jsxs(t,{children:["• ",e.jsx("strong",{children:"Catalog"}),": prefix matching - not active"]}),e.jsxs(t,{children:["• ",e.jsx("strong",{children:"Settings"}),": exact matching (default) - not active"]})]})]})},d={args:{title:"Exact Matching Demo",tabs:[{id:"mentorship",label:"Mentorship",href:"/mentorship"},{id:"events",label:"Events",href:"/mentorship/events"},{id:"mentors",label:"Mentors",href:"/mentorship/mentors"}]},render:r=>e.jsxs(b,{initialEntries:["/mentorship/events"],children:[e.jsx(o,{...r}),e.jsxs(u,{children:[e.jsxs(t,{children:[e.jsx("strong",{children:"Current URL:"})," /mentorship/events"]}),e.jsx("br",{}),e.jsx(t,{children:'With default exact matching, only the "Events" tab is active because it exactly matches the current URL. The "Mentorship" tab is not active even though the URL is under /mentorship.'})]})]})},p={args:{title:"Deep Nesting Demo",tabs:[{id:"catalog",label:"Catalog",href:"/catalog",matchStrategy:"prefix"},{id:"users",label:"Users",href:"/catalog/users",matchStrategy:"prefix"},{id:"components",label:"Components",href:"/catalog/components",matchStrategy:"prefix"}]},render:r=>e.jsxs(b,{initialEntries:["/catalog/users/john/details"],children:[e.jsx(o,{...r}),e.jsxs(u,{children:[e.jsxs(t,{children:[e.jsx("strong",{children:"Current URL:"})," /catalog/users/john/details"]}),e.jsx("br",{}),e.jsx(t,{children:'Both "Catalog" and "Users" tabs are active because:'}),e.jsxs(t,{children:["• ",e.jsx("strong",{children:"Catalog"}),": URL starts with /catalog"]}),e.jsxs(t,{children:["• ",e.jsx("strong",{children:"Users"}),": URL starts with /catalog/users"]}),e.jsxs(t,{children:["• ",e.jsx("strong",{children:"Components"}),": not active (URL doesn't start with /catalog/components)"]}),e.jsx("br",{}),e.jsx(t,{children:"This demonstrates how prefix matching works with deeply nested routes."})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page Title'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    tabs
  },
  decorators: [withRouter]
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: [withRouter],
  render: () => <HeaderPage {...Default.args} customActions={<>
          <Button>Custom action</Button>
          <MenuTrigger>
            <ButtonIcon variant="tertiary" icon={<RiMore2Line />} aria-label="More options" />
            <Menu placement="bottom end">
              {menuItems.map(option => <MenuItem key={option.value} onAction={option.onClick} href={option.href}>
                  {option.label}
                </MenuItem>)}
            </Menu>
          </MenuTrigger>
        </>} />
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [withRouter],
  args: {
    ...Default.args,
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }]
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [withRouter],
  args: {
    ...Default.args,
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Long Breadcrumb Name',
      href: '/long-breadcrumb'
    }]
  }
}`,...h.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  decorators: [withRouter],
  render: () => <HeaderPage {...Default.args} tabs={tabs} customActions={<Button>Custom action</Button>} breadcrumbs={[{
    label: 'Home',
    href: '/'
  }]} />
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithEverything.args
  },
  decorators: [withRouter, ...layoutDecorator],
  render: WithEverything.render
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Route Matching Demo',
    tabs: [{
      id: 'home',
      label: 'Home',
      href: '/home'
    }, {
      id: 'mentorship',
      label: 'Mentorship',
      href: '/mentorship',
      matchStrategy: 'prefix'
    }, {
      id: 'catalog',
      label: 'Catalog',
      href: '/catalog',
      matchStrategy: 'prefix'
    }, {
      id: 'settings',
      label: 'Settings',
      href: '/settings'
    }]
  },
  render: args => <MemoryRouter initialEntries={['/mentorship/events']}>
      <HeaderPage {...args} />
      <Container>
        <Text>
          <strong>Current URL:</strong> /mentorship/events
        </Text>
        <br />
        <Text>
          Notice how the "Mentorship" tab is active even though we're on a
          nested route. This is because it uses{' '}
          <code>matchStrategy="prefix"</code>.
        </Text>
        <br />
        <Text>
          • <strong>Home</strong>: exact matching (default) - not active
        </Text>
        <Text>
          • <strong>Mentorship</strong>: prefix matching - IS active (URL starts
          with /mentorship)
        </Text>
        <Text>
          • <strong>Catalog</strong>: prefix matching - not active
        </Text>
        <Text>
          • <strong>Settings</strong>: exact matching (default) - not active
        </Text>
      </Container>
    </MemoryRouter>
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Exact Matching Demo',
    tabs: [{
      id: 'mentorship',
      label: 'Mentorship',
      href: '/mentorship'
    }, {
      id: 'events',
      label: 'Events',
      href: '/mentorship/events'
    }, {
      id: 'mentors',
      label: 'Mentors',
      href: '/mentorship/mentors'
    }]
  },
  render: args => <MemoryRouter initialEntries={['/mentorship/events']}>
      <HeaderPage {...args} />
      <Container>
        <Text>
          <strong>Current URL:</strong> /mentorship/events
        </Text>
        <br />
        <Text>
          With default exact matching, only the "Events" tab is active because
          it exactly matches the current URL. The "Mentorship" tab is not active
          even though the URL is under /mentorship.
        </Text>
      </Container>
    </MemoryRouter>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Deep Nesting Demo',
    tabs: [{
      id: 'catalog',
      label: 'Catalog',
      href: '/catalog',
      matchStrategy: 'prefix'
    }, {
      id: 'users',
      label: 'Users',
      href: '/catalog/users',
      matchStrategy: 'prefix'
    }, {
      id: 'components',
      label: 'Components',
      href: '/catalog/components',
      matchStrategy: 'prefix'
    }]
  },
  render: args => <MemoryRouter initialEntries={['/catalog/users/john/details']}>
      <HeaderPage {...args} />
      <Container>
        <Text>
          <strong>Current URL:</strong> /catalog/users/john/details
        </Text>
        <br />
        <Text>Both "Catalog" and "Users" tabs are active because:</Text>
        <Text>
          • <strong>Catalog</strong>: URL starts with /catalog
        </Text>
        <Text>
          • <strong>Users</strong>: URL starts with /catalog/users
        </Text>
        <Text>
          • <strong>Components</strong>: not active (URL doesn't start with
          /catalog/components)
        </Text>
        <br />
        <Text>
          This demonstrates how prefix matching works with deeply nested routes.
        </Text>
      </Container>
    </MemoryRouter>
}`,...p.parameters?.docs?.source}}};const ye=["Default","WithTabs","WithCustomActions","WithBreadcrumbs","WithLongBreadcrumbs","WithEverything","WithLayout","WithTabsMatchingStrategies","WithTabsExactMatching","WithTabsPrefixMatchingDeep"];export{s as Default,m as WithBreadcrumbs,c as WithCustomActions,a as WithEverything,l as WithLayout,h as WithLongBreadcrumbs,i as WithTabs,d as WithTabsExactMatching,g as WithTabsMatchingStrategies,p as WithTabsPrefixMatchingDeep,ye as __namedExportsOrder,Ce as default};
