const mongoose = require('mongoose'); // For CommonJS
const dotenv = require('dotenv'); 
const db =()=>{
    dotenv.config();
    mongoose.connect(process.env.db_string)
    .then(()=>{console.log("db connected")})
    .catch((e)=>{console.log("error in connection")});
}
module.exports=db;