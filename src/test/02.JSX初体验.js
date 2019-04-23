import React from 'react';
import ReactDOM from 'react-dom';

let title = '998';
let str = '字符串';
let boo = false;
let num = 110;
const h1 = <h1>{str}</h1>;
const arr = [
  <h2 className="h2" key="0">
    这是h2
  </h2>,
  <h3 key="1">这是h3</h3>
];
const arrStr = ['王力宏', '谢霆锋', '哔哩哔哩'];
const tempArr = [];
arrStr.forEach((item, index) => {
  const temp = <h5 key={index}>{item}</h5>;
  tempArr.push(temp);
});

const dom1 = (
  <div>
    {num + 2}
    <hr />
    {boo ? '条件为真' : '条件为假'}
    <hr />
    <p title={title}>这是p标签</p>
    {h1}
    <hr />
    {arr}
    <hr />
    {tempArr}
    <hr />
    {arrStr.map((item, index) => (
      <h5 key={index}>{item}</h5>
    ))}
  </div>
);

ReactDOM.render(dom1, document.getElementById('root'));
