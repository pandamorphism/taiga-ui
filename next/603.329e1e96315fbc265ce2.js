(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{"2mKt":function(t,a,e){"use strict";e.r(a),a.default='<div>\n    Base colors\n    <tui-tag class="tag" [hoverable]="true" [value]="tag"></tui-tag>\n    <tui-tag\n        status="primary"\n        class="tag"\n        [hoverable]="true"\n        [value]="tag"\n    ></tui-tag>\n    <div tuiMode="onDark" class="light-mode">\n        <tui-tag class="tag" [hoverable]="true" [value]="tag"></tui-tag>\n    </div>\n    <div tuiMode="onLight" class="dark-mode">\n        <tui-tag class="tag" [hoverable]="true" [value]="tag"></tui-tag>\n    </div>\n</div>\n<div class="tui-space_top-3">\n    Support color with CSS and\n    <code>status="custom"</code>\n    <tui-tag\n        *tuiRepeatTimes="let index of 20"\n        status="custom"\n        class="tag support-{{index + 1}}"\n        [hoverable]="true"\n        [value]="tag"\n    ></tui-tag>\n</div>\n'}}]);