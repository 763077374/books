/**
 * 路由模块：负责把具体的请求路径分发的具体的请求处理函数
 * 分发到具体的业务处理逻辑
 * 用户的每一个请求都会对应后台的一个具体的请求处理函数
 */

var fs = require('fs')
var path = require('path')
var _ = require('underscore')
var handler = require('./handler')
var musicController = require('./controllers/music')
var userController = require('./controllers/user')
var url = require('url')

module.exports = function(req, res) {
  // 首页 / 呈递音乐列表页面
  // 添加音乐页面 /add 呈递添加音乐页面
  // 编辑音乐页面 /edit 呈递编辑音乐页面
  // 删除音乐 /remove 处理删除音乐请求
  // 当使用 url核心模块的 parse方法之后，该方法会自动帮你把路径部分解析到 pathname 属性中
  // 同时他会把 查询字符串部分 解析到 query 属性
  // 对于我们的 url.parse 方法来说，它还有第二个参数，我们可以给它指定为 true，那么这个时候它会自动帮我们把 query 属性查询字符串转换为一个对象
  var urlObj = url.parse(req.url, true)
  req.query = urlObj.query
  console.log(urlObj.query)
  // 获取当前请求路径
  // pathname 不包含查询字符串
  var pathname = urlObj.pathname
  var method = req.method
  console.log(method)

  if (method === 'GET' && pathname === '/') {
    musicController.showIndex(req, res)
  } else if (method === 'GET' && pathname === '/index.html') {
    musicController.showIndex(req, res)
  } else if (method === 'GET' && pathname.startsWith('/node_modules/')) {
    var staticPath = path.join(__dirname, pathname)
    fs.readFile(staticPath, 'utf8', function(err, data) {
      if (err) {
        return res.end(err.message)
      }
      res.end(data)
    })
  } else if (method === 'GET' && pathname === '/add') {
    musicController.showAdd(req, res)
  } else if (method === 'GET' && pathname === '/edit') {
    musicController.showEdit(req, res)
  } else if (method === 'GET' && pathname === '/login') {
    userController.showLogin(req, res)
  } else if (method === 'GET' && pathname === '/register') {
    userController.showRegister(req, res)
  } else if (method === 'POST' && pathname === '/add') {
    musicController.doAdd(req, res)
  } else if (method === 'GET' && pathname ==='/remove') {
    musicController.doRemove(req, res)
  } else if (method === 'POST' && pathname === '/edit') {
    musicController.doEdit(req, res)
  }
}

// res.render('path',{})

// render('path',{
//   title: 'Index'
// },res)

// function render(viewPath, obj, res) {
//   fs.readFile(viewPath, 'utf8', function(err, data) {
//     if (err) {
//       return res.end(err.message)
//     }
//     var compiled = _.template(data)
//     var htmlStr = compiled(obj)
//     res.end(htmlStr)
//   })
// }
