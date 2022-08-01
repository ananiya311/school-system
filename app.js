const expserss = require('express')
const connectDB = require('./conaction/connect')
const app = expserss()
const route = require('./router/routers')
require('dotenv').config()

const port  = 1111
app.use(expserss.json())
app.use('/api/v1/student', route)




const start = async ()=>{
    await connectDB(process.env.URI_DB)
    app.listen(port, console.log('the port is runing', port))
}
start()