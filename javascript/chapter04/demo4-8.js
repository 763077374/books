/*
 *创建目录
 */
var fs = require('fs');
console.log('在C:/Course目录下创建目录testDemo4-8');
fs.mkdir('C:/Course/testDemo4-8/',function(err){
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
});