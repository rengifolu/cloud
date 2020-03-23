//server/routes/routes.js
var express = require("express");
var router = express.Router();

var User = require("../../server/models/User");

router.get("/", function(req, res) {
  res.render("index");
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

router.route("/login").post(async function(req, res) {
  //console.log(req.body);
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email: email
    }
  });

  console.log(user.toJSON());
  if (!user) {
    return res.status(403).send({
      // Error 403: Acceso denegado/prohibido
      error: "la informacion de login es incorrecta"
    });
  }

  const isPasswordValid = await user.comparePassword(password);
  // eslint-disable-next-line no-console
  console.log(password, user.password);
  if (!isPasswordValid) {
    return res.status(403).send({
      // Error 403: Acceso denegado/prohibido
      error: "la informacion de password es incorrecta"
    });
  }
});

module.exports = router;
