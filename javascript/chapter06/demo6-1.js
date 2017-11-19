/**
 * Net.Servet创建服务器
 */
// 1. 加载 manychat 核心模块
var net = require('net');
// 2. 创建一个服务应用程序,得到一个服务器实例对象
var server = net.createServer();
// 3. 监听客户端的连接事件connection，连接成功就会执行回调处理函数
server.on('connection',function () {
  console.log('有客户端连接上来了');
});
// 5. 服务器有一个事件叫做 listening ，表示开启监听成功之后回调处理函数
server.on('listening',function () {
  console.log('服务器开启监听成功了，正在等待客户端连接');
});
// 4. 启动服务器，开启监听
// 监听 127.0.0.1：3000 只能被本机所访问
server.listen(3000,'127.0.0.1');
