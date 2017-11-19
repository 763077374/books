/**
 * 广播消息
 * @param data 广播消息发送过来的JSON数据
 * {
  "protocal": "broadcast",//消息类型为广播
  "from": "小红",//发送消息的用户
  "message": "大家早上好"//用户发送的消息内容
}
 */
exports.broadcast= function(data,users) {
    var from = data.from;
    var message = data.message
    message = from + '说：' + message;
    var send = {
        protocal: 'broadcast',
        message: message
    }
    send = new Buffer(JSON.stringify(send));

    for (var username in users) {
        var tmpSocket = users[username];
        tmpSocket.write(send);
    }
}
