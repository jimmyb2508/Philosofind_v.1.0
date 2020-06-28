import React from 'react'
import BackgroundSlider from 'react-background-slider';
import ArtistsQuote from './ArtistsQuote';
import artistsBG from '../images/artistsBG.png';
import artistsBG_2 from '../images/artistsBG_2.jpg';
import artistsBG_3 from '../images/artistsBG_3.jpg';
import artistsBG_4 from '../images/artistsBG_4.jpg';
import artistsBG_5 from '../images/artistsBG_5.jpg';
import artistsBG_6 from '../images/artistsBG_6.jpg';
import artistsBG_10 from '../images/artistsBG_10.jpg';


import '../styles/sass/layout/_categories.scss';

const ArtistsBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
        images={[artistsBG, artistsBG_2, artistsBG_3, artistsBG_4, artistsBG_5, artistsBG_6, artistsBG_10]}
        duration={10}
        transition={2}
      />
      <div className="randomcontainer">
        <ArtistsQuote className="ArtistsQuote" />
      </div>
    </>
  )
}

export default ArtistsBox;