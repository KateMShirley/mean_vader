var mongoose = require('mongoose');

// 1 declare a schema
//blueprint for objects

var CharacterSchema = new mongoose.Schema({
  name: String,
  planet: String,
  forceUser: {type: Boolean, "default": false}
});


//2 export our model
//mongoose.mosel ('string name of model', schema)
module.exports = mongoose.model('Character', CharacterSchema);
