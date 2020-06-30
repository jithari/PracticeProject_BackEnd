const mongoose = require('mongoose');


//conncet and pass mongodb URI
//process-for access
//const MongoClient = require('mongodb').MongoClient;
//const test = require('assert');
//const url = 'mongodb://localhost:27017';
//const dbName = 'MEANStackDB';
//MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true,},function(err, client){
  //  if(err){
    //    console.log(err);
    //}else{
      //  console.log('connected to MongoDB');
       // const db = client.db(dbName);
       // client.close();
   // }
    
 // })
 mongoose.set('useCreateIndex', true);
 mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true,}, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});




require('./users.model');