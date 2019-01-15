
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);
io.on('connection', function (socket) {
    console.log('a socket is connected');
    socket.on('userinfo', function (_d) {
        socket.join(_d.userid);
        console.log('user register: ' + _d.userid);
        io.sockets.emit('register-success', _d.userid);
    });
    socket.on('sendPunchOut',function(_d){
        console.log('user ' + _d.userid+' vua punchout');
        io.to(_d.userid).emit('onPunchOut',"Puchout Thanh Cong");

    })
});