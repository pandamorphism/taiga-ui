(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{vD8y:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiSwipeModule",(function(){return k}));var i=n("An66"),o=n("1VvW"),a=n("SVIu"),r=n("hLNI"),l=n("l4xa"),c=n("kZht"),p=n("OZlg"),d=n("e0eB"),s=n("iyc4"),u=n("FnSC");let m=(()=>{class e{constructor(){this.swiped="default"}onSwipe(e){this.swiped=e.direction}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-swipe-example-1"]],hostVars:2,hostBindings:function(e,t){2&e&&c["\u0275\u0275classMap"](t.swiped)},decls:2,vars:2,consts:[[1,"box","tui-text_body-l",3,"ngClass","tuiSwipe"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275listener"]("tuiSwipe",(function(e){return t.onSwipe(e)})),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("ngClass",t.swiped),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" Swiped ",t.swiped,"\n"))},directives:[i.q,u.a],styles:[".box[_ngcontent-%COMP%]{width:200px;height:200px;background-color:var(--tui-primary);transition:all .5s ease-out;display:flex;justify-content:center;align-items:center;touch-action:none}.box.left[_ngcontent-%COMP%]{background-color:var(--tui-support-12)}.box.right[_ngcontent-%COMP%]{background-color:var(--tui-support-03)}.box.top[_ngcontent-%COMP%]{background-color:var(--tui-support-08)}.box.bottom[_ngcontent-%COMP%]{background-color:var(--tui-support-10)}"],changeDetection:0}),e})();var w=n("ZTXN"),S=n("jLdB");function g(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"div",2),c["\u0275\u0275listener"]("tuiSwipe",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().onSwipe(t)})),c["\u0275\u0275text"](1," Swipe right to close "),c["\u0275\u0275elementEnd"]()}}let b=(()=>{class e{constructor(){this.open$=new w.a}toggle(e){this.open$.next(e)}onSwipe(e){console.info(e.direction),"left"===e.direction&&this.toggle(!0),"right"===e.direction&&this.toggle(!1)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-swipe-example-2"]],decls:4,vars:4,consts:[[1,"container","tui-text_body-l",3,"tuiSwipe"],["class","sidebar tui-text_body-l",3,"tuiSwipe",4,"tuiSidebar","tuiSidebarDirection"],[1,"sidebar","tui-text_body-l",3,"tuiSwipe"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275listener"]("tuiSwipe",(function(e){return t.onSwipe(e)})),c["\u0275\u0275text"](1," Swipe left to open "),c["\u0275\u0275template"](2,g,2,0,"div",1),c["\u0275\u0275pipe"](3,"async"),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("tuiSidebar",c["\u0275\u0275pipeBind1"](3,2,t.open$))("tuiSidebarDirection","right"))},directives:[u.a,S.a],pipes:[i.b],styles:[".container[_ngcontent-%COMP%]{width:200px;height:200px}.sidebar[_ngcontent-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"],changeDetection:0}),e})();var f=n("u8jZ");const h=["header",$localize`:␟692d3486522b76f188e85c329a8dee83471e833d␟2599663742744214450:Swipe`],x=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var v,y;v=$localize`:␟a34630ac655c7ae6ca59883b8038230b9a706cd1␟2985041163238726247:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiSwipe${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: directive allows detecting swipes on mobile devices. `,y=$localize`:␟9c102467fc96b921efb10bbc95fb3d3eeca98348␟1350150750840159964: You can configure the directive with ${"\ufffd#5\ufffd"}:START_TAG_CODE:TUI_SWIPE_OPTIONS${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE: token. ${"\ufffd#6\ufffd\ufffd/#6\ufffd"}:LINE_BREAK: Allowed options: `;const E=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],C=["heading",$localize`:␟a3fa24e288faa8addbc361884d78e4bf1fa3937d␟5947747490679912275:With sidebar`];function T(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18nStart"](1,v),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"p"),c["\u0275\u0275i18nStart"](4,y),c["\u0275\u0275element"](5,"code"),c["\u0275\u0275element"](6,"br"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"dl"),c["\u0275\u0275elementStart"](8,"dt"),c["\u0275\u0275elementStart"](9,"strong"),c["\u0275\u0275text"](10,"timeout:"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"dd"),c["\u0275\u0275text"](12,"max time between touchstart and touchend"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"dt"),c["\u0275\u0275elementStart"](14,"strong"),c["\u0275\u0275text"](15,"threshold"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](16," : "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](17,"dd"),c["\u0275\u0275text"](18,"min distance between touchstart and touchend."),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](19,"tui-doc-example",3),c["\u0275\u0275i18nAttributes"](20,E),c["\u0275\u0275element"](21,"tui-swipe-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](22,"tui-doc-example",3),c["\u0275\u0275i18nAttributes"](23,C),c["\u0275\u0275element"](24,"tui-swipe-example-2"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](19),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example2)}}var _,$;function M(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",4),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,_),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,$),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleHtml)}}_=$localize`:␟4531ea54619a566db576498d7b988287093002a3␟4746491400247048532: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiSwipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our directive `,$=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let O=(()=>{class e{constructor(){this.exampleModule="import {TuiSwipeModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiSwipeModule,\n    ],\n...\n",this.exampleHtml='<div (tuiSwipe)="..."></div>\n\n',this.example1={TypeScript:"import {Component, HostBinding} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSwipe} from '@taiga-ui/cdk/interfaces/swipe';\n\n@Component({\n    selector: 'tui-swipe-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSwipeExample1 {\n    @HostBinding('class')\n    swiped = 'default';\n\n    onSwipe(swipe: TuiSwipe) {\n        this.swiped = swipe.direction;\n    }\n}\n",HTML:'<div\n    class="box tui-text_body-l"\n    [ngClass]="swiped"\n    (tuiSwipe)="onSwipe($event)"\n>\n    Swiped {{swiped}}\n</div>\n',LESS:".box {\n    width: 200px;\n    height: 200px;\n    background-color: var(--tui-primary);\n    transition: all 0.5s ease-out;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    touch-action: none;\n\n    &.left {\n        background-color: var(--tui-support-12);\n    }\n\n    &.right {\n        background-color: var(--tui-support-03);\n    }\n\n    &.top {\n        background-color: var(--tui-support-08);\n    }\n\n    &.bottom {\n        background-color: var(--tui-support-10);\n    }\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSwipe} from '@taiga-ui/cdk';\nimport {Subject} from 'rxjs';\n\n@Component({\n    selector: 'tui-swipe-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSwipeExample2 {\n    readonly open$ = new Subject();\n\n    toggle(open: boolean) {\n        this.open$.next(open);\n    }\n\n    onSwipe(swipe: TuiSwipe) {\n        console.info(swipe.direction);\n\n        if (swipe.direction === 'left') {\n            this.toggle(true);\n        }\n\n        if (swipe.direction === 'right') {\n            this.toggle(false);\n        }\n    }\n}\n",HTML:'<div class="container tui-text_body-l" (tuiSwipe)="onSwipe($event)">\n    Swipe left to open\n    <div\n        *tuiSidebar="open$ | async; direction: \'right\'"\n        class="sidebar tui-text_body-l"\n        (tuiSwipe)="onSwipe($event)"\n    >\n        Swipe right to close\n    </div>\n</div>\n',LESS:".container {\n    width: 200px;\n    height: 200px;\n}\n\n.sidebar {\n    width: 100%;\n    height: 100%;\n}\n\n.container,\n.sidebar {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-swipe"]],decls:5,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275i18nAttributes"](1,h),c["\u0275\u0275template"](2,T,25,2,"ng-template",1),c["\u0275\u0275template"](3,M,10,2,"ng-template",2),c["\u0275\u0275i18nAttributes"](4,x),c["\u0275\u0275elementEnd"]())},directives:[p.a,d.a,s.a,m,b,f.a],encapsulation:2,changeDetection:0}),e})(),k=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,l.TuiSwipeModule,a.i,r.TuiSidebarModule,l.TuiActiveZoneModule,o.f.forChild(Object(a.p)(O))]]}),e})()}}]);