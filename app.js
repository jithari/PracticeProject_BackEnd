require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');



const route = require('./routes/index.routes');  
const app = express();

   




//middleware
app.use(bodyParser.json());
app.use(cors());//to communicate with client  port
app.use(passport.initialize());
app.use('/api',route);

app.get('/',function(req,res){
    res.send('Hello from server');
})



app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

   
 