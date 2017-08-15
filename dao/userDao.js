
var UserModel = require("./model/userMoal").UserModel;
//是否被使用
exports.isUse = function(username, callback) {
	UserModel.find({
		username: username
	}, function(err, data) {
		console.log("dao:",data)
		if(data.length == 0) {//为零表示没有注册过
			callback({
				isUse:true
			});
		} else {
			callback({
				isUse:false
			});
		}
	})

};
//注册
exports.reg = function(user, callback) {
	new UserModel(user).save(function(err, data) {
		if(data) {
			callback(data);
		} else {
			callback({
				regSuccess:false;
			});

		}
	})
};



exports.savaUser = function(user, callback) {
	console.log("dao:",user)
	new UserModel(user).save(function(err, data) {
		if(data) {

			callback("true");
		} else {
			callback("false");

		}
	})
};















// 编译生成User模型
//var UserModel= db.model('user', UserSchema);

//var User = new UserModel({
//  username:"tanchaochao",
//	password:"123456",
//	nikeName:"生活在别处",
//	age:22
//});

//module.exports.saveUserDao=function(user,callback) {
//	console.log(user)
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
//};




