var mongoose =  require('mongoose')

var testSchema = new mongoose.Schema({

    firstName : {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    // address: {
    //     addressLine:{
    //         type:String,
    //         required:true
    //     },
    //     status:{
    //         type:Boolean,
    //         default:false
    //     }
        
    // },

    // address1: {
    //     addressLine:{
    //         type:String
            
    //     },
    //     status:{
    //         type:Boolean,
    //         default:false
    //     }
    // },

    // address4: {
    //     addressLine:{
    //         type:String
            
    //     },
    //     status:{
    //         type:Boolean,
    //         default:false
    //     }
    // },
    
    address: [
        {
            addressLine: String,
            status: Boolean
        }
    ]
})

var Test = mongoose.model('Test',testSchema)

module.exports = Test 