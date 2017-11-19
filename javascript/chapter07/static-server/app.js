/**
 * 服务端代码
 */
var http = require('http');
var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var server = http.createServer();
server.on('request', function(req, res) {
  var url = req.url;
  if (url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function(err, data) {
      if (err) {
        return res.end(err.message);
      }
      // 现在的 data 就是 字符串
      // 我把 html 字符串 整体的当成 模板字符串
      var compiled = _.template(data);
      var htmlStr = compiled({
        title: 'hello world',
        arr: [
          { name: 'Jack' },
          { name: 'rose' },
          { name: 'mike' }
        ]
      });
      res.end(htmlStr);
    });
  }
});
server.listen(3000, function() {
  console.log('server is runnig at port 3000');
});
