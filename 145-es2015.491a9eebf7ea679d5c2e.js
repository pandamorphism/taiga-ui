(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{P9oS:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiCurrencyModule",(function(){return $}));var o=n("2kYt"),r=n("nIj0"),a=n("sEIs"),i=n("T8fS"),c=n("SVIu"),u=n("Qq0t"),p=n("dvRg"),m=n("EM62"),l=n("OZlg"),s=n("e0eB"),d=n("yZWP"),y=n("iyc4"),C=n("jFPS");let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-currency-example1"]],decls:3,vars:3,template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1),m["\u0275\u0275pipe"](2,"tuiCurrency"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"]("100 ",m["\u0275\u0275pipeBind1"](2,1,"RUB"),""))},pipes:[C.a],encapsulation:2,changeDetection:0}),e})();var E=n("YjIA");let T=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl(100)})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-currency-example2"]],decls:4,vars:4,consts:[[3,"formGroup"],["formControlName","testValue",3,"postfix"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275elementStart"](1,"tui-input-number",1),m["\u0275\u0275pipe"](2,"tuiCurrency"),m["\u0275\u0275text"](3," Type a sum "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("postfix",m["\u0275\u0275pipeBind1"](2,2,826)))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,E.a,r.NgControlStatus,r.FormControlName],pipes:[C.a],encapsulation:2,changeDetection:0}),e})();var _=n("yHor"),S=n("EPR0"),x=n("zGJC"),g=n("u8jZ");const h=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],A=["heading",$localize`:␟96bdc0b7f954e93557510ae70b833743c300d653␟2572384218273688291:With Input`];var b,M,P,I;function w(e,t){if(1&e&&(m["\u0275\u0275i18nStart"](0,b),m["\u0275\u0275elementStart"](1,"a",2),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](4,h),m["\u0275\u0275element"](5,"tui-currency-example1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"tui-doc-example",4),m["\u0275\u0275i18nAttributes"](7,A),m["\u0275\u0275element"](8,"tui-currency-example2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275i18nEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2)}}function R(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-input-number",7),m["\u0275\u0275pipe"](1,"tuiCurrency"),m["\u0275\u0275text"](2," Type a sum "),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"](2);m["\u0275\u0275property"]("formControl",e.control)("postfix",m["\u0275\u0275pipeBind1"](1,2,e.currency))}}function v(e,t){1&e&&m["\u0275\u0275i18n"](0,M)}function G(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-documentation"),m["\u0275\u0275elementStart"](1,"tui-doc-demo",5),m["\u0275\u0275template"](2,R,3,4,"ng-template"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](3,v,1,0,"ng-template",6),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().currency=t})),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("control",e.control),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("documentationPropertyValues",e.currencyVariants)("documentationPropertyValue",e.currency)}}function L(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",8),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,P),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,I),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}b=$localize`:␟38fc50e407d4725cad48742a5cfa8d0f6c4cd123␟5540073292632072973: Pipe for transforming number into money. It is usually used with ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputNumber${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK:${"\ufffd#3\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#5\ufffd"}:START_TAG_TUI_CURRENCY_EXAMPLE1:${"\ufffd/#5\ufffd"}:CLOSE_TAG_TUI_CURRENCY_EXAMPLE1:${"[\ufffd/#3\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#6\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#8\ufffd"}:START_TAG_TUI_CURRENCY_EXAMPLE2:${"\ufffd/#8\ufffd"}:CLOSE_TAG_TUI_CURRENCY_EXAMPLE2:${"[\ufffd/#3\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,b=m["\u0275\u0275i18nPostprocess"](b),M=$localize`:␟530c774891e15083e0ccaeafe4c297a539edf552␟1951189859517522583: Currency symbol `,P=$localize`:␟6568618e7ae1d0d19a01f45589b2ccaba10b6874␟14445270692099014: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiCurrencyPipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,I=$localize`:␟4b116de7d2c2450e0e061b74351d27d2ac5f6dd7␟4847281586031239668:Use pipe into template with input:`;let U=(()=>{class e{constructor(){this.exampleImportModule="import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiCurrencyPipeModule\n    ],\n...\n",this.exampleInsertTemplate='<tui-input-number [postfix]="826 | tuiCurrency">\n    Type a sum\n</tui-input-number>',this.example1={HTML:"<p>100 {{'RUB' | tuiCurrency }}</p>\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-currency-example2',\n    templateUrl: './template.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCurrencyExample2 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(100),\n    });\n}\n",HTML:'<form [formGroup]="testForm">\n    <tui-input-number [postfix]="826 | tuiCurrency" formControlName="testValue">\n        Type a sum\n    </tui-input-number>\n</form>\n'},this.currencyVariants=[null,826,840,"EUR","RUB","UGX","USD"],this.currency=this.currencyVariants[0],this.control=new r.FormControl(6432,r.Validators.required)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-currency"]],decls:4,vars:0,consts:[["header","Currency","package","ADDON-COMMERCE","path","addon-commerce/pipes/currency.pipe.ts"],["pageTab",""],["tuiLink","","routerLink","/components/input-number"],["id","base",3,"content",6,"heading"],["id","withInput",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","currency","documentationPropertyMode","input","documentationPropertyType","TuiCurrencyVariants",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","postfix"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,w,9,2,"ng-template",1),m["\u0275\u0275template"](2,G,4,3,"ng-template",1),m["\u0275\u0275template"](3,L,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[l.a,s.a,d.a,a.e,y.a,f,T,_.a,S.a,x.a,E.a,r.NgControlStatus,r.FormControlDirective,g.a],pipes:[C.a],encapsulation:2,changeDetection:0}),e})(),$=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.TuiCurrencyPipeModule,p.TuiInputNumberModule,r.ReactiveFormsModule,r.FormsModule,i.TuiMoneyModule,u.TuiLinkModule,o.c,c.h,a.f.forChild(Object(c.o)(U))]]}),e})()}}]);