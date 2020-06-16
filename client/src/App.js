import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { MDBBox } from 'mdbreact';
import BackgroundSlider from 'react-background-slider'
import NavBar from './components/NavBar';
import PhilosofindBox from './components/PhilosofindBox';
import AncientBox from './components/AncientBox';
import EnlightenmentBox from './components/EnlightenmentBox';
import ModernBox from './components/ModernBox';
import ArtistsBox from './components/ArtistsBox';
import EntrepreneurBox from './components/EntrepreneurBox';
import ScientistsBox from './components/ScientstsBox';
import APIBox from './components/APIBox';
import Categories from './components/Categories';
import CategoriesAncient from './components/Categories/CategoriesAncient';
import CategoriesEntrepreneurs from './components/Categories/CategoriesEntrepreneurs';
import CategoriesEnlightenment from './components/Categories/CategoriesEnlightenment';
import CategoriesModern from './components/Categories/CategoriesModern';
import CategoriesArtists from './components/Categories/CategoriesArtists';
import CategoriesScientists from './components/Categories/CategoriesScientists';
import PhilosofindAllQuotes from './components/AllQuotes/PhilosofindAllQuotes';
import AncientAllQuotes from './components/AllQuotes/AllQuotesButton';
import EnlightenmentAllQuotes from './components/AllQuotes/EnlightenmentQuotes';
import ModernAllQuotes from './components/AllQuotes/ModernAllQuotes';
import ArtistsAllQuotes from './components/AllQuotes/ArtistsAllQuotes';
import EntrepreneursAllQuotes from './components/AllQuotes/EntrepreneursAllQuotes';
import ScientistsAllQuotes from './components/AllQuotes/ScientistsAllQuotes';
import AllQuotesButton from './components/AllQuotes/AllQuotesButton';
import Wikipedia from './components/Wikipedia';
import Books from './components/Books';
import Footer from './components/Footer';


import ancientBG from '../src/images/ancientBG.jpg'
import andromedaBG from '../src/images/andromedaBG.jpeg'
import artistsBG from '../src/images/artistsBG.jpg'
import earthBG from '../src/images/earthBG.jpeg'
import enlightenmentBG from '../src/images/enlightenmentBG.jpg'
import modernBG from '../src/images/modernBG.jpg'
import moonBG from '../src/images/moonBG.jpeg'
import nebulaBG from '../src/images/nebulaBG.jpeg'
import philosofindBG from '../src/images/philosofindBG.jpg'
import romanBG from '../src/images/romanBG.jpeg'
import scientistsBG from '../src/images/scientistsBG.jpg'
import sunsetBG from '../src/images/sunsetBG.jpeg'

class App extends Component {
  render() {
    return (
      <>
        <BackgroundSlider
          images={[ancientBG, andromedaBG, artistsBG, enlightenmentBG, earthBG, modernBG, moonBG, nebulaBG, philosofindBG, romanBG, scientistsBG, sunsetBG]}
          duration={10} transition={3} />
        <div className="App">

          <div className="NavBar">
            <NavBar />
            <div className="Header">
            </div>
          </div>
          <div className="Body">
            <div className="Quotes">
              <React.Fragment>
                <MDBBox>
                  <Router>
                    <Route exact path="/">
                      <PhilosofindBox />
                    </Route>
                    <Route exact path="/ancient">
                      <AncientBox />
                    </Route>
                    <Route exact path="/enlightenment">
                      <EnlightenmentBox />
                    </Route>
                    <Route exact path="/modern">
                      <ModernBox />
                    </Route>
                    <Route exact path="/artists">
                      <ArtistsBox />
                    </Route>
                    <Route exact path="/entrepreneurs">
                      <EntrepreneurBox />
                    </Route>
                    <Route exact path="/scientists">
                      <ScientistsBox />
                    </Route>
                    <Route exact path="/api">
                      <APIBox />
                    </Route>
                  </Router>
                </MDBBox>
              </React.Fragment>
            </div>
          </div>
          <Router>
            <Route exact path="/">
              <div className="categories">
                <Categories />
              </div>
            </Route>
            <Route exact path="/ancient">
              <div className="categories-ancient">
                <CategoriesAncient />
              </div>
            </Route>
            <Route exact path="/enlightenment">
              <div className="categories-enlightenment">
                <CategoriesEnlightenment />
              </div>
            </Route>
            <Route exact path="/modern">
              <div className="categories-modern">
                <CategoriesModern />
              </div>
            </Route>
            <Route exact path="/artists">
              <div className="categories-artists">
                <CategoriesArtists />
              </div>
            </Route>
            <Route exact path="/entrepreneurs">
              <div className="categories-entrepreneurs">
                <CategoriesEntrepreneurs />
              </div>
            </Route>
            <Route exact path="/scientists">
              <div className="categories-scientists">
                <CategoriesScientists />
              </div>
            </Route>
          </Router>
          <Router>
            <Route exact path="/">
              <div className="allquote">
                <AllQuotesButton className="all-quotes-button">
                  <PhilosofindAllQuotes className="all-quotes-show" />
                </AllQuotesButton>
              </div>
            </Route>
            <Route exact path="/ancient">
              <div className="allquote">
                <AllQuotesButton className="all-quotes-button">
                  <AncientAllQuotes className="all-quotes-show" />
                </AllQuotesButton>
              </div>
            </Route>
            <Route exact path="/enlightenment">
              <div className="allquote">
                <AllQuotesButton className="all-quotes-button">
                  <EnlightenmentAllQuotes className="all-quotes-show" />
                </AllQuotesButton>
              </div>
            </Route>
            <Route exact path="/modern">
              <div className="allquote">
                <AllQuotesButton className="all-quotes-button">
                  <ModernAllQuotes className="all-quotes-show" />
                </AllQuotesButton>
              </div>
            </Route>
            <Route exact path="/artists">
              <div className="allquote">
                <AllQuotesButton className="all-quotes-button">
                  <ArtistsAllQuotes className="all-quotes-show" />
                </AllQuotesButton>
              </div>
            </Route>
            <Route exact path="/entrepreneurs">
              <div className="allquote">
                <AllQuotesButton className="all-quotes-button">
                  <EntrepreneursAllQuotes className="all-quotes-show" />
                </AllQuotesButton>
              </div>
            </Route>
            <Route exact path="/scientists">
              <div className="allquote">
                <AllQuotesButton className="all-quotes-button">
                  <ScientistsAllQuotes className="all-quotes-show" />
                </AllQuotesButton>
              </div>
            </Route>
          </Router>
          <div className="wikipedia">
            <Wikipedia />
          </div>
          <div className="google">
            <Books />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
