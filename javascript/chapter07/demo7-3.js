/**
 * 使用HTTP提供静态资源服务
 */
var http = require('http');
var fs = require('fs');//用于读取静态资源
var path = require('path');//用于做路径拼接
var server = http.createServer();

server.on('request', function(request, response) {
  //获取静态资源路径
  var url = request.url;
  if (url === '/') {
    //读取相应静态资源内容
    fs.readFile(path.join(__dirname, 'static/index.html'), 'utf8', function(err, data) {
     //如果出现异常抛出异常
      if (err) {
        throw err;
      }
      //将读取的静态资源数据响应给浏览器
      response.end(data);
    });
  } else if (url === '/login') {
    fs.readFile(path.join(__dirname, 'static/login.html'), 'utf8', function(err, data) {
      if (err) {
        throw err;
      }
      response.end(data);
    });
  } else if (url === '/register') {
    fs.readFile(path.join(__dirname, 'static/register.html'), 'utf8', function(err, data) {
      if (err) {
        throw err;
      }
      response.end(data);
    });
  } else if (url === '/login.html') {
    fs.readFile(path.join(__dirname, 'static/404.html'), 'utf8', function(err, data) {
      if (err) {
        throw err
      }
      response.end(data);
    });
    //如果有图片、CSS文件等，浏览器会重新发送请求获取静态资源
  } else if (url === '/css/main.css') {
    var cssPath = path.join(__dirname, 'static/css/main.css')
    fs.readFile(cssPath, 'utf8', function(err, data) {
      if (err) {
        throw err
      }
      response.end(data);
    });
  } else if (url === '/images/01.jpg') {
    var imgPath = path.join(__dirname,'static/images/01.jpg')
    fs.readFile(imgPath, function(err, data) {
      if (err) {
        throw err
      }
      response.end(data);
    });
  } else {
    fs.readFile(path.join(__dirname, 'static/404.html'), 'utf8', function(err, data) {
      if (err) {
        throw err
      }
      response.end(data);
    });
  }
});
server.listen(3000, function() {
  console.log('server is listening at port 3000');
});
