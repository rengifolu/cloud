//server/routes/routes.js
var express = require('express');
var router = express.Router();

var User = require('../../server/models/User');

router.get('/', function (req, res) {
  res.render('index')
});


router.route('/register')
  .post(function (req, res) {
      console.log(req.body);
      var user = new User();
      user.description = req.body.desc;
      user.amount = req.body.amount;
      user.month = req.body.month;
      user.year = req.body.year;
      user.save()
        .then(() => {
          res.send('user successfully added!')
          console.log('user successfully added!');
        })
        .catch(err => {
          res.status(400).send('err : ' +err)
          console.log('user successfully added!')
      });
  })


module.exports = router;