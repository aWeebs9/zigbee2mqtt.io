"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[29097],{93755:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-5ab388c0",path:"/devices/SZ-SRN12N.html",title:"SmartThings SZ-SRN12N control via MQTT",lang:"en-US",frontmatter:{title:"SmartThings SZ-SRN12N control via MQTT",description:"Integrate your SmartThings SZ-SRN12N via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-01-14T19:34:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Warning (composite)",slug:"warning-composite",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SZ-SRN12N.md",git:{updatedTime:1636737598e3}}},55383:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const d=(0,o(66252).uE)('<h1 id="smartthings-sz-srn12n" tabindex="-1"><a class="header-anchor" href="#smartthings-sz-srn12n" aria-hidden="true">#</a> SmartThings SZ-SRN12N</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SZ-SRN12N</td></tr><tr><td>Vendor</td><td>SmartThings</td></tr><tr><td>Description</td><td>Smart siren</td></tr><tr><td>Exposes</td><td>warning, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SZ-SRN12N.jpg" alt="SmartThings SZ-SRN12N"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite" aria-hidden="true">#</a> Warning (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe_level&quot;: VALUE, &quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect). Allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>level</code> (enum): Sound level. Allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe_level</code> (enum): Intensity of the strobe. Allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning. Allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle.</li><li><code>duration</code> (numeric): Duration in seconds of the alarm.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),i={},r=(0,o(83744).Z)(i,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);