const express = require("express");
const router = express.Router();
//Home Route

router.get('/', function(req, res) {
    res.render('register');
  });

  module.exports = router;