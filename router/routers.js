const controler = require('../controlers/studintInfo')
const router = require('express').Router()

router.route('/').post(controler.RegistarStudent).get(controler.viewStudent)
router.route('/:id').patch(controler.editStudentInfo).delete(controler.deleltStudentInof)

router.route('/grad').get(controler.viewGrads).post(controler.grade)
router.route('/grad/:id').patch(controler.editGrad).delete(controler.deleteGrad)


module.exports = router

