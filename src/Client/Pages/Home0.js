import React from 'react';
import ch from '../Styles/Home0.module.css';
import Navbar from '../Pages/Navbar';
import Sidenavbar from './Sidenavbar';

const Home0 = () => {
  return (
    <div className={ch.overall}>
        {/* <Navbar /> */}
        <Sidenavbar />
      <div className={ch.centerdiv}>
        <h3>Find the Best</h3>
        <h1>MODERN APARTMENT IN</h1>
        <h1>A NEW RESIDENTIAL COMPLEX</h1>
        <button>EXPLORE ME</button>
      </div>
    </div>
  );
};

export default Home0;