import{j as r}from"./iframe-DB3V3M1P.js";import{B as t}from"./ButtonLink-ua8-I3az.js";import{F as i}from"./Flex-UgSlYOe-.js";import{T as e,r as m}from"./index-D0-V-GQF.js";import{M as p}from"./index-Du1GFH8T.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./Link-B_fX3Dxf.js";import"./utils-DLW_tb52.js";import"./useFocusRing-BjAnfjlx.js";import"./usePress-tJArtEap.js";import"./useStyles-0KSv8py2.js";import"./isExternalLink-DzQTpl4p.js";import"./Button.module-BfMMAORH.js";const D={title:"Backstage UI/ButtonLink",component:t,decorators:[n=>r.jsx(p,{children:r.jsx(n,{})})],argTypes:{size:{control:"select",options:["small","medium"]},variant:{control:"select",options:["primary","secondary"]}}},a={args:{children:"Button"}},s={render:()=>r.jsxs(i,{align:"center",children:[r.jsx(t,{iconStart:r.jsx(e,{}),variant:"primary",href:"https://ui.backstage.io",target:"_blank",children:"Button"}),r.jsx(t,{iconStart:r.jsx(e,{}),variant:"secondary",href:"https://ui.backstage.io",target:"_blank",children:"Button"}),r.jsx(t,{iconStart:r.jsx(e,{}),variant:"tertiary",href:"https://ui.backstage.io",target:"_blank",children:"Button"})]})},o={args:{children:"Button"},render:()=>r.jsxs(i,{align:"center",children:[r.jsx(t,{size:"small",iconStart:r.jsx(e,{}),children:"Small"}),r.jsx(t,{size:"medium",iconStart:r.jsx(e,{}),children:"Medium"})]})},c={args:{children:"Button"},render:n=>r.jsxs(i,{align:"center",children:[r.jsx(t,{...n,iconStart:r.jsx(e,{})}),r.jsx(t,{...n,iconEnd:r.jsx(m,{})}),r.jsx(t,{...n,iconStart:r.jsx(e,{}),iconEnd:r.jsx(m,{})})]})},d={args:{children:"Button"},render:n=>r.jsxs(i,{direction:"column",gap:"4",style:{width:"300px"},children:[r.jsx(t,{...n,iconStart:r.jsx(e,{})}),r.jsx(t,{...n,iconEnd:r.jsx(m,{})}),r.jsx(t,{...n,iconStart:r.jsx(e,{}),iconEnd:r.jsx(m,{})})]})},l={render:()=>r.jsxs(i,{direction:"row",gap:"4",children:[r.jsx(t,{variant:"primary",isDisabled:!0,children:"Primary"}),r.jsx(t,{variant:"secondary",isDisabled:!0,children:"Secondary"}),r.jsx(t,{variant:"tertiary",isDisabled:!0,children:"Tertiary"})]})},u={args:{children:"Button",variant:{initial:"primary",sm:"secondary"},size:{xs:"small",sm:"medium"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Flex align="center">
      <ButtonLink iconStart={<RiCloudLine />} variant="primary" href="https://ui.backstage.io" target="_blank">
        Button
      </ButtonLink>
      <ButtonLink iconStart={<RiCloudLine />} variant="secondary" href="https://ui.backstage.io" target="_blank">
        Button
      </ButtonLink>
      <ButtonLink iconStart={<RiCloudLine />} variant="tertiary" href="https://ui.backstage.io" target="_blank">
        Button
      </ButtonLink>
    </Flex>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: () => <Flex align="center">
      <ButtonLink size="small" iconStart={<RiCloudLine />}>
        Small
      </ButtonLink>
      <ButtonLink size="medium" iconStart={<RiCloudLine />}>
        Medium
      </ButtonLink>
    </Flex>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: args => <Flex align="center">
      <ButtonLink {...args} iconStart={<RiCloudLine />} />
      <ButtonLink {...args} iconEnd={<RiArrowRightSLine />} />
      <ButtonLink {...args} iconStart={<RiCloudLine />} iconEnd={<RiArrowRightSLine />} />
    </Flex>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: args => <Flex direction="column" gap="4" style={{
    width: '300px'
  }}>
      <ButtonLink {...args} iconStart={<RiCloudLine />} />
      <ButtonLink {...args} iconEnd={<RiArrowRightSLine />} />
      <ButtonLink {...args} iconStart={<RiCloudLine />} iconEnd={<RiArrowRightSLine />} />
    </Flex>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="row" gap="4">
      <ButtonLink variant="primary" isDisabled>
        Primary
      </ButtonLink>
      <ButtonLink variant="secondary" isDisabled>
        Secondary
      </ButtonLink>
      <ButtonLink variant="tertiary" isDisabled>
        Tertiary
      </ButtonLink>
    </Flex>
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: {
      initial: 'primary',
      sm: 'secondary'
    },
    size: {
      xs: 'small',
      sm: 'medium'
    }
  }
}`,...u.parameters?.docs?.source}}};const E=["Default","Variants","Sizes","WithIcons","FullWidth","Disabled","Responsive"];export{a as Default,l as Disabled,d as FullWidth,u as Responsive,o as Sizes,s as Variants,c as WithIcons,E as __namedExportsOrder,D as default};
