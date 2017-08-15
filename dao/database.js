var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost:27017/user';
var db=mongoose.connect(dbURI);
function getConn() {
	db.connection.on("error", function(error) {
		console.log("数据库连接失败：" + error);
	});
	db.connection.on("open", function() {
		console.log('Mongoose connected to ' + dbURI);
	});
}


exports.getConn = getConn;
exports.db = db;