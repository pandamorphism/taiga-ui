import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiFileLike {
    readonly content?: PolymorpheusContent;
    readonly name: string;
    readonly size?: number;
    readonly src?: string;
    readonly type?: string;
}
