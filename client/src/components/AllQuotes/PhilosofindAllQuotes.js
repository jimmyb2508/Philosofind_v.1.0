import React, { Component } from 'react';
import Axios from 'axios';

import '../../styles/sass/components/_allquotes.scss'

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
            <li key={quote._id}>{quote.quote} - {quote.author}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default PhilosofindAllQuotes;