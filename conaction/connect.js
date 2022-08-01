const mongoose = require('mongoose')

const connectDB = (URL)=>{
    mongoose.connect(URL,{
        useFindAndModify:false,
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>(console.log('the databace is connected.........')))
}

module.exports = connectDB