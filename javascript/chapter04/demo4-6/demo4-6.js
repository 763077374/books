/*
 * 文件复制模块
 */
var fs = require('fs');
/*定义文件复制函数copy()
* src：需要读取的文件
* dist:目标文件
* callback:回调函数
* */
function copy(src, dist, callback) {
  //读取文件
  fs.readFile(src, function(err, data) {
    if (err) {
      return callback(err);
    }
    //写入文件
    fs.writeFile(dist, data.toString(), function(err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
}
module.exports = copy;
