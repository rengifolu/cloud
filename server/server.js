//server/server.js
var express = require("express");
var router = require("./routes/routes.js");
var path = require("path");
var bodyParser = require("body-parser");

const initCookie = require("./middleware/initCookie");

var app = express();
initCookie(app);
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
