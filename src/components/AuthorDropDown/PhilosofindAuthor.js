import React from 'react';
import axios from 'axios';

import '../../styles/sass/components/_authorquotes.scss';

class PhilosofindAuthor extends React.Component {
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
                                        } if (event.target.value === 'Jeremy Bentham') {
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
                                                                    }     if (event.target.value === 'Simone de Beauvoir') {
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
                                                                                                                      }     if (event.target.value === 'Simon Armitage') {
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
                                                                                                                                                                      } else {
                                                                                                                                                                        if (event.target.value === 'Geoffrey Chaucer') {
                                                                                                                                                                          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Emile Zola`).then(res => {
                                                                                                                                                                            this.setState({ quotes: res.data })
                                                                                                                                                                          })
                                                                                                                                                                        }     if (event.target.value === 'Alexander Graham Bell') {
                                                                                                                                                                          axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Alexander Graham Bell`).then(res => {
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
                                                                                                                                                                                          if (event.target.value === 'Anne Wojcicki') {
                                                                                                                                                                                            axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Anne Wojcicki`).then(res => {
                                                                                                                                                                                              console.log(res)
                                                                                                                                                                                              this.setState({ quotes: res.data })
                                                                                                                                                                                            })
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (event.target.value === 'Larry Page') {
                                                                                                                                                                                              axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Larry Page`).then(res => {
                                                                                                                                                                                                this.setState({ quotes: res.data })
                                                                                                                                                                                              })
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (event.target.value === 'Michael Dell') {
                                                                                                                                                                                                axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Michael Dell`).then(res => {
                                                                                                                                                                                                  console.log(res)
                                                                                                                                                                                                  this.setState({ quotes: res.data })
                                                                                                                                                                                                })
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (event.target.value === 'Pierre Omidyar') {
                                                                                                                                                                                                  axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Pierre Omidyar`).then(res => {
                                                                                                                                                                                                    console.log(res)
                                                                                                                                                                                                    this.setState({ quotes: res.data })
                                                                                                                                                                                                  })
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (event.target.value === 'Jeff Bezos') {
                                                                                                                                                                                                    axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Jeff Bezos`).then(res => {
                                                                                                                                                                                                      console.log(res)
                                                                                                                                                                                                      this.setState({ quotes: res.data })
                                                                                                                                                                                                    })
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (event.target.value === 'Mark Zuckerberg') {
                                                                                                                                                                                                      axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Mark Zuckerberg`).then(res => {
                                                                                                                                                                                                        this.setState({ quotes: res.data })
                                                                                                                                                                                                      })
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (event.target.value === 'Gordon Moore') {
                                                                                                                                                                                                        axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/Gordon Moore`).then(res => {
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
                                                                                                                                                                                                                        }     if (event.target.value === 'Nicolaus Copernicus') {
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
            <option value="Simon Armitage">Simon Armitage</option>
            <option value="Augustine of Hippo">Augustine of Hippo</option>
            <option value="Charles Babbage">Charles Babbage</option>
            <option value="J.S. Bach">J.S. Bach</option>
            <option value="Francis Bacon">Francis Bacon</option>
            <option value="Simone de Beauvoir">Simone de Beauvoir</option>
            <option value="Ludwig Van Beethoven">Ludwig Van Beethoven</option>
            <option value="Alexander Graham Bell">Alexander Graham Bell</option>
            <option value="Daniel Bell">Daniel Bell</option>
            <option value="Jocelyn Bell Burnell">Jocelyn Bell Burnell</option>
            <option value="Jeremy Bentham">Jeremy Bentham</option>
            <option value="John Berger">John Berger</option>
            <option value="Sally Berger">Sally Berger</option>
            <option value="Tim Berners-Lee">Tim Berners-Lee</option>
            <option value="Jeff Bezos">Jeff Bezos</option>
            <option value="William Blake">William Blake</option>
            <option value="Napoleon Bonaparte">Napoleon Bonaparte</option>
            <option value="George Boole">George Boole</option>
            <option value="Gautama Buddha">Gautama Buddha</option>
            <option value="Albert Camus">Albert Camus</option>
            <option value="Rachel Carson">Rachel Carson</option>
            <option value="George Washington Carver">George Washington Carver</option>
            <option value="Geoffrey Chaucer">Geoffrey Chaucer</option>
            <option value="Frederic Chopin">Frederic Chopin</option>
            <option value="Kurt Cobain">Kurt Cobain</option>
            <option value="Jesus Christ">Jesus Christ</option>
            <option value="Confucious">Confucious</option>
            <option value="Samuel Taylor Coleridge">Samuel Taylor Coleridge</option>
            <option value="Nicolaus Copernicus">Nicolaus Copernicus</option>
            <option value="Marie Curie">Marie Curie</option>
            <option value="Charles Darwin">Charles Darwin</option>
            <option value="Richard Dawkins">Richard Dawkins</option>
            <option value="Michael Dell">Michael Dell</option>
            <option value="Democritus">Democritus</option>
            <option value="Renee Descartes">Renee Descartes</option>
            <option value="Philip K. Dick">Philip K. Dick</option>
            <option value="Albert Einstein">Albert Einstein</option>
            <option value="Friedrich Engels">Friedrich Engels</option>
            <option value="Thomas Eddison">Thomas Eddison</option>
            <option value="Epictetus">Epictetus</option>
            <option value="Epicurus">Epicurus</option>
            <option value="Euclid">Euclid</option>
            <option value="Richard Feynman">Richard Feynman</option>
            <option value="Alexander Fleming">Alexander Fleming</option>
            <option value="Benjamin J. Franklin">Benjamin J. Franklin</option>
            <option value="Rosalind Franklin">Rosalind Franklin</option>
            <option value="Sigmund Freud">Sigmund Freud</option>
            <option value="Michel Foucault">Michel Foucault</option>
            <option value="Greek Proverb">Greek Proverb</option>
            <option value="Germaine Greer">Germaine Greer</option>
            <option value="Georg Wilhelm Friedrich Hegel">Georg Wilhelm Friedrich Hegel</option>
            <option value="Galileo Galilei">Galileo Galilei</option>
            <option value="Bill Gates">Bill Gates</option>
            <option value="Ernesto 'Che' Guevara">Ernesto 'Che' Guevara</option>
            <option value="David Harvey">David Harvey</option>
            <option value="Martin Heidegger">Martin Heidegger</option>
            <option value="Jimi Hendrix">Jimi Hendrix</option>
            <option value="Thomas Hobbes">Thomas Hobbes</option>
            <option value="Dorothy Hodgkin">Dorothy Hodgkin</option>
            <option value="Edwin Hubble">Edwin Hubble</option>
            <option value="Ted Hughes">Ted Hughes</option>
            <option value="Hypatia">Hypatia</option>
            <option value="Vladimir Lenin">Vladimir Lenin</option>
            <option value="John Locke">John Locke</option>
            <option value="L.S. Lowry">L.S. Lowry</option>
            <option value="Mae Jemison">Mae Jemison</option>
            <option value="Kylie Jenner">Kylie Jenner</option>
            <option value="Johannes Kepler">Johannes Kepler</option>
            <option value="Brian Kerringham">Brian Kerringham</option>
            <option value="Steve Jobs">Steve Jobs</option>
            <option value="Katherine Johnson">Katherine Johnson</option>
            <option value="Immanuel Kant">Immanuel Kant</option>
            <option value="John F. Kennedy">John F. Kennedy</option>
            <option value="John Maynard Keynes">John Maynard Keynes</option>
            <option value="Soren Kierkegaard">Soren Kierkegaard</option>
            <option value="Rasmus Lerdorf">Rasmus Lerdorf</option>
            <option value="Ada Lovelace">Ada Lovelace</option>
            <option value="Niccolo Machiavelli">Niccolo Machiavelli</option>
            <option value="Muhammad">Muhammad</option>
            <option value="Freddie Mercury">Freddie Mercury</option>
            <option value="Marissa Meyer">Marissa Meyer</option>
            <option value="Claude Monet">Claude Monet</option>
            <option value="Gordon Moore">Gordon Moore</option>
            <option value="John Nash">John Nash</option>
            <option value="Freidrich Nietzche">Freidrich Nietzche</option>
            <option value="Pierre Omidyar">Pierre Omidyar</option>
            <option value="George Orwell">George Orwell</option>
            <option value="Larry Page">Larry Page</option>
            <option value="Blaise Pascal">Blaise Pascal</option>
            <option value="Pablo Picasso">Pablo Picasso</option>
            <option value="Plato">Plato</option>
            <option value="Protagoras">Protagoras</option>
            <option value="Pierre-Joseph Proudhon">Pierre-Joseph Proudhon</option>
            <option value="Jim Rohn">Jim Rohn</option>
            <option value="Franklin D. Roosevelt">Franklin D. Roosevelt</option>
            <option value="Jean-Jacques Rousseau">Jean-Jacques Rousseau</option>
            <option value="John Ruskin">John Ruskin</option>
            <option value="Bertrand Russell">Bertrand Russell</option>
            <option value="Carl Sagan">Carl Sagan</option>
            <option value="Jean Paul-Sartre">Jean Paul-Sartre</option>
            <option value="Joseph Schumpeter">Joseph Schumpeter</option>
            <option value="Seneca">Seneca</option>
            <option value="William Shakespeare">William Shakespeare</option>
            <option value="Mary Shelley">Mary Shelley</option>
            <option value="Adam Smith">Adam Smith</option>
            <option value="Socrates">Socrates</option>
            <option value="Gloria Steinem">Gloria Steinem</option>
            <option value="Richard Strauss">Richard Strauss</option>
            <option value="John Stuart Mill">John Stuart Mill</option>
            <option value="Hunter S. Thompson">Hunter S. Thompson</option>
            <option value="Thucydides">Thucydides</option>
            <option value="J.R. Tolkein">J.R. Tolkein</option>
            <option value="Leo Tolstoy">Leo Tolstoy</option>
            <option value="Alan Turing">Alan Turing</option>
            <option value="Lao Tzu">Lao Tzu</option>
            <option value="Rembrandt Van Rijn">Rembrandt Van Rijn</option>
            <option value="Voltaire">Voltaire</option>
            <option value="Oscar Wilde">Oscar Wilde</option>
            <option value="Ludwig Wittgenstein">Ludwig Wittgenstein</option>
            <option value="Anne Wojcicki">Anne Wojcicki</option>
            <option value="William Wordsworth">William Wordsworth</option>
            <option value="Emile Zola">Emile Zola</option>
            <option value="Mark Zuckerberg">Mark Zuckerberg</option>
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

export default PhilosofindAuthor;