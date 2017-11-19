var fs = require('fs')
var path = require('path')

// 帮我找到 code 目录下所有以 .js 为后缀名的文件名

// fs.readdir(__dirname, function(err, files) {
//   if (err) {
//     throw err
//   }
//   // forEach 循环会对 数组中的每一项 都创建一个匿名函数，然后将该项作为参数传递给匿名函数
//   // 以及该项的索引下标
//   files.forEach(function(item, index) {
//     // 判断 item 是否是以 .js 文件后缀名结尾的
//     if (path.extname(item) === '.js') {
//       console.log(item)
//     }
//   })
// })

// 封装一个函数，参数是一个目录路径，得到 所有的 .js 结尾的文件绝对路径
function getAllJSFilePaths(dirPath, callback) {
  fs.readdir(dirPath, function(err, files) {
    if (err) {
      return callback(err, null)
    }
    // forEach 循环会对 数组中的每一项 都创建一个匿名函数，然后将该项作为参数传递给匿名函数
    // 以及该项的索引下标
    var arr = []
    files.forEach(function(item, index) {
      // 判断 item 是否是以 .js 文件后缀名结尾的
      if (path.extname(item) === '.js') {
        // 思考在哪里调用 callback
        arr.push(path.join(dirPath, item))
      }
    })
    callback(null, arr)
  })
}

getAllJSFilePaths(__dirname, function (err, paths) {
  if (err) {
    throw err
  }
  // 把所有的 js 文件中的代码读取出来，合并到一个文件中
})
