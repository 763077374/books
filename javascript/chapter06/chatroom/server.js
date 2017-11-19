/**
 * 终端聊天室服务端
 */
var net = require('net');
var config = require('./config');
var broadcast=require('./broadcast.js');
var p2p=require('./p2p.js');
var signup=require('./signup.js');
var server = net.createServer();
var users = {};
server.on('connection', function(socket) {
  socket.on('data', function(data) {
    // 解析客户端发送的数据
    data = JSON.parse(data);
      // 根据客户端发送的数据类型，做对应的操作
    switch (data.protocal) {
      case 'signup':
          //处理用户注册
        signup.signup(socket,data,users);
        break;
      //处理广播消息
      case 'broadcast':
        broadcast.broadcast(data,users);
        break;
      case 'p2p':
         // 处理点对点消息
        p2p.p2p(socket, data,users);
        break;
      default:
        break;
    }
  });
  socket.on('error', function() {
    console.log('有客户端异常退出了');
  });
});
// 3. 启动服务器，开启监听
server.listen(config.port, config.host, function() {
  console.log('server listening at port ' + config.port);
});





