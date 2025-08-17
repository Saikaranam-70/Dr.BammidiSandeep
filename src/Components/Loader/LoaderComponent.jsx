import React from 'react'
import logo from '../../assets/logo.png'
import logo2 from '../../assets/logo2.png'
import './LoaderComponent.css'

const LoaderComponent = () => {
  return (
    <div className="loader-wrapper">
      <div className="logos">
        <img src={logo} alt="Loading..." className="loader-svg" />
        <img src={logo2} alt="Loading..." className="loader-svg" />
      </div>
      <div className="name">
        <p>Dr. Bammidi Sandeep</p>
        <p>Cancer Specialist</p>
      </div>
    </div>
  )
}

export default LoaderComponent
