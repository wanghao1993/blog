---
title: 关于事件你需要知道一些事情
date: 2021-03-08
tags:
- JS
categories:
- 面试
---
3.8妇女节，祝愿天下的妇女节日快乐。
# 事件
Js与HTML之间的交互通过事件完成，事件，就是文档或浏览器窗口中发生的一些 特定的交互瞬间。事件类型有很多分类，例如：DOM事件类型，焦点事件，滚轮事件等等，说到这里就不得不说一下js的事件流

# 事件流

## 事件冒泡
事件冒泡，事件开始从具体的节点出发，逐步向上冒泡到外层节点。例如：点击id为a的div时，事件会一步步向上传递 a=> b => c，当我们点击click的时候，会依次输出123

```html
<div id='c' onclick='console.log(3)'>
    <div id='b' onclick='console.log(2)'>
        <div id='a' onclick='console.log(1)'>
            click
        </div>
    </div>
</div>
```

## 事件捕获
虽然事件捕获是 Netscape 唯一支持的事件流模型，但 IE9、Safari、Chrome、Opera 和 Firefox 目前也都支持这种事件流模型。尽管“DOM2 级事件”规范要求事件应该从 document 对象开始传播，但这些浏览器都是从 window 对象开始捕获事件的。 由于老版本的浏览器不支持，因此很少有人使用事件捕获。

## DOM事件流
DOM事件流分三个阶段，捕获阶段，目标阶段和冒泡阶段，DOM事件流又分为DOM0级和DOM2级。 DOM事件流

## DOM0级事件处理程序
比如我们常见的click，load等等，DOM0级别事件被认定是元素的方法，所以其中this为元素本身，其作用域也是当前目标元素。

```html
<div id='a' onclick='console.log(this.id)'>
    click
</div>

```

打印出来的this 就是元素本身。清除DOM0级事件可以直接赋值为null就会清除掉。

```js
target.onclick = null
```

## DOM2级事件处理程序
DOM2级事件提供了两个方法，即大名鼎鼎的 addEventListener 和 removeEventListener. 他们都提供了三个参数 1.事件名称 2.事件方法 3.事件是在捕获阶段执行，还是在冒泡阶段执行，类型为布尔值，true在捕获阶段，false在冒泡阶段，默认为false

### addEventListener

```js
var target = document.getElementById('a')
target.addEventListener('click', function () {
    console.log(this.id)
}, false)
```
DOM2级事件，不会和DOM0级的冲突，所以在click的时候。会先打印this，再打印id，同时可以添加多个click事件,此时会先打印id，在打印 hello world，执行顺序和添加顺序保持一致

```js
var target = document.getElementById('a')
target.addEventListener('click', function () {
    console.log(this.id)
}, false)

target.addEventListener('click', function () {
    console.log('hello world')
}, false)
```

事件优先级：DOM0级事件 > DOM2 一道简单的面试题，点击c依次输出abc和依次输出cba

```html
<div id="a">
    a
    <div id="b">
        b
        <div id="c">
            c
        </div>
    </div>
</div>
````
### removeEventListener
用于移除事件，移除事件的时候，必须的有两个参数，事件名称和处理函数。函数必须为是同一个函数，否则无法移除。

```js
var target = document.getElementById('a')
function sayHello () {
    console.log('hello world')
}
target.addEventListener('click', sayHello, false)

target.removeEventListener('click', function () {
    console.log('hello world')
}, false)
// 无效不能移除

target.removeEventListener('click', sayHello, false)
// 有效
```
IE 实现了与 DOM 中类似的两个方法:attachEvent()和 detachEvent()。这两个方法接受相同 的两个参数:事件处理程序名称与事件处理程序函数。由于 IE8 及更早版本只支持事件冒泡，所以通过 attachEvent()添加的事件处理程序都会被添加到冒泡阶段。

鉴于此封装一个小型的事件处理方法，用来兼用跨平台：

```js
var EventUtil = {
  addHandler: function(element, type, handler, isBubble = false) { 
    if (element.addEventListener){
      element.addEventListener(type, handler, isBubble);
    } else if (element.attachEvent){
      element.attachEvent("on" + type, handler); 
    } else {
      element["on" + type] = handler; 
    }
  },
  removeHandler: function(element, type, handler, isBubble = false){
    if (element.removeEventListener){
      element.removeEventListener(type, handler, isBubble);
    } else if (element.detachEvent){
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    } 
  }
};

