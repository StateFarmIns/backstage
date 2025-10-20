import{j as t}from"./iframe-DRkdG3e7.js";import{HeaderWorldClock as m}from"./index-BiooVwlI.js";import{H as a}from"./Header-TaOu6Z4-.js";import{w as l}from"./appWrappers-BiQeAojd.js";import"./preload-helper-D9Z9MdNV.js";import"./HeaderLabel-BjwE25N3.js";import"./Grid-DdhP03dT.js";import"./Link-D0rSWwVe.js";import"./lodash-CwBbdt2Q.js";import"./index-DZ62LnLt.js";import"./useAnalytics-D4adgS3v.js";import"./useApp-5eUlhv-k.js";import"./Helmet-ZQIOoyK3.js";import"./Box-DaHRDmmG.js";import"./styled-6jkyVhJx.js";import"./Breadcrumbs-CdqXel2U.js";import"./index-DnL3XN75.js";import"./Popover-B-X0WTTG.js";import"./Modal-BuulqZEo.js";import"./Portal-B7yT6sF2.js";import"./List-T0-85Df0.js";import"./ListContext-Cal3OaXT.js";import"./ListItem-C5uPx8az.js";import"./Page-UNMNBrNq.js";import"./useMediaQuery-CaqT71cc.js";import"./Tooltip-COGr6yaA.js";import"./Popper-xbOvXIVU.js";import"./useObservable-77iucGGI.js";import"./useIsomorphicLayoutEffect-Bk6oB7m6.js";import"./useAsync-BIYzE4vq.js";import"./useMountedState-BzKksOdK.js";import"./componentData-BPiMkAmd.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const z={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
