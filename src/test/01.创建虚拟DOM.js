import React from 'react';
import ReactDOM from 'react-dom';

// 创建虚拟DOM元素
// 参数1： 创建的元素的类型，字符串，表示元素的名称
// 参数2： 是一个对象或 null，表示当前这个DOM元素的属性
// 参数3： 子节点（包括其他虚拟DOM 获取 文本子节点）
// 参数n： 其他子节点
const h1 = React.createElement(
  'h1',
  { title: '标题', class: 'container' },
  '这是一个大标题'
);

const div = React.createElement(
  'div',
  { class: 'wrap' },
  '这是一个div元素',
  h1
);

// 使用ReactDOM 把虚拟DOM渲染到页面上
// 参数1： 要渲染的那个虚拟DOM元素
// 参数2： 指定页面上的一个容器
ReactDOM.render(div, document.getElementById('root'));
