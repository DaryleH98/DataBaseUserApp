//Express body parser
const express = require('express'); //require function that loads the modules and give acess to their exports
const mysql =  require('mysql');    //Require function that loads the module express
const bodyParser = require('body-parser'); //For easy DOM manipulation
const app = express();

//Create connection
const db =mysql.createConnection({
  host      :  'localhost',
  user      :  'me',
  password  :  'Password123',
  database  :  'usersmysql'
});

// Connect //Route Declaration
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('MySql Connected.....');
});

//Create DB //Create a Route that creates a DataBase
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE usersmysql';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send ('Database created....');
  });
});

//Create table
app.get('/createpoststable', (req, res) => {
  //Create query
  let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
  db.query(sql, (err, result)=> {
    if(err) throw err;
    console.log(result);
    res.send('Posts table created....');
  });
});

app.get('/addpost1', (req, res) => {
  let post = {title:'Post One', body: 'This is post number one'};
  let sql = 'INSERT INTO posts SET ?';
  let query = db.query(sql, post, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Posts 1 added....');
  });
});

app.get('/addpost2', (req, res) => {
  let post = {title:'Post One', body: 'This is post number two'};
  let sql = 'INSERT INTO posts SET ?';
  let query = db.query(sql, post, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Posts 2 added....');
  });
});


const PORT = ('port', process.env.PORT || 3000);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});



app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => res.sendStatus(200))
})

