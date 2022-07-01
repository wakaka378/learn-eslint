import{_ as e,c as r,o as t,a as n}from"./app.1e3c5930.js";const u=JSON.parse('{"title":"\u914D\u7F6E ESLint","description":"","frontmatter":{},"headers":[],"relativePath":"guide/\u4F60\u9700\u8981\u4E86\u89E3\u7684ESlint\u914D\u7F6E\u6587\u4EF6.md","lastUpdated":1656227544000}'),o={name:"guide/\u4F60\u9700\u8981\u4E86\u89E3\u7684ESlint\u914D\u7F6E\u6587\u4EF6.md"},i=n('<h1 id="\u914D\u7F6E-eslint" tabindex="-1">\u914D\u7F6E ESLint <a class="header-anchor" href="#\u914D\u7F6E-eslint" aria-hidden="true">#</a></h1><p>ESLint \u65E8\u5728\u4E3A\u60A8\u7684\u7528\u4F8B\u7075\u6D3B\u548C\u53EF\u914D\u7F6E\u3002\u60A8\u53EF\u4EE5\u5173\u95ED\u6BCF\u4E2A\u89C4\u5219\u5E76\u4EC5\u5728\u57FA\u672C\u8BED\u6CD5\u9A8C\u8BC1\u7684\u60C5\u51B5\u4E0B\u8FD0\u884C\uFF0C\u6216\u8005\u6DF7\u5408\u5E76\u5339\u914D\u6346\u7ED1\u7684\u89C4\u5219\u548C\u60A8\u7684\u81EA\u5B9A\u4E49\u89C4\u5219\u4EE5\u6EE1\u8DB3\u60A8\u7684\u9879\u76EE\u9700\u6C42\u3002\u914D\u7F6E ESLint \u6709\u4E24\u79CD\u4E3B\u8981\u65B9\u6CD5\uFF1A</p><ol><li><strong>\u914D\u7F6E\u6CE8\u91CA</strong>- \u4F7F\u7528 JavaScript \u6CE8\u91CA\u5C06\u914D\u7F6E\u4FE1\u606F\u76F4\u63A5\u5D4C\u5165\u5230\u6587\u4EF6\u4E2D\u3002</li><li><strong>\u914D\u7F6E\u6587\u4EF6</strong>- \u4F7F\u7528 JavaScript\u3001JSON \u6216 YAML \u6587\u4EF6\u6765\u6307\u5B9A\u6574\u4E2A\u76EE\u5F55\u53CA\u5176\u6240\u6709\u5B50\u76EE\u5F55\u7684\u914D\u7F6E\u4FE1\u606F\u3002\u8FD9\u53EF\u4EE5\u662F\u6587\u4EF6\u7684\u5F62\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u662F<a href="https://eslint.org/docs/latest/user-guide/configuring/configuration-files#configuration-file-formats" target="_blank" rel="noopener noreferrer"><code>.eslintrc.*</code></a>\u6587\u4EF6<code>eslintConfig</code>\u4E2D\u7684\u5B57\u6BB5\uFF0CESLint \u90FD\u4F1A\u81EA\u52A8\u67E5\u627E\u548C\u8BFB\u53D6\u8FD9\u4E24\u79CD\u5F62\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u5728<a href="https://eslint.org/docs/latest/user-guide/command-line-interface" target="_blank" rel="noopener noreferrer">\u547D\u4EE4\u884C</a><a href="https://docs.npmjs.com/files/package.json" target="_blank" rel="noopener noreferrer"><code>package.json</code></a>\u4E2D\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u3002</li></ol><p>\u4EE5\u4E0B\u662F\u60A8\u53EF\u4EE5\u5728 ESLint \u4E2D\u914D\u7F6E\u7684\u4E00\u4E9B\u9009\u9879\uFF1A</p><ul><li><a href="https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-environments" target="_blank" rel="noopener noreferrer"><strong>\u73AF\u5883</strong></a>- \u60A8\u7684\u811A\u672C\u8BBE\u8BA1\u7528\u4E8E\u8FD0\u884C\u7684\u73AF\u5883\u3002\u6BCF\u4E2A\u73AF\u5883\u90FD\u5E26\u6709\u4E00\u7EC4\u7279\u5B9A\u7684\u9884\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF\u3002</li><li><a href="https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-globals" target="_blank" rel="noopener noreferrer"><strong>\u5168\u5C40</strong></a>\u53D8\u91CF - \u60A8\u7684\u811A\u672C\u5728\u6267\u884C\u671F\u95F4\u8BBF\u95EE\u7684\u5176\u4ED6\u5168\u5C40\u53D8\u91CF\u3002</li><li><a href="https://eslint.org/docs/latest/user-guide/configuring/rules" target="_blank" rel="noopener noreferrer"><strong>\u89C4\u5219</strong></a>- \u542F\u7528\u54EA\u4E9B\u89C4\u5219\u4EE5\u53CA\u5728\u4EC0\u4E48\u9519\u8BEF\u7EA7\u522B\u3002</li><li><a href="https://eslint.org/docs/latest/user-guide/configuring/plugins" target="_blank" rel="noopener noreferrer"><strong>\u63D2\u4EF6</strong></a>- \u7B2C\u4E09\u65B9\u63D2\u4EF6\u4E3A ESLint \u5B9A\u4E49\u4E86\u989D\u5916\u7684\u89C4\u5219\u3001\u73AF\u5883\u3001\u914D\u7F6E\u7B49\u3002</li></ul><p>\u6240\u6709\u8FD9\u4E9B\u9009\u9879\u90FD\u8BA9\u60A8\u53EF\u4EE5\u7EC6\u7C92\u5EA6\u5730\u63A7\u5236 ESLint \u5982\u4F55\u5904\u7406\u60A8\u7684\u4EE3\u7801\u3002</p>',6),a=[i];function s(l,g,c,_,p,d){return t(),r("div",null,a)}var h=e(o,[["render",s]]);export{u as __pageData,h as default};
