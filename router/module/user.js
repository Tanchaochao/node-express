var URL = require('url');
var express = require('express');
var router = express.Router();

var UserService = require("../../service/UserService");

router.get("/",function(req,res,next){
	res.render("./module/reg");
});
//保存信息之前查看数据库是否有了
router.post("/isUse",function(req,res,next){
	var username=req.body.username;  
	UserService.isUse(username, function(data) {
		console.log(data)
		res.send(data);
	});
});
//注册
router.post("/reg",function(req,res,next){
	var username=req.body.username;  
  	var password=req.body.password;
  	var nikeName=req.body.nikeName;
  	var age=req.body.age;
  	var user={
	  	username:username,
		password:password,
		nikeName:nikeName,
		age:age
  	};
  	console.log(user);
	UserService.reg(user, function(data) {
		
		if(data){
			res.send();
		}
	});
});



//保存信息==录入数据
//router.post("/setUser",function(req,res,next){
//	var username=req.body.username;  
//	var password=req.body.password;
//	var nikeName=req.body.nikeName;
//	var age=req.body.age;
//	var user={
//	  	username:username,
//		password:password,
//		nikeName:nikeName,
//		age:age
//	};
//	console.log(user)
//	UserService.saveUser(user, function(data) {
//		res.send(data);
//	});
//});















router.get("/getUser",function(req,res,next){
//	var userObj = new User();
	var params = URL.parse(req.url,true).query;//true 加上就是把它格式化为Json格式
//	if(params.id == '1') {
//		userObj.name = "ligh";
//		userObj.age = "1";
//		userObj.city = "北京市";
//
//	} else {
//		userObj.name = "SPTING";
//		userObj.age = "1";
//		userObj.city = "杭州市";
//	}
//
//	var response = {
//		status: 1,
//		data: userObj
//	};
//	console.log(userObj)

	res.send("user getUserInfo"+JSON.stringify(params))
//	res.send(JSON.stringify(obj));

});


module.exports = router;