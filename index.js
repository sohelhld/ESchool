let express = require('express')
const { Connected } = require('./db')
const { userRouter } = require('./routes/user.route')
require("dotenv").config()
let app = express()

app.use(express.json())

app.use("/",userRouter)

app.get('/',(req,res)=>{
    res.send("ok")
})

app.listen(process.env.port,async(req,res)=>{
    try {
        await Connected
        console.log("db is connected")
        
    } catch (error) {
        console.log(error)
    }
    console.log("server is running on port `${process.env.port}` ")
})