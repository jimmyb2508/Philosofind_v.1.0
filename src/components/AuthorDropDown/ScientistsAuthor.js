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
                        if (event.target.value === 'Richard Feynman') {
                          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Richard Feynman`).then(res => {
                            this.setState({ quotes: res.data })
                          })
                        } else {
                          if (event.target.value === 'Mae Jemison') {
                            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Mae Jemison`).then(res => {
                              console.log(res)
                              this.setState({ quotes: res.data })
                            })
                          } else {
                            if (event.target.value === 'Dorothy Hodgkin') {
                              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Dorothy Hodgkin`).then(res => {
                                this.setState({ quotes: res.data })
                              })
                            } else {
                              if (event.target.value === 'George Washington Carver') {
                                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/George Washington Carver`).then(res => {
                                  this.setState({ quotes: res.data })
                                })
                              } else {
                                if (event.target.value === 'Rachel Carson') {
                                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Rachel Carson`).then(res => {
                                    this.setState({ quotes: res.data })
                                  })
                                } else {
                                  if (event.target.value === 'Jocelyn Bell Burnell') {
                                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Jocelyn Bell Burnell`).then(res => {
                                      this.setState({ quotes: res.data })
                                    })
                                  } else {
                                    if (event.target.value === 'Rosalind Franklin') {
                                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Rosalind Franklin`).then(res => {
                                        this.setState({ quotes: res.data })
                                      })
                                    } else {
                                      if (event.target.value === 'Rasmus Lerdorf') {
                                        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Rasmus Lerdorf`).then(res => {
                                          console.log(res)
                                          this.setState({ quotes: res.data })
                                        })
                                      } else {
                                        if (event.target.value === 'Brian Kerringham') {
                                          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Brian Kerringham`).then(res => {
                                            console.log(res)
                                            this.setState({ quotes: res.data })
                                          })
                                        } else {
                                          if (event.target.value === 'Tim Berners-Lee') {
                                            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Tim Berners-Lee`).then(res => {
                                              console.log(res)
                                              this.setState({ quotes: res.data })
                                            })
                                          } else {
                                            if (event.target.value === 'Katherine Johnson') {
                                              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Katherine Johnson`).then(res => {
                                                this.setState({ quotes: res.data })
                                              })
                                            } else {
                                              if (event.target.value === 'Ada Lovelace') {
                                                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Ada Lovelace`).then(res => {
                                                  this.setState({ quotes: res.data })
                                                })
                                              } else {
                                                if (event.target.value === 'Charles Babbage') {
                                                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Charles Babbage`).then(res => {
                                                    this.setState({ quotes: res.data })
                                                  })
                                                } else {
                                                  if (event.target.value === 'George Boole') {
                                                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/George Boole`).then(res => {
                                                      this.setState({ quotes: res.data })
                                                    })
                                                  } else {
                                                    if (event.target.value === 'Alexander Fleming') {
                                                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Alexander Fleming`).then(res => {
                                                        this.setState({ quotes: res.data })
                                                      })
                                                    } else {
                                                      if (event.target.value === 'Charles Darwin') {
                                                        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Alexander Fleming`).then(res => {
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
            <option value="Charles Babbage">Charles Babbage</option>
            <option value="Tim Berners-Lee">Tim Berners-Lee</option>
            <option value="Jocelyn Bell Burnell">Jocelyn Bell Burnell</option>
            <option value="George Boole">George Boole</option>
            <option value="Rachel Carson">Rachel Carson</option>
            <option value="George Washington Carver">George Washington Carver</option>
            <option value="Nicolaus Copernicus">Nicolaus Copernicus</option>
            <option value="Marie Curie">Marie Curie</option>
            <option value="Charles Darwin">Charles Darwin</option>
            <option value="Richard Dawkins">Richard Dawkins</option>
            <option value="Albert Einstein">Albert Einstein</option>
            <option value="Alexander Fleming">Alexander Fleming</option>
            <option value="Richard Feynman">Richard Feynman</option>
            <option value="Rosalind Franklin">Rosalind Franklin</option>
            <option value="Galileo Galilei">Galileo Galilei</option>
            <option value="Dorothy Hodgkin">Dorothy Hodgkin</option>
            <option value="Edwin Hubble">Edwin Hubble</option>
            <option value="Mae Jemison">Mae Jemison</option>
            <option value="Katherine Johnson">Katherine Johnson</option>
            <option value="Johannes Kepler">Johannes Kepler</option>
            <option value="Brian Kerringham">Brian Kerringham</option>
            <option value="Rasmus Lerdorf">Rasmus Lerdorf</option>
            <option value="Ada Lovelace">Ada Lovelace</option>
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