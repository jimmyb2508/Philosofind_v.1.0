import React from 'react'
import BackgroundSlider from 'react-background-slider';
import ArtistsQuote from './ArtistsQuote';
import artistsBG from '../images/artistsBG.jpg';
import artistsBG_2 from '../images/artistsBG_2.jpg';
import artistsBG_3 from '../images/artistsBG_3.jpg';
import artistsBG_4 from '../images/artistsBG_4.jpg';
import artistsBG_5 from '../images/artistsBG_5.jpg';
import artistsBG_6 from '../images/artistsBG_6.jpg';



import '../styles/sass/layout/_categories.scss';

const ArtistsBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
        images={[artistsBG_6, artistsBG_2, artistsBG_3, artistsBG_4, artistsBG, artistsBG_5]}
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