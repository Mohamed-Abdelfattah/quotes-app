(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{45:function(e,t,c){e.exports={card:"Card_card__2ZuXB"}},46:function(e,t,c){e.exports={form:"QuoteForm_form__3QeBD",loading:"QuoteForm_loading__2dlZc",control:"QuoteForm_control__2aWSw",actions:"QuoteForm_actions__2m56n"}},55:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),o=c(2),r=c(35),s=c(36),u=c(37),i=c(45),l=c.n(i),d=c(1),j=function(e){return Object(d.jsx)("div",{className:l.a.card,children:e.children})},b=c(14),h=c(46),m=c.n(h),x=function(e){var t=Object(n.useRef)(),c=Object(n.useRef)(),a=Object(n.useState)(!1),r=Object(u.a)(a,2),s=r[0],i=r[1];return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(o.a,{when:s,message:function(e){return"Are you sure you want to leave this page, all unsaved data will be lost"}}),Object(d.jsx)(j,{children:Object(d.jsxs)("form",{className:m.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,o=c.current.value;e.onAddQuote({author:a,text:o})},onFocus:function(){return i(!0)},children:[e.isLoading&&Object(d.jsx)("div",{className:m.a.loading,children:Object(d.jsx)(b.a,{})}),Object(d.jsxs)("div",{className:m.a.control,children:[Object(d.jsx)("label",{htmlFor:"author",children:"Author"}),Object(d.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(d.jsxs)("div",{className:m.a.control,children:[Object(d.jsx)("label",{htmlFor:"text",children:"Text"}),Object(d.jsx)("textarea",{id:"text",rows:"5",ref:c})]}),Object(d.jsx)("div",{className:m.a.actions,children:Object(d.jsx)("button",{onClick:function(){i(!1)},className:"btn",children:"Add Quote"})})]})})]})};t.default=function(e){var t=Object(o.h)(),c=Object(r.a)(s.b),u=c.sendRequest,i=c.status;Object(n.useEffect)((function(){"completed"===i&&t.push("/quotes")}),[i,t]);return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsx)(x,{onAddQuote:function(e){u(e)},isLoading:"pending"===i})})}}}]);
//# sourceMappingURL=6.2769c3d1.chunk.js.map