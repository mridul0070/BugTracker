const express = require('express')
const router = express.Router()

const {
    addBug,
} = require('../controllers/bugman')




router.route('/').post(addBug)

module.exports = router