var fs = require('fs')
var path = require('path')

// 监视文件，执行之后，程序会保持挂起状态，监视文件的变化
// 一旦监视到文件发生变化，就会触发和执行 listener 回调处理函数
// 对于监视文件来说，修改完代码如果想生效，必须重新启动监听
// 第二个可选参数是一个对象，可以通过配置该对象的属性 interval 来设定要监视文件的频率
fs.watchFile(path.join(__dirname, 'README.md'), {
  interval: 500
}, function(curr, prev) {
  console.log('最新的文件的修改时间是：' + curr.mtime)
  console.log('上一次的文件的修改时间是：' + prev.mtime)
  if (curr.mtime === prev.mtime) {
    return
  }
  // 接下来就是自己的代码业务逻辑了
  // 可以拿当前最新的文件大小和上一次文件大小作比对，如果一致说明没有修改
})
