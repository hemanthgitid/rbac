import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import ncss from '../Styles/Sidenavbar.module.css'
import { AiOutlineLogin } from "react-icons/ai";
import logo from '../Assets/companylogo.webp'
import Cookies from 'js-cookie';
import { AiOutlineLogout } from "react-icons/ai";
const Sidenavbar = () => {
const[Isloged,Setloged]=useState(false);
 const username=localStorage.getItem("User");
 const Role=localStorage.getItem("Role");

  useEffect(()=>{
       const data=Cookies.get('token');
       if(data){
          Setloged(true);
        }
        else 
        {
          Setloged(false);
        }
  },[]);
  const handleout = () =>{
    Cookies.remove("token");
    Setloged(false);
    localStorage.removeItem("User");
    localStorage.removeItem("Role");
  }
  return (
      <div className={ncss.overallnav}>
          <div>
             <img src={logo} alt='logo' width={50} height={50}/>
             <span>WINOWSAR</span>
          </div>
         <nav>
           <ul>
          </ul>
        </nav>
        <div className={ncss.tagnamehome}>
          {
              Isloged &&  username ?
              <span onClick={handleout}>
                {
                  Role=='"user"' &&
                `👋Hello ! ${username} `
                }
                <span >
                    <AiOutlineLogout />
                    </span>
              </span>
              :
              <div>
                  <span> 
                  <Link to="/login" className={ncss.sd} >
                    Sign in / Sign up
                  </Link>
                  </span>
                    <AiOutlineLogin style={{marginLeft:'10px', fontSize:'20px'}}/>
                </div>
          }
        </div>

      </div>
  )
}

export default Sidenavbar
