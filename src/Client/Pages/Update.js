import React, { useEffect, useState } from 'react';
import up from '../Styles/Update.module.css';
import toast from 'react-hot-toast';
import axios from 'axios';
const Update = ({data:send ,cancel:handlec}) => {
  console.log(send);
//  const [sad,se]=useState
const handleChange = (e) => {
  console.log(e);
  const { name, value } = e.target;
  console.log(name,value);
  setFormData((prev) => ({
      ...prev,
      [name]: value,
  }));
};

const [formData, setFormData] = useState({
  id:'',
  name:'',
  email:'',
  phone_number:'',
  Role:'',
  status:''
});

const regex = {
  name: /^[a-zA-Z\s-]{1,50}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  pws: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  phone: /^[6-9]\d{9}$/,
  role:/\b(user|admin)\b/
};
const updateinadminpage=()=>{
  const isname = regex.name?.test(formData.name);
  const isemail = regex.email?.test(formData.email);
  const isphone = regex.phone?.test(formData.phone_number);
  if(isname){
    if(isemail){
      if(isphone){
        const callingupdate = async() =>{
              try {
                const response = await axios.put("http://localhost:3030/updateform", {formData});
                toast.success(response.data.message);
                handlec();
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }
        callingupdate();
      }
      else
      toast.error("Please verify number");
  }
  else
    toast.error("Please verify email");
}
else
toast.error("Please verify name");
}
useEffect(()=>{
  setFormData({
      id:send._id,
      name: send.name,
      email: send.email,
      phone_number: send.phone_number,
      Role:send.Role,
      status:send.status,
    });
},[send]);

  return (
    <div className={up.outerupdate}>
            <div>
            <div>
                <label htmlFor="name">Name:</label>
                <div>
                <input type="text" name="name" 
                 value={formData.name}
                 onChange={handleChange}
                />
                </div>
            </div>

          <div>
            <label htmlFor="email">Email:</label>
            <div>
              <input type="email" name="email"   value={formData.email}  onChange={handleChange} />
            </div>
          </div>

          <div>
            <label htmlFor="num">Phone:</label>
            <div>
              <input type="number" name="phone_number"  value={formData.phone_number}  onChange={handleChange} />
            </div>
          </div>

          <div>
            <label htmlFor="role">Role:</label>
            <div>
              <select name="Role"  value={formData.Role}  onChange={handleChange}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="status">Status:</label>
            <div>
              <select name="status"  value={formData.status}  onChange={handleChange}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{
            display:'flex',
            minWidth:"350px",
            justifyContent:"space-between",
        }}>
          <button style={{cursor:"pointer"}} onClick={()=>handlec()}  >CANCEL</button>
          <button style={{cursor:"pointer"}} onClick={()=>{updateinadminpage()}} >UPDATE</button>
        </div>
       
    </div>
  );
};

export default Update;
