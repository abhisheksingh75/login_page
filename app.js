// Node modules
const express = require('express');
const app = express();
const port = 5000;
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const connectionString = "mongodb+srv://abhisheksingh857188:Sin560037KA%23@cluster0-nx9lv.mongodb.net/test?retryWrites=true&w=majority";

app.use('/', require(path.join(__dirname, './router/main')));
app.set('views',__dirname+'/public');
app.engine('html',require('ejs').renderFile);
// Connect to DB
mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => {
    console.log('mongoose connected to MongoDB');
},
    err => {
        console.log('mongoose connection to MongoDB failed');
    });


app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function(){
  console.log('we have started our server on '+ port);
});

//let express = require('express');
//let app = express();
//require('./router/main')(app);

//app.set('views',__dirname+'/views');
//app.engine('html',require('ejs').renderFile);
//let server = app.listen(5000, function(){
//  console.log("we have started our server on port 3000");

//});
