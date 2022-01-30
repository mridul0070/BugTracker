const express = require('express')
const { patch } = require('semver')
const router = express.Router()

const {
    addBug,
    getBugs,
    getoneBug,
    editBug, 
} = require('../controllers/bugman')




router.route('/').post(addBug).get(getBugs)
router.route('/:id').get(getoneBug).patch(editBug)

module.exports = router