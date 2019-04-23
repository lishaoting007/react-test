const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html' // 生成的内存中首页的名称
});

// 向外暴露一个打包的配置对象
module.exports = {
  mode: 'development', // development  production
  plugins: [htmlPlugin],
  module: {
    // 所有第三方模块的配置规则
    rules: [
      // 第三方匹配规则
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/ // 千万别忘记添加exclude排除项
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
};
// webpack 4.x 提供了约定大于配置的概念，打包主入口为src/index.js
