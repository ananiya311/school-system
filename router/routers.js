const controler = require('../controlers/studintInfo')
const router = require('express').Router()

router.route('/').post(controler.RegistarStudent).get(controler.viewStudent)

module.exports = router

