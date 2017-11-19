/*
 *  同步方式写入文件
 */
var fs = require('fs');
// 在进行文件操作的时候，如果是同步 API，必须使用 try-catch 来捕获异常
// 防止程序因为异常退出，导致后续代码无法继续执行
 try {
     console.log('写入文件...')
     fs.writeFileSync('E:/a.txt', '传智播客');
 } catch (e) {
   console.log('不好意思，文件写入失败了')
 }
