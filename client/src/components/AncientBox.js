import React from 'react';
import BackgroundSlider from 'react-background-slider';
import AncientQuote from './AncientQuote';
import ancientBG from '../images/ancientBG.jpg';
import ancientBG_2 from '../images/ancientBG_2.jpg';
import ancientBG_3 from '../images/ancientBG_3.jpg';
import ancientBG_4 from '../images/ancientBG_4.jpg';
import ancientBG_5 from '../images/ancientBG_5.jpg';
import ancientBG_6 from '../images/ancientBG_6.jpg';
import ancientBG_7 from '../images/ancientBG_7.jpg';
import ancientBG_8 from '../images/ancientBG_8.jpg';

import '../styles/sass/layout/_categories.scss';

const AncientBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
        images={[ancientBG, ancientBG_2, ancientBG_3, ancientBG_4, ancientBG_5, ancientBG_6, ancientBG_7, ancientBG_8]}
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