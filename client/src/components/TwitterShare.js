import React from 'react';
import {
  TwitterIcon
 } from "react-share";

import '../styles/sass/components/_twitter.scss';

const TwitterShare = ({ quote, author }) => {
  return (
    <>
      <div className="twitter__share">
        <a href={`https://twitter.com/intent/tweet?text= ${quote} - ${author} - philosofind.co.uk`} target="_blank" rel="noopener noreferrer" title="Post this quote on twitter!" id='tweet-quote'>
          <TwitterIcon size={32} round={true}/>
        </a>
      </div>
    </>
  )
}

export default TwitterShare;