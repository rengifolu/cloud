//server/routes/routes.js
var express = require('express');
var router = express.Router();

var User = require('../../server/models/User');

router.get('/', function (req, res) {
  res.render('index')
});


router.route('/register')
  .post(function (req, res) {
      //console.log(req.body);
      var user = new User();
      user.first_name = req.body.first_name;
      user.last_name = req.body.last_name;
      user.user_name = req.body.user_name;
      user.email = req.body.email;
      user.password = req.body.password;
      user.save()
        .then(() => {
          res.send('user successfully added!')
          console.log('user successfully added!');
        })
        .catch(err => {
          res.status(400).send('err : ' +err)
          console.log('error! ' + err);
      });
  })


module.exports = router;