//server/routes/routes.js
var express = require("express");
var router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const verifyToken = require("../verifyToken");
const authConfig = require("../auth/config");

router.get("/", function (req, res) {
  res.render("index");
});

//comprueba que ruta que lleve esta comprobacion es por que usuario ya se ha logado
router.get("/checkToken", verifyToken, function (req, res) {
  res.sendStatus(200);
});

router.get("/userloged", verifyToken, function (req, res) {
  res.send("Welcome");
});

router.route("/register").post(function (req, res) {
  //console.log(req.body);
  var user = new User();
  user.first_name = req.body.first_name;
  user.last_name = req.body.last_name;
  user.user_name = req.body.user_name;
  user.email = req.body.email;
  user.password = req.body.password;
  user
    .save()
    .then(() => {
      res.send("user successfully added!");
      console.log("user successfully added!");
    })
    .catch((err) => {
      res.status(400).send("err : " + err);
      console.log("error! " + err);
    });
});

router.route("/login").post(function (req, res) {
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
            expiresIn: "1h",
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
});

router.get("/logout", (req, res) => {
  console.log("sessionID a borrar : ", req.sessionID);
  authConfig.sess.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    console.log("deslogado en server");
    //res.redirect("index"); con este no funcionaba
    res.render("index");
  });

  //res.clearCookie("token");
  console.log("session que sigue viva : ", req.sessionID);
  console.log("sessionID que sigue viva : ", req.session);
  console.log("sessionuser : ", authConfig.sess);
});

module.exports = router;
