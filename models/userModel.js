var mongoose =  require('mongoose')

var userSchema = new mongoose.Schema({

    User_Name : {
        type: String,
        required: true
    },

    User_Email: {
        type: String,
        required: true
    },

    Mobile_No: {
        type: Number,
        reuired: true
    },

    Address: {
        type: String,

    }

})

var User = mongoose.model('User',userSchema)

module.exports = User 