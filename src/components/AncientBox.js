import React from 'react'
import Background from '../images/ancientBG.jpg';

import '../styles/App.css';

const AncientBox = () => {
    return (
      <div
      className="randomcontainer"
      style={{ 
        backgroundImage: `url(${Background})`}}>
      </div>
    )
  }

export default AncientBox;