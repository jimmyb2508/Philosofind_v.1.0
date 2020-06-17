import React from 'react'
import PhilosofindQuote from './PhilosofindQuote';

import '../styles/sass/pages/_home.scss';

const PhilosofindBox = () => {
  return (
    <React.Fragment>
      <div className="randomcontainer">
        <PhilosofindQuote className="PhilosofindQuote" />
      </div>
    </React.Fragment>
  )
}

export default PhilosofindBox;