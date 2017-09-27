/**
 * Created by wuya on 2017/9/23.
 */

var express = require('express');
var app = express();

app.use(express.static('src'));  //加载静态文件

app.get('/getData',function(req, res) {

    var data = {
        "high": [11, 11, 15, 13, 12, 13, 10],
        "low": [1, -2, 2, 5, 3, 2, 0]
    };
    setTimeout(function(){
        res.end(JSON.stringify({
            body : data
        }));
    }, 1000);
} );

//启动端口监听
var server = app.listen(8088, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});