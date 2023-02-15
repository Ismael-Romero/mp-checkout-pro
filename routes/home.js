const express = require('express');
const router = express.Router();
const path = require('path');
const pathFile = path.join(__dirname, '../', '/views/home.html');

router.get('/', function(req, res, next) {
  res.sendFile(pathFile);
});

module.exports = router;
