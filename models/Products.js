const { default: mongoose } = require("mongoose")

const ProductsSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true,
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
    }
})

mongoose.models = {};

var Products = mongoose.model('Products', ProductsSchema);

export default Products;

