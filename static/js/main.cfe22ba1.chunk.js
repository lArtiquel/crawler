(this.webpackJsonpcrawler=this.webpackJsonpcrawler||[]).push([[0],{134:function(e,t,a){e.exports=a.p+"static/media/cool-spider.db883515.png"},156:function(e,t,a){e.exports=a(184)},164:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(11),l=a.n(c),o=a(18),u=a(51),i=a(130),m=a(85),s=a(12),d="CRAWL",E="CHANGE_FORM_FIELD",p="CHANGE_TERMS",f="SET_FORM_FRAME",b="SET_PROCESSING_FRAME",h="SET_RESULTS_FRAME",g="CLEAR_FORM",O="SET_RESPONSE_ERROR",y="CLEAR_RESPONSE_ERROR",v=1,j=2,w=3,x={frame:v,request:{url:"",limit:10,depth:3,terms:[]},error:"",response:[]};var S=Object(u.c)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(s.a)(Object(s.a)({},e),{},{response:t.payload});case E:return Object(s.a)(Object(s.a)({},e),{},{request:Object(s.a)(Object(s.a)({},e.request),{},Object(m.a)({},t.payload.name,t.payload.value))});case p:return Object(s.a)(Object(s.a)({},e),{},{request:Object(s.a)(Object(s.a)({},e.request),{},{terms:t.payload})});case f:return Object(s.a)(Object(s.a)({},e),{},{frame:v});case b:return Object(s.a)(Object(s.a)({},e),{},{frame:j});case h:return Object(s.a)(Object(s.a)({},e),{},{frame:w});case g:return Object(s.a)(Object(s.a)({},e),{},{request:Object(s.a)({},x.request)});case O:return Object(s.a)(Object(s.a)({},e),{},{error:"Sorry, some unexpected error occured. Try service later."});case y:return Object(s.a)(Object(s.a)({},e),{},{error:""});default:return Object(s.a)({},e)}}}),R=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):u.d)(Object(u.a)(i.a)),_=Object(u.e)(S,R),k=(a(164),a(229)),T=a(245),C=a(251),F=a(144),N=Object(C.a)(Object(F.a)({palette:{type:"dark",primary:{main:"#9c27b0"},secondary:{main:"#2732b0"},text:{secondary:"#fff"}},spreddable:{}})),P=a(134),q=a.n(P),I=a(244),L=a(247),A=a(55),W=a(82),D=a(246),M=a(225),U=a(139),B=a.n(U),G=function(e){var t=e.error,a=e.touched;e.onChange;return n.a.createElement(L.a,{my:2},n.a.createElement(A.a,{as:D.a,label:"Enter URL",name:"url",variant:"outlined",type:"text",autoFocus:!0,margin:"dense",fullWidth:!0,error:t&&a,helperText:t&&a?t:"",InputProps:{startAdornment:n.a.createElement(M.a,{position:"start"},n.a.createElement(B.a,null))}}))},X=function(e){var t=e.errors,a=e.touched;return n.a.createElement(L.a,{my:2,display:"flex",flexDirection:"row"},n.a.createElement(L.a,{mr:1,flexGrow:1},n.a.createElement(A.a,{as:D.a,label:"Page limit",name:"limit",variant:"outlined",type:"number",margin:"dense",InputLabelProps:{shrink:!0},InputProps:{inputProps:{min:1,max:1e4}},error:t.limit&&a.limit,helperText:t.limit&&a.limit?t.limit:"",fullWidth:!0})),n.a.createElement(L.a,{ml:1,flexGrow:1},n.a.createElement(A.a,{as:D.a,label:"Depth",name:"depth",variant:"outlined",type:"number",margin:"dense",InputLabelProps:{shrink:!0},InputProps:{inputProps:{min:1,max:8}},error:t.depth&&a.depth,helperText:t.depth&&a.depth?t.depth:"",fullWidth:!0})))},V=a(252),H=a(248),J=a(140),z=a.n(J),$=Object(o.b)((function(e){return{terms:e.home.request.terms}}),(function(e){return{changeTerms:function(t){return e(function(e){return function(t){t({type:p,payload:e})}}(t))}}}))((function(e){var t=e.terms,a=e.changeTerms;return n.a.createElement(L.a,{my:2},n.a.createElement(H.a,{multiple:!0,freeSolo:!0,value:t,options:[],renderTags:function(e,t){return e.map((function(e,a){return n.a.createElement(V.a,Object.assign({variant:"outlined",label:e},t({index:a})))}))},renderInput:function(e){return n.a.createElement(D.a,Object.assign({},e,{variant:"outlined",label:"Select terms you want to find on the pages",placeholder:"Terms",onChange:function(e){e.stopPropagation()}}))},fullWidth:!0,onChange:function(e,t,r){a(t)}}))})),K=a(61),Q=function(){return n.a.createElement(K.a,{variant:"h3",color:"primary",align:"center",gutterBottom:!0},"What URL do you want to crawl today?")},Y=a(227),Z=a(142),ee=a.n(Z),te=function(){return n.a.createElement(L.a,{my:2},n.a.createElement(Y.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,startIcon:n.a.createElement(ee.a,null)},"Crawl URL"))},ae=Object(o.b)((function(e){return{formData:e.home.request}}),(function(e){return{crawl:function(){return e((function(e,t){var a=t();e({type:b}),z()({url:"https://srawler.herokuapp.com/api/crawlUrl",method:"post",data:a.home.request}).then((function(t){e({type:g}),e({type:d,payload:t.data}),e({type:h})})).catch((function(t){e({type:f}),e({type:O})}))}))},changeFormField:function(t,a){return e(function(e,t){return function(a){a({type:E,payload:{name:e,value:t}})}}(t,a))}}}))((function(e){var t=e.formData,a=e.crawl,r=e.changeFormField,c=function(e){r(e.target.name,e.target.value)};return n.a.createElement(A.c,{initialValues:{url:t.url,limit:t.limit,depth:t.depth},onSubmit:function(e,t){t.setTouched({url:!1,limit:!1,depth:!1}),a()},validationSchema:W.b().shape({url:W.c().url("Field should contain valid URL.").required("Please, enter URL."),limit:W.a().integer("The number must be an integer.").min(1,"At least one page should be crawled.").max(1e4,"Server can process up to 10k pages.").required("Page limit is required."),depth:W.a().integer("The number must be an integer.").min(1,"Min depth level - 1.").max(8,"Max depth level - 8.").required("Search depth level is required.")}),validateOnChange:!0,validateOnBlur:!0},(function(e){var t=e.errors,a=e.touched;return n.a.createElement(A.b,{onChange:c},n.a.createElement(Q,null),n.a.createElement(G,{error:t.url,touched:a.url}),n.a.createElement(X,{errors:t,touched:a}),n.a.createElement($,null),n.a.createElement(te,null))}))})),re=a(228);function ne(){return n.a.createElement(L.a,{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",flexDirection:"column"},n.a.createElement(K.a,{variant:"h5",color:"primary",align:"center",gutterBottom:!0},"Processing request..."),n.a.createElement(L.a,{my:3},n.a.createElement(re.a,{color:"secondary"})))}function ce(){return n.a.createElement(L.a,{my:2},n.a.createElement(K.a,{variant:"h4",color:"primary",align:"center",gutterBottom:!0},"Let's see what we've got for you ..."))}var le=a(224),oe=a(226),ue=a(56),ie=a(230),me=a(234),se=a(231),de=a(237),Ee=a(232),pe=a(233),fe=a(235),be=a(236),he=Object(k.a)((function(e){return{textRight:{textAlign:"right"},nested:{paddingLeft:e.spacing(4)}}}));function ge(e){var t=e.term,a=e.entries,r=he();return n.a.createElement(ie.a,{button:!0,className:r.nested},n.a.createElement(se.a,{secondary:t}),n.a.createElement(se.a,{secondary:"".concat(a," entry(ies)"),className:r.textRight}))}function Oe(e){var t=e.termsToEntriesArray;return n.a.createElement(le.a,{component:"div",disablePadding:!0},t.map((function(e){var t=Object(ue.a)(e,2),a=t[0],r=t[1];return n.a.createElement(n.a.Fragment,{key:"".concat(a,"-").concat(r,"-").concat(134332*Math.random())},n.a.createElement(ge,{term:a,entries:r}))})))}var ye=function(e){var t=e.open,a=e.className;return n.a.createElement(n.a.Fragment,null,t?n.a.createElement(Ee.a,{className:a}):n.a.createElement(pe.a,{className:a}))},ve=Object(k.a)((function(){return{red:{color:"#f44336"},green:{color:"#4caf50"},white:{color:"#fff"}}}));function je(e){var t=e.url,a=e.badUrl,c=e.termsToEntries,l=Object(r.useState)(!1),o=Object(ue.a)(l,2),u=o[0],i=o[1],m=Object(r.useState)(Object.entries({})),s=Object(ue.a)(m,2),d=s[0],E=s[1],p=Object(r.useState)(!0),f=Object(ue.a)(p,2),b=f[0],h=f[1],g=ve();return Object(r.useEffect)((function(){c.constructor===Object?(E(Object.entries(c)),0!==d.length?h(!1):h(!0)):(h(!0),E(Object.entries({})))}),[c,d.length]),n.a.createElement(n.a.Fragment,null,n.a.createElement(ie.a,{button:!0,onClick:b?function(){}:function(){i(!u)}},n.a.createElement(me.a,null,a?n.a.createElement(fe.a,{className:g.red}):n.a.createElement(be.a,{className:g.green})),n.a.createElement(se.a,{secondary:n.a.createElement("a",{href:t,className:g.white,target:"_blank",rel:"noopener noreferrer"},t)}),!b&&n.a.createElement(ye,{open:u,className:g.white})),!b&&n.a.createElement(de.a,{in:u,timeout:"auto",unmountOnExit:!0},n.a.createElement(Oe,{termsToEntriesArray:d})))}var we=Object(k.a)((function(e){return{root:{overflowX:"auto",width:"100%",maxHeight:600,backgroundColor:e.palette.background.paper}}})),xe=Object(o.b)((function(e){return{data:e.home.response}}))((function(e){var t=e.data,a=we();return n.a.createElement(le.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:n.a.createElement(oe.a,{component:"div",id:"nested-list-subheader",color:"primary"},"Crawling results:"),className:a.root},t.map((function(e){return n.a.createElement(n.a.Fragment,{key:e.url},n.a.createElement(je,{url:e.url,badUrl:e.badUrl,termsToEntries:e.termsToEntries}))})))})),Se=a(238),Re=Object(o.b)(null,(function(e){return{goBack:function(){return e((function(e){return e({type:f})}))}}}))((function(e){var t=e.goBack;return n.a.createElement(L.a,{my:2},n.a.createElement(Y.a,{onClick:t,variant:"contained",color:"primary",fullWidth:!0,startIcon:n.a.createElement(Se.a,null)},"Go back"))})),_e=a(239),ke=a(143),Te=Object(o.b)((function(e){return{data:e.home.response}}))((function(e){var t=e.data,a=Object(r.useState)(),c=Object(ue.a)(a,2),l=c[0],o=c[1];return Object(r.useEffect)((function(){var e=new ke.Parser({fields:["url","badUrl","termsToEntries"]}).parse(t).replace(/#/g,"%23");o(e)}),[t]),n.a.createElement(L.a,{my:2},n.a.createElement(Y.a,{variant:"contained",color:"secondary",fullWidth:!0,startIcon:n.a.createElement(_e.a,null),href:"data:text/csv;charset=utf-8,%EF%BB%BF".concat(l),download:"Results.csv"},"Download CSV results"))}));function Ce(){return n.a.createElement(L.a,{my:2},n.a.createElement(ce,null),n.a.createElement(xe,null),n.a.createElement(Te,null),n.a.createElement(Re,null))}var Fe=a(250),Ne=a(243),Pe=a(241),qe=a(242),Ie=a(240),Le=Object(o.b)((function(e){return{isOpen:!!e.home.error,error:e.home.error}}),(function(e){return{closeDialog:function(){return e((function(e){return e({type:y})}))}}}))((function(e){var t=e.isOpen,a=e.error,r=e.closeDialog,c=function(){r()};return n.a.createElement(n.a.Fragment,null,n.a.createElement(Fe.a,{maxWidth:"xs",fullWidth:!0,open:t,onClose:c,"aria-labelledby":"max-width-dialog-title"},n.a.createElement(Ie.a,{id:"max-width-dialog-title"},"Error"),n.a.createElement(Pe.a,null,n.a.createElement(qe.a,null,a)),n.a.createElement(Ne.a,null,n.a.createElement(Y.a,{onClick:c,color:"primary"},"Close"))))})),Ae=Object(o.b)((function(e){return{frame:e.home.frame}}))((function(e){var t=e.frame;return n.a.createElement(I.a,{maxWidth:"sm"},n.a.createElement(L.a,{my:2},function(){switch(t){case v:return n.a.createElement(ae,null);case j:return n.a.createElement(ne,null);case w:return n.a.createElement(Ce,null);default:return n.a.createElement("div",null,"No such Frame...")}}()),n.a.createElement(Le,null))})),We=Object(k.a)((function(){return{root:{backgroundColor:"#1a181a",backgroundImage:"url(".concat(q.a,")"),backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center",backgroundBlendMode:"overlay",display:"flex",width:"100%",height:"100%",overflow:"auto"}}})),De=function(){var e=We();return n.a.createElement(T.a,{theme:N},n.a.createElement("div",{className:e.root},n.a.createElement(Ae,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(o.a,{store:_},n.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[156,1,2]]]);
//# sourceMappingURL=main.cfe22ba1.chunk.js.map