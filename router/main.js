module.exports = function(app)
{
  app.get('/',function(req,res){
    res.render('index.html');
    /*res.sendFile( __dirname + '../' + "index.html" )*/
    /*res.attachment('C:/Users/abhisheksingh75/Desktop/Acadmey/Code/express_1/views/002.jpg');*/
  });
  app.get('/about',function(req, res){
    res.render('about.html');
  });

  app.post('/check', function(req, res) {
  console.log(req.body.username);
  res.send("success");
  var result = True;
  	if(result){
  		res.send("success");
  	} else {
  		res.send("failed");
  	}
  });
}
