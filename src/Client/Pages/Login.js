import React, {useState } from 'react'
import slide from '../Styles/Login.module.css';
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import cookie from 'js-cookie'
   const bcrpt = require('bcryptjs');
const Login = () => {
   const navigate= useNavigate();
   const [hup,sethup]=useState(false);
   const [fup,setfup]=useState(false);
   const [isSignUp, setIsSignUp] = useState(false);

   const handleSlideToggle = () => {
     setIsSignUp((prev) => !prev);
   };

   const regex = {
      name: /^[a-zA-Z\s-]{1,50}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      pws: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      phone: /^[6-9]\d{9}$/,
      role:/\b(user|admin)\b/
    };
    
    const [sx,setsx] =useState([
      {
         name:false,
         name1:"",
      },
      {
         email:false,
         email1:"",
      },
      {
         pws:false,
         pws1:"",
      },
      {
         role:false,
         role1:"",
      }
   ])
    const [sz,setsz] =useState([
      {
         name:false,
         name1:"",
      },
      {
         email:false,
         email1:"",
      },
      {
         pws:false,
         pws1:"",
      },
      {
         phone:false,
         phone1:"",
      }
   ])
   const handlesigin=(e)=>{
      const { name, value } = e.target;
      const isValid = regex[name]?.test(value);
      setsx((prevState) =>
         prevState.map((item) => {
            if (item.hasOwnProperty(name)) {
               return {
                  ...item,
                  [name]: isValid,          
                  [`${name}1`]: value,     
               };
            }
            return item;
         }
      )
   );
}
console.log(sx);
   
   const handlesigup = (e)=> {
      const {name,value}=e.target;
     const isValid = regex[name]?.test(value);
      setsz((prev)=>(
         prev.map((item)=>{
               if(item.hasOwnProperty(name)){
                  return {
                     ...item,
                     [name]:isValid,
                     [`${name}1`]:value
                  };
               }
               return item;
           })
      ))
   }
 
   const handlesubup =async (e) =>{
      e.preventDefault();
      if(sz[0].name && sz[1].email && sz[2].pws && sz[3].phone){
          const data2={
            name:sz.find((item)=>item.name)?.name1,
            email:sz.find((item)=>item.email)?.email1,
            password:sz.find((item) => item.pws)?.pws1,
            phone_number:sz.find((item)=>item.phone)?.phone1,
         }
         try{
               const data=await axios.post('http://localhost:3030/sigup',data2);
               if(data.status===200){
               toast.success(data.data.message);
               setTimeout(() => {
                  navigate("/");
               }, 2000);
            }
         }
         catch (error) {
           if (error.response && error.response.status === 401) {
             toast.error("Already Signed Up");
             setTimeout(()=>{
               navigate('/');
             },2000);
           } 
            else {
             toast.error("An error occurred. Please try again later."+error);
             window.location.reload();
           }
         }
      }
      else{
         toast.error("Please fill in all the required fields.");
           window.location.reload();
      }

   }
   const handlesubin = async (e) => {
      e.preventDefault();
      if (sx[0].name && sx[1].email && sx[2].pws){
        const data1 = {
          name: sx.find((item) => item.name)?.name1,
          email: sx.find((item) => item.email)?.email1,
          password: sx.find((item) => item.pws)?.pws1,
          Role:sx.find((item)=>item.role)?.role1,
        };
  
        try {
           const data_login = await axios.post("http://localhost:3030/sigin", data1,{withCredentials:true});
           console.log("its data");
           console.log(data_login.data.message);
         
           if (data_login.status === 200) {
            toast.success(data_login.data.message);
            localStorage.setItem("User",JSON.stringify(data_login.data.data.name).replaceAll("\"",""));
           
            localStorage.setItem("Role",JSON.stringify(data_login.data.data.Role));
            const role=data_login.data.data.Role;
           
            if(role==="admin"){
                  setTimeout(() => {
                  navigate("/AdminHome");
                  }, 1300);
            }
            else{
                  setTimeout(() => {
                  navigate("/");
                  }, 1000);
            }
          }
          
         } 
         catch (error) {
            if(error.status === 403) { 
                toast.error(error.response.data.message);
                window.location.reload(false);
            }
           else if (error.response && error.response.status === 401) {
            toast.error("Invalid credentials. Please check your email and password.");
            window.location.reload(false);
          } else if (error.response && error.response.status === 404) {
            toast.error("User not found / You're not admin. Please sign up first.");
            window.location.reload(false);
          } 
          else {
            toast.error("An error occurred. Please try again later."+error);
            window.location.reload(false);
          }
        }
      } else {
        toast.error("Please fill in all the required fields.");
      }
    };

  return ( 
    <div className={slide.overslide}>
               <div className={`${slide.outdiv} ${isSignUp ? slide.moveright : slide.move}`}></div>
         <div className={`${slide.twodiv1} ${hup ? slide.dynamicStyle1N : slide.dynamicStyle1F}`}>
               <div className={slide.for}>
                  <form id={slide.fin} onChange={(e)=>handlesigin(e)}  onSubmit={(e)=>handlesubin(e)} >
                     <h1>Sign in</h1>
                     <input type="text" name='name' placeholder='Name..' required/>
                     {
                        sx[0].name1.length>0?
                           sx[0].name ?
                           <span style={{color:'green'}}>correct *</span>
                           :
                           <span style={{color:'red'}}>incorrect *</span>
                       : null
                     }
                     <br/>
                     <input type="email" name='email' placeholder='Email..'  required/>
                     {
                        sx[1].email1.length>0?
                           sx[1].email ?
                           <span style={{color:'green'}}>correct *</span>
                           :
                           <span style={{color:'red'}}>incorrect *</span>
                      : null
                     }
                     <br/>
                     <input type="password"  name='pws' placeholder='Pws..' required/>
                     {
                        sx[2].pws1.length>0?
                           sx[2].pws ?
                           <span style={{color:'green'}}>correct *</span>
                           :
                           <span style={{color:'red'}}>incorrect *</span>
                      : null
                     }
                     <div className={slide.drop}>
                     <span style={{opacity:'0.7'}}>Role:</span>
                        <select name='role' className={slide.lis} >
                         
                           <option value='user'>User</option>   
                           <option value='admin'>Admin</option>   
                        </select>  
                     </div> 
                     <br/>
                      <button>SUBMIT</button>
                  </form>
               </div>
               <div className={`${slide.con} ${hup ? slide.dynamicStyle1N : slide.dynamicStyle1F}`}>
                           <div>
                                 <h1>Hello, Friend !</h1>
                                 <p>Enter your personal details and start journey with us</p>
                                 <button
                                  onClick={
                                     ()=>{
                                        handleSlideToggle();
                                        setTimeout( ()=>{
                                          sethup(!hup);
                                          setfup(!fup);
                                       },235);
                                       }} 
                                       >SIGN UP</button>
                           </div>
               </div>   
         </div>
   
      <div className={slide.twodiv2}>
            <div className={`${slide.con2} ${fup ? slide.dynamicStyle2F : slide.dynamicStyle2N}`}>
               <div >
                  <h1>Wellcome Back!</h1>
                  <p>To Keep connected with us please login with your personal info</p>
                  <button
                   onClick={
                      ()=>{
                        setTimeout( ()=>{
                           sethup(!hup);
                           setfup(!fup);
                        },235);
                         handleSlideToggle();
                        }}
                  >SIGN IN</button>
               </div>
            </div>
               <div className={`${slide.for2} ${fup ?slide.dynamicStyle2F:slide.dynamicStyle2N}`}>
                  <form  onChange={(e)=>handlesigup(e)} onSubmit={handlesubup}>
                  <h1>SIGN UP</h1>
                  <input type="text" name='name'  placeholder='Name..'   required/>
                  {
                        sz[0].name1.length>0?
                           sz[0].name ?
                           <span style={{color:'green'}}>correct *</span>
                           :
                           <span style={{color:'red'}}>incorrect *</span>
                       : null
                     }
                  <br/>
                  <input type="email" name='email'  placeholder='Email..'   required/>
                  {
                        sz[1].email1.length>0?
                           sz[1].email ?
                           <span style={{color:'green'}}>correct *</span>
                           :
                           <span style={{color:'red'}}>incorrect *</span>
                       : null
                     }
                  <br/>
                  <input type="password"  name='pws'   placeholder='Pws..'  required/>
                  {
                        sz[2].pws1.length>0?
                           sz[2].pws ?
                           <span style={{color:'green'}}>correct *</span>
                           :
                           <span style={{color:'red'}}>incorrect *</span>
                       : null
                     }
                  <br/>
                  <input type="text" name='phone'  placeholder='Phone..'  required/>
                  {
                        sz[3].phone1.length>0?
                           sz[3].phone ?
                           <span style={{color:'green'}}>correct *</span>
                           :
                           <span style={{color:'red'}}>incorrect *</span>
                       : null
                     }  
                  <button>SUBMIT</button>
                  </form>
               </div>
      </div>

    </div>
  )
}

export default Login
