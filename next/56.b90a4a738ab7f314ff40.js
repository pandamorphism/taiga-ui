(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{Thvt:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputCardGroupedModule",(function(){return de}));var o=n("An66"),a=n("3kIJ"),r=n("1VvW"),i=n("T8fS"),c=n("SVIu"),l=n("Qq0t"),d=n("dvRg"),u=n("cWK9"),s=n("Piem"),p=n("kZht"),m=n("K/iL"),g=n("pVuH"),f=n("OZlg"),h=n("e0eB"),b=n("iyc4"),C=n("qfv1"),y=n("kNZY");let v=(()=>{class e{constructor(){this.control=new a.FormControl(null,[i.tuiCardNumberValidator,i.tuiCardExpireValidator])}get card(){const e=this.control.value?this.control.value.card:"";if(e.length<7)return null;switch(e.charAt(0)){case"0":case"1":case"2":return"https://ng-web-apis.github.io/dist/assets/images/common.svg";case"3":case"4":case"5":return"https://ng-web-apis.github.io/dist/assets/images/geolocation.svg";case"6":case"7":return"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg";case"8":case"9":default:return"https://ng-web-apis.github.io/dist/assets/images/payment-request.svg"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-card-grouped-example-1"]],decls:2,vars:3,consts:[[3,"cardSrc","formControl"],[3,"formControl"]],template:function(e,t){1&e&&(p["\u0275\u0275element"](0,"tui-input-card-grouped",0),p["\u0275\u0275element"](1,"tui-field-error",1)),2&e&&(p["\u0275\u0275property"]("cardSrc",t.card)("formControl",t.control),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("formControl",t.control))},directives:[C.a,a.NgControlStatus,a.FormControlDirective,y.a],encapsulation:2,changeDetection:0}),e})();var x=n("fP8s"),S=n("cVyY"),P=n("xcN3"),E=n("ONKv"),w=n("mTwp"),V=n("1Nkj");function T(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"button",8),p["\u0275\u0275element"](1,"tui-card",9),p["\u0275\u0275elementStart"](2,"label",10),p["\u0275\u0275text"](3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"span"),p["\u0275\u0275text"](5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;p["\u0275\u0275property"]("value",e),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("cardNumber",e.card.slice(-4)),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("label",e.bank),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e.name," "),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate"](e.card.slice(-5))}}function O(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-data-list",3),p["\u0275\u0275listener"]("keydown.escape",(function(){p["\u0275\u0275restoreView"](e);const t=p["\u0275\u0275nextContext"](),n=p["\u0275\u0275reference"](1);return t.onEsc(n)})),p["\u0275\u0275elementStart"](1,"button",4),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](e);const t=p["\u0275\u0275nextContext"](),n=p["\u0275\u0275reference"](1);return t.onClick(n)})),p["\u0275\u0275element"](2,"tui-svg",5),p["\u0275\u0275elementStart"](3,"span",6),p["\u0275\u0275text"](4,"New card"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](5,T,6,5,"button",7),p["\u0275\u0275elementEnd"]()}if(2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("ngForOf",e.items)}}let M=(()=>{class e{constructor(){this.items=[{card:"4321***1234",expire:"12/21",name:"Salary",bank:"Tinkoff"},{card:"8765***5678",expire:"03/42",cvc:"***",name:"Tips",bank:"Bank of America"},{card:"4200***9000",name:"Dogecoins",bank:"Crypto"}],this.control=new a.FormControl(this.items[0])}onClick(e){this.control.setValue(null),this.onEsc(e)}onEsc(e){var t;null===(t=e.nativeFocusableElement)||void 0===t||t.focus(),e.open=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-card-grouped-example-2"]],decls:3,vars:1,consts:[[3,"formControl"],["component",""],[3,"keydown.escape",4,"tuiDataList"],[3,"keydown.escape"],["tuiOption","","size","l",3,"click"],["src","tuiIconPlus",1,"new"],[1,"label"],["tuiOption","","size","l",3,"value",4,"ngFor","ngForOf"],["tuiOption","","size","l",3,"value"],["size","s",1,"card",3,"cardNumber"],["tuiLabel","",1,"label",3,"label"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-card-grouped",0,1),p["\u0275\u0275template"](2,O,6,1,"tui-data-list",2),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("formControl",t.control)},directives:[C.a,a.NgControlStatus,a.FormControlDirective,x.a,S.a,P.a,E.a,o.s,w.a,V.a],styles:[".new[_ngcontent-%COMP%]{width:2rem;height:1.5rem;border-radius:4px;background:var(--tui-secondary);color:var(--tui-link)}.card[_ngcontent-%COMP%]{background:var(--tui-support-01)}button[_ngcontent-%COMP%]:nth-child(4)   .card[_ngcontent-%COMP%]{background:var(--tui-support-05)}.label[_ngcontent-%COMP%]{margin:0 auto 0 .75rem}"],changeDetection:0}),e})();function k(e,t){1&e&&p["\u0275\u0275element"](0,"img",4)}let L=(()=>{class e{constructor(){this.control=new a.FormControl(null,[i.tuiCardNumberValidator,i.tuiCardExpireValidator])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-card-grouped-example-3"]],decls:4,vars:3,consts:[[3,"cardSrc","formControl"],["polymorpheus",""],["template","polymorpheus"],[3,"formControl"],["width","32","height","32","alt","custom-icon","src","https://ng-web-apis.github.io/dist/assets/images/web-api.svg"]],template:function(e,t){if(1&e&&(p["\u0275\u0275element"](0,"tui-input-card-grouped",0),p["\u0275\u0275template"](1,k,1,0,"ng-template",1,2,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275element"](3,"tui-field-error",3)),2&e){const e=p["\u0275\u0275reference"](2);p["\u0275\u0275property"]("cardSrc",e)("formControl",t.control),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("formControl",t.control)}},directives:[C.a,a.NgControlStatus,a.FormControlDirective,u.e,y.a],encapsulation:2,changeDetection:0}),e})(),D=(()=>{class e{constructor(){this.control=new a.FormControl({card:"",expire:"",cvc:"***"})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-card-grouped-example-4"]],decls:1,vars:1,consts:[[3,"formControl"]],template:function(e,t){1&e&&p["\u0275\u0275element"](0,"tui-input-card-grouped",0),2&e&&p["\u0275\u0275property"]("formControl",t.control)},directives:[C.a,a.NgControlStatus,a.FormControlDirective],encapsulation:2,changeDetection:0}),e})();var N=n("EPR0"),_=n("yHor"),F=n("zGJC"),A=n("FSyC"),$=n("u8jZ");const z=["heading",$localize`:␟576c74546986ae39d66902c10b330cef17c11742␟2004268377756025676:With validation`],I=["heading",$localize`:␟0b16cb2ad793d315ec0749caae74c51ea59f9dd1␟7395231025733752915:With saved cards`],G=["heading",$localize`:␟9c59728c1210370022fbb770bda0d0b8fe1631c6␟1342170688498447742:With custom card template`],R=["heading",$localize`:␟d44becd24fa66aa31f134974747e1892db15c99a␟134626459094672385:Custom form state`];function H(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275elementStart"](1,"code"),p["\u0275\u0275text"](2,"InputCardGrouped"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," is used to input a card as a separated control "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"tui-doc-example",2),p["\u0275\u0275i18nAttributes"](5,z),p["\u0275\u0275element"](6,"tui-input-card-grouped-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](8,I),p["\u0275\u0275element"](9,"tui-input-card-grouped-example-2"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](10,"tui-doc-example",4),p["\u0275\u0275i18nAttributes"](11,G),p["\u0275\u0275element"](12,"tui-input-card-grouped-example-3"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](13,"tui-doc-example",5),p["\u0275\u0275i18nAttributes"](14,R),p["\u0275\u0275element"](15,"tui-input-card-grouped-example-4"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("content",e.example1),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example2),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example3),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example4)}}var j,B,K,W,q,J,Z,Y,Q;function X(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-input-card-grouped",15),p["\u0275\u0275listener"]("binChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).onBinChange(t)})),p["\u0275\u0275elementEnd"]()}if(2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("formControl",e.control)("autocompleteEnabled",e.autocompleteEnabled)("cardSrc",e.cardSrc)("codeLength",e.codeLength)("exampleText",e.exampleText)("readOnly",e.readOnly)("focusable",e.focusable)("pseudoInvalid",e.pseudoInvalid)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)}}function U(e,t){1&e&&p["\u0275\u0275element"](0,"tui-card",16)}function ee(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,B),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function te(e,t){1&e&&p["\u0275\u0275i18n"](0,K)}function ne(e,t){1&e&&p["\u0275\u0275i18n"](0,W)}function oe(e,t){1&e&&p["\u0275\u0275i18n"](0,q)}function ae(e,t){1&e&&p["\u0275\u0275i18n"](0,J)}function re(e,t){1&e&&p["\u0275\u0275i18n"](0,Z)}function ie(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-demo",6),p["\u0275\u0275template"](1,X,1,11,"ng-template"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"div",7),p["\u0275\u0275elementStart"](3,"p"),p["\u0275\u0275i18nStart"](4,j),p["\u0275\u0275element"](5,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](6,U,1,0,"ng-template",null,8,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275elementStart"](8,"tui-doc-documentation"),p["\u0275\u0275template"](9,ee,2,0,"ng-template",9),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().disabled=t})),p["\u0275\u0275template"](10,te,1,0,"ng-template",10),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().autocompleteEnabled=t})),p["\u0275\u0275template"](11,ne,1,0,"ng-template",11),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().cardSrcSelected=t})),p["\u0275\u0275template"](12,oe,1,0,"ng-template",12),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().exampleText=t})),p["\u0275\u0275template"](13,ae,1,0,"ng-template",13),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().codeLength=t})),p["\u0275\u0275template"](14,re,1,0,"ng-template",14),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](15,"inherited-documentation")}if(2&e){const e=p["\u0275\u0275reference"](7),t=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("control",t.control),p["\u0275\u0275advance"](9),p["\u0275\u0275property"]("documentationPropertyValue",t.disabled),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",t.autocompleteEnabled),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",t.getContentVariants(e))("documentationPropertyValue",t.cardSrcSelected),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",t.exampleText),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",t.codeLengthVariants)("documentationPropertyValue",t.codeLength)}}function ce(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",17),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,Y),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",18),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,Q),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",19),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleHtml)}}j=$localize`:␟2991990b36a95db17cd97eabd9f31582060b991a␟1504302675191121980: Add ${"\ufffd#5\ufffd"}:START_TAG_CODE:tuiCreateLuhnValidator(customMessage?)${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE: to control validators to validate it with Luhn algorithm `,B=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,K=$localize`:␟83ad20bde41f48a65e1ef7997973b9229940e933␟7840524756891506982: Browser autocomplete of card `,W=$localize`:␟fc048dc15100d76d9c59634a4cd574e69f6c4c27␟4001054117328009637: SVG card icon `,q=$localize`:␟26c4e17869f9a11168b776fecc88a93ba994a18b␟6871064863310761724: An example of input `,J=$localize`:␟8772d8eccb2dc868d0dec6c6c5db9e2264085070␟7430416980180297706: Code length `,Z=$localize`:␟8457ba25b1fa93009d4263b1ed4635c9d9c693f1␟3816861219916976422: BIN value (card first 6 symbols) `,Y=$localize`:␟33a49eba1a9f88fb51f268aeef91a4fce5f46b26␟1773577931530005511: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputCardGroupedModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,Q=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let le=(()=>{class e extends g.a{constructor(e){super(),this.notifications=e,this.exampleModule=n.e(301).then(n.bind(null,"fx+S")),this.exampleHtml=n.e(302).then(n.bind(null,"dPFn")),this.example1={TypeScript:n.e(293).then(n.bind(null,"0Tft")),HTML:n.e(292).then(n.bind(null,"XEO2"))},this.example2={TypeScript:n.e(296).then(n.bind(null,"0KpD")),HTML:n.e(294).then(n.bind(null,"+orC")),LESS:n.e(295).then(n.bind(null,"+DT6"))},this.example3={TypeScript:n.e(298).then(n.bind(null,"1PRu")),HTML:n.e(297).then(n.bind(null,"Gdxv"))},this.example4={TypeScript:n.e(300).then(n.bind(null,"6q6f")),HTML:n.e(299).then(n.bind(null,"RKRS"))},this.cards={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},this.cardSrcVariants=Object.keys(this.cards),this.cardSrcSelected=null,this.autocompleteEnabled=!1,this.exampleText="0000 0000 0000 0000",this.codeLengthVariants=[3,4],this.codeLength=this.codeLengthVariants[0],this.pseudoInvalid=null,this.readOnly=!1,this.control=new a.FormControl}get cardSrc(){return"string"==typeof this.cardSrcSelected?this.cards[this.cardSrcSelected]:this.cardSrcSelected}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}onBinChange(e){this.notifications.show("bin: "+e).subscribe()}getContentVariants(e){return[...this.cardSrcVariants,e]}}return e.\u0275fac=function(t){return new(t||e)(p["\u0275\u0275directiveInject"](l.TuiNotificationsService))},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-input-card-grouped"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:m.a,useExisting:Object(p.forwardRef)(()=>e)}]),p["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputCardGrouped","package","ADDON-COMMERCE","type","components"],["pageTab",""],["id","validation",3,"content",6,"heading"],["id","select",3,"content",6,"heading"],["id","cardSrc",3,"content",6,"heading"],["id","form-state",3,"content",6,"heading"],[3,"control"],[1,"b-full-width","tui-space_bottom-6"],["template",""],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autocompleteEnabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","cardSrc","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","exampleText","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","codeLength","documentationPropertyMode","input","documentationPropertyType","3 | 4",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","binChange","documentationPropertyMode","output","documentationPropertyType","string | null"],[3,"formControl","autocompleteEnabled","cardSrc","codeLength","exampleText","readOnly","focusable","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","binChange"],["cardNumber","1234","paymentSystem","maestro","size","s",1,"card"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,H,16,4,"ng-template",1),p["\u0275\u0275template"](2,ie,16,8,"ng-template",1),p["\u0275\u0275template"](3,ce,10,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[f.a,h.a,b.a,v,M,L,D,N.a,_.a,F.a,A.a,C.a,a.NgControlStatus,a.FormControlDirective,w.a,$.a],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.control[_ngcontent-%COMP%]{flex:1;margin-bottom:.25rem}.control[_ngcontent-%COMP%]:not(:last-child){margin-right:1.25rem}.error[_ngcontent-%COMP%]{min-width:100%}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}.card[_ngcontent-%COMP%]{background:#87ceeb}"],changeDetection:0}),e})(),de=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.TuiInputCardGroupedModule,l.TuiLinkModule,d.TuiFieldErrorModule,l.TuiDataListModule,i.TuiCardModule,l.TuiLabelModule,l.TuiSvgModule,o.c,a.ReactiveFormsModule,c.i,s.a,r.f.forChild(Object(c.p)(le)),u.c]]}),e})()}}]);