var http = require('http')
var config = require('./config')
var router = require('./router')
var render = require('./common/render')

var server = http.createServer()

server.on('request', function(req, res) {

  // 首先动态的给 Response 对象挂载了一个 render 方法，该方法用来读取一个模板文件，注入数据，然后响应给当前请求
  render(res)

  // 在进入 router 模块之前
  // 我们就已经给 res 对象加了一个属性方法叫做：render
  
  // 然后请求和响应被传递到一个路由的模块中
  // 该模块就是专门用来对不同的请求路径分发到具体的请求处理函数
  router(req, res)

})

server.listen(config.port, config.host, function() {
  console.log('server is listening at port ' + config.port)
  console.log('pleast visit http://' + config.host + ':' + config.port)
})
