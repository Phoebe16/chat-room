聊天室

传统的方式是浏览器不断向服务器发起请求，这样会消耗大量资源

本项目使用websocket协议进行网络通信，在服务器端和客户端之间建立多次请求，可以同时发出请求

使用的技术要点包括：
node.js express socket.io 还有bootstrap相关的js库：sco.js Messenger.js

socket.io
io.emit方法，表示向所有的客户端发送信息，包括自己
socket.broadcast.emit方法，表示向其他客户端发送信息，不包括自己
socket.emit方法，表示只发送给客户端自己

图片发送
采用了HTML5中的fileReader，流的读取方式
对类型为file的输入框进行文件读取，this.files返回一个数组