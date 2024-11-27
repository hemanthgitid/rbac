const mongo = require('mongoose');

const signup_schema = new mongo.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,   
    },
    password:{
        type:String,
        trim:true,
        required:true,   
    },
    phone_number:{
        type:String,
        trim:true,
        required:true,   
    },
    Role:{
        type:String,
        default:"user"
    },
    status:{
        type:String,
        default:"active"
    }
})

const Signup =mongo.model("UserDetails",signup_schema);

module.exports = Signup;