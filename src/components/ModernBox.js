import React from 'react'
import Background from '../images/modernBG.jpg';

import '../styles/App.css';

const ModernBox = () => {
    return (
      <div
      className="randomcontainer"
      style={{ 
        backgroundImage: `url(${Background})`}}>
      </div>
    )
  }

export default ModernBox;