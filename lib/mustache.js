var mustache = require("mustache");
var fs=require("fs");

var readFile=function(path){
    var content=fs.readFileSync(path,"utf-8");
    return content.replace(/{include tpl="(.*?)"}/g,function(match,path){
        return readFile(_mustache.prefix+path)
    })
}
var _mustache = function(path, options, fn) {
    var str=readFile(path);
    _mustache.packto&&fs.writeFileSync(path.replace(_mustache.prefix,_mustache.packto),str,"utf-8");
    try {
        if(str)
            options.filename = path;
        var result=mustache.to_html(str, options)
        result=result.replace(/{norender tpl="(.*?)"}/g,function(match,path){
            return fs.readFileSync(_mustache.prefix+path,"utf-8")
        })
        fn(null, result);
       
        
    } catch (err) {
        fn(err);
    }

};   
_mustache.prefix="/"
_mustache.packto=""
module.exports=_mustache;