var mongoose = require('mongoose');
var db=  require("../database").db;

var UserSchema=new mongoose.Schema({
	username:String,
	password:String,
	nikeName:String,
	age:String
}, {
versionKey: false
});

var  UserModel = db.model("user", UserSchema, "user");//后面这个是对应数据库collection的名字

exports.UserModel=UserModel;
