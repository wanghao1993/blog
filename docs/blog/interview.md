# 面试总结

最近在面试，也面了那么几家公司，有大厂，小厂等公司，我在这里总结一下。

大概可以分为以下几部分：

- CSS
- JS基础
- 网络
- 算法
- 安全
- 性能优化


# CSS相关

1.怎么样能够使得元素看不见？
>1.display: none
    2.visibility: hidden
    3.opacity: 0
    4.z-index: -1

    注意其中的区别，那些会导致页面结构改变。


2.水平垂直居中的方式

>不做解释

3.使用一个div实现一个肉眼看起来的是一个[立方体](/demo/divtosqu.html)

>这里主要考察的是<font color='#199'>transform</font>
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

4.实现逐帧动画
>首先什么是逐帧动画？可能不经常做动画的同学都不是很了解这个概念。
**是一种动画技术，其原理即将每帧不同的图像连续播放，从而产生动画效果。**
例如连续翻动漫画，速度足够快，就像形成动画一样。

>使人感觉比较流畅的动画，大概是一秒钟60帧，那么就意味，每16.67ms至少就切换一次图像，这样才能达到流畅的视觉效果，否则会觉得卡顿。

[这是我实现的](/demo/animations.html)