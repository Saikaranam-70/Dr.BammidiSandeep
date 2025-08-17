import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home';
import './App.css'
import About from './Components/About/About';
import { Route, Routes } from 'react-router-dom';
import CancerInfo from './Components/CancerData/CancerInfo';
import Testimonials from './Components/Testimonials/Testimonials';
import ContactPage from './Components/Contact/ContactPage';
import Certifications from './Components/Certifications/Certifications';

const App = () => {
  const[sidebarOpen, setSidebar] = useState(false);
  return (
    <>
    <Navbar toggleSidebar={()=>setSidebar(!sidebarOpen)}/>
    <div className="sideandall">
      <div className="side">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={()=>setSidebar(false)} />
      </div>
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/knowyourcancer' element={<CancerInfo />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/certifications' element={<Certifications />} />
      </Routes>
    </div>
    </div>
    </>
  )
}

export default App