```
## 事件对象
无论是DOM0 还是 DOM2 在执行事件的时候，都会返回一个Event对象给我们。其中包含很多的属性，重点说下下面几个。

1.preventDefault，取消默认行为，例如a标签的跳转；相关的属性为cacelable，可以通过preventDefault取消默认行为，cacelable为true，否则为false

2.type 为出发该行为的事件是什么类型，例如click等

3.eventPhase 当前触发事件的阶段，是冒泡，捕获，还是目标阶段

4.stopPropagation 可以停止冒泡和捕获的继续传递

5.srcElement 和 target一样，事件的目标对象

## 自定义事件
除了平时使用的原生事件，有时候需要自定义事件。创建自定义事件的方法有两种，Event() 构造函数 和 CustomEvent() 构造函数，还有个createEvent()已经废弃，但是仍然有浏览器支持，所以我们暂且不说，有兴趣的可以自己看看。

## Event()
支持两个参数： 1.typeArg 事件名称 2.eventInitOption 事件初始化配置，配置内容包含三个字段

参数	类型	说明
bubbles	布尔	表示该事件是否冒泡
cancelable	布尔	表示该事件能否被取消
composed	布尔	指示事件是否会在影子DOM根节点之外触发侦听器。
ex:

```js
// 创建事件
const ev = new Event('testEvent')
// 监听事件
document.addEventListener('testEvent', function () {
    console.log('testEvent执行了')
})
// 触发事件
document.dispatchEvent(ev)

```
## CustomEvent()
支持两个参数： 1.typeArg 事件名称 2.eventInitOption 事件初始化配置，配置内容包含事件部分字段，详情可以查看CustomEvent，额外还有一个detail字段可用于传递额外的参数

```js
// 创建事件
const ev = new CustomEvent('testEvent', {
  detail: {
    extraParams: 1
  }
})
// 监听事件
document.addEventListener('testEvent', function (e) {
    console.log('testEvent执行了', e.detail)
})
// 触发事件
document.dispatchEvent(ev)
```
## 事件代理

事件代理：就是将子元素的事件通过冒泡的形式交由父元素来执行。 常规应用：

```html
 <div id="idd">
    <div>
      <section>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </section>
    </div>
  </div>
  ```
  ```js
function findParent (child, parent) {
  if (child.parentNode === parent) {
    return true
  } else {
    if (child.parentNode.nodeName.toLowerCase !== 'html') {
      findParent(child.parentNode, parent)
    } else {
      return false
    }
  }
}

window.onload = function () {
  const parent = document.getElementById('idd')
  parent.onclick = function (e) {
    let flag = findParent(e.target, parent)
    if (e.target.nodeName.toLowerCase() === 'div' && flag) {
      console.log('div')
    }
  }
}
```
以上的栗子，能够让我们减少对DOM的操作，提升性能，发现这段代码的事前消耗更低，因为只取得了一个 DOM 元素，只添加了一个事件处理程序。虽然对用户来说最终的结果相同，但这种技术需要占用的内存更少。所有用到按钮的事件（多数鼠标事件和键盘事件）都适合采用事件委托技术。

最后，事件种类太多，使用的难易程度也不尽相同；在使用事件时，需要考虑如下一些内存与性能方面的问题。

1.有必要限制一个页面中事件处理程序的数量，数量太多会导致占用大量内存，而且也会让用户感觉页面反应不够灵敏。

2. 建立在事件冒泡机制之上的事件委托技术，可以有效地减少事件处理程序的数量。
   
3. 建议在浏览器卸载页面之前移除页面中的所有事件处理程序。
   

有错误的地方或者不足的地方欢迎指正。