import React from 'react'
import BackgroundSlider from 'react-background-slider';
import ModernQuote from './ModernQuote';
import modernBG from '../images/modernBG.jpg';
import modernBG_2 from '../images/modernBG_2.jpg';
import modernBG_3 from '../images/modernBG_3.jpg';
import modernBG_4 from '../images/modernBG_4.jpg';
import modernBG_5 from '../images/modernBG_5.jpg';
import modernBG_6 from '../images/modernBG_6.jpeg';
import modernBG_7 from '../images/modernBG_7.jpg';
import modernBG_8 from '../images/modernBG_8.jpg';

import '../styles/sass/layout/_categories.scss';

const ModernBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
        images={[modernBG, modernBG_2, modernBG_3, modernBG_4, modernBG_5, modernBG_6, modernBG_6, modernBG_7, modernBG_8]}
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