import React, { Component } from 'react';
import Axios from 'axios';
import Button from './Button';
import { 
  FacebookShareButton, 
  TwitterShareButton
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon
 } from "react-share";

import '../styles/sass/pages/_home.scss';

const shareUrl = "https://philosofind.co.uk/"

class PhilosofindQuote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
  }

  componentDidMount() {
    this.getQuote()
  }

  getQuote() {
    let url = 'https://murmuring-depths-99830.herokuapp.com/quotes/random'

    Axios.get(url)
      .then(res => {
        let randomQuote = res.data;

        this.setState({
          quote: randomQuote['quote'],
          author: randomQuote['author']
        })
      })
  }

  getNewQuote = () => {
    this.getQuote()
  }

  render() {
    const { quote, author } = this.state
    return (
      <div id="wrapper">
        <div>
          <h1 className="randomquote">{quote} - {author}</h1>
        </div>
        <div className="buttons">
          <Button buttonDisplayName="Philosofind" clickHandler={this.getNewQuote} />
          <div className="social">
            <TwitterShareButton className="twit-social" url={shareUrl} title={quote + ' - ' + author}>
              <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
            <FacebookShareButton className="fb-social" url={shareUrl} quote={quote + ' - ' + author}>
              <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
          </div>
        </div>
      </div>
    )
  }
}

export default PhilosofindQuote;