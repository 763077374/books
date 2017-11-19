/**
 * 使用HTTP构建Web服务器
 */
var http = require('http');
// 1. 创建一个 HTTP 服务器
var server = http.createServer();

// 2. 监听 请求（request） 事件
// request 就是一个可读流，用来 获取 当前与服务器连接的客户端的一些请求报文数据
// response 就是一个可写流，用来 给 客户端 Socket 发送消息的，或者用来发送响应报文的
server.on('request',function (request, response) {

  // 使用 HTTP 发送响应数据的时候，HTTP 服务器会自动把数据通过 HTTP 协议包装为一个响应报文然后发送到Socket
  response.write('hello world');
  // 在结束响应之前，我们可以多次向 客户端 发送数据
  response.write('hello itheima');
  // 对于 HTTP 请求响应模型来说，它们的请求和响应是一次性的
  // 也就是说，每一次请求都必须结束响应，
  // 标识断开当前连接
  response.end();
  // 在一次 HTTP 请求响应模型中，当结束了响应，就不能继续发送数据了,以下消息不会显示
});
// 3. 开启启动，监听端口
server.listen(3000,function () {
  console.log('server is listening at port 3000');
});
