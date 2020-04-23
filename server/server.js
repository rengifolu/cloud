//server/server.js
var express = require("express");
var router = require("./routes/routes.js");
var path = require("path");
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authConfig = require("./auth/config");
const session = require("express-session");

//const initCookie = require("./middleware/initCookie");

var app = express();
app.use(cookieParser());
//initCookie(app);

////////////////sesion//////////////
app.use(
  session({
    key: "user",
    secret: authConfig.secret,
    saveUninitialized: true,
    resave: true,
    cookie: {
      expires: authConfig.expireTime,
    },
  })
);

app.use((req, res, next) => {
  //console.log("req.sessionID", req.sessionID);
  console.log("req.session actual", req.session);
  console.log("req.session id", req.sessionID);
  console.log("req.cookies.token ", req.cookies.token);
  console.log("req.cookies.user ", req.cookies.user);
  console.log("req.session.email ", req.session.email);

  if (req.cookies.token && !req.session.email) {
    console.log("limpiadas cookies");
    //res.clearCookie("user_sid");
    res.clearCookie("user");
    res.clearCookie("token");
  }
  next();
});
/////////////////////////////////////
var mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../client"));
app.use(express.static(path.join(__dirname, "../client")));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));

mongoose.connect(
  "mongodb+srv://diego:peru@clustercloud-trmk9.mongodb.net/mycloud?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.use("/", router);

module.exports = app;
