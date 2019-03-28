const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/subRegister", (req, res) => {
   // var name = req.body.userName;
    //console.log(name);
    //console.log("Req: ", req.body);

    //const username = req.body.username;
    //const password = req.body.password;

    //const user = {
    //    username:username,
    //    password:password
    //};

   //res.json({ msg: "Owner Daryle has recieved your data", data:  user});
   res.end(JSON.stringify(req.body));
});

module.exports = router;