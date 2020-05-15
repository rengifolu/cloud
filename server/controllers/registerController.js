const User = require("../models/User");

module.exports = {
  //esta funcion la manejamos como promesa
  register(req, res) {
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
  },
};
