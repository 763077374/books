/**
 * 双向通信-服务器
 */

var net = require('manychat');

var server = net.createServer();
// 每一个客户端与服务器建立连接成功之后，都会触发一次 connection 事件
server.on('connection', function(socket) {

  /*以下部分应用于双向通信*/
  //通过监听 socket 对象的 data 事件来获取客户端发送给服务器的数据
  socket.on('data', function(data) {
    console.log(data.toString());
    socket.write('我吃的小豆包');
  });
});
server.listen(3000, '127.0.0.1', function() {
  console.log('server listening at port 3000');
});
