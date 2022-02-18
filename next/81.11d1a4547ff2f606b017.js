(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{enQs:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiMobileDialogModule",(function(){return w}));var o,i=n("An66"),a=n("1VvW"),l=n("SVIu"),c=n("hLNI"),d=n("Qq0t"),s=n("kZht"),r=n("OZlg"),p=n("e0eB"),m=n("iyc4"),u=n("l4xa"),b=n("TLy2"),f=n("zV1d");o=$localize`:␟a1ac22cbf3e8b8cd6fb77e5af9144ed418580c37␟1762522912961222062:Choose iPhone into DevTools to see iOS styled dialog.`;let h=(()=>{class e{constructor(e,t){this.dialogService=e,this.notifications=t}show(){const e=["No thanks","Remind me later","Rate now"];this.dialogService.open("If you like this app, please take a moment to leave a positive rating.",{label:"What do you think?",actions:e}).pipe(Object(b.a)(t=>this.notifications.show("Selected: "+e[t]))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](c.TuiMobileDialogService),s["\u0275\u0275directiveInject"](d.TuiNotificationsService))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-mobile-dialog-example-1"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:u.TUI_IS_IOS,useValue:!1}])],decls:4,vars:0,consts:[["tuiButton","","type","button",3,"click"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,o),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"button",0),s["\u0275\u0275listener"]("click",(function(){return t.show()})),s["\u0275\u0275text"](3,"Show dialog"),s["\u0275\u0275elementEnd"]())},directives:[f.a],encapsulation:2,changeDetection:0}),e})();var g=n("u8jZ");const S=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var v;v=$localize`:␟0ea287ef9e2531b2b580624bb586ca2ee24cde51␟1578113098698386021: Component for showing a dialog on mobile devices. It emulates appearance of native alerts on iOS and Android `;const T=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function E(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275i18n"](1,v),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](3,T),s["\u0275\u0275element"](4,"tui-mobile-dialog-example-1"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",e.example1)}}var y,x;function C(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",4),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,y),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275element"](5,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](6,"tui-doc-code",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"li"),s["\u0275\u0275elementStart"](8,"p"),s["\u0275\u0275i18n"](9,x),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](10,"tui-doc-code",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleInsertComponent)}}y=$localize`:␟4ac5c76bf1d0e6a6b56d25b951863735a838975a␟3639391024646583640: Import ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiMobileDialogModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: to your ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:AppModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE:`,y=s["\u0275\u0275i18nPostprocess"](y),x=$localize`:␟406023e62926140d7e1398ca0791caa8ac93ddfd␟8851886848912378945:Use it in component`;let M=(()=>{class e{constructor(){this.example1={TypeScript:n.e(472).then(n.bind(null,"vAR7")),HTML:n.e(471).then(n.bind(null,"6Pdd"))},this.exampleModule=n.e(473).then(n.bind(null,"W/Th")),this.exampleInsertComponent=n.e(474).then(n.bind(null,"iG7M"))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-mobile-dialog"]],decls:4,vars:0,consts:[["header","MobileDialog","package","ADDON-MOBILE","type","components"],["pageTab",""],[6,"pageTab"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,E,5,1,"ng-template",1),s["\u0275\u0275template"](2,C,11,2,"ng-template",2),s["\u0275\u0275i18nAttributes"](3,S),s["\u0275\u0275elementEnd"]())},directives:[r.a,p.a,m.a,h,g.a],encapsulation:2,changeDetection:0}),e})(),w=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,c.TuiMobileDialogModule,d.TuiButtonModule,l.i,a.f.forChild(Object(l.p)(M))]]}),e})()}}]);