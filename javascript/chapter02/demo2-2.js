//加载http模块
var http = require('http');
//创建http服务器
http.createServer(function(req, res) {
  //响应结束
  res.end('hello world');
  //监听网址127.0.0.1 端口号3000
}).listen(3000,'127.0.0.1');
