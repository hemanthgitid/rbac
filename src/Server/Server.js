
require('dotenv').config()
const express=require('express');
const cors=require('cors')
const app=express();
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const path = require('path');

const Db=require('./Utils/db.js');
Db();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true,
  methods:["GET","POST","DELETE","PUT"],
}))
app.use(cookieParser());
const jwt=require('jsonwebtoken');
const signup = require('./Model/Userdetails.js');

const PORT=process.env.PORT || 5000;

app.post('/sigup', async (req, res) => {    
    try {
      const {name,email,password,phone_number}=req.body; 
       const hashedPassword = await bcrypt.hash( password,10);
        const alreadySignedUp = await signup.findOne({ email: req.body.email }); 
        if (alreadySignedUp) {
            return res.status(401).json({ success: false, message: "User already signed up" });
        } else {
            const signup_Data = new signup({name,email,password:hashedPassword,phone_number}); // Correct model usage
            await signup_Data.save();
            res.status(200).json({ success: true, message: "Signup successful" });
        }
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({ success: false, message: "Internal server error. Please try again later." });
    }
  });

  

app.post('/sigin', async (req, res) => {
    try {
      // console.log(req.body.Role);
      const in_db = await signup.findOne({ email:req.body.email, Role:req.body.Role});
      const in_db1 = await signup.findOne({ email:req.body.email,status:'active'});
      // console.log(in_db1);
       if (in_db) {
        if( in_db1==null){
          return res.status(403).json({ success: false, message: "Admin Restricted You!!"});
        }
          const validuser = await bcrypt.compare(req.body.password, in_db.password);
        if (validuser) {
            const token = jwt.sign({ email:in_db.email}, process.env.SECRET, { expiresIn:'1h'});
            res.cookie('token', token, { httpOnly:false,secure: false, sameSite: 'lax' ,maxAge:3600000});
            
            res.status(200).json({ success: true, message: "Login Successful", data:{email:req.body.email,name:req.body.name,Role:in_db.Role}});
        } else {
          return res.status(401).json({ success: false, message: "Invalid Password" });
        }
      } 
      else {
        return res.status(404).json({ success: false, message: "Invalid User" });
      }
    } catch (err) {
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
});

app.get('/retrievedata', async (req, res) => {
  try {
    const data = await signup.find();
    console.log('All Data:', data); 
    res.status(200).json({ success: true, message: "Retrieve Successful", data: data });
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(404).json({ success: false, message: "Invalid User" });
  }
});
app.post('/deletedata', async (req, res) => {
  try {
    const { userId } = req.body; 
    console.log(userId);
    const result = await signup.deleteOne({email:userId.email,name:userId.name,Role:userId.Role });
    if (result.deletedCount === 0) {
        return res.status(404).json({ success: false, message: "No users found with the specified role" });
    }
    res.status(200).json({ success: true, message: `${result.deletedCount} users deleted successfully` });
  } catch (error) {
    console.error("Error deleting users:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});










app.put('/Seller/Update',async(req,res)=>{
  const{name,id} =req.query;
  console.log(req.body);
  const updatadata=req.body;
   await imagem.findOneAndUpdate( { Property_ID: id, UserName:{ $regex: new RegExp(name, "i") } }, updatadata, { new: true })
  .then( (updatedItem) => {
    console.log('Item updated successfully:', updatedItem);
    return res.status(200).json({success:true,message:"Updates successfully"});
  }).catch( (error) => {
    console.error('Error updating item:', error);
  return   res.status(401).json({success:false,message:"error occured"});
});
});





app.put('/updateform',async(req,res)=>{
  const { formData } = req.body; 
  console.log(formData);
  await signup.findOneAndUpdate( { _id: formData.id}, formData, { new: true })
  .then( (formData) => {
    console.log('Item updated successfully:', formData);
    return res.status(200).json({success:true,message:"Updates successfully"})
  }).catch( (error) => {
    console.error('Error updating item:', error);
  return   res.status(401).json({success:false,message:"error occured"});
  })
});

app.listen(PORT,()=>{
    console.log(`server running ${PORT}`);
});
   
   