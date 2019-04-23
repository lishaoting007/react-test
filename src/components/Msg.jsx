import React from 'react';
// 第一种创建组件的方式： 一个构造函数就是一个最基本的组件
export default function Msg(props) {
  // props 中的数据永远都是只读的
  console.log(props);
  // return null // 如果在组件中返回一个null，表示组件是空的，什么都不会渲染
  // 在组件中，必须返回一个合法的 JSX 虚拟DOM元素
  return (
    <div className="wrap">
      这是{props.name}的个人信息:年龄：{props.age}---性别：
      {props.sex == 0 ? '女' : '男'}
    </div>
  );
}
