// https://localhost:4000/users

var express = require('express')
var mongoose =  require('mongoose')

const url = 'mongodb://localhost:27017/sampleDB'

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

var Users = require('./routes/users')
var Tests = require('./routes/tests')
var Products =  require('./routes/products')
var userModel = require('./models/userModel')

var app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))

app.set("view engine","hbs")

app.use(express.json())
app.use('/users',Users)
app.use('/tests',Tests) 
app.use('/products', Products)

// app.use((req, res, next) => {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
//     });
   

// app.use((err, req, res, next) => {
//     res.locals.error = err;
//     const status = err.status || 500;
//     res.status(status);
//     res.render('error');
//   });
  

mongoose.connect(url,{useNewUrlParser:true},{ useUnifiedTopology: true } ).then(()=>{
    console.log("Connected to database")

}).catch((err)=>{
    console.log("Error:", err)
})

// var conn = mongoose.connection

// conn.on('open', ()=>{
//     console.log("Connected...")
// })

app.listen(4000, ()=>{
    console.log("Server is Started")
})

// var userDoc = new userModel({User_Name:'Yash Talathi',User_Email:'ypt@gmail.com', Mobile_No: '123456'})
// userDoc.save().then(()=>{
//     console.log("Data is successfully inserted")
// }).catch((err)=>{
//     console.log("Error:", err)
// })