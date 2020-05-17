//server/server.js
var express = require("express");
var router = require("./routes/routes.js");
var path = require("path");
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authConfig = require("./auth/config");
const session = require("express-session");

//const authConfig = require("../public/storage/imgs");

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

app.use((err, req, res, next) => {
  //console.log("req.sessionID", req.sessionID);
  // console.log("req.session actual", req.session);
  // console.log("req.session id", req.sessionID);
  // console.log("req.cookies.token ", req.cookies.token);
  // console.log("req.cookies.user ", req.cookies.user);
  // console.log("req.session.email ", req.session.email);
  console.log("This is the invalid field ->", err.field);

  if (req.cookies.token && !req.session.email) {
    console.log("limpiadas cookies");
    var d = new Date();
    console.log(d.getDate());
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

//app.use("/public", express.static(`${__dirname}/public/storage/imgs`));

var cadena = __dirname.substring(0, __dirname.length - 6);
console.log("cadena : ", cadena);

app.use("/public", express.static(cadena + "public/storage/imgs"));
///home/diego/Documentos/react/cloud/

console.log("__dirname ", __dirname);

app.use("/", router);

module.exports = app;
