import React from 'react';
import axios from 'axios';

class EntrepreneursAuthor extends React.Component {
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
      if (event.target.value === 'Graham Bell') {
        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Graham Bell`).then(res => {
          console.log(res)
          this.setState({ quotes: res.data });
        })
      } else {
        if (event.target.value === 'Sally Berger') {
          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Sally Berger`).then(res => {
            console.log(res)
            this.setState({ quotes: res.data })
          })
        } else {
          if (event.target.value === 'Thomas Eddison') {
            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Thomas Eddison`).then(res => {
              console.log(res)
              this.setState({ quotes: res.data })
            })
          } else {
            if (event.target.value === 'Bill Gates') {
              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Bill Gates`).then(res => {
                console.log(res)
                this.setState({ quotes: res.data })
              })
            } else {
              if (event.target.value === 'Kylie Jenner') {
                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Kylie Jenner`).then(res => {
                  console.log(res)
                  this.setState({ quotes: res.data })
                })
              } else {
                if (event.target.value === 'Steve Jobs') {
                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Steve Jobs`).then(res => {
                    console.log(res)
                    this.setState({ quotes: res.data })
                  })
                } else {
                  if (event.target.value === 'Marissa Meyer') {
                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Marissa Meyer`).then(res => {
                      console.log(res)
                      this.setState({ quotes: res.data })
                    })
                  } else {
                    if (event.target.value === `Jim Rohn`) {
                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Jim Rohn`).then(res => {
                        console.log(res)
                        this.setState({ quotes: res.data })
                      })
                    } else {
                      if (event.target.value === 'Gloria Steinem') {
                        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Gloria Steinem`).then(res => {
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
    return(
      <div>
          <label>
            View All Author's Quotes: 
            <select
              name="type"
              value={this.state.author}
              onChange={this.storeAuthor}>
              <option value="Select Author...">Select Author...</option>
              <option value="Graham Bell">Graham Bell</option>
              <option value="Sally Berger">Sally Berger</option>
              <option value="Thomas Eddison">Thomas Eddison</option>
              <option value="Bill Gates">Bill Gates</option>
              <option value="Kylie Jenner">Kylie Jenner</option>
              <option value="Steve Jobs">Steve Jobs</option>
              <option value="Marissa Meyer">Marissa Meyer</option>
              <option value="Jim Rohn">Jim Rohn</option>
              <option value="Gloria Steinem">Gloria Steinem</option>
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

export default EntrepreneursAuthor;