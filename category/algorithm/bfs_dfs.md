---
title: 深度优先遍历和广度优先遍历
date: 2023-12-27
tags:
 - 深度优先遍历
 - 广度优先遍历
categories: 
 - 算法
---

# 广度优先遍历

故名思义，就是一层一层的往下遍历。等第一层完成了，再到第二层，再到第三层

# 树的概念

树的概念，二叉树是一个root节点，开始分为left，和right两个子树，然后left，又有left和right，right又有left和right一直延续下去

# 广度优先遍历如何实现
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

  let res = [];
  if(root == null) return res;
  const queen = [root]

  while(queen.length) {
    let tmp = []
    let len = queen.length
    for (let i = 0; i < len; i++) {
      let node = queen.shift()
      tmp.push(node.val)
      node.left && queen.push(node.left)
      node.right && queen.push(node.right)
    }
    res.push(tmp)
  }

  return res
};
```