const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
const flash = require('express-flash');
app.use(flash());
var moment = require('moment')
app.use(express.json());
const server = app.listen(1337, () => console.log('listening on port 1337'));
const io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.render('main')
});



io.on('connection', (socket) => {


  // socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  // socket.on('thankyou', function (data) { //7
  //   console.log(data.msg); //8 (note: this log will be on your server's terminal)
  

});

