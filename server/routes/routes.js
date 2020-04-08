//server/routes/routes.js
var express = require("express");
var router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const withAuth = require("../middleware");

const secret = "mysecretsshhh";

router.get("/", function(req, res) {
  res.render("index");
});

//comprueba que ruta que lleve esta comprobacion es por que usuario ya se ha logado
router.get("/checkToken", withAuth, function(req, res) {
  res.sendStatus(200);
});

router.get("/userloged", withAuth, function(req, res) {
  res.send("Welcome");
});

router.route("/register").post(function(req, res) {
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
    .catch(err => {
      res.status(400).send("err : " + err);
      console.log("error! " + err);
    });
});

router.route("/login").post(function(req, res) {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);
  // Cookies that have been signed
  console.log("Signed Cookies: ", req.signedCookies);

  const { email, password } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "Internal error please try again"
      });
    } else if (!user) {
      res.status(401).json({
        error: "Incorrect email or password found"
      });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500).json({
            error: "Internal error please try again"
          });
        } else if (!same) {
          res.status(401).json({
            error: "Incorrect email or password"
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: "1h"
          });
          const userJson = user.toJSON()
          //res.cookie("token", token, { httpOnly: true }).sendStatus(200);
          res.cookie("token", token, { httpOnly: true }).send({user: userJson});
          //res.send(userJson);
          console.log("login");
          console.log(user.toJSON())
        }
      });
    }
  });
});

module.exports = router;
