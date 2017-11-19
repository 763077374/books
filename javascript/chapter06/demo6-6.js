/**
 * 测试获取终端输入
 */
// 通过下面的方式就可以获取用户的输入
process.stdin.on('data',function (data) {
  console.log(data.toString().trim());
});
