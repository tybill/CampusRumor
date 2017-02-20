var bodyParser = require('body-parser');
var express = require('express');
var app = express();


app.set('view engine', 'pug')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var temp = [];

var server = app.listen(80, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

app.get('/', function (req, res) {
   var variables = {
      posts: temp
   };
   res.render('index', variables);
})

app.post('/', function(req, res){
   var username = req.body.username;
   var message = req.body.message;
   var isanonymous = req.body.isanonymous;

   if(isanonymous=='true')
   {
      username = 'Anonymous';
   }
   else if(username=='Enter Username')
   {
      username = 'Anonymous';
   }
   else if(username=="")
   {
      username= 'Anonymous';
   }

   if(message != '')
   {
      temp.unshift({
      username: username,
      message: message,
   });
   }

   var variables = {
      posts: temp
   };
   res.render('index', variables);
});
