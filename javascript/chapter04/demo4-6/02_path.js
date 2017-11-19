var fs = require('fs')
var path = require('path')

// 如果在终端中执行的时候，node 执行命令所处的路径不是当前文件模块所属的目录
// 那么在读取文件的时候所指定的 相对静态资源路径就会相对于 node 命令所处的目录
// 为了避免错误，我们以后在执行带有路径的文件操作的时候，直接进入 当前文件模块所属的目录执行
// 终极解决方案：以后在操作文件路径的时候，都使用绝对路径就不会有上面的问题了
console.log(__dirname+'/README.md')
// C:\Course\code/README.md
// 如果是在 Linux 操作系统中 返回结果就是：C:/Course/code/README.md
// 在Windows 中，返回的结果中包含了反斜杠（正确的）
// 如果有正斜杠，node在执行的过程中会转换成当前操作系统能识别的路径分隔符
fs.readFile(path.join(__dirname,'README.md'),'utf8',function (err, data) {
  if (err) {
    throw err
  }
  console.log(data)
})

// 我们在操作路径的时候，会经常写错路径（多写了一个斜杠或者少写了）
// node 中 提供了一个 path 模块。专门用来辅助我们操作路径的

console.log(path.join(__dirname,'README.md'))
