/* Esta función de middleware buscará el token en 
   las cookies de la solicitud y luego lo validará. 
*/
const jwt = require("jsonwebtoken");
const secret = "mysecretsshhh";

const withAuth = function (req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send("Unauthorized: No token provided");
  } else {
    jwt.verify(token, secret, function (err, decoded) {
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
module.exports = withAuth;
