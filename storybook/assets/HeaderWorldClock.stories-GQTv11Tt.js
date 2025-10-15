import{j as t}from"./iframe-DB3V3M1P.js";import{HeaderWorldClock as m}from"./index-BokoPQWl.js";import{H as a}from"./Header-BySLmf7P.js";import{w as l}from"./appWrappers-BeCDEZsw.js";import"./preload-helper-D9Z9MdNV.js";import"./HeaderLabel-7xa1e5vb.js";import"./Grid-CfknRkjJ.js";import"./Link-RVX05V_6.js";import"./lodash-CwBbdt2Q.js";import"./index-Du1GFH8T.js";import"./useAnalytics-B8Co1Zeu.js";import"./useApp-B-eWZbLz.js";import"./Helmet-BGx6lV-m.js";import"./Box-0UP6uhAK.js";import"./styled-BOZdy0F_.js";import"./Breadcrumbs-Bf-LYTTp.js";import"./index-DnL3XN75.js";import"./Popover-BMFySmHA.js";import"./Modal-DIoR7U7c.js";import"./Portal-gznPE8xU.js";import"./List-DSugy7pP.js";import"./ListContext-DsqJshhp.js";import"./ListItem-DNGvtZA3.js";import"./Page-DE0PgqzH.js";import"./useMediaQuery-Dww4fk3e.js";import"./Tooltip-V48XKOvh.js";import"./Popper-BQ7Pkv4c.js";import"./useObservable-Yiafstbl.js";import"./useIsomorphicLayoutEffect-iZVaeubF.js";import"./useAsync-_mGEXzu1.js";import"./useMountedState-DeruiZOZ.js";import"./componentData-mQLuWRkV.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const z={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
