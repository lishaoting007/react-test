import React from 'react';
const { Component } = React;

function CmItem(props) {
  return (
    <div>
      <h2>评论人：{props.user}</h2>
      <p>评论内容：{props.content}</p>
    </div>
  );
}

class CmList extends Component {
  constructor() {
    super();
    this.state = {
      CommentList: [
        { id: 1, user: '张三', content: '哈哈，沙发' },
        { id: 2, user: '李四', content: '哈哈，板凳' },
        { id: 3, user: '王五', content: '哈哈，凉席' },
        { id: 4, user: '赵六', content: '哈哈，砖头' },
        { id: 5, user: '田七', content: '哈哈，楼下山炮' }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1 style={{ color: '#f00', fontSize: 36, fontWeight: 200 }}>
          这是评论列表组件
        </h1>
        {this.state.CommentList.map(item => (
          <CmItem {...item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default CmList;
