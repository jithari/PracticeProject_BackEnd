const jwt = require('jsonwebtoken');

module.exports.verifyJwtToken = (req, res, next) => {
    var token;
    var bearerHeader = req.headers['authorization'];
    if(bearerHeader)
      token = req.headers['authorization'].split(' ')[1];

      if(!token)
      return res.status(403).send({auth: false,message:'cannot find token' });
      else{
          jwt.verify(token, process.env.JWT_SECRET,
        (err,decode)=>{
            if(err)
                return res.status(500).send({ auth: false, message: 'Token authentication failed'});
                    else{
                        req._id = decode._id;
                        next();
                    }
            }
        )
      }
}