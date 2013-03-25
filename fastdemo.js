var express = require('express');
var rainbow = require('./lib/rainbow.js'); 
var config = require("./config.js");
var _mustache = require('./lib/mustache.js');
var lessmiddle     = require ('less-middleware');
var app = express();
_mustache.prefix = __dirname + "/templates/";
_mustache.packto = __dirname + "/pack/";
app.engine("html", _mustache); 
//设置模板路径
app.set('views', __dirname + '/templates');
app.error=function(err, req, res){
  console.log("500:" + err + " file:" + req.url)
  res.render('500 error');
}
app.use(express.cookieParser());
app.use(express.session({
  secret : 'yutou',
  maxAge : new Date(Date.now() +30*60*1000)
}));
app.use("/assets/css",lessmiddle({src:__dirname+"/assets/css",compress:true})) 
  app.use ("/assets", express.static(__dirname+"/assets"))
app.use(express.logger({
  format: ':method :url :status'
}));
rainbow.route(app, {  
  controllers: '/controllers/',
  filters:'/filters/',      
  template:'/templates/',
  demo:"/demo/"
});   
app.get('*', function(req, res) {
  res.end("404");
});
app.use(function(err, req, res, next) {
  res.send(err.message);
})
app.listen(config.port);      
