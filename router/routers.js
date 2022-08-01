const controler = require('../controlers/studintInfo')
const router = require('express').Router()

router.route('/').post(controler.RegistarStudent).get(controler.viewStudent)
router.route('/:id').patch(controler.editStudentInfo)

router.route('/grad').get(controler.viewGrads).post(controler.grade)


module.exports = router

