(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{uwNx:function(e,n,t){"use strict";t.r(n),n.default="import {Inject, Injectable} from '@angular/core';\nimport {TUI_DEFAULT_MATCHER, TuiDestroyService} from '@taiga-ui/cdk';\nimport {Observable, of, Subject} from 'rxjs';\nimport {\n    delay,\n    distinctUntilChanged,\n    shareReplay,\n    startWith,\n    switchMap,\n    takeUntil,\n} from 'rxjs/operators';\n\nimport {databaseMockData} from './database-mock-data';\nimport {User} from './user';\n\n// @dynamic\n@Injectable()\nexport class RequestService {\n    private readonly request$ = new Subject<string>();\n\n    // Imitating server request with switchMap + delay pair\n    private readonly response$ = this.request$.pipe(\n        distinctUntilChanged(),\n        switchMap(query =>\n            of(databaseMockData.filter(user => TUI_DEFAULT_MATCHER(user, query))).pipe(\n                delay(Math.random() * 1000 + 500),\n                startWith(null),\n            ),\n        ),\n        takeUntil(this.destroy$),\n        shareReplay(1),\n    );\n\n    constructor(@Inject(TuiDestroyService) private readonly destroy$: Observable<void>) {}\n\n    request(query: string | null): Observable<ReadonlyArray<User> | null> {\n        this.request$.next(query || '');\n\n        return this.response$;\n    }\n}\n"}}]);