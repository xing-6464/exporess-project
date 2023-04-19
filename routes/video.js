const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function (req, res, next) {
  JSON.parse('');
});

module.exports = router;
