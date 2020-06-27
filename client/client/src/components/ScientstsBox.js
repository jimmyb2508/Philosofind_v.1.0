import React from 'react'
import BackgroundSlider from 'react-background-slider';
import ScientistsQuote from './ScientistsQuote';
import scientistsBG from '../images/scientistsBG.jpg';

import '../styles/sass/layout/_categories.scss';

const ScientistsBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
        images={[scientistsBG]}
        duration={10}
        transition={2}
      />
      <div className="randomcontainer">
        <ScientistsQuote className="ScientistsQuote" />
      </div>
    </>
  )
}

export default ScientistsBox;