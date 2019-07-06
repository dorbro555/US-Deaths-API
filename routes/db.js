var express = require('express')
var router = express.Router()

router.get('/tester', (req, res) => {
  res.send('This is a test')
})

module.exports = router;