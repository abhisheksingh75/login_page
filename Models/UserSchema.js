const mongoose = require('mongoose');

let Schema = mongoose.Schema

let UserSchema = new Schema({
  userid: {type:String, require:true, max: 100},
  password: {type:String, require:true, max:100}

});

module.exports = mongoose.model('Users', UserSchema);
