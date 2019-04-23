import React from 'react';
import ReactDOM from 'react-dom';

// import '@/test/07.class创建组件';
const { Component } = React;
class Movie extends Component {
  render() {
    return (
      <div>
        <h1>这是大标题</h1>
      </div>
    );
  }
}

ReactDOM.render(<Movie />, document.getElementById('root'));
