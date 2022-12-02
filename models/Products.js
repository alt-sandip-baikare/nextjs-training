const { default: mongoose } = require("mongoose")

const RatingSchema = mongoose.Schema({
    rate: {
        Number
    },
    count: {
        Number
    }
})

const ProductsSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
    },
    category:{
        type: String,
    },
    description:{
        type: String,
    },
    image:{
        type: String
    },
    rating: RatingSchema
})

mongoose.models = {};

var Products = mongoose.model('Products', ProductsSchema);

export default Products;

