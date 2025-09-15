import{$ as e,C as t,D as n,E as r,F as i,G as a,H as o,I as s,K as c,M as l,O as u,P as d,Q as f,R as p,S as m,T as h,U as g,V as _,W as ee,X as v,Y as y,Z as b,a1 as x,a3 as S,b as te,e as C,f as w,g as ne,h as T,i as E,j as D,k as O,l as k,m as re,n as A,o as j,p as M,q as ie,r as N,s as P,t as F,u as I,v as ae,x as oe,y as se,z as L}from"./index-qVpZt7F3.js";var ce=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        background: dt('tabs.tablist.background');
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,le={root:function(e){var t=e.props;return[`p-tabs p-component`,{"p-tabs-scrollable":t.scrollable}]}},R=D.extend({name:`tabs`,style:ce,classes:le}),z={name:`BaseTabs`,extends:T,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:R,provide:function(){return{$pcTabs:this,$parentInstance:this}}},B={name:`Tabs`,extends:z,inheritAttrs:!1,emits:[`update:value`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit(`update:value`,e))},isVertical:function(){return this.orientation===`vertical`}}};function V(e,t,n,r,a,o){return f(),i(`div`,c({class:e.cx(`root`)},e.ptmi(`root`)),[m(e.$slots,`default`)],16)}B.render=V;var H={name:`ChevronLeftIcon`,extends:C};function U(e,n,r,a,o,s){return f(),i(`svg`,c({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),n[0]||=[t(`path`,{d:`M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z`,fill:`currentColor`},null,-1)],16)}H.render=U;var W={name:`ChevronRightIcon`,extends:C};function ue(e,n,r,a,o,s){return f(),i(`svg`,c({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),n[0]||=[t(`path`,{d:`M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z`,fill:`currentColor`},null,-1)],16)}W.render=ue;var de={root:`p-tablist`,content:`p-tablist-content p-tablist-viewport`,tabList:`p-tablist-tab-list`,activeBar:`p-tablist-active-bar`,prevButton:`p-tablist-prev-button p-tablist-nav-button`,nextButton:`p-tablist-next-button p-tablist-nav-button`},fe=D.extend({name:`tablist`,classes:de}),pe={name:`BaseTabList`,extends:T,props:{},style:fe,provide:function(){return{$pcTabList:this,$parentInstance:this}}},G={name:`TabList`,extends:pe,inheritAttrs:!1,inject:[`$pcTabs`],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:`post`,handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,t=this.getVisibleButtonWidths(),n=M(e)-t,r=Math.abs(e.scrollLeft),i=n*.8,a=r-i,o=Math.max(a,0);e.scrollLeft=N(e)?-1*o:o},onNextButtonClick:function(){var e=this.$refs.content,t=this.getVisibleButtonWidths(),n=M(e)-t,r=Math.abs(e.scrollLeft),i=n*.8,a=r+i,o=e.scrollWidth-n,s=Math.min(a,o);e.scrollLeft=N(e)?-1*s:s},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)==null||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,t=e.content,n=e.inkbar,r=e.tabs;if(n){var i=I(t,`[data-pc-name="tab"][data-p-active="true"]`);this.$pcTabs.isVertical()?(n.style.height=re(i)+`px`,n.style.top=A(i).top-A(r).top+`px`):(n.style.width=F(i)+`px`,n.style.left=A(i).left-A(r).left+`px`)}},updateButtonState:function(){var e=this.$refs,t=e.list,n=e.content,r=n.scrollTop,i=n.scrollWidth,a=n.scrollHeight,o=n.offsetWidth,s=n.offsetHeight,c=Math.abs(n.scrollLeft),l=[M(n),ie(n)],u=l[0],d=l[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=r!==0,this.isNextButtonEnabled=t.offsetHeight>=s&&parseInt(r)!==a-d):(this.isPrevButtonEnabled=c!==0,this.isNextButtonEnabled=t.offsetWidth>=o&&parseInt(c)!==i-u)},getVisibleButtonWidths:function(){var e=this.$refs,t=e.prevButton,n=e.nextButton,r=0;return this.showNavigators&&(r=(t?.offsetWidth||0)+(n?.offsetWidth||0)),r}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return O({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:H,ChevronRightIcon:W},directives:{ripple:E}},me=[`data-p`],he=[`aria-label`,`tabindex`],ge=[`data-p`],_e=[`aria-orientation`],ve=[`aria-label`,`tabindex`];function ye(e,a,o,s,l,u){var d=g(`ripple`);return f(),i(`div`,c({ref:`list`,class:e.cx(`root`),"data-p":u.dataP},e.ptmi(`root`)),[u.showNavigators&&l.isPrevButtonEnabled?y((f(),i(`button`,c({key:0,ref:`prevButton`,type:`button`,class:e.cx(`prevButton`),"aria-label":u.prevButtonAriaLabel,tabindex:u.$pcTabs.tabindex,onClick:a[0]||=function(){return u.onPrevButtonClick&&u.onPrevButtonClick.apply(u,arguments)}},e.ptm(`prevButton`),{"data-pc-group-section":`navigator`}),[(f(),n(_(u.templates.previcon||`ChevronLeftIcon`),c({"aria-hidden":`true`},e.ptm(`prevIcon`)),null,16))],16,he)),[[d]]):r(``,!0),t(`div`,c({ref:`content`,class:e.cx(`content`),onScroll:a[1]||=function(){return u.onScroll&&u.onScroll.apply(u,arguments)},"data-p":u.dataP},e.ptm(`content`)),[t(`div`,c({ref:`tabs`,class:e.cx(`tabList`),role:`tablist`,"aria-orientation":u.$pcTabs.orientation||`horizontal`},e.ptm(`tabList`)),[m(e.$slots,`default`),t(`span`,c({ref:`inkbar`,class:e.cx(`activeBar`),role:`presentation`,"aria-hidden":`true`},e.ptm(`activeBar`)),null,16)],16,_e)],16,ge),u.showNavigators&&l.isNextButtonEnabled?y((f(),i(`button`,c({key:1,ref:`nextButton`,type:`button`,class:e.cx(`nextButton`),"aria-label":u.nextButtonAriaLabel,tabindex:u.$pcTabs.tabindex,onClick:a[2]||=function(){return u.onNextButtonClick&&u.onNextButtonClick.apply(u,arguments)}},e.ptm(`nextButton`),{"data-pc-group-section":`navigator`}),[(f(),n(_(u.templates.nexticon||`ChevronRightIcon`),c({"aria-hidden":`true`},e.ptm(`nextIcon`)),null,16))],16,ve)),[[d]]):r(``,!0)],16,me)}G.render=ye;var be={root:function(e){var t=e.instance,n=e.props;return[`p-tab`,{"p-tab-active":t.active,"p-disabled":n.disabled}]}},xe=D.extend({name:`tab`,classes:be}),Se={name:`BaseTab`,extends:T,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:xe,provide:function(){return{$pcTab:this,$parentInstance:this}}},K={name:`Tab`,extends:Se,inheritAttrs:!1,inject:[`$pcTabs`,`$pcTabList`],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowRight`:this.onArrowRightKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e);break}},onArrowRightKey:function(e){var t=this.findNextTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var t=this.findPrevTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstTab();this.changeFocusedTab(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastTab();this.changeFocusedTab(e,t),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=t?e:e.nextElementSibling;return n?j(n,`data-p-disabled`)||j(n,`data-pc-section`)===`activebar`?this.findNextTab(n):I(n,`[data-pc-name="tab"]`):null},findPrevTab:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=t?e:e.previousElementSibling;return n?j(n,`data-p-disabled`)||j(n,`data-pc-section`)===`activebar`?this.findPrevTab(n):I(n,`[data-pc-name="tab"]`):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,t){P(t),this.scrollInView(t)},scrollInView:function(e){var t;e==null||(t=e.scrollIntoView)==null||t.call(e,{block:`nearest`})}},computed:{active:function(){var e;return k((e=this.$pcTabs)?.d_value,this.value)},id:function(){var e;return`${(e=this.$pcTabs)?.$id}_tab_${this.value}`},ariaControls:function(){var e;return`${(e=this.$pcTabs)?.$id}_tabpanel_${this.value}`},attrs:function(){return c(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:`tab`,"aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":`tab`,"data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return O({active:this.active})}},directives:{ripple:E}};function Ce(e,t,r,i,a,o){var s=g(`ripple`);return e.asChild?m(e.$slots,`default`,{key:1,dataP:o.dataP,class:x(e.cx(`root`)),active:o.active,a11yAttrs:o.a11yAttrs,onClick:o.onClick}):y((f(),n(_(e.as),c({key:0,class:e.cx(`root`),"data-p":o.dataP,onClick:o.onClick},o.attrs),{default:v(function(){return[m(e.$slots,`default`)]}),_:3},16,[`class`,`data-p`,`onClick`])),[[s]])}K.render=Ce;const we={class:`card`},Te={class:`flex items-center gap-2 text-inherit`},Ee={__name:`PaddleCard`,setup(t){let r=b(!1),s=ae(),c=s.name,m=b(c);d(()=>{console.log(`调用时机为组件卸载时`)}),u(()=>{r.value=!0}),l(()=>{}),ee(()=>s.path,e=>{m.value=e});let h=b([{route:`ContentView`,label:`推荐`,icon:`pi pi-home`},{route:`BBSView`,label:`Transactions`,icon:`pi pi-chart-line`},{route:`RankingView`,label:`Transactions`,icon:`pi pi-chart-line`}]);function g(e){te.push({name:e})}return(t,r)=>{let s=K,l=G,u=B,d=E;return f(),i(`div`,we,[o(u,{value:e(c)},{default:v(()=>[o(l,null,{default:v(()=>[(f(!0),i(L,null,p(h.value,e=>(f(),n(s,{key:e.label,value:e.route,onClick:t=>g(e.route)},{default:v(()=>[y((f(),i(`div`,Te,[a(S(e.label),1)])),[[d]])]),_:2},1032,[`value`,`onClick`]))),128))]),_:1})]),_:1},8,[`value`])])}}};var De=w(Ee,[[`__scopeId`,`data-v-6f196faa`]]),q={name:`MinusIcon`,extends:C};function Oe(e,n,r,a,o,s){return f(),i(`svg`,c({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),n[0]||=[t(`path`,{d:`M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z`,fill:`currentColor`},null,-1)],16)}q.render=Oe;var J={name:`PlusIcon`,extends:C};function ke(e,n,r,a,o,s){return f(),i(`svg`,c({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),n[0]||=[t(`path`,{d:`M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z`,fill:`currentColor`},null,-1)],16)}J.render=ke;var Ae=`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`,je={root:function(e){var t=e.props;return[`p-fieldset p-component`,{"p-fieldset-toggleable":t.toggleable}]},legend:`p-fieldset-legend`,legendLabel:`p-fieldset-legend-label`,toggleButton:`p-fieldset-toggle-button`,toggleIcon:`p-fieldset-toggle-icon`,contentContainer:`p-fieldset-content-container`,content:`p-fieldset-content`},Me=D.extend({name:`fieldset`,style:Ae,classes:je}),Ne={name:`BaseFieldset`,extends:T,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:Me,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},Y={name:`Fieldset`,extends:Ne,inheritAttrs:!1,emits:[`update:collapsed`,`toggle`],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit(`update:collapsed`,this.d_collapsed),this.$emit(`toggle`,{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return O({toggleable:this.toggleable})}},directives:{ripple:E},components:{PlusIcon:J,MinusIcon:q}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Z(Object(n),!0).forEach(function(t){Pe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Pe(e,t,n){return(t=Fe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fe(e){var t=Ie(e,`string`);return X(t)==`symbol`?t:t+``}function Ie(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Le=[`data-p`],Re=[`data-p`],ze=[`id`],Be=[`id`,`aria-controls`,`aria-expanded`,`aria-label`],$=[`id`,`aria-labelledby`];function Ve(e,a,s,l,u,d){var p=g(`ripple`);return f(),i(`fieldset`,c({class:e.cx(`root`),"data-p":d.dataP},e.ptmi(`root`)),[t(`legend`,c({class:e.cx(`legend`),"data-p":d.dataP},e.ptm(`legend`)),[m(e.$slots,`legend`,{toggleCallback:d.toggle},function(){return[e.toggleable?r(``,!0):(f(),i(`span`,c({key:0,id:e.$id+`_header`,class:e.cx(`legendLabel`)},e.ptm(`legendLabel`)),S(e.legend),17,ze)),e.toggleable?y((f(),i(`button`,c({key:1,id:e.$id+`_header`,type:`button`,"aria-controls":e.$id+`_content`,"aria-expanded":!u.d_collapsed,"aria-label":d.buttonAriaLabel,class:e.cx(`toggleButton`),onClick:a[0]||=function(){return d.toggle&&d.toggle.apply(d,arguments)},onKeydown:a[1]||=function(){return d.onKeyDown&&d.onKeyDown.apply(d,arguments)}},Q(Q({},e.toggleButtonProps),e.ptm(`toggleButton`))),[m(e.$slots,e.$slots.toggleicon?`toggleicon`:`togglericon`,{collapsed:u.d_collapsed,class:x(e.cx(`toggleIcon`))},function(){return[(f(),n(_(u.d_collapsed?`PlusIcon`:`MinusIcon`),c({class:e.cx(`toggleIcon`)},e.ptm(`toggleIcon`)),null,16,[`class`]))]}),t(`span`,c({class:e.cx(`legendLabel`)},e.ptm(`legendLabel`)),S(e.legend),17)],16,Be)),[[p]]):r(``,!0)]})],16,Re),o(oe,c({name:`p-toggleable-content`},e.ptm(`transition`)),{default:v(function(){return[y(t(`div`,c({id:e.$id+`_content`,class:e.cx(`contentContainer`),role:`region`,"aria-labelledby":e.$id+`_header`},e.ptm(`contentContainer`)),[t(`div`,c({class:e.cx(`content`)},e.ptm(`content`)),[m(e.$slots,`default`)],16)],16,$),[[se,!u.d_collapsed]])]}),_:3},16)],16,Le)}Y.render=Ve;const He={class:`product-introduction`},Ue={__name:`ProductIntroduction`,setup(e){return(e,n)=>{let r=Y;return f(),i(`div`,He,[o(r,{legend:`Vue 3 新特性`},{default:v(()=>[...n[0]||=[t(`p`,{class:`m-0`},` 渐进式 JavaScript 框架、易学易用、性能出色、适用场景丰富的 Web 前端框架。 `,-1)]]),_:1})])}}};var We=w(Ue,[[`__scopeId`,`data-v-23c54ab6`]]);const Ge={class:`skeleton-wrapper`},Ke={__name:`Skeleton`,setup(e){return(e,n)=>(f(),i(`div`,Ge,[n[0]||=t(`div`,{class:`skeleton_acer_title`},[t(`div`,{class:`skeleton skeleton-title`}),t(`div`,{class:`skeleton_title_avit`})],-1),(f(),i(L,null,p(3,e=>t(`div`,{class:`skeleton skeleton-text`,key:e})),64)),n[1]||=t(`div`,{class:`skeleton_acer`},[t(`div`,{class:`skeleton skeleton-btn`}),t(`div`,{class:`skeleton skeleton-btn`})],-1)]))}};var qe=Ke;const Je={key:1,class:`skeletons_acer_acer`};var Ye=s({__name:`Home`,setup(t){let a=ne(),s=b(null),c=e=>{let t=e.target.scrollTop;a.setScrollTopAcer(t)};return u(()=>{a.setScrollTopAcer(0),window.addEventListener(`scroll`,c,{passive:!0}),a.setPageClientHeight(s.value.clientHeight)}),d(()=>{}),(t,l)=>{let u=h(`router-view`);return f(),i(`div`,{class:`page`,ref_key:`page`,ref:s,onScroll:c},[o(We),o(De),e(a).GetisLoading?r(``,!0):(f(),n(u,{key:0},{default:v(({Component:e,route:t})=>[(f(),n(_(e),{key:t.name}))]),_:1})),e(a).GetisLoading?(f(),i(`div`,Je,[(f(),i(L,null,p(6,e=>o(qe)),64))])):r(``,!0)],544)}}}),Xe=w(Ye,[[`__scopeId`,`data-v-b77a1677`]]);export{Xe as default};