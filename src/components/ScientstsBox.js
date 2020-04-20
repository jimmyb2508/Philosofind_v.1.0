import React from 'react'
import Background from '../images/scientistsBG.jpg';

import '../styles/App.css';

const ScientistsBox = () => {
    return (
      <div
      className="artistscontainer"
      style={{ 
        backgroundImage: `url(${Background})`}}>
      </div>
    )
  }

export default ScientistsBox;