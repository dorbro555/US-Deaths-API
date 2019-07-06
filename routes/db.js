var express = require('express')
var router = express.Router()

router.get('/test', (req, res) => {
  res.send('This is a test')
})

module.exports = router