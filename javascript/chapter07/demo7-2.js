/**
 * 根据不同URL响应不同消息
 */
var http = require('http');
//创建服务器
var server = http.createServer();
//监听request事件
server.on('request', function(request, response) {
  //获取资源路径,默认为'/'
  var url = request.url;
  //通过判断获取到的资源路径，发送指定响应消息
  if (url === '/') {
    response.end('hello index');
  } else if (url === '/login') {
    response.end('hello login');
  } else if (url === '/register') {
    response.end('hello register');
  }else {
    //如果路资源径找不到，提示错误信息
    response.end('404 Not Found!');
  }
});
//开启启动，监听端口
server.listen(3000, function() {
  console.log('server is listening at port 3000');
});
