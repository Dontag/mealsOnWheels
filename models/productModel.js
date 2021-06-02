var mongoose =  require('mongoose')

var productSchema = new mongoose.Schema({

    Name : {
        type: String,
        required: true
    },

    // Image: {
    //     data:Buffer,
    //     contentType: String
    //},
    
    ImagePath:{
        type: String,
        required: true
    },

    Price: {
        type: Number,
        required: true
    }

})

var Product = mongoose.model('Product',productSchema)

module.exports = Product 