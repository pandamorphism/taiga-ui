(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{vAR7:function(n,e,i){"use strict";i.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMobileDialogService} from '@taiga-ui/addon-mobile';\nimport {TUI_IS_IOS} from '@taiga-ui/cdk';\nimport {TuiNotificationsService} from '@taiga-ui/core';\nimport {switchMap} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-mobile-dialog-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_IS_IOS,\n            useValue: false,\n        },\n    ],\n})\nexport class TuiMobileDialogExample1 {\n    constructor(\n        @Inject(TuiMobileDialogService)\n        private readonly dialogService: TuiMobileDialogService,\n        @Inject(TuiNotificationsService)\n        private readonly notifications: TuiNotificationsService,\n    ) {}\n\n    show() {\n        const actions = ['No thanks', 'Remind me later', 'Rate now'];\n\n        this.dialogService\n            .open(\n                'If you like this app, please take a moment to leave a positive rating.',\n                {\n                    label: 'What do you think?',\n                    actions,\n                },\n            )\n            .pipe(\n                switchMap(index =>\n                    this.notifications.show(`Selected: ${actions[index]}`),\n                ),\n            )\n            .subscribe();\n    }\n}\n"}}]);