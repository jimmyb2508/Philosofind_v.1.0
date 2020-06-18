import React from 'react';
import BackgroundSlider from 'react-background-slider';
import AncientQuote from './AncientQuote';
import ancientBG from '../images/ancientBG.jpg';

import '../styles/sass/layout/_categories.scss';

const AncientBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
        images={[ancientBG]}
        duration={10}
        transition={3}
      />
      <div className="randomcontainer">
        <AncientQuote className="AncientQuote" />
      </div>
    </>
  )
}

export default AncientBox;