// import React, { useState } from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Sidebar from './Components/Sidebar/Sidebar'
// import Home from './Components/Home/Home';
// import './App.css'
// import About from './Components/About/About';
// import { Route, Routes } from 'react-router-dom';
// import CancerInfo from './Components/CancerData/CancerInfo';
// import Testimonials from './Components/Testimonials/Testimonials';
// import ContactPage from './Components/Contact/ContactPage';
// import Certifications from './Components/Certifications/Certifications';
// import Organisations from './Components/Organisations/Organisations';
// import Awards from './Components/Awards/Awards';

// const App = () => {
//   const[sidebarOpen, setSidebar] = useState(false);
//   return (
//     <>
//     <Navbar toggleSidebar={()=>setSidebar(!sidebarOpen)}/>
//     <div className="sideandall">
//       <h1 style={{ display: 'none' }}>Dr. Bammidi Sandeep – Surgical Oncologist in Srikakulam, Vizianagaram & Uddanam</h1>
//       <div className="side">
//         <Sidebar isOpen={sidebarOpen} toggleSidebar={()=>setSidebar(false)} />
//       </div>
//     <div >
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about-dr-bammidi-sandeep' element={<About />} />
//         <Route path='/knowyourcancer' element={<CancerInfo />} />
//         <Route path='/testimonials' element={<Testimonials />} />
//         <Route path='/contact' element={<ContactPage />} />
//         <Route path='/certifications' element={<Certifications />} />
//         <Route path='/organisations' element={<Organisations />} />
//          <Route path='/awards' element={<Awards />} />
//       </Routes>
//     </div>
//     </div>
//     </>
//   )
// }

// export default App
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import './App.css';
import About from './Components/About/About';
import { Route, Routes } from 'react-router-dom';
import CancerInfo from './Components/CancerData/CancerInfo';
import Testimonials from './Components/Testimonials/Testimonials';
import ContactPage from './Components/Contact/ContactPage';
import Certifications from './Components/Certifications/Certifications';
import Organisations from './Components/Organisations/Organisations';
import Awards from './Components/Awards/Awards';

const App = () => {
  const [sidebarOpen, setSidebar] = useState(false);

  return (
    <>
      <Navbar toggleSidebar={() => setSidebar(!sidebarOpen)} />

      {/* ✅ Sidebar should NOT be wrapped inside .side */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebar(false)} />

      <div className="sideandall">
        <h1 style={{ display: 'none' }}>
          Dr. Bammidi Sandeep – Surgical Oncologist in Srikakulam, Vizianagaram & Uddanam
        </h1>

        

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-dr-bammidi-sandeep" element={<About />} />
            <Route path="/knowyourcancer" element={<CancerInfo />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/organisations" element={<Organisations />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </div>
        <div className="side" /> {/* Placeholder only for spacing in desktop */}
      </div>
    </>
  );
};

export default App;
