(this["webpackJsonpbank-react-example"]=this["webpackJsonpbank-react-example"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(9),i=n.n(s),l=(n(14),n(7)),d=n(4),a=n(5),o=n(8),u=n(0);function b(e){var t=e.number;return Object(u.jsx)("span",{class:t>0?"text-purple-500":"text-pink-500",children:t})}function j(e){var t=e.number,n=e.title;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{class:"card card-body bg-purple-100 m-2 items-center",children:[Object(u.jsx)("div",{class:"font-small",children:n}),Object(u.jsxs)("span",{class:"text-2xl",children:[Object(u.jsx)(b,{number:t}),"\u20ac"]})]})})}function x(){var e=Object(c.useState)({title:"",amount:null}),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),x=i[0],m=i[1],h=function(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(d.a)({},n,c))}))},p=function(){m((function(e){return[].concat(Object(l.a)(e),[Object(a.a)({},n)])}))},O=function(){return x.filter((function(e){return+e.amount>0})).reduce((function(e,t){return e+ +t.amount}),0)},f=function(){return x.filter((function(e){return+e.amount<0})).reduce((function(e,t){return e+ +t.amount}),0)};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{class:"text-3xl pb-2 font-bold",children:"Bank"}),Object(u.jsxs)("div",{class:"grid grid-cols-3 mb-2 w-full max-w-sm",children:[Object(u.jsx)(j,{title:"Income",number:O()}),Object(u.jsx)(j,{title:"Outcome",number:f()}),Object(u.jsx)(j,{title:"Balance",number:O()+f()})]}),Object(u.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),p()}(e)},class:"w-full max-w-sm shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[Object(u.jsxs)("div",{class:"md:flex md:items-center mb-6",children:[Object(u.jsx)("div",{class:"md:w-1/3",children:Object(u.jsx)("label",{class:"block text-gray-500 font-bold md:text-rigth mb-1 md:mb-0 pr-4",for:"inline-item",children:"Item"})}),Object(u.jsx)("div",{class:"md:w-2/3",children:Object(u.jsx)("input",{class:"bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-item",type:"text",placeholder:"item",name:"title",value:n.title,onChange:function(e){return h(e)}})})]}),Object(u.jsxs)("div",{class:"md:flex md:items-center mb-6",children:[Object(u.jsx)("div",{class:"md:w-1/3",children:Object(u.jsx)("label",{class:"block text-gray-500 font-bold md:text-rigth mb-1 md:mb-0 pr-4",for:"inline-amount",children:"Amount"})}),Object(u.jsx)("div",{class:"md:w-2/3",children:Object(u.jsx)("input",{class:"bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-amount",type:"text",placeholder:"amount",name:"amount",value:n.amount,onChange:function(e){return h(e)}})})]}),Object(u.jsxs)("div",{class:"md:flex",children:[Object(u.jsx)("div",{class:"md:w-1/3"}),Object(u.jsx)("div",{class:"md:w-1/3",children:Object(u.jsx)("button",{onClick:p,class:"bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2",type:"button",children:"Deposit"})}),Object(u.jsx)("div",{class:"md:w-1/3",children:Object(u.jsx)("button",{onClick:function(){m((function(e){return[].concat(Object(l.a)(e),[{title:n.title,amount:-1*n.amount}])}))},class:"md:text-rigth mb-1 md:mb-0 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded",type:"button",children:"Withdraw"})})]})]}),Object(u.jsxs)("table",{class:"w-full table-fixed max-w-sm shadow-sm rounded mb-4",children:[Object(u.jsxs)("thead",{class:"grid-cols-1 divide-y divide-purple-700",children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{class:"text-center",children:"Item"}),Object(u.jsx)("th",{class:"text-center",children:"Amount"})]}),Object(u.jsx)("tr",{})]}),Object(u.jsx)("tbody",{class:"grid-cols-1 divide-y divide-purple-300",children:x.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{class:"text-center",children:e.title}),Object(u.jsx)("td",{class:"text-center",children:Object(u.jsx)(b,{number:e.amount})}),Object(u.jsx)("button",{class:"inline-flex items-center justify-center mb-1 mt-1 w-6 h-6 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800",onClick:function(){return t=e,void m((function(e){return e.filter((function(e){return e!==t}))}));var t},children:Object(u.jsx)("svg",{class:"w-4 h-4 fill-current",viewBox:"0 0 20 20",children:Object(u.jsx)("path",{d:"M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306","clip-rule":"evenodd","fill-rule":"evenodd"})})})]},t)}))})]}),Object(u.jsx)("div",{class:"md:flex ",children:Object(u.jsx)("p",{class:" md:text-center text-gray-500 text-xs",children:"\xa92021 Karenina & CodeOp credits."})})]})}var m=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(x,{})})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e71b8fac.chunk.js.map