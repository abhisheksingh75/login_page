
const express = require('express');
let router = express.Router();

  router.get('/',function(req,res){
    res.render('index.html');
    /*res.sendFile( __dirname + '../' + "index.html" )*/
    /*res.attachment('C:/Users/abhisheksingh75/Desktop/Acadmey/Code/express_1/views/002.jpg');*/
  });

  router.post('/check', function(req, res) {
  //(req.body)
  console.log(req.body);
  //res.send(req.body);
  res.send("success")
  });
  module.exports = router;
