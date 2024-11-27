import React, { useEffect,useState } from 'react'
import Adh0 from '../Styles/AdHome0.module.css';
import Tabledetails from '../Pages/Tabledetails'
import img4 from '../Assets/h2_2.jpg';
import { PiUserCirclePlusThin } from "react-icons/pi";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Update from './Update';

const Adhome0 = () => {
  
  const [usert, setUsert] = useState([]); 
  const [upbool,setupbool]=useState(false);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 7; 
  const functiondata = async () => {
      try {
          const response = await axios.get("http://localhost:3030/retrievedata");
          console.log("API Response:", response.data);
          setUsert(response.data.data); 
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };

  const pageForward = () => {
      if (currentPage < Math.ceil(usert.length / itemsPerPage)) {
          setCurrentPage(currentPage + 1);
      }
  };

  const pageBackward = () => {
      if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
      }
  };

  const handleDeleteUser = async (userId) => {
      try {
          const response = await axios.post("http://localhost:3030/deletedata", { userId });
          toast.success(response.data.message);
          functiondata();
      } catch (error) {
          console.error("Error deleting user:", error);
      }
    };
    const [send,setsend]=useState([]);
    const handleupdateuser = async (userId) =>{
      setupbool(!upbool);
      setsend(userId);
    }

  const handlec= () =>{
    console.log("cancel click");
      setupbool(!upbool);
  }
  useEffect(() => {
      functiondata();
  },[upbool]);

  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = usert.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={Adh0.outertable}>
        <div style={{borderRight:'1px solid grey',paddingRight:'2em'}}>
        <img src={require('../Assets/undraw_dashboard_re_3b76.svg').default} alt='mySvgImage' className={Adh0.image0} />
        </div>
        <div className={Adh0.outertable2}>
            <div className={Adh0.outertable3}>
                <div>
                  <Link to="/login"><PiUserCirclePlusThin  size={30}/></Link>
                  </div>
                <div className={Adh0.icons}>   
                  <span><BsArrowLeftCircle size={20}  onClick={()=>{pageBackward()}} /></span>
                  <span>{currentPage} OF {Math.ceil(usert.length / itemsPerPage)} </span> 
                  <span> <BsArrowRightCircle size={20} onClick={()=>{pageForward()}} /> </span> 
                </div>
            </div>
              <div className={upbool ? Adh0.view2 :Adh0.view1}>
                 <Update data={send} cancel={handlec}/>
              </div>
              <div style={upbool ? { filter: "blur(7px)"} :{}}>
                <Tabledetails data={currentPageData} delete={handleDeleteUser} update={handleupdateuser} />
              </div>
        </div>
    </div>
  )
}

export default Adhome0