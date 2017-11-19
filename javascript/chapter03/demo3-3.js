/**
 * 同步代码处理异常
 */
function parseJsonStrToObj(str) {
    return JSON.parse(str)
}
// 对于同步代码，我们可以使用 try-catch 来捕获代码执行可能出现的异常
try {
    var obj = parseJsonStrToObj('foo')
    console.log(obj)
} catch (e) {
    console.log('转换失败了')

}


