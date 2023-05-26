const express=require('express')
const logic=require('./service/logic')

const server=express()  
const cors=require('cors')
 server.use(cors({origin:'http://localhost:3000'}))

 server.use(express.json())

 server.listen(8000,()=>{
    console.log("server started at port 8000");
 })

   // api call to add a user
 server.post('/addUser',(req,res)=>{
    logic.addUser(req.body.id,req.body.uname,req.body.Dob,req.body.email,req.body.salary,req.body.gender).then(result=>{
        res.status(result.statusCode).json(result)
    })
 })
//  api call to get all users
 server.get('/getAllUser',(req,res)=>{
    logic.allUser().then(result=>{
        res.status(result.statusCode).json(result)
    })
 })

//  api call to delete a user
 server.delete('/deleteUser/:id',(req,res)=>{
    logic.removeUser(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
 })

//  api call to add a user
 server.get('/getAnUser/:id',(req,res)=>{
    logic.getAnUser(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
 })

//  api call to edit a user
 server.post('/editUser',(req,res)=>{
    logic.editUser(req.body.id,req.body.uname,req.body.Dob,req.body.email,req.body.salary,req.body.gender).then(result=>{
        res.status(result.statusCode).json(result)
    })
 })