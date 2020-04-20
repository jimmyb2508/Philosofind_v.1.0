import React from 'react'
import Background from '../images/enlightenmentBG.jpg';

import '../styles/App.css';

const EnlightenmentBox = () => {
    return (
      <div
      className="randomcontainer"
      style={{ 
        backgroundImage: `url(${Background})`}}>
      </div>
    )
  }

export default EnlightenmentBox;