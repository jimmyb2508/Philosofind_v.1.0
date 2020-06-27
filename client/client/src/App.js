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
import PhilosofindAuthor from './components/AuthorDropDown/PhilosofindAuthor';
import AncientAuthor from './components/AuthorDropDown/AncientAuthor';
import EnlightenmentAuthor from './components/AuthorDropDown/EnlightenmentAuthor';
import ModernAuthor from './components/AuthorDropDown/ModernAuthor';
import ArtistsAuthor from './components/AuthorDropDown/ArtistsAuthor';
import EntrepreneursAuthor from './components/AuthorDropDown/EntrepreneursAuthor';
import ScientistsAuthor from './components/AuthorDropDown/ScientistsAuthor';
import PhilosofindAllQuotes from './components/AllQuotes/PhilosofindAllQuotes';
import AncientAllQuotes from './components/AllQuotes/AncientAllQuotes';
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
import artistsBG from '../src/images/artistsBG.jpg'
import enlightenment_BG from '../src/images/enlightenment_BG.jpg'
import modernBG from '../src/images/modernBG.jpg'
import ancientBG_2 from '../src/images/ancientBG_2.jpg'
import scientistsBG from '../src/images/scientistsBG.jpg'

class App extends Component {
  render() {
    return (
      <>
        <BackgroundSlider className="background_image"
          images={[ancientBG, artistsBG, enlightenment_BG, modernBG, ancientBG_2, scientistsBG]}
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
              <div className="categories__ancient">
                <CategoriesAncient />
              </div>
            </Route>
            <Route exact path="/enlightenment">
              <div className="categories__enlightenment">
                <CategoriesEnlightenment />
              </div>
            </Route>
            <Route exact path="/modern">
              <div className="categories__modern">
                <CategoriesModern />
              </div>
            </Route>
            <Route exact path="/artists">
              <div className="categories__artists">
                <CategoriesArtists />
              </div>
            </Route>
            <Route exact path="/entrepreneurs">
              <div className="categories__entrepreneurs">
                <CategoriesEntrepreneurs />
              </div>
            </Route>
            <Route exact path="/scientists">
              <div className="categories__scientists">
                <CategoriesScientists />
              </div>
            </Route>
          </Router>
          <Router>
            <Route exact path="/">
              <div className="author__philosofind">
                <PhilosofindAuthor />
              </div>
            </Route>
            <Route exact path="/ancient">
              <div className="author__ancient">
                <AncientAuthor />
              </div>
            </Route>
            <Route exact path="/enlightenment">
              <div className="author__enlightenment">
                <EnlightenmentAuthor />
              </div>
            </Route>
            <Route exact path="/modern">
              <div className="author__modern">
                <ModernAuthor />
              </div>
            </Route>
            <Route exact path="/artists">
              <div className="author__artists">
                <ArtistsAuthor />
              </div>
            </Route>
            <Route exact path="/entrepreneurs">
              <div className="author__entrepreneurs">
                <EntrepreneursAuthor />
              </div>
            </Route>
            <Route exact path="/scientists">
              <div className="author__scientists">
                <ScientistsAuthor />
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
