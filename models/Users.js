const { default: mongoose } = require("mongoose")
const bcrypt = require('bcryptjs')

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
    id: {
        type: Number,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
        maxLength: 10
    },
    fullname: {
        type: String,
        required: true,
    },
    avatar: {
        type: String
    },
    address: Address
})

/**
 * Mongoose pre middleware function that will be called before any user document is saved or changed. 
 * And has the overall purpose of hashing the password whenever a user document is saved to the 
 * database with a new password value.
 * 
 */
UsersSchema.pre("save", function (next) {
    const user = this
    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
                return next(saltError)
            } else {
                bcrypt.hash(user.password, salt, function (hashError, hash) {
                    if (hashError) {
                        return next(hashError)
                    }
                    user.password = hash
                    next()
                })
            }
        })
    } else {
        return next()
    }
   
})

// Autoincrement ID
 UsersSchema.pre("save", function (next) {
    const user = this
    if(this.isNew) {
        mongoose.model('Users', UsersSchema).countDocuments(function(error, counter){
            if(error) return next(error);
            user.id = counter+1;
            next();
        });  
    }
})

UsersSchema.methods.comparePassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (error, isMatch) {
        if (error) {
            return callback(error)
        } else {
            callback(null, isMatch)
        }
    })
}


mongoose.models = {};

var Users = mongoose.model('Users', UsersSchema);

export default Users;
