import React from 'react'
import Background from '../images/entrepreneurBG.jpg';

import '../styles/App.css';

const EntrepreneurBox = () => {
    return (
      <div
      className="randomcontainer"
      style={{ 
        backgroundImage: `url(${Background})`}}>
      </div>
    )
  }

export default EntrepreneurBox;