import{C as e,E as t,F as n,K as r,Q as i,S as a,h as o,j as s}from"./index-qVpZt7F3.js";var c=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,l={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`},u=s.extend({name:`card`,style:c,classes:l}),d={name:`BaseCard`,extends:o,style:u,provide:function(){return{$pcCard:this,$parentInstance:this}}},f={name:`Card`,extends:d,inheritAttrs:!1};function p(o,s,c,l,u,d){return i(),n(`div`,r({class:o.cx(`root`)},o.ptmi(`root`)),[o.$slots.header?(i(),n(`div`,r({key:0,class:o.cx(`header`)},o.ptm(`header`)),[a(o.$slots,`header`)],16)):t(``,!0),e(`div`,r({class:o.cx(`body`)},o.ptm(`body`)),[o.$slots.title||o.$slots.subtitle?(i(),n(`div`,r({key:0,class:o.cx(`caption`)},o.ptm(`caption`)),[o.$slots.title?(i(),n(`div`,r({key:0,class:o.cx(`title`)},o.ptm(`title`)),[a(o.$slots,`title`)],16)):t(``,!0),o.$slots.subtitle?(i(),n(`div`,r({key:1,class:o.cx(`subtitle`)},o.ptm(`subtitle`)),[a(o.$slots,`subtitle`)],16)):t(``,!0)],16)):t(``,!0),e(`div`,r({class:o.cx(`content`)},o.ptm(`content`)),[a(o.$slots,`content`)],16),o.$slots.footer?(i(),n(`div`,r({key:1,class:o.cx(`footer`)},o.ptm(`footer`)),[a(o.$slots,`footer`)],16)):t(``,!0)],16)],16)}f.render=p;export{f as b};