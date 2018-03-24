function Lifx(e){const t=this;if(t.base_url="https://api.lifx.com/v1/",t.token=e,!t.token)throw"An API Authorization token is required. See: https://api.developer.lifx.com/docs/authentication";const o=function(e,t){let r=[];for(const n in e)if(e.hasOwnProperty(n)){const s=t?t+"["+n+"]":n,a=e[n];r.push(null!==a&&"object"==typeof a?o(a,s):encodeURIComponent(s)+"="+encodeURIComponent(a))}return r.join("&")},r=function(e){e=e||{};for(var t=1;t<arguments.length;t++)if(arguments[t])for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(e[o]=arguments[t][o]);return e};t.api={},t.api.call=function(e,r,n,s){if(r=r.replace(/^(\/)/,""),n=n||{},s="string"==typeof s?s:"lights/","object"==typeof n)for(var a in n)n[a]||delete n[a];return function(e,r,n){return new Promise((s,a)=>{let i=new XMLHttpRequest;i.open(e.toUpperCase(),r,!0),i.setRequestHeader("Authorization","Bearer "+t.token),"GET"!==e&&i.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8"),i.onload=(()=>{i.status>=200&&i.status<400?s(JSON.parse(i.responseText)):a(JSON.parse(i.responseText))}),i.onerror=(()=>{a(JSON.parse(i.responseText))}),i.send(o(n||{}))})}(e,t.base_url+(s.trim()?s:"/")+r,n)},t.api.post=function(e,o,r){return t.api.call("post",e,o,r)},t.api.get=function(e,o,r){return t.api.call("get",e,o,r)},t.api.put=function(e,o,r){return t.api.call("put",e,o,r)};const n=e=>((e="string"==typeof e?e:"all").replace(/^(\/)/,"").replace(/$(\/)/,""),e);t.list_lights=(e=>(e=n(e),t.api.get(e))),t.set_state=((e,o)=>{e=n(e);let s=r({power:"on",color:"",brightness:null,duration:null,infrared:null},o||{});return t.api.put(e+"/state",s)}),t.set_states=((e,o)=>t.api.put("states",{states:e||[],defaults:o||{}})),t.state_delta=(e=>{throw e=n(e),"This function is currently not available."}),t.toggle_power=((e,o)=>{e=n(e);let s=r({duration:null},o||{});return t.api.post(e+"/toggle",s)}),t.breath_effect=((e,o)=>{e=n(e);let s=r({color:"",from_color:"",period:null,cycles:null,persist:!1,power_on:!0,peak:null},o||{});return t.api.post(e+"/effects/breathe",s)}),t.pulse_effect=((e,o)=>{e=n(e);let s=r({color:"",from_color:"",period:null,cycles:null,persist:!1,power_on:!0},o||{});return t.api.post(e+"/effects/pulse",s)}),t.cycle=((e,o)=>{e=n(e);let s=r({states:[],defaults:{},direction:"forward"},o||{});return t.api.post(e+"/cycle",s)}),t.list_scenes=(()=>t.api.get("scenes",!1,"")),t.activate_scene=((e,o)=>{let n=r({duration:null,ignore:[],overrides:{}},o||{});return t.api.put("scenes/"+e+"/activate",n,"")}),t.validate_color=(e=>t.api.get("color",{string:e},"")),t.set_color=((e,o,r)=>t.set_state(e,{color:"hue:"+o+" saturation:"+r+" kelvin:3500"})),t.set_white=((e,o)=>t.set_state(e,{color:"hue:0.0 saturation:0.0 kelvin:"+o}))}