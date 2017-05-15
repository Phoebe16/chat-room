//connection to host and port
var socket = io();

//登录和登出的 系统消息提示
socket.on('loginInfo',function(msg){
	addMsgFromSys(msg);
  Messenger().post({
    message: msg,
    showCloseButton: true
  });
});

//渲染用户在前端列表
socket.on('userList',function(userList){
	//modify user count
	//modifyUserCount(userList.length);
  addUser(userList);
});

//登录后收到的系统消息
socket.on('userInfo',function(userObj){
  //should be use cookie or session
	userSelf = userObj;
  $('#spanuser').text('欢迎您！ '+userObj.name);
});

//发送消息给所有人
socket.on('toAll',function(msgObj){
  addMsgFromUser(msgObj,false);
});

//发送消息给单个人
socket.on('toOne',function(msgObj){
  Messenger().post({
    message: "<a href=\"javascript:showSetMsgToOne(\'"+msgObj.from.name+"\',\'"+msgObj.from.id+"\');\">"+msgObj.from.name + " send to you a message:"+ msgObj.msg+"</a>",
    showCloseButton: true
  });
});

socket.on('sendImageToALL',function(msgObj){
  addImgFromUser(msgObj,false);
});