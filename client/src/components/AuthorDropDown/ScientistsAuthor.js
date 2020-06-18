import React from 'react';
import axios from 'axios';

import '../../styles/sass/components/_authorquotes.scss';

class ScientistsAuthor extends React.Component {
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
    if (event.target.value === 'Nicolaus Copernicus') {
      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Nicolaus Copernicus`).then(res => {
        console.log(res)
        this.setState({ quotes: res.data });
      })
    } else {
      if (event.target.value === 'Marie Curie') {
        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Marie Curie`).then(res => {
          console.log(res)
          this.setState({ quotes: res.data })
        })
      } else {
        if (event.target.value === 'Richard Dawkins') {
          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Richard Dawkins`).then(res => {
            console.log(res)
            this.setState({ quotes: res.data })
          })
        } else {
          if (event.target.value === 'Albert Einstein') {
            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Albert Einstein`).then(res => {
              console.log(res)
              this.setState({ quotes: res.data })
            })
          } else {
            if (event.target.value === 'Galileo Galilei') {
              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Galileo Galilei`).then(res => {
                console.log(res)
                this.setState({ quotes: res.data })
              })
            } else {
              if (event.target.value === 'Edwin Hubble') {
                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Edwin Hubble`).then(res => {
                  console.log(res)
                  this.setState({ quotes: res.data })
                })
              } else {
                if (event.target.value === 'Johannes Kepler') {
                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Johannes Kepler`).then(res => {
                    console.log(res)
                    this.setState({ quotes: res.data })
                  })
                } else {
                  if (event.target.value === `John Nash`) {
                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/John Nash`).then(res => {
                      console.log(res)
                      this.setState({ quotes: res.data })
                    })
                  } else {
                    if (event.target.value === 'Carl Sagan') {
                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Carl Sagan`).then(res => {
                        console.log(res)
                        this.setState({ quotes: res.data })
                      })
                    } else {
                      if (event.target.value === 'Alan Turing') {
                        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Ted Hughes`).then(res => {
                          console.log(res)
                          this.setState({ quotes: res.data })
                        })
                      } else {
                        if (event.target.value === 'L.S. Lowry') {
                          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/L.S. Lowry`).then(res => {
                            console.log(res)
                            this.setState({ quotes: res.data })
                          })
                        } else {
                          if (event.target.value === 'Freddie Mercury') {
                            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Freddie Mercury`).then(res => {
                              console.log(res)
                              this.setState({ quotes: res.data })
                            })
                          } else {
                            if (event.target.value === 'Claude Monet') {
                              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Claude Monet`).then(res => {
                                console.log(res)
                                this.setState({ quotes: res.data })
                              })
                            } else {
                              if (event.target.value === 'George Orwell') {
                                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/George Orwell`).then(res => {
                                  console.log(res)
                                  this.setState({ quotes: res.data })
                                })
                              } else {
                                if (event.target.value === 'Pablo Picasso') {
                                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Pablo Picasso`).then(res => {
                                    console.log(res)
                                    this.setState({ quotes: res.data })
                                  })
                                } else {
                                  if (event.target.value === 'Rembrandt Van Rijn') {
                                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Rembrandt Van Rijn`).then(res => {
                                      console.log(res)
                                      this.setState({ quotes: res.data })
                                    })
                                  } else {
                                    if (event.target.value === 'John Ruskin') {
                                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/John Ruskin`).then(res => {
                                        console.log(res)
                                        this.setState({ quotes: res.data })
                                      })
                                    } else {
                                      if (event.target.value === 'William Shakespeare') {
                                        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/William Shakespeare`).then(res => {
                                          console.log(res)
                                          this.setState({ quotes: res.data })
                                        })
                                      } else {
                                        if (event.target.value === 'Mary Shelley') {
                                          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Mary Shelley`).then(res => {
                                            console.log(res)
                                            this.setState({ quotes: res.data })
                                          })
                                        } else {
                                          if (event.target.value === 'Richard Strauss') {
                                            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Richard Strauss`).then(res => {
                                              console.log(res)
                                              this.setState({ quotes: res.data })
                                            })
                                          } else {
                                            if (event.target.value === 'Hunter S. Thompson') {
                                              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Hunter S. Thompson`).then(res => {
                                                console.log(res)
                                                this.setState({ quotes: res.data })
                                              })
                                            } else {
                                              if (event.target.value === 'J.R. Tolkein') {
                                                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/J.R. Tolkein`).then(res => {
                                                  console.log(res)
                                                  this.setState({ quotes: res.data })
                                                })
                                              } else {
                                                if (event.target.value === 'Oscar Wilde') {
                                                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Oscar Wilde`).then(res => {
                                                    console.log(res)
                                                    this.setState({ quotes: res.data })
                                                  })
                                                } else {
                                                  if (event.target.value === 'William Wordsworth') {
                                                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/William Wordsworth`).then(res => {
                                                      console.log(res)
                                                      this.setState({ quotes: res.data })
                                                    })
                                                  } else {
                                                    if (event.target.value === 'Emile Zola') {
                                                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Emile Zola`).then(res => {
                                                        console.log(res)
                                                        this.setState({ quotes: res.data })
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
            <option value="Nicolaus Copernicus">Nicolaus Copernicus</option>
            <option value="Marie Curie">Marie Curie</option>
            <option value="Richard Dawkins">Richard Dawkins</option>
            <option value="Albert Einstein">Albert Einstein</option>
            <option value="Galileo Galilei">Galileo Galilei</option>
            <option value="Edwin Hubble">Edwin Hubble</option>
            <option value="Johannes Kepler">Johannes Kepler</option>
            <option value="John Nash">John Nash</option>
            <option value="Carl Sagan">Carl Sagan</option>
            <option value="Alan Turing">Alan Turing</option>
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

export default ScientistsAuthor;