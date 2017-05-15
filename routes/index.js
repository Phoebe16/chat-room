var express = require('express');
var router = express.Router();

//显示主页
router.get('/', function(req, res) {
  res.render('index', { title: '聊天室' });
});


router.get('/getuser', function(req, res) {
  var data = {
  	name:"李阳",
  	sex:"男",
  	img:"/images/1.jpg"
  };
  res.json(data);
});


router.get('/getalluser', function(req, res) {
  var data = [
  {
  	name:"李阳",
  	sex:"男",
  	img:"/images/1.jpg"
  },{
  	name:"李阳",
  	sex:"男",
  	img:"/images/2.jpg"
  },{
  	name:"李阳",
  	sex:"男",
  	img:"/images/3.jpg"
  }];
  res.json(data);
});

module.exports = router;
