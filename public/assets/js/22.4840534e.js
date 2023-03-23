(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{581:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"性能优化3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化3"}},[t._v("#")]),t._v(" 性能优化3")]),t._v(" "),a("p",[t._v("第二节讲到了性能指标的出处，以及标准的粗略解读，本章就要开始进入正题。讲解各项指标。")]),t._v(" "),a("image",{attrs:{src:"https://wh-blog.obs.cn-south-1.myhuaweicloud.com/blog/WX20210313-160813%402x.png"}}),t._v(" "),a("p",[t._v("通过第一章，我们知道一个网页要开始展现出来，需要先从服务端取得文档(html文件)，第二章我们知道了，文档属于一种资源，而资源加载的过程可以通过"),a("strong",[t._v("Resource Timing")]),t._v("看到，宏观上分为三大类：")]),t._v(" "),a("blockquote",[a("p",[t._v("1.文档加载相关\n2.内容呈现相关\n3.交互响应相关")])]),t._v(" "),a("h2",{attrs:{id:"一-文档加载相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-文档加载相关"}},[t._v("#")]),t._v(" 一 文档加载相关")]),t._v(" "),a("img",{attrs:{src:"https://www.w3.org/TR/navigation-timing-2/timestamp-diagram.svg"}}),t._v(" "),a("p",[t._v("文档加载过程时间线如图，这里主要介绍三个指标：TTFB、DCL 和 Load 时间。")]),t._v(" "),a("h3",{attrs:{id:"_1-1-ttfb-time-to-first-byte"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-ttfb-time-to-first-byte"}},[t._v("#")]),t._v(" 1.1 TTFB(Time to First Byte)")]),t._v(" "),a("p",[t._v("定义：浏览器从请求页面开始到接收第一字节的时间，这个时间段内包括 DNS 查找、TCP 连接和 SSL 连接。")]),t._v(" "),a("h3",{attrs:{id:"_1-2-domcontentloaded-dcl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-domcontentloaded-dcl"}},[t._v("#")]),t._v(" 1.2 DomContentLoaded（DCL）")]),t._v(" "),a("p",[t._v("定义：DomContentLoaded 事件触发的时间。当 "),a("strong",[t._v("HTML 文档被完全加载和解析完成之后，DOMContentLoaded")]),t._v("事件被触发，而无需等待样式表、图像和子框架加载完成。")]),t._v(" "),a("h3",{attrs:{id:"_1-3-load-l"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-load-l"}},[t._v("#")]),t._v(" 1.3 Load(L)")]),t._v(" "),a("p",[t._v("定义：onLoad 事件触发的时间。页面所有资源都加载完毕后（比如图片，CSS），onLoad 事件才被触发。")]),t._v(" "),a("h2",{attrs:{id:"二-内容呈现相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-内容呈现相关"}},[t._v("#")]),t._v(" 二 内容呈现相关")]),t._v(" "),a("h3",{attrs:{id:"_2-1-first-paint-fp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-first-paint-fp"}},[t._v("#")]),t._v(" 2.1 First Paint(FP)")]),t._v(" "),a("p",[t._v("定义：第一个像素绘制的时间，不包括默认的背景，感觉没什么用")]),t._v(" "),a("p",[t._v("测量方式不用说了吧，performanceAPI提供。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-first-contentful-paint-fcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-first-contentful-paint-fcp"}},[t._v("#")]),t._v(" 2.2 First Contentful Paint(FCP)")]),t._v(" "),a("p",[t._v("定义：首次内容绘制，绘制内容是指来自的DOM内容，可以是图像，文字，svg，canvas等等，")]),t._v(" "),a("p",[t._v("测量方式：PerformanceApi")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entryList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" entryList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntriesByName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first-contentful-paint'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FCP candidate:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paint'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("buffered")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"_2-2-1-how-to-improve-fcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-how-to-improve-fcp"}},[t._v("#")]),t._v(" 2.2.1 How to improve FCP")]),t._v(" "),a("p",[t._v("1.减少资源的阻塞，例如不要把业务js放在顶部加载\n2.压缩css和移除无用的css，可以使用purifyCss\n3.pre-fetch dns链接\n4.减小TTFB\n5.避免多次重定向\n6.preload必要的资源\n7.避免巨大的网络负载\n8.做好静态资源的缓存策略\n9.避免过大的DOM，减少生成dom tree的时间\n10.确保文本在Web字体加载期间保持可见\n11.保持较低的请求计数和较小的传输大小")]),t._v(" "),a("h3",{attrs:{id:"_2-3-first-meaningful-paint-fmp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-first-meaningful-paint-fmp"}},[t._v("#")]),t._v(" 2.3 First Meaningful Paint (FMP)")]),t._v(" "),a("p",[t._v("定义：首次有意义的内容绘制时间，这里的有意义主要看网站，比如小说网站有意义的内容就是文字，漫画网站有意义的就是图片，如果是视频网站有效绘制就是视频，有用，但是现在很多性能测试工具已经不用这个指标了,换成了另外的指标了 "),a("b",[t._v("Largest Contentful Paint")]),t._v("，所以这里不再仔细介绍。")]),t._v(" "),a("h3",{attrs:{id:"_2-4-largest-contentful-paint-lcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-largest-contentful-paint-lcp"}},[t._v("#")]),t._v(" 2.4 Largest Contentful Paint（LCP）")]),t._v(" "),a("p",[t._v("定义：可视区域中最大的内容元素呈现到屏幕上的时间，用以估算页面的主要内容对用户可见时间。这是一个新的指标，很多浏览器都没有实现。")]),t._v(" "),a("p",[t._v("如何测量：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entryList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" entryList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LCP candidate:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'largest-contentful-paint'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("buffered")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"_2-4-1-how-to-improve-lcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-how-to-improve-lcp"}},[t._v("#")]),t._v(" 2.4.1 How to improve LCP")]),t._v(" "),a("p",[t._v("1.采用PRRL模式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Push (or preload) 重要的资源.\nRender：尽快的渲染初始路由页.\nPre-cache ：预缓存资源，使用service worker等等.\nLazy load：懒加载剩下的资源和路由.\n")])])]),a("p",[t._v("2.优化字体，图片，css，js\n3.优化关键渲染路径")]),t._v(" "),a("h3",{attrs:{id:"_2-5-speed-index-si"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-speed-index-si"}},[t._v("#")]),t._v(" 2.5 Speed Index(SI)")]),t._v(" "),a("p",[t._v("定义：这是一个表示页面可视区域中内容的填充速度的指标，可以通过计算页面可见区域内容显示的平均时间来衡量。")]),t._v(" "),a("p",[t._v("例如同样的一个页面：A在3秒的时候填充了百分之80的区域，B在3秒的时候也填充了百分之80的区域，5秒都完成了百分之百，但是A在1秒的时候已经完成了百分之80，B在3秒的时候才完成了百分之80；")]),t._v(" "),a("p",[t._v("通过计算可以得到")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("A:80% * 1 + 20% * 5 = 1.8\nB:80% * 3 + 20% * 5 = 3.4\n")])])]),a("h3",{attrs:{id:"_2-6-first-screen-paint-fsp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-first-screen-paint-fsp"}},[t._v("#")]),t._v(" 2.6 First Screen Paint(FSP)")]),t._v(" "),a("p",[t._v("定义：页面从开始加载到首屏内容全部绘制完成的时间，用户可以看到首屏的全部内容。")]),t._v(" "),a("h2",{attrs:{id:"三-交互响应相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-交互响应相关"}},[t._v("#")]),t._v(" 三 交互响应相关")]),t._v(" "),a("h3",{attrs:{id:"_3-1-time-to-interactive-tti"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-time-to-interactive-tti"}},[t._v("#")]),t._v(" 3.1 Time to Interactive(TTI)")]),t._v(" "),a("p",[t._v("定义：\b\b从FCP开始，浏览器已经可以持续性的响应用户的输入。完全达到可交互状态的时间点是在最后一个长任务（Long Task）完成的时间, 并且在随后的 5 秒内网络和主线程不存在longtask或者不超过一个网络请求。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1.从FCP开始\n2.longtask后五秒内不再有longtask产生并且不超过一个网络请求\n3.在五秒处先前搜索到最后一个longtask结束的时间点\n4.从FCP到这个longtask结束的时间点就是TTI\n")])])]),a("h4",{attrs:{id:"_3-2-1-how-to-improve-tti"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-how-to-improve-tti"}},[t._v("#")]),t._v(" 3.2.1 How to improve TTI")]),t._v(" "),a("p",[t._v("1.压缩代码\n2.预链接必要的源\n3.预加载css等资源\n4.按需加载第三方的包\n5.减少关键资源的请求深度，例如请求一层嵌套一层\n6.减少js执行时长，优化代码\n7.减少主线程中的工作，例如只加载必要的代码，使用节流处理频繁的input，减少css的资源查找等等\n8.减少请求，压缩请求的内容使用gzip等等")]),t._v(" "),a("h3",{attrs:{id:"_3-2-total-blocking-time-tbt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-total-blocking-time-tbt"}},[t._v("#")]),t._v(" 3.2 Total Blocking Time(TBT)")]),t._v(" "),a("p",[t._v("定义：在TTI中，所有的longtask减去50ms的累计值，优秀的TBT应该控制在300ms以下。\n当一个task超过50ms的时候就会导致UI卡顿等一些问题。")]),t._v(" "),a("h4",{attrs:{id:"_3-2-1-how-to-improve-tbt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-how-to-improve-tbt"}},[t._v("#")]),t._v(" 3.2.1 How to improve TBT")]),t._v(" "),a("p",[t._v("1.减少第三方包的依赖，")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("按需加载，能简单实现的 尽量不要安装一个包\n")])])]),a("p",[t._v("2.优化代码，减少单个js任务的执行时间")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("禁止多层嵌套，可以改变数据结构，或者用空间换时间\n")])])]),a("p",[t._v("3.最大成都的减少住主线程的工作")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1.优化第三方js\n2.debounce Input 操作\n3.使用web worker\n4.减少样式计算的复杂性\n5.避免重回和重排的工作\n6.提取关键css，延迟非关键的css加载\n7.注意样式的书写，尽可能的不要写太多的Layout\n8.更好的tree-shaking和code_split\n")])])]),a("p",[t._v("4.控制请求的个数，并且降低传输的内容")]),t._v(" "),a("h3",{attrs:{id:"_3-3-first-input-delay-fid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-first-input-delay-fid"}},[t._v("#")]),t._v(" 3.3 First Input Delay (FID)")]),t._v(" "),a("p",[t._v("定义：当用户第一次与页面交互时到能够响应用户行为的时间，例如点击链接，输入表单，点击一个按钮。通常应该控制在100ms")]),t._v(" "),a("p",[t._v("测试方法:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entryList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" entryList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" delay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("processingStart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FID candidate:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first-input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("buffered")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h4",{attrs:{id:"_3-3-1-how-to-improve-fid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-how-to-improve-fid"}},[t._v("#")]),t._v(" 3.3.1 How to improve FID")]),t._v(" "),a("p",[t._v("1.减少第三方包的依赖\n2.减少js执行时间\n3.降低主线程序的工作\n4.保持低请求数和资源传输大小")]),t._v(" "),a("h3",{attrs:{id:"_3-4-cumulative-layout-shift-cls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-cumulative-layout-shift-cls"}},[t._v("#")]),t._v(" 3.4 Cumulative Layout Shift (CLS)")]),t._v(" "),a("p",[t._v("定义：在一个页面的生命周期中，所有元素发生突然位移的分数总和。")]),t._v(" "),a("p",[t._v("看起来很难理解，举个例子🌰：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1.当我们要去点击一个元素的时候，突然这个元素向下偏移了。导致我点击到了别的东西。\n\n2.突然间页面出现了一个元素把其他的元素挤跑了\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("分数如何计算的")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("例如一个元素在第一帧的时候，占据了viewport的上面百分之50，在下一帧就跑到了页面的最底部，那么这个元素并集所占viewport的百分比就是1，那么得分就是1分；\n")])])]),a("img",{attrs:{src:"https://wh-blog.obs.cn-south-1.myhuaweicloud.com/blog/WX20210313-155718%402x.png"}}),t._v(" "),a("p",[t._v("js中如何测量:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entryList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" entryList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hadRecentInput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      cls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Current CLS value:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'layout-shift'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("buffered")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h4",{attrs:{id:"_3-4-1-how-to-improve-cls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-how-to-improve-cls"}},[t._v("#")]),t._v(" 3.4.1 How to improve CLS")]),t._v(" "),a("p",[t._v("1.设置图片视频的大小，保证加载前和加载后占地面积一致\n2.禁止在已存在内容在中插入内容\n3.使用transform动画替代改变布局导致的动画")]),t._v(" "),a("h2",{attrs:{id:"测试工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试工具"}},[t._v("#")]),t._v(" 测试工具")]),t._v(" "),a("p",[t._v("目前主要的测试用具有")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Chrome DevTools")])]),t._v(" "),a("li",[a("p",[t._v("Lighthouse")])]),t._v(" "),a("li",[a("p",[t._v("WebPageTest")])]),t._v(" "),a("li",[a("p",[t._v("web-vitals 这是一个js库，我打算用它来做一个性能检测的平台，性能监控的功能，不知道方案是否可行\n还有一些其他的就不一一列举了。")])])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("通过以上性能指标的介绍，大概总结出提高性能指标的手段主要有以下一些内容：")]),t._v(" "),a("ul",[a("li",[t._v("减少第三方包的依赖")]),t._v(" "),a("li",[t._v("按需加载包，路由")]),t._v(" "),a("li",[t._v("资源嗅探prefetch, preload, dns-prefetch")]),t._v(" "),a("li",[t._v("压缩资源")]),t._v(" "),a("li",[t._v("使用存储工具缓存资源，静态资源做好缓存策略")]),t._v(" "),a("li",[t._v("减少传输体的大小")]),t._v(" "),a("li",[t._v("减少重回和重排")]),t._v(" "),a("li",[t._v("减少重定向")]),t._v(" "),a("li",[t._v("降低dom嵌套和css嵌套")]),t._v(" "),a("li",[t._v("加载必要的css js资源。非必要的采用懒加载")]),t._v(" "),a("li",[t._v("使用debounce和throttle")]),t._v(" "),a("li",[t._v("降低主线程的占用时间")]),t._v(" "),a("li",[t._v("保持低的请求数量\n等等")])])])}),[],!1,null,null,null);s.default=e.exports}}]);