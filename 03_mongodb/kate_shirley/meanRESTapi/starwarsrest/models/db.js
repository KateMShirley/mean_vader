var mongoose = require('mongoose');

//1 - a connection string
var connectionString = 'mongodb://localhost/starwars';


//2 - need ot made connectionString
mongoose.connect(connectionString);

//3 listen for event changes
mongoose.connection.on('connected', function (){
  console.log('Mongoose has connected to: ' + connectionString);
});

mongoose.connection.on('disconnected', function (){
  console.log('Mongoose has disconnected from: ' + connectionString);
});

mongoose.connection.on('error', function (){
  console.log('Mongoose has experienced an error: ' + error);
});
