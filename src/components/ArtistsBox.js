import React from 'react'
import Background from '../images/artistsBG.jpg';

import '../styles/App.css';

const ArtistsBox = () => {
    return (
      <div
      className="artistscontainer"
      style={{ 
        backgroundImage: `url(${Background})`}}>
      </div>
    )
  }

export default ArtistsBox;