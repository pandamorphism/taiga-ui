(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{H05P:function(e,n){const a="[A-Za-z$_][0-9A-Za-z$_]*",t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],s=["true","false","null","undefined","NaN","Infinity"],c=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],r=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],i=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],o=["arguments","this","super","console","window","document","localStorage","module","global"],l=[].concat(i,c,r);function d(e){const n=e.regex,d=a,b={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const a=e[0].length+e.index,t=e.input[a];if("<"===t||","===t)return void n.ignoreMatch();let s;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1);return-1!==e.input.indexOf(a,n)})(e,{after:a})||n.ignoreMatch()),(s=e.input.substr(a).match(/^\s+extends\s+/))&&0===s.index&&n.ignoreMatch()}},g={$pattern:a,keyword:t,literal:s,built_in:l,"variable.language":o},u="\\.([0-9](_?[0-9])*)",m={className:"number",variants:[{begin:`(\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},E={className:"subst",begin:"\\$\\{",end:"\\}",keywords:g,contains:[]},y={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"xml"}},A={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"css"}},p={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,E]},f={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},_=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,A,p,m];E.contains=_.concat({begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(_)});const N=[].concat(f,E.contains),h=N.concat([{begin:/\(/,end:/\)/,keywords:g,contains:["self"].concat(N)}]),w={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:h},v={variants:[{match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,n.concat(d,"(",n.concat(/\./,d),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},S={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...c,...r]}},R={variants:[{match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[w],illegal:/%/},x={match:n.concat(/\b/,(k=[...i,"super"],n.concat("(?!",k.join("|"),")")),d,n.lookahead(/\(/)),className:"title.function",relevance:0};var k;const O={begin:n.concat(/\./,n.lookahead(n.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},I={match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},w]},C="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",T={match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(C)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[w]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{PARAMS_CONTAINS:h,CLASS_REFERENCE:S},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,A,p,f,m,S,{className:"attr",begin:d+n.lookahead(":"),relevance:0},T,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[f,e.REGEXP_MODE,{className:"function",begin:C,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:h}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:b.begin,"on:begin":b.isTrulyOpeningTag,end:b.end}],subLanguage:"xml",contains:[{begin:b.begin,end:b.end,skip:!0,contains:["self"]}]}]},R,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[w,e.inherit(e.TITLE_MODE,{begin:d,className:"title.function"})]},{match:/\.\.\./,relevance:0},O,{match:"\\$"+d,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[w]},x,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},v,I,{match:/\$[(.]/}]}}e.exports=function(e){const n=d(e),c=["any","void","number","boolean","string","object","never","enum"],r={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:c},contains:[n.exports.CLASS_REFERENCE]},b={$pattern:a,keyword:t.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]),literal:s,built_in:l.concat(c),"variable.language":o},g={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},u=(e,n,a)=>{const t=e.contains.findIndex(e=>e.label===n);if(-1===t)throw new Error("can not find mode to replace");e.contains.splice(t,1,a)};return Object.assign(n.keywords,b),n.exports.PARAMS_CONTAINS.push(g),n.contains=n.contains.concat([g,r,i]),u(n,"shebang",e.SHEBANG()),u(n,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),n.contains.find(e=>"func.def"===e.label).relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx"]}),n}}}]);