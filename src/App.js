import React from 'react'
import Login from '../src/Client/Pages/Login'
import AdHome from './Client/Components/AdHome';
import { Routes,Route } from 'react-router-dom';
import UHome from './Client/Components/UHome';
import Update from './Client/Pages/Update';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/AdminHome" element={<AdHome />}/>
        <Route path="/" element={<UHome />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </div>
  )
}

export default App