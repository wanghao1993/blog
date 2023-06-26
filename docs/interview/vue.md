---
title: Vue相关的面试
date: 2023-05-25
categories:
 -  面试
---

# Vue

## Vue的原理

主要是利用Object.defineProperty来实现的，通过遍历options中的data，通过Object.defineProperty，对对象的属性进行劫持，在get，和set中做一系列的操作，get的时候去收集依赖，set的去对依赖做notify，更新视图。

## 虚拟DOM是什么

## 更新试图的过程是怎么样的？