var UserDao = require("../dao/userDao");

//是否被使用的service
exports.isUse = function(username, callback) {
	UserDao.isUse(username,function(data){
		callback(data)
	})

};
//注册
exports.reg = function(user, callback) {
	UserDao.reg(user,function(data){
		callback(data)
	})

};


exports.saveUser = function(user, callback) {
	UserDao.savaUser(user,function(data){
		callback(data)
	})

};