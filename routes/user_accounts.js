const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const mysql =  require('mysql');    //Require function that loads the module express
const path = require('path');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//var urlencodedParser = bodyParser.urlencoded({ extended: false });



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

router.post("/register", (req, res) => {
     var user = {
         username: req.body.username,
         password: req.body.password
     };
     console.log(req.body.username);
     //Whenever the query is done call the function
     connection.query("INSERT INTO user_accounts (Name, Password) VALUES ('" + user.username + "', '" + user.password + "')",  function(err, result){
     });
    res.render("welcome", user.username);
    //console.log("Req: ", req.body);

    //const username = req.body.username;
    //const password = req.body.password;

    //const user = {
    //    username:username,
    //    password:password
    //};

   //res.json({ msg: "Owner Daryle has recieved your data", data:  user});
   // res.end(JSON.stringify(req.body));
   //console.log(req.body)
});

module.exports = router;