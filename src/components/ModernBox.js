import React from 'react'
import BackgroundSlider from 'react-background-slider';
import ModernQuote from './ModernQuote';
import modernBG from '../images/modernBG.jpg';
import modernBG_2 from '../images/modernBG_2.jpg';

import '../styles/sass/layout/_categories.scss';

const ModernBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
        images={[modernBG, modernBG_2]}
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