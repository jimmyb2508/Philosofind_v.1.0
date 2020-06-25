import React from 'react';
import axios from 'axios';

import '../../styles/sass/components/_authorquotes.scss';

class ModernAuthor extends React.Component {
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
    if (event.target.value === 'Simone de Beauvoir') {
      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Simone de Beauvoir`).then(res => {
        console.log(res)
        this.setState({ quotes: res.data });
      })
    } else {
      if (event.target.value === 'Daniel Bell') {
        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Daniel Bell`).then(res => {
          console.log(res)
          this.setState({ quotes: res.data })
        })
      } else {
        if (event.target.value === 'John Berger') {
          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/John Berger`).then(res => {
            console.log(res)
            this.setState({ quotes: res.data })
          })
        } else {
          if (event.target.value === 'Albert Camus') {
            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Albert Camus`).then(res => {
              console.log(res)
              this.setState({ quotes: res.data })
            })
          } else {
            if (event.target.value === 'Michel Foucault') {
              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Michel Foucault`).then(res => {
                console.log(res)
                this.setState({ quotes: res.data })
              })
            } else {
              if (event.target.value === 'Sigmund Freud') {
                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Sigmund Freud`).then(res => {
                  console.log(res)
                  this.setState({ quotes: res.data })
                })
              } else {
                if (event.target.value === 'Germaine Greer') {
                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Germaine Greer`).then(res => {
                    console.log(res)
                    this.setState({ quotes: res.data })
                  })
                } else {
                  if (event.target.value === `Ernesto 'Che' Guevara`) {
                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Ernesto 'Che' Guevara`).then(res => {
                      console.log(res)
                      this.setState({ quotes: res.data })
                    })
                  } else {
                    if (event.target.value === 'David Harvey') {
                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/David Harvey`).then(res => {
                        console.log(res)
                        this.setState({ quotes: res.data })
                      })
                    } else {
                      if (event.target.value === 'Martin Heidegger') {
                        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Martin Heidegger`).then(res => {
                          console.log(res)
                          this.setState({ quotes: res.data })
                        })
                      } else {
                        if (event.target.value === 'John F. Kennedy') {
                          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/John F. Kennedy`).then(res => {
                            console.log(res)
                            this.setState({ quotes: res.data })
                          })
                        } else {
                          if (event.target.value === 'John Maynard Keynes') {
                            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/John Maynard Keynes`).then(res => {
                              console.log(res)
                              this.setState({ quotes: res.data })
                            })
                          } else {
                            if (event.target.value === 'Vladimir Lenin') {
                              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Vladimir Lenin`).then(res => {
                                console.log(res)
                                this.setState({ quotes: res.data })
                              })
                            } else {
                              if (event.target.value === 'Alain Macfarlane') {
                                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Alain Macfarlane`).then(res => {
                                  console.log(res)
                                  this.setState({ quotes: res.data })
                                })
                              } else {
                                if (event.target.value === 'Nelson Mandela') {
                                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Nelson Mandela`).then(res => {
                                    console.log(res)
                                    this.setState({ quotes: res.data })
                                  })
                                } else {
                                  if (event.target.value === 'Karl Marx') {
                                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Karl Marx`).then(res => {
                                      console.log(res)
                                      this.setState({ quotes: res.data })
                                    })
                                  } else {
                                    if (event.target.value === 'Captain Tom Moore') {
                                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Captain Tom Moore`).then(res => {
                                        console.log(res)
                                        this.setState({ quotes: res.data })
                                      })
                                    } else {
                                      if (event.target.value === 'Freidrich Nietzche') {
                                        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Freidrich Nietzche`).then(res => {
                                          console.log(res)
                                          this.setState({ quotes: res.data })
                                        })
                                      } else {
                                        if (event.target.value === 'Pierre-Joseph Proudhon') {
                                          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Pierre-Joseph Proudhon`).then(res => {
                                            console.log(res)
                                            this.setState({ quotes: res.data })
                                          })
                                        } else {
                                          if (event.target.value === 'Franklin D. Roosevelt') {
                                            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Franklin D. Roosevelt`).then(res => {
                                              console.log(res)
                                              this.setState({ quotes: res.data })
                                            })
                                          } else {
                                            if (event.target.value === 'Bertrand Russell') {
                                              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Bertrand Russell`).then(res => {
                                                console.log(res)
                                                this.setState({ quotes: res.data })
                                              })
                                            } else {
                                              if (event.target.value === 'Jean-Paul Sartre') {
                                                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Jean-Paul Sartre`).then(res => {
                                                  console.log(res)
                                                  this.setState({ quotes: res.data })
                                                })
                                              } else {
                                                if (event.target.value === 'Joseph Schumpeter') {
                                                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Joseph Schumpeter`).then(res => {
                                                    console.log(res)
                                                    this.setState({ quotes: res.data })
                                                  })
                                                } else {
                                                  if (event.target.value === 'John Stuart Mill') {
                                                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/John Stuart Mill`).then(res => {
                                                      console.log(res)
                                                      this.setState({ quotes: res.data })
                                                    })
                                                  } else {
                                                    if (event.target.value === 'Ludwig Wittgenstein') {
                                                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Ludwig Wittgenstein`).then(res => {
                                                        console.log(res)
                                                        this.setState({ quotes: res.data })
                                                      })
                                                    } else {
                                                      if (event.target.value === 'Friedrich Engels') {
                                                        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Ludwig Wittgenstein`).then(res => {
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
            <option value="Simone de Beauvoir">Simone de Beauvoir</option>
            <option value="Daniel Bell">Daniel Bell</option>
            <option value="John Berger">John Berger</option>
            <option value="Albert Camus">Albert Camus</option>
            <option value="Friedrich Engels">Friedrich Engels</option>
            <option value="Michel Foucault">Michel Foucault</option>
            <option value="Sigmund Freud">Sigmund Freud</option>
            <option value="Germaine Greer">Germaine Greer</option>
            <option value="Ernesto 'Che' Guevara">Ernesto 'Che' Guevara</option>
            <option value="David Harvey">David Harvey</option>
            <option value="Martin Heidegger">Martin Heidegger</option>
            <option value="John F. Kennedy">John F. Kennedy</option>
            <option value="John Maynard Keynes">John Maynard Keynes</option>
            <option value="Vladimir Lenin">Vladimir Lenin</option>
            <option value="Alain Macfarlane">Alain Macfarlane</option>
            <option value="Nelson Mandela">Nelson Mandela</option>
            <option value="Karl Marx">Karl Marx</option>
            <option value="Captain Tom Moore">Captain Tom Moore</option>
            <option value="Freidrich Nietzche">Freidrich Nietzche</option>
            <option value="Pierre-Joseph Proudhon">Pierre-Joseph Proudhon</option>
            <option value="Franklin D. Roosevelt">Franklin D. Roosevelt</option>
            <option value="Bertrand Russell">Bertrand Russell</option>
            <option value="Jean Paul-Sartre">Jean Paul-Sartre</option>
            <option value="Joseph Schumpeter">Joseph Schumpeter</option>
            <option value="John Stuart Mill">John Stuart Mill</option>
            <option value="Ludwig Wittgenstein">Ludwig Wittgenstein</option>
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

export default ModernAuthor;