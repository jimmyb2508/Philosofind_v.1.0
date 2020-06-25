import React from 'react';
import BackgroundSlider from 'react-background-slider';
import AncientQuote from './AncientQuote';
import ancientBG from '../images/ancientBG.jpg';
<<<<<<< HEAD
import philosofindBG from '../images/philosofindBG.jpg';
import ancientBG_3 from '../images/ancientBG_3.jpg';
import ancientBG_4 from '../images/ancientBG_4.jpg';
import ancientBG_5 from '../images/ancientBG_5.jpg';
=======
import romanBG from '../images/romanBG.jpeg';
import buddhaBG from '../images/buddhaBG.jpeg';

>>>>>>> master

import '../styles/sass/layout/_categories.scss';

const AncientBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
<<<<<<< HEAD
        images={[ancientBG, philosofindBG, ancientBG_3, ancientBG_4, ancientBG_5]}
=======
        images={[ancientBG, romanBG, buddhaBG]}
>>>>>>> master
        duration={10}
        transition={2}
      />
      <div className="randomcontainer">
        <AncientQuote className="AncientQuote" />
      </div>
    </>
  )
}

export default AncientBox;