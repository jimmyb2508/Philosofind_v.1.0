import React from 'react';
import axios from 'axios';

import '../../styles/sass/components/_authorquotes.scss';

class EnlightenmentAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      quotes: []
    }
    this.storeAuthor = this.storeAuthor.bind(this);
    this.resetDropdown = this.resetDropdown.bind(this);
  };

  componentDidMount() {
    this.handleAuthorAPI()
  }

  handleAuthorAPI() {
  }

  storeAuthor(event) {
    console.log(event.target.value);
    this.setState({
      author: event.target.value
    });
    console.log(event.target.value)
    if (event.target.value === 'Jeremy Bentham') {
      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Jeremy Bentham`).then(res => {
        console.log(res)
        this.setState({ quotes: res.data });
      })
    } else {
      if (event.target.value === 'Napoleon Bonaparte') {
        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Napoleon Bonaparte`).then(res => {
          console.log(res)
          this.setState({ quotes: res.data })
        })
      } else {
        if (event.target.value === 'Renee Descartes') {
          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Renee Descartes`).then(res => {
            console.log(res)
            this.setState({ quotes: res.data })
          })
        } else {
          if (event.target.value === 'Benjamin J. Franklin') {
            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Benjamin J. Franklin`).then(res => {
              console.log(res)
              this.setState({ quotes: res.data })
            })
          } else {
            if (event.target.value === 'Georg Wilhelm Friedrich Hegel') {
              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Georg Wilhelm Friedrich Hegel`).then(res => {
                console.log(res)
                this.setState({ quotes: res.data })
              })
            } else {
              if (event.target.value === 'Thomas Hobbes') {
                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Thomas Hobbes`).then(res => {
                  console.log(res)
                  this.setState({ quotes: res.data })
                })
              } else {
                if (event.target.value === 'John Locke') {
                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/John Locke`).then(res => {
                    console.log(res)
                    this.setState({ quotes: res.data })
                  })
                } else {
                  if (event.target.value === 'Immanuel Kant') {
                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Immanuel Kant`).then(res => {
                      console.log(res)
                      this.setState({ quotes: res.data })
                    })
                  } else {
                    if (event.target.value === 'Soren Kierkegaard') {
                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Soren Kierkegaard`).then(res => {
                        console.log(res)
                        this.setState({ quotes: res.data })
                      })
                    } else {
                      if (event.target.value === 'Niccolo Machiavelli') {
                        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Niccolo Machiavelli`).then(res => {
                          console.log(res)
                          this.setState({ quotes: res.data })
                        })
                      } else {
                        if (event.target.value === 'Jean-Jacques Rousseau') {
                          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Jean-Jacques Rousseau`).then(res => {
                            console.log(res)
                            this.setState({ quotes: res.data })
                          })
                        } else {
                          if (event.target.value === 'Adam Smith') {
                            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Adam Smith`).then(res => {
                              console.log(res)
                              this.setState({ quotes: res.data })
                            })
                          } else {
                            if (event.target.value === 'Voltaire') {
                              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Voltaire`).then(res => {
                                console.log(res)
                                this.setState({ quotes: res.data })
                              })
                            } else {
                              if (event.target.value === 'Blaise Pascal') {
                                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Blaise Pascal`).then(res => {
                                  this.setState({ quotes: res.data })
                                })
                              } else {
                                if (event.target.value === 'Francis Bacon') {
                                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Blaise Pascal`).then(res => {
                                    this.setState({ quotes: res.data})
                                  })
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  resetDropdown() {
    console.log('RESET');
    this.setState({ quotes: [] })
  }

  render() {
    return (
      <div>
        <label>
          View All Author's Quotes:
            <select
            name="type"
            value={this.state.author}
            onChange={this.storeAuthor}>
            <option value="Select Author...">Select Author...</option>
            <option value="Francis Bacon">Francis Bacon</option>
            <option value="Jeremy Bentham">Jeremy Bentham</option>
            <option value="Napoleon Bonaparte">Napoleon Bonaparte</option>
            <option value="Renee Descartes">Renee Descartes</option>
            <option value="Benjamin J. Franklin">Benjamin J. Franklin</option>
            <option value="Georg Wilhelm Friedrich Hegel">Georg Wilhelm Friedrich Hegel</option>
            <option value="Thomas Hobbes">Thomas Hobbes</option>
            <option value="John Locke">John Locke</option>
            <option value="Immanuel Kant">Immanuel Kant</option>
            <option value="Soren Kierkegaard">Soren Kierkegaard</option>
            <option value="Niccolo Machiavelli">Niccolo Machiavelli</option>
            <option value="Blaise Pascal">Blaise Pascal</option>
            <option value="Jean-Jacques Rousseau">Jean-Jacques Rousseau</option>
            <option value="Adam Smith">Adam Smith</option>
            <option value="Voltaire">Voltaire</option>
          </select>
        </label>
        <button onClick={this.resetDropdown} className="reset-dropdown">Reset</button>
        <div className="authors-quotes">
          <ul>
            {this.state.quotes.map(quote => (
              <li key={quote._id}>{quote.quote} - {quote.author}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EnlightenmentAuthor;