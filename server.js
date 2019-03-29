//Express body parser
const express = require('express'); //require function that loads the modules and give acess to their exports
const mysql =  require('mysql');    //Require function that loads the module express
const bodyParser = require('body-parser'); //For easy DOM manipulation
const path = require('path');

//Initializing the app
const app = express();

//Load View Engine
app.set('templates', path.join(__dirname, 'views')); //sets a global variable
app.set('view engine', 'ejs');

//Static HTML Files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//Require directory 
app.use(require('./routes'));

//app.get('/', function(request, response) {
//	if (request.session.loggedin) {
	//	response.send('Welcome back, ' + request.session.username + '!');
	//} else {
		//response.send('Please login to view this page!');
	//}
	//response.end();
//});



//Add Route
//app.get('/users/subregister', function(req, res){
  //res.render('user_account', {
    //userName: 'Name'
  //});
//});

//Create connection
const connection =mysql.createConnection({
  host      :  'localhost',
  user      :  'root',
  password  :  'Password123',
  database  :  'user_accounts_mysql'
});

//Call back function
connection.connect(function(error){
  if(!error){
    console.log('Error');
  } else {
    console.log('Connected to Database');
  }
}); 

// Create DB
//app.get('/createdb', (req, res) => {
  //let sql = 'CREATE DATABASE user_accounts_mysql';
  //connection.query(sql, (err, result) => {
  //    if(err) throw err;
  //    console.log(result);
  //    res.send('Database created...');
  //});
//});

// Create table
//app.get('/createpoststable', (req, res) => {
  //let sql = 'CREATE TABLE user_accounts (name VARCHAR(255), password VARCHAR(255))';
  //connection.query(sql, (err, result) => {
    //  if(err) throw err;
      //console.log(result);
      //res.send('Posts table created...');
 // });
//});

const PORT = ('port', process.env.PORT || 3000);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});



//console.log("Database Connecting");
//db.end();
app.use("/", require("./routes/index"));
app.use("/user_accounts", require("./routes/user_accounts"));
