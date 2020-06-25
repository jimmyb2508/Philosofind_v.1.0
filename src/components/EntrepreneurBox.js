import React from 'react';
import BackgroundSlider from 'react-background-slider';
import EntrepreneurQuote from './EntrepreneurQuote';
import entrepreneurBG from '../images/entrepreneurBG.jpg';

import '../styles/sass/layout/_categories.scss';

const EntrepreneurBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
        images={[entrepreneurBG]}
        duration={10}
        transition={2}
      />
      <div className="randomcontainer">
        <EntrepreneurQuote className="EntrepreneurQuote" />
      </div>
    </>
  )
}

export default EntrepreneurBox;