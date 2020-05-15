//server/routes/routes.js
var express = require("express");
var router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const verifyToken = require("../verifyToken");
//const imagenes = require("../controllers/imagenes");

var upload = require("../middleware/storage");
var { addImage } = require("../controllers/imagenesController");
var { addVideo } = require("../controllers/videoController");
var { addFile } = require("../controllers/fileController");
var { addFileMusic } = require("../controllers/fileMusicController");
var { login } = require("../controllers/login");
var { logOut } = require("../controllers/logOut");
var { register } = require("../controllers/registerController");
var { userloged } = require("../controllers/userlogedController");

//peticion para subir 1 imagen
router.post("/image", verifyToken, upload.single("image"), addImage);

const Image = require("../models/Image");
router.get("/imagenes", async (req, res) => {
  const imagenes = await Image.find();
  //console.log(imagenes)
  res.send({ imagenes });
  res.end();
});

//peticion para subir 1 video
router.post("/video", verifyToken, upload.single("video"), addVideo);

// //peticion para subir 1 file
router.post("/file", verifyToken, upload.single("file"), addFile);

// //peticion para subir 1 fileMusic
router.post(
  "/fileMusic",
  verifyToken,
  upload.single("fileMusic"),
  addFileMusic
);

router.get("/", function (req, res) {
  res.render("index");
});

//comprueba que ruta que lleve esta comprobacion es por que usuario ya se ha logado
router.get("/checkToken", verifyToken, function (req, res) {
  res.sendStatus(200);
});

router.get("/userloged", verifyToken, userloged);

router.route("/register").post(register);

router.route("/login").post(login);

router.get("/logout", logOut);

module.exports = router;
