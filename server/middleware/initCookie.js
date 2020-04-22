const cookieParser = require("cookie-parser");
const session = require("express-session");
const authConfig = require("../auth/config");

function initCookie(app) {
  //app.use(cookieParser());
  app.use(cookieParser());

  // initialize express-session
  // to allow us track the logged-in user across sessions.
  app.use(
    session({
      key: "user_sid",
      secret: authConfig.secret,
      resave: false,
      saveUninitialized: true,
      cookie: {
        expires: authConfig.expireTime,
      },
    })
  );

  // This middleware will check if user's cookie is still
  // saved in browser and user is not set, then automatically log the user out.
  // This usually happens when you stop
  // your express server after login,
  // your cookie still remains saved in the browser.

  app.use((req, res, next) => {
    // si hay cookies pero no han iniciado session se borran cookies
    //asi garantizamos que hayan inicado sesion previamente
    //console.log(req.session);
    //console.log(req.cookies);

    //console.log("initcookies");
    //console.log("authConfig.sesionUsuario", authConfig.sesionUsuario);
    /*     console.log(
      "authConfig.sesionUsuario.email",
      authConfig.sesionUsuario.email
    ); */
    //console.log("req.cookies.token", req.cookies.token);
    console.log("req.sessionID", req.sessionID);
    console.log("req.session ", req.session);

    if (req.cookies.token && !authConfig.sesionUsuario) {
      console.log("limpiadas cookies");
      //res.clearCookie("user_sid");
      res.clearCookie("token");
    }
    next();
  });
}

module.exports = initCookie;
