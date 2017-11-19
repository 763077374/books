/**
 * 多人广播聊天服务端端
 */
var net = require('net');
var server = net.createServer();
//该数组用来封装所有客户端的Socket
var users = [];
server.on('connection', function(socket) {
  users.push(socket);
  socket.on('data', function(data) {
    data = data.toString().trim();
    users.forEach(function(client) {
      if (client !== socket) {
        //由于同一台计算机上不同客户端端口号不同,所以可以通过端口号来区分是谁说的话
        client.write(socket.remotePort+ '：' + data);
      }
    });
  });
  // 当有客户端异常退出的时候，就会触发该函数
  // 如果不监听客户端异常退出就会导致服务器崩溃
  socket.on('error',function () {
    console.log('有客户端异常退出了');
  });
})
server.listen(3000, '127.0.0.1', function() {
  console.log('server listening at port 3000');
});
