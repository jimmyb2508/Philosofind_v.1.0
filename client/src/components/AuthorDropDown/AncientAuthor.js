import React from 'react';
import axios from 'axios';

import '../../styles/sass/components/_authorquotes.scss';

class AncientAuthor extends React.Component {
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
    if (event.target.value === 'Plato') {
      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Plato`).then(res => {
        console.log(res)
        this.setState({ quotes: res.data });
      })
    } else {
      if (event.target.value === 'Seneca') {
        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Seneca`).then(res => {
          console.log(res)
          this.setState({ quotes: res.data })
        })
      } else {
        if (event.target.value === 'Aristotle') {
          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Aristotle`).then(res => {
            console.log(res)
            this.setState({ quotes: res.data })
          })
        } else {
          if (event.target.value === 'Socrates') {
            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Socrates`).then(res => {
              console.log(res)
              this.setState({ quotes: res.data })
            })
          } else {
            if (event.target.value === 'Jesus Christ') {
              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Jesus Christ`).then(res => {
                console.log(res)
                this.setState({ quotes: res.data })
              })
            } else {
              if (event.target.value === 'Gautama Buddha') {
                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Gautama Buddha`).then(res => {
                  console.log(res)
                  this.setState({ quotes: res.data })
                })
              } else {
                if (event.target.value === 'Alexander the Great') {
                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Alexander the Great`).then(res => {
                    console.log(res)
                    this.setState({ quotes: res.data })
                  })
                } else {
                  if (event.target.value === 'Thucydides') {
                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Thucydides`).then(res => {
                      console.log(res)
                      this.setState({ quotes: res.data })
                    })
                  } else {
                    if (event.target.value === 'Epicurus') {
                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Epicurus`).then(res => {
                        console.log(res)
                        this.setState({ quotes: res.data })
                      })
                    } else {
                      if (event.target.value === 'Democritus') {
                        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Democritus`).then(res => {
                          console.log(res)
                          this.setState({ quotes: res.data })
                        })
                      } else {
                        if (event.target.value === 'Protagoras') {
                          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Protagoras`).then(res => {
                            console.log(res)
                            this.setState({ quotes: res.data })
                          })
                        } else {
                          if (event.target.value === 'Lao Tzu') {
                            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Lao Tzu`).then(res => {
                              console.log(res)
                              this.setState({ quotes: res.data })
                            })
                          } else {
                            if (event.target.value === 'Hypatia') {
                              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Hypatia`).then(res => {
                                console.log(res)
                                this.setState({ quotes: res.data })
                              })
                            } else {
                              if (event.target.value === 'Muhammad') {
                                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Muhammad`).then(res => {
                                  console.log(res)
                                  this.setState({ quotes: res.data })
                                })
                              } else {
                                if (event.target.value === 'Greek Proverb') {
                                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Greek Proverb`).then(res => {
                                    this.setState({ quotes: res.data })
                                  })
                                } else {
                                  if (event.target.value === 'Euclid') {
                                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Euclid`).then(res => {
                                      this.setState({ quotes: res.data })
                                    })
                                  } else {
                                    if (event.target.value === 'Augustine of Hippo') {
                                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Augustine of Hippo`).then(res => {
                                        this.setState({ quotes: res.data })
                                      })
                                    } else {
                                      if (event.target.value === 'Confucious') {
                                        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Confucious`).then(res => {
                                          this.setState({ quotes: res.data })
                                        })
                                      } else {
                                        if (event.target.value === 'Epictetus') {
                                          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Epictetus`).then(res => {
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
            <option value="Alexander the Great">Alexander the Great</option>
            <option value="Aristotle">Aristotle</option>
            <option value="Augustine of Hippo">Augustine of Hippo</option>
            <option value="Confucious">Confucious</option>
            <option value="Democritus">Democritus</option>
            <option value="Epictetus">Epictetus</option>
            <option value="Epicurus">Epicurus</option>
            <option value="Euclid">Euclid</option>
            <option value="Gautama Buddha">Gautama Buddha</option>
            <option value="Greek Proverb">Greek Proverb</option>
            <option value="Hypatia">Hypatia</option>
            <option value="Jesus Christ">Jesus Christ</option>
            <option value="Lao Tzu">Lao Tzu</option>
            <option value="Muhammad">Muhammad</option>
            <option value="Plato">Plato</option>
            <option value="Protagoras">Protagoras</option>
            <option value="Seneca">Seneca</option>
            <option value="Socrates">Socrates</option>
            <option value="Thucydides">Thucydides</option>
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

export default AncientAuthor;