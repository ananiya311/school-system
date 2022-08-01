const data = require('../modaile/databace')
const grads = require('../modaile/grade')

const RegistarStudent = async (req, res)=>{
    const student = await data.create(req.body)
    res.json(student)
}

const viewStudent = async (req, res)=>{
    const {sort} = req.query
    let queryob = {}
    let student = data.find()
    if(sort){
        student = student.sort(sort)        
    }
    const resalt = await student
    res.json(resalt)
}

const editStudentInfo = async(req, res)=>{
    const {id:studentID} = req.params
    const student = await data.findOneAndUpdate({_id:studentID},req.body,{
        new:true,
        runValidators:true
    })
    res.json(student)
}

const grade = async(req, res)=>{
    const grad = await grads.create(req.body)
    const {_id:sid, id:Gid} = grad
    const {name} = await data.findOne({id:Gid})
   
    const resalt = await grads.findOneAndUpdate({_id:sid},{name:name},{
        new:true,
        runValidators:true
    })
    res.json(resalt)
}

const viewGrads= async(req, res)=>{
    const grad = await grads.find().sort('id')
    res.json(grad)
}

const editGrad = async(req, res)=>{
    const {id} = req.params
    const grade = await grads.findOneAndUpdate({id:id}, req.body, {
        new:true,
        runValidators:true
    })
    res.json(grade)
}

module.exports = {
    RegistarStudent,
    viewStudent,
    editStudentInfo,
    viewGrads,
    grade,
    editGrad
}