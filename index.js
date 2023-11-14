require('dotenv').config()

//server
const express=require('express')
const cors=require('cors')
const router=require('./Routers/routes')


const server=express()

server.use(cors())
server.use(express.json())
server.use(router)
require('./Connections/connection')

//export uploads folder to client
server.use('/uploads',express.static('./uploads'))



const port=4000 || process.env.port
server.listen(port,()=>{
    console.log(`___EMS Server Started At Port ${port}__`);
})