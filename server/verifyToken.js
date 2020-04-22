const authConfig = require("./auth/config");
/* Esta función de middleware buscará el token en 
   las cookies de la solicitud y luego lo validará. 
*/
const jwt = require("jsonwebtoken");

const verifyToken = function (req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    console.log("no tiene token ");
    res.status(401).send("Unauthorized: No token provided");
  } else {
    console.log("tiene token Autorizado");
    jwt.verify(token, authConfig.secret, function (err, decoded) {
      if (err) {
        res.status(401).send("Unauthorized: Invalid token");
      } else {
        console.log("email decodificado ", decoded.email);
        req.email = decoded.email;
        next();
      }
    });
  }
};
module.exports = verifyToken;
