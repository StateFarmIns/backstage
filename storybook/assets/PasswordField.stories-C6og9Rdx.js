import{r as W,j as e}from"./iframe-DRkdG3e7.js";import{$ as A}from"./Button-7v72ENDr.js";import{$ as B}from"./Input-CTHWiPCl.js";import{$ as O}from"./TextField-Dpz9w2_Z.js";import{c as l}from"./clsx-B-dksMZM.js";import{F as L}from"./FieldLabel-Bp8qg6p8.js";import{F as H,$ as U}from"./FieldError-wq6_h5HW.js";import{u as P}from"./useStyles-JllvZotu.js";import{d as X,h as Y,O as D}from"./index-Dz0edcfd.js";import{s as m}from"./TextField.module-BNd6YL_d.js";import{F as G}from"./Flex-CgL7uJ5F.js";import"./preload-helper-D9Z9MdNV.js";import"./utils-Do8wdv2E.js";import"./Hidden-DXPHu43e.js";import"./useFocusRing-DcL9jFdt.js";import"./usePress-B_v-tpR2.js";import"./useFormReset-CMFGt5H1.js";import"./useControlledState-CArjyaSO.js";import"./RSPContexts-RNgqLzns.js";import"./Label-B_MQmI76.js";import"./useLabels-BGnuAS3A.js";const I={"bui-PasswordField":"_bui-PasswordField_1lxk6_20","bui-InputVisibility":"_bui-InputVisibility_1lxk6_30","bui-InputWrapper":"_bui-InputWrapper_1lxk6_67","bui-Input":"_bui-Input_1lxk6_30"},t=W.forwardRef((a,z)=>{const{label:y,"aria-label":v,"aria-labelledby":j}=a;W.useEffect(()=>{!y&&!v&&!j&&console.warn("PasswordField requires either a visible label, aria-label, or aria-labelledby for accessibility")},[y,v,j]);const{classNames:s}=P("TextField"),{classNames:d,dataAttributes:c,cleanedProps:R}=P("PasswordField",{size:"small",...a}),{className:N,description:_,icon:S,isRequired:$,secondaryLabel:V,placeholder:k,...q}=R,E=V||($?"Required":null),[n,T]=W.useState(!1);return e.jsxs(O,{className:l(d.root,I[d.root],N),...c,"aria-label":v,"aria-labelledby":j,type:"password",...q,ref:z,children:[e.jsx(L,{label:y,secondaryLabel:E,description:_}),e.jsxs("div",{className:l(s.inputWrapper,m[s.inputWrapper]),"data-size":c["data-size"],children:[S&&e.jsx("div",{className:l(s.inputIcon,m[s.inputIcon]),"data-size":c["data-size"],"aria-hidden":"true",children:S}),e.jsx("div",{className:l(s.inputAction,m[s.inputAction]),children:e.jsx(A,{"data-size":c["data-size"],"data-variant":"tertiary","aria-label":n?"Hide value":"Show value","aria-controls":n?"text":"password","aria-expanded":n,onPress:()=>T(C=>!C),className:l(d.inputVisibility,I[d.inputVisibility]),children:n?e.jsx(X,{}):e.jsx(Y,{})})}),e.jsx(B,{className:l(s.input,m[s.input]),...S&&{"data-icon":!0},placeholder:k,type:n?"text":"password"})]}),e.jsx(H,{})]})});t.displayName="PasswordField";t.__docgenInfo={description:"@public",methods:[],displayName:"PasswordField",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:"An icon to render before the input"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | Partial<Record<Breakpoint, 'small' | 'medium'>>",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]}],raw:"Record<Breakpoint, 'small' | 'medium'>"}],raw:"Partial<Record<Breakpoint, 'small' | 'medium'>>"}]},description:`The size of the password field
@defaultValue 'medium'`},placeholder:{required:!1,tsType:{name:"string"},description:"Text to display in the input when it has no value"}},composes:["AriaTextFieldProps","Omit"]};const fe={title:"Backstage UI/PasswordField",component:t,argTypes:{isRequired:{control:"boolean"},icon:{control:"object"}}},r={args:{name:"secret",placeholder:"Enter a secret",style:{maxWidth:"300px"}}},u={args:{...r.args},render:a=>e.jsxs(G,{direction:"row",gap:"4",style:{width:"100%",maxWidth:"600px"},children:[e.jsx(t,{...a,size:"small",icon:e.jsx(D,{})}),e.jsx(t,{...a,size:"medium",icon:e.jsx(D,{})})]})},p={args:{...r.args,defaultValue:"https://example.com"}},i={args:{...r.args,label:"Label"}},b={args:{...i.args,description:"Description"}},g={args:{...i.args,isRequired:!0}},f={args:{...r.args,isDisabled:!0}},o={args:{...r.args},render:a=>e.jsx(t,{...a,size:"small",icon:e.jsx(D,{})})},x={args:{...o.args,isDisabled:!0},render:o.render},h={args:{...i.args},render:a=>e.jsx(U,{validationErrors:{secret:"Invalid secret"},children:e.jsx(t,{...a})})},F={args:{...i.args,validate:a=>a==="admin"?"Nice try!":null}},w={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(L,{htmlFor:"custom-field",id:"custom-field-label",label:"Custom Field"}),e.jsx(t,{id:"custom-field","aria-labelledby":"custom-field-label",name:"custom-field",defaultValue:"Custom Field"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'secret',
    placeholder: 'Enter a secret',
    style: {
      maxWidth: '300px'
    }
  }
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <Flex direction="row" gap="4" style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <PasswordField {...args} size="small" icon={<RiSparklingLine />} />
      <PasswordField {...args} size="medium" icon={<RiSparklingLine />} />
    </Flex>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultValue: 'https://example.com'
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Label'
  }
}`,...i.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args,
    description: 'Description'
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args,
    isRequired: true
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDisabled: true
  }
}`,...f.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <PasswordField {...args} size="small" icon={<RiSparklingLine />} />
}`,...o.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithIcon.args,
    isDisabled: true
  },
  render: WithIcon.render
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args
  },
  render: args => <Form validationErrors={{
    secret: 'Invalid secret'
  }}>
      <PasswordField {...args} />
    </Form>
}`,...h.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args,
    validate: value => value === 'admin' ? 'Nice try!' : null
  }
}`,...F.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <FieldLabel htmlFor="custom-field" id="custom-field-label" label="Custom Field" />
      <PasswordField id="custom-field" aria-labelledby="custom-field-label" name="custom-field" defaultValue="Custom Field" />
    </>
}`,...w.parameters?.docs?.source}}};const xe=["Default","Sizes","DefaultValue","WithLabel","WithDescription","Required","Disabled","WithIcon","DisabledWithIcon","ShowError","Validation","CustomField"];export{w as CustomField,r as Default,p as DefaultValue,f as Disabled,x as DisabledWithIcon,g as Required,h as ShowError,u as Sizes,F as Validation,b as WithDescription,o as WithIcon,i as WithLabel,xe as __namedExportsOrder,fe as default};
