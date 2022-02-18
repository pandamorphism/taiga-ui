(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{"7lSG":function(e,n,a){"use strict";a.r(n),n.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {Observable, of, Subject} from 'rxjs';\nimport {delay, filter, startWith, switchMap} from 'rxjs/operators';\n\nimport {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly avatarUrl: string | null = null,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst databaseMockData: ReadonlyArray<User> = [\n    new User('Roman', 'Sedov', 'http://marsibarsi.me/images/1x1small.jpg'),\n    new User('Alex', 'Inkin', avatar),\n    new User('Dmitriy', 'Demenskiy'),\n    new User('Evgeniy', 'Mamaev'),\n    new User('Ivan', 'Ishmametiev'),\n    new User('Igor', 'Katsuba'),\n    new User('Yulia', 'Tsareva'),\n];\n\n@Component({\n    selector: 'tui-multi-select-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample2 {\n    readonly search$ = new Subject<string>();\n\n    readonly items$: Observable<ReadonlyArray<User> | null> = this.search$.pipe(\n        filter(value => value !== null),\n        switchMap(search =>\n            this.serverRequest(search).pipe(startWith<ReadonlyArray<User> | null>(null)),\n        ),\n        startWith(databaseMockData),\n    );\n\n    readonly testValue = new FormControl([databaseMockData[0]]);\n\n    onSearchChange(searchQuery: string) {\n        this.search$.next(searchQuery);\n    }\n\n    /**\n     * Server request emulation\n     */\n    private serverRequest(searchQuery: string): Observable<ReadonlyArray<User>> {\n        const result = databaseMockData.filter(\n            user =>\n                user.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1,\n        );\n\n        return of(result).pipe(delay(Math.random() * 1000 + 500));\n    }\n}\n"}}]);