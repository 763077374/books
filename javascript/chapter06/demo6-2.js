/**
 * 在服务器端使用Socket
 */
// 1. 加载 manychat 核心模块
var net = require('manychat');
// 2. 创建一个服务应用程序,得到一个服务器实例对象
var server = net.createServer();
// 3. 监听客户端的连接事件，连接成功就会执行回调处理函数
// 每次回调函数被调用，就会有一个新的 socket 对象在回调函数中
server.on('connection',function (socket) {
  console.log('有客户端连接上来了');
 //在服务端可以获取到客户端的IP地址等信息
  console.log('客户端IP地址：' + socket.remoteAddress + '连接到了当前服务器');
  // 当前连接成功之后的客户端发送一个 hello world
  socket.write('hello world');
});
// 5. 服务器有一个事件叫做 listening ，表示开启监听成功之后回调处理函数
server.on('listening',function () {
  console.log('服务器开启监听成功了，正在等待客户端连接');
});
// 4. 启动服务器，开启监听
server.listen(3000,'127.0.0.1');
