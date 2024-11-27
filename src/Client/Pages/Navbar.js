import React from 'react'
import Navbarcss from '../Styles/Navbar.module.css'
import img from '../Assets/images.png'
import { Link, useNavigate } from 'react-router-dom'

import { AiOutlineLogout } from "react-icons/ai";
const Navbar = () => {
  const adminname=localStorage.getItem('User');
  const navigate=useNavigate("");
  const adminlogout = () =>{
    localStorage.removeItem('User');
    localStorage.removeItem('Role');
    navigate("/");
  }
  
  return (
    <div className={Navbarcss.outernav}>
          <div><img src={img} width={70} height={50}/></div>
          <div style={{display:'flex',minWidth:'100px',alignItems:'end'}} onClick={()=>{adminlogout()}}  > 
            <span><Link to="/" style={{textDecoration:'none'}} >👋 Hey! {adminname}</Link></span>
              <span style={{marginLeft:'0.5em'}}> <AiOutlineLogout /></span>
          </div>
    </div>
          // <hr />
  )
}

export default Navbar