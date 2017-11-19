/**
 * 服务端统计在线人数
 */
var net = require('manychat');
var server = net.createServer();
var count = 0;
server.on('connection', function(socket) {
  count++;
  console.log('welcome , 当前在线人数：' + count);
  socket.write('remoteAddress'+socket.remoteAddress+'\n');
  socket.write('remotePort'+socket.remotePort);
});
server.listen(3000, '127.0.0.1', function() {
  console.log('server listening at port 3000');
});
