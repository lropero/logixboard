const express = require('express')

const router = express.Router()
router.get('/shipments', require('./shipments'))

module.exports = router
