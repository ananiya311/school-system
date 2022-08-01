const mongoose = require('mongoose')

const grade = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    subjuct:{
        type:String,
        required:true
    },
    grad:{
        type:String,
        required:true
    }
})