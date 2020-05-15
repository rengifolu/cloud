const authConfig = require("../auth/config");

module.exports = {
  //esta funcion la manejamos como promesa
  logOut(req, res) {
    console.log("sessionID a borrar : ", req.sessionID);
    req.session.destroy((err) => {
      if (err) {
        return console.log(err);
      }
      console.log("deslogado en server");
      //res.redirect("index"); con este no funcionaba
      res.render("index");
    });

    res.clearCookie("token");
    console.log("session que sigue viva : ", req.sessionID);
    console.log("sessionID que sigue viva : ", req.session);
    console.log("sessionuser : ", authConfig.sess);
  },
};
