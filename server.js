let express = require('express');
let app = express();
require('./router/main')(app);

app.set('views',__dirname+'/views');
app.engine('html',require('ejs').renderFile);
let server = app.listen(5000, function(){
  console.log("we have started our server on port 3000");

});
