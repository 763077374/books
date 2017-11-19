/**
 *  从流中读取数据
 */
var fs = require("fs");
var total = '';
// 创建可读流
var readableStream = fs.createReadStream('input.txt');
// 设置编码为 utf8。
readableStream.setEncoding('UTF8');
// 处理流事件 data\end\and\error
readableStream.on('data', function(chunk) {
    total += chunk;
});
readableStream.on('end',function(){
    console.log(total);
});
readableStream.on('error', function(err){
    console.log(err.stack);
});
console.log("程序执行完毕");