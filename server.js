
//reuired modules   == Deisel ------------ ready to be burnt
var express = require('express'),
    routes  = require('./routes'),
    mongoose = require('mongoose');
    
    
var app = express();
var port = process.env.PORT || 8080;
var http = require('http').Server(app);

//connecting to mongo-db database
/*
mongoose.connect('mongodb://localhost/db-name',function(err,db){
  if(!err) {
    console.log("We are connected to data base ");
  }
  else{
      console.log(err);
  }
});
*/

//static files
app.use(express.static('public'));


//route
app.get('/', routes.index );

// Fire it up : start server  ::::>================>
var server = http.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
