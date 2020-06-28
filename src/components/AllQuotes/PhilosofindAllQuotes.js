import React, { Component } from 'react';
import Axios from 'axios';
import { 
  FacebookShareButton, 
  TwitterShareButton
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon
 } from "react-share";

import '../../styles/sass/components/_allquotes.scss'

const shareUrl = "https://philosofind.co.uk/"

class PhilosofindAllQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
    this.allQuotes()
  }

  allQuotes() {
    Axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes`).then(res => {
      console.log(res);
      this.setState({ quotes: res.data });
    });
  }

  getAllQuotes = () => {
    this.allQuotes()
  }

  render() {
    return (
      <div className="allquotes__wrapper">
        <ul>
          {this.state.quotes.map(quote => (
            <li className="quote_card" key={quote._id}>{quote.quote} - {quote.author}
            <br></br>
            <br></br>
            <TwitterShareButton url={shareUrl} title={quote.quote + ' - ' + quote.author}>
              <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl} quote={quote.quote + ' - ' + quote.author}>
              <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default PhilosofindAllQuotes;