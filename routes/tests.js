const express = require('express')
const router =  express.Router()
const testModel = require('../models/testModel')

router.get('/',async(req,res)=>{
    try{
        res.render("myForm")
    }catch(err){
        res.send("Error:",err)
        console.log(err)
    }
})

//Insert
router.post('/createDoc', async(req,res)=>{
    const testDoc = new testModel(
     {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        
    })
   
        var addressObj = {addressLine: req.body.address, status:false}
        await testDoc.save((err,docs)=>{
            if(err){
                console.log(err)
            }else{
                console.log(docs)
            }
        })
        
        // const addArray = await testModel.findOneAndUpdate({firstName:req.body.firstName},
        //     {$push:{address:adressObj}}, (err,Success)=>{
        //         if(err){
        //             console.log(err)
        //         }else{
        //             console.log(Success)
        //         }
        //     })


        // const up = await testModel.updateOne({firstName:req.body.firstName},
        //     {
        //     address:{addressLine:req.body.address},
        //     address1:{adressLine:req.body.address1},
        //     address4:{adressLine:req.body.address4}
        // }) 
        
        console.log(test)
        //res.status(200).send(req.body)
        
        return res.redirect("/tests/successPage")

    // }catch(err){
    //     const err_status = err.status || 500
    //     res.status(err_status).json(err)
    // }
})

//Select all
router.get('/showData', async(req,res)=>{
    try{

        const tests = await testModel.find()
        res.json(tests)
        console.log("Data is successfully fetch from server")

    }catch(err){

        res.send("Error:", err)
    }

})

//Profile - edit page to enter the record to be edited
router.get('/editPage',async(req,res)=>{
    try{
        res.render("editPage")

    }catch(err){

        res.status(400).send("Error:",err)
        console.log(err)
    }
})

//Profile edit- form
router.post('/editForm',async(req,res)=>{
    await testModel.find({ firstName: 'Sanil' }, (err,docs)=>{
        if(err){
            res.send("Error:",err)
        }
        else{
            console.log(docs)
            res.render("editForm", {users : docs})
        }
    })
})

//Updated the edited record in the db
router.post('/updateDoc:id',async(req,res)=>{
    try{
        
        var id = req.params.id
        
        var newid = id.split(":")[1]
        
        const user = await testModel.updateOne({_id:newid},{firstName:req.body.firstName,
        lastName:req.body.lastName})
        
        console.log(user)
    }catch(err){
        res.send("Error:",err)
    }
})

//Test - example for editForm
router.get('/profile',async(req,res)=>{
    await testModel.find({ firstName:"Rohit" }, (err,docs)=>{
        if(err){
            res.status(400).send("Error:",err)
        }
        else{
            res.status(201).render("profileDetails", {users : docs})
        }
    })
})


//To show Success msg
router.get('/successPage',async(req,res)=>{
    try{
        res.render("successPage")

    }catch(err){

        res.status(400).send("Error:",err)
        console.log(err)
    }
})

router.get('/add',async(req,res)=>{
    try{
        res.render("addressEntry")

    }catch(err){

        res.send("Error:",err)
        console.log(err)
    }
})

router.get('/delete', async(req,res)=>{
    try{
        const deletedUsers = await testModel.deleteMany({firstName:"Sanil"})
        res.json(deletedUsers)

    }catch(err){
        res.send("Error:",err)
    }
})

router.get('/choose',async(req,res)=>{
    await testModel.find({ firstName:"Sanil" }, (err,docs)=>{
        if(err){
            res.status(400).send("Error:",err)
        }
        else{
            res.status(201).render("chooseAddress", {users : docs})
        }
    })
})

router.post('/selectedAddress', async(req,res)=>{
    
    try{
        
        const user = await testModel.updateOne({firstName:"Sanil"},{firstName:req.body.firstName,lastName:req.body.lastName})
        console.log(req.body.a)
        res.json(req.body)
        //return res.status(200).redirect("/tests/successPage")

    }catch(err){
        res.status(400).send("Error:", err)
    }
})

module.exports = router