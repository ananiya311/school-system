const data = require('../modaile/databace')

const RegistarStudent = async (req, res)=>{
    const student = await data.create(req.body)
    res.json({msg:"done!!!"})
    const {name} = student
    console.log(name)
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

module.exports = {
    RegistarStudent,
    viewStudent
}