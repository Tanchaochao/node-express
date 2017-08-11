var index = require('./module/index');
var user = require('./module/users');



exports.init = function(app){
    app.use('/', index);
    app.use('/user',user);
}    