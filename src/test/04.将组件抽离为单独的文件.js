import React from 'react';
import ReactDOM from 'react-dom';

import Msg from '@/components/Msg';

const person = {
  name: '王力宏',
  age: '30',
  sex: '1'
};

ReactDOM.render(
  // 组件名称首字母大写
  // <Fun name={person.name} age={person.age} sex={person.sex} />,
  <Msg {...person} />,
  document.getElementById('root')
);
