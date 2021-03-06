// app.js
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// Using Express
var app = express();

/*{'(
var logger = function(req, res, next){
    console.log('Logging...');
    next();
}

app.use(logger);)'}
*/

// View engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

//Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));


// Process get requests
app.get('/', function(req, res){
  res.render('index', {
    title: 'Customers'
  });
});

app.listen(3000, function(){
    console.log('Server Started on Port 3000');
})
