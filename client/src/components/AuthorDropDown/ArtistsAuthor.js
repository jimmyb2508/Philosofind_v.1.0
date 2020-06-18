import React from 'react';
import axios from 'axios';

import '../../styles/sass/components/_authorquotes.scss';


class ArtistsAuthor extends React.Component {
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
    if (event.target.value === 'Simon Armitage') {
      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Simon Armitage`).then(res => {
        console.log(res)
        this.setState({ quotes: res.data });
      })
    } else {
      if (event.target.value === 'J.S. Bach') {
        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/J.S. Bach`).then(res => {
          console.log(res)
          this.setState({ quotes: res.data })
        })
      } else {
        if (event.target.value === 'Ludwig Van Beethoven') {
          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Ludwig Van Beethoven`).then(res => {
            console.log(res)
            this.setState({ quotes: res.data })
          })
        } else {
          if (event.target.value === 'William Blake') {
            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/William Blake`).then(res => {
              console.log(res)
              this.setState({ quotes: res.data })
            })
          } else {
            if (event.target.value === 'Frederic Chopin') {
              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Frederic Chopin`).then(res => {
                console.log(res)
                this.setState({ quotes: res.data })
              })
            } else {
              if (event.target.value === 'Kurt Cobain') {
                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Kurt Cobain`).then(res => {
                  console.log(res)
                  this.setState({ quotes: res.data })
                })
              } else {
                if (event.target.value === 'Samuel Taylor Coleridge') {
                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Samuel Taylor Coleridge`).then(res => {
                    console.log(res)
                    this.setState({ quotes: res.data })
                  })
                } else {
                  if (event.target.value === `Philip K. Dick`) {
                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Philip K. Dick`).then(res => {
                      console.log(res)
                      this.setState({ quotes: res.data })
                    })
                  } else {
                    if (event.target.value === 'Jimi Hendrix') {
                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Jimi Hendrix`).then(res => {
                        console.log(res)
                        this.setState({ quotes: res.data })
                      })
                    } else {
                      if (event.target.value === 'Ted Hughes') {
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
            <option value="Simon Armitage">Simon Armitage</option>
            <option value="J.S. Bach">J.S. Bach</option>
            <option value="Ludwig Van Beethoven">Ludwig Van Beethoven</option>
            <option value="William Blake">William Blake</option>
            <option value="Frederic Chopin">Frederic Chopin</option>
            <option value="Kurt Cobain">Kurt Cobain</option>
            <option value="Samuel Taylor Coleridge">Samuel Taylor Coleridge</option>
            <option value="Philip K. Dick">Philip K. Dick</option>
            <option value="Jimi Hendrix">Jimi Hendrix</option>
            <option value="Ted Hughes">Ted Hughes</option>
            <option value="L.S. Lowry">L.S. Lowry</option>
            <option value="Freddie Mercury">Freddie Mercury</option>
            <option value="Claude Monet">Claude Monet</option>
            <option value="George Orwell">George Orwell</option>
            <option value="Pablo Picasso">Pablo Picasso</option>
            <option value="Rembrandt Van Rijn">Rembrandt Van Rijn</option>
            <option value="John Ruskin">John Ruskin</option>
            <option value="William Shakespeare">William Shakespeare</option>
            <option value="Mary Shelley">Mary Shelley</option>
            <option value="Richard Strauss">Richard Strauss</option>
            <option value="Hunter S. Thompson">Hunter S. Thompson</option>
            <option value="J.R. Tolkein">J.R. Tolkein</option>
            <option value="Leo Tolstoy">Leo Tolstoy</option>
            <option value="Oscar Wilde">Oscar Wilde</option>
            <option value="William Wordsworth">William Wordsworth</option>
            <option value="Emile Zola">Emile Zola</option>
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

export default ArtistsAuthor;