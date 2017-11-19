// 当我们去加载一个第三方包的说
// 如何去找该包的入口文件呢？
// 1. 在这个包目录下找一个叫做 package.json 的文件
// 2. 在 package.json 文件中 找一个叫做 main 的属性
// 3. 那么 main 属性的值就是指定的这个包的入口文件
// var md = require('./lib/markdown-js-master').markdown
// var htmlStr = md.toHTML('# hello world')
// console.log(htmlStr)


// 如何使用第三方包
// 1. 在你要具体的写的代码的地方，通过 require 去加载 第三方包
// 2. 对于第三方包来说，在 require 方法的模块标识应该输入 你 npm install 的时候的包名

var md = require('markdown').markdown
var result = md.toHTML('# hello world')
console.log(result)
