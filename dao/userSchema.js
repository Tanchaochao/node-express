
var db= require('../database/database');

var mongoose = require('mongoose');
var UserSchema=new mongoose.Schema({
	username:String,
	password:String,
	nikeName:String,
	age:Number
}, {
versionKey: false
});
// 编译生成User模型
var UserModel= db.model('user', UserSchema);

//var User = new UserModel({
//  username:"tanchaochao",
//	password:"123456",
//	nikeName:"生活在别处",
//	age:22
//});

module.exports.saveUserDao=function(user,callback) {
	console.log(user)
//	var User = new UserModel(user);
//	User.save(function(err, doc) {
//		if(err) {
//			console.log("error :" + err);
//			callback("error :" + err);
//		} else {
//			console.log(doc);
//			callback("success!" +JSON.stringify(doc));
//			
//		}
//	});
};




