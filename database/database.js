var mongoose = require('mongoose');
var UserSchema=require('../dao/userSchema');
var db = mongoose.connect('mongodb://localhost:27017/user'); // 连接mongodb本地数据库user
db.connection.on("error", function(error) {
	console.log("数据库连接失败：" + error);
});
db.connection.on("open", function() {
	console.log("数据库连接成功");
});



module.exports = db;
