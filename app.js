const expserss = require('express')
const connectDB = require('./conaction/connect')
const app = expserss()
const route = require('./router/routers')
require('dotenv').config()


app.use(expserss.json())
app.use(expserss.static('./public'))

app.use('/api/v1/student', route)



const port  = 1111

const start = async ()=>{
    await connectDB(process.env.URI_DB)
    app.listen(port, console.log('the port is runing', port))
}
start()