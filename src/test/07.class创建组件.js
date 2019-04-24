import React from 'react';
import ReactDOM from 'react-dom';

// import '@/test/07.class创建组件';
const { Component } = React;
class Movie extends Component {
  constructor() {
    super();
    this.state = {
      msg: '我是class创建的组件'
    };
  }

  render() {
    // this.state.msg = '我被改变了';
    return (
      <div>
        {this.state.msg}
        <h1>本周电影排行第一的是--{this.props.name}--</h1>
      </div>
    );
  }
}
const attr = {
  name: '流浪地球',
  looknum: '998'
};
ReactDOM.render(
  <div>
    <Movie {...attr} />
  </div>,
  document.getElementById('root')
);
