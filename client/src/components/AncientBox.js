import React from 'react';
import BackgroundSlider from 'react-background-slider';
import AncientQuote from './AncientQuote';
import ancientBG from '../images/ancientBG.jpg';
import romanBG from '../images/romanBG.jpeg';
import buddhaBG from '../images/buddhaBG.jpeg';


import '../styles/sass/layout/_categories.scss';

const AncientBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
        images={[ancientBG, romanBG, buddhaBG]}
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