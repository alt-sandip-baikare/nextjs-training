const { default: mongoose } = require("mongoose")

const Address = mongoose.Schema({
    fullAddress: {
        type: String
    },
    pincode: {
        type: Number,
        maxLength: 5
    }
})

const UsersSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true
    },
    mobile:{
        type: Number,
        unique: true,
        maxLength: 10
    },
    fullname:{
        type: String,
    },    
    avatar:{
        type: String
    },
    address: Address
})

mongoose.models = {};

var Users = mongoose.model('Users', UsersSchema);

export default Users;

