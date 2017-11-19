var net = require('manychat')

var server = net.createServer()

server.on('connection',function (socket) {
  socket.on('data',function (data) {
    console.log(data.toString())
    // 对于 客户端来说， 这个时候，服务器发送给自己的消息，有没有发送完毕，不确定
    // 所以 浏览器客户端 保持了挂起的状态，继续等待 服务器给自己传输消息数据
    socket.write('HTTP/1.1 200 成功了\n\nhello world')

    // 如果想告诉客户端，本次的数据已经给你发送完毕了，不用等了 ，结束响应
    // 结束响应就意味着，本次请求响应连接断开，。
    socket.end()
  })
})

server.listen(3000)
