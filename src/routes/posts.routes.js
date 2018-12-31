const router = require('express-promise-router')();

router.route('/')
  .get(function (req, res) {
    res.send({message: 'post routes!'});
  });


module.exports = router;
