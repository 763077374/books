/**
 * 多人广播聊天客户端
 */
var net = require('net')
//向服务端创建连接
var client = net.createConnection({
  port:3000,
  host:'127.0.0.1'
});
//监听连接成功事件connent
client.on('connect',function () {
  // 通过当前进程的标准输入的 data 事件获取终端中的输入
  process.stdin.on('data',function (data) {
    data = data.toString().trim();
    client.write(data);
  });
});
//监听data事件输入服务器返回的数据
client.on('data',function (data) {
  console.log(data.toString());
});
