import{j as t}from"./iframe-B5rMEWCp.js";import{HeaderWorldClock as m}from"./index-BE_XadGA.js";import{H as a}from"./Header-C7BKvg_f.js";import{w as l}from"./appWrappers-B511bzGN.js";import"./preload-helper-D9Z9MdNV.js";import"./HeaderLabel-DPHP42UY.js";import"./Grid-jWNlySLb.js";import"./Link-0czgN89A.js";import"./lodash-CwBbdt2Q.js";import"./index-MUA7jQ1z.js";import"./useAnalytics-6w7twaBy.js";import"./useApp-DWoVMNMG.js";import"./Helmet-CDl6w9UR.js";import"./Box-DraZup6g.js";import"./styled-DKDAvYRr.js";import"./Breadcrumbs-C999S0Te.js";import"./index-DnL3XN75.js";import"./Popover-Da53lhhD.js";import"./Modal-BsquyvUk.js";import"./Portal-Cv57nohz.js";import"./List-BxiaGTP_.js";import"./ListContext-Csw49CaR.js";import"./ListItem-qaMppy6r.js";import"./Page-Cjk1SqED.js";import"./useMediaQuery-B6YDIO6B.js";import"./Tooltip-DGSrdRU4.js";import"./Popper-CsrQ0e5W.js";import"./useObservable-BvuT0Te7.js";import"./useIsomorphicLayoutEffect-6Fynx8Lg.js";import"./useAsync-BUWxRdKg.js";import"./useMountedState-CZfGw8DF.js";import"./componentData-CZLmI_Bg.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const z={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  return <Header title="Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  return <Header title="24hr Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...r.parameters?.docs?.source}}};const B=["Default","TwentyFourHourClocks"];export{e as Default,r as TwentyFourHourClocks,B as __namedExportsOrder,z as default};
