const express = require('express')
const router =  express.Router()
const userModel = require('../models/userModel')

// {
//     "User_Name":"Yash Talathi",
//     "User_Email":"ypt@gmail.com",
//     "Mobile_No": "12345"
// }

//Select All
router.get('/', async(req,res)=>{
    try{
        const users = await userModel.find()
        res.json(users)
        console.log("Data is successfully fetch from server")
    }catch(err){
        res.send("Error:", err)
    }

});

//Insert - using postman
router.post('/', async(req,res)=>{
    const userDoc = new userModel(
     {
        User_Name: req.body.User_Name,
        User_Email: req.body.User_Email,
        Mobile_No: req.body.Mobile_No
    })
    try{
        const users = await userDoc.save()
        res.json(users)
        console.log("Data is successfully inserted into the server")
    }catch(err){
        res.send("Error:", err)
    }
})

//Select one
router.get('/:id', async(req,res)=>{
    try{
        const user = await userModel.findById(req.params.id)
        res.json(user)
        console.log("Data is successfully fetch from server")
    }catch(err){
        res.send("Error:", err)
    }

});

//Update

router.patch('/:id',async(req,res)=>{
    try{
        const user = await userModel.findById(req.params.id)
        user.Address = req.body.Address
        const updatedUser = await user.save()
        res.json(updatedUser)
    }catch(err){
        res.send("Error:",err)
    }
})

router.delete('/delete', async(req,res)=>{
    try{
        const deletedUsers = await userModel.deleteMany({User_Name:"Yash Talathi"})
        res.json(deletedUsers)

    }catch(err){
        res.send("Error:",err)
    }
})
module.exports = router