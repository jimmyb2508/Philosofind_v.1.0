import React from 'react'
import BackgroundSlider from 'react-background-slider';
import EnlightenmentQuote from './EnlightenmentQuote';
import philosofindBG from '../images/philosofindBG.jpg';

import '../styles/sass/layout/_categories.scss';

const EnlightenmentBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
        images={[philosofindBG]}
        duration={10}
        transition={2}
      />
      <div className="randomcontainer">
        <EnlightenmentQuote className="EnlightenmentQuote" />
      </div>
    </>
  )
}

export default EnlightenmentBox;