const User = require("../models/User");
const authConfig = require("../auth/config");
const jwt = require("jsonwebtoken");
module.exports = {
  //esta funcion la manejamos como promesa
  login(req, res) {
    console.error("Cookies: ");
    console.log("Cookies: ", req.cookies);
    // Cookies that have been signed
    console.log("Signed Cookies: ", req.signedCookies);

    const { email, password } = req.body;
    User.findOne({ email }, function (err, user) {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal error please try again",
        });
      } else if (!user) {
        res.status(401).json({
          error: "Incorrect email or password found",
        });
      } else {
        user.isCorrectPassword(password, function (err, same) {
          if (err) {
            res.status(500).json({
              error: "Internal error please try again",
            });
          } else if (!same) {
            res.status(401).json({
              error: "Incorrect email or password",
            });
          } else {
            authConfig.sess = req.session;
            authConfig.sess.email = req.body.email;

            // Issue token
            const payload = { email };
            const token = jwt.sign(payload, authConfig.secret, {
              expiresIn: authConfig.expireTime,
            });
            const userJson = user.toJSON();
            //res.cookie("token", token, { httpOnly: true }).sendStatus(200);
            res
              .cookie("token", token, { httpOnly: true })
              .send({ user: userJson });
            //res.send(userJson);
            console.log("login");
            console.log(user.toJSON());
          }
        });
      }
    });
  },
};
