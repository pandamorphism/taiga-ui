(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{"iuC/":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiDescribedByModule",(function(){return C}));var i=n("An66"),o=n("1VvW"),a=n("SVIu"),c=n("Qq0t"),d=n("kZht"),l=n("OZlg"),r=n("e0eB"),u=n("iyc4"),s=n("aPft"),m=n("zV1d"),p=n("tNxS"),b=n("fHzR");let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-described-by-example-1"]],decls:1,vars:0,consts:[["tuiIconButton","","icon","tuiIconTrashLarge","size","m","shape","rounded","appearance","secondary","tuiDescribedBy","uniqId","tuiHint","Delete","tuiHintId","uniqId"]],template:function(e,t){1&e&&d["\u0275\u0275element"](0,"button",0)},directives:[m.a,p.b,b.b],encapsulation:2,changeDetection:0}),e})();var y=n("u8jZ");const h=["header",$localize`:␟e5ff74f2255ffd17923eac15631934a6b2261a69␟1466081574327807579:DescribedBy`];var x;x=$localize`:␟c6082a1d7ceb640c378a664c57a499191e74a124␟2528835147115672837: This directive is used to couple hints with focusable elements and show hint on keyboard focus so they become accessible for people with disabilities. `;const T=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function g(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,x),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](3,T),d["\u0275\u0275elementStart"](4,"tui-notification",4),d["\u0275\u0275text"](5," Pass the same id to "),d["\u0275\u0275elementStart"](6,"code"),d["\u0275\u0275text"](7,"tuiDescribedBy"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](8," and "),d["\u0275\u0275elementStart"](9,"code"),d["\u0275\u0275text"](10,"tuiHintId"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](11," to connect directives. Then try focusing element with keyboard "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](12,"tui-described-by-example-1"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1)}}var D,E;function S(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",5),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,D),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18nStart"](8,E),d["\u0275\u0275element"](9,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](10,"tui-doc-code",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleHtml)}}D=$localize`:␟6fc75ae8a17038754e29dcf945d77553605bc1c2␟1433031574230009090: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiDescribedByModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,E=$localize`:␟6154ff794ed6b19432740f83b26606b3e4d96a73␟733981979519615581: Add ${"\ufffd#9\ufffd"}:START_TAG_CODE:tuiDescribedBy${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: to a focusable element that you want to trigger the hint upon keyboard focus: `;let B=(()=>{class e{constructor(){this.exampleModule="import {TuiDescribedByModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiDescribedByModule\n    ],\n...\n",this.exampleHtml='<button tuiDescribedBy="id">\n    ...\n</div>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-described-by-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDescribedByExample1 {}\n",HTML:'<button\n    tuiIconButton\n    icon="tuiIconTrashLarge"\n    size="m"\n    shape="rounded"\n    appearance="secondary"\n    tuiDescribedBy="uniqId"\n    tuiHint="Delete"\n    tuiHintId="uniqId"\n></button>\n'}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-described-by"]],decls:4,vars:0,consts:[["package","CORE","path","core/directives/described-by",6,"header"],["pageTab",""],["pageTab","Setup"],["id","base",3,"content",6,"heading"],[1,"tui-space_bottom-2"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,h),d["\u0275\u0275template"](2,g,13,1,"ng-template",1),d["\u0275\u0275template"](3,S,11,2,"ng-template",2),d["\u0275\u0275elementEnd"]())},directives:[l.a,r.a,u.a,s.a,f,y.a],encapsulation:2,changeDetection:0}),e})(),C=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,a.i,c.TuiNotificationModule,c.TuiButtonModule,c.TuiHintModule,c.TuiDescribedByModule,o.f.forChild(Object(a.p)(B))]]}),e})()}}]);