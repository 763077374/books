/**
 * 点对点消息
 * @param socket
 * @param data 点对点消息的JSON数据
 * {
  "protocal": "p2p", //消息类型为点对点
  "from": "小红", //发送消息的用户
  "to": "小明",
  "message": "你早上吃的什么"
}
 * @param users 用户组
 */
exports.p2p=function (socket,data,users) {
    var from = data.from;
    var to = data.to;
    var message = data.message;
    // 找到要发送给某个人的 Socket 地址对象
    var receiver = users[to];
    // 如果接收人不存在，告诉客户端没有该用户
    if (!receiver) {
        var send = {
            protocal: 'p2p',
            code: 2001,
            message: '用户名不存在'
        }
        socket.write(new Buffer(JSON.stringify(send)));
    } else {
        // xxx 对你说： xxx
        var send = {
            protocal: 'p2p',
            code: 2000,
            from: data.from,
            message: message
        }
        receiver.write(new Buffer(JSON.stringify(send)));
    }
    // 如果接收人存在，则将消息发送给该用户
}
