const mongoose = require('mongoose')

const gradescema = mongoose.Schema({
    name:{
        type:String,
        
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

module.exports = mongoose.model('grad', gradescema)