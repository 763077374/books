/*
 *读取目录
 */
var fs = require('fs');

console.log('查看/testDemo4-8目录');
fs.readdir('/Course/testDemo4-8/',function(err, files){
    if (err) {
        return console.error(err);
    }
    //遍历所有文件
    files.forEach( function (file){
      //  输出文件名
        console.log( file );
    });
});