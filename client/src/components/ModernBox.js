import React from 'react'
import BackgroundSlider from 'react-background-slider';
import ModernQuote from './ModernQuote';
import modernBG from '../images/modernBG.jpg';

import '../styles/sass/layout/_categories.scss';

const ModernBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
        images={[modernBG]}
        duration={10}
        transition={2}
      />
      <div className="randomcontainer">
        <ModernQuote className="ModernQuote" />
      </div>
    </>
  )
}

export default ModernBox;