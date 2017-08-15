var index = require('../router/module/index');
var user = require('../router/module/user');



exports.init = function(app){
//	app.use("*", function(request, response, next) {
//		response.writeHead(200, {
//			"Content-Type": "application/json;charset=utf-8"
//		});
//		next();
//	});
    app.use('/', index);
    app.use('/user',user);
}    