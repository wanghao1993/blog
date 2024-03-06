---
title: 面试总结一
date: 2022-01-12
categories:
 -  面试
---

# 面试总结

最近在面试，也面了那么几家公司，有大厂，小厂等公司，我在这里总结一下。

大概可以分为以下几部分：

- CSS
- JS
- 网络
- 算法
- 安全
- 性能优化
- 工程化
## 1. CSS相关

### 1.怎么样能够使得元素看不见？
>1.display: none
    2.visibility: hidden
    3.opacity: 0
    4.z-index: -1

    注意其中的区别，那些会导致页面结构改变。


### 2.水平垂直居中的方式

>不做解释

### 3.使用一个div实现一个肉眼看起来的是一个[立方体](/demo/divtosqu.html)（显示404可以刷新一下）

>这里主要考察的是 *transform*
```html
<div id='box'></div>
```
```css
#box {
    position: relative;
    left: 400px;
    width: 100px;
    height: 50px;
    background: red;
    transform: skew(-45deg, 0deg);
}

#box::after {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    background: green;
    position: relative;
    left: 50px;
    transform: skewX(45deg);
}

#box::before {
    content: '';
    display: block;
    width: 100px;
    height: 50px;
    background: yellow;
    position: relative;
    transform: skewY(45deg);
    top: 50px;
    left: 100px;
}
```

### 4.实现逐帧动画
>首先什么是逐帧动画？可能不经常做动画的同学都不是很了解这个概念。
**是一种动画技术，其原理即将每帧不同的图像连续播放，从而产生动画效果。**
例如连续翻动漫画，速度足够快，就像形成动画一样。

>使人感觉比较流畅的动画，大概是一秒钟60帧，那么就意味，每16.67ms至少就切换一次图像，这样才能达到流畅的视觉效果，否则会觉得卡顿。

[这是我实现的](/demo/animations.html)，显示404可以刷新一下

> 这里要复习的点就是 animation的一些参数，这里的关键点在于 *steps*函数

### 5.png,jpg,webp,gif有什么区别？
参考一下这个文章: [常见图片格式：bmp、jpg、jpeg、gif、png 的区别；十六进制查看图片文件等图片知识积累](https://juejin.cn/post/7011915506298912798#heading-18)
**留个疑问：矢量图为什么不会模糊**

### 6.Flex和grid布局相关，这部分大概复习一下即可

可参考[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)


### 总结

中小公司问css问的不多，大厂会问的比较多，且可能是我们平时不注意的，不可忽视啊，哎，难顶啊，哈哈～

## 2. JS相关

### 1.原型和原型链，继承

>涉及的点：1.概念 2.各个继承的优缺点等等，我之前写过一点点
[对象的一些基础知识](https://juejin.cn/post/6844904197859573768#heading-16)

### 2.闭包

>1.概念 2.应用
概念：一个函数，能够访问外层函数的变量，例如：
```js
function init() {
    var name = "Mozilla"; // name 是一个被 init 创建的局部变量
    function displayName() { // displayName() 是内部函数，一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    displayName();
}
init();
```
可以参考这一篇文章：[JS 闭包经典使用场景和含闭包必刷题](https://juejin.cn/post/6937469222251560990#heading-0)


### 3.事件循环

我之前看vue源码时候说到的[事件循环](https://juejin.cn/post/7002590321720688654#heading-3)


### 4.js代码是如何执行的

有兴趣的可以翻一下ECMA 262，主要分为创建阶段和执行阶段，各干了什么事情。


### 5.作用域链是如何形成的
[深入理解JavaScript作用域和作用域链](https://juejin.cn/post/6844903797135769614#heading-0)

### 6.普通函数和箭头函数的区别

    1.箭头函数没有this

    2.箭头函数没有prototype

    3.无法修改箭头函数中的this指向

    4.没有arguments

    5.=>无法new，且不支持重命名函数参数

### 7.深拷贝

    懂得都懂，主要要注意特殊类型的处理，例如Date, Function, RegExp，循环引用等等

```js
const isObject = o => Object.prototype.toString.call(o) === '[object Object]'

const isArray = o => Object.prototype.toString.call(o) === '[object Array]'

const isDate = o => Object.prototype.toString.call(o) === '[object Date]'

const isNull = o => o === null
function deepClone (Obj) {
    if (typeof Obj !== 'object') return Obj
    let cloneObj = isArray(Obj[key]) ? [] : {}
    for (const key in Obj) {
        if (isObject(Obj[key]) || isArray(Obj[key])) {
            cloneObj[key] = deepClone(Obj[key])
        } else if (isDate(Obj[key])) {
            cloneObj[key] = new Date(Obj[key])
        } else {
            cloneObj[key] = Obj[key]
        }
    }

    return cloneObj
}
```

### 8.手写Promise

可以看这道题[从一道让我失眠的 Promise 面试题开始，深入分析 Promise 实现细节](https://juejin.cn/post/6945319439772434469)

### 9.手写Promise.allSettled和All

```js
Promise.allSettled = Promise.allSettled || function(promises) {
    return new Promise(function(resolve, reject) {
        if (!Array.isArray(promises)) {
            return reject(
                new TypeError("arguments must be an array")
            );
        }
        var resolvedCounter = 0;
        var promiseNum = promises.length;
        var resolvedValues = new Array(promiseNum);
        for (var i = 0; i < promiseNum; i++) {
            (function(i) {
                Promise.resolve(promises[i]).then(
                    function(value) {
                        resolvedCounter++;
                        resolvedValues[i] = value;
                        if (resolvedCounter == promiseNum) {
                            return resolve(resolvedValues);
                        }
                    },
                    function(reason) {
                        resolvedCounter++;
                        resolvedValues[i] = reason;
                        if (resolvedCounter == promiseNum) {
                            return reject(reason);
                        }
                    }
                );
            })(i);
        }
    });
};

// 第二中用All实现
Promise.allSettled = function (promises) {
    return Promise.all(promises.map(p => Promise.resolve(p).then(res => {
      return { status: 'fulfilled', value: res }
    }, error => {
      return { status: 'rejected', reason: error }
    })));
}


function all(promises) {
    let len = promises.length, res = []
    let count = len
    if (len) {
        return new Promise(function (resolve, reject) {
            
            for(let i=0; i<len; i++) {
                let promise = promises[i];
                promise.then(response => {
                    res[i] = response
 
                    if (!--count) {
                        resolve(res)
                    }
                    
                }, error => {
                    reject(error)
                })
    
            }
        })
    }
}

```

### 10.以下代码输出什么？

```js
new Promise(() => { 
 setTimeout(() => { 
 console.log(0) 
 }) 
 console.log(1) 
 throw new Error('') 
 console.log(2) 
}).then(() => { 
 console.log(3) 
}, () => { 
 console.log(4) 
}).catch(() => { 
 console.log(5) 
}).then(() => { 
 console.log(6) 
})
```

> 这里涉及到事件循环和Promise的原理。
> 1. 首先console.log(1)先执行
> 2. 然后抛出了一个错误，在下一个then中被reject掉了，所以会执行console.log(4)，而catch不会再执行了
> 3. console.log(6)
> 4. console.log(1)

## 3. 网络相关

### 1 http1/2/3的区别

http

### 2 拥塞机制

### 3 缓存


## 4.工程化相关

### 1 webpack 打包原理

### 2. webpack 优化

### 3. vite打包原理

### 4. vite和webpack打包的区别

## 5. Vue相关

## 6. React相关

## 7. Nodejs相关

## 8. TS相关