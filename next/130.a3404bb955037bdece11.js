(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{fugw:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiDropdownSelectionModule",(function(){return ce}));var o=n("An66"),i=n("3kIJ"),r=n("1VvW"),a=n("SVIu"),d=n("Qq0t"),l=n("dvRg"),u=n("cWK9"),c=n("kZht"),p=n("OZlg"),s=n("e0eB"),m=n("iyc4"),w=n("bPri");let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-dropdown-selection-example-1"]],decls:3,vars:0,consts:[["tuiDropdownSelection","","tuiDropdownSelectionPosition","selection","tuiDropdownContent","\xa0\xa0Dropdown text\xa0\xa0"]],template:function(e,t){1&e&&(c["\u0275\u0275text"](0,"Dropdown will be shown text selection:\n"),c["\u0275\u0275elementStart"](1,"p",0),c["\u0275\u0275text"](2," Select a text to see dropdown\n"),c["\u0275\u0275elementEnd"]())},directives:[w.a],encapsulation:2,changeDetection:0}),e})();var f=n("D57K"),h=n("l4xa"),y=n("+SFL"),D=n("oEBb"),x=n("cVyY"),S=n("xcN3"),v=n("cweO");function T(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"button",6),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const n=t.$implicit,o=c["\u0275\u0275nextContext"](3),i=c["\u0275\u0275reference"](1);return o.onClick(n.login,i.nativeFocusableElement)})),c["\u0275\u0275text"](1),c["\u0275\u0275element"](2,"tui-avatar",7),c["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.name," "),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("rounded",!0)("avatarUrl",e.avatar)("text",e.name)}}function C(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-data-list",4),c["\u0275\u0275listener"]("keydown.escape",(function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"](2),c["\u0275\u0275reference"](1).nativeFocusableElement.focus()})),c["\u0275\u0275template"](1,T,3,4,"button",5),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"](2),t=c["\u0275\u0275reference"](1);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngForOf",e.filterItems(t.nativeFocusableElement))}}function b(e,t){if(1&e&&c["\u0275\u0275template"](0,C,2,1,"tui-data-list",3),2&e){c["\u0275\u0275nextContext"]();const e=c["\u0275\u0275reference"](1);c["\u0275\u0275property"]("ngIf",e.nativeFocusableElement)}}let P=(()=>{class e{constructor(){this.options=h.EMPTY_QUERY,this.value="Type @ to see a dropdown",this.items=[{name:"Alexander Inkin",avatar:y.a,login:"a.inkin"},{name:"Roman Sedov",avatar:"",login:"r.sedov"}],this.predicate=e=>Object(l.getWordRange)(e).toString().startsWith("@")}get focused(){return!!this.options.length||null}onArrow(e,t){const n=this.options[t];n&&(e.preventDefault(),Object(h.setNativeFocused)(n.nativeElement))}filterItems(e){const t=this.getCurrentSearch(e).replace("@","");return this.getFilteredItems(this.items,t)}onClick(e,t){const n=this.getCurrentSearch(t),o=this.value.replace(n,e),i=o.indexOf(e)+e.length;this.value=o,Object(h.setNativeFocused)(t),t.value=o,t.setSelectionRange(i,i)}getFilteredItems(e,t){return e.filter(({name:e,login:n})=>n.startsWith(t)||e.startsWith(t))}getCurrentSearch(e){return e.value.substring(e.value.indexOf("@"),e.selectionStart)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-dropdown-selection-example-2"]],viewQuery:function(e,t){var n;1&e&&c["\u0275\u0275viewQuery"](d.TuiOptionComponent,!0,c.ElementRef),2&e&&c["\u0275\u0275queryRefresh"](n=c["\u0275\u0275loadQuery"]())&&(t.options=n)},decls:5,vars:4,consts:[["tuiDropdownSelectionPosition","word",3,"tuiDropdownContent","tuiDropdownSelection","pseudoFocused","ngModel","ngModelChange","keydown.arrowUp","keydown.arrowDown"],["textarea",""],["dropdown",""],["class","menu",3,"keydown.escape",4,"ngIf"],[1,"menu",3,"keydown.escape"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["tuiOption","",3,"click"],["size","s",3,"rounded","avatarUrl","text"]],template:function(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"tui-text-area",0,1),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e}))("keydown.arrowUp",(function(e){return t.onArrow(e,"last")}))("keydown.arrowDown",(function(e){return t.onArrow(e,"first")})),c["\u0275\u0275text"](2," Type a message\n"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](3,b,1,1,"ng-template",null,2,c["\u0275\u0275templateRefExtractor"])),2&e){const e=c["\u0275\u0275reference"](4);c["\u0275\u0275property"]("tuiDropdownContent",e)("tuiDropdownSelection",t.predicate)("pseudoFocused",t.focused)("ngModel",t.value)}},directives:[D.a,w.a,i.NgControlStatus,i.NgModel,o.t,x.a,o.s,S.a,v.a],styles:[".menu[_ngcontent-%COMP%]{width:12.5rem}"],changeDetection:0}),Object(f.b)([h.tuiPure],e.prototype,"getFilteredItems",null),e})();var E=n("EPR0"),V=n("yHor"),A=n("zGJC"),M=n("zV1d"),O=n("u8jZ");const _=["header",$localize`:␟1fd7faad08a61161f51e02619b69abee3d5696e3␟8551098621045190194:DropdownSelection`];var R;R=$localize`:␟432c55cd71cfc37ae765480b4e27ffbef9174a01␟2979268708696318460:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiDropdownSelection${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: shows dropdown with custom template on selected text `;const $=["heading",$localize`:␟86bd4c895bf70b35a58305b7d107a2f1b67b141c␟1238358838717941284:Sample`];function H(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18nStart"](1,R),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-doc-example",2),c["\u0275\u0275i18nAttributes"](4,$),c["\u0275\u0275element"](5,"tui-dropdown-selection-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"tui-doc-example",3),c["\u0275\u0275element"](7,"tui-dropdown-selection-example-2"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example2)}}var L,k,F,N,G,I,W,z,U,B,j,Q,Y,J;function K(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",16),c["\u0275\u0275i18nStart"](1,k),c["\u0275\u0275element"](2,"p"),c["\u0275\u0275element"](3,"button",17),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"]())}function Z(e,t){1&e&&c["\u0275\u0275i18n"](0,F)}function q(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,N),c["\u0275\u0275element"](1,"code"),c["\u0275\u0275i18nEnd"]())}function X(e,t){1&e&&c["\u0275\u0275i18n"](0,G)}function ee(e,t){1&e&&c["\u0275\u0275i18n"](0,I)}function te(e,t){1&e&&c["\u0275\u0275i18n"](0,W)}function ne(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,z),c["\u0275\u0275element"](1,"code"),c["\u0275\u0275i18nEnd"]())}function oe(e,t){1&e&&c["\u0275\u0275i18n"](0,U)}function ie(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,B),c["\u0275\u0275element"](1,"strong"),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275i18nEnd"]())}function re(e,t){1&e&&c["\u0275\u0275i18n"](0,j)}function ae(e,t){1&e&&c["\u0275\u0275i18n"](0,Q)}function de(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo"),c["\u0275\u0275elementStart"](1,"p",4),c["\u0275\u0275i18nStart"](2,L),c["\u0275\u0275element"](3,"strong"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](4,K,4,0,"ng-template",null,5,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"tui-doc-documentation"),c["\u0275\u0275template"](7,Z,1,0,"ng-template",6),c["\u0275\u0275template"](8,q,2,0,"ng-template",7),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().tuiDropdownAlign=t})),c["\u0275\u0275template"](9,X,1,0,"ng-template",8),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().tuiDropdownDirection=t})),c["\u0275\u0275template"](10,ee,1,0,"ng-template",9),c["\u0275\u0275template"](11,te,1,0,"ng-template",10),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().tuiDropdownLimitWidth=t})),c["\u0275\u0275template"](12,ne,2,0,"ng-template",11),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().tuiDropdownMinHeight=t})),c["\u0275\u0275template"](13,oe,1,0,"ng-template",12),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().tuiDropdownMaxHeight=t})),c["\u0275\u0275template"](14,ie,3,0,"ng-template",13),c["\u0275\u0275template"](15,re,1,0,"ng-template",14),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().position=t})),c["\u0275\u0275template"](16,ae,1,0,"ng-template",15),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().tuiDropdownSided=t})),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275reference"](5),t=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("tuiDropdownSelectionPosition",t.position)("tuiDropdownContent",e)("tuiDropdownMinHeight",t.tuiDropdownMinHeight)("tuiDropdownMaxHeight",t.tuiDropdownMaxHeight)("tuiDropdownAlign",t.tuiDropdownAlign)("tuiDropdownDirection",t.tuiDropdownDirection)("tuiDropdownLimitWidth",t.tuiDropdownLimitWidth)("tuiDropdownSided",t.tuiDropdownSided),c["\u0275\u0275advance"](7),c["\u0275\u0275property"]("documentationPropertyValues",t.alignVariants)("documentationPropertyValue",t.tuiDropdownAlign),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",t.dropdownDirectionVariants)("documentationPropertyValue",t.tuiDropdownDirection),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("documentationPropertyValues",t.tuiDropdownLimitWidthVariants)("documentationPropertyValue",t.tuiDropdownLimitWidth),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",t.tuiDropdownMinHeight),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",t.tuiDropdownMaxHeight),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("documentationPropertyValues",t.positionVariants)("documentationPropertyValue",t.position),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",t.tuiDropdownSided)}}function le(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",18),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,Y),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",19),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,J),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",20),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleHtml)}}L=$localize`:␟2a35c99c7df15ae5710562ef89d46774fd4550ea␟2266199980508326983: Select a text to ${"\ufffd#3\ufffd"}:START_TAG_STRONG:see a dropdown${"\ufffd/#3\ufffd"}:CLOSE_TAG_STRONG:`,k=$localize`:␟d1ecab852a303aac35d35070161452b1a1d5785d␟5618338812223057329: Here you can have any content ${"\ufffd#2\ufffd"}:START_PARAGRAPH: You can select a text inside a dropdown and it will not close a dropdown ${"\ufffd/#2\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd#3\ufffd"}:START_TAG_BUTTON:Button${"\ufffd/#3\ufffd"}:CLOSE_TAG_BUTTON:`,F=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,N=$localize`:␟4e5cb2c74dfb392802e7e005883b9be2c781fd4a␟905186926226823365: Align of dropdown (does not work together with ${"\ufffd#1\ufffd"}:START_TAG_CODE:limitWidth === 'fixed'${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,G=$localize`:␟bfe17793e6e84334e10951e36a771ad1ac58ef05␟8707958835080744644: Set a vertical direction of dropdown `,I=$localize`:␟61d2797cfb021d05ea2691f565dd41ec47478a3c␟5413767166426586835: Set dropdown host manually. For example, it will be a target if someone blurs dropdown with Tab/Shift+Tab. Element with a directive is used by default. `,W=$localize`:␟da2ca1c17abdc5578724541ebd2b9c6d044d248e␟1790691801673246110: Limit dropdown width `,z=$localize`:␟e848cc13a18e3647fb148f5d1c19ae5f888e1557␟5799599437390794628: Minimum height to calculate that dropdown fits to setted ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiDropdownDirection${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:`,U=$localize`:␟b16442aff8c447ade67e3d9a81f268796ea113fa␟34813109637476177: Maximum height of dropdown `,B=$localize`:␟5c15cd8f1ed7cb2bd17b60a6af84c911cd1699cc␟1070006108743271766:${"\ufffd#1\ufffd"}:START_TAG_STRONG:Directive selector${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG: . Optional: you can also set a handler that gets ${"\ufffd#2\ufffd"}:START_TAG_CODE:Range${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: and returns show/close dropdown `,j=$localize`:␟7b2fe7a08c93ab872d983500d94a057f31327d32␟1537393581077902015: Position of dropdown near text selection `,Q=$localize`:␟8ce8395bd49b9bbee585ad617dad9e48eb6a8c49␟3925785757038900199: Dropdown is sided by host `,Y=$localize`:␟8a62be1bbab6430a7d42c204d2b6d6ba8d65fffe␟1816878685679044442: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiDropdownModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,J=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let ue=(()=>{class e{constructor(){this.exampleModule="import {TuiDropdownSelectionModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiDropdownSelectionModule\n    ],\n...\n",this.exampleHtml='<div tuiDropdownSelection [tuiDropdownContent]="content">\n    Host element\n</div>\n\n<ng-template #content>\n    Dropdown content\n</ng-template>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-selection-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownSelectionExample1 {}\n",HTML:'Dropdown will be shown text selection:\n<p\n    tuiDropdownSelection\n    tuiDropdownSelectionPosition="selection"\n    tuiDropdownContent="&nbsp;&nbsp;Dropdown text&nbsp;&nbsp;"\n>\n    Select a text to see dropdown\n</p>\n'},this.example2={TypeScript:"import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_QUERY, setNativeFocused, TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';\nimport {TuiOptionComponent} from '@taiga-ui/core';\nimport {getWordRange} from '@taiga-ui/kit';\n\nimport {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\nexport interface User {\n    readonly name: string;\n    readonly avatar: string;\n    readonly login: string;\n}\n\n@Component({\n    selector: 'tui-dropdown-selection-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownSelectionExample2 {\n    @ViewChildren(TuiOptionComponent, {read: ElementRef})\n    private readonly options: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;\n\n    value = 'Type @ to see a dropdown';\n\n    readonly items = [\n        {\n            name: 'Alexander Inkin',\n            avatar,\n            login: 'a.inkin',\n        },\n        {\n            name: 'Roman Sedov',\n            avatar: '',\n            login: 'r.sedov',\n        },\n    ];\n\n    get focused(): true | null {\n        return !!this.options.length || null;\n    }\n\n    predicate: TuiBooleanHandler<Range> = range =>\n        getWordRange(range).toString().startsWith('@');\n\n    onArrow(event: KeyboardEvent, which: 'first' | 'last') {\n        const item = this.options[which];\n\n        if (!item) {\n            return;\n        }\n\n        event.preventDefault();\n        setNativeFocused(item.nativeElement);\n    }\n\n    filterItems(textarea: HTMLTextAreaElement): ReadonlyArray<User> {\n        const search = this.getCurrentSearch(textarea).replace('@', '');\n\n        return this.getFilteredItems(this.items, search);\n    }\n\n    onClick(login: string, textarea: HTMLTextAreaElement) {\n        const search = this.getCurrentSearch(textarea);\n        const value = this.value.replace(search, login);\n        const caret = value.indexOf(login) + login.length;\n\n        this.value = value;\n        setNativeFocused(textarea);\n        textarea.value = value;\n        textarea.setSelectionRange(caret, caret);\n    }\n\n    @tuiPure\n    private getFilteredItems(\n        items: ReadonlyArray<User>,\n        search: string,\n    ): ReadonlyArray<User> {\n        return items.filter(\n            ({name, login}) => login.startsWith(search) || name.startsWith(search),\n        );\n    }\n\n    private getCurrentSearch(textarea: HTMLTextAreaElement): string {\n        return textarea.value.substring(\n            textarea.value.indexOf('@'),\n            textarea.selectionStart,\n        );\n    }\n}\n",HTML:'<tui-text-area\n    #textarea\n    tuiDropdownSelectionPosition="word"\n    [tuiDropdownContent]="dropdown"\n    [tuiDropdownSelection]="predicate"\n    [pseudoFocused]="focused"\n    [(ngModel)]="value"\n    (keydown.arrowUp)="onArrow($event, \'last\')"\n    (keydown.arrowDown)="onArrow($event, \'first\')"\n>\n    Type a message\n</tui-text-area>\n<ng-template #dropdown>\n    <tui-data-list\n        *ngIf="textarea.nativeFocusableElement"\n        class="menu"\n        (keydown.escape)="textarea.nativeFocusableElement.focus()"\n    >\n        <button\n            *ngFor="let item of filterItems(textarea.nativeFocusableElement)"\n            tuiOption\n            (click)="onClick(item.login, textarea.nativeFocusableElement)"\n        >\n            {{item.name}}\n            <tui-avatar\n                size="s"\n                [rounded]="true"\n                [avatarUrl]="item.avatar"\n                [text]="item.name"\n            ></tui-avatar>\n        </button>\n    </tui-data-list>\n</ng-template>\n',LESS:".menu {\n    width: 12.5rem;\n}\n"},this.positionVariants=["selection","word","tag"],this.open=!1,this.position="selection",this.tuiDropdownMinHeight=d.DEFAULT_MIN_HEIGHT,this.tuiDropdownMaxHeight=d.DEFAULT_MAX_HEIGHT,this.tuiDropdownSided=!1,this.alignVariants=["right","left"],this.tuiDropdownAlign=this.alignVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.tuiDropdownDirection=null,this.tuiDropdownLimitWidthVariants=["fixed","min","auto"],this.tuiDropdownLimitWidth=this.tuiDropdownLimitWidthVariants[0]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-dropdown-selection"]],decls:5,vars:0,consts:[["package","KIT","type","directives",6,"header"],["pageTab",""],["id","selection",3,"content",6,"heading"],["id","textarea","heading","textarea",3,"content"],["tuiDropdownSelection","",3,"tuiDropdownSelectionPosition","tuiDropdownContent","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownSided"],["dropdownContent",""],["documentationPropertyName","tuiDropdownContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","tuiDropdownAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownDirection","documentationPropertyMode","input","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownHost","documentationPropertyMode","input","documentationPropertyType","HTMLElement | null"],["documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyMode","input","documentationPropertyType","TuiDropdownWidthT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMinHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSelection","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<Range>"],["documentationPropertyName","tuiDropdownSelectionPosition","documentationPropertyMode","input","documentationPropertyType","'selection' | 'word' | 'tag'",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSided","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"dropdown"],["tuiButton","","type","button"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275i18nAttributes"](1,_),c["\u0275\u0275template"](2,H,8,2,"ng-template",1),c["\u0275\u0275template"](3,de,17,19,"ng-template",1),c["\u0275\u0275template"](4,le,10,2,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[p.a,s.a,m.a,g,P,E.a,w.a,V.a,A.a,M.a,O.a],styles:[".dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:.5rem 1.25rem}"],changeDetection:0}),e})(),ce=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,u.c,l.TuiDropdownSelectionModule,d.TuiButtonModule,l.TuiTextAreaModule,l.TuiAvatarModule,d.TuiDataListModule,a.i,r.f.forChild(Object(a.p)(ue))]]}),e})()}}]);