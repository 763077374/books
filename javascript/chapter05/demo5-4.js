/*
 * 拼接缓冲区
 */
//创建两个缓冲区
 var buf = new Buffer('世上无难事，');
 var buf1 = new Buffer('只怕有心人');
//执行拼接操作
var buf2= Buffer.concat([buf,buf1]);
//输出拼接后缓冲区的内容
console.log("buf2 内容: " + buf2.toString());
