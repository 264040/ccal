import{C as e,D as t,E as n,F as r,G as i,H as a,K as o,Q as s,R as c,S as l,X as u,Z as d,a1 as f,a2 as p,a3 as m,c as h,d as g,f as _,h as v,j as y,k as b,z as x}from"./index-qVpZt7F3.js";import{b as S}from"./card-GJIm-FV5.js";var C=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`,w={root:function(e){var t=e.instance;return[`p-progressbar p-component`,{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:`p-progressbar-value`,label:`p-progressbar-label`},T=y.extend({name:`progressbar`,style:C,classes:w}),E={name:`BaseProgressBar`,extends:v,props:{value:{type:Number,default:null},mode:{type:String,default:`determinate`},showValue:{type:Boolean,default:!0}},style:T,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},D={name:`ProgressBar`,extends:E,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+`%`,display:`flex`}},indeterminate:function(){return this.mode===`indeterminate`},determinate:function(){return this.mode===`determinate`},dataP:function(){return b({determinate:this.determinate,indeterminate:this.indeterminate})}}},O=[`aria-valuenow`,`data-p`],k=[`data-p`],A=[`data-p`],j=[`data-p`];function M(e,t,a,c,u,d){return s(),r(`div`,o({role:`progressbar`,class:e.cx(`root`),"aria-valuemin":`0`,"aria-valuenow":e.value,"aria-valuemax":`100`,"data-p":d.dataP},e.ptmi(`root`)),[d.determinate?(s(),r(`div`,o({key:0,class:e.cx(`value`),style:d.progressStyle,"data-p":d.dataP},e.ptm(`value`)),[e.value!=null&&e.value!==0&&e.showValue?(s(),r(`div`,o({key:0,class:e.cx(`label`),"data-p":d.dataP},e.ptm(`label`)),[l(e.$slots,`default`,{},function(){return[i(m(e.value+`%`),1)]})],16,A)):n(``,!0)],16,k)):d.indeterminate?(s(),r(`div`,o({key:1,class:e.cx(`value`),"data-p":d.dataP},e.ptm(`value`)),null,16,j)):n(``,!0)],16,O)}D.render=M;const N={class:`progress-page`},P={class:`header`},F={class:`header-left`},I={class:`user-info`},L={class:`header-actions`},R={class:`cards-grid`},z={class:`card-header`},B={class:`rating`},V={class:`category`},H={class:`desc`},U={class:`card-footer`},W={class:`avatars`},G={__name:`Messages`,setup(n){let o=d([{category:`Tech & Software`,title:`Designing Seamless User Experiences`,rating:3.5,icon:`pi pi-book`,bg:`linear-gradient(135deg, #d9f2f2, #b3e5e5)`,avatars:[`https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png`,`https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png`,`https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png`]},{category:`Data Analysis`,title:`Effective Analytics Software Solutions`,rating:3.2,icon:`pi pi-chart-bar`,bg:`linear-gradient(135deg, #e6dbf9, #d2bdf5)`,avatars:[`https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png`,`https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png`,`https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png`]},{category:`Data Analysis`,title:`Effective Analytics Software Solutions`,rating:3.2,icon:`pi pi-chart-bar`,bg:`linear-gradient(135deg, #e6dbf9, #d2bdf5)`,avatars:[`https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png`,`https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png`,`https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png`]},{category:`Data Analysis`,title:`Effective Analytics Software Solutions`,rating:3.2,icon:`pi pi-chart-bar`,bg:`linear-gradient(135deg, #e6dbf9, #d2bdf5)`,avatars:[`https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png`,`https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png`,`https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png`]},{category:`Data Analysis`,title:`Effective Analytics Software Solutions`,rating:3.2,icon:`pi pi-chart-bar`,bg:`linear-gradient(135deg, #e6dbf9, #d2bdf5)`,avatars:[`https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png`,`https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png`,`https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png`]}]);return(n,l)=>{let d=h,_=D,v=g,y=S;return s(),r(`div`,N,[e(`header`,P,[e(`div`,F,[a(d,{image:`https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png`,size:`large`,shape:`circle`}),e(`div`,I,[l[0]||=e(`h3`,null,`Hello Alex`,-1),a(_,{value:60,style:{height:`8px`}})])]),e(`div`,L,[a(v,{icon:`pi pi-bell`,class:`p-button-rounded p-button-text`}),a(v,{icon:`pi pi-search`,class:`p-button-rounded p-button-text`})])]),l[3]||=e(`h2`,{class:`title`},`Your Progress Today`,-1),e(`div`,R,[(s(!0),r(x,null,c(o.value,(n,o)=>(s(),t(y,{key:o,class:`progress-card`,style:p({background:n.bg})},{title:u(()=>[e(`div`,z,[e(`i`,{class:f(n.icon)},null,2),e(`div`,B,[l[1]||=e(`i`,{class:`pi pi-star-fill`},null,-1),i(` `+m(n.rating),1)])])]),content:u(()=>[e(`p`,V,m(n.category),1),e(`h4`,H,m(n.title),1),e(`div`,U,[e(`div`,W,[(s(!0),r(x,null,c(n.avatars,(e,n)=>(s(),t(d,{key:n,image:e,size:`normal`,shape:`circle`},null,8,[`image`]))),128)),l[2]||=e(`span`,{class:`more`},`+5`,-1)]),a(v,{icon:`pi pi-arrow-right`,class:`p-button-rounded p-button-outlined`})])]),_:2},1032,[`style`]))),128))])])}}};var K=_(G,[[`__scopeId`,`data-v-fee9905d`]]);export{K as default};