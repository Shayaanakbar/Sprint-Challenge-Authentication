const jwt = require('jsonwebtoken');


const jwtKey = "learn to code, best 9-5 =]"

// quickly see what this file exports
module.exports = {
  authenticate,
};

// implementation details
function authenticate(req, res, next) {
  const token = req.get('Authorization');
  console.log(token);

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      console.log(decoded);
      req.decoded = decoded;
      

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}