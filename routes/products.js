const express = require('express')
const router =  express.Router()
const fs =  require('fs')
const productModel = require('../models/productModel')

var imagePath = 'D:/My_Projects/DeliveryApp_Sample/images/pavBhaji.jpg'

//Select All
router.get('/', async(req,res)=>{
    try{
        const docs = await productModel.find()
        console.log(docs)
        res.status(200).render("productCard",{products:docs})
        console.log("Data is successfully fetch from server")
    }catch(err){
        res.send("Error:", err)
    }

});

//Show all
router.get('/show', async(req,res)=>{
    try{
        res.render('productCard')
        //const products = await productModel.find()
        //res.json(products)
        //console.log("Data is successfully fetch from server")
    }catch(err){
        res.send("Error:", err)
    }

});

//Insert - using postman
router.post('/', async(req,res)=>{
    const productDoc = new productModel(
     {
        Name: req.body.Name,
        Price: req.body.Price,
        ImagePath: req.body.ImagePath
    })
    try{
        const products = await productDoc.save()
        //To store the image
        // const image = await productModel.updateOne({Name:req.body.Name},
        //     {Image:{
        //         data: fs.readFileSync(imagePath),
        //         contentType: 'image/jpg'
        //     }})
        res.json(products)
        console.log("Data is successfully inserted into the server")
    }catch(err){
        res.send("Error:", err)
    }
})

//Delete
router.delete('/delete', async(req,res)=>{
    try{
        const deletedProducts = await productModel.deleteMany({Name:'Vada Pav'})
        res.json(deletedProducts)

    }catch(err){
        res.send("Error:",err)
    }
})

//Select one - not in use
router.get('/:id', async(req,res)=>{
    try{
        const user = await userModel.findById(req.params.id)
        res.json(user)
        console.log("Data is successfully fetch from server")
    }catch(err){
        res.send("Error:", err)
    }

});


//Update - not in use
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


module.exports = router