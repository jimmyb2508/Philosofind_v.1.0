import React from 'react'
import PhilosofindQuote from './PhilosofindQuote';

import '../styles/sass/pages/_home.scss';

const PhilosofindBox = () => {
  return (
    <>
      <div className="randomcontainer">
        <PhilosofindQuote className="PhilosofindQuote" />
      </div>
    </>
  )
}

export default PhilosofindBox;