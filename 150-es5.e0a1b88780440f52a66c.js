function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f53dc93f6f06cbf57954f6160581b645c9a5152fb\u241f5640462183514721490: Inject ",":START_TAG_CODE:TuiDestroyService",":CLOSE_TAG_CODE: into your component: "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fd2e17157657bce69a0d21ad9c6bd6d9399e944f0\u241f7702088060948888119: A service to terminate subscriptions upon component/directive removal. "]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{K1lw:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiDestroyModule",(function(){return k}));var i,c,o=n("2kYt"),r=n("sEIs"),a=n("SVIu"),l=n("Qq0t"),s=n("EM62"),m=n("OZlg"),p=n("e0eB"),u=n("aPft"),d=n("iyc4"),f=n("l4xa"),v=n("KTx3"),b=n("kuMc"),y=n("zV1d"),g=((i=function e(t,n){var i=n.nativeElement;_classCallCheck(this,e),Object(v.a)(i,"click").pipe(Object(b.a)(t)).subscribe((function(){console.log("click")}))}).\u0275fac=function(e){return new(e||i)(s["\u0275\u0275directiveInject"](f.TuiDestroyService),s["\u0275\u0275directiveInject"](s.ElementRef))},i.\u0275cmp=s["\u0275\u0275defineComponent"]({type:i,selectors:[["tui-destroy-example"]],features:[s["\u0275\u0275ProvidersFeature"]([f.TuiDestroyService])],decls:2,vars:0,consts:[["tuiButton","","type","button","appearance","primary","size","m"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"button",0),s["\u0275\u0275text"](1,"Click me!"),s["\u0275\u0275elementEnd"]())},directives:[y.a],encapsulation:2,changeDetection:0}),i),T=n("u8jZ");c=$localize(_templateObject());var E,S=["heading",$localize(_templateObject2())];function j(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,c),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-notification",2),s["\u0275\u0275text"](3," Component must have "),s["\u0275\u0275elementStart"](4,"code"),s["\u0275\u0275text"](5,"providers: [TuiDestroyService]"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](7,S),s["\u0275\u0275element"](8,"tui-destroy-example"),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("content",n.example)}}function h(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",4),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,E),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",n.injectService)}}E=$localize(_templateObject3(),"\ufffd#4\ufffd","\ufffd/#4\ufffd");var C,x,_=((x=function e(){_classCallCheck(this,e),this.injectService="import {TuiDestroyService} from '@taiga-ui/cdk';\n...\nconstructor(\n    @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService\n) {}\n...\n",this.example={TypeScript:"import {Component, ElementRef} from '@angular/core';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\nimport {fromEvent} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-destroy-example',\n    templateUrl: './template.html',\n    changeDetection,\n    encapsulation,\n    providers: [TuiDestroyService],\n})\nexport class TuiDestroyExample {\n    constructor(destroy$: TuiDestroyService, {nativeElement}: ElementRef<HTMLElement>) {\n        fromEvent(nativeElement, 'click')\n            .pipe(takeUntil(destroy$))\n            .subscribe(() => {\n                console.log('click');\n            });\n    }\n}\n",HTML:'<button tuiButton type="button" appearance="primary" size="m">Click me!</button>\n'}}).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=s["\u0275\u0275defineComponent"]({type:x,selectors:[["example-tui-destroy"]],decls:3,vars:0,consts:[["header","DestroyService","package","CDK","path","cdk/services/destroy.service.ts"],["pageTab",""],["status","warning"],["id","Basic",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,j,9,1,"ng-template",1),s["\u0275\u0275template"](2,h,6,1,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[m.a,p.a,u.a,d.a,g,T.a],encapsulation:2,changeDetection:0}),x),k=((C=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[o.c,a.h,l.TuiButtonModule,l.TuiNotificationModule,r.f.forChild(Object(a.o)(_))]]}),C)}}]);