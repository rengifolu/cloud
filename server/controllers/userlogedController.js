const authConfig = require("../auth/config");

module.exports = {
  //esta funcion la manejamos como promesa
  userloged(req, res) {
    authConfig.sess = req.session;
    console.log("desde /userloged ", authConfig.sess.email);
    if (authConfig.sess.email) {
      res.send(`<h1>Hello ${authConfig.sess.email} </h1><br>`);
    } else {
      res.send("<h1>Please login first.</h1>");
    }
  },
};
