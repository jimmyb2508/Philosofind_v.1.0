import React from 'react'
import BackgroundSlider from 'react-background-slider';
import ArtistsQuote from './ArtistsQuote';
import artistsBG from '../images/artistsBG.jpg';

import '../styles/sass/layout/_categories.scss';

const ArtistsBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
        images={[artistsBG]}
        duration={10}
        transition={3}
      />
      <div className="randomcontainer">
        <ArtistsQuote className="ArtistsQuote" />
      </div>
    </>
  )
}

export default ArtistsBox;