const data = require('../modaile/databace')
const grads = require('../modaile/grade')

const RegistarStudent = async (req, res)=>{
    const student = await data.create(req.body)
    res.json(student)
}

const viewStudent = async (req, res)=>{
    const {sort, id: sid} = req.query
    let student = data
    
    if(sort){
        student = student.find().sort(sort)       
    }
    if(sid){
        student = student.findOne({id: sid})
        if(sort){
            student = student.sort(sort)
        }
    }else{
        student = student.find().sort('id')
        if(sort){
            student = student.sort(sort)
        }
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
    const {id, name} = student
    await grads.updateMany({id: id},{$set: {name: name}})
    
}

const deleltStudentInof = async(req, res)=>{
    const {id:sid}= req.params
    const student = await data.findOneAndDelete({_id:sid})
    const {id} = student
    const temp = await grads.deleteMany({id:id})
    res.json(student)
    

}

const grade = async(req, res)=>{
    const grad = await grads.create(req.body)
    const {_id:gid, id} = grad
    const {name} = await data.findOne({id: id})
    const test = await grads.findOneAndUpdate({_id:gid}, {name: name})
    res.json(gid);
}

const viewGrads= async(req, res)=>{
    let{id: sid} = req.query
    let student = grads
    if(sid){
        student = student.find({id:sid})
    }else{
        student = student.find()
    }
    const resalt = await student.sort('id')
    res.json(resalt)
}

const editGrad = async(req, res)=>{
    const {id} = req.params
    const grade = await grads.findOneAndUpdate({_id:id}, req.body, {
        new:true,
        runValidators:true
    })
    res.json(grade)
}

const deleteGrad = async(req, res)=>{
    const {id} = req.params
    const grade = await grads.findByIdAndDelete({_id:id})
    res.json(grade)
}


module.exports = {
    RegistarStudent,
    viewStudent,
    editStudentInfo,
    deleltStudentInof,
    viewGrads,
    grade,
    editGrad,
    deleteGrad
}