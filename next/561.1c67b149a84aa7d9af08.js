(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{Vnla:function(t,n,i){"use strict";i.r(n),n.default='<form class="wrapper" [formGroup]="testForm">\n    <tui-select formControlName="email" class="tui-space_bottom-4">\n        Choose an address\n        <tui-data-list *tuiDataList>\n            <button\n                *ngIf="!signatureVisible"\n                tuiOption\n                class="link"\n                (click)="toggle()"\n            >\n                <tui-svg src="tuiIconPlusCircleLarge" class="icon"></tui-svg>\n                Add signature\n            </button>\n            <button *ngFor="let item of items" tuiOption [value]="item">\n                {{item}}\n            </button>\n        </tui-data-list>\n    </tui-select>\n    <ng-container *ngIf="signatureVisible">\n        <tui-text-area\n            formControlName="signature"\n            tuiTextfieldSize="m"\n            tuiAutoFocus\n            class="tui-space_bottom-4"\n        >\n            Type a signature\n        </tui-text-area>\n        <button tuiButton type="button" size="m" (click)="toggle()">\n            Hide signature\n        </button>\n    </ng-container>\n</form>\n'}}]);