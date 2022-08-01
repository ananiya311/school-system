const mongoose = require('mongoose')

const studetndata = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:[true, "name is required"],
    },
    age:{
        type:Number,
        required:true
    },
    departemnt:{
        type:String,
        required:true
    },
    saction:{
        type:String,
        required:true
    },
    inrollmentDate:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('studentInfo', studetndata)