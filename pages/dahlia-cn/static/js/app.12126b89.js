(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./.docz/app/db.json":function(n){n.exports={config:{title:"Dahlia",description:"An opinionated React Framework for building modern web applications",menu:[],ordering:"descending",version:"1.0.0",repository:"https://github.com/forsigner/dahlia",native:!1,codeSandbox:!0,themeConfig:{codemirrorTheme:"one-light",lineNumbers:!1,colors:{primary:"#ea567c",sidebarBg:"white"},styles:{body:{fontFamily:"Hack, Monaco, Source Code Pro, Menlo, Courier New, monospace",fontSize:"16px !important"},h1:{fontSize:36},h2:{fontSize:28},h3:{fontSize:24},h4:{fontSize:18},p:{fontSize:"16px !important"},div:{fontSize:16}}},hashRouter:!0,base:"/dahlia-cn/",dest:"../../../pages/dahlia-cn",htmlContext:{head:{links:[],raw:"\n      <style>\n\n        #root > div > div:first-of-type {\n          width: 350px;\n          min-width: 350px;\n        }\n        #root > div > div:first-of-type > div:first-of-type {\n          padding: 30px;\n          width: 350px;\n          min-width: 350px;\n        }\n        #root > div > div:first-of-type > div:first-of-type > div:last-of-type {\n          display: none;\n        }\n        #root > div > div:first-of-type > div:first-of-type > div:nth-child(2):before {\n          background: transparent;\n        }\n        #root > div > div:first-of-type > div:first-of-type > div:nth-child(2) h1 {\n          font-size: 2.5em;\n          font-weight: 100;\n        }\n        .scrollbar-container {\n          max-height: unset!important;\n        }\n        .CodeMirror {\n          background-color: #f8f8f8 !important;\n          font-size: 14px;\n          height: 100%!important;\n        }\n        .CodeMirror pre {\n          font-family: Hack, Monaco, Source Code Pro, Menlo, Courier New, monospace !important;\n          line-height: 20.8px!important;\n        }\n        .CodeMirror-line {\n          padding: 0 10px!important;\n        }\n        .CodeMirror-lines {\n          padding: 10px 0!important;\n        }\n        .CodeMirror-linenumber {\n          display: none;\n          padding: 0 7px 0 5px!important;\n        }\n        .code-table {\n          display: flex;\n        }\n        .code-table > div:first-of-type {\n          flex: 1.5;\n        }\n        .code-table > div:last-of-type {\n          flex: 1;\n        }\n        .code-table > div:last-child {\n          position: relative;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          background: #f4f6f9;\n          font-family: Hack, Monaco, Source Code Pro, Menlo, Courier New, monospace !important;\n          font-size: 4em;\n          font-weight: 600;\n          color: white;\n        }\n        .highlight {\n          background: #ea567c;\n          color: white;\n          margin: 0 3px;\n          padding: 4px 6px;\n          border-radius: 3px;\n        }\n        .grommetux-meter {\n          height: 70px;\n        }\n        .grommetux-meter__graphic {\n          fill: transparent;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-width: 15px;\n          width: 70px;\n          height: 70px;\n        }\n        .grommetux-meter__tracks {\n          stroke: white;\n        }\n        .grommetux-meter__values {\n          stroke: rgb(45, 55, 71);\n        }\n        code {\n          background: #f4f6f9;\n          color: #ea567c !important;\n          margin: 0 3px;\n          padding: 4px 6px;\n          border-radius: 3px;\n          font-family: Hack, Monaco, Source Code Pro, Menlo, Courier New, monospace !important;\n          font-size: 14px;\n        }\n        a, a:visited, a:active {\n          color: rgb(31, 182, 255);\n          text-decoration: none;\n          cursor: pointer;\n        }\n        p, div {\n          border: none !important;\n          font-size: 16px !important;\n        }\n        h1, h2, h3, h4, h5 {\n          font-weight: bold !important;\n          font-family: 'Hack, Monaco, Source Code Pro, Menlo, Courier New, monospace' !important;\n        }\n\n        li::before {\n          content: '\u25cf ';\n          margin-left: 5px;\n          color: #CED4DE;\n          font-weight: lighter !important;\n          font-size: 8px !important;\n          margin-right: 0px !important;\n        }\n\n\n.cm-s-one-light {\n  font-family: Menlo, Monaco, 'Courier New', monospace;\n  font-size: 12px;\n  line-height: 18px;\n  color: #50a14f;\n  background-color: #fff;\n}\n.cm-s-one-light .CodeMirror-selected {\n  background-color: #3e4451;\n}\n.cm-s-one-light .CodeMirror-gutter,\n.cm-s-one-light .CodeMirror-gutters {\n  border: none;\n  background-color: #fff;\n}\n.cm-s-one-light .CodeMirror-linenumber,\n.cm-s-one-light .CodeMirror-linenumbers {\n  color: #9d9d9f !important;\n  background-color: transparent;\n}\n.cm-s-one-light .CodeMirror-lines {\n  color: #383a42 !important;\n  background-color: transparent;\n}\n.cm-s-one-light .CodeMirror-cursor {\n  border-left: 2px solid #56b6c2 !important;\n}\n/* addon: edit/machingbrackets.js & addon: edit/matchtags.js */\n.cm-s-one-light .CodeMirror-matchingbracket,\n.cm-s-one-light .CodeMirror-matchingtag {\n  border-bottom: 2px solid #56b6c2;\n  color: #383a42 !important;\n  background-color: transparent;\n}\n.cm-s-one-light .CodeMirror-nonmatchingbracket {\n  border-bottom: 2px solid #e06c75;\n  color: #383a42 !important;\n  background-color: transparent;\n}\n/* addon: fold/foldgutter.js */\n.cm-s-one-light .CodeMirror-foldmarker,\n.cm-s-one-light .CodeMirror-foldgutter,\n.cm-s-one-light .CodeMirror-foldgutter-open,\n.cm-s-one-light .CodeMirror-foldgutter-folded {\n  border: none;\n  text-shadow: none;\n  color: #9d9d9f !important;\n  background-color: transparent;\n}\n/* addon: selection/active-line.js */\n.cm-s-one-light .CodeMirror-activeline-background {\n  // background-color: rgba(153, 187, 255, 0.04);\n  background-color: #000;\n}\n\n/* basic syntax */\n.cm-s-one-light .cm-header {\n  color: #e06c75;\n}\n.cm-s-one-light .cm-quote {\n  color: #9d9d9f;\n  font-style: italic;\n}\n.cm-s-one-light .cm-negative {\n  color: #e06c75;\n}\n.cm-s-one-light .cm-positive {\n  color: #e06c75;\n}\n.cm-s-one-light .cm-strong {\n  color: #e45649;\n  font-weight: bold;\n}\n.cm-s-one-light .cm-header .cm-strong {\n  color: #e45649;\n  font-weight: bold;\n}\n.cm-s-one-light .cm-em {\n  color: #c678dd;\n  font-style: italic;\n}\n.cm-s-one-light .cm-header .cm-em {\n  color: #c678dd;\n  font-style: italic;\n}\n.cm-s-one-light .cm-tag {\n  color: #e45649;\n}\n.cm-s-one-light .cm-attribute {\n  color: #d49e2a;\n}\n.cm-s-one-light .cm-link {\n  color: #50a14f;\n  border-bottom: solid 1px #50a14f;\n}\n.cm-s-one-light .cm-builtin {\n  color: #e06c75;\n}\n.cm-s-one-light .cm-keyword {\n  color: #0184bc;\n}\n.cm-s-one-light .cm-def {\n  color: #444;\n}\n.cm-s-one-light .cm-atom {\n  color: #0184bc;\n}\n.cm-s-one-light .cm-number {\n  color: #f08d49;\n}\n.cm-s-one-light .cm-property {\n  color: #e45649;\n} /* original: #383a42 */\n.cm-s-one-light .cm-qualifier {\n  color: #e45649;\n}\n.cm-s-one-light .cm-variable,\n.cm-s-one-light .cm-variable-2 {\n  color: #444;\n}\n.cm-s-one-light .cm-string {\n  color: #50a14f;\n}\n.cm-s-one-light .cm-punctuation {\n  color: #383a42;\n}\n.cm-s-one-light .cm-operator {\n  color: #56b6c2;\n} /* original: #383a42 */\n.cm-s-one-light .cm-meta {\n  color: #808080;\n}\n.cm-s-one-light .cm-bracket {\n  color: #383a42;\n}\n.cm-s-one-light .cm-comment {\n  color: #9d9d9f;\n  font-style: italic;\n}\n.cm-s-one-light .cm-error {\n  color: #e06c75;\n}\n/* css syntax corrections */\n.cm-s-one-light .cm-m-css.cm-variable {\n  color: #828997;\n}\n.cm-s-one-light .cm-m-css.cm-property {\n  color: #383a42;\n}\n.cm-s-one-light .cm-m-css.cm-atom {\n  color: #0184bc;\n}\n.cm-s-one-light .cm-m-css.cm-builtin {\n  color: #56b6c2;\n}\n/* lua syntax corrections */\n.cm-s-one-light .cm-m-lua.cm-variable {\n  color: #56b6c2;\n}\n\n        .cm-s-one-light .CodeMirror-matchingbracket, .cm-s-one-light .CodeMirror-matchingtag {\n          border-bottom: none;\n        }\n        .cm-s-one-light .cm-type {\n          color: #0184bc;\n        }\n\n        </style>\n        "}},lineNumbers:!1,plugins:[{}]},entries:{"docs/about.mdx":{name:"\u5173\u4e8e",order:1e3,route:"/",id:"aa7ed34a467d9292f9ed8be271dbd100",filepath:"docs/about.mdx",link:null,slug:"docs-about",menu:null,headings:[{depth:1,slug:"dahlia",value:"Dahlia"},{depth:2,slug:"what",value:"What?"},{depth:2,slug:"why",value:"Why?"},{depth:2,slug:"how",value:"How?"}]},"docs/api.mdx":{name:"API",order:950,id:"bcf0e65fb939ea72a01eeb23a6f80a25",filepath:"docs/api.mdx",link:null,slug:"docs-api",route:"/docs-api",menu:null,headings:[{depth:1,slug:"api",value:"API"},{depth:2,slug:"init",value:"init"},{depth:2,slug:"usequery",value:"useQuery"},{depth:3,slug:"params",value:"Params"},{depth:3,slug:"result",value:"Result"},{depth:2,slug:"usemutate",value:"useMutate"},{depth:3,slug:"params-1",value:"Params"},{depth:3,slug:"result-1",value:"Result"},{depth:4,slug:"mutate-function",value:"Mutate function:"},{depth:4,slug:"mutate-result",value:"Mutate result:"},{depth:2,slug:"usefetch",value:"useFetch"},{depth:3,slug:"params-2",value:"Params"},{depth:3,slug:"result-2",value:"Result"},{depth:2,slug:"useupdate",value:"useUpdate"},{depth:3,slug:"params-3",value:"Params"},{depth:3,slug:"result-3",value:"Result"},{depth:4,slug:"update-function",value:"Update function"},{depth:4,slug:"update-result",value:"Update result"},{depth:2,slug:"createstore",value:"createStore"},{depth:2,slug:"storeusestore",value:"store.useStore"},{depth:2,slug:"storedispatch",value:"store.dispatch"},{depth:2,slug:"storequery",value:"store.query"},{depth:2,slug:"storefetch",value:"store.fetch"}]},"docs/advanced.mdx":{name:"\u8fdb\u9636",order:960,id:"4963b99a2b518024b51f4ecc13e9ad14",filepath:"docs/advanced.mdx",link:null,slug:"docs-advanced",route:"/docs-advanced",menu:null,headings:[{depth:1,slug:"\u8fdb\u9636",value:"\u8fdb\u9636"},{depth:2,slug:"\u83b7\u53d6\u6570\u636e\bgraphql",value:"\u83b7\u53d6\u6570\u636e(\bGraphql)"},{depth:2,slug:"\u83b7\u53d6\u6570\u636e\brest",value:"\u83b7\u53d6\u6570\u636e(\bRest)"},{depth:2,slug:"\u72b6\u6001\u7ba1\u7406",value:"\u72b6\u6001\u7ba1\u7406"},{depth:2,slug:"query-\u548c-\b\u72b6\u6001\u7ba1\u7406",value:"query \u548c \b\u72b6\u6001\u7ba1\u7406"},{depth:2,slug:"fetch-\u548c-\b\u72b6\u6001\u7ba1\u7406",value:"fetch \u548c \b\u72b6\u6001\u7ba1\u7406"},{depth:2,slug:"\bdispatch",value:"\bdispatch"},{depth:2,slug:"\b\u526f\u4f5c\u7528effects",value:"\b\u526f\u4f5c\u7528(Effects)"},{depth:2,slug:"\b\u9009\u62e9\u5668",value:"\b\u9009\u62e9\u5668"},{depth:2,slug:"\u7f13\u5b58",value:"\u7f13\u5b58"}]},"docs/examples.mdx":{name:"\u4f8b\u5b50",order:970,id:"a0261923c9f3e006856d399286472d9c",filepath:"docs/examples.mdx",link:null,slug:"docs-examples",route:"/docs-examples",menu:null,headings:[{depth:2,slug:"doing",value:"Doing"}]},"docs/faq.mdx":{name:"FAQ",order:900,id:"141f605d6e4faa6ff97a347752eeac4c",filepath:"docs/faq.mdx",link:null,slug:"docs-faq",route:"/docs-faq",menu:null,headings:[{depth:1,slug:"faq",value:"FAQ"}]},"docs/getting-started.mdx":{name:"\u5feb\u901f\u5f00\u59cb",order:990,id:"3d4ea0faef948dad97c46b8ab2e0b582",filepath:"docs/getting-started.mdx",link:null,slug:"docs-getting-started",route:"/docs-getting-started",menu:null,headings:[{depth:1,slug:"\u5feb\u901f\u5f00\u59cb",value:"\u5feb\u901f\u5f00\u59cb"},{depth:2,slug:"\u5b89\u88c5",value:"\u5b89\u88c5"},{depth:2,slug:"\u521d\u59cb\u5316",value:"\u521d\u59cb\u5316"},{depth:2,slug:"\u83b7\u53d6\u6570\u636e",value:"\u83b7\u53d6\u6570\u636e"},{depth:2,slug:"\u4e0b\u4e00\u6b65",value:"\u4e0b\u4e00\u6b65"}]},"docs/tutorial.mdx":{name:"\u6559\u7a0b",order:980,id:"26295d1a0f76d51872b5420ba62768a0",filepath:"docs/tutorial.mdx",link:null,slug:"docs-tutorial",route:"/docs-tutorial",menu:null,headings:[{depth:1,slug:"api",value:"API"},{depth:2,slug:"consume",value:"consume()"},{depth:2,slug:"mutate",value:"mutate()"},{depth:2,slug:"getstate",value:"getState()"}]}}}},"./.docz/app/index.jsx":function(n,e,o){"use strict";o.r(e);var t=o("./node_modules/react/index.js"),r=o.n(t),a=o("./node_modules/react-dom/index.js"),l=o.n(a),i=o("./.docz/app/root.jsx"),c=[],d=[],s=function(){return d.forEach(function(n){return n&&n()})},u=document.querySelector("#root");!function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.a;c.forEach(function(n){return n&&n()}),l.a.render(r.a.createElement(n,null),u,s)}(i.a)},"./.docz/app/root.jsx":function(n,e,o){"use strict";(function(n){var t=o("./node_modules/react/index.js"),r=o.n(t),a=o("./node_modules/react-hot-loader/index.js"),l=o("./node_modules/docz-theme-default/dist/index.m.js"),i=function(){return r.a.createElement(l.a,{hashRouter:!0})};Object(a.setConfig)({pureSFC:!0}),e.a=Object(a.hot)(n)(i),i.__docgenInfo={description:"",methods:[],displayName:"Root"}}).call(this,o("./node_modules/webpack/buildin/harmony-module.js")(n))},0:function(n,e,o){o("./node_modules/@babel/polyfill/lib/index.js"),n.exports=o("./.docz/app/index.jsx")},1:function(n,e){},2:function(n,e){},3:function(n,e){},4:function(n,e){}},[[0,8,9]]]);
//# sourceMappingURL=app.38374bb6b177a72c0ca8.js.map