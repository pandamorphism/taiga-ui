(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{"G1/N":function(n,t,i){"use strict";i.r(t),t.default='<form class="b-form" [formGroup]="testForm">\n    <tui-notification i18n>\n        Taiga UI input is compatible with\n        <a\n            tuiLink\n            href="https://www.npmjs.com/package/angular2-text-mask"\n            target="_blank"\n        >\n            angular2-text-mask\n        </a>\n    </tui-notification>\n    <p>\n        <tui-input formControlName="testValue1" [textMask]="textMaskOptions1">\n            Document number\n            <input tuiTextfield inputmode="numeric" />\n        </tui-input>\n    </p>\n    <p>\n        <tui-input formControlName="testValue2" [textMask]="textMaskOptions2">\n            Secret number\n            <input tuiTextfield inputmode="numeric" />\n        </tui-input>\n    </p>\n</form>\n<p>Value is stored in control with mask applied:</p>\n<pre>{{testForm.value | json}}</pre>\n'}}]);