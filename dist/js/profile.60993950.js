(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"016b":function(t,e,s){"use strict";var o=s("a0e9"),i=s.n(o);i.a},"0658":function(t,e,s){"use strict";var o=s("30d5"),i=s.n(o);i.a},"1da4":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav-content",{ref:"container",attrs:{title:t.user.displayName,"bg-color":t.color},scopedSlots:t._u([{key:"nav",fn:function(){return[s("v-tabs",{staticStyle:{"justify-content":"center"},attrs:{value:t.focusIndex,vertical:t.isDesktop,grow:"","background-color":"rgba(0,0,0,0)","slider-size":t.isDesktop?"0":"2","active-class":"current"}},t._l(t.sortedSections,(function(e,o){return s("v-tab",{key:e.id,on:{click:function(e){return e.preventDefault(),t.tabFocus(o)}}},[t._v(" "+t._s(e.name)+" ")])})),1)]},proxy:!0},{key:"content",fn:function(){return[s("v-container",{ref:"wrapper",staticStyle:{width:"90%","max-width":"50rem"}},t._l(t.sortedSections,(function(e,o){return s("v-row",{key:e.id,ref:"sections",refInFor:!0},[s("v-col",{attrs:{cols:"12"}},[e.chips?s("chips-section",{attrs:{section:e,focus:o===t.focusIndex}}):t._e(),e.lines?s("lines-section",{attrs:{section:e,focus:o===t.focusIndex}}):t._e()],1),o<t.sections.length-1?s("v-col",{attrs:{cols:"12"}},[s("v-divider",{staticClass:"my-2"})],1):t._e()],1)})),1),t.isLoopOn?s("v-container",{ref:"clones",staticStyle:{width:"90%","max-width":"50rem"}},t._l(t.cloneSections,(function(e,o){return s("v-row",{key:o},[s("v-col",{attrs:{cols:"12"}},[e.chips?s("chips-section",{attrs:{section:e,focus:o===t.focusIndex}}):t._e(),e.lines?s("lines-section",{attrs:{section:e,focus:o===t.focusIndex}}):t._e()],1),o<t.sections.length-1?s("v-col",{attrs:{cols:"12"}},[s("v-divider",{staticClass:"my-2"})],1):t._e()],1)})),1):t._e()]},proxy:!0}])})},i=[],n=(s("4160"),s("159b"),s("96cf"),s("1da1")),c=s("2909"),r=s("5530"),a=s("2f62"),l=(s("d3b7"),function(t){return new Promise((function(e){return setTimeout(e,t)}))}),u=s("ed9d"),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{outlined:!t.focus}},[s("v-toolbar",{class:{"text--primary":t.focus,outfocus:!t.focus},attrs:{color:t.focus?t.color+" lighten-4":"",flat:"",light:""}},[s("h2",{staticClass:"title"},[t._v(t._s(t.section.name))])]),s("v-card-text",[s("v-chip-group",{attrs:{column:""}},t._l(t.section.chips,(function(e,o){return s("v-chip",{key:o,staticClass:"ma-2",attrs:{color:t.focus?t.color+" lighten-4":t.color+" lighten-5"}},[e.icon?s("v-icon",{staticClass:"mr-2",class:{outfocus:!t.focus}},[t._v(t._s(e.icon))]):t._e(),s("span",{class:{outfocus:!t.focus}},[t._v(t._s(e.text))])],1)})),1)],1)],1)},f=[],d={name:"ChipsSection",props:{section:Object,focus:Boolean},computed:Object(r["a"])({},Object(a["c"])("profile",["color"]))},p=d,v=(s("0658"),s("2877")),b=s("6544"),m=s.n(b),g=s("b0af"),w=s("99d9"),C=(s("4de4"),s("3835")),k=(s("8adc"),s("58df")),_=s("0789"),x=s("9d26"),O=s("a9ad"),S=s("4e82"),j=s("7560"),y=s("f2e7"),V=s("1c87"),$=s("af2b"),B=s("d9bd"),P=Object(k["a"])(O["a"],$["a"],V["a"],j["a"],Object(S["a"])("chipGroup"),Object(y["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({"v-chip":!0},V["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(V["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var s=Object(C["a"])(e,2),o=s[0],i=s[1];t.$attrs.hasOwnProperty(o)&&Object(B["a"])(o,i,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(x["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(_["b"],t)},genClose:function(){var t=this;return this.$createElement(x["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],s=this.generateRouteLink(),o=s.tag,i=s.data;i.attrs=Object(r["a"])(Object(r["a"])({},i.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex}),i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);var n=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(n,i),e)}}),I=(s("8f5a"),s("7efd")),E=Object(k["a"])(I["a"],O["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},I["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object(r["a"])({},I["a"].options.methods.genData.call(this)))}}}),T=s("132d"),L=s("71d9"),R=Object(v["a"])(p,h,f,!1,null,"009154b9",null),z=R.exports;m()(R,{VCard:g["a"],VCardText:w["b"],VChip:P,VChipGroup:E,VIcon:T["a"],VToolbar:L["a"]});var D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{outlined:!t.focus}},[s("v-toolbar",{class:{"text--primary":t.focus,outfocus:!t.focus},attrs:{color:t.focus?t.color+" lighten-4":"",flat:""}},[s("h2",{staticClass:"title"},[t._v(t._s(t.section.name))])]),s("v-card-text",[s("v-container",{class:{"text--primary":t.focus}},t._l(t.section.lines,(function(e,o){return s("v-row",{key:o,staticClass:"mb-4",attrs:{dense:""}},[s("v-col",{attrs:{cols:"7"}},[s("h2",{staticClass:"title"},[t._v(t._s(e.title))]),s("h4",{staticClass:"subtitle-2"},[t._v(t._s(e.subTitle))])]),s("v-col",{staticClass:"text-right",attrs:{cols:"5"}},[s("h4",{staticClass:"subtitle-2"},[t._v(t._s(e.secondTitle))]),s("h4",{staticClass:"subtitle-2"},[t._v(t._s(e.secondSub))])]),s("v-col",{attrs:{cols:"12"}},[s("ul",t._l(e.bulletPb,(function(e,o){return s("li",{key:o},[t._v(" "+t._s(e)+" ")])})),0)])],1)})),1)],1)],1)},G=[],F={name:"LinesSection",props:{section:Object,focus:Boolean},computed:Object(r["a"])({},Object(a["c"])("profile",["color"]))},M=F,A=(s("016b"),s("62ad")),H=s("a523"),J=s("0fd9"),N=Object(v["a"])(M,D,G,!1,null,"1b84e20a",null),U=N.exports;m()(N,{VCard:g["a"],VCardText:w["b"],VCol:A["a"],VContainer:H["a"],VRow:J["a"],VToolbar:L["a"]});var Y={name:"UserProfile",components:{NavContent:u["a"],ChipsSection:z,LinesSection:U},data:function(){return{focusIndex:0,scrollPoints:[],watchScroll:!0,isLoopOn:!1,cloneSections:[]}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(a["c"])("alias",{user:"current"})),Object(a["c"])("profile",{sections:"items",color:"color"})),{},{isDesktop:function(){return this.$vuetify.breakpoint.mdAndUp},sortedSections:function(){return this.sections?Object(c["a"])(this.sections).sort((function(t,e){var s=t.priority?t.priority:0,o=e.priority?e.priority:0;return o-s})):[]}}),watch:{alias:{handler:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.readProfileMeta();case 2:return e.next=4,t.readProfile();case 4:case"end":return e.stop()}}),e)})))()},immediate:!0},sortedSections:{handler:function(t){t&&t.length&&(window.removeEventListener("resize",this.checkViewSize),window.removeEventListener("scroll",this.checkScroll),this.checkViewSize(),window.addEventListener("resize",this.checkViewSize),window.addEventListener("scroll",this.checkScroll))},immediate:!0}},mounted:function(){window.scrollTo(0,1)},destroyed:function(){window.removeEventListener("resize",this.checkViewSize),window.removeEventListener("scroll",this.checkScroll)},methods:Object(r["a"])(Object(r["a"])({},Object(a["b"])("profile",{readProfile:"getAll",readProfileMeta:"readMeta"})),{},{getScrollPb:function(){this.scrollPoints=[];var t=this.scrollPoints,e=window,s=e.scrollY,o=this.isDesktop?0:64;this.$refs.sections.forEach((function(e,i){t[i]=s+Math.floor(e.getBoundingClientRect().y)-o}))},checkScroll:function(){var t=this,e=96;if(this.watchScroll){var s=window,o=s.scrollY;if(this.$refs.wrapper.getBoundingClientRect().bottom<e?this.focusIndex=0:this.scrollPoints.forEach((function(s,i){if(i!==t.focusIndex){var n=0===i||o>s-e,c=i===t.scrollPoints.length-1||o<t.scrollPoints[i+1]-e;n&&c&&(t.watchScroll=!1,t.focusIndex=i,t.watchScroll=!0)}})),this.isLoopOn){var i=this.isDesktop?0:64,n=this.$refs.clones.getBoundingClientRect().y;if(n<i){var c=this.isDesktop?1:288;return window.scrollTo(0,c)}var r=this.$refs.wrapper.getBoundingClientRect().bottom;if(this.isDesktop&&0===o)return window.scrollTo(0,r)}}},checkViewSize:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,o,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l(200);case 2:if(s=window.innerHeight,o=t.$refs.wrapper.offsetHeight,t.getScrollPb(),o>s){t.isLoopOn=!0,i=t.scrollPoints[0],n=0;while(i<s)t.cloneSections.push(t.sortedSections[n]),i+=t.$refs.sections[n].offsetHeight,n+=1}else t.isLoopOn=!1;case 6:case"end":return e.stop()}}),e)})))()},tabFocus:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!e.watchScroll||t===e.focusIndex){s.next=8;break}return e.focusIndex=t,e.watchScroll=!1,s.next=5,e.$vuetify.goTo(e.scrollPoints[t]);case 5:return s.next=7,l(100);case 7:e.watchScroll=!0;case 8:case"end":return s.stop()}}),s)})))()}})},q=Y,K=s("ce7e"),Q=s("71a3"),W=s("fe57"),X=Object(v["a"])(q,o,i,!1,null,null,null);e["default"]=X.exports;m()(X,{VCol:A["a"],VContainer:H["a"],VDivider:K["a"],VRow:J["a"],VTab:Q["a"],VTabs:W["a"]})},"30d5":function(t,e,s){},"8adc":function(t,e,s){},"8f5a":function(t,e,s){},a0e9:function(t,e,s){}}]);
//# sourceMappingURL=profile.60993950.js.map